import Background from "./nik-owens-40OJLYVWeeM-unsplash.jpg";
import createHeader from "./header";
import createFooter from "./footer";


const contentDiv = document.getElementById("content");

const createHome = () => {
    contentDiv.innerText = "";
    contentDiv.appendChild(createHeader());

    const main = document.createElement("main");
    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "mainContent";

    const firstPara = document.createElement("p");
    firstPara.innerText = "The best pizza that you will ever try";
    mainContentDiv.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.innerText = "We open everyday from 12:00 to 16:00 and from 20:00 to 23:00.";
    mainContentDiv.appendChild(secondPara);

    main.appendChild(mainContentDiv);

    contentDiv.appendChild(main);

    contentDiv.appendChild(createFooter());
};

const createMenu = () => {
    contentDiv.innerText = "";
    createHeader();
    createFooter();
};

const createContact = () => {
    contentDiv.innerText = "";
    createHeader();
    createFooter();
};

createHome();

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", createHome);