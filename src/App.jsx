import React from "react";
import Nav from "./components/Nav";
import Hero from './components/Hero';
import WhoCan from "./components/WhoCan";
import HowDoes from "./components/HowDoes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-6 md:px-12">
      <Nav />
      <Hero />
      <WhoCan />
      <HowDoes />
      <Footer />
    </div>
  );
}

export default App;
