//Commande servant à créer un span entre les lettres du h1 ""
const firstName = document.querySelector("#first-name");
const firstNameText = firstName.innerHTML;
const firstNameLetters = firstNameText.split(""); // ["V", "A", "L" ...]
firstName.innerHTML = "";

//Commande servant à intégrer le span entre chaque lettre du h1 "#nav_title", puis à changer la couleur des lettres quand la souris passe au dessus
firstNameLetters.forEach((firstNameLetter) => {
    const span = document.createElement("span"); // <span></span>
    span.innerHTML = firstNameLetter; // <span>V</span>
    firstName.appendChild(span);

    span.addEventListener("mouseover", () => {
        span.style.color = "#CCBA78";
    });

    span.addEventListener("mouseout", () => {
        span.style.color = "";
    });
});

//Commande servant à créer un span entre les lettres du h1 "#nav_title"
const lastName = document.querySelector("#last-name");
const lastNameText = lastName.innerHTML;
const lastNameLetters = lastNameText.split(""); // ["V", "A", "L" ...]
lastName.innerHTML = "";

//Commande servant à intégrer le span entre chaque lettre du h1 "#nav_title", puis à changer la couleur des lettres quand la souris passe au dessus
lastNameLetters.forEach((lastNameLetter) => {
    const span = document.createElement("span"); // <span></span>
    span.innerHTML = lastNameLetter; // <span>V</span>
    lastName.appendChild(span);

    span.addEventListener("mouseover", () => {
        span.style.color = "#CCBA78";
    });

    span.addEventListener("mouseout", () => {
        span.style.color = "";
    });
});
