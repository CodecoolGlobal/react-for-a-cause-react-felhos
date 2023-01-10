import logo from './logo.png';
import { useState } from 'react';
import Header from'./components/Header'
import About from'./components/About'
import Welcome from'./components/Welcome'
import Contact from'./components/Contact'
import Hero from'./components/Hero'
import Donate from'./components/Donate'
import './App.css';

function App() {
  const contentOptions = {
    about: <About/>,
    welcome: <Welcome/>,
    contact: <Contact/>,
  };

  const [content, setContent] = useState("welcome");

  return (
    <div className="App">
      {<Header logo={logo} func={setContent}/>}
      {<Hero/>}
      <div class="container">
        {contentOptions[content]}
      </div>
      {<Donate/>}
    </div>
  );
}

export default App;
