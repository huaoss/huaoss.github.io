(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{352:function(n,e,t){"use strict";t.r(e);var a=t(13),s=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[n._v("#")]),n._v(" vue")]),n._v(" "),e("h3",{attrs:{id:"vue-cli3的eslint配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3的eslint配置"}},[n._v("#")]),n._v(" vue-cli3的eslint配置")]),n._v(" "),e("ol",[e("li",[n._v("关闭eslint")])]),n._v(" "),e("p",[n._v("直接注释掉package.json文件中eslint的配置就可以了（以下是vue-cli的默认配置）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('  "eslintConfig": {\n     "root": true,////此项是用来告诉eslint找当前配置文件不能往父级查找\n     "env": {\n       "node": true//此项指定环境的全局变量，下面的配置指定为node环境\n     },\n     "extends": [// 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错\n       "plugin:vue/essential",\n       "@vue/standard"\n     ],\n     "rules": {//规则配置写在这里\n       "indent": [1, 4]\n     },\n     "parserOptions": {\n       "parser": "babel-eslint"//此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析\n     }\n   },\n')])])]),e("p",[n._v("或者vue.config.js中将以下三项设置为false")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    devServer: {\n        overlay: {\n            warnings: false,\n            errors: false\n        },\n        lintOnSave: false\n    }\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("修改eslint的语法检测，文件为根目录下的 package.json文件（规则写在rules内）")])]),n._v(" "),e("p",[n._v("格式：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('rules: {\n    "规则名": [规则值, 规则配置]\n}\n')])])]),e("p",[n._v("规则值：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('"off"或者0    //关闭规则关闭\n"warn"或者1    //在打开的规则作为警告（不影响退出代码）\n"error"或者2    //把规则作为一个错误（退出代码触发时为1）\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[n._v("eslint 规则配置参数")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('"no-alert": 0,//禁止使用alert confirm prompt\n"no-array-constructor": 2,//禁止使用数组构造器\n"no-bitwise": 0,//禁止使用按位运算符\n"no-caller": 1,//禁止使用arguments.caller或arguments.callee\n"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名\n"no-class-assign": 2,//禁止给类赋值\n"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句\n"no-console": 2,//禁止使用console\n"no-const-assign": 2,//禁止修改const声明的变量\n"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)\n"no-continue": 0,//禁止使用continue\n"no-control-regex": 2,//禁止在正则表达式中使用控制字符\n"no-debugger": 2,//禁止使用debugger\n"no-delete-var": 2,//不能对var声明的变量使用delete操作符\n"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/\n"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}\n"no-dupe-args": 2,//函数参数不能重复\n"no-duplicate-case": 2,//switch中的case标签不能重复\n"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句\n"no-empty": 2,//块语句中的内容不能为空\n"no-empty-character-class": 2,//正则表达式中的[]内容不能为空\n"no-empty-label": 2,//禁止使用空label\n"no-eq-null": 2,//禁止对null使用==或!=运算符\n"no-eval": 1,//禁止使用eval\n"no-ex-assign": 2,//禁止给catch语句中的异常参数赋值\n"no-extend-native": 2,//禁止扩展native对象\n"no-extra-bind": 2,//禁止不必要的函数绑定\n"no-extra-boolean-cast": 2,//禁止不必要的bool转换\n"no-extra-parens": 2,//禁止非必要的括号\n"no-extra-semi": 2,//禁止多余的冒号\n"no-fallthrough": 1,//禁止switch穿透\n"no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.\n"no-func-assign": 2,//禁止重复的函数声明\n"no-implicit-coercion": 1,//禁止隐式转换\n"no-implied-eval": 2,//禁止使用隐式eval\n"no-inline-comments": 0,//禁止行内备注\n"no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）\n"no-invalid-regexp": 2,//禁止无效的正则表达式\n"no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量\n"no-irregular-whitespace": 2,//不能有不规则的空格\n"no-iterator": 2,//禁止使用__iterator__ 属性\n"no-label-var": 2,//label名不能与var声明的变量名相同\n"no-labels": 2,//禁止标签声明\n"no-lone-blocks": 2,//禁止不必要的嵌套块\n"no-lonely-if": 2,//禁止else语句内只有if语句\n"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）\n"no-mixed-requires": [0, false],//声明时不能混用声明类型\n"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格\n"linebreak-style": [0, "windows"],//换行风格\n"no-multi-spaces": 1,//不能用多余的空格\n"no-multi-str": 2,//字符串不能用\\换行\n"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行\n"no-native-reassign": 2,//不能重写native对象\n"no-negated-in-lhs": 2,//in 操作符的左边不能有!\n"no-nested-ternary": 0,//禁止使用嵌套的三目运算\n"no-new": 1,//禁止在使用new构造一个实例后不赋值\n"no-new-func": 1,//禁止使用new Function\n"no-new-object": 2,//禁止使用new Object()\n"no-new-require": 2,//禁止使用new require\n"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number\n"no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()\n"no-octal": 2,//禁止使用八进制数字\n"no-octal-escape": 2,//禁止使用八进制转义序列\n"no-param-reassign": 2,//禁止给参数重新赋值\n"no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接\n"no-plusplus": 0,//禁止使用++，--\n"no-process-env": 0,//禁止使用process.env\n"no-process-exit": 0,//禁止使用process.exit()\n"no-proto": 2,//禁止使用__proto__属性\n"no-redeclare": 2,//禁止重复声明变量\n"no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/\n"no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错\n"no-return-assign": 1,//return 语句中不能有赋值表达式\n"no-script-url": 0,//禁止使用javascript:void(0)\n"no-self-compare": 2,//不能比较自身\n"no-sequences": 0,//禁止使用逗号运算符\n"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名\n"no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用\n"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格\n"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]\n"no-sync": 0,//nodejs 禁止同步方法\n"no-ternary": 0,//禁止使用三目运算符\n"no-trailing-spaces": 1,//一行结束后面不要有空格\n"no-this-before-super": 0,//在调用super()之前不能使用this或super\n"no-throw-literal": 2,//禁止抛出字面量错误 throw "error";\n"no-undef": 1,//不能有未定义的变量\n"no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined\n"no-undefined": 2,//不能使用undefined\n"no-unexpected-multiline": 2,//避免多行表达式\n"no-underscore-dangle": 1,//标识符不能以_开头或结尾\n"no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;\n"no-unreachable": 2,//不能有无法执行的代码\n"no-unused-expressions": 2,//禁止无用的表达式\n"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数\n"no-use-before-define": 2,//未定义前不能使用\n"no-useless-call": 2,//禁止不必要的call和apply\n"no-void": 2,//禁用void操作符\n"no-var": 0,//禁用var，用let和const代替\n"no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注\n"no-with": 2,//禁用with\n\n"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格\n"arrow-parens": 0,//箭头函数用小括号括起来\n"arrow-spacing": 0,//=>的前/后括号\n"accessor-pairs": 0,//在对象中使用getter/setter\n"block-scoped-var": 0,//块语句中使用var\n"brace-style": [1, "1tbs"],//大括号风格\n"callback-return": 1,//避免多次调用回调什么的\n"camelcase": 2,//强制驼峰法命名\n"comma-dangle": [2, "never"],//对象字面量项尾不能有逗号\n"comma-spacing": 0,//逗号前后的空格\n"comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾\n"complexity": [0, 11],//循环复杂度\n"computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的\n"consistent-return": 0,//return 后面是否允许省略\n"consistent-this": [2, "that"],//this别名\n"constructor-super": 0,//非派生类不能调用super，派生类必须调用super\n"curly": [2, "all"],//必须使用 if(){} 中的{}\n"default-case": 2,//switch语句最后必须有default\n"dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾\n"dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号\n"eol-last": 0,//文件以单一的换行符结束\n"eqeqeq": 2,//必须使用全等\n"func-names": 0,//函数表达式必须有名字\n"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式\n"generator-star-spacing": 0,//生成器函数*的前后空格\n"guard-for-in": 0,//for in循环要用if语句过滤\n"handle-callback-err": 0,//nodejs 处理错误\n"id-length": 0,//变量名长度\n"indent": [2, 4],//缩进风格\n"init-declarations": 0,//声明时必须赋初值\n"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格\n"lines-around-comment": 0,//行前/行后备注\n"max-depth": [0, 4],//嵌套块深度\n"max-len": [0, 80, 4],//字符串最大长度\n"max-nested-callbacks": [0, 2],//回调嵌套深度\n"max-params": [0, 3],//函数最多只能有3个参数\n"max-statements": [0, 10],//函数内最多有几个声明\n"new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用\n"new-parens": 2,//new时必须加小括号\n"newline-after-var": 2,//变量声明后是否需要空一行\n"object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格\n"object-shorthand": 0,//强制对象字面量缩写语法\n"one-var": 1,//连续声明\n"operator-assignment": [0, "always"],//赋值运算符 += -=什么的\n"operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首\n"padded-blocks": 0,//块语句内行首行尾是否要空行\n"prefer-const": 0,//首选const\n"prefer-spread": 0,//首选展开运算\n"prefer-reflect": 0,//首选Reflect的方法\n"quotes": [1, "single"],//引号类型 `` "" \'\'\n"quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号\n"radix": 2,//parseInt必须指定第二个参数\n"id-match": 0,//命名检测\n"require-yield": 0,//生成器函数必须有yield\n"semi": [2, "always"],//语句强制分号结尾\n"semi-spacing": [0, {"before": false, "after": true}],//分号前后空格\n"sort-vars": 0,//变量声明时排序\n"space-after-keywords": [0, "always"],//关键字后面是否要空一格\n"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格\n"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格\n"space-in-parens": [0, "never"],//小括号里面要不要有空格\n"space-infix-ops": 0,//中缀操作符周围要不要有空格\n"space-return-throw-case": 2,//return throw case后面要不要加空格\n"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格\n"spaced-comment": 0,//注释风格要不要有空格什么的\n"strict": 2,//使用严格模式\n"use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()\n"valid-jsdoc": 0,//jsdoc规则\n"valid-typeof": 2,//必须使用合法的typeof的值\n"vars-on-top": 2,//var必须放在作用域顶部\n"wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格\n"wrap-regex": 0,//正则表达式字面量用小括号包起来\n"yoda": [2, "never"]//禁止尤达条件\n')])])]),e("h3",{attrs:{id:"解决-bus-监听器-on-多次执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-bus-监听器-on-多次执行"}},[n._v("#")]),n._v(" 解决 Bus 监听器 $on 多次执行")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("方法一：\nbeforeDestroy(){\n    this.$bus.$off('method')\n}\n解析：组件销毁时 关闭 监听器\n\n\n方法二：\n缺点：存在 组件 被多个调用，销毁单个 组件时，其他调用者无法触发监听方法\n\nthis.$bus.$once('method')\n\n解析：多次触发相同监听方法，只执行一次\n\n\n方法三：\ncreate(){\n    this.$bus.$off('method')\n}\n解析：及时监听 及时关闭 防止多次执行\n")])])]),e("h3",{attrs:{id:"bus的传参-赋值成功后没有引起页面的同步更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bus的传参-赋值成功后没有引起页面的同步更新"}},[n._v("#")]),n._v(" $bus的传参,赋值成功后没有引起页面的同步更新")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("延时emit\nsetTimeout(()=>{\n    bus.$emit('method',data)\n},100)\n")])])]),e("h3",{attrs:{id:"vue-router的hash-地址栏中带-号-模式与history模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router的hash-地址栏中带-号-模式与history模式"}},[n._v("#")]),n._v(" vue-router的hash（地址栏中带#号）模式与History模式")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("使用hash模式时，URL的地址请求中会带有#号，此模式背后的原理是onHashChange事件，可以在window对象中上监听该事件，同时hash发生变化的URl会被记录下来，从而使浏览器的前进后退都可以使用，这样页面的状态和URL形成了关联，又被称为前端路由，成为单页面应用的标配。")])]),n._v(" "),e("li",[e("p",[n._v("History路由可以分为两大部分（切换和修改），通过HistoryAPI可以丢掉丑陋的【#】号，但是有个问题是不怕前进不怕后退就怕刷新，在hash模式中前端修改的是#中信息，与接口请求地址是无直接关联的，因此在后端毫无准备的情况下，刷新等操作不会出现问题，但是History模式下，URL地址就是接口请求地址，因此在后端毫无准备的情况下进行请求可能会直接出现404页面")])])]),n._v(" "),e("h3",{attrs:{id:"在过滤器filter中调用methods中的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在过滤器filter中调用methods中的方法"}},[n._v("#")]),n._v(" 在过滤器filter中调用methods中的方法")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("定义一个变量")])]),n._v(" "),e("li",[e("p",[n._v("在beforeCreate生命周期将this赋值给that，通过that获得")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var vm = new Vue({\n    el: '#app',\n    data: {\n\n    },\n    beforeCreate: function () {\n        that = this\n    },\n    methods:{\n      fom(fmt){\n        ...\n      }\n    },\n    ....,\n    filters: {\n            dateformate: function (val) {\n                return that.fom(\"yyyy-MM-dd\")\n        }\n    }\n})\n")])])]),e("h3",{attrs:{id:"vue2-0的八种常用传值方式、父传子、子传父、非父子组件传值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0的八种常用传值方式、父传子、子传父、非父子组件传值"}},[n._v("#")]),n._v(" Vue2.0的八种常用传值方式、父传子、子传父、非父子组件传值")]),n._v(" "),e("ol",[e("li",[n._v("父组件向子组件进行传值props")]),n._v(" "),e("li",[n._v("子组件向父组件传值$emit,父组件通过子组件的ref属性获取值")]),n._v(" "),e("li",[n._v("事件总线 $emit　/ $on")]),n._v(" "),e("li",[n._v("利用vuex")]),n._v(" "),e("li",[n._v("Vuex与localStorage")]),n._v(" "),e("li",[n._v("$attrs　/ $listeners")]),n._v(" "),e("li",[n._v("provide/inject")]),n._v(" "),e("li",[n._v("$parent / $children　＆ ref")])]),n._v(" "),e("h3",{attrs:{id:"methods-watch-computed的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-watch-computed的"}},[n._v("#")]),n._v(" methods,watch,computed的")]),n._v(" "),e("ul",[e("li",[n._v("computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；")]),n._v(" "),e("li",[n._v("methods 方法表示一个具体的操作，主要书写业务逻辑；")]),n._v(" "),e("li",[n._v("watch 一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是 computed 和 methods 的结合体；")])]),n._v(" "),e("ol",[e("li",[n._v("Vue的watch属性可以用来监听data属性中数据的变化")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title></title>\n    <script src="lib/vue.min.js"><\/script>\n    <script src="lib/vue-router-3.0.1.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <input type="text" v-model="firstname" />\n    </div>\n    <script type="text/javascript">\n      var vm = new Vue({\n        el:"#app",\n        data:{\n          firstname:"",\n          lastname:""\n        },\n        methods:{},\n        watch:{\n          firstname:function(){\n            console.log(this.firstname)\n          }\n        }\n      })\n    <\/script>\n  </body>\n</html>\n')])])]),e("p",[n._v("可以从上述代码中实践得知，输入框内的值变化多少次，控制台就会打印多少次")]),n._v(" "),e("p",[n._v("同时还可以直接在监听的function中使用参数来获取新值与旧值")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("watch:{\n          firstname:function(newValue,OldValue){\n            console.log(newValue);\n            console.log(OldValue);\n          }\n        }\n")])])]),e("p",[n._v("其中第一个参数是新值，第二个参数是旧值")]),n._v(" "),e("p",[n._v("同时Watch还可以被用来监听路由router的变化，只是这里的监听的元素是固定的")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title></title>\n    <script src="lib/vue.min.js"><\/script>\n    <script src="lib/vue-router-3.0.1.js"><\/script>\n    <style type="text/css">\n    </style>\n  </head>\n  <body>\n    \n    <div id="app">\n      \x3c!--\n        由于Vue-router的hash匹配原则所以我们需要在原定义的路径上加一个#号\n      --\x3e\n\x3c!--      <a href="#/login" rel="external nofollow" >登录</a>\n      <a href="#/register" rel="external nofollow" >注册</a>--\x3e\n      <router-link to="/login" tag="span">登录</router-link>\n      <router-link to="/register">注册</router-link>\n      <router-view></router-view>\n    </div>\n  </body>\n  <script>\n    var login={\n      template:\'<h1>登录组件</h1>\'\n    }\n    var register={\n      template:\'<h1>注册组件</h1>\'\n    }\n    var routerObj = new VueRouter({\n      routes:[\n      //此处的component只能使用组件对象，而不能使用注册的模板的名称\n        {path:"/login",component:login},\n        {path:"/register",component:register}\n      ]\n    })\n    var vm = new Vue({\n      el:\'#app\',\n      data:{\n      },\n      methods:{\n        \n      },\n      router:routerObj,//将路由规则对象注册到VM实例上\n      watch:{\n        \'$route.path\':function(newValue,OldValue){\n            console.log(newValue);\n            console.log(OldValue);\n        }\n      }\n    })\n  <\/script>\n</html>\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("computed属性的作用与watch类似，也可以监听属性的变化")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title></title>\n    <script src="lib/vue.min.js"><\/script>\n    <script src="lib/vue-router-3.0.1.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <input type="text" v-model="firstname" />\n      <input type="text" v-model="lastname" />\n      <input type="text" v-model="fullname" />\n    </div>\n    <script type="text/javascript">\n      var vm = new Vue({\n        el:"#app",\n        data:{\n          firstname:"",\n          lastname:""\n        },\n        methods:{},\n/*       watch:{\n          firstname:function(newValue,OldValue){\n            console.log(newValue);\n            console.log(OldValue);\n          }\n        }*/\n        computed:{\n          fullname:function(){\n            return this.firstname +"-"+this.lastname\n          }\n        }\n      })\n    <\/script>\n  </body>\n</html>\n')])])]),e("p",[n._v("只是他会根据他依赖的属性，生成一个属性，让vm对象可以使用这个属性")])])}),[],!1,null,null,null);e.default=s.exports}}]);