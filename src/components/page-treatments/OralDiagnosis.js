import { useEffect } from 'react'
import HeaderPage from '../general/HeaderPage'
import Contact from '../general/Contact'
import diamond from '../../images/page-treatments/category-3.svg';
import image1 from '../../images/page-oral-diagnosis/treatment-raiox.svg';
import { useTranslation } from 'react-i18next';

const OralDiagnosis = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.querySelector('.page-treatment').scrollIntoView();
  }, []);
  
  return (
    <div className="page-treatment page-oral-diagnosis">
      <HeaderPage title={t('page-treatments.page-title')} />

      <section className="treatment-categories">
        <header className="treatment-header">
          <div className="container flex-center-col">
            <figure className="header-img">
              <img src={diamond} />
            </figure>

            <h2 className="header-title title-2">{t('page-treatments.treatment-cat-oral-diagnosis.treatment-cat-title')}</h2>
          </div>
        </header>

        <div className="treatment-category container-8">
          <ul className="treaments-list">
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image1} />
              </figure>
              
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-oral-diagnosis.treatment-1-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-oral-diagnosis.treatment-1-text') }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default OralDiagnosis
