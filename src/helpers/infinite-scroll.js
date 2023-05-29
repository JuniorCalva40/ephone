import { ProductCard } from "../components/productCard.js";
import { ajax } from "./ajax.js";
import wp_api from "./wp_api.js";



export async function InfiniteScroll() {
  const d  = document,
  w = window

  let apiUrl,
  Component
  
    w.addEventListener("scroll", async e =>{
      let {scrollTop, clientHeight,scrollHeight}= d.documentElement,
      {hash} = w.location
      
      //console.log(scrollTop, clientHeight, scrollHeight);

      if (scrollTop + clientHeight + 1 > scrollHeight) {
        //console.log("Cargando...");
        //&per_page=20&page=2
        wp_api.page ++;
        if (hash === "#/productos") {
          apiUrl = `${wp_api.PRODUCTS}&page=${wp_api.page}`
          Component = ProductCard;
        }else{
          return false
        }
        //Loader
        d.querySelector(".loader").style.display = "block"

        await ajax({
          url: apiUrl,
          cbSuccess:(products)=>{
           //console.log(products);
           let html =""
           products.forEach(product => html += Component(product))
           d.getElementById("products").insertAdjacentHTML("beforeend", html)
           d.querySelector(".loader").style.display = "none"
          }   
       })
     
        
      }
      
    })
     
    
    
    
  
}