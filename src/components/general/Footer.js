import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer-main">
      <div className="container-10 flex-center-col">
        <a href="/" className="logo">Dra. Elízabeth Péan</a>
        <p className="label-small">©2022 Dra. Elízabeth Péan - Odontologia Cosmética Lda. - <a href="/politica-de-privacidad" className="label-small">{t('footer.link-privacy-policy')}</a></p>
      </div>
    </footer>
  )
}

export default Footer
