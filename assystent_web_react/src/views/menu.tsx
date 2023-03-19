/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

interface Props {
	user: string
}
const Menu = ({ user }: Props) => {
	let menu_html

	menu_html =
		user !== ""
			? [
					<li className="menu_item nav-item" key={"home"}>
						<Link to="/" className="nav-link text-white">
							Strona główna
						</Link>
					</li>,
					<li className="menu_item nav-item" key={"logout"}>
						<Link to="/logout" className="nav-link text-white">
							Wyloguj się
						</Link>
					</li>,
			  ]
			: [
					<li className="menu_item nav-item" key={"reg"}>
						<Link to="/registration" className="nav-link text-white">
							Rejestracja
						</Link>
					</li>,
					<li className="menu_item nav-item" key={"login"}>
						<Link to="/login" className="nav-link text-white">
							Zaloguj się
						</Link>
					</li>,
			  ]

	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">{menu_html}</ul>
				</div>
			</div>
		</nav>
	)
}

export default Menu
