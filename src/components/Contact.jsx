import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function Contact(){
    return(
        <>
    <div className="contact" id="contact">
        <h1>Contact me</h1>
        <div className="main-div">
            <div className="details">
                <div className="in-details">
                <p id="contact-name">Name: Dinesh reddy</p>
                <p>Email: sodumdineshreddy@gmail.com</p>
                <div><a href=""><FaLinkedin size={30} /></a><label><a href="https://www.linkedin.com/in/sodum-dineshreddy" target="_blank">Linkdin</a></label><br></br></div>
                <div><a href=""><FaGithub size={30} /></a><label><a href="https://github.com/dineshreddy0912" target="_blank">Github</a></label><br></br></div>
                <div><a href=""><FaTwitter size={30} /></a><label><a href="https://x.com/DineshSodum" target="_blank">Twitter</a></label><br></br></div>
                <p id="contact-address">Address:<br></br>4-27 Mangapalle(v)<br></br>Sanajamala(M)<br></br>kurnool(Dist)<br></br>Andra pradesh </p>
                </div>
            </div>
            <div className="details-user">
                <input type="text" name="user-name" id="user-name" placeholder="Enter your name"/>
                <input type="email" name="user-mail" id="mail" placeholder="Enter your mail"/>
                <textarea name="message" id="message" placeholder="Message" cols={100} rows={10}></textarea><br></br>
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
        </>
    )
}
export default Contact