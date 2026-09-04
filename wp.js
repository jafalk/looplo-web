/* looplo.com/wp.js - white paper-popup med klient-side kryptering.
   Sprog vaelges automatisk ud fra <html lang>. modtag.php skal ligge ved siden af denne fil. */
(function(){
var PUB="MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAkXtC2ve86glLlz4052w0Vj28S2zvkq4M0/jDSF0SiQ439JyDFVtCvznJ83XV1g29INH2PTYaTyp0GxMt1F1+la1vCJfe+3Z1lJExMOt2+XD6ZPZZYfrJiPbgOOryyeVmtkdHfm2n+KzN/to+kDNu2b62eE30rC933tofJaJnTc0/rfX9MDg9N00o7L6XRnMLaoO0pqij5mhNlWBFWav1+yqcb90EEyYuFDo63GIQEZFX/ztQsOeFSzhd4VWL8G50U9hDkHhSraLket+XmsyVE2OVW3gBhgGaM69NnV/cEg/1W+pYRhMVwdsOzntK3jJAI68w8dMOVpzyS9rtWLzI50tw2Np9XSzxIoZBcHB4VY665+B1TVjh2jrZE/JWnRvmQLl6C1b3BVmkQv+vcBMh7oq0Lz36eqQzTbX+R/yya6uEpN5npdAm9B2nwE0iK9pAbeYmvT53VM92/SchG81u84qZe8u8rFpfrBqZUD9iRZapB5hz09sqLQ7oxEdqfPMVs6fZFeks+Cd/I7OVS3Oj+rnSBNzuBmFn6WSgPhHAc1aXR1EJCjf7DezWeFznMPpfq512KFCDmqUuohOjtmtECnvvef8yMFaMbu5m+JQ33n/tHWTGeuNT0nIrVVyZp6ERtLsBSnM0TaT/qLhSTx0BvXnWCf5hItQJMyN5gKbLuHUCAwEAAQ==";

var IND=[
 {v:"EA + AI: Semantisk lag",p:"EA + AI",
  t:{da:"Semantisk lag",en:"Semantic layer",de:"Semantische Schicht",nl:"Semantische laag",no:"Semantisk lag",sv:"Semantiskt lager"}},
 {v:"EA + Hyper Scale: Landing zones & platform-governance",p:"EA + Hyper Scale",
  t:{da:"Landing zones & platform-governance",en:"Landing zones & platform governance",de:"Landing Zones & Plattform-Governance",nl:"Landing zones & platform-governance",no:"Landing zones & plattform-governance",sv:"Landing zones & plattforms-governance"}},
 {v:"EA + Zero Trust: Trust boundaries",p:"EA + Zero Trust",
  t:{da:"Trust boundaries som arkitekturmønster",en:"Trust boundaries as architectural pattern",de:"Trust Boundaries als Architekturmuster",nl:"Trust boundaries als architectuurpatroon",no:"Trust boundaries som arkitekturmønster",sv:"Trust boundaries som arkitekturmönster"}},
 {v:"EA + EQ: Arkitektur-ejerskab / ansvarskæde",p:"EA + EQ",
  t:{da:"Arkitektur-ejerskab / ansvarskæde",en:"Architecture ownership / accountability chain",de:"Architektur-Eigentum / Verantwortungskette",nl:"Architectuureigenaarschap / verantwoordingsketen",no:"Arkitektur-eierskap / ansvarskjede",sv:"Arkitekturägarskap / ansvarskedja"}},
 {v:"Hyper Scale + Zero Trust: Identity som samlende perimeter",p:"Hyper Scale + Zero Trust",
  t:{da:"Identity som samlende perimeter",en:"Identity as unifying perimeter",de:"Identity als verbindender Perimeter",nl:"Identity als verbindende perimeter",no:"Identity som samlende perimeter",sv:"Identity som samlande perimeter"}},
 {v:"Hyper Scale + AI: Elastisk compute / MLOps",p:"Hyper Scale + AI",
  t:{da:"Elastisk compute / MLOps-platform",en:"Elastic compute / MLOps platform",de:"Elastic Compute / MLOps-Plattform",nl:"Elastic compute / MLOps-platform",no:"Elastisk compute / MLOps-plattform",sv:"Elastisk compute / MLOps-plattform"}},
 {v:"Hyper Scale + EQ: Toil-reduktion via IaC & rollback",p:"Hyper Scale + EQ",
  t:{da:"Toil-reduktion via IaC & rollback",en:"Toil reduction via IaC & rollback",de:"Toil-Reduktion durch IaC & Rollback",nl:"Toil-reductie via IaC & rollback",no:"Toil-reduksjon via IaC & rollback",sv:"Toil-reduktion via IaC & rollback"}},
 {v:"Zero Trust + AI: Model governance & databeskyttelse",p:"Zero Trust + AI",
  t:{da:"Model governance & databeskyttelse",en:"Model governance & data protection",de:"Model Governance & Datenschutz",nl:"Model governance & gegevensbescherming",no:"Model governance & databeskyttelse",sv:"Model governance & dataskydd"}},
 {v:"Zero Trust + EQ: Blamefree security-kultur",p:"Zero Trust + EQ",
  t:{da:"Blamefree security-kultur",en:"Blame-free security culture",de:"Blamefreie Sicherheitskultur",nl:"Blamefree securitycultuur",no:"Blamefree sikkerhetskultur",sv:"Blamefree säkerhetskultur"}},
 {v:"AI + EQ: Shared accountability",p:"AI + EQ",
  t:{da:"Shared accountability for probabilistisk output",en:"Shared accountability for probabilistic output",de:"Geteilte Verantwortung für probabilistische Ergebnisse",nl:"Gedeelde verantwoordelijkheid voor probabilistische output",no:"Delt ansvar for probabilistisk output",sv:"Delat ansvar för probabilistisk output"}}
];

var DOK=[
 {v:"Kobling white paper",k:"wp1",
  t:{da:["Kobling","white paper: Værdien ligger i koblingerne"],en:["Coupling","white paper: Value Lives in the Couplings"],de:["Kopplung","White Paper: Der Wert liegt in den Kopplungen"],nl:["Koppeling","white paper: De waarde zit in de koppelingen"],no:["Kobling","white paper: Verdien ligger i koblingene"],sv:["Koppling","white paper: Värdet ligger i kopplingarna"]}},
 {v:"Enterprise AI white paper",k:"wp2",
  t:{da:["Enterprise AI","white paper: Modellen ved ikke, hvad I mener"],en:["Enterprise AI","white paper: The Model Does Not Know What You Mean"],de:["Enterprise AI","White Paper: Das Modell weiß nicht, was Sie meinen"],nl:["Enterprise AI","white paper: Het model weet niet wat u bedoelt"],no:["Enterprise AI","white paper: Modellen vet ikke hva dere mener"],sv:["Enterprise AI","white paper: Modellen vet inte vad ni menar"]}},
 {v:"Kobling exec summary",k:"ex1",
  t:{da:["Kobling","exec summary: Modenhed og koblinger"],en:["Coupling","exec summary: Maturity and couplings"],de:["Kopplung","Exec Summary: Reife und Kopplungen"],nl:["Koppeling","exec summary: Volwassenheid en koppelingen"],no:["Kobling","exec summary: Modenhet og koblinger"],sv:["Koppling","exec summary: Mognad och kopplingar"]}},
 {v:"Enterprise AI exec summary",k:"ex2",
  t:{da:["Enterprise AI","exec summary: Ansvarlig AI"],en:["Enterprise AI","exec summary: Responsible AI"],de:["Enterprise AI","Exec Summary: Verantwortungsvolle KI"],nl:["Enterprise AI","exec summary: Verantwoorde AI"],no:["Enterprise AI","exec summary: Ansvarlig AI"],sv:["Enterprise AI","exec summary: Ansvarsfull AI"]}}
];

var T={
 da:{h:"Få vores materiale",s:"Udfyld, så sender vi det.",navn:"Navn",mail:"Email",li:"LinkedIn-profil",hint:"Udfyld mindst én, så vi kan sende dig materialet.",rolle:"Rolle",titel:"Titel / andet",arb:"Arbejder med eller overvejer",dok:"Hvad vil du have tilsendt?",sam:"Ja tak, I må sende mig materialet og kontakte mig om det.",send:"Send",sender:"Sender...",annul:"Annuller",eNavn:"Skriv dit navn.",eKontakt:"Udfyld email eller LinkedIn - mindst én.",eMail:"Skriv en gyldig email.",eRolle:"Vælg din rolle.",eDok:"Vælg mindst ét dokument.",eSam:"Sæt flueben i samtykke.",eFejl:"Kunne ikke sende lige nu. Prøv igen senere.",okH:"Tak!",okS:"Anmodningen er sendt krypteret. Vi vender tilbage med materialet.",luk:"Luk"},
 en:{h:"Get our material",s:"Fill in and we will send it.",navn:"Name",mail:"Email",li:"LinkedIn profile",hint:"Fill in at least one so we can send you the material.",rolle:"Role",titel:"Title / other",arb:"Working on or considering",dok:"What would you like to receive?",sam:"Yes, you may send me the material and contact me about it.",send:"Send",sender:"Sending...",annul:"Cancel",eNavn:"Enter your name.",eKontakt:"Enter email or LinkedIn - at least one.",eMail:"Enter a valid email.",eRolle:"Choose your role.",eDok:"Choose at least one document.",eSam:"Please tick consent.",eFejl:"Could not send right now. Please try again later.",okH:"Thank you!",okS:"Your request was sent encrypted. We will get back to you with the material.",luk:"Close"},
 de:{h:"Unser Material erhalten",s:"Ausfüllen, wir senden es Ihnen zu.",navn:"Name",mail:"E-Mail",li:"LinkedIn-Profil",hint:"Mindestens eines ausfüllen, damit wir das Material senden können.",rolle:"Rolle",titel:"Titel / anderes",arb:"Beschäftigt sich mit oder erwägt",dok:"Was möchten Sie erhalten?",sam:"Ja, Sie dürfen mir das Material senden und mich dazu kontaktieren.",send:"Senden",sender:"Wird gesendet...",annul:"Abbrechen",eNavn:"Bitte Namen eingeben.",eKontakt:"E-Mail oder LinkedIn angeben - mindestens eines.",eMail:"Bitte gültige E-Mail eingeben.",eRolle:"Bitte Rolle wählen.",eDok:"Bitte mindestens ein Dokument wählen.",eSam:"Bitte Einwilligung ankreuzen.",eFejl:"Senden derzeit nicht möglich. Bitte später erneut versuchen.",okH:"Danke!",okS:"Ihre Anfrage wurde verschlüsselt gesendet. Wir melden uns mit dem Material.",luk:"Schließen"},
 nl:{h:"Ontvang ons materiaal",s:"Vul in, dan sturen we het toe.",navn:"Naam",mail:"E-mail",li:"LinkedIn-profiel",hint:"Vul er minstens één in zodat we het materiaal kunnen sturen.",rolle:"Rol",titel:"Functie / anders",arb:"Werkt aan of overweegt",dok:"Wat wilt u ontvangen?",sam:"Ja, u mag mij het materiaal sturen en hierover contact opnemen.",send:"Versturen",sender:"Bezig...",annul:"Annuleren",eNavn:"Vul uw naam in.",eKontakt:"Vul e-mail of LinkedIn in - minstens één.",eMail:"Vul een geldig e-mailadres in.",eRolle:"Kies uw rol.",eDok:"Kies minstens één document.",eSam:"Vink toestemming aan.",eFejl:"Versturen lukt nu niet. Probeer het later opnieuw.",okH:"Dank u!",okS:"Uw aanvraag is versleuteld verzonden. We komen bij u terug met het materiaal.",luk:"Sluiten"},
 no:{h:"Få materialet vårt",s:"Fyll ut, så sender vi det.",navn:"Navn",mail:"E-post",li:"LinkedIn-profil",hint:"Fyll ut minst én, så vi kan sende deg materialet.",rolle:"Rolle",titel:"Tittel / annet",arb:"Jobber med eller vurderer",dok:"Hva vil du få tilsendt?",sam:"Ja takk, dere kan sende meg materialet og kontakte meg om det.",send:"Send",sender:"Sender...",annul:"Avbryt",eNavn:"Skriv navnet ditt.",eKontakt:"Fyll ut e-post eller LinkedIn - minst én.",eMail:"Skriv en gyldig e-post.",eRolle:"Velg rollen din.",eDok:"Velg minst ett dokument.",eSam:"Kryss av for samtykke.",eFejl:"Kunne ikke sende nå. Prøv igjen senere.",okH:"Takk!",okS:"Forespørselen ble sendt kryptert. Vi kommer tilbake med materialet.",luk:"Lukk"},
 sv:{h:"Få vårt material",s:"Fyll i, så skickar vi det.",navn:"Namn",mail:"E-post",li:"LinkedIn-profil",hint:"Fyll i minst en, så vi kan skicka materialet.",rolle:"Roll",titel:"Titel / annat",arb:"Arbetar med eller överväger",dok:"Vad vill du få skickat?",sam:"Ja tack, ni får skicka mig materialet och kontakta mig om det.",send:"Skicka",sender:"Skickar...",annul:"Avbryt",eNavn:"Skriv ditt namn.",eKontakt:"Fyll i e-post eller LinkedIn - minst en.",eMail:"Skriv en giltig e-post.",eRolle:"Välj din roll.",eDok:"Välj minst ett dokument.",eSam:"Kryssa i samtycke.",eFejl:"Kunde inte skicka just nu. Försök igen senare.",okH:"Tack!",okS:"Din förfrågan skickades krypterad. Vi återkommer med materialet.",luk:"Stäng"}
};

var lang=(document.documentElement.lang||"da").slice(0,2).toLowerCase();
if(!T[lang])lang="da";
var t=T[lang];

// modtag.php ligger ved siden af denne fil
var me=document.currentScript?document.currentScript.src:"";
var ENDPOINT=me?me.replace(/[^\/]*$/,"")+"modtag.php":"modtag.php";

var css='.lwp-ov{position:fixed;inset:0;background:rgba(15,46,54,.55);display:none;align-items:flex-start;justify-content:center;padding:20px;z-index:9999;overflow-y:auto}'
+'.lwp-ov.open{display:flex}.lwp-m{background:#EEF1EE;color:#0F2E36;border-radius:16px;max-width:460px;width:100%;padding:26px;margin:auto;box-shadow:0 24px 60px rgba(0,0,0,.28);font-family:"IBM Plex Sans",system-ui,sans-serif;line-height:1.55}'
+'.lwp-m h3{font-family:"Space Grotesk",system-ui;font-weight:700;font-size:22px;margin:0 0 4px;color:#0F2E36}'
+'.lwp-sub{margin:0 0 18px;color:#3C5760;font-size:14px}.lwp-f{margin:0 0 13px}.lwp-f label{display:block;font-size:13px;font-weight:600;margin:0 0 5px}'
+'.lwp-f input{width:100%;padding:11px 13px;border:1px solid rgba(15,46,54,.14);border-radius:9px;font:inherit;font-size:15px;background:#fff;color:#0F2E36;box-sizing:border-box}'
+'.lwp-g{font-family:"Space Grotesk",system-ui;font-weight:600;font-size:14px;margin:16px 0 8px}'
+'.lwp-r{display:flex;gap:8px;flex-wrap:wrap}.lwp-r label{flex:1;min-width:88px;text-align:center;border:1px solid rgba(15,46,54,.14);border-radius:9px;padding:9px 6px;font-size:14px;cursor:pointer;background:#fff}'
+'.lwp-r input{display:none}.lwp-r input:checked+span{font-weight:600;color:#C2791C}'
+'.lwp-c{display:flex;gap:9px;align-items:flex-start;margin:0 0 7px;font-size:13.5px;color:#3C5760;cursor:pointer;line-height:1.4}'
+'.lwp-c input{margin-top:2px;flex:none;width:16px;height:16px;accent-color:#C2791C}.lwp-c b{color:#0F2E36;font-weight:600}'
+'.lwp-a{display:flex;gap:10px;margin-top:18px}.lwp-send{flex:1;background:#C2791C;color:#fff;border:none;border-radius:10px;padding:12px 20px;font-family:"Space Grotesk",system-ui;font-weight:600;font-size:15px;cursor:pointer}'
+'.lwp-x{background:none;border:1px solid rgba(15,46,54,.14);color:#0F2E36;border-radius:10px;padding:12px 18px;font-family:"Space Grotesk",system-ui;font-weight:600;font-size:15px;cursor:pointer}'
+'.lwp-e{color:#b23b2e;font-size:13px;margin:8px 0 0;display:none}.lwp-ok{display:none;text-align:center;padding:8px 0}'
+'.lwp-hr{border:none;border-top:1px solid rgba(15,46,54,.14);margin:16px 0 4px}.lwp-hint{margin:6px 0 0;font-size:12.5px;color:#8FA9A6}';

function esc(x){return String(x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

var built=false,ov;
function build(){
 if(built)return;built=true;
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var ih='';
 IND.forEach(function(o,i){ih+='<label class="lwp-c"><input type="checkbox" class="lwp-ind" data-v="'+esc(o.v)+'"> <span><b>'+esc(o.p)+'</b> - '+esc(o.t[lang]||o.t.da)+'</span></label>';});
 var dh='';
 DOK.forEach(function(o,i){var tr=o.t[lang]||o.t.da;dh+='<label class="lwp-c"><input type="checkbox" class="lwp-dok" data-v="'+esc(o.v)+'"'+(i===0?' checked':'')+'> <span><b>'+esc(tr[0])+'</b> - '+esc(tr[1])+'</span></label>';});
 ov=document.createElement('div');ov.className='lwp-ov';
 ov.innerHTML='<div class="lwp-m" role="dialog" aria-modal="true"><div class="lwp-form">'
 +'<h3>'+esc(t.h)+'</h3><p class="lwp-sub">'+esc(t.s)+'</p>'
 +'<div class="lwp-f"><label>'+esc(t.navn)+'</label><input type="text" class="lwp-navn" autocomplete="name"></div>'
 +'<div class="lwp-f"><label>'+esc(t.mail)+'</label><input type="email" class="lwp-mail" autocomplete="email"></div>'
 +'<div class="lwp-f"><label>'+esc(t.li)+'</label><input type="text" class="lwp-li" placeholder="linkedin.com/in/..."><p class="lwp-hint">'+esc(t.hint)+'</p></div>'
 +'<div class="lwp-g">'+esc(t.rolle)+'</div><div class="lwp-r">'
 +'<label><input type="radio" name="lwprolle" value="Board"><span>Board</span></label>'
 +'<label><input type="radio" name="lwprolle" value="Boss"><span>Boss</span></label>'
 +'<label><input type="radio" name="lwprolle" value="Consultant"><span>Consultant</span></label></div>'
 +'<input type="text" class="lwp-rt" placeholder="'+esc(t.titel)+'" style="width:100%;margin-top:8px;padding:11px 13px;border:1px solid rgba(15,46,54,.14);border-radius:9px;font:inherit;font-size:15px;background:#fff;box-sizing:border-box">'
 +'<div class="lwp-g">'+esc(t.arb)+'</div>'+ih
 +'<hr class="lwp-hr"><div class="lwp-g">'+esc(t.dok)+'</div>'+dh
 +'<label class="lwp-c" style="margin-top:10px"><input type="checkbox" class="lwp-sam"> <span>'+esc(t.sam)+'</span></label>'
 +'<p class="lwp-e"></p><div class="lwp-a"><button type="button" class="lwp-x">'+esc(t.annul)+'</button>'
 +'<button type="button" class="lwp-send">'+esc(t.send)+'</button></div></div>'
 +'<div class="lwp-ok"><h3>'+esc(t.okH)+'</h3><p class="lwp-sub">'+esc(t.okS)+'</p>'
 +'<button type="button" class="lwp-x" style="width:100%">'+esc(t.luk)+'</button></div></div>';
 document.body.appendChild(ov);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 ov.querySelectorAll('.lwp-x').forEach(function(b){b.addEventListener('click',close);});
 ov.querySelector('.lwp-send').addEventListener('click',submit);
 var rt=ov.querySelector('.lwp-rt');
 rt.addEventListener('input',function(){if(this.value.trim()){var r=ov.querySelector('input[name=lwprolle]:checked');if(r)r.checked=false;}});
 ov.querySelectorAll('input[name=lwprolle]').forEach(function(rb){rb.addEventListener('change',function(){if(this.checked)rt.value='';});});
}
function close(){if(!ov)return;ov.classList.remove('open');ov.querySelector('.lwp-form').style.display='block';
 ov.querySelector('.lwp-ok').style.display='none';ov.querySelector('.lwp-e').style.display='none';}

function b64b(b){var s=atob(b),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u.buffer;}
function bb64(b){var u=new Uint8Array(b),s='';for(var i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);return btoa(s);}

async function send(obj){
 var pt=new TextEncoder().encode(JSON.stringify(obj));
 var k=await crypto.subtle.generateKey({name:'AES-GCM',length:256},true,['encrypt']);
 var iv=crypto.getRandomValues(new Uint8Array(12));
 var ct=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},k,pt);
 var pub=await crypto.subtle.importKey('spki',b64b(PUB),{name:'RSA-OAEP',hash:'SHA-256'},false,['encrypt']);
 var ek=await crypto.subtle.encrypt({name:'RSA-OAEP'},pub,await crypto.subtle.exportKey('raw',k));
 var r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({ek:bb64(ek),iv:bb64(iv),ct:bb64(ct)})});
 if(!r.ok)throw new Error('HTTP '+r.status);
 var j=await r.json();if(!j.ok)throw new Error('afvist');
}

