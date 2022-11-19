import React from "react"
import '../Narvar/navegador.css'
import { Link } from "react-scroll";


const Navegador = () => {
    return (
        <div className="n-wrapper"  id="Nabvar">
            <div className="n-left">
                <div className="n-name">Colectiva Tuxinem</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>
                            <Link activeClass="active" to="Menu" spy={true} smooth={true}>
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="Fundadoras" spy={true} smooth={true}>
                            Directiva
                            </Link>
                        </li>
                        <li>
                            <Link to="Nosotras" spy={true} smooth={true}>
                            Nosotras
                            </Link>
                        </li>
                        <li>
                            <Link to="Contacto" spy={true} smooth={true}>
                            Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navegador