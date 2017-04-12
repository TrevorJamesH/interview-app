import React, {Component} from 'react'
import flex from 'react-uikit-flex'
import FormCheckbox from '../../atoms/form-checkbox'
import FormRadio from '../../atoms/form-radio/index'
import SelectTag from '../../atoms/select-tag/index'
import FormInput from '../../atoms/form-input/index'

export default class Form extends Component{
  constructor(props){
    super(props)
  }




  render(){
    // console.log('-=---- props', this.props)
    const form = this.props.inputModules.map( inputModule => {
      return {'Input': (<FormInput prompt={inputModule.prompt} placeholder={inputModule.placeholder} />),
        'Checkbox': (<FormCheckbox prompt={inputModule.prompt} choices={inputModule.choices} />),
        'Radio': (<FormRadio prompt={inputModule.prompt} choices={inputModule.choices} />)
      }[inputModule.type]
    })

    return(
      <form className="uk-form-horizontal uk-margin-large">
        {form}
      </form>
    )
  }
}
