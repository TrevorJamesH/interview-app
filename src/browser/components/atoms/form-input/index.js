import React,{Component} from 'react'

export default class FormInput extends Component {
  constructor() {
    super()
  }

  render() {
    const prompt = this.props.prompt
    const placeholder = this.props.placeholder
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">{prompt}</label>
            <div className="uk-form-controls">
                <input className="uk-input form-horizontal-text" type="text" id={prompt} placeholder={placeholder} />
            </div>
        </div>
    )
  }
}
