import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.subject) formErrors.subject = "Subject is required";
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Here you can add the code to send the form data to your server or API
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
                <p>Phone: 0912345678</p>
                <p>Email: hohuuphuoc@gmail.com</p>
                <p>Address: No one known</p>
            </div>
        </div>
    );
};

export default Contact;
