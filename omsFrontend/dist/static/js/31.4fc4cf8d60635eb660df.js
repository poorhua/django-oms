webpackJsonp([31],{csSc:function(e,t,a){var o=a("xBOe");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("26764e2d",o,!0)},hB7h:function(e,t,a){"use strict";function o(e){a("csSc")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("iVC1"),l=a("QmSG"),r={components:{},data:function(){return{route_path:this.$route.path.split("/"),job_id:this.$route.params.job_id,ruleForm:{job:"",env:"",hosts:[],version:"HEAD",deploy_path:"",action_user:localStorage.getItem("username")},envs:[],deploy_envs:[],hosts:[],versions:[],jobs:{},currentPage:1,listQuery:{limit:l.LIMIT,offset:"",search:""},pagesize:[l.LIMIT,25,50,100],tableData:[],tabletotal:0,DEPLOY_STATUS:{deploy:{text:"发布中",type:"primary",icon:"el-icon-loading"},success:{text:"发布成功",type:"success",icon:"el-icon-success"},failed:{text:"发布失败",type:"danger",icon:"el-icon-error"}},selectId:[],butstatus:!1}},created:function(){this.fetchJobData(),this.fetchDeployJobData()},methods:{fetchJobData:function(){var e=this;Object(s.f)(null,this.job_id).then(function(t){e.jobs=t.data,e.ruleForm.job=e.jobs.name,e.fetchJobenvData(e.jobs.name)})},fetchJobenvData:function(e){var t=this,a={job__name:e};Object(s.e)(a).then(function(e){t.envs=e.data})},selectEnv:function(e){var t=this.envs.filter(function(t){return t.name===e})[0];this.hosts=t.hosts,this.ruleForm.deploy_path=t.path},fetchDeployJobData:function(){var e=this;Object(s.d)(this.listQuery).then(function(t){e.tableData=t.data,e.tabletotal=t.data.length})},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchDeployJobData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*l.LIMIT,this.fetchDeployJobData()},submitForm:function(e){var t=this;this.ruleForm.hosts=this.ruleForm.hosts.join(),Object(s.g)(e).then(function(e){t.$message({message:"恭喜你，构建成功",type:"success"}),t.fetchDeployJobData(),t.resetForm("ruleForm")}).catch(function(e){t.$message.error("构建失败"),t.resetForm("ruleForm"),console.log(e)})},resetForm:function(e){this.$refs[e].resetFields()},handleSelectionChange:function(e){this.selectId=[];for(var t=0,a=e.length;t<a;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},deleteForm:function(){for(var e=this,t=0,a=this.selectId.length;t<a;t++)Object(s.a)(this.selectId[t]).then(function(a){delete e.selectId[t]});setTimeout(this.fetchDeployJobData,1e3)}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"jobname"},[e._v(e._s(e.jobs.name))])]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"发布环境",prop:"env"}},[a("el-select",{attrs:{placeholder:"请选择发布环境"},on:{change:e.selectEnv},model:{value:e.ruleForm.env,callback:function(t){e.$set(e.ruleForm,"env",t)},expression:"ruleForm.env"}},e._l(e.envs,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"发布主机",prop:"hosts"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择发布主机"},model:{value:e.ruleForm.hosts,callback:function(t){e.$set(e.ruleForm,"hosts",t)},expression:"ruleForm.hosts"}},e._l(e.hosts,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"代码地址"}},[a("el-input",{attrs:{disabled:""},model:{value:e.jobs.code_url,callback:function(t){e.$set(e.jobs,"code_url",t)},expression:"jobs.code_url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布版本",prop:"version"}},[a("el-input",{model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}}),e._v(" "),a("a",{staticClass:"tips"},[e._v("Tip：HEAD 代表最新版本号，若要发布其他版本，请改为其他版本号")])],1),e._v(" "),a("el-form-item",{attrs:{label:"发布路径",prop:"deploy_path"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.deploy_path,callback:function(t){e.$set(e.ruleForm,"deploy_path",t)},expression:"ruleForm.deploy_path"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm(e.ruleForm)}}},[e._v("开始构建")])],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"jobname"},[e._v("发布记录")]),e._v(" "),a("el-button",{staticStyle:{padding:"3px 0","margin-left":"20px"},attrs:{type:"danger",plain:"",icon:"el-icon-refresh"}},[e._v("刷新状态\n          ")])],1),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"env",label:"发布环境"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"发布版本"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deploy_status",label:"发布状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{plain:"",size:"mini",type:e.DEPLOY_STATUS[t.row.deploy_status].type,icon:e.DEPLOY_STATUS[t.row.deploy_status].icon}},[e._v("\n                    "+e._s(e.DEPLOY_STATUS[t.row.deploy_status].text)+"\n                  ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"发布人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"发布时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                  "+e._s(e._f("formatTime")(t.row.create_time))+"\n                ")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"danger",icon:"delete",disabled:e.butstatus},on:{click:e.deleteForm}},[e._v("删除记录")])],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])])],1)],1)],1)},i=[],c={render:n,staticRenderFns:i},u=c,p=a("VU/8"),h=o,d=p(r,u,!1,h,null,null);t.default=d.exports},xBOe:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".jobname{font-weight:600;margin-left:20px}.head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])}});