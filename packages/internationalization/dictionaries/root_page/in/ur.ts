import { WebConfig } from "../type";

export const in_ur: WebConfig = {
    meta: {
        title: "ڈرائیونگ کر کے پیسے کمائیں یا ابھی سواری حاصل کریں | اوبر انڈیا",
        description: ""
    },
    header: {
        fixed_navigation: [
            {
                id: "ride",
                title: "سواری",
                sublists: []
            },
            {
                id: "earn",
                title: "کمائی",
                sublists: []
            },
            {
                id: "business",
                title: "کاروبار",
                sublists: []
            },
            {
                id: "about",
                title: "ہمارے بارے میں",
                sublists: [
                    { id: "about_us", title: "ہمارے بارے میں" },
                    { id: "offerings", title: "ہماری خدمات" },
                    { id: "howuberworks", title: "اوبر کیسے کام کرتا ہے" },
                    { id: "sustainability", title: "پائیداری" },
                    {
                        id: "explore",
                        title: "ایکسپلور کریں",
                        sublists: [{
                            id: "cities",
                            title: "شہر",
                            sublists: [
                                { id: "new-delhi", title: "نئی دہلی میں سفر" },
                                { id: "mumbai-suburban", title: "ممبئی (مضافاتی) میں سفر" },
                                { id: "haveli", title: "حویلی میں سفر" },
                                { id: "hyderabad", title: "حیدرآباد میں سفر" },
                                { id: "bangalore", title: "بنگلور میں سفر" },
                                { id: "kolkata", title: "کلکتہ میں سفر" },
                                { id: "chennai", title: "چنئی میں سفر" },
                                { id: "kanayannur", title: "کنایانور میں سفر" },
                                { id: "ahmedabad-city", title: "احمدآباد شہر میں سفر" },
                                { id: "jaipur", title: "جئے پور میں سفر" }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "نیوز روم" },
                    { id: "investor_relations", title: "سرمایہ کار تعلقات" },
                    { id: "autonomous", title: "خودکار" },
                    { id: "blog", title: "بلاگ" },
                    { id: "careers", title: "کیرئیرز" }
                ]
            }
        ],
        links: {
            sign_up: "سائن اپ کریں",
            log_in: "لاگ ان کریں",
            help: "مدد"
        }
    },
    main: {
        title: "اوبر کے ساتھ کہیں بھی جائیں",
        form: {
            labels: {
                date: "تاریخ",
                time: "وقت"
            },
            placeholders: {
                pickup: "پک اپ مقام",
                dropoff: "ڈراپ آف مقام",
                date: "آج",
                time: "ابھی"
            },
            button: "تفصیلات دیکھیں",
            link: "اپنی حالیہ سرگرمی دیکھنے کے لیے لاگ ان کریں"
        },
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
    },
    section_1: {
        title: "تجاویز",
        items: [
            {
                title: "سواری",
                description: "اوبر کے ساتھ کہیں بھی جائیں۔ سواری بک کریں، بیٹھیں اور نکل جائیں۔",
                button: "تفصیلات"
            },
            {
                title: "ریزرو کریں",
                description:
                    "اپنی سواری پہلے سے ریزرو کریں تاکہ آپ سفر کے دن آرام سے رہ سکیں۔",
                button: "تفصیلات"
            },
            {
                title: "انٹر سٹی",
                description:
                    "کبھی بھی آپ کے دروازے پر سہل اور سستی آؤٹ اسٹیشن ٹیکسی۔",
                button: "تفصیلات"
            },
            {
                title: "شٹل",
                description:
                    "کم لاگت کی مشترکہ سواری، پیشہ ور ڈرائیوروں کی بسوں اور وینز میں۔",
                button: "تفصیلات"
            },
            {
                title: "کورئیر",
                description: "اوبر ایک ہی دن میں سامان کی ترسیل کو پہلے سے آسان بناتا ہے۔",
                button: "تفصیلات"
            },
            {
                title: "کرایہ پر",
                description:
                    "وقت کے ایک حصے کے لیے سواری بک کریں اور کئی مقامات پر رکیں۔",
                button: "تفصیلات"
            }
        ]
    },
    section_2: {
        title: "اپنے اکاؤنٹ کی تفصیلات دیکھنے کے لیے لاگ ان کریں",
        description:
            "گزشتہ سفر، ذاتی تجاویز، مدد کے وسائل اور مزید دیکھیں۔",
        button: "اپنے اکاؤنٹ میں لاگ ان کریں",
        link: "اکاؤنٹ بنائیں",
        image:
            "https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg"
    },
    section_3: {
        title: "بعد کے لیے منصوبہ بنائیں",
        form: {
            title: "اوبر ریزرو کے ساتھ اپنی سواری یقینی بنائیں",
            subtitle: "تاریخ اور وقت منتخب کریں",
            labels: { date: "تاریخ", time: "وقت" },
            placeholders: {
                pickup: "پک اپ مقام",
                dropoff: "ڈراپ آف مقام",
                date: "آج",
                time: "ابھی"
            },
            button: "اگلا"
        },
        benefits: {
            title: "فوائد",
            items: [
                "پک اپ کا وقت 90 دن پہلے تک منتخب کریں۔",
                "اضافی انتظار کا وقت لیں تاکہ جلدی محسوس نہ ہو۔",
                "پک اپ سے 60 منٹ پہلے تک مفت منسوخ کریں۔"
            ],
            link: "شرائط دیکھیں"
        }
    },
    section_4: {
        title: "جب چاہیں ڈرائیو کریں، جتنی ضرورت ہو کمائیں",
        description:
            "اپنے وقت پر ڈلیوری یا سواری سے پیسے کمائیں — یا دونوں سے۔ آپ اپنی کار استعمال کر سکتے ہیں یا اوبر سے کرایہ پر لے سکتے ہیں۔",
        button: "شروع کریں",
        link: "پہلے سے اکاؤنٹ ہے؟ سائن ان کریں",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
    },
    section_5: {
        title: "وہ اوبر جو آپ جانتے ہیں، کاروبار کے لیے نئے انداز میں",
        description:
            "اوبر فار بزنس ایک پلیٹ فارم ہے جو کمپنیوں کے لیے عالمی سفر، کھانے اور مقامی ترسیل کا انتظام کرتا ہے۔",
        button: "شروع کریں",
        link: "ہمارے حل دیکھیں",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
    },
    section_6: {
        title: "اپنی کار کرایہ پر دے کر پیسے کمائیں",
        description:
            "ہزاروں ڈرائیوروں سے جڑیں اور اوبر کے مفت فلیٹ مینجمنٹ ٹولز کے ساتھ ہر ہفتے زیادہ کمائیں۔",
        button: "شروع کریں",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
    },
    footer: {
        top_links: ["ہیلپ سینٹر دیکھیں"],
        lists: [
            {
                title: "کمپنی",
                items: [
                    "ہمارے بارے میں",
                    "ہماری خدمات",
                    "نیوز روم",
                    "سرمایہ کار",
                    "بلاگ",
                    "کیرئیرز"
                ]
            },
            {
                title: "مصنوعات",
                items: [
                    "سواری",
                    "ڈرائیو",
                    "کھانا",
                    "اوبر فار بزنس",
                    "اوبر فریٹ",
                    "گفٹ کارڈز",
                    "اوبر ہیلتھ"
                ]
            },
            {
                title: "عالمی شہری",
                items: ["سیکیورٹی", "پائیداری"]
            },
            {
                title: "سفر",
                items: ["ریزرو کریں", "ایئرپورٹس", "شہر"]
            },
            {
                title: "زبان اور خطہ",
                items: ["اردو", "تائپے"]
            }
        ],
        bottom_links: ["پرائیویسی", "رسائی", "شرائط"]
    }
};
