import { useEffect } from "react";
import css from "./Modal.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import { IoCloseOutline } from "react-icons/io5";

export const Modal = ({ onClose }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string().phone("UA", true, "Невірний номер телефону").required(),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long"),
  });

  const handleDocumentKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop}>
      <div className={css.modalWindow}>
        <button className={css.close} onClick={onClose}>
          <IoCloseOutline className={css.icon} />
        </button>
        <p className={css.title}>Зв’язатись з нами</p>

        <Formik
          initialValues={{ username: "", email: "", phone: "", message: "" }}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="username"
              placeholder="Ім’я"
              id={nameFieldId}
            />
            <Field
              className={css.input}
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              id={phoneFieldId}
            />
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
              id={emailFieldId}
            />
            <Field
              className={`${css.input} ${css.textArea}`}
              name="message"
              as="textarea"
              placeholder="Введіть текст"
              id={messageFieldId}
            />
            <button className={css.btn} type="submit">
              Надіслати
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
