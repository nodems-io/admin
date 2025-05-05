// src/components/layouts/main-layout.tsx
import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-full flex-col">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 bg-muted/50 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
