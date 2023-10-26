import { Component } from "react";
import { CompetenceFini } from "../../data/data";

function AboutBox({icone,nombre,paragraphe}){
    return <div className="aboutBox">
                {icone}
                <div className="aboutBoxNav">
                    <div className="aboutTitre">
                            +{nombre}
                    </div>
                    <div className="aboutParagraphe">
                    {paragraphe}
                </div>
                </div>
                
            </div>
}

class AboutFooter extends Component{
    render(){
        return <div className="aboutFooter grid">
            {CompetenceFini.map((Item,index)=>(
                <AboutBox key={index} icone={Item.icone} nombre={Item.nombre} paragraphe={Item.paragraphe}/>
            ))}
        </div>
    }
}
export default AboutFooter