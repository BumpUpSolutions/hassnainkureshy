import React, { useState, ChangeEvent, FormEvent } from 'react';

import emailjs from '@emailjs/browser';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      if (!serviceID || !templateID || !publicKey) {
        alert('Failed to send message. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setIsSubmittedSuccessfully(true);
      setTimeout(() => setIsSubmittedSuccessfully(false), 5000);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
    setIsSubmitting(false);
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
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='flex-1 p-2 border-2 border-gray-300 rounded' />
              <input type='text' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} className='flex-1 p-2 border-2 border-gray-300 rounded' />
            </div>
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='w-full p-2 border-2 border-gray-300 rounded' />
            <textarea name='message' placeholder='Message' value={formData.message} onChange={handleChange} className='w-full p-2 border-2 border-gray-300 rounded' rows={4}></textarea>
            {isSubmittedSuccessfully && (
              <div className='alert alert-success mt-5'>
                Form submitted successfully!
              </div>
            )}
            <button type='submit' disabled={isSubmitting} className='w-full px-4 py-2 mt-5 font-medium tracking-wide bg-orange-500 rounded-md text-white'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
