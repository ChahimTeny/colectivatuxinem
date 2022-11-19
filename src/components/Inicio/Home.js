import React from "react"
import Navegador from "./Narvar/navegador";
import Tuxinem from "./tuxinem";
import Encabezado from "../Header/header";
import '../Inicio/Home.css'

class Borde extends React.Component {
    render(){ 
        return(
        <div className='Home-container' id="Menu">
            <section className="components menu-fijo">
                <Navegador/>
            </section>
            <section className="components centrar">
                <Tuxinem/>
            </section>
            <section className="components">
                <Encabezado/>
            </section>
        </div>
       )
    }
}
export default Borde;