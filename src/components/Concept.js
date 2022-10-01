import React from 'react'
import HeaderPage from './general/HeaderPage'
import Contact from './general/Contact'
import { withTranslation } from 'react-i18next';

class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question1visible: false,
      question2visible: false,
      question3visible: false,
      question4visible: false,
    }

    this.handleRevealResponse = this.handleRevealResponse.bind(this);
  }

  handleRevealResponse(questionID) {
    const response = `question${questionID}visible`;

    this.setState({
      [response]: !this.state[response]
    })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {    
    const { t } = this.props;

    return (
      <div className="page-concept">
        <section className="page-hero">
          <HeaderPage title={t('page-concept.section-title')} intro={t('page-concept.section-intro')} />

          <div className="section-content">
            <div className="container-6">
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-1') }}></p>
              <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-2') }}></p>
            </div>

            <div className="container-10 grid-2">
              <div className="text-column">
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-3') }}></p>
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-4') }}></p>
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-5') }}></p>
              </div>
              <div className="text-column">
                <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-1-text-6') }}></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-questions">
          <div className="container-10">
            <div className="questions grid-2">
            <div className={`question ${this.state.question4visible ? 'revealed' : ''}`} onClick={() => {this.handleRevealResponse(4)}}>
                <p className="question-title title-3 lowercase" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-4-question') }}></p>
                <p className="question-response body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-4-pre-answer') }}></p>
                <p className="question-response-full body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-4-answer') }}></p>
              </div>
              
              <div className={`question ${this.state.question1visible ? 'revealed' : ''}`} onClick={() => {this.handleRevealResponse(1)}}>
                <p className="question-title title-3 lowercase" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-1-question') }}></p>
                <p className="question-response body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-1-pre-answer') }}></p>
                <p className="question-response-full body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-1-answer') }}></p>
              </div>

              <div className={`question ${this.state.question2visible ? 'revealed' : ''}`} onClick={() => {this.handleRevealResponse(2)}}>
                <p className="question-title title-3 lowercase" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-2-question') }}></p>
                <p className="question-response body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-2-pre-answer') }}></p>
                <p className="question-response-full body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-2-answer') }}></p>
              </div>

              <div className={`question ${this.state.question3visible ? 'revealed' : ''}`} onClick={() => {this.handleRevealResponse(3)}}>
                <p className="question-title title-3 lowercase" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-3-question') }}></p>
                <p className="question-response body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-3-pre-answer') }}></p>
                <p className="question-response-full body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-2-question-3-answer') }}></p>
              </div>

              
            </div>
          </div>
        </section>

        <section className="section-outro">
          <div className="container-6">
            <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-3-text-1') }}></p>
            <p className="title-3 lowercase" dangerouslySetInnerHTML={{ __html: t('page-concept.section-3-text-2') }}></p>
            <p className="body-regular" dangerouslySetInnerHTML={{ __html: t('page-concept.section-3-text-3') }}></p>
          </div>
        </section>

        <Contact />
      </div>
    )
  }
}

export default withTranslation()(Concept);