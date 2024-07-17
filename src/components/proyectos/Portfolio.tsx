import "./Portfolio.css"
import projectIcon from "../../assets/icons/project.svg";
import skillsIcon from "../../assets/icons/skills.svg";
import { Proyecto } from "./Proyecto";
import { Habilidades } from "./Habilidades";
import { useTranslation } from "react-i18next";


export function Portfolio() {

    const { t } = useTranslation();

    return (
        <div className="portfolio-section">
            <span className="subtitle">
                <img src={projectIcon} alt="Person Icon" />
                {t('portfolio.portfolio')}
            </span>

            <Proyecto />


            <span className="skills-subtitle">
                <img src={skillsIcon} alt="Skills Icon" />
                {t('portfolio.skillsandtools')}
            </span>
            <Habilidades />

        </div >
    );
}