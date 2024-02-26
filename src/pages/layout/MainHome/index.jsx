import { Link } from 'react-router-dom'
import HeroBanner from '../../components/HomeHeroBanner/index'
import Card from '../../components/HomeCard/index.jsx'
import './mainHome.scss'
import RentalList from '../../../datas/rentalList.json'

const MainHome = () => {
      return (
            <main className="main">
                  <HeroBanner />
                  <section className="cardContainer">
                        {RentalList.map((location) => (
                              <Link
                                    to={`/rental/${location.id}`}
                                    key={location.id}
                              >
                                    <Card
                                          cover={location.cover}
                                          title={location.title}
                                    />
                              </Link>
                        ))}
                  </section>
            </main>
      )
}

export default MainHome
