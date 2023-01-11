import logo from './logo.png';
import { useState } from 'react';
import Header from'./components/Header'
import About from'./components/About'
import Welcome from'./components/Welcome'
import Contact from'./components/Contact'
import Hero from'./components/Hero'
import Donate from'./components/Donate'
import './App.css';
import ThankYou from './components/ThankYou';

function App() {
  const [content, setContent] = useState("welcome");

  const contentOptions = {
    about: <About/>,
    welcome: <Welcome/>,
    contact: <Contact func={setContent}/>,
    thankYou: <ThankYou/>,
  };

  return (
    <div className="App">
      {<Header logo={logo} func={setContent}/>}
      {<Hero/>}
      <div id="container" className="container">
        {contentOptions[content]}
      </div>
      {<Donate id="donate"/>}
    </div>
  );
}

export default App;
