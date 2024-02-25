import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import './header.scss'

const Header = () => {
      return (
            <header className="header">
                  <div className="header__container">
                        <Link to="/">
                              <img
                                    className="header__logo"
                                    src={logo}
                                    alt="logo"
                              />
                        </Link>
                        <nav className="header__containerLinks">
                              <Link to="/" className="header__link">
                                    ACCUEIL
                              </Link>
                              <Link to="/about" className="header__link">
                                    A PROPOS
                              </Link>
                        </nav>
                  </div>
            </header>
      )
}

export default Header
