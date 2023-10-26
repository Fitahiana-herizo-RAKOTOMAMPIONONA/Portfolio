import { Component } from "react";
import Scroll from "../../component/scroll/scrollDown";
import "./home.css"
import 'material-icons/iconfont/material-icons.css'
import { FaFacebook,FaInstagram ,FaTwitter, FaMailBulk,FaLinkedinIn} from "react-icons/fa";

class Home extends Component{
    maka(){
        return window.innerWidth
    }
    tenaMaka(){
        setInterval(()=>{
            return this.maka();
        },1000)
    }

    render(){
        return <div className="home" id="home">
            <div className="menuLangue">
                <select name="" id="" className="optionLangue">
                    <option value="anglais">FR</option>
                    <option value="anglais">ENG</option>
                    <option value="anglais">MDG</option>
                </select>
            </div>
         
            <div className="SectioAcuueil">
                <img src="./assets/image/herizo.jpg" alt="" srcset="" className="MonImage"/>
                <h1 className="monNom">
                    Herizo Fitahiana  Rakotomampionona
                </h1>
                <h1 className="monNom">
                   {this.tenaMaka()}
                </h1>
                <p className="paragrapheProfil">
                    je suis un developpeur web
                </p>
                <div className="reseau">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="iconeReseau"/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="iconeReseau"/>
 
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="iconeReseau"/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaMailBulk className="iconeReseau"/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="iconeReseau"/>
                    </a>
                </div>
                    <a href="#about"  rel="noopener noreferrer" className="btn bouttonDiscover">discover</a>
            
            </div>
            <Scroll/>
      
        </div>
    }
}

export default Home