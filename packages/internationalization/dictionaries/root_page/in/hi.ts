import { WebConfig } from "../type";


export const in_hi: WebConfig = {
    meta: {
        title: "ड्राइव करके पैसे कमाएँ या अभी राइड लें | उबर इंडिया",
        description: ""
    },
    header: {
        fixed_navigation: [
            {
                id: "ride",
                title: "राइड",
                sublists: []
            },
            {
                id: "earn",
                title: "कमाई",
                sublists: []
            },
            {
                id: "business",
                title: "बिज़नेस",
                sublists: []
            },
            {
                id: "about",
                title: "हमारे बारे में",
                sublists: [
                    { id: "about_us", title: "हमारे बारे में" },
                    { id: "offerings", title: "हमारी सेवाएँ" },
                    { id: "howuberworks", title: "उबर कैसे काम करता है" },
                    { id: "sustainability", title: "सस्टेनेबिलिटी" },
                    {
                        id: "explore",
                        title: "एक्सप्लोर करें",
                        sublists: [{
                            id: "cities",
                            title: "शहर",
                            sublists: [
                                { id: "new-delhi", title: "नई दिल्ली में यात्रा" },
                                { id: "mumbai-suburban", title: "मुंबई (उपनगरीय) में यात्रा" },
                                { id: "haveli", title: "हवेली में यात्रा" },
                                { id: "hyderabad", title: "हैदराबाद में यात्रा" },
                                { id: "bangalore", title: "बैंगलोर में यात्रा" },
                                { id: "kolkata", title: "कोलकाता में यात्रा" },
                                { id: "chennai", title: "चेन्नई में यात्रा" },
                                { id: "kanayannur", title: "कनयन्नूर में यात्रा" },
                                { id: "ahmedabad-city", title: "अहमदाबाद सिटी में यात्रा" },
                                { id: "jaipur", title: "जयपुर में यात्रा" }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "न्यूज़रूम" },
                    { id: "investor_relations", title: "निवेशक संबंध" },
                    { id: "autonomous", title: "स्वचालित" },
                    { id: "blog", title: "ब्लॉग" },
                    { id: "careers", title: "करियर" }
                ]
            }
        ],
        links: {
            sign_up: "साइन अप करें",
            log_in: "लॉग इन करें",
            help: "मदद"
        }
    },
    main: {
        title: "उबर के साथ कहीं भी जाएँ",
        form: {
            labels: {
                date: "तारीख",
                time: "समय"
            },
            placeholders: {
                pickup: "पिकअप स्थान",
                dropoff: "ड्रॉपऑफ़ स्थान",
                date: "आज",
                time: "अभी"
            },
            button: "विवरण देखें",
            link: "अपनी हाल की गतिविधि देखने के लिए लॉग इन करें"
        },
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
    },
    section_1: {
        title: "सुझाव",
        items: [
            {
                title: "राइड",
                description: "उबर के साथ कहीं भी जाएँ। राइड बुक करें, बैठें और निकलें।",
                button: "विवरण"
            },
            {
                title: "आरक्षित करें",
                description:
                    "अपनी यात्रा के दिन आराम से रहने के लिए राइड पहले से बुक करें।",
                button: "विवरण"
            },
            {
                title: "इंटरसिटी",
                description:
                    "सुविधाजनक और किफायती आउटस्टेशन टैक्सी आपके दरवाजे पर कभी भी।",
                button: "विवरण"
            },
            {
                title: "शटल",
                description:
                    "कम लागत वाली साझा राइड, प्रोफेशनल ड्राइवरों की बस और वैन में।",
                button: "विवरण"
            },
            {
                title: "कूरियर",
                description: "उबर एक ही दिन में सामान डिलीवरी को पहले से आसान बनाता है।",
                button: "विवरण"
            },
            {
                title: "किराए पर",
                description:
                    "एक निश्चित समय के लिए राइड बुक करें और कई जगह रुकें।",
                button: "विवरण"
            }
        ]
    },
    section_2: {
        title: "अपने खाते का विवरण देखने के लिए लॉग इन करें",
        description:
            "पिछली यात्राएँ, व्यक्तिगत सुझाव, सहायता संसाधन और बहुत कुछ देखें।",
        button: "अपने खाते में लॉग इन करें",
        link: "एक खाता बनाएं",
        image:
            "https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg"
    },
    section_3: {
        title: "बाद के लिए योजना बनाएँ",
        form: {
            title: "उबर रिज़र्व के साथ अपनी राइड सुनिश्चित करें",
            subtitle: "तारीख और समय चुनें",
            labels: { date: "तारीख", time: "समय" },
            placeholders: {
                pickup: "पिकअप स्थान",
                dropoff: "ड्रॉपऑफ़ स्थान",
                date: "आज",
                time: "अभी"
            },
            button: "आगे बढ़ें"
        },
        benefits: {
            title: "फ़ायदे",
            items: [
                "90 दिन पहले तक पिकअप समय चुनें।",
                "अतिरिक्त प्रतीक्षा समय का आनंद लें ताकि जल्दबाज़ी न हो।",
                "पिकअप से 60 मिनट पहले तक मुफ़्त में कैंसल करें।"
            ],
            link: "नियम देखें"
        }
    },
    section_4: {
        title: "जब चाहें ड्राइव करें, जितनी ज़रूरत हो कमाएँ",
        description:
            "अपनी सुविधानुसार डिलीवरी या राइड से पैसे कमाएँ—या दोनों से। आप अपनी कार का उपयोग कर सकते हैं या उबर से किराए पर ले सकते हैं।",
        button: "शुरू करें",
        link: "पहले से खाता है? साइन इन करें",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
    },
    section_5: {
        title: "आपकी जानी-पहचानी उबर, बिज़नेस के लिए नए अंदाज़ में",
        description:
            "उबर फॉर बिज़नेस एक प्लेटफ़ॉर्म है जो कंपनियों के लिए वैश्विक यात्राओं, भोजन और स्थानीय डिलीवरी को प्रबंधित करता है।",
        button: "शुरू करें",
        link: "हमारे समाधान देखें",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
    },
    section_6: {
        title: "अपनी कार किराए पर देकर पैसे कमाएँ",
        description:
            "हज़ारों ड्राइवरों से जुड़ें और उबर के मुफ़्त फ़्लीट मैनेजमेंट टूल्स से हर हफ्ते ज़्यादा कमाएँ।",
        button: "शुरू करें",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
    },
    footer: {
        top_links: ["सहायता केंद्र देखें"],
        lists: [
            {
                title: "कंपनी",
                items: [
                    "हमारे बारे में",
                    "हमारी सेवाएँ",
                    "न्यूज़रूम",
                    "निवेशक",
                    "ब्लॉग",
                    "करियर"
                ]
            },
            {
                title: "उत्पाद",
                items: [
                    "राइड",
                    "ड्राइव",
                    "खाना",
                    "उबर फॉर बिज़नेस",
                    "उबर फ़्रेट",
                    "गिफ़्ट कार्ड",
                    "उबर हेल्थ"
                ]
            },
            {
                title: "वैश्विक नागरिक",
                items: ["सुरक्षा", "सस्टेनेबिलिटी"]
            },
            {
                title: "यात्रा",
                items: ["आरक्षित करें", "हवाई अड्डे", "शहर"]
            },
            {
                title: "भाषा और क्षेत्र",
                items: ["हिन्दी", "ताइपे"]
            }
        ],
        bottom_links: ["गोपनीयता", "सुलभता", "नियम"]
    }
};
