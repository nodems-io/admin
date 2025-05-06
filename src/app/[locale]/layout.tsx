"use client";

import { AuthProvider } from "@/context/auth-context";
import MainLayout from "@/components/layouts/main-layout";
import AuthGuard from "@/components/AuthGuard";
import { usePathname } from "next/navigation";

export default function LocaleLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthFree = pathname?.endsWith("/login") || pathname?.endsWith("/register");

    return (
        <AuthProvider>
            {isAuthFree ? (
                children
            ) : (
                <AuthGuard>
                    <MainLayout>{children}</MainLayout>
                </AuthGuard>
            )}
        </AuthProvider>
    );
}
