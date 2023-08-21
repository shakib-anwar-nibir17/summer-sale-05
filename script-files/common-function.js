// string to number conversion
function inputPrice(inputId) {
  const inputPriceField = document.getElementById(inputId); // can be product price or total price
  const inputPriceString = inputPriceField.innerText;
  const inputPrice = parseFloat(inputPriceString);
  return inputPrice;
}

// setting the value
function setValue(inputId, value) {
  const valueInString = parseFloat(value);
  const valueFormatted = valueInString.toFixed(2);
  document.getElementById(inputId).innerText = valueFormatted;
}

// ADDING PRODUCT NAME TO CART
function addToProductEntry(inputId) {
  const productEntry = document.getElementById("product-entry");
  const count = productEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add = "my-4";
  p.innerHTML = ` ${count + 1}. ${inputId} `;

  productEntry.appendChild(p);
}

// main card function
function productCardClicked(cardPriceId, productName) {
  const productPrice = inputPrice(cardPriceId);
  const totalPricePrevious = inputPrice("total-price");
  const newTotalPrice = totalPricePrevious + productPrice;
  addToProductEntry(productName);
  setValue("total-price", newTotalPrice);
  setValue("total", newTotalPrice);
  enablePurchaseButton();
  enableCouponButton();
}
// condition to enable purchase button
function enablePurchaseButton() {
  const validationString = document.getElementById("total-price").innerText;
  const validation = parseFloat(validationString);
  const purchaseButton = document.getElementById("purchase-btn");
  if (validation > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }
}

// condition to enable coupon button
function enableCouponButton() {
  const validationString = document.getElementById("total-price").innerText;
  const validation = parseFloat(validationString);
  const purchaseButton = document.getElementById("coupon-button");
  if (validation >= 200) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }
}

// rating system propagation stopping

function stopRatingClickPropagation(event) {
  event.stopPropagation();
}

const ratingInputs = document.querySelectorAll('.mask');

for (let i = 0; i < ratingInputs.length; i++) {
  ratingInputs[i].addEventListener('click', stopRatingClickPropagation);
}

// go home button
document.getElementById("go-home").addEventListener("click", function () {
  window.location.href = "index.html";
  document.getElementById("product-entry").innerHTML = "";
  document.getElementById("total-price").innerText = "";
  document.getElementById("discount-amount").innerText = "";
  document.getElementById("total").innerText = "";
  
});

// coupon apply button
document.getElementById("coupon-button").addEventListener("click", applyCoupon);
document.getElementById("coupon-field").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    applyCoupon();
  }
});

function applyCoupon() {
  const couponField = document.getElementById("coupon-field");
  const couponCode = couponField.value;
  if (couponCode === "SELL200") {
    couponField.value = "";
    const totalPrice = document.getElementById("total-price").innerText;
    const totalPriceValue = parseFloat(totalPrice);
    const discountPrice = totalPriceValue * 0.2;
    const total = totalPriceValue - discountPrice;
    setValue("discount-amount", discountPrice);
    setValue("total", total);
  } else {
    couponField.value = "";
    alert("Invalid Coupon Code");
    return;
  }
}
