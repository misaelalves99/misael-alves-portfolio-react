import '../Contact/Contact.css';
import ImgCont from '../../assets/img-contato.png';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Contact() {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-contact'>
                    <div className="container-hero-contact">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="contact">
                                <h1>Contato</h1>
                                <h2>Contate-me para estágio e entrevistas de emprego.</h2>
                            </div>
                            <div className='contact-img'>
                                <img src={ImgCont} alt={ImgCont} />
                            </div>
                        </Fade>
                    </div>
                    <section className='section-contact-form'>
                        <div className='container-contact-form'>
                            <Fade bottom duration={2000} distance="40px">
                                <form className='form'>
                                    <div className='form-contact'>
                                        <div className='form-name'>
                                            <label htmlFor="">Nome</label>
                                            <input type="text" id='name' className='name' placeholder='Seu Nome' />
                                        </div>
                                        <div className='form-email'>
                                            <label htmlFor="">Email</label>
                                            <input type="email" id='email' className='email' placeholder='seunome@email.com' />
                                        </div>
                                        <div className='form-msg'>
                                            <label htmlFor="">Mensagem</label>
                                            <textarea type="text" name="msg" id="msg" className='msg' placeholder='Sua mensagem'></textarea>
                                        </div>
                                    </div>
                                </form>
                            </Fade>
                        </div>
                    </section>
                </section>
            </MainContainer>

            <Footer/>
        </>
    );
}