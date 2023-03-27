import Fields from "../components/fields"
import Screen from "../components/screen"
import { useState } from "react"
import { connectToAPIWeather } from "../API/connectToAPI"


const Home = () => {
	const [commend, setCommand] = useState("")
	const [data, setData] = useState({})
	const executeTheCommand = () => {
        console.log(`test: ${commend.substring(7)}`);
		if (commend.startsWith("pogoda") || commend.startsWith("Pogoda")) {
            connectToAPIWeather(commend.substring(7), setData)
		} else if (commend.startsWith("otwórz") || commend.startsWith("Otwórz")) {
		} else if (commend.startsWith("wikipedia") || commend.startsWith("Wikipedia")) {
		} 
	}
	return (
		<div className="ome_screen">
			<Screen command={commend} data={data} />
			<Fields command={commend} setCommand={setCommand} executeTheCommand={executeTheCommand}/>
		</div>
	)
}
export default Home
