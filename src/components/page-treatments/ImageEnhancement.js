import { useEffect } from 'react'
import HeaderPage from '../general/HeaderPage'
import Contact from '../general/Contact'
import diamond from '../../images/page-treatments/category-4.svg';
import image1 from '../../images/page-image-enhancement/treatment-visagismo.svg';
import image2 from '../../images/page-image-enhancement/treatment-estudo-antropometrico.svg';
import image3 from '../../images/page-image-enhancement/treatment-cor.svg';
import { useTranslation } from 'react-i18next';

const ImageEnhancement = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;

    if(hash) {
      document.querySelector(hash).scrollIntoView();
    } else {
      document.querySelector('.page-treatment').scrollIntoView();
    }
  }, []);

  return (
    <div className="page-treatment page-image-enhancement">
      <HeaderPage title={t('page-treatments.page-title')} />

      <section className="treatment-categories">
        <header className="treatment-header">
          <div className="container flex-center-col">
            <figure className="header-img">
              <img src={diamond} />
            </figure>

            <h2 className="header-title title-2">{t('page-treatments.treatment-cat-image-enhancement.treatment-cat-title')}</h2>
          </div>
        </header>

        <div className="treatment-category container-8">
          <ul className="treaments-list">
            <li className="treatment-item" id="visagismo">
              <figure className="treatment-img">
                <img src={image1} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-image-enhancement.treatment-1-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-image-enhancement.treatment-1-text') }}></div>
              </div>
            </li>
            <li className="treatment-item" id="estudo-antropometrico">
              <figure className="treatment-img">
                <img src={image2} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-image-enhancement.treatment-2-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-image-enhancement.treatment-2-text') }}></div>
              </div>
            </li>
            <li className="treatment-item" id="estudo-color">
              <figure className="treatment-img">
                <img src={image3} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-image-enhancement.treatment-3-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-image-enhancement.treatment-3-text') }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default ImageEnhancement
