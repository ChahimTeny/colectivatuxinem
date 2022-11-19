import React from "react";
import '../../components/Header/header.css'

class Encabezado extends React.Component {
    render(){ 
        return(
        <div className='footer-container'>
            <div className="footer-parent">
                <img src={require('../../assets/images/font.png').default} 
                alt=''/>
            </div>    
        </div>
       )
    }
}
export default Encabezado;