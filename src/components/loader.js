export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "src/assets/loader.svg";
  $loader.alt ="Cargando"
  $loader.classList.add("loader")
  $loader.setAttribute("id", "loader");

  return $loader
}