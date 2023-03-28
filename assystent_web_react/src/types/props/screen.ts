import WeatherType from "../weatherType"
import open from "../open"
import Wikipedia from "../wikipedia"
export default interface ScreenProps{
    command: string
    data: WeatherType | any | open | Wikipedia
}