export default function RenderDesignWebsite() {
  const projects = [
    {
      title: "Modern Tropical House",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Minimalist Workspace",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Villa Concept",
      category: "3D Visualization",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    "3D Exterior Rendering",
    "3D Interior Visualization",
    "Architectural Animation",
    "Landscape Rendering",
    "Concept Design",
    "Photorealistic Visualization",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest">
            RENDER<span className="text-orange-400">DESIGN</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-neutral-300">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>
            <a href="#services" className="hover:text-orange-400 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-orange-400 mb-4 text-sm">
            Architectural Visualization Studio
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Bringing Your
            <span className="text-orange-400"> Dream Space </span>
            Into Reality
          </h2>

          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-8">
            High-quality architectural rendering and design visualization for
            modern homes, commercial spaces, and creative projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-orange-400 hover:bg-orange-500 transition rounded-2xl font-semibold text-black shadow-xl">
              Explore Projects
            </button>

            <button className="px-8 py-4 border border-white/20 hover:border-orange-400 hover:text-orange-400 transition rounded-2xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-orange-400 uppercase tracking-[0.3em] mb-4 text-sm">
            About Studio
          </p>

          <h3 className="text-4xl font-bold mb-6 leading-tight">
            Visualizing Architecture With Emotion & Precision
          </h3>

          <p className="text-neutral-400 leading-relaxed mb-6">
            RenderDesign is a creative architectural visualization studio that
            transforms ideas into photorealistic renders. We help architects,
            interior designers, and property developers present concepts with
            stunning detail and immersive storytelling.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Combining modern design trends with cinematic rendering techniques,
            we create visuals that inspire clients and elevate presentations.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop"
            alt="Studio"
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
          />

          <div className="absolute -bottom-6 -left-6 bg-orange-400 text-black p-6 rounded-3xl shadow-2xl">
            <h4 className="text-3xl font-bold">5+</h4>
            <p className="font-medium">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-neutral-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
                Featured Works
              </p>
              <h3 className="text-4xl font-bold">Latest Render Projects</h3>
            </div>

            <p className="text-neutral-400 max-w-xl">
              A collection of architectural renderings designed to communicate
              atmosphere, space, and realistic visual experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-black border border-white/10 hover:border-orange-400 transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="text-orange-400 text-sm uppercase tracking-wide mb-2">
                    {project.category}
                  </p>

                  <h4 className="text-2xl font-semibold">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Expertise
          </p>

          <h3 className="text-4xl font-bold mb-4">
            Professional Rendering Services
          </h3>

          <p className="text-neutral-400 max-w-2xl mx-auto">
            We provide premium visualization solutions for architects,
            developers, and creative agencies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:border-orange-400 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-400/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-orange-400" />
              </div>

              <h4 className="text-2xl font-semibold mb-4">{service}</h4>

              <p className="text-neutral-400 leading-relaxed">
                High-end visualization with attention to detail, lighting,
                materials, and realistic atmosphere.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-[40px] p-12 md:p-16 text-black text-center shadow-2xl">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Start Your Project
          </p>

          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready To Turn Your Ideas Into Stunning Visuals?
          </h3>

          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-80">
            Collaborate with us for photorealistic architectural rendering that
            elevates your presentation and captures attention.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-black text-white hover:scale-105 transition font-semibold shadow-xl">
            Book Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/10 py-10 px-6 text-center text-neutral-500"
      >
        <h4 className="text-2xl font-bold text-white mb-2">
          RENDER<span className="text-orange-400">DESIGN</span>
        </h4>

        <p className="mb-4">
          Architectural Visualization & 3D Rendering Studio
        </p>

        <div className="flex justify-center gap-6 text-sm uppercase tracking-wide">
          <a href="#" className="hover:text-orange-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Behance
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Dribbble
          </a>
        </div>
      </footer>
    </div>
  );
}
