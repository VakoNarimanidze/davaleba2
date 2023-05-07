import logo from '../../Components/images/Mask Group.png'
import buisnessLogo from '../../Components/images/buisness-img.png'
import './Header.css'



export default function Header() {
    return (
        <div className="header-container">
    <header>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Solutions</li>
          <li>Cases</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <button className="GetInTouch">Get In Touch</button>          
        </ul>
      </nav>
    </header>
    <div className="text-part-with-img">
      <img src={buisnessLogo} alt="" />
      <h1>Get Bussiness
Solutions with TheFirm.</h1>
<p>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy.
</p>
<button className="GetInTouch">Get In Touch</button>
    </div>
  </div>
    )
}