export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="text-center z-10 animate-fade-in-up">
               <h1 className="text-7xl md:text-9xl font-bold mb-6 font-fun">
                 <span className="gradient-text">Montshe Mokgokong</span>
               </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-typing">
          Full-Stack Developer & Digital Innovator
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-lift hover-glow transition-all"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-border rounded-lg hover-lift transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
