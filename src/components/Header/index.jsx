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
            <section className='header'>
                <div className='container-header'>
                    <div className='logo'>
                        <Link to="/"><img src={Logo} alt={Logo} /></Link>
                    </div>

                    <nav className='navbar'>
                        <button className="menu-button" onClick={toggleMenu}>
                            ☰
                        </button>
                        <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/habilidades">Habilidades</Link></li>
                            <li><Link to="/experiencia">Experiência</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}