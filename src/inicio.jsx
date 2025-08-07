
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
            <h1>afafafafafafafaf</h1>
            <div className="cabecalho">
                <div className="texto-cabecalho">
            <img className="logo" src={logo} height="50px"/>
            <h3 >Intituto Sócial Nossa Senhora de Fatima</h3>
            </div>
            <div className="email_lock">
            <a href="">secretaria@acaonsfatima.org.br</a>
            <p>Av.cel.octaviano de freitas costa, 363</p>
            
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
                    <h3>ingles intermediario e avançado</h3>
                </div>
                <div className="descri">
                <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={info} className="img_curso"/>
                    <h3>ingles intermediario e avançado</h3>
                </div>
                <div className="descri">
                <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={olho} className="img_curso"/>
                    <h3>ingles intermediario e avançado</h3>
                </div>
                <div className="descri">
                <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={anpul} className="img_curso"/>
                    <h3>ingles intermediario e avançado</h3>
                </div>
                <div className="descri">
                <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={carro} className="img_curso"/>
                    <h3>ingles intermediario e avançado</h3>
                </div>
                <div className="descri">
                <p>balalallallalallalalallalalla<br/>lalalallalalalllalalalaallalall</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={eletro} className="img_curso"/>
                    <h3>ingles intermediario e avançado</h3>
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