"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { CountryInfo, LocaleInfo } from '../types';
import { i18nConfig, } from '../config/locales';
import { getDictionary } from '../utils/dictionary-loader';
import { DictionaryMap } from '../dictionaries/type';
import { I18nHelper } from '../utils/locales-helper';

interface LocaleContextType {
    // Current state
    locale: string;
    dictionary: unknown;
    isLoading: boolean;
    error: string | null;

    // Locale info
    localeInfo: LocaleInfo | undefined;
    countryInfo: CountryInfo | undefined;
    availableLocales: LocaleInfo[];
    textDirection: 'ltr' | 'rtl';

    // Actions
    // setLocale: (locale: string) => void;
    setPage: (page: keyof DictionaryMap) => void;
  
    //   // Formatting functions
    //   formatNumber: (value: number) => string;
    //   formatCurrency: (value: number) => string;
    //   formatDate: (date: Date) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
    children: React.ReactNode;
    domain: string;
    country: string;
    locale: string;
    initialPage: keyof DictionaryMap;
};



export function LocaleProvider({
    children,
    domain,
    country,
    locale,
    initialPage = '(home)'
}: LocaleProviderProps) {
    const [dictionary, setDictionary] = useState<unknown>({});
    const [page, setPageState] = useState<keyof DictionaryMap>(initialPage);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const localeInfo = I18nHelper.getLocaleInfo(locale);
    const countryInfo = I18nHelper.getCountryInfo(country);
    const availableLocales = I18nHelper.getAvailableLocales(country);
    const textDirection = I18nHelper.getTextDirection(locale)



    const loadDictionary = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const newDictionary = await getDictionary(domain, page, country, locale);
            setDictionary(newDictionary);
        } catch (error) {
            const errorMessage = `Failed to load dictionary for ${domain}/${page}/${country}/${locale}`;
            console.error(errorMessage, error);
            setError(errorMessage);
            setDictionary({});
        } finally {
            setIsLoading(false);
        }
    }, [ page, locale]);


    useEffect(() => {
        loadDictionary();
    }, [loadDictionary, locale]);


    const setPage = useCallback((newPage: keyof DictionaryMap) => {
        setPageState(newPage);
    }, []);


    const contextValue: LocaleContextType = {
        dictionary,
        locale,
        availableLocales,
        isLoading,
        setPage,
        countryInfo,
        error,
        localeInfo,
        textDirection
    };

    return (
        <LocaleContext.Provider value={contextValue}>
            <div dir={textDirection}>
                {children}
            </div>
        </LocaleContext.Provider>
    )
};


export function useI18n() {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useI18n must be used within a LocaleProvider');
    }
    return context;
};


export function useTranslation<TPage extends keyof DictionaryMap>(page: TPage) {
    const context = useI18n();

    useEffect(() => {
        if (page) {
            context.setPage(page);
        }
    }, [page, context]);

    const t = useCallback((key: string, fallback?: string): string => {
        if (!context.dictionary || typeof context.dictionary !== 'object') {
            return fallback || key;
        }

        const keys = key.split('.');
        let value: any = context.dictionary;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return fallback || key;
            }
        }

        return typeof value === 'string' ? value : fallback || key;
    }, [context.dictionary]);

    return {
        t,
        ...context,
        dictionary: context.dictionary as TPage extends keyof DictionaryMap ? DictionaryMap[TPage] : unknown,
      };
}


