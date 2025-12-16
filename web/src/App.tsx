import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/common/Navbar/Navbar';
import { BackToTop } from './components/common/BackToTop/BackToTop';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Featured } from './components/sections/Featured/Featured';
import { Skills } from './components/sections/Skills/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Timeline } from './components/sections/Timeline/Timeline';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/common/Footer/Footer';
import './styles/global.scss';

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="app">
      <Navbar isDark={isDark} onToggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <About />
        <Featured />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
