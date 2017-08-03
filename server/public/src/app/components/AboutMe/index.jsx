import React, { Component } from 'react'
import Markdown from '../Markdown/index'

class App extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {}

  componentDidMount () {}

  getHtml (markdown) {
    return {
      __html: marked(markdown || '')
    }
  }
  render () {
    return (
      <div className='post-wrapper'>
        <Markdown markdown={aboutme} />
      </div>
    )
  }
}

export default App
