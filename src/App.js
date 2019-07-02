import React from "react";
import Landing from "./component/landing";
import Navbar from "./component/navbar";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
