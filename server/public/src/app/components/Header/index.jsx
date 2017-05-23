import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <ul className='menu_list'>
          <li>
            <Link to='/list'> 글목록
            </Link>
          </li>
          <li>
            <Link to='/aboutme'> 소개
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
