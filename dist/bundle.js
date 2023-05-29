/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader.js */ \"./src/components/loader.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.js */ \"./src/components/Header.js\");\n/* harmony import */ var _components_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product.js */ \"./src/components/product.js\");\n/* harmony import */ var _components_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Router.js */ \"./src/components/Router.js\");\n/* harmony import */ var _helpers_infinite_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/infinite-scroll.js */ \"./src/helpers/infinite-scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n  \r\n   //COMPONENTE TITLE\r\n   let $root = document.getElementById(\"root\");\r\n   $root.innerHTML = null\r\n   $root.appendChild((0,_components_Header_js__WEBPACK_IMPORTED_MODULE_1__.Header)())\r\n   $root.appendChild((0,_components_product_js__WEBPACK_IMPORTED_MODULE_2__.Products)())\r\n   $root.appendChild((0,_components_loader_js__WEBPACK_IMPORTED_MODULE_0__.Loader)())\r\n   \r\n   ;(0,_components_Router_js__WEBPACK_IMPORTED_MODULE_3__.Router)();\r\n   (0,_helpers_infinite_scroll_js__WEBPACK_IMPORTED_MODULE_4__.InfiniteScroll)();\r\n}\n\n//# sourceURL=webpack://ephonee/./src/App.js?");

/***/ }),

