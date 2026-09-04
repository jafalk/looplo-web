<?php
/* looplo.com/modtag.php
   Modtager en krypteret blob. Serveren kan IKKE laese indholdet.
   Kun indehaveren af den private noegle kan dekryptere.
   GET  = selvtest (viser om PHP koerer og hvor der kan skrives)
   POST = modtag blob */

header('Content-Type: application/json; charset=utf-8');

function blob_dir() {
    $kandidater = array(
        __DIR__ . '/../_blobs',
        __DIR__ . '/_blobs',
    );
    foreach ($kandidater as $d) {
        if (!is_dir($d)) { @mkdir($d, 0700, true); }
        if (is_dir($d) && is_writable($d)) {
            $ht = $d . '/.htaccess';
            if (!file_exists($ht)) {
                @file_put_contents($ht, "Require all denied\nDeny from all\n");
            }
            return $d;
        }
    }
    return null;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $d = blob_dir();
    echo json_encode(array(
        'php'       => PHP_VERSION,
        'skrivbar'  => $d ? true : false,
        'placering' => $d ? basename(dirname($d)) . '/' . basename($d) : null,
        'antal'     => ($d && is_readable($d . '/henvendelser.jsonl'))
                        ? count(file($d . '/henvendelser.jsonl', FILE_SKIP_EMPTY_LINES)) : 0,
        'mail'      => function_exists('mail'),
    ), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array('ok' => false, 'kode' => 'metode'));
    exit;
}

$raw = file_get_contents('php://input');
if (strlen($raw) > 20000) {
    http_response_code(413);
    echo json_encode(array('ok' => false, 'kode' => 'stor'));
    exit;
}

$d = json_decode($raw, true);
if (!$d || empty($d['ek']) || empty($d['iv']) || empty($d['ct'])) {
    http_response_code(400);
    echo json_encode(array('ok' => false, 'kode' => 'format'));
    exit;
}
foreach (array('ek', 'iv', 'ct') as $k) {
    if (!preg_match('/^[A-Za-z0-9+\/=]+$/', $d[$k])) {
        http_response_code(400);
        echo json_encode(array('ok' => false, 'kode' => 'tegn'));
        exit;
    }
}

$dir = blob_dir();
if ($dir === null) {
    http_response_code(500);
    echo json_encode(array('ok' => false, 'kode' => 'mappe'));
    exit;
}

$f   = $dir . '/henvendelser.jsonl';
$rec = array('tid' => gmdate('c'), 'ek' => $d['ek'], 'iv' => $d['iv'], 'ct' => $d['ct']);

$fh = @fopen($f, 'a');
if (!$fh) {
    http_response_code(500);
    echo json_encode(array('ok' => false, 'kode' => 'skriv'));
    exit;
}
flock($fh, LOCK_EX);
fwrite($fh, json_encode($rec, JSON_UNESCAPED_SLASHES) . "\n");
flock($fh, LOCK_UN);
fclose($fh);
@chmod($f, 0600);

$antal = @count(@file($f, FILE_SKIP_EMPTY_LINES));
$krop  = "Der er modtaget en ny henvendelse via looplo.com.\n\n"
       . "Tidspunkt: " . gmdate('Y-m-d H:i') . " UTC\n"
       . "I alt i koen: " . $antal . "\n\n"
       . "Indholdet er krypteret og fremgaar ikke af denne mail.\n"
       . "Hent henvendelser.jsonl og kor laes_henvendelser.py for at laese den.\n";
@mail('jacob@falkentorp.dk', 'Looplo: ny henvendelse', $krop,
      "From: Looplo <no-reply@looplo.com>\r\nContent-Type: text/plain; charset=UTF-8");

echo json_encode(array('ok' => true));
