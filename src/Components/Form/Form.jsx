import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d{11}$/, 'Number must be exactly 11 digits')
    .required('Number is required'),
  appointment: Yup.date().required('Appointment date is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters')
});

const AnimatedBox = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className=" fw-bolder  text-info fs-4 ">Email sent successfully <i class="fa-solid fa-check fa-lg"></i></div>;
};

export default function MyForm() {
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async (values, { setSubmitting, resetForm }) => {
    try {
      await emailjs.sendForm('service_liei6iw', 'template_jkxuy6u', document.querySelector('form'), {
        publicKey: '3lUcNl3r8hNyOKsEY',
      });
      setEmailSent(true);
      resetForm();
    } catch (error) {
      alert.error('Failed to send email:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        appointment: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={sendEmail}
    >
      {({ isSubmitting, isValid }) => (
        <form className='w-75 m-auto'>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger " />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" className="form-control" />
            <ErrorMessage name="number" component="div" className="text-danger " />
          </div>
          <div className="form-group">
            <label htmlFor="appointment">Appointment</label>
            <Field type="date" name="appointment" className="form-control" />
            <ErrorMessage name="appointment" component="div" className="text-danger " />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger " />
          </div>
          <button type="submit" className="btn btn-outline-info my-2" disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {emailSent && <AnimatedBox onClose={() => setEmailSent(false)} />}
        </form>
      )}
    </Formik>
  );
}
