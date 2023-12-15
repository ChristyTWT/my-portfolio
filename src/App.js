import logo from './logo.svg';
import './App.scss';
import About from "./components/about/About";
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Menubar from "./components/menubar/Menubar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App;