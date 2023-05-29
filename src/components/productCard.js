
export function ProductCard(props) {
  let {title, id, slug, _embedded} = props,
  urlPoster = _embedded["wp:featuredmedia"][0].source_url
  ? _embedded["wp:featuredmedia"][0].source_url
  : "https://mobilestore.ec/wp-content/uploads/2023/05/Samsung-Galaxy-A24-Negro-Mobile-Store-Ecuador.jpg"

  document.addEventListener("click", e=>{
    if (!e.target.matches(".product-card a")) return false
    console.log("l");
    localStorage.setItem("wpProducId", e.target.dataset.id)

  })
  return`
  <article class="product-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h3>${title.rendered}</h3>
    <p class="details">Disponible</p>
    <a href="#/${slug}" data-id="${id}" class="button">Ver detalles</a>
  </article>
  `
}