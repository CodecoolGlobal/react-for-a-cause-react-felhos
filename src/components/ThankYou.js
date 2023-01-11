import "./css/about.css"
import Paragraph from "./Paragraph";


function ThankYou() {
  return (
    <div className="about">  
      <Paragraph 
      title={"Thank you!"}
      text = {"We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a great day!"}>
      </Paragraph>
    </div>
  );
}

export default ThankYou;