import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const Contact = () => {
  return (
    <MDBContainer className="contact">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{width:"80%",backgroundColor: "#b088f9"}}>
            <MDBCardBody>
              <form action="mailto:ankushwork31@gmail.com" method="GET">
                <p className="h4 text-center py-4">Contact Me</p>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    placeholder="Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value="OMKAR VATSA"
                    isEditable="false"
                    disabled="true"
                  />
                  <MDBInput
                    label="Email"
                    placeholder="Email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value="ankushwork31@gmail.com"
                    isEditable="false"
                    disabled="true"
                  />
                  <MDBInput
                    label="Contact"
                    placeholder="Contact"
                    icon="exclamation-triangle"
                    group
                    type=""
                    validate
                    error="wrong"
                    success="right"
                    value="+91 82914 19574"
                    isEditable="false"
                    disabled="true"
                  />
                  <MDBInput
                    label="Major"
                    placeholder="Message"
                    icon="lock"
                    group
                    type="text"
                    validate
                    value="Computer Science and System Engineer"
                    isEditable="false"
                    disabled="true"
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="button-contact" color="#da9ff9" type="submit" value="send">
                    Send
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;
