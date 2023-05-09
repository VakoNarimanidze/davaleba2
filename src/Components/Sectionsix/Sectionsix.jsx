import "./Sectionsix.css"
import Photo from "./photo/image 4.png"

function Sectionsix () {
    return (
        <div className="Sectionsix-container">
            <div className="Section6-title-text">
             <h2 className="Main-title">Our Research & Case Studies</h2>
             <p className="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aut nesciunt, dignissimos perferendis assumenda commodi odit. Ipsa ad quibusdam aliquam cum rem esse nobis. Sapiente in ex recusandae neque tempora.</p>
            </div>
            <div className="main-content">
                <div className="content-text-title">
                    <h2 className="content-title">Lorem Ipsum is simply</h2>
                    <p className="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                     <button className="yellow-button">Read More</button>
                </div>
                <div className="content-photo">
                    <div className="photo-shadow">
                    <img className="main-photo" src={Photo} alt="content photo" />
                    </div>
                    <div className="Yellow-ball"></div>
                </div>

            </div>
            
        </div>

    )
    
}


export default Sectionsix 