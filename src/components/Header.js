import HeaderLink from'./HeaderLink'
import About from'./About'

function Header(props) {

    let content = 
    <div className="header">
      <div className="logo">
        <img src={props.logo} alt="faszom" height="100px"></img>
      </div>
      <div className="navbar">
        {<HeaderLink name={"Welcome"} func={props.func} content="welcome"/>}
        {<HeaderLink name={"About"} func={props.func} content="about"/>}
        {<HeaderLink name={"Contact"} func={props.func} content="contact"/>}
      </div>
    </div>;

     return content;
}
  
export default Header;