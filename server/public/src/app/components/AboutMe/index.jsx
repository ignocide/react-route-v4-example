import React, { Component } from 'react'
import Markdown from '../Markdown'
const aboutme =
`# 소개
___

### 프로필 ###
  
 * 아이디 : ignocide  
 * email: ignocide@gmail.com  
 * 하는일 : node.js위주의 웹개발자  
 * 이전 블로그 : http://mythinkg.blogspot.kr/

### 블로그 소개 ###
___
~~개발자라면 개발블로그 하나쯤은..~~  
개발일을 하면서 정리가 안되는 것들, 실무에서 문제 해결만 하고 지나가기만 한것들으 정리하기 위한 블로그
최대한 내 손을 이용하여 만든 블로그 소유가하기 위한 블로그입니다.

React를 이용해 만들어 졌으며, github를 이용하고 지킬을 사용하지 않고 ~~(편하지만 모두가 사용하니까)~~ 무서버 웹사이트 구축하려합니다.
  

### 블로그 주제 ###
___
소개에 적은 듯이 실무에 치이면서 미처 정리 하지못한 것들을 입니다. 무언가를 소개하고 공유하는 목적은 부가적으로 이루어질 듯 합니다.`

class App extends Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {}

  componentDidMount () {}

  getHtml (markdown) {
    return {
      __html: marked(markdown || '')
    }
  }
  render () {
    return (
      <div className='post-wrapper'>
        <Markdown markdown={aboutme} />
      </div>
    )
  }
}

export default App
