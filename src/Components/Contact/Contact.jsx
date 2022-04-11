import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ula1si9', 'template_gqom01h', form.current, 'npm9LdK879AmP_hAT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section>
        <div className="container contact__container">
          <h2>Contate me</h2>
          <h4>Mande me um form</h4>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='title' placeholder='Titulo' />
            <input type="text" name='name' placeholder='Nome' />
            <input type="text"  name='email' placeholder='Email' />
            <textarea name='description' placeholder='Mensagem' />
            <input type="submit" className='btn' value='Confirmar'/>
            </form>
        </div>
    </section>
  )
}

export default Contact