'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "About Me", href: "/about" },
    { label: "Edits", href: "/edits" },
    { label: "Reviews and More", href: "/reviews-and-more" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

    return (
        <header className="w-full border-b bg-background">
            <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-bold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-md
">
                    My Portfolio
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={item.href}
                                            className={`text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-md ${pathname === item.href
                                                ? "text-primary underline"
                                                : "text-muted-foreground hover:underline"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileOpen && (
                <div className="md:hidden border-t">
                    <ul className="flex flex-col gap-2 px-4 py-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={`block py-2 text-sm font-medium ${pathname === item.href
                                        ? "text-primary underline"
                                        : "text-muted-foreground hover:underline"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
