
// ********** Navigation Bar toggle ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {

  if(linksContainer.classList.contains("show-links")) {
    linksContainer.classList.remove("show-links");
  }
  else {
    linksContainer.classList.add("show-links");
  }

});

links.addEventListener("click", () => {

  linksContainer.classList.remove("show-links");

});