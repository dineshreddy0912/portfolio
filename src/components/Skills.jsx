// Skill.jsx
import { FaNode, FaReact } from "react-icons/fa";

function Skill() {
    return (
        <>
            <div className="skill">
                <h1>Skills</h1>
                <div className="main-area">
                    <div className="main-frontend">
                        <div className="web-frontend">
                            <div className="react">
                                <FaReact size={140} />
                            </div>
                        </div>
                        <h1  id="react">React</h1>
                    </div>
                    <div className="main-backend">
                        <div className="web-backend">
                            <div className="react">
                                <FaNode size={140}/>
                            </div>
                        </div>
                        <h1 id="node">Node JS</h1>
                    </div>
                    <div className="main-crossplatform">
                        <div className="crossplatform-app">
                            <div className="react">
                                <FaReact size={140} />
                            </div>
                        </div>
                        <h1 id="react-native">React Native</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Skill;
