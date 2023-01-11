import logo from "./assets/logo.png";
import { useState } from "react";
import Header from "./components/Header";
import ContentPage from "./components/ContentPage";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Donate from "./components/Donate";
import "./App.css";

function App() {
  const [content, setContent] = useState("welcome");

  const aboutContent = [
    {
      title: "Our Ambition",
      text: "The world has changed. Wildlife has halved in less than a generation. Natural habitats are being put under increasing pressure. And climate change is leading us into uncharted territory. But people have changed too. They’re more aware of the threat to essentials like food, water and clean air. They’re more ambitious, more innovative. And they’re backed by a growing number of corporations.",
    },
    {
      title: "Together possible",
      text: "The natural world shows us in so many that there is strength in numbers. WWF has teams of experts working in almost 100 countries to put nature on the path to recovery for the benefit of people and wildlife. But we've known from the start that this isn't a job for one organization. Our strong commitment to collaboration– something we call together possible – shapes all our work, leading to many powerful partnerships around the world. With the deepening crisis of nature loss, now is the time for every one of us to work together. Parents, students and CEOs. Individuals, businesses and governments. You don't have to be an environmentalist. You just have to agree that we must be more careful with our one and only home. Together, anything is possible.",
    },
  ];

  const welcomeContent = [
    {
      title: "Our Ambition",
      text: "The world has changed. Wildlife has halved in less than a generation. Natural habitats are being put under increasing pressure. And climate change is leading us into uncharted territory. But people have changed too. They’re more aware of the threat to essentials like food, water and clean air. They’re more ambitious, more innovative. And they’re backed by a growing number of corporations.",
    },
    {
      title: "Together possible",
      text: "The natural world shows us in so many that there is strength in numbers. WWF has teams of experts working in almost 100 countries to put nature on the path to recovery for the benefit of people and wildlife. But we've known from the start that this isn't a job for one organization. Our strong commitment to collaboration– something we call together possible – shapes all our work, leading to many powerful partnerships around the world. With the deepening crisis of nature loss, now is the time for every one of us to work together. Parents, students and CEOs. Individuals, businesses and governments. You don't have to be an environmentalist. You just have to agree that we must be more careful with our one and only home. Together, anything is possible.",
    },
  ];

  const thankYouContent = [
    {
      title: "Thank you!",
      text: "We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a great day!",
    },
  ];

  const contentOptions = {
    about: <ContentPage mainTitle={"About"} paragraphs={aboutContent} />,
    welcome: <ContentPage mainTitle={"Welcome"} paragraphs={welcomeContent} />,
    contact: <Contact func={setContent} />,
    thankYou: <ContentPage mainTitle={""} paragraphs={thankYouContent} />,
  };

  return (
    <div className="App">
      {<Header logo={logo} func={setContent} />}
      {<Hero />}
      <div id="container" className="container">
        {contentOptions[content]}
      </div>
      {<Donate id="donate" />}
    </div>
  );
}

export default App;
