import { useState } from "react";
import './projet.css'


const navProjet =[
    1,
    2,
    3
]

const DataProjet = [
    {
        id: 1,
        photo: "./assets/image/profil.jpg",
        nomProjet: "Sary ts' art",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla eveniet voluptas natus tenetur qui vel consequuntur dolorem libero magni animi, non, dolore accusamus laborum explicabo  quos, ab doloribus rerum.",
        langage: [
            "React", "css"
        ]
    },
    {
        id: 2,
        photo: "./assets/image/maria.jpg",
        nomProjet: "La mozika",
        description: "La mozika est un plateforme pour ecoter de la musique",
        langage: [
            "Html", "css" ,"javaScrit", "NodeJs","Mysql"
        ]
    },
    {
        id: 3,
        photo: "./assets/image/rano.jpg",
        nomProjet: "Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla eveniet voluptas natus tenetur qui vel consequuntur dolorem libero magni animi, non, dolore accusamus laborum explicabo  quos, ab doloribus rerum.",
        langage: [
            "Html", "css" ,"javaScrit", "NodeJs","Mysql"
        ]
    }
]

export default function Projet(){
        const [items,setItems]= useState(DataProjet)
        const [active,setActive]= useState(0)
        const FilterItem = (idItem)=>{
            const updateItems = DataProjet.filter((element)=>{
                return element.id === idItem
            })
            setActive(idItem)
            setItems(updateItems)
        }
   
        
        return <div className="projet container">
           
            <div className="projetCard">
                <div className="projectContainer">
                    <div className="imageCardProjet">
                    {items.map((item,index)=>{
                            const {photo} =item
                            if (items.length>=2){
                                FilterItem(1)
                            }
                            return  <img src={photo} alt="" srcset="" className="imageProjet" key={index}/>
                    })}
                    </div>
                    <div className="informationProjet">
                        <h3 className="sectionSousTitre">
                            Web project
                        </h3>
                        <div className="navigationProjet">
                            {
                                navProjet.map((item,index)=>(
                                    <div  
                                        key={index} 
                                        className={`${active === item || (active === 0 && index===0)? 'activeNavProjet':'navProjet'}`}
                                        onClick={()=>FilterItem(item)}
                                    >
                                        {item}
                                    </div>
                                ))
                            }

                        </div>
                        {items.map((item,index)=>{
                            const { nomProjet, description, langage} =item
                            
                            if (items.length>=2){
                                    FilterItem(1)
                            }
                            
                            return  <div key={index}> 
                                        <span className="titreProjet">
                                            {nomProjet}
                                        </span>
                                        <div className="paragrapheProjet">
                                            {description}
                                        </div> 
                                        <div className="langage">
                                            {
                                                langage.map((item,index)=>(
        
                                                    <div className="chaqueLangage " key={index} >
                                                        {item}
                                                    </div>
                                                ))
                                            }
                                        </div>
                            </div>
                        })}
                        <button id="btn" className="btn">Discover</button>
                    </div>
                </div>
            </div>
        </div>
}