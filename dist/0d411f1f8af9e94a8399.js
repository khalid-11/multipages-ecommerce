window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./css/style.css";
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const addToCart = document.querySelectorAll(".custom-thumbnail .overlay .btn");
console.log(addToCart);

addToCart.forEach((e) => {
  e.addEventListener("click", () => {
    window.alert(" تأكيد اضافه المنتج الى عربة التسوق");
  });
});

let colorOptions = document.querySelectorAll(" .color-option input[type='radio']")
let sizeOptions = document.querySelectorAll(" .size-option input[type='radio']")


colorOptions.forEach(item => {
  item.addEventListener("change", item => {
    colorOptions.forEach(i => {
      i.classList.remove("active")
      console.log(i)
    })
  } )
})