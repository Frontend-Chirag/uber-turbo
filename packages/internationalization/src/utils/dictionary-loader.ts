import { DictionaryMap } from "../dictionaries/type";
import { I18nHelper } from "./locales-helper";

export async function getDictionary<
    TPage extends keyof DictionaryMap
>(
    domain: string,
    page: string,
    country: string,
    locale: string,
): Promise<DictionaryMap[TPage]> {

    const countryInfo = I18nHelper.getCountryInfo(country);

    const fallbackPaths = [
        `../dictionaries/${domain}/${country}/${locale}/${page}.ts`,
        `../dictionaries/${domain}/global/${locale}/${page}.ts`,
        `../dictionaries/${domain}/global/en/${page}.ts`
    ]

    for (const path of fallbackPaths) {
        try {
            const mod = await import(path);
            console.log(mod, mod.default)
            return mod.default;
        } catch (error) {
            continue;
        }
    };

    // If all fallbacks fail, throw error
    throw new Error(`Failed to load dictionary for ${domain}/${page} with any fallback`);
};

