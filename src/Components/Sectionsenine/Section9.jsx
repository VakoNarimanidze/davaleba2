import './Section9.css'
import Mapimg from './imagesectionseven/mapimg.png'
import Input from './inputprops'

function Section9(props) {
    return (
        <div className='getintouch'>
            <img className='mapimg' src={Mapimg} alt="" />
            <div className='Getintouch-contrainer'>
                <div className='Getintouch-wrapper'>
                    <h3 className='touch'>Get in Touch</h3>
                    <div className='input-wrapper'>
                    <div className='phone'>
                        < Input text = 'name' />
                        < Input text ="Phone" />
                    </div>
                    <div className='email'>
                        < Input text = "Email" />
                        < Input text = "Subject" />
                    </div>
                    </div>
                    <div>
                        <button className='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Section9