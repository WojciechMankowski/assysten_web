import ScreenProps from "../types/props/screen"
import Weather from "./weather"

const Screen = ({ command, data }: ScreenProps) => {
	let ansver = <div className="ansver" />
	console.log(command.startsWith("pogoda"))
	const isWeather = command.startsWith("pogoda") || command.startsWith("Pogoda")
	console.log(`ekran ${isWeather && data.icon !== undefined}`);
	if (isWeather && data.icon !== undefined) {
		ansver = <Weather data={data} />
	} else if (command.startsWith("otwórz") || command.startsWith("Otwórz")) {
	} else if (command.startsWith("wikipedia") || command.startsWith("Wikipedia")) {
	}
	return (
		<div className="screen">
			<p className="comend">{command}</p>
			{ansver}
		</div>
	)
}
export default Screen
