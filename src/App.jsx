import React from "react";

import Home from "./page/home/home";
import Gauche from "./component/NavBarGauche/gaucheBar";
import About from "./page/about/about";
import Service from "./page/service/service";
import Work from "./page/work/work";
import Skills from "./page/skills/skills";
import Contact from "./page/Contact/contact";
import Experience from "./page/experience/experience";
import "./style.css"
import "./app.css"
import Menu from "./component/menuResponsive/menu";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
        <Gauche/>
        <main className="mainPrincipale">
            <Home/>
            <About/>
            <Skills/>
            <Service/>
            <Experience/>
            <Work/>
            <Contact/>
            <Footer/>
        </main>
        <div className="style">
          -------   Herizo
        </div>
        <Menu/>
    </div>
  );
}

export default App;
