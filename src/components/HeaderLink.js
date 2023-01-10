
function HeaderLink(props) {
    let content = 
        <div onClick={()=>{
            props.func(props.content);
            console.log(props.content);
        }}>
            {props.name}
        </div>;
    return content;
  }
  
  export default HeaderLink;