import Input from '../components/Form/input'
import Label from '../components/Form/label'
import Button from '../components/Form/button'
import { useState } from 'react'
const Login = () => {
	const [userName, setUserName] = useState('')
	const [password, setPasworrd] = useState('')
	return (
		
			<form method="post" className='login'>
				<Label text="Nazwa uzytkownika: " id="username" />
				<Input type="text" id="username" onChange={setUserName} />
                <Label text="Nazwa uzytkownika: " id="password" />
				<Input type="password" id="password" onChange={setPasworrd} />
                <Button type='submit' text='Zaloguj się'/>
			</form>
	
	)
}
export default Login
