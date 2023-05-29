export function Menu(params) {
  const $menu= document.createElement("nav");
  $menu.classList.add("menu")
  $menu.innerHTML =`
  <a href="#/"><i class="fas fa-home"></i></a>
  <a href="#/productos"><i class="fa-solid fa-store"></i> Store</a>
  <a href="#/login"><i class="fa-solid fa-user"></i></a>
  `
  return $menu
}