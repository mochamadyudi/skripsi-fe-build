(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[44],{509:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));function i(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function o(t){var e=t.getBoundingClientRect(),n=document.documentElement;return{left:e.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}},606:function(t,e,n){"use strict";n.r(e);var i=n(12),o=n(1),a=n(10),l=n(0),c=n(21),d=n(485),r=n(674),u=n(579),s=n(41),v=n(50),b=n(17),m=n(501),f=n.n(m),j=n(2),O=Object(c.b)((function(){return{}}),{})((function(t){var e,n,c,m=Object(v.i)(),O=Object(l.useState)({limit:10,page:1}),p=Object(a.a)(O,2),h=p[0],g=(p[1],Object(l.useState)(!1)),x=Object(a.a)(g,2),w=x[0],I=x[1],N=Object(l.useState)({}),S=Object(a.a)(N,2),Y=S[0],E=S[1];Object(l.useEffect)((function(){I(!0),E(Object(o.a)(Object(o.a)({},Y),{},{villa:Object(o.a)({},null===Y||void 0===Y?void 0:Y.villa),order:[]})),new s.a({url:"/api/v2/villa/".concat(null===m||void 0===m?void 0:m.id,"/transaction"),config:{params:Object(o.a)({},h)}}).get().then((function(t){var e;E(Object(o.a)(Object(o.a)({},null===t||void 0===t?void 0:t.data),{},{order:Object(i.a)(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.order)})),I(!1),console.log({response:t})})).catch((function(t){I(!1),E(Object(o.a)(Object(o.a)({},Y),{},{villa:Object(o.a)({},null===Y||void 0===Y?void 0:Y.villa),order:[]})),console.log({err:t})}))}),[h]);var L=[{dataIndex:"_id",title:"No",render:function(t,e,n){return n+1}},{dataIndex:"room",title:"Room",render:function(t){var e;return Object(j.jsxs)("div",{className:"w-full text-left",children:[Object(j.jsx)(d.a,{src:null,className:"mr-2"}),Object(j.jsx)("span",{children:null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"-"})]})}},{dataIndex:"order_number",title:"Order Number"},{dataIndex:"status",title:"Status"},{dataIndex:"limit",title:"Limit"},{dataIndex:"amount",title:"Amount",render:function(t){return b.a.numberFormat(t,",")}},{dataIndex:"createdAt",title:"Created",render:function(t){return f()(t||f()()).format("DD MMM YYYY")}}];return Object(j.jsx)(r.a,{title:w?"-":null!==(e=null===Y||void 0===Y||null===(n=Y.villa)||void 0===n?void 0:n.name)&&void 0!==e?e:"History Transaction",className:"w-full",children:Object(j.jsx)(u.a,{className:"table-responsive",loading:w,dataSource:null!==(c=null===Y||void 0===Y?void 0:Y.order)&&void 0!==c?c:[],columns:L})})}));e.default=O}}]);
//# sourceMappingURL=44.8c8cc188.chunk.js.map