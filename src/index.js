
import App from "./App.js";
import wp_api from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange",()=>{
  wp_api.page = 1
  App()
  
})
