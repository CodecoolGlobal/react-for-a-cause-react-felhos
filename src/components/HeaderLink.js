
function HeaderLink(props) {
    let content = 
        <div onClick={()=>{
            props.func(props.content);
            console.log(props.content);
            window.location.href="#container"
        }}>
            {props.name}
        </div>;
    return content;
  }
  
  export default HeaderLink;