import { Navbar, HeroCard, Button } from './components';
import { Hero, Footer } from './sections';

const App = () => (
  <main className="relative">
    <Navbar />

    <section>
      <Hero />
      <HeroCard />
      <Button />
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;