import { i18nConfig } from "../config/locales";


export function detectCountryFromIp(): Promise<string> {
    // In a real implementation, you'd use a service like ipapi.co or maxmind
    return fetch('https://ipapi.co/country_code/')
        .then(res => res.text())
        .then(country => country.toLowerCase())
        .catch(() => 'global');
};

export function detectLocaleFromBrowser(): string {
    if (typeof window === 'undefined') return i18nConfig.defaultLocale;

    const browserLanguages = navigator.languages || [navigator.language];

    for (const lang of browserLanguages) {
        const locale = lang?.split('-')[0]?.toLowerCase();
        if (i18nConfig.locales.some(l => l.code === locale)) {
            return locale!;
        }
    }

    return i18nConfig.defaultLocale;
}

export function validateLocale(locale: string): string {
    const isValid = i18nConfig.locales.some(l => l.code === locale);
    return isValid ? locale : i18nConfig.defaultLocale;
}
