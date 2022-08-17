(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{283:function(a,t,r){"use strict";r.r(t);var n=r(13),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"formdata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formdata"}},[a._v("#")]),a._v(" FormData")]),a._v(" "),t("h2",{attrs:{id:"引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[a._v("#")]),a._v(" 引言")]),a._v(" "),t("p",[a._v("在后端与前端约定好application/json格式传递数据时，因为后台是go强类型语言，在定义api接口时，某些字段要求是整型类型，但是对于前端来说输入框或者从url中的search取到的参数都是字符串，不得不进行前端类型转换。")]),a._v(" "),t("p",[a._v("咋一看，对于接口参数比较少的api前端转换没有什么，但是对于一般的交互复杂，参数比较多的接口，要对大部分参数进行类型转换就是一种吃力不讨好的活。好在后端同学还支持另一种的前后端数据交互格式，即multipart/form-data。通过该格式后端取到前端传递的数据就是数字了(即使前端传递的是字符串)，而不像json格式获取的是字符串。这样，就不需要额外对前端获取的数据进行特殊转换了。下面就来说说form-data。")]),a._v(" "),t("h2",{attrs:{id:"form-data请求格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-data请求格式"}},[a._v("#")]),a._v(" form-data请求格式")]),a._v(" "),t("p",[a._v("multipart/form-data是基于post方法来传递数据的，并且其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式。另外，该格式会生成一个boundary字符串来分割请求头与请求体的，具体的是以一个boundary=${boundary}来进行分割，伪码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("...\nContent-Type: multipart/form-data; boundary=${boundary} \n \n--${boundary}\n...\n...\n \n--${boundary}--\n")])])]),t("p",[a._v("上面boundary=${boundary}之后就是请求体内容了，请求体内容各字段之间以--${boundary}来进行分割,以--${boundary}--来结束请求体内容。")]),a._v(" "),t("h2",{attrs:{id:"具体可以参考下面例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体可以参考下面例子"}},[a._v("#")]),a._v(" 具体可以参考下面例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('POST http://www.example.com HTTP/1.1\nContent-Type:multipart/form-data; boundary=----WebKitFormBoundaryyb1zYhTI38xpQxBK\n \n------WebKitFormBoundaryyb1zYhTI38xpQxBK\nContent-Disposition: form-data; name="city_id"\n \n1\n \n------WebKitFormBoundaryyb1zYhTI38xpQxBK\nContent-Disposition: form-data; name="company_id"\n \n2\n------WebKitFormBoundaryyb1zYhTI38xpQxBK\nContent-Disposition: form-data; name="file"; filename="chrome.png"\nContent-Type: image/png\n \nPNG ... content of chrome.png ...\n------WebKitFormBoundaryyb1zYhTI38xpQxBK--\n')])])]),t("p",[a._v("form-data格式一般是用来进行文件上传的。使用表单上传文件时，必须让表单的 enctype 等于 multipart/form-data，因为该值默认值为application/x-www-form-urlencoded。")]),a._v(" "),t("h2",{attrs:{id:"formdata对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formdata对象"}},[a._v("#")]),a._v(" FormData对象")]),a._v(" "),t("p",[a._v('XMLHttpRequest Level 2添加了一个新的接口FormData。利用FormData对象，我们可以通过JavaScript用一些键值对来模拟一系列表单控件，我们还可以使用XMLHttpRequest的send()方法来异步的提交这个"表单"')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var formData = new FormData();\nformData.append("username", "Groucho");\nformData.append("accountnum", 123456); \nfetch(\'/users\', {\n method: \'POST\',\n body: formData\n})\n')])])]),t("p",[a._v("上面创建了一个FormData对象，通过fetch进行ajax请求时，会自动为其将其转为form-data格式，无需手动添加格式。")]),a._v(" "),t("h2",{attrs:{id:"对象转formdata对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象转formdata对象"}},[a._v("#")]),a._v(" 对象转FormData对象")]),a._v(" "),t("p",[a._v("对于FormDat对象，像上面那种形式可以直接添加参数比较方便，但是对于对象或者嵌套对象：")]),a._v(" "),t("p",[a._v("let userObj = {userName: 'xxx', age: '21'} formData.append('user', userObj)")]),a._v(" "),t("p",[a._v("上面形式添加formData参数user，并不会获取到其真正的内容，而是返回userObj的Object.prototype.toString.call(userObj)的值作为user字段的值。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('------WebKitFormBoundaryyb1zYhTI38xpQxBK\nContent-Disposition: form-data; name="user"\n \n[object Object]\n')])])]),t("p",[a._v("遗憾的是，FormData对象没有像JSON.stringify那样的方法能批量将对象形式转换为对应的形式，formData而言是将对象的key转换为正确formData请求参数字段名，例如如下对象：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var obj = {\n  a: '2', \n  b: {c: 'test'}, \n  c: [ \n    {id: 1, name: 'xx'}, \n    {id:2 ,name: 'yy', info: {d: 4} }\n  ]\n}\n")])])]),t("p",[a._v("这样转换为FormData对象时，其对应的key应该是下面这样的：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("a: 2\nb[c]: test\nc[][id]: 1\nc[][name]: xx\nc[][id]: 2\nc[][name]: yy\nc[][info][d]:4\n")])])]),t("p",[a._v("这样，就需要我们自己手动来实现一个转换数据函数，具体代码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function objectToFormData (obj, form, namespace) {\n const fd = form || new FormData();\n let formKey;\n  \n for(var property in obj) {\n   if(obj.hasOwnProperty(property)) {\n    let key = Array.isArray(obj) ? '[]' : `[${property}]`;\n    if(namespace) {\n     formKey = namespace + key;\n    } else {\n     formKey = property;\n    }\n    \n    // if the property is an object, but not a File, use recursivity.\n    if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {\n     objectToFormData(obj[property], fd, formKey);\n    } else {\n      \n     // if it's a string or a File object\n     fd.append(formKey, obj[property]);\n    }\n     \n   }\n  }\n  \n return fd;\n   \n}\n")])])]),t("p",[a._v("这样，就可以将对象转化为对应的formData的格式了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);