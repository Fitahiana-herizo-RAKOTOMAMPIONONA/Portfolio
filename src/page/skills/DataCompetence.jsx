export default function DataCompetence({icone, nom,niveau}){
    return <div className="dataCompetence">
                {icone}
                <div>
                    <h3 className="nomCompetence">
                        {nom}
                    </h3>
                    <span className="niveauCompetence">
                        {niveau}
                    </span>
                </div>
    </div>
}