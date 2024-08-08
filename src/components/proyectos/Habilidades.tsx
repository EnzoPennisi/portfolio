import "./Habilidades.css"
import { HabilidadesData } from "./HabilidadesData";



interface SkillCardProps {
    name: string;
    logo: string;
    colorShadow: string;
    colorSolid: string;
}

function SkillCard({ name, logo, colorShadow, colorSolid }: SkillCardProps) {
    return (
        <div className="skill-card" style={{ '--color-shadow': colorShadow, "--color-solid": colorSolid } as React.CSSProperties}>
            <p>{name}</p>
            <img src={logo} alt={name} />
        </div >
    )
}

export function Habilidades() {

    const skills = HabilidadesData();

    return (
        <div className="skills-container">

            {
                skills.map((skill, index) =>
                    <SkillCard key={index} name={skill.nombre} logo={skill.logo} colorShadow={skill.colorShadow} colorSolid={skill.colorSolid} />
                )
            }
        </div>
    )
}