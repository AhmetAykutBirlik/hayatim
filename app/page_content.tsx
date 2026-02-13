import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Tags from "./components/Tags";
import Quotes from "./components/Quotes";
import Finale from "./components/Finale";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff9f9] relative">
      <FloatingHearts />
      <div className="relative z-10">
        <Hero />
        <Story />
        <Gallery />
        <Tags />
        <Quotes />
        <Finale />
      </div>
    </main>
  );
}
