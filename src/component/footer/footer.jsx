import { useEffect, useState } from "react"
import "./footer.css"
import {MdWork} from "react-icons/md"
const Footer = () =>{
    const daty = new Date
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="monInfo">
                    RAKOTOMAMPIONONA fitahiana herizo
                </div>
                <div className="reseaux">
                    <div className="legendeListeReseaux">follow me on</div>
                    <div className="listeReseaux">
                        <MdWork fontSize={"30px"}/>
                        <MdWork fontSize={"30px"}/>
                        <MdWork fontSize={"30px"}/>
                        <MdWork fontSize={"30px"}/>
                    </div>
                </div>
            </div>
            <div className="footerbottom"> 
                copyright @ {daty.getFullYear()}
            </div>
        </div>
    )
}
export default Footer