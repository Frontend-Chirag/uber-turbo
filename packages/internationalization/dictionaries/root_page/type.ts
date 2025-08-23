export type WebConfig = {
    meta: { title: string; description: string };
    header: {
        fixed_navigation: {
            id: string;
            title: string;
            sublists?:
            | { id: string; title: string; sublists?: { id: string; title: string }[] }
            | { id: string; title: string }[];
        }[];
        links: { sign_up: string; log_in: string; help: string };
    };
    main: {
        title: string;
        form: {
            labels: { date: string; time: string };
            placeholders: {
                pickup: string;
                dropoff: string;
                date: string;
                time: string;
            };
            button: string;
            link: string;
        };
        image: string;
    };
    section_1: { title: string; items: { title: string; description: string; button: string }[] };
    section_2: { title: string; description: string; button: string; link: string; image: string };
    section_3: {
        title: string;
        form: {
            title: string;
            subtitle: string;
            labels: { date: string; time: string };
            placeholders: { pickup: string; dropoff: string; date: string; time: string };
            button: string;
        };
        benefits: { title: string; items: string[]; link: string };
    };
    section_4: { title: string; description: string; button: string; link: string; image: string };
    section_5: { title: string; description: string; button: string; link: string; image: string };
    section_6: { title: string; description: string; button: string; image: string };
    footer: {
        top_links: string[];
        lists: { title: string; items: string[] }[];
        bottom_links: string[];
    };
};


