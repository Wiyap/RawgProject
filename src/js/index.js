import { routes } from './routes.js'

let pageArgument;
let searchForm = document.querySelector("form");
let showMore = document.querySelector("#ShowMore");

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  var pageContent = document.getElementById("pageContent");

  routes[path[0]](pageArgument);

  

  if(path[0] === "pagedetail"){
    showMore.classList.add("hidden")
  }else{
    showMore.classList.remove("hidden");
  }
  
  return true;
};  


window.addEventListener("hashchange", () => {
  setRoute();
});

window.addEventListener("DOMContentLoaded", () => {  
  setRoute();
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchInput = searchForm[0].value;
  window.location.hash = "pagelist/" + searchInput.replace(/\s+/g, "-");
});

showMore.addEventListener("click", () => {
  let hiddenDivs = document.querySelectorAll(".hidden")
  for(let i = 0; i < 3; i++){
    hiddenDivs[i].classList.remove("hidden")
  }
  
  if (document.querySelectorAll(".hidden").length === 0){
    showMore.classList.add("hidden")
  }
})
