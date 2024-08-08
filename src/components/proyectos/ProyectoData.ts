
import bsImage from "../../assets/imgs/BuenSabor.webp"
import hendrixImage from "../../assets/imgs/MusicalHendrix.webp"
import recFacialImage from "../../assets/imgs/ReconocimientoFacial.webp"
import noticiasImage from "../../assets/imgs/NoticiasPhp.webp"
import reactLogo from "../../assets/icons/ReactLogo.webp";
import tsLogo from "../../assets/icons/TypeScriptLogo.webp";
import javaLogo from "../../assets/icons/JavaLogo.webp";
import springLogo from "../../assets/icons/SpringBootLogo.webp";
import mySqlLogo from "../../assets/icons/MySqlLogo.webp";
import auto0Logo from "../../assets/icons/auth0Logo.webp";
import mpLogo from "../../assets/icons/MercadoPagoLogo.webp";
import pyLogo from "../../assets/icons/PythonLogo.svg";
import phpLogo from "../../assets/icons/PhpLogo.webp";
import { useTranslation } from "react-i18next"

export function ProyectoData() {
    const { t } = useTranslation();

    return [
        {
            nombre: t('portfolio.project1.name'),
            descripcion: t('portfolio.project1.description'),
            img: bsImage,
            codigoUrl: "https://github.com/EnzoPennisi/BuenSabor",
            demoUrl: "https://buen-sabor-front-ten.vercel.app/",
            tecnologias: [
                { logo: reactLogo, name: "React" },
                { logo: tsLogo, name: "TypeScript" },
                { logo: javaLogo, name: "Java" },
                { logo: springLogo, name: "Spring Boot" },
                { logo: mySqlLogo, name: "MySQL" },
                { logo: auto0Logo, name: "Auth0" },
                { logo: mpLogo, name: "Mercado Pago" },
            ]
        },
        {
            nombre: t('portfolio.project2.name'),
            descripcion: t('portfolio.project2.description'),
            img: hendrixImage,
            codigoUrl: "https://github.com/EnzoPennisi/instrumentos-hendrix",
            demoUrl: "",
            tecnologias: [
                { logo: reactLogo, name: "React" },
                { logo: tsLogo, name: "TypeScript" },
                { logo: javaLogo, name: "Java" },
                { logo: springLogo, name: "Spring Boot" },
                { logo: mySqlLogo, name: "MySQL" },
                { logo: mpLogo, name: "Mercado Pago" }
            ]
        },
        {
            nombre: t('portfolio.project3.name'),
            descripcion: t('portfolio.project3.description'),
            img: noticiasImage,
            codigoUrl: "https://github.com/EnzoPennisi/empresa-noticias",
            demoUrl: "",
            tecnologias: [
                { logo: phpLogo, name: "PHP" },
                { logo: mySqlLogo, name: "MySQL" }
            ]
        },
        {
            nombre: t('portfolio.project4.name'),
            descripcion: t('portfolio.project4.description'),
            img: recFacialImage,
            codigoUrl: "https://github.com/EnzoPennisi/reconocimiento-facial",
            demoUrl: "",
            tecnologias: [
                { logo: pyLogo, name: "Python" },
                { logo: mySqlLogo, name: "MySQL" }
            ]
        },
    ];
}