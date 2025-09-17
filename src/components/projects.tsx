"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with React featuring an AI opponent, score tracking, and responsive design.",
      image: "/tic-tac-toe-game.svg",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/montshejohn/tic-tac-toe",
      demo: "https://montshejohn.github.io/tic-tac-toe/",
    },
    {
      title: "Conway's Game of Life",
      description:
        "Interactive implementation of Conway's Game of Life cellular automaton with customizable patterns and controls.",
      image: "/game-of-life-simulation.svg",
      technologies: ["JavaScript", "HTML5", "Canvas API", "CSS3"],
      github: "https://github.com/montshejohn/game-of-life",
      demo: "https://montshejohn.github.io/game-of-life/",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      image: "/portfolio-website.svg",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "https://github.com/montshejohn/montshejohn.github.io",
      demo: "https://montshejohn.github.io/",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/weather-dashboard.svg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      github: "https://github.com/montshejohn/weather-dashboard",
      demo: "https://montshejohn.github.io/weather-dashboard/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-gray-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-display">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
                   <Card
                     key={index}
                     className={`group hover-lift glow-border bg-black/50 backdrop-blur-sm border-gray-800 hover:border-white/50 transition-all duration-500 overflow-hidden ${
                       isVisible ? "animate-fade-in-up" : "opacity-0"
                     }`}
                     style={{ animationDelay: `${index * 0.2}s` }}
                   >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-gray-900/50 group-hover:scale-105 transition-transform duration-500 border border-gray-700/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-pretty text-gray-300">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                           <Badge
                             key={techIndex}
                             variant="outline"
                             className="text-xs bg-white/10 border-white/30 text-gray-300 hover:bg-white/20 hover:border-gray-400 transition-colors"
                           >
                             {tech}
                           </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                       <Button
                         variant="outline"
                         size="sm"
                         className="flex-1 bg-transparent border-gray-600 hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300"
                         onClick={() => window.open(project.github, '_blank')}
                       >
                         <Github className="h-4 w-4 mr-2" />
                         Code
                       </Button>
                       <Button
                         size="sm"
                         className="flex-1 bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 hover-glow text-black"
                         onClick={() => window.open(project.demo, '_blank')}
                       >
                         <ExternalLink className="h-4 w-4 mr-2" />
                         Demo
                       </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
