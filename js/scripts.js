$(document).ready(function() {
  $('.form-ques').submit(function(event) {
    event.preventDefault();

    let pizza = $("input[name='pizza']:checked").val();
    let band = $("input[name='band']:checked").val();
      console.log(pizza);
      console.log(band);

    if (pizza === 'cheese') {
      $('#pizzaCheese').show();
    } else if (pizza === 'pep') {
      $('#pizzaPep').show();
    } else if (pizza === 'mush') {
      $('#pizzaMush').show();
    }
      
  });

});