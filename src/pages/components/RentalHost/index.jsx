import './host.scss'
import HostPicture from '../../../assets/homme.jpg'

const Host = () => {
      return (
            <section className="host">
                  <span className="host__name">Alexandre Dumas</span>
                  <img className="host__img" src={HostPicture} alt="" />
            </section>
      )
}

export default Host
