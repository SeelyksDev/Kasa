import logoLight from '../../assets/logoLight.svg'
import '../../utils/styles/layout/_footer.scss'

const Footer = () => {
    return(
        <footer className='footer'>
        <section className="footer__container">
            <div className='footer__items'>
            <img className="footer__logo" src={logoLight} alt="logo" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
            </div>
        </section>
        </footer>
    )
} 

export default Footer