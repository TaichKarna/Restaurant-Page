import { createDiv } from "./functions";
import { createImageDiv } from "./functions";

import Home from "../images/home.svg";
import Phone from "../images/phone.svg";
import Map from "../images/map.png";


export  {createContact};

function createContact()
{
    const main = createDiv("main");

    //phone 
    
    const phone = createDiv("phone");

    const icon1 = createImageDiv("icon",Phone);
    const number = createDiv("number");
    number.textContent = "+10 233 44 55";
    phone.appendChild(icon1);
    phone.appendChild(number);

    //address
    const address = createDiv("address");

    const icon2 = createImageDiv("icon",Home);
    const addressText = createDiv("address-text");
    addressText.textContent = " Santa Cruz West, Mumbai 400 000";

    address.appendChild(icon2);
    address.appendChild(addressText);

    //location
    const location = createImageDiv("location",Map);
    

    main.appendChild(phone);
    main.appendChild(address);
    main.appendChild(location);

    return main;

}