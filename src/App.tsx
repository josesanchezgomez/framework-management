import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Pillars from "./components/Pillars";
import Capabilities from "./components/Capabilities";
import WeeklyCycle from "./components/WeeklyCycle";
import Conversation from "./components/Conversation";
import Advantages from "./components/Advantages";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Pillars />
        <Capabilities />
        <WeeklyCycle />
        <Conversation />
        <Advantages />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
