import React from 'react'
import '../Fundadoras/fundadoras.css'

/* importamos nuestras imagenes */
import Mactz from '../../../assets/images/mactzil.png'
import Lau from '../../../assets/images/laura.png'
import Card from './Card/card'

const Services = () => {
    return (
        <div className="services" id='Fundadoras'>
            <div className="awesome">
                <span>¿Quién es la</span>
                <span>Directiva de Tuxinem?</span>
                <spane>
                    Nuestra Colectiva Tuxinem es coordinado por
                    <br/>
                    Una presidenta y una vicepresidenta
                </spane>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <div style={{left: '8rem'}}>
                    <Card
                    emoji = {Mactz}
                    heading = {'Presicenta'}
                    detail={"Maya K'iche', coofundadora de la colectiva"}
                    />
                </div>
                {/* Segundo card */}
                <div style={{top: '5rem', left: '35rem'}}>
                    <Card 
                    emoji={Lau}
                    heading = {'Vicepresicenta'}
                    detail={"Maya K'iche', coofundadora de la colectiva"}
                    />
                </div>
                <div className="blur s-blur2"
                style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services