/***/ "./src/components/Details.js":
/*!***********************************!*\
  !*** ./src/components/Details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Details: () => (/* binding */ Details)\n/* harmony export */ });\nfunction Details(props) {\r\n  let {title, excerpt, _embedded  } = props\r\n  let urlPoster = _embedded[\"wp:featuredmedia\"][0].source_url\r\n  ? _embedded[\"wp:featuredmedia\"][0].source_url\r\n  : \"https://mobilestore.ec/wp-content/uploads/2023/05/Samsung-Galaxy-A24-Negro-Mobile-Store-Ecuador.jpg\"\r\n  \r\n  return `\r\n  <section class=\"details\">\r\n    <div class=\"details-img\">\r\n    <img src=\"${urlPoster}\" alt=\"${title.rendered}\">\r\n    </div>\r\n    <aside class=\"details-aside\">\r\n      <h2>${title.rendered}</h2>\r\n      <hr>\r\n      <article class=\"details-des\">${excerpt.rendered}</article>\r\n    </aside>\r\n    \r\n    \r\n  </section>\r\n  `\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/Details.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\nfunction Footer(props) {\r\n  const $footer = document.createElement(\"footer\")\r\n  $footer.classList.add(\"footer\")\r\n  $footer.innerHTML = `\r\n\r\n  <div class=\"footer-group\">\r\n    <div class=\"footer-side\">\r\n      <div class=\"footer-contact\">\r\n        <h2>Contact Us</h2>\r\n        <nav>\r\n          <i class=\"fab fa-whatsapp\"></i>\r\n          <span>WhatsApp</span>\r\n          <p>+593 98 404 14 75</p>\r\n          <i class=\"fas fa-phone\"></i>\r\n          <span>Call us</span>\r\n          <p>+1-99-875-2502</p>\r\n        </nav>\r\n        <h3>Download App</h3>\r\n        <div class=\"footer-app\">\r\n          <img src=\"https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Photos.png\" alt=\"\">\r\n          <img src=\"https://www.sysdata.it/wp-content/uploads/2020/01/download-on-app-store-png-apple-and-the-apple-logo-are-trademarks-of-apple-inc-registered-in-the-u-s-and-other-countries-app-store-is-a-service-mark-of-apple-inc-android-565.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-side2\">\r\n      <h2>Most Popular Categories</h2>\r\n      <ul>\r\n        <li>Mobiles</li>\r\n        <li>Laptops &amp; Pc</li>\r\n        <li>Watches</li>\r\n        <li>Tablets</li>\r\n        <li>Earphones</li>\r\n        <li>Gadgets</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <p>&copy; 2023 Ephone. All rights reserved.</p>\r\n  <a href=\"https://github.com/JuniorCalva40\" target=\"_blank\" rel=\"noopener\"><i class=\"fa-brands fa-github github\"></i></a>\r\n\r\n  `\r\n  return $footer\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _SearchForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchForm.js */ \"./src/components/SearchForm.js\");\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.js */ \"./src/components/title.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.js */ \"./src/components/Menu.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Header() {\r\n  const $header = document.createElement(\"header\");\r\n  $header.classList.add(\"header\");\r\n  $header.appendChild((0,_title_js__WEBPACK_IMPORTED_MODULE_1__.Title)());\r\n  $header.appendChild((0,_Menu_js__WEBPACK_IMPORTED_MODULE_2__.Menu)());\r\n  $header.appendChild((0,_SearchForm_js__WEBPACK_IMPORTED_MODULE_0__.SearchForm)());\r\n  \r\n  \r\n  return $header\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ephonee/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/HomeCategories.js":
/*!******************************************!*\
  !*** ./src/components/HomeCategories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Categories)\n/* harmony export */ });\n\r\nfunction Categories() {\r\n  const $categories = document.createElement(\"div\");\r\n  $categories.classList.add(\"home-categories\")\r\n  $categories.innerHTML = `\r\n  <h2 class=\"title-categories\">Shop From <span>Top Categories</span></h2>\r\n  <hr>\r\n  <div class=\"categories-products\">\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n        <img src=\"https://w7.pngwing.com/pngs/343/207/png-transparent-iphone-x-iphone-8-plus-iphone-7-apple-iphone-gadget-electronics-mobile-phone.png\" alt=\"\">\r\n      </div>\r\n      <p>Mobile</p>\r\n    </article>\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n        <img src=\"https://pngimg.com/d/earphones_PNG6.png\" alt=\"\">\r\n      </div>\r\n      <p>Earphones</p>\r\n    </article>\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n       <img src=\"https://www.freepnglogos.com/uploads/watch-png/watch-apple-september-announcements-and-filemaker-cimbura-11.png\" alt=\"\">\r\n      </div>\r\n      <p>Watches</p>\r\n    </article>\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n        <img src=\"https://nomadaware.com.ec/wp-content/uploads/2022/05/3-copia.png\" alt=\"\">\r\n      </div>\r\n      <p>Laptops</p>\r\n    </article>\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n        <img src=\"https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png\" alt=\"\">\r\n      </div>\r\n      <p>Gadgets</p>\r\n    </article>\r\n    <article class=\"category mobile\">\r\n      <div class=\"image-wrapper\">\r\n       <img src=\"https://w7.pngwing.com/pngs/1/811/png-transparent-ipad-pro-12-9-inch-2nd-generation-apple-a10x-ipad-electronics-gadget-mobile-phone.png\" alt=\"\">\r\n      </div>\r\n      <p>Tablets</p>\r\n    </article>\r\n    \r\n  </div>\r\n  \r\n  \r\n  `\r\n  return $categories\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/HomeCategories.js?");

/***/ }),

