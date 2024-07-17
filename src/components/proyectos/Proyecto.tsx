import "./Proyecto.css"
import bsImage from "../../assets/imgs/BuenSabor.webp"
import hendrixImage from "../../assets/imgs/MusicalHendrix.webp"
import recFacialImage from "../../assets/imgs/ReconocimientoFacial.webp"
import noticiasImage from "../../assets/imgs/NoticiasPhp.webp"
import CIcon from "@coreui/icons-react"
import { cibGithub, cilScreenDesktop } from "@coreui/icons"
import reactLogo from "../../assets/icons/ReactLogo.webp";
import tsLogo from "../../assets/icons/TypeScriptLogo.webp";
import javaLogo from "../../assets/icons/JavaLogo.webp";
import springLogo from "../../assets/icons/SpringBootLogo.webp";
import mySqlLogo from "../../assets/icons/MySqlLogo.webp";
import auto0Logo from "../../assets/icons/auth0Logo.webp";
import mpLogo from "../../assets/icons/MercadoPagoLogo.webp";
import pyLogo from "../../assets/icons/PythonLogo.svg";
import phpLogo from "../../assets/icons/PhpLogo.svg";
import { useTranslation } from "react-i18next"

function ImagenProyecto({ img, tecnologias }: { img: string, tecnologias: string[] }) {
    return (
        <div className="project-img-container">
            <img src={img} alt="" className="project-img" />
            <div className="tech-logos-container">

                {tecnologias.map((logo, index) => (
                    <img key={index} src={logo} alt="" className="tech-logo" />
                ))}
            </div>
        </div>
    )
}

function DescripcionProyecto({ nombre, descripcion, codigoUrl, demoUrl }: { nombre: string, descripcion: string, codigoUrl: string, demoUrl: string }) {
    const { t } = useTranslation();

    return (
        <div className="project-description-container">
            <h3>{nombre}</h3>
            <div className="project-description">
                <div className="project-text-container">
                    <p>{descripcion}</p>
                </div>
                <div className="project-buttons-container">
                    <a href={codigoUrl} target="_blank" className="project-button">
                        <CIcon icon={cibGithub} className="icon" />
                        <span>{t('portfolio.code')}</span>
                    </a>
                    {demoUrl !== "" &&
                        <a href={demoUrl} target="_blank" className="project-button">
                            <CIcon icon={cilScreenDesktop} className="icon" />
                            <span>Demo</span>
                        </a>
                    }

                </div>
            </div>
        </div>
    )
}

function ProyectCard({ nombre, descripcion, img, codigoUrl, demoUrl, tecnologias }: { img: string, nombre: string, descripcion: string, codigoUrl: string, demoUrl: string, tecnologias: string[] }) {

    return (
        <div className="project-card-container">
            <ImagenProyecto img={img} tecnologias={tecnologias} />
            <DescripcionProyecto nombre={nombre} descripcion={descripcion} codigoUrl={codigoUrl} demoUrl={demoUrl} />
        </div>
    )
}

export function Proyecto() {

    const { t } = useTranslation();

    const projects = [
        {
            nombre: t('portfolio.project1.name'),
            descripcion: t('portfolio.project1.description'),
            img: bsImage,
            codigoUrl: "https://github.com/EnzoPennisi/BuenSabor",
            demoUrl: "https://buen-sabor-front-ten.vercel.app/",
            tecnologias: [reactLogo, tsLogo, javaLogo, springLogo, mySqlLogo, auto0Logo, mpLogo]
        },
        {
            nombre: t('portfolio.project2.name'),
            descripcion: t('portfolio.project2.description'),
            img: hendrixImage,
            codigoUrl: "https://github.com/EnzoPennisi/instrumentos-hendrix",
            demoUrl: "",
            tecnologias: [reactLogo, tsLogo, javaLogo, springLogo, mySqlLogo, mpLogo]
        },
        {
            nombre: t('portfolio.project3.name'),
            descripcion: t('portfolio.project3.description'),
            img: noticiasImage,
            codigoUrl: "https://github.com/EnzoPennisi/empresa-noticias",
            demoUrl: "",
            tecnologias: [phpLogo, mySqlLogo]
        },
        {
            nombre: t('portfolio.project4.name'),
            descripcion: t('portfolio.project4.description'),
            img: recFacialImage,
            codigoUrl: "https://github.com/EnzoPennisi/reconocimiento-facial",
            demoUrl: "",
            tecnologias: [pyLogo, mySqlLogo]
        },

    ]

    return (
        <div className="project-container">
            {
                projects.map((project, index) =>
                    <ProyectCard key={index} nombre={project.nombre} descripcion={project.descripcion} img={project.img} codigoUrl={project.codigoUrl} demoUrl={project.demoUrl} tecnologias={project.tecnologias} />
                )
            }
        </div>
    )
}