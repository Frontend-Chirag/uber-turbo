import { HomeConfig } from "../../../type";

export default {
    meta: {
        title: "Earn Money by Driving or Get a Ride Now | Uber India",
        description: ""
    },
    header: {
        navigation: [
            {
                id: "ride",
                title: "Ride",
                sublists: [],
                depth: 1,
            },
            {
                id: "earn",
                title: "Earn",
                sublists: [],
                depth: 1,
            },
            {
                id: "business",
                title: "Business",
                sublists: [],
                depth: 1,
            },
            {
                id: "about",
                title: "About",
                depth: 1,
                sublists: [
                    {
                        id: "about_us",
                        title: "About us",
                        depth: 2,
                    },
                    {
                        id: "offerings",
                        title: "Our offerings",
                        depth: 2,
                    },
                    {
                        id: "howuberworks",
                        title: "How Uber works",
                        depth: 2,
                    },
                    {
                        id: "sustainability",
                        title: "Sustainability",
                        depth: 2,
                    },
                    {
                        id: "explore",
                        title: "Explore",
                        depth: 2,
                        sublists: [{
                            id: "cities",
                            title: "cities",
                            depth: 3,
                            sublists: [
                                { id: "new-delhi", title: "Getting around New Delhi", depth: 4, },
                                { id: "mumbai-suburban", title: "Getting around Mumbai (Suburban)", depth: 4, },
                                { id: "haveli", title: "Getting around Haveli", depth: 4, },
                                { id: "hyderabad", title: "Getting around Hyderabad", depth: 4, },
                                { id: "bangalore", title: "Getting around Bangalore", depth: 4, },
                                { id: "kolkata", title: "Getting around Kolkata", depth: 4, },
                                { id: "chennai", title: "Getting around Chennai", depth: 4, },
                                { id: "kanayannur", title: "Getting around Kanayannur", depth: 4, },
                                { id: "ahmedabad-city", title: "Getting around Ahmedabad City", depth: 4, },
                                { id: "jaipur", title: "Getting around Jaipur", depth: 4, }
                            ]
                        }]
                    },
                    { id: "newsroom", title: "Newsroom", depth: 2, },
                    { id: "investor_relations", title: "Investor relations", depth: 2, },
                    { id: "autonomous", title: "Autonomous", depth: 2, },
                    { id: "blog", title: "Blog", depth: 2, },
                    { id: "careers", title: "Careers", depth: 2, }
                ]
            }
        ],
        sign_up_text: "Sign up",
        log_in_text: "Log in",
        help_text: "Help"
    },
    main: {
        title: "Lock in a little peace of mind with Reserve",
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
            submit_text: "See prices",
        },
        log_in_recent_activity_text: "Log in to see your recent activity"
    },
    section_1: {
        title: "Suggestions",
        items: [
            {
                title: "Ride",
                description: "Go anywhere with Uber. Request a ride, hop in, and go.",
                button_text: "Details"
            },
            {
                title: "Reserve",
                description:
                    "Reserve your ride in advance so you can relax on the day of your trip.",
                button_text: "Details"
            },
            {
                title: "Intercity",
                description:
                    "Get convenient, affordable outstation cabs anytime at your door.",
                button_text: "Details"
            },
            {
                title: "Shuttle",
                description:
                    "Lower-cost shared rides on professionally driven buses and vans.",
                button_text: "Details"
            },
            {
                title: "Courier",
                description: "Uber makes same-day item delivery easier than ever.",
                button_text: "Details"
            },
            {
                title: "Rentals",
                description:
                    "Request a trip for a block of time and make multiple stops.",
                button_text: "Details"
            }
        ]
    },
    section_2: {
        title: "Log in to see your account details",
        description:
            "View past trips, tailored suggestions, support resources, and more.",
        button_text: "Log in to your account",
        link_text: "Create an account",
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
            button_text: "Next"
        },
        benefits: {
            title: "Benefits",
            items: [
                "Choose your pickup time up to 90 days in advance.",
                "Enjoy extra wait time so you never feel rushed.",
                "Cancel free of charge up to 60 minutes before pickup."
            ],
            link_text: "See terms"
        }
    },
    section_4: {
        title: "Drive when you want, make what you need",
        description:
            "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.",
        button_text: "Get started",
        link_text: "Already have an account? Sign in",
    },
    section_5: {
        title: "The Uber you know, reimagined for business",
        description:
            "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.",
        button_text: "Get started",
        link_text: "Check out our solutions",
    },
    section_6: {
        title: "Make money by renting out your car",
        description:
            "Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.",
        button_text: "Get started",
    },
    footer: {
        help_center: "Visit Help Center",
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
            }
        ],
        legal_and_policy_links_text: ["Privacy", "Accessibility", "Terms"]
    }
} satisfies HomeConfig  