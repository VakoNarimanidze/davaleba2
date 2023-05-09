import "./props.css"

function Photo(props) {
    return (
        <>

        <div className="profile">
         <img src={props.photo} alt="" className="image"/>
        </div>
        </>
      

    )
    
}
 export default Photo