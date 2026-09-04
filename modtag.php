<?php
/* looplo.com/insights/modtag.php
   Modtager en krypteret blob. Serveren kan IKKE laese indholdet.
   Kun indehaveren af den private noegle kan dekryptere. */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://looplo.com');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405); echo json_encode(['ok'=>false]); exit;
}

$raw = file_get_contents('php://input');
if (strlen($raw) > 20000) { http_response_code(413); echo json_encode(['ok'=>false]); exit; }

$d = json_decode($raw, true);
if (!$d || empty($d['ek']) || empty($d['iv']) || empty($d['ct'])) {
  http_response_code(400); echo json_encode(['ok'=>false]); exit;
}

// kun base64 accepteres - intet af indholdet fortolkes
foreach (['ek','iv','ct'] as $k) {
  if (!preg_match('/^[A-Za-z0-9+\/=]+$/', $d[$k])) {
    http_response_code(400); echo json_encode(['ok'=>false]); exit;
  }
}

$rec = [
  'tid' => gmdate('c'),
  'ek'  => $d['ek'],
  'iv'  => $d['iv'],
  'ct'  => $d['ct'],
];

// gemmes uden for webroot hvis muligt
$dir = __DIR__ . '/../_blobs';
if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
$f = $dir . '/henvendelser.jsonl';

$fh = @fopen($f, 'a');
if ($fh) {
  flock($fh, LOCK_EX);
  fwrite($fh, json_encode($rec, JSON_UNESCAPED_SLASHES) . "\n");
  flock($fh, LOCK_UN);
  fclose($fh);
  @chmod($f, 0600);

  /* Notifikation - INDEHOLDER BEVIDST INTET INDHOLD.
     Kun besked om at der er kommet en henvendelse. Selve dataene
     ligger krypteret i blobben og kan kun laeses med den private noegle. */
  $til   = 'jacob@falkentorp.dk';
  $emne  = 'Looplo: ny henvendelse';
  $antal = 0;
  if (is_readable($f)) { $antal = count(file($f, FILE_SKIP_EMPTY_LINES)); }
  $krop  = "Der er modtaget en ny henvendelse via looplo.com.\n\n"
         . "Tidspunkt: " . gmdate('Y-m-d H:i') . " UTC\n"
         . "I alt i koen: " . $antal . "\n\n"
         . "Indholdet er krypteret og fremgaar ikke af denne mail.\n"
         . "Hent _blobs/henvendelser.jsonl og kor laes_henvendelser.py for at laese den.\n";
  $hoved = "From: Looplo <no-reply@looplo.com>\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "X-Mailer: looplo";
  @mail($til, $emne, $krop, $hoved);

  echo json_encode(['ok'=>true]);
} else {
  http_response_code(500); echo json_encode(['ok'=>false]);
}
