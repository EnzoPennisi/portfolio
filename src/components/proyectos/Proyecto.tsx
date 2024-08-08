import "./Proyecto.css"
import CIcon from "@coreui/icons-react"
import { cibGithub, cilScreenDesktop } from "@coreui/icons"
import { useTranslation } from "react-i18next"
import { ProyectoData } from "./ProyectoData"

interface Tecnologia {
    logo: string;
    name: string;
}

interface ImagenProyectoProps {
    img: string;
    tecnologias: Tecnologia[];
}

interface DescripcionProyectoProps {
    nombre: string;
    descripcion: string;
    codigoUrl: string;
    demoUrl: string;
}

interface ProjectCardProps {
    nombre: string;
    descripcion: string;
    img: string;
    codigoUrl: string;
    demoUrl: string;
    tecnologias: Tecnologia[];
}

function ImagenProyecto({ img, tecnologias }: ImagenProyectoProps) {
    return (
        <div className="project-img-container">
            <img src={img} alt="" className="project-img" />
            <div className="tech-logos-container">

                {tecnologias.map((tecnologia, index) => (
                    <div className="tech-logo" key={index}>
                        <img src={tecnologia.logo} alt={tecnologia.name} className="tech-logo-img" />
                        <span>{tecnologia.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function DescripcionProyecto({ nombre, descripcion, codigoUrl, demoUrl }: DescripcionProyectoProps) {
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

function ProjectCard({ nombre, descripcion, img, codigoUrl, demoUrl, tecnologias }: ProjectCardProps) {

    return (
        <div className="project-card-container">
            <ImagenProyecto img={img} tecnologias={tecnologias} />
            <DescripcionProyecto nombre={nombre} descripcion={descripcion} codigoUrl={codigoUrl} demoUrl={demoUrl} />
        </div>
    )
}

export function Proyecto() {

    const projects = ProyectoData();

    return (
        <div className="project-container">
            {
                projects.map((project, index) =>
                    <ProjectCard key={index} nombre={project.nombre} descripcion={project.descripcion} img={project.img} codigoUrl={project.codigoUrl} demoUrl={project.demoUrl} tecnologias={project.tecnologias} />
                )
            }
        </div>
    )
}