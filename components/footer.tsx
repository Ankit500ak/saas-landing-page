import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-text-primary py-16 text-white">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-4">
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Product</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Product Updates
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li>
                <Link href="/blog" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Company</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-accent transition-colors" prefetch={false}>
                  Service Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-gray-700 pt-10 md:flex-row">
          <div className="flex space-x-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-primary-accent"
              prefetch={false}
            >
              <Facebook className="h-7 w-7" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-primary-accent"
              prefetch={false}
            >
              <Twitter className="h-7 w-7" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-primary-accent"
              prefetch={false}
            >
              <Linkedin className="h-7 w-7" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-primary-accent"
              prefetch={false}
            >
              <Instagram className="h-7 w-7" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="us">
              <SelectTrigger className="w-[200px] rounded-full border-gray-700 bg-gray-800 px-4 py-2 text-white shadow-sm">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-700 bg-gray-800 text-white shadow-lg">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} SmartSuite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
