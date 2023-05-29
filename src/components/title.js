

export function Title() {
  const d = document
  
  let $logo = d.createElement("img");
  $logo.classList.add("logo");
  $logo.src = "src/assets/logo.png" 
  
  return $logo;
}