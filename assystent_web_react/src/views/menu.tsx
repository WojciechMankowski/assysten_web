/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import User from "../types/user"
import "../CSS/menu.css"
import { useState } from "react"
interface Props {
	user: User
}
type hamburgerType = Element | null
const Menu = ({ user }: Props) => {
	let menu_html

	const handleClick = () => {
		const hamburger: hamburgerType = document.querySelector(".hamburger")
		const nav = document.querySelector('.navigation')
		hamburger!.classList.toggle('hamburger--active');
		nav!.classList.toggle('navigation--active');
	}

	menu_html =
		user.username !== ""
			? [
					<li className="menu_item" key={"home"}>
						<Link to="/" className=" navigation__item">
							Strona główna
						</Link>
					</li>,
					<li className="menu_item" key={"logout"}>
						<Link to="/logout" className=" navigation__item">
							Wyloguj się
						</Link>
					</li>,
			  ]
			: [
					<li className="menu_item" key={"reg"}>
						<Link to="/registration" className=" navigation__item">
							Rejestracja
						</Link>
					</li>,
					<li className="menu_item" key={"login"}>
						<Link to="/login" className=" navigation__item">
							Zaloguj się
						</Link>
					</li>,
			  ]

	return (
		<nav className="navbar">
			<button className="hamburger" onClick={handleClick}>
				<span className="hamburger__box">
					<span className="hamburger__inner"></span>
				</span>
			</button>
			<div className="navigation" id="navbarSupportedContent">
				<ul className="navigation__list">{menu_html}</ul>
			</div>
		</nav>
	)
}

export default Menu
