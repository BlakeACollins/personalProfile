import HTML from '../img/HTML.png'
import CSS from '../img/CSS.png'
import Bootstrap from '../img/bootstrap.svg'
import Tailwind from '../img/Tailwind.png'
import JS from '../img/JS.png'
import react from '../img/React.png'
import redux from '../img/redux.svg'
import next from '../img/Next.png'
import firebase from '../img/Firebase.png'
import Webflow from '../img/Webflow.svg'
import Figma from '../img/Figma.png'
import '../style/techUsed.css'


function Tech() {
    return (
        <div className='flex justify-space-around'>
                    <h2 className='tech__heading pb-3 py-3'>
                        Technologies
                    </h2>
                <div>
                <img className='tech__icons'
                    height={70}
                    width={75}
                    src={Webflow} alt='Webflow' />
                    {/* - */}
                    <img className='tech__icons'
                    height={70}
                    width={75}
                    src={Figma} alt='Figma' />
                    <img className='tech__icons' 
                    height={80}
                    width={75}
                    src={HTML} alt='HTML5' />
                    {/* - */}
                    <img className='tech__icons'
                    height={80}
                    width={65}
                    src={CSS} alt='CSS3' />
                    {/* - */}
                    <img className='tech__icons'
                    height={80}
                    width={65}
                    src={JS} alt='JavaScript' />
                    {/* - */}
                    <img className='tech__icons'
                    height={75}
                    width={75}
                    src={Bootstrap} alt='Bootstrap4' />
                    {/* - */}
                    <img className='tech__icons'
                    height={70}
                    width={75}
                    src={Tailwind} alt='Tailwind CSS' />
                    {/* - */}
                    <img className='tech__icons'
                    height={85}
                    width={95}
                    src={react} alt='React' />
                    {/* - */}
                    <img className='tech__icons'
                    height={75}
                    width={75}
                    src={redux} alt='Redux' />
                    {/* - */}
                    <img className='tech__icons'
                    height={75}
                    width={75}
                    src={next} alt='Next.js' />
                    {/* - */}
                    <img className='tech__icons'
                    height={75}
                    width={65}
                    src={firebase} alt='Google Firebase' />
                    {/* - */}
                </div>
            </div>
    )
}

export default Tech
