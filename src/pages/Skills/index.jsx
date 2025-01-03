import '../Skills/Skills.css';
import ImgHab from '../../assets/img-habilidades.png';
import { FaHtml5, FaCss3Alt, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator } from "react-icons/di";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Skills() {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-skills'>
                    <div className="container-hero-skills">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="skills">
                                <h1>Habilidades</h1>
                                <h2>Essas são as minhas habilidades como desenvolvedor front-end.</h2>
                            </div>
                            <div className='skills-img'>
                                <img src={ImgHab} alt={ImgHab} />
                            </div>
                        </Fade> 
                    </div>
                    {/* Linguagens */}
                    <section className='section-languages'>
                        <div className='container-languages'>
                            <Fade bottom duration={2000} distance="40px">
                                <div className='lang-title'>
                                    <h2>Linguagens</h2>
                                </div>
                                <div className='languages-items'>
                                    <div className='item-languages'>
                                        <FaHtml5 className='icon-languages' />
                                    </div>
                                    <div className='item-languages'>
                                        <FaCss3Alt className='icon-languages' />
                                    </div>
                                    <div className='item-languages'>
                                        <IoLogoJavascript className='icon-languages' />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className='container-libraries'>
                            <Fade bottom duration={2000} distance="40px">
                                <div className='libr-title'>
                                    <h2>Bibliotecas e Frameworks</h2>
                                </div>
                                <div className='libraries-items'>
                                    <div className='item-libraries'>
                                        <FaReact className='icon-libraries' />
                                    </div>
                                    <div className='item-libraries'>
                                        <RiTailwindCssLine className='icon-libraries' />
                                    </div>
                                    <div className='item-libraries'>
                                        <FaNpm className='icon-libraries' />
                                    </div>
                                    <div className='item-libraries'>
                                        <SiReactrouter className='icon-libraries' />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className='container-tools'>
                            <Fade bottom duration={2000} distance="40px">
                                <div className='tools-title'>
                                    <h2>Ferramentas e Plataformas </h2>
                                    <br/>
                                </div>
                                <div className='tools-items'>
                                    <div className='item-tools'>
                                        <VscVscode className='icon-tools' />
                                    </div>
                                    <div className='item-tools'>
                                        <DiIllustrator className='icon-tools' />
                                    </div>
                                    <div className='item-tools'>
                                        <FaFigma className='icon-tools' />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </section>
                </section>
            </MainContainer>

            <Footer/>
        </>
    );
}