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