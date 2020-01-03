(function($) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    Typed.new('#typed', {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 50,
      startDelay: 1000,
      backDelay: 5000,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      attr: null,
      contentType: 'html', // or text
      callback: function() {
        var cursor = document.getElementsByClassName('typed-cursor')[0];
        setTimeout(function() {
          cursor.style.opacity = 0;
        }, 2000);
      }
    });
  });

  $('.hero-area-fix').ripples({
    resolution: 356,
    dropRadius: 20,
    perturbance: 0.01
  });
})(jQuery);
