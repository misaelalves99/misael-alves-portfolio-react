import '../Header/Header.css';
import Logo from '../../assets/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="header">
                <div className="container-header">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    </div>

                    <nav className="navbar">
                        {/* Desktop Menu */}
                        <ul className="desktop-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/habilidades">Habilidades</Link></li>
                            <li><Link to="/experiencia">Experiência</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>

                        {/* Mobile Hamburger Menu */}
                        <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </button>

                        {/* Fullscreen Mobile Menu */}
                        <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
                            <ul className="menu-list">
                                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                                <li><Link to="/sobre" onClick={toggleMenu}>Sobre</Link></li>
                                <li><Link to="/habilidades" onClick={toggleMenu}>Habilidades</Link></li>
                                <li><Link to="/experiencia" onClick={toggleMenu}>Experiência</Link></li>
                                <li><Link to="/projetos" onClick={toggleMenu}>Projetos</Link></li>
                                <li><Link to="/contato" onClick={toggleMenu}>Contato</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
