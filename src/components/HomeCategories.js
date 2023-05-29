
export default function Categories() {
  const $categories = document.createElement("div");
  $categories.classList.add("home-categories")
  $categories.innerHTML = `
  <h2 class="title-categories">Shop From <span>Top Categories</span></h2>
  <hr>
  <div class="categories-products">
    <article class="category mobile">
      <div class="image-wrapper">
        <img src="https://w7.pngwing.com/pngs/343/207/png-transparent-iphone-x-iphone-8-plus-iphone-7-apple-iphone-gadget-electronics-mobile-phone.png" alt="">
      </div>
      <p>Mobile</p>
    </article>
    <article class="category mobile">
      <div class="image-wrapper">
        <img src="https://pngimg.com/d/earphones_PNG6.png" alt="">
      </div>
      <p>Earphones</p>
    </article>
    <article class="category mobile">
      <div class="image-wrapper">
       <img src="https://www.freepnglogos.com/uploads/watch-png/watch-apple-september-announcements-and-filemaker-cimbura-11.png" alt="">
      </div>
      <p>Watches</p>
    </article>
    <article class="category mobile">
      <div class="image-wrapper">
        <img src="https://nomadaware.com.ec/wp-content/uploads/2022/05/3-copia.png" alt="">
      </div>
      <p>Laptops</p>
    </article>
    <article class="category mobile">
      <div class="image-wrapper">
        <img src="https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png" alt="">
      </div>
      <p>Gadgets</p>
    </article>
    <article class="category mobile">
      <div class="image-wrapper">
       <img src="https://w7.pngwing.com/pngs/1/811/png-transparent-ipad-pro-12-9-inch-2nd-generation-apple-a10x-ipad-electronics-gadget-mobile-phone.png" alt="">
      </div>
      <p>Tablets</p>
    </article>
    
  </div>
  
  
  `
  return $categories
}