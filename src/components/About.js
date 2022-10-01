import HeaderPage from './general/HeaderPage'
import Contact from './general/Contact'
import { useTranslation } from 'react-i18next';

import image1 from '../images/page-about/about-1.png';
import image2 from '../images/page-about/about-2.png';
import image3 from '../images/page-about/about-3.png';

const About = () => {
  const { t, i18n } = useTranslation();
  
  window.scrollTo(0, 0);
  
  return (
    <div className="page-about">
      <section className="section-intro page-hero">
        <HeaderPage title={t('page-about.section-title')}/>

        <div className="section-content">
          <div className="container-6 section-text">
            <p className="body-regular">{t('page-about.section-1-intro')}</p>
          </div>

          <div className="container-10 grid-2">
            <figure className="section-img">
              <img src={image1} />
            </figure>

            <div className="section-text">
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-1-text-1') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-1-text-2') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-1-text-3') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-1-text-4') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-1-text-5') }}></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-career">
        <div className="container-10">
          <header className="section-header flex-center-col">
            <h2 className="section-title title-3">{t('page-about.section-2-title')}</h2>
          </header>

          <div className="section-content grid-2">
            <div className="section-text">
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-2-text-1') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-2-text-2') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-2-text-3') }}></p>
            </div>

            <figure className="section-img">
              <img src={image2} />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-learning">
        <div className="container-10 flex-center-col">
          <header className="section-header flex-center-col">
            <h2 className="section-title title-3">{t('page-about.section-3-title')}</h2>
          </header>

          <figure className="section-img">
            <img src={image3} />
          </figure>

          <div className="section-content flex-center-col">
            <div className="section-text">
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-1') }}></p>
            </div>

            <div className="section-text grid-2">
              <div className="text-column">
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-2') }}></p>
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-3') }}></p>
              </div>
              <div className="text-column">
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-4') }}></p>
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-5') }}></p>
              </div>
            </div>

            <div className="section-text">
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-6') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-7') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-about.section-3-text-8')  }}></p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default About
