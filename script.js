var today = new Date();

var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);


// 5. For this project, we are using the jQuery's .datepicker(), which is actually part of the jQuery UI library.
// You can read more about the jQuery UI datepicker here: https://jqueryui.com/datepicker/
// Use jQuery to grab the element with an id of "datepicker" and call .datepicker() on it:
	$("#datepicker").datepicker();
// _____


// 6. Now we need to create a function daysLeft(), 
// which will eventually tell us how many days are left until the date we pick in our datepicker
	function daysLeft() {
		var a = $("#datepicker").datepicker("getDate").getTime();
		return a;
	}
// _____

// 7. daysLeft will need some local variables. Let's define the first one, the time we pick, as `a`
// You need to call datepicker's 'getDate' method and then you have to call the Date() object's .getTime(); method on the whole thing:

// var a = _____

// 8. Outside of the daysLeft() function, we need to call daysLeft() using jQuery's .on('change', ____) event handler.
// Implement the function so it logs the value of `a` every time you click a date on the calendar.
	$("#datepicker").on("change",function(){
		daysLeft();
		console.log(daysLeft());
	});
// HINT:
// You may need to temporarily add a `return a` inside the daysLeft() function in order for this to work.


