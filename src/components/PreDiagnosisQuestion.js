import React from 'react'
import { withTranslation } from 'react-i18next';

class PreDiagnosisQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(e) {
    const option = {
      questionId: this.props.questionId,
      optionId: parseInt(e.target.attributes[1].nodeValue),
      isChecked: e.target.checked,
      isBoolean: e.target.attributes['data-boolean'].nodeValue == 'true' ? true : false
    }

    this.props.optionHandler(option);
  }

  render() {
    const { t } = this.props;

    return (
      <div className="question-group">
        <header className="question-header">
          <h2 className="question-title title-3 lowercase">{ t(this.props.content.title) }</h2>

          {!this.props.hideLabel && !this.props.isBoolean ?
            <p className="subtitle-smaller">{t('page-prediagnostic.question-title-label')}</p>
            : this.props.isBoolean ?
            <p className="subtitle-smaller">{t('page-prediagnostic.question-title-label-boolean')}</p>
            : ''
          }
        </header>

        {!this.props.isBoolean ?
          <div className="question-options">
            {this.props.content.options.map((option, i) => (
              <div className="option-group checkbox-group">
                <input type="checkbox" data-i={i} data-boolean="false" id={`q${this.props.content.id}-o${i + 1}`} onChange={(e) => { this.handleChange(e) }}/>
                <label for={`q${this.props.content.id}-o${i + 1}`}>{t(option.option)}</label>
              </div>
            ))}
          </div>
          :
          <div className="question-options">
            {this.props.content.options.map((option, i) => (
              <div className="option-group checkbox-group">
                <input type="radio" data-i={i} data-boolean="true" id={`q${this.props.content.id}-o${i + 1}`} name={`q${this.props.content.id}`} onChange={(e) => { this.handleChange(e) }}/>
                <label for={`q${this.props.content.id}-o${i + 1}`}>{t(option.option)}</label>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default withTranslation()(PreDiagnosisQuestion);
