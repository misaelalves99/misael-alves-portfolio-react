import '../About/About.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { cardFormation, cardCertification } from '../../data/data';
import Fade from 'react-reveal';
import Perfil from '../../assets/img-perfil.png';

export default function About() {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-about-me'>
                    <div className="container-hero-about">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="about-me">
                                <h1>Sobre mim</h1>
                                <br/>
                                <h2>Olá, meu nome é Misael Alves, moro em Teófilo Otoni-MG. Sou desenvolvedor front-end em React.js e sou formado no curso de Análise e Desenvolvimento de Sistemas.</h2>
                            </div>
                            <div className='about-me-profile'>
                                <img src={Perfil} alt={Perfil} />
                            </div>
                        </Fade>
                    </div>
                    
                    {/* EDUCAÇÃO */}
                    <div className='education'>
                        <Fade bottom duration={2000} distance="40px">
                        <div className='container-education'>
                            <div className='education-title'>
                                <h1>Educação</h1>
                                <h2>Formação Acadêmica</h2>
                            </div>

                            {/* Formação Acadêmica */}
                            <div className='formation-items'>
                                {cardFormation.map((data) => (
                                    <div className='item-formation' key={data.id}>
                                        <div className='container-item-for'>
                                            <div className='img-item-for'>
                                                <img src={data.img} alt="Imagem Card" />
                                            </div>
                                            <div className='info-item-for'>
                                                <h3>{data.title}</h3>
                                                <p>{data.curso}</p>
                                                <p>{data.instituicao}</p>
                                                <p>{data.periodo}</p>
                                                <p>{data.nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certificações */}
                            <div className='certifications'>
                                <div className='certifications-title'>
                                    <h2>Certificações</h2>
                                </div>

                                <div className='certifications-items'>
                                    {cardCertification.map((data) => (
                                        <Link to={data.cert} target='_blank' key={data.id}>
                                            <div className='item-certifications'>
                                                <div className='container-item-cert'>
                                                    <div className='img-certifications'>
                                                        <img src={data.imgcert} alt="Certificado" />
                                                    </div>
                                                    <div className='description-certifications'>
                                                        <p>{data.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                            
                        </Fade>
                    </div>
                </section>
            </MainContainer>

            <Footer/>
        </>
    );
}