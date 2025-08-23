import { WebConfig } from "../type";


export const global_mr: WebConfig = {
    meta: {
        title: "गाडी चालवून पैसे कमवा किंवा आता प्रवास करा | उबर इंडिया",
        description: ""
    },
    header: {
        fixed_navigation: [
            {
                id: "ride",
                title: "प्रवास",
                sublists: []
            },
            {
                id: "earn",
                title: "कमवा",
                sublists: []
            },
            {
                id: "business",
                title: "व्यवसाय",
                sublists: []
            },
            {
                id: "about",
                title: "आमच्याबद्दल",
                sublists: [
                    {
                        id: "about_us",
                        title: "आमच्याबद्दल"
                    },
                    {
                        id: "offerings",
                        title: "आमच्या सेवा"
                    },
                    {
                        id: "howuberworks",
                        title: "उबर कसे काम करते"
                    },
                    {
                        id: "sustainability",
                        title: "शाश्वतता"
                    },
                    {
                        id: "explore",
                        title: "अन्वेषण करा",
                        sublists: [
                            {
                                id: "cities",
                                title: "शहरे",
                                sublists: [
                                    { id: "new-delhi", title: "नवी दिल्ली मध्ये फिरणे" },
                                    { id: "mumbai-suburban", title: "मुंबई (उपनगर) मध्ये फिरणे" },
                                    { id: "haveli", title: "हवेली मध्ये फिरणे" },
                                    { id: "hyderabad", title: "हैदराबाद मध्ये फिरणे" },
                                    { id: "bangalore", title: "बेंगळुरु मध्ये फिरणे" },
                                    { id: "kolkata", title: "कोलकाता मध्ये फिरणे" },
                                    { id: "chennai", title: "चेन्नई मध्ये फिरणे" },
                                    { id: "kanayannur", title: "कणयनूर मध्ये फिरणे" },
                                    { id: "ahmedabad-city", title: "अहमदाबाद शहरात फिरणे" },
                                    { id: "jaipur", title: "जयपूर मध्ये फिरणे" }
                                ]
                            }
                        ]
                    },
                    { id: "newsroom", title: "बातमी कक्ष" },
                    { id: "investor_relations", title: "गुंतवणूकदार संबंध" },
                    { id: "autonomous", title: "स्वयंचलित" },
                    { id: "blog", title: "ब्लॉग" },
                    { id: "careers", title: "करिअर्स" }
                ]
            }
        ],
        links: {
            sign_up: "साइन अप",
            log_in: "लॉग इन",
            help: "मदत"
        }
    },
    main: {
        title: "उबर सोबत कुठेही जा",
        form: {
            labels: {
                date: "तारीख",
                time: "वेळ"
            },
            placeholders: {
                pickup: "पिकअप ठिकाण",
                dropoff: "ड्रॉपऑफ ठिकाण",
                date: "आज",
                time: "आता"
            },
            button: "तपशील पाहा",
            link: "तुमची अलीकडील क्रियाकलाप पाहण्यासाठी लॉग इन करा"
        },
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
    },
    section_1: {
        title: "सूचना",
        items: [
            {
                title: "प्रवास",
                description: "उबरसोबत कुठेही जा. प्रवास मागवा, गाडीत बसा आणि निघा.",
                button: "तपशील"
            },
            {
                title: "आरक्षित करा",
                description: "तुमच्या प्रवासाच्या दिवशी तुम्ही निर्धास्त राहा यासाठी आगाऊ तुमचा प्रवास आरक्षित करा.",
                button: "तपशील"
            },
            {
                title: "आंतरशहरी",
                description: "तुमच्या दारात सोयीस्कर, परवडणाऱ्या बाहेरील टॅक्सी मिळवा.",
                button: "तपशील"
            },
            {
                title: "शटल",
                description: "व्यावसायिक ड्रायव्हर असलेल्या बस आणि व्हॅनमध्ये कमी किमतीचे सामायिक प्रवास.",
                button: "तपशील"
            },
            {
                title: "कुरिअर",
                description: "उबरमुळे त्याच दिवशी वस्तूंची डिलिव्हरी अधिक सोपी झाली आहे.",
                button: "तपशील"
            },
            {
                title: "भाडे",
                description: "एखाद्या कालावधीसाठी प्रवास मागवा आणि अनेक थांबे घ्या.",
                button: "तपशील"
            }
        ]
    },
    section_2: {
        title: "तुमच्या खात्याचे तपशील पाहण्यासाठी लॉग इन करा",
        description: "मागील प्रवास, वैयक्तिक सूचना, मदत साधने आणि बरेच काही पहा.",
        button: "तुमच्या खात्यात लॉग इन करा",
        link: "खाते तयार करा",
        image:
            "https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg"
    },
    section_3: {
        title: "नंतरसाठी योजना करा",
        form: {
            title: "उबर रिझर्व सोबत योग्य प्रवास मिळवा",
            subtitle: "तारीख आणि वेळ निवडा",
            labels: { date: "तारीख", time: "वेळ" },
            placeholders: {
                pickup: "पिकअप ठिकाण",
                dropoff: "ड्रॉपऑफ ठिकाण",
                date: "आज",
                time: "आता"
            },
            button: "पुढे"
        },
        benefits: {
            title: "फायदे",
            items: [
                "९० दिवसांपर्यंत आगाऊ तुमची पिकअप वेळ निवडा.",
                "अतिरिक्त प्रतीक्षा वेळेचा आनंद घ्या जेणेकरून तुम्हाला घाई होणार नाही.",
                "पिकअपच्या ६० मिनिटांपूर्वी मोफत रद्द करा."
            ],
            link: "अटी पहा"
        }
    },
    section_4: {
        title: "जेंव्हा हवा तेंव्हा चालवा, गरजेनुसार कमवा",
        description:
            "तुमच्या वेळापत्रकानुसार डिलिव्हरी किंवा प्रवास करून पैसे कमवा—किंवा दोन्ही. तुम्ही स्वतःची गाडी वापरू शकता किंवा उबरकडून भाड्याने गाडी निवडू शकता.",
        button: "सुरु करा",
        link: "आधीपासून खाते आहे? लॉग इन करा",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
    },
    section_5: {
        title: "तुम्हाला माहित असलेला उबर, व्यवसायासाठी नव्याने साकारलेला",
        description:
            "उबर फॉर बिझनेस ही कंपन्यांसाठी कोणत्याही आकाराच्या प्रवास, जेवण आणि डिलिव्हरी व्यवस्थापनासाठी एक प्लॅटफॉर्म आहे.",
        button: "सुरु करा",
        link: "आमचे उपाय पहा",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
    },
    section_6: {
        title: "तुमची गाडी भाड्याने देऊन पैसे कमवा",
        description:
            "हजारो ड्रायव्हर्सशी संपर्क साधा आणि उबरच्या मोफत फ्लीट व्यवस्थापन साधनांद्वारे आठवड्याला अधिक कमवा.",
        button: "सुरु करा",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
    },
    footer: {
        top_links: ["हेल्प सेंटरला भेट द्या"],
        lists: [
            {
                title: "कंपनी",
                items: [
                    "आमच्याबद्दल",
                    "आमच्या सेवा",
                    "बातमी कक्ष",
                    "गुंतवणूकदार",
                    "ब्लॉग",
                    "करिअर्स"
                ]
            },
            {
                title: "उत्पादने",
                items: [
                    "प्रवास",
                    "ड्राईव्ह",
                    "ईट",
                    "उबर फॉर बिझनेस",
                    "उबर फ्रेट",
                    "गिफ्ट कार्ड्स",
                    "उबर हेल्थ"
                ]
            },
            {
                title: "ग्लोबल नागरिक",
                items: ["सुरक्षा", "शाश्वतता"]
            },
            {
                title: "प्रवास",
                items: ["आरक्षित करा", "विमानतळ", "शहरे"]
            },
            {
                title: "भाषा आणि प्रदेश",
                items: ["मराठी", "तैपेई"]
            }
        ],
        bottom_links: ["गोपनीयता", "प्रवेशयोग्यता", "अटी"]
    }
}
