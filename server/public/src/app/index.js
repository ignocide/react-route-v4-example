import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'
import Layout from './components/Layout/'
// import Main from 'bundle-loader?lazy!./components/Main/index'
import AboutMe from 'bundle-loader?lazy!./components/AboutMe/index'

import '../scss/bundle.scss'

let loader = function (loadComp) {
  return () => (<Bundle load={loadComp} />)
}

class Blog extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/aboutme' component={loader(AboutMe)} />
            <Route component={loader(AboutMe)}/>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(
  <Blog />, document.getElementById('react-root')
)
