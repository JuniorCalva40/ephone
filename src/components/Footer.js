export default function Footer(props) {
  const $footer = document.createElement("footer")
  $footer.classList.add("footer")
  $footer.innerHTML = `

  <div class="footer-group">
    <div class="footer-side">
      <div class="footer-contact">
        <h2>Contact Us</h2>
        <nav>
          <i class="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
          <p>+593 98 404 14 75</p>
          <i class="fas fa-phone"></i>
          <span>Call us</span>
          <p>+1-99-875-2502</p>
        </nav>
        <h3>Download App</h3>
        <div class="footer-app">
          <img src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Photos.png" alt="">
          <img src="https://www.sysdata.it/wp-content/uploads/2020/01/download-on-app-store-png-apple-and-the-apple-logo-are-trademarks-of-apple-inc-registered-in-the-u-s-and-other-countries-app-store-is-a-service-mark-of-apple-inc-android-565.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer-side2">
      <h2>Most Popular Categories</h2>
      <ul>
        <li>Mobiles</li>
        <li>Laptops &amp; Pc</li>
        <li>Watches</li>
        <li>Tablets</li>
        <li>Earphones</li>
        <li>Gadgets</li>
      </ul>
    </div>
  </div>
  <hr>
  <p>&copy; 2023 Ephone. All rights reserved.</p>
  <a href="https://github.com/JuniorCalva40" target="_blank" rel="noopener"><i class="fa-brands fa-github github"></i></a>

  `
  return $footer
}