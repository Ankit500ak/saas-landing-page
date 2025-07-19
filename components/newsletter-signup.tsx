import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(244,246,249,0.5) 0%, rgba(255,255,255,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 text-center md:px-6">
        <h2 className="mb-6 text-3xl font-bold text-text-primary md:text-4xl animate-fade-in-down">
          Subscribe for product updates & exclusive tips
        </h2>
        <p className="mb-8 text-lg text-text-secondary animate-fade-in-up [--animation-delay:0.2s]">
          Stay informed about new features, best practices, and exclusive offers.
        </p>
        <div className="mx-auto mt-6 flex max-w-lg flex-col gap-4 sm:flex-row animate-fade-in-up [--animation-delay:0.4s]">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border-2 border-secondary-accent bg-secondary-accent px-5 py-3 text-text-primary placeholder:text-text-secondary focus:border-primary-accent focus:ring-primary-accent transition-all focus:shadow-md hover:border-primary-accent"
          />
          <Button className="rounded-full bg-primary-accent px-8 py-3 text-lg font-semibold shadow-md transition-all hover:bg-button-hover hover:scale-[1.02] active:scale-[0.98]">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}
