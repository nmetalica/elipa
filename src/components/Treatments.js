import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './general/Contact'
import image1 from '../images/page-treatments/category-1.svg';
import image2 from '../images/page-treatments/category-2.svg';
import image3 from '../images/page-treatments/category-3.svg';
import image4 from '../images/page-treatments/category-4.svg';
import HeaderPage from './general/HeaderPage';
import { useTranslation } from 'react-i18next';

const Treatments = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.querySelector('.page-treatments').scrollIntoView();
  }, []);
  
  return (
    <div className="page-treatments">
      <HeaderPage title={t('page-treatments.page-title')} />

      <section className="treatments-categories">
        <div className="container-8">
          <ul className="categories-list grid-2">
            <li className="category-item">
              <Link to='/odontologia-cosmetica'>
                <figure className="category-img">
                  <img src={image1} />
                </figure>
                <p className="button-large">{t('page-treatments.treatment-cat-cosmetic-dentistry.treatment-cat-title')}</p>
              </Link>
            </li>
            <li className="category-item">
              <Link to='/odontologia-restauradora-terapeutica'>
                <figure className="category-img">
                  <img src={image2} />
                </figure>
                <p className="button-large">{t('page-treatments.treatment-cat-restorative-dentistry.treatment-cat-title')}</p>
              </Link>
            </li>
            <li className="category-item">
              <Link to='/diagnostico-oral'>
                <figure className="category-img">
                  <img src={image3} />
                </figure>
                <p className="button-large">{t('page-treatments.treatment-cat-oral-diagnosis.treatment-cat-title')}</p>
              </Link>
            </li>
            <li className="category-item">
              <Link to='/aperfeicoamento-imagem'>
                <figure className="category-img">
                  <img src={image4} />
                </figure>
                <p className="button-large">{t('page-treatments.treatment-cat-image-enhancement.treatment-cat-title')}</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Treatments
