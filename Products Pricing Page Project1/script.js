// script.js

document.querySelectorAll('.pricing-tier').forEach(function(tier) {
    tier.addEventListener('click', function() {
      document.querySelectorAll('.pricing-tier').forEach(function(tier) {
        tier.classList.remove('active');
      });
      tier.classList.add('active');
    });
  });
  