/***/ "./src/components/HomeContent.js":
/*!***************************************!*\
  !*** ./src/components/HomeContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeContent)\n/* harmony export */ });\nfunction HomeContent() {\r\n  const $cards = document.createElement(\"div\");\r\n  $cards.classList.add(\"home-brands\")\r\n  $cards.innerHTML =\r\n  `\r\n  <h2 class=\"title-brands\">Top <span>Electronic Brands</span></h2>\r\n  <hr>\r\n  <div class=\"home-cards\">\r\n  <section class=\"card-brands apple\">\r\n    <div class=\"card-sidebar \">\r\n      <h3 class=\"card-title\">IPHONE</h3>\r\n      <img src=\"https://img.freepik.com/iconos-gratis/mac-os_318-10374.jpg\" alt=\"\" class=\"card-logo\">\r\n      <p class=\"card-des\">Up to 80% Off</p>\r\n    </div>\r\n    <img src=\"https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png\" alt=\"\" class=\"card-img\">\r\n  </section>\r\n\r\n  <section class=\"card-brands realme\">\r\n    <div class=\"card-sidebar\">\r\n      <h3 class=\"card-title\">REALME</h3>\r\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.png/1200px-Realme_logo.png?20211207130551\" alt=\"\" class=\"card-logo\">\r\n      <p class=\"card-des\">Up to 80% Off</p>\r\n    </div>\r\n    <img src=\"https://image01.realme.net/general/20230302/1677740934612.png?width=1080&height=1080&size=365122\" alt=\"\" class=\"card-img\">\r\n\r\n  </section>\r\n  \r\n  <section class=\"card-brands xioami  \">\r\n    <div class=\"card-sidebar\">\r\n      <h3 class=\"card-title\">XIAOMI</h3>\r\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png\" alt=\"\" class=\"card-logo\">\r\n      <p class=\"card-des\">Up to 80% Off</p>\r\n    </div>\r\n    <img src=\"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677429532.40596257!348x348.png?f=webp\" alt=\"\" class=\"card-img\">\r\n  </section>\r\n  </div>\r\n  `\r\n  return $cards\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/HomeContent.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Menu(params) {\r\n  const $menu= document.createElement(\"nav\");\r\n  $menu.classList.add(\"menu\")\r\n  $menu.innerHTML =`\r\n  <a href=\"#/\"><i class=\"fas fa-home\"></i></a>\r\n  <a href=\"#/productos\"><i class=\"fa-solid fa-store\"></i> Store</a>\r\n  <a href=\"#/login\"><i class=\"fa-solid fa-user\"></i></a>\r\n  `\r\n  return $menu\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/Router.js":
/*!**********************************!*\
  !*** ./src/components/Router.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _helpers_wp_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/wp_api.js */ \"./src/helpers/wp_api.js\");\n/* harmony import */ var _helpers_ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ajax.js */ \"./src/helpers/ajax.js\");\n/* harmony import */ var _productCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCard.js */ \"./src/components/productCard.js\");\n/* harmony import */ var _Details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Details.js */ \"./src/components/Details.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ \"./src/components/home.js\");\n/* harmony import */ var _HomeContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeContent.js */ \"./src/components/HomeContent.js\");\n/* harmony import */ var _HomeCategories_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomeCategories.js */ \"./src/components/HomeCategories.js\");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.js */ \"./src/components/Footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function Router() {\r\n  const d = document, \r\n  w = window,\r\n  $products = d.getElementById(\"products\");\r\n\r\n  let { hash } = w.location;\r\n  let currentSection = hash; \r\n\r\n  $products.innerHTML = \"\";\r\n\r\n  if (!hash || hash === \"#/\") {\r\n    $products.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_4__.Home)());\r\n    $products.appendChild((0,_HomeContent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n    $products.appendChild((0,_HomeCategories_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\r\n    $products.appendChild((0,_Footer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\r\n  } else if (hash === \"#/productos\") {\r\n    $products.innerHTML = `<h2 class=\"title-section\">Sección Productos</h2>`;\r\n    await (0,_helpers_ajax_js__WEBPACK_IMPORTED_MODULE_1__.ajax)({\r\n      url: _helpers_wp_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PRODUCTS,\r\n      cbSuccess: (products) => {\r\n        if (currentSection === hash) { // Verificar si la sección actual sigue siendo la misma\r\n          let html = \"\";\r\n          products.forEach((product) => {\r\n            html += (0,_productCard_js__WEBPACK_IMPORTED_MODULE_2__.ProductCard)(product);\r\n          });\r\n          $products.innerHTML = html;\r\n        }\r\n      }\r\n    });\r\n  } else if (hash === \"#/login\") {\r\n    $products.innerHTML = `<h2 class=\"title-section\">Login</h2>`;\r\n  } else {\r\n    $products.innerHTML = `<h2 class=\"title-section\">Sección del Producto</h2>`;\r\n    await (0,_helpers_ajax_js__WEBPACK_IMPORTED_MODULE_1__.ajax)({\r\n      url: `${_helpers_wp_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DETAILS}/${localStorage.getItem(\"wpProducId\")}?_embed`,\r\n      cbSuccess: (details) => {\r\n        if (currentSection === hash) { \r\n          $products.innerHTML = (0,_Details_js__WEBPACK_IMPORTED_MODULE_3__.Details)(details);\r\n        }\r\n      }\r\n    });\r\n  }\r\n  \r\n  document.querySelector(\".loader\").style.display = \"none\";\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/Router.js?");

/***/ }),

