import React, { Component } from 'react'
import Header from '../Header/index'
import DIR from 'github-directory'

import './layout.scss'

class Layout extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {
    window.dir = new DIR({
      user: ''/* github id */,
      repository: ''/* repository */
    })
  }

  componentDidMount () {
    console.log('layout did mounted')
  }

  render () {
    return (
      <div>
        <div className='hat'>
          <div className='container'>
            <div className='blog_name'>
              IGNOCDE
            </div>
          </div>
        </div>
        <div className='container root'>
          <div className='header'>
            <Header />
          </div>
          <div className='body'>
            {this.props.children}
          </div>
          <div className='footer' />
        </div>
      </div>

    )
  }
}

Layout.displayName = 'Layout'
export default Layout
