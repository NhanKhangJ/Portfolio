import './App.css';
import { Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
      <Routes>
        <Route path='/' element={<About />} />

        <Route path='/resume' element={<Resume />}/>
        
        <Route path='/project' element={<Project />}/>

        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
