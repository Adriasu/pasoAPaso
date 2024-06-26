import { datajunkFood } from "./data.js";

const button = document.getElementsByTagName("button")
const divGreen = document.getElementById("box2")

button[0].addEventListener("click", () => {
    divGreen.style.visibility === "hidden"
    ? (divGreen.style.visibility = "visible")
    : (divGreen.style.visibility = "hidden");
})

const card = document.createElement("section")
const containImg = document.createElement("div")
const img = document.createElement("img")
const textContain = document.createElement("div")
const textName = document.createElement("h1")
const textPrice = document.createElement("p")
const buttonCard = document.createElement("button")

document.querySelector("body").appendChild(card);
card.appendChild(containImg)
containImg.appendChild(img)
card.appendChild(textContain)
textContain.appendChild(textName)
textContain.appendChild(textPrice)
card.appendChild(buttonCard)

containImg.id = "containImg"
textContain.id = "textContain"

img.src ="https://azure-images.cluvi.com/images-mini/bTYBpU17RS/w_1200_bTYBpU17RS_perro_loco.jpg"
textName.innerHTML = "Happy Meal"
textPrice.innerHTML = "4.7 €"
buttonCard.innerHTML = "Button"

