"use client"

import { usePathname, useRouter } from "next/navigation";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale from pathname
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  function onChange(locale: string) {
    // Replace the locale in the pathname
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as typeof routing.locales[number])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  }

  return (
    <Select value={currentLocale} onValueChange={onChange}>
      <SelectTrigger className="w-28">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">🇧🇷 Português</SelectItem>
        <SelectItem value="en">🇺🇸 English</SelectItem>
      </SelectContent>
    </Select>
  );
}
