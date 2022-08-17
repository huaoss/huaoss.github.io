(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{347:function(t,e,a){"use strict";a.r(e);var n=a(13),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue2-0-switch-三目运算-实现原生tabbar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0-switch-三目运算-实现原生tabbar"}},[t._v("#")]),t._v(" vue2.0+switch+三目运算，实现原生tabbar")]),t._v(" "),e("ol",[e("li",[t._v("路由搭建")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('export default new Router({\n  routes: [\n    {\n      path: "/Home",\n      component: Home,\n    },\n    {\n      path: "/recommend",\n      component: Recommend\n    },\n    {\n      path: "/search",\n      component: Search\n    },\n    {\n      path: "/chat",\n      component: Chat\n    },\n    {\n      path: "/me",\n      component: Me\n    },\n　　{\n     path: \'/\',<br>     redirect: \'/home\'<br>   },\n  ]\n});\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("页面模板搭建，src和on都要动态绑定，使用三目运算判断每次点击切换")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div class="bottom-tab">\n    <div class="tab-item" @click="switchTo(\'/home\')">\n            <img :src="\'/home\' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">\n            <span :class="{on: \'/home\' === $route.path}">首页</span>\n        </div>\n    <div class="tab-item" @click="switchTo(\'/recommend\')">\n            <img :src="\'/recommend\' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">\n            <span :class="{on: \'/recommend\' === $route.path}">推荐</span>\n        </div>\n    <div class="tab-item" @click="switchTo(\'/search\')">\n            <img :src="\'/search\' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索">\n            <span :class="{on: \'/search\' === $route.path}">搜索</span>\n        </div>\n    <div class="tab-item" @click="switchTo(\'/chat\')">\n            <img :src="\'/chat\' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="聊天">\n            <span :class="{on: \'/chat\' === $route.path}">聊天</span>\n        </div>\n    <div class="tab-item" @click="switchTo(\'/me\')">\n            <img :src="\'/me\' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">\n            <span :class="{on: \'/me\' === $route.path}">我的</span>\n        </div>\n  </div>\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("在data里定于tabBarImgArr数组用于存放图片")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("tabBarImgArr:[   //图片切换\n    {normal: require('./../../../static/img/icon_home.png'), selected: require('./../../../static/img/icon_home_selected.png')},\n    {normal: require('./../../../static/img/icon_intro.png'), selected: require('./../../../static/img/icon_intro_selected.png')},\n    {normal: require('./../../../static/img/icon_search.png'), selected: require('./../../../static/img/icon_search_selected.png')},\n    {normal: require('./../../../static/img/icon_chat.png'), selected: require('./../../../static/img/icon_chat_selected.png')},\n    {normal: require('./../../../static/img/icon_mine.png'), selected: require('./../../../static/img/icon_mine_selected.png')}\n  ]\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("在methods里实现switchTo切换")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("methods:{\n    switchTo(path){\n      // console.log(this.$router)\n      this.$router.replace(path)\n    }\n  }\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("css样式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".bottom-tab\n    width 100%\n    height 50px\n    background-color #fff\n    position fixed\n    left 0px\n    bottom 0px\n    display flex\n    z-index 999\n    .tab-item\n      display flex\n      flex 1\n      flex-direction column\n      align-items center\n      justify-content center\n      font-size 14px\n      color #666\n      img\n         width 35%\n         margin-bottom 2px\n      .on\n        color red\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);