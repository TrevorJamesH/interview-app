import React from 'react'
import { expect } from 'chai'
import { shallow, mount, simulate } from 'enzyme'
import { jsdom } from 'jsdom'
import sinon from 'sinon'

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

    it('should render SelectTag in the right order with correct props', () => {
      const onChange = sinon.spy()
      const wrapper = mount(<Form inputModules={inputModules} />)
      expect(wrapper.find(Form).childAt(1).prop('prompt')).to.equal('What Is The Answer?')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.contain('High')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.contain('Low')
      expect(wrapper.find(Form).childAt(1).prop('options')).to.not.contain('Mountain')
      expect(wrapper.find(Form).childAt(1).prop('isOptionRequired')).to.equal(false)
      expect(wrapper.find(Form).childAt(1).prop('isOptionRequired')).to.be.false
      wrapper.find(FormSelect).simulate('change', {target: {value: 'Portside'}})
      console.log('Before asynch')
      setTimeout( () => {
        console.log('I finally got it:', wrapper.state())
      }, 5)
      console.log('After asynch')
      
      expect(wrapper.find(FormSelect).prop('options')).to.contain('Layside')
      // expect(wrapper.find(Form).state())
    })

    it('should render a button', () => {
      const wrapper = shallow(<GameOptions difficulty={difficulty} topics ={topics}
                            gameModes={gameModes} parse={{}} />)
      expect(wrapper.find('button.uk-button').exists()).to.be.true

    })
  })
})
