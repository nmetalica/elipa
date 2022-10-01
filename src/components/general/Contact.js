import React, { useState } from 'react'
import GiftCardPopup from './GiftCardPopup'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [giftcardVisible, setGiftcardVisible] = useState(false);

  const { t, i18n } = useTranslation();

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'EMAILJS_SERVICE_ID';
      const templateId = 'template_fzc9614';
      const userId = 'krYIhudEa6sP8sP12';
      const templateParams = {
         name,
         email,
         subject,
         contactSubject: 'Contact Request',
         message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => console.log(response))
             .then(error => console.log(error));

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }

  const closePopup = () => {
    setGiftcardVisible(false);
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="container-10">
        <header className="section-header flex-center-col">
          <h1 className="section-title title-1">{t('section-contact.section-title')}</h1>
          <p className="section-subtitle subtitle-regular">{t('section-contact.section-subtitle')}</p>
        </header>

        <div className="section-content grid-2">
          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="name">{t('section-contact.form-name')}</label>
              <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="input-group">
              <label htmlFor="email">{t('section-contact.form-email')}</label>
              <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="input-group">
              <label htmlFor="subject">{t('section-contact.form-subject')}</label>
              <select name="subject" onChange={e => setSubject(e.target.value)} value={subject}>
                <option value="consulta-online">{t('section-contact.form-subject-1')}</option>
                <option value="pedir-una-cita">{t('section-contact.form-subject-2')}</option>
                <option value="urgencia">{t('section-contact.form-subject-3')}</option>
                <option value="outro">{t('section-contact.form-subject-4')}</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="message">{t('section-contact.form-message')}</label>
              <textarea name="message" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>

            <input type="submit" className="form-submit button-regular" value={t('section-contact.form-button')} onClick={submit} />
            {emailSent ?
              <p className="success-message label-regular">{t('section-contact.form-success-message')}</p>
              :
              null
            }
          </form>

          <div className="gift-card">
            <div className="card" onClick={e => setGiftcardVisible(true)}>
              <p className="title-2">{t('section-contact.giftcard.title')}</p>
            </div>
          </div>
        </div>

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.45825207745!2d-9.1448666905922!3d38.749760396494615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a964093889%3A0x13076b575ecb31dd!2sAv.%20de%20Roma%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1662581435335!5m2!1spt-PT!2spt" title="mapa" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <GiftCardPopup open={giftcardVisible} closePopup={closePopup} />
    </section>
  )
}

export default Contact
