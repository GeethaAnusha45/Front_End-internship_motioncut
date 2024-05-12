// scripts.js

document.querySelectorAll('.product').forEach(function(product) {
    product.addEventListener('click', function() {
      document.querySelectorAll('.product').forEach(function(product) {
        product.classList.remove('active');
      });
      product.classList.add('active');
    });
  });
  
  document.querySelectorAll('input[name="monthly-subscription"]').forEach(function(input) {
    input.addEventListener('change', function() {
      if (input.checked) {
        const priceElement = input.closest('.details').querySelector('.price');
        const price = parseInt(priceElement.textContent.replace('$', ''));
        priceElement.textContent = '$' + (price + 5);
      } else {
        const priceElement = input.closest('.details').querySelector('.price');
        const price = parseInt(priceElement.textContent.replace('$', ''));
        priceElement.textContent = '$' + (price - 5);
      }
    });
  });
  