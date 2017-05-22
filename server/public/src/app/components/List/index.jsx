import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './list.scss'

class List extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {}

  componentDidMount () {
    console.log('layout did mounted')
  }

  render () {
    return (
      <div>
        <div className=''>
          <ul />
        </div>
      </div>
    )
  }
}

class PostItem extends Component {
  constructor (props, context) {
    super(props, context)
  }
}

List.displayName = 'List'
export default List
