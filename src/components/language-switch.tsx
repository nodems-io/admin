"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function LanguageSwitch() {
    const router = useRouter();
    const pathname = usePathname();

    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0] === "en" || segments[0] === "tr" ? segments[0] : "tr";
    const otherLocale = currentLocale === "tr" ? "en" : "tr";

    const switchLocale = (locale: "tr" | "en") => {
        const newPath = "/" + [locale, ...segments.slice(1)].join("/");
        router.push(newPath);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2 text-sm">
                    🌐 {currentLocale.toUpperCase()}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-32 p-2">
                <ul className="text-sm space-y-1">
                    <li
                        onClick={() => switchLocale("tr")}
                        className="cursor-pointer hover:text-blue-600"
                    >
                        🇹🇷 Türkçe
                    </li>
                    <li
                        onClick={() => switchLocale("en")}
                        className="cursor-pointer hover:text-blue-600"
                    >
                        🇬🇧 English
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
}
