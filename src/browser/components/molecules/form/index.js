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

  handleChange(property, value, event) {
    if(event.target.value) {
      this.setState({[property]: event.target.value});
    } else {
      this.setState({[property]: value});
    }
  }

  onChange(property, value, func, event) {
    if(func) {
      func(property, event)
    }
    this.handleChange(property, value, event)
  }

  render(){
    // console.log('-=---- props', this.props)
    const form = this.props.inputModules.map( (inputModule, index) => {
      return {'Input': (<FormInput prompt={inputModule.prompt} placeholder={inputModule.placeholder} onChange={addStuffToState}/>),
        'Checkbox': (<FormCheckbox prompt={inputModule.prompt} options={inputModule.options} onChange={addStuffToState}/>),
        'Radio': (<FormRadio prompt={inputModule.prompt} options={inputModule.options} onChange={addStuffToState}/>),
        'Select': (<FormSelect prompt={inputModule.prompt} options={inputModule.options} isOptionRequired={inputModule.isOptionRequired} onChange={this.onChange.bind(this, )} id={inputModule.id}/>)
      }[inputModule.type]
    })

    return(
      <form className="uk-form-horizontal uk-margin-large">
        {form}
      </form>
    )
  }
}
