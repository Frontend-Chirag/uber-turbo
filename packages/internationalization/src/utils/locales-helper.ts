import { i18nConfig } from '../config/locales';
import { LocaleInfo, CountryInfo } from '../types';

export class I18nHelper {
  static getLocaleInfo(localeCode: string): LocaleInfo | undefined {
    return i18nConfig.locales.find(locale => locale.code === localeCode);
  }

  static getCountryInfo(countryCode: string): CountryInfo | undefined {
    return i18nConfig.countryInfo[countryCode];
  }

  static getAvailableLocales(country: string): LocaleInfo[] {
    const countryLocales = i18nConfig.countries[country] || i18nConfig.countries['global'] || [];
    return i18nConfig.locales.filter(locale => countryLocales.includes(locale.code));
  }

  static isValidLocale(locale: string, country: string): boolean {
    const countryLocales = i18nConfig.countries[country] || i18nConfig.countries['global'] || [];
    return countryLocales.includes(locale);
  }

  static getValidLocale(requestedLocale: string, country: string): string {
    // First, try the requested locale
    if (this.isValidLocale(requestedLocale, country)) {
      return requestedLocale;
    }
    
    // Try country's default locale
    const countryInfo = this.getCountryInfo(country);
    if (countryInfo && this.isValidLocale(countryInfo.defaultLocale, country)) {
      return countryInfo.defaultLocale;
    }
    
    // Try global fallback
    if (this.isValidLocale(i18nConfig.fallbackLocale, country)) {
      return i18nConfig.fallbackLocale;
    }
    
    // Return default locale as last resort
    return i18nConfig.defaultLocale;
  }

  static getBestLocaleForCountry(country: string): string {
    const countryInfo = this.getCountryInfo(country);
    return countryInfo?.defaultLocale || i18nConfig.defaultLocale;
  }

  static getTextDirection(localeCode: string): 'ltr' | 'rtl' {
    const locale = this.getLocaleInfo(localeCode);
    return locale?.direction || 'ltr';
  }

  static getCurrency(localeCode: string): string {
    const locale = this.getLocaleInfo(localeCode);
    return locale?.currency || 'USD';
  }

  static formatNumber(value: number, localeCode: string): string {
    const locale = this.getLocaleInfo(localeCode);
    return new Intl.NumberFormat(localeCode, locale?.numberFormat).format(value);
  }

  static formatCurrency(value: number, localeCode: string): string {
    const locale = this.getLocaleInfo(localeCode);
    const currency = locale?.currency || 'USD';
    
    return new Intl.NumberFormat(localeCode, {
      style: 'currency',
      currency,
      ...locale?.numberFormat
    }).format(value);
  }

  static formatDate(date: Date, localeCode: string): string {
    return new Intl.DateTimeFormat(localeCode).format(date);
  }

  static getAllCountries(): CountryInfo[] {
    return Object.values(i18nConfig.countryInfo);
  }

  static getLocalesForCountry(countryCode: string): LocaleInfo[] {
    const supportedCodes = i18nConfig.countries[countryCode] || [];
    return supportedCodes.map(code => this.getLocaleInfo(code)).filter(Boolean) as LocaleInfo[];
  }
}

