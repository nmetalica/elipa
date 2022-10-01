import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';

const GiftCardPopup = (props) => {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gift, setGift] = useState('');
  const [receiver, setReceiver] = useState('');
  const [cardText, setCardText] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_0bd181g';
      const templateId = 'template_fzc9614';
      const userId = 'krYIhudEa6sP8sP12';
      const templateParams = {
         name,
         email,
         message: `${gift} <br/> ${message} <br/> ${receiver} <br/> ${cardText}`,
         contactSubject: 'Giftcard Request'
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => console.log(response))
             .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setGift('');
      setReceiver('');
      setCardText('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <div className={`giftcard-popup ${props.open ? 'show' : 'hide'}`} id="giftcard-popup">
      <div className="card">
        <p onClick={props.closePopup} className="close">{t('section-contact.giftcard.close-button')}</p>
        <p className="card-title title-1">{t('section-contact.giftcard.title')}</p>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="gc-name">{t('section-contact.giftcard.form-name')}</label>
            <input type="text" id="gc-name" name="gc-name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="email">{t('section-contact.giftcard.form-email')}</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="input-group">
            <label htmlFor="gc-receiver">{t('section-contact.giftcard.form-destiny')}</label>
            <input type="text" id="gc-receiver" name="gc-receiver" value={receiver} onChange={e => setReceiver(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="subject">{t('section-contact.giftcard.form-gift')}</label>
            <select name="subject" onChange={e => setGift(e.target.value)} value={gift}>
              <option value="blanqueamiento-dental">{t('section-contact.giftcard.form-gift-1')}</option>
              <option value="consulta">{t('section-contact.giftcard.form-gift-2')}</option>
              <option value="botox">{t('section-contact.giftcard.form-gift-3')}</option>
              <option value="hualurónico">{t('section-contact.giftcard.form-gift-4')}</option>
              <option value="visagismo">{t('section-contact.giftcard.form-gift-5')}</option>
              <option value="carillas">{t('section-contact.giftcard.form-gift-6')}</option>
              <option value="sonrisa-botox">{t('section-contact.giftcard.form-gift-7')}</option>
              <option value="gingivoplastia">{t('section-contact.giftcard.form-gift-8')}</option>
              <option value="outras">{t('section-contact.giftcard.form-gift-9')}</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="gc-text">{t('section-contact.giftcard.form-card-text')}</label>
            <input type="text" id="gc-text" name="gc-text" value={cardText} onChange={e => setCardText(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="message">{t('section-contact.giftcard.form-message')}</label>
            <textarea name="message" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>

          <input type="submit" className="form-submit button-regular" value={t('section-contact.giftcard.form-button')} onClick={submit} />
          {emailSent ?
            <p className="success-message label-regular">{t('section-contact.giftcard.form-success-message')}</p>
            :
            null
          }
        </form>
      </div>

      <div className="background" onClick={props.closePopup}></div>
    </div>
  )
}

export default GiftCardPopup
