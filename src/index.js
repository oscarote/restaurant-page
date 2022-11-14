import './style.css';
import createHeader from "./header";
import createFooter from "./footer";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const contentDiv = document.getElementById("content");

const createWeb = (page) => {
    contentDiv.innerText = "";
    contentDiv.appendChild(createHeader());
    if (page === "home") {
        contentDiv.appendChild(createHome());
    } else if (page === "menu") {
        contentDiv.appendChild(createMenu());
    } else {
        contentDiv.appendChild(createContact());
    }
    contentDiv.appendChild(createFooter());

    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => createWeb("home"));

    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => createWeb("menu"));

    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => createWeb("contact"));
};

createWeb("home");