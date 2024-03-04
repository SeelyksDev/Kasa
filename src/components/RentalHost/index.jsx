import './host.scss'

const Host = ({ name, picture }) => {
      return (
            <section className="host">
                  <span className="host__name">{name}</span>
                  <img className="host__img" src={picture} alt="hôte" />
            </section>
      )
}

export default Host
