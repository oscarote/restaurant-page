import GitHubLogo from "./githublogo.png";

export default function createFooter() {
    const footer = document.createElement("footer");

    footer.innerHTML = `Foto de <a href="https://unsplash.com/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nik Owens</a> en <a href="https://unsplash.com/es/s/fotos/copyleft-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a>
    &nbsp Copyright © <script>document.write(new Date().getFullYear())</script> <a href="https://github.com/oscarote" target="_blank">
            Oscarote <img id="gh-logo" src="${GitHubLogo}" alt="github logo"></a>`

    return footer;
}