import { createDiv } from "./functions";
export {createMenu}

//images for menu 
import LavaCookie from "../images/lava-cookie.jpg";
import PokePuff from "../images/pokepuffs.png";
import PokeBurger from "../images/pikaburger.jpg";
import EggRice from "../images/poke-egg-rice.png";
import Pancakes from "../images/pika-pancakes.png";
import PokeDrink from "../images/pika-Ice-cream.png";


function createMenu()
{   
    function createMenuItem(imgSrc,title)
    {
        const item = createDiv("menu-item")

        const img = document.createElement('img');
        img.src = imgSrc;

        const name = createDiv("name");
        name.textContent = title;

        item.appendChild(img);
        item.appendChild(name);

        return item;
    }
    const main = createDiv("main");

    const container = createDiv("menu-container");

    const item1 = createMenuItem(LavaCookie,"Lava Cookie");
    const item2 = createMenuItem(PokePuff,"Poke Puff's");
    const item3 = createMenuItem(PokeBurger,"Poke Burger")
    const item4 = createMenuItem(EggRice,"Pokeball Egg Rice");
    const item5 = createMenuItem(Pancakes,"Pika Pancakes")
    const item6 = createMenuItem(PokeDrink,"Poke Ice Cream");


    container.append(item1,item2,item3,item4,item5,item6);

    main.appendChild(container);

    return main;
}
