import "./Contacto.css"
import addFriend from "../../assets/icons/add-friend.svg";
import myImage from "../../assets/imgs/yo.webp";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Button } from "@mui/material";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeLetter } from "@coreui/icons";
import { useTranslation } from "react-i18next";

export function Contacto() {

    const { t } = useTranslation();

    return (
        <div className="contact-section">
            <span className="subtitle">
                <img src={addFriend} alt="Person Icon" />
                {t("contact.contact")}
            </span>
            <div className="contact-container">

                <div className="contact-left">
                    <div className="contact-card">
                        <p className="card-title">{t('contact.title')}</p>
                        <p className="card-text">{t('contact.p1')}</p>
                        <p className="card-text">{t('contact.p2')}</p>
                        <p className="card-text">{t('contact.p3')}</p>
                        <p className="card-email">pennisienzo1@gmail.com</p>
                        <Button
                            variant="contained"
                            color="success"
                            className="send-msg"
                            component="a"
                            href="mailto:pennisienzo1@gmail.com?subject=Contacto desde tu sitio web"
                        >
                            <CIcon icon={cilEnvelopeLetter} className="icon" />
                            <span>{t('contact.sendMsg')}</span>
                        </Button>
                    </div>
                </div>

                <div className="contact-right">
                    <img src={myImage} alt="Foto de contacto" className="contact-photo" />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/enzo-pennisi-670a882b3/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/EnzoPennisi" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}