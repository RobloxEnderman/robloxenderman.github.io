import React from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ContactInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

function ContactMe() {
  return (
    <ContactMeContainer>
      <h1>Contact Me</h1>
      <ContactForm>
        <ContactInput type="text" placeholder="Your Name" />
        <ContactInput type="email" placeholder="Your Email" />
        <ContactTextarea placeholder="Your Message" rows="5" />
        <ContactButton type="submit">Send Message</ContactButton>
      </ContactForm>
    </ContactMeContainer>
  );
}

export default ContactMe;