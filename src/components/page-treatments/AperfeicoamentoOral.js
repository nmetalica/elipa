import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../general/HeaderPage'
import Contact from '../general/Contact'
import image11 from '../../images/page-cosmetic-dentistry/image-11.svg';
import image12 from '../../images/page-cosmetic-dentistry/image-12.svg';
import image13 from '../../images/page-cosmetic-dentistry/image-13.svg';
import image14 from '../../images/page-cosmetic-dentistry/image-14.svg';
import image15 from '../../images/page-cosmetic-dentistry/image-15.svg';
import image16 from '../../images/page-cosmetic-dentistry/image-16.svg';

import { useTranslation } from 'react-i18next';

const AperfeicoamentoOral = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.querySelector('.page-treatment').scrollIntoView();
  }, []);
  
  return (
    <div className="page-treatment page-cosmetic-destistry">
      <HeaderPage title={t('page-treatments.page-title')} />

      <section className="treatment-categories">
        <header className="treatment-header">
          <div className="container flex-center-col">
            <h2 className="header-title title-2">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-cat-title')}</h2>
          </div>
        </header>

        <div className="treatment-category container-8">
          <ul className="treaments-list">
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image11} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-1-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-1-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image12} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-2-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-2-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image13} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-3-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-3-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image14} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-4-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-4-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image15} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-5-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-5-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image16} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-6-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-oral.treatment-6-text') }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default AperfeicoamentoOral
