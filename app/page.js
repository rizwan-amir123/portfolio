import Header from './components/Header.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Projects from './components/Projects.js'
import Hero from './components/Hero.js'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
