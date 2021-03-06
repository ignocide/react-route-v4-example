import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { splitName } from '../../utils'

class List extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      list: [],
      currentPage: 1,
      per_page: 5,
      total_count: null
    }
  }

  componentWillMount () {
    this.loadList(this.state.currentPage)
  }

  componentDidMount () {
    console.log('layout did mounted')
  }

  loadList (page) {
    var self = this
    window.dir.search({
      nextPage: this.state.nextPage,
      per_page: this.state.per_page
    })
      .then(function (result) {
        if (result.data.items.length > 0) {
          self.setState({
            list: result.data.items,
            total_count: result.data.total_count,
            currentPage: page
          })
          self.forceUpdate()
        }
      })
  }

  listNormalize (arr) {
    var list = arr.map(function (item) {
      var name = item.name.split('.')[0]
      return splitName(name)
    })
    return list
  }

  render () {
    let list = this.listNormalize(this.state.list)
    return (
      <div className='postlistbox-wrapper'>
        <div className='postlistbox'>
          <div className='postlistbox-title'>
            글 목록
          </div>
          <div className='postlistbox-body'>
            <ul>
              {list && list.map(function (item) {
                 return (
                   <li key={item.name}>
                     <Link to={`/post/${item.name}`}>
                     {item.title}<span className={'right date'}>{item.date}</span>
                     </Link>
                   </li>)
               })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

List.displayName = 'List'
export default List
