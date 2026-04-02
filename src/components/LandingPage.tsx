import { motion } from "motion/react";
import { Instagram, MessageSquare, ArrowRight, Star, Moon, Sparkles, Users, Heart, Zap, Image as ImageIcon } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center">
        <Moon className="text-primary-green fill-primary-green w-6 h-6" />
      </div>
      <span className="font-serif text-xl tracking-widest uppercase">Lunar</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
      <a href="#about" className="hover:text-primary-green transition-colors">About</a>
      <a href="#values" className="hover:text-primary-green transition-colors">Values</a>
      <a href="#activities" className="hover:text-primary-green transition-colors">Activities</a>
      <a href="#social" className="hover:text-primary-green transition-colors">Connect</a>
    </div>
    <a 
      href="https://discord.com/invite/lunarid" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-primary-green hover:bg-hover-green px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 glow-green"
    >
      Join Us
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 max-w-4xl"
    >
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="text-primary-green w-8 h-8 fill-primary-green blur-[1px]" />
        </motion.div>
      </div>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-none">
        Lunar <span className="text-primary-green italic text-glow-green">Community</span>
      </h1>
      <p className="font-serif text-xl md:text-2xl italic text-gray-400 mb-4 tracking-wide">
        "A Space to Create & Connect"
      </p>
      <p className="max-w-xl mx-auto text-gray-500 text-lg mb-10 leading-relaxed">
        A chill and creative online community where people connect, share ideas, and grow together.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="https://discord.com/invite/lunarid"
          className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary-green hover:text-white transition-all duration-500"
        >
          <MessageSquare className="w-5 h-5" />
          Join Discord
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="https://www.instagram.com/lunar_idn/"
          className="group flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-primary-green hover:text-primary-green transition-all duration-500"
        >
          <Instagram className="w-5 h-5" />
          Follow Instagram
        </a>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ delay: 1, duration: 2 }}
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary-green to-transparent" />
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-dark-gray/30">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Where creativity meets <span className="text-primary-green">connection.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Lunar Community is a digital space designed for those who seek more than just a chat room. We believe in the power of shared ideas and the beauty of growing together without pressure.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Whether you're a designer, coder, writer, or simply someone looking for a chill place to hang out, you'll find your orbit here.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative aspect-square rounded-2xl overflow-hidden bg-black border border-white/5"
      >
        <img 
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1000" 
          alt="Space aesthetic" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center gap-3 text-primary-green mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-bold">Est. 2022</span>
          </div>
          <p className="font-serif italic text-xl">A place to share, talk, and grow.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Values = () => {
  const values = [
    { title: "Chill & Fun", desc: "A relaxed and open environment for everyone.", icon: <Heart className="w-6 h-6" /> },
    { title: "Supportive", desc: "A positive and non-toxic community that lifts you up.", icon: <Users className="w-6 h-6" /> },
    { title: "Creative", desc: "Free to share your ideas, works, and inspirations.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Growth", desc: "Grow together step by step, learning from each other.", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <section id="values" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-primary-green mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-dark-gray/50 border border-white/5 hover:border-primary-green/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-primary-green group-hover:scale-110 transition-transform duration-500">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  const activities = [
    { title: "Creative Works", desc: "Share your designs, code, art, and more.", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600" },
    { title: "Chill Discussions", desc: "Random chats and meaningful conversations.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600" },
    { title: "Mini Events", desc: "Challenges and community-driven activities.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600" },
    { title: "Community Hangouts", desc: "Voice chats and movie nights together.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section id="activities" className="py-32 px-6 bg-dark-gray/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400">From sharing masterpieces to late-night random talks, there's always something happening in Lunar.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-12 mb-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={a.img} 
                alt={a.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-green transition-colors">{a.title}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Memories = () => (
  <section className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Memories</h2>
        <p className="text-gray-500">Moments that define who we are.</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-dark-gray group"
          >
            <img 
              src={`https://picsum.photos/seed/lunar${i}/600/${i % 2 === 0 ? '800' : '500'}`} 
              alt="Memory" 
              className="w-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ImageIcon className="text-primary-green w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Status = () => (
  <section className="py-24 px-6 bg-primary-green/5 border-y border-primary-green/10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-green/20 text-primary-green text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
        <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
        Status Update
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Rebuilding Our Space</h2>
      <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto italic">
        "We are currently rebuilding our community after our previous server was closed. A new and better space is coming soon. Thank you for staying with us."
      </p>
    </div>
  </section>
);

const Social = () => (
  <section id="social" className="py-32 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Connected</h2>
        <p className="text-gray-400 text-lg mb-10">Follow our journey on Instagram for updates, community highlights, and creative inspirations.</p>
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-full bg-dark-gray flex items-center justify-center text-primary-green">
            <Instagram className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold">@lunar_idn</h4>
            <p className="text-gray-500 text-sm">Official Instagram Page</p>
          </div>
        </div>
        <a 
          href="https://www.instagram.com/lunar_idn/"
          className="inline-flex items-center gap-3 bg-primary-green hover:bg-hover-green px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 glow-green"
        >
          Follow Lunar
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square rounded-2xl bg-dark-gray overflow-hidden border border-white/5">
            <img 
              src={`https://picsum.photos/seed/insta${i}/400/400`} 
              alt="Insta preview" 
              className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DiscordCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold mb-8">Join Our Community</h2>
      <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Be part of something simple, creative, and real. Your new digital home is just a click away.</p>
      <a 
        href="https://discord.com/invite/lunarid"
        className="inline-flex items-center gap-4 bg-white text-black hover:bg-primary-green hover:text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all duration-500 group"
      >
        <MessageSquare className="w-6 h-6" />
        Join Discord Now
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <Moon className="text-primary-green fill-primary-green w-6 h-6" />
            <span className="font-serif text-2xl tracking-widest uppercase">Lunar</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            A chill and creative online community where people connect, share ideas, and grow together.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Navigation</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-green transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-green transition-colors">About</a></li>
              <li><a href="#activities" className="hover:text-primary-green transition-colors">Activities</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Social</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.instagram.com/lunar_idn/" className="hover:text-primary-green transition-colors">Instagram</a></li>
              <li><a href="https://discord.com/invite/lunarid" className="hover:text-primary-green transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">© 2022 Lunar Community. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-600 hover:text-primary-green transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-gray-600 hover:text-primary-green transition-colors"><MessageSquare className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, About, Values, Activities, Memories, Status, Social, DiscordCTA, Footer };
