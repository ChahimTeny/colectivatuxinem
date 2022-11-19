import React from "react";
import '../Footer/footer.css'

const Footer = () => {
  return (
    <div className="footer"  id="foter">
        <img src={require('../../assets/images/baja.png').default} 
                alt=''/>
      <div className="f-content">
        <span>colectivatuxine2020@gmail.com</span>
        <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                    <a href='https://www.facebook.com/colectivatuxinem'>
                        <li>Febook</li>
                    </a>
                    <a href='https://www.instagram.com/colectivatuxinem/'>
                        <li>Instagram</li>
                    </a>
                    <a href='https://twitter.com/tuxinem'>
                        <li>Nosotras</li>
                    </a>
                    <a href='https://open.spotify.com/show/5XNgQ77Z7s1yTraND10lm2?si=b37e201e574f41e6'>
                        <li>Contacto</li></a>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Footer;