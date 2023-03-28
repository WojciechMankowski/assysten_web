const Logout = () => {
	localStorage.setItem('user', "")
	return <div>
        <h2>Zostałeść poprawnie wylogowany</h2>
    </div>
}
export default Logout
