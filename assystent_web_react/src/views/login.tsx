import Input from "../components/Form/input"
import Label from "../components/Form/label"
import Button from "../components/Form/button"
import getUser from "../API/api_user"
import { useState } from "react"
import LoginProps from "../types/props/login"

const Login = ({ setUser, user }: LoginProps) => {
	const [userName, setUserName] = useState("")
	const [password, setPasworrd] = useState("")
	const login = () => {
		getUser(userName, password, setUser)
		setPasworrd("")
		setUserName("")
		localStorage.setItem("user", JSON.stringify(user))
		window.location.replace("http://localhost:3000")
	}
	return (
		<form className="login" autoComplete="off">
			<Label text="Nazwa uzytkownika: " id="username" />
			<Input type="text" id="username" onChange={setUserName} value={userName} />
			<Label text="Hasło: " id="password" />
			<Input type="password" id="password" onChange={setPasworrd} value={password} />
			<Button type="button" text="Zaloguj się" function={login} />
			<p>
				Jesli nie maż konta to załóż konto <a href="http://localhost:3000/registration">tutaj</a>
			</p>
		</form>
	)
}
export default Login
