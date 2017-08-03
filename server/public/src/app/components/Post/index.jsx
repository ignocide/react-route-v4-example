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
