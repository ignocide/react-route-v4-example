webpackJsonp([2],{256:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(i),s=n(61),c=n(258);n(264);var p=function(t){function e(t,n){o(this,e);var l=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return l.state={list:[],currentPage:1,per_page:5,total_count:null},l}return l(e,t),r(e,[{key:"componentWillMount",value:function(){this.loadList(this.state.currentPage)}},{key:"componentDidMount",value:function(){console.log("layout did mounted")}},{key:"loadList",value:function(t){var e=this;window.dir.search({nextPage:this.state.nextPage,per_page:this.state.per_page}).then(function(n){n.data.items.length>0&&(e.setState({list:n.data.items,total_count:n.data.total_count,currentPage:t}),e.forceUpdate())})}},{key:"listNormalize",value:function(t){return t.map(function(t){var e=t.name.split(".")[0];return(0,c.splitName)(e)})}},{key:"render",value:function(){var t=this.listNormalize(this.state.list);return u.default.createElement("div",{className:"postlist"},u.default.createElement("ul",null,t&&t.map(function(t){return u.default.createElement("li",{key:t.name},u.default.createElement(s.Link,{to:"/post/"+t.name},u.default.createElement("div",null,u.default.createElement("span",{className:"date"},"작성일 : "+t.date)),u.default.createElement("div",{className:"post-title"},t.title)))})))}}]),e}(i.Component);p.displayName="List",e.default=p},258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.splitName=function(t){try{var e=t.split("-"),n=e[0]+"-"+e[1]+"-"+e[2];return{title:e[3],date:n,name:t}}catch(t){return{title:null,date:null}}}},264:function(t,e,n){e=t.exports=n(253)(void 0),e.push([t.i,".postlist {\n  padding: 20px; }\n  .postlist ul li {\n    border-bottom: 1px solid #f2f2f2;\n    padding: 5px 10px; }\n    .postlist ul li:last-child {\n      border: 0; }\n    .postlist ul li a {\n      color: black; }\n    .postlist ul li .post-title {\n      font-size: 30px; }\n    .postlist ul li .date {\n      font-size: 12px;\n      color: #2D2D2D; }\n",""])}});