import "./Sectionfive.css"
import  Photo from "./Folder image/branding.png"
import Vector from "./Folder image/Vector.png"


function Sectionfive(props) {
    const buttons = [
      { text: 'Market Research', color: 'white' },
      { text: 'Branding', color: 'yellow' },
      { text: 'Reporting', color: 'white' },
      { text: 'Data Analysis', color: 'white' }
    ];
  
    function Button({ text, color }) {
      return (
        <button className={`button button--${color}`}>
          {text}
        </button>
      );
    }
  
    return (
      <div className="Section5-container">
        <h2 className="Section5-title">Reason To Choose Us</h2>
        <p className="Section5-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores ipsam, aut recusandae incidunt explicabo nisi tempore possimus fugit doloribus blanditiis sapiente, adipisci labore, soluta natus commodi accusamus minima est?</p>
  
        <div className="button-group">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} color={button.color} />
          ))}
        </div>
        <div className="Branding-box">
            <div className="Branding-content">
                <div className="branding-photo">
                  <img className="content-photo" src ={Photo} alt="Branding photo" />
                </div>
                <div className="branding-description">
                    <div className="yellow-ball">
                    <img className="logo-vector" src= {Vector} alt="Vector" />
                    </div>
                  <h2 className="Branding-content-title">Branding</h2>
                  <p className="Branding-content-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima reiciendis vero consequatur libero iusto ab ea at, illo molestiae, suscipit sit accusantium corporis eum aut, tempora odio dignissimos soluta cum!</p>
                   <button className="Breanding-button">Read More</button>
                </div>
            </div>

        </div>
      </div>
    );
  }

export default Sectionfive