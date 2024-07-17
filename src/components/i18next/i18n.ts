import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "navbar": {
                "home": "Home",
                "portfolio": "Portfolio",
                "contact": "Contact",
            },
            "home": {
                "aboutMe": "About me",
                "card1": {
                    "p1": "I am passionate about facing complex challenges and finding efficient and functional solutions.",
                    "p2": "I enjoy the process of programming and the satisfaction of seeing my ideas become reality.",
                    "p3": "I am always in search of new experiences and knowledge that allow me to grow both professionally and personally."
                },
                "card2": {
                    "p1": "I am a University Technician in Programming.",
                    "p2": "I studied at the National Technological University - Regional Faculty of Mendoza.",
                    "p3": "I have solid knowledge in HTML, CSS, JavaScript and Java."
                },
                "card3": {
                    "p1": "I am available for freelance work and any type of programming-related job.",
                    "p2": "If you are interested in collaborating, do not hesitate to contact me."
                },
                "downloadCV": "Download CV",
            },
            "portfolio": {
                "portfolio": "Portfolio",
                "project1": {
                    "name": "Buen Sabor - Food Delivery",
                    "description": "Development of a web application for a restaurant chain. " +
                        "It allows user registration using Auth0 and role management. " +
                        "It has a shopping cart for the selection of different products and a payment system with Mercado Pago. " +
                        "It also has a dashboard with information about the sale of products and reports can be generated. " +
                        "Administrators can manage products, categories and users.",
                },
                "project2": {
                    "name": "Hendrix - Musical Instruments E-commerce",
                    "description": "Web application for a musical instruments store. " +
                        "It has a shopping cart and a payment system with Mercado Pago, it also has encrypted Login. " +
                        "It also has a dashboard and report generation.",
                },
                "project3": {
                    "name": "News Blog",
                    "description": "This project allows managing several companies, and each company can have several news. ",
                },
                "project4": {
                    "name": "Facial Recognition",
                    "description": "Artificial Intelligence project that allows facial recognition of people. " +
                        "The application allows users to register and then log in using their face. ",
                },
                "code": "Code",
                "skillsandtools": "Skills and Tools",
            },
            "contact": {
                "contact": "Contact",
                "title": "Let's connect!",
                "p1": "Do you have an innovative idea or a project in mind? I would love to hear it and see how we can collaborate.",
                "p2": "I'm here to help you transform your ideas into reality with efficient and creative technological solutions.",
                "p3": "Don't hesitate to send me a message to start working together!",
                "sendMsg": "Send message",
            },
            "footer": {
                "developed": "Developed by Enzo Pennisi",
                "rights": "© 2024 - All rights reserved"
            }
        }
    },
    es: {
        translation: {
            "navbar": {
                "home": "Inicio",
                "portfolio": "Portafolio",
                "contact": "Contacto",
            },
            "home": {
                "aboutMe": "Sobre mí",
                "card1": {
                    "p1": "Me apasiona enfrentar desafíos complejos y encontrar soluciones eficientes y funcionales.",
                    "p2": "Disfruto del proceso de programación y la satisfacción de ver cómo mis ideas se convierten en realidad.",
                    "p3": "Siempre estoy en busca de nuevas experiencias y conocimientos que me permitan crecer tanto profesional como personalmente."
                },
                "card2": {
                    "p1": "Soy Técnico Universitario en Programación.",
                    "p2": "Estudié en la Universidad Tecnológica Nacional - Facultad Regional de Mendoza.",
                    "p3": "Tengo conocimientos sólidos en HTML, CSS, JavaScript y Java."
                },
                "card3": {
                    "p1": "Estoy disponible para trabajo freelance y cualquier tipo de trabajo relacionado con programación.",
                    "p2": "Si estás interesado en colaborar, no dudes en contactarme."
                },
                "downloadCV": "Descargar CV",
            },
            "portfolio": {
                "portfolio": "Portafolio",
                "project1": {
                    "name": "Buen Sabor - Delivery de Comida",
                    "description": "Desarrollo de una aplicación web para una cadena de restaurantes. " +
                        "Permite el registro de usuarios utilizando Auth0 y el manejo de roles.  " +
                        "Posee un carrito de compras para la selección de los diferentes productos y un sistema de pagos con Mercado Pago." +
                        "Tambien cuenta con un dashboard con informacion sobre la venta de los productos y se pueden generar reportes. " +
                        "Los administradores pueden gestionar los productos, categorias y usuarios.",
                },
                "project2": {
                    "name": "Hendrix - E-commerce de Instrumentos Musicales",
                    "description": "Aplicación web para una tienda de instrumentos musicales. " +
                        "Posee un carrito de compra y un sistema de pagos con Mercado Pago, ademas cuenta con Inicio de Sesión encriptado. " +
                        "Tambien cuenta con un dashboard y generacion de reportes.",
                },
                "project3": {
                    "name": "Blog de noticias",
                    "description": "Este proyecto permite gestionar varias empresas, y que cada empresa pueda tener varias noticias. ",
                },
                "project4": {
                    "name": "Reconocimiento Facial",
                    "description": "Proyecto de Inteligencia Artificial que permite el reconocimiento facial de personas. " +
                        "La aplicacion permite a los usuarios registrarse y luego iniciar sesión utilizando su rostro. ",
                },
                "code": "Código",
                "skillsandtools": "Habilidades y Herramientas",

            },
            "contact": {
                "contact": "Contacto",
                "title": "¡Conectemos!",
                "p1": "¿Tienes una idea innovadora o un proyecto en mente? Me encantaría escucharlo y ver cómo podemos colaborar.",
                "p2": "Estoy aquí para ayudarte a transformar tus ideas en realidad con soluciones tecnológicas eficientes y creativas.",
                "p3": "¡No dudes en enviarme un mensaje para comenzar a trabajar juntos!",
                "sendMsg": "Enviar mensaje",
            },
            "footer": {
                "developed": "Desarrollado por Enzo Pennisi",
                "rights": "© 2024 - Todos los derechos reservados"
            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'es', // idioma predeterminado
    interpolation: {
        escapeValue: false
    }
});

export default i18n;