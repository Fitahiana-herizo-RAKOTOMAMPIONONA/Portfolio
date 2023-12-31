import { Component, useState } from "react";
import "./service.css"
import {AiFillAccountBook} from "react-icons/ai"
import {MdSkipNext,MdClose} from "react-icons/md"


    
function ServiceListItem({icone,paragraphe}){
    return <li className="serviceListItem" >
            <MdSkipNext className="iconeServiceList"/>

            <div className="serrviceActiveInfo">
                {paragraphe}
            </div>
        </li>
}

function ContenuService({titreService,icone,backGround}){
    const [toggleState,setToggleState] = useState(0)
    const toggleTab =(index) =>{
        setToggleState(index)
    }
    const cssBackground = {
        backgroundImage: `url('${backGround}')`,
        backgroundSize: "cover",
        backGroundOrigin :"center"
    }
    return <div className="contenuService" style={cssBackground}>
                <div>
                    {icone}
                    <h3 className="titreService">
                        {titreService}
                    </h3>
                    <span className="boutonService" onClick={()=> toggleTab(1)}>
                        <span>view more </span>
                        <MdSkipNext className="iconeBoutonService"/>    
                    </span>

                    <div className={toggleState === 1 ?"serviceActive active-modal":"serviceActive"}>
                        <div className="contentServiceActive">
                            <MdClose className="iconeClose" onClick={()=>toggleTab(0)}/>
                            <h3 className="serviceTitre">{titreService}</h3>
                            <p className="serviceDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta i
                            </p>
                            <ul className="serviceList">
                                {}
                                <ServiceListItem  paragraphe="fffegegegege"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
}

class Service extends Component{
    render(){
        return <div className="service section container" id="service">
            <h2 className="sectionTitre">
                service
            </h2>
            <div className="serviceContainer  grid">
                <ContenuService titreService="web" icone={<AiFillAccountBook className="iconeService"/>} backGround="./assets/image/dev.jpg"/>
                <ContenuService titreService="design UI/UX" icone={<MdSkipNext className="iconeService"/>} backGround="./assets/image/design.jpg"/>
                <ContenuService titreService="Photographie" icone={<AiFillAccountBook className="iconeService" />} backGround="./assets/image/dev1.jpg"/>
            </div>
        </div>
    }
}

export default Service