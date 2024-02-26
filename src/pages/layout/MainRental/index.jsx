import Carousel from '../../components/RentalCarousel'
import RentalList from '../../../datas/rentalList.json'
import TitleRental from '../../components/TitleRental/index'
import Tag from '../../components/RentalTag/index'
import Rating from '../../components/RentalRating/index'
import Host from '../../components/RentalHost/index'
import './mainRental.scss'

const MainRental = () => {
      return (
            <main className="main-rental">
                  <Carousel image={RentalList.cover} title={RentalList.title} />
                  <TitleRental />
                  <Tag />
                  <div className="rating-host">
                        <Rating />
                        <Host />
                  </div>
            </main>
      )
}

export default MainRental
