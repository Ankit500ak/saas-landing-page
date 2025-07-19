"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react" // Using CheckCircle2 for a cleaner look

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState("sales")

  const solutions = {
    sales: {
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Streamline lead management and sales pipelines.",
        "Automate follow-ups and nurture campaigns.",
        "Gain insights into sales performance with advanced analytics.",
        "Improve conversion rates and close deals faster.",
      ],
      quote: {
        text: "SmartSuite transformed our sales process, leading to a 30% increase in closed deals.",
        client: "Sarah Chen, Sales Director at GlobalTech",
      },
    },
    marketing: {
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Personalize customer journeys with targeted campaigns.",
        "Track campaign performance and ROI in real-time.",
        "Automate email marketing and social media scheduling.",
        "Segment audiences for more effective outreach.",
      ],
      quote: {
        text: "Our marketing efficiency soared after implementing SmartSuite. It's a game-changer!",
        client: "David Lee, Marketing Manager at InnovateCorp",
      },
    },
    support: {
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Provide faster and more efficient customer support.",
        "Automate ticket routing and response suggestions.",
        "Improve customer satisfaction with integrated knowledge base.",
        "Monitor support team performance and identify trends.",
      ],
      quote: {
        text: "Customer satisfaction has never been higher. SmartSuite's support features are unparalleled.",
        client: "Maria Garcia, Head of Customer Success at Connectify",
      },
    },
    hr: {
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Simplify employee onboarding and offboarding processes.",
        "Manage employee data and performance reviews efficiently.",
        "Automate HR workflows and compliance tasks.",
        "Enhance employee experience with self-service portals.",
      ],
      quote: {
        text: "SmartSuite has revolutionized our HR operations, making everything smoother and more organized.",
        client: "John Smith, HR Director at FutureWorks",
      },
    },
  }

  return (
    <section id="solutions" className="relative w-full bg-white py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at top right, rgba(244,246,249,0.5) 0%, rgba(255,255,255,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          Solutions for Every Department
        </h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full animate-fade-in-up">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-secondary-accent p-1 shadow-inner md:grid-cols-4">
            <TabsTrigger
              value="sales"
              className="rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Marketing
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Support
            </TabsTrigger>
            <TabsTrigger
              value="hr"
              className="rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              HR
            </TabsTrigger>
          </TabsList>
          {Object.entries(solutions).map(([key, content]) => (
            <TabsContent key={key} value={key} className="mt-12">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="order-2 md:order-1 animate-fade-in-left">
                  <ul className="space-y-5 text-lg text-text-secondary">
                    {content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-highlight-element-teal group-hover:scale-110 transition-transform duration-200" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-10 border-l-4 border-primary-accent pl-6 text-xl italic text-text-primary">
                    "{content.quote.text}"
                    <footer className="mt-3 text-base font-semibold text-text-secondary">
                      - {content.quote.client}
                    </footer>
                  </blockquote>
                </div>
                <div className="order-1 flex justify-center md:order-2 animate-fade-in-right">
                  <Image
                    src={content.image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={`${key} solution illustration`}
                    className="rounded-xl object-cover shadow-2xl animate-float [--animation-delay:0.2s] hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
