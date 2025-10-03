import LogoFooter from "/assets/svg/logo-footer.svg";
import "./Footer.scss";

function Footer() {
    const year:number = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={LogoFooter} alt="Logo Kasa" className="logo" />
            <p className="copyright">© {year} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
