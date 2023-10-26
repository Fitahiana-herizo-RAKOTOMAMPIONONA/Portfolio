import { Component } from "react";
import DataCompetence from "./DataCompetence";

class BackFront extends Component{
    constructor({x,type}){
        super(x,type)
        this.x=x
        this.type =type
    }
    render(){
        return <div className="backEnd">
            <h2 className="chaqueTitreCompetence">{this.x}</h2>
            <div className="competenceGroup">
                {this.type.map((item ,index)=>(
                    <DataCompetence key={index} icone={item.icone} nom={item.nom} niveau={item.niveau} />
                ))}
            </div>
        </div>
    }
}
export default BackFront