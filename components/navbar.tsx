"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react" // Using Menu icon for mobile trigger
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white"}`}
    >
      <div className="container mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          {/* Mobile menu icon for potential future sidebar/mobile nav */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6 text-text-primary" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-2xl font-extrabold text-primary-accent">SmartSuite</span>
          </Link>
        </div>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#hero" className="text-text-primary transition-colors hover:text-primary-accent" prefetch={false}>
            Home
          </Link>
          <Link
            href="#features"
            className="text-text-primary transition-colors hover:text-primary-accent"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#solutions"
            className="text-text-primary transition-colors hover:text-primary-accent"
            prefetch={false}
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="text-text-primary transition-colors hover:text-primary-accent"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#integrations"
            className="text-text-primary transition-colors hover:text-primary-accent"
            prefetch={false}
          >
            Resources
          </Link>
          <Link href="/blog" className="text-text-primary transition-colors hover:text-primary-accent" prefetch={false}>
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-text-primary transition-colors hover:text-primary-accent"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button className="hidden rounded-full bg-primary-accent px-6 py-2 text-base font-semibold shadow-md transition-all hover:bg-button-hover md:inline-flex hover:scale-[1.02] active:scale-[0.98]">
          Start Free Trial
        </Button>
      </div>
    </header>
  )
}
