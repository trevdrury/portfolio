import React from "react";
import emailjs from "emailjs-com";
import * as S from "./contact-form.styles";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v9pw3ki",
        "template_3libiej",
        e.target,
        "user_Xu9bjCk2ejmCws6nfA2rm"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="name">
        Name <br />
        <S.Input type="text" placeholder="Jane Appleseed" name="from_name" />
      </S.Label>
      <S.Label htmlFor="email">
        Email Address <br />
        <S.Input
          type="email"
          placeholder="email@example.com"
          name="from_email"
        />
      </S.Label>
      <S.Label htmlFor="message">
        Message <br />
        <S.TextArea placeholder="How can I help?" name="message" />
      </S.Label>
      <S.SubmitButton type="submit" value="SEND MESSAGE" />
    </S.Form>
  );
};

export default ContactForm;

// template_3libiej
// user ID - user_Xu9bjCk2ejmCws6nfA2rm
// access token - a8afbc81acd898032473148b9e6b2d97
