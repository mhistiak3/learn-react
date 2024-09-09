// src/App.js
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home title={"Welcome to iA Coder"} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
