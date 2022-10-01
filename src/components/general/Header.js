// import logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  return (
    <header className="header-main">
      <div className="container grid-3">
        <ul className="left-actions">
          <li className="ig"><a href="https://instagram.com/dra.elizabeth.pean" className="button-text-regular">dra.elizabeth.pean</a></li>
          <li className="email"><a href="mailto:info@elizabethpean.com" className="button-text-regular">info@elizabethpean.com</a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/elizabeth-pean-odontologia-cosmetica-aperfeicoamento-imagem" className="button-text-regular">Elizabeth Pean</a></li>
          <li className="phone"><a href="tel:916927805" className="button-text-regular">+351 916 927 805</a></li>
        </ul>
        <a href="/" className="logo"></a>
        <nav className="right-actions">
          <div className="locale-switcher">
            <button className={getLanguage() == 'pt' ? 'active' : 'inactive' } onClick={() => changeLanguage('pt')}>PT</button>
            <button className={getLanguage() == 'es' ? 'active' : 'inactive' } onClick={() => changeLanguage('es')}>ES</button>
            <button className={getLanguage() == 'en' ? 'active' : 'inactive' } onClick={() => changeLanguage('en')}>EN</button>
          </div>

          <a href="#contacto" className="button-regular button-contact-desktop">{t('header.button-contact')}</a>
        </nav>
        <a href="https://wa.me/351916927805" className="button-regular button-phone-mobile">+351 916 927 805</a>
      </div>
    </header>
  )
}

export default Header
