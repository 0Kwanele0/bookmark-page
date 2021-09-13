import Nav from './components/nav/Nav'
import Showcase from './components/showcase/Showcase'
import Features from './components/features/Features'
import Download from './components/download/Download'
import Faq from './components/faq/Faq'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
