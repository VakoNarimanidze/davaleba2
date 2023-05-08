import questionMark from '../../Components/images/question-mark.png'
import ThirdSectionImg from '../../Components/images/thirdsection-img.png'
import './ThirdSection.css'
import ThirdSectionImg2 from '../../Components/images/thirdsection-img2.png'

const P = [
    {
        "id": 1,
        img : questionMark,
        "title": 'Loren rasion gravida auem is bibenua tase'
    },
    {
        id: 2,
        img : questionMark,
        'title': 'Lorem Ipsum is simply dummy text of the.'
    },
    {
        id: 3,
        img : questionMark,
        'title': 'Printing and typesetting industry. Lorem Ipsum'
    },
    {
        id: 4,
        img : questionMark,
        'title': 'When an unknown printer took a galley of type and scrambled it'
    }
    
    
]



export function Paragraph(props) {
    return (
        <dir>
            <img src={props.questionMark} alt="" />
            <p>{props.title}</p>,
        </dir>
        
    )
}


export default function ThirdSection() {
    return (
        <div className="ThirdSectionContainer">
            <div className="ThirdSectionContent">
                <div className="textContent">
                    <h3>Frustration of Clients</h3>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                {P.map((item) => (<Paragraph title={item.title} questionMark={item.img} />))}
                </div>
                <img className='flank-right' src={ThirdSectionImg} alt="" />
                <img className='flank-right2' src={ThirdSectionImg2} alt="" />
                
                 
            </div>
        </div>
    )
}



