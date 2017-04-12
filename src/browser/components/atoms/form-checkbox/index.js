import React,{Component} from 'react'

export default class FormCheckbox extends Component {
  constructor() {
    super()
  }


  render() {
    const checklist = this.props.choices.map( (choice, index) => {
      const choiceId = this.props.prompt+'-'+choice.split(' ').join('-')
      const choiceLabel = ' '+choice
      return (
        <div key = {index} className="uk-form-controls uk-form-controls-text">
          <label>
            <input className="uk-checkbox" id={choiceId} type="checkbox" name={choiceId}/>
            {choiceLabel}
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
