(function(t){function e(e){for(var a,r,l=e[0],s=e[1],c=e[2],v=0,u=[];v<l.length;v++)r=l[v],i[r]&&u.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={1:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;o.push([9,0]),n()})({"2/4B":function(t,e,n){},"39RD":function(t,e,n){"use strict";var a=n("2/4B"),i=n.n(a);i.a},"4byI":function(t,e,n){},"7Ndm":function(t,e,n){"use strict";var a=n("kHdl"),i=n.n(a);i.a},9:function(t,e,n){t.exports=n("Vtdi")},ERsS:function(t,e,n){"use strict";var a=n("pScL"),i=n.n(a);i.a},Fkge:function(t,e,n){"use strict";var a=n("4byI"),i=n.n(a);i.a},OHWu:function(t,e,n){t.exports=n.p+"img/gmaps-static.c0a942a1.png"},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),i=n("zlta"),o=n.n(i),r=n("dV7z"),l=n("FVdZ"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{getEvents:t.getEvents,eventArr:t.eventArr}}),n("router-view",{attrs:{getEvents:t.getEvents,eventArr:t.eventArr}})],1)},c=[],d="https://whatsappening-server.herokuapp.com/events",v={API_URL:d},u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrapper indigo"},[a("img",{attrs:{src:n("X75v"),alt:""}}),a("div",{staticClass:"right",attrs:{id:"button-container"}})])])}],p=(n("ZYgd"),n("KHd+")),m={},g=Object(p["a"])(m,u,f,!1,null,"de662292",null),b=g.exports,h={components:{Header:b},data:function(){return{eventArr:[]}},methods:{getEvents:function(){var t=this;fetch(v.API_URL,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type"}}).then(function(t){return t.json()}).then(function(e){t.eventArr=e,t.eventArr.reverse()})}}},y=h,x=(n("7Ndm"),Object(p["a"])(y,s,c,!1,null,"0c9688f2",null)),_=x.exports,k=n("jE9Z"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-container"}},[n("div",{staticClass:"map-container"},[n("h4",[t._v("Events Near You")]),n("gmap-map",{staticStyle:{width:"65vw",height:"75vh"},attrs:{zoom:11,center:{lat:39.7392,lng:-104.9903}}},[n("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[t._v("\n      "+t._s(t.infoContent)+"\n    ")]),t._l(t.eventArr,function(e,a){return n("gmap-marker",{key:a,attrs:{position:e.location.geometry.location,clickable:!0},on:{click:function(n){t.toggleInfoWindow(e,a)}}})})],2)],1),n("div"),n("div",{staticClass:"cards-container"},[n("div",{attrs:{id:"event-section"}},[n("AddEventForm",{attrs:{eventArr:t.eventArr,getEvents:t.getEvents}})],1),t._l(t.eventArr,function(e){return n("PreviewCards",{key:e.id,attrs:{getEvents:t.getEvents,toggleInfoWindow:t.toggleInfoWindow,event:e}})})],2)])},w=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("h4",[t._v("You Are Here")]),a("img",{attrs:{id:"static-map",src:n("OHWu")}})])}],A={},$=A,L=(n("mIwK"),Object(p["a"])($,O,C,!1,null,null,null)),j=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-app":"true"}},[n("div",{ref:t.event,staticClass:"col s12 m7",attrs:{id:"preview-card"}},[n("v-card",[n("div",{on:{click:function(e){t.dialog3=!0,t.displaySelectedModal(),t.toggleInfoWindow(t.event)}}},[n("v-card-media",{attrs:{src:t.event.imageURL,height:"200px"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.event.title))]),n("div",[t._v(t._s(t.event.date+" @ "+t.event.time))]),n("div",[t._v(t._s(t.event.location.name))]),n("a",{attrs:{href:t.event.location.url,target:"_blank"}},[t._v("Map It")])])])],1),n("v-card-actions",{staticClass:"card-action"},[n("EditEventForm",{attrs:{event:t.event}}),n("v-btn",{attrs:{color:"red",dark:""},on:{click:function(e){t.deleteEvent(t.event)}}},[t._v("Delete")])],1)],1)],1),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"60%"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[n("v-card",[n("v-card-title",{staticClass:"card-content"},[n("div",{staticClass:"image-container"},[n("img",{staticClass:"modal-image",attrs:{src:t.selectedEvent.imageURL}})]),n("h3",[t._v(t._s(t.event.title))]),n("strong",[t._v(t._s(t.event.date+" @ "+t.event.time))]),n("h6",[t._v(t._s(t.selectedEvent.description))]),n("h6",[t._v(t._s(t.event.location.name))]),n("a",{attrs:{href:t.event.location.url,target:"_blank"}},[n("div",[t._v(t._s(t.event.location.formatted_address))])]),n("div",[t._v(t._s(t.event.location.formatted_phone_number))]),n("br"),n("p",[t._v("Posted By: Fion Wan "),n("small",[t._v("(⭐ Denver user)")])]),n("v-spacer"),n("v-spacer")],1),n("v-card-actions",{staticClass:"close-card"},[n("v-btn",{attrs:{color:"black",flat:""},on:{click:function(e){t.dialog3=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)},W=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"blue",dark:""},slot:"activator"},[t._v("Edit")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Edit Event")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Event Title",required:""},model:{value:t.event.title,callback:function(e){t.$set(t.event,"title",e)},expression:"event.title"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Category",required:""},model:{value:t.event.category,callback:function(e){t.$set(t.event,"category",e)},expression:"event.category"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Location",required:""},model:{value:t.event.location,callback:function(e){t.$set(t.event,"location",e)},expression:"event.location"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Date of Event",required:""},model:{value:t.event.date,callback:function(e){t.$set(t.event,"date",e)},expression:"event.date"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Time",required:""},model:{value:t.event.time,callback:function(e){t.$set(t.event,"time",e)},expression:"event.time"}})],1),n("v-flex",{attrs:{xs12:"",sm6s:"",md6:""}},[n("v-text-field",{attrs:{label:"Email",required:""},model:{value:t.event.email,callback:function(e){t.$set(t.event,"email",e)},expression:"event.email"}})],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Description"},model:{value:t.event.description,callback:function(e){t.$set(t.event,"description",e)},expression:"event.description"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Image URL"},model:{value:t.event.imageURL,callback:function(e){t.$set(t.event,"imageURL",e)},expression:"event.imageURL"}})],1)],1),n("small",[t._v("*indicates required field")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},I=[],S={props:["event"],data:function(){return{dialog:!1,body:{title:"",category:"",date:"",time:"",location:"",email:"",description:"",imageURL:""}}}},U=S,q=Object(p["a"])(U,P,I,!1,null,null,null),M=q.exports,D={props:["event","getEvents","toggleInfoWindow"],data:function(){return{dialog3:!1,selectedEvent:Object,upvotes:Array}},components:{EditEventForm:M},methods:{displaySelectedModal:function(){this.selectedEvent=this.event},deleteEvent:function(t){return fetch("".concat(v.API_URL,"/").concat(t._id),{method:"DELETE",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then(this.getEvents())}}},F=D,T=(n("Fkge"),Object(p["a"])(F,R,W,!1,null,null,null)),H=T.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-event-form",attrs:{"data-app":"true"}},[n("v-layout",{attrs:{row:"","justify-left":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"green darken-1",dark:""},slot:"activator"},[t._v("Add a new event")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("New Event")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Event Title",required:""},model:{value:t.body.title,callback:function(e){t.$set(t.body,"title",e)},expression:"body.title"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Category",required:""},model:{value:t.body.category,callback:function(e){t.$set(t.body,"category",e)},expression:"body.category"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""},model:{value:t.body.location,callback:function(e){t.$set(t.body,"location",e)},expression:"body.location"}},[t._v("\n                    Location*\n                    "),n("GmapAutocomplete",{on:{place_changed:t.setPlace}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Date of Event",required:""},model:{value:t.body.date,callback:function(e){t.$set(t.body,"date",e)},expression:"body.date"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Time",required:""},model:{value:t.body.time,callback:function(e){t.$set(t.body,"time",e)},expression:"body.time"}})],1),n("v-flex",{attrs:{xs12:"",sm6s:"",md6:""}},[n("v-text-field",{attrs:{label:"Email",required:""},model:{value:t.body.email,callback:function(e){t.$set(t.body,"email",e)},expression:"body.email"}})],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Description",required:""},model:{value:t.body.description,callback:function(e){t.$set(t.body,"description",e)},expression:"body.description"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Image URL",required:""},model:{value:t.body.imageURL,callback:function(e){t.$set(t.body,"imageURL",e)},expression:"body.imageURL"}})],1)],1),n("small",[t._v("*indicates required field")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.setPlace,t.postEvent(t.body)}},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Create Event")])],1)],1)],1)],1)],1)},N=[],K={props:["getEvents","eventArr"],data:function(){return{dialog:!1,markers:[],place:null,body:{title:"",category:"",date:"",time:"",location:{},pins:[],description:"",imageURL:""}}},methods:{resetBody:function(){this.body={title:"",category:"",date:"",time:"",location:{},pins:[],description:"",imageURL:""}},postEvent:function(t){return console.log(this.body),fetch(v.API_URL,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then(console.log(t),this.resetBody(),this.getEvents())},setPlace:function(t){this.place=t,this.body.location=this.place,this.markers.push({position:{lat:this.place.geometry.location.lat(),lng:this.place.geometry.location.lng()}}),this.body.pins=this.markers}}},V=K,z=(n("ERsS"),Object(p["a"])(V,Y,N,!1,null,null,null)),B=z.exports,G={name:"home",components:{Map:j,PreviewCards:H,AddEventForm:B},props:["getEvents","eventArr"],data:function(){return{dialog3:!1,infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},mounted:function(){this.getEvents()},methods:{toggleInfoWindow:function(t,e){this.infoWindowPos=t.location.geometry.location,this.infoContent=t.title,this.currentMidx==e?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=e)}}},Z=G,J=(n("39RD"),Object(p["a"])(Z,E,w,!1,null,null,null)),Q=J.exports;a["a"].use(k["a"]);var X=new k["a"]({routes:[{path:"/",name:"home",component:Q}]}),tt=(n("v0CA"),"AIzaSyAI4qy1NkS9mwFZRWyDFyLM9ohfV1ManIs"),et={G_KEY:tt};a["a"].use(o.a),a["a"].use(r,{load:{key:et.G_KEY,libraries:"places"}}),a["a"].component("infoWindow",r["InfoWindow"]),a["a"].component("GmapMarker",l["GmapMarker"]),a["a"].config.productionTip=!1,new a["a"]({router:X,render:function(t){return t(_)}}).$mount("#app")},X75v:function(t,e,n){t.exports=n.p+"img/logo2.536a8dbb.png"},YLQP:function(t,e,n){},ZYgd:function(t,e,n){"use strict";var a=n("yWCt"),i=n.n(a);i.a},kHdl:function(t,e,n){},mIwK:function(t,e,n){"use strict";var a=n("YLQP"),i=n.n(a);i.a},pScL:function(t,e,n){},yWCt:function(t,e,n){}});
//# sourceMappingURL=app.1e3a3dd4.js.map