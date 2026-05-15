function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
      <div>
        <h1 className="text-2xl font-bold text-purple-500">
          Creatorverse
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#">Explore</a>
        <a href="#">Stories</a>
        <a href="#">Creators</a>
        <a href="#">Community</a>
        <a href="#">Studio</a>
      </div>

      <div>
        <button className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all duration-300">
          Login
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Where Creativity Finds Its Universe
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
          A global ecosystem where creators, writers, designers,
          photographers, and artists create, collaborate, and inspire together.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white transition-all duration-300">
            Start Creating
          </button>

          <button className="px-6 py-3 rounded-2xl border border-white/20 hover:border-purple-400 text-white transition-all duration-300">
            Explore Creatorverse
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}