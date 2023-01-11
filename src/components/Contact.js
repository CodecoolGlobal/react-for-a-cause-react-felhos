import "./css/ContactForm.css"

function Contact(props) {
    function sendForm() {
        let formObject = {};
        formObject.firstName = document.querySelector("#firstName").value;
        formObject.lastName = document.querySelector("#lastName").value;    
        formObject.email = document.querySelector("#email").value;  
        formObject.subject = document.querySelector("#subject").value; 
        formObject.messageText = document.querySelector("#messageText").value; 
        console.log(formObject);
        props.func("thankYou")
    }

    return (
        <div className="form-wrapper">
            <form className="ContactForm" action="javascript:void(0);">
                <div className="name-input">
                    <input id= "firstName" type="text" placeholder="first name"/>
                    <input id= "lastName" type="text" placeholder="last name"/>
                </div>
                <input id="email" type="text" placeholder="example@mail.com"/>
                <input id="subject" type="text" placeholder="subject"/>
                <textarea id="messageText" name="Text1" cols="40" rows="5"></textarea>
                <button onClick={sendForm}>Send</button>
            </form>
        </div>
    )
}
  
export default Contact;