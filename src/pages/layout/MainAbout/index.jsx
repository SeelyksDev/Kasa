import AboutBanner from '../../components/AboutBanner'
import DropDown from '../../components/DropDown/index'
import AboutList from '../../../datas/AboutList.json'
import './mainAbout.scss'

const MainAbout = () => {
      return (
            <main className="mainAbout">
                  <AboutBanner />
                  {AboutList.map((element) => (
                        <DropDown
                              key={element.id}
                              title={element.title}
                              paragraph={element.description}
                        />
                  ))}
            </main>
      )
}

export default MainAbout
