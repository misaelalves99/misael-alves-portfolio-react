import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/sobre" element={ <About /> }/>
                <Route path="/habilidades" element={ <Skills /> }/>
                <Route path="/experiencia" element={ <Experience /> }/>
                <Route path="/projetos" element={ <Projects /> }/>
                <Route path="/contato" element={ <Contact /> }/>
            </Routes>
        </Router>
    );
};

export default App;