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
      title: "Who We Are",
      text: "For 60 years, WWF has worked to help people and nature thrive. As the world’s leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.",
    },
    {
      title: "How We Work",
      text: "For Nature, For People, Forever WWF works to help local communities conserve the natural resources they depend upon; transform markets and policies toward sustainability; and protect and restore species and their habitats. Our efforts ensure that the value of nature is reflected in decision-making from a local to a global scale. WWF connects cutting-edge conservation science with the collective power of our partners in the field, more than 1.3 million supporters in the United States and 5 million globally, and our partnerships with communities, companies, and governments. Today, human activities put more pressure on nature than ever before, but it’s also humans who have the power to change this trajectory. Together, we can address the greatest threats to life on this planet and protect the natural resources that sustain and inspire us.",
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
