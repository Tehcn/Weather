const ipAPI = '//api.ipify.org?format=json';
const weatherAPI = "https://api.openweathermap.org/data/2.5/onecall";

async function getIP() {
	return await fetch(ipAPI)
		.then(response => response.json())
		.then(data => data.ip);
}

async function getLoc() {
	return await fetch(`https://ipapi.co/${await getIP()}/json`)
		.then(response => response.json())
		.then(data => `lat=${data.latitude}&lon=${data.longitude}`);
}

async function getWeather(type) {
	return await fetch(`${weatherAPI}?${await getLoc()}&appid=56c186635d004504bb53adb4a191919f&exclude=minutely,hourly,daily`)
		.then(response => response.json())
		.then(data => data);

}

function kelvinToFahrenheit(k) {
	return Math.trunc((k - 273.15) * 9 / 5 + 32);
}


function titleize(str) {
	let upper = true
	let newStr = ""
	for (let i = 0, l = str.length; i < l; i++) {
		// Note that you can also check for all kinds of spaces  with
		// str[i].match(/\s/)
		if (str[i] == " ") {
			upper = true
			newStr += str[i]
			continue
		}
		newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
		upper = false
	}
	return newStr
}

function cloudCover(n) {

}

async function writeWeather() {
	var weather = await getWeather("alert");
	console.log(weather);
	if (weather.alerts) {
		document.getElementById("alert-header").innerHTML = weather.alerts.event;
		document.getElementById("alert-description").innerHTML = weather.alerts.description;
	} else {
		document.getElementById("alert-header").innerHTML = "No Alerts";
		document.getElementById("alert-description").innerHTML = "";
	}

	if (weather.current) {
		document.getElementById("weather-header").innerHTML = `${weather.current.weather[0].main}<br />`;
		document.getElementById("weather-description").innerHTML = titleize(weather.current.weather[0].description)
		document.getElementById("temperature").innerHTML = `The temperature is ${kelvinToFahrenheit(weather.current.temp)} °F`;
		document.getElementById("humidity").innerHTML = `${weather.current.humidity}% Humidity`;
		document.getElementById("wind-speed").innerHTML = `The wind speed is ${Math.trunc(weather.current.wind_speed * 2.237)}mph`;
		if(weather.current.weather[0].main != "Clouds") {
			document.getElementById("cloud-cover").innerHTML = `About ${weather.current.clouds}% Cloud Cover`;
		}
	}
}

writeWeather();