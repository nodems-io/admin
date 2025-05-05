"use client";

import Link from "next/link";
import { useState } from "react";
import { getT } from "@/lib/i18n";
import {
    LayoutDashboard,
    Server,
    Settings,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import {usePathname} from "next/navigation";

export function Sidebar() {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const pathname = usePathname();
    const locale = (pathname.split("/")[1] || "tr") as "tr" | "en";
    const t = getT(locale);

    const MenuCard = ({
                          icon: Icon,
                          title,
                          href
                      }: {
        icon: any;
        title: string;
        href: string;
    }) => (
        <Link
            href={href}
            className="flex items-center gap-3 bg-white/60 hover:bg-blue-100/40 px-5 py-4 rounded-2xl transition-all shadow-sm backdrop-blur-sm hover:scale-[1.02] hover:shadow-md text-gray-700"
        >
            <Icon size={22} className="text-blue-600" />
            <span className="text-base font-medium">{title}</span>
        </Link>
    );

    return (
        <aside className="w-72 h-full p-6 flex flex-col space-y-5 border-r bg-[#f9fafb]">
            <h2 className="text-2xl font-bold text-blue-600 mb-2 tracking-tight">NodeMS</h2>

            <MenuCard icon={LayoutDashboard} title="Dashboard" href="/" />

            <div className="bg-white/60 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.01]">
                <button
                    onClick={() => setOpenSubMenu(!openSubMenu)}
                    className="w-full flex items-center justify-between text-base font-medium text-gray-700"
                >
          <span className="flex items-center gap-3">
            <Server size={22} className="text-blue-600" />
              {t("servers")}
          </span>
                    {openSubMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {openSubMenu && (
                    <div className="mt-4 flex flex-col gap-2 pl-1 text-[15px] text-gray-600 font-normal">
                        <Link href="/nodes/online" className="hover:text-blue-500">🟢 Aktif Sunucular</Link>
                        <Link href="/nodes/offline" className="hover:text-blue-500">🔴 Kapalı Sunucular</Link>
                        <Link href="/nodes/add" className="hover:text-blue-500">➕ Sunucu Ekle</Link>
                    </div>
                )}
            </div>

            <MenuCard icon={Settings} title="Ayarlar" href="/settings" />
        </aside>
    );
}
