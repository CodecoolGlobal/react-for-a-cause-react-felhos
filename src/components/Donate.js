import "./css/Hero.css"
import "./css/Donate.css"
import donateButton from "./../assets/donateButton.svg"
import grassSeparator from "./../assets/grassSeparator.svg"
import Paragraph from "./Paragraph"
import cardVisa from "./../assets/card-visa.svg"
import cardExpress from "./../assets/card-american-express.svg"
import cardDiscover from "./../assets/card-discover.svg"
import cardMaster from "./../assets/card-master-card.svg"

function Donate({id}) {
    return (
        <div id={id} className="donate">
            <img className="grass-separator" alt="" src={grassSeparator}/>
            <div className="donate-wrapper">      
                <Paragraph className="text" title={"YOU CAN TRUST WWF"} text={"Our conservation successes are possible thanks to generous people like you. World Wildlife Fund carefully manages resources to maximize your support of our work—saving endangered wildlife, protecting fragile ecosystems, tackling the climate crisis, and finding practical and beneficial ways for both people and nature to thrive."}/>
                <div className="donate-group">
                    <div className="btn-wrapper">
                        <div>
                            <img onClick={_ => window.location.href = ("https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&s_src=AWE1700OQ18651A01638RX&utm_campaign=membership&utm_content=renew&utm_medium=print&utm_source=magazine")} alt="" src={donateButton}/>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={cardVisa} alt=""></img>
                        <img src={cardExpress} alt=""></img>
                        <img src={cardDiscover} alt=""></img>
                        <img src={cardMaster} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
  
export default Donate;