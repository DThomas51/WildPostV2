const cards = document.querySelector(".cards");

const presentation = [
  {
    name: "Bastien",
    picture: "./img/bastien.jpg",
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
  cardSum.classList.add("card-modal");
  cardDetails.appendChild(cardSum);
  
  
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = `${text}`;
  cardDetails.appendChild(cardText);

}

let i = 0;

for (i in presentation) {
  createCard(presentation[i].name, presentation[i].picture, presentation[i].text);
}

