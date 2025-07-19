import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductDemoPreview } from "@/components/product-demo-preview"
import { SolutionsTabs } from "@/components/solutions-tabs"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductDemoPreview />
        <SolutionsTabs />
        <TestimonialsSection />
        <PricingSection />
        <IntegrationsSection />
        <CallToActionSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
