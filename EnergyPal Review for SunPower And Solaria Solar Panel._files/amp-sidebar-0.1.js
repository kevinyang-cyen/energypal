(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"2102130314001",m:0,f:(function(AMP,_){
'use strict';var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},p={};try{p.__proto__=ca;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ab=b.prototype};function t(a){return a?Array.prototype.slice.call(a):[]};var u=self.AMP_CONFIG||{},da=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ea(a){if(self.document&&self.document.head&&(!self.location||!da.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ea("runtime-host");u.geoApiUrl||ea("amp-geo-api");function fa(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];if(e instanceof Error&&!b){b=void 0;var f=Object.getOwnPropertyDescriptor(e,"message");if(f&&f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ha(a){var b=fa.apply(null,arguments);setTimeout(function(){self.__AMP_REPORT_ERROR(b);throw b;})}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};
var ia=self.__AMP_LOG;function v(){if(!ia.user)throw Error("failed to call initLogConstructor");return ia.user};function w(){this.o=null}k=w.prototype;k.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};k.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};k.removeAll=function(){this.o&&(this.o.length=0)};k.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};k.getHandlerCount=function(){return this.o?this.o.length:0};function x(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function A(a,b){var c=B(a);c=ja(c);return z(c,b)}function ka(a,b){a=B(a);a=ja(a);return la(a,b)?z(a,b):null}function B(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ja(a){a=B(a);return a.isSingleDoc()?a.win:a}function z(a,b){la(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function la(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var ma;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var C;function na(a){return":not([toolbar]) [autoscroll]".replace(/^|,/g,"$&"+a+" ")};function oa(a){if(void 0===a.isConnected){do if(a=qa(a),a.host)a=a.host;else break;while(1)}}function qa(a){if(Node.prototype.getRootNode)return a.getRootNode()||a;for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);return a}function ra(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}
function D(a,b){return a.closest?a.closest(b):ra(a,function(c){var d=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector;return d?d.call(c,b):!1})}function sa(a){return"rtl"==(a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr")};function E(a,b){var c=this;this.Ja=z(a,"timer");this.Qa=b;this.Oa=0;this.W=-1;this.la=0;this.ra=!1;this.Na=function(){c.ea()}}E.prototype.isPending=function(){return-1!=this.W};E.prototype.schedule=function(a){var b=a||this.Oa;this.ra&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.la?(this.cancel(),this.la=c,this.W=this.Ja.delay(this.Na,b),!0):!1};E.prototype.ea=function(){this.W=-1;this.la=0;this.ra=!0;this.Qa();this.ra=!1};
E.prototype.cancel=function(){this.isPending()&&(this.Ja.cancel(this.W),this.W=-1)};function ta(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function ua(a,b){return 0>a.indexOf(b)?(a.push(b),!0):!1};var F;function va(a){if(void 0!==F)return F;F=!1;try{var b={get passive(){F=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return F};function wa(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function xa(a,b,c){this.B=a;this.h=[];this.P=[];this.A=[];this.j=[];this.l=null;this.Xa=b;this.Ya=c;this.ga=!1;this.ea=new E(a.ownerDocument.defaultView,this.Da.bind(this));this.Ha=new w;this.V=Object.create(null);this.Aa=this.Va.bind(this);this.ya=this.Ta.bind(this);this.za=this.Ua.bind(this);this.xa=this.Sa.bind(this);var d=va(a.ownerDocument.defaultView);this.B.addEventListener("touchstart",this.Aa,d?{passive:!0}:!1);this.B.addEventListener("touchend",this.ya);this.B.addEventListener("touchmove",
this.za,d?{passive:!0}:!1);this.B.addEventListener("touchcancel",this.xa);this.na=!1}function ya(a){var b=!0,c=!0;b=void 0===b?!1:b;c=void 0===c?!1:c;var d=b,e=c,f=a.__AMP_Gestures;f||(f=new xa(a,d,e),a.__AMP_Gestures=f);return f}k=xa.prototype;k.cleanup=function(){this.B.removeEventListener("touchstart",this.Aa);this.B.removeEventListener("touchend",this.ya);this.B.removeEventListener("touchmove",this.za);this.B.removeEventListener("touchcancel",this.xa);delete this.B.__AMP_Gestures;this.ea.cancel()};
k.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.V[d];e||(this.h.push(c),e=new w,this.V[d]=e);return e.add(b)};k.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.V[b]){a.removeAll();a=ta(this.h,function(c){return c.getType()==b});if(0>a)return!1;this.h.splice(a,1);this.A.splice(a,1);this.j.splice(a,1);this.P.splice(a,1);delete this.V[b];return!0}return!1};k.onPointerDown=function(a){return this.Ha.add(a)};
k.Va=function(a){var b=Date.now();this.ga=!1;this.Ha.fire(a);for(var c=0;c<this.h.length;c++)if(!this.A[c]&&(this.j[c]&&this.j[c]<b&&G(this,c),this.h[c].onTouchStart(a))){var d=c;this.P[d]=!0;this.j[d]=0}H(this,a)};k.Ua=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)this.P[c]&&(this.j[c]&&this.j[c]<b?G(this,c):this.h[c].onTouchMove(a)||G(this,c));H(this,a)};
k.Ta=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)if(this.P[c])if(this.j[c]&&this.j[c]<b)G(this,c);else{this.h[c].onTouchEnd(a);var d=!this.j[c],e=this.j[c]<b;this.l!=this.h[c]&&(d||e)&&G(this,c)}H(this,a)};k.Sa=function(a){for(var b=0;b<this.h.length;b++){var c=b;this.A[c]=0;G(this,c)}H(this,a)};
function H(a,b){var c=!!a.l||a.ga;a.ga=!1;if(!c)for(var d=Date.now(),e=0;e<a.h.length;e++)if(a.A[e]||a.j[e]&&a.j[e]>=d){c=!0;break}c?(b.stopPropagation(),a.Xa||b.preventDefault()):a.Ya&&b.stopPropagation();a.na&&(a.na=!1,a.Da())}
k.Da=function(){for(var a=Date.now(),b=-1,c=0;c<this.h.length;c++)if(!this.A[c])this.j[c]&&this.j[c]<a&&G(this,c);else if(-1==b||this.A[c]>this.A[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.h.length;c++)!this.A[c]&&this.P[c]&&(d=Math.max(d,this.j[c]-a));if(2>d){a=b;c=this.h[a];for(var e=0;e<this.h.length;e++)if(e!=a){var f=e;this.A[f]=0;G(this,f)}this.A[a]=0;this.j[a]=0;this.l=c;c.acceptStart()}else this.ea.schedule(d)}};function G(a,b){a.P[b]=!1;a.j[b]=0;a.A[b]||a.h[b].acceptCancel()}
function I(a,b){this.$a=a;this.aa=b}k=I.prototype;k.getType=function(){return this.$a};k.signalReady=function(a){var b=this.aa;if(b.l)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.A[d]=c+a,b.j[d]=0);b.na=!0}};k.signalPending=function(a){var b=this.aa;if(b.l)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.j[d]=c+a)};k.signalEnd=function(){var a=this.aa;a.l==this&&(a.l=null,a.ga=!0)};
k.signalEmit=function(a,b){var c=this.aa.V[this.getType()];c&&c.fire(new wa(this.getType(),a,Date.now(),b))};k.acceptStart=function(){};k.acceptCancel=function(){};k.onTouchStart=function(){return!1};k.onTouchMove=function(){return!1};k.onTouchEnd=function(){};function za(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)};function J(a,b,c,d){I.call(this,a,b);this.Ea=c;this.Ma=d;this.l=!1;this.ua=this.ta=this.oa=this.$=this.Ia=this.qa=this.pa=this.K=this.J=this.O=this.N=0}r(J,I);k=J.prototype;k.onTouchStart=function(a){a=a.touches;return this.l&&a&&1<a.length?!0:a&&1==a.length?(this.Ia=Date.now(),this.N=a[0].clientX,this.O=a[0].clientY,!0):!1};
k.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.J=b;this.K=c;if(this.l)K(this,!1,!1,a);else if(a=Math.abs(b-this.N),b=Math.abs(c-this.O),this.Ea&&this.Ma)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Ea)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.Ma)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};
k.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.l&&(this.l=!1,K(this,!1,!0,a),this.signalEnd())};k.acceptStart=function(){this.l=!0;this.pa=this.N;this.qa=this.O;this.oa=this.Ia;this.N=this.J;this.O=this.K;K(this,!0,!1,null)};k.acceptCancel=function(){this.l=!1};
function K(a,b,c,d){a.$=Date.now();var e=a.$-a.oa;if(!c&&4<e||c&&16<e){var f=za(a.J-a.pa,e,a.ta),g=za(a.K-a.qa,e,a.ua);if(!c||32<e||0!=f||0!=g)a.ta=1E-4<Math.abs(f)?f:0,a.ua=1E-4<Math.abs(g)?g:0;a.pa=a.J;a.qa=a.K;a.oa=a.$}a.signalEmit({first:b,last:c,time:a.$,deltaX:a.J-a.N,deltaY:a.K-a.O,startX:a.N,startY:a.O,lastX:a.J,lastY:a.K,velocityX:a.ta,velocityY:a.ua},d)}function Aa(a){J.call(this,"swipe-x",a,!0,!1)}r(Aa,J);function L(a,b){var c=z(a,"timer");return c.promise(1).then(function(){return c.promise(b)})};var M,Ba="Webkit webkit Moz moz ms O o".split(" ");function N(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var g=c;if(g.startsWith("--"))f=g;else{M||(M=Object.create(null));var h=M[g];if(!h){h=g;if(void 0===f[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var y=0;y<Ba.length;y++){var pa=Ba[y]+l;if(void 0!==f[pa]){l=pa;break b}}l=""}void 0!==f[l]&&(h=l)}M[g]=h}f=h}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}
function O(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function P(a,b,c){this.va=a;this.ka=b;this.Wa=c;this.ja="backward";this.U="horizontal";this.ca=this.G=null}function Q(a){return"horizontal"==a.U?a.G.offsetWidth:a.G.offsetHeight}function R(a,b,c){b="horizontal"==a.U?b:c;return"backward"==a.ja?-Math.min(b,0):Math.max(b,0)}function S(a,b,c){var d=void 0===c?"":c,e="backward"==a.ja?-b:b;return"translate("+("horizontal"==a.U?""+e+d:0)+", "+("horizontal"==a.U?0:""+e+d)+")"}
P.prototype.startSwipe=function(a){var b=a.mask,c=a.direction,d=a.orientation;this.G=a.swipeElement;this.ca=b;this.ja=c;this.U=d};P.prototype.swipeMove=function(a){Ca(this,a,!1)};P.prototype.endSwipe=function(a){Ca(this,a,!0)};function Da(a,b,c){var d=.75*c;N(a.G,{transform:S(a,b,"px"),transition:d+"ms transform cubic-bezier(0.15, .55, .3, 0.95)"});return L(a.va,d)}
function Ea(a,b){var c=.8*b;return a.ka(function(){N(a.G,{transform:S(a,0),transition:c+"ms transform ease-in"});N(a.ca,{opacity:"",transition:c+"ms opacity ease-in"})}).then(function(){return L(a.va,c)})}function Fa(a,b){var c=.75*(Q(a)-b);return a.ka(function(){N(a.G,{transform:S(a,100,"%"),transition:c+"ms transform ease-out"});N(a.ca,{opacity:0,transition:c+"ms opacity ease-out"})}).then(function(){return L(a.va,c)}).then(function(){return a.Wa()})}
function Ga(a,b,c){b=void 0===b?"":b;var d=c=void 0===c?"":c;N(a.G,{transform:b,transition:""});N(a.ca,{opacity:d,transition:""})}function Ha(a,b,c,d,e){var f=R(a,22.5*b+d,22.5*c+e),g=R(a,b,c),h=.5*Q(a);return f<h&&.65>g?Da(a,f,g).then(function(){return Ea(a,f)}):Fa(a,f)}function Ca(a,b,c){var d=b.deltaX,e=b.deltaY,f=b.velocityX,g=b.velocityY;a.ka(function(){if(c)Ha(a,f,g,d,e).then(function(){Ga(a)});else{var h=R(a,d,e),l=h/Q(a),y=Math.max(0,1-l);Ga(a,S(a,h,"px"),y)}})};function Ia(a,b){if(void 0!==C)var c=C;else{try{var d=b.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(h){c=!1}c=C=c}c?c=b.querySelector(na(":scope")):(b.classList.add("i-amphtml-scoped"),c=na(".i-amphtml-scoped"),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);if(c){var g=(a.win.getComputedStyle(b)||Object.create(null))["overflow-y"];"scroll"!=g&&"auto"!=g?v().error("AMP-SIDEBAR",
"for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work."):A(a,"viewport").animateScrollWithinParent(c,b,"center",0)}};function Ja(a,b){this.Ba=b;this.C=a;this.ha=b.getAmpDoc();this.Za=this.C.getAttribute("toolbar");this.X=null;this.D=void 0;this.fa=!1;this.C.classList.add("amp-sidebar-toolbar-target-hidden");this.X=this.C.cloneNode(!0);a=this.C.getAttribute("toolbar-target");var c=this.C;a=v().assert(a,'"toolbar-target" is required',c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);if(c=this.ha.getElementById(a))this.D=c,this.X.classList.add("i-amphtml-toolbar"),O(this.D,!1);else throw v().createError("Could not find the toolbar-target element with an id: "+
a);}Ja.prototype.onLayoutChange=function(){this.ha.win.matchMedia(this.Za).matches?Ka(this):La(this)};function Ka(a){a.fa?ma||(ma=Promise.resolve(void 0)):a.Ba.mutateElement(function(){a.D&&(O(a.D,!0),a.D.contains(a.X)||a.D.appendChild(a.X),a.C.classList.add("amp-sidebar-toolbar-target-shown"),a.C.classList.remove("amp-sidebar-toolbar-target-hidden"),a.fa=!0,Ia(a.ha,a.X))})}
function La(a){a.fa&&a.Ba.mutateElement(function(){a.D&&(O(a.D,!1),a.C.classList.add("amp-sidebar-toolbar-target-hidden"),a.C.classList.remove("amp-sidebar-toolbar-target-shown"),a.fa=!1)})};function Ma(a,b){function c(){d=0;var g=100-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(g){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];e=a.Date.now();f=h;d||(d=a.setTimeout(c,100))}};var Na=new WeakMap,T=new WeakMap,U=new WeakMap;function Oa(a,b){var c=a.ownerDocument.defaultView;if(c){var d=T.get(a);d||(d=[],T.set(a,d),Pa(c).observe(a));if(ua(d,b)){var e=U.get(a);e&&setTimeout(function(){try{b(e)}catch(f){ha(f)}})}}}function Qa(a,b){var c=T.get(a);c&&(b=c.indexOf(b),-1!=b&&c.splice(b,1),0==c.length&&(T.delete(a),U.delete(a),(c=a.ownerDocument.defaultView)&&Pa(c).unobserve(a)))}function Pa(a){var b=Na.get(a);b||(b=new a.ResizeObserver(Ra),Na.set(a,b));return b}
function Ra(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target,f=d.contentRect;if(!b.has(e)&&(b.add(e),d=T.get(e))){var g=f;g={width:g.width,height:g.height};U.set(e,g);for(e=0;e<d.length;e++)try{(0,d[e])(g)}catch(h){ha(h)}}}};function Sa(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};var V=[];function Ta(a){var b=[];a=Ua(a);for(var c={},d=0;d<a.length;c={R:c.R},d++)c.R=a[d],c.R.parentNode&&t(c.R.parentNode.children).filter(function(e){return function(f){return f!=e.R}}(c)).forEach(function(e){return b.push(e)});return b}function Ua(a){for(var b=[],c=a;c;c=c.parentNode||c.host)b.push(c);return b}
function Va(a){for(var b=[];a;){a=qa(a);var c=a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");Array.prototype.push.apply(b,c);a=a.host}return b}
function Wa(a){V.every(function(h){return h.element!==a});oa(a);var b=Ta(a),c=Ua(a).filter(function(h){return h.nodeType==Node.ELEMENT_NODE}),d=Va(a),e=d.filter(function(h){return a.contains(h)&&void 0!==h.__AMP_MODAL_SAVED_TAB_INDEX}),f=d.filter(function(h){return!a.contains(h)&&void 0===h.__AMP_MODAL_SAVED_TAB_INDEX}),g=b.concat(c).map(function(h){return{element:h,prevValue:h.getAttribute("aria-hidden")}});c.forEach(function(h){return h.removeAttribute("aria-hidden")});b.forEach(function(h){return h.setAttribute("aria-hidden",
"true")});f.forEach(function(h){h.__AMP_MODAL_SAVED_TAB_INDEX=h.getAttribute("tabindex");h.setAttribute("tabindex","-1")});e.forEach(function(h){var l=h.__AMP_MODAL_SAVED_TAB_INDEX;null===l?h.removeAttribute("tabindex"):h.setAttribute("tabindex",l)});V.push({element:a,hiddenElementInfos:g,focusableExternalElements:f,focusableInternalElements:e})}
function Xa(a){var b=V.pop(),c=b.hiddenElementInfos,d=b.focusableExternalElements;b=b.focusableInternalElements;oa(a);c.forEach(function(e){var f=e.element,g=e.prevValue;null===g?f.removeAttribute("aria-hidden"):f.setAttribute("aria-hidden",g)});b.forEach(function(e){e.setAttribute("tabindex","-1")});d.forEach(function(e){var f=e.__AMP_MODAL_SAVED_TAB_INDEX;null===f?e.removeAttribute("tabindex"):e.setAttribute("tabindex",f);e.__AMP_MODAL_SAVED_TAB_INDEX=void 0})};function W(a){var b=AMP.BaseElement.call(this,a)||this;b.H=null;b.Y=null;b.La=null;b.ba=null;b.I=b.win.document;b.Pa=b.I.documentElement;b.M=null;b.Ka=[];var c=x(b.win,"platform");b.T=c.isIos();b.Ra=c.isSafari();b.Z=-1;b.wa=!1;b.S=null;b.ma=null;b.Fa=0;b.L=!1;b.Ga=null;b.sa=new P(b.win,function(d){return b.mutateElement(d)},function(){return X(b,!0,3)});b.ia=!1;b.Ca=!1;b.F=b.F.bind(b);b.da=null;return b}r(W,AMP.BaseElement);k=W.prototype;
k.buildCallback=function(){var a=this,b=this.element;b.classList.add("i-amphtml-overlay");b.classList.add("i-amphtml-scrollable");this.M=b.getAttribute("side");this.Ca=b.hasAttribute("data-disable-swipe-close");this.H=this.getViewport();this.Y=ka(b,"action");this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn("amp-sidebar toolbar","amp-sidebar toolbar is recommended to be a direct child of the <body> element to preserve a logical DOM order.");
"left"!=this.M&&"right"!=this.M&&(this.M=Ya(this,sa(this.I)?"right":"left"),b.setAttribute("side",this.M));Za(this);b.addEventListener("amp:dom-update",function(){Za(a)});this.getAmpDoc().whenReady().then(function(){t(b.querySelectorAll("nav[toolbar]")).forEach(function(c){try{a.Ka.push(new Ja(c,a))}catch(d){a.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",d)}});a.F()});this.T&&$a(this);b.hasAttribute("role")||b.setAttribute("role","menu");b.tabIndex=-1;this.Pa.addEventListener("keydown",
function(c){"Escape"==c.key&&X(a,!1,3)&&c.preventDefault()});this.S=ab(this);this.S||(this.S=this.createScreenReaderCloseButton(),b.insertBefore(this.S,this.element.firstChild));b.appendChild(this.createScreenReaderCloseButton());this.registerDefaultAction(function(c){bb(a,c.trust,c.caller)},"open");this.registerAction("close",function(c){X(a,!1,c.trust)});this.registerAction("toggle",function(c){var d=c.trust;c=c.caller;a.L?X(a,!1,d):bb(a,d,c)});this.Y.addToAllowlist("amp-sidebar",["open","close",
"toggle"],["email"]);b.addEventListener("click",function(c){if((c=D(c.target,"A"))&&c.href){var d=ka(b,"url").parse(c.href),e=a.getAmpDoc().getUrl();Sa(c.href)==Sa(e)&&d.hash&&X(a,!1,3)}},!0);cb(this,this.element)};k.attachedCallback=function(){this.da=this.H.onResize(Ma(this.win,this.F));this.F()};k.detachedCallback=function(){this.da&&(this.da(),this.da=null)};
function Za(a){if(!a.Ga){var b=a.element.querySelector("amp-nested-menu");b&&(x(a.win,"extensions").installExtensionForDoc(a.getAmpDoc(),"amp-nested-menu"),a.Ga=b)}}function ab(a){for(var b=a.element.querySelectorAll("[on]"),c=0;c<b.length;c++){var d=b[c],e=a.Y.hasResolvableActionForTarget(d,"tap",a.element,d.parentElement),f=D(d,"[toolbar]");if(e&&!f)return d}return null}
k.createScreenReaderCloseButton=function(){var a=this,b=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",c=this.I.createElement("button");c.textContent=b;c.classList.add("i-amphtml-screen-reader");c.tabIndex=-1;c.addEventListener("click",function(){X(a,!1,3)});return c};k.F=function(){var a=this;this.getAmpDoc().whenReady().then(function(){a.Ka.forEach(function(b){b.onLayoutChange()})})};
function Y(a,b,c){function d(){a.La===b&&a.mutateElement(b)}a.La=b;c?z(a.win,"timer").delay(d,c):d()}
function db(a,b){O(a.element,!0);O(Z(a),!0);a.H.addToFixedLayer(a.element,!0);a.mutateElement(function(){Wa(a.element)});a.T&&a.Ra&&eb(a);a.element.scrollTop=1;a.element.setAttribute("open","");Z(a).setAttribute("open","");Y(a,function(){var c=a.getRealChildren(),d=A(a.element,"owners");d.scheduleLayout(a.element,c);d.scheduleResume(a.element,c);if(!a.T||!A(a.element,"viewer").isEmbedded())try{a.S.focus()}catch(e){}fb(a,"sidebarOpen",b);a.element.setAttribute("i-amphtml-sidebar-opened","");Z(a).setAttribute("i-amphtml-sidebar-opened",
"")},350);Ia(a.getAmpDoc(),a.element)}function gb(a,b,c){Z(a).removeAttribute("open");Z(a).removeAttribute("i-amphtml-sidebar-opened");a.mutateElement(function(){Xa(a.element)});a.element.removeAttribute("open");a.element.removeAttribute("i-amphtml-sidebar-opened");Y(a,function(){O(a.element,!1);O(Z(a),!1);A(a.element,"owners").schedulePause(a.element,a.getRealChildren());fb(a,"sidebarClose",c)},b?0:350)}
function bb(a,b,c){a.L||(a.L=!0,a.H.enterOverlayMode(),Y(a,function(){return db(a,b)}),A(a.getAmpDoc(),"history").push(function(){a.T?X(a,!0,b):X(a,!1,b)}).then(function(d){a.Z=d}),c&&(a.ma=c,a.Fa=a.H.getScrollTop()),Oa(a.element,a.F))}
function X(a,b,c){if(!a.L)return!1;a.L=!1;a.H.leaveOverlayMode();var d=a.Fa==a.H.getScrollTop(),e=a.element.contains(a.I.activeElement);Y(a,function(){return gb(a,b,c)});b&&(O(a.element,!1),O(Z(a),!1));-1!=a.Z&&(A(a.getAmpDoc(),"history").pop(a.Z),a.Z=-1);if(a.ma&&e&&d&&(!a.T||!A(a.element,"viewer").isEmbedded()))try{a.ma.focus()}catch(f){}Qa(a.element,a.F);return!0}
function cb(a,b){if(!a.Ca)ya(b).onGesture(Aa,function(c){var d=c.data,e=c.event;if(d.first)a.sa.startSwipe({swipeElement:a.element,mask:a.ba,direction:"left"==a.M?"backward":"forward",orientation:"horizontal"});else if(d.last)a.ia&&a.sa.endSwipe(d),a.ia=!1;else{var f;if(f=e&&e.target)e=e.target,f=!("input"===e.nodeName.toLowerCase()&&"range"===e.getAttribute("type"));f&&(a.ia=!0,a.sa.swipeMove(d))}})}function Ya(a,b){return D(a.element,"amp-story")?"left"==b?"right":"left":b}
function Z(a){if(!a.ba){var b=a.I.createElement("div");b.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask");b.addEventListener("click",function(){X(a,!1,3)});a.getAmpDoc().getBody().appendChild(b);b.addEventListener("touchmove",function(c){c.preventDefault()});cb(a,b);a.ba=b}return a.ba}
function $a(a){a.element.addEventListener("scroll",function(b){a.L&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function eb(a){if(!a.wa){var b=a.I.createElement("div");N(b,{height:"54px",width:"100%","background-color":"transparent"});a.element.appendChild(b);a.wa=!0}}
function fb(a,b,c){var d=a.win;var e="amp-sidebar toolbar."+b;var f={};var g={detail:f};Object.assign(g,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,g):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!g.bubbles,!!g.cancelable,f),e=d);a.Y.trigger(a.element,b,e,c)}(function(a){a.registerElement("amp-sidebar",W,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-sidebar-0.1.js.map
