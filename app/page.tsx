import About from "@/components/About";
import Hero from "@/components/Hero";
import InfiniteSpinner from "@/components/InfiniteSpinner";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <InfiniteSpinner />
      <About />
    </div>
  );
}
