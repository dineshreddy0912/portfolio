import { useState } from "react";

function Header() {
  const [icon,setIcon] = useState(true);
  const handleScroll = () => {
    const contentSection = document.getElementById("contact");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleIcon = () =>{
    let top = document.querySelector('.top');
    let middle = document.querySelector('.middle');
    let bottom = document.querySelector('.bottom');
    let x_top = document.querySelector('.x-top');
    let x_bottom = document.querySelector('.x-bottom');
    let small_header = document.querySelector('.small-header');
    if(icon){
      setIcon(false)
      top.style.margintop='4px';
      top.style.animation='three 1s';
      middle.style.animation = 'three 1s';
      bottom.style.animation = 'three 1s';
      top.style.display = 'none';
      middle.style.display = 'none';
      bottom.style.display = 'none';
      x_top.style.display = 'block';
      x_bottom.style.display = 'block';
      x_top.style.width = '25px';
      x_top.style.height= '3px';
      x_top.style.transform = 'rotateZ(-40deg)';
      x_top.style.animation = 'cross_top 1s';
      x_bottom.style.animation = 'cross_bottom 1s';
      x_bottom.style.height = '3px'
      x_bottom.style.width = '25px';
      x_bottom.style.marinTop = '-7.2px';
      x_bottom.style.transform = 'rotateZ(40deg)';
      small_header.style.animation = 'small-header-display 1s';
      small_header.style.transform = 'translateY(0px)';
      small_header.style.display = 'block'
    }else if(!icon){
      setIcon(true);
      top.style.display = 'block';
      top.style.animation = 'threeRev 1s';
      middle.style.display = 'block';
      middle.style.animation = 'threeRev 1.3s';
      bottom.style.display = 'block';
      bottom.style.animation = 'threeRev 1.5s ';
      x_top.style.display = 'none';
      x_bottom.style.display = 'none';
      small_header.style.animation = 'small-header-close 1s';
      small_header.style.transform = 'translateY(-150px)'
    }

  }
  return (
    <>
        <div className="header">
            <div className="header-right">
              <h1>Port<span style={{color:'#d4af37'}}>folio</span></h1>
            </div>
            <div className="header-left">
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><button id="contact-btn" onClick={handleScroll}>Contact</button></li>
            </ul>
            </div>
            <div className="main-icon">
            <button className="icon" onClick={handleIcon}>
              <div className="top"></div>
              <div className="middle"></div>
              <div className="bottom"></div>
              <div className="x-top"></div>
              <div className="x-bottom"></div>
            </button>
            </div>
        </div>
        <div className="small-header">
          <div className="small-home"><a href="#main">Home</a></div>
          <div className="small-about"><a href="#about">About</a></div>
          <div className="small-project"><a href="#project">Project</a></div>
          <div className="small-contact-btn"><button onClick={handleScroll}>Contact</button></div>
        </div>
    </>
  )
}
export default Header
