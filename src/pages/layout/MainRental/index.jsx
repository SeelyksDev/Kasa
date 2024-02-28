import Carousel from '../../components/RentalCarousel'
import RentalList from '../../../datas/rentalList.json'
import TitleRental from '../../components/TitleRental/index'
import Tag from '../../components/RentalTag/index'
import Rating from '../../components/RentalRating/index'
import Host from '../../components/RentalHost/index'
import DropDown from '../../components/DropDown/index'
import './mainRental.scss'

const MainRental = () => {
      return (
            <main className="main-rental">
                  <Carousel image={RentalList.cover} title={RentalList.title} />
                  <TitleRental />
                  <Tag />
                  <div className="main-rental__ratingHost">
                        <Rating />
                        <Host />
                  </div>
                  <DropDown
                        title="Description"
                        paragraph="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée"
                  />
                  <DropDown
                        title="Équipements"
                        paragraph="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre"
                  />
            </main>
      )
}

export default MainRental
