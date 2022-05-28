(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[22],{144:function(e,t,a){"use strict";var o="https://github.com/codegeous/react-component-depot/tree/master/src/",c="https://youtu.be/";t.a={api:"<<Your backend API base URL>>",GOOGLE:{GAPI_KEY:"",reCaptcha:"<<Your recaptcha token>>",GA_TRACKING_CODE:"<<Your GA Tracking Code>>"},hCaptchaSiteToken:"<<Your hCaptcha Token>>",links:{customGoogleMaps:{tutorial:"".concat(c,"xUsn2nj4fy0"),code:"".concat(o,"pages/GoogleMaps/CustomStyle/index.js")},buttonLoaderHooks:{tutorial:"".concat(c,"nCEnqQABC5A"),code:"".concat(o,"pages/ButtonLoadingSpinner/index.js")},otpBox:{tutorial:"".concat(c,"qf56frPk5lA"),code:"".concat(o,"pages/OTPBox/index.js")},contactListCRUD:{tutorial:"",code:"".concat(o,"pages/ContactList/index.js")},showAndHideElements:{tutorial:"".concat(c,"jRxoO-Zd0pQ"),code:"".concat(o,"pages/ReactBasics/ShowAndHide/index.js")},scrollIndicator:{tutorial:"".concat(c,"-rYmnXV6sYw"),code:"".concat(o,"components/ScrollIndicator/index.js")},floatingYoutubePlayer:{tutorial:"".concat(c,"lT4uJI6TXAg"),code:"".concat(o,"components/YoutubePlayer/index.js")},signup:{tutorial:"",code:"".concat(o,"pages/Signup/index.js")},hooks:{tutorial:"".concat(c,"fT7jBMG7GIM"),code:"".concat(o,"pages/HooksDemo/index.js")},datatable:{tutorial:"".concat(c,"emX5KvZ6Hbo"),code:"".concat(o,"pages/DataTable/index.js")},batteryStatus:{tutorial:"".concat(c,"50cOgnVmflE"),code:"".concat(o,"pages/BatteryStatus/index.js")},fileupload:{tutorial:"".concat(c,"_XD5ko7Fy9E"),code:"".concat(o,"pages/FileUpload/index.js")},geoLocation:{tutorial:"".concat(c,"TID8Z29je5o"),code:"".concat(o,"pages/GeoLocation/index.js")},infniteScrolling:{tutorial:"".concat(c,"8nFNxnjoTZ4"),code:"".concat(o,"pages/InfiniteScrolling/index.js")},recaptcha:{tutorial:"".concat(c,"e_vMoPCBfqU"),code:"".concat(o,"pages/ReCaptcha/index.js")},hcaptcha:{tutorial:"".concat(c,"KcLeXxlkqf0"),code:"".concat(o,"pages/HCaptcha/index.js")},autocomplete:{tutorial:"".concat(c,"G2QyeafA3gw"),code:"".concat(o,"pages/CountrySearch/index.js")},searchFilter:{tutorial:"".concat(c,"aBWwJ4ibpps"),code:"".concat(o,"pages/SearchFilter/index.js")},accordion:{tutorial:"".concat(c,"AjQctXfmOqw"),code:"".concat(o,"pages/AccordionDemo/index.js")},leafletBasic:{tutorial:"".concat(c,"i9oX1upSKjI"),code:"".concat(o,"pages/Leaflet/basic.js")},leafletMarker:{tutorial:"".concat(c,"UNSYoW3gkDc"),code:"".concat(o,"pages/Leaflet/markers.js")},leafletCurrentLocation:{tutorial:"".concat(c,"7jWYLirwt0k"),code:"".concat(o,"pages/Leaflet/currentLocation.js")},leafletDraw:{tutorial:"".concat(c,"Bp_6MkKSOQE"),code:"".concat(o,"pages/Leaflet/draw.js")},treeList:{tutorial:"".concat(c,"uRSzyVubap4"),code:"".concat(o,"pages/TreeList/index.js")},fileDownloader:{tutorial:"".concat(c,"0AS9Gfd1j5s"),code:"".concat(o,"pages/FileDownloader/index.js")},imageZoom:{tutorial:"".concat(c,"uhgQFqr9ezQ"),code:"".concat(o,"pages/ImageZoom/index.js")},starRating:{tutorial:"".concat(c,"nErdlbLWqtA"),code:"".concat(o,"pages/Rating/index.js")},leafletStaticMap:{tutorial:"".concat(c,"sz_FaLpMNZc"),code:"".concat(o,"pages/Leaflet/StaticMap.js")},leafletPrint:{tutorial:"".concat(c,"mhGqgY2l-ik"),code:"".concat(o,"pages/Leaflet/Print.js")},tabs:{tutorial:"".concat(c,"MLYH-o_EdaI"),code:"".concat(o,"pages/SimpleTabs/index.js")},dnd:{tutorial:"".concat(c,"O2dTW3uNAeQ"),code:"".concat(o,"pages/TeamSelection/index.js")},cancelableFetch:{tutorial:"".concat(c,"AwTxrCgIBWk"),code:"".concat(o,"pages/CancelableFetchRequest/index.js")},debouncedSearch:{tutorial:"".concat(c,"Wf7INnelvkI"),code:"".concat(o,"pages/SearchFilterDebounced/index.js")}},youtubeVideos:[{title:"Full page loading spinner for API calls in ReactJS with Redux",id:"vCs50MV-TbM"},{title:"File Upload with progress bar in React JS and axios",id:"Ti8QNiRRzOA"},{title:"Add loading spinner for buttons in reactjs",id:"vgDObZGhQuw"},{title:"Display fallback image for a broken image link in reactjs ",id:"90P1_xCaim4"},{title:"Material style preloader for image tag in react js",id:"GBHBjv6xfY4"},{title:"Building a search filter in reactjs",id:"RM_nXOyHwN0"}]}},145:function(e,t,a){"use strict";var o=a(0),c=a.n(o),n=a(144),i=function(e){return function(t){var a=t.page,o={};return a&&n.a.links[a]&&(o.code=n.a.links[a].code,o.tutorial=n.a.links[a].tutorial),c.a.createElement(e,Object.assign({},o,t))}},r=a(148),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Category",t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";r.a.event({category:e,action:t,label:a})};return t};t.a=i((function(e){var t=e.code,a=void 0===t?"":t,o=e.tutorial,n=void 0===o?"":o,i=l("External Links");return c.a.createElement("h6",{className:"text-center"},n&&c.a.createElement("a",{href:n,target:"_blank",onClick:function(e){return i("Youtube Tutorials Page",n)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-danger mr-2 p-3"},"Youtube Tuorial of this demo"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))),a&&c.a.createElement("a",{href:a,target:"_blank",onClick:function(e){return i("Github Tutorials Page",a)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-secondary mr-2 p-3"},"Github Source Code"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))))}))},221:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(40),i=a(28),r=(a(221),a(41)),l=function(e){var t=e.title,a=e.content,n=e.active,l=e.multiple,s=e.onToggle,u=Object(o.useState)(!1),d=Object(i.a)(u,2),m=d[0],p=d[1];return c.a.createElement("div",{className:"card ".concat((l?m:n)?"accordion-active":"")},c.a.createElement("div",{className:"card-header",onClick:function(){p((function(e){return!e})),s()}},t,c.a.createElement("span",{className:"accordion-icon"},c.a.createElement(r.a,{icon:"chevron-right"}))),c.a.createElement("div",{className:"card-body"},a))},s=function(e){var t=e.data,a=e.multiple,n=void 0!==a&&a,r=Object(o.useState)(0),s=Object(i.a)(r,2),u=s[0],d=s[1];return c.a.createElement("div",{className:"custom-accordion"},t.map((function(e,t){return c.a.createElement(l,Object.assign({key:t},e,{active:u===t,multiple:n,onToggle:function(e){return d((function(e){return e===t?"":t}))}}))})))},u=a(145);t.default=function(){var e=[{title:"Why can\u2019t I sign in?",content:"Make sure you\u2019re trying to sign in to the right application system. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt."},{title:"Where can I find out about funding?",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?"},{title:"How can I make a change to my application?",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?"}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{title:"Building Accordion in ReactJS"}),c.a.createElement(u.a,{page:"accordion"}),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-6 text-center"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h3",null,"Frequently Asked Questions"))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 text-left"},c.a.createElement(s,{data:e})),c.a.createElement("div",{className:"col-12 text-left mt-4"},c.a.createElement("h4",null,'Accordion with "multiple" option'),c.a.createElement(s,{data:e,multiple:!0}))))))}}}]);
//# sourceMappingURL=22.f82abe33.chunk.js.map