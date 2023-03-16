const screen = document.querySelector(".screen")
const comend = document.querySelector(".comend")
const ansver = document.querySelector(".ansver")
const comend_input = document.querySelector(".comend_input")
const comend_run = document.querySelector(".comend_run")
let comend_value = comend_input.value

const URL = "http://127.0.0.1:5000/api"

let weather_data = {
	humidity: 0,
	pressure: 0,
	temp: 0,
	temp_max: 0,
	temp_min: 0,
	speed: 0,
	icon: "",
}
const clearDiv = () => {
	const elements = document.querySelectorAll(".weather")
	const elementsP = ansver.querySelectorAll("p")
	elements.forEach(el => el.remove())
	elementsP.forEach(el => el.remove())
}
const createElementsWeather = () => {
	const div_weather = document.createElement("div")
	div_weather.classList.add("weathers")
	const div = document.createElement("div")
	const icon = document.createElement("img")
	// http://openweathermap.org/img/wn/10d@2x.png
	icon.src = `http://openweathermap.org/img/wn/${weather_data["icon"]}@2x.png`
	icon.classList.add("weather_icon")
	div.classList.add("weathers")
	const humidity = document.createElement("p")
	humidity.innerHTML = `Wilgotność: ${weather_data["humidity"]}%`
	humidity.classList.add("weather")
	humidity.classList.add("humidity")
	const pressure = document.createElement("p")
	pressure.innerHTML = `Ciśnienie: ${weather_data["pressure"]} hPa`
	pressure.classList.add("weather")
	pressure.classList.add("pressure")
	const temp = document.createElement("p")
	temp.innerHTML = `${weather_data["temp"]}°C`
	temp.classList.add("weather")
	temp.classList.add("temp")
	const temp_max = document.createElement("p")
	temp_max.innerHTML = `&#8593; ${weather_data["temp_max"]}°C`
	temp_max.classList.add("weather")
	temp_max.classList.add("temp_max")
	const temp_min = document.createElement("p")
	temp_min.innerHTML = `&#8595; ${weather_data["temp_min"]}°C`
	temp_min.classList.add("weather")
	temp_min.classList.add("temp_min")
	const speed = document.createElement("p")
	speed.innerHTML = `Wiatr: ${weather_data["speed"]} km/h`
	speed.classList.add("weather")
	speed.classList.add("speed")
	div.appendChild(humidity)
	div.appendChild(pressure)
	div_weather.appendChild(icon)
	div_weather.appendChild(temp)
	div.appendChild(temp_max)
	div.appendChild(temp_min)
	div.appendChild(speed)
	ansver.appendChild(div_weather)
	ansver.appendChild(div)
}
const createElementOpen = (word, url) => {
	const element_a = document.createElement("a")
	element_a.setAttribute("href", url)
	element_a.setAttribute("target", "_blank")
	element_a.innerHTML = word
	const element_p = document.createElement("p")
	element_p.innerHTML = `Kliknij poniższe słowo ${word}: `
	element_p.append(element_a)

	ansver.append(element_p)
}
const executeCcommandWeather = city => {
	console.log(city)
	const url = `${URL}/weather/${city}`
	fetch(url)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			weather_data = { ...weather_data, ...res["data"], ...res["wind"] }
			weather_data.icon = res.icon
			createElementsWeather()
			console.log(weather_data)
		})
		.catch(err => console.log(err))
}

const executeCcommandOpen = async word => {
	const url = `${URL}/open/${word}`
	console.log(url)
	const data = await fetch(url).then(res => res.json())
	createElementOpen(word, data.url)
}
const createElementWikipedia = data => {
	const element_h2 = document.createElement("h2")
	element_h2.innerHTML = data.title
	const element_p = document.createElement("p")
	element_p.innerHTML = data.content
	element_p.classList.add("wikipedia_content")
	const element_a = document.createElement("a")
	element_a.setAttribute("href", data.url)
	element_a.setAttribute("target", "_blank")
	element_a.innerHTML = "informacji"
	const element_p_a = document.createElement("p")
	element_p_a.innerHTML = "Kliknij link aby przeczytać więcej : "
	element_p_a.append(element_a)
	ansver.append(element_h2)
	ansver.append(element_p)
	ansver.append(element_p_a)
}
const executeCcommandWikipedia = async word => {
	const url = `${URL}/wikipedia/${word}`
	console.log(url)
	const data = await fetch(url).then(res => res.json())
	console.log(data)
	createElementWikipedia(data)
}
const createElementListHelp = data => {
	const element_h2 = document.createElement("h2")
	element_h2.innerHTML = "Nie znam tej komendy. Lista komend"
	const element_ul = document.createElement("ul")
	data.forEach(el => {
		const element_li = document.createElement("li")
		element_li.innerHTML = el
		element_ul.append(element_li)
	})
	ansver.append(element_h2)
	ansver.append(element_ul)
}
// ai ...
const createElementAI = data => {
	const element_p = document.createElement("p")
	element_p.innerHTML = data.text
	ansver.append(element_p)
	if (!data.completion) {
		const element_error = document.createElement("p")
		element_error.innerHTML = "Nie mogę dokończyć tej komendy"
		element_error.classList.add("error")
		ansver.append(element_error)
	}
}
const executeCcommandAI = async word => {
	const url = `${URL}/ai/${word}`
	console.log(url)
	const data = await fetch(url).then(res => res.json())
	console.log(data)
	createElementAI(data)
}
const executeCcommandHelp = async () => {
	const url = `${URL}/help`
	console.log(url)
	const data = await fetch(url).then(res => res.json())
	console.log(data)
	createElementListHelp(data)
}
const executeCcommand = comend => {
	clearDiv()
	if (comend.startsWith("pogoda") || comend.startsWith("Pogoda")) executeCcommandWeather(comend.substring(7))
	else if (comend.startsWith("otwórz") || comend.startsWith("Otwórz")) executeCcommandOpen(comend.substring(7))
	else if (comend.startsWith("wikipedia") || comend.startsWith("Wikipedia"))
		executeCcommandWikipedia(comend.substring(10))
	else if (comend.startsWith("ai") || comend.startsWith("AI")) executeCcommandAI(comend.substring(3))
	else executeCcommandHelp()
	comend_input.value = ""
}

const sendComend = e => {
	e.preventDefault()
	comend_value = comend_input.value
	comend.innerHTML = comend_value
	console.log(typeof comend_value)
	executeCcommand(comend_value)
}

comend_run.addEventListener("click", sendComend)
const collapsible = document.querySelector(".collapside");
const menu_icon = document.querySelector(".menu_icon");
menu_icon.addEventListener("click", () => {
  collapsible.classList.toggle("collapside--expamded");
});


