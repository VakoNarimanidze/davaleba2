import Coaching from '../../Components/images/Desktop Screenshot 2023.05.08 - 01.00.59.88 (2).png'
import humans from '../../Components/images/humans.png'
import SEO from '../../Components/images/Group 10.png'
import './ForthSection.css'


const Boxes = [
    {
        id: 1,
        img: Coaching,
        title: 'Coaching',
        text : 'Loren Rasion Gravida auem is bibenua tase'
    },
    {
        id: 2,
        img: humans,
        title: 'Digital Partner',
        text : 'Loren rasion gravida auem is bibenua tase'
    },
    {
        id: 3,
        img: SEO,
        title: 'SEO',
        text :'Loren rasion gravida auem is bibenua tase'
    }
]


 function BoxesContent(props) {
     return (
         <div className="ParentOfBoxes">
             <div className='boxes' >
            <img src={props.Coaching} alt="" />
            <h4>{ props.title}</h4>
            <p>{props.text}</p>,
        </div>
        </div>

    )
}

export default function ForthSection() {
    return (
        <div className="ForthSectionContainer">
            <div className="ForthSectionContent">
                <div className="ForthSectionFloatLeft">
                     {Boxes.map((item) => (<BoxesContent text={item.text} title={item.title} Coaching={item.img} />))}
                </div>
                <div className="ForthSectionFloatRight">
                    <h3>Perfect Solution for Your Bussiness </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

