var saveBtnEl = $('.saveBtn');
var currentTime = $('#currentDay');
var timeBlock = $('.time-block')

$(function () {
    var currentHour = dayjs().hour();
    var date = dayjs().format('dddd, MMMM DD YYYY')
    currentTime.text(date);
    
    timeBlock.each(function() {
        var id = $(this).attr('id')
        if(id < currentHour) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description past")
        } else if(id > currentHour) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description future")
        } else {
            $(this).children(".description").attr("class", "col-8 col-md-10 description present")
        }
    })

});
  