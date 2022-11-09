import Background from "./nik-owens-40OJLYVWeeM-unsplash.jpg";
import GitHubLogo from "./githublogo.png";
import createHeader from "./header";


const contentDiv = document.getElementById("content");

const createFooter = () => {
    const footer = document.createElement("footer");

    footer.innerHTML = `Foto de <a href="https://unsplash.com/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nik Owens</a> en <a href="https://unsplash.com/es/s/fotos/copyleft-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a>
    &nbsp Copyright © <script>document.write(new Date().getFullYear())</script> <a href="https://github.com/oscarote" target="_blank">
            Oscarote <img id="gh-logo" src="../src/githublogo.png" alt="github logo"></a>`

    contentDiv.appendChild(footer);
};

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

    createFooter();
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