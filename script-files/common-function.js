// string to number conversion
function inputPrice(inputId){
  const inputPriceField = document.getElementById(inputId); // can be product price or total price
  const inputPriceString = inputPriceField.innerText;
  const inputPrice = parseFloat(inputPriceString);
  return inputPrice;
}

// setting the value
function setValue(inputId, value){
  const valueInString = parseFloat(value);
  const valueFormatted = valueInString.toFixed(2);
  document.getElementById(inputId).innerText = valueFormatted;
}

function enablePurchaseButton(){
  const validationString = document.getElementById('total-price').innerText;
  const validation = parseFloat(validationString);
  const purchaseButton = document.getElementById('purchase-btn');
  if( validation > 0){
    purchaseButton.removeAttribute('disabled');
  }
  else{
    purchaseButton.setAttribute('disabled', true);
  }
  
}

function enableCouponButton(){
  const validationString = document.getElementById('total-price').innerText;
  const validation = parseFloat(validationString);
  const purchaseButton = document.getElementById('coupon-button');
  if( validation > 200){
    purchaseButton.removeAttribute('disabled');
  }
  else{
    purchaseButton.setAttribute('disabled', true);
  }
  
}

function applyCoupon(){
  document.getElementById('coupon-button').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;
    if( couponCode === 'SELL200'){
      const totalPrice = document.getElementById('total-price').innerText;
       const totalPriceValue = parseFloat(totalPrice);
       const discountPrice = totalPriceValue * 0.2
       const total = totalPriceValue - discountPrice;
       setValue('discount-amount', discountPrice);
        setValue('total', total);
    }
    else{
      return;
    }
  })
}