
import "./style.scss"

import logo from './assets/logo.png'
import Feira from './assets/Feira.png'
import Fotos from './assets/Fotos.png'
import ingles from './assets/bandeira.png'
import info from './assets/info.png'
import eletro from './assets/eletro.png'
import olho from './assets/icon_olho.png'
import carro from './assets/carro.png'
import anpul from './assets/ampulheta.png'


export default function Inicio(){
    
    return(
        <html>
            <head>
                <style> @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'); </style>
            </head>
            <header>
                <div className="headerClass">
                    <div className="imagemLogo">
                        <img src={"Logo.png"}/>
                    </div>
                    <div className="bakbak-one-regular">
                        <h1>Instituto Social Nossa Senhora de Fátima</h1>
                    </div>
                    <div className="infoPequena">
                        <a>secretaria@acaonsfatima.org.br</a>
                        <a>Av.cel.octaviano de freitas costa, 363</a>
                    </div>
                </div>
            </header>
            <body>
                <div className="fotosClass">
                    <img className="fotosFeira" src={"Fotos.png"}/>
                </div>
                <div className="fotosClass logoFeira">
                    <img src={"Feira.png"}/>
                </div>
                <div className="galeria_de_cursos">
                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={ingles} className="img_curso"/>
                            <h3>Inglês intermediário e avançado</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>

                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={info} className="img_curso"/>
                            <h3>Informática básica e avançada</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>

                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={olho} className="img_curso"/>
                            <h3>Comunicação visual</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>

                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={anpul} className="img_curso"/>
                            <h3>Administração</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>

                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={carro} className="img_curso"/>
                            <h3>Eletromecânica de Autos</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>

                    <div className="carta_curso">
                        <div className="apresenta">
                            <img src={eletro} className="img_curso"/>
                            <h3>Eletricista Instalador</h3>
                        </div>
                        <div className="descri">
                            <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}