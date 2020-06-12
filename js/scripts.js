$(document).ready(function() {
  $('.form-ques').submit(function(event) {
    event.preventDefault();

    let pizza = $("input[name='pizza']:checked").val();
    let band = $("input[name='band']:checked").val();
    let time = $("input[name='time']:checked").val();
    let adventure = $("input[name='adventure']:checked").val();
    let movie = $("input[name='movie']:checked").val();

    $('#pizzaCheese').hide();
    $('#pizzaPep').hide();
    $('#pizzaMush').hide();
    $('#movieGump').hide();
    $('#movieGem').hide();
    $('#movieNobody').hide();
    $('#not').hide();
    $('#notSure').hide();



    if (time === 'couch') {
      $('#not').show();
    } else if (pizza === 'mush' && band === 'kiwanuka') {
      $('#pizzaMush').show();
    } else if (pizza === 'cheese' && band === 'mcgraw') {
      $('#pizzaCheese').show();
    } else if (adventure === 'amazon' && movie === 'gump') {
      $('#movieGump').show();
    } else if (adventure === 'burning' && movie === 'gem') {
      $('#movieGem').show();
    } else if (adventure === 'machu' && movie === 'nobody') {
      $('#movieNobody').show();
    } else {
      $('#notSure').show();
    }
      
      
  });

});

