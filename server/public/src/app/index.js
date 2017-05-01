import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Bundle from './Bundle'
import Layout from './components/Layout'
import App from 'bundle-loader?lazy!./components/App'

import '../scss/bundle.scss'

let loader = function (loadComp) {
  return () => (<Bundle load={loadComp} />)
}

class Blog extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (<Router>
      <Layout>
        <Route path='/main' component={loader(App)} />
      </Layout>
    </Router>)
  }
}

ReactDOM.render(
  <Blog />, document.getElementById('react-root')
)
