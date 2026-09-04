/* ─────────────────────────────────────────────────────────────
   LOOPLO FEED - ÉN KILDE FOR BEGGE FEEDS.
   Redigér KUN denne liste. Ét objekt pr. LinkedIn-opslag.

   ai: true   -> vises BÅDE på Kobling (alle) og på AI-feedet
   ai: false  -> vises KUN på Kobling (alle)

   Kobling (kobling.html) = ALLE opslag. AI (ai.html) = kun ai:true.
   date: ISO (ÅÅÅÅ-MM-DD). Nyeste sorteres automatisk øverst. Viser de 10 seneste.

   url: FULD opslags-URL (deep link). Hentes paa LinkedIn: de tre prikker paa opslaget
        -> "Kopier link til opslag". Formen er:
        https://www.linkedin.com/posts/jacobfalkentorp_slug-activity-7301234567890123456-abcd
        Man kan ogsaa noejes med at skrive aktivitets-id'et alene, fx "7301234567890123456",
        saa bygger siden selv URL'en. Aabnes paa mobil springer den direkte ind i LinkedIn-appen.
   - url = PLACEHOLDER indtil de faktiske links er indsat.
   - ai-flag = mit skøn ud fra domæne. Ret hvor det er forkert.
   - et par datoer er anslået hvor trackeren kun gav måned (markeret // ca.).
   ───────────────────────────────────────────────────────────── */
window.POSTS = [
  {
    date: "2026-09-03", ai: true,
    title: "Fem AI-initiativer. Ingen i drift.",
    body: "Bestyrelsen har godkendt fem AI-initiativer. Tocifrede millioner er brugt. Og ingen kan sætte noget i drift. Det er ikke et kapabilitetsproblem - domænerne blev finansieret, koblingerne imellem dem blev ikke.",
    tags: "#Looplo",
    url: "https://www.linkedin.com/in/jacobfalkentorp/"   // TODO: indsæt aktivitets-id
  },
  {
    date: "2026-08-31", ai: true,
    title: "Generativ AI kan skrive alt. Derfor betyder det næsten ingenting.",
    body: "Modellen udfører. Den formulerer. Men velskrevet var før et tegn på, at nogen havde tænkt sig om - og det tegn er nu gratis at producere. Kvalitetssikring, der bestod i at læse om noget lød rigtigt, kontrollerer ingenting.",
    tags: "#Looplo",
    url: "7499907342722031616"
  },
  {
    date: "2026-09-01", ai: true,
    title: "Suverænitet koster teknologisk modenhed",
    body: "Digital suverænitet er en trappe, ikke ja eller nej. De fleste data skal ikke helt op - at tvinge alt mod øverste trin koster unødig modenhed. Det svære er at vide hvad der skal ligge hvor, og at nogen ejer overblikket på tværs af de fem domæner. Overblikket kan ikke lejes.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-08-26", ai: true,
    title: "En maskine, der kontrollerer om en anden maskine gjorde arbejdet ordentligt",
    body: "Behavior specs checker mod et opslagsværk - men kun det der allerede står skrevet. Organisationens egen model findes ikke og skal graves frem. Man skal lukke for vandet før man tørrer op.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-07-31", ai: false,
    title: "Det, der blev knapt",
    body: "Når produktionen bliver billig, bliver sammenhængen dyr. Hvert domæne kan melde grønt, mens helheden skrider - fordi ingen ejer koblingerne imellem dem.",
    tags: "#Looplo", url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-25", ai: false,
    title: "Vi bliver tit spurgt, hvad vi egentlig laver",
    body: "Kort sagt: vi hjælper med det der ligger mellem domænerne. Værdi og risiko samler sig i koblingerne, ikke inde i de enkelte dele.",
    tags: "#Looplo", url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-18", ai: false, // ca. (trackeren: juli, sommerserie 1/3)
    title: "Vi hjælper med at håndtere koblingerne",
    body: "Kort til værdi: en trekvarters snak, en workshoprække efter behov, og løbende koblingsejerskab. Vi sælger ikke det vi måler.",
    tags: "#Looplo", url: "https://www.linkedin.com/company/looplo"
  },
  {
    date: "2026-07-10", ai: true,
    title: "Når signalet bliver gratis, kollapser processen der byggede på det",
    body: "Når AI gør et signal gratis at producere, holder de processer op med at virke, som stiltiende regnede med at signalet var dyrt. Proxy-erkendelsen bliver et bestyrelsesspørgsmål.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-26", ai: true,
    title: "AI op 13 procent, tillid ned 18 procent",
    body: "Anvendelsen stiger, mens tilliden falder. Forskellen er trust ambiguity: uden psykologisk tryghed forbliver det uklart hvad man kan stole på - og AI forstærker uklarheden i stedet for at fjerne den.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-25", ai: false,
    title: "AI lander ikke på budgettet - den lander på de tværgående afhængigheder",
    body: "Enig i diagnosen, men vægten ligger et andet sted: fem ligeværdige domæner, inklusive det menneskelige. Et er søkort at forstå, et andet skib at føre. Hvem ejer de tværgående afhængigheder?",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-22", ai: false,
    title: "Da USA trak stikket, opdagede Europa hvor lidt vi ejer",
    body: "En suspendering var nok til at vise afhængigheden. Suverænitet er ikke et politisk slogan, men et spørgsmål om hvem der ejer koblingerne, når adgangen kan lukkes udefra.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-13", ai: false,
    title: "Når en kapabilitet kan slukkes af et dekret, er det en suverænitetsrisiko",
    body: "Amerikansk eksportkontrol gjorde det konkret: en evne du ikke ejer, kan forsvinde ved en beslutning truffet et andet sted. Det er en kobling, ingen på dansk jord har hånd om.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-06-12", ai: false,
    title: "BI er box-shaped, intelligens er netværk-shaped",
    body: "Men netværket stopper ikke ved data - de sværeste kanter går på tværs af domæner. Til sidst handler det om hvem der ejer sammenhængen, ikke om hvor dataene ligger.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-05-28", ai: true,
    title: "LLM i en nøddeskal: modellen forstærker den dømmekraft I bringer ind",
    body: "Præcise spørgsmål giver brugbart materiale. Uklare giver overbevisende svar, der føles færdige uden at være det. Beslutning og ansvar forbliver jeres.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-05-27", ai: false,
    title: "50 CEOer nikkede - men det svære er koblingerne og kadencen",
    body: "Enigheden om isbjerget er nem. Det svære ligger under vandlinjen: afhængighederne mellem domænerne og tempoet de skal spille sammen i. Der ender arbejdet på en bygherrerolle.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-04-28", ai: true,
    title: "Netcompany put AI in the peloton - but it starts with architecture",
    body: "AI kommer ikke i mål på egen hånd. Det starter med den arkitektur, der afgør om modellen kobler til det den skal - data, ansvar og organisationsdesign under vandlinjen.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  },
  {
    date: "2026-03-22", ai: false,
    title: "EU chips, RISC-V og Zero Trust starter ved silicium",
    body: "Suverænitet begynder længere nede end de fleste tror. Uden kontrol over det underliggende lag er tilliden lånt - og en lånt tillid kan opsiges.",
    tags: "#Looplo", url: "https://www.linkedin.com/in/jacobfalkentorp/"
  }
];
