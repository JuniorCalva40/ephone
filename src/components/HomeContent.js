export default function HomeContent() {
  const $cards = document.createElement("div");
  $cards.classList.add("home-brands")
  $cards.innerHTML =
  `
  <h2 class="title-brands">Top <span>Electronic Brands</span></h2>
  <hr>
  <div class="home-cards">
  <section class="card-brands apple">
    <div class="card-sidebar ">
      <h3 class="card-title">IPHONE</h3>
      <img src="https://img.freepik.com/iconos-gratis/mac-os_318-10374.jpg" alt="" class="card-logo">
      <p class="card-des">Up to 80% Off</p>
    </div>
    <img src="https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png" alt="" class="card-img">
  </section>

  <section class="card-brands realme">
    <div class="card-sidebar">
      <h3 class="card-title">REALME</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.png/1200px-Realme_logo.png?20211207130551" alt="" class="card-logo">
      <p class="card-des">Up to 80% Off</p>
    </div>
    <img src="https://image01.realme.net/general/20230302/1677740934612.png?width=1080&height=1080&size=365122" alt="" class="card-img">

  </section>
  
  <section class="card-brands xioami  ">
    <div class="card-sidebar">
      <h3 class="card-title">XIAOMI</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png" alt="" class="card-logo">
      <p class="card-des">Up to 80% Off</p>
    </div>
    <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677429532.40596257!348x348.png?f=webp" alt="" class="card-img">
  </section>
  </div>
  `
  return $cards
}