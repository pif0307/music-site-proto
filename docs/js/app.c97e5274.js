(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],m=0,v=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/music-site-proto/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0562":function(t,e,n){t.exports=n.p+"media/Timeline.d274eded.mp3"},"0a11":function(t,e,n){t.exports=n.p+"img/Selfmade Disaster.768522fb.jpg"},"0cc0":function(t,e,n){t.exports=n.p+"media/R.f88b9749.mp3"},"10c1":function(t,e,n){t.exports=n.p+"img/R.2336da66.jpg"},"22d9":function(t,e,n){t.exports=n.p+"media/Flower Rocket.4a4b6e28.mp3"},"3d86":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("MainNav"),n("v-main",[n("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavDrawer"),n("MusicNav"),n("AppBarNav")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{"hide-overlay":"",persistent:"","no-click-animation":""},model:{value:t.$store.state.music.playerNavState,callback:function(e){t.$set(t.$store.state.music,"playerNavState",e)},expression:"$store.state.music.playerNavState"}},[n("v-sheet",{attrs:{height:"100",elevation:"15"}},[n("v-progress-linear",{staticClass:"progress_slider mt-0 mb-5",attrs:{value:t.songTimeFloor,color:t.slider.color,height:"5"}}),n("div",[n("div",{staticClass:"d-flex justify-space-between align-center",staticStyle:{height:"100%"}},[n("div",{staticClass:"px-2"},[n("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:"secondary",fab:""}},[n("v-icon",[t._v("mdi-skip-previous")])],1),t.isPlaying?t._e():n("v-btn",{attrs:{icon:"",color:"primary",fab:""}},[n("v-icon",{attrs:{"x-large":""},on:{click:t.MusicPlay}},[t._v("mdi-play")])],1),t.isPlaying?n("v-btn",{attrs:{icon:"",color:"primary",fab:""}},[n("v-icon",{attrs:{"x-large":""},on:{click:t.MusicPause}},[t._v("mdi-pause")])],1):t._e(),n("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:"secondary",fab:""}},[n("v-icon",[t._v("mdi-skip-next")])],1)],1),n("span",{staticClass:"pl-2"},[n("v-img",{staticClass:"rounded",attrs:{width:"60",height:"60",src:t.currentSong.coverImage}})],1),n("div",{staticClass:"pl-3 pr-10"},[n("div",{staticClass:"text-h6"},[t._v(t._s(t.currentSong.title))]),n("div",{staticClass:"single-line-clamp"},[n("span",{staticClass:"text-subtitle-2 grey--text"},[t._v(" "+t._s(t.currentSong.artist)+" ")])])]),n("v-spacer"),n("v-slider",{attrs:{"hide-details":"",color:"secondary","track-color":"gray","thumb-label":"",value:100*t.songVolume},on:{change:t.ChangeVolume}}),n("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:"secondary",fab:""}},[n("v-icon",[t._v(t._s(t.volumeIcon))])],1),n("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:"secondary",fab:""}},[n("v-icon",[t._v("mdi-playlist-music")])],1),n("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:"secondary",fab:""}},[n("v-icon",[t._v("mdi-heart-outline")])],1)],1)])],1)],1)},l=[],u={data:function(){return{slider:{color:"primary"},time:20,timer:null}},methods:{MusicPlay:function(){console.log(this.songTime),this.$store.dispatch("music/playSong")},MusicPause:function(){console.log(this.$store.state.music.player.currentTime),this.$store.dispatch("music/pauseSong")},ChangeVolume:function(t){this.$store.dispatch("music/changeVolume",t)}},computed:{currentSong:function(){return this.$store.state.music.currentSong},isPlaying:function(){return this.$store.state.music.isPlaying},songDuration:function(){return this.$store.state.music.player.duration},songTimeFloor:function(){return this.$store.state.music.songTime/this.$store.state.music.player.duration*100},songVolume:function(){return this.$store.state.music.volume},volumeIcon:function(){return 0==this.songVolume?"mdi-volume-low":this.songVolume<.7?"mdi-volume-medium":"mdi-volume-high"}}},m=u,v=(n("d9c0"),n("2877")),p=n("6544"),d=n.n(p),f=n("288c"),g=n("8336"),h=n("132d"),y=n("adda"),b=n("8e36"),_=n("8dd9"),x=n("ba0d"),S=n("2fa4"),V=Object(v["a"])(m,c,l,!1,null,null,null),w=V.exports;d()(V,{VBottomSheet:f["a"],VBtn:g["a"],VIcon:h["a"],VImg:y["a"],VProgressLinear:b["a"],VSheet:_["a"],VSlider:x["a"],VSpacer:S["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{"mini-variant":t.toggle,permanent:"",app:"",clipped:""}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item",{staticClass:"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("Jane Smith")]),n("v-list-item-subtitle",[t._v("Logged In")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-tooltip",{attrs:{right:"",disabled:!t.toggle},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-list-item-icon",t._g({},a),[n("v-icon",[t._v("mdi-logout-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)]}}])},[n("span",[t._v("Logout")])])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[t._l(t.navItems,(function(e){return[e.divider?n("v-divider",{key:e.title}):t._e(),n("v-list-item",{key:e.title,attrs:{link:"",href:e.to}},[n("v-tooltip",{attrs:{right:"",disabled:!t.toggle},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[n("v-list-item-icon",t._g({},i),[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)]}}],null,!0)},[n("span",[t._v(t._s(e.text))])])],1)]}))],2)],1)},$=[],k=(n("b0c0"),{data:function(){return{navButtonToggle:!1,navItems:[{text:"Dashboard",icon:"mdi-view-dashboard",to:"/"},{text:"History",icon:"mdi-history",to:"/history"},{text:"Starred",icon:"mdi-heart",to:"/starred"},{text:"Info",icon:"mdi-information",to:"/info",divider:!0},{text:"Settings",icon:"mdi-cog",to:"/settings"}]}},computed:{toggle:function(){var t=!1;switch(this.$vuetify.breakpoint.name){case"xs":case"sm":t=!0;break;case"md":case"lg":case"xl":default:t=!1;break}return t}}}),C=k,T=n("ce7e"),P=n("8860"),j=n("da13"),O=n("8270"),L=n("5d23"),M=n("34c3"),N=n("f774"),B=n("3a2f"),A=Object(v["a"])(C,I,$,!1,null,null,null),E=A.exports;d()(A,{VDivider:T["a"],VIcon:h["a"],VList:P["a"],VListItem:j["a"],VListItemAvatar:O["a"],VListItemContent:L["a"],VListItemIcon:M["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VNavigationDrawer:N["a"],VTooltip:B["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticStyle:{"z-index":"9999"},attrs:{color:"primary",dark:"",app:"",dense:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.navButtonToggle=!t.navButtonToggle}}}),n("v-toolbar-title",[t._v("Music Site"),n("teleport",{attrs:{to:"/"}})],1),n("v-spacer"),n("v-text-field",{attrs:{label:"Search","single-line":"","hide-details":""}}),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1)},D=[],R=n("40dc"),H=n("5bc1"),J=n("8654"),z=n("2a7f"),q={},G=Object(v["a"])(q,F,D,!1,null,null,null),K=G.exports;d()(G,{VAppBar:R["a"],VAppBarNavIcon:H["a"],VBtn:g["a"],VIcon:h["a"],VSpacer:S["a"],VTextField:J["a"],VToolbarTitle:z["a"]});var Q={components:{MusicNav:w,NavDrawer:E,AppBarNav:K}},U=Q,W=Object(v["a"])(U,s,o,!1,null,null,null),X=W.exports,Y={name:"App",components:{MainNav:X},watch:{}},Z=Y,tt=n("7496"),et=n("f6c4"),nt=Object(v["a"])(Z,i,r,!1,null,null,null),at=nt.exports;d()(nt,{VApp:tt["a"],VMain:et["a"]});var it=n("8c4f"),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-container",[n("v-row",t._l(t.musics,(function(e,a){return n("v-card",{key:e.title,staticClass:"mx-3 my-3",attrs:{"max-width":"344",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"text-overline mb-4"},[t._v("Music")]),n("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(e.title)+" ")]),n("v-list-item-subtitle",[t._v(" "+t._s(e.artist)+" ")])],1),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}},[n("v-img",{attrs:{src:e.coverImage}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{rounded:"",text:"",icon:""},on:{click:function(e){return t.play(a)}}},[n("v-icon",[t._v("mdi-play")])],1),n("v-spacer"),n("v-btn",{attrs:{rounded:"",text:"",icon:""}},[n("v-icon",[t._v("mdi-playlist-plus")])],1),n("v-btn",{attrs:{rounded:"",text:"",icon:""}},[n("v-icon",[t._v("mdi-heart-outline")])],1)],1)],1)})),1)],1)],1)])},st=[],ot=[{title:"R",artist:"Plum",src:n("0cc0"),coverImage:n("10c1")},{title:"Timeline",artist:"Plum",src:n("0562"),coverImage:n("9d0e")},{title:"Selfmade Disaster",artist:"Plum",src:n("c20e"),coverImage:n("0a11")},{title:"Flower Rocket",artist:"Plum",src:n("22d9"),coverImage:n("a4a5")}],ct={name:"Home",data:function(){return{musics:ot}},methods:{open:function(){this.$store.state.music.playerNavState=!0},play:function(t){this.open(),this.$store.dispatch("music/changeSong",this.musics[t]),this.$store.dispatch("music/playSong")}},computed:{},components:{}},lt=ct,ut=n("b0af"),mt=n("99d9"),vt=n("a523"),pt=n("0fd9"),dt=Object(v["a"])(lt,rt,st,!1,null,null,null),ft=dt.exports;d()(dt,{VBtn:g["a"],VCard:ut["a"],VCardActions:mt["a"],VContainer:vt["a"],VIcon:h["a"],VImg:y["a"],VListItem:j["a"],VListItemAvatar:O["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VRow:pt["a"],VSpacer:S["a"]});var gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("History page")]),n("h2",[t._v(t._s(t.$store.state.music.isPlaying))]),n("v-btn",{on:{click:function(e){return t.$store.commit("increase")}}},[t._v("increase")])],1)},ht=[],yt={},bt=Object(v["a"])(yt,gt,ht,!1,null,null,null),_t=bt.exports;d()(bt,{VBtn:g["a"]});var xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Starred page")])},St=[],Vt={},wt=Object(v["a"])(Vt,xt,St,!1,null,null,null),It=wt.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Info")])])}],Ct={},Tt=Object(v["a"])(Ct,$t,kt,!1,null,null,null),Pt=Tt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Settings")])},Ot=[],Lt={},Mt=Object(v["a"])(Lt,jt,Ot,!1,null,null,null),Nt=Mt.exports;a["a"].use(it["a"]);var Bt=[{path:"/",name:"Dashboard",component:ft},{path:"/history",name:"About",component:_t},{path:"/starred",name:"Starred",component:It},{path:"/info",name:"Info",component:Pt},{path:"/Settings",name:"Settings",component:Nt}],At=new it["a"]({mode:"history",base:"/music-site-proto/",routes:Bt}),Et=At,Ft=n("f309");a["a"].use(Ft["a"]);var Dt=new Ft["a"]({theme:{themes:{dark:{background:"#121212",primary:"#F06292",secondary:"#3b88d5"},light:{background:"#f2f2f2",primary:"#F06292",secondary:"#64B5F6"}}}}),Rt=n("2f62"),Ht={title:"title",artist:"artist",src:null},Jt={namespaced:!0,state:{playerNavState:!1,isPlaying:!1,currentSong:Ht,songTime:0,player:new Audio,timer:null,volume:.2},actions:{playSong:function(t){var e=t.state,n=t.commit;n("play"),e.player.play(),this.timer=setInterval((function(){n("timerFunction")}),1e3)},pauseSong:function(t){var e=t.state,n=t.commit;n("pause"),e.player.pause(),clearInterval(this.timer)},changeSong:function(t,e){var n=t.commit;n("change",e)},changeVolume:function(t,e){var n=t.state;n.volume=e/100,n.player.volume=e/100}},mutations:{play:function(t){t.isPlaying=!0,t.player.volume=t.volume,t.player.currentTime=t.songTime},pause:function(t){t.isPlaying=!1,t.songTime=t.player.currentTime},change:function(t,e){t.songTime=0,t.currentSong=e,t.player.src=e.src},timerFunction:function(t){t.songTime=t.player.currentTime,console.log(t.songTime)}},watch:{},getters:{}},zt=Jt;a["a"].use(Rt["a"]);var qt=new Rt["a"].Store({state:{counter:1},mutations:{increase:function(t){t.counter+=1}},actions:{},modules:{music:zt}});a["a"].config.productionTip=!1,new a["a"]({router:Et,vuetify:Dt,store:qt,render:function(t){return t(at)}}).$mount("#app")},"9d0e":function(t,e,n){t.exports=n.p+"img/Timeline.768522fb.jpg"},a4a5:function(t,e,n){t.exports=n.p+"img/Flower Rocket.c79726c8.jpg"},c20e:function(t,e,n){t.exports=n.p+"media/Selfmade Disaster.9d65d576.mp3"},d9c0:function(t,e,n){"use strict";n("3d86")}});
//# sourceMappingURL=app.c97e5274.js.map