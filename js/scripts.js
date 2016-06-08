var leapYear = function(inputYear) {
  return ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0))

};

$(function () {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var inputYear = $('input#inputYear').val();


    // if (inputYear < 0) {
    //   $('.negative').show();
    // }

    if (leapYear(inputYear)) {
      $('.not').text('');
    } else {
        $('.not').text('not ');
      }

    $('#result').show();
    $('.inputYear').text(inputYear);

    if (inputYear < 0) {
      $('.negative').text('Please enter a positive number.');
    }
  });
});
