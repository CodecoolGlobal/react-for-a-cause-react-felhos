function HeaderLink(props) {
    let link = `#${props.id}`
    let content = 
        <a href={link}>{props.name}</a>;
    return content;
  }
  
  export default HeaderLink;