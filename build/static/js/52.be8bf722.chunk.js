(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[52],{303:function(e,t,a){"use strict";a.r(t);var n=a(28),c=a(0),r=a.n(c),l=a(40),s=a(175),o=a(41),i=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),l=r[0],s=r[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),l},m=a(145),u=function(e){var t=e.name,a=e.flag,n=e.region;return r.a.createElement("li",{className:"list-group-item d-flex"},r.a.createElement("div",{className:"d-inline"},r.a.createElement("img",{src:a,style:{width:"60px"}})),r.a.createElement("div",{className:"col pt-2"},t," ",r.a.createElement("span",{className:"badge badge-info"},n)))};t.default=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],d=t[1],p=i(a,500),f=Object(c.useMemo)((function(){return a?s.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())||e.region.toLowerCase().includes(p.toLowerCase())})):s}),[p,s]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Country Search - Debounced"}),r.a.createElement(m.a,{page:"debouncedSearch"}),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-lg-6 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},r.a.createElement(o.a,{icon:"search"}))),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Country","aria-label":"Search","aria-describedby":"basic-addon1",value:a,onChange:function(e){return d(e.target.value)}}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"list-group text-left"},f.map((function(e,t){return r.a.createElement(u,Object.assign({},e,{key:t}))}))))))))}}}]);
//# sourceMappingURL=52.be8bf722.chunk.js.map