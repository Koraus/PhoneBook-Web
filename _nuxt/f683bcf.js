(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("6a652a14",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(299)},308:function(t,e,n){var o=n(132)((function(i){return i[1]}));o.push([t.i,".input[data-v-8d306ce8]{margin:10px 0}",""]),o.locals={},t.exports=o},322:function(t,e,n){"use strict";n.r(e);n(27),n(60),n(19),n(108),n(80);var o={name:"PhoneInput",data:function(){return{newContactName:"",newContactNumber:""}},computed:{newNumber:function(){return{name:this.newContactName,number:this.newContactNumber}}},watch:{newContactNumber:function(){this.newContactNumber=this.newContactNumber.toString().replace(/\D/g,"")}},methods:{postNumber:function(){this.$store.dispatch("postNumber",this.newNumber),this.newContactName=this.newContactNumber=""}}},r=(n(307),n(44)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("PhoneInput")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newContactNumber,expression:"newContactNumber"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newContactNumber},on:{input:function(e){e.target.composing||(t.newContactNumber=e.target.value)}}}),t._v(" "),e("span",[t._v("number")]),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newContactName,expression:"newContactName"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newContactName},on:{input:function(e){e.target.composing||(t.newContactName=e.target.value)}}}),t._v(" "),e("span",[t._v("Name")]),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.postNumber}},[t._v("send")])])}),[],!1,null,"8d306ce8",null);e.default=component.exports}}]);