webpackJsonp([31],{RmA3:function(t,e,a){"use strict";function n(t){a("fF5d")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("iVC1"),s=a("QmSG"),i={components:{},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,listQuery:{limit:s.LIMIT,offset:"",search:""},pagesize:[10,25,50,100]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},deleteGroup:function(t){var e=this;Object(l.c)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},searchClick:function(){this.listQuery.search=this.searchdata,this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*s.LIMIT,this.fetchData()}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("router-link",{attrs:{to:"addjob"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建")])],1)],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"runjob/"+e.row.id}},[a("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(t._f("formatTime")(e.row.create_time))+"\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"editjob/"+e.row.id}},[a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-setting"}},[t._v("配置")])],1),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:"prev, pager, next, sizes",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])],1)},c=[],o={render:r,staticRenderFns:c},u=o,f=a("VU/8"),d=n,h=f(i,u,!1,d,null,null);e.default=h.exports},cyZx:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".head-lavel{padding-bottom:50px}.table-button{float:left}.table-search{float:right}.table-pagination{padding:10px 0;float:right}",""])},fF5d:function(t,e,a){var n=a("cyZx");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("330142e4",n,!0)}});