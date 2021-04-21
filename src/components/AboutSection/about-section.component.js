import React, { useState } from "react";
import Button from "../Button/button.component";
import { Link } from "../ProjectPreview/project-preview.styles";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import * as S from "./about-section.styles";

const AboutSection = ({ scrollRef }) => {
  const [baseUrl] = useState(`${process.env.PUBLIC_URL}/assets/profile`);

  return (
    <S.AboutSection ref={scrollRef}>
      <S.Wrapper>
        <ResponsiveImage
          mobile={`${baseUrl}/mobile/profile`}
          tablet={`${baseUrl}/tablet/profile`}
          desktop={`${baseUrl}/desktop/profile`}
        />
      </S.Wrapper>

      <S.Content>
        <S.Heading>About Me</S.Heading>
        <S.Copy>
          I’m a musician and music teacher in Southern California looking for a
          role as a front-end developer. I have experience working with HTML,
          CSS, and JavaScript. I've also coded projects using ReactJS, Redux,
          and many other frameworks and libraries. I’m happy working remotely or
          relocating if neccessary. When I'm not coding, you'll find me playing
          the piano, riding my bike, or hanging out with my dog Bruce.
        </S.Copy>
        <Link to="/portfolio">
          <Button type="secondary" width="202px">
            GO TO PORTFOLIO
          </Button>
        </Link>
      </S.Content>
    </S.AboutSection>
  );
};

export default AboutSection;
