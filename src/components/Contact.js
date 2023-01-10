import "./css/ContactForm.css"

function Contact() {
    return (
        <div className="form-wrapper">
            <form className="ContactForm">
                <div class="name-input">
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                </div>
                <input type="email" placeholder="example@mail.com"/>
                <input type="text" placeholder="subject"/>
                <textarea name="Text1" cols="40" rows="5"></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
  
export default Contact;