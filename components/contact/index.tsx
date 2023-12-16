import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { InputMask } from '@react-input/mask';
import emailjs from '@emailjs/browser';

import { validationSchema } from '../../utils/validations';

// ENV VARIABLES
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

interface ContactProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// INITIAL VALUES
const initialValues: ContactProps = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSubmit = async (
    values: ContactProps,
    formikHelpers: FormikHelpers<ContactProps>
  ) => {
    const { setSubmitting, resetForm } = formikHelpers;

    try {
      if (!serviceID || !templateID || !publicKey) {
        alert('Failed to send message. Please try again later.');
        setSubmitting(false);
        return;
      }

      const emailjsParams = { ...values };

      await emailjs.send(serviceID, templateID, emailjsParams as Record<string, unknown>, publicKey);

      setIsSubmittedSuccessfully(true);
      setTimeout(() => setIsSubmittedSuccessfully(false), 5000);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div id='contact' className='mt-8 md:mt-32'>
      <h1 className='text-4xl font-bold text-center text-orange-500 mb-4'>Have a Project?</h1>
      <h4 className='text-center text-xl mb-8'>Feel free to reach out, and we can discuss your requirements.</h4>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div id='cards' className='lg:w-1/2 mb-8 lg:mb-0'>
          <div className='flex justify-center p-4 card-shadow mb-8'>
            <p className='text-xl flex align-center'><i className='light-icon-mail mr-3'></i> kureshyhassnain@gmail.com</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex flex-1 justify-center p-4 card-shadow'>
              <p className='text-xl flex align-center'><i className='light-icon-location mr-3'></i> Dallas, Texas</p>
            </div>
            <div className='flex flex-1 justify-center p-4 card-shadow'>
              <p className='text-xl flex align-center'><i className='light-icon-phone-call mr-3'></i> (469)-902-8969</p>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, handleChange, handleBlur, isSubmitting, errors, touched }) => (
              <Form className='space-y-4'>
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='flex flex-col flex-1'>
                    <Field
                      type='text'
                      name='name'
                      placeholder='Name'
                      className={`outline-none w-full p-2 border-2 border-gray-300 rounded ${
                        touched.name && errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name='name' component='div' className="text-red-500 mt-0" />
                  </div>

                  <div className='flex flex-col flex-1'>
                    <InputMask
                      mask='(___) ___ ____'
                      replacement={{ _: /\d/ }}
                      name='phone'
                      placeholder='Phone'
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`outline-none w-full p-2 border-2 border-gray-300 rounded ${
                        touched.phone && errors.phone ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name='phone' component='div' className="text-red-500 mt-0" />
                  </div>
                </div>

                <div>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    className={`outline-none w-full flex-1 p-2 border-2 border-gray-300 rounded ${
                      touched.email && errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  <ErrorMessage name='email' component='div' className="text-red-500 mt-0" />
                </div>

                <div>
                  <Field
                    as='textarea'
                    name='message'
                    placeholder='Message'
                    rows={4}
                    className={`outline-none w-full flex-1 p-2 border-2 border-gray-300 rounded ${
                      touched.message && errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  <ErrorMessage name='message' component='div' className="text-red-500 mt-0" />
                </div>

                {isSubmittedSuccessfully && (
                  <div className='mt-10 bg-green-100 border border-green-500 text-green-900 px-4 py-3 rounded' role="alert">
                    <strong className="font-bold">Success! &nbsp;</strong>
                    <span className="block sm:inline">Thank you for reaching out to me, I will get back to you as soon as possible.</span>
                  </div>
                )}

                <button type='submit' disabled={isSubmitting} className='w-full px-4 py-2 mt-5 font-medium tracking-wide bg-orange-500 rounded-md text-white'>
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
