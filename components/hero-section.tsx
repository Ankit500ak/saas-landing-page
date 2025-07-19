import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white py-20 md:py-32 lg:py-40">
      {/* Spotlight effect in background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,100,210,0.1) 0%, rgba(255,255,255,0) 70%)",
            animation: "pulse-gradient 4s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-fade-in-up">
            Smarter Business Starts Here.
          </h1>
          <p className="text-xl text-text-secondary md:text-2xl leading-relaxed animate-fade-in-up [--animation-delay:0.2s]">
            Your AI-powered solution for sales, support, and automation — all in one secure platform.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start animate-fade-in-up [--animation-delay:0.4s]">
            <Button className="rounded-full bg-primary-accent px-8 py-3 text-lg font-semibold shadow-lg transition-all hover:bg-button-hover hover:scale-[1.02] active:scale-[0.98] animate-pulse-light">
              Try it Free
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-primary-accent bg-transparent px-8 py-3 text-lg font-semibold text-primary-accent shadow-md transition-all hover:bg-primary-accent hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end animate-fade-in-right [--animation-delay:0.6s]">
          <Image
            src="/placeholder.svg?height=600&width=800"
            width={800}
            height={600}
            alt="Abstract dashboard illustration"
            className="rounded-xl object-cover shadow-2xl animate-float"
          />
          {/* More sophisticated floating UI cards/charts */}
          <div className="absolute -bottom-8 left-1/4 hidden w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-xl md:block animate-zoom-in [--animation-delay:0.8s] animate-float [--animation-delay:0.8s] [--animation-duration:3.5s]">
            <p className="text-sm font-semibold text-text-primary">Sales Growth</p>
            <p className="text-2xl font-bold text-highlight-element-teal">+15%</p>
          </div>
          <div className="absolute -top-8 right-1/4 hidden w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-xl md:block animate-zoom-in [--animation-delay:1s] animate-float [--animation-delay:1s] [--animation-duration:4s]">
            <p className="text-sm font-semibold text-text-primary">Customer Satisfaction</p>
            <p className="text-2xl font-bold text-highlight-element-blue">98%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
