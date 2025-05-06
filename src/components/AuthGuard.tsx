"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const isPublic = pathname?.endsWith("/login") || pathname?.endsWith("/register");

        if (!token && !isPublic) {
            const locale = pathname?.split("/")[1] || "tr";
            router.replace(`/${locale}/login`);
        }
    }, [pathname]);

    return <>{children}</>;
}
