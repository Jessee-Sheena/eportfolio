// JavaScript source code
var data = document.getElementsByClassName('towndata');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var townData = request.response;
	populateSection(townData);
}

function populateSection(jsonObj) {

	var townArray = jsonObj['towns'];
	var count = 0;
	var num = 0;
	for (var i = 0; i < townArray.length; i++) {
		if (i == 1 || i == 4 || i == 5) {
			var heading = document.createElement('h2');
			var par1 = document.createElement('p');
			var par2 = document.createElement('p');
			var par3 = document.createElement('p');
			var par4 = document.createElement('p');
			heading.textContent = townArray[i].name;
			par1.textContent = townArray[i].motto;
			par2.textContent = "Year Founded: " + townArray[i].yearFounded;
			par3.textContent = "Population: " + townArray[i].currentPopulation;
			par4.textContent = "Annual Rainfall: " + townArray[i].averageRainfall;
			data[count].appendChild(heading);
			data[count].appendChild(par1);
			data[count].appendChild(par2);
			data[count].appendChild(par3);
			data[count].appendChild(par4);
			count++;
		}
	}
	var image1 = document.createElement('img');
	var image2 = document.createElement('img');
	var image3 = document.createElement('img');
	image1.src = "images/fishhaven.jpg";
	image2.src = "images/preston.jpg";
	image3.src = "images/sodasprings.jpg";
	data[0].appendChild(image1);
	data[1].appendChild(image2);
	data[2].appendChild(image3);
}

