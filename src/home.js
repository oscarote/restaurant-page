import pizzaSign from "./pizzasign.jpg";

export default function createHome() {
    const main = document.createElement("main");
    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "mainContent";

    const firstPara = document.createElement("p");
    firstPara.innerText = "The best pizza that you will ever try";
    mainContentDiv.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.innerText = "We open everyday from 12:00 to 16:00 and from 20:00 to 23:00.";
    mainContentDiv.appendChild(secondPara);

    const img = document.createElement("img");
    img.src = pizzaSign;
    img.setAttribute("alt", "Restaurant Location");
    mainContentDiv.appendChild(img);

    main.appendChild(mainContentDiv);

    return main;
}