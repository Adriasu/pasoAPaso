import { datajunkFood } from "./data.js";

const button = document.getElementById("btnShowHide");
const divGreen = document.getElementById("box2");

button.addEventListener("click", () => {
  divGreen.style.visibility === "visible"
    ? (divGreen.style.visibility = "hidden" ) 
    : (divGreen.style.visibility = "visible" )
});

const cardsContain = document.getElementById("cardsContain");
const boxConteinSelectedProducts = document.getElementById("box2");
const divConteinArraySelectedProducts = document.createElement("div")
const btnClear = document.createElement("button")
const selectedProducts = [];

boxConteinSelectedProducts.appendChild(divConteinArraySelectedProducts)
boxConteinSelectedProducts.appendChild(btnClear)


btnClear.innerHTML = "CLEAR"

btnClear.addEventListener("click", () => {
  divConteinArraySelectedProducts.innerHTML = "";
});

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
    divConteinArraySelectedProducts.innerHTML = "";
    const result = {
      img: food.img,
      productName: food.productName,
      price: food.price,
      id: food.id,
    };
    selectedProducts.push(result);

    selectedProducts.forEach((newProduct) => {
      const card = document.createElement("section");
      const containImg = document.createElement("div");
      const img = document.createElement("img");
      const textContain = document.createElement("div");
      const textName = document.createElement("h1");
      const textPrice = document.createElement("p");
      const buttonCard = document.createElement("img");

      divConteinArraySelectedProducts.appendChild(card);
      card.appendChild(containImg);
      containImg.appendChild(img);
      card.appendChild(textContain);
      textContain.appendChild(textName);
      textContain.appendChild(textPrice);
      card.appendChild(buttonCard);

      card.id = "cardSelected";
      containImg.id = "containImgSelected";
      textContain.id = "textContain";
      buttonCard.id = "btnDelete";

      img.src = newProduct.img;
      textName.innerHTML = newProduct.productName;
      textPrice.innerHTML = `${newProduct.price} €`;
      buttonCard.src =
        "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
      buttonCard.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  });
});

