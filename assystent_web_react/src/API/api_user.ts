import React from "react"
import User from "../types/user"

let URL_API = "http://127.0.0.1:3030/"
type setUser = React.Dispatch<React.SetStateAction<User>>
const getUser = async (name: string, password: string, set: setUser) => {
	const url = `${URL_API}users/${name}`
	fetch(url)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			console.log(res.length !== 0)
			if (res.length !== 0) {
				console.log(res.password === password)
				if (res.password === password) {
					set({ ...res })
				}
			}
		})
}

export const saveUser = (email: string, username: string, password: string) => {
	const data = {
		email: email,
		username: username,
		password: password,
	}
	let url
	url = URL_API + "users/"
	fetch(url, {
		method: "post",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(res => {
			console.log("Dodałem użytkownika:")
			console.log(res)
		})
}
export default getUser
