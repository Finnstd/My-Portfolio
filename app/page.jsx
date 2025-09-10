import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Timeline />
      <About />
      <Contact />
    </>
  );
}