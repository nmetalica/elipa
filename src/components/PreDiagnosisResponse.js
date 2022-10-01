import React from 'react'
import { withTranslation } from 'react-i18next';

class PreDiagnosisResponse extends React.Component {
  constructor(props) {
    super(props)
  }

  QuestionGroup(props) {
    const { t, content, isBoolean, booleanResponse } = props;
    let translatedResponse = t(content.options[booleanResponse].option);

    if(!isBoolean) {
      return (
        <div className="question-group">
          <header className="question-header">
            <h2 className="question-title title-3 lowercase no-number">{t(content.title)}</h2>
          </header>

          <ul className="question-responses">
            {this.props.responses.map(response => (
              <li>
                <p className="response-option-title body-small">{t(content.options[response].option)}</p>
                {content.options[response].image ?
                  <img src={content.options[response].image} />
                  :
                  null
                }
                <div className="body-regular" dangerouslySetInnerHTML={{ __html: t(content.options[response].response) }}></div>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <>
          { !(translatedResponse === 'No' || translatedResponse === 'Não') ?
          <div className="question-group">
            <header className="question-header">
              <h2 className="question-title title-3 lowercase no-number">{t(content.title)}</h2>
            </header>
  
            <ul className="question-responses">
              {this.props.responses.map(response => (
                <li>
                  <p className="response-option-title body-small">{t(content.options[response].option)}</p>
                  {content.options[response].image ?
                    <img src={content.options[response].image} />
                    :
                    null
                  }
                  <div className="body-regular" dangerouslySetInnerHTML={{ __html: t(content.options[response].response) }}></div>
                </li>
              ))}
            </ul>
          </div>
          :
          ''
          }
        </>
      )
    }
  }

  render() {
    const { isBoolean } = this.props;

    if(!isBoolean) {
      return this.QuestionGroup(this.props);
    } else {
      return this.QuestionGroup(this.props);
    }
  }
}

export default withTranslation()(PreDiagnosisResponse);