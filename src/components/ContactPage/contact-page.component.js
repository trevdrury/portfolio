import React, { useLayoutEffect } from "react";
import SocialLinks from "../SocialLinks/social-links.component";
import ContactForm from "../ContactForm/contact-form.component";
import * as S from "./contact-page.styles";

const ContactPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.ContactPage>
      <S.OuterWrapper>
        <S.Heading>Get in Touch</S.Heading>
        <S.InnerWrapper>
          <S.Copy>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </S.Copy>
          <SocialLinks dark />
        </S.InnerWrapper>
      </S.OuterWrapper>
      <S.OuterWrapper>
        <S.Heading>Contact Me</S.Heading>
        <ContactForm />
      </S.OuterWrapper>
    </S.ContactPage>
  );
};

export default ContactPage;
