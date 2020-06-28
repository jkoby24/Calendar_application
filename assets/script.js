/// variables used for displaying current day 
var theDate = new Date(),
    hour = theDate.getHours(),
     day = theDate.getDay(),
     month = theDate.getMonth(),
    date = theDate.getDate();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var saveBtn = $('#save-btn');
//empty array for local storage 
var textArea = $('.text-area');
var events = []; 

$(document).ready(function(){
// code to concatenate day of the week, month, and date. 
var dayOfWeek = days[day] + ', ' + months[month] + ' ' + date;
var currentDay = $('#currentDay')
currentDay.text(dayOfWeek);
// if else statements for ordinal number added on the end of text.
if (date === 1 || date === 21 ) {
    currentDay.text(dayOfWeek + 'st');
} 
else if (date === 2 ||date == 22 ) {
    currentDay.text(dayOfWeek + 'nd');
}
else if (date === 3 ||date == 23 ) {
    currentDay.text(dayOfWeek + 'rd');
}
else {
    currentDay.text(dayOfWeek + 'th');
}
// updates event times to show show which are past, present, or future.
$(".text-area").each( function(){
    if ($(this).attr('data-id') < hour) {
        $(this).addClass('past');
    }
     if ($(this).attr('data-id') == hour) {
        $(this).addClass('present');
    }
     if ($(this).attr('data-id') > hour) {
        $(this).addClass('future');
    }
});


function renderEvents() {
for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    }
}; 
// Stringify and set "events" key in localStorage to todos array 
function storeEvent() {
    localStorage.setItem('eventInput', JSON.stringify(events));
}

//Saves text to local storage on click 
$('saveBtn').on('click', function(){
    storeEvent()

}); 


}); 

