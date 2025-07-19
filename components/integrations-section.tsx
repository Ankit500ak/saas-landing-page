import Image from "next/image"

export function IntegrationsSection() {
  const logos = [
    { src: "/placeholder.svg?height=60&width=150", alt: "Slack Logo" },
    { src: "/placeholder.svg?height=60&width=150", alt: "Zoom Logo" },
    { src: "/placeholder.svg?height=60&width=150", alt: "Microsoft Teams Logo" },
    { src: "/placeholder.svg?height=60&width=150", alt: "Google Workspace Logo" },
    { src: "/placeholder.svg?height=60&width=150", alt: "Zapier Logo" },
    { src: "/placeholder.svg?height=60&width=150", alt: "Salesforce Logo" },
  ]

  return (
    <section id="integrations" className="relative w-full bg-secondary-accent py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.5) 0%, rgba(244,246,249,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          Works with the tools you already use
        </h2>
        <div className="grid grid-cols-2 items-center justify-center gap-12 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center animate-zoom-in group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                width={180}
                height={70}
                alt={logo.alt}
                className="h-16 w-auto object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 group-hover:drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
