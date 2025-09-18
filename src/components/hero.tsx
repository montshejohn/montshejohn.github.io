export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="text-center z-10 animate-fade-in-up flex-1 flex flex-col justify-center">
               <h1 className="text-7xl md:text-9xl font-bold mb-6 font-fun">
                 <span className="gradient-text">Montshe J Mokgokong</span>
               </h1>
        <div className="w-full max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up break-words">
            Hi, I'm J Mokgokong — a full-stack developer with 6+ years of experience building scalable,
            user-focused web and mobile applications. I specialize in React, React Native, Node.js, TypeScript, and PostgreSQL,
            with growing expertise in AWS and DevOps practices.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed mt-3 sm:mt-4 animate-fade-in-up break-words" style={{ animationDelay: '0.5s' }}>
            I thrive at the intersection of product and engineering: turning complex 
            requirements into clean, maintainable solutions that solve real problems. 
            Over the years, I've worked on projects ranging from mobile apps to enterprise 
            platforms, often wearing multiple hats — developer, problem-solver, and collaborator.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed mt-3 sm:mt-4 animate-fade-in-up break-words" style={{ animationDelay: '1s' }}>
            When I'm not coding, I enjoy exploring new technologies and staying current with industry trends.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
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
