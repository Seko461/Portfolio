
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../assets/styles/Contacts.css'


const Contacts = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_portfolio', 'template_portfolio', form.current, {
                publicKey: 'k-fbpvbZXON-OsTyj',
            })
            .then(
                () => {
                    const success = () => toast.success('SUCCESS!');
                    success();
                },
                (error) => {
                    const errorMessage = () => toast.error('FAILED...', error.text);
                    errorMessage();
                },
            );
        form.current.reset()
    };

    return (
        <div className='folder'>
            <div className="formContainer">
                <h1>Connect with me</h1>
                <div className="">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className="input" type="text" name="from_name" required />
                        <label>Email</label>
                        <input type="email" className="input" name="from_email" required />
                        <label>Message</label>
                        <textarea name="message" className="message" required />
                        <input className="submit" type="submit" value="Send" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contacts
