import {Link} from "react-router-dom"
function Header() {
    return ( 
        <header>
            <div>
            <Link to="/">Home</Link><br />
                <Link to="/CadastroCli">CadastroCli</Link><br />
                <Link to="/SimulaĆ§aodeFinanciamento">Financiamento</Link><br />
                <Link to="/MovimentaĆ§aoContaCorrente">ContaCorrente</Link><br />
                <Link to="/Sobrenos">Sobrenos</Link><br />
            </div>
        </header>
    )
}
export default Header;