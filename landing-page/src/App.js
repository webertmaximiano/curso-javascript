import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import MediaImageText2 from './components/MediaImageText2';
import SectionBeneficios from './components/SectionBeneficios';
import SectionGaleria from './components/SectionGaleria';
import SectionText from './components/SectionText';
import SectionSeparator from './components/SectionSeparator';
//import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MediaImageText2 />
      <SectionBeneficios />
      <SectionGaleria />
      <SectionText />
      <SectionSeparator />
    </div>
  );
}

export default App;
