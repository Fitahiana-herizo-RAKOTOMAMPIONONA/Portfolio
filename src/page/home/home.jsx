import { Component } from "react";
import Scroll from "../../component/scroll/scrollDown";
import "./home.css"
import 'material-icons/iconfont/material-icons.css'
import { FaFacebook,FaInstagram ,FaTwitter, FaMailBulk,FaLinkedinIn} from "react-icons/fa";
// import { IconButton } from "@mui/material";
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
                <div className="monNom">
                    Herizo Fitahiana <span className="capitale"> Rakotomampionona</span>
                </div>
                <p className="paragrapheProfil">
                    I'm an developper
                </p>
                <div className="reseau">
                    <a href="https://www.facebook.com/profile.php?id=100079988185465" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="iconeReseau"/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="iconeReseau"/>
                    </a>
                    <a href="https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="iconeReseau"/>
                    </a>
                    <a href="mailto:fitahianaherizo10@gmail.com.com" target="_blank" rel="noopener noreferrer">
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