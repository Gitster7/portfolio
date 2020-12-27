import React from "react"

var options = { year: 'numeric' };
var today  = new Date();
today = today.getFullYear();

function Footer(){
  return(
    <div>
      <a href="mailto:ankushwork31@gmail.com" ><img className="logo" src="4299173531574338602.svg" alt="logo"/></a>
      <a href="https://github.com/Gitster7" ><img className="logo" src="5782357641556105320.svg" alt="logo"/></a>
      <a href="https://www.linkedin.com/in/omkar-v-130451112" ><img className="logo" src="19768422391530099617.svg" alt="logo"/></a>

      <p className="footer-content">Copyright © {today}</p>
    </div>
  );
}

export default Footer;
