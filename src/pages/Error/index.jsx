import RouteError from '../../assets/404.svg'
import Header from '../layout/Header/index'
import Footer from '../layout/Footer/index'

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
