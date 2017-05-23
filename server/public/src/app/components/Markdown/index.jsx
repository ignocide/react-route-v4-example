import React, { Component } from 'react'
import marked from 'marked'

class App extends Component {
  constructor (props, context) {
    super(props, context)
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })
  }

  componentWillMount () {}

  componentDidMount () {}

  getHtml (markdown) {
    return {
      __html: marked(markdown || '')
    }
  }
  render () {
    const html = this.getHtml(this.props.markdown)
    return (
      <div className='markdown' dangerouslySetInnerHTML={html}>
      </div>
    )
  }
}

export default App
