(this["webpackJsonpwsb-airlines"]=this["webpackJsonpwsb-airlines"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports={datePicker:"TravelDatePicker_datePicker__kaF3n",dateCell:"TravelDatePicker_dateCell__1LKVm",today:"TravelDatePicker_today__2P9oH",selected:"TravelDatePicker_selected__1GEUa"}},,function(e,t,a){e.exports={icon:"TopNavbar_icon__2qiW-",navbarDropdown:"TopNavbar_navbarDropdown__2qodl"}},function(e,t,a){e.exports={headerText:"App_headerText__1Yih3",content:"App_content__3La4L",footer:"App_footer__29Fsv",root:"App_root__2h8CC"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrRight.c8725fb6.svg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/personCircle.987687b8.svg"},function(e,t,a){e.exports=a.p+"static/media/xCircle.ba82ea60.svg"},function(e,t,a){e.exports=a.p+"static/media/menu_open.db287481.svg"},,function(e,t,a){e.exports=a.p+"static/media/WsbAirlines.0e5858c7.flr"},function(e,t,a){e.exports={serviceImg:"Services_serviceImg__21JIv",cardBody:"Services_cardBody__38mjI"}},function(e,t,a){e.exports=a.p+"static/media/underground-parking.c44be0df.jpg"},function(e,t,a){e.exports=a.p+"static/media/airport.4f2bfca9.jpg"},function(e,t,a){e.exports=a.p+"static/media/hotel.54bad788.jpg"},,function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=(a(49),a(50),a(11)),i=a(1),s=a(3),m=a(2),u=a.n(m),d=a(13),f=a.n(d),E=a(24),b=a.n(E),v=function(e,t){var a=e<10?"0".concat(e):e,n="".concat(t,"-").concat(a),c=u()(n,"YYYY-MM").daysInMonth(),r=u()("".concat(n,"-01"),"YYYY-MM-dd").weekday();r=0===r?7:r;var l=0;return Array.from({length:c+r-1},(function(e,t){return t<r-1||t>c+r-1?0:++l})).reduce((function(e,t){if(e[e.length-1].length<7)e[e.length-1].push([t,!1]);else{var a=[];a.push([t,!1]),e.push(a)}return e}),[[]])},p=function(e){var t=e.todayDate,a=e.onDateSelect,r=Object(n.useState)(t),l=Object(s.a)(r,2),o=l[0],i=l[1],m=Object(n.useState)(t.getMonth()+1),u=Object(s.a)(m,2),d=u[0],E=u[1],p=Object(n.useState)(t.getFullYear()),g=Object(s.a)(p,2),N=g[0],h=g[1],y=Object(n.useMemo)((function(){return v(d,N)}),[d,N]),j=Object(n.useCallback)((function(e){if(e){var t=new Date(N,d-1,e);i(t),a(t)}}),[d,N,a]),w=Object(n.useCallback)((function(){d<12?E(d+1):(E(1),h(N+1))}),[N,d]),O=Object(n.useCallback)((function(){d>1?E(d-1):(E(12),h(N-1))}),[N,d]),k=y.map((function(e,a){return c.a.createElement("div",{className:"row",key:"week[".concat(a,"]")},e.map((function(e,a){var n=["col-xs text-center",f.a.dateCell];return e[0]===t.getDate()&&d===t.getMonth()+1&&N===t.getFullYear()&&n.push(f.a.today),e[0]===o.getDate()&&d===o.getMonth()+1&&N===o.getFullYear()&&n.push(f.a.selected),c.a.createElement("div",{className:n.join(" "),onClick:function(){return j(e[0])},key:"day[".concat(a,"]")},c.a.createElement("p",null,0===e[0]?null:e[0]))})))}));return c.a.createElement("div",{className:"".concat(f.a.datePicker," border-bottom")},c.a.createElement("div",{className:"container bg-light rounded-top border pb-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col",style:{fontSize:"1.2rem"}},o.getDate()," - ",o.getMonth()+1," -"," ",o.getFullYear())),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},d," - ",N),c.a.createElement("div",{className:"col-6 text-right"},c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return O()}},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:b.a,style:{transform:"rotate(-180deg)"},alt:"previous"}))),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return w()}},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:b.a,alt:"next"}))))))),c.a.createElement("div",{className:"container mt-2"},k))},g=a(43),N=a(7);function h(e){return{type:"SET_ORIGIN_CITY",name:e}}function y(e){return{type:"SET_DESTINATION_CITY",name:e}}var j=function(){var e=Object(N.c)((function(e){return e.cities})),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(N.b)();Object(n.useEffect)((function(){l(e);var t=Object(g.a)(e).slice(1);return u(t),function(){d(h(null)),d(y(null))}}),[e,d]);var f=Object(n.useCallback)((function(t,a){d(a?h(t):y(t)),a&&u(e.filter((function(e){return e.name!==t})))}),[d,e]);return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{className:"card-body px-0"},c.a.createElement("h5",{className:"card-title"},"Wybierz tras\u0119 przelotu"),c.a.createElement("form",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-md-3 col-form-label "},"Sk\u0105d?"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("select",{defaultValue:"",className:"form-control",onChange:function(e){var t=e.target;return f(t.value,!0)}},c.a.createElement("option",{disabled:!0,hidden:!0,value:""},"-Wybierz-"),r.map((function(e){return c.a.createElement("option",{key:e.name,value:e.name},e.name)})))))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-md-3 col-form-label "},"Dok\u0105d?"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("select",{defaultValue:"",className:"form-control",disabled:!1,onChange:function(e){var t=e.target;return f(t.value,!1)}},c.a.createElement("option",{disabled:!0,hidden:!0,value:""},"-Wybierz-"),m.map((function(e){return c.a.createElement("option",{key:e.name,value:e.name},e.name)})))))))))))},w=a(31),O=a(32),k=a(14),_=a(33),x=function(){function e(){Object(w.a)(this,e)}return Object(O.a)(e,null,[{key:"flightResults",value:function(e,t,a){return e&&t&&a?[{date:u()(a).format("DD-MM-yyyy"),origin:e,destination:t,flights:[{start:u()(a).hour(11).minute(30),end:u()(a).hour(12).minute(0)},{start:u()(a).hour(18).minute(30),end:u()(a).hour(19).minute(0)}]},{date:u()(a).add(2,"days").format("DD-MM-yyyy"),origin:e,destination:t,flights:[{start:u()(a).hour(11).minute(30),end:u()(a).hour(12).minute(0)},{start:u()(a).hour(18).minute(30),end:u()(a).hour(19).minute(0)}]},{date:u()(a).add(3,"days").format("DD-MM-yyyy"),origin:e,destination:t,flights:[{start:u()(a).hour(21).minute(50),end:u()(a).hour(23).minute(0)}]}]:[]}},{key:"cities",get:function(){return Object(k.a)(this,S)[S]||(Object(k.a)(this,S)[S]=[{name:"Warszawa",code:"WW"},{name:"Gdynia",code:"GA"},{name:"Radom",code:"RA"},{name:"Sosnowiec",code:"SO"},{name:"Konin",code:"PK"}],Object.freeze(Object(k.a)(this,S)[S])),Object(k.a)(this,S)[S]}}]),e}(),S=Object(_.a)("_cities");Object.defineProperty(x,S,{writable:!0,value:void 0});var C=c.a.memo((function(e){var t=e.flight,a=e.from,r=e.to,l=Object(n.useMemo)((function(){return u()(t.start).format("HH:mm")}),[t]),o=Object(n.useMemo)((function(){return u()(t.end).format("HH:mm")}),[t]);return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},a," - ",r),c.a.createElement("div",{className:"card-footer"},l," - ",o))})),M=c.a.memo((function(e){var t=e.date,a=e.origin,r=e.destination,l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){return m(x.flightResults(a,r,t)),function(){return m(null)}}),[t,a,r]),c.a.createElement("div",{className:"container mt-2"},0===i.length?null:c.a.createElement("div",{className:"row mb-2",style:{height:"2rem"}},c.a.createElement("div",{className:"col"},c.a.createElement(n.Fragment,null,c.a.createElement("a",{className:"carousel-control-prev bg-dark rounded",href:"#flightResults",role:"button","data-slide":"prev"},c.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Previous")),c.a.createElement("a",{className:"carousel-control-next bg-dark rounded",href:"#flightResults",role:"button","data-slide":"next"},c.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Next"))))),c.a.createElement("div",{id:"flightResults",className:"carousel slide","data-ride":"carousel","data-interval":"false"},c.a.createElement("div",{className:"carousel-inner"},i.length?null:c.a.createElement("div",{className:"carousel-item active"},"wybierz tras\u0119, aby zobaczy\u0107 dost\u0119pne loty"),i.map((function(e,t){return c.a.createElement("div",{className:"carousel-item ".concat(0===t?"active":""),key:t},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,e.date))),c.a.createElement("div",{className:"row"},e.flights.map((function(t,a){return c.a.createElement("div",{key:a,className:"col-lg-12 col-md-6 mb-2"},c.a.createElement(C,{flight:t,from:e.origin,to:e.destination}))}))))})))))})),D=function(){var e=Object(n.useMemo)((function(){return new Date}),[]),t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(N.c)((function(e){return e.originCity})),i=Object(N.c)((function(e){return e.destinationCity}));return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-6"},c.a.createElement(j,null)),c.a.createElement("div",{className:"col-lg-5 col-md-6 d-flex justify-content-center mt-lg-1 mt-md-3"},c.a.createElement(p,{todayDate:e,onDateSelect:function(e){return l(e)}})),c.a.createElement("div",{className:"col-lg-7 col-md-12 mb-2"},c.a.createElement(M,{date:r,origin:o,destination:i})),c.a.createElement("div",{className:"col-12"})))},T=a(15),z=a.n(T),I=a(34),W=a.n(I),A=a(35),Y=a.n(A);function R(){var e=window.innerHeight;return{width:document.documentElement.clientWidth,height:e}}function P(){var e=Object(n.useState)(R()),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(R())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}function L(e){return 500*e/1024}var F=a(36),H=a.n(F),B=function(){var e=Object(N.c)((function(e){return e.userName})),t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(N.b)(),m=Object(n.useCallback)((function(e,t){t&&(t.preventDefault(),t.target.value=""),i(function(e){return{type:"SET_USER_NAME",userName:e}}(e))}),[i]),u=e?c.a.createElement("a",{className:"d-flex justify-content-between"},c.a.createElement("span",{className:"navbar-text text-center mr-2 text-truncate"},"Witaj, ",e),c.a.createElement("button",{type:"button",className:"btn btn-outline-default"},c.a.createElement("img",{src:Y.a,className:z.a.icon,alt:"log out",onClick:function(){return m(null)}}))):c.a.createElement("a",{style:{cursor:"pointer"},"data-toggle":"modal","data-target":"#loginModal",className:"d-flex justify-content-space"},c.a.createElement("img",{className:"".concat(z.a.icon," mr-1 d-block"),src:W.a,alt:"Ustaw identyfikator"}),c.a.createElement("span",null,"Zaloguj")),d=P().width,f=["navbar navbar-expand-sm fixed-top navbar-light"];return Object(n.useMemo)((function(){return L(d)}),[d])<function(){var e=Object(n.useState)(document.documentElement.scrollTop),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(document.documentElement.scrollTop)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a}()+80&&f.push("bg-light"),c.a.createElement(n.Fragment,null,c.a.createElement("nav",{className:f.join(" ")},c.a.createElement(o.b,{to:"/",className:"navbar-brand",exact:!0,activeClassName:"active"},"WSB Airlines"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainMenu"},c.a.createElement("img",{src:H.a,alt:"menu"})),c.a.createElement("div",{className:"d-flex justify-content-end align-items-center w-100 ".concat(z.a.rightMenuItems)},c.a.createElement("div",null,c.a.createElement("div",{className:"collapse navbar-collapse",id:"mainMenu"},c.a.createElement("ul",{className:"navbar-nav ".concat(z.a.navbarDropdown," rounded-bottom rounded-left")},c.a.createElement("li",{className:"nav-item mr-2"},c.a.createElement(o.b,{to:"/",activeClassName:"active",className:"h-100 d-flex align-items-center"},"Wyszukiwarka")),c.a.createElement("li",{className:"nav-item mr-2"},c.a.createElement(o.b,{exact:!0,to:"/services",activeClassName:"active",className:"h-100 d-flex align-items-center"},"Us\u0142ugi dodatkowe")),c.a.createElement("li",{className:"nav-item"},u)))))),c.a.createElement("div",{className:"modal fade",id:"loginModal",tabIndex:"-1",role:"dialog"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-body"},c.a.createElement("form",{className:"form-inline",onSubmit:function(e){return m(r,e)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"col-sm-5"},c.a.createElement("label",{htmlFor:"loginInput",className:"mr-sm-2 my-1"},"Login")),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement("input",{id:"loginInput",value:r,className:"form-control",placeholder:"Wpisz identyfikator",onChange:function(e){return l(e.target.value)}}))),c.a.createElement("div",{className:"form-group mt-sm-2"},c.a.createElement("div",{className:"col-sm-5"},c.a.createElement("label",{htmlFor:"passwordInput",className:"mr-sm-2 my-1"},"Has\u0142o")),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement("input",{type:"password",id:"passwordInput",className:"form-control",placeholder:"Wpisz has\u0142o"}))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(e){return m(r,e)}},"Zaloguj"))))))},G=a(37),U=a.n(G),V=a(38),K=a.n(V),X=a(16),J=a.n(X),Z=a(39),q=a.n(Z),$=a(40),Q=a.n($),ee=a(41),te=a.n(ee),ae=a(42),ne=a.n(ae),ce=function(){var e=Object(n.useMemo)((function(){return[{title:"Parking",img:Q.a,text:"Wykup miejsce na parkingu."},{title:"Pierwsze\u0144stwo",img:te.a,text:"Wykup pierwsze\u0144stwo wsiadania, aby nie czeka\u0107 w kolejce."},{title:"Hotel",img:ne.a,text:"Zarezerwuj pok\xf3j w hotelu przy lotnisku."}]}),[]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row my-2"},e.map((function(e){return c.a.createElement("div",{className:"col-lg-4",key:e.title},c.a.createElement("div",{className:"card my-2"},c.a.createElement("svg",{className:"card-img-top",viewBox:"0 0 100 100",style:{backgroundImage:"url(".concat(e.img,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},c.a.createElement("defs",null,c.a.createElement("linearGradient",{id:"grad1",x1:"1",y1:"1",x2:"0.2",y2:"0.2"},c.a.createElement("stop",{offset:"0%",stopColor:"#ffe48d"}),c.a.createElement("stop",{offset:"80%",stopColor:"white"}))),c.a.createElement("path",{d:"M 0,100 L 100,80 V100 H0",fill:"url(#grad1)"}),c.a.createElement("text",{x:"50%",y:"90",textAnchor:"middle",stroke:"black",strokeWidth:"0.02rem",strokeLinecap:"butt",fill:"white",style:{fontSize:"0.8rem",fontWeight:"bold"}},e.title)),c.a.createElement("div",{className:"card-body text-left ".concat(q.a.cardBody)},c.a.createElement("p",{className:"card-text"},e.text),c.a.createElement("button",{href:"#",className:"btn btn-outline-secondary",disabled:!0},"Wykup"))))}))))};var re=function(){var e=P().width,t=Object(n.useMemo)((function(){return L(e)}),[e]);return c.a.createElement("div",{className:J.a.root},c.a.createElement(o.a,{basename:"/wsb-airlines"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{style:{top:"".concat(t-50,"px")},className:"".concat(J.a.headerText," pl-2")},"Lot w lepsz\u0105 przysz\u0142o\u015b\u0107!"),c.a.createElement("div",{className:"row"},c.a.createElement(U.a,{width:e,height:t,animationName:"mainAnimation",file:K.a})),c.a.createElement(B,null),c.a.createElement("div",{className:J.a.content},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/services"},c.a.createElement(ce,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(D,null)))),c.a.createElement("div",{className:"".concat(J.a.footer," row py-2")},c.a.createElement("div",{className:"col-sm-6 text-sm-right pr-2"},c.a.createElement("h6",null,"Wsb Airlines ",c.a.createElement("br",null),"sp z o.o.")),c.a.createElement("div",{className:"col-sm-6 d-flex flex-column small"},"Kontakt:",c.a.createElement("br",null),"Gdynia 81-650 Narcyzowa 23a/12",c.a.createElement("br",null),"Tel:",c.a.createElement("br",null),"+48 999 999 999")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(21),oe=a(9),ie={userName:"",headAnimHeight:null,cities:x.cities,originCity:null,destinationCity:null};var se=Object(le.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_NAME":return Object(oe.a)(Object(oe.a)({},e),{},{userName:t.userName});case"SET_ORIGIN_CITY":return Object(oe.a)(Object(oe.a)({},e),{},{originCity:t.name});case"SET_DESTINATION_CITY":return Object(oe.a)(Object(oe.a)({},e),{},{destinationCity:t.name});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N.a,{store:se},c.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.03e0175d.chunk.js.map