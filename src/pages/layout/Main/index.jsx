import HeroBanner from '../../components/HeroBanner/index'
import Card from '../../components/Card/index.jsx'
import './main.scss'
import LocationList from '../../../datas/locationList.json'

const Main = () => {
      return (
            <main className="main">
                  <HeroBanner />
                  <section className="cardContainer">
                        {LocationList.map((location) => (
                              <Card
                                    key={location.id}
                                    cover={location.cover}
                                    title={location.title}
                              />
                        ))}
                  </section>
            </main>
      )
}

export default Main
