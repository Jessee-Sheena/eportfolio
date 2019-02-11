/*********************************************
 * Footer date
 * puts the current date in the footer
 *********************************************/

    var today = new Date();
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    //get the day of the week
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayweek = weekday[day];

    //get the month
    var whatMonth = new Array(12)
    whatMonth[0] = "January";
    whatMonth[1] = "February";
    whatMonth[2] = "March";
    whatMonth[3] = "April";
    whatMonth[4] = "May";
    whatMonth[5] = "June";
    whatMonth[6] = "July";
    whatMonth[7] = "August";
    whatMonth[8] = "September";
    whatMonth[9] = "October";
    whatMonth[10] = "November";
    whatMonth[11] = "December";
    var mon = whatMonth[month];

    document.getElementById('date').innerHTML = dayweek + ", " + date + " " + mon + " " + year;


