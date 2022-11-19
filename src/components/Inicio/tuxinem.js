import React from 'react'
import Typical from 'react-typical'
import '../../components/Inicio/tuxinem.css'

class Tuxinem extends React.Component{
    render(){
        return(
            <div>
            <div className='home-container'>
                <div className='home-parent'>
                    <div className='home-details'>
                      <div className='home-details-name'>
                        <span className='primary-text'>
                            {" "}
                           Hola, nosotras somos
                           <span className='highlightes-text'> Tuxinem</span> 
                        </span>
                      </div>
                      <div className='home-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Nuestras luchas continuan",
                                        2000,
                                        "Mujeres Mayas",
                                        2000, 
                                        "Abrazo mi pueblo",
                                        2000,
                                        "Abrazo mi identidad",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='home-role-tagline'>
                                Tuxinem es una colectiva de mujeres mayas jóvenes de diversas comunidades lingüísticas.
                            </span>
                        </span>
                      </div>
                      <div className='home-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contactanos {" "}
                            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'> </a>
                            
                        </button>
                      </div>
                    </div>
                    <div className='home-foto'>
                        <div className='home-foto-background'>

                        </div>
                    </div>
                 </div>
            </div>
        </div>
        )
    }
}
export default Tuxinem;