/***/ "./src/components/SearchForm.js":
/*!**************************************!*\
  !*** ./src/components/SearchForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchForm: () => (/* binding */ SearchForm)\n/* harmony export */ });\n\r\nfunction SearchForm(params) {\r\n  const d = document;\r\n  const $form = d.createElement(\"form\"),\r\n  searchIcon = `<i class=\"fa-solid fa-magnifying-glass search-icon\"></i>`,\r\n  $input = d.createElement(\"input\");\r\n\r\n  $form.classList.add(\"search-form\")\r\n  $input.name = \"search\";\r\n  $input.type = \"search\";\r\n  $input.setAttribute(\"placeholder\", \"Buscar productos\")\r\n  $form.appendChild($input);\r\n  $form.insertAdjacentHTML(\"beforeend\", searchIcon)\r\n\r\n  /*BETA*/\r\n  /*if(location.hash.includes(\"#/search\")){\r\n    $input.value = localStorage.getItem(\"wpSearch\")\r\n  }\r\n\r\n  d.addEventListener(\"search\", e =>{\r\n    if (!e.target.matches(\"input[type='search']\")) return false \r\n    if (!e.target.value) localStorage.removeItem(\"wpSearch\")\r\n\r\n  })\r\n  d.addEventListener(\"submit\", e=>{\r\n    e.preventDefault()\r\n    if (!e.target.matches(\".search-form\")) return false \r\n    localStorage.setItem(\"wpSearch\", e.target.search.value);\r\n    location.hash = `#/search?search=${e.target.search.value}`\r\n\r\n  })*/\r\n  return $form\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/SearchForm.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n\r\n function Home() {\r\n  const $home = document.createElement(\"div\")\r\n  $home.classList.add(\"slider\")\r\n  $home.innerHTML = `   \r\n        <div>\r\n            <div class=\"slider-slides\">\r\n                <div class=\"slider-slide active\">\r\n                    <img src=\"https://blackphonestorec.com/wp-content/uploads/2023/03/Banner-Web-BP-24-meses.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"slider-slide\">\r\n                    <img src=\"https://blackphonestorec.com/wp-content/uploads/2022/11/Banners-Web-Blackphone4.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"slider-slide\">\r\n                    <img src=\"https://blackphonestorec.com/wp-content/uploads/2023/04/bp_si.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"slider-slide\">\r\n                    <img src=\"https://blackphonestorec.com/wp-content/uploads/2023/03/Banners-Web-paga-en-junio.jpg\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"slider-btns\">\r\n                  <i class=\"fa-solid fa-chevron-left prev\"></i>\r\n                  <i class=\"fa-solid fa-chevron-right next\"></i>\r\n            </div>\r\n        </div>\r\n  `\r\n  const d = document;\r\n\r\n  function slider() {\r\n    const $nextBtn = d.querySelector(\".next\"),\r\n    $prevBtn = d.querySelector(\".prev\"),\r\n    $slides = d.querySelectorAll(\".slider-slide\");\r\n       \r\n    //console.log($nextBtn, $prevBtn);\r\n    let i = 0;\r\n    d.addEventListener(\"click\", e=> {\r\n      if (e.target === $prevBtn ) {\r\n        e.preventDefault();\r\n        $slides[i].classList.remove(\"active\");\r\n        i--;\r\n  \r\n  \r\n        if (i < 0) {\r\n          i =$slides.length -1; \r\n        }\r\n  \r\n        $slides[i].classList.add(\"active\");\r\n      }\r\n  \r\n      /*Boton next*/\r\n      if (e.target === $nextBtn ) {\r\n          e.preventDefault();\r\n          $slides[i].classList.remove(\"active\");\r\n          i++;\r\n    \r\n    \r\n          if (i >= $slides.length) {\r\n            i = 0; \r\n          }\r\n    \r\n          $slides[i].classList.add(\"active\");\r\n        }\r\n    })\r\n  \r\n   \r\n  }\r\n  setTimeout(() => {\r\n    slider();\r\n  }, 1000);\r\n  \r\n  return $home\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/home.js?");

/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Loader: () => (/* binding */ Loader)\n/* harmony export */ });\nfunction Loader() {\r\n  const $loader = document.createElement(\"img\");\r\n  $loader.src = \"src/assets/loader.svg\";\r\n  $loader.alt =\"Cargando\"\r\n  $loader.classList.add(\"loader\")\r\n  $loader.setAttribute(\"id\", \"loader\");\r\n\r\n  return $loader\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/loader.js?");

/***/ }),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Products: () => (/* binding */ Products)\n/* harmony export */ });\n\r\nfunction Products(params) {\r\n  const $products = document.createElement(\"div\");\r\n  $products.id= \"products\";\r\n  return $products\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/product.js?");

/***/ }),

