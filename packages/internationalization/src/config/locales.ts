import { I18nConfig } from "../types";

export const i18nConfig: I18nConfig = {
    defaultLocale: "en",
    fallbackLocale: "en",
    locales: [
      { 
        code: 'en', 
        name: 'English', 
        country: 'global', 
        flag: '🌐',
        direction: 'ltr',
        dateFormat: 'MM/DD/YYYY',
        numberFormat: { style: 'decimal' },
        currency: 'USD'
      },
      { 
        code: 'hi', 
        name: 'हिंदी', 
        country: 'in', 
        flag: '🇮🇳',
        direction: 'ltr',
        dateFormat: 'DD/MM/YYYY',
        numberFormat: { style: 'decimal', minimumFractionDigits: 2 },
        currency: 'INR'
      },
      { 
        code: 'ur', 
        name: 'اردو', 
        country: 'in', 
        flag: '🇮🇳',
        direction: 'rtl',
        dateFormat: 'DD/MM/YYYY',
        numberFormat: { style: 'decimal', minimumFractionDigits: 2 },
        currency: 'INR'
      },
      { 
        code: 'mr', 
        name: 'मराठी', 
        country: 'in', 
        flag: '🇮🇳',
        direction: 'ltr',
        dateFormat: 'DD/MM/YYYY',
        numberFormat: { style: 'decimal', minimumFractionDigits: 2 },
        currency: 'INR'
      },
      { 
        code: 'es', 
        name: 'Español', 
        country: 'us', 
        flag: '🇺🇸',
        direction: 'ltr',
        dateFormat: 'MM/DD/YYYY',
        numberFormat: { style: 'decimal', minimumFractionDigits: 2 },
        currency: 'USD'
      },
    ],
    countries: {
      'in': ['hi', 'ur', 'mr', 'en'],
      'us': ['en', 'es'],
      'global': ['en']
    },
    countryInfo: {
      'in': {
        code: 'in',
        name: 'India',
        flag: '🇮🇳',
        defaultLocale: 'en',
        supportedLocales: ['hi', 'ur', 'mr', 'en'],
        currency: 'INR',
        timezone: 'Asia/Kolkata'
      },
      'us': {
        code: 'us',
        name: 'United States',
        flag: '🇺🇸',
        defaultLocale: 'en',
        supportedLocales: ['en', 'es'],
        currency: 'USD',
        timezone: 'America/New_York'
      },
      'global': {
        code: 'global',
        name: 'Global',
        flag: '🌐',
        defaultLocale: 'en',
        supportedLocales: ['en'],
        currency: 'USD',
        timezone: 'UTC'
      }
    }
  };