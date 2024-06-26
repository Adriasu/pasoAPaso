import { datajunkFood } from "./data.js";

const button = document.getElementsByTagName("button");
const divGreen = document.getElementById("box2");

button[0].addEventListener("click", () => {
  divGreen.style.visibility === "hidden"
    ? (divGreen.style.visibility = "visible")
    : (divGreen.style.visibility = "hidden");
});

const cardsContain = document.getElementById("cardsContain");

datajunkFood.forEach((food) => {
  const card = document.createElement("section");
  const containImg = document.createElement("div");
  const img = document.createElement("img");
  const textContain = document.createElement("div");
  const textName = document.createElement("h1");
  const textPrice = document.createElement("p");
  const buttonCard = document.createElement("button");

  cardsContain.appendChild(card);
  card.appendChild(containImg);
  containImg.appendChild(img);
  card.appendChild(textContain);
  textContain.appendChild(textName);
  textContain.appendChild(textPrice);
  card.appendChild(buttonCard);

  containImg.id = "containImg";
  textContain.id = "textContain";

  img.src = food.img;
  textName.innerHTML = food.productName;
  textPrice.innerHTML = `${food.price} €`;
  buttonCard.innerHTML = "Button";

  buttonCard.addEventListener("click", () => {
    const result = {
        img: food.img,
        productName: food.productName,
        price: food.price
    }
    console.log(result);
  })
});
