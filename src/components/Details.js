export function Details(props) {
  let {title, excerpt, _embedded  } = props
  let urlPoster = _embedded["wp:featuredmedia"][0].source_url
  ? _embedded["wp:featuredmedia"][0].source_url
  : "https://mobilestore.ec/wp-content/uploads/2023/05/Samsung-Galaxy-A24-Negro-Mobile-Store-Ecuador.jpg"
  
  return `
  <section class="details">
    <div class="details-img">
    <img src="${urlPoster}" alt="${title.rendered}">
    </div>
    <aside class="details-aside">
      <h2>${title.rendered}</h2>
      <hr>
      <article class="details-des">${excerpt.rendered}</article>
    </aside>
    
    
  </section>
  `
}