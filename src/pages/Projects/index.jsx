import '../Projects/Projects.css';
import ImgProj from '../../assets/img-projetos.png';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import { cardProjects } from '../../data/data';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-projects'>
                    <div className="container-hero-projects">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="projects">
                                <h1>Projetos</h1>
                                <h2>Confira alguns dos projetos pessoais em que trabalhei, aplicando minhas habilidades em desenvolvimento web front-end com React.js. Cada projeto reflete meu comprometimento com a criação de soluções funcionais e inovadoras."</h2>
                            </div>
                            
                            <div className='projects-img'>
                                <img src={ImgProj} alt={ImgProj} />
                            </div>
                        </Fade>
                    </div>
                    <section className='section-item-projects'>
                        <div className='container-projects'>
                            <Fade bottom duration={2000} distance="40px">
                                <div className='projects-items'>
                                    {cardProjects.map((data) => (
                                        <div className='item-projects' key={data.id}>
                                            <div className='container-item'>
                                                <div className='img-projects'>
                                                    <img src={data.img} alt="Imagem Projeto" />
                                                </div>
                                                <div className='info-tools'>
                                                    <h2>{data.title}</h2>
                                                    <br/>
                                                    <p>{data.desc}</p>
                                                    <br/>
                                                    <div className='list-tools'>
                                                        <div className='icons-tool'>
                                                            {data.icon1}
                                                        </div>
                                                        <div className='icons-tool'>
                                                            {data.icon2}
                                                        </div>
                                                        <div className='icons-tool'>
                                                            {data.icon3}
                                                        </div>
                                                        <div className='icons-tool'>
                                                            {data.icon4}
                                                        </div>
                                                        <div className='icons-tool'>
                                                            {data.icon5}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='btns-lives'>
                                                    <Link to={data.demo} target='_blank'>
                                                        <button>{data.iconbtn1}Demo</button>
                                                    </Link>
                                                    <Link to={data.github} target='_blank'>
                                                        <button>{data.iconbtn2}GitHub</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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