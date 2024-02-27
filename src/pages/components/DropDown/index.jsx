import { useState } from 'react'
import './dropDown.scss'
import UpArrow from '../../../assets/upArrow.svg'

const DropDown = ({ title, paragraph }) => {
      const [isOpen, setIsOpen] = useState(true)

      return isOpen ? (
            <div className="dropDown">
                  <button
                        className="dropDown__button"
                        onClick={() => setIsOpen(true)}
                  >
                        <span className="dropDown__title">{title}</span>
                        <img className="dropDown__arrow" src={UpArrow} alt="" />
                  </button>
                  <div className="dropDown__textContainer">
                        <p className="dropDown__text">{paragraph}</p>
                  </div>
            </div>
      ) : (
            <div className="dropDown">
                  <button
                        className="dropDown__button"
                        onClick={() => setIsOpen(false)}
                  >
                        <span className="dropDown__title">{title}</span>
                        <img className="dropDown__arrow" src={UpArrow} alt="" />
                  </button>
            </div>
      )
}

export default DropDown
