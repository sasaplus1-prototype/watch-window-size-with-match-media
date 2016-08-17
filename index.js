(function(){

  'use strict';

  var mql = window.matchMedia('screen and (min-width: 768px)');

  var p = document.getElementById('js-p');

  p.innerHTML = 'screen and (min-width: 768px) : ' + mql.matches;

  mql.addListener(function(event) {
    p.innerHTML = 'screen and (min-width: 768px) : ' + event.matches;
  });

}());
