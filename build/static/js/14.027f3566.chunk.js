(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[14],{144:function(e,t,a){"use strict";var n="https://github.com/codegeous/react-component-depot/tree/master/src/",c="https://youtu.be/";t.a={api:"<<Your backend API base URL>>",GOOGLE:{GAPI_KEY:"",reCaptcha:"<<Your recaptcha token>>",GA_TRACKING_CODE:"<<Your GA Tracking Code>>"},hCaptchaSiteToken:"<<Your hCaptcha Token>>",links:{customGoogleMaps:{tutorial:"".concat(c,"xUsn2nj4fy0"),code:"".concat(n,"pages/GoogleMaps/CustomStyle/index.js")},buttonLoaderHooks:{tutorial:"".concat(c,"nCEnqQABC5A"),code:"".concat(n,"pages/ButtonLoadingSpinner/index.js")},otpBox:{tutorial:"".concat(c,"qf56frPk5lA"),code:"".concat(n,"pages/OTPBox/index.js")},contactListCRUD:{tutorial:"",code:"".concat(n,"pages/ContactList/index.js")},showAndHideElements:{tutorial:"".concat(c,"jRxoO-Zd0pQ"),code:"".concat(n,"pages/ReactBasics/ShowAndHide/index.js")},scrollIndicator:{tutorial:"".concat(c,"-rYmnXV6sYw"),code:"".concat(n,"components/ScrollIndicator/index.js")},floatingYoutubePlayer:{tutorial:"".concat(c,"lT4uJI6TXAg"),code:"".concat(n,"components/YoutubePlayer/index.js")},signup:{tutorial:"",code:"".concat(n,"pages/Signup/index.js")},hooks:{tutorial:"".concat(c,"fT7jBMG7GIM"),code:"".concat(n,"pages/HooksDemo/index.js")},datatable:{tutorial:"".concat(c,"emX5KvZ6Hbo"),code:"".concat(n,"pages/DataTable/index.js")},batteryStatus:{tutorial:"".concat(c,"50cOgnVmflE"),code:"".concat(n,"pages/BatteryStatus/index.js")},fileupload:{tutorial:"".concat(c,"_XD5ko7Fy9E"),code:"".concat(n,"pages/FileUpload/index.js")},geoLocation:{tutorial:"".concat(c,"TID8Z29je5o"),code:"".concat(n,"pages/GeoLocation/index.js")},infniteScrolling:{tutorial:"".concat(c,"8nFNxnjoTZ4"),code:"".concat(n,"pages/InfiniteScrolling/index.js")},recaptcha:{tutorial:"".concat(c,"e_vMoPCBfqU"),code:"".concat(n,"pages/ReCaptcha/index.js")},hcaptcha:{tutorial:"".concat(c,"KcLeXxlkqf0"),code:"".concat(n,"pages/HCaptcha/index.js")},autocomplete:{tutorial:"".concat(c,"G2QyeafA3gw"),code:"".concat(n,"pages/CountrySearch/index.js")},searchFilter:{tutorial:"".concat(c,"aBWwJ4ibpps"),code:"".concat(n,"pages/SearchFilter/index.js")},accordion:{tutorial:"".concat(c,"AjQctXfmOqw"),code:"".concat(n,"pages/AccordionDemo/index.js")},leafletBasic:{tutorial:"".concat(c,"i9oX1upSKjI"),code:"".concat(n,"pages/Leaflet/basic.js")},leafletMarker:{tutorial:"".concat(c,"UNSYoW3gkDc"),code:"".concat(n,"pages/Leaflet/markers.js")},leafletCurrentLocation:{tutorial:"".concat(c,"7jWYLirwt0k"),code:"".concat(n,"pages/Leaflet/currentLocation.js")},leafletDraw:{tutorial:"".concat(c,"Bp_6MkKSOQE"),code:"".concat(n,"pages/Leaflet/draw.js")},treeList:{tutorial:"".concat(c,"uRSzyVubap4"),code:"".concat(n,"pages/TreeList/index.js")},fileDownloader:{tutorial:"".concat(c,"0AS9Gfd1j5s"),code:"".concat(n,"pages/FileDownloader/index.js")},imageZoom:{tutorial:"".concat(c,"uhgQFqr9ezQ"),code:"".concat(n,"pages/ImageZoom/index.js")},starRating:{tutorial:"".concat(c,"nErdlbLWqtA"),code:"".concat(n,"pages/Rating/index.js")},leafletStaticMap:{tutorial:"".concat(c,"sz_FaLpMNZc"),code:"".concat(n,"pages/Leaflet/StaticMap.js")},leafletPrint:{tutorial:"".concat(c,"mhGqgY2l-ik"),code:"".concat(n,"pages/Leaflet/Print.js")},tabs:{tutorial:"".concat(c,"MLYH-o_EdaI"),code:"".concat(n,"pages/SimpleTabs/index.js")},dnd:{tutorial:"".concat(c,"O2dTW3uNAeQ"),code:"".concat(n,"pages/TeamSelection/index.js")},cancelableFetch:{tutorial:"".concat(c,"AwTxrCgIBWk"),code:"".concat(n,"pages/CancelableFetchRequest/index.js")},debouncedSearch:{tutorial:"".concat(c,"Wf7INnelvkI"),code:"".concat(n,"pages/SearchFilterDebounced/index.js")}},youtubeVideos:[{title:"Full page loading spinner for API calls in ReactJS with Redux",id:"vCs50MV-TbM"},{title:"File Upload with progress bar in React JS and axios",id:"Ti8QNiRRzOA"},{title:"Add loading spinner for buttons in reactjs",id:"vgDObZGhQuw"},{title:"Display fallback image for a broken image link in reactjs ",id:"90P1_xCaim4"},{title:"Material style preloader for image tag in react js",id:"GBHBjv6xfY4"},{title:"Building a search filter in reactjs",id:"RM_nXOyHwN0"}]}},145:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(144),r=function(e){return function(t){var a=t.page,n={};return a&&o.a.links[a]&&(n.code=o.a.links[a].code,n.tutorial=o.a.links[a].tutorial),c.a.createElement(e,Object.assign({},n,t))}},i=a(148),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Category",t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";i.a.event({category:e,action:t,label:a})};return t};t.a=r((function(e){var t=e.code,a=void 0===t?"":t,n=e.tutorial,o=void 0===n?"":n,r=l("External Links");return c.a.createElement("h6",{className:"text-center"},o&&c.a.createElement("a",{href:o,target:"_blank",onClick:function(e){return r("Youtube Tutorials Page",o)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-danger mr-2 p-3"},"Youtube Tuorial of this demo"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))),a&&c.a.createElement("a",{href:a,target:"_blank",onClick:function(e){return r("Github Tutorials Page",a)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-secondary mr-2 p-3"},"Github Source Code"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))))}))},162:function(e,t,a){e.exports=a.p+"static/media/spinner.d88105a8.gif"},168:function(e,t,a){"use strict";var n=a(28),c=a(0),o=a.n(c),r=a(162),i=a.n(r),l=function(){return o.a.createElement("div",{className:"fp-container"},o.a.createElement("img",{src:i.a,className:"fp-loader",alt:"loading"}))};t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1];return[a?o.a.createElement(l,null):null,function(){return r(!0)},function(){return r(!1)}]}},184:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return C})),a.d(t,"b",(function(){return N}));var n=a(28),c=a(0),o=a.n(c),r=a(41),i=function(e){var t=e.headers,a=e.onSorting,i=Object(c.useState)(""),l=Object(n.a)(i,2),s=l[0],u=l[1],d=Object(c.useState)("asc"),m=Object(n.a)(d,2),f=m[0],p=m[1];return o.a.createElement("thead",null,o.a.createElement("tr",null,t.map((function(e){var t=e.name,n=e.field,c=e.sortable;return o.a.createElement("th",{key:t,onClick:function(){return c?function(e){var t=e===s&&"asc"===f?"desc":"asc";u(e),p(t),a(e,t)}(n):null}},t,s&&s===n&&o.a.createElement(r.a,{icon:"asc"===f?"arrow-down":"arrow-up"}))}))))},l=a(3),s=a(9),u=a(29),d=a.n(u),m=a(43),f=a(19),p=a(65),b=o.a.forwardRef((function(e,t){var a=e.active,n=e.disabled,c=e.className,r=e.style,i=e.activeLabel,u=e.children,m=Object(s.a)(e,["active","disabled","className","style","activeLabel","children"]),f=a||n?"span":p.a;return o.a.createElement("li",{ref:t,style:r,className:d()(c,"page-item",{active:a,disabled:n})},o.a.createElement(f,Object(l.a)({className:"page-link",disabled:n},m),u,a&&i&&o.a.createElement("span",{className:"sr-only"},i)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var g=b;function j(e,t,a){var n,c;return void 0===a&&(a=e),c=n=function(e){function n(){return e.apply(this,arguments)||this}return Object(f.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.children,c=Object(s.a)(e,["children"]);return delete c.active,o.a.createElement(b,c,o.a.createElement("span",{"aria-hidden":"true"},n||t),o.a.createElement("span",{className:"sr-only"},a))},n}(o.a.Component),n.displayName=e,c}var h=j("First","\xab"),v=j("Prev","\u2039","Previous"),E=j("Ellipsis","\u2026","More"),x=j("Next","\u203a"),O=j("Last","\xbb"),k=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.children,r=e.size,i=Object(s.a)(e,["bsPrefix","className","children","size"]),u=Object(m.b)(a,"pagination");return o.a.createElement("ul",Object(l.a)({ref:t},i,{className:d()(n,u,r&&u+"-"+r)}),c)}));k.First=h,k.Prev=v,k.Ellipsis=E,k.Item=g,k.Next=x,k.Last=O;var S=k,C=function(e){var t=e.total,a=void 0===t?0:t,r=e.itemsPerPage,i=void 0===r?10:r,l=e.currentPage,s=void 0===l?1:l,u=e.onPageChange,d=Object(c.useState)(0),m=Object(n.a)(d,2),f=m[0],p=m[1];Object(c.useEffect)((function(){a>0&&i>0&&p(Math.ceil(a/i))}),[a,i]);var b=Object(c.useMemo)((function(){for(var e=[],t=function(t){e.push(o.a.createElement(S.Item,{key:t,active:t===s,onClick:function(){return u(t)}},t))},a=1;a<=f;a++)t(a);return e}),[f,s]);return 0===f?null:o.a.createElement(S,null,o.a.createElement(S.Prev,{onClick:function(){return u(s-1)},disabled:1===s}),b,o.a.createElement(S.Next,{onClick:function(){return u(s+1)},disabled:s===f}))},N=function(e){var t=e.onSearch,a=Object(c.useState)(""),r=Object(n.a)(a,2),i=r[0],l=r[1];return o.a.createElement("input",{type:"text",className:"form-control",style:{width:"240px"},placeholder:"Search",value:i,onChange:function(e){return a=e.target.value,l(a),void t(a);var a}})}},279:function(e,t,a){"use strict";a.r(t);var n=a(28),c=a(0),o=a.n(c),r=a(40),i=a(184),l=a(168),s=a(145);a(144);t.default=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],u=t[1],d=Object(l.a)(),m=Object(n.a)(d,3),f=m[0],p=m[1],b=m[2],g=Object(c.useState)(0),j=Object(n.a)(g,2),h=j[0],v=j[1],E=Object(c.useState)(1),x=Object(n.a)(E,2),O=x[0],k=x[1],S=Object(c.useState)(""),C=Object(n.a)(S,2),N=C[0],y=C[1],w=Object(c.useState)({field:"",order:""}),L=Object(n.a)(w,2),P=L[0],A=L[1];Object(c.useEffect)((function(){p(),fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()})).then((function(e){b(),u(e),console.log(e)}))}),[]);var T=Object(c.useMemo)((function(){var e=a;if(N&&(e=e.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())||e.email.toLowerCase().includes(N.toLowerCase())}))),v(e.length),P.field){var t="asc"===P.order?1:-1;e=e.sort((function(e,a){return t*e[P.field].localeCompare(a[P.field])}))}return e.slice(50*(O-1),50*(O-1)+50)}),[a,O,N,P]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{title:"Building a data table in react"}),o.a.createElement(s.a,{page:"datatable"}),o.a.createElement("div",{className:"row w-100"},o.a.createElement("div",{className:"col mb-3 col-12 text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(i.a,{total:h,itemsPerPage:50,currentPage:O,onPageChange:function(e){return k(e)}})),o.a.createElement("div",{className:"col-md-6 d-flex flex-row-reverse"},o.a.createElement(i.b,{onSearch:function(e){y(e),k(1)}}))),o.a.createElement("table",{className:"table table-striped"},o.a.createElement(i.c,{headers:[{name:"No#",field:"id",sortable:!1},{name:"Name",field:"name",sortable:!0},{name:"Email",field:"email",sortable:!0},{name:"Comment",field:"body",sortable:!1}],onSorting:function(e,t){return A({field:e,order:t})}}),o.a.createElement("tbody",null,T.map((function(e){return o.a.createElement("tr",null,o.a.createElement("th",{scope:"row",key:e.id},e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.body))})))))),f)}}}]);
//# sourceMappingURL=14.027f3566.chunk.js.map