import React, {Component} from 'react'

export default class SelectTag extends Component {
  render() {
    const options = this.props.options.map((option, index) => {
      return (<option key={index} value={option}>{option}</option>)
    })

    const requiredOption = () => {
      if(this.props.requiredOption) {
        return (<option value="">Please Select</option>)
      }
      return null
    }

    return (
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-select">{this.props.label}</label>
        <div className="uk-form-controls">
          <select className="uk-select form-horizontal-select" onChange={this.props.onChange} value={this.props.initValue}>
            {requiredOption}
            {options}
          </select>
        </div>
      </div>
    )
  }
}
