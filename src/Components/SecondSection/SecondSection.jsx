import microsoft from '../../Components/images/microsoft.png'
import google from '../../Components/images/google.png'
import firefox from '../../Components/images/firefox.png'
import safari from '../../Components/images/safari.png'
import './SecondSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function SecondSection() {
    return (
        <div className="SecondSection-container">
    <div className="SecondSection">
      <h2> Our Partner</h2>
      <div className="slider">
        <div className="wrapper">
            <div className="carousel">
                <img src={microsoft} alt="microsoft logo" />
                <img src={google} alt="google logo" />
                <img src={firefox} alt="firefox logo" />
                <img src={safari} alt="safari logo" />
            </div>
        </div>
      </div>
    </div>
  </div>
    )
}