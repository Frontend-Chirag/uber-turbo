import { HomeConfig } from "../../../type";


export default {
    meta: {
        title: "गाडी चालवून पैसे कमवा किंवा आता प्रवास करा | उबर इंडिया",
        description: ""
    },
    header: {
        navigation: [
            {
                id: "ride",
                title: "प्रवास",
                sublists: [],
                depth: 1
            },
            {
                id: "earn",
                title: "कमवा",
                sublists: [],
                depth: 1
            },
            {
                id: "business",
                title: "व्यवसाय",
                sublists: [],
                depth: 1
            },
            {
                id: "about",
                title: "आमच्याबद्दल",
                depth: 1,
                sublists: [
                    {
                        id: "about_us",
                        title: "आमच्याबद्दल",
                        depth: 2
                    },
                    {
                        id: "offerings",
                        title: "आमच्या सेवा",
                        depth: 2
                    },
                    {
                        id: "howuberworks",
                        title: "उबर कसे काम करते",
                        depth: 2
                    },
                    {
                        id: "sustainability",
                        title: "शाश्वतता",
                        depth: 2
                    },
                    {
                        id: "explore",
                        title: "अन्वेषण करा",
                        depth: 2,
                        sublists: [
                            {
                                id: "cities",
                                title: "शहरे",
                                depth: 3,
                                sublists: [
                                    {
                                        id: "new-delhi", title: "नवी दिल्ली मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "mumbai-suburban", title: "मुंबई (उपनगर) मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "haveli", title: "हवेली मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "hyderabad", title: "हैदराबाद मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "bangalore", title: "बेंगळुरु मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "kolkata", title: "कोलकाता मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "chennai", title: "चेन्नई मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "kanayannur", title: "कणयनूर मध्ये फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "ahmedabad-city", title: "अहमदाबाद शहरात फिरणे",
                                        depth: 4
                                    },
                                    {
                                        id: "jaipur", title: "जयपूर मध्ये फिरणे",
                                        depth: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "newsroom", title: "बातमी कक्ष",
                        depth: 2
                    },
                    {
                        id: "investor_relations", title: "गुंतवणूकदार संबंध",
                        depth: 2
                    },
                    {
                        id: "autonomous", title: "स्वयंचलित",
                        depth: 2
                    },
                    {
                        id: "blog", title: "ब्लॉग",
                        depth: 2
                    },
                    {
                        id: "careers", title: "करिअर्स",
                        depth: 2
                    }
                ]
            }
        ],
        sign_up_text: "साइन अप",
        log_in_text: "लॉग इन",
        help_text: "मदत"
    },
    main: {
        title: "रिझर्व्हसह थोडीशी मनःशांती मिळवा",
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
            submit_text: "तपशील पाहा",
        },
        log_in_recent_activity_text: "तुमची अलीकडील क्रियाकलाप पाहण्यासाठी लॉग इन करा"
    },
    section_1: {
        title: "सूचना",
        items: [
            {
                title: "प्रवास",
                description: "उबरसोबत कुठेही जा. प्रवास मागवा, गाडीत बसा आणि निघा.",
                button_text: "तपशील"
            },
            {
                title: "आरक्षित करा",
                description: "तुमच्या प्रवासाच्या दिवशी तुम्ही निर्धास्त राहा यासाठी आगाऊ तुमचा प्रवास आरक्षित करा.",
                button_text: "तपशील"
            },
            {
                title: "आंतरशहरी",
                description: "तुमच्या दारात सोयीस्कर, परवडणाऱ्या बाहेरील टॅक्सी मिळवा.",
                button_text: "तपशील"
            },
            {
                title: "शटल",
                description: "व्यावसायिक ड्रायव्हर असलेल्या बस आणि व्हॅनमध्ये कमी किमतीचे सामायिक प्रवास.",
                button_text: "तपशील"
            },
            {
                title: "कुरिअर",
                description: "उबरमुळे त्याच दिवशी वस्तूंची डिलिव्हरी अधिक सोपी झाली आहे.",
                button_text: "तपशील"
            },
            {
                title: "भाडे",
                description: "एखाद्या कालावधीसाठी प्रवास मागवा आणि अनेक थांबे घ्या.",
                button_text: "तपशील"
            }
        ]
    },
    section_2: {
        title: "तुमच्या खात्याचे तपशील पाहण्यासाठी लॉग इन करा",
        description: "मागील प्रवास, वैयक्तिक सूचना, मदत साधने आणि बरेच काही पहा.",
        button_text: "तुमच्या खात्यात लॉग इन करा",
        link_text: "खाते तयार करा",
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
            button_text: "पुढे"
        },
        benefits: {
            title: "फायदे",
            items: [
                "९० दिवसांपर्यंत आगाऊ तुमची पिकअप वेळ निवडा.",
                "अतिरिक्त प्रतीक्षा वेळेचा आनंद घ्या जेणेकरून तुम्हाला घाई होणार नाही.",
                "पिकअपच्या ६० मिनिटांपूर्वी मोफत रद्द करा."
            ],
            link_text: "अटी पहा"
        }
    },
    section_4: {
        title: "जेंव्हा हवा तेंव्हा चालवा, गरजेनुसार कमवा",
        description:
            "तुमच्या वेळापत्रकानुसार डिलिव्हरी किंवा प्रवास करून पैसे कमवा—किंवा दोन्ही. तुम्ही स्वतःची गाडी वापरू शकता किंवा उबरकडून भाड्याने गाडी निवडू शकता.",
        button_text: "सुरु करा",
        link_text: "आधीपासून खाते आहे? लॉग इन करा",
    },
    section_5: {
        title: "तुम्हाला माहित असलेला उबर, व्यवसायासाठी नव्याने साकारलेला",
        description:
            "उबर फॉर बिझनेस ही कंपन्यांसाठी कोणत्याही आकाराच्या प्रवास, जेवण आणि डिलिव्हरी व्यवस्थापनासाठी एक प्लॅटफॉर्म आहे.",
        button_text: "सुरु करा",
        link_text: "आमचे उपाय पहा",
    },
    section_6: {
        title: "तुमची गाडी भाड्याने देऊन पैसे कमवा",
        description:
            "हजारो ड्रायव्हर्सशी संपर्क साधा आणि उबरच्या मोफत फ्लीट व्यवस्थापन साधनांद्वारे आठवड्याला अधिक कमवा.",
        button_text: "सुरु करा",
    },
    footer: {
        help_center: "हेल्प सेंटरला भेट द्या",
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
            }
        ],
        legal_and_policy_links_text: ["गोपनीयता", "प्रवेशयोग्यता", "अटी"]
    }
} satisfies HomeConfig;
