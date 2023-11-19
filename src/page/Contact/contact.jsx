import { Component } from "react";
import './contact.css'
import {AiFillAccountBook} from 'react-icons/ai'
import {MdSkipNext} from 'react-icons/md'
const contactCard = [
    {
        chemin: "mailto:fitahianaherizo10@gmail.com.com",
        nom: "Email",
        adresse : "fitahianaherizo10@gmail.com"
    },
    {
        chemin: "https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA",
        nom: "GitHub",
        adresse : "herizo"
    },
    {
        chemin: "https://www.facebook.com/profile.php?id=100079988185465",
        nom: "Facebook",
        adresse : "heri zo"
    },
]

function ContactCard({chemin ,nomAdresse, adresse}){
    return <div className="contactCard">
     
                    <AiFillAccountBook className="contactCardIcon"/>

                <h3 className="contactCardTitle">
                    {nomAdresse}
                </h3>
                <div className="contactCardData">
                    {adresse}
                </div>
                <a href={chemin} className="contactBoutton">
                    <div className="contactBouttonCard">
                        <div className="writeMe">
                            write-me
                        </div>
                        <MdSkipNext className="contactCardIcon"/>
                    </div>
                     
                </a>
            </div>
}

class Contact extends Component{
    render(){
        return <div className="contact section container" id="contact">
            <h1 className="sectionTitre">
                Contact me
            </h1>
            <div className="contactContainer grid">
                <div className="contactContent">
                    <h3 className="contactTitre">
                        Talk to me
                    </h3>
                    <div className="contactInfo">
                        {
                            contactCard.map((item,index)=>(
                                <ContactCard key={index} chemin={item.chemin} nomAdresse={item.nom} adresse={item.adresse}/>
                            ))
                        }
                    </div>
                </div>
                <div className="contactContent">
                    <h3 className="contactTitre">
                        Write your project
                    </h3>
                    <form action="" className="contactForm">
                        <div className="contactFormCard">
                            <label htmlFor="nom" className="contactFormTag">Nom</label>
                            <input 
                                type="text" 
                                name="nom"
                                id="nom" 
                                className="contactFormInput" 
                                placeholder="Votre Nom"
                            />
                        </div>

                        <div className="contactFormCard">
                            <label htmlFor="email" className="contactFormTag">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="contactFormInput" 
                                placeholder="Example@gmail.com"
                            />
                        </div>

                        <div className="contactFormCard">
                            <label htmlFor="projet" className="contactFormTag">Projet</label>
                            <textarea
                                name="projet" 
                                id="projet" 
                                cols="30"
                                rows="10"
                                className="contactFormInput contactFormArea" 
                                placeholder="Votre Projet"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}
export default Contact