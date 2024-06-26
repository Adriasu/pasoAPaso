function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
 


  // const card = document.createElement("section")
// const containImg = document.createElement("div")
// const img = document.createElement("img")
// const textContain = document.createElement("div")
// const textName = document.createElement("h1")
// const textPrice = document.createElement("p")
// const buttonCard = document.createElement("button")

// document.querySelector("body").appendChild(card);
// card.appendChild(containImg)
// containImg.appendChild(img)
// card.appendChild(textContain)
// textContain.appendChild(textName)
// textContain.appendChild(textPrice)
// card.appendChild(buttonCard)

// containImg.id = "containImg"
// textContain.id = "textContain"

// img.src ="https://azure-images.cluvi.com/images-mini/bTYBpU17RS/w_1200_bTYBpU17RS_perro_loco.jpg"
// textName.innerHTML = "Happy Meal"
// textPrice.innerHTML = "4.7 €"
// buttonCard.innerHTML = "Button"