let URL_API = "http://127.0.0.1:3030/"
type setDataType = React.Dispatch<React.SetStateAction<{}>>

export const connectToAPIWeather = (city: string, setData: setDataType) => {
	const url = `${URL_API}api/weather/${city}`
	fetch(url)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			setData({ ...res })
		})
}
export const connectToAPIOpen = (word: string, setData: setDataType) => {
	const url = `${URL_API}api/${word}`
	fetch(url)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			setData({ ...res })
		})
}

export const connectToAPIwWikipedia= (word: string, setData: setDataType) => {
	const url = `${URL_API}api/wikipedia/${word}`
	fetch(url)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			setData({ ...res })
		})
}