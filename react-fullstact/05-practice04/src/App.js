import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Meta />
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
