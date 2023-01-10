import logo from './logo.png';
import { useState } from 'react';
import Header from'./components/Header'
import Content from'./components/Content'
import About from'./components/About'
import Welcome from'./components/Welcome'
import Contact from'./components/Contact'
import './App.css';

function App() {
  const contentOptions = {
    about: <About/>,
    welcome: <Welcome/>,
    contact: <Contact/>,
  };

  const [content, setContent] = useState("about");

  return (
    <div className="App">
      {<Header logo={logo} func={setContent}/>}
      <div class="container">
        {<Content content={contentOptions[content]}/>}
      </div>
    </div>
  );
}

export default App;
