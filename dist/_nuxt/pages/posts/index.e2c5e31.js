(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{240:function(e,t,n){"use strict";n.r(t);n(241);var r={name:"posts-list",props:["posts"]},o=n(34),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",this._l(this.posts,(function(e){return t("div",{key:e},[t("PostPreview",{attrs:{post:e}})],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PostPreview:n(241).default})},241:function(e,t,n){"use strict";n.r(t);var r={name:"post-preview",props:["post"]},o=n(34),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("h3",{},[e._v(e._s(e.post.title))]),e._v(" "),n("p",[e._v(e._s(e.post.Preview))]),e._v(" "),n("router-link",{attrs:{to:{name:"posts-id",params:{id:e.post.id}},tag:"a"}},[e._v("Read More...\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},242:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"posts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Preview"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:97}};n.loc.source={body:"query posts {\r\n  posts {\r\n    id\r\n    title\r\n    Preview\r\n    cover {\r\n      url\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&n.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.posts=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var l=r[t]||new Set,d=new Set,c=new Set;for(l.forEach((function(e){c.add(e)}));c.size>0;){var f=c;c=new Set,f.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(t){var r=o(e,t);r&&n.definitions.push(r)})),n}(n,"posts")},247:function(e,t,n){"use strict";n.r(t);n(82),n(83);var r=n(242),o=n.n(r),l=(n(240),{data:function(){return{posts:[],query:""}},apollo:{posts:{prefetch:!0,query:o.a}},computed:{filteredList:function(){var e=this;return this.posts.filter((function(t){return t.title.toLowerCase().includes(e.query.toLowerCase())}))}}}),d=n(34),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]),e._v(" "),n("PostsList",{attrs:{posts:e.filteredList}}),e._v(" "),0==e.filteredList.length?n("div",{},[n("img",{attrs:{src:"https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png",height:"800",width:"800"}}),e._v(" "),n("p",[e._v("No posts found")])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PostsList:n(240).default})}}]);