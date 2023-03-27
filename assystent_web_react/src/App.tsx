import { useState, useEffect } from 'react'
import Menu from "./views/menu"
import Register from "./views/register"
import Login from "./views/login"
import Home from "./views/home"
import Logout from "./views/logout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./CSS/style.css"


function App() {
	
	const [user, setUser] = useState({id: 0,
		email: "",
		username: "",
		password: ""})
	useEffect(()=>{
		let user_local = localStorage.getItem("user");
		console.log(user_local);
		let user_data = JSON.parse(user_local || "")
		if (user_data !== ""){
			setUser({...user_data})
		}

	}, [])
	return (
		<div className='main'>
			<Router>
				<Menu user={user} />

			<Routes>
				<Route path="/" element=<Home /> />
				<Route path="/registration" element=<Register /> />
				<Route path="/login" element=<Login setUser={setUser} user={user}/> />
				<Route path="/logout" element=<Logout /> />
			</Routes>
		</Router>
		</div>
	)
}

export default App
