import "./Section7.css"
import Blog from "./blogprops"
import Blog1 from "./blogimages/blogimg1.png"
import Blog2 from "./blogimages/blogimg2.png"
import Blog3 from "./blogimages/blogimg3.png"
import icon1 from "./blogimages/icon1.png"
import icon2 from "./blogimages/icon2.png"
import icon3 from "./blogimages/icon3.png"






function Section7(props) {
    return (
        <div className="blogs-container">
            <div className="blog-wrapper">
                <div className="our-blog">
                    <h1 className="blog-title">Our Blogs</h1>
                </div>
                <div className="blogs">
                    <Blog  blogimg = {Blog1} blogicon = {icon1}/>
                    <Blog  blogimg ={Blog2} blogicon = {icon2} />
                    <Blog  blogimg = {Blog3} blogicon ={icon3} />
                </div>
            </div>
        </div>
    )
    
}

export default Section7