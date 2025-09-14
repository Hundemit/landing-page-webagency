"use client";

import { siteConfig } from "@/app/siteConfig";
import { Button } from "@/components/ui/button";
import useScroll from "@/lib/useScroll";
import { cn } from "@/lib/utils";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { DatabaseLogo } from "@/public/DatabaseLogo";

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(15);

  return (
    <header
      className={cn(
        "fixed inset-x-4 top-4 z-50 mx-auto flex w-screen max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition-all duration-300 ",
        scrolled || open ? "w-[900px] rounded-2xl border-gray-200/50 bg-white/50 shadow-2xl shadow-black/5 backdrop-blur-sm" : "bg-white/50 backdrop-blur-sm"
      )}>
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link className="flex items-center gap-1 text-2xl font-bold tracking-tight" href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Solar Tech Logo</span>
            <DatabaseLogo className="w-6" />
            Nordi
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Button asChild variant="ghost" className="cursor-pointer text-base">
                <Link className="px-2 py-1 " href="#nzen">
                  Referenzen
                </Link>
              </Button>
              <Button asChild variant="ghost" className="cursor-pointer text-base">
                <Link className="px-2 py-1 " href="#leistung">
                  Leistung
                </Link>
              </Button>
              <Button asChild variant="ghost" className="cursor-pointer text-base">
                <Link className="px-2 py-1 " href="#agentur">
                  Agentur
                </Link>
              </Button>
            </div>
          </nav>
          <Button variant="secondary" className="hidden h-10 cursor-pointer rounded-xl text-base font-semibold sm:block">
            Kontakt
          </Button>
          <Button onClick={() => setOpen(!open)} variant="secondary" className="p-1.5 sm:hidden" aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}>
            {!open ? <RiMenuFill className="size-6 shrink-0 text-gray-900" aria-hidden /> : <RiCloseFill className="size-6 shrink-0 text-gray-900" aria-hidden />}
          </Button>
        </div>
        <nav className={cn("mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden", open ? "" : "hidden")}>
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#referenzen">Referenzen</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#leistung">Leistung</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#agentur">Agentur</Link>
            </li>
          </ul>
          <Button variant="secondary" className="text-lg">
            Kontakt
          </Button>
        </nav>
      </div>
    </header>
  );
}
