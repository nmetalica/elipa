import React from 'react'
import HeaderPage from './general/HeaderPage'
import PreDiagnosisQuestion from './PreDiagnosisQuestion'
import PreDiagnosisResponse from './PreDiagnosisResponse'
import PreDiagnosisForm from './PreDiagnosisForm'
import Contact from './general/Contact'
import { t } from 'i18next'

const questionsData = [
  {
    id: 0,
    title: "page-prediagnostic.question-1.question",
    options: [
      {
        option: 'page-prediagnostic.question-1.options.a',
        response: 'page-prediagnostic.question-1.responses.a'
      },
      {
        option: 'page-prediagnostic.question-1.options.b',
        response: 'page-prediagnostic.question-1.responses.b'
      },
      {
        option: 'page-prediagnostic.question-1.options.c',
        response: 'page-prediagnostic.question-1.responses.c'
      },
      {
        option: 'page-prediagnostic.question-1.options.d',
        response: 'page-prediagnostic.question-1.responses.d'
      },
      {
        option: 'page-prediagnostic.question-1.options.e',
        response: 'page-prediagnostic.question-1.responses.e'
      }
    ]
  },
  {
    id: 1,
    title: "page-prediagnostic.question-2.question",
    options: [
      {
        option: 'page-prediagnostic.question-2.options.a',
        response: 'page-prediagnostic.question-2.responses.a',
        image: 'treatment-coroas.svg'
      },
      {
        option: 'page-prediagnostic.question-2.options.b',
        response: 'page-prediagnostic.question-2.responses.b',
        image: 'treatment-blanqueamiento.svg'
      },
      {
        option: 'page-prediagnostic.question-2.options.c',
        response: 'page-prediagnostic.question-2.responses.c',
        image: 'treatment-invisalign.svg'
      },
      {
        option: 'page-prediagnostic.question-2.options.d',
        response: 'page-prediagnostic.question-2.responses.d'
      },
      {
        option: 'page-prediagnostic.question-2.options.e',
        response: 'page-prediagnostic.question-2.responses.e',
        image: 'treatment-implante.svg'
      },
      {
        option: 'page-prediagnostic.question-2.options.f',
        response: 'page-prediagnostic.question-2.responses.f'
      }
    ]
  },
  {
    id: 2,
    title: 'page-prediagnostic.question-3.question',
    options: [
      {
        option: 'page-prediagnostic.question-3.options.b',
        response: 'page-prediagnostic.question-3.responses.b',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.c',
        response: 'page-prediagnostic.question-3.responses.c',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.d',
        response: 'page-prediagnostic.question-3.responses.d',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.e',
        response: 'page-prediagnostic.question-3.responses.e',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.f',
        response: 'page-prediagnostic.question-3.responses.f',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.g',
        response: 'page-prediagnostic.question-3.responses.g',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.h',
        response: 'page-prediagnostic.question-3.responses.h',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.i',
        response: 'page-prediagnostic.question-3.responses.i',
        image: 'treatment-dolor.svg',
      },
      {
        option: 'page-prediagnostic.question-3.options.j',
        response: 'page-prediagnostic.question-3.responses.j'
      }
    ]
  },
  {
    id: 3,
    title: 'page-prediagnostic.question-4.question',
    options: [
      {
        option: 'page-prediagnostic.question-4.options.a',
        response: 'page-prediagnostic.question-4.responses.a'
      },
      {
        option: 'page-prediagnostic.question-4.options.b',
        response: 'page-prediagnostic.question-4.responses.b'
      },
      {
        option: 'page-prediagnostic.question-4.options.c',
        response: 'page-prediagnostic.question-4.responses.c'
      },
      {
        option: 'page-prediagnostic.question-4.options.d',
        response: 'page-prediagnostic.question-4.responses.d',
        image: 'treatment-mesobotox.svg',
      },
    ]
  },
  {
    id: 4,
    title: 'page-prediagnostic.question-5.question',
    boolean: true,
    options: [
      {
        option: 'page-prediagnostic.question-5.options.a',
        response: 'page-prediagnostic.question-5.responses.a'
      },
      {
        option: 'page-prediagnostic.question-5.options.b',
        response: 'page-prediagnostic.question-5.responses.b'
      }
    ]
  },
  {
    id: 5,
    title: 'page-prediagnostic.question-6.question',
    options: [
      {
        option: 'page-prediagnostic.question-6.options.a',
        response: 'page-prediagnostic.question-6.responses.a'
      },
      {
        option: 'page-prediagnostic.question-6.options.b',
        response: 'page-prediagnostic.question-6.responses.b',
        image: 'treatment-labios.svg',
      },
      {
        option: 'page-prediagnostic.question-6.options.c',
        response: 'page-prediagnostic.question-6.responses.c',
        image: 'treatment-rugas.svg',
      },
      {
        option: 'page-prediagnostic.question-6.options.d',
        response: 'page-prediagnostic.question-6.responses.d',
        image: 'treatment-nariz.svg',
      },
      {
        option: 'page-prediagnostic.question-6.options.e',
        response: 'page-prediagnostic.question-6.responses.e',
        image: 'treatment-pomulo.svg',
      },
      {
        option: 'page-prediagnostic.question-6.options.f',
        response: 'page-prediagnostic.question-6.responses.f'
      },
      {
        option: 'page-prediagnostic.question-6.options.g',
        response: 'page-prediagnostic.question-6.responses.g',
        image: 'treatment-bichectomia.svg',
      },
      {
        option: 'page-prediagnostic.question-6.options.h',
        response: 'page-prediagnostic.question-6.responses.h'
      },
      {
        option: 'page-prediagnostic.question-6.options.i',
        response: 'page-prediagnostic.question-6.responses.i'
      }
    ]
  },
  {
    id: 6,
    title: 'page-prediagnostic.question-7.question',
    options: [
      {
        option: 'page-prediagnostic.question-7.options.a',
        response: 'page-prediagnostic.question-7.responses.a'
      },
      {
        option: 'page-prediagnostic.question-7.options.b',
        response: 'page-prediagnostic.question-7.responses.b'
      },
      {
        option: 'page-prediagnostic.question-7.options.c',
        response: 'page-prediagnostic.question-7.responses.c'
      },
      {
        option: 'page-prediagnostic.question-7.options.d',
        response: 'page-prediagnostic.question-7.responses.d'
      },
      {
        option: 'page-prediagnostic.question-7.options.e',
        response: 'page-prediagnostic.question-7.responses.e'
      },
      {
        option: 'page-prediagnostic.question-7.options.f',
        response: 'page-prediagnostic.question-7.responses.f'
      },
      {
        option: 'page-prediagnostic.question-7.options.g',
        response: 'page-prediagnostic.question-7.responses.g'
      }
    ]
  },
  {
    id: 7,
    title: 'page-prediagnostic.question-8.question',
    hideLabel: false,
    boolean: true,
    options: [
      {
        option: 'page-prediagnostic.question-8.options.a',
        response: 'page-prediagnostic.question-8.responses.a'
      },
      {
        option: 'page-prediagnostic.question-8.options.b',
        response: 'page-prediagnostic.question-8.responses.b'
      }
    ]
  },
  {
    id: 8,
    title: 'page-prediagnostic.question-9.question',
    options: [
      {
        option: 'page-prediagnostic.question-9.options.b',
        response: 'page-prediagnostic.question-9.responses.b'
      },
      {
        option: 'page-prediagnostic.question-9.options.c',
        response: 'page-prediagnostic.question-9.responses.c'
      },
      {
        option: 'page-prediagnostic.question-9.options.d',
        response: 'page-prediagnostic.question-9.responses.d'
      },
      {
        option: 'page-prediagnostic.question-9.options.e',
        response: 'page-prediagnostic.question-9.responses.e'
      },
    ]
  }
]

