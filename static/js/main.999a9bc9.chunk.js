(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),o=t.n(c),s=t(12),i=t(13),r=t(36),d=t(32),u=t(37),m=t(25),b=t(53),v=t.n(b),p=t(26),f=t.n(p),h=(new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"convercsv",value:function(e){f.a.post("http://localhost:8080/api/lifeeasy/convert/csv/"+e)}},{key:"downloadxls",value:function(){f.a.get("http://localhost:8080/api/lifeeasy/downloadxls/addresses.xls")}}]),e}()),t(115),{bucketName:"lifeeasy",dirName:"ingest/csv",region:"ap-south-1",accessKeyId:"AKIAQEEAGBCBE7RAPCSJ",secretAccessKey:"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"}),g=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(d.a)(a).call(this,e))).state={downloadxls:"http://localhost:8080/api/lifeeasy/downloadxls/",csvname:"something",loading:!1},t.upload=t.upload.bind(Object(m.a)(Object(m.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"upload",value:function(e){var a=this;console.log(e.target.files[0]),v.a.uploadFile(e.target.files[0],h).then(function(t){var n=e.target.files[0].name;a.setState({csvname:n});var l=String(n);l=l.replace("csv","xls"),console.log("success"),console.log(l),a.setState({downloadxls:"http://localhost:8080/api/lifeeasy/downloadxls/"+l});a.setState({loading:!0},function(){f.a.post("http://localhost:8080/api/lifeeasy/convert/csv/"+a.state.csvname).then(function(e){return a.setState({loading:!1})})}),document.getElementById("downloadxls").disabled=!1,document.getElementById("a").href=a.state.downloadxls,document.getElementById("a").disabled=!1,document.getElementById("b").disabled=!1}).catch(function(e){alert(e)})}},{key:"myFunction",value:function(){(document.getElementById("downloadxls").visibility="visible").style.visibility="visible",console.log("Touched")}},{key:"render",value:function(){var e=this.state;e.data,e.loading;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"uploadDiv",className:"center animatedDiv"},l.a.createElement("h3",{style:{color:"white"}},"Upload CSV File"),l.a.createElement("label",{id:"label",for:"file-upload",className:"custom-file-upload"},l.a.createElement("i",{style:{color:"white"}}," Chooose File")),l.a.createElement("input",{id:"file-upload",type:"file",accept:".csv",className:"file",onChange:this.upload})),l.a.createElement("div",{id:"downloadxls",className:"center2"},l.a.createElement("a",{id:"a",href:"/",disabled:!0},l.a.createElement("button",{id:"b",className:"btn btn-success",disabled:!0},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-download",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}),l.a.createElement("path",{d:"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"})),"Downlaod XLS")," ")))}}]),a}(n.Component),E=(t(116),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"#"},"LifeEasy")))}}]),a}(n.Component)),y=t(54),w=t(55),x=t(151),j=t(156),O=t(154),C=t(152),k=t(150),F=t(153);function I(e){var a=e.children,t=e.value,n=e.index,c=Object(w.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),t===n&&l.a.createElement(F.a,{p:3},l.a.createElement(k.a,null,a)))}function B(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var S=Object(x.a)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}});function T(){S();var e=l.a.useState(0),a=Object(y.a)(e,2),t=a[0],n=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{position:"static"},l.a.createElement(O.a,{value:t,onChange:function(e,a){n(a)},"aria-label":"simple tabs example"},l.a.createElement(C.a,Object.assign({label:"Csv To Xls"},B(0))),l.a.createElement(C.a,Object.assign({label:"Xls To Pdf"},B(1))),l.a.createElement(C.a,Object.assign({label:"Item Three"},B(2))))),l.a.createElement(I,{value:t,index:0},l.a.createElement(g,null)),l.a.createElement(I,{value:t,index:1},"Xls To Pdf"),l.a.createElement(I,{value:t,index:2},"Item Three"))}var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(T,null))},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,158)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),c(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),L()},61:function(e,a,t){e.exports=t(123)}},[[61,1,2]]]);
//# sourceMappingURL=main.999a9bc9.chunk.js.map