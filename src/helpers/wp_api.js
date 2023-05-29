
const NAME = "blackphone",
      DOMAIN = "https://mobilestore.ec/",
      SITE = `${DOMAIN}/wp-json`,
      API_WP = `${SITE}/wp/v2`,
      PER_PAGE = 8,
      PRODUCTS = `${API_WP}/product?_embed&per_page=${PER_PAGE}`,
      DETAILS =`${API_WP}/product`,
      CATEGORIES = `${API_WP}/categories`,
      SEARCH = `${API_WP}/search?_embed&search=`

      let page = 1
export default{
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  PRODUCTS,
  DETAILS,
  CATEGORIES,
  SEARCH,
  page
}