import HeaderLink from'./HeaderLink'

function Header(props) {


    let content = 
    <div className="header">
      <div className="logo">
        <img src={props.logo} alt="faszom" height="100px"></img>
      </div>
      <div className="navbar">
        {<HeaderLink name={"Call to action"} id="callToAction"/>}
        {<HeaderLink name={"About"} id="about"/>}
        {<HeaderLink name={"Contact"} id="contact"/>}
      </div>
    </div>;

     return content;
}
  
export default Header;