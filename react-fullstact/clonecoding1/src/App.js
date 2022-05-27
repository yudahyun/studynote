

import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Article/>    
      <Sections/>
      <Footer/>
    </div>
  );
}

export default App;