/***/ "./src/components/productCard.js":
/*!***************************************!*\
  !*** ./src/components/productCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductCard: () => (/* binding */ ProductCard)\n/* harmony export */ });\n\r\nfunction ProductCard(props) {\r\n  let {title, id, slug, _embedded} = props,\r\n  urlPoster = _embedded[\"wp:featuredmedia\"][0].source_url\r\n  ? _embedded[\"wp:featuredmedia\"][0].source_url\r\n  : \"https://mobilestore.ec/wp-content/uploads/2023/05/Samsung-Galaxy-A24-Negro-Mobile-Store-Ecuador.jpg\"\r\n\r\n  document.addEventListener(\"click\", e=>{\r\n    if (!e.target.matches(\".product-card a\")) return false\r\n    console.log(\"l\");\r\n    localStorage.setItem(\"wpProducId\", e.target.dataset.id)\r\n\r\n  })\r\n  return`\r\n  <article class=\"product-card\">\r\n    <img src=\"${urlPoster}\" alt=\"${title.rendered}\">\r\n    <h3>${title.rendered}</h3>\r\n    <p class=\"details\">Disponible</p>\r\n    <a href=\"#/${slug}\" data-id=\"${id}\" class=\"button\">Ver detalles</a>\r\n  </article>\r\n  `\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/productCard.js?");

/***/ }),

/***/ "./src/components/title.js":
/*!*********************************!*\
  !*** ./src/components/title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Title: () => (/* binding */ Title)\n/* harmony export */ });\n\r\n\r\nfunction Title() {\r\n  const d = document\r\n  \r\n  let $logo = d.createElement(\"img\");\r\n  $logo.classList.add(\"logo\");\r\n  $logo.src = \"src/assets/logo.png\" \r\n  \r\n  return $logo;\r\n}\n\n//# sourceURL=webpack://ephonee/./src/components/title.js?");

/***/ }),

