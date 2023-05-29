
 export function Home() {
  const $home = document.createElement("div")
  $home.classList.add("slider")
  $home.innerHTML = `   
        <div>
            <div class="slider-slides">
                <div class="slider-slide active">
                    <img src="https://blackphonestorec.com/wp-content/uploads/2023/03/Banner-Web-BP-24-meses.jpg" alt="">
                </div>
                <div class="slider-slide">
                    <img src="https://blackphonestorec.com/wp-content/uploads/2022/11/Banners-Web-Blackphone4.jpg" alt="">
                </div>
                <div class="slider-slide">
                    <img src="https://blackphonestorec.com/wp-content/uploads/2023/04/bp_si.jpg" alt="">
                </div>
                <div class="slider-slide">
                    <img src="https://blackphonestorec.com/wp-content/uploads/2023/03/Banners-Web-paga-en-junio.jpg" alt="">
                </div>
            </div>
            <div class="slider-btns">
                  <i class="fa-solid fa-chevron-left prev"></i>
                  <i class="fa-solid fa-chevron-right next"></i>
            </div>
        </div>
  `
  const d = document;

  function slider() {
    const $nextBtn = d.querySelector(".next"),
    $prevBtn = d.querySelector(".prev"),
    $slides = d.querySelectorAll(".slider-slide");
       
    //console.log($nextBtn, $prevBtn);
    let i = 0;
    d.addEventListener("click", e=> {
      if (e.target === $prevBtn ) {
        e.preventDefault();
        $slides[i].classList.remove("active");
        i--;
  
  
        if (i < 0) {
          i =$slides.length -1; 
        }
  
        $slides[i].classList.add("active");
      }
  
      /*Boton next*/
      if (e.target === $nextBtn ) {
          e.preventDefault();
          $slides[i].classList.remove("active");
          i++;
    
    
          if (i >= $slides.length) {
            i = 0; 
          }
    
          $slides[i].classList.add("active");
        }
    })
  
   
  }
  setTimeout(() => {
    slider();
  }, 1000);
  
  return $home
}