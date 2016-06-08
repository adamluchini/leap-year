var leapYear = function(inputYear) {
  if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0)){
  }
};

$(function () {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var inputYear = $('input#inputYear').val();
    var result = leapYear(inputYear);

    if (result === true) {
      $('.not').text('');
    } else {
        $('.not').text('not');
    }
    $('.yearText').text(inputYear);
    $('#result').show();
  });
});
