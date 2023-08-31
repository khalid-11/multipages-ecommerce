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
let productItems = document.querySelectorAll(".product-item");
let itemsCount = document.querySelectorAll(".custom-form-control.quantity");
let productPrices = document.querySelectorAll(".product-item .product-price ");
let totalPricesForEachProduct = document.querySelectorAll(
  ".product-item .total-price-for-product"
);

itemsCount.forEach((item) => {
  item.addEventListener("change", (i) => {
    let itemsCountArray = Array.from(itemsCount);
    let currentIndex = itemsCountArray.indexOf(i.currentTarget);
    let thePrice = parseInt(productPrices[currentIndex].textContent);
    console.log(thePrice);
    let theCount = parseInt(itemsCountArray[currentIndex].value);
    console.log(theCount);
    let theTotal = totalPricesForEachProduct[currentIndex];
    theTotal.textContent = `${getTotalPrice(theCount, thePrice)}$`;
  });
});

function getTotalPrice(pp, pc) {
  return pp * pc;
}

console.log(getTotalPrice(400, 3));
