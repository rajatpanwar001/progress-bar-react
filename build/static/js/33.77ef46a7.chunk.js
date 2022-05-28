(this["webpackJsonpreact-component-depot"]=this["webpackJsonpreact-component-depot"]||[]).push([[33],{144:function(e,a,t){"use strict";var n="https://github.com/codegeous/react-component-depot/tree/master/src/",i="https://youtu.be/";a.a={api:"<<Your backend API base URL>>",GOOGLE:{GAPI_KEY:"",reCaptcha:"<<Your recaptcha token>>",GA_TRACKING_CODE:"<<Your GA Tracking Code>>"},hCaptchaSiteToken:"<<Your hCaptcha Token>>",links:{customGoogleMaps:{tutorial:"".concat(i,"xUsn2nj4fy0"),code:"".concat(n,"pages/GoogleMaps/CustomStyle/index.js")},buttonLoaderHooks:{tutorial:"".concat(i,"nCEnqQABC5A"),code:"".concat(n,"pages/ButtonLoadingSpinner/index.js")},otpBox:{tutorial:"".concat(i,"qf56frPk5lA"),code:"".concat(n,"pages/OTPBox/index.js")},contactListCRUD:{tutorial:"",code:"".concat(n,"pages/ContactList/index.js")},showAndHideElements:{tutorial:"".concat(i,"jRxoO-Zd0pQ"),code:"".concat(n,"pages/ReactBasics/ShowAndHide/index.js")},scrollIndicator:{tutorial:"".concat(i,"-rYmnXV6sYw"),code:"".concat(n,"components/ScrollIndicator/index.js")},floatingYoutubePlayer:{tutorial:"".concat(i,"lT4uJI6TXAg"),code:"".concat(n,"components/YoutubePlayer/index.js")},signup:{tutorial:"",code:"".concat(n,"pages/Signup/index.js")},hooks:{tutorial:"".concat(i,"fT7jBMG7GIM"),code:"".concat(n,"pages/HooksDemo/index.js")},datatable:{tutorial:"".concat(i,"emX5KvZ6Hbo"),code:"".concat(n,"pages/DataTable/index.js")},batteryStatus:{tutorial:"".concat(i,"50cOgnVmflE"),code:"".concat(n,"pages/BatteryStatus/index.js")},fileupload:{tutorial:"".concat(i,"_XD5ko7Fy9E"),code:"".concat(n,"pages/FileUpload/index.js")},geoLocation:{tutorial:"".concat(i,"TID8Z29je5o"),code:"".concat(n,"pages/GeoLocation/index.js")},infniteScrolling:{tutorial:"".concat(i,"8nFNxnjoTZ4"),code:"".concat(n,"pages/InfiniteScrolling/index.js")},recaptcha:{tutorial:"".concat(i,"e_vMoPCBfqU"),code:"".concat(n,"pages/ReCaptcha/index.js")},hcaptcha:{tutorial:"".concat(i,"KcLeXxlkqf0"),code:"".concat(n,"pages/HCaptcha/index.js")},autocomplete:{tutorial:"".concat(i,"G2QyeafA3gw"),code:"".concat(n,"pages/CountrySearch/index.js")},searchFilter:{tutorial:"".concat(i,"aBWwJ4ibpps"),code:"".concat(n,"pages/SearchFilter/index.js")},accordion:{tutorial:"".concat(i,"AjQctXfmOqw"),code:"".concat(n,"pages/AccordionDemo/index.js")},leafletBasic:{tutorial:"".concat(i,"i9oX1upSKjI"),code:"".concat(n,"pages/Leaflet/basic.js")},leafletMarker:{tutorial:"".concat(i,"UNSYoW3gkDc"),code:"".concat(n,"pages/Leaflet/markers.js")},leafletCurrentLocation:{tutorial:"".concat(i,"7jWYLirwt0k"),code:"".concat(n,"pages/Leaflet/currentLocation.js")},leafletDraw:{tutorial:"".concat(i,"Bp_6MkKSOQE"),code:"".concat(n,"pages/Leaflet/draw.js")},treeList:{tutorial:"".concat(i,"uRSzyVubap4"),code:"".concat(n,"pages/TreeList/index.js")},fileDownloader:{tutorial:"".concat(i,"0AS9Gfd1j5s"),code:"".concat(n,"pages/FileDownloader/index.js")},imageZoom:{tutorial:"".concat(i,"uhgQFqr9ezQ"),code:"".concat(n,"pages/ImageZoom/index.js")},starRating:{tutorial:"".concat(i,"nErdlbLWqtA"),code:"".concat(n,"pages/Rating/index.js")},leafletStaticMap:{tutorial:"".concat(i,"sz_FaLpMNZc"),code:"".concat(n,"pages/Leaflet/StaticMap.js")},leafletPrint:{tutorial:"".concat(i,"mhGqgY2l-ik"),code:"".concat(n,"pages/Leaflet/Print.js")},tabs:{tutorial:"".concat(i,"MLYH-o_EdaI"),code:"".concat(n,"pages/SimpleTabs/index.js")},dnd:{tutorial:"".concat(i,"O2dTW3uNAeQ"),code:"".concat(n,"pages/TeamSelection/index.js")},cancelableFetch:{tutorial:"".concat(i,"AwTxrCgIBWk"),code:"".concat(n,"pages/CancelableFetchRequest/index.js")},debouncedSearch:{tutorial:"".concat(i,"Wf7INnelvkI"),code:"".concat(n,"pages/SearchFilterDebounced/index.js")}},youtubeVideos:[{title:"Full page loading spinner for API calls in ReactJS with Redux",id:"vCs50MV-TbM"},{title:"File Upload with progress bar in React JS and axios",id:"Ti8QNiRRzOA"},{title:"Add loading spinner for buttons in reactjs",id:"vgDObZGhQuw"},{title:"Display fallback image for a broken image link in reactjs ",id:"90P1_xCaim4"},{title:"Material style preloader for image tag in react js",id:"GBHBjv6xfY4"},{title:"Building a search filter in reactjs",id:"RM_nXOyHwN0"}]}},145:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=t(144),r=function(e){return function(a){var t=a.page,n={};return t&&o.a.links[t]&&(n.code=o.a.links[t].code,n.tutorial=o.a.links[t].tutorial),i.a.createElement(e,Object.assign({},n,a))}},c=t(148),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Category",a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";c.a.event({category:e,action:a,label:t})};return a};a.a=r((function(e){var a=e.code,t=void 0===a?"":a,n=e.tutorial,o=void 0===n?"":n,r=l("External Links");return i.a.createElement("h6",{className:"text-center"},o&&i.a.createElement("a",{href:o,target:"_blank",onClick:function(e){return r("Youtube Tutorials Page",o)},rel:"noopener noreferrer"},i.a.createElement("span",{className:"badge badge-danger mr-2 p-3"},"Youtube Tuorial of this demo"," ",i.a.createElement("i",{className:"fas fa-external-link-alt"}))),t&&i.a.createElement("a",{href:t,target:"_blank",onClick:function(e){return r("Github Tutorials Page",t)},rel:"noopener noreferrer"},i.a.createElement("span",{className:"badge badge-secondary mr-2 p-3"},"Github Source Code"," ",i.a.createElement("i",{className:"fas fa-external-link-alt"}))))}))},226:function(e){e.exports=JSON.parse('[{"id":278,"name":"K. Mbapp\xe9","firstname":"Kylian","lastname":"Mbapp\xe9 Lottin","age":23,"birth":{"date":"1998-12-20","place":"Paris","country":"France"},"nationality":"France","height":"178 cm","weight":"73 kg","injured":false,"photo":"https://media.api-sports.io/football/players/278.png"},{"id":2059,"name":"W. Ben Yedder","firstname":"Wissam","lastname":"Ben Yedder","age":31,"birth":{"date":"1990-08-12","place":"Sarcelles","country":"France"},"nationality":"France","height":"170 cm","weight":"68 kg","injured":false,"photo":"https://media.api-sports.io/football/players/2059.png"},{"id":666,"name":"M. Demb\xe9l\xe9","firstname":"Moussa","lastname":"Demb\xe9l\xe9","age":25,"birth":{"date":"1996-07-12","place":"Pontoise","country":"France"},"nationality":"France","height":"183 cm","weight":"73 kg","injured":false,"photo":"https://media.api-sports.io/football/players/666.png"},{"id":2780,"name":"V. Osimhen","firstname":"Victor James","lastname":"Osimhen","age":23,"birth":{"date":"1998-12-29","place":"Lagos","country":"Nigeria"},"nationality":"Nigeria","height":"185 cm","weight":"78 kg","injured":false,"photo":"https://media.api-sports.io/football/players/2780.png"},{"id":276,"name":"Neymar","firstname":"Neymar","lastname":"da Silva Santos J\xfanior","age":29,"birth":{"date":"1992-02-05","place":"Mogi das Cruzes","country":"Brazil"},"nationality":"Brazil","height":"175 cm","weight":"68 kg","injured":false,"photo":"https://media.api-sports.io/football/players/276.png"},{"id":216,"name":"M. Icardi","firstname":"Mauro Emanuel","lastname":"Icardi Rivero","age":28,"birth":{"date":"1993-02-19","place":"Rosario","country":"Argentina"},"nationality":"Argentina","height":"181 cm","weight":"75 kg","injured":false,"photo":"https://media.api-sports.io/football/players/216.png"},{"id":20535,"name":"H. Diallo","firstname":"Habibou Mouhamadou","lastname":"Diallo","age":26,"birth":{"date":"1995-06-18","place":"Thies","country":"Senegal"},"nationality":"Senegal","height":"186 cm","weight":"79 kg","injured":false,"photo":"https://media.api-sports.io/football/players/20535.png"},{"id":550,"name":"K. Dolberg","firstname":"Kasper","lastname":"Dolberg","age":24,"birth":{"date":"1997-10-06","place":"Silkeborg","country":"Denmark"},"nationality":"Denmark","height":"187 cm","weight":"83 kg","injured":false,"photo":"https://media.api-sports.io/football/players/550.png"},{"id":2478,"name":"D. Benedetto","firstname":"Dar\xedo Ismael","lastname":"Benedetto","age":31,"birth":{"date":"1990-05-17","place":"Berazategui","country":"Argentina"},"nationality":"Argentina","height":"177 cm","weight":"75 kg","injured":false,"photo":"https://media.api-sports.io/football/players/2478.png"},{"id":2216,"name":"M. Niang","firstname":"M\'Baye Babacar","lastname":"Niang","age":27,"birth":{"date":"1994-12-19","place":"Meulan-en-Yvelines","country":"France"},"nationality":"Senegal","height":"184 cm","weight":"75 kg","injured":false,"photo":"https://media.api-sports.io/football/players/2216.png"},{"id":21437,"name":"D. Bouanga","firstname":"Denis","lastname":"Bouanga","age":27,"birth":{"date":"1994-11-11","place":"Le Mans","country":"France"},"nationality":"Gabon","height":"175 cm","weight":"70 kg","injured":false,"photo":"https://media.api-sports.io/football/players/21437.png"},{"id":21591,"name":"A. Delort","firstname":"Andy","lastname":"Delort","age":30,"birth":{"date":"1991-10-09","place":"Sete","country":"France"},"nationality":"Algeria","height":"182 cm","weight":"82 kg","injured":false,"photo":"https://media.api-sports.io/football/players/21591.png"},{"id":1374,"name":"I. Slimani","firstname":"Islam","lastname":"Slimani","age":33,"birth":{"date":"1988-06-18","place":"Alger","country":"Algeria"},"nationality":"Algeria","height":"188 cm","weight":"83 kg","injured":false,"photo":"https://media.api-sports.io/football/players/1374.png"},{"id":667,"name":"M. Depay","firstname":"Memphis","lastname":"Depay","age":27,"birth":{"date":"1994-02-13","place":"Moordrecht","country":"Netherlands"},"nationality":"Netherlands","height":"176 cm","weight":"78 kg","injured":false,"photo":"https://media.api-sports.io/football/players/667.png"},{"id":21393,"name":"S. Guirassy","firstname":"Serhou Yadaly","lastname":"Guirassy","age":25,"birth":{"date":"1996-03-12","place":"Arles","country":"France"},"nationality":"France","height":"187 cm","weight":"82 kg","injured":false,"photo":"https://media.api-sports.io/football/players/21393.png"},{"id":1912,"name":"D. Payet","firstname":"Dimitri","lastname":"Payet","age":34,"birth":{"date":"1987-03-29","place":"Saint-Pierre","country":"R\xe9union"},"nationality":"France","height":"175 cm","weight":"77 kg","injured":false,"photo":"https://media.api-sports.io/football/players/1912.png"},{"id":22261,"name":"A. Thomasson","firstname":"Adrien","lastname":"Thomasson","age":28,"birth":{"date":"1993-12-10","place":"Bourg-Saint-Maurice","country":"France"},"nationality":"France","height":"177 cm","weight":"72 kg","injured":false,"photo":"https://media.api-sports.io/football/players/22261.png"},{"id":2210,"name":"A. Hunou","firstname":"Adrien","lastname":"Hunou","age":27,"birth":{"date":"1994-01-19","place":"Evry","country":"France"},"nationality":"France","height":"176 cm","weight":"66 kg","injured":false,"photo":"https://media.api-sports.io/football/players/2210.png"},{"id":266,"name":"\xc1. Di Mar\xeda","firstname":"\xc1ngel Fabi\xe1n","lastname":"Di Mar\xeda Hern\xe1ndez","age":33,"birth":{"date":"1988-02-14","place":"Rosario","country":"Argentina"},"nationality":"Argentina","height":"180 cm","weight":"75 kg","injured":false,"photo":"https://media.api-sports.io/football/players/266.png"},{"id":22264,"name":"L. Ajorque","firstname":"Ludovic","lastname":"Ajorque","age":27,"birth":{"date":"1994-02-25","place":"Saint-Denis","country":"R\xe9union"},"nationality":"France","height":"197 cm","weight":"82 kg","injured":false,"photo":"https://media.api-sports.io/football/players/22264.png"}]')},288:function(e,a,t){"use strict";t.r(a);var n=t(33),i=t(28),o=t(0),r=t.n(o),c=t(40),l=t(226),s=t(292),d=t(293),p=t(145),g=function(e){var a=e.name,t=(e.age,e.nationality),n=e.photo,o=e.index,c=e.playerType,l=e.onDropPlayer,s=Object(d.a)({item:{type:c,index:o},end:function(e,a){var t=a.getDropResult();e&&t&&l(e)},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(i.a)(s,2),g=(p[0].isDragging,p[1]);return r.a.createElement("li",{className:"list-group-item my-1 p-2",ref:g},r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-1"},r.a.createElement("img",{src:n,className:"img-thumbnail border-secondary rounded-circle"})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card-body py-1 px-2 text-left"},r.a.createElement("h5",{className:"card-title d-inline"},a),r.a.createElement("p",{className:"card-text d-inline"},", ",t))))))};a.default=function(){var e=Object(o.useState)((function(){return l})),a=Object(i.a)(e,2),t=a[0],d=a[1],m=Object(o.useState)([]),u=Object(i.a)(m,2),h=u[0],f=u[1],b=Object(s.a)({accept:"player",collect:function(e){return{isOver:!!e.isOver()}}}),y=Object(i.a)(b,2),j=y[0].isOver,k=y[1],x=Object(s.a)({accept:"team",collect:function(e){return{isOver:!!e.isOver()}}}),E=Object(i.a)(x,2),w=E[0].isOver,v=E[1],S=function(e){console.log(e),e&&"player"===e.type?(f((function(a){return[].concat(Object(n.a)(a),[t[e.index]])})),d((function(a){return a.filter((function(a,t){return t!==e.index}))}))):(d((function(a){return[].concat(Object(n.a)(a),[h[e.index]])})),f((function(a){return a.filter((function(a,t){return t!==e.index}))})))},D=j?"bg-warning":"bg-light",A=w?"bg-warning":"bg-light";return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Team Selection (Drag And Drop)"}),r.a.createElement(p.a,{page:"dnd"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h2",null,"Team Selection Component"),r.a.createElement("p",null,"Demonstrating react-dnd by implementing team selection UI"),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-5 border m-2 ".concat(A)},r.a.createElement("div",{className:"bg-info row text-white"},r.a.createElement("div",{className:"col font-weight-bold"},"Available Players")),r.a.createElement("ul",{className:"list-group py-2 h-100",ref:v},t.map((function(e,a){return r.a.createElement(g,Object.assign({},e,{key:e.id,index:a,playerType:"player",onDropPlayer:S}))})))),r.a.createElement("div",{className:"col-5 border m-2 ".concat(D)},r.a.createElement("div",{className:"bg-success row text-white"},r.a.createElement("div",{className:"col font-weight-bold"},"THE A-TEAM")),r.a.createElement("ul",{className:"list-group py-2 h-100",ref:k},h.map((function(e,a){return r.a.createElement(g,Object.assign({},e,{key:e.id,index:a,playerType:"team",onDropPlayer:S}))}))))))))}}}]);
//# sourceMappingURL=33.77ef46a7.chunk.js.map