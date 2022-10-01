import Contact from './general/Contact'
import ReviewsSlider from './ReviewsSlider'
import IntroSlider from './IntroSlider'
import { Link } from 'react-router-dom'
import heroImage from '../images/page-home/hero-image.png'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  window.scrollTo(0, 0);
  
  return (
    <div className="page-home">
      <section className="hero">
        <div className="container">
          <div className="hero-main">
            <header className="hero-header flex-center-col">
              <h2 className="hero-overtitle title-3 light">Dra. Elízabeth Péan</h2>
              <h1 className="hero-title title-2">{t('page-home.section-title')}</h1>
            </header>

            <div className="hero-actions grid-3">
              <nav className="actions-left">
                <Link className="button-regular" to='/sobre'>{t('page-home.menu.button-about')}</Link>
                <Link className="button-regular" to='/concepto'>{t('page-home.menu.button-concept')}</Link>
                <Link className="button-regular" to='/tratamientos'>{t('page-home.menu.button-treatments')}</Link>
                <Link className="button-regular" to='/pre-diagnostico'>{t('page-home.menu.button-prediagnontic')}</Link>
              </nav>

              <figure className="hero-image">
                <img src={heroImage} />
              </figure>

              <nav className="actions-right">
                <div className="button-wrapper">
                  <Link className="button-regular secondary" to=''>{t('page-home.menu.button-partnerships')}</Link>
                  <p className="caption-regular">{t('page-home.menu.button-label-soon')}</p>
                </div>
                <div className="button-wrapper">
                  <Link className="button-regular secondary" to=''>{t('page-home.menu.button-blog')}</Link>
                  <p className="caption-regular">{t('page-home.menu.button-label-soon')}</p>
                </div>
                <div className="button-wrapper">
                  <Link className="button-regular secondary" to=''>{t('page-home.menu.button-store')}</Link>
                  <p className="caption-regular">{t('page-home.menu.button-label-soon')}</p>
                </div>
              </nav>
            </div>
          </div>

          <div className="hero-intro flex-center-col">
            <IntroSlider />
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <Contact />
    </div>
  )
}

export default Home
