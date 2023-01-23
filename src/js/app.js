import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


});
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let elements = document.querySelectorAll(".product");
  let price = document.querySelector(".price").textContent;
  elements.forEach(element => {
    element.setAttribute('data-price', price);
  });

});
