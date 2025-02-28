"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b pr-2 md:px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between lg:px-16">
        {/* Mobile Menu */}
        <div className="flex items-center md:space-x-10">
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
                    href="/products"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/articles"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Articles
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">YourLogo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 mx-6">
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
              href="/products"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="text-sm lg:text-lg font-medium transition-colors hover:text-primary"
            >
              Articles
            </Link>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3 lg:space-x-5">
          <Button
            variant="outline"
            size="sm"
            className="sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base lg:text-lg text-center py-5 font-medium"
          >
            Login
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base lg:text-lg text-center py-5 font-medium"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
