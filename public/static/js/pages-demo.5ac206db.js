(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo"],
	{"0855":function(t,i,e){
		"use strict";
		var a;
		e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));
var n=function(){
	var t=this,i=t.$createElement,a=t._self._c||i;
	return a("v-uni-view",[a("v-uni-view",{staticClass:"time_top"},[t._v(t._s(t.startTime))]),a("v-uni-view",{staticClass:"codeBox"},[a("v-uni-image",{staticClass:"codeImg",attrs:{src:e("9492")}})],1),
		   a("v-uni-view",{staticClass:"outText"},[t._v("外出时间")]),
		   a("v-uni-view",{staticClass:"outValue"},[a("v-uni-view",{staticClass:"outValue_input"},[a("v-uni-view",{staticClass:"outValue_Text"},[t._v("离校时间")]),
a("v-uni-input",{staticClass:"outValue_Time",attrs:{type:"text"},model:{value:t.backTime,callback:function(i){t.backTime=i},expression:"backTime"}})
],1),
		   a("v-uni-view",{staticClass:"line"}),
		   a("v-uni-view",{staticClass:"outValue_input"},[a("v-uni-view",{staticClass:"outValue_Text"},[t._v("回校时间")]),a("v-uni-input",{staticClass:"outValue_Time",attrs:{type:"text"},model:{value:t.endTime,callback:function(i){t.endTime=i},expression:"endTime"}})],1)],1),
		   a("v-uni-view",{staticClass:"outText"},[t._v("学生信息")]),a("v-uni-view",{staticStyle:{"background-color":"#FFFFFF"}},[a("v-uni-view",{staticClass:"info_Input"},[a("v-uni-view",{staticClass:"info_lable"},[t._v("姓名")]),
a("v-uni-input",{staticClass:"info_value",attrs:{type:"text"},model:{value:t.stuName,callback:function(i){t.stuName=i},expression:"stuName"}})
],1),
		   a("v-uni-view",{staticClass:"line"}),
		   a("v-uni-view",{staticClass:"info_Input"},[a("v-uni-view",{staticClass:"info_lable"},[t._v("学号")]),
		   a("v-uni-input",{staticClass:"info_value",attrs:{type:"text"},model:{value:t.stuId,callback:function(i){t.stuId=i},expression:"stuId"}})
],1),
		   a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"info_Input"},[a("v-uni-view",{staticClass:"info_lable"},[t._v("学院")]),
		   a("v-uni-input",{staticClass:"info_value",attrs:{type:"text"},model:{value:t.college,callback:function(i){t.college=i},expression:"college"}})
],1),
		   a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"info_Input"},[a("v-uni-view",{staticClass:"info_lable"},[t._v("专业")]),
                        a("v-uni-input",{staticClass:"info_value",attrs:{type:"text"},model:{value:t.major,callback:function(i){t.major=i},expression:"major"}})
],1),
		   a("v-uni-view",{staticClass:"line"}),
		   a("v-uni-view",{staticClass:"info_Input"},[a("v-uni-view",{staticClass:"info_lable"},[t._v("班级")]),
                        a("v-uni-input",{staticClass:"info_value",attrs:{type:"text"},model:{value:t.class,callback:function(i){t.class=i},expression:"class"}})
],1)],1)],1)},o=[]},"8b28":function(t,i,e){var a=e("c684");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);
var n=e("4f06").default;
n("45c81aa8",a,!0,{sourceMap:!1,shadowMode:!1})},9492:function(t,i){t.exports="data:image/png;base64,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"},"976b":function(t,i,e){"use strict";
Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;
var a={data:function(){return{startTime:"",backTime:"",endTime:""}},onLoad:function(){this.getTime()},methods:{getTime:function(){var t=(new Date).getFullYear(),i=(new Date).getMonth()+1,e=(new Date).getDate(),a=(new Date).getHours(),n=(new Date).getMinutes(),o=(new Date).getSeconds();
i<10&&(i="0"+i),e<10&&(e="0"+e),a<10&&(a="0"+a),n<10&&(n="0"+n),o<10&&(o="0"+o),this.startTime=t+"-"+i+"-"+e+" "+a+":"+n+":"+o;
var s=this;
setTimeout((function(){s.getTime()}),1e3)}}};
i.default=a},b433:function(t,i,e){"use strict";
e.r(i);
var a=e("0855"),n=e("b5be");
for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);
e("db23");
var s,l=e("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"7196fb30",null,!1,a["a"],s);
i["default"]=u.exports},b5be:function(t,i,e){"use strict";
e.r(i);
var a=e("976b"),n=e.n(a);
for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);
i["default"]=n.a},c684:function(t,i,e){var a=e("24fb");
i=a(!1),i.push([t.i,"uni-page-body[data-v-7196fb30]{background-color:#f5f5f5}.time_top[data-v-7196fb30]{font-size:20px;text-align:center;padding:20px 0;background:#fff}.codeImg[data-v-7196fb30]{height:120px;width:120px}.codeBox[data-v-7196fb30]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:20px 0}.outText[data-v-7196fb30]{padding:16px 16px 8px;color:#969799;font-size:14px;line-height:16px}.outValue[data-v-7196fb30]{margin-bottom:10px;background-color:#fff}.outValue_input[data-v-7196fb30]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 16px;overflow:hidden;color:#323233;font-size:14px;line-height:24px}.outValue_Text[data-v-7196fb30]{font-size:16px;-webkit-box-flex:1;-webkit-flex:1;flex:1}.outValue_Time[data-v-7196fb30]{font-weight:700;text-align:right;word-wrap:break-word;font-size:14px;line-height:24px}.info_Input[data-v-7196fb30]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 16px;overflow:hidden;color:#323233;font-size:14px;line-height:24px}.info_lable[data-v-7196fb30]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#323233;font-size:14px;line-height:24px}.info_value[data-v-7196fb30]{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.line[data-v-7196fb30]{height:1;background-color:#ebedf0;margin-left:16px;margin-right:16px;opacity:.5}body.?%PAGE?%[data-v-7196fb30]{background-color:#f5f5f5}",""]),t.exports=i},db23:function(t,i,e){"use strict";var a=e("8b28"),n=e.n(a);n.a}}]);