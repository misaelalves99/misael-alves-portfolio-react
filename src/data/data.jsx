import ImgCard from '../assets/img-card.png';

import ImgCert1 from '../assets/img-certificado1.png';
import ImgCert2 from '../assets/img-certificado2.png';
import ImgCert3 from '../assets/img-certificado3.png';
import ImgCert4 from '../assets/img-certificado4.png';

import Certificado1 from "../assets/certificado1.pdf";
import Certificado2 from "../assets/certificado2.pdf";
import Certificado3 from "../assets/certificado3.pdf";
import Certificado4 from "../assets/certificado4.pdf";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";

import ImgProjCard1 from '../assets/img-projeto-card-01.png';
import ImgProjCard2 from '../assets/img-projeto-card-02.png';
import ImgProjCard3 from '../assets/img-projeto-card-03.png';
import ImgProjCard4 from '../assets/img-projeto-card-04.png';
import ImgProjCard5 from '../assets/img-projeto-card-05.png';
import ImgProjCard6 from '../assets/img-projeto-card-06.png';

export const cardFormation = [         
    {
        id: 1,
        img: ImgCard,
        title: "GRADUAÇÃO SUPERIOR COMPLETO",
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Universidade Estácio de Sá",
        periodo: "Período: 25/02/2022 - 01/07/2024"
    },

    {
        id: 2,
        img: ImgCard,
        title: "ENSINO MÉDIO COMPLETO",
        instituicao: "E.E. José Expedito Souza Campos",
        periodo: "Período: 2005 - 2016"
    },
]

export const cardCertification = [
    {
        id: 1,
        imgcert: ImgCert1,
        desc: "Programação de Algoritmos Escaláveis",
        cert: Certificado1
    },

    {
        id: 2,
        imgcert: ImgCert2,
        desc: "Programação de Sistemas de Informação",
        cert: Certificado2
    },

    {
        id: 3,
        imgcert: ImgCert3,
        desc: "Programação Para Internet",
        cert: Certificado3
    },

    {
        id: 4,
        imgcert: ImgCert4,
        desc: "Programação Para Dispositivos Móveis",
        cert: Certificado4
    },
]

export const cardProjects = [
    {
        id: 1,
        img: ImgProjCard1,
        title: "PORTFÓLIO",
        desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://misael-alves-portfolio-react.vercel.app/",
        github: "https://github.com/misaelalves99/misael-alves-portfolio-react"
    },

    {
        id: 2,
        img: ImgProjCard2,
        title: "FASHION SHOP",
        desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <RiTailwindCssLine className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://fashion-shop-react-six.vercel.app/",
        github: "https://github.com/misaelalves99/fashion-shop-react"
    },

    {
        id: 3,
        img: ImgProjCard3,
        title: "E-COMMERCE SHOP",
        desc: "Nesse projeto pessoal de loja virtual possui variadas categorias de produtos para filtrar e efetuar a compra.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <SiNextdotjs className='icon-tool'/>,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://e-commerce-shop-next-xi.vercel.app/",
        github: "https://github.com/misaelalves99/e-commerce-shop-next"
    },
    {
        id: 4,
        img: ImgProjCard4,
        title: "MS PET",
        desc: "Projeto pessoal que proporciona o agendamento de uma visita para a adoção de animais de estimação.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <SiNextdotjs className='icon-tool'/>,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://ms-pet-next.vercel.app/",
        github: "https://github.com/misaelalves99/ms-pet-next"
    },
    {
        id: 5,
        img: ImgProjCard5,
        title: "MS FOOD",
        desc: "Fazer pedido de comida no sistema de anotação de pedidos do cliente em restaurante.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://ms-food-react.vercel.app/",
        github: "https://github.com/misaelalves99/ms-food-react"
    },
    {
        id: 6,
        img: ImgProjCard6,
        title: "MS NUTRI",
        desc: "Um projeto de informações de alimentos nutritivos para a saúde geral.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demo: "https://ms-nutri-react.vercel.app/",
        github: "https://github.com/misaelalves99/ms-nutri-react"
    }
]
