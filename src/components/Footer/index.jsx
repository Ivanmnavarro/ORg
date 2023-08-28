import "./Footer.css"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"

const Footer = () => {

    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/ivan.navarro.79069'>
                <AiOutlineFacebook size={40} color="white"/>

            </a>
            <a href='https://www.linkedin.com/in/ivanmnavarro/'>
                <AiOutlineLinkedin size={40} color="white"/>
            </a>

        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Iván Navarro</strong>
    </footer>


}

export default Footer