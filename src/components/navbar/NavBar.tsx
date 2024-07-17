import CIcon from '@coreui/icons-react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { cifAr, cifUs, cilBriefcase, cilEnvelopeClosed, cilHome } from '@coreui/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function NavBar() {

    const [activeSection, setActiveSection] = useState<string>('home');
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es'>('es');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const sections = [
            { id: 'home' },
            { id: 'portfolio' },
            { id: 'contacto' },
            // Agrega nuevas secciones aquí
        ];

        const handleScroll = () => {
            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i].id);
                if (section && isElementInViewport(section)) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isElementInViewport = (element: HTMLElement | null) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        // Define un margen de desplazamiento para considerar un elemento como visible
        const offset = 100; // Ajusta este valor según sea necesario

        // Verifica si la parte superior del elemento está dentro del rango deseado
        const isTopVisible = rect.top >= 0 && rect.top < windowHeight - offset;
        // Opcional: Verifica si la parte inferior del elemento está dentro del rango deseado
        // Esto puede ser útil si tienes secciones de diferentes alturas y quieres mejorar la precisión
        const isBottomVisible = rect.bottom > offset && rect.bottom <= windowHeight;

        return isTopVisible || isBottomVisible;
    };

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
        i18n.changeLanguage(currentLanguage === 'en' ? 'es' : 'en');
    };

    return (
        <nav className="navbar">
            <Link smooth to="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                <CIcon icon={cilHome} className="icon" />
                <span>{t('navbar.home')}</span>
            </Link>
            <Link smooth to="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
                <CIcon icon={cilBriefcase} className="icon" />
                <span>{t('navbar.portfolio')}</span>
            </Link>
            <Link smooth to="#contacto" className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}>
                <CIcon icon={cilEnvelopeClosed} className="icon" />
                <span>{t('navbar.contact')}</span>
            </Link>
            <div className='nav-link' onClick={toggleLanguage} style={{ cursor: "pointer" }}>
                <CIcon icon={currentLanguage === "en" ? cifUs : cifAr} className="icon" />
                <span>{currentLanguage === "en" ? "EN" : "ES"}</span>
            </div>

        </nav>
    );
}