import { Navbar, Hero, Footer } from './components';

const App = () => (
  <main className="relative">
    <Navbar />

    <section>
      <Hero />
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;