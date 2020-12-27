import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const Skills = () => {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage className="skills-img" src="images/web-dev.jpg" alt="web Development" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Web Development</MDBCardTitle>
          <MDBCardText>
            Experience working with web design and development technologies and frameworks including server side scripting and security.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage className="skills-img" src="images/software-dev.jpeg" alt="Software Development" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Software Development</MDBCardTitle>
          <MDBCardText>
            Adept in various phases of software development lifecycle and system engineering.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage className="skills-img" src="images/cybersecurity.jpg" alt="cybersecurity" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Cybersecurity</MDBCardTitle>
          <MDBCardText>
            Knowledgeable about system vulnerabilities and security protocols with network managment.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Skills;
