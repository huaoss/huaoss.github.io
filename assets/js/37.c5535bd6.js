(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{302:function(r,a,n){"use strict";n.r(a);var t=n(13),e=Object(t.a)({},(function(){var r=this,a=r._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"js基础算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js基础算法"}},[r._v("#")]),r._v(" js基础算法")]),r._v(" "),a("h2",{attrs:{id:"一、排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、排序"}},[r._v("#")]),r._v(" 一、排序")]),r._v(" "),a("h3",{attrs:{id:"_1、冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、冒泡"}},[r._v("#")]),r._v(" 1、冒泡")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("var arr = [3,6,1,2,5];\nvar temp;\nfor(var i= 0;i<arr.length;i++){\n    for(var j=i+1;j<arr.length;j++){\n        if(arr[i] > arr[j]){\n            temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n}\nconsole.log(arr);\n")])])]),a("h3",{attrs:{id:"_2、快排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、快排"}},[r._v("#")]),r._v(" 2、快排")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("function quicksort (arr){\n    if(arr.length<=1){\n        return arr;\n    }\n    var left = [];\n    var right = [];\n    var middle = arr[0];\n    for(var i=1;i<arr.length;i++){\n        if(arr[i]<middle){\n            left.push(arr[i]);\n        }else{\n            right.push(arr[i]);\n        }\n    }\n    return quicksort(left).concat([middle],quicksort(right));\n}\n")])])]),a("p",[r._v("==ps:可以用快排就不用冒泡，因为冒泡涉及递归==")]),r._v(" "),a("h2",{attrs:{id:"二、去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、去重"}},[r._v("#")]),r._v(" 二、去重")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("Array.prototype.unique = function(){\n    var res = [];\n    var json = {};\n    for(var i = 0; i < this.length; i++){\n        if(!json[this[i]]){\n            res.push(this[i]);\n            json[this[i]] = 1;\n        }\n    }\n    return res;\n}\nvar arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];\nalert(arr.unique());\n")])])]),a("h2",{attrs:{id:"三、取最大值、最小值、总分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、取最大值、最小值、总分"}},[r._v("#")]),r._v(" 三、取最大值、最小值、总分")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("var arr = new Array(80,70,86,58,90,35,89,67,50,100);\nvar sum = 0;\nvar maxd = 0;\nvar mind = 100;  //想要查最小数最好用满分最大数做可以比较的基数\nfor(var i=0;i<arr.length;i++){\n    sum = sum +arr[i];\n    if(arr[i]>maxd){\n      maxd = arr[i];\n    }\n    if(arr[i]<mind){\n      mind = arr[i];\n    }\n}\nalert(sum);\nalert(maxd);\nalert(mind);\n")])])]),a("h2",{attrs:{id:"四、二分法查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、二分法查找"}},[r._v("#")]),r._v(" 四、二分法查找")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("    // 二分-非递归\n    function binarySearch(arr, item) {\n      var len = arr.length,\n        start = 0,\n        end = len - 1;\n      while (start <= end) {\n        var mid = Math.floor((start + end) / 2);\n        if (item == arr[mid]) {\n          return mid;\n        } else if (item > arr[mid]) {\n          start = mid + 1;\n        } else {\n          end = mid - 1;\n        }\n      }\n      return arr;\n    };\n\n    // 二分-递归\n    function binarySearch(arr, item, start, end) {\n      var start = start || 0;\n      var end = end || arr.length - 1;\n      if (start > end) {\n        return false;\n      }\n      var mid = Math.floor((start + end) / 2);\n      if (item == arr[mid]) {\n        return mid;\n      } else if (item < arr[mid]) {\n        return binarySearch(arr, item, start, mid - 1);\n      } else {\n        return binarySearch(arr, item, mid + 1, end);\n      }\n    };\n\n    var array = [1, 3, 4, 8, 10, 33, 66, 88, 90, 110];\n    console.log(binarySearch(array, 66));//6\n    var index = binarySearch(array, 66);\n    console.log(array[index]);\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);