import Fields from "../components/fields"
import Screen from "../components/screen"
import { useState, useEffect } from "react"
import { connectToAPIWeather } from "../API/connectToAPI"
import { connectToAPIOpen } from "../API/connectToAPI"
import { connectToAPIwWikipedia } from "../API/connectToAPI"

const Home = () => {
	const [commend, setCommand] = useState("")
	const [data, setData] = useState({})
	useEffect(() => {
		let user_local = localStorage.getItem("user")
		console.log(user_local === "")
		if (user_local === "") {
			window.location.replace("http://localhost:3000/login")
		}
	}, [])

	const executeTheCommand = () => {
		console.log(`test: ${commend.substring(7)}`)
		if (commend.startsWith("pogoda") || commend.startsWith("Pogoda")) {
			connectToAPIWeather(commend.substring(7), setData)
		} else if (commend.startsWith("otwórz") || commend.startsWith("Otwórz")) {
			connectToAPIOpen(commend.substring(7), setData)
		} else if (commend.startsWith("wikipedia") || commend.startsWith("Wikipedia")) {
			connectToAPIwWikipedia(commend.substring(10), setData)
		}
	}
	return (
		<div className="ome_screen">
			<Screen command={commend} data={data} />
			<Fields command={commend} setCommand={setCommand} executeTheCommand={executeTheCommand} />
		</div>
	)
}
export default Home
