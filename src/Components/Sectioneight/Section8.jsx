import Photo from "./props"
import "./section8.css"
import Profile1 from "./Profile/profile1.png"
import Profile2 from "./Profile/profile2.png"
import Profile3 from "./Profile/profile3.png"
import Profile4 from "./Profile/profile4.png"
import Profile5 from "./Profile/profiel5.png"

function Section8(props) {
    return (
        <div className="testimonials-container">
            <h2 className="title-testimonials">Our Testimonials</h2>
            <div className="Profile-wrapper">
                <Photo photo ={Profile1} />
                <Photo photo = {Profile2} />
                <Photo photo = {Profile3} />
                <Photo photo ={Profile4} />
                <Photo photo = {Profile5} />
            </div>
            <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took type scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <p className="jenny">
            Jenny Wilson | Digital Agency
            </p>

        </div>
    )
    
}
 export default Section8