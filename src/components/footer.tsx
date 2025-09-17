export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Montshe Mokgokong
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating innovative digital solutions
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:Mokgokongjohannes@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/montshejohn" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Montshe Mokgokong. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
