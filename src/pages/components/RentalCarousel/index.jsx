import './carousel.scss'
import Appt from '../../../assets/appartement.jpeg'
import LeftArrow from '../../../assets/leftArrow.svg'
import RightArrow from '../../../assets/rightArrow.svg'

const Carousel = ({ image, title }) => {
      return (
            <div className="carousel">
                  <img className="carousel__img" src={Appt} alt="appart" />
                  <img
                        className="carousel__arrowleft"
                        src={LeftArrow}
                        alt="left-arrow"
                  />
                  <img
                        className="carousel__arrowright"
                        src={RightArrow}
                        alt="right-arrow"
                  />
            </div>
      )
}

export default Carousel
