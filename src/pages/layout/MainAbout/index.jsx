import AboutBanner from '../../components/AboutBanner'
import DropDown from '../../components/DropDown/index'
import './mainAbout.scss'

const MainAbout = () => {
      return (
            <main className="mainAbout">
                  <AboutBanner />
                  <DropDown title="Fiabilité" paragraph="" />
                  <DropDown title="Respect" paragraph="" />
                  <DropDown title="Service" paragraph="" />
                  <DropDown title="Sécurité" paragraph="" />
            </main>
      )
}

export default MainAbout
