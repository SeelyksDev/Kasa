import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../utils/styles/layout/_header.scss'

const Header = () => {
    return (
        <header className='header'>
        <div className="header__container">
            <img className="header__logo" src={logo} alt='logo' />
            <div className='header__containerLinks'>
            <Link to="/home" className='header__link'>ACCUEIL</Link>
            <Link to="/about" className='header__link'>A PROPOS</Link>
            </div>
        </div>
        </header> 
    )
}

export default Header