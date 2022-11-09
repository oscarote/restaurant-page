export default function createHeader() {
    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.innerText = "Pizza Cosco";
    header.appendChild(h1);

    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.setAttribute("id", "home");
    homeBtn.innerText = "Home";
    nav.appendChild(homeBtn);
    // homeBtn.addEventListener("click", createHome);

    const menuBtn = document.createElement("button");
    menuBtn.setAttribute("id", "menu");
    menuBtn.innerText = "Menu";
    nav.appendChild(menuBtn);
    // menuBtn.addEventListener("click", createMenu);

    const contactBtn = document.createElement("button");
    contactBtn.setAttribute("id", "contact");
    contactBtn.innerText = "Contact";
    nav.appendChild(contactBtn);
    // contactBtn.addEventListener("click", createContact);

    header.appendChild(nav);

    return header;
}