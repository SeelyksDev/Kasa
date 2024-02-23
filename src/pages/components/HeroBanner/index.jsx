import HeroBannerImg from '../../../assets/heroBanner.svg'
import './heroBanner.scss'

const HeroBanner = () => {
      return (
            <div className="herobanner">
                  <img
                        className="herobanner__img"
                        src={HeroBannerImg}
                        alt="falaise"
                  />
                  <h1 className="herobanner__text">
                        Chez vous, partout et ailleurs
                  </h1>
            </div>
      )
}

export default HeroBanner
