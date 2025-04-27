const questions = [
  {
    question: "Jaki jest minimalny wymiar ochronny szczupaka?",
    options: ["45 cm", "50 cm", "55 cm"],
    correctAnswer: "45 cm",
  },
  {
    question: "W jakim okresie obowiązuje zakaz połowu sandacza?",
    options: [
      "Od 1 stycznia do 30 czerwca",
      "Od 1 kwietnia do 31 maja",
      "Od 15 maja do 15 lipca",
    ],
    correctAnswer: "Od 1 kwietnia do 31 maja",
  },
  {
    question: "Czy można spinningować w okresie ochronnym szczupaka?",
    options: [
      "Tak, ale tylko w rzece",
      "Nie, spinningowanie jest zabronione",
      "Tak, wszędzie bez ograniczeń",
    ],
    correctAnswer: "Nie, spinningowanie jest zabronione",
  },
  {
    question: "Ile wędek można używać w wędkarstwie spławikowym z brzegu?",
    options: ["Jednej wędki", "Dwóch wędek", "Trzech wędek"],
    correctAnswer: "Dwóch wędek",
  },
  {
    question: "Co oznacza znak zakazu wędkowania?",
    options: [
      "Zakaz połowu ryb",
      "Tylko dla członków PZW",
      "Obowiązek stosowania haczyków bezzadziorowych",
    ],
    correctAnswer: "Zakaz połowu ryb",
  },
  {
    question: "Minimalny wymiar ochronny okonia w wodach śródlądowych wynosi:",
    options: ["Brak wymiaru", "15 cm", "18 cm"],
    correctAnswer: "Brak wymiaru",
  },
  {
    question: "Zakaz połowu szczupaka obowiązuje w okresie:",
    options: [
      "1 stycznia - 30 kwietnia",
      "1 marca - 30 kwietnia",
      "1 kwietnia - 31 maja",
    ],
    correctAnswer: "1 stycznia - 30 kwietnia",
  },
  {
    question: "Minimalny wymiar ochronny węgorza to:",
    options: ["50 cm", "60 cm", "70 cm"],
    correctAnswer: "60 cm",
  },
  {
    question: "Ile wynosi limit dobowy połowu leszcza?",
    options: ["10 sztuk", "5 sztuk", "Brak limitu"],
    correctAnswer: "Brak limitu",
  },
  {
    question: "W jakiej sytuacji należy bezwzględnie wypuścić złowioną rybę?",
    options: [
      "Jeśli jest pod ochroną",
      "Jeśli jest mniejsza od wymiaru",
      "W obu przypadkach",
    ],
    correctAnswer: "W obu przypadkach",
  },
  {
    question: "Minimalny wymiar ochronny sandacza wynosi:",
    options: ["45 cm", "50 cm", "60 cm"],
    correctAnswer: "50 cm",
  },
  {
    question: "Okres ochronny bolenia trwa:",
    options: [
      "Od 1 stycznia do 30 kwietnia",
      "Od 1 kwietnia do 31 maja",
      "Od 15 marca do 30 kwietnia",
    ],
    correctAnswer: "Od 1 stycznia do 30 kwietnia",
  },
  {
    question:
      "Czy wędkarz musi posiadać przy sobie kartę wędkarską podczas łowienia?",
    options: ["Tak", "Nie", "Tylko na wodach PZW"],
    correctAnswer: "Tak",
  },
  {
    question: "Minimalny wymiar ochronny suma to:",
    options: ["70 cm", "90 cm", "100 cm"],
    correctAnswer: "70 cm",
  },
  {
    question: "Wędkarz powinien utrzymywać czystość na stanowisku wędkarskim:",
    options: [
      "Przed rozpoczęciem wędkowania",
      "Po zakończeniu",
      "Zawsze, przed i po",
    ],
    correctAnswer: "Zawsze, przed i po",
  },
  {
    question: "Wymiar ochronny lina wynosi:",
    options: ["20 cm", "25 cm", "30 cm"],
    correctAnswer: "25 cm",
  },
  {
    question: "Czy do połowu ryb można używać prądu elektrycznego?",
    options: ["Tak, z pozwoleniem", "Nie", "Tylko w rzekach"],
    correctAnswer: "Nie",
  },
  {
    question: "Zakaz połowu miętusa trwa w okresie:",
    options: [
      "Od 1 grudnia do końca lutego",
      "Od 1 listopada do 31 stycznia",
      "Od 1 stycznia do 31 marca",
    ],
    correctAnswer: "Od 1 grudnia do końca lutego",
  },
  {
    question: "Minimalny wymiar ochronny karpia w wodach PZW to:",
    options: ["30 cm", "35 cm", "40 cm"],
    correctAnswer: "35 cm",
  },
  {
    question: "Czy wędkarz może zabrać złowionego karpia powyżej 5 kg?",
    options: ["Tak", "Nie", "Tylko po wpisaniu do rejestru"],
    correctAnswer: "Nie",
  },
  {
    question: "Czy można łowić ryby z łodzi w nocy?",
    options: [
      "Tak, zawsze",
      "Nie, jest to zabronione",
      "Tylko na specjalnych wodach",
    ],
    correctAnswer: "Tylko na specjalnych wodach",
  },
  {
    question: "Minimalny wymiar ochronny klenia to:",
    options: ["25 cm", "30 cm", "35 cm"],
    correctAnswer: "30 cm",
  },
  {
    question: "Okres ochronny pstrąga potokowego trwa:",
    options: [
      "Od 1 września do 31 grudnia",
      "Od 1 października do 28 lutego",
      "Od 1 listopada do 31 marca",
    ],
    correctAnswer: "Od 1 października do 28 lutego",
  },
  {
    question: "Czy można łowić ryby pod lodem metodą spinningową?",
    options: ["Tak", "Nie", "Tylko na rzekach"],
    correctAnswer: "Nie",
  },
  {
    question: "Minimalny wymiar ochronny troci wędrownej to:",
    options: ["50 cm", "60 cm", "70 cm"],
    correctAnswer: "60 cm",
  },
  {
    question: "Co oznacza obowiązek wpisu ryby do rejestru?",
    options: [
      "Wpisujemy złowione ryby po zakończeniu połowu",
      "Wpisujemy rybę natychmiast po złowieniu",
      "Nie trzeba wpisywać",
    ],
    correctAnswer: "Wpisujemy rybę natychmiast po złowieniu",
  },
  {
    question: "Minimalny wymiar ochronny brzany to:",
    options: ["40 cm", "45 cm", "50 cm"],
    correctAnswer: "40 cm",
  },
  {
    question:
      "Czy można używać przynęt sztucznych do połowu ryb spokojnego żeru?",
    options: ["Tak", "Nie", "Tylko z pozwoleniem"],
    correctAnswer: "Tak",
  },
  {
    question: "Kiedy ryby są szczególnie wrażliwe na stres związany z połowem?",
    options: ["Podczas tarła", "Podczas zimowania", "Zawsze"],
    correctAnswer: "Podczas tarła",
  },
  {
    question: "Minimalny wymiar ochronny wzdręgi to:",
    options: ["15 cm", "18 cm", "20 cm"],
    correctAnswer: "15 cm",
  },
  {
    question: "Czy wędkarz ma obowiązek posiadać przy sobie siatkę na ryby?",
    options: ["Tak", "Nie", "Tylko przy połowie karpi"],
    correctAnswer: "Tak",
  },
  {
    question: "Jakie jest minimalne nacięcie żyłki do połowu ryb karpiowatych?",
    options: ["0,10 mm", "0,20 mm", "0,25 mm"],
    correctAnswer: "0,20 mm",
  },
  {
    question: "Minimalny wymiar ochronny amura to:",
    options: ["Brak wymiaru", "50 cm", "60 cm"],
    correctAnswer: "Brak wymiaru",
  },
  {
    question: "Minimalny wymiar ochronny szczupaka w rzekach wynosi:",
    options: ["45 cm", "50 cm", "55 cm"],
    correctAnswer: "50 cm",
  },
  {
    question: "Czy można łowić ryby w parkach narodowych?",
    options: ["Tak, z pozwoleniem", "Nie", "Tylko na specjalnych wodach"],
    correctAnswer: "Nie",
  },
  {
    question: "Co oznacza termin 'no kill' w wędkarstwie?",
    options: [
      "Łowienie ryb bez zabijania ich",
      "Łowienie tylko małych ryb",
      "Obowiązek łowienia wyłącznie na sztuczne przynęty",
    ],
    correctAnswer: "Łowienie ryb bez zabijania ich",
  },
  {
    question: "Minimalny wymiar ochronny jazia to:",
    options: ["25 cm", "30 cm", "35 cm"],
    correctAnswer: "25 cm",
  },
  {
    question: "Czy w wodach górskich można stosować żywą rybkę jako przynętę?",
    options: ["Tak", "Nie", "Tylko w określonych terminach"],
    correctAnswer: "Nie",
  },
  {
    question: "Minimalny wymiar ochronny głowacicy to:",
    options: ["60 cm", "70 cm", "90 cm"],
    correctAnswer: "70 cm",
  },
  {
    question: "Czy można wędkować podczas zakwitu sinic?",
    options: ["Tak", "Nie", "Zależy od temperatury wody"],
    correctAnswer: "Tak",
  },
  {
    question: "Minimalny wymiar ochronny troci jeziorowej to:",
    options: ["50 cm", "60 cm", "70 cm"],
    correctAnswer: "50 cm",
  },
  {
    question: "W jakiej odległości od zapory wodnej obowiązuje zakaz połowu?",
    options: ["50 m", "100 m", "200 m"],
    correctAnswer: "50 m",
  },
  {
    question: "Czy można łowić ryby w czasie silnych powodzi?",
    options: ["Tak", "Nie", "Tylko na jeziorach"],
    correctAnswer: "Nie",
  },
  {
    question:
      "Jak należy traktować ryby złowione przypadkowo podczas okresu ochronnego?",
    options: [
      "Wypuścić natychmiast",
      "Przechować w siatce",
      "Wypuścić po zakończeniu wędkowania",
    ],
    correctAnswer: "Wypuścić natychmiast",
  },
  {
    question: "Jakie dokumenty powinien posiadać wędkarz podczas połowu?",
    options: [
      "Tylko karta wędkarska",
      "Karta wędkarska i zezwolenie na połów",
      "Karta wędkarska, zezwolenie na połów i dowód osobisty",
    ],
    correctAnswer: "Karta wędkarska i zezwolenie na połów",
  },
  {
    question: "W jakim okresie obowiązuje zakaz połowu pstrąga potokowego?",
    options: [
      "Od 1 października do 28 lutego",
      "Od 1 listopada do 31 marca",
      "Od 1 stycznia do 30 kwietnia",
    ],
    correctAnswer: "Od 1 października do 28 lutego",
  },
  {
    question: "Czy wędkarz może łowić ryby w nocy bez specjalnego zezwolenia?",
    options: [
      "Tak, zawsze",
      "Nie, jest to zabronione",
      "Tylko na wodach specjalnych",
    ],
    correctAnswer: "Tylko na wodach specjalnych",
  },
  {
    question:
      "Czy wędkarz ma obowiązek przechowywać złowione ryby w odpowiednich warunkach?",
    options: ["Tak, zawsze", "Nie", "Tylko w przypadku ryb chronionych"],
    correctAnswer: "Tak, zawsze",
  },
  {
    question: "Jaki jest okres ochronny węgorza?",
    options: [
      "Od 1 marca do 31 maja",
      "Od 1 stycznia do 30 kwietnia",
      "Od 1 września do 28 lutego",
    ],
    correctAnswer: "Od 1 stycznia do 30 kwietnia",
  },
  {
    question:
      "Czy wędkarz może łowić ryby przy użyciu przynęt naturalnych i sztucznych jednocześnie?",
    options: [
      "Tak, bez żadnych ograniczeń",
      "Nie, to jest zabronione",
      "Tylko w określonych wodach",
    ],
    correctAnswer: "Nie, to jest zabronione",
  },
  {
    question: "W jakim okresie obowiązuje zakaz połowu szczupaka w rzekach?",
    options: [
      "Od 1 stycznia do 30 kwietnia",
      "Od 1 marca do 30 kwietnia",
      "Od 1 kwietnia do 31 maja",
    ],
    correctAnswer: "Od 1 stycznia do 30 kwietnia",
  },
  {
    question: "Czy wędkarz może korzystać z sieci rybackich podczas połowów?",
    options: [
      "Tak, z odpowiednim pozwoleniem",
      "Nie",
      "Tak, ale tylko w wodach morskich",
    ],
    correctAnswer: "Nie",
  },
  {
    question:
      "Czy wędkarz ma obowiązek wypuszczenia ryby, która jest pod ochroną, nawet jeśli jest większa niż minimalny wymiar ochronny?",
    options: ["Tak, zawsze", "Nie", "Tylko w przypadku gatunków chronionych"],
    correctAnswer: "Tak, zawsze",
  },
  {
    question: "W jakim okresie obowiązuje zakaz połowu sandacza?",
    options: [
      "Od 1 stycznia do 30 czerwca",
      "Od 1 kwietnia do 31 maja",
      "Od 1 sierpnia do 30 września",
    ],
    correctAnswer: "Od 1 kwietnia do 31 maja",
  },
  {
    question: "Czy wędkarz może wędkować na jeziorze z użyciem łodzi?",
    options: [
      "Tak, zawsze",
      "Nie, tylko na rzekach",
      "Tak, ale tylko na wodach specjalnych",
    ],
    correctAnswer: "Tak, zawsze",
  },
  {
    question: "Czy wędkarz ma obowiązek dokumentowania złowionych ryb?",
    options: [
      "Tak, w każdym przypadku",
      "Nie, tylko w przypadku ryb chronionych",
      "Tak, ale tylko w przypadku dużych ryb",
    ],
    correctAnswer: "Tak, w każdym przypadku",
  },
  {
    question: "Czy wędkarz może łowić ryby w rezerwatach przyrody?",
    options: [
      "Tak, z pozwoleniem",
      "Nie, w ogóle nie można",
      "Tak, ale tylko na specjalnych wodach",
    ],
    correctAnswer: "Tak, z pozwoleniem",
  },
  {
    question:
      "Jakie jest maksymalne dopuszczalne stężenie azotanów w wodach przeznaczonych do połowu ryb?",
    options: ["5 mg/l", "10 mg/l", "15 mg/l"],
    correctAnswer: "10 mg/l",
  },
];
