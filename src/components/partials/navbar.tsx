"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import logoSVG from "../../../public/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 pt-2 ${
        isScrolled ? "bg-background border-b" : "bg-transparent"
      }`}
    >
      {" "}
      <div className="c w-full flex h-16 justify-between md:px-6 md:pr-4 lg:px-12 xl:px-16 xl:pl-28">
        {/* Mobile Menu */}
        <div className="flex items-center md:space-x-2 lg:space-x-10">
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="mr-2">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8 pl-4">
                  <Link
                    href="/"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/services"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="font-bold text-xl">YourLogo</span> */}
              <Image priority src={logoSVG} alt="Follow us on Twitter" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-10 mx-6">
            <Link
              href="/"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3 lg:space-x-5">
          <Button
            variant="outline"
            size="lg"
            className="sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base lg:text-lg text-center font-medium rounded-full md:px-4 xl:px-8"
          >
            Create an account
          </Button>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base lg:text-lg text-center font-medium rounded-full md:px-2 xl:px-4"
          >
            <div className="flex items-center justify-center gap-x-1">
              Sign Up
              <ChevronRight strokeWidth={3} />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
