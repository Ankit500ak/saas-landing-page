import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-accent py-20 md:py-32">
      {/* Animated spotlight effect in background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-accent to-button-hover bg-[length:200%_200%] animate-background-pan opacity-80">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)",
            animation: "pulse-gradient 4s ease-in-out infinite",
          }}
        ></div>
      </div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 text-center md:px-6">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-down">
          Ready to get started?
        </h2>
        <p className="mb-10 text-xl text-white/90 md:text-2xl animate-fade-in-up [--animation-delay:0.2s]">
          Join 10,000+ teams who run smarter with SmartSuite.
        </p>
        <Button className="rounded-full bg-white px-10 py-4 text-xl font-semibold text-primary-accent shadow-lg transition-all hover:bg-gray-100 hover:scale-105 active:scale-[0.98] animate-zoom-in [--animation-delay:0.4s]">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}
