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

// المعطيات
let selections = document.querySelectorAll("[data-product-quantity]");
let deleteBtns = document.querySelectorAll("[data-remove-from-card]");

//  حساب سعر اجمالي المنتج
selections.forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceForProduct = newQuantity * pricePerUnit;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalPriceForProduct + "$";

    updateTotalPrice();
  });
});

// حذف عنصر ممن عربه الشراء

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (d) => {
    d.preventDefault();
    btn.closest("[data-product-info]").remove();
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  // اجمالي محتويات عربة الشراء
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUnite = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalPriceForProduct = pricePerUnite * quantity;

    totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
  });
  document.getElementById("total-price-for-all-products").textContent =
    totalPriceForAllProduct + "$";
}

const citiesByCountry = {
  sa: ["الرياض", "جدة"],
  eg: ["القاهرة", "الاسكندرية"],
  jo: ["عمان", "الزرقا"],
  sy: ["دمشق", "حلب"],
};

document.querySelectorAll("select[name='country']").forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;
    console.log(country);
  });
});

// copyright ###########
document.getElementById("copyright").innerHTML =
  "جميع الحق،ق محفوظة للكتجر سنة" + new Date().getFullYear();
