"use client";

import { usePathname, useRouter } from "next/navigation";

export const useLocaleRouter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = pathname?.split("/")?.[1] || "tr";

    const push = (path: string) => {
        router.push(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
    };

    const replace = (path: string) => {
        router.replace(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
    };

    return {
        locale,
        push,
        replace,
        rawRouter: router,
    };
};
