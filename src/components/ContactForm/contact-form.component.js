import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./contact-form.styles";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <S.Form onSubmit={""}>
      <S.Label for="name">
        Name <br />
        <S.Input placeholder="Jane Appleseed" {...register("name")} />
      </S.Label>
      <S.Label htmlFor="email">
        Email Address <br />
        <S.Input
          type="email"
          placeholder="email@example.com"
          {...register("email")}
        />
      </S.Label>
      <S.Label htmlFor="message">
        Message <br />
        <S.TextArea placeholder="How can I help?" {...register("message")} />
      </S.Label>
    </S.Form>
  );
};

export default ContactForm;
