import { HomeConfig } from "../../../type";

export default {
    meta: {
        title: "Gana dinero conduciendo o pide un viaje ahora | Uber India",
        description: ""
    },
    header: {
        navigation: [
            {
                id: "ride",
                title: "Viajar",
                sublists: [],
                  depth: 1,
            },
            {
                id: "earn",
                title: "Ganar",
                sublists: [],
                  depth: 1,
            },
            {
                id: "business",
                title: "Negocios",
                sublists: [],
                  depth: 1,
            },
            {
                id: "about",
                title: "Acerca de",
                depth: 1,
                sublists: [
                    { id: "about_us", title: "Sobre nosotros" ,  depth: 2,},
                    { id: "offerings", title: "Nuestras ofertas" ,  depth: 2,},
                    { id: "howuberworks", title: "Cómo funciona Uber",  depth: 2, },
                    { id: "sustainability", title: "Sostenibilidad",  depth: 2, },
                    {
                        id: "explore",
                        title: "Explorar",
                        depth: 2,
                        sublists: [{
                            id: "cities",
                            title: "Ciudades",
                            depth: 3,
                            sublists: [
                                { id: "new-delhi", title: "Moverse por Nueva Delhi",  depth: 4, },
                                { id: "mumbai-suburban", title: "Moverse por Mumbai (Suburbano)",  depth: 4, } ,
                                { id: "haveli", title: "Moverse por Haveli," ,  depth: 4,},
                                { id: "hyderabad", title: "Moverse por Hyderabad",  depth: 4, },
                                { id: "bangalore", title: "Moverse por Bangalore",  depth: 4, },
                                { id: "kolkata", title: "Moverse por Kolkata",  depth: 4, },
                                { id: "chennai", title: "Moverse por Chennai",  depth: 4, },
                                { id: "kanayannur", title: "Moverse por Kanayannur",  depth: 4, },
                                { id: "ahmedabad-city", title: "Moverse por Ahmedabad City" ,  depth: 4,},
                                { id: "jaipur", title: "Moverse por Jaipur",  depth: 4, }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "Sala de prensa",  depth: 2, },
                    { id: "investor_relations", title: "Relaciones con inversores",  depth: 2, },
                    { id: "autonomous", title: "Autónomo",  depth: 2, },
                    { id: "blog", title: "Blog",  depth: 2, },
                    { id: "careers", title: "Carreras",  depth: 2, }
                ]
            }
        ],
        sign_up_text: "Regístrate",
        log_in_text: "Iniciar sesión",
        help_text: "Ayuda"
    },
    main: {
        title: "Asegura un poco de tranquilidad con Reserve",
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
            submit_text: "Ver detalles",
        },
        log_in_recent_activity_text: "Inicia sesión para ver tu actividad reciente"
    },
    section_1: {
        title: "Sugerencias",
        items: [
            {
                title: "Viajar",
                description: "Ve a cualquier parte con Uber. Pide un viaje, súbete y listo.",
                button_text: "Detalles"
            },
            {
                title: "Reservar",
                description:
                    "Reserva tu viaje con antelación para que puedas relajarte el día de tu viaje.",
                button_text: "Detalles"
            },
            {
                title: "Interurbano",
                description:
                    "Obtén taxis convenientes y asequibles para viajes fuera de la ciudad en cualquier momento en tu puerta.",
                button_text: "Detalles"
            },
            {
                title: "Transporte compartido",
                description:
                    "Viajes compartidos de bajo costo en autobuses y furgonetas conducidos profesionalmente.",
                button_text: "Detalles"
            },
            {
                title: "Mensajería",
                description: "Uber hace más fácil que nunca la entrega de artículos el mismo día.",
                button_text: "Detalles"
            },
            {
                title: "Alquileres",
                description:
                    "Solicita un viaje por un bloque de tiempo y haz múltiples paradas.",
                button_text: "Detalles"
            }
        ]
    },
    section_2: {
        title: "Inicia sesión para ver los detalles de tu cuenta",
        description:
            "Ve tus viajes anteriores, sugerencias personalizadas, recursos de soporte y más.",
        button_text: "Inicia sesión en tu cuenta",
        link_text: "Crea una cuenta",
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
            button_text: "Siguiente"
        },
        benefits: {
            title: "Beneficios",
            items: [
                "Elige tu hora de recogida hasta con 90 días de anticipación.",
                "Disfruta de tiempo adicional de espera para que nunca te sientas apurado.",
                "Cancela gratis hasta 60 minutos antes de la recogida."
            ],
            link_text: "Ver términos"
        }
    },
    section_4: {
        title: "Conduce cuando quieras, gana lo que necesites",
        description:
            "Gana dinero en tu horario con entregas o viajes—o ambos. Puedes usar tu propio coche o elegir un alquiler a través de Uber.",
        button_text: "Comenzar",
        link_text: "¿Ya tienes una cuenta? Inicia sesión",
    },
    section_5: {
        title: "El Uber que conoces, reinventado para negocios",
        description:
            "Uber for Business es una plataforma para gestionar viajes y comidas globales, y entregas locales, para empresas de cualquier tamaño.",
        button_text: "Comenzar",
        link_text: "Descubre nuestras soluciones",
    },
    section_6: {
        title: "Gana dinero alquilando tu coche",
        description:
            "Conéctate con miles de conductores y gana más por semana con las herramientas gratuitas de gestión de flotas de Uber.",
        button_text: "Comenzar",
    },
    footer: {
        help_center: "Visita el Centro de Ayuda",
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
            }
        ],
        legal_and_policy_links_text: ["Privacidad", "Accesibilidad", "Términos"]
    }
} satisfies HomeConfig;
