import { Navbar, HeroCard } from './components';
import { Hero, Footer } from './sections';

const App = () => (
  <main className="relative">
    <Navbar />

    <section>
      <Hero />
      <HeroCard />
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;