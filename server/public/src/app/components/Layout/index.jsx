import React, { Component } from 'react'
import Header from '../Header'
import DIR from 'github-directory'

import './layout.scss'

class Layout extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {
    window.dir = new DIR({
      user: 'ignocide',
      repository: 'blog-posts'
    })
  }

  componentDidMount () {
    console.log('layout did mounted')
  }

  render () {
    return (
      <div className='container root'>
        <div className='header'>
          <Header />
        </div>
        <div className='body'>
          {this.props.children}
        </div>
        <div className='footer' />
      </div>
    )
  }
}

Layout.displayName = 'Layout'
export default Layout
