import WeatherType from "../weatherType"
export default interface ScreenProps{
    command: string
    data: WeatherType | any
}