'use client'

import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only"></span>
          <span className="font-bold text-xl">Ayşegülün Atölyesi</span>
        </Link>
        <nav className="ml-auto items-center hidden md:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 mx-3"
            href="/about"
          >
            Hakkında
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 mx-3"
            href="#skills"
          >
            Yetenekler
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 mx-3"
            href="#projects"
          >
            Ürünler
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 mx-3"
            href="#contact"
          >
            İletişim
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <ModeToggle />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col items-center py-4 bg-background border-b md:hidden">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 my-2"
            href="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 my-2"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 my-2"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 my-2"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </>
  );
}
