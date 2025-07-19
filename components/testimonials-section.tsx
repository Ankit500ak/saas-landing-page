import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SmartSuite has revolutionized our workflow. The AI insights are incredibly powerful and have helped us make smarter decisions faster.",
      name: "Jane Doe",
      title: "CEO, Tech Innovations",
      avatar: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "The automation features are a game-changer. We've seen a significant increase in productivity and efficiency across all departments.",
      name: "John Smith",
      title: "Operations Manager, Global Corp",
      avatar: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "Their customer support is exceptional, and the platform is incredibly intuitive. SmartSuite is an indispensable tool for our business.",
      name: "Emily White",
      title: "Director of Sales, Apex Solutions",
      avatar: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ]

  return (
    <section id="testimonials" className="relative w-full bg-light-gray-bg py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(250,250,250,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          Loved by Businesses Worldwide
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary-accent animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="flex flex-col items-center text-text-secondary">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-8 text-lg italic leading-relaxed text-text-primary">{testimonial.quote}</p>
                <Avatar className="mb-4 h-20 w-20 border-2 border-primary-accent shadow-md transition-all duration-300 group-hover:scale-105">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={`@${testimonial.name}`} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-xl font-semibold text-text-primary">{testimonial.name}</p>
                <p className="text-base text-text-secondary">{testimonial.title}</p>
                <Image
                  src={testimonial.logo || "/placeholder.svg"}
                  width={120}
                  height={40}
                  alt={`${testimonial.name}'s company logo`}
                  className="mt-6 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
