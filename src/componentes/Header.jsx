import './header.css'
import logo from '../assets/Logo.png'
export default(() =>{
    return(
        <header>
            <div className='header_img_back'>
            </div>

            <div className='header_title'>
                <img src={logo}alt="" />
                <span>Uma experiência além da visão humana</span>
            </div>
        </header>
    )
})