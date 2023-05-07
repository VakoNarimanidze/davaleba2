import questionMark from '../../Components/images/question-mark.png'

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
        <p>{props.title}</p>,
        <img src={props.questionMark} alt="" />
    )
}


export default function ThirdSection() {
    return (
        <div className="ThirdSectionContainer">
            <div className="ThirdSectionContent">
                <h3>Frustration of Clients</h3>
                {P.map((item) => ( <Paragraph title={item.title} questionMark={item.img} />))}
                 
            </div>
        </div>
    )
}



