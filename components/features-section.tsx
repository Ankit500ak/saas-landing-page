import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, BarChart2, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description: "Leverage advanced AI to uncover hidden patterns and make data-driven decisions.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your operations for maximum efficiency.",
    },
    {
      icon: BarChart2,
      title: "Real-Time Analytics",
      description: "Gain instant visibility into your performance with customizable dashboards and reports.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description: "Protect your data with robust security measures and compliance certifications.",
    },
  ]

  return (
    <section id="features" className="relative w-full bg-white py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at top left, rgba(244,246,249,0.5) 0%, rgba(255,255,255,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          Why SmartSuite?
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary-accent animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-accent text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-button-hover group-hover:shadow-xl">
                  <feature.icon className="h-10 w-10 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-text-primary group-hover:text-primary-accent transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-lg text-text-secondary">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