function submit(){
 var e=ov.querySelector('.lwp-e');
 function fail(m){e.textContent=m;e.style.display='block';}
 var navn=ov.querySelector('.lwp-navn').value.trim();
 var mail=ov.querySelector('.lwp-mail').value.trim();
 var li=ov.querySelector('.lwp-li').value.trim();
 var rEl=ov.querySelector('input[name=lwprolle]:checked');
 var rt=ov.querySelector('.lwp-rt').value.trim();
 var rolle=rEl?rEl.value:rt;
 var ind=[].slice.call(ov.querySelectorAll('.lwp-ind:checked')).map(function(c){return c.dataset.v;});
 var dok=[].slice.call(ov.querySelectorAll('.lwp-dok:checked')).map(function(c){return c.dataset.v;});
 var sam=ov.querySelector('.lwp-sam').checked;
 if(!navn)return fail(t.eNavn);
 if(!mail&&!li)return fail(t.eKontakt);
 if(mail&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail))return fail(t.eMail);
 if(!rolle)return fail(t.eRolle);
 if(!dok.length)return fail(t.eDok);
 if(!sam)return fail(t.eSam);
 var b=ov.querySelector('.lwp-send');b.disabled=true;b.textContent=t.sender;
 send({navn:navn,email:mail,linkedin:li,rolle:rolle,indgange:ind,oensker:dok,
   samtykke:true,sprog:lang,side:location.pathname,tid:new Date().toISOString()})
 .then(function(){ov.querySelector('.lwp-form').style.display='none';ov.querySelector('.lwp-ok').style.display='block';})
 .catch(function(err){b.disabled=false;b.textContent=t.send;fail(t.eFejl);console.error(err);});
}

window.looploWP=function(){build();ov.classList.add('open');};
})();
