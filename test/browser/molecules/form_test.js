import React from 'react'
import { expect } from 'chai'
import { shallow, mount, simulate } from 'enzyme'
import { jsdom } from 'jsdom'

import Form from '../../../src/browser/components/molecules/form/index.js'
import FormSelect from '../../../src/browser/components/atoms/form-select/index.js'

global.document = jsdom('');
global.window = document.defaultView;

describe.only('<Form />', () => {
  const inputModules = [
    {
      "type"       : "Input",
      "placeholder": "Where is Voldemort",
      "prompt"     : "What Is Your Question?"
    },
    {
      "type"            : "Select",
      "options"         : ["High","Low","Layside","Portside"],
      "prompt"          : "What Is The Answer?",
      "isOptionRequired": false
    },
    {
      "type"   : "Checkbox",
      "options": ["Hogwartzzz","Castle Wolfenstein"],
      "prompt" : "Hot-Topic"
    },
    {
      "type"   : "Radio",
      "options": ["Nemo", "Master", "Slave", "Jedi"],
      "prompt" : "Difficulty Levels"
    }
  ]

  context('it should render a form', () => {
    it('has a form element', () => {
      const wrapper = shallow(<Form inputModules={inputModules} />)
      expect(wrapper.find('form').exists()).to.equal.true
    })

    it('should render FormSelect in the right order with correct props', () => {
      const wrapper = mount(<Form inputModules={inputModules} />)
      expect(wrapper.find(Form).childAt(1).prop('prompt')).to.equal('What Is The Answer?')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.contain('High')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.contain('Low')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.not.contain('Mountain')
      expect(wrapper.find(Form).childAt(1).prop('isOptionRequired')).to.equal(false)
      expect(wrapper.find(Form).childAt(1).prop('isOptionRequired')).to.be.false
      wrapper.find(FormSelect).simulate('change', {target: {value: 'Portside'}}) // TODO: Get this working, then use wrapper.state to view it
      // console.log(wrapper.state())
      
      expect(wrapper.find(FormSelect).prop('options')).to.contain('Layside')
    })

    it('should render FormInput in the right order with correct props', () => {
      const wrapper = mount(<Form inputModules={inputModules} />)
      expect(wrapper.find(Form).childAt(0).prop('prompt')).to.equal('What Is Your Question?')
      expect(wrapper.find(Form).childAt(0).prop('placeholder')).to.equal('Where is Voldemort')
    })

    it('should render FormCheckbox in the right order with correct props', () => {
      const wrapper = mount(<Form inputModules={inputModules} />)
      expect(wrapper.find(Form).childAt(2).prop('prompt')).to.equal('Hot-Topic')
      expect(wrapper.find(Form).childAt(2).prop('options')).to.contain('Hogwartzzz')
      expect(wrapper.find(Form).childAt(2).prop('options')).to.contain('Castle Wolfenstein')
      expect(wrapper.find(Form).childAt(2).prop('options')).to.not.contain('BlanketSleepers')
    })

    it('should render FormRadio in the right order with correct props', () => {
      const wrapper = mount(<Form inputModules={inputModules} />)
      expect(wrapper.find(Form).childAt(3).prop('prompt')).to.equal('Difficulty Levels')
      expect(wrapper.find(Form).childAt(3).prop('options')).to.contain('Nemo')
      expect(wrapper.find(Form).childAt(3).prop('options')).to.contain('Master')
      expect(wrapper.find(Form).childAt(3).prop('options')).to.contain('Slave')
      expect(wrapper.find(Form).childAt(3).prop('options')).to.contain('Jedi')
      expect(wrapper.find(Form).childAt(3).prop('options')).to.not.contain('BeefMaster')
    })

    it('should render ')

  })
})
