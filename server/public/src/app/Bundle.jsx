import React, { Component } from 'react'

class Bundle extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      ready: false
    }
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState({
      ready: false,
      comp: null
    })
    props.load((comp) => {
      this.setState({
        // handle both es imports and cjs
        ready: true,
        comp: comp.default
      })
    })
  }

  render () {
    if (!this.state.ready) {
      return <div />
    } else {
      return React.createElement(this.state.comp)
    }
  }
}

export default Bundle
