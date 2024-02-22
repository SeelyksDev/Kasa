import RouteError from '../../assets/404.svg'
import Header from '../Header'
import Footer from '../Footer'

const Error = () => {
    return (
        <div>
        <Header />
        <main>
            <img src={RouteError} alt="Erreur 404" />
        </main>
        <Footer />
        </div>
    )
}

export default Error