import { createHome } from "./pagesJs/home";
import { createContact } from "./pagesJs/contact";
import { createMenu } from "./pagesJs/menu";
import "./styles.css";

function tabBrowser()
{
  const content = document.querySelector("#content");

  const menu =  document.querySelector("#Menu");
  const about = document.querySelector("#About");
  const contact = document.querySelector("#Contact");

  const main = createHome();

  content.append(main);

  menu.addEventListener('click',(event)=>
  {
    content.replaceChildren();
    content.append(createMenu());

  });

  contact.addEventListener('click',(event)=>{
    content.replaceChildren();
    content.append(createContact());
  })

  about.addEventListener('click',(event)=>{
    content.replaceChildren();
    content.append(createHome());
  });
}

tabBrowser();
