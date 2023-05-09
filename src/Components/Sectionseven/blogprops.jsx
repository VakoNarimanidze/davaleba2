import "./blogprops.css"



function Blog(props) {
    return (
        <div className="blogs-wrapper">
            <img className="imgblog" src={props.blogimg} alt="" />
            <h2>Lorem Ipsum</h2>
            <p className="lorem">Lorem Ipsum is simply text of the printing and type setting industry. make a type specimen.</p>
            <div className="icon-wrapper">
                <img src={props.blogicon} alt="" />
                <p>Alex Liones</p>
            </div>
            <div>
                <button className="icon-button">Read More</button>
            </div>


        </div>
    )
    
}

export default Blog