window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"@fortawesome/fontawesome-free/js/all.min.js";import"./css/style.css";import"./sass/style.scss";const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map((e=>new bootstrap.Tooltip(e))),addToCart=document.querySelectorAll(".custom-thumbnail .overlay .btn");addToCart.forEach((e=>{e.addEventListener("click",(()=>{window.alert(" تأكيد اضافه المنتج الى عربة التسوق")}))}));let colorOptionsInputs=document.querySelectorAll(' .color-option input[type="radio"]'),sizeOptionsInputs=document.querySelectorAll(" .size-option input[type='radio']"),colorOptions=document.querySelectorAll(".color-option"),sizeOptions=document.querySelectorAll(".size-option");colorOptionsInputs.forEach((e=>{e.addEventListener("change",(()=>{colorOptions.forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))})),sizeOptionsInputs.forEach((e=>{e.addEventListener("change",(()=>{sizeOptions.forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))}));let selections=document.querySelectorAll("[data-product-quantity]"),deleteBtns=document.querySelectorAll("[data-remove-from-card]");function updateTotalPrice(){let e=0;document.querySelectorAll("[data-product-info]").forEach((t=>{const o=t.getAttribute("data-product-price"),r=t.querySelector("[data-product-quantity]").value;e+=o*r})),document.getElementById("total-price-for-all-products").textContent=e+"$"}selections.forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=e.closest("[data-product-info]"),r=t*o.getAttribute("data-product-price");o.querySelector(".total-price-for-product").innerHTML=r+"$",updateTotalPrice()}))})),deleteBtns.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.closest("[data-product-info]").remove(),updateTotalPrice()}))}));const citiesByCountry={sa:["الرياض","جدة"],eg:["القاهرة","الاسكندرية"],jo:["عمان","الزرقا"],sy:["دمشق","حلب"]};document.querySelectorAll("select[name='country']").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=citiesByCountry[t];document.querySelectorAll("#paymentcities option").forEach((e=>e.remove()));const r=document.createElement("option"),c=document.createTextNode("اختر المدينة");r.appendChild(c),r.setAttribute("value",""),r.setAttribute("disables","true"),r.setAttribute("selected","true");const n=document.getElementById("paymentcities");n.appendChild(r),o.forEach((e=>{const t=document.createElement("option"),r=document.createTextNode(e);t.appendChild(r),t.setAttribute("value",o),n.appendChild(t)}))}))}));let creditCardInfo=document.querySelectorAll(" #form-checkout input[name='payment-method']");creditCardInfo.forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=document.querySelectorAll("#credit-card-info input");"credit_card"===t?o.forEach((e=>{e.style.display="block"})):"on_delivery"===t&&o.forEach((e=>{e.style.display="none"}))}))})),document.getElementById("copyright").innerHTML="جميع الحق،ق محفوظة للكتجر سنة"+(new Date).getFullYear();