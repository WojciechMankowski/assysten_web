import Input from "../components/Form/input"
import Label from "../components/Form/label"
import Button from "../components/Form/button"
import { saveUser } from "../API/api_user"
import { useState } from "react"
const Register = () => {
	const [userName, setUserName] = useState("")
	const [password, setPasworrd] = useState("")
	const [email, setEmail] = useState("")

	return (
		<form action="" className="register" autoComplete="off">
			<Label text="Nazwa uzytkownika: " id="username" />
			<Input id="username" type="text" onChange={setUserName} value={userName} />
			<Label text="Hasło: " id="password" />
			<Input id="password" type="password" onChange={setPasworrd} value={password} />
			<Label text="Email: " id="email" />
			<Input id="email" type="email" onChange={setEmail} value={email} />
			<Button
				type="button"
				text="Zarejestruj się"
				function={() => {
					saveUser(email, userName, password)
					setEmail("")
					setUserName("")
					setPasworrd("")
				}}
			/>
		</form>
	)
}
export default Register
