import { WebConfig } from "./type";

export const global_en: WebConfig = {
    meta: {
        title: "Earn Money by Driving or Get a Ride Now | Uber India",
        description: ""
    },
    header: {
        fixed_navigation: [
            {
                id: "ride",
                title: "Ride",
                sublists: []
            },
            {
                id: "earn",
                title: "Earn",
                sublists: []
            },
            {
                id: "business",
                title: "Business",
                sublists: []
            },
            {
                id: "about",
                title: "About",
                sublists: [
                    {
                        id: "about_us",
                        title: "About us"
                    },
                    {
                        id: "offerings",
                        title: "Our offerings"
                    },
                    {
                        id: "howuberworks",
                        title: "How Uber works"
                    },
                    {
                        id: "sustainability",
                        title: "Sustainability"
                    },
                    {
                        id: "explore",
                        title: "Explore",
                        sublists: [{
                            id: "cities",
                            title: "cities",
                            sublists: [
                                { id: "new-delhi", title: "Getting around New Delhi" },
                                { id: "mumbai-suburban", title: "Getting around Mumbai (Suburban)" },
                                { id: "haveli", title: "Getting around Haveli" },
                                { id: "hyderabad", title: "Getting around Hyderabad" },
                                { id: "bangalore", title: "Getting around Bangalore" },
                                { id: "kolkata", title: "Getting around Kolkata" },
                                { id: "chennai", title: "Getting around Chennai" },
                                { id: "kanayannur", title: "Getting around Kanayannur" },
                                { id: "ahmedabad-city", title: "Getting around Ahmedabad City" },
                                { id: "jaipur", title: "Getting around Jaipur" }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "Newsroom" },
                    { id: "investor_relations", title: "Investor relations" },
                    { id: "autonomous", title: "Autonomous" },
                    { id: "blog", title: "Blog" },
                    { id: "careers", title: "Careers" }
                ]
            }
        ],
        links: {
            sign_up: "Sign up",
            log_in: "Log in",
            help: "Help"
        }
    },
    main: {
        title: "Go anywhere with Uber",
        form: {
            labels: {
                date: "Date",
                time: "Time"
            },
            placeholders: {
                pickup: "Pickup location",
                dropoff: "Dropoff location",
                date: "Today",
                time: "Now"
            },
            button: "See Details",
            link: "Log in to see your recent activity"
        },
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
    },
    section_1: {
        title: "Suggestions",
        items: [
            {
                title: "Ride",
                description: "Go anywhere with Uber. Request a ride, hop in, and go.",
                button: "Details"
            },
            {
                title: "Reserve",
                description:
                    "Reserve your ride in advance so you can relax on the day of your trip.",
                button: "Details"
            },
            {
                title: "Intercity",
                description:
                    "Get convenient, affordable outstation cabs anytime at your door.",
                button: "Details"
            },
            {
                title: "Shuttle",
                description:
                    "Lower-cost shared rides on professionally driven buses and vans.",
                button: "Details"
            },
            {
                title: "Courier",
                description: "Uber makes same-day item delivery easier than ever.",
                button: "Details"
            },
            {
                title: "Rentals",
                description:
                    "Request a trip for a block of time and make multiple stops.",
                button: "Details"
            }
        ]
    },
    section_2: {
        title: "Log in to see your account details",
        description:
            "View past trips, tailored suggestions, support resources, and more.",
        button: "Log in to your account",
        link: "Create an account",
        image:
            "https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg"
    },
    section_3: {
        title: "Plan for later",
        form: {
            title: "Get your ride right with Uber Reserve",
            subtitle: "Choose date and time",
            labels: { date: "Date", time: "Time" },
            placeholders: {
                pickup: "Pickup location",
                dropoff: "Dropoff location",
                date: "Today",
                time: "Now"
            },
            button: "Next"
        },
        benefits: {
            title: "Benefits",
            items: [
                "Choose your pickup time up to 90 days in advance.",
                "Enjoy extra wait time so you never feel rushed.",
                "Cancel free of charge up to 60 minutes before pickup."
            ],
            link: "See terms"
        }
    },
    section_4: {
        title: "Drive when you want, make what you need",
        description:
            "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.",
        button: "Get started",
        link: "Already have an account? Sign in",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
    },
    section_5: {
        title: "The Uber you know, reimagined for business",
        description:
            "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.",
        button: "Get started",
        link: "Check out our solutions",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
    },
    section_6: {
        title: "Make money by renting out your car",
        description:
            "Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.",
        button: "Get started",
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
    },
    footer: {
        top_links: ["Visit Help Center"],
        lists: [
            {
                title: "Company",
                items: [
                    "About us",
                    "Our offerings",
                    "Newsroom",
                    "Investors",
                    "Blog",
                    "Careers"
                ]
            },
            {
                title: "Products",
                items: [
                    "Ride",
                    "Drive",
                    "Eat",
                    "Uber for Business",
                    "Uber Freight",
                    "Gift cards",
                    "Uber Health"
                ]
            },
            {
                title: "Global citizens",
                items: ["Safety", "Sustainability"]
            },
            {
                title: "Travel",
                items: ["Reserve", "Airports", "Cities"]
            },
            {
                title: "Language & region",
                items: ["English", "Taipei"]
            }
        ],
        bottom_links: ["Privacy", "Accessibility", "Terms"]
    }
}