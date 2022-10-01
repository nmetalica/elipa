import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../general/HeaderPage'
import Contact from '../general/Contact'
import diamond from '../../images/page-cosmetic-dentistry/diamond.svg';
import image1 from '../../images/page-cosmetic-dentistry/image-1.svg';
import image2 from '../../images/page-cosmetic-dentistry/image-2.svg';
import image3 from '../../images/page-cosmetic-dentistry/image-3.svg';
import image4 from '../../images/page-cosmetic-dentistry/image-4.svg';
import image5 from '../../images/page-cosmetic-dentistry/image-5.svg';
import image6 from '../../images/page-cosmetic-dentistry/image-6.svg';
import image7 from '../../images/page-cosmetic-dentistry/image-7.svg';
import image8 from '../../images/page-cosmetic-dentistry/image-8.svg';
import image9 from '../../images/page-cosmetic-dentistry/image-9.svg';
import image10 from '../../images/page-cosmetic-dentistry/image-10.svg';
import image11 from '../../images/page-cosmetic-dentistry/image-11.svg';
import image12 from '../../images/page-cosmetic-dentistry/image-12.svg';
import image13 from '../../images/page-cosmetic-dentistry/image-13.svg';
import image14 from '../../images/page-cosmetic-dentistry/image-14.svg';
import image15 from '../../images/page-cosmetic-dentistry/image-15.svg';
import image16 from '../../images/page-cosmetic-dentistry/image-16.svg';
import { useTranslation } from 'react-i18next';

const AperfeicoamentoFacial = () => {
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
            <h2 className="header-title title-2">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-cat-title')}</h2>
          </div>
        </header>

        <div className="treatment-category container-8">
          <ul className="treaments-list">
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image1} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-1-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-1-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image2} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-2-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-2-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image3} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-3-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-3-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image4} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-4-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-4-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image5} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-5-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-5-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image6} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-6-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-6-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image7} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-7-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-7-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image8} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-8-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-8-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image9} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-9-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-9-text') }}></div>
              </div>
            </li>
            <li className="treatment-item">
              <figure className="treatment-img">
                <img src={image10} />
              </figure>
              <div className="treatment-content">
                <h5 className="treatment-name title-5">{t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-10-title')}</h5>
                <div dangerouslySetInnerHTML={{ __html: t('page-treatments.treatment-cat-cosmetic-dentistry.subsection-facial.treatment-10-text') }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default AperfeicoamentoFacial
