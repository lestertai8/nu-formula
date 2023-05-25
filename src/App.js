import "./App.css";
import "./components/CustomHeader.js";

import Footer from "./components/Footer.js";
import NavBar from './components/NavBar.jsx';
import About from './pages/AboutPage';
import Donate from './pages/DonatePage';
import Home from './pages/HomePage';
import Members from './pages/MembersPage';
import Sponsors from './pages/SponsorsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutPage from "./pages/AboutPage";
// import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/sponsors" element={<Sponsors/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
