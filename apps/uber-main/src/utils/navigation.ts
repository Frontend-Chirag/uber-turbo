import { useRouter } from "next/navigation";

/**
 * Preserves existing query params during navigation.
 * Merges current URL params with any extra query strings passed.
 */
export const usePreserveQueryRouter = () => {
  const router = useRouter();

  const getCurrentParams = (): string => {
    if (typeof window === "undefined") return "";
    return window.location.search.slice(1);
  };

  const buildFinalPath = (path: string, extraQuery?: string): string => {
    const currentParams = getCurrentParams();
    const allParams = [extraQuery, currentParams].filter(Boolean).join("&");
    return allParams ? `${path}?${allParams}` : path;
  };

  const push = (path: string, extraQuery?: string) => {
    const finalPath = buildFinalPath(path, extraQuery);
    console.log("➡️ Navigating to:", finalPath);
    router.push(finalPath);
  };

  const replace = (path: string, extraQuery?: string) => {
    const finalPath = buildFinalPath(path, extraQuery);
    console.log("🔁 Replacing with:", finalPath);
    router.replace(finalPath);
  };

  return { push, replace };
};
