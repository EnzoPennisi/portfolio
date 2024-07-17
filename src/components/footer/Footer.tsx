import { useTranslation } from "react-i18next";
import "./Footer.css"

export function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t('footer.developed')}</p>
            <p>{t('footer.rights')}</p>
        </footer >
    )
}