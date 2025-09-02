import { HomeConfig } from "../../../type";

export default {
    meta: {
        title: "ड्राइव करके पैसे कमाएँ या अभी राइड लें | उबर इंडिया",
        description: ""
    },
    header: {
        navigation: [
            {
                id: "ride",
                title: "राइड",
                sublists: [],
                depth: 1,
            },
            {
                id: "earn",
                title: "कमाई",
                sublists: [],
                depth: 1,
            },
            {
                id: "business",
                title: "बिज़नेस",
                sublists: [],
                depth: 1,
            },
            {
                id: "about",
                title: "हमारे बारे में",
                depth: 1,
                sublists: [
                    { id: "about_us", title: "हमारे बारे में",  depth: 2, },
                    { id: "offerings", title: "हमारी सेवाएँ",  depth: 2, },
                    { id: "howuberworks", title: "उबर कैसे काम करता है",  depth: 2, },
                    { id: "sustainability", title: "सस्टेनेबिलिटी" ,  depth: 2,},
                    {
                        id: "explore",
                        title: "एक्सप्लोर करें",
                        depth: 2,
                        sublists: [{
                            id: "cities",
                            title: "शहर",
                            depth: 3,
                            sublists: [
                                { id: "new-delhi", title: "नई दिल्ली में यात्रा",  depth: 4, },
                                { id: "mumbai-suburban", title: "मुंबई (उपनगरीय) में यात्रा",  depth: 4, },
                                { id: "haveli", title: "हवेली में यात्रा" ,  depth: 4,},
                                { id: "hyderabad", title: "हैदराबाद में यात्रा" ,  depth: 4,},
                                { id: "bangalore", title: "बैंगलोर में यात्रा",  depth: 4, },
                                { id: "kolkata", title: "कोलकाता में यात्रा",  depth: 4,},
                                { id: "chennai", title: "चेन्नई में यात्रा" ,  depth: 4,},
                                { id: "kanayannur", title: "कनयन्नूर में यात्रा",  depth: 4, },
                                { id: "ahmedabad-city", title: "अहमदाबाद सिटी में यात्रा" ,  depth: 4,},
                                { id: "jaipur", title: "जयपुर में यात्रा" ,  depth: 4,}
                            ]
                        }]
                    },
                    { id: "newsroom", title: "न्यूज़रूम",  depth: 2, },
                    { id: "investor_relations", title: "निवेशक संबंध",  depth: 2, },
                    { id: "autonomous", title: "स्वचालित",  depth: 2, },
                    { id: "blog", title: "ब्लॉग",  depth: 2, },
                    { id: "careers", title: "करियर" ,  depth: 2,}
                ]
            }
        ],
        sign_up_text: "साइन अप करें",
        log_in_text: "लॉग इन करें",
        help_text: "मदद"
    },
    main: {
        title: "रिज़र्व के ज़रिए थोड़ी मानसिक शांति पाएँ",
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
            submit_text: "विवरण देखें",
        },
        log_in_recent_activity_text: "अपनी हाल की गतिविधि देखने के लिए लॉग इन करें"
    },
    section_1: {
        title: "सुझाव",
        items: [
            {
                title: "राइड",
                description: "उबर के साथ कहीं भी जाएँ। राइड बुक करें, बैठें और निकलें।",
                button_text: "विवरण"
            },
            {
                title: "आरक्षित करें",
                description:
                    "अपनी यात्रा के दिन आराम से रहने के लिए राइड पहले से बुक करें।",
                button_text: "विवरण"
            },
            {
                title: "इंटरसिटी",
                description:
                    "सुविधाजनक और किफायती आउटस्टेशन टैक्सी आपके दरवाजे पर कभी भी।",
                button_text: "विवरण"
            },
            {
                title: "शटल",
                description:
                    "कम लागत वाली साझा राइड, प्रोफेशनल ड्राइवरों की बस और वैन में।",
                button_text: "विवरण"
            },
            {
                title: "कूरियर",
                description: "उबर एक ही दिन में सामान डिलीवरी को पहले से आसान बनाता है।",
                button_text: "विवरण"
            },
            {
                title: "किराए पर",
                description:
                    "एक निश्चित समय के लिए राइड बुक करें और कई जगह रुकें।",
                button_text: "विवरण"
            }
        ]
    },
    section_2: {
        title: "अपने खाते का विवरण देखने के लिए लॉग इन करें",
        description:
            "पिछली यात्राएँ, व्यक्तिगत सुझाव, सहायता संसाधन और बहुत कुछ देखें।",
        button_text: "अपने खाते में लॉग इन करें",
        link_text: "एक खाता बनाएं",
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
            button_text: "आगे बढ़ें"
        },
        benefits: {
            title: "फ़ायदे",
            items: [
                "90 दिन पहले तक पिकअप समय चुनें।",
                "अतिरिक्त प्रतीक्षा समय का आनंद लें ताकि जल्दबाज़ी न हो।",
                "पिकअप से 60 मिनट पहले तक मुफ़्त में कैंसल करें।"
            ],
            link_text: "नियम देखें"
        }
    },
    section_4: {
        title: "जब चाहें ड्राइव करें, जितनी ज़रूरत हो कमाएँ",
        description:
            "अपनी सुविधानुसार डिलीवरी या राइड से पैसे कमाएँ—या दोनों से। आप अपनी कार का उपयोग कर सकते हैं या उबर से किराए पर ले सकते हैं।",
        button_text: "शुरू करें",
        link_text: "पहले से खाता है? साइन इन करें",
    },
    section_5: {
        title: "आपकी जानी-पहचानी उबर, बिज़नेस के लिए नए अंदाज़ में",
        description:
            "उबर फॉर बिज़नेस एक प्लेटफ़ॉर्म है जो कंपनियों के लिए वैश्विक यात्राओं, भोजन और स्थानीय डिलीवरी को प्रबंधित करता है।",
        button_text: "शुरू करें",
        link_text: "हमारे समाधान देखें",
    },
    section_6: {
        title: "अपनी कार किराए पर देकर पैसे कमाएँ",
        description:
            "हज़ारों ड्राइवरों से जुड़ें और उबर के मुफ़्त फ़्लीट मैनेजमेंट टूल्स से हर हफ्ते ज़्यादा कमाएँ।",
        button_text: "शुरू करें",
    },
    footer: {
        help_center: "सहायता केंद्र देखें",
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
            }
        ],
        legal_and_policy_links_text: ["गोपनीयता", "सुलभता", "नियम"]
    }
} satisfies HomeConfig;
