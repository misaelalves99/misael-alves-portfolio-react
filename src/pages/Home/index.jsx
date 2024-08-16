import '../Home/Home.css';
import { Link } from 'react-router-dom';
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Curriculo from '../../assets/curriculo-cv.pdf'
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';
import Typical from 'react-typical';
import Perfil from '../../assets/img-perfil.png';

export default function Home() {
    return (
        <> 
            <Header/>

            <MainContainer>
                <div className='container-hero'>
                    <Fade bottom duration={2000} distance="40px">
                        <div className='presentation'>
                            <h1><strong>Olá, sou Misael Alves</strong></h1>
                            <br/>
                            <h2 className='desc'>Desenvolvedor web front-end júnior à procura de estágio ou emprego.</h2>
                            <h2 className='typical'>{''}
                                <Typical 
                                    loop={Infinity} 
                                    steps={[
                                        'React.js',
                                        3000,
                                        'Vite.js',
                                        3000,
                                        'Tailwind CSS',
                                        3000,
                                        'MUI Material',
                                        3000,
                                        'React Router',
                                        3000,
                                    ]}
                                />
                            </h2>
                            <br/>
                            <Link to={Curriculo} target='_blank'>
                                <button><GrDocumentText className='icon-doc' />Download CV</button>
                            </Link>
                        </div>
                    </Fade>
                    
                    <Fade bottom duration={2000} distance="40px">
                        <div className='contact-social'>
                            <div className='home-profile'>
                                <img src={Perfil} alt={Perfil} />
                            </div>
                            <div className='social-media'>
                                <Link to="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'>
                                    <div><FaLinkedinIn className='icon-sm'/></div>
                                </Link>
                                <Link to="https://github.com/misaelalves99" target='_blank'>
                                    <div><FaGithub className='icon-sm'/></div>
                                </Link>
                                <Link to="https://www.instagram.com/misael_alves_99/" target='_blank'>
                                    <div><FaInstagram className='icon-sm'/></div>
                                </Link>
                                <Link to="https://www.facebook.com/misael.alves.92317/" target='_blank'>
                                    <div><FaFacebookF className='icon-sm'/></div>
                                </Link>
                                <Link to="https://x.com/MisaelAlves110" target='_blank'>
                                    <div><FaTwitter className='icon-sm'/></div>
                                </Link>
                            </div>
                        </div> 
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}