import "./menu.css"
import {  MdMenu } from "react-icons/md"
import { navBar } from "../../data/data"


const changerClasse =()=>{
    const x = document.querySelector('.InformationMenu')
    x.classList.toggle('active')
    console.log(x);
}

export default function Menu(){
    
    return (
        <div className="menu">
            <div className="boutonMenu" onClick={changerClasse}>

                <MdMenu className="iconeMenu"/>
            </div>
            <div className="InformationMenu">
                <ul className="information">
                    {
                        navBar.map((item,index)=>(
                            <li 
                                className="listNav" 
                                key={index}
                                onClick={changerClasse}
    
                            >
                                <a href={`#${item.cheminLien}`} className="listNavLink iconeNavBar">
                                    {item.icone}
                                    <span className="nomMenuResponsive">
                                        {item.nom}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}