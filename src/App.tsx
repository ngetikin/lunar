import { Navbar, Hero, About, Values, Activities, Memories, Status, Social, DiscordCTA, Footer } from "./components/LandingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Activities />
        <Memories />
        <Status />
        <Social />
        <DiscordCTA />
      </main>
      <Footer />
    </div>
  );
}
