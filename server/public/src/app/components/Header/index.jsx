import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './header.scss'

class Header extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {}

  componentDidMount () {}

  render () {
    return (
      <div className='container'>
        <div className='blog_name'>
          IGNOCIDE
        </div>
        <ul className='menu_list'>
          <li>
            <Link to='/main'> 소개
            </Link>
          </li>
          <li>
            글목록
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
