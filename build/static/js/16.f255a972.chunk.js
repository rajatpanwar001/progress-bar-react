(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[16],{144:function(e,t,a){"use strict";var n="https://github.com/codegeous/react-component-depot/tree/master/src/",c="https://youtu.be/";t.a={api:"<<Your backend API base URL>>",GOOGLE:{GAPI_KEY:"",reCaptcha:"<<Your recaptcha token>>",GA_TRACKING_CODE:"<<Your GA Tracking Code>>"},hCaptchaSiteToken:"<<Your hCaptcha Token>>",links:{customGoogleMaps:{tutorial:"".concat(c,"xUsn2nj4fy0"),code:"".concat(n,"pages/GoogleMaps/CustomStyle/index.js")},buttonLoaderHooks:{tutorial:"".concat(c,"nCEnqQABC5A"),code:"".concat(n,"pages/ButtonLoadingSpinner/index.js")},otpBox:{tutorial:"".concat(c,"qf56frPk5lA"),code:"".concat(n,"pages/OTPBox/index.js")},contactListCRUD:{tutorial:"",code:"".concat(n,"pages/ContactList/index.js")},showAndHideElements:{tutorial:"".concat(c,"jRxoO-Zd0pQ"),code:"".concat(n,"pages/ReactBasics/ShowAndHide/index.js")},scrollIndicator:{tutorial:"".concat(c,"-rYmnXV6sYw"),code:"".concat(n,"components/ScrollIndicator/index.js")},floatingYoutubePlayer:{tutorial:"".concat(c,"lT4uJI6TXAg"),code:"".concat(n,"components/YoutubePlayer/index.js")},signup:{tutorial:"",code:"".concat(n,"pages/Signup/index.js")},hooks:{tutorial:"".concat(c,"fT7jBMG7GIM"),code:"".concat(n,"pages/HooksDemo/index.js")},datatable:{tutorial:"".concat(c,"emX5KvZ6Hbo"),code:"".concat(n,"pages/DataTable/index.js")},batteryStatus:{tutorial:"".concat(c,"50cOgnVmflE"),code:"".concat(n,"pages/BatteryStatus/index.js")},fileupload:{tutorial:"".concat(c,"_XD5ko7Fy9E"),code:"".concat(n,"pages/FileUpload/index.js")},geoLocation:{tutorial:"".concat(c,"TID8Z29je5o"),code:"".concat(n,"pages/GeoLocation/index.js")},infniteScrolling:{tutorial:"".concat(c,"8nFNxnjoTZ4"),code:"".concat(n,"pages/InfiniteScrolling/index.js")},recaptcha:{tutorial:"".concat(c,"e_vMoPCBfqU"),code:"".concat(n,"pages/ReCaptcha/index.js")},hcaptcha:{tutorial:"".concat(c,"KcLeXxlkqf0"),code:"".concat(n,"pages/HCaptcha/index.js")},autocomplete:{tutorial:"".concat(c,"G2QyeafA3gw"),code:"".concat(n,"pages/CountrySearch/index.js")},searchFilter:{tutorial:"".concat(c,"aBWwJ4ibpps"),code:"".concat(n,"pages/SearchFilter/index.js")},accordion:{tutorial:"".concat(c,"AjQctXfmOqw"),code:"".concat(n,"pages/AccordionDemo/index.js")},leafletBasic:{tutorial:"".concat(c,"i9oX1upSKjI"),code:"".concat(n,"pages/Leaflet/basic.js")},leafletMarker:{tutorial:"".concat(c,"UNSYoW3gkDc"),code:"".concat(n,"pages/Leaflet/markers.js")},leafletCurrentLocation:{tutorial:"".concat(c,"7jWYLirwt0k"),code:"".concat(n,"pages/Leaflet/currentLocation.js")},leafletDraw:{tutorial:"".concat(c,"Bp_6MkKSOQE"),code:"".concat(n,"pages/Leaflet/draw.js")},treeList:{tutorial:"".concat(c,"uRSzyVubap4"),code:"".concat(n,"pages/TreeList/index.js")},fileDownloader:{tutorial:"".concat(c,"0AS9Gfd1j5s"),code:"".concat(n,"pages/FileDownloader/index.js")},imageZoom:{tutorial:"".concat(c,"uhgQFqr9ezQ"),code:"".concat(n,"pages/ImageZoom/index.js")},starRating:{tutorial:"".concat(c,"nErdlbLWqtA"),code:"".concat(n,"pages/Rating/index.js")},leafletStaticMap:{tutorial:"".concat(c,"sz_FaLpMNZc"),code:"".concat(n,"pages/Leaflet/StaticMap.js")},leafletPrint:{tutorial:"".concat(c,"mhGqgY2l-ik"),code:"".concat(n,"pages/Leaflet/Print.js")},tabs:{tutorial:"".concat(c,"MLYH-o_EdaI"),code:"".concat(n,"pages/SimpleTabs/index.js")},dnd:{tutorial:"".concat(c,"O2dTW3uNAeQ"),code:"".concat(n,"pages/TeamSelection/index.js")},cancelableFetch:{tutorial:"".concat(c,"AwTxrCgIBWk"),code:"".concat(n,"pages/CancelableFetchRequest/index.js")},debouncedSearch:{tutorial:"".concat(c,"Wf7INnelvkI"),code:"".concat(n,"pages/SearchFilterDebounced/index.js")}},youtubeVideos:[{title:"Full page loading spinner for API calls in ReactJS with Redux",id:"vCs50MV-TbM"},{title:"File Upload with progress bar in React JS and axios",id:"Ti8QNiRRzOA"},{title:"Add loading spinner for buttons in reactjs",id:"vgDObZGhQuw"},{title:"Display fallback image for a broken image link in reactjs ",id:"90P1_xCaim4"},{title:"Material style preloader for image tag in react js",id:"GBHBjv6xfY4"},{title:"Building a search filter in reactjs",id:"RM_nXOyHwN0"}]}},145:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(144),r=function(e){return function(t){var a=t.page,n={};return a&&o.a.links[a]&&(n.code=o.a.links[a].code,n.tutorial=o.a.links[a].tutorial),c.a.createElement(e,Object.assign({},n,t))}},i=a(148),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Category",t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";i.a.event({category:e,action:t,label:a})};return t};t.a=r((function(e){var t=e.code,a=void 0===t?"":t,n=e.tutorial,o=void 0===n?"":n,r=s("External Links");return c.a.createElement("h6",{className:"text-center"},o&&c.a.createElement("a",{href:o,target:"_blank",onClick:function(e){return r("Youtube Tutorials Page",o)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-danger mr-2 p-3"},"Youtube Tuorial of this demo"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))),a&&c.a.createElement("a",{href:a,target:"_blank",onClick:function(e){return r("Github Tutorials Page",a)},rel:"noopener noreferrer"},c.a.createElement("span",{className:"badge badge-secondary mr-2 p-3"},"Github Source Code"," ",c.a.createElement("i",{className:"fas fa-external-link-alt"}))))}))},161:function(e,t,a){"use strict";var n=a(28),c=a(0);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Load",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Loading...",a=Object(c.useState)(!1),o=Object(n.a)(a,2),r=o[0],i=o[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){r?(s.current.disabled=!0,s.current.innerHTML='<i class="fas fa-spinner fa-spin"></i> '+t):(s.current.disabled=!1,s.current.innerHTML=e)}),[r]),[s,i]}},165:function(e,t,a){"use strict";var n=a(28),c=a(0),o=a.n(c),r=a(41);t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return[a?"text":"password",o.a.createElement(r.a,{icon:a?"eye-slash":"eye",onClick:function(){return i((function(e){return!e}))}})]}},219:function(e,t,a){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var o=a(0),r="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",a=e;a--;)t+=r[64*Math.random()|0];return t},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.id,c=void 0===n?null:n;return a.renderCaptcha=a.renderCaptcha.bind(a),a.resetCaptcha=a.resetCaptcha.bind(a),a.removeCaptcha=a.removeCaptcha.bind(a),a.handleOnLoad=a.handleOnLoad.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a.handleExpire=a.handleExpire.bind(a),a.handleError=a.handleError.bind(a),a.state={isApiReady:"undefined"!==typeof hcaptcha,isRemoved:!1,elementId:c||"hcaptcha-"+i(),captchaId:""},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.languageOverride,t=this.state,a=t.isApiReady,n=t.elementId;if(a)this.renderCaptcha();else{var c=function(e,t){var a=document.createElement("script");return window.hcaptchaOnLoad=e,a.src="https://hcaptcha.com/1/api.js?render=explicit&onload=hcaptchaOnLoad",a.async=!0,t&&(a.src+="&hl="+t),a}(this.handleOnLoad,e);document.getElementById(n).appendChild(c)}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.isApiReady,a=e.isRemoved,n=e.captchaId;t&&!a&&(hcaptcha.reset(n),hcaptcha.remove(n))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isApiReady===t.isApiReady&&this.state.isRemoved===t.isRemoved}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.endpoint;["sitekey","size","theme","tabindex","languageOverride","endpoint"].every((function(a){return e[a]===t.props[a]}))||(this.removeCaptcha(),this.renderCaptcha())}},{key:"renderCaptcha",value:function(){var e=this.state,t=e.isApiReady,a=e.elementId;if(t){var c=hcaptcha.render(document.getElementById(a),n({},this.props,{"error-callback":this.handleError,"expired-callback":this.handleExpire,callback:this.handleSubmit}));this.setState({isRemoved:!1,captchaId:c})}}},{key:"resetCaptcha",value:function(){var e=this.state,t=e.isApiReady,a=e.isRemoved,n=e.captchaId;t&&!a&&hcaptcha.reset(n)}},{key:"removeCaptcha",value:function(){var e=this.state,t=e.isApiReady,a=e.isRemoved,n=e.captchaId;t&&!a&&(this.setState({isRemoved:!0}),hcaptcha.remove(n))}},{key:"handleOnLoad",value:function(){this.setState({isApiReady:!0}),this.renderCaptcha()}},{key:"handleSubmit",value:function(e){var t=this.props.onVerify,a=this.state,n=a.isRemoved,c=a.captchaId;"undefined"===typeof hcaptcha||n||t(hcaptcha.getResponse(c))}},{key:"handleExpire",value:function(){var e=this.props.onExpire,t=this.state,a=t.isApiReady,n=t.isRemoved,c=t.captchaId;a&&!n&&(hcaptcha.reset(c),e&&e())}},{key:"handleError",value:function(e){var t=this.props.onError,a=this.state,n=a.isApiReady,c=a.isRemoved,o=a.captchaId;n&&!c&&(hcaptcha.reset(o),t&&t(e))}},{key:"execute",value:function(){var e=this.state,t=e.isApiReady,a=e.isRemoved,n=e.captchaId;t&&!a&&hcaptcha.execute(n)}},{key:"render",value:function(){var e=this.state.elementId;return o.createElement("div",{id:e})}}]),t}(o.Component);e.exports=s},282:function(e,t,a){"use strict";a.r(t);var n=a(28),c=a(0),o=a.n(c),r=a(40),i=a(41),s=a(165),l=a(219),u=a.n(l),d=a(144),p=a(161),h=a(63),m=a.n(h),f=a(145);t.default=function(){var e=Object(s.a)(),t=Object(n.a)(e,2),a=t[0],l=t[1],h=Object(p.a)("Create Account","Creating"),g=Object(n.a)(h,2),v=g[0],b=g[1],y=Object(c.useState)(""),j=Object(n.a)(y,2),E=j[0],x=j[1],k=Object(c.useState)(""),C=Object(n.a)(k,2),O=C[0],R=C[1],S=Object(c.useRef)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{title:"Signup Form"}),o.a.createElement(f.a,{page:"hcaptcha"}),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-lg-6 text-center"},o.a.createElement("div",{className:"card bg-light"},o.a.createElement("article",{className:"card-body mx-auto",style:{maxWidth:"400px"}},o.a.createElement("h4",{className:"card-title mt-3 text-center"},"Create Account"),o.a.createElement("p",{className:"text-center"},"Get started with your free account"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement(i.a,{icon:"user"}))),o.a.createElement("input",{name:"",className:"form-control",placeholder:"Full name",type:"text"})),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement(i.a,{icon:"envelope"}))),o.a.createElement("input",{name:"",className:"form-control",placeholder:"Email address",type:"email"})),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement(i.a,{icon:"lock"}))),o.a.createElement("input",{className:"form-control",placeholder:"Create password",type:a}),o.a.createElement("span",{className:"password-toogle-icon"},l)),o.a.createElement("div",{className:"form-group"},o.a.createElement(u.a,{ref:S,sitekey:d.a.hCaptchaSiteToken,onVerify:function(e){return x(e)},onExpire:function(e){return x("")}})),o.a.createElement("div",{className:"form-group"},O&&o.a.createElement("p",{className:"text-danger"},O),o.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",ref:v,onClick:function(){E?(R(""),b(!0),m.a.post(d.a.api+"user/signup-with-hcaptcha",{token:E,email:"ghjsfgjs@fgdg.dsgds"}).then((function(e){alert("Sign up success")})).catch((function(e){var t=e.response;R(t.data.error)})).finally((function(){S.current.resetCaptcha(),x(""),b(!1)}))):R("You must verify the captcha")}}," ","Create Account"," ")),o.a.createElement("p",{className:"text-center"},"Have an account? ",o.a.createElement("a",{href:""},"Log In")," ")))))))}}}]);
//# sourceMappingURL=16.f255a972.chunk.js.map