class PreDiagnosis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showResponses: false,
      questionsOptions: [
        {
          questionId: 0,
          options: []
        },
        {
          questionId: 1,
          options: []
        },
        {
          questionId: 2,
          options: []
        },
        {
          questionId: 3,
          options: []
        },
        {
          questionId: 4,
          options: []
        },
        {
          questionId: 5,
          options: []
        },
        {
          questionId: 6,
          options: []
        },
        {
          questionId: 7,
          isBoolean: true,
          options: []
        },
        {
          questionId: 8,
          options: []
        },
      ]
    }

    this.showResponses = this.showResponses.bind(this)
    this.optionHandler = this.optionHandler.bind(this)
  }

  optionHandler(option) {
    let newMainObject = this.state.questionsOptions;
    let questionObject = newMainObject[option.questionId];

    if(option.isBoolean) {
      if(questionObject.options.length == 0) {
        questionObject.options.push(option.optionId);
      } {
        questionObject.options[0] = option.optionId
      }
    } else if(!option.isBoolean) {
      if(option.isChecked) {
        questionObject.options.push(option.optionId);
      } else {
        let optionIndex = questionObject.options.indexOf(option.optionId);
        questionObject.options.splice(optionIndex, 1);
      }
    }

    this.setState({ questionsOptions: newMainObject });
  }

  showResponses() {
    this.setState({ showResponses: true });
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevState.showResponses !== this.state.showResponses) {
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    
    return (
      <div className="page-pre-diagnosis">
        {this.state.showResponses ?
          <HeaderPage title={t('page-prediagnostic.page-title-with-responses')} />
          :
          <HeaderPage title={t('page-prediagnostic.page-title')} />
        }

        <section className="diagnosis-questions">
          <div className="container-6">
            <div className="diagnosis-form">
              {!this.state.showResponses ? 
                <div>
                  {questionsData.map((question, i) => (
                    <PreDiagnosisQuestion optionHandler={this.optionHandler} content={questionsData[i]} questionId={i} hideLabel={question.hideLabel} isBoolean={question.boolean} />
                  ))}

                  <PreDiagnosisForm showResponses={this.showResponses} questionsData={questionsData} responses={this.state.questionsOptions} />
                </div>
              :
                <div>
                  {this.state.questionsOptions.map((question, i) => {
                    if(question.options.length > 0) {
                      return( <PreDiagnosisResponse content={questionsData[i]} questionId={i} responses={this.state.questionsOptions[i].options} isBoolean={this.state.questionsOptions[i].isBoolean} booleanResponse={this.state.questionsOptions[i].options[0]} /> )
                    }
                  })}

                  <a href="/pre-diagnostico" className="button-regular">{t('page-prediagnostic.form-button-back')}</a>
                </div>
              }
            </div>
          </div>
        </section>

        <Contact />
      </div>
    )
  }
}

export default PreDiagnosis
