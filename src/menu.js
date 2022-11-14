import pizza1img from "./cheeseandgreenleavespizza.jpg";
import pizza2img from "./meatandvegetablespizza.jpg";
import pizza3img from "./prosciuttosalamipizza.jpg";
import pizza4img from "./vegetablepizza.jpg";

export default function createMenu() {
    const main = document.createElement("main");
    main.className = "displayGrid";

    // First pizza
    const pizzaCard1 = document.createElement("div");
    pizzaCard1.className = "pizzaCard";

    const img1 = document.createElement("img");
    img1.src = pizza1img;
    img1.setAttribute("alt", "Cheese and Green Leaves Pizza");
    pizzaCard1.appendChild(img1);

    const title1 = document.createElement("h3");
    title1.innerText = "Cheese and Green Leaves Pizza";
    pizzaCard1.appendChild(title1);

    main.appendChild(pizzaCard1);

    // Second pizza
    const pizzaCard2 = document.createElement("div");
    pizzaCard2.className = "pizzaCard";

    const img2 = document.createElement("img");
    img2.src = pizza2img;
    img2.setAttribute("alt", "Meat and Vegetables Pizza");
    pizzaCard2.appendChild(img2);

    const title2 = document.createElement("h3");
    title2.innerText = "Meat and Vegetables Pizza";
    pizzaCard2.appendChild(title2);

    main.appendChild(pizzaCard2);

    // Third pizza
    const pizzaCard3 = document.createElement("div");
    pizzaCard3.className = "pizzaCard";

    const img3 = document.createElement("img");
    img3.src = pizza3img;
    img3.setAttribute("alt", "Prosciutto and Salami Pizza");
    pizzaCard3.appendChild(img3);

    const title3 = document.createElement("h3");
    title3.innerText = "Prosciutto and Salami Pizza";
    pizzaCard3.appendChild(title3);

    main.appendChild(pizzaCard3);

    // Fourth pizza
    const pizzaCard4 = document.createElement("div");
    pizzaCard4.className = "pizzaCard";

    const img4 = document.createElement("img");
    img4.src = pizza4img;
    img4.setAttribute("alt", "Vegetable Pizza");
    pizzaCard4.appendChild(img4);

    const title4 = document.createElement("h3");
    title4.innerText = "Vegetable Pizza";
    pizzaCard4.appendChild(title4);

    main.appendChild(pizzaCard4);

    return main;
}