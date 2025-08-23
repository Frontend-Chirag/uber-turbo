import { WebConfig } from "../type";

export const us_es: WebConfig = {
    meta: {
        title: "Gana dinero conduciendo o pide un viaje ahora | Uber India",
        description: ""
    },
    header: {
        fixed_navigation: [
            {
                id: "ride",
                title: "Viajar",
                sublists: []
            },
            {
                id: "earn",
                title: "Ganar",
                sublists: []
            },
            {
                id: "business",
                title: "Negocios",
                sublists: []
            },
            {
                id: "about",
                title: "Acerca de",
                sublists: [
                    { id: "about_us", title: "Sobre nosotros" },
                    { id: "offerings", title: "Nuestras ofertas" },
                    { id: "howuberworks", title: "Cómo funciona Uber" },
                    { id: "sustainability", title: "Sostenibilidad" },
                    {
                        id: "explore",
                        title: "Explorar",
                        sublists: [{
                            id: "cities",
                            title: "Ciudades",
                            sublists: [
                                { id: "new-delhi", title: "Moverse por Nueva Delhi" },
                                { id: "mumbai-suburban", title: "Moverse por Mumbai (Suburbano)" },
                                { id: "haveli", title: "Moverse por Haveli" },
                                { id: "hyderabad", title: "Moverse por Hyderabad" },
                                { id: "bangalore", title: "Moverse por Bangalore" },
                                { id: "kolkata", title: "Moverse por Kolkata" },
                                { id: "chennai", title: "Moverse por Chennai" },
                                { id: "kanayannur", title: "Moverse por Kanayannur" },
                                { id: "ahmedabad-city", title: "Moverse por Ahmedabad City" },
                                { id: "jaipur", title: "Moverse por Jaipur" }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "Sala de prensa" },
                    { id: "investor_relations", title: "Relaciones con inversores" },
                    { id: "autonomous", title: "Autónomo" },
                    { id: "blog", title: "Blog" },
                    { id: "careers", title: "Carreras" }
                ]
            }
        ],
        links: {
            sign_up: "Regístrate",
            log_in: "Iniciar sesión",
            help: "Ayuda"
        }
    },
    main: {
        title: "Ve a cualquier parte con Uber",
        form: {
            labels: {
                date: "Fecha",
                time: "Hora"
            },
            placeholders: {
                pickup: "Lugar de recogida",
                dropoff: "Lugar de destino",
                date: "Hoy",
                time: "Ahora"
            },
            button: "Ver detalles",
            link: "Inicia sesión para ver tu actividad reciente"
        },
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
    },
    section_1: {
        title: "Sugerencias",
        items: [
            {
                title: "Viajar",
                description: "Ve a cualquier parte con Uber. Pide un viaje, súbete y listo.",
                button: "Detalles"
            },
            {
                title: "Reservar",
                description:
                    "Reserva tu viaje con antelación para que puedas relajarte el día de tu viaje.",
                button: "Detalles"
            },
            {
                title: "Interurbano",
                description:
                    "Obtén taxis convenientes y asequibles para viajes fuera de la ciudad en cualquier momento en tu puerta.",
                button: "Detalles"
            },
            {
                title: "Transporte compartido",
                description:
                    "Viajes compartidos de bajo costo en autobuses y furgonetas conducidos profesionalmente.",
                button: "Detalles"
            },
            {
                title: "Mensajería",
                description: "Uber hace más fácil que nunca la entrega de artículos el mismo día.",
                button: "Detalles"
            },
            {
                title: "Alquileres",
                description:
                    "Solicita un viaje por un bloque de tiempo y haz múltiples paradas.",
                button: "Detalles"
            }
        ]
    },
    section_2: {
        title: "Inicia sesión para ver los detalles de tu cuenta",
        description:
            "Ve tus viajes anteriores, sugerencias personalizadas, recursos de soporte y más.",
        button: "Inicia sesión en tu cuenta",
        link: "Crea una cuenta",
        image:
            "https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg"
    },
    section_3: {
        title: "Planifica para más tarde",
        form: {
            title: "Asegura tu viaje con Uber Reserve",
            subtitle: "Elige fecha y hora",
            labels: { date: "Fecha", time: "Hora" },
            placeholders: {
                pickup: "Lugar de recogida",
                dropoff: "Lugar de destino",
                date: "Hoy",
                time: "Ahora"
            },
            button: "Siguiente"
        },
        benefits: {
            title: "Beneficios",
            items: [
                "Elige tu hora de recogida hasta con 90 días de anticipación.",
                "Disfruta de tiempo adicional de espera para que nunca te sientas apurado.",
                "Cancela gratis hasta 60 minutos antes de la recogida."
            ],
            link: "Ver términos"
        }
    },
    section_4: {
        title: "Conduce cuando quieras, gana lo que necesites",
        description:
            "Gana dinero en tu horario con entregas o viajes—o ambos. Puedes usar tu propio coche o elegir un alquiler a través de Uber.",
        button: "Comenzar",
        link: "¿Ya tienes una cuenta? Inicia sesión",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
    },
    section_5: {
        title: "El Uber que conoces, reinventado para negocios",
        description:
            "Uber for Business es una plataforma para gestionar viajes y comidas globales, y entregas locales, para empresas de cualquier tamaño.",
        button: "Comenzar",
        link: "Descubre nuestras soluciones",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
    },
    section_6: {
        title: "Gana dinero alquilando tu coche",
        description:
            "Conéctate con miles de conductores y gana más por semana con las herramientas gratuitas de gestión de flotas de Uber.",
        button: "Comenzar",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
    },
    footer: {
        top_links: ["Visita el Centro de Ayuda"],
        lists: [
            {
                title: "Compañía",
                items: [
                    "Sobre nosotros",
                    "Nuestras ofertas",
                    "Sala de prensa",
                    "Inversores",
                    "Blog",
                    "Carreras"
                ]
            },
            {
                title: "Productos",
                items: [
                    "Viajar",
                    "Conducir",
                    "Comer",
                    "Uber para negocios",
                    "Uber Freight",
                    "Tarjetas de regalo",
                    "Uber Health"
                ]
            },
            {
                title: "Ciudadanos globales",
                items: ["Seguridad", "Sostenibilidad"]
            },
            {
                title: "Viajes",
                items: ["Reservar", "Aeropuertos", "Ciudades"]
            },
            {
                title: "Idioma y región",
                items: ["Español", "Taipei"]
            }
        ],
        bottom_links: ["Privacidad", "Accesibilidad", "Términos"]
    }
};
