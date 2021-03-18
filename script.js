const cards = document.querySelector(".cards");

const presentation = [
  {
    name: "Bastien",
    picture: "./img/bastien.jpg"
  },
  {
    name: "Thomas",
    picture: "./img/Thomas.jpg"
  },]
  

function createCard(title, image) {
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

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Témoignage";
  cardBody.appendChild(cardButton);
}

 let i = 0;

for (i in presentation) {
  createCard(presentation[i].name, presentation[i].picture);
}

console.log(cards);
