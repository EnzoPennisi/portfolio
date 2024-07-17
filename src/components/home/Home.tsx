import { ParticlesTs } from "./ParticlesTs";
import { TextoAnimado } from "./TextoAnimado";
import "./Home.css"
import { Button } from "@mui/material";
import personIcon from "../../assets/icons/persona.svg";
import Lottie from "lottie-react";
import downloadIcon from "../../assets/lottie/DownloadAnimation.json";
import { useTranslation } from "react-i18next";

export function Home() {

    const { t } = useTranslation();

    const handleOpenCV = () => {
        const cvUrl = 'https://drive.google.com/file/d/1K6F9Z_VYEYwtqu6bKQbbK9q27koD1TL2/view';
        window.open(cvUrl, '_blank');
    }

    const cards = [
        { paragraphs: [t('home.card1.p1'), t('home.card1.p2'), t('home.card1.p3')] },
        { paragraphs: [t('home.card2.p1'), t('home.card2.p2'), t('home.card2.p3')] },
        { paragraphs: [t('home.card3.p1'), t('home.card3.p2')] }
    ];

    return (
        <div className="home-section">
            <ParticlesTs />
            <TextoAnimado />
            <span className="subtitle">
                <img src={personIcon} alt="Person Icon" />
                {t('home.aboutMe')}
            </span>
            <div className="home-container">

                {cards.map((card, index) => (
                    <div className="home-card" key={index}>
                        {card.paragraphs.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                ))}

                <Button variant="contained" color="success" className="download-button" onClick={handleOpenCV}>
                    <Lottie animationData={downloadIcon} className="download-icon" />
                    <p>{t('home.downloadCV')}</p>
                </Button>
            </div>
        </div>
    );
}