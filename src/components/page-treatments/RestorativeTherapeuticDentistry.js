import { useEffect } from 'react'
import HeaderPage from '../general/HeaderPage'
import Contact from '../general/Contact'
import diamond from '../../images/page-treatments/category-2.svg';
import image1 from '../../images/page-restorative-therapeutic-dentistry/treatment-dor-miofacial.svg';
import image2 from '../../images/page-restorative-therapeutic-dentistry/treatment-limpeza.svg';
import image3 from '../../images/page-restorative-therapeutic-dentistry/treatment-desvitalizacao.svg';
import image4 from '../../images/page-restorative-therapeutic-dentistry/treatment-implante.svg';
import image5 from '../../images/page-restorative-therapeutic-dentistry/treatment-carie.svg';
import { useTranslation } from 'react-i18next';

const RestorativeTherapeuticDentistry = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.querySelector('.page-treatment').scrollIntoView();
  }, []);
  
  return (
    <div className="page-treatment page-restorative-therapeutic-dentistry">
      <HeaderPage title={t('page-treatments.page-title')} />

      <section className="treatment-categories">
        <header className="treatment-header">
          <div className="container flex-center-col">
            <figure className="header-img">
              <img src={diamond} />
            </figure>

            <h2 className="header-title title-2">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-cat-title')}</h2>
          </div>
        </header>

        <div className="treatment-category container-8">
          <ul className="treaments-list">
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image1} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-1-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-restorative-dentistry.treatment-1-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image2} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-2-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-restorative-dentistry.treatment-2-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image3} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-3-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-restorative-dentistry.treatment-3-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image4} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-4-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-restorative-dentistry.treatment-4-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image5} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-5-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-restorative-dentistry.treatment-5-text') }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default RestorativeTherapeuticDentistry
