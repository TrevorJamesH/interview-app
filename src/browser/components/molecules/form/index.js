import React, {Component} from 'react'
import flex from 'react-uikit-flex'
import FormCheckbox from '../../atoms/form-checkbox'
import FormRadio from '../../atoms/form-radio/index'
import FormSelect from '../../atoms/form-select/index'
import FormInput from '../../atoms/form-input/index'

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  handleChange(property, isCheckbox, event) {
    if(isCheckbox) {
      this.setState({[property]: event.target.checked});
    } else {
      this.setState({[property]: event.target.value});
    }
    console.log('STATE OF FORM:', this.state)
  }

  render(){
    let iteratorRadio = 0
    let iteratorCheckbox = 0
    let iteratorInput = 0
    const form = this.props.inputModules.map( (inputModule, index) => {
      return {'Input': (<FormInput prompt={inputModule.prompt} placeholder={inputModule.placeholder} onChange={this.handleChange.bind(this, 'input'+iteratorInput++, false)}/>),
        'Checkbox': (<FormCheckbox prompt={inputModule.prompt} options={inputModule.options} onChange={this.handleChange.bind(this, 'checkbox'+iteratorCheckbox++, true)}/>),
        'Radio': (<FormRadio prompt={inputModule.prompt} options={inputModule.options} onChange={this.handleChange.bind(this, 'radio'+iteratorRadio++, false)}/>),
        'Select': (<FormSelect prompt={inputModule.prompt} options={inputModule.options} isOptionRequired={inputModule.isOptionRequired} onChange={this.handleChange.bind(this, 'select'+inputModule.id, false) } passId={inputModule.id}/>)
      }[inputModule.type]
    })

    return(
      <form className="uk-form-horizontal uk-margin-large">
        {form}
      </form>
    )
  }
}
