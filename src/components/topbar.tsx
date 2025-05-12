"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Topbar() {
  const randomId = Math.floor(Math.random() * 70) + 1;

  return (
    <header className="p-3 w-full border-b bg-white flex items-center justify-between">
      <div className="relative w-64">
        <input
          className="mx-4 w-full border rounded-md px-4 py-2"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitch />

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-80">
            <h4 className="font-semibold mb-2">Bildirimler</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Sunucu A başarıyla yeniden başlatıldı</li>
              <li>⚠️ Sunucu B cevap vermiyor</li>
              <li>🟢 Yeni node eklendi</li>
            </ul>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={`https://i.pravatar.cc/150?img=${randomId}`} />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="text-sm font-medium mb-2">Recai Atak</div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="hover:text-blue-500 cursor-pointer">Profilim</li>
              <li className="hover:text-blue-500 cursor-pointer">Ayarlar</li>
              <li className="hover:text-blue-500 cursor-pointer">Çıkış Yap</li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
