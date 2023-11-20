//your JS code here. If required.

let year = prompt("enter the year");

function daysOfYear(year){
	if((year%4==0 && year%100!==0) ||year%400==0){
	console.log("366");
}
	else{
		console.log("365");
	}
}
}