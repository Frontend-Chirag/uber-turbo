// packages/internationalization/src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { internationalMiddleware } from "@repo/internationalization/middleware"; // your existing function

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function internationalizationMiddleware(request: NextRequest) {
    const i18nResponse = internationalMiddleware(request);
    if (i18nResponse) {
        return i18nResponse;
    }

    return NextResponse.next(); // fallback if no i18n match
}
