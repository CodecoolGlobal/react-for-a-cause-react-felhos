import "./css/ContactForm.css"
import {useRef} from 'react'

function Contact(props) {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    function sendForm() {
        const formData = {
            "firstName": firstNameRef.current.value,
            "lastName": lastNameRef.current.value,
            "email": emailRef.current.value,
            "subject": subjectRef.current.value,
            "message":  messageRef.current.value
        }

        if (!Object.values(formData).some(x => x === '')) {
            console.log(formData)
            props.func("thankYou")
        } else {
            console.log("Some fields are empty!")
        }
    }

    return (
        <div className="form-wrapper">
            <h3>Contact us!</h3>
            <form className="ContactForm" action="javascript:void(0);">
                <div className="name-input">
                    <input ref={firstNameRef} id= "firstName" type="text" placeholder="first name"/>
                    <input ref={lastNameRef} id= "lastName" type="text" placeholder="last name"/>
                </div>
                <input ref={emailRef} id="email" type="text" placeholder="example@mail.com"/>
                <input ref={subjectRef} id="subject" type="text" placeholder="subject"/>
                <textarea ref={messageRef} id="messageText" placeholder="type your message here..." name="Text1" cols="40" rows="5"></textarea>
                <button onClick={sendForm}>Send</button>
            </form>
        </div>
    )
}
  
export default Contact;