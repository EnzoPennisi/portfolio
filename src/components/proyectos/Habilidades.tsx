import "./Habilidades.css"
import reactLogo from "../../assets/icons/ReactLogo.webp";
import htmlLogo from "../../assets/icons/Html5Logo.svg";
import cssLogo from "../../assets/icons/Css3Logo.svg";
import jsLogo from "../../assets/icons/JavascriptLogo.webp";
import tsLogo from "../../assets/icons/TypeScriptLogo.webp";
import javaLogo from "../../assets/icons/JavaLogo.webp";
import springLogo from "../../assets/icons/SpringBootLogo.webp";
import mySqlLogo from "../../assets/icons/MySqlLogo.webp";
import mongoLogo from "../../assets/icons/MongoDbLogo.webp";
import gitLogo from "../../assets/icons/GitLogo.webp";
import auth0Logo from "../../assets/icons/auth0Logo.webp";


function SkillCard({ name, logo, colorShadow, colorSolid }: { name: string, logo: string, colorShadow: string, colorSolid: string }) {
    return (
        <div className="skill-card" style={{ '--color-shadow': colorShadow, "--color-solid": colorSolid } as React.CSSProperties}>
            <p>{name}</p>
            <img src={logo} alt={name} />
        </div >
    )
}

export function Habilidades() {

    const skills = [
        { nombre: "HTML", logo: htmlLogo, colorShadow: "rgba(243, 103, 41, 0.5)", colorSolid: "rgb(243, 103, 41)" },
        { nombre: "CSS", logo: cssLogo, colorShadow: "rgba(41, 135, 197, 0.5)", colorSolid: "rgb(41, 135, 197)" },
        { nombre: "JavaScript", logo: jsLogo, colorShadow: "rgba(240, 219, 79, 0.5)", colorSolid: "rgb(240, 219, 79)" },
        { nombre: "TypeScript", logo: tsLogo, colorShadow: "rgba(45, 121, 200, 0.5)", colorSolid: "rgb(45, 121, 200)" },
        { nombre: "React", logo: reactLogo, colorShadow: "rgba(0, 216, 255, 0.5)", colorSolid: "rgb(0, 216, 255)" },
        { nombre: "Java", logo: javaLogo, colorShadow: "rgba(245, 130, 25, 0.5)", colorSolid: "rgb(245, 130, 25)" },
        { nombre: "Spring Boot", logo: springLogo, colorShadow: "rgba(104, 189, 70, 0.5)", colorSolid: "rgb(104, 189, 70)" },
        { nombre: "MySQL", logo: mySqlLogo, colorShadow: "rgba(0, 104, 141, 0.5)", colorSolid: "rgb(0, 104, 141)" },
        { nombre: "MongoDB", logo: mongoLogo, colorShadow: "rgba(73, 157, 74, 0.5)", colorSolid: "rgb(73, 157, 74)" },
        { nombre: "Git", logo: gitLogo, colorShadow: "rgba(239, 81, 48, 0.5)", colorSolid: "rgb(239, 81, 48)" },
        { nombre: "Auth0", logo: auth0Logo, colorShadow: "rgba(237, 84, 31, 0.5)", colorSolid: "rgb(237, 84, 31)" },

    ];

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