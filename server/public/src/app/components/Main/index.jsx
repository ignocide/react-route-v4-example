import React, { Component } from 'react'
import PostList from '../PostListBox/index'
import Post from '../Post/index'
import PropTypes from 'prop-types'

class App extends Component {
  constructor (props, context) {
    super(props, context)
    console.log(props)
  }

  componentWillMount () {}

  componentDidMount () {}

  // <div dangerouslySetInnerHTML={markdown } />
  render () {
    return (
      <div className=''>
        <Post />
        <PostList />
      </div>
    )
  }
}

export default App
