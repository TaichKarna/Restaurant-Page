export {createHome} ;
import { createDiv } from "./functions";

function createHome()
{
    const main = createDiv("main");

    const mainText = createDiv("main-text");
    main.appendChild(mainText);

    const concept = document.createElement("h1");
    concept.textContent = "CONCEPT";
    mainText.appendChild(concept);

    const text = document.createElement('p');
    text.textContent = "Welcome to the  Pokémon Cafe. Enjoy original cute sweets, meals and drinks in a stylish wooden room. Share an unforgettable time surrounded by your favorite Pokémon!"
    mainText.appendChild(text);

    return main;
}