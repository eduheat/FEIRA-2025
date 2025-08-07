
import "./style.scss"

import logo from './assets/logo.png'
import apresentacao from './assets/apresentacao.jpg'
import cursos from './assets/cursos.jpg'
import ingles from './assets/bandeira.png'
import info from './assets/info.png'
import eletro from './assets/eletro.png'
import olho from './assets/icon_olho.png'
import carro from './assets/carro.png'
import anpul from './assets/ampulheta.png'


export default function Inicio(){
    
    return(
        <div className="container-pagina">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Comic+Relief:wght@400;700&display=swap');
            </style>
            <div className="cabecalho">
                <div className="texto-cabecalho bakbak-one-regular">
            <img className="logo" src={logo} height="50px"/>
            <h3 >Instituto Social Nossa Senhora de Fátima</h3>
            </div>
            <div className="email_lock">
            <a href="">secretaria@acaonsfatima.org.br</a>
            <a href="https://www.google.com.br/maps/place/Instituto+Social+Nossa+Senhora+de+F%C3%A1tima/@-23.6803333,-46.7079309,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D">Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, 04773-000</a>
            
            </div>

            </div>

            <h1>Boas Vindas!</h1>

            <section>

            <div className="boas-vindas">
                <img src={apresentacao} className="apresentacao" />
                <img src={cursos}   className="cursos"/>
              

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
            </section>
        
        
        </div>
    )
}