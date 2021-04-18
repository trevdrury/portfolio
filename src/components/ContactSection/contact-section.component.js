import React from "react";
import Button from "../Button/button.component";
import { Link } from "../ProjectPreview/project-preview.styles";
import * as S from "./contact-section.styles";

const ContactSection = () => {
  return (
    <S.ContactSection>
      <S.Heading>Interested in doing a project together?</S.Heading>
      <S.HR />
      <Link to="/contact">
        <Button type="secondary" width="162px">
          CONTACT ME
        </Button>
      </Link>
    </S.ContactSection>
  );
};

export default ContactSection;
