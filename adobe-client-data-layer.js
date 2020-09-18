(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="cloneDeep,cloneDeepWith,get,has,isEmpty,isEqual,isNull,isPlainObject,isObject,merge,mergeWith,omit,reject" -p -o custom-lodash.js`
 */
;(function(){function t(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function n(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&n(t[r],r,t)!==false;);return t}function r(t,n){for(var r=-1,e=null==t?0:t.length,u=0,o=[];++r<e;){var i=t[r];n(i,r,t)&&(o[u++]=i)}return o}function e(t,n){for(var r=-1,e=null==t?0:t.length,u=Array(e);++r<e;)u[r]=n(t[r],r,t);return u}function u(t,n){for(var r=-1,e=n.length,u=t.length;++r<e;)t[u+r]=n[r];
return t}function o(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return true;return false}function i(t){return function(n){return null==n?Xn:n[t]}}function c(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function a(t){return function(n){return t(n)}}function f(t,n){return t.has(n)}function l(t,n){return null==t?Xn:t[n]}function s(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function h(t,n){return function(r){return t(n(r))}}function p(t,n){return"__proto__"==n?Xn:t[n];
}function v(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}function y(){}function b(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function _(){this.__data__=Ne?Ne(null):{},this.size=0}function g(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function d(t){var n=this.__data__;if(Ne){var r=n[t];return r===nr?Xn:r}return ye.call(n,t)?n[t]:Xn}function j(t){var n=this.__data__;return Ne?n[t]!==Xn:ye.call(n,t)}function w(t,n){
var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ne&&n===Xn?nr:n,this}function O(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function m(){this.__data__=[],this.size=0}function A(t){var n=this.__data__,r=G(n,t);return!(r<0)&&(r==n.length-1?n.pop():xe.call(n,r,1),--this.size,true)}function z(t){var n=this.__data__,r=G(n,t);return r<0?Xn:n[r][1]}function S(t){return G(this.__data__,t)>-1}function x(t,n){var r=this.__data__,e=G(r,t);return e<0?(++this.size,
r.push([t,n])):r[e][1]=n,this}function k(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function E(){this.size=0,this.__data__={hash:new b,map:new(Ue||O),string:new b}}function L(t){var n=Ht(this,t).delete(t);return this.size-=n?1:0,n}function P(t){return Ht(this,t).get(t)}function $(t){return Ht(this,t).has(t)}function I(t,n){var r=Ht(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this}function F(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new k;++n<r;)this.add(t[n]);
}function T(t){return this.__data__.set(t,nr),this}function M(t){return this.__data__.has(t)}function U(t){this.size=(this.__data__=new O(t)).size}function B(){this.__data__=new O,this.size=0}function C(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}function D(t){return this.__data__.get(t)}function N(t){return this.__data__.has(t)}function R(t,n){var r=this.__data__;if(r instanceof O){var e=r.__data__;if(!Ue||e.length<Zn-1)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new k(e);
}return r.set(t,n),this.size=r.size,this}function W(t,n){var r=iu(t),e=!r&&ou(t),u=!r&&!e&&cu(t),o=!r&&!e&&!u&&lu(t),i=r||e||u||o,a=i?c(t.length,String):[],f=a.length;for(var l in t)!n&&!ye.call(t,l)||i&&("length"==l||u&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||rn(l,f))||a.push(l);return a}function V(t,n,r){(r===Xn||Sn(t[n],r))&&(r!==Xn||n in t)||K(t,n,r)}function q(t,n,r){var e=t[n];ye.call(t,n)&&Sn(e,r)&&(r!==Xn||n in t)||K(t,n,r)}function G(t,n){for(var r=t.length;r--;)if(Sn(t[r][0],n))return r;
return-1}function H(t,n){return t&&It(n,Wn(n),t)}function J(t,n){return t&&It(n,Vn(n),t)}function K(t,n,r){"__proto__"==n&&Le?Le(t,n,{configurable:true,enumerable:true,value:r,writable:true}):t[n]=r}function Q(t,r,e,u,o,i){var c,a=r&er,f=r&ur,l=r&or;if(e&&(c=o?e(t,u,o,i):e(t)),c!==Xn)return c;if(!In(t))return t;var s=iu(t);if(s){if(c=Yt(t),!a)return $t(t,c)}else{var h=ru(t),p=h==gr||h==dr;if(cu(t))return St(t,a);if(h==mr||h==hr||p&&!o){if(c=f||p?{}:Zt(t),!a)return f?Tt(t,J(c,t)):Ft(t,H(c,t))}else{if(!Yr[h])return o?t:{};
c=tn(t,h,a)}}i||(i=new U);var v=i.get(t);if(v)return v;if(i.set(t,c),fu(t))return t.forEach(function(n){c.add(Q(n,r,e,n,t,i))}),c;if(au(t))return t.forEach(function(n,u){c.set(u,Q(n,r,e,u,t,i))}),c;var y=l?f?qt:Vt:f?Vn:Wn,b=s?Xn:y(t);return n(b||t,function(n,u){b&&(u=n,n=t[u]),q(c,u,Q(n,r,e,u,t,i))}),c}function X(t,n){var r=[];return Xe(t,function(t,e,u){n(t,e,u)&&r.push(t)}),r}function Y(t,n,r,e,o){var i=-1,c=t.length;for(r||(r=nn),o||(o=[]);++i<c;){var a=t[i];n>0&&r(a)?n>1?Y(a,n-1,r,e,o):u(o,a):e||(o[o.length]=a);
}return o}function Z(t,n){return t&&Ye(t,n,Wn)}function tt(t,n){n=zt(n,t);for(var r=0,e=n.length;null!=t&&r<e;)t=t[_n(n[r++])];return r&&r==e?t:Xn}function nt(t,n,r){var e=n(t);return iu(t)?e:u(e,r(t))}function rt(t){return null==t?t===Xn?Lr:Or:Ee&&Ee in Object(t)?Qt(t):pn(t)}function et(t,n){return null!=t&&ye.call(t,n)}function ut(t,n){return null!=t&&n in Object(t)}function ot(t){return Fn(t)&&rt(t)==hr}function it(t,n,r,e,u){return t===n||(null==t||null==n||!Fn(t)&&!Fn(n)?t!==t&&n!==n:ct(t,n,r,e,it,u));
}function ct(t,n,r,e,u,o){var i=iu(t),c=iu(n),a=i?pr:ru(t),f=c?pr:ru(n);a=a==hr?mr:a,f=f==hr?mr:f;var l=a==mr,s=f==mr,h=a==f;if(h&&cu(t)){if(!cu(n))return false;i=true,l=false}if(h&&!l)return o||(o=new U),i||lu(t)?Dt(t,n,r,e,u,o):Nt(t,n,a,r,e,u,o);if(!(r&ir)){var p=l&&ye.call(t,"__wrapped__"),v=s&&ye.call(n,"__wrapped__");if(p||v){var y=p?t.value():t,b=v?n.value():n;return o||(o=new U),u(y,b,r,e,o)}}return!!h&&(o||(o=new U),Rt(t,n,r,e,u,o))}function at(t){return Fn(t)&&ru(t)==jr}function ft(t,n,r,e){var u=r.length,o=u,i=!e;
if(null==t)return!o;for(t=Object(t);u--;){var c=r[u];if(i&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return false}for(;++u<o;){c=r[u];var a=c[0],f=t[a],l=c[1];if(i&&c[2]){if(f===Xn&&!(a in t))return false}else{var s=new U;if(e)var h=e(f,l,a,t,n,s);if(!(h===Xn?it(l,f,ir|cr,e,s):h))return false}}return true}function lt(t){return!(!In(t)||cn(t))&&(Pn(t)?de:Kr).test(gn(t))}function st(t){return Fn(t)&&ru(t)==xr}function ht(t){return Fn(t)&&$n(t.length)&&!!Xr[rt(t)]}function pt(t){return typeof t=="function"?t:null==t?Gn:typeof t=="object"?iu(t)?_t(t[0],t[1]):bt(t):Jn(t);
}function vt(t){if(!an(t))return Ie(t);var n=[];for(var r in Object(t))ye.call(t,r)&&"constructor"!=r&&n.push(r);return n}function yt(t){if(!In(t))return hn(t);var n=an(t),r=[];for(var e in t)("constructor"!=e||!n&&ye.call(t,e))&&r.push(e);return r}function bt(t){var n=Jt(t);return 1==n.length&&n[0][2]?ln(n[0][0],n[0][1]):function(r){return r===t||ft(r,t,n)}}function _t(t,n){return un(t)&&fn(n)?ln(_n(t),n):function(r){var e=Dn(r,t);return e===Xn&&e===n?Rn(r,t):it(n,e,ir|cr)}}function gt(t,n,r,e,u){
t!==n&&Ye(n,function(o,i){if(In(o))u||(u=new U),dt(t,n,i,r,gt,e,u);else{var c=e?e(p(t,i),o,i+"",t,n,u):Xn;c===Xn&&(c=o),V(t,i,c)}},Vn)}function dt(t,n,r,e,u,o,i){var c=p(t,r),a=p(n,r),f=i.get(a);if(f)return V(t,r,f),Xn;var l=o?o(c,a,r+"",t,n,i):Xn,s=l===Xn;if(s){var h=iu(a),v=!h&&cu(a),y=!h&&!v&&lu(a);l=a,h||v||y?iu(c)?l=c:kn(c)?l=$t(c):v?(s=false,l=St(a,true)):y?(s=false,l=Pt(a,true)):l=[]:Mn(a)||ou(a)?(l=c,ou(c)?l=Bn(c):(!In(c)||e&&Pn(c))&&(l=Zt(a))):s=false}s&&(i.set(a,l),u(l,a,e,o,i),i.delete(a)),V(t,r,l);
}function jt(t){return function(n){return tt(n,t)}}function wt(t,n){return eu(vn(t,n,Gn),t+"")}function Ot(t,n,r){var e=-1,u=t.length;n<0&&(n=-n>u?0:u+n),r=r>u?u:r,r<0&&(r+=u),u=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(u);++e<u;)o[e]=t[e+n];return o}function mt(t){if(typeof t=="string")return t;if(iu(t))return e(t,mt)+"";if(Un(t))return Ke?Ke.call(t):"";var n=t+"";return"0"==n&&1/t==-lr?"-0":n}function At(t,n){return n=zt(n,t),t=yn(t,n),null==t||delete t[_n(jn(n))]}function zt(t,n){return iu(t)?t:un(t,n)?[t]:uu(Cn(t));
}function St(t,n){if(n)return t.slice();var r=t.length,e=me?me(r):new t.constructor(r);return t.copy(e),e}function xt(t){var n=new t.constructor(t.byteLength);return new Oe(n).set(new Oe(t)),n}function kt(t,n){return new t.constructor(n?xt(t.buffer):t.buffer,t.byteOffset,t.byteLength)}function Et(t){var n=new t.constructor(t.source,Jr.exec(t));return n.lastIndex=t.lastIndex,n}function Lt(t){return Je?Object(Je.call(t)):{}}function Pt(t,n){return new t.constructor(n?xt(t.buffer):t.buffer,t.byteOffset,t.length);
}function $t(t,n){var r=-1,e=t.length;for(n||(n=Array(e));++r<e;)n[r]=t[r];return n}function It(t,n,r,e){var u=!r;r||(r={});for(var o=-1,i=n.length;++o<i;){var c=n[o],a=e?e(r[c],t[c],c,r,t):Xn;a===Xn&&(a=t[c]),u?K(r,c,a):q(r,c,a)}return r}function Ft(t,n){return It(t,tu(t),n)}function Tt(t,n){return It(t,nu(t),n)}function Mt(t){return wt(function(n,r){var e=-1,u=r.length,o=u>1?r[u-1]:Xn,i=u>2?r[2]:Xn;for(o=t.length>3&&typeof o=="function"?(u--,o):Xn,i&&en(r[0],r[1],i)&&(o=u<3?Xn:o,u=1),n=Object(n);++e<u;){
var c=r[e];c&&t(n,c,e,o)}return n})}function Ut(t,n){return function(r,e){if(null==r)return r;if(!xn(r))return t(r,e);for(var u=r.length,o=n?u:-1,i=Object(r);(n?o--:++o<u)&&e(i[o],o,i)!==false;);return r}}function Bt(t){return function(n,r,e){for(var u=-1,o=Object(n),i=e(n),c=i.length;c--;){var a=i[t?c:++u];if(r(o[a],a,o)===false)break}return n}}function Ct(t){return Mn(t)?Xn:t}function Dt(t,n,r,e,u,i){var c=r&ir,a=t.length,l=n.length;if(a!=l&&!(c&&l>a))return false;var s=i.get(t);if(s&&i.get(n))return s==n;
var h=-1,p=true,v=r&cr?new F:Xn;for(i.set(t,n),i.set(n,t);++h<a;){var y=t[h],b=n[h];if(e)var _=c?e(b,y,h,n,t,i):e(y,b,h,t,n,i);if(_!==Xn){if(_)continue;p=false;break}if(v){if(!o(n,function(t,n){if(!f(v,n)&&(y===t||u(y,t,r,e,i)))return v.push(n)})){p=false;break}}else if(y!==b&&!u(y,b,r,e,i)){p=false;break}}return i.delete(t),i.delete(n),p}function Nt(t,n,r,e,u,o,i){switch(r){case Ir:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return false;t=t.buffer,n=n.buffer;case $r:return!(t.byteLength!=n.byteLength||!o(new Oe(t),new Oe(n)));
case yr:case br:case wr:return Sn(+t,+n);case _r:return t.name==n.name&&t.message==n.message;case Sr:case kr:return t==n+"";case jr:var c=s;case xr:var a=e&ir;if(c||(c=v),t.size!=n.size&&!a)return false;var f=i.get(t);if(f)return f==n;e|=cr,i.set(t,n);var l=Dt(c(t),c(n),e,u,o,i);return i.delete(t),l;case Er:if(Je)return Je.call(t)==Je.call(n)}return false}function Rt(t,n,r,e,u,o){var i=r&ir,c=Vt(t),a=c.length;if(a!=Vt(n).length&&!i)return false;for(var f=a;f--;){var l=c[f];if(!(i?l in n:ye.call(n,l)))return false;
}var s=o.get(t);if(s&&o.get(n))return s==n;var h=true;o.set(t,n),o.set(n,t);for(var p=i;++f<a;){l=c[f];var v=t[l],y=n[l];if(e)var b=i?e(y,v,l,n,t,o):e(v,y,l,t,n,o);if(!(b===Xn?v===y||u(v,y,r,e,o):b)){h=false;break}p||(p="constructor"==l)}if(h&&!p){var _=t.constructor,g=n.constructor;_!=g&&"constructor"in t&&"constructor"in n&&!(typeof _=="function"&&_ instanceof _&&typeof g=="function"&&g instanceof g)&&(h=false)}return o.delete(t),o.delete(n),h}function Wt(t){return eu(vn(t,Xn,dn),t+"")}function Vt(t){return nt(t,Wn,tu);
}function qt(t){return nt(t,Vn,nu)}function Gt(){var t=y.iteratee||Hn;return t=t===Hn?pt:t,arguments.length?t(arguments[0],arguments[1]):t}function Ht(t,n){var r=t.__data__;return on(n)?r[typeof n=="string"?"string":"hash"]:r.map}function Jt(t){for(var n=Wn(t),r=n.length;r--;){var e=n[r],u=t[e];n[r]=[e,u,fn(u)]}return n}function Kt(t,n){var r=l(t,n);return lt(r)?r:Xn}function Qt(t){var n=ye.call(t,Ee),r=t[Ee];try{t[Ee]=Xn;var e=true}catch(t){}var u=_e.call(t);return e&&(n?t[Ee]=r:delete t[Ee]),u}function Xt(t,n,r){
n=zt(n,t);for(var e=-1,u=n.length,o=false;++e<u;){var i=_n(n[e]);if(!(o=null!=t&&r(t,i)))break;t=t[i]}return o||++e!=u?o:(u=null==t?0:t.length,!!u&&$n(u)&&rn(i,u)&&(iu(t)||ou(t)))}function Yt(t){var n=t.length,r=new t.constructor(n);return n&&"string"==typeof t[0]&&ye.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function Zt(t){return typeof t.constructor!="function"||an(t)?{}:Qe(Ae(t))}function tn(t,n,r){var e=t.constructor;switch(n){case $r:return xt(t);case yr:case br:return new e(+t);case Ir:
return kt(t,r);case Fr:case Tr:case Mr:case Ur:case Br:case Cr:case Dr:case Nr:case Rr:return Pt(t,r);case jr:return new e;case wr:case kr:return new e(t);case Sr:return Et(t);case xr:return new e;case Er:return Lt(t)}}function nn(t){return iu(t)||ou(t)||!!(ke&&t&&t[ke])}function rn(t,n){var r=typeof t;return n=null==n?sr:n,!!n&&("number"==r||"symbol"!=r&&Qr.test(t))&&t>-1&&t%1==0&&t<n}function en(t,n,r){if(!In(r))return false;var e=typeof n;return!!("number"==e?xn(r)&&rn(n,r.length):"string"==e&&n in r)&&Sn(r[n],t);
}function un(t,n){if(iu(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Un(t))||(Vr.test(t)||!Wr.test(t)||null!=n&&t in Object(n))}function on(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}function cn(t){return!!be&&be in t}function an(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||he)}function fn(t){return t===t&&!In(t)}function ln(t,n){return function(r){return null!=r&&(r[t]===n&&(n!==Xn||t in Object(r)));
}}function sn(t){var n=On(t,function(t){return r.size===rr&&r.clear(),t}),r=n.cache;return n}function hn(t){var n=[];if(null!=t)for(var r in Object(t))n.push(r);return n}function pn(t){return _e.call(t)}function vn(n,r,e){return r=Fe(r===Xn?n.length-1:r,0),function(){for(var u=arguments,o=-1,i=Fe(u.length-r,0),c=Array(i);++o<i;)c[o]=u[r+o];o=-1;for(var a=Array(r+1);++o<r;)a[o]=u[o];return a[r]=e(c),t(n,this,a)}}function yn(t,n){return n.length<2?t:tt(t,Ot(n,0,-1))}function bn(t){var n=0,r=0;return function(){
var e=Te(),u=fr-(e-r);if(r=e,u>0){if(++n>=ar)return arguments[0]}else n=0;return t.apply(Xn,arguments)}}function _n(t){if(typeof t=="string"||Un(t))return t;var n=t+"";return"0"==n&&1/t==-lr?"-0":n}function gn(t){if(null!=t){try{return ve.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function dn(t){return(null==t?0:t.length)?Y(t,1):[]}function jn(t){var n=null==t?0:t.length;return n?t[n-1]:Xn}function wn(t,n){return(iu(t)?r:X)(t,mn(Gt(n,3)))}function On(t,n){if(typeof t!="function"||null!=n&&typeof n!="function")throw new TypeError(tr);
var r=function(){var e=arguments,u=n?n.apply(this,e):e[0],o=r.cache;if(o.has(u))return o.get(u);var i=t.apply(this,e);return r.cache=o.set(u,i)||o,i};return r.cache=new(On.Cache||k),r}function mn(t){if(typeof t!="function")throw new TypeError(tr);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function An(t){return Q(t,er|or)}function zn(t,n){
return n=typeof n=="function"?n:Xn,Q(t,er|or,n)}function Sn(t,n){return t===n||t!==t&&n!==n}function xn(t){return null!=t&&$n(t.length)&&!Pn(t)}function kn(t){return Fn(t)&&xn(t)}function En(t){if(null==t)return true;if(xn(t)&&(iu(t)||typeof t=="string"||typeof t.splice=="function"||cu(t)||lu(t)||ou(t)))return!t.length;var n=ru(t);if(n==jr||n==xr)return!t.size;if(an(t))return!vt(t).length;for(var r in t)if(ye.call(t,r))return false;return true}function Ln(t,n){return it(t,n)}function Pn(t){if(!In(t))return false;
var n=rt(t);return n==gr||n==dr||n==vr||n==zr}function $n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=sr}function In(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}function Fn(t){return null!=t&&typeof t=="object"}function Tn(t){return null===t}function Mn(t){if(!Fn(t)||rt(t)!=mr)return false;var n=Ae(t);if(null===n)return true;var r=ye.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&ve.call(r)==ge}function Un(t){return typeof t=="symbol"||Fn(t)&&rt(t)==Er;
}function Bn(t){return It(t,Vn(t))}function Cn(t){return null==t?"":mt(t)}function Dn(t,n,r){var e=null==t?Xn:tt(t,n);return e===Xn?r:e}function Nn(t,n){return null!=t&&Xt(t,n,et)}function Rn(t,n){return null!=t&&Xt(t,n,ut)}function Wn(t){return xn(t)?W(t):vt(t)}function Vn(t){return xn(t)?W(t,true):yt(t)}function qn(t){return function(){return t}}function Gn(t){return t}function Hn(t){return pt(typeof t=="function"?t:Q(t,er))}function Jn(t){return un(t)?i(_n(t)):jt(t)}function Kn(){return[]}function Qn(){
return false}var Xn,Yn="4.17.5",Zn=200,tr="Expected a function",nr="__lodash_hash_undefined__",rr=500,er=1,ur=2,or=4,ir=1,cr=2,ar=800,fr=16,lr=1/0,sr=9007199254740991,hr="[object Arguments]",pr="[object Array]",vr="[object AsyncFunction]",yr="[object Boolean]",br="[object Date]",_r="[object Error]",gr="[object Function]",dr="[object GeneratorFunction]",jr="[object Map]",wr="[object Number]",Or="[object Null]",mr="[object Object]",Ar="[object Promise]",zr="[object Proxy]",Sr="[object RegExp]",xr="[object Set]",kr="[object String]",Er="[object Symbol]",Lr="[object Undefined]",Pr="[object WeakMap]",$r="[object ArrayBuffer]",Ir="[object DataView]",Fr="[object Float32Array]",Tr="[object Float64Array]",Mr="[object Int8Array]",Ur="[object Int16Array]",Br="[object Int32Array]",Cr="[object Uint8Array]",Dr="[object Uint8ClampedArray]",Nr="[object Uint16Array]",Rr="[object Uint32Array]",Wr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vr=/^\w*$/,qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/[\\^$.*+?()[\]{}|]/g,Hr=/\\(\\)?/g,Jr=/\w*$/,Kr=/^\[object .+?Constructor\]$/,Qr=/^(?:0|[1-9]\d*)$/,Xr={};
Xr[Fr]=Xr[Tr]=Xr[Mr]=Xr[Ur]=Xr[Br]=Xr[Cr]=Xr[Dr]=Xr[Nr]=Xr[Rr]=true,Xr[hr]=Xr[pr]=Xr[$r]=Xr[yr]=Xr[Ir]=Xr[br]=Xr[_r]=Xr[gr]=Xr[jr]=Xr[wr]=Xr[mr]=Xr[Sr]=Xr[xr]=Xr[kr]=Xr[Pr]=false;var Yr={};Yr[hr]=Yr[pr]=Yr[$r]=Yr[Ir]=Yr[yr]=Yr[br]=Yr[Fr]=Yr[Tr]=Yr[Mr]=Yr[Ur]=Yr[Br]=Yr[jr]=Yr[wr]=Yr[mr]=Yr[Sr]=Yr[xr]=Yr[kr]=Yr[Er]=Yr[Cr]=Yr[Dr]=Yr[Nr]=Yr[Rr]=true,Yr[_r]=Yr[gr]=Yr[Pr]=false;var Zr=typeof global=="object"&&global&&global.Object===Object&&global,te=typeof self=="object"&&self&&self.Object===Object&&self,ne=Zr||te||Function("return this")(),re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=re&&typeof module=="object"&&module&&!module.nodeType&&module,ue=ee&&ee.exports===re,oe=ue&&Zr.process,ie=function(){
try{return oe&&oe.binding&&oe.binding("util")}catch(t){}}(),ce=ie&&ie.isMap,ae=ie&&ie.isSet,fe=ie&&ie.isTypedArray,le=Array.prototype,se=Function.prototype,he=Object.prototype,pe=ne["__core-js_shared__"],ve=se.toString,ye=he.hasOwnProperty,be=function(){var t=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_e=he.toString,ge=ve.call(Object),de=RegExp("^"+ve.call(ye).replace(Gr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),je=ue?ne.Buffer:Xn,we=ne.Symbol,Oe=ne.Uint8Array,me=je?je.allocUnsafe:Xn,Ae=h(Object.getPrototypeOf,Object),ze=Object.create,Se=he.propertyIsEnumerable,xe=le.splice,ke=we?we.isConcatSpreadable:Xn,Ee=we?we.toStringTag:Xn,Le=function(){
try{var t=Kt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Pe=Object.getOwnPropertySymbols,$e=je?je.isBuffer:Xn,Ie=h(Object.keys,Object),Fe=Math.max,Te=Date.now,Me=Kt(ne,"DataView"),Ue=Kt(ne,"Map"),Be=Kt(ne,"Promise"),Ce=Kt(ne,"Set"),De=Kt(ne,"WeakMap"),Ne=Kt(Object,"create"),Re=gn(Me),We=gn(Ue),Ve=gn(Be),qe=gn(Ce),Ge=gn(De),He=we?we.prototype:Xn,Je=He?He.valueOf:Xn,Ke=He?He.toString:Xn,Qe=function(){function t(){}return function(n){if(!In(n))return{};if(ze)return ze(n);t.prototype=n;
var r=new t;return t.prototype=Xn,r}}();b.prototype.clear=_,b.prototype.delete=g,b.prototype.get=d,b.prototype.has=j,b.prototype.set=w,O.prototype.clear=m,O.prototype.delete=A,O.prototype.get=z,O.prototype.has=S,O.prototype.set=x,k.prototype.clear=E,k.prototype.delete=L,k.prototype.get=P,k.prototype.has=$,k.prototype.set=I,F.prototype.add=F.prototype.push=T,F.prototype.has=M,U.prototype.clear=B,U.prototype.delete=C,U.prototype.get=D,U.prototype.has=N,U.prototype.set=R;var Xe=Ut(Z),Ye=Bt(),Ze=Le?function(t,n){
return Le(t,"toString",{configurable:true,enumerable:false,value:qn(n),writable:true})}:Gn,tu=Pe?function(t){return null==t?[]:(t=Object(t),r(Pe(t),function(n){return Se.call(t,n)}))}:Kn,nu=Pe?function(t){for(var n=[];t;)u(n,tu(t)),t=Ae(t);return n}:Kn,ru=rt;(Me&&ru(new Me(new ArrayBuffer(1)))!=Ir||Ue&&ru(new Ue)!=jr||Be&&ru(Be.resolve())!=Ar||Ce&&ru(new Ce)!=xr||De&&ru(new De)!=Pr)&&(ru=function(t){var n=rt(t),r=n==mr?t.constructor:Xn,e=r?gn(r):"";if(e)switch(e){case Re:return Ir;case We:return jr;case Ve:
return Ar;case qe:return xr;case Ge:return Pr}return n});var eu=bn(Ze),uu=sn(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(qr,function(t,r,e,u){n.push(e?u.replace(Hr,"$1"):r||t)}),n});On.Cache=k;var ou=ot(function(){return arguments}())?ot:function(t){return Fn(t)&&ye.call(t,"callee")&&!Se.call(t,"callee")},iu=Array.isArray,cu=$e||Qn,au=ce?a(ce):at,fu=ae?a(ae):st,lu=fe?a(fe):ht,su=Mt(function(t,n,r){gt(t,n,r)}),hu=Mt(function(t,n,r,e){gt(t,n,r,e)}),pu=Wt(function(t,n){var r={};
if(null==t)return r;var u=false;n=e(n,function(n){return n=zt(n,t),u||(u=n.length>1),n}),It(t,qt(t),r),u&&(r=Q(r,er|ur|or,Ct));for(var o=n.length;o--;)At(r,n[o]);return r});y.constant=qn,y.flatten=dn,y.iteratee=Hn,y.keys=Wn,y.keysIn=Vn,y.memoize=On,y.merge=su,y.mergeWith=hu,y.negate=mn,y.omit=pu,y.property=Jn,y.reject=wn,y.toPlainObject=Bn,y.cloneDeep=An,y.cloneDeepWith=zn,y.eq=Sn,y.get=Dn,y.has=Nn,y.hasIn=Rn,y.identity=Gn,y.isArguments=ou,y.isArray=iu,y.isArrayLike=xn,y.isArrayLikeObject=kn,y.isBuffer=cu,
y.isEmpty=En,y.isEqual=Ln,y.isFunction=Pn,y.isLength=$n,y.isMap=au,y.isNull=Tn,y.isObject=In,y.isObjectLike=Fn,y.isPlainObject=Mn,y.isSet=fu,y.isSymbol=Un,y.isTypedArray=lu,y.last=jn,y.stubArray=Kn,y.stubFalse=Qn,y.toString=Cn,y.VERSION=Yn,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ne._=y, define(function(){return y})):ee?((ee.exports=y)._=y,re._=y):ne._=y}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const CONSTANTS = {
  /**
   * @typedef {String} ItemType
   **/

  /**
   * Enumeration of data layer item types.
   *
   * @enum {ItemType}
   * @readonly
   */
  itemType: {
    /** Represents an item of type data */
    DATA: 'data',
    /** Represents an item of type function */
    FCTN: 'fctn',
    /** Represents an item of type event */
    EVENT: 'event',
    /** Represents an item of type listener on */
    LISTENER_ON: 'listenerOn',
    /** Represents an item of type listener off */
    LISTENER_OFF: 'listenerOff'
  },

  /**
   * @typedef {String} DataLayerEvent
   **/

  /**
   * Enumeration of data layer events.
   *
   * @enum {DataLayerEvent}
   * @readonly
   */
  dataLayerEvent: {
    /** Represents an event triggered for any change in the data layer state */
    CHANGE: 'adobeDataLayer:change',
    /** Represents an event triggered for any event push to the data layer */
    EVENT: 'adobeDataLayer:event'
  },

  /**
   * @typedef {String} ListenerScope
   **/

  /**
   * Enumeration of listener scopes.
   *
   * @enum {ListenerScope}
   * @readonly
   */
  listenerScope: {
    /** Past events only */
    PAST: 'past',
    /** Future events only */
    FUTURE: 'future',
    /** All events, past and future */
    ALL: 'all'
  }
};

module.exports = CONSTANTS;

},{}],3:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const cloneDeep = _.cloneDeep;
const get = _.get;

const version = require('../version.json').version;
const Item = require('./item');
const Listener = require('./listener');
const ListenerManager = require('./listenerManager');
const CONSTANTS = require('./constants');
const customMerge = require('./utils/customMerge');

/**
 * Manager
 *
 * @class Manager
 * @classdesc Data Layer manager that augments the passed data layer array and handles eventing.
 * @param {Object} config The Data Layer manager configuration.
 */
module.exports = function(config) {
  const _config = config;
  let _dataLayer = [];
  let _state = {};
  let _previousStateCopy = {};
  let _listenerManager;

  const DataLayerManager = {
    getState: function() {
      return _state;
    },
    getDataLayer: function() {
      return _dataLayer;
    },
    getPreviousState: function() {
      return _previousStateCopy;
    }
  };

  _initialize();
  _augment();
  _processItems();

  /**
   * Initializes the data layer.
   *
   * @private
   */
  function _initialize() {
    if (!Array.isArray(_config.dataLayer)) {
      _config.dataLayer = [];
    }

    _dataLayer = _config.dataLayer;
    _dataLayer.version = version;
    _state = {};
    _previousStateCopy = {};
    _listenerManager = ListenerManager(DataLayerManager);
  };

  /**
   * Updates the state with the item.
   *
   * @param {Item} item The item.
   * @private
   */
  function _updateState(item) {
    _previousStateCopy = cloneDeep(_state);
    _state = customMerge(_state, item.data);
  };

  /**
   * Augments the data layer Array Object, overriding: push() and adding getState(), addEventListener and removeEventListener.
   *
   * @private
   */
  function _augment() {
    /**
     * Pushes one or more items to the data layer.
     *
     * @param {...ItemConfig} var_args The items to add to the data layer.
     * @returns {Number} The length of the data layer following push.
     */
    _dataLayer.push = function(var_args) { /* eslint-disable-line camelcase */
      const pushArguments = arguments;
      const filteredArguments = arguments;

      Object.keys(pushArguments).forEach(function(key) {
        const itemConfig = pushArguments[key];
        const item = Item(itemConfig);

        if (!item.valid) {
          delete filteredArguments[key];
        }
        switch (item.type) {
          case CONSTANTS.itemType.DATA:
          case CONSTANTS.itemType.EVENT: {
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.FCTN: {
            delete filteredArguments[key];
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.LISTENER_ON:
          case CONSTANTS.itemType.LISTENER_OFF: {
            delete filteredArguments[key];
          }
        }
      });

      if (filteredArguments[0]) {
        return Array.prototype.push.apply(this, filteredArguments);
      }
    };

    /**
     * Returns a deep copy of the data layer state or of the object defined by the path.
     *
     * @param {Array|String} path The path of the property to get.
     * @returns {*} Returns a deep copy of the resolved value if a path is passed, a deep copy of the data layer state otherwise.
     */
    _dataLayer.getState = function(path) {
      if (path) {
        return get(cloneDeep(_state), path);
      }
      return cloneDeep(_state);
    };

    /**
     * Event listener callback.
     *
     * @callback eventListenerCallback A function that is called when the event of the specified type occurs.
     * @this {DataLayer}
     * @param {Object} event The event object pushed to the data layer that triggered the callback.
     * @param {Object} [beforeState] The state before the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     * @param {Object} [afterState] The state after the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     */

    /**
     * Sets up a function that will be called whenever the specified event is triggered.
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {eventListenerCallback} callback A function that is called when the event of the specified type occurs.
     * @param {Object} [options] Optional characteristics of the event listener.
     * @param {String} [options.path] The path in the state object to filter the listening to.
     * @param {('past'|'future'|'all')} [options.scope] The timing to filter the listening to:
     *      - {String} past The listener is triggered for past events only.
     *      - {String} future The listener is triggered for future events only.
     *      - {String} all The listener is triggered for both past and future events (default value).
     */
    _dataLayer.addEventListener = function(type, callback, options) {
      const eventListenerItem = Item({
        on: type,
        handler: callback,
        scope: options && options.scope,
        path: options && options.path
      });

      _processItem(eventListenerItem);
    };

    /**
     * Removes an event listener previously registered with addEventListener().
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {Function} [listener] Optional function that is to be removed.
     */
    _dataLayer.removeEventListener = function(type, listener) {
      const eventListenerItem = Item({
        off: type,
        handler: listener
      });

      _processItem(eventListenerItem);
    };
  };

  /**
   * Processes all items that already exist on the stack.
   *
   * @private
   */
  function _processItems() {
    for (let i = 0; i < _dataLayer.length; i++) {
      const item = Item(_dataLayer[i], i);

      _processItem(item);

      // remove event listener or invalid item from the data layer array
      if (item.type === CONSTANTS.itemType.LISTENER_ON ||
        item.type === CONSTANTS.itemType.LISTENER_OFF ||
        item.type === CONSTANTS.itemType.FCTN ||
        !item.valid) {
        _dataLayer.splice(i, 1);
        i--;
      }
    }
  };

  /**
   * Processes an item pushed to the stack.
   *
   * @param {Item} item The item to process.
   * @private
   */
  function _processItem(item) {
    if (!item.valid) {
      const message = 'The following item cannot be handled by the data layer ' +
        'because it does not have a valid format: ' +
        JSON.stringify(item.config);
      console.error(message);
      return;
    }

    /**
     * Returns all items before the provided one.
     *
     * @param {Item} item The item.
     * @returns {Array<Item>} The items before.
     * @private
     */
    function _getBefore(item) {
      if (!(_dataLayer.length === 0 || item.index > _dataLayer.length - 1)) {
        return _dataLayer.slice(0, item.index).map(itemConfig => Item(itemConfig));
      }
      return [];
    }

    const typeProcessors = {
      data: function(item) {
        _updateState(item);
        _listenerManager.triggerListeners(item);
      },
      fctn: function(item) {
        item.config.call(_dataLayer, _dataLayer);
      },
      event: function(item) {
        if (item.data) {
          _updateState(item);
        }
        _listenerManager.triggerListeners(item);
      },
      listenerOn: function(item) {
        const listener = Listener(item);
        switch (listener.scope) {
          case CONSTANTS.listenerScope.PAST: {
            for (const registeredItem of _getBefore(item)) {
              _listenerManager.triggerListener(listener, registeredItem);
            }
            break;
          }
          case CONSTANTS.listenerScope.FUTURE: {
            _listenerManager.register(listener);
            break;
          }
          case CONSTANTS.listenerScope.ALL: {
            const registered = _listenerManager.register(listener);
            if (registered) {
              for (const registeredItem of _getBefore(item)) {
                _listenerManager.triggerListener(listener, registeredItem);
              }
            }
          }
        }
      },
      listenerOff: function(item) {
        _listenerManager.unregister(Listener(item));
      }
    };

    typeProcessors[item.type](item);
  };

  return DataLayerManager;
};

},{"../custom-lodash":1,"../version.json":14,"./constants":2,"./item":5,"./listener":7,"./listenerManager":8,"./utils/customMerge":10}],4:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const DataLayerManager = require('./dataLayerManager');

/**
 * Data Layer.
 *
 * @type {Object}
 */
const DataLayer = {
  Manager: DataLayerManager
};

DataLayer.Manager({
  dataLayer: window.adobeDataLayer
});

/**
 * @typedef  {Object} ListenerOnConfig
 * @property {String} on Name of the event to bind to.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} handler Handler to execute when the bound event is triggered.
 */

/**
 * @typedef  {Object} ListenerOffConfig
 * @property {String} off Name of the event to unbind.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} [handler] Handler for a previously attached event to unbind.
 */

/**
 * @typedef {Object} DataConfig
 * @property {Object} data Data to be updated in the state.
 */

/**
 * @typedef {Object} EventConfig
 * @property {String} event Name of the event.
 * @property {Object} [eventInfo] Additional information to pass to the event handler.
 * @property {DataConfig.data} [data] Data to be updated in the state.
 */

/**
 * @typedef {DataConfig | EventConfig | ListenerOnConfig | ListenerOffConfig} ItemConfig
 */

/**
 * Triggered when there is change in the data layer state.
 *
 * @event DataLayerEvent.CHANGE
 * @type {Object}
 * @property {Object} data Data pushed that caused a change in the data layer state.
 */

/**
 * Triggered when an event is pushed to the data layer.
 *
 * @event DataLayerEvent.EVENT
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

/**
 * Triggered when an arbitrary event is pushed to the data layer.
 *
 * @event <custom>
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

module.exports = DataLayer;

},{"./dataLayerManager":3}],5:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const isPlainObject = _.isPlainObject;
const isEmpty = _.isEmpty;
const omit = _.omit;

const dataMatchesContraints = require('./utils/dataMatchesContraints');
const ITEM_CONSTRAINTS = require('./itemConstraints');
const CONSTANTS = require('./constants');

/**
 * Constructs a data layer item.
 *
 * @param {ItemConfig} itemConfig The data layer item configuration.
 * @param {Number} index The item index in the array of existing items.
 */

module.exports = function(itemConfig, index) {
  const _config = itemConfig;
  const _index = index;
  const _type = getType();
  const _data = getData();
  const _valid = !!_type;

  function getType() {
    return Object.keys(ITEM_CONSTRAINTS).find(key => dataMatchesContraints(_config, ITEM_CONSTRAINTS[key])) ||
      (typeof _config === 'function' && CONSTANTS.itemType.FCTN) ||
      (isPlainObject(_config) && CONSTANTS.itemType.DATA);
  }

  function getData() {
    const data = omit(_config, Object.keys(ITEM_CONSTRAINTS.event));
    if (!isEmpty(data)) {
      return data;
    }
  }

  return {
    /**
     * Returns the item configuration.
     *
     * @returns {ItemConfig} The item configuration.
     */
    config: _config,

    /**
     * Returns the item type.
     *
     * @returns {itemType} The item type.
     */
    type: _type,

    /**
     * Returns the item data.
     *
     * @returns {DataConfig} The item data.
     */
    data: _data,

    /**
     * Indicates whether the item is valid.
     *
     * @returns {Boolean} true if the item is valid, false otherwise.
     */
    valid: _valid,

    /**
     * Returns the index of the item in the array of existing items (added with the standard Array.prototype.push())
     *
     * @returns {Number} The index of the item in the array of existing items if it exists, -1 otherwise.
     */
    index: _index
  };
};

},{"../custom-lodash":1,"./constants":2,"./itemConstraints":6,"./utils/dataMatchesContraints":11}],6:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Constraints for each type of the item configuration.
 */

const itemConstraints = {
  event: {
    event: {
      type: 'string'
    },
    eventInfo: {
      optional: true
    }
  },
  listenerOn: {
    on: {
      type: 'string'
    },
    handler: {
      type: 'function'
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  },
  listenerOff: {
    off: {
      type: 'string'
    },
    handler: {
      type: 'function',
      optional: true
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  }
};

module.exports = itemConstraints;

},{}],7:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const CONSTANTS = require('./constants');

/**
 * Constructs a data layer listener.
 *
 * @param {Item} item The item from which to construct the listener.
 */

module.exports = function(item) {
  const _event = item.config.on || item.config.off;
  const _handler = item.config.handler || null;
  const _scope = item.config.scope || (item.config.on && CONSTANTS.listenerScope.ALL) || null;
  const _path = item.config.path || null;

  return {
    /**
     * Returns the listener event name.
     *
     * @returns {String} The listener event name.
     */
    event: _event,

    /**
     * Returns the listener handler.
     *
     * @returns {(Function|null)} The listener handler.
     */
    handler: _handler,

    /**
     * Returns the listener scope.
     *
     * @returns {(String|null)} The listener scope.
     */
    scope: _scope,

    /**
     * Returns the listener path.
     *
     * @returns {(String|null)} The listener path.
     */
    path: _path
  };
};

},{"./constants":2}],8:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const cloneDeep = _.cloneDeep;
const get = _.get;

const constants = require('./constants');
const listenerMatch = require('./utils/listenerMatch');
const indexOfListener = require('./utils/indexOfListener');

/**
 * Creates a listener manager.
 *
 * @param {Manager} dataLayerManager The data layer manager.
 * @returns {ListenerManager} A listener manager.
 */
module.exports = function(dataLayerManager) {
  const _listeners = {};
  const _dataLayerManager = dataLayerManager;

  /**
   * Find index of listener in listeners object.
   */
  const _indexOfListener = indexOfListener.bind(null, _listeners);

  const ListenerManager = {
    /**
     * Registers a listener.
     *
     * @function
     * @param {Listener} listener The listener to register.
     * @returns {Boolean} true if the listener was registered, false otherwise.
     */
    register: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (_indexOfListener(listener) === -1) {
          _listeners[listener.event].push(listener);
          return true;
        }
      } else {
        _listeners[listener.event] = [listener];
        return true;
      }
      return false;
    },
    /**
     * Unregisters a listener.
     *
     * @function
     * @param {Listener} listener The listener to unregister.
     */
    unregister: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (!(listener.handler || listener.scope || listener.path)) {
          _listeners[event] = [];
        } else {
          const index = _indexOfListener(listener);
          if (index > -1) {
            _listeners[event].splice(index, 1);
          }
        }
      }
    },
    /**
     * Triggers listeners related to the passed item.
     *
     * @function
     * @param {Item} item Item to trigger listener for.
     */
    triggerListeners: function(item) {
      const triggeredEvents = _getTriggeredEvents(item);
      triggeredEvents.forEach(function(event) {
        if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
          for (const listener of _listeners[event]) {
            _callHandler(listener, item, false);
          }
        }
      });
    },
    /**
     * Triggers a single listener on the passed item.
     *
     * @function
     * @param {Listener} listener Listener to call.
     * @param {Item} item Item to call the listener with.
     */
    triggerListener: function(listener, item) {
      _callHandler(listener, item, true);
    }
  };

  /**
   * Calls the listener handler on the item if a match is found.
   *
   * @param {Listener} listener The listener.
   * @param {Item} item The item.
   * @param {Boolean} isPastItem Flag indicating whether the item was registered before the listener.
   * @private
   */
  function _callHandler(listener, item, isPastItem) {
    // Do not trigger event during initialization when event was pushed after adding listener and before DL initialization
    if (typeof item.index !== 'undefined') return;

    if (listenerMatch(listener, item)) {
      const callbackArgs = [cloneDeep(item.config)];

      if (item.data) {
        if (listener.path) {
          const oldValue = get(_dataLayerManager.getPreviousState(), listener.path);
          const newValue = get(cloneDeep(item.data), listener.path);
          callbackArgs.push(oldValue, newValue);
        } else if (!isPastItem) {
          const oldState = _dataLayerManager.getPreviousState();
          const newState = cloneDeep(_dataLayerManager.getState());
          callbackArgs.push(oldState, newState);
        }
      }

      listener.handler.apply(_dataLayerManager.getDataLayer(), callbackArgs);
    }
  }

  /**
   * Returns the names of the events that are triggered for this item.
   *
   * @param {Item} item The item.
   * @returns {Array<String>} The names of the events that are triggered for this item.
   * @private
   */
  function _getTriggeredEvents(item) {
    const triggeredEvents = [];

    switch (item.type) {
      case constants.itemType.DATA: {
        triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        break;
      }
      case constants.itemType.EVENT: {
        triggeredEvents.push(constants.dataLayerEvent.EVENT);
        if (item.data) triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        if (item.config.event !== constants.dataLayerEvent.CHANGE) {
          triggeredEvents.push(item.config.event);
        }
        break;
      }
    }
    return triggeredEvents;
  }

  return ListenerManager;
};

},{"../custom-lodash":1,"./constants":2,"./utils/indexOfListener":12,"./utils/listenerMatch":13}],9:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;
const get = _.get;

/**
  * Checks if the object contains an ancestor that is set to null or undefined.
  *
  * @param {Object} object The object to check.
  * @param {String} path The path to check.
  * @returns {Boolean} true if the object contains an ancestor that is set to null or undefined, false otherwise.
  * @private
  */
module.exports = function(object, path) {
  let ancestorPath = path.substring(0, path.lastIndexOf('.'));
  while (ancestorPath) {
    if (has(object, ancestorPath)) {
      const ancestorValue = get(object, ancestorPath);
      if (ancestorValue === null || ancestorValue === undefined) {
        return true;
      }
    }
    ancestorPath = ancestorPath.substring(0, ancestorPath.lastIndexOf('.'));
  }

  return false;
};

},{"../../custom-lodash":1}],10:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const cloneDeepWith = _.cloneDeepWith;
const isObject = _.isObject;
const isArray = _.isArray;
const reject = _.reject;
const mergeWith = _.mergeWith;
const isNull = _.isNull;

/**
 * Merges the source into the object and sets objects as 'undefined' if they are 'undefined' in the source object.
 *
 * @param {Object} object The object into which to merge.
 * @param {Object} source The source to merge with.
 * @returns {Object} The object into which source was merged in.
 */
module.exports = function(object, source) {
  const makeOmittingCloneDeepCustomizer = function(predicate) {
    return function omittingCloneDeepCustomizer(value, key, object, stack) {
      if (isObject(value)) {
        if (isArray(value)) {
          return reject(value, predicate).map(item => cloneDeepWith(item, omittingCloneDeepCustomizer));
        }

        const clone = {};
        for (const subKey of Object.keys(value)) {
          if (!predicate(value[subKey])) {
            clone[subKey] = cloneDeepWith(value[subKey], omittingCloneDeepCustomizer);
          }
        }
        return clone;
      }
      return undefined;
    };
  };

  const customizer = function(objValue, srcValue, key, object) {
    if (typeof srcValue === 'undefined' || srcValue === null) {
      return null;
    }
  };

  const omitDeep = function(value, predicate = (val) => !val) {
    return cloneDeepWith(value, makeOmittingCloneDeepCustomizer(predicate));
  };

  mergeWith(object, source, customizer);

  // Remove null or undefined objects
  object = omitDeep(object, isNull);

  return object;
};

},{"../../custom-lodash":1}],11:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = function(data, constraints) {
  // Go through all constraints and find one which does not match the data
  const foundObjection = Object.keys(constraints).find(key => {
    const type = constraints[key].type;
    const supportedValues = constraints[key].values;
    const mandatory = !constraints[key].optional;
    const value = data[key];
    const valueType = typeof value;
    const incorrectType = type && valueType !== type;
    const noMatchForSupportedValues = supportedValues && !supportedValues.includes(value);
    if (mandatory) {
      return !value || incorrectType || noMatchForSupportedValues;
    } else {
      return value && (incorrectType || noMatchForSupportedValues);
    }
  });
  // If no objections found then data matches contraints
  return typeof foundObjection === 'undefined';
};

},{}],12:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const isEqual = _.isEqual;

module.exports = function(listeners, listener) {
  const event = listener.event;

  if (Object.prototype.hasOwnProperty.call(listeners, event)) {
    for (const [index, registeredListener] of listeners[event].entries()) {
      if (isEqual(registeredListener.handler, listener.handler)) {
        return index;
      }
    }
  }
  return -1;
};

},{"../../custom-lodash":1}],13:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;

const CONSTANTS = require('../constants');
const ancestorRemoved = require('./ancestorRemoved');

/**
 * Checks if the listener matches the item.
 *
 * @param {Listener} listener The listener.
 * @param {Item} item The item.
 * @returns {Boolean} true if listener matches the item, false otherwise.
 */
function listenerMatch(listener, item) {
  const event = listener.event;
  const itemConfig = item.config;
  let matches = false;

  if (item.type === CONSTANTS.itemType.DATA) {
    if (event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  } else if (item.type === CONSTANTS.itemType.EVENT) {
    if (event === CONSTANTS.dataLayerEvent.EVENT || event === itemConfig.event) {
      matches = selectorMatches(listener, item);
    }
    if (item.data && event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  }

  return matches;
}

/**
 * Checks if a listener has a selector that points to an object in the data payload of an item.
 *
 * @param {Listener} listener The listener to extract the selector from.
 * @param {Item} item The item.
 * @returns {Boolean} true if a selector is not provided or if the given selector is matching, false otherwise.
 * @private
 */
function selectorMatches(listener, item) {
  if (item.data && listener.path) {
    return has(item.data, listener.path) || ancestorRemoved(item.data, listener.path);
  }

  return true;
}

module.exports = listenerMatch;

},{"../../custom-lodash":1,"../constants":2,"./ancestorRemoved":9}],14:[function(require,module,exports){
module.exports={
  "version": "1.1.0"
}

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjdXN0b20tbG9kYXNoLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9kYXRhTGF5ZXJNYW5hZ2VyLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL2l0ZW0uanMiLCJzcmMvaXRlbUNvbnN0cmFpbnRzLmpzIiwic3JjL2xpc3RlbmVyLmpzIiwic3JjL2xpc3RlbmVyTWFuYWdlci5qcyIsInNyYy91dGlscy9hbmNlc3RvclJlbW92ZWQuanMiLCJzcmMvdXRpbHMvY3VzdG9tTWVyZ2UuanMiLCJzcmMvdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzLmpzIiwic3JjL3V0aWxzL2luZGV4T2ZMaXN0ZW5lci5qcyIsInNyYy91dGlscy9saXN0ZW5lck1hdGNoLmpzIiwidmVyc2lvbi5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSBsb2Rhc2guY29tL2xpY2Vuc2UgfCBVbmRlcnNjb3JlLmpzIDEuOC4zIHVuZGVyc2NvcmVqcy5vcmcvTElDRU5TRVxuICogQnVpbGQ6IGBsb2Rhc2ggaW5jbHVkZT1cImNsb25lRGVlcCxjbG9uZURlZXBXaXRoLGdldCxoYXMsaXNFbXB0eSxpc0VxdWFsLGlzTnVsbCxpc1BsYWluT2JqZWN0LGlzT2JqZWN0LG1lcmdlLG1lcmdlV2l0aCxvbWl0LHJlamVjdFwiIC1wIC1vIGN1c3RvbS1sb2Rhc2guanNgXG4gKi9cbjsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbixyKXtzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKG4pO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKG4sclswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwobixyWzBdLHJbMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKG4sclswXSxyWzFdLHJbMl0pfXJldHVybiB0LmFwcGx5KG4scil9ZnVuY3Rpb24gbih0LG4pe2Zvcih2YXIgcj0tMSxlPW51bGw9PXQ/MDp0Lmxlbmd0aDsrK3I8ZSYmbih0W3JdLHIsdCkhPT1mYWxzZTspO3JldHVybiB0fWZ1bmN0aW9uIHIodCxuKXtmb3IodmFyIHI9LTEsZT1udWxsPT10PzA6dC5sZW5ndGgsdT0wLG89W107KytyPGU7KXt2YXIgaT10W3JdO24oaSxyLHQpJiYob1t1KytdPWkpfXJldHVybiBvfWZ1bmN0aW9uIGUodCxuKXtmb3IodmFyIHI9LTEsZT1udWxsPT10PzA6dC5sZW5ndGgsdT1BcnJheShlKTsrK3I8ZTspdVtyXT1uKHRbcl0scix0KTtyZXR1cm4gdX1mdW5jdGlvbiB1KHQsbil7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT10Lmxlbmd0aDsrK3I8ZTspdFt1K3JdPW5bcl07XG5yZXR1cm4gdH1mdW5jdGlvbiBvKHQsbil7Zm9yKHZhciByPS0xLGU9bnVsbD09dD8wOnQubGVuZ3RoOysrcjxlOylpZihuKHRbcl0scix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/WG46blt0XX19ZnVuY3Rpb24gYyh0LG4pe2Zvcih2YXIgcj0tMSxlPUFycmF5KHQpOysrcjx0OyllW3JdPW4ocik7cmV0dXJuIGV9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQobil9fWZ1bmN0aW9uIGYodCxuKXtyZXR1cm4gdC5oYXMobil9ZnVuY3Rpb24gbCh0LG4pe3JldHVybiBudWxsPT10P1huOnRbbl19ZnVuY3Rpb24gcyh0KXt2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JbKytuXT1bZSx0XX0pLHJ9ZnVuY3Rpb24gaCh0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdChuKHIpKX19ZnVuY3Rpb24gcCh0LG4pe3JldHVyblwiX19wcm90b19fXCI9PW4/WG46dFtuXTtcbn1mdW5jdGlvbiB2KHQpe3ZhciBuPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbKytuXT10fSkscn1mdW5jdGlvbiB5KCl7fWZ1bmN0aW9uIGIodCl7dmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK248cjspe3ZhciBlPXRbbl07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gXygpe3RoaXMuX19kYXRhX189TmU/TmUobnVsbCk6e30sdGhpcy5zaXplPTB9ZnVuY3Rpb24gZyh0KXt2YXIgbj10aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF07cmV0dXJuIHRoaXMuc2l6ZS09bj8xOjAsbn1mdW5jdGlvbiBkKHQpe3ZhciBuPXRoaXMuX19kYXRhX187aWYoTmUpe3ZhciByPW5bdF07cmV0dXJuIHI9PT1ucj9YbjpyfXJldHVybiB5ZS5jYWxsKG4sdCk/blt0XTpYbn1mdW5jdGlvbiBqKHQpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIE5lP25bdF0hPT1Ybjp5ZS5jYWxsKG4sdCl9ZnVuY3Rpb24gdyh0LG4pe1xudmFyIHI9dGhpcy5fX2RhdGFfXztyZXR1cm4gdGhpcy5zaXplKz10aGlzLmhhcyh0KT8wOjEsclt0XT1OZSYmbj09PVhuP25yOm4sdGhpc31mdW5jdGlvbiBPKHQpe3ZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIG0oKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIEEodCl7dmFyIG49dGhpcy5fX2RhdGFfXyxyPUcobix0KTtyZXR1cm4hKHI8MCkmJihyPT1uLmxlbmd0aC0xP24ucG9wKCk6eGUuY2FsbChuLHIsMSksLS10aGlzLnNpemUsdHJ1ZSl9ZnVuY3Rpb24geih0KXt2YXIgbj10aGlzLl9fZGF0YV9fLHI9RyhuLHQpO3JldHVybiByPDA/WG46bltyXVsxXX1mdW5jdGlvbiBTKHQpe3JldHVybiBHKHRoaXMuX19kYXRhX18sdCk+LTF9ZnVuY3Rpb24geCh0LG4pe3ZhciByPXRoaXMuX19kYXRhX18sZT1HKHIsdCk7cmV0dXJuIGU8MD8oKyt0aGlzLnNpemUsXG5yLnB1c2goW3Qsbl0pKTpyW2VdWzFdPW4sdGhpc31mdW5jdGlvbiBrKHQpe3ZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIEUoKXt0aGlzLnNpemU9MCx0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyBiLG1hcDpuZXcoVWV8fE8pLHN0cmluZzpuZXcgYn19ZnVuY3Rpb24gTCh0KXt2YXIgbj1IdCh0aGlzLHQpLmRlbGV0ZSh0KTtyZXR1cm4gdGhpcy5zaXplLT1uPzE6MCxufWZ1bmN0aW9uIFAodCl7cmV0dXJuIEh0KHRoaXMsdCkuZ2V0KHQpfWZ1bmN0aW9uICQodCl7cmV0dXJuIEh0KHRoaXMsdCkuaGFzKHQpfWZ1bmN0aW9uIEkodCxuKXt2YXIgcj1IdCh0aGlzLHQpLGU9ci5zaXplO3JldHVybiByLnNldCh0LG4pLHRoaXMuc2l6ZSs9ci5zaXplPT1lPzA6MSx0aGlzfWZ1bmN0aW9uIEYodCl7dmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IGs7KytuPHI7KXRoaXMuYWRkKHRbbl0pO1xufWZ1bmN0aW9uIFQodCl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KHQsbnIpLHRoaXN9ZnVuY3Rpb24gTSh0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9ZnVuY3Rpb24gVSh0KXt0aGlzLnNpemU9KHRoaXMuX19kYXRhX189bmV3IE8odCkpLnNpemV9ZnVuY3Rpb24gQigpe3RoaXMuX19kYXRhX189bmV3IE8sdGhpcy5zaXplPTB9ZnVuY3Rpb24gQyh0KXt2YXIgbj10aGlzLl9fZGF0YV9fLHI9bi5kZWxldGUodCk7cmV0dXJuIHRoaXMuc2l6ZT1uLnNpemUscn1mdW5jdGlvbiBEKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldCh0KX1mdW5jdGlvbiBOKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX1mdW5jdGlvbiBSKHQsbil7dmFyIHI9dGhpcy5fX2RhdGFfXztpZihyIGluc3RhbmNlb2YgTyl7dmFyIGU9ci5fX2RhdGFfXztpZighVWV8fGUubGVuZ3RoPFpuLTEpcmV0dXJuIGUucHVzaChbdCxuXSksdGhpcy5zaXplPSsrci5zaXplLHRoaXM7cj10aGlzLl9fZGF0YV9fPW5ldyBrKGUpO1xufXJldHVybiByLnNldCh0LG4pLHRoaXMuc2l6ZT1yLnNpemUsdGhpc31mdW5jdGlvbiBXKHQsbil7dmFyIHI9aXUodCksZT0hciYmb3UodCksdT0hciYmIWUmJmN1KHQpLG89IXImJiFlJiYhdSYmbHUodCksaT1yfHxlfHx1fHxvLGE9aT9jKHQubGVuZ3RoLFN0cmluZyk6W10sZj1hLmxlbmd0aDtmb3IodmFyIGwgaW4gdCkhbiYmIXllLmNhbGwodCxsKXx8aSYmKFwibGVuZ3RoXCI9PWx8fHUmJihcIm9mZnNldFwiPT1sfHxcInBhcmVudFwiPT1sKXx8byYmKFwiYnVmZmVyXCI9PWx8fFwiYnl0ZUxlbmd0aFwiPT1sfHxcImJ5dGVPZmZzZXRcIj09bCl8fHJuKGwsZikpfHxhLnB1c2gobCk7cmV0dXJuIGF9ZnVuY3Rpb24gVih0LG4scil7KHI9PT1Ybnx8U24odFtuXSxyKSkmJihyIT09WG58fG4gaW4gdCl8fEsodCxuLHIpfWZ1bmN0aW9uIHEodCxuLHIpe3ZhciBlPXRbbl07eWUuY2FsbCh0LG4pJiZTbihlLHIpJiYociE9PVhufHxuIGluIHQpfHxLKHQsbixyKX1mdW5jdGlvbiBHKHQsbil7Zm9yKHZhciByPXQubGVuZ3RoO3ItLTspaWYoU24odFtyXVswXSxuKSlyZXR1cm4gcjtcbnJldHVybi0xfWZ1bmN0aW9uIEgodCxuKXtyZXR1cm4gdCYmSXQobixXbihuKSx0KX1mdW5jdGlvbiBKKHQsbil7cmV0dXJuIHQmJkl0KG4sVm4obiksdCl9ZnVuY3Rpb24gSyh0LG4scil7XCJfX3Byb3RvX19cIj09biYmTGU/TGUodCxuLHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOnRydWUsdmFsdWU6cix3cml0YWJsZTp0cnVlfSk6dFtuXT1yfWZ1bmN0aW9uIFEodCxyLGUsdSxvLGkpe3ZhciBjLGE9ciZlcixmPXImdXIsbD1yJm9yO2lmKGUmJihjPW8/ZSh0LHUsbyxpKTplKHQpKSxjIT09WG4pcmV0dXJuIGM7aWYoIUluKHQpKXJldHVybiB0O3ZhciBzPWl1KHQpO2lmKHMpe2lmKGM9WXQodCksIWEpcmV0dXJuICR0KHQsYyl9ZWxzZXt2YXIgaD1ydSh0KSxwPWg9PWdyfHxoPT1kcjtpZihjdSh0KSlyZXR1cm4gU3QodCxhKTtpZihoPT1tcnx8aD09aHJ8fHAmJiFvKXtpZihjPWZ8fHA/e306WnQodCksIWEpcmV0dXJuIGY/VHQodCxKKGMsdCkpOkZ0KHQsSChjLHQpKX1lbHNle2lmKCFZcltoXSlyZXR1cm4gbz90Ont9O1xuYz10bih0LGgsYSl9fWl8fChpPW5ldyBVKTt2YXIgdj1pLmdldCh0KTtpZih2KXJldHVybiB2O2lmKGkuc2V0KHQsYyksZnUodCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihuKXtjLmFkZChRKG4scixlLG4sdCxpKSl9KSxjO2lmKGF1KHQpKXJldHVybiB0LmZvckVhY2goZnVuY3Rpb24obix1KXtjLnNldCh1LFEobixyLGUsdSx0LGkpKX0pLGM7dmFyIHk9bD9mP3F0OlZ0OmY/Vm46V24sYj1zP1huOnkodCk7cmV0dXJuIG4oYnx8dCxmdW5jdGlvbihuLHUpe2ImJih1PW4sbj10W3VdKSxxKGMsdSxRKG4scixlLHUsdCxpKSl9KSxjfWZ1bmN0aW9uIFgodCxuKXt2YXIgcj1bXTtyZXR1cm4gWGUodCxmdW5jdGlvbih0LGUsdSl7bih0LGUsdSkmJnIucHVzaCh0KX0pLHJ9ZnVuY3Rpb24gWSh0LG4scixlLG8pe3ZhciBpPS0xLGM9dC5sZW5ndGg7Zm9yKHJ8fChyPW5uKSxvfHwobz1bXSk7KytpPGM7KXt2YXIgYT10W2ldO24+MCYmcihhKT9uPjE/WShhLG4tMSxyLGUsbyk6dShvLGEpOmV8fChvW28ubGVuZ3RoXT1hKTtcbn1yZXR1cm4gb31mdW5jdGlvbiBaKHQsbil7cmV0dXJuIHQmJlllKHQsbixXbil9ZnVuY3Rpb24gdHQodCxuKXtuPXp0KG4sdCk7Zm9yKHZhciByPTAsZT1uLmxlbmd0aDtudWxsIT10JiZyPGU7KXQ9dFtfbihuW3IrK10pXTtyZXR1cm4gciYmcj09ZT90OlhufWZ1bmN0aW9uIG50KHQsbixyKXt2YXIgZT1uKHQpO3JldHVybiBpdSh0KT9lOnUoZSxyKHQpKX1mdW5jdGlvbiBydCh0KXtyZXR1cm4gbnVsbD09dD90PT09WG4/THI6T3I6RWUmJkVlIGluIE9iamVjdCh0KT9RdCh0KTpwbih0KX1mdW5jdGlvbiBldCh0LG4pe3JldHVybiBudWxsIT10JiZ5ZS5jYWxsKHQsbil9ZnVuY3Rpb24gdXQodCxuKXtyZXR1cm4gbnVsbCE9dCYmbiBpbiBPYmplY3QodCl9ZnVuY3Rpb24gb3QodCl7cmV0dXJuIEZuKHQpJiZydCh0KT09aHJ9ZnVuY3Rpb24gaXQodCxuLHIsZSx1KXtyZXR1cm4gdD09PW58fChudWxsPT10fHxudWxsPT1ufHwhRm4odCkmJiFGbihuKT90IT09dCYmbiE9PW46Y3QodCxuLHIsZSxpdCx1KSk7XG59ZnVuY3Rpb24gY3QodCxuLHIsZSx1LG8pe3ZhciBpPWl1KHQpLGM9aXUobiksYT1pP3ByOnJ1KHQpLGY9Yz9wcjpydShuKTthPWE9PWhyP21yOmEsZj1mPT1ocj9tcjpmO3ZhciBsPWE9PW1yLHM9Zj09bXIsaD1hPT1mO2lmKGgmJmN1KHQpKXtpZighY3UobikpcmV0dXJuIGZhbHNlO2k9dHJ1ZSxsPWZhbHNlfWlmKGgmJiFsKXJldHVybiBvfHwobz1uZXcgVSksaXx8bHUodCk/RHQodCxuLHIsZSx1LG8pOk50KHQsbixhLHIsZSx1LG8pO2lmKCEociZpcikpe3ZhciBwPWwmJnllLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLHY9cyYmeWUuY2FsbChuLFwiX193cmFwcGVkX19cIik7aWYocHx8dil7dmFyIHk9cD90LnZhbHVlKCk6dCxiPXY/bi52YWx1ZSgpOm47cmV0dXJuIG98fChvPW5ldyBVKSx1KHksYixyLGUsbyl9fXJldHVybiEhaCYmKG98fChvPW5ldyBVKSxSdCh0LG4scixlLHUsbykpfWZ1bmN0aW9uIGF0KHQpe3JldHVybiBGbih0KSYmcnUodCk9PWpyfWZ1bmN0aW9uIGZ0KHQsbixyLGUpe3ZhciB1PXIubGVuZ3RoLG89dSxpPSFlO1xuaWYobnVsbD09dClyZXR1cm4hbztmb3IodD1PYmplY3QodCk7dS0tOyl7dmFyIGM9clt1XTtpZihpJiZjWzJdP2NbMV0hPT10W2NbMF1dOiEoY1swXWluIHQpKXJldHVybiBmYWxzZX1mb3IoOysrdTxvOyl7Yz1yW3VdO3ZhciBhPWNbMF0sZj10W2FdLGw9Y1sxXTtpZihpJiZjWzJdKXtpZihmPT09WG4mJiEoYSBpbiB0KSlyZXR1cm4gZmFsc2V9ZWxzZXt2YXIgcz1uZXcgVTtpZihlKXZhciBoPWUoZixsLGEsdCxuLHMpO2lmKCEoaD09PVhuP2l0KGwsZixpcnxjcixlLHMpOmgpKXJldHVybiBmYWxzZX19cmV0dXJuIHRydWV9ZnVuY3Rpb24gbHQodCl7cmV0dXJuISghSW4odCl8fGNuKHQpKSYmKFBuKHQpP2RlOktyKS50ZXN0KGduKHQpKX1mdW5jdGlvbiBzdCh0KXtyZXR1cm4gRm4odCkmJnJ1KHQpPT14cn1mdW5jdGlvbiBodCh0KXtyZXR1cm4gRm4odCkmJiRuKHQubGVuZ3RoKSYmISFYcltydCh0KV19ZnVuY3Rpb24gcHQodCl7cmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpudWxsPT10P0duOnR5cGVvZiB0PT1cIm9iamVjdFwiP2l1KHQpP190KHRbMF0sdFsxXSk6YnQodCk6Sm4odCk7XG59ZnVuY3Rpb24gdnQodCl7aWYoIWFuKHQpKXJldHVybiBJZSh0KTt2YXIgbj1bXTtmb3IodmFyIHIgaW4gT2JqZWN0KHQpKXllLmNhbGwodCxyKSYmXCJjb25zdHJ1Y3RvclwiIT1yJiZuLnB1c2gocik7cmV0dXJuIG59ZnVuY3Rpb24geXQodCl7aWYoIUluKHQpKXJldHVybiBobih0KTt2YXIgbj1hbih0KSxyPVtdO2Zvcih2YXIgZSBpbiB0KShcImNvbnN0cnVjdG9yXCIhPWV8fCFuJiZ5ZS5jYWxsKHQsZSkpJiZyLnB1c2goZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gYnQodCl7dmFyIG49SnQodCk7cmV0dXJuIDE9PW4ubGVuZ3RoJiZuWzBdWzJdP2xuKG5bMF1bMF0sblswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT10fHxmdChyLHQsbil9fWZ1bmN0aW9uIF90KHQsbil7cmV0dXJuIHVuKHQpJiZmbihuKT9sbihfbih0KSxuKTpmdW5jdGlvbihyKXt2YXIgZT1EbihyLHQpO3JldHVybiBlPT09WG4mJmU9PT1uP1JuKHIsdCk6aXQobixlLGlyfGNyKX19ZnVuY3Rpb24gZ3QodCxuLHIsZSx1KXtcbnQhPT1uJiZZZShuLGZ1bmN0aW9uKG8saSl7aWYoSW4obykpdXx8KHU9bmV3IFUpLGR0KHQsbixpLHIsZ3QsZSx1KTtlbHNle3ZhciBjPWU/ZShwKHQsaSksbyxpK1wiXCIsdCxuLHUpOlhuO2M9PT1YbiYmKGM9byksVih0LGksYyl9fSxWbil9ZnVuY3Rpb24gZHQodCxuLHIsZSx1LG8saSl7dmFyIGM9cCh0LHIpLGE9cChuLHIpLGY9aS5nZXQoYSk7aWYoZilyZXR1cm4gVih0LHIsZiksWG47dmFyIGw9bz9vKGMsYSxyK1wiXCIsdCxuLGkpOlhuLHM9bD09PVhuO2lmKHMpe3ZhciBoPWl1KGEpLHY9IWgmJmN1KGEpLHk9IWgmJiF2JiZsdShhKTtsPWEsaHx8dnx8eT9pdShjKT9sPWM6a24oYyk/bD0kdChjKTp2PyhzPWZhbHNlLGw9U3QoYSx0cnVlKSk6eT8ocz1mYWxzZSxsPVB0KGEsdHJ1ZSkpOmw9W106TW4oYSl8fG91KGEpPyhsPWMsb3UoYyk/bD1CbihjKTooIUluKGMpfHxlJiZQbihjKSkmJihsPVp0KGEpKSk6cz1mYWxzZX1zJiYoaS5zZXQoYSxsKSx1KGwsYSxlLG8saSksaS5kZWxldGUoYSkpLFYodCxyLGwpO1xufWZ1bmN0aW9uIGp0KHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdHQobix0KX19ZnVuY3Rpb24gd3QodCxuKXtyZXR1cm4gZXUodm4odCxuLEduKSx0K1wiXCIpfWZ1bmN0aW9uIE90KHQsbixyKXt2YXIgZT0tMSx1PXQubGVuZ3RoO248MCYmKG49LW4+dT8wOnUrbikscj1yPnU/dTpyLHI8MCYmKHIrPXUpLHU9bj5yPzA6ci1uPj4+MCxuPj4+PTA7Zm9yKHZhciBvPUFycmF5KHUpOysrZTx1OylvW2VdPXRbZStuXTtyZXR1cm4gb31mdW5jdGlvbiBtdCh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilyZXR1cm4gdDtpZihpdSh0KSlyZXR1cm4gZSh0LG10KStcIlwiO2lmKFVuKHQpKXJldHVybiBLZT9LZS5jYWxsKHQpOlwiXCI7dmFyIG49dCtcIlwiO3JldHVyblwiMFwiPT1uJiYxL3Q9PS1scj9cIi0wXCI6bn1mdW5jdGlvbiBBdCh0LG4pe3JldHVybiBuPXp0KG4sdCksdD15bih0LG4pLG51bGw9PXR8fGRlbGV0ZSB0W19uKGpuKG4pKV19ZnVuY3Rpb24genQodCxuKXtyZXR1cm4gaXUodCk/dDp1bih0LG4pP1t0XTp1dShDbih0KSk7XG59ZnVuY3Rpb24gU3QodCxuKXtpZihuKXJldHVybiB0LnNsaWNlKCk7dmFyIHI9dC5sZW5ndGgsZT1tZT9tZShyKTpuZXcgdC5jb25zdHJ1Y3RvcihyKTtyZXR1cm4gdC5jb3B5KGUpLGV9ZnVuY3Rpb24geHQodCl7dmFyIG49bmV3IHQuY29uc3RydWN0b3IodC5ieXRlTGVuZ3RoKTtyZXR1cm4gbmV3IE9lKG4pLnNldChuZXcgT2UodCkpLG59ZnVuY3Rpb24ga3QodCxuKXtyZXR1cm4gbmV3IHQuY29uc3RydWN0b3Iobj94dCh0LmJ1ZmZlcik6dC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCl9ZnVuY3Rpb24gRXQodCl7dmFyIG49bmV3IHQuY29uc3RydWN0b3IodC5zb3VyY2UsSnIuZXhlYyh0KSk7cmV0dXJuIG4ubGFzdEluZGV4PXQubGFzdEluZGV4LG59ZnVuY3Rpb24gTHQodCl7cmV0dXJuIEplP09iamVjdChKZS5jYWxsKHQpKTp7fX1mdW5jdGlvbiBQdCh0LG4pe3JldHVybiBuZXcgdC5jb25zdHJ1Y3RvcihuP3h0KHQuYnVmZmVyKTp0LmJ1ZmZlcix0LmJ5dGVPZmZzZXQsdC5sZW5ndGgpO1xufWZ1bmN0aW9uICR0KHQsbil7dmFyIHI9LTEsZT10Lmxlbmd0aDtmb3Iobnx8KG49QXJyYXkoZSkpOysrcjxlOyluW3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gSXQodCxuLHIsZSl7dmFyIHU9IXI7cnx8KHI9e30pO2Zvcih2YXIgbz0tMSxpPW4ubGVuZ3RoOysrbzxpOyl7dmFyIGM9bltvXSxhPWU/ZShyW2NdLHRbY10sYyxyLHQpOlhuO2E9PT1YbiYmKGE9dFtjXSksdT9LKHIsYyxhKTpxKHIsYyxhKX1yZXR1cm4gcn1mdW5jdGlvbiBGdCh0LG4pe3JldHVybiBJdCh0LHR1KHQpLG4pfWZ1bmN0aW9uIFR0KHQsbil7cmV0dXJuIEl0KHQsbnUodCksbil9ZnVuY3Rpb24gTXQodCl7cmV0dXJuIHd0KGZ1bmN0aW9uKG4scil7dmFyIGU9LTEsdT1yLmxlbmd0aCxvPXU+MT9yW3UtMV06WG4saT11PjI/clsyXTpYbjtmb3Iobz10Lmxlbmd0aD4zJiZ0eXBlb2Ygbz09XCJmdW5jdGlvblwiPyh1LS0sbyk6WG4saSYmZW4oclswXSxyWzFdLGkpJiYobz11PDM/WG46byx1PTEpLG49T2JqZWN0KG4pOysrZTx1Oyl7XG52YXIgYz1yW2VdO2MmJnQobixjLGUsbyl9cmV0dXJuIG59KX1mdW5jdGlvbiBVdCh0LG4pe3JldHVybiBmdW5jdGlvbihyLGUpe2lmKG51bGw9PXIpcmV0dXJuIHI7aWYoIXhuKHIpKXJldHVybiB0KHIsZSk7Zm9yKHZhciB1PXIubGVuZ3RoLG89bj91Oi0xLGk9T2JqZWN0KHIpOyhuP28tLTorK288dSkmJmUoaVtvXSxvLGkpIT09ZmFsc2U7KTtyZXR1cm4gcn19ZnVuY3Rpb24gQnQodCl7cmV0dXJuIGZ1bmN0aW9uKG4scixlKXtmb3IodmFyIHU9LTEsbz1PYmplY3QobiksaT1lKG4pLGM9aS5sZW5ndGg7Yy0tOyl7dmFyIGE9aVt0P2M6Kyt1XTtpZihyKG9bYV0sYSxvKT09PWZhbHNlKWJyZWFrfXJldHVybiBufX1mdW5jdGlvbiBDdCh0KXtyZXR1cm4gTW4odCk/WG46dH1mdW5jdGlvbiBEdCh0LG4scixlLHUsaSl7dmFyIGM9ciZpcixhPXQubGVuZ3RoLGw9bi5sZW5ndGg7aWYoYSE9bCYmIShjJiZsPmEpKXJldHVybiBmYWxzZTt2YXIgcz1pLmdldCh0KTtpZihzJiZpLmdldChuKSlyZXR1cm4gcz09bjtcbnZhciBoPS0xLHA9dHJ1ZSx2PXImY3I/bmV3IEY6WG47Zm9yKGkuc2V0KHQsbiksaS5zZXQobix0KTsrK2g8YTspe3ZhciB5PXRbaF0sYj1uW2hdO2lmKGUpdmFyIF89Yz9lKGIseSxoLG4sdCxpKTplKHksYixoLHQsbixpKTtpZihfIT09WG4pe2lmKF8pY29udGludWU7cD1mYWxzZTticmVha31pZih2KXtpZighbyhuLGZ1bmN0aW9uKHQsbil7aWYoIWYodixuKSYmKHk9PT10fHx1KHksdCxyLGUsaSkpKXJldHVybiB2LnB1c2gobil9KSl7cD1mYWxzZTticmVha319ZWxzZSBpZih5IT09YiYmIXUoeSxiLHIsZSxpKSl7cD1mYWxzZTticmVha319cmV0dXJuIGkuZGVsZXRlKHQpLGkuZGVsZXRlKG4pLHB9ZnVuY3Rpb24gTnQodCxuLHIsZSx1LG8saSl7c3dpdGNoKHIpe2Nhc2UgSXI6aWYodC5ieXRlTGVuZ3RoIT1uLmJ5dGVMZW5ndGh8fHQuYnl0ZU9mZnNldCE9bi5ieXRlT2Zmc2V0KXJldHVybiBmYWxzZTt0PXQuYnVmZmVyLG49bi5idWZmZXI7Y2FzZSAkcjpyZXR1cm4hKHQuYnl0ZUxlbmd0aCE9bi5ieXRlTGVuZ3RofHwhbyhuZXcgT2UodCksbmV3IE9lKG4pKSk7XG5jYXNlIHlyOmNhc2UgYnI6Y2FzZSB3cjpyZXR1cm4gU24oK3QsK24pO2Nhc2UgX3I6cmV0dXJuIHQubmFtZT09bi5uYW1lJiZ0Lm1lc3NhZ2U9PW4ubWVzc2FnZTtjYXNlIFNyOmNhc2Uga3I6cmV0dXJuIHQ9PW4rXCJcIjtjYXNlIGpyOnZhciBjPXM7Y2FzZSB4cjp2YXIgYT1lJmlyO2lmKGN8fChjPXYpLHQuc2l6ZSE9bi5zaXplJiYhYSlyZXR1cm4gZmFsc2U7dmFyIGY9aS5nZXQodCk7aWYoZilyZXR1cm4gZj09bjtlfD1jcixpLnNldCh0LG4pO3ZhciBsPUR0KGModCksYyhuKSxlLHUsbyxpKTtyZXR1cm4gaS5kZWxldGUodCksbDtjYXNlIEVyOmlmKEplKXJldHVybiBKZS5jYWxsKHQpPT1KZS5jYWxsKG4pfXJldHVybiBmYWxzZX1mdW5jdGlvbiBSdCh0LG4scixlLHUsbyl7dmFyIGk9ciZpcixjPVZ0KHQpLGE9Yy5sZW5ndGg7aWYoYSE9VnQobikubGVuZ3RoJiYhaSlyZXR1cm4gZmFsc2U7Zm9yKHZhciBmPWE7Zi0tOyl7dmFyIGw9Y1tmXTtpZighKGk/bCBpbiBuOnllLmNhbGwobixsKSkpcmV0dXJuIGZhbHNlO1xufXZhciBzPW8uZ2V0KHQpO2lmKHMmJm8uZ2V0KG4pKXJldHVybiBzPT1uO3ZhciBoPXRydWU7by5zZXQodCxuKSxvLnNldChuLHQpO2Zvcih2YXIgcD1pOysrZjxhOyl7bD1jW2ZdO3ZhciB2PXRbbF0seT1uW2xdO2lmKGUpdmFyIGI9aT9lKHksdixsLG4sdCxvKTplKHYseSxsLHQsbixvKTtpZighKGI9PT1Ybj92PT09eXx8dSh2LHkscixlLG8pOmIpKXtoPWZhbHNlO2JyZWFrfXB8fChwPVwiY29uc3RydWN0b3JcIj09bCl9aWYoaCYmIXApe3ZhciBfPXQuY29uc3RydWN0b3IsZz1uLmNvbnN0cnVjdG9yO18hPWcmJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIG4mJiEodHlwZW9mIF89PVwiZnVuY3Rpb25cIiYmXyBpbnN0YW5jZW9mIF8mJnR5cGVvZiBnPT1cImZ1bmN0aW9uXCImJmcgaW5zdGFuY2VvZiBnKSYmKGg9ZmFsc2UpfXJldHVybiBvLmRlbGV0ZSh0KSxvLmRlbGV0ZShuKSxofWZ1bmN0aW9uIFd0KHQpe3JldHVybiBldSh2bih0LFhuLGRuKSx0K1wiXCIpfWZ1bmN0aW9uIFZ0KHQpe3JldHVybiBudCh0LFduLHR1KTtcbn1mdW5jdGlvbiBxdCh0KXtyZXR1cm4gbnQodCxWbixudSl9ZnVuY3Rpb24gR3QoKXt2YXIgdD15Lml0ZXJhdGVlfHxIbjtyZXR1cm4gdD10PT09SG4/cHQ6dCxhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBIdCh0LG4pe3ZhciByPXQuX19kYXRhX187cmV0dXJuIG9uKG4pP3JbdHlwZW9mIG49PVwic3RyaW5nXCI/XCJzdHJpbmdcIjpcImhhc2hcIl06ci5tYXB9ZnVuY3Rpb24gSnQodCl7Zm9yKHZhciBuPVduKHQpLHI9bi5sZW5ndGg7ci0tOyl7dmFyIGU9bltyXSx1PXRbZV07bltyXT1bZSx1LGZuKHUpXX1yZXR1cm4gbn1mdW5jdGlvbiBLdCh0LG4pe3ZhciByPWwodCxuKTtyZXR1cm4gbHQocik/cjpYbn1mdW5jdGlvbiBRdCh0KXt2YXIgbj15ZS5jYWxsKHQsRWUpLHI9dFtFZV07dHJ5e3RbRWVdPVhuO3ZhciBlPXRydWV9Y2F0Y2godCl7fXZhciB1PV9lLmNhbGwodCk7cmV0dXJuIGUmJihuP3RbRWVdPXI6ZGVsZXRlIHRbRWVdKSx1fWZ1bmN0aW9uIFh0KHQsbixyKXtcbm49enQobix0KTtmb3IodmFyIGU9LTEsdT1uLmxlbmd0aCxvPWZhbHNlOysrZTx1Oyl7dmFyIGk9X24obltlXSk7aWYoIShvPW51bGwhPXQmJnIodCxpKSkpYnJlYWs7dD10W2ldfXJldHVybiBvfHwrK2UhPXU/bzoodT1udWxsPT10PzA6dC5sZW5ndGgsISF1JiYkbih1KSYmcm4oaSx1KSYmKGl1KHQpfHxvdSh0KSkpfWZ1bmN0aW9uIFl0KHQpe3ZhciBuPXQubGVuZ3RoLHI9bmV3IHQuY29uc3RydWN0b3Iobik7cmV0dXJuIG4mJlwic3RyaW5nXCI9PXR5cGVvZiB0WzBdJiZ5ZS5jYWxsKHQsXCJpbmRleFwiKSYmKHIuaW5kZXg9dC5pbmRleCxyLmlucHV0PXQuaW5wdXQpLHJ9ZnVuY3Rpb24gWnQodCl7cmV0dXJuIHR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fGFuKHQpP3t9OlFlKEFlKHQpKX1mdW5jdGlvbiB0bih0LG4scil7dmFyIGU9dC5jb25zdHJ1Y3Rvcjtzd2l0Y2gobil7Y2FzZSAkcjpyZXR1cm4geHQodCk7Y2FzZSB5cjpjYXNlIGJyOnJldHVybiBuZXcgZSgrdCk7Y2FzZSBJcjpcbnJldHVybiBrdCh0LHIpO2Nhc2UgRnI6Y2FzZSBUcjpjYXNlIE1yOmNhc2UgVXI6Y2FzZSBCcjpjYXNlIENyOmNhc2UgRHI6Y2FzZSBOcjpjYXNlIFJyOnJldHVybiBQdCh0LHIpO2Nhc2UganI6cmV0dXJuIG5ldyBlO2Nhc2Ugd3I6Y2FzZSBrcjpyZXR1cm4gbmV3IGUodCk7Y2FzZSBTcjpyZXR1cm4gRXQodCk7Y2FzZSB4cjpyZXR1cm4gbmV3IGU7Y2FzZSBFcjpyZXR1cm4gTHQodCl9fWZ1bmN0aW9uIG5uKHQpe3JldHVybiBpdSh0KXx8b3UodCl8fCEhKGtlJiZ0JiZ0W2tlXSl9ZnVuY3Rpb24gcm4odCxuKXt2YXIgcj10eXBlb2YgdDtyZXR1cm4gbj1udWxsPT1uP3NyOm4sISFuJiYoXCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIiE9ciYmUXIudGVzdCh0KSkmJnQ+LTEmJnQlMT09MCYmdDxufWZ1bmN0aW9uIGVuKHQsbixyKXtpZighSW4ocikpcmV0dXJuIGZhbHNlO3ZhciBlPXR5cGVvZiBuO3JldHVybiEhKFwibnVtYmVyXCI9PWU/eG4ocikmJnJuKG4sci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJm4gaW4gcikmJlNuKHJbbl0sdCk7XG59ZnVuY3Rpb24gdW4odCxuKXtpZihpdSh0KSlyZXR1cm4gZmFsc2U7dmFyIHI9dHlwZW9mIHQ7cmV0dXJuIShcIm51bWJlclwiIT1yJiZcInN5bWJvbFwiIT1yJiZcImJvb2xlYW5cIiE9ciYmbnVsbCE9dCYmIVVuKHQpKXx8KFZyLnRlc3QodCl8fCFXci50ZXN0KHQpfHxudWxsIT1uJiZ0IGluIE9iamVjdChuKSl9ZnVuY3Rpb24gb24odCl7dmFyIG49dHlwZW9mIHQ7cmV0dXJuXCJzdHJpbmdcIj09bnx8XCJudW1iZXJcIj09bnx8XCJzeW1ib2xcIj09bnx8XCJib29sZWFuXCI9PW4/XCJfX3Byb3RvX19cIiE9PXQ6bnVsbD09PXR9ZnVuY3Rpb24gY24odCl7cmV0dXJuISFiZSYmYmUgaW4gdH1mdW5jdGlvbiBhbih0KXt2YXIgbj10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KHR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJm4ucHJvdG90eXBlfHxoZSl9ZnVuY3Rpb24gZm4odCl7cmV0dXJuIHQ9PT10JiYhSW4odCl9ZnVuY3Rpb24gbG4odCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPXImJihyW3RdPT09biYmKG4hPT1Ybnx8dCBpbiBPYmplY3QocikpKTtcbn19ZnVuY3Rpb24gc24odCl7dmFyIG49T24odCxmdW5jdGlvbih0KXtyZXR1cm4gci5zaXplPT09cnImJnIuY2xlYXIoKSx0fSkscj1uLmNhY2hlO3JldHVybiBufWZ1bmN0aW9uIGhuKHQpe3ZhciBuPVtdO2lmKG51bGwhPXQpZm9yKHZhciByIGluIE9iamVjdCh0KSluLnB1c2gocik7cmV0dXJuIG59ZnVuY3Rpb24gcG4odCl7cmV0dXJuIF9lLmNhbGwodCl9ZnVuY3Rpb24gdm4obixyLGUpe3JldHVybiByPUZlKHI9PT1Ybj9uLmxlbmd0aC0xOnIsMCksZnVuY3Rpb24oKXtmb3IodmFyIHU9YXJndW1lbnRzLG89LTEsaT1GZSh1Lmxlbmd0aC1yLDApLGM9QXJyYXkoaSk7KytvPGk7KWNbb109dVtyK29dO289LTE7Zm9yKHZhciBhPUFycmF5KHIrMSk7KytvPHI7KWFbb109dVtvXTtyZXR1cm4gYVtyXT1lKGMpLHQobix0aGlzLGEpfX1mdW5jdGlvbiB5bih0LG4pe3JldHVybiBuLmxlbmd0aDwyP3Q6dHQodCxPdChuLDAsLTEpKX1mdW5jdGlvbiBibih0KXt2YXIgbj0wLHI9MDtyZXR1cm4gZnVuY3Rpb24oKXtcbnZhciBlPVRlKCksdT1mci0oZS1yKTtpZihyPWUsdT4wKXtpZigrK24+PWFyKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSBuPTA7cmV0dXJuIHQuYXBwbHkoWG4sYXJndW1lbnRzKX19ZnVuY3Rpb24gX24odCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCJ8fFVuKHQpKXJldHVybiB0O3ZhciBuPXQrXCJcIjtyZXR1cm5cIjBcIj09biYmMS90PT0tbHI/XCItMFwiOm59ZnVuY3Rpb24gZ24odCl7aWYobnVsbCE9dCl7dHJ5e3JldHVybiB2ZS5jYWxsKHQpfWNhdGNoKHQpe310cnl7cmV0dXJuIHQrXCJcIn1jYXRjaCh0KXt9fXJldHVyblwiXCJ9ZnVuY3Rpb24gZG4odCl7cmV0dXJuKG51bGw9PXQ/MDp0Lmxlbmd0aCk/WSh0LDEpOltdfWZ1bmN0aW9uIGpuKHQpe3ZhciBuPW51bGw9PXQ/MDp0Lmxlbmd0aDtyZXR1cm4gbj90W24tMV06WG59ZnVuY3Rpb24gd24odCxuKXtyZXR1cm4oaXUodCk/cjpYKSh0LG1uKEd0KG4sMykpKX1mdW5jdGlvbiBPbih0LG4pe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fG51bGwhPW4mJnR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcih0cik7XG52YXIgcj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cyx1PW4/bi5hcHBseSh0aGlzLGUpOmVbMF0sbz1yLmNhY2hlO2lmKG8uaGFzKHUpKXJldHVybiBvLmdldCh1KTt2YXIgaT10LmFwcGx5KHRoaXMsZSk7cmV0dXJuIHIuY2FjaGU9by5zZXQodSxpKXx8byxpfTtyZXR1cm4gci5jYWNoZT1uZXcoT24uQ2FjaGV8fGspLHJ9ZnVuY3Rpb24gbW4odCl7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yKHRyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHM7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIXQuY2FsbCh0aGlzKTtjYXNlIDE6cmV0dXJuIXQuY2FsbCh0aGlzLG5bMF0pO2Nhc2UgMjpyZXR1cm4hdC5jYWxsKHRoaXMsblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIXQuY2FsbCh0aGlzLG5bMF0sblsxXSxuWzJdKX1yZXR1cm4hdC5hcHBseSh0aGlzLG4pfX1mdW5jdGlvbiBBbih0KXtyZXR1cm4gUSh0LGVyfG9yKX1mdW5jdGlvbiB6bih0LG4pe1xucmV0dXJuIG49dHlwZW9mIG49PVwiZnVuY3Rpb25cIj9uOlhuLFEodCxlcnxvcixuKX1mdW5jdGlvbiBTbih0LG4pe3JldHVybiB0PT09bnx8dCE9PXQmJm4hPT1ufWZ1bmN0aW9uIHhuKHQpe3JldHVybiBudWxsIT10JiYkbih0Lmxlbmd0aCkmJiFQbih0KX1mdW5jdGlvbiBrbih0KXtyZXR1cm4gRm4odCkmJnhuKHQpfWZ1bmN0aW9uIEVuKHQpe2lmKG51bGw9PXQpcmV0dXJuIHRydWU7aWYoeG4odCkmJihpdSh0KXx8dHlwZW9mIHQ9PVwic3RyaW5nXCJ8fHR5cGVvZiB0LnNwbGljZT09XCJmdW5jdGlvblwifHxjdSh0KXx8bHUodCl8fG91KHQpKSlyZXR1cm4hdC5sZW5ndGg7dmFyIG49cnUodCk7aWYobj09anJ8fG49PXhyKXJldHVybiF0LnNpemU7aWYoYW4odCkpcmV0dXJuIXZ0KHQpLmxlbmd0aDtmb3IodmFyIHIgaW4gdClpZih5ZS5jYWxsKHQscikpcmV0dXJuIGZhbHNlO3JldHVybiB0cnVlfWZ1bmN0aW9uIExuKHQsbil7cmV0dXJuIGl0KHQsbil9ZnVuY3Rpb24gUG4odCl7aWYoIUluKHQpKXJldHVybiBmYWxzZTtcbnZhciBuPXJ0KHQpO3JldHVybiBuPT1ncnx8bj09ZHJ8fG49PXZyfHxuPT16cn1mdW5jdGlvbiAkbih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJnQ+LTEmJnQlMT09MCYmdDw9c3J9ZnVuY3Rpb24gSW4odCl7dmFyIG49dHlwZW9mIHQ7cmV0dXJuIG51bGwhPXQmJihcIm9iamVjdFwiPT1ufHxcImZ1bmN0aW9uXCI9PW4pfWZ1bmN0aW9uIEZuKHQpe3JldHVybiBudWxsIT10JiZ0eXBlb2YgdD09XCJvYmplY3RcIn1mdW5jdGlvbiBUbih0KXtyZXR1cm4gbnVsbD09PXR9ZnVuY3Rpb24gTW4odCl7aWYoIUZuKHQpfHxydCh0KSE9bXIpcmV0dXJuIGZhbHNlO3ZhciBuPUFlKHQpO2lmKG51bGw9PT1uKXJldHVybiB0cnVlO3ZhciByPXllLmNhbGwobixcImNvbnN0cnVjdG9yXCIpJiZuLmNvbnN0cnVjdG9yO3JldHVybiB0eXBlb2Ygcj09XCJmdW5jdGlvblwiJiZyIGluc3RhbmNlb2YgciYmdmUuY2FsbChyKT09Z2V9ZnVuY3Rpb24gVW4odCl7cmV0dXJuIHR5cGVvZiB0PT1cInN5bWJvbFwifHxGbih0KSYmcnQodCk9PUVyO1xufWZ1bmN0aW9uIEJuKHQpe3JldHVybiBJdCh0LFZuKHQpKX1mdW5jdGlvbiBDbih0KXtyZXR1cm4gbnVsbD09dD9cIlwiOm10KHQpfWZ1bmN0aW9uIERuKHQsbixyKXt2YXIgZT1udWxsPT10P1huOnR0KHQsbik7cmV0dXJuIGU9PT1Ybj9yOmV9ZnVuY3Rpb24gTm4odCxuKXtyZXR1cm4gbnVsbCE9dCYmWHQodCxuLGV0KX1mdW5jdGlvbiBSbih0LG4pe3JldHVybiBudWxsIT10JiZYdCh0LG4sdXQpfWZ1bmN0aW9uIFduKHQpe3JldHVybiB4bih0KT9XKHQpOnZ0KHQpfWZ1bmN0aW9uIFZuKHQpe3JldHVybiB4bih0KT9XKHQsdHJ1ZSk6eXQodCl9ZnVuY3Rpb24gcW4odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fWZ1bmN0aW9uIEduKHQpe3JldHVybiB0fWZ1bmN0aW9uIEhuKHQpe3JldHVybiBwdCh0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6USh0LGVyKSl9ZnVuY3Rpb24gSm4odCl7cmV0dXJuIHVuKHQpP2koX24odCkpOmp0KHQpfWZ1bmN0aW9uIEtuKCl7cmV0dXJuW119ZnVuY3Rpb24gUW4oKXtcbnJldHVybiBmYWxzZX12YXIgWG4sWW49XCI0LjE3LjVcIixabj0yMDAsdHI9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsbnI9XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIscnI9NTAwLGVyPTEsdXI9Mixvcj00LGlyPTEsY3I9Mixhcj04MDAsZnI9MTYsbHI9MS8wLHNyPTkwMDcxOTkyNTQ3NDA5OTEsaHI9XCJbb2JqZWN0IEFyZ3VtZW50c11cIixwcj1cIltvYmplY3QgQXJyYXldXCIsdnI9XCJbb2JqZWN0IEFzeW5jRnVuY3Rpb25dXCIseXI9XCJbb2JqZWN0IEJvb2xlYW5dXCIsYnI9XCJbb2JqZWN0IERhdGVdXCIsX3I9XCJbb2JqZWN0IEVycm9yXVwiLGdyPVwiW29iamVjdCBGdW5jdGlvbl1cIixkcj1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsanI9XCJbb2JqZWN0IE1hcF1cIix3cj1cIltvYmplY3QgTnVtYmVyXVwiLE9yPVwiW29iamVjdCBOdWxsXVwiLG1yPVwiW29iamVjdCBPYmplY3RdXCIsQXI9XCJbb2JqZWN0IFByb21pc2VdXCIsenI9XCJbb2JqZWN0IFByb3h5XVwiLFNyPVwiW29iamVjdCBSZWdFeHBdXCIseHI9XCJbb2JqZWN0IFNldF1cIixrcj1cIltvYmplY3QgU3RyaW5nXVwiLEVyPVwiW29iamVjdCBTeW1ib2xdXCIsTHI9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixQcj1cIltvYmplY3QgV2Vha01hcF1cIiwkcj1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsSXI9XCJbb2JqZWN0IERhdGFWaWV3XVwiLEZyPVwiW29iamVjdCBGbG9hdDMyQXJyYXldXCIsVHI9XCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIixNcj1cIltvYmplY3QgSW50OEFycmF5XVwiLFVyPVwiW29iamVjdCBJbnQxNkFycmF5XVwiLEJyPVwiW29iamVjdCBJbnQzMkFycmF5XVwiLENyPVwiW29iamVjdCBVaW50OEFycmF5XVwiLERyPVwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIixOcj1cIltvYmplY3QgVWludDE2QXJyYXldXCIsUnI9XCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLFdyPS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sVnI9L15cXHcqJC8scXI9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLEdyPS9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxIcj0vXFxcXChcXFxcKT8vZyxKcj0vXFx3KiQvLEtyPS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sUXI9L14oPzowfFsxLTldXFxkKikkLyxYcj17fTtcblhyW0ZyXT1YcltUcl09WHJbTXJdPVhyW1VyXT1YcltCcl09WHJbQ3JdPVhyW0RyXT1YcltOcl09WHJbUnJdPXRydWUsWHJbaHJdPVhyW3ByXT1Yclskcl09WHJbeXJdPVhyW0lyXT1Yclticl09WHJbX3JdPVhyW2dyXT1Ycltqcl09WHJbd3JdPVhyW21yXT1YcltTcl09WHJbeHJdPVhyW2tyXT1YcltQcl09ZmFsc2U7dmFyIFlyPXt9O1lyW2hyXT1Zcltwcl09WXJbJHJdPVlyW0lyXT1Zclt5cl09WXJbYnJdPVlyW0ZyXT1ZcltUcl09WXJbTXJdPVlyW1VyXT1ZcltCcl09WXJbanJdPVlyW3dyXT1Zclttcl09WXJbU3JdPVlyW3hyXT1Zcltrcl09WXJbRXJdPVlyW0NyXT1ZcltEcl09WXJbTnJdPVlyW1JyXT10cnVlLFlyW19yXT1Zcltncl09WXJbUHJdPWZhbHNlO3ZhciBacj10eXBlb2YgZ2xvYmFsPT1cIm9iamVjdFwiJiZnbG9iYWwmJmdsb2JhbC5PYmplY3Q9PT1PYmplY3QmJmdsb2JhbCx0ZT10eXBlb2Ygc2VsZj09XCJvYmplY3RcIiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsbmU9WnJ8fHRlfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkscmU9dHlwZW9mIGV4cG9ydHM9PVwib2JqZWN0XCImJmV4cG9ydHMmJiFleHBvcnRzLm5vZGVUeXBlJiZleHBvcnRzLGVlPXJlJiZ0eXBlb2YgbW9kdWxlPT1cIm9iamVjdFwiJiZtb2R1bGUmJiFtb2R1bGUubm9kZVR5cGUmJm1vZHVsZSx1ZT1lZSYmZWUuZXhwb3J0cz09PXJlLG9lPXVlJiZaci5wcm9jZXNzLGllPWZ1bmN0aW9uKCl7XG50cnl7cmV0dXJuIG9lJiZvZS5iaW5kaW5nJiZvZS5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaCh0KXt9fSgpLGNlPWllJiZpZS5pc01hcCxhZT1pZSYmaWUuaXNTZXQsZmU9aWUmJmllLmlzVHlwZWRBcnJheSxsZT1BcnJheS5wcm90b3R5cGUsc2U9RnVuY3Rpb24ucHJvdG90eXBlLGhlPU9iamVjdC5wcm90b3R5cGUscGU9bmVbXCJfX2NvcmUtanNfc2hhcmVkX19cIl0sdmU9c2UudG9TdHJpbmcseWU9aGUuaGFzT3duUHJvcGVydHksYmU9ZnVuY3Rpb24oKXt2YXIgdD0vW14uXSskLy5leGVjKHBlJiZwZS5rZXlzJiZwZS5rZXlzLklFX1BST1RPfHxcIlwiKTtyZXR1cm4gdD9cIlN5bWJvbChzcmMpXzEuXCIrdDpcIlwifSgpLF9lPWhlLnRvU3RyaW5nLGdlPXZlLmNhbGwoT2JqZWN0KSxkZT1SZWdFeHAoXCJeXCIrdmUuY2FsbCh5ZSkucmVwbGFjZShHcixcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLGplPXVlP25lLkJ1ZmZlcjpYbix3ZT1uZS5TeW1ib2wsT2U9bmUuVWludDhBcnJheSxtZT1qZT9qZS5hbGxvY1Vuc2FmZTpYbixBZT1oKE9iamVjdC5nZXRQcm90b3R5cGVPZixPYmplY3QpLHplPU9iamVjdC5jcmVhdGUsU2U9aGUucHJvcGVydHlJc0VudW1lcmFibGUseGU9bGUuc3BsaWNlLGtlPXdlP3dlLmlzQ29uY2F0U3ByZWFkYWJsZTpYbixFZT13ZT93ZS50b1N0cmluZ1RhZzpYbixMZT1mdW5jdGlvbigpe1xudHJ5e3ZhciB0PUt0KE9iamVjdCxcImRlZmluZVByb3BlcnR5XCIpO3JldHVybiB0KHt9LFwiXCIse30pLHR9Y2F0Y2godCl7fX0oKSxQZT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLCRlPWplP2plLmlzQnVmZmVyOlhuLEllPWgoT2JqZWN0LmtleXMsT2JqZWN0KSxGZT1NYXRoLm1heCxUZT1EYXRlLm5vdyxNZT1LdChuZSxcIkRhdGFWaWV3XCIpLFVlPUt0KG5lLFwiTWFwXCIpLEJlPUt0KG5lLFwiUHJvbWlzZVwiKSxDZT1LdChuZSxcIlNldFwiKSxEZT1LdChuZSxcIldlYWtNYXBcIiksTmU9S3QoT2JqZWN0LFwiY3JlYXRlXCIpLFJlPWduKE1lKSxXZT1nbihVZSksVmU9Z24oQmUpLHFlPWduKENlKSxHZT1nbihEZSksSGU9d2U/d2UucHJvdG90eXBlOlhuLEplPUhlP0hlLnZhbHVlT2Y6WG4sS2U9SGU/SGUudG9TdHJpbmc6WG4sUWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiBmdW5jdGlvbihuKXtpZighSW4obikpcmV0dXJue307aWYoemUpcmV0dXJuIHplKG4pO3QucHJvdG90eXBlPW47XG52YXIgcj1uZXcgdDtyZXR1cm4gdC5wcm90b3R5cGU9WG4scn19KCk7Yi5wcm90b3R5cGUuY2xlYXI9XyxiLnByb3RvdHlwZS5kZWxldGU9ZyxiLnByb3RvdHlwZS5nZXQ9ZCxiLnByb3RvdHlwZS5oYXM9aixiLnByb3RvdHlwZS5zZXQ9dyxPLnByb3RvdHlwZS5jbGVhcj1tLE8ucHJvdG90eXBlLmRlbGV0ZT1BLE8ucHJvdG90eXBlLmdldD16LE8ucHJvdG90eXBlLmhhcz1TLE8ucHJvdG90eXBlLnNldD14LGsucHJvdG90eXBlLmNsZWFyPUUsay5wcm90b3R5cGUuZGVsZXRlPUwsay5wcm90b3R5cGUuZ2V0PVAsay5wcm90b3R5cGUuaGFzPSQsay5wcm90b3R5cGUuc2V0PUksRi5wcm90b3R5cGUuYWRkPUYucHJvdG90eXBlLnB1c2g9VCxGLnByb3RvdHlwZS5oYXM9TSxVLnByb3RvdHlwZS5jbGVhcj1CLFUucHJvdG90eXBlLmRlbGV0ZT1DLFUucHJvdG90eXBlLmdldD1ELFUucHJvdG90eXBlLmhhcz1OLFUucHJvdG90eXBlLnNldD1SO3ZhciBYZT1VdChaKSxZZT1CdCgpLFplPUxlP2Z1bmN0aW9uKHQsbil7XG5yZXR1cm4gTGUodCxcInRvU3RyaW5nXCIse2NvbmZpZ3VyYWJsZTp0cnVlLGVudW1lcmFibGU6ZmFsc2UsdmFsdWU6cW4obiksd3JpdGFibGU6dHJ1ZX0pfTpHbix0dT1QZT9mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXToodD1PYmplY3QodCkscihQZSh0KSxmdW5jdGlvbihuKXtyZXR1cm4gU2UuY2FsbCh0LG4pfSkpfTpLbixudT1QZT9mdW5jdGlvbih0KXtmb3IodmFyIG49W107dDspdShuLHR1KHQpKSx0PUFlKHQpO3JldHVybiBufTpLbixydT1ydDsoTWUmJnJ1KG5ldyBNZShuZXcgQXJyYXlCdWZmZXIoMSkpKSE9SXJ8fFVlJiZydShuZXcgVWUpIT1qcnx8QmUmJnJ1KEJlLnJlc29sdmUoKSkhPUFyfHxDZSYmcnUobmV3IENlKSE9eHJ8fERlJiZydShuZXcgRGUpIT1QcikmJihydT1mdW5jdGlvbih0KXt2YXIgbj1ydCh0KSxyPW49PW1yP3QuY29uc3RydWN0b3I6WG4sZT1yP2duKHIpOlwiXCI7aWYoZSlzd2l0Y2goZSl7Y2FzZSBSZTpyZXR1cm4gSXI7Y2FzZSBXZTpyZXR1cm4ganI7Y2FzZSBWZTpcbnJldHVybiBBcjtjYXNlIHFlOnJldHVybiB4cjtjYXNlIEdlOnJldHVybiBQcn1yZXR1cm4gbn0pO3ZhciBldT1ibihaZSksdXU9c24oZnVuY3Rpb24odCl7dmFyIG49W107cmV0dXJuIDQ2PT09dC5jaGFyQ29kZUF0KDApJiZuLnB1c2goXCJcIiksdC5yZXBsYWNlKHFyLGZ1bmN0aW9uKHQscixlLHUpe24ucHVzaChlP3UucmVwbGFjZShIcixcIiQxXCIpOnJ8fHQpfSksbn0pO09uLkNhY2hlPWs7dmFyIG91PW90KGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/b3Q6ZnVuY3Rpb24odCl7cmV0dXJuIEZuKHQpJiZ5ZS5jYWxsKHQsXCJjYWxsZWVcIikmJiFTZS5jYWxsKHQsXCJjYWxsZWVcIil9LGl1PUFycmF5LmlzQXJyYXksY3U9JGV8fFFuLGF1PWNlP2EoY2UpOmF0LGZ1PWFlP2EoYWUpOnN0LGx1PWZlP2EoZmUpOmh0LHN1PU10KGZ1bmN0aW9uKHQsbixyKXtndCh0LG4scil9KSxodT1NdChmdW5jdGlvbih0LG4scixlKXtndCh0LG4scixlKX0pLHB1PVd0KGZ1bmN0aW9uKHQsbil7dmFyIHI9e307XG5pZihudWxsPT10KXJldHVybiByO3ZhciB1PWZhbHNlO249ZShuLGZ1bmN0aW9uKG4pe3JldHVybiBuPXp0KG4sdCksdXx8KHU9bi5sZW5ndGg+MSksbn0pLEl0KHQscXQodCksciksdSYmKHI9UShyLGVyfHVyfG9yLEN0KSk7Zm9yKHZhciBvPW4ubGVuZ3RoO28tLTspQXQocixuW29dKTtyZXR1cm4gcn0pO3kuY29uc3RhbnQ9cW4seS5mbGF0dGVuPWRuLHkuaXRlcmF0ZWU9SG4seS5rZXlzPVduLHkua2V5c0luPVZuLHkubWVtb2l6ZT1Pbix5Lm1lcmdlPXN1LHkubWVyZ2VXaXRoPWh1LHkubmVnYXRlPW1uLHkub21pdD1wdSx5LnByb3BlcnR5PUpuLHkucmVqZWN0PXduLHkudG9QbGFpbk9iamVjdD1Cbix5LmNsb25lRGVlcD1Bbix5LmNsb25lRGVlcFdpdGg9em4seS5lcT1Tbix5LmdldD1Ebix5Lmhhcz1Obix5Lmhhc0luPVJuLHkuaWRlbnRpdHk9R24seS5pc0FyZ3VtZW50cz1vdSx5LmlzQXJyYXk9aXUseS5pc0FycmF5TGlrZT14bix5LmlzQXJyYXlMaWtlT2JqZWN0PWtuLHkuaXNCdWZmZXI9Y3UsXG55LmlzRW1wdHk9RW4seS5pc0VxdWFsPUxuLHkuaXNGdW5jdGlvbj1Qbix5LmlzTGVuZ3RoPSRuLHkuaXNNYXA9YXUseS5pc051bGw9VG4seS5pc09iamVjdD1Jbix5LmlzT2JqZWN0TGlrZT1Gbix5LmlzUGxhaW5PYmplY3Q9TW4seS5pc1NldD1mdSx5LmlzU3ltYm9sPVVuLHkuaXNUeXBlZEFycmF5PWx1LHkubGFzdD1qbix5LnN0dWJBcnJheT1Lbix5LnN0dWJGYWxzZT1Rbix5LnRvU3RyaW5nPUNuLHkuVkVSU0lPTj1Zbix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBkZWZpbmUuYW1kPT1cIm9iamVjdFwiJiZkZWZpbmUuYW1kPyhuZS5fPXksIGRlZmluZShmdW5jdGlvbigpe3JldHVybiB5fSkpOmVlPygoZWUuZXhwb3J0cz15KS5fPXkscmUuXz15KTpuZS5fPXl9KS5jYWxsKHRoaXMpOyIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuY29uc3QgQ09OU1RBTlRTID0ge1xuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gSXRlbVR5cGVcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBFbnVtZXJhdGlvbiBvZiBkYXRhIGxheWVyIGl0ZW0gdHlwZXMuXG4gICAqXG4gICAqIEBlbnVtIHtJdGVtVHlwZX1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBpdGVtVHlwZToge1xuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBkYXRhICovXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBmdW5jdGlvbiAqL1xuICAgIEZDVE46ICdmY3RuJyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgZXZlbnQgKi9cbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgbGlzdGVuZXIgb24gKi9cbiAgICBMSVNURU5FUl9PTjogJ2xpc3RlbmVyT24nLFxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBsaXN0ZW5lciBvZmYgKi9cbiAgICBMSVNURU5FUl9PRkY6ICdsaXN0ZW5lck9mZidcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gRGF0YUxheWVyRXZlbnRcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBFbnVtZXJhdGlvbiBvZiBkYXRhIGxheWVyIGV2ZW50cy5cbiAgICpcbiAgICogQGVudW0ge0RhdGFMYXllckV2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGRhdGFMYXllckV2ZW50OiB7XG4gICAgLyoqIFJlcHJlc2VudHMgYW4gZXZlbnQgdHJpZ2dlcmVkIGZvciBhbnkgY2hhbmdlIGluIHRoZSBkYXRhIGxheWVyIHN0YXRlICovXG4gICAgQ0hBTkdFOiAnYWRvYmVEYXRhTGF5ZXI6Y2hhbmdlJyxcbiAgICAvKiogUmVwcmVzZW50cyBhbiBldmVudCB0cmlnZ2VyZWQgZm9yIGFueSBldmVudCBwdXNoIHRvIHRoZSBkYXRhIGxheWVyICovXG4gICAgRVZFTlQ6ICdhZG9iZURhdGFMYXllcjpldmVudCdcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGVkZWYge1N0cmluZ30gTGlzdGVuZXJTY29wZVxuICAgKiovXG5cbiAgLyoqXG4gICAqIEVudW1lcmF0aW9uIG9mIGxpc3RlbmVyIHNjb3Blcy5cbiAgICpcbiAgICogQGVudW0ge0xpc3RlbmVyU2NvcGV9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbGlzdGVuZXJTY29wZToge1xuICAgIC8qKiBQYXN0IGV2ZW50cyBvbmx5ICovXG4gICAgUEFTVDogJ3Bhc3QnLFxuICAgIC8qKiBGdXR1cmUgZXZlbnRzIG9ubHkgKi9cbiAgICBGVVRVUkU6ICdmdXR1cmUnLFxuICAgIC8qKiBBbGwgZXZlbnRzLCBwYXN0IGFuZCBmdXR1cmUgKi9cbiAgICBBTEw6ICdhbGwnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ09OU1RBTlRTO1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBjbG9uZURlZXAgPSBfLmNsb25lRGVlcDtcbmNvbnN0IGdldCA9IF8uZ2V0O1xuXG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vdmVyc2lvbi5qc29uJykudmVyc2lvbjtcbmNvbnN0IEl0ZW0gPSByZXF1aXJlKCcuL2l0ZW0nKTtcbmNvbnN0IExpc3RlbmVyID0gcmVxdWlyZSgnLi9saXN0ZW5lcicpO1xuY29uc3QgTGlzdGVuZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi9saXN0ZW5lck1hbmFnZXInKTtcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBjdXN0b21NZXJnZSA9IHJlcXVpcmUoJy4vdXRpbHMvY3VzdG9tTWVyZ2UnKTtcblxuLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQGNsYXNzIE1hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgRGF0YSBMYXllciBtYW5hZ2VyIHRoYXQgYXVnbWVudHMgdGhlIHBhc3NlZCBkYXRhIGxheWVyIGFycmF5IGFuZCBoYW5kbGVzIGV2ZW50aW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgRGF0YSBMYXllciBtYW5hZ2VyIGNvbmZpZ3VyYXRpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IF9jb25maWcgPSBjb25maWc7XG4gIGxldCBfZGF0YUxheWVyID0gW107XG4gIGxldCBfc3RhdGUgPSB7fTtcbiAgbGV0IF9wcmV2aW91c1N0YXRlQ29weSA9IHt9O1xuICBsZXQgX2xpc3RlbmVyTWFuYWdlcjtcblxuICBjb25zdCBEYXRhTGF5ZXJNYW5hZ2VyID0ge1xuICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfc3RhdGU7XG4gICAgfSxcbiAgICBnZXREYXRhTGF5ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kYXRhTGF5ZXI7XG4gICAgfSxcbiAgICBnZXRQcmV2aW91c1N0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfcHJldmlvdXNTdGF0ZUNvcHk7XG4gICAgfVxuICB9O1xuXG4gIF9pbml0aWFsaXplKCk7XG4gIF9hdWdtZW50KCk7XG4gIF9wcm9jZXNzSXRlbXMoKTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGRhdGEgbGF5ZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2NvbmZpZy5kYXRhTGF5ZXIpKSB7XG4gICAgICBfY29uZmlnLmRhdGFMYXllciA9IFtdO1xuICAgIH1cblxuICAgIF9kYXRhTGF5ZXIgPSBfY29uZmlnLmRhdGFMYXllcjtcbiAgICBfZGF0YUxheWVyLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIF9zdGF0ZSA9IHt9O1xuICAgIF9wcmV2aW91c1N0YXRlQ29weSA9IHt9O1xuICAgIF9saXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXIoRGF0YUxheWVyTWFuYWdlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXRlIHdpdGggdGhlIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF91cGRhdGVTdGF0ZShpdGVtKSB7XG4gICAgX3ByZXZpb3VzU3RhdGVDb3B5ID0gY2xvbmVEZWVwKF9zdGF0ZSk7XG4gICAgX3N0YXRlID0gY3VzdG9tTWVyZ2UoX3N0YXRlLCBpdGVtLmRhdGEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdWdtZW50cyB0aGUgZGF0YSBsYXllciBBcnJheSBPYmplY3QsIG92ZXJyaWRpbmc6IHB1c2goKSBhbmQgYWRkaW5nIGdldFN0YXRlKCksIGFkZEV2ZW50TGlzdGVuZXIgYW5kIHJlbW92ZUV2ZW50TGlzdGVuZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfYXVnbWVudCgpIHtcbiAgICAvKipcbiAgICAgKiBQdXNoZXMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLkl0ZW1Db25maWd9IHZhcl9hcmdzIFRoZSBpdGVtcyB0byBhZGQgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIGxlbmd0aCBvZiB0aGUgZGF0YSBsYXllciBmb2xsb3dpbmcgcHVzaC5cbiAgICAgKi9cbiAgICBfZGF0YUxheWVyLnB1c2ggPSBmdW5jdGlvbih2YXJfYXJncykgeyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZSAqL1xuICAgICAgY29uc3QgcHVzaEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcbiAgICAgIGNvbnN0IGZpbHRlcmVkQXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gICAgICBPYmplY3Qua2V5cyhwdXNoQXJndW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBjb25zdCBpdGVtQ29uZmlnID0gcHVzaEFyZ3VtZW50c1trZXldO1xuICAgICAgICBjb25zdCBpdGVtID0gSXRlbShpdGVtQ29uZmlnKTtcblxuICAgICAgICBpZiAoIWl0ZW0udmFsaWQpIHtcbiAgICAgICAgICBkZWxldGUgZmlsdGVyZWRBcmd1bWVudHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkRBVEE6XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuRVZFTlQ6IHtcbiAgICAgICAgICAgIF9wcm9jZXNzSXRlbShpdGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5GQ1ROOiB7XG4gICAgICAgICAgICBkZWxldGUgZmlsdGVyZWRBcmd1bWVudHNba2V5XTtcbiAgICAgICAgICAgIF9wcm9jZXNzSXRlbShpdGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PTjpcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PRkY6IHtcbiAgICAgICAgICAgIGRlbGV0ZSBmaWx0ZXJlZEFyZ3VtZW50c1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWx0ZXJlZEFyZ3VtZW50c1swXSkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcywgZmlsdGVyZWRBcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZGVlcCBjb3B5IG9mIHRoZSBkYXRhIGxheWVyIHN0YXRlIG9yIG9mIHRoZSBvYmplY3QgZGVmaW5lZCBieSB0aGUgcGF0aC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gICAgICogQHJldHVybnMgeyp9IFJldHVybnMgYSBkZWVwIGNvcHkgb2YgdGhlIHJlc29sdmVkIHZhbHVlIGlmIGEgcGF0aCBpcyBwYXNzZWQsIGEgZGVlcCBjb3B5IG9mIHRoZSBkYXRhIGxheWVyIHN0YXRlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBfZGF0YUxheWVyLmdldFN0YXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGdldChjbG9uZURlZXAoX3N0YXRlKSwgcGF0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmVEZWVwKF9zdGF0ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrIGV2ZW50TGlzdGVuZXJDYWxsYmFjayBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBvY2N1cnMuXG4gICAgICogQHRoaXMge0RhdGFMYXllcn1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIgdGhhdCB0cmlnZ2VyZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbYmVmb3JlU3RhdGVdIFRoZSBzdGF0ZSBiZWZvcmUgdGhlIGNoYW5nZSBjYXVzZWQgYnkgdGhlIGV2ZW50LiBBdmFpbGFibGUgb25seSB3aGVuIHRoZSBldmVudFxuICAgICAqIG9iamVjdCBoYXMgZGF0YSB0aGF0IG1vZGlmeSB0aGUgc3RhdGUuIElmIGEgcGF0aCBmaWx0ZXIgb3B0aW9uIGhhcyBiZWVuIHByb3ZpZGVkIHdoZW4gcmVnaXN0ZXJpbmcgdGhlIGV2ZW50LFxuICAgICAqIHRoZSBvYmplY3Qgd2lsbCBvbmx5IGNvbnRhaW4gdGhlIGRhdGEgYXQgdGhlIGRlZmluZWQgcGF0aC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2FmdGVyU3RhdGVdIFRoZSBzdGF0ZSBhZnRlciB0aGUgY2hhbmdlIGNhdXNlZCBieSB0aGUgZXZlbnQuIEF2YWlsYWJsZSBvbmx5IHdoZW4gdGhlIGV2ZW50XG4gICAgICogb2JqZWN0IGhhcyBkYXRhIHRoYXQgbW9kaWZ5IHRoZSBzdGF0ZS4gSWYgYSBwYXRoIGZpbHRlciBvcHRpb24gaGFzIGJlZW4gcHJvdmlkZWQgd2hlbiByZWdpc3RlcmluZyB0aGUgZXZlbnQsXG4gICAgICogdGhlIG9iamVjdCB3aWxsIG9ubHkgY29udGFpbiB0aGUgZGF0YSBhdCB0aGUgZGVmaW5lZCBwYXRoLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIHNwZWNpZmllZCBldmVudCBpcyB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBBIGNhc2Utc2Vuc2l0aXZlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV2ZW50IHR5cGUgdG8gbGlzdGVuIGZvci5cbiAgICAgKiBAcGFyYW0ge2V2ZW50TGlzdGVuZXJDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBldmVudCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgb2NjdXJzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uYWwgY2hhcmFjdGVyaXN0aWNzIG9mIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucGF0aF0gVGhlIHBhdGggaW4gdGhlIHN0YXRlIG9iamVjdCB0byBmaWx0ZXIgdGhlIGxpc3RlbmluZyB0by5cbiAgICAgKiBAcGFyYW0geygncGFzdCd8J2Z1dHVyZSd8J2FsbCcpfSBbb3B0aW9ucy5zY29wZV0gVGhlIHRpbWluZyB0byBmaWx0ZXIgdGhlIGxpc3RlbmluZyB0bzpcbiAgICAgKiAgICAgIC0ge1N0cmluZ30gcGFzdCBUaGUgbGlzdGVuZXIgaXMgdHJpZ2dlcmVkIGZvciBwYXN0IGV2ZW50cyBvbmx5LlxuICAgICAqICAgICAgLSB7U3RyaW5nfSBmdXR1cmUgVGhlIGxpc3RlbmVyIGlzIHRyaWdnZXJlZCBmb3IgZnV0dXJlIGV2ZW50cyBvbmx5LlxuICAgICAqICAgICAgLSB7U3RyaW5nfSBhbGwgVGhlIGxpc3RlbmVyIGlzIHRyaWdnZXJlZCBmb3IgYm90aCBwYXN0IGFuZCBmdXR1cmUgZXZlbnRzIChkZWZhdWx0IHZhbHVlKS5cbiAgICAgKi9cbiAgICBfZGF0YUxheWVyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lckl0ZW0gPSBJdGVtKHtcbiAgICAgICAgb246IHR5cGUsXG4gICAgICAgIGhhbmRsZXI6IGNhbGxiYWNrLFxuICAgICAgICBzY29wZTogb3B0aW9ucyAmJiBvcHRpb25zLnNjb3BlLFxuICAgICAgICBwYXRoOiBvcHRpb25zICYmIG9wdGlvbnMucGF0aFxuICAgICAgfSk7XG5cbiAgICAgIF9wcm9jZXNzSXRlbShldmVudExpc3RlbmVySXRlbSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgcHJldmlvdXNseSByZWdpc3RlcmVkIHdpdGggYWRkRXZlbnRMaXN0ZW5lcigpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBjYXNlLXNlbnNpdGl2ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3IuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2xpc3RlbmVyXSBPcHRpb25hbCBmdW5jdGlvbiB0aGF0IGlzIHRvIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgX2RhdGFMYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJJdGVtID0gSXRlbSh7XG4gICAgICAgIG9mZjogdHlwZSxcbiAgICAgICAgaGFuZGxlcjogbGlzdGVuZXJcbiAgICAgIH0pO1xuXG4gICAgICBfcHJvY2Vzc0l0ZW0oZXZlbnRMaXN0ZW5lckl0ZW0pO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhbGwgaXRlbXMgdGhhdCBhbHJlYWR5IGV4aXN0IG9uIHRoZSBzdGFjay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9wcm9jZXNzSXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZGF0YUxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSXRlbShfZGF0YUxheWVyW2ldLCBpKTtcblxuICAgICAgX3Byb2Nlc3NJdGVtKGl0ZW0pO1xuXG4gICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXIgb3IgaW52YWxpZCBpdGVtIGZyb20gdGhlIGRhdGEgbGF5ZXIgYXJyYXlcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PTiB8fFxuICAgICAgICBpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PRkYgfHxcbiAgICAgICAgaXRlbS50eXBlID09PSBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTiB8fFxuICAgICAgICAhaXRlbS52YWxpZCkge1xuICAgICAgICBfZGF0YUxheWVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGFuIGl0ZW0gcHVzaGVkIHRvIHRoZSBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHByb2Nlc3MuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcHJvY2Vzc0l0ZW0oaXRlbSkge1xuICAgIGlmICghaXRlbS52YWxpZCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdUaGUgZm9sbG93aW5nIGl0ZW0gY2Fubm90IGJlIGhhbmRsZWQgYnkgdGhlIGRhdGEgbGF5ZXIgJyArXG4gICAgICAgICdiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgYSB2YWxpZCBmb3JtYXQ6ICcgK1xuICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtLmNvbmZpZyk7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGl0ZW1zIGJlZm9yZSB0aGUgcHJvdmlkZWQgb25lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxJdGVtPn0gVGhlIGl0ZW1zIGJlZm9yZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRCZWZvcmUoaXRlbSkge1xuICAgICAgaWYgKCEoX2RhdGFMYXllci5sZW5ndGggPT09IDAgfHwgaXRlbS5pbmRleCA+IF9kYXRhTGF5ZXIubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgcmV0dXJuIF9kYXRhTGF5ZXIuc2xpY2UoMCwgaXRlbS5pbmRleCkubWFwKGl0ZW1Db25maWcgPT4gSXRlbShpdGVtQ29uZmlnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZVByb2Nlc3NvcnMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF91cGRhdGVTdGF0ZShpdGVtKTtcbiAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXJzKGl0ZW0pO1xuICAgICAgfSxcbiAgICAgIGZjdG46IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jb25maWcuY2FsbChfZGF0YUxheWVyLCBfZGF0YUxheWVyKTtcbiAgICAgIH0sXG4gICAgICBldmVudDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgICAgX3VwZGF0ZVN0YXRlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudHJpZ2dlckxpc3RlbmVycyhpdGVtKTtcbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lck9uOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gTGlzdGVuZXIoaXRlbSk7XG4gICAgICAgIHN3aXRjaCAobGlzdGVuZXIuc2NvcGUpIHtcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLlBBU1Q6IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVnaXN0ZXJlZEl0ZW0gb2YgX2dldEJlZm9yZShpdGVtKSkge1xuICAgICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnRyaWdnZXJMaXN0ZW5lcihsaXN0ZW5lciwgcmVnaXN0ZXJlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLmxpc3RlbmVyU2NvcGUuRlVUVVJFOiB7XG4gICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnJlZ2lzdGVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkFMTDoge1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZCA9IF9saXN0ZW5lck1hbmFnZXIucmVnaXN0ZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZWdpc3RlcmVkSXRlbSBvZiBfZ2V0QmVmb3JlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXIobGlzdGVuZXIsIHJlZ2lzdGVyZWRJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyT2ZmOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudW5yZWdpc3RlcihMaXN0ZW5lcihpdGVtKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHR5cGVQcm9jZXNzb3JzW2l0ZW0udHlwZV0oaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIERhdGFMYXllck1hbmFnZXI7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IERhdGFMYXllck1hbmFnZXIgPSByZXF1aXJlKCcuL2RhdGFMYXllck1hbmFnZXInKTtcblxuLyoqXG4gKiBEYXRhIExheWVyLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERhdGFMYXllciA9IHtcbiAgTWFuYWdlcjogRGF0YUxheWVyTWFuYWdlclxufTtcblxuRGF0YUxheWVyLk1hbmFnZXIoe1xuICBkYXRhTGF5ZXI6IHdpbmRvdy5hZG9iZURhdGFMYXllclxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9IExpc3RlbmVyT25Db25maWdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBvbiBOYW1lIG9mIHRoZSBldmVudCB0byBiaW5kIHRvLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwYXRoXSBPYmplY3Qga2V5IGluIHRoZSBzdGF0ZSB0byBiaW5kIHRvLlxuICogQHByb3BlcnR5IHtMaXN0ZW5lclNjb3BlfSBbc2NvcGVdIFNjb3BlIG9mIHRoZSBsaXN0ZW5lci5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciB0byBleGVjdXRlIHdoZW4gdGhlIGJvdW5kIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBMaXN0ZW5lck9mZkNvbmZpZ1xuICogQHByb3BlcnR5IHtTdHJpbmd9IG9mZiBOYW1lIG9mIHRoZSBldmVudCB0byB1bmJpbmQuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3BhdGhdIE9iamVjdCBrZXkgaW4gdGhlIHN0YXRlIHRvIGJpbmQgdG8uXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyU2NvcGV9IFtzY29wZV0gU2NvcGUgb2YgdGhlIGxpc3RlbmVyLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW2hhbmRsZXJdIEhhbmRsZXIgZm9yIGEgcHJldmlvdXNseSBhdHRhY2hlZCBldmVudCB0byB1bmJpbmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEYXRhQ29uZmlnXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHVwZGF0ZWQgaW4gdGhlIHN0YXRlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRDb25maWdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBbZXZlbnRJbmZvXSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHBhc3MgdG8gdGhlIGV2ZW50IGhhbmRsZXIuXG4gKiBAcHJvcGVydHkge0RhdGFDb25maWcuZGF0YX0gW2RhdGFdIERhdGEgdG8gYmUgdXBkYXRlZCBpbiB0aGUgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RGF0YUNvbmZpZyB8IEV2ZW50Q29uZmlnIHwgTGlzdGVuZXJPbkNvbmZpZyB8IExpc3RlbmVyT2ZmQ29uZmlnfSBJdGVtQ29uZmlnXG4gKi9cblxuLyoqXG4gKiBUcmlnZ2VyZWQgd2hlbiB0aGVyZSBpcyBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUuXG4gKlxuICogQGV2ZW50IERhdGFMYXllckV2ZW50LkNIQU5HRVxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgcHVzaGVkIHRoYXQgY2F1c2VkIGEgY2hhbmdlIGluIHRoZSBkYXRhIGxheWVyIHN0YXRlLlxuICovXG5cbi8qKlxuICogVHJpZ2dlcmVkIHdoZW4gYW4gZXZlbnQgaXMgcHVzaGVkIHRvIHRoZSBkYXRhIGxheWVyLlxuICpcbiAqIEBldmVudCBEYXRhTGF5ZXJFdmVudC5FVkVOVFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGNvbW1pdHRlZCBldmVudC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudEluZm8gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBwYXNzZWQgd2l0aCB0aGUgY29tbWl0dGVkIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEgRGF0YSB0aGF0IHdhcyBwdXNoZWQgYWxvbmdzaWRlIHRoZSBldmVudC5cbiAqL1xuXG4vKipcbiAqIFRyaWdnZXJlZCB3aGVuIGFuIGFyYml0cmFyeSBldmVudCBpcyBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIuXG4gKlxuICogQGV2ZW50IDxjdXN0b20+XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgY29tbWl0dGVkIGV2ZW50LlxuICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50SW5mbyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHBhc3NlZCB3aXRoIHRoZSBjb21taXR0ZWQgZXZlbnQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRoYXQgd2FzIHB1c2hlZCBhbG9uZ3NpZGUgdGhlIGV2ZW50LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YUxheWVyO1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBpc1BsYWluT2JqZWN0ID0gXy5pc1BsYWluT2JqZWN0O1xuY29uc3QgaXNFbXB0eSA9IF8uaXNFbXB0eTtcbmNvbnN0IG9taXQgPSBfLm9taXQ7XG5cbmNvbnN0IGRhdGFNYXRjaGVzQ29udHJhaW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzJyk7XG5jb25zdCBJVEVNX0NPTlNUUkFJTlRTID0gcmVxdWlyZSgnLi9pdGVtQ29uc3RyYWludHMnKTtcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgaXRlbS5cbiAqXG4gKiBAcGFyYW0ge0l0ZW1Db25maWd9IGl0ZW1Db25maWcgVGhlIGRhdGEgbGF5ZXIgaXRlbSBjb25maWd1cmF0aW9uLlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpdGVtIGluZGV4IGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW1Db25maWcsIGluZGV4KSB7XG4gIGNvbnN0IF9jb25maWcgPSBpdGVtQ29uZmlnO1xuICBjb25zdCBfaW5kZXggPSBpbmRleDtcbiAgY29uc3QgX3R5cGUgPSBnZXRUeXBlKCk7XG4gIGNvbnN0IF9kYXRhID0gZ2V0RGF0YSgpO1xuICBjb25zdCBfdmFsaWQgPSAhIV90eXBlO1xuXG4gIGZ1bmN0aW9uIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKElURU1fQ09OU1RSQUlOVFMpLmZpbmQoa2V5ID0+IGRhdGFNYXRjaGVzQ29udHJhaW50cyhfY29uZmlnLCBJVEVNX0NPTlNUUkFJTlRTW2tleV0pKSB8fFxuICAgICAgKHR5cGVvZiBfY29uZmlnID09PSAnZnVuY3Rpb24nICYmIENPTlNUQU5UUy5pdGVtVHlwZS5GQ1ROKSB8fFxuICAgICAgKGlzUGxhaW5PYmplY3QoX2NvbmZpZykgJiYgQ09OU1RBTlRTLml0ZW1UeXBlLkRBVEEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gb21pdChfY29uZmlnLCBPYmplY3Qua2V5cyhJVEVNX0NPTlNUUkFJTlRTLmV2ZW50KSk7XG4gICAgaWYgKCFpc0VtcHR5KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGl0ZW0gY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtJdGVtQ29uZmlnfSBUaGUgaXRlbSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGNvbmZpZzogX2NvbmZpZyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGl0ZW0gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtpdGVtVHlwZX0gVGhlIGl0ZW0gdHlwZS5cbiAgICAgKi9cbiAgICB0eXBlOiBfdHlwZSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGl0ZW0gZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtEYXRhQ29uZmlnfSBUaGUgaXRlbSBkYXRhLlxuICAgICAqL1xuICAgIGRhdGE6IF9kYXRhLFxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZW0gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHZhbGlkOiBfdmFsaWQsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgYXJyYXkgb2YgZXhpc3RpbmcgaXRlbXMgKGFkZGVkIHdpdGggdGhlIHN0YW5kYXJkIEFycmF5LnByb3RvdHlwZS5wdXNoKCkpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IG9mIGV4aXN0aW5nIGl0ZW1zIGlmIGl0IGV4aXN0cywgLTEgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGluZGV4OiBfaW5kZXhcbiAgfTtcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyoqXG4gKiBDb25zdHJhaW50cyBmb3IgZWFjaCB0eXBlIG9mIHRoZSBpdGVtIGNvbmZpZ3VyYXRpb24uXG4gKi9cblxuY29uc3QgaXRlbUNvbnN0cmFpbnRzID0ge1xuICBldmVudDoge1xuICAgIGV2ZW50OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgZXZlbnRJbmZvOiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbGlzdGVuZXJPbjoge1xuICAgIG9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdmFsdWVzOiBbJ3Bhc3QnLCAnZnV0dXJlJywgJ2FsbCddLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9LFxuICAgIHBhdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH0sXG4gIGxpc3RlbmVyT2ZmOiB7XG4gICAgb2ZmOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICBzY29wZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZXM6IFsncGFzdCcsICdmdXR1cmUnLCAnYWxsJ10sXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH0sXG4gICAgcGF0aDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVtQ29uc3RyYWludHM7XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgZGF0YSBsYXllciBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0gZnJvbSB3aGljaCB0byBjb25zdHJ1Y3QgdGhlIGxpc3RlbmVyLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlbSkge1xuICBjb25zdCBfZXZlbnQgPSBpdGVtLmNvbmZpZy5vbiB8fCBpdGVtLmNvbmZpZy5vZmY7XG4gIGNvbnN0IF9oYW5kbGVyID0gaXRlbS5jb25maWcuaGFuZGxlciB8fCBudWxsO1xuICBjb25zdCBfc2NvcGUgPSBpdGVtLmNvbmZpZy5zY29wZSB8fCAoaXRlbS5jb25maWcub24gJiYgQ09OU1RBTlRTLmxpc3RlbmVyU2NvcGUuQUxMKSB8fCBudWxsO1xuICBjb25zdCBfcGF0aCA9IGl0ZW0uY29uZmlnLnBhdGggfHwgbnVsbDtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIGV2ZW50IG5hbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbGlzdGVuZXIgZXZlbnQgbmFtZS5cbiAgICAgKi9cbiAgICBldmVudDogX2V2ZW50LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXIgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsoRnVuY3Rpb258bnVsbCl9IFRoZSBsaXN0ZW5lciBoYW5kbGVyLlxuICAgICAqL1xuICAgIGhhbmRsZXI6IF9oYW5kbGVyLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXIgc2NvcGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KFN0cmluZ3xudWxsKX0gVGhlIGxpc3RlbmVyIHNjb3BlLlxuICAgICAqL1xuICAgIHNjb3BlOiBfc2NvcGUsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBwYXRoLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyhTdHJpbmd8bnVsbCl9IFRoZSBsaXN0ZW5lciBwYXRoLlxuICAgICAqL1xuICAgIHBhdGg6IF9wYXRoXG4gIH07XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBjbG9uZURlZXAgPSBfLmNsb25lRGVlcDtcbmNvbnN0IGdldCA9IF8uZ2V0O1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgbGlzdGVuZXJNYXRjaCA9IHJlcXVpcmUoJy4vdXRpbHMvbGlzdGVuZXJNYXRjaCcpO1xuY29uc3QgaW5kZXhPZkxpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9pbmRleE9mTGlzdGVuZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbGlzdGVuZXIgbWFuYWdlci5cbiAqXG4gKiBAcGFyYW0ge01hbmFnZXJ9IGRhdGFMYXllck1hbmFnZXIgVGhlIGRhdGEgbGF5ZXIgbWFuYWdlci5cbiAqIEByZXR1cm5zIHtMaXN0ZW5lck1hbmFnZXJ9IEEgbGlzdGVuZXIgbWFuYWdlci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkYXRhTGF5ZXJNYW5hZ2VyKSB7XG4gIGNvbnN0IF9saXN0ZW5lcnMgPSB7fTtcbiAgY29uc3QgX2RhdGFMYXllck1hbmFnZXIgPSBkYXRhTGF5ZXJNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBGaW5kIGluZGV4IG9mIGxpc3RlbmVyIGluIGxpc3RlbmVycyBvYmplY3QuXG4gICAqL1xuICBjb25zdCBfaW5kZXhPZkxpc3RlbmVyID0gaW5kZXhPZkxpc3RlbmVyLmJpbmQobnVsbCwgX2xpc3RlbmVycyk7XG5cbiAgY29uc3QgTGlzdGVuZXJNYW5hZ2VyID0ge1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgY29uc3QgZXZlbnQgPSBsaXN0ZW5lci5ldmVudDtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfbGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICAgICAgaWYgKF9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgICAgIF9saXN0ZW5lcnNbbGlzdGVuZXIuZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfbGlzdGVuZXJzW2xpc3RlbmVyLmV2ZW50XSA9IFtsaXN0ZW5lcl07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byB1bnJlZ2lzdGVyLlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9saXN0ZW5lcnMsIGV2ZW50KSkge1xuICAgICAgICBpZiAoIShsaXN0ZW5lci5oYW5kbGVyIHx8IGxpc3RlbmVyLnNjb3BlIHx8IGxpc3RlbmVyLnBhdGgpKSB7XG4gICAgICAgICAgX2xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBfbGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgbGlzdGVuZXJzIHJlbGF0ZWQgdG8gdGhlIHBhc3NlZCBpdGVtLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEl0ZW0gdG8gdHJpZ2dlciBsaXN0ZW5lciBmb3IuXG4gICAgICovXG4gICAgdHJpZ2dlckxpc3RlbmVyczogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgY29uc3QgdHJpZ2dlcmVkRXZlbnRzID0gX2dldFRyaWdnZXJlZEV2ZW50cyhpdGVtKTtcbiAgICAgIHRyaWdnZXJlZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2xpc3RlbmVycywgZXZlbnQpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBfbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgc2luZ2xlIGxpc3RlbmVyIG9uIHRoZSBwYXNzZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEl0ZW0gdG8gY2FsbCB0aGUgbGlzdGVuZXIgd2l0aC5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyLCBpdGVtKSB7XG4gICAgICBfY2FsbEhhbmRsZXIobGlzdGVuZXIsIGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGxpc3RlbmVyIGhhbmRsZXIgb24gdGhlIGl0ZW0gaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0uXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNQYXN0SXRlbSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgaXRlbSB3YXMgcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGxpc3RlbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtLCBpc1Bhc3RJdGVtKSB7XG4gICAgLy8gRG8gbm90IHRyaWdnZXIgZXZlbnQgZHVyaW5nIGluaXRpYWxpemF0aW9uIHdoZW4gZXZlbnQgd2FzIHB1c2hlZCBhZnRlciBhZGRpbmcgbGlzdGVuZXIgYW5kIGJlZm9yZSBETCBpbml0aWFsaXphdGlvblxuICAgIGlmICh0eXBlb2YgaXRlbS5pbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIGlmIChsaXN0ZW5lck1hdGNoKGxpc3RlbmVyLCBpdGVtKSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tBcmdzID0gW2Nsb25lRGVlcChpdGVtLmNvbmZpZyldO1xuXG4gICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lci5wYXRoKSB7XG4gICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQoX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpLCBsaXN0ZW5lci5wYXRoKTtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGdldChjbG9uZURlZXAoaXRlbS5kYXRhKSwgbGlzdGVuZXIucGF0aCk7XG4gICAgICAgICAgY2FsbGJhY2tBcmdzLnB1c2gob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNQYXN0SXRlbSkge1xuICAgICAgICAgIGNvbnN0IG9sZFN0YXRlID0gX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gY2xvbmVEZWVwKF9kYXRhTGF5ZXJNYW5hZ2VyLmdldFN0YXRlKCkpO1xuICAgICAgICAgIGNhbGxiYWNrQXJncy5wdXNoKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXIuaGFuZGxlci5hcHBseShfZGF0YUxheWVyTWFuYWdlci5nZXREYXRhTGF5ZXIoKSwgY2FsbGJhY2tBcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGV2ZW50cyB0aGF0IGFyZSB0cmlnZ2VyZWQgZm9yIHRoaXMgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U3RyaW5nPn0gVGhlIG5hbWVzIG9mIHRoZSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGZvciB0aGlzIGl0ZW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0VHJpZ2dlcmVkRXZlbnRzKGl0ZW0pIHtcbiAgICBjb25zdCB0cmlnZ2VyZWRFdmVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICBjYXNlIGNvbnN0YW50cy5pdGVtVHlwZS5EQVRBOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgY29uc3RhbnRzLml0ZW1UeXBlLkVWRU5UOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5FVkVOVCk7XG4gICAgICAgIGlmIChpdGVtLmRhdGEpIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBpZiAoaXRlbS5jb25maWcuZXZlbnQgIT09IGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpIHtcbiAgICAgICAgICB0cmlnZ2VyZWRFdmVudHMucHVzaChpdGVtLmNvbmZpZy5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyZWRFdmVudHM7XG4gIH1cblxuICByZXR1cm4gTGlzdGVuZXJNYW5hZ2VyO1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgaGFzID0gXy5oYXM7XG5jb25zdCBnZXQgPSBfLmdldDtcblxuLyoqXG4gICogQ2hlY2tzIGlmIHRoZSBvYmplY3QgY29udGFpbnMgYW4gYW5jZXN0b3IgdGhhdCBpcyBzZXQgdG8gbnVsbCBvciB1bmRlZmluZWQuXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gICogQHBhcmFtIHtTdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBjb250YWlucyBhbiBhbmNlc3RvciB0aGF0IGlzIHNldCB0byBudWxsIG9yIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAqIEBwcml2YXRlXG4gICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgcGF0aCkge1xuICBsZXQgYW5jZXN0b3JQYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpKTtcbiAgd2hpbGUgKGFuY2VzdG9yUGF0aCkge1xuICAgIGlmIChoYXMob2JqZWN0LCBhbmNlc3RvclBhdGgpKSB7XG4gICAgICBjb25zdCBhbmNlc3RvclZhbHVlID0gZ2V0KG9iamVjdCwgYW5jZXN0b3JQYXRoKTtcbiAgICAgIGlmIChhbmNlc3RvclZhbHVlID09PSBudWxsIHx8IGFuY2VzdG9yVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5jZXN0b3JQYXRoID0gYW5jZXN0b3JQYXRoLnN1YnN0cmluZygwLCBhbmNlc3RvclBhdGgubGFzdEluZGV4T2YoJy4nKSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XG5jb25zdCBjbG9uZURlZXBXaXRoID0gXy5jbG9uZURlZXBXaXRoO1xuY29uc3QgaXNPYmplY3QgPSBfLmlzT2JqZWN0O1xuY29uc3QgaXNBcnJheSA9IF8uaXNBcnJheTtcbmNvbnN0IHJlamVjdCA9IF8ucmVqZWN0O1xuY29uc3QgbWVyZ2VXaXRoID0gXy5tZXJnZVdpdGg7XG5jb25zdCBpc051bGwgPSBfLmlzTnVsbDtcblxuLyoqXG4gKiBNZXJnZXMgdGhlIHNvdXJjZSBpbnRvIHRoZSBvYmplY3QgYW5kIHNldHMgb2JqZWN0cyBhcyAndW5kZWZpbmVkJyBpZiB0aGV5IGFyZSAndW5kZWZpbmVkJyBpbiB0aGUgc291cmNlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgaW50byB3aGljaCB0byBtZXJnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSB0byBtZXJnZSB3aXRoLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIG9iamVjdCBpbnRvIHdoaWNoIHNvdXJjZSB3YXMgbWVyZ2VkIGluLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGNvbnN0IG1ha2VPbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCh2YWx1ZSwgcHJlZGljYXRlKS5tYXAoaXRlbSA9PiBjbG9uZURlZXBXaXRoKGl0ZW0sIG9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvbmUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBzdWJLZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG4gICAgICAgICAgaWYgKCFwcmVkaWNhdGUodmFsdWVbc3ViS2V5XSkpIHtcbiAgICAgICAgICAgIGNsb25lW3N1YktleV0gPSBjbG9uZURlZXBXaXRoKHZhbHVlW3N1YktleV0sIG9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjdXN0b21pemVyID0gZnVuY3Rpb24ob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygc3JjVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHNyY1ZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb21pdERlZXAgPSBmdW5jdGlvbih2YWx1ZSwgcHJlZGljYXRlID0gKHZhbCkgPT4gIXZhbCkge1xuICAgIHJldHVybiBjbG9uZURlZXBXaXRoKHZhbHVlLCBtYWtlT21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKHByZWRpY2F0ZSkpO1xuICB9O1xuXG4gIG1lcmdlV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcik7XG5cbiAgLy8gUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIG9iamVjdHNcbiAgb2JqZWN0ID0gb21pdERlZXAob2JqZWN0LCBpc051bGwpO1xuXG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiLypcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YSwgY29uc3RyYWludHMpIHtcbiAgLy8gR28gdGhyb3VnaCBhbGwgY29uc3RyYWludHMgYW5kIGZpbmQgb25lIHdoaWNoIGRvZXMgbm90IG1hdGNoIHRoZSBkYXRhXG4gIGNvbnN0IGZvdW5kT2JqZWN0aW9uID0gT2JqZWN0LmtleXMoY29uc3RyYWludHMpLmZpbmQoa2V5ID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29uc3RyYWludHNba2V5XS50eXBlO1xuICAgIGNvbnN0IHN1cHBvcnRlZFZhbHVlcyA9IGNvbnN0cmFpbnRzW2tleV0udmFsdWVzO1xuICAgIGNvbnN0IG1hbmRhdG9yeSA9ICFjb25zdHJhaW50c1trZXldLm9wdGlvbmFsO1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBjb25zdCBpbmNvcnJlY3RUeXBlID0gdHlwZSAmJiB2YWx1ZVR5cGUgIT09IHR5cGU7XG4gICAgY29uc3Qgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcyA9IHN1cHBvcnRlZFZhbHVlcyAmJiAhc3VwcG9ydGVkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKTtcbiAgICBpZiAobWFuZGF0b3J5KSB7XG4gICAgICByZXR1cm4gIXZhbHVlIHx8IGluY29ycmVjdFR5cGUgfHwgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIChpbmNvcnJlY3RUeXBlIHx8IG5vTWF0Y2hGb3JTdXBwb3J0ZWRWYWx1ZXMpO1xuICAgIH1cbiAgfSk7XG4gIC8vIElmIG5vIG9iamVjdGlvbnMgZm91bmQgdGhlbiBkYXRhIG1hdGNoZXMgY29udHJhaW50c1xuICByZXR1cm4gdHlwZW9mIGZvdW5kT2JqZWN0aW9uID09PSAndW5kZWZpbmVkJztcbn07XG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uLy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGlzRXF1YWwgPSBfLmlzRXF1YWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdGVuZXJzLCBsaXN0ZW5lcikge1xuICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcmVnaXN0ZXJlZExpc3RlbmVyXSBvZiBsaXN0ZW5lcnNbZXZlbnRdLmVudHJpZXMoKSkge1xuICAgICAgaWYgKGlzRXF1YWwocmVnaXN0ZXJlZExpc3RlbmVyLmhhbmRsZXIsIGxpc3RlbmVyLmhhbmRsZXIpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgaGFzID0gXy5oYXM7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgYW5jZXN0b3JSZW1vdmVkID0gcmVxdWlyZSgnLi9hbmNlc3RvclJlbW92ZWQnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGxpc3RlbmVyIG1hdGNoZXMgdGhlIGl0ZW0uXG4gKlxuICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbGlzdGVuZXIgbWF0Y2hlcyB0aGUgaXRlbSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBsaXN0ZW5lck1hdGNoKGxpc3RlbmVyLCBpdGVtKSB7XG4gIGNvbnN0IGV2ZW50ID0gbGlzdGVuZXIuZXZlbnQ7XG4gIGNvbnN0IGl0ZW1Db25maWcgPSBpdGVtLmNvbmZpZztcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBpZiAoaXRlbS50eXBlID09PSBDT05TVEFOVFMuaXRlbVR5cGUuREFUQSkge1xuICAgIGlmIChldmVudCA9PT0gQ09OU1RBTlRTLmRhdGFMYXllckV2ZW50LkNIQU5HRSkge1xuICAgICAgbWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gQ09OU1RBTlRTLml0ZW1UeXBlLkVWRU5UKSB7XG4gICAgaWYgKGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuRVZFTlQgfHwgZXZlbnQgPT09IGl0ZW1Db25maWcuZXZlbnQpIHtcbiAgICAgIG1hdGNoZXMgPSBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoaXRlbS5kYXRhICYmIGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuQ0hBTkdFKSB7XG4gICAgICBtYXRjaGVzID0gc2VsZWN0b3JNYXRjaGVzKGxpc3RlbmVyLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0ZW5lciBoYXMgYSBzZWxlY3RvciB0aGF0IHBvaW50cyB0byBhbiBvYmplY3QgaW4gdGhlIGRhdGEgcGF5bG9hZCBvZiBhbiBpdGVtLlxuICpcbiAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBleHRyYWN0IHRoZSBzZWxlY3RvciBmcm9tLlxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBzZWxlY3RvciBpcyBub3QgcHJvdmlkZWQgb3IgaWYgdGhlIGdpdmVuIHNlbGVjdG9yIGlzIG1hdGNoaW5nLCBmYWxzZSBvdGhlcndpc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0uZGF0YSAmJiBsaXN0ZW5lci5wYXRoKSB7XG4gICAgcmV0dXJuIGhhcyhpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpIHx8IGFuY2VzdG9yUmVtb3ZlZChpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXJNYXRjaDtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4xLjBcIlxufVxuIl19
