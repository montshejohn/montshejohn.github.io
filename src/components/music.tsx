export function Music() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-display">
          Musical Interests
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-8">
              When I'm not coding, I enjoy exploring the world of electronic music, 
              particularly deeper shades of house and ambient soundscapes. 
              Music provides the perfect backdrop for creative coding sessions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold mb-2">Deep House</h3>
                <p className="text-muted-foreground">Atmospheric and soulful electronic music</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-xl font-semibold mb-2">Tech Podcasts</h3>
                <p className="text-muted-foreground">Staying updated with the latest in technology</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2">Gaming</h3>
                <p className="text-muted-foreground">Chess and pool for strategic thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
