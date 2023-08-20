console.log('javascript')

document.getElementById('card-one').addEventListener('click', function(){
  const productPrice = inputPrice('price-one')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
}) 

document.getElementById('card-two').addEventListener('click', function(){
  const productPrice = inputPrice('price-two')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
})  

document.getElementById('card-three').addEventListener('click', function(){
  const productPrice = inputPrice('price-three')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
})

document.getElementById('card-four').addEventListener('click', function(){
  const productPrice = inputPrice('price-four')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
})

document.getElementById('card-five').addEventListener('click', function(){
  const productPrice = inputPrice('price-five')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
})

document.getElementById('card-six').addEventListener('click', function(){
  const productPrice = inputPrice('price-six')
  const totalPricePrevious = inputPrice('total-price')
  const newTotalPrice = totalPricePrevious+ productPrice;
  setValue('total-price', newTotalPrice);
})

const p1 = document.getElementById('total-price').innerText;
console.log(p1);




