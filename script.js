const cards = document.querySelector(".cards");

const presentation = [
  {
    name: "Bastien",
    picture: "./img/Bastien.jpg",
    text : "Ce que j’ai le plus aimé dès mon arrivée à l’école, c’est la diversité des profils et le cadre offert par la Wild Code School. Apprendre (à apprendre) dans cet environnement est vraiment super enrichissant!\n La cohésion entre tous les élèves est superbe, nous échangeons et nous nous aidons tous énormément ce qui permet d’avancer ensemble.\n Je sais que cette formation est un réel tremplin pour mon avenir professionnel et j’ai déjà hâte d’être en haut de la rampe pour prendre mon envol !" 
    
  },
  
  {
    name: "Thomas",
    picture: "./img/Thomas.jpg",
    text : "La Wild c'est quoi pour moi?\nC'est avant tout une grand famille qui regroupe plusieurs écoles en Europe.\nLeurs Formations de developpeur sont les meilleures qu'on puisse trouver.\nOn est super bien suivis par les formateurs que ce soit au niveau des cours ,du point de vue professionel aprés formations.\n Les cours et les quêtes sont plus que passionnant .\n Fin bref c'est les meilleurs."
  },
]

function createCard(title, image, text) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardHeader.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

  
  const cardDetails = document.createElement("details");
  cardDetails.classList.add("modal");
  cardBody.appendChild(cardDetails);
  
  
  const cardSum = document.createElement("summary");
  cardSum.classList.add("modal-trigger");
  cardSum.innerHTML = "En Savoir Plus";
  cardDetails.appendChild(cardSum);
  
  const cardText = document.createElement("p");
  cardText.classList.add("modal-content");
  cardText.innerHTML = `${text}`;
  cardDetails.appendChild(cardText);

};

let i = 0;

for (i in presentation) {
  createCard(presentation[i].name, presentation[i].picture, presentation[i].text);
};

const pubArray = [
  {
    name: "Dev",
    text : "Découvrez les communautés tech proches de chez vous, participez à des événements (mais portez un masque)",
    url: "https://www.codeur.com/freelance/reims/developpeur-web-et-mobile-freelance",
    img : "./img/pubDev.png"
  },

  {
    name: "Sacrée Tech",
    text : "Communauté Dev",
    url: "https://www.meetup.com/fr-FR/SacreeTech/",
    img : "./img/pub3.png"
  },

  {
    name: "Resto du Coin",
    text : "Les meilleurs resto de ta régions ",
    url: "https://restoducoin.com/",
    img : "./img/pub4.png"
  },

  {
    name: "Champagne ar'Dev ",
    text : "Communauté Champagne ar'Dev",
    url: "https://discord.gg/mbft3qY4q9",
    img : "./img/pub5.png"
  },
];


const pub = document.querySelector(".pub2")
const pubSrc = document.getElementById("pubsrc")

setInterval(() => {
  console.log(pub, pubSrc)
  const index = Math.floor(Math.random() * (pubArray.length))
  pub.src = `${pubArray[index].img}`;
  pubSrc.href = `${pubArray[index].url}`;
}, 3000);


