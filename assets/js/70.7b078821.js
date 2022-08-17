(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{337:function(e,a,s){"use strict";s.r(a);var n=s(13),t=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"闪现-小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闪现-小程序"}},[e._v("#")]),e._v(" 闪现-小程序")]),e._v(" "),a("h2",{attrs:{id:"分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分享"}},[e._v("#")]),e._v(" 分享")]),e._v(" "),a("p",[e._v("参数一")]),e._v(" "),a("ul",[a("li",[e._v("path:"),a("code",[e._v("pages/games/games")])]),e._v(" "),a("li",[e._v("query: "),a("code",[e._v("id=${id}&shareType=&{shareType}&shareId=${shareId}")])]),e._v(" "),a("li",[e._v("scene:"),a("code",[e._v("${id}-${shareType}-${shareId}")]),e._v("（拼接时参数为空用0占位，不能错位）")])]),e._v(" "),a("p",[e._v("参数二")]),e._v(" "),a("ul",[a("li",[e._v("id: 业务id")]),e._v(" "),a("li",[e._v("shareType: b或c")]),e._v(" "),a("li",[e._v("shareId: shopCode或sxId")])]),e._v(" "),a("p",[e._v("app和小程序共用")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("剧本详情\n"),a("code",[e._v("pages/drama_detail/drama_detail")])])]),e._v(" "),a("li",[a("p",[e._v("门店详情\n"),a("code",[e._v("pages/shop/shop_detail/shop_detail")])])]),e._v(" "),a("li",[a("p",[e._v("组局详情\n"),a("code",[e._v("pages/game_detail/game_detail")])])]),e._v(" "),a("li",[a("p",[e._v("门店组局列表\n"),a("code",[e._v("pages/shop_game/shop_game")])])]),e._v(" "),a("li",[a("p",[e._v("优惠券\n"),a("code",[e._v("pages/ticket_detail/ticket_detail")])])])]),e._v(" "),a("p",[e._v("小程序单独")]),e._v(" "),a("ul",[a("li",[e._v("C端首页")]),e._v(" "),a("li",[e._v("剧本排行榜")]),e._v(" "),a("li",[e._v("webview_share")])]),e._v(" "),a("p",[e._v("// 维护全局邀请参数，用户新用户注册")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("onLoad(options){\n    // 记录分享者，用于拉新\n    if (options.shareType && options.shareId) {\n        app.globalData.shareInfo = {\n            type: shareType,\n            id: shareId\n        }\n    };\n}\n")])])]),a("h2",{attrs:{id:"canvas-2d-异步生成小程序分享图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas-2d-异步生成小程序分享图"}},[e._v("#")]),e._v(" canvas 2d 异步生成小程序分享图")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<canvas type=\"2d\" id=\"canvas\"></canvas>\n\n#canvas {\n    position: fixed;\n    top: -200px;\n    left: 0;\n    z-index: 1000;\n    width: 250px;\n    height: 200px;\n    background: rgba(0, 0, 0, .5);\n}\n\nonShareAppMessage() {\n    wx.showLoading()\n    const promise = new Promise(resolve => {\n        wx.createSelectorQuery()\n            .select('#canvas')\n            .fields({\n                node: true,\n                size: true\n            })\n            .exec((res) => {\n                const canvas = res[0].node;\n                const ctx = canvas.getContext('2d');\n                canvas.width = res[0].width * pixelRatio;\n                canvas.height = res[0].height * pixelRatio;\n                ctx.scale(pixelRatio, pixelRatio);\n                ctx.beginPath();\n                ctx.lineWidth = 6;\n                ctx.lineCap = \"round\";\n                ctx.strokeStyle = \"#686868\";\n                ctx.arc(125, 100, 97, 0, 2 * Math.PI);\n                ctx.stroke();\n                wx.canvasToTempFilePath({\n                    canvas: canvas,\n                    fileType: 'jpg',\n                    success(res) {\n                        console.log(res.tempFilePath)\n                        resolve({\n                            imageUrl: res.tempFilePath\n                        })\n                    },\n                    fail(err) {\n                        console.log(err)\n                    }\n                })\n                wx.hideLoading()\n            })\n    })\n    return {\n        title: '自定义转发标题',\n        path: '/page/user?id=123',\n        promise\n    }\n}\n")])])]),a("h2",{attrs:{id:"useextendedlib方式使用weui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useextendedlib方式使用weui"}},[e._v("#")]),e._v(" useExtendedLib方式使用weui")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('app.json\n"useExtendedLib": {\n    "weui": true\n},\n"mp-dialog": "weui-miniprogram/dialog/dialog"\n')])])]),a("h2",{attrs:{id:"rich-text解析h5标签实现高亮查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rich-text解析h5标签实现高亮查询"}},[e._v("#")]),e._v(" rich-text解析h5标签实现高亮查询")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<text decode > {{ str }}</text >\n    <rich-text nodes="{{str}}"></rich-text>\n    <strong style="color:red;">大侠梦</strong>\n    <rrr>哈哈哈哈</rrr> \nstr: \'哈哈哈<span style="color:red;">大侠梦</span>哈哈\',\n')])])]),a("h2",{attrs:{id:"setdata赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setdata赋值"}},[e._v("#")]),e._v(" setData赋值")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\"obj.a\": \"xx\",\n'Array[0].a'：'99',  //这样也可以只不过Array[0]里的0不能是变量不然会报错\n[`Array[${index}].a`]:'99' //es6语法拼接这样index可以为动态的值\n")])])]),a("h4",{attrs:{id:"scroll-view-里使用-border-radius-失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-view-里使用-border-radius-失效"}},[e._v("#")]),e._v(" scroll-view 里使用 border-radius 失效")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("transform: translate3d(0, 0, 0);\n或\ntransform: translateX(0);\n")])])]),a("h2",{attrs:{id:"oss静态文件夹路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oss静态文件夹路径"}},[e._v("#")]),e._v(" OSS静态文件夹路径")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://oss-aisx-file-service-01.oss-cn-beijing.aliyuncs.com/prd/miniapp/\n")])])]),a("h2",{attrs:{id:"生成小程序码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成小程序码"}},[e._v("#")]),e._v(" 生成小程序码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 获取AccessToken\n    getAccessToken() {\n        const appid = 'wxc93f24ceb238cf5d';\n        const secret = '5bff5773f8f758c48aac21884b8ca67c';\n        wx.request({\n            url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,\n            method: 'get',\n            success: (res) => {\n                console.log(res)\n                this.getBuffer(res.data.access_token)\n            },\n            fail: function (res) {\n                console.log(res)\n            }\n        })\n    },\n    // 获取小程序码Buffer对象\n    getBuffer(access_token) {\n        let that = this;\n        let data = {\n            // page: 'pages/ticket_detail/ticket_detail',\n            scene: '666',\n            env_version: 'trial',\n            // is_hyaline: true,\n            auto_color: true,\n            line_color: {\n                \"r\": 145,\n                \"g\": 103,\n                \"b\": 173\n            }\n            // env_version: 'develop',\n        }\n        wx.request({\n            url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + access_token,\n            method: 'POST',\n            data: data,\n            // dataType: 'json',\n            responseType: 'arraybuffer', //将返回数据 按文本解析修改为arraybuffer\n            success: function (res) {\n                console.log(res)\n                // const arrayBuffer = new Uint8Array([11, 22, 33])\n                // const base64 = wx.arrayBufferToBase64(res.arrayBuffer)\n\n                // 利用writeFile bese64图片存本地文件使用\n                const fs = wx.getFileSystemManager();\n                const filePath = `${wx.env.USER_DATA_PATH}/code.png`;\n\n                console.log(filePath)\n                fs.writeFile({\n                    filePath: filePath,\n                    data: res.data,\n                    encoding: 'base64',\n                    success: (res) => {\n                        console.log(res)\n                        that.setData({\n                            img: filePath\n                        })\n                    },\n                    fail(res) {\n                        console.error(res)\n                    }\n                })\n            }\n        })\n    },\n")])])]),a("h2",{attrs:{id:"本地缓存storage说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存storage说明"}},[e._v("#")]),e._v(" 本地缓存Storage说明")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("用户信息， token过期清空\nuserInfo: {\n    token: '',\n    refresToken: '',\n    nick: '',\n    avatar: '',\n    userId: '',\n    tel: '',\n    sxId: '',\n    isV: '',\n}\n\n最后一次进B端的店铺信息， 切换手机号冲掉\nshopInfo: {\n    userId: '',\n    shopId: '',\n    shopCode: '',\n}\n\n最后一次添加剧本的价格，与用户无关\nlastAllPrice:'' \n")])])]),a("p",[e._v("requestTask.abort()外部调用无效")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const app = getApp()\nPage({\n  data: {\n  },\n  onLoad: function () {\n    const requestTask = wx.request({\n      url: 'test.php', //仅为示例，并非真实的接口地址\n      data: {\n        x: '' ,\n        y: ''\n      },\n      header: {\n        'content-type': 'application/json'\n      },\n      success (res) {\n        console.log(res.data)\n      }\n    })\n    requestTask.abort() // 取消请求任务\n  },\n})\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);