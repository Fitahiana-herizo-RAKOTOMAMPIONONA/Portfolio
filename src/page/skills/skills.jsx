import { Component } from "react";
import "./skills.css"
import BackFront from "./BackFront";

import { frontEndDevelpper } from "../../data/data";
import { backEndDevelpper } from "../../data/data";


class Skills extends Component{
    render(){
        return <div className="skills section container" id="skills">
            <h1 className="sectionTitre">
                Competence
            </h1>
            <div className="boxCompetence container">

                <BackFront x="Front-end developper" type={frontEndDevelpper}/>
                <BackFront x="Back-end developper" type={backEndDevelpper}/>
                {/* <FrontEnd x="Back-end developper"/>
                <BackEnd x="Front-end developper"/> */}
            </div>
        </div>
    }
}

export default Skills