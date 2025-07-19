import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      description: "Explore how AI is transforming business operations and driving efficiency.",
      image: "/placeholder.svg?height=300&width=500",
      date: "July 15, 2025",
      author: "SmartSuite Team",
    },
    {
      id: 2,
      title: "5 Ways SmartSuite Boosts Customer Satisfaction",
      description: "Learn how our platform helps you deliver exceptional customer experiences.",
      image: "/placeholder.svg?height=300&width=500",
      date: "July 10, 2025",
      author: "SmartSuite Team",
    },
    {
      id: 3,
      title: "Maximizing Sales with Integrated CRM Solutions",
      description: "Discover strategies to optimize your sales pipeline with SmartSuite's CRM.",
      image: "/placeholder.svg?height=300&width=500",
      date: "July 01, 2025",
      author: "SmartSuite Team",
    },
    {
      id: 4,
      title: "Data Security in the Cloud: What You Need to Know",
      description: "Understand the robust security measures protecting your data on SmartSuite.",
      image: "/placeholder.svg?height=300&width=500",
      date: "June 25, 2025",
      author: "SmartSuite Team",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20 md:py-32 bg-light-gray-bg">
        <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
          <h1 className="mb-16 text-center text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl md:text-7xl animate-fade-in-down">
            Our Latest Insights
          </h1>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Link href={`/blog/${post.id}`} prefetch={false}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={post.title}
                    className="h-48 w-full rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-primary-accent transition-colors"
                      prefetch={false}
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-text-secondary">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-sm text-text-secondary">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
