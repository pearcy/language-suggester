$(document).ready(function() {
  $('.form-ques').submit(function(event) {
    event.preventDefault();

    let pizza = $("input[name='pizza']:checked").val();
    let band = $("input[name='band']:checked").val();
    let time = $("input[name='time']:checked").val();

      console.log(pizza);
      console.log(band);
      console.log(time);

    if (pizza === 'cheese' && band === 'mcgraw' || time === 'couch') {
      $('#pizzaCheese').show();
    } else if (pizza === 'pep' && band === 'bon' || time === 'jog' ) {
      $('#pizzaPep').show();
    } else if (pizza === 'mush' && band === 'kiwanuka' || time === 'pizza') {
      $('#pizzaMush').show();
    }
      
  });

});