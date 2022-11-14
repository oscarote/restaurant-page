import location from "./location.png";

export default function createMenu() {
    const main = document.createElement("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "mainContent";

    const firstPara = document.createElement("p");
    firstPara.innerText = "📞 123 456 789";
    mainContentDiv.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.innerText = "🍴 14 Oxford St, London W1D 1AU, United Kingdom";
    mainContentDiv.appendChild(secondPara);

    const img = document.createElement("img");
    img.src = location;
    img.setAttribute("alt", "Restaurant Location");
    mainContentDiv.appendChild(img);

    main.appendChild(mainContentDiv);

    return main;
}