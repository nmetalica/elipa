import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';

const PreDiagnosisForm = ({ showResponses, questionsData, responses }) => {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = () => {
    let replies = [];
    let isEmpty = true;

    responses.forEach(response => {
      let responsesArray = [];

      response.options.forEach(option => {
        responsesArray.push(t(questionsData[response.questionId].options[option].option));
      });
      
      if(responsesArray.length > 0) isEmpty = false;

      replies.push({
        'question': t(questionsData[response.questionId].title),
        'responses': responsesArray
      });
    });

    if(!isEmpty) submit(replies);
  }

  const submit = (replies) => {
    if (name && email) {
      const serviceId = 'EMAILJS_SERVICE_ID';
      const templateId = 'template_8c5yrqm';
      const userId = 'krYIhudEa6sP8sP12';

      let messageContents = '';

      replies.forEach(reply => {
        messageContents += `<br/><b>${reply.question}:</b><br/>`;

        reply.responses.forEach(response => {
          messageContents += ` - ${response}<br/>`;
        });
      });
      
      const templateParams = {
         name,
         email,
         message: messageContents
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => showResponses())
             .then(error => console.log(error));

      setName('');
      setEmail('');
      setEmailSent(true);
      window.scrollTo(0, 0);
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <form className="submit-response-form flex-col align-center">
      <div className="input-group-halfs flex align-center">
        <div className="input-group">
          <label htmlFor="gc-name">{t('page-prediagnostic.form-name')}</label>
          <input type="text" id="gc-name" name="gc-name" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="email">{t('page-prediagnostic.form-email')}</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>
      
      <button type="button" className="button-regular" onClick={handleSubmit}>{t('page-prediagnostic.form-button-send')}</button>

      {emailSent ?
        <p className="success-message label-regular">{t('page-prediagnostic.form-label-success')}</p>
        :
        null
      }
    </form>
  )
}

export default PreDiagnosisForm
