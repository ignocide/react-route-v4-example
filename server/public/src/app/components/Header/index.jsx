import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './header.scss'

class Header extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='container'>
        <div className='blog_name'>IGNOCIDE'S BLOG</div>
        <ul className='menu_list' >
          <li><Link to='/main'>who am I?</Link></li>
          <li>list-item</li>
        </ul>
      </div>
    )
  }
}

export default Header
