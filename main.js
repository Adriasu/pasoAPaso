import { datajunkFood } from "./data.js";

const button = document.getElementById("btnShowHide");
const divGreen = document.getElementById("box2");

button.addEventListener("click", () => {
  divGreen.style.display === "flex"
    ? ((divGreen.style.display = "none"), (button.innerHTML = "Mostrar"))
    : ((divGreen.style.display = "flex"), (button.innerHTML = "Ocultar"));
});

const cardsContain = document.getElementById("cardsContain");
const boxConteinSelectedProducts = document.getElementById("box2");
const divConteinArraySelectedProducts = document.getElementById(
  "divConteinArraySelectedProducts"
);
const btnClear = document.getElementById("btnClear");
const selectedProducts = [];

boxConteinSelectedProducts.appendChild(divConteinArraySelectedProducts);
boxConteinSelectedProducts.appendChild(btnClear);

btnClear.innerHTML = "CLEAR";

btnClear.addEventListener("click", () => {
  selectedProducts.splice(0, selectedProducts.length);
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
      count: 1
    };

    const productCount = selectedProducts.reduce((acc, product) => {
      if (product.id === result.id) {
        product.count++
        return true
      }
    }, false)

    console.log(productCount);

    if (!productCount) {
      selectedProducts.push(result);
    }

    selectedProducts.push(result);

    // const resultArray = [result];

    // const productCount = selectedProducts.reduce((acc, product) => {
    //   acc[product.id] = (acc[product.id] || 1) + 1;
    //   return acc;
    // }, {});

    // console.log(productCount);

    // const resultProductCount = Object.keys(productCount).map((id) => ({
    //   id,
    //   count: productCount[id],
    // }));

    // console.log(resultProductCount);

    // // if (resultProductCount.length() === 0) {
    // //   selectedProducts.push(result);
    // // }
    // if (
    //   resultArray[0].id ===
    //   resultProductCount.forEach((product) => {
    //     product.id;
    //   })
    // ) {
    //   console.log("son iguales");
    // } else {
    //   selectedProducts.push(result);
    // }

    // //selectedProducts.push(result);

    // console.log(selectedProducts);

    selectedProducts.forEach((newProduct) => {
      const card = document.createElement("section");
      const containImg = document.createElement("div");
      const img = document.createElement("img");
      const textContain = document.createElement("div");
      const textName = document.createElement("h1");
      const textPrice = document.createElement("p");
      const containCounterBtn = document.createElement("div");
      const buttonCard = document.createElement("img");
      const counter = document.createElement("p");

      divConteinArraySelectedProducts.appendChild(card);
      card.appendChild(containImg);
      containImg.appendChild(img);
      card.appendChild(textContain);
      textContain.appendChild(textName);
      textContain.appendChild(textPrice);
      card.appendChild(containCounterBtn);
      containCounterBtn.appendChild(counter);
      containCounterBtn.appendChild(buttonCard);

      card.id = "cardSelected";
      containImg.id = "containImgSelected";
      textContain.id = "textContain";
      buttonCard.id = "btnDelete";
      containCounterBtn.id = "containCounterBtn";

      img.src = newProduct.img;
      textName.innerHTML = newProduct.productName;
      textPrice.innerHTML = `${newProduct.price} €`;
      buttonCard.src =
        "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
      counter.innerHTML = "1";

      buttonCard.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();
      });
    });
  });
});
