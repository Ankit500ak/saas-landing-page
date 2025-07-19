import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20 md:py-32 bg-light-gray-bg">
        <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
          <h1 className="mb-16 text-center text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl md:text-7xl animate-fade-in-down">
            Get in Touch
          </h1>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8 animate-fade-in-left">
              <p className="text-lg text-text-secondary leading-relaxed">
                Have questions about SmartSuite or need assistance? Fill out the form below, and our team will get back
                to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-primary-accent" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Email Us</h3>
                    <p className="text-lg text-text-secondary">support@smartsuite.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-primary-accent" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Call Us</h3>
                    <p className="text-lg text-text-secondary">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-primary-accent" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Our Office</h3>
                    <p className="text-lg text-text-secondary">123 SmartSuite Ave, Innovation City, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg animate-fade-in-right">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg text-text-primary">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="mt-2 rounded-md border border-secondary-accent bg-secondary-accent px-4 py-3 text-text-primary focus:border-primary-accent focus:ring-primary-accent transition-all focus:shadow-md"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg text-text-primary">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="mt-2 rounded-md border border-secondary-accent bg-secondary-accent px-4 py-3 text-text-primary focus:border-primary-accent focus:ring-primary-accent transition-all focus:shadow-md"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-lg text-text-primary">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject of your inquiry"
                    className="mt-2 rounded-md border border-secondary-accent bg-secondary-accent px-4 py-3 text-text-primary focus:border-primary-accent focus:ring-primary-accent transition-all focus:shadow-md"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg text-text-primary">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    className="mt-2 rounded-md border border-secondary-accent bg-secondary-accent px-4 py-3 text-text-primary focus:border-primary-accent focus:ring-primary-accent transition-all focus:shadow-md"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary-accent px-8 py-3 text-lg font-semibold shadow-md transition-all hover:bg-button-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
