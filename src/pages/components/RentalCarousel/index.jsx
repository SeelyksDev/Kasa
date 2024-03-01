import './carousel.scss'
import LeftArrow from '../../../assets/leftArrow.svg'
import RightArrow from '../../../assets/rightArrow.svg'
import { useState } from 'react'

const Carousel = ({ image }) => {
      const [currentIndex, setCurrentIndex] = useState(0)

      const leftClick = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? image.length - 1 : prevIndex - 1
            )
      }

      const rightClick = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === image.length - 1 ? 0 : prevIndex + 1
            )
      }

      const currentImage = image[currentIndex]

      const numberOfImage = image.length
      const displayArrows = numberOfImage > 1
      const displayIndicator = numberOfImage > 1

      return (
            <div className="carousel">
                  <img
                        className="carousel__img"
                        src={currentImage}
                        alt={`Slide`}
                  />
                  <img
                        onClick={() => leftClick()}
                        className="carousel__arrowleft"
                        src={LeftArrow}
                        alt="left-arrow"
                  />
                  <img
                        onClick={() => rightClick()}
                        className="carousel__arrowright"
                        src={RightArrow}
                        alt="right-arrow"
                  />
            </div>
      )
}

export default Carousel
