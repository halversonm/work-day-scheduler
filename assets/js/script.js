var saveBtnEl = $('.saveBtn');
var currentTime = $('#currentDay');
var timeBlock = $('.time-block')

$(function () {
    var currentHour = dayjs().hour();
    var date = dayjs().format('dddd, MMMM DD YYYY')
    currentTime.text(date);
    
    timeBlock.each(function() {
        var id = $(this).attr('id')
        
    })

});
  