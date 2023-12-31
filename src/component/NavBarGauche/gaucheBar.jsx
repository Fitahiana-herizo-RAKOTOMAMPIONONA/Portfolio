import { Component } from "react";
import 'material-icons/iconfont/material-icons.css'
import "./gaucheBar.css"
import { navBar } from "../../data/data";
// import { IconButton } from "@mui/material/IconButton/IconButton";
import { Button } from "react-scroll";
function ListeNav({cheminLien,icone}){
    return <li className="listNav">
        <a href={`#${cheminLien}`} className="listNavLink iconeNavBar">
            {/* <IconButton> */}
                {icone}
            {/* </IconButton> */}
        </a>
    </li>
}

class Gauche extends Component{
    render(){
        return <div className="gaucheBar">
            <a href="#home" className="LogoGauche">
                <img src="./assets/icone/ico.png" alt="" srcset="" className="iconeHerizo" />
            </a>

            <nav className="nav">
                <div className="navMenu">
                    <ul className="navList">
                        {navBar.map((item,index)=>(
                            <ListeNav key={index} cheminLien={item.cheminLien} icone={item.icone}/>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="copyright">
                
                <span className="txteCopyright">
                    @2022
                </span>
                <span className="txteCopyright">
                    --@2023
                </span>
            </div>
        </div>
    }
}
export default Gauche
