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

addToCart.forEach((e) => {
  e.addEventListener("click", () => {
    window.alert(" تأكيد اضافه المنتج الى عربة التسوق");
  });
});

let colorOptionsInputs = document.querySelectorAll(
  ' .color-option input[type="radio"]'
);
let sizeOptionsInputs = document.querySelectorAll(
  " .size-option input[type='radio']"
);

let colorOptions = document.querySelectorAll(".color-option");
let sizeOptions = document.querySelectorAll(".size-option");

colorOptionsInputs.forEach((item) => {
  item.addEventListener("change", () => {
    colorOptions.forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  });
});
sizeOptionsInputs.forEach((item) => {
  item.addEventListener("change", () => {
    sizeOptions.forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  });
});

//  حساب سعر اجمالي المنتج
// المعطيات
let selections = docuemnt.querySelectorAll("[data-product-quantitt]");

console.log(selections);

document.getElementById("copyright").innerHTML =
  "جميع الحق،ق محفوظة للكتجر سنة" + new Date().getFullYear();
