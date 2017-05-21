import React, { Component } from 'react'
import PostList from '../PostList/index'
import Post from '../Post/index'
import PropTypes from 'prop-types'

class App extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {}

  componentDidMount () {}

  // <div dangerouslySetInnerHTML={markdown } />
  render () {
    return (
      <div className=''>
        <Post/>
        <PostList/>
      </div>
    )
  }ㅑ
}

export default App
