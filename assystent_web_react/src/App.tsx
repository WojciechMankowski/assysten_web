import Menu from "./views/menu"
import Register from "./views/register"
import Login from "./views/login"
import Home from "./views/home"
import Logout from "./views/logout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./CSS/style.css"
function App() {
	return (
		<Router>
				<Menu user="wojtek" />

			<Routes>
				<Route path="/" element=<Home /> />
				<Route path="/registration" element=<Register /> />
				<Route path="/login" element=<Login /> />
				<Route path="/logout" element=<Logout /> />
			</Routes>
		</Router>
	)
}

export default App
