
export function SearchForm(params) {
  const d = document;
  const $form = d.createElement("form"),
  searchIcon = `<i class="fa-solid fa-magnifying-glass search-icon"></i>`,
  $input = d.createElement("input");

  $form.classList.add("search-form")
  $input.name = "search";
  $input.type = "search";
  $input.setAttribute("placeholder", "Buscar productos")
  $form.appendChild($input);
  $form.insertAdjacentHTML("beforeend", searchIcon)

  /*BETA*/
  /*if(location.hash.includes("#/search")){
    $input.value = localStorage.getItem("wpSearch")
  }

  d.addEventListener("search", e =>{
    if (!e.target.matches("input[type='search']")) return false 
    if (!e.target.value) localStorage.removeItem("wpSearch")

  })
  d.addEventListener("submit", e=>{
    e.preventDefault()
    if (!e.target.matches(".search-form")) return false 
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`

  })*/
  return $form
}