import '../Experience/Experience.css';
import ImgExp from '../../assets/img-experiencia.png';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Experience() {
    return (
        <>
            <Header/>

            <MainContainer>
                <div className='container-hero-experience'>
                    <Fade bottom duration={2000} distance="40px">
                        <div className="experience">
                            <h1>Experiência</h1>
                            <h2>Procuro por oportunidades para demonstrar o meu valor e desempenho. Estou à disposição para vagas de estágio em Desenvolvimento Front-End em React.js.</h2>
                        </div>
                        <div className='experience-img'>
                            <img src={ImgExp} alt={ImgExp} />
                        </div>
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}