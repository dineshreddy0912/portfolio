function Header() {
  const handleScroll = () => {
    const contentSection = document.getElementById("contact");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
        <div className="header">
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><button id="contact-btn" onClick={handleScroll}>Contact</button></li>
            </ul>
        </div>
    </>
  )
}
export default Header
