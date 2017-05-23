import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import Markdown from '../Markdown/index'

class List extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      content: null
    }
  }

  componentWillMount () {
    var self = this
    var title = this.props.match.params.title
    axios.get(`https://raw.githubusercontent.com/ignocide/blog-posts/master/${title}.md`)
      .then(function (result) {
        self.setState({
          content: result.data
        })
        self.forceUpdate()
      })
      .catch(function (err) {
        self.props.history.replace('/')
      })
  }

  componentDidMount () {}

  render () {
    return (
      <div className='post-wrapper'>
        <Markdown markdown={this.state.content} />
      </div>
    )
  }
}

List.displayName = 'List'

const withList = withRouter(List)

export default withList
