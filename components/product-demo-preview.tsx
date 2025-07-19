"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ArrowUpRight, Users, Headset, BarChart } from "lucide-react"

export function ProductDemoPreview() {
  const [activeTab, setActiveTab] = useState("crm")

  return (
    <section id="product-demo" className="relative w-full bg-secondary-accent py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(255,255,255,0.5) 0%, rgba(244,246,249,0) 50%)",
        }}
      ></div>
      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl animate-fade-in-down">
          See SmartSuite in Action
        </h2>
        <div className="flex flex-col items-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl animate-fade-in-up">
            <TabsList className="grid w-full grid-cols-3 rounded-full bg-white p-1 shadow-md border border-gray-200">
              <TabsTrigger
                value="crm"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="h-5 w-5" /> CRM
              </TabsTrigger>
              <TabsTrigger
                value="helpdesk"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Headset className="h-5 w-5" /> Helpdesk
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-2 text-lg font-medium transition-all data-[state=active]:bg-primary-accent data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <BarChart className="h-5 w-5" /> Reports
              </TabsTrigger>
            </TabsList>
            <div className="relative mt-12 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-2xl md:p-10 animate-zoom-in [--animation-delay:0.2s]">
              <Image
                src="/placeholder.svg?height=500&width=900"
                width={900}
                height={500}
                alt="Product demo screenshot"
                className="w-full rounded-lg object-cover"
              />
              {/* More prominent floating cards/widgets simulation */}
              <div className="absolute -bottom-8 left-8 hidden w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-xl md:block animate-fade-in-up [--animation-delay:0.4s] animate-float [--animation-delay:0.4s] [--animation-duration:3.5s] hover:shadow-2xl transition-shadow duration-300">
                <p className="text-sm font-semibold text-text-primary">New Leads This Month</p>
                <p className="text-3xl font-bold text-highlight-element-teal">245</p>
                <div className="mt-2 flex items-center text-xs text-text-secondary">
                  <ArrowUpRight className="h-4 w-4 text-highlight-element-teal" />
                  <span>+12% from last month</span>
                </div>
              </div>
              <div className="absolute -top-8 right-8 hidden w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-xl md:block animate-fade-in-up [--animation-delay:0.6s] animate-float [--animation-delay:0.6s] [--animation-duration:4s] hover:shadow-2xl transition-shadow duration-300">
                <p className="text-sm font-semibold text-text-primary">Average Resolution Time</p>
                <p className="text-3xl font-bold text-highlight-element-blue">2h 30m</p>
                <div className="mt-2 flex items-center text-xs text-text-secondary">
                  <ArrowUpRight className="h-4 w-4 text-highlight-element-blue" />
                  <span>-5% from last week</span>
                </div>
              </div>
            </div>
            <TabsContent value="crm" className="sr-only">
              CRM Demo Content
            </TabsContent>
            <TabsContent value="helpdesk" className="sr-only">
              Helpdesk Demo Content
            </TabsContent>
            <TabsContent value="reports" className="sr-only">
              Reports Demo Content
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
