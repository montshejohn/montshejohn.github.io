export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-display">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                    📧
                  </div>
                  <a 
                    href="mailto:Mokgokongjohannes@gmail.com" 
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Mokgokongjohannes@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                    🐙
                  </div>
                  <a 
                    href="https://github.com/montshejohn" 
                    className="text-primary hover:text-accent transition-colors"
                  >
                    github.com/montshejohn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-lift hover-glow transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
