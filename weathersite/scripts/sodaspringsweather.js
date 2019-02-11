/**********************************************
 * get the weather information from the api
 * *******************************************/
//get the weather forcast
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=226d54631d22f465fe07cf31d92addb5';
var request = new XMLHttpRequest();
request.open('GET', apiURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var weatherData = request.response;
	weatherSummary(weatherData);
	conditions(weatherData);
	windChill(weatherData); 
}
//get the five day forcast
forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=bbb29af6b118334de3dab62fc49e8d42';
var forcastrequest = new XMLHttpRequest();
forcastrequest.open('GET', forcastURL);
forcastrequest.responseType = 'json';
forcastrequest.send();
forcastrequest.onload = function () {
	var weatherData = forcastrequest.response;
	fiveDayForcast(weatherData);
	
}
// inserts the current conditions into the webpage
function conditions(jsonObj) {
	var currentCondition = jsonObj.weather[0];
	var insertCondition = document.getElementById('conditions');
	var icon = document.createElement('img');
	var name = currentCondition.icon;
	icon.src = "http://openweathermap.org/img/w/" + name +".png";
	var outlook = document.createElement('p');
	outlook.textContent = currentCondition.main;
	insertCondition.appendChild(icon);
	insertCondition.appendChild(outlook);
}
//inserts the current conditions into the weather summary
function weatherSummary(jsonObj) {

	var currently = jsonObj.weather[0].main;
	var temperature = jsonObj.main.temp;
	var humidity = jsonObj.main.humidity;
	var rainFall = jsonObj.rain;
	var windSpeed = jsonObj.wind.speed;

	document.getElementById('outlook').innerHTML = currently;
	document.getElementById('temp').innerHTML = temperature.toFixed(0) + "&deg F";
	document.getElementById('humid').innerHTML = humidity;
	document.getElementById('precipitation').innerHTML = rainFall;
	document.getElementById('wind').innerHTML = windSpeed;
}	
// calculate windchill
function windChill(jsonObj) {
	var t = jsonObj.main.temp;
	var ws = jsonObj.wind.speed;
	var s = Math.pow(ws, .16);
	var f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
	document.getElementById('windoutput').innerHTML = f.toFixed(0) + "&deg F";
}
//five day forcast function
function fiveDayForcast(data) {
	//find out todays date and populate the days of the week in the forcast.

	var date = new Date();
	var day = date.getDay();
	var weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thur";
	weekday[5] = "Fri";
	weekday[6] = "Sat";
	var today = day;
	var dc = 0;
	for (var d = 0; d < 5; d++) {
		if (today < 6)
			today += 1;
		else
			today = 0;
		var count = "wday" + d;
		document.getElementById(count).innerHTML = weekday[today];
	}
	for (var i = 0; i < 40; i+=7) {
		var dTemp = data.list[i];
		var daycount = "day" + dc;
		var dayTemp = dTemp.main.temp;
		document.getElementById(daycount).innerHTML = dayTemp.toFixed(0) + "&deg F";
		dc++;
	}

}
