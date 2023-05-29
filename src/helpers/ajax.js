export  async function ajax(props) {
  let {url, cbSuccess} = props;

  await fetch(url)
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => cbSuccess(json))
  .catch(err =>{
    console.log(err)
    let mesagge = `${err.statusText  || "Error"}`
    document.getElementById("products").innerHTML =`<h2 class="error">${mesagge} ${err.status} </h2>`
    document.getElementById("loader").style.display = "none"
  })
}