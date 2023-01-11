import React from "react";
import "./css/about.css"
import Paragraph from "./Paragraph";


function ContentPage({mainTitle ,paragraphs}) {
  return (
    <div className="about">
      <h1>{mainTitle}</h1>
      {paragraphs.map((paragraph, index) => <Paragraph key={index} title={paragraph.title} text={paragraph.text}/>)}
    </div>
  );
}

export default ContentPage;
