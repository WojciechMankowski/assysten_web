import ScreenProps from "../types/props/screen"
import Weather from "./weather"

const Screen = ({ command, data }: ScreenProps) => {
	let ansver = <div className="ansver" />
	// console.log(command.startsWith("otwórz"))
	const isWeather = command.startsWith("pogoda") || command.startsWith("Pogoda")
	const isOpen = command.startsWith("otwórz") || command.startsWith("Otwórz")
	const isWikipedia = command.startsWith("wikipedia") || command.startsWith("Wikipedia")
	console.log(isOpen && data.url !== undefined)
	if (isWeather && data.icon !== undefined) {
		ansver = <Weather data={data} />
	} else if (isOpen && data.url !== undefined) {
		ansver = (
			<div className="ansver">
				<p>
					Kliknij poniższe słowo{" "}
					<a href={data.url} target="_blank" rel="noreferrer">
						{command.substring(7)}
					</a>
				</p>
			</div>
		)
	} else if (isWikipedia && data.url !== undefined) {
		ansver = (
			<div className="ansver">
				<h3>{data.title}</h3>
				<p className="wikipedia_content">{data.extract}</p>
				<p>
					Kliknij link aby przeczytać więcej
					<a href={data.url} target="_blank" rel="noopener noreferrer">
						informacji
					</a>
				</p>
			</div>
		)
	}
	return (
		<div className="screen">
			<p className="comend">{command}</p>
			{ansver}
		</div>
	)
}
export default Screen
