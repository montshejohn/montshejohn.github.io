export function Skills() {
  const skills = [
    { name: "React", level: 75 },
    { name: "React Native", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 68 },
    { name: "PostgreSQL", level: 65 },
    { name: "JavaScript", level: 72 },
    { name: "AWS", level: 45 },
    { name: "DevOps", level: 45 },
    { name: "Git", level: 70 },
    { name: "HTML5/CSS3", level: 75 }
  ]

  const workflows = [
    "Full-Stack Development",
    "Mobile App Development (iOS/Android)",
    "Enterprise Platform Architecture",
    "AWS Cloud Services & DevOps",
    "Agile Development & Cross-Functional Teams",
    "Database Design & Optimization",
    "API Development & Integration",
    "Version Control & CI/CD Pipelines"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-display">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-8">Workflow & Practices</h3>
              <div className="space-y-4">
                {workflows.map((workflow, index) => (
                  <div key={workflow} className="flex items-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-primary rounded-full mr-4 animate-pulse-glow"></div>
                    <span className="text-muted-foreground">{workflow}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
