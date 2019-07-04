<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

$(document).ready(function() {
  $('.js_tabs-link').on('click', function() {
      var tabNum = $(this).attr('href')
      $(this).addClass('tab-active')
      $(this)
          .parent()
          .siblings()
          .find('.js_tabs-link')
          .removeClass('tab-active')
      $(tabNum).show(400)
      $(tabNum).addClass('.tab-active')
      $(tabNum)
          .siblings()
          .hide(400)
      $(tabNum)
          .siblings()
          .removeClass('.tab-active')
  })
});