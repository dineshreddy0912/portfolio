// Main.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// Importing the profile image correctly
import Profile from './../assets/profile.png';

function Main() {
    return (
        <>
            <div className="main" id="main">
                <div className="left">
                    <h1 id="greeting">Hi there,</h1>
                    <h2 id="name">I am Dinesh, Web Developer</h2>
                    <p id="para">I have expertise in web development using modern technologies and frameworks like React. 
                        Additionally, I specialize in building cross-platform mobile applications with React Native.</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/sodum-dineshreddy" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/dineshreddy0912" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://x.com/DineshSodum" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                    <div className="about-btn-div">
                        <button id="about-btn">About me</button>
                    </div>
                </div>
                <div className="right">
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        </>
    );
}

export default Main;
