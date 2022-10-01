import HeaderPage from './general/HeaderPage'
import Contact from './general/Contact'
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  
  window.scrollTo(0, 0);
  
  return (
    <div className="page-privacy-policy">
      <section className="section-intro page-hero">
        <HeaderPage title={t('page-privacy-policy.section-title')}/>

        <div className="section-content">
          <div className="container-8">
            <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-privacy-policy.page-content') }}></p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default PrivacyPolicy