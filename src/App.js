
import { Loader } from "./components/loader.js";
import { Header } from "./components/Header.js";
import { Products } from "./components/product.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite-scroll.js";




export default function App() {
  
   //COMPONENTE TITLE
   let $root = document.getElementById("root");
   $root.innerHTML = null
   $root.appendChild(Header())
   $root.appendChild(Products())
   $root.appendChild(Loader())
   
   Router();
   InfiniteScroll();
}