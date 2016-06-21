var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();
var str;

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();

function daysLeft() {
	var a = $( "#datepicker" ).datepicker('getDate').getTime();
	var b = today.getTime();
	var c = 24*60*60*1000;
	var diffDays = Math.round((a - b)/c);
	str = "You have "+diffDays+" days left!";
// 13. You are almost there!
// We need a variable where we can store the integer value difference of days and display that in a concatenated HTML string.
// "You have ____ days left!"

}

$("#datepicker").on("change", function(){
	daysLeft();
	$("#result").html(str);

// 14. Now, instead of console.log, let's update the HTML string every time the user clicks a date.
// Use jQuery to write the result string in the element with an id of 'result'

// _____

});

// UH-OH! We defined the variable inside daysLeft and we need the same data in our .on('change', function(){})
// 15. Define the variable globally and leave your local variable references alone.

