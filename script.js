var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();
var inputValue="";

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();
var resultString = "";

function daysLeft() {
    var a = $( "#datepicker" ).datepicker('getDate').getTime();
    var b = today.getTime();
    var c = 24*60*60*1000;
    var diffDays = Math.floor(a/c)-Math.floor(b/c);
    inputValue = $(".endDate").val();

    if(inputValue!=="" && diffDays<0) {
    	resultString = ("<p>You have chosen a day in the past.  It is "+diffDays+" days ago</p>");
    } else if (inputValue !== "" && diffDays===1) {
    	resultString = ("<p>You have selected tomorrow! It's tomorrow!</p>")
    } else if (inputValue!=="" && diffDays>0) {
	    resultString = ("<p>You have " + diffDays + " days left!");
	} else if (inputValue==="" && diffDays<0) {
		resultString = ("<p>You haven't put in an input, and, selected a day in the past.  It is "+diffDays+" days ago</p>");
	} else if (inputValue==="" && diffDays===1) {
		resultString = ("<p>You have selected tomorrow, but haven't given an input.  It's, tomorrow....</p>");
	} else if (inputValue==="" && diffDays>0) {
		resultString = ("<p>You have not put in an input, but, have "+diffDays+" days left!</p>");
	} else if (diffDays===0) {
		resultString = ("<p>You chose today.  It's...today.</p>");
	} else {
		resultString = ("<p>You chose a different scenario.  It's a difference of "+diffDays+" days");
	}
}

$("#datepicker").on("change", function(){
    daysLeft();
    $("#result").html(resultString);
});


// 16. STRETCH Challenges:

// For the highly ambitious, you may write a couple if statements and customize the result HTML string accordingly.
// Here are the possibilities I've thought of; there may be more.
// condition 1:  there is an input but someone has selected a date in the past
// condition 2:  there is an input and the day is tomorrow
// condition 3:  there is an input and the date is in the future
// condition 4:  there is NO input but someone has selected a date in the past
// condition 5:  there is NO input and the day is tomorrow
// condition 6:  there is NO input and the date is in the future.



