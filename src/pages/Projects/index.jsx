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
                                <h2>Confira alguns dos projetos pessoais em que trabalhei, aplicando minhas habilidades em desenvolvimento web front-end com React.js. Cada projeto reflete meu comprometimento com a criação de soluções funcionais e inovadoras.</h2>
                            </div>
                            
                            <div className='projects-img'>
                                <img src={ImgProj} alt={ImgProj} />
                            </div>
                        </Fade>
                    </div>
                    <section className='section-item-projects'>
                        <div className='container-projects'>
                            <Fade bottom duration={2000} distance="40px">
                                <div className="projects-grid">
                                    {cardProjects.map((project) => (
                                        <div className="project-card" key={project.id}>
                                            <div className="project-image">
                                                <img src={project.img} alt={`${project.title} Preview`} />
                                            </div>
                                            <div className="project-info">
                                                <h2>{project.title}</h2>
                                                <p>{project.desc}</p>
                                                <div className="project-tools">
                                                    {Array(5)
                                                        .fill(null)
                                                        .map((_, index) => project[`icon${index + 1}`] && (
                                                            <div className="tool-icon" key={index}>
                                                                {project[`icon${index + 1}`]}
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                            <div className="project-buttons">
                                                <Link to={project.demo} target="_blank" className="btn btn-demo">
                                                    {project.iconbtn1} Demo
                                                </Link>
                                                <Link to={project.github} target="_blank" className="btn btn-github">
                                                    {project.iconbtn2} GitHub
                                                </Link>
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