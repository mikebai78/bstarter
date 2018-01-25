import 'bootstrap';
import '../sass/main.scss';

$(document).ready(function(){
  $("img").click(function(){
    $(this).hide(1000);
  });
});

console.log("works!");
