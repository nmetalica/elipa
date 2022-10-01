import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/general/Header'
import Footer from './components/general/Footer'
import About from './components/About'
import Concept from './components/Concept'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'
import PreDiagnosis from './components/PreDiagnosis'
import Treatments from './components/Treatments'
import CosmeticDentistry from './components/page-treatments/CosmeticDentistry'
import RestorativeTherapeuticDentistry from './components/page-treatments/RestorativeTherapeuticDentistry'
import OralDiagnosis from './components/page-treatments/OralDiagnosis'
import ImageEnhancement from './components/page-treatments/ImageEnhancement'
import AperfeicoamentoFacial from './components/page-treatments/AperfeicoamentoFacial'
import AperfeicoamentoOral from './components/page-treatments/AperfeicoamentoOral'

import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/concepto' element={<Concept />} />
          <Route path='/tratamientos' element={<Treatments />} />
          <Route path='/pre-diagnostico' element={<PreDiagnosis />} />
          <Route path='/odontologia-cosmetica' element={<CosmeticDentistry />} />
          <Route path='/odontologia-restauradora-terapeutica' element={<RestorativeTherapeuticDentistry />} />
          <Route path='/diagnostico-oral' element={<OralDiagnosis />} />
          <Route path='/aperfeicoamento-imagem' element={<ImageEnhancement />} />
          <Route path='/aperfeicoamento-facial' element={<AperfeicoamentoFacial />} />
          <Route path='/aperfeicoamento-oral' element={<AperfeicoamentoOral />} />
          <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
