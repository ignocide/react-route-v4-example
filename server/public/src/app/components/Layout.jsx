import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Layout extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {
  }

  componentDidMount () {
    console.log('layout did mounted')
  }

  render () {
    return (
      <div>
        <div className='header' />
        <div className='body' >
          { this.props.children }
        </div>
        <div className='footer' />
      </div>
    )
  }
}

Layout.displayName = 'Layout'
export default Layout
