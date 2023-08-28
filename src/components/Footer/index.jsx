import "./Footer.css"

const Footer = () => {
    
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/ivan.navarro.79069'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/ivanmnavarro/'>
            <img src="/img/linkedin.png" alt='linkedin' />
        </a>
        
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Iván Navarro</strong>
</footer>

    
}

export default Footer