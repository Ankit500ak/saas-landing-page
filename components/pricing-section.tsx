"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true)

  const pricingPlans = [
    {
      name: "Starter",
      priceMonthly: "$29",
      priceAnnually: "$290",
      description: "Ideal for small teams getting started with automation.",
      features: ["Basic AI insights", "5 users included", "Standard support", "10 GB storage"],
      isPopular: false,
    },
    {
      name: "Growth",
      priceMonthly: "$79",
      priceAnnually: "$790",
      description: "Perfect for growing businesses needing advanced features.",
      features: [
        "Advanced AI insights",
        "25 users included",
        "Priority support",
        "100 GB storage",
        "Workflow automation",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      description: "Tailored for large organizations with complex needs.",
      features: [
        "Custom AI models",
        "Unlimited users",
        "Dedicated account manager",
        "Unlimited storage",
        "Advanced security & compliance",
      ],
      isPopular: false,
    },
  ]

  return (
    <section id="pricing" className="relative w-full bg-white py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at top left, rgba(244,246,249,0.5) 0%, rgba(255,255,255,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          Simple, Transparent Pricing
        </h2>
        <div className="mb-12 flex items-center justify-center space-x-4 animate-fade-in-up [--animation-delay:0.2s]">
          <span className="text-xl font-medium text-text-secondary">Monthly</span>
          <Switch
            checked={!isMonthly}
            onCheckedChange={() => setIsMonthly(!isMonthly)}
            className="data-[state=checked]:bg-primary-accent data-[state=unchecked]:bg-secondary-accent"
          />
          <span className="text-xl font-medium text-text-secondary">Annually (Save 20%)</span>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col rounded-xl border-2 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up ${
                plan.isPopular ? "border-primary-accent" : "border-gray-200"
              }`}
              style={{ animationDelay: `${0.1 * index + 0.4}s` }}
            >
              <CardHeader className="relative text-center">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-highlight-element-teal px-4 py-1.5 text-sm font-semibold uppercase text-white shadow-md">
                    Most Popular
                  </div>
                )}
                <CardTitle className="mt-4 text-3xl font-bold text-text-primary">{plan.name}</CardTitle>
                <CardDescription className="text-lg text-text-secondary">{plan.description}</CardDescription>
                <div className="mt-6 text-5xl font-bold text-primary-accent">
                  {isMonthly ? plan.priceMonthly : plan.priceAnnually}
                  <span className="text-xl font-normal text-text-secondary">
                    {plan.priceMonthly !== "Custom" && (isMonthly ? "/month" : "/year")}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 px-8 py-6">
                <ul className="space-y-4 text-lg text-text-primary">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 group">
                      <Check className="h-6 w-6 flex-shrink-0 text-highlight-element-teal group-hover:scale-110 transition-transform duration-200" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-6">
                <Button className="w-full rounded-full bg-primary-accent py-3 text-lg font-semibold shadow-md transition-all hover:bg-button-hover hover:scale-[1.02] active:scale-[0.98]">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
