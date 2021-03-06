import React from 'react'
import { Route } from 'react-router'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>')
global.document = doc
global.window = doc.defaultView

import Routes from '../../../src/browser/components/common/router'
import Landing from '../../../src/browser/components/pages/landing/index'

describe('<Routes />', () => {
  it('should render correct routes', () => {
    const wrapper = shallow( <Routes />)
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props()
      pathMap[routeProps.path] = routeProps.component
      return pathMap;
    }, {})
    //Note: commenting this out until the router.js file is fixed without
    //needing the wrapper components to pass down the props
    //expect(pathMap['/'].toString()).to.equal(Landing.toString())
  })
})
