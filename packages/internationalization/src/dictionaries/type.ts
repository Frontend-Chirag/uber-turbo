
export type NavigationItem = {
    id: string;
    title: string;
    sublists?: NavigationItem[]
    depth:number;
}

export type HomeConfig = {
    meta: { title: string; description: string };
    header: {
        navigation: NavigationItem[],
        sign_up_text: string;
        log_in_text: string;
        help_text: string;
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
            submit_text: string;
        };
        log_in_recent_activity_text: string;
    };
    section_1: { title: string; items: { title: string; description: string; button_text: string }[] };
    section_2: { title: string; description: string; button_text: string; link_text: string; };
    section_3: {
        title: string;
        form: {
            title: string;
            subtitle: string;
            labels: { date: string; time: string };
            placeholders: { pickup: string; dropoff: string; date: string; time: string };
            button_text: string;
        };
        benefits: { title: string; items: string[]; link_text: string };
    };
    section_4: { title: string; description: string; button_text: string; link_text: string; };
    section_5: { title: string; description: string; button_text: string; link_text: string; };
    section_6: { title: string; description: string; button_text: string; };
    footer: {
        help_center: string;
        lists: { title: string; items: string[] }[];
        legal_and_policy_links_text: string[];
    };
};

export type DictionaryMap = {
    "(home)": HomeConfig;
}


