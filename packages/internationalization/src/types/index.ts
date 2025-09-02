export interface LocaleInfo {
    code: string;
    name: string;
    country: string;
    flag: string;
    direction?: 'ltr' | 'rtl'; // Text direction
    dateFormat?: string;
    numberFormat?: Intl.NumberFormatOptions;
    currency?: string;
    timezone?: string;
}

export interface CountryInfo {
    code: string;
    name: string;
    flag: string;
    defaultLocale: string;
    supportedLocales: string[];
    currency: string;
    timezone: string;
}


export interface I18nConfig {
    defaultLocale: string;
    fallbackLocale: string;
    locales: LocaleInfo[];
    countries: {
        [countryCode: string]: string[];
    };
    countryInfo: {
        [countryCode: string]: CountryInfo;
    };
}
