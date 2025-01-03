import '../Contact/Contact.css';
import ImgCont from '../../assets/img-contato.png';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // Limpa o erro ao alterar o campo
        setErrors({ ...errors, [name]: "" });
    };
    
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validação do nome
        if (!formData.name.trim()) {
        newErrors.name = "Por favor, preencha seu nome.";
        isValid = false;
        }
    
        // Validação do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
        newErrors.email = "Por favor, preencha seu email.";
        isValid = false;
        } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Por favor, insira um email válido.";
        isValid = false;
        }
    
        // Validação da mensagem
        if (!formData.message.trim()) {
        newErrors.message = "Por favor, escreva sua mensagem.";
        isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
        alert("Formulário enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" }); // Reseta o formulário
        }
    };

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
                        <div className="container-contact-form">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="form-contact">
                                <div className="form-name">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Seu Nome"
                                    className="name"
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="seunome@email.com"
                                    className="email"
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>

                                <div className="form-msg">
                                    <label htmlFor="message">Mensagem</label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Sua mensagem"
                                    className="msg"
                                    ></textarea>
                                    {errors.message && (
                                    <span className="error-message">{errors.message}</span>
                                    )}
                                </div>

                                <button type="submit" className="form-submit">
                                    Enviar
                                </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </MainContainer>

            <Footer/>
        </>
    );
}