interface WeatherType {
    humidity: number,
    icon: string,
    pressure: number,
    tem: number,
    tem_max: number, 
    tem_min: number, 
    winter: {
        deg: number,
        speed: number
    }
}

export default WeatherType