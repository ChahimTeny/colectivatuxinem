import React from "react";
import "../Contacto/Contacto.css";

const Contacto = () => { 
    return (
      <div className="contact-form" id="Contacto">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span>Contactarnos, es más facil</span>
            <span>Escribenos</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form>
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Enviar" className="btn primary-btn"/>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contacto;