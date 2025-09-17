"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
      gradient: "from-white to-gray-300",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies",
      gradient: "from-gray-300 to-gray-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience",
      gradient: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-gray-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-display">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            I'm a passionate full-stack developer with a love for creating digital experiences that make a difference.
            When I'm not coding, you'll find me exploring new technologies or listening to my favorite music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
                   <Card
                     key={index}
                     className={`group hover-lift glow-border bg-black/50 backdrop-blur-sm border-gray-800 hover:border-white/50 transition-all duration-500 cursor-pointer ${
                       isVisible ? "animate-fade-in-up" : "opacity-0"
                     } ${hoveredCard === index ? "animate-pulse-glow" : ""}`}
                     style={{ animationDelay: `${index * 0.1}s` }}
                     onMouseEnter={() => setHoveredCard(index)}
                     onMouseLeave={() => setHoveredCard(null)}
                   >
                     <CardContent className="p-6 text-center">
                       <div
                         className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.gradient} p-0.5 group-hover:scale-110 transition-all duration-300`}
                       >
                         <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                           <item.icon className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors" />
                         </div>
                       </div>
                       <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors">
                         {item.title}
                       </h3>
                       <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                     </CardContent>
                   </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
