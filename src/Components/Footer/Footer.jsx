import "./Footer.css"
import logo from "./imgfooter/Mask Group.png"
import Icon from "./propsicon"
import facebook from "./imgfooter/fb.png"
import twit from "./imgfooter/twit.png"
import youtube from "./imgfooter/youtube.png"
import In from "./imgfooter/in.png"
import P from "./imgfooter/p.png"



function Footer(props) {
    const navarrey = ["Main", "Solution","Cases","About us","Blog","Contact us"]
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <img src={logo} alt="" />
                <div className="nuv-wrapper">
                    <nav>
                        <ul>
                            {navarrey.map(text => <li className="title">{text}</li>)}
                        </ul>
                    </nav>
                </div>
                <div className="icon-wrapper">
                    <Icon icon ={facebook} />
                    <Icon icon ={twit} />
                    <Icon icon = {youtube} />
                    <Icon icon = {In} />
                    <Icon icon = {P} />
                </div>
                <div className="Copyright">
                    <p>Copyrights ©2020 Thefirm. All Right Reserved</p>
                </div>
            </div>

        </div>
    )

    
}

export default Footer