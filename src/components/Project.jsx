import { FaGreaterThan } from "react-icons/fa";

function Project(){
    return(
        <>
            <div className="project" id="project">
                <h1>Projects</h1>
                <div className="project-area">
                    <div className="project-1"></div>
                    <div className="project-2"></div>
                    <div className="project-3"></div>
                    <div className="project-4"></div>
                    <div className="project-5"></div>
                    <div className="project-6"></div>
                    <div className="project-7"></div>
                    <div className="project-8"></div>
                    <div className="project-9"></div>
                    <div className="showall" title="Show all">
                        <FaGreaterThan id="icon" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project