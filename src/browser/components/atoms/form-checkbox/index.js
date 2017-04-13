import React,{Component} from 'react'

export default class FormCheckbox extends Component {
  constructor() {
    super()
  }


  render() {
    const checklist = this.props.options.map( (option, index) => {
      const optionId = this.props.prompt+'-'+option.split(' ').join('-')
      const optionLabel = ' '+option
      return (
        <div key = {index} className="uk-form-controls uk-form-controls-text">
          <label>
            <input className="uk-checkbox" id={optionId} type="checkbox" name={optionId}/>
            {optionLabel}
          </label>
        </div>
      )
    })

    const prompt = this.props.prompt
    return (
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-select">{prompt}</label>
          {checklist}
      </div>
    )
  }
}
