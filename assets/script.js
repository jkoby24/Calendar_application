/// variables used for displaying current day 
var theDate = new Date(),
    hour = theDate.getHours(),
     day = theDate.getDay(),
     month = theDate.getMonth(),
    date = theDate.getDate();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var saveBtn = $('#save-btn')[0];
//empty array for local storage 
var textArea = $('.text-area');
var eventSet = [{
    times: 9,
    textInput: '',
},
{
    times: 10,
    textInput: '',
}]


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


//render event list 
function renderEvents () {
    for (var i = 0; i < eventSet.length; i++ ) {
    eventList = eventSet[i];
    textArea.val() = eventList;
}
}


// Stringify and set "events" key in localStorage to todos array 
function storedEvents() {
    var eventText = JSON.parse(localStorage.getItem("events"));
    
    if (!eventText) {
        return;
      }
     else {eventSet = eventText;
    }

  }



   

//Saves text to local storage on click
$('.saveBtn').on('click', function() {

    var text = textArea.val();
    var time = $(this).attr('data-id');
    

    for (var i = 0; i < eventSet.length; i++ ) {
        if (eventSet[i].times == time){
            eventSet[i].textInput = text;
        }
    }
    
    localStorage.setItem("events", JSON.stringify(eventSet));

}); 

storedEvents()



}); 

