(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dbf5c64"],{"0481":function(t,e,r){"use strict";var n=r("23e7"),i=r("a2bf"),a=r("7b0b"),s=r("50c4"),o=r("a691"),l=r("65f0");n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),r=s(e.length),n=l(e,0);return n.length=i(n,e,e,r,0,void 0===t?1:o(t)),n}})},"0789":function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return u}));r("99af");var n=r("d9f7");function i(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return(t=Array()).concat.apply(t,[e].concat(n))}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:e}},render:function(e,r){var a="transition".concat(r.props.group?"-group":""),s={props:{name:t,mode:r.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=r.props.origin,t.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(function(t){return t.style.position="absolute"}))),r.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(function(t){return t.style.display="none"}))),e(a,Object(n["a"])(r.data,s),r.children)}}}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:r}},render:function(r,i){return r("transition",Object(n["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var o=r("ade3"),l=r("80d2"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?"width":"height",n="offset".concat(Object(l["p"])(r));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},r,t.style[r])},enter:function(e){var i=e._initialStyle,a="".concat(e[n],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[r]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[r]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",visibility:"",overflow:t.style.overflow},r,t.style[r]),t.style.overflow="hidden",t.style[r]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[r]="0"}))},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[r]=e),delete t._initialStyle}},d=(a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition"),a("tab-reverse-transition"),a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("fade-transition")),u=(a("scale-transition"),a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition"));a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),s("expand-transition",c()),s("expand-x-transition",c("",!0))},"11ac":function(t,e,r){t.exports=r.p+"img/project4.9c0edbd4.jpeg"},"1b19":function(t,e,r){t.exports=r.p+"img/recentprojects.df88baeb.png"},"20f6":function(t,e,r){},"297c":function(t,e,r){"use strict";r("a9e3");var n=r("2b0e"),i=r("37c6");e["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},3500:function(t,e,r){var n={"./project1.jpeg":"ad38","./project2.jpeg":"d3f4","./project3.jpeg":"9334","./project4.jpeg":"11ac"};function i(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="3500"},"35df":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"overflow-hidden",attrs:{id:"recent-projects"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"primary text-center pa-5 white--text",attrs:{cols:"12",md:"6"}},[n("base-bubble-1",{staticStyle:{transform:"rotate(180deg) translateX(25%)"}}),n("base-heading",[t._v(" Recent Projects ")]),n("base-text",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipi"),n("br"),t._v(" scin elit. Etiam vulputate augue vel felis gravida"),n("br"),t._v(" porta. Lorem ipsum dolor sit amet. ")]),n("v-card",{attrs:{color:"secondary"}},[n("v-container",{staticClass:"pa-2"},[n("v-row",t._l(t.projects,(function(t){return n("v-col",{key:t,attrs:{cols:"12",md:"6"}},[n("a",{attrs:{href:"#"}},[n("v-img",{attrs:{src:r("3500")("./"+t+".jpeg"),"max-height":"300"}})],1)])})),1)],1)],1)],1),n("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[n("v-img",{attrs:{src:r("1b19"),height:"100%"}})],1)],1)],1)},i=[],a={name:"RecentProjects",data:function(){return{projects:["project1","project2","project3","project4"]}}},s=a,o=r("2877"),l=r("6544"),c=r.n(l),d=(r("0481"),r("4069"),r("a9e3"),r("5530")),u=(r("615b"),r("10d2")),h=r("297c"),f=r("1c87"),p=r("58df"),v=Object(p["a"])(h["a"],f["a"],u["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(d["a"])({"v-card":!0},f["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},u["a"].options.computed.classes.call(this))},styles:function(){var t=Object(d["a"])({},u["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=h["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),g=r("62ad"),m=(r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85"),r("a15b"),r("498a"),r("2b0e"));function b(t){return m["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,i=r.data,a=r.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,a)}})}var y=r("d9f7"),_=b("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,i=e.data,a=e.children,s=i.attrs;return s&&(i.attrs={},r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(y["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),a)}}),j=r("adda"),B=r("0fd9"),C=Object(o["a"])(s,n,i,!1,null,null,null);e["default"]=C.exports;c()(C,{VCard:v,VCol:g["a"],VContainer:_,VImg:j["a"],VRow:B["a"]})},"37c6":function(t,e,r){"use strict";var n=r("8e36");e["a"]=n["a"]},4069:function(t,e,r){var n=r("44d2");n("flat")},"615b":function(t,e,r){},"6ece":function(t,e,r){},"8e36":function(t,e,r){"use strict";r("a9e3"),r("c7cd");var n=r("5530"),i=r("ade3"),a=(r("6ece"),r("0789")),s=r("a9ad"),o=r("fe6c"),l=r("2b0e");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return l["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(i["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i["a"])({},t,(function(t){this.internalLazyValue=t}))})}var d=c(),u=d,h=r("7560"),f=r("80d2"),p=r("58df"),v=Object(p["a"])(s["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),u,h["a"]);e["a"]=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.$vuetify.rtl?"right":"left",Object(f["d"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(f["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["a"]:a["b"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(f["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},9334:function(t,e,r){t.exports=r.p+"img/project3.914df552.jpeg"},a2bf:function(t,e,r){"use strict";var n=r("e8b5"),i=r("50c4"),a=r("0366"),s=function(t,e,r,o,l,c,d,u){var h,f=l,p=0,v=!!d&&a(d,u,3);while(p<o){if(p in r){if(h=v?v(r[p],p,e):r[p],c>0&&n(h))f=s(t,e,h,i(h.length),f,c-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=h}f++}p++}return f};t.exports=s},ad38:function(t,e,r){t.exports=r.p+"img/project1.c44422b8.jpeg"},d3f4:function(t,e,r){t.exports=r.p+"img/project2.1d9eabe2.jpeg"}}]);
//# sourceMappingURL=chunk-6dbf5c64.b64a5e62.js.map