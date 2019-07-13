import React from "react";
import Landing from "./component/landing";
import Navbar from "./component/navbar";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Landing2 from "./component/landing2";
import Services2 from "./component/services2";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing2 />
      <About />
      <Services2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
