'use client';
import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:5000/contacts/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const request = await response.json()
            if (!response.ok) {
                alert(request.message)
            }
            console.log(request.message)
            alert("Form submitted successfully")
        } catch (error) {
            console.error(error)
            alert("Error: " + response.message)
        }
    }
    return (
        <div className={`flex flex-col justify-center items-center ${styles.ContactP}`}>
            <section className={`relative flex justify-center items-center w-[100%] h-[300px]`}>
                <h1 className={`z-10 absolute font-[500] text-[#000] text-[37px]`}>Contact Us</h1>
                <iframe title="map" width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.1234567890123!2d10.15167!3d5.96139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1234567890!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" allowFullScreen>
                </iframe>
            </section>
            <section className={`${styles.formP}`}>
                <form onSubmit={handleSubmit} className={`${styles.formSection}`}>
                    <section className={`${styles.form}`}>
                        <div className={`flex gap-[15px]`}>
                            <label className={`${styles.label}`} htmlFor="subject">
                                <span>Subject</span>
                                <input type="text" name='subject'
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </label>
                            <label className={`${styles.label}`} htmlFor="phone">
                                <span>Phone</span>
                                <input type="text" name='phone'
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </label>
                        </div>
                        <label className={`${styles.label}`} htmlFor='name'>
                            <span>Name</span>
                            <input type="text" name='name'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`${styles.name}`} />
                        </label>
                        <label className={`${styles.label} relative`} htmlFor="message">
                            <span>Message</span>
                            <textarea rows={4} name='message'
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </label>
                    </section>
                    <div className={`${styles.sideBar}`}>
                        <h1>Our Priority</h1>
                        <p>We ensure that your information is private, and our clients are the top priority.</p>
                        <label className={`${styles.label}`} htmlFor="email">
                            <span>Email</span>
                            <input type="email" name='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </label>
                        <input className={`bg-[#000] w-full text-[#fff]`} type="submit" value="Submit Button" />
                    </div>
                </form>
                <section className={`${styles.formSec2}`}>
                    <div>
                        <h1>Location</h1>
                        <p>123 Street, City, State, 12345</p>
                    </div>
                    <div>
                        <h1>(+876)765665</h1>
                        <p>Contact us directly for more detail and support</p>
                    </div>
                    <div>
                        <h1>geni-i@gmail.com</h1>
                        <p>Email us with your inquiries, complaints, or suggestions</p>
                    </div>
                </section>
                <section className={`${styles.iframeMap}`}>
                    <iframe title="map" width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.9858069018668!2d10.147462382511897!3d5.956562100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f163e210385e7%3A0xc04aa492f8a316ae!2sX45X%2B37C%20Food%20Market%2C%20Food%20Market%20Rd%2C%20Bamenda!5e1!3m2!1sen!2scm!4v1734593588355!5m2!1sen!2scm" allowFullScreen>
                    </iframe>
                </section>
            </section>
        </div>
    )
}
