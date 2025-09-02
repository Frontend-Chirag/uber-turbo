import { HomeConfig } from "../../../type";

export default {
    meta: {
        title: "ڈرائیونگ کر کے پیسے کمائیں یا ابھی سواری حاصل کریں | اوبر انڈیا",
        description: ""
    },
    header: {
        navigation: [
            {
                id: "ride",
                title: "سواری",
                sublists: [],
                depth: 1,
            },
            {
                id: "earn",
                title: "کمائی",
                sublists: [],
                depth: 1,
            },
            {
                id: "business",
                title: "کاروبار",
                sublists: [],
                depth: 1,
            },
            {
                id: "about",
                title: "ہمارے بارے میں",
                depth: 1,
                sublists: [
                    { id: "about_us", title: "ہمارے بارے میں", depth: 2, },
                    { id: "offerings", title: "ہماری خدمات", depth: 2, },
                    { id: "howuberworks", title: "اوبر کیسے کام کرتا ہے", depth: 2, },
                    { id: "sustainability", title: "پائیداری", depth: 2, },
                    {
                        id: "explore",
                        title: "ایکسپلور کریں",
                        depth: 2,
                        sublists: [{
                            id: "cities",
                            title: "شہر",
                            depth: 3,
                            sublists: [
                                { id: "new-delhi", title: "نئی دہلی میں سفر", depth: 4, },
                                { id: "mumbai-suburban", title: "ممبئی (مضافاتی) میں سفر", depth: 4, },
                                { id: "haveli", title: "حویلی میں سفر", depth: 4, },
                                { id: "hyderabad", title: "حیدرآباد میں سفر", depth: 4, },
                                { id: "bangalore", title: "بنگلور میں سفر", depth: 4, },
                                { id: "kolkata", title: "کلکتہ میں سفر", depth: 4, },
                                { id: "chennai", title: "چنئی میں سفر", depth: 4, },
                                { id: "kanayannur", title: "کنایانور میں سفر", depth: 4, },
                                { id: "ahmedabad-city", title: "احمدآباد شہر میں سفر", depth: 4, },
                                { id: "jaipur", title: "جئے پور میں سفر", depth: 4, }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "نیوز روم", depth: 2, },
                    { id: "investor_relations", title: "سرمایہ کار تعلقات", depth: 2, },
                    { id: "autonomous", title: "خودکار", depth: 2, },
                    { id: "blog", title: "بلاگ", depth: 2, },
                    { id: "careers", title: "کیرئیرز", depth: 2, }
                ]
            }
        ],
        sign_up_text: "سائن اپ کریں",
        log_in_text: "لاگ ان کریں",
        help_text: "مدد"
    },
    main: {
        title: "ریزرو کے ساتھ تھوڑا سا ذہنی سکون حاصل کریں",
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
            submit_text: "تفصیلات دیکھیں",
        },
        log_in_recent_activity_text: "ںاپنی حالیہ سرگرمی دیکھنے کے لیے لاگ ان کریں   "
    },
    section_1: {
        title: "تجاویز",
        items: [
            {
                title: "سواری",
                description: "اوبر کے ساتھ کہیں بھی جائیں۔ سواری بک کریں، بیٹھیں اور نکل جائیں۔",
                button_text: "تفصیلات"
            },
            {
                title: "ریزرو کریں",
                description:
                    "اپنی سواری پہلے سے ریزرو کریں تاکہ آپ سفر کے دن آرام سے رہ سکیں۔",
                button_text: "تفصیلات"
            },
            {
                title: "انٹر سٹی",
                description:
                    "کبھی بھی آپ کے دروازے پر سہل اور سستی آؤٹ اسٹیشن ٹیکسی۔",
                button_text: "تفصیلات"
            },
            {
                title: "شٹل",
                description:
                    "کم لاگت کی مشترکہ سواری، پیشہ ور ڈرائیوروں کی بسوں اور وینز میں۔",
                button_text: "تفصیلات"
            },
            {
                title: "کورئیر",
                description: "اوبر ایک ہی دن میں سامان کی ترسیل کو پہلے سے آسان بناتا ہے۔",
                button_text: "تفصیلات"
            },
            {
                title: "کرایہ پر",
                description:
                    "وقت کے ایک حصے کے لیے سواری بک کریں اور کئی مقامات پر رکیں۔",
                button_text: "تفصیلات"
            }
        ]
    },
    section_2: {
        title: "اپنے اکاؤنٹ کی تفصیلات دیکھنے کے لیے لاگ ان کریں",
        description:
            "گزشتہ سفر، ذاتی تجاویز، مدد کے وسائل اور مزید دیکھیں۔",
        button_text: "اپنے اکاؤنٹ میں لاگ ان کریں",
        link_text: "اکاؤنٹ بنائیں",
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
            button_text: "اگلا"
        },
        benefits: {
            title: "فوائد",
            items: [
                "پک اپ کا وقت 90 دن پہلے تک منتخب کریں۔",
                "اضافی انتظار کا وقت لیں تاکہ جلدی محسوس نہ ہو۔",
                "پک اپ سے 60 منٹ پہلے تک مفت منسوخ کریں۔"
            ],
            link_text: "شرائط دیکھیں"
        }
    },
    section_4: {
        title: "جب چاہیں ڈرائیو کریں، جتنی ضرورت ہو کمائیں",
        description:
            "اپنے وقت پر ڈلیوری یا سواری سے پیسے کمائیں — یا دونوں سے۔ آپ اپنی کار استعمال کر سکتے ہیں یا اوبر سے کرایہ پر لے سکتے ہیں۔",
        button_text: "شروع کریں",
        link_text: "پہلے سے اکاؤنٹ ہے؟ سائن ان کریں",
    },
    section_5: {
        title: "وہ اوبر جو آپ جانتے ہیں، کاروبار کے لیے نئے انداز میں",
        description:
            "اوبر فار بزنس ایک پلیٹ فارم ہے جو کمپنیوں کے لیے عالمی سفر، کھانے اور مقامی ترسیل کا انتظام کرتا ہے۔",
        button_text: "شروع کریں",
        link_text: "ہمارے حل دیکھیں",
    },
    section_6: {
        title: "اپنی کار کرایہ پر دے کر پیسے کمائیں",
        description:
            "ہزاروں ڈرائیوروں سے جڑیں اور اوبر کے مفت فلیٹ مینجمنٹ ٹولز کے ساتھ ہر ہفتے زیادہ کمائیں۔",
        button_text: "شروع کریں",
    },
    footer: {
        help_center: "ہیلپ سینٹر دیکھیں",
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
            }
        ],
        legal_and_policy_links_text: ["پرائیویسی", "رسائی", "شرائط"]
    }
} satisfies HomeConfig;;
