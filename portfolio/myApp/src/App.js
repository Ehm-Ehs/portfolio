
import './App.css';
import ContactUs from './component/contactUs/contactUs';
import Experience from './component/experiences/experience';
import Header from './component/Header/header';
import Intro from './component/intro/intro';
import Skills from './component/Skills/skills';
import Work from './component/works/work';

function App() {
  return (
    <div className="App">
     <Header />
     <Intro/>
     <Skills/>
     <Experience/>
     <Work/>
     <ContactUs/>
    </div>
  );
}

export default App;
