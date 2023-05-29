export default function HomeTitles() {
  const $title = document.createElement("div");
  $title.classList.add("title-brands")
  $title.innerHTML = `
  <h2 class="title-brands">Shop From <span>Top Categories</span></h2>
  <hr>
  `
  return $title
}