/***/ "./src/helpers/ajax.js":
/*!*****************************!*\
  !*** ./src/helpers/ajax.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ajax: () => (/* binding */ ajax)\n/* harmony export */ });\nasync function ajax(props) {\r\n  let {url, cbSuccess} = props;\r\n\r\n  await fetch(url)\r\n  .then(res => res.ok ? res.json() : Promise.reject(res))\r\n  .then(json => cbSuccess(json))\r\n  .catch(err =>{\r\n    console.log(err)\r\n    let mesagge = `${err.statusText  || \"Error\"}`\r\n    document.getElementById(\"products\").innerHTML =`<h2 class=\"error\">${mesagge} ${err.status} </h2>`\r\n    document.getElementById(\"loader\").style.display = \"none\"\r\n  })\r\n}\n\n//# sourceURL=webpack://ephonee/./src/helpers/ajax.js?");

/***/ }),

/***/ "./src/helpers/infinite-scroll.js":
/*!****************************************!*\
  !*** ./src/helpers/infinite-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InfiniteScroll: () => (/* binding */ InfiniteScroll)\n/* harmony export */ });\n/* harmony import */ var _components_productCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/productCard.js */ \"./src/components/productCard.js\");\n/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax.js */ \"./src/helpers/ajax.js\");\n/* harmony import */ var _wp_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wp_api.js */ \"./src/helpers/wp_api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nasync function InfiniteScroll() {\r\n  const d  = document,\r\n  w = window\r\n\r\n  let apiUrl,\r\n  Component\r\n  \r\n    w.addEventListener(\"scroll\", async e =>{\r\n      let {scrollTop, clientHeight,scrollHeight}= d.documentElement,\r\n      {hash} = w.location\r\n      \r\n      //console.log(scrollTop, clientHeight, scrollHeight);\r\n\r\n      if (scrollTop + clientHeight + 1 > scrollHeight) {\r\n        //console.log(\"Cargando...\");\r\n        //&per_page=20&page=2\r\n        _wp_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].page ++;\r\n        if (hash === \"#/productos\") {\r\n          apiUrl = `${_wp_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PRODUCTS}&page=${_wp_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].page}`\r\n          Component = _components_productCard_js__WEBPACK_IMPORTED_MODULE_0__.ProductCard;\r\n        }else{\r\n          return false\r\n        }\r\n        //Loader\r\n        d.querySelector(\".loader\").style.display = \"block\"\r\n\r\n        await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_1__.ajax)({\r\n          url: apiUrl,\r\n          cbSuccess:(products)=>{\r\n           //console.log(products);\r\n           let html =\"\"\r\n           products.forEach(product => html += Component(product))\r\n           d.getElementById(\"products\").insertAdjacentHTML(\"beforeend\", html)\r\n           d.querySelector(\".loader\").style.display = \"none\"\r\n          }   \r\n       })\r\n     \r\n        \r\n      }\r\n      \r\n    })\r\n     \r\n    \r\n    \r\n    \r\n  \r\n}\n\n//# sourceURL=webpack://ephonee/./src/helpers/infinite-scroll.js?");

/***/ }),

/***/ "./src/helpers/wp_api.js":
/*!*******************************!*\
  !*** ./src/helpers/wp_api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst NAME = \"blackphone\",\r\n      DOMAIN = \"https://mobilestore.ec/\",\r\n      SITE = `${DOMAIN}/wp-json`,\r\n      API_WP = `${SITE}/wp/v2`,\r\n      PER_PAGE = 8,\r\n      PRODUCTS = `${API_WP}/product?_embed&per_page=${PER_PAGE}`,\r\n      DETAILS =`${API_WP}/product`,\r\n      CATEGORIES = `${API_WP}/categories`,\r\n      SEARCH = `${API_WP}/search?_embed&search=`\r\n\r\n      let page = 1\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  NAME,\r\n  DOMAIN,\r\n  SITE,\r\n  API_WP,\r\n  PER_PAGE,\r\n  PRODUCTS,\r\n  DETAILS,\r\n  CATEGORIES,\r\n  SEARCH,\r\n  page\r\n});\n\n//# sourceURL=webpack://ephonee/./src/helpers/wp_api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var _helpers_wp_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/wp_api.js */ \"./src/helpers/wp_api.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\nwindow.addEventListener(\"hashchange\",()=>{\r\n  _helpers_wp_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page = 1\r\n  ;(0,_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  \r\n})\r\n\n\n//# sourceURL=webpack://ephonee/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;