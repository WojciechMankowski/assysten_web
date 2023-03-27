import weatherProps from "../types/props/weatherprops"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
const Weather = ({ data }: weatherProps) => {
	const imgSRC = `http://openweathermap.org/img/wn/${data.icon}@2x.png`
	return (
		<div className="weathers ansver">
			<img src={imgSRC} alt="" />
			<p className="weather humidity">{data.humidity}%</p>
			<p className="weather pressure">{data.pressure}hPa</p>
			<p className="weather temp">{data.tem}°C</p>
			<p className="weather temp_max"><AiOutlineArrowUp/>{data.tem_max}°C</p>
			<p className="weather temp_min"><AiOutlineArrowDown/>{data.tem_min}°C</p>
			<p className="weather speed">{data.winter.speed} km/h</p>
		</div>
	)
}

export default Weather
