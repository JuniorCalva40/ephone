import  api  from "../helpers/wp_api.js";
import  {ajax}  from "../helpers/ajax.js";
import { ProductCard } from "./productCard.js";
import { Details } from "./Details.js";
import { Home } from "./home.js";
import HomeContent from "./HomeContent.js";
import Categories from "./HomeCategories.js";
import Footer from "./Footer.js";



export async function Router() {
  const d = document, 
  w = window,
  $products = d.getElementById("products");

  let { hash } = w.location;
  let currentSection = hash; 

  $products.innerHTML = "";

  if (!hash || hash === "#/") {
    $products.appendChild(Home());
    $products.appendChild(HomeContent());
    $products.appendChild(Categories());
    $products.appendChild(Footer());
  } else if (hash === "#/productos") {
    $products.innerHTML = `<h2 class="title-section">Sección Productos</h2>`;
    await ajax({
      url: api.PRODUCTS,
      cbSuccess: (products) => {
        if (currentSection === hash) { // Verificar si la sección actual sigue siendo la misma
          let html = "";
          products.forEach((product) => {
            html += ProductCard(product);
          });
          $products.innerHTML = html;
        }
      }
    });
  } else if (hash === "#/login") {
    $products.innerHTML = `<h2 class="title-section">Login</h2>`;
  } else {
    $products.innerHTML = `<h2 class="title-section">Sección del Producto</h2>`;
    await ajax({
      url: `${api.DETAILS}/${localStorage.getItem("wpProducId")}?_embed`,
      cbSuccess: (details) => {
        if (currentSection === hash) { 
          $products.innerHTML = Details(details);
        }
      }
    });
  }
  
  document.querySelector(".loader").style.display = "none";
}