import { useState } from "react";
import "./work.css"
import { MenuWork } from "../../data/dataWork";
import {MdWork} from "react-icons/md"
import { navWork } from "../../data/dataWork";
import Projet from "../projet/projet";

export default  function Work(){
        const [items,setItems]= useState(MenuWork)
        const [active,setActive]= useState(0)
        const FilterItem = (categoryItem)=>{
            const updateItems = MenuWork.filter((element)=>{
                if (categoryItem===navWork[0])
                    return true;
                return element.category === categoryItem
            })
            setActive(categoryItem)
            setItems(updateItems)
        }

        return <div className="work section container" id="work">
            <h1 className="sectionTitre">
                Work
            </h1>
            <Projet/>
            <h1 className="sectionTitre">
                Art
            </h1>
            <div className="filtreWork">
                {
                    navWork.map((item,index)=>(
                        <span 
                            key={index}
                            className={`${active === item || (active === 0 && index===0)? 'activeNavWork':'workItem'}`}
                            onClick={()=>FilterItem(item)}
                        >
                            {item}
                        </span>   
                    ))
                }
            </div>

            <div className="workContainer grid">
                {items.map((item,index)=>{
                    const {id , image, title, category} =item
                    if (items.length===0){
                        return (
                            <div className="containerWorkImage">
                                <img src="./assets/image/herizo.jpg" alt="" srcset="" className="workImage"/>
                            </div>
                        )
                    }
                    return  (
                        <div className="workCard" key={id}>
                            <div className="containerWorkImage">
                                <img src={image} alt="" srcset="" className="workImage"/>
                                <div className="workMask" >

                                </div>
                            </div>
                            <span className="workCategory">{category}</span>
                            <h3 className="workTitle">{title}</h3>
                            <a href="#work" className="workBouton">
                                <MdWork/>
                            </a>

                        </div>  
                    )
                })}
            </div>
        </div>
    }


