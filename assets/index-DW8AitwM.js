(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Qc={intro:{enter:"tree"},tree:{light:"lighting"},lighting:{complete:"gift"},gift:{open:"opening"},opening:{complete:"globe"},globe:{celebrate:"finale"},finale:{replay:"intro"}};function qc(i,t){var e;return((e=Qc[i])==null?void 0:e[t])??i}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="181",Zc=0,Io=1,Kc=2,kl=1,jc=2,Mn=3,Ln=0,Ie=1,je=2,bn=0,_i=1,Zn=2,Do=3,Lo=4,$c=5,Xn=100,tu=101,eu=102,nu=103,iu=104,ru=200,su=201,au=202,ou=203,ea=204,na=205,lu=206,cu=207,uu=208,hu=209,fu=210,du=211,pu=212,mu=213,xu=214,ia=0,ra=1,sa=2,Pi=3,aa=4,oa=5,la=6,ca=7,ja=0,gu=1,vu=2,Dn=0,Mu=1,Su=2,yu=3,Wl=4,bu=5,Eu=6,Au=7,Xl=300,Ii=301,Di=302,ua=303,ha=304,fs=306,fa=1e3,Sn=1001,da=1002,Ge=1003,Tu=1004,Er=1005,Ye=1006,Ms=1007,Jn=1008,cn=1009,Yl=1010,Jl=1011,cr=1012,$a=1013,Kn=1014,an=1015,zi=1016,to=1017,eo=1018,ur=1020,Ql=35902,ql=35899,Zl=1021,Kl=1022,tn=1023,hr=1026,fr=1027,no=1028,io=1029,ro=1030,so=1031,ao=1033,jr=33776,$r=33777,ts=33778,es=33779,pa=35840,ma=35841,xa=35842,ga=35843,va=36196,Ma=37492,Sa=37496,ya=37808,ba=37809,Ea=37810,Aa=37811,Ta=37812,_a=37813,wa=37814,Ca=37815,Ra=37816,Pa=37817,Ia=37818,Da=37819,La=37820,Ua=37821,Na=36492,Fa=36494,Oa=36495,Ba=36283,za=36284,Va=36285,Ga=36286,_u=3200,wu=3201,oo=0,Cu=1,Pn="",Ue="srgb",Li="srgb-linear",rs="linear",re="srgb",ii=7680,Uo=519,Ru=512,Pu=513,Iu=514,jl=515,Du=516,Lu=517,Uu=518,Nu=519,Ha=35044,Fu=35048,No="300 es",on=2e3,ss=2001;function $l(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){const i=dr("canvas");return i.style.display="block",i}const Fo={};function as(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ht(...i){const t="THREE."+i.shift();console.warn(t,...i)}function fe(...i){const t="THREE."+i.shift();console.error(t,...i)}function pr(...i){const t=i.join(" ");t in Fo||(Fo[t]=!0,Ht(...i))}function Bu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const sr=Math.PI/180,mr=180/Math.PI;function ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function lo(i,t){return(i%t+t)%t}function zu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Vu(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function Gu(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function Hu(i,t=1){return t-Math.abs(lo(i,t*2)-t)}function ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yu(i,t){return i+Math.random()*(t-i)}function Ju(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(Oo=i);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qu(i){return i*sr}function Zu(i){return i*mr}function Ku(i){return(i&i-1)===0&&i!==0}function ju(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $u(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function th(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),x=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*x,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*x,o*l);break;case"ZYZ":i.set(c*x,c*p,o*u,o*l);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ri={DEG2RAD:sr,RAD2DEG:mr,generateUUID:ln,clamp:Jt,euclideanModulo:lo,mapLinear:zu,inverseLerp:Vu,lerp:ar,damp:Gu,pingpong:Hu,smoothstep:ku,smootherstep:Wu,randInt:Xu,randFloat:Yu,randFloatSpread:Ju,seededRandom:Qu,degToRad:qu,radToDeg:Zu,isPowerOfTwo:Ku,ceilPowerOfTwo:ju,floorPowerOfTwo:$u,setQuaternionFromProperEuler:th,normalize:ee,denormalize:$e};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],p=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(h!==g||c!==d||l!==p||u!==x){let m=c*d+l*p+u*x+h*g;m<0&&(d=-d,p=-p,x=-x,g=-g,m=-m);let f=1-o;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);f=Math.sin(f*_)/M,o=Math.sin(o*_)/M,c=c*f+d*o,l=l*f+p*o,u=u*f+x*o,h=h*f+g*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+x*o,h=h*f+g*o;const _=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=_,l*=_,u*=_,h*=_}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return t[e]=o*x+u*h+c*p-l*d,t[e+1]=c*x+u*d+l*h-o*p,t[e+2]=l*x+u*p+o*d-c*h,t[e+3]=u*x-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"YZX":this._x=d*u*h+l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h-d*p*x;break;case"XZY":this._x=d*u*h-l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h+d*p*x;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ss.copy(this).projectOnVector(t),this.sub(Ss)}reflect(t){return this.sub(Ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new I,Bo=new Mr;class kt{constructor(t,e,n,r,s,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],x=n[8],g=r[0],m=r[3],f=r[6],_=r[1],M=r[4],E=r[7],C=r[2],A=r[5],R=r[8];return s[0]=a*g+o*_+c*C,s[3]=a*m+o*M+c*A,s[6]=a*f+o*E+c*R,s[1]=l*g+u*_+h*C,s[4]=l*m+u*M+h*A,s[7]=l*f+u*E+h*R,s[2]=d*g+p*_+x*C,s[5]=d*m+p*M+x*A,s[8]=d*f+p*E+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,x=e*h+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=h*g,t[1]=(r*l-u*n)*g,t[2]=(o*n-r*a)*g,t[3]=d*g,t[4]=(u*e-r*c)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ys.makeScale(t,e)),this}rotate(t){return this.premultiply(ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new kt,zo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eh(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(r.r=En(r.r),r.g=En(r.g),r.b=En(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:t,whitePoint:n,transfer:rs,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:re,toXYZ:zo,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const jt=eh();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class nh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{si===void 0&&(si=dr("canvas")),si.width=t.width,si.height=t.height;const r=si.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=si}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ih=0;class co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let rh=0;const Es=new I;class Te extends Vi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Sn,r=Sn,s=Ye,a=Jn,o=tn,c=cn,l=Te.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ln(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Es).x}get height(){return this.source.getSize(Es).y}get depth(){return this.source.getSize(Es).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fa:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fa:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Xl;Te.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,r=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],x=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,E=(p+1)/2,C=(f+1)/2,A=(u+d)/4,R=(h+g)/4,L=(x+m)/4;return M>E&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=R/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=L/s),this.set(n,r,s,e),this}let _=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(h-g)/_,this.z=(d-u)/_,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sh extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Te(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new co(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tc extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ah extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(s,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Tr.subVectors(this.max,Wi),ai.subVectors(t.a,Wi),oi.subVectors(t.b,Wi),li.subVectors(t.c,Wi),An.subVectors(oi,ai),Tn.subVectors(li,oi),Bn.subVectors(ai,li);let e=[0,-An.z,An.y,0,-Tn.z,Tn.y,0,-Bn.z,Bn.y,An.z,0,-An.x,Tn.z,0,-Tn.x,Bn.z,0,-Bn.x,-An.y,An.x,0,-Tn.y,Tn.x,0,-Bn.y,Bn.x,0];return!As(e,ai,oi,li,Tr)||(e=[1,0,0,0,1,0,0,0,1],!As(e,ai,oi,li,Tr))?!1:(_r.crossVectors(An,Tn),e=[_r.x,_r.y,_r.z],As(e,ai,oi,li,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],Qe=new I,Ar=new ei,ai=new I,oi=new I,li=new I,An=new I,Tn=new I,Bn=new I,Wi=new I,Tr=new I,_r=new I,zn=new I;function As(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){zn.fromArray(i,s);const o=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const oh=new ei,Xi=new I,Ts=new I;class Gi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):oh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Xi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Ts)),this.expandByPoint(Xi.copy(t.center).sub(Ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pn=new I,_s=new I,wr=new I,_n=new I,ws=new I,Cr=new I,Cs=new I;class ec{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){_s.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(_s);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wr),o=_n.dot(this.direction),c=-_n.dot(wr),l=_n.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*c-o,d=a*o-c,x=s*u,h>=0)if(d>=-x)if(d<=x){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_s).addScaledVector(wr,d),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,r,s){ws.subVectors(e,t),Cr.subVectors(n,t),Cs.crossVectors(ws,Cr);let a=this.direction.dot(Cs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const c=o*this.direction.dot(Cr.crossVectors(_n,Cr));if(c<0)return null;const l=o*this.direction.dot(ws.cross(_n));if(l<0||c+l>a)return null;const u=-o*_n.dot(Cs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,r,s,a,o,c,l,u,h,d,p,x,g,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,h,d,p,x,g,m)}set(t,e,n,r,s,a,o,c,l,u,h,d,p,x,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ci.setFromMatrixColumn(t,0).length(),s=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*h,x=o*u,g=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+x*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=x+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,x=l*u,g=l*h;e[0]=d+g*o,e[4]=x*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,x=l*u,g=l*h;e[0]=d-g*o,e[4]=-a*h,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,x=o*u,g=o*h;e[0]=c*u,e[4]=x*l-p,e[8]=d*l+g,e[1]=c*h,e[5]=g*l+d,e[9]=p*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,x=o*c,g=o*l;e[0]=c*u,e[4]=g-d*h,e[8]=x*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+x,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*c,p=a*l,x=o*c,g=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+g,e[5]=a*u,e[9]=p*h-x,e[2]=x*h-p,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lh,t,ch)}lookAt(t,e,n){const r=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),wn.crossVectors(n,Be),wn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),wn.crossVectors(n,Be)),wn.normalize(),Rr.crossVectors(Be,wn),r[0]=wn.x,r[4]=Rr.x,r[8]=Be.x,r[1]=wn.y,r[5]=Rr.y,r[9]=Be.y,r[2]=wn.z,r[6]=Rr.z,r[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],x=n[2],g=n[6],m=n[10],f=n[14],_=n[3],M=n[7],E=n[11],C=n[15],A=r[0],R=r[4],L=r[8],b=r[12],S=r[1],P=r[5],U=r[9],B=r[13],H=r[2],z=r[6],X=r[10],q=r[14],k=r[3],st=r[7],ot=r[11],yt=r[15];return s[0]=a*A+o*S+c*H+l*k,s[4]=a*R+o*P+c*z+l*st,s[8]=a*L+o*U+c*X+l*ot,s[12]=a*b+o*B+c*q+l*yt,s[1]=u*A+h*S+d*H+p*k,s[5]=u*R+h*P+d*z+p*st,s[9]=u*L+h*U+d*X+p*ot,s[13]=u*b+h*B+d*q+p*yt,s[2]=x*A+g*S+m*H+f*k,s[6]=x*R+g*P+m*z+f*st,s[10]=x*L+g*U+m*X+f*ot,s[14]=x*b+g*B+m*q+f*yt,s[3]=_*A+M*S+E*H+C*k,s[7]=_*R+M*P+E*z+C*st,s[11]=_*L+M*U+E*X+C*ot,s[15]=_*b+M*B+E*q+C*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],x=t[3],g=t[7],m=t[11],f=t[15];return x*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+g*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+e*l*h-e*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+f*(-r*o*u-e*c*h+e*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],x=t[12],g=t[13],m=t[14],f=t[15],_=h*m*l-g*d*l+g*c*p-o*m*p-h*c*f+o*d*f,M=x*d*l-u*m*l-x*c*p+a*m*p+u*c*f-a*d*f,E=u*g*l-x*h*l+x*o*p-a*g*p-u*o*f+a*h*f,C=x*h*c-u*g*c-x*o*d+a*g*d+u*o*m-a*h*m,A=e*_+n*M+r*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(g*d*s-h*m*s-g*r*p+n*m*p+h*r*f-n*d*f)*R,t[2]=(o*m*s-g*c*s+g*r*l-n*m*l-o*r*f+n*c*f)*R,t[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*R,t[4]=M*R,t[5]=(u*m*s-x*d*s+x*r*p-e*m*p-u*r*f+e*d*f)*R,t[6]=(x*c*s-a*m*s-x*r*l+e*m*l+a*r*f-e*c*f)*R,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*p+e*c*p)*R,t[8]=E*R,t[9]=(x*h*s-u*g*s-x*n*p+e*g*p+u*n*f-e*h*f)*R,t[10]=(a*g*s-x*o*s+x*n*l-e*g*l-a*n*f+e*o*f)*R,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*p-e*o*p)*R,t[12]=C*R,t[13]=(u*g*r-x*h*r+x*n*d-e*g*d-u*n*m+e*h*m)*R,t[14]=(x*o*r-a*g*r-x*n*c+e*g*c+a*n*m-e*o*m)*R,t[15]=(a*h*r-u*o*r+u*n*c-e*h*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,x=s*h,g=a*u,m=a*h,f=o*h,_=c*l,M=c*u,E=c*h,C=n.x,A=n.y,R=n.z;return r[0]=(1-(g+f))*C,r[1]=(p+E)*C,r[2]=(x-M)*C,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(d+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(x+M)*R,r[9]=(m-_)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const a=ci.set(r[4],r[5],r[6]).length(),o=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],qe.copy(this);const l=1/s,u=1/a,h=1/o;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=h,qe.elements[9]*=h,qe.elements[10]*=h,e.setFromRotationMatrix(qe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=on,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let x,g;if(c)x=s/(a-s),g=a*s/(a-s);else if(o===on)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ss)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=on,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r);let x,g;if(c)x=1/(a-s),g=a/(a-s);else if(o===on)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===ss)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new I,qe=new ae,lh=new I(0,0,0),ch=new I(1,1,1),wn=new I,Rr=new I,Be=new I,Go=new ae,Ho=new Mr;class nn{constructor(t=0,e=0,n=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uh=0;const ko=new I,ui=new Mr,mn=new ae,Pr=new I,Yi=new I,hh=new I,fh=new Mr,Wo=new I(1,0,0),Xo=new I(0,1,0),Yo=new I(0,0,1),Jo={type:"added"},dh={type:"removed"},hi={type:"childadded",child:null},Rs={type:"childremoved",child:null};class ve extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new I,e=new nn,n=new Mr,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Yi,Pr,this.up):mn.lookAt(Pr,Yi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),hi.child=t,this.dispatchEvent(hi),hi.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new I,xn=new I,Ps=new I,gn=new I,fi=new I,di=new I,Qo=new I,Is=new I,Ds=new I,Ls=new I,Us=new se,Ns=new se,Fs=new se;class Xe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ze.subVectors(t,e),r.cross(Ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ze.subVectors(r,e),xn.subVectors(n,e),Ps.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(xn),c=Ze.dot(Ps),l=xn.dot(xn),u=xn.dot(Ps),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,x=(a*u-o*c)*d;return s.set(1-p-x,x,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Us.setScalar(0),Ns.setScalar(0),Fs.setScalar(0),Us.fromBufferAttribute(t,e),Ns.fromBufferAttribute(t,n),Fs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Us,s.x),a.addScaledVector(Ns,s.y),a.addScaledVector(Fs,s.z),a}static isFrontFacing(t,e,n,r){return Ze.subVectors(n,e),xn.subVectors(t,e),Ze.cross(xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Ze.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;fi.subVectors(r,n),di.subVectors(s,n),Is.subVectors(t,n);const c=fi.dot(Is),l=di.dot(Is);if(c<=0&&l<=0)return e.copy(n);Ds.subVectors(t,r);const u=fi.dot(Ds),h=di.dot(Ds);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(fi,a);Ls.subVectors(t,s);const p=fi.dot(Ls),x=di.dot(Ls);if(x>=0&&p<=x)return e.copy(s);const g=p*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(di,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return Qo.subVectors(s,r),o=(h-u)/(h-u+(p-x)),e.copy(r).addScaledVector(Qo,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(fi,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=lo(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Os(a,s,t+1/3),this.g=Os(a,s,t),this.b=Os(a,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return jt.workingToColorSpace(we.copy(this),t),Math.round(Jt(we.r*255,0,255))*65536+Math.round(Jt(we.g*255,0,255))*256+Math.round(Jt(we.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(we.copy(this),e);const n=we.r,r=we.g,s=we.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ue){jt.workingToColorSpace(we.copy(this),t);const e=we.r,n=we.g,r=we.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Ir);const n=ar(Cn.h,Ir.h,e),r=ar(Cn.s,Ir.s,e),s=ar(Cn.l,Ir.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Yt;Yt.NAMES=ic;let ph=0;class Un extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=_i,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uo extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new I,Dr=new lt;let mh=0;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$e(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$e(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$e(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$e(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}}class rc extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xh=0;const ke=new ae,Bs=new ve,pi=new I,ze=new ei,Ji=new ei,Ee=new I;class Me extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?sc:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Bs.lookAt(t),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ze.min,Ji.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,Ji.max),ze.expandByPoint(Ee)):(ze.expandByPoint(Ji.min),ze.expandByPoint(Ji.max))}ze.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ee.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(t,l),Ee.add(pi)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new I,c[L]=new I;const l=new I,u=new I,h=new I,d=new lt,p=new lt,x=new lt,g=new I,m=new I;function f(L,b,S){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,S),u.sub(l),h.sub(l),p.sub(d),x.sub(d);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),o[L].add(g),o[b].add(g),o[S].add(g),c[L].add(m),c[b].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,b=_.length;L<b;++L){const S=_[L],P=S.start,U=S.count;for(let B=P,H=P+U;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new I,E=new I,C=new I,A=new I;function R(L){C.fromBufferAttribute(r,L),A.copy(C);const b=o[L];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),E.crossVectors(A,b);const P=E.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,b=_.length;L<b;++L){const S=_[L],P=S.start,U=S.count;for(let B=P,H=P+U;B<H;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,x=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let f=0;f<u;f++)d[x++]=l[p++]}return new ce(d,u,h)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new ae,Vn=new ec,Lr=new Gi,Zo=new I,Ur=new I,Nr=new I,Fr=new I,zs=new I,Or=new I,Ko=new I,Br=new I;class Zt extends ve{constructor(t=new Me,e=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(zs.fromBufferAttribute(h,t),a?Or.addScaledVector(zs,u):Or.addScaledVector(zs.sub(e),u))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(Lr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Lr,Zo)===null||Vn.origin.distanceToSquared(Zo)>(t.far-t.near)**2))&&(qo.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(qo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,C=M;E<C;E+=3){const A=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);r=zr(this,f,t,n,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=o.getX(m),M=o.getX(m+1),E=o.getX(m+2);r=zr(this,a,t,n,l,u,h,_,M,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,C=M;E<C;E+=3){const A=E,R=E+1,L=E+2;r=zr(this,f,t,n,l,u,h,A,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=m,M=m+1,E=m+2;r=zr(this,a,t,n,l,u,h,_,M,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function gh(i,t,e,n,r,s,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Ln,o),c===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Ur),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Fr);const u=gh(i,t,e,n,Ur,Nr,Fr,Ko);if(u){const h=new I;Xe.getBarycoord(Ko,Ur,Nr,Fr,h),r&&(u.uv=Xe.getInterpolatedAttribute(r,o,c,l,h,new lt)),s&&(u.uv1=Xe.getInterpolatedAttribute(s,o,c,l,h,new lt)),a&&(u.normal=Xe.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};Xe.getNormal(Ur,Nr,Fr,d.normal),u.face=d,u.barycoord=h}return u}class en extends Me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,a,s,0),x("z","y","x",1,-1,n,e,-t,a,s,1),x("x","z","y",1,1,t,n,e,r,a,2),x("x","z","y",1,-1,t,n,-e,r,a,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function x(g,m,f,_,M,E,C,A,R,L,b){const S=E/R,P=C/L,U=E/2,B=C/2,H=A/2,z=R+1,X=L+1;let q=0,k=0;const st=new I;for(let ot=0;ot<X;ot++){const yt=ot*P-B;for(let It=0;It<z;It++){const Dt=It*S-U;st[g]=Dt*_,st[m]=yt*M,st[f]=H,l.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[f]=A>0?1:-1,u.push(st.x,st.y,st.z),h.push(It/R),h.push(1-ot/L),q+=1}}for(let ot=0;ot<L;ot++)for(let yt=0;yt<R;yt++){const It=d+yt+z*ot,Dt=d+yt+z*(ot+1),Bt=d+(yt+1)+z*(ot+1),qt=d+(yt+1)+z*ot;c.push(It,Dt,qt),c.push(Dt,Bt,qt),k+=6}o.addGroup(p,k,b),p+=k,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const r in n)t[r]=n[r]}return t}function vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Mh={clone:Ui,merge:Pe};var Sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new I,jo=new lt,$o=new lt;class Ve extends oc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,jo,$o),e.subVectors($o,jo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,xi=1;class bh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ve(mi,xi,t,e);r.layers=this.layers,this.add(r);const s=new Ve(mi,xi,t,e);s.layers=this.layers,this.add(s);const a=new Ve(mi,xi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(mi,xi,t,e);o.layers=this.layers,this.add(o);const c=new Ve(mi,xi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(mi,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class lc extends Te{constructor(t=[],e=Ii,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new lc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new en(5,5,5),s=new Ne({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:bn});s.uniforms.tEquirect.value=e;const a=new Zt(r,s),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Ye),new bh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class yn extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ah={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ah)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Th{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new I;class os{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$e(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$e(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$e(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$e(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){as("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){as("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ho extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gi;const Qi=new I,vi=new I,Mi=new I,Si=new lt,qi=new lt,uc=new ae,Vr=new I,Zi=new I,Gr=new I,tl=new lt,Gs=new lt,el=new lt;class hc extends ve{constructor(t=new ho){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Th(e,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new os(n,3,0,!1)),gi.setAttribute("uv",new os(n,2,3,!1))}this.geometry=gi,this.material=t,this.center=new lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),uc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-Mi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Hr(Vr.set(-.5,-.5,0),Mi,a,vi,r,s),Hr(Zi.set(.5,-.5,0),Mi,a,vi,r,s),Hr(Gr.set(.5,.5,0),Mi,a,vi,r,s),tl.set(0,0),Gs.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(Vr,Zi,Gr,!1,Qi);if(o===null&&(Hr(Zi.set(-.5,.5,0),Mi,a,vi,r,s),Gs.set(0,1),o=t.ray.intersectTriangle(Vr,Gr,Zi,!1,Qi),o===null))return;const c=t.ray.origin.distanceTo(Qi);c<t.near||c>t.far||e.push({distance:c,point:Qi.clone(),uv:Xe.getInterpolation(Qi,Vr,Zi,Gr,tl,Gs,el,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hr(i,t,e,n,r,s){Si.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(qi.x=s*Si.x-r*Si.y,qi.y=r*Si.x+s*Si.y):qi.copy(Si),i.copy(t),i.x+=qi.x,i.y+=qi.y,i.applyMatrix4(uc)}class fc extends Te{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ge,u=Ge,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl extends ce{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new ae,il=new ae,kr=[],rl=new ei,_h=new ae,Ki=new Zt,ji=new Gi;class ka extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,_h)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),rl.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(rl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),ji.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yi),il.multiplyMatrices(n,yi),Ki.matrixWorld=il,Ki.raycast(t,kr);for(let a=0,o=kr.length;a<o;a++){const c=kr[a];c.instanceId=s,c.object=this,e.push(c)}kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fc(new Float32Array(r*this.count),r,this.count,no,an));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hs=new I,wh=new I,Ch=new kt;class Wn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Hs.subVectors(n,e).cross(wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ch.getNormalMatrix(t),r=this.coplanarPoint(Hs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Gi,Rh=new lt(.5,.5),Wr=new I;class fo{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],x=s[8],g=s[9],m=s[10],f=s[11],_=s[12],M=s[13],E=s[14],C=s[15];if(r[0].setComponents(l-a,p-u,f-x,C-_).normalize(),r[1].setComponents(l+a,p+u,f+x,C+_).normalize(),r[2].setComponents(l+o,p+h,f+g,C+M).normalize(),r[3].setComponents(l-o,p-h,f-g,C-M).normalize(),n)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,f-m,C-E).normalize();else if(r[4].setComponents(l-c,p-d,f-m,C-E).normalize(),e===on)r[5].setComponents(l+c,p+d,f+m,C+E).normalize();else if(e===ss)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);const e=Rh.distanceTo(t.center);return Gn.radius=.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Wr.x=r.normal.x>0?t.max.x:t.min.x,Wr.y=r.normal.y>0?t.max.y:t.min.y,Wr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ph extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sl=new ae,Wa=new ec,Xr=new Gi,Yr=new I;class ds extends ve{constructor(t=new Me,e=new Ph){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,t.ray.intersectsSphere(Xr)===!1)return;sl.copy(r).invert(),Wa.copy(t.ray).applyMatrix4(sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=d,g=p;x<g;x++){const m=l.getX(x);Yr.fromBufferAttribute(h,m),al(Yr,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,g=p;x<g;x++)Yr.fromBufferAttribute(h,x),al(Yr,x,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function al(i,t,e,n,r,s,a){const o=Wa.distanceSqToPoint(i);if(o<e){const c=new I;Wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ih extends Te{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dc extends Te{constructor(t,e,n=Kn,r,s,a,o=Ge,c=Ge,l,u=hr,h=1){if(u!==hr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pc extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ps extends Me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let x=0;const g=[],m=n/2;let f=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function _(){const E=new I,C=new I;let A=0;const R=(e-t)/n;for(let L=0;L<=s;L++){const b=[],S=L/s,P=S*(e-t)+t;for(let U=0;U<=r;U++){const B=U/r,H=B*c+o,z=Math.sin(H),X=Math.cos(H);C.x=P*z,C.y=-S*n+m,C.z=P*X,h.push(C.x,C.y,C.z),E.set(z,R,X).normalize(),d.push(E.x,E.y,E.z),p.push(B,1-S),b.push(x++)}g.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const S=g[b][L],P=g[b+1][L],U=g[b+1][L+1],B=g[b][L+1];(t>0||b!==0)&&(u.push(S,P,B),A+=3),(e>0||b!==s-1)&&(u.push(P,U,B),A+=3)}l.addGroup(f,A,0),f+=A}function M(E){const C=x,A=new lt,R=new I;let L=0;const b=E===!0?t:e,S=E===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),x++;const P=x;for(let U=0;U<=r;U++){const H=U/r*c+o,z=Math.cos(H),X=Math.sin(H);R.x=b*X,R.y=m*S,R.z=b*z,h.push(R.x,R.y,R.z),d.push(0,S,0),A.x=z*.5+.5,A.y=X*.5*S+.5,p.push(A.x,A.y),x++}for(let U=0;U<r;U++){const B=C+U,H=P+U;E===!0?u.push(H,H+1,B):u.push(H+1,H,B),L+=3}l.addGroup(f,L,E===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new lt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,r=[],s=[],a=[],o=new I,c=new ae;for(let p=0;p<=t;p++){const x=p/t;r[p]=this.getTangentAt(x,new I)}s[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Jt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,x))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Jt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let x=1;x<=t;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],p*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class po extends hn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new lt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dh extends po{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mo(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Jr=new I,ks=new mo,Ws=new mo,Xs=new mo;class xo extends hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Jr.subVectors(r[0],r[1]).add(r[0]),l=Jr);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Jr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),ks.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,x,g,m),Ws.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,x,g,m),Xs.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,x,g,m)}else this.curveType==="catmullrom"&&(ks.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ws.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Xs.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ks.calc(c),Ws.calc(c),Xs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ol(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Lh(i,t){const e=1-i;return e*e*t}function Uh(i,t){return 2*(1-i)*i*t}function Nh(i,t){return i*i*t}function or(i,t,e,n){return Lh(i,t)+Uh(i,e)+Nh(i,n)}function Fh(i,t){const e=1-i;return e*e*e*t}function Oh(i,t){const e=1-i;return 3*e*e*i*t}function Bh(i,t){return 3*(1-i)*i*i*t}function zh(i,t){return i*i*i*t}function lr(i,t,e,n,r){return Fh(i,t)+Oh(i,e)+Bh(i,n)+zh(i,r)}class mc extends hn{constructor(t=new lt,e=new lt,n=new lt,r=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,r.x,s.x,a.x,o.x),lr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vh extends hn{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,r.x,s.x,a.x,o.x),lr(t,r.y,s.y,a.y,o.y),lr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xc extends hn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends hn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(or(t,r.x,s.x,a.x),or(t,r.y,s.y,a.y),or(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(ol(o,c.x,l.x,u.x,h.x),ol(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new lt().fromArray(r))}return this}}var ls=Object.freeze({__proto__:null,ArcCurve:Dh,CatmullRomCurve3:xo,CubicBezierCurve:mc,CubicBezierCurve3:Vh,EllipseCurve:po,LineCurve:xc,LineCurve3:Gh,QuadraticBezierCurve:gc,QuadraticBezierCurve3:vc,SplineCurve:Mc});class Hh extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ls[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ls[r.type]().fromJSON(r))}return this}}class ll extends Hh{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new gc(this.currentPoint.clone(),new lt(t,e),new lt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new mc(this.currentPoint.clone(),new lt(t,e),new lt(n,r),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new po(t,e,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sc extends ll{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ll().fromJSON(r))}return this}}function kh(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=yc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=Qh(i,t,s,e)),i.length>80*e){o=i[0],c=i[1];let u=o,h=c;for(let d=e;d<r;d+=e){const p=i[d],x=i[d+1];p<o&&(o=p),x<c&&(c=x),p>u&&(u=p),x>h&&(h=x)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return xr(s,a,e,o,c,l,0),a}function yc(i,t,e,n,r){let s;if(r===af(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=cl(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=cl(a/n|0,i[a],i[a+1],s);return s&&Ni(s,s.next)&&(vr(s),s=s.next),s}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ni(e,e.next)||de(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&$h(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Xh(i,n,r,s):Wh(i)){t.push(c.i,i.i,l.i),vr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Yh($n(i),t),xr(i,t,e,n,r,s,2)):a===2&&Jh(i,t,e,n,r,s):xr($n(i),t,e,n,r,s,1);break}}}function Wh(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=Math.min(r,s,a),h=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l);let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=p&&nr(r,o,s,c,a,l,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Xh(i,t,e,n){const r=i.prev,s=i,a=i.next;if(de(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,p=Math.min(o,c,l),x=Math.min(u,h,d),g=Math.max(o,c,l),m=Math.max(u,h,d),f=Xa(p,x,t,e,n),_=Xa(g,m,t,e,n);let M=i.prevZ,E=i.nextZ;for(;M&&M.z>=f&&E&&E.z<=_;){if(M.x>=p&&M.x<=g&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&nr(o,u,c,h,l,d,M.x,M.y)&&de(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=p&&E.x<=g&&E.y>=x&&E.y<=m&&E!==r&&E!==a&&nr(o,u,c,h,l,d,E.x,E.y)&&de(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=g&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&nr(o,u,c,h,l,d,M.x,M.y)&&de(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=_;){if(E.x>=p&&E.x<=g&&E.y>=x&&E.y<=m&&E!==r&&E!==a&&nr(o,u,c,h,l,d,E.x,E.y)&&de(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Yh(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Ni(n,r)&&Ec(n,e,e.next,r)&&gr(n,r)&&gr(r,n)&&(t.push(n.i,e.i,r.i),vr(e),vr(e.next),e=i=r),e=e.next}while(e!==i);return $n(e)}function Jh(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nf(a,o)){let c=Ac(a,o);a=$n(a,a.next),c=$n(c,c.next),xr(a,t,e,n,r,s,0),xr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Qh(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=yc(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(ef(l))}r.sort(qh);for(let s=0;s<r.length;s++)e=Zh(r[s],e);return e}function qh(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Zh(i,t){const e=Kh(i,t);if(!e)return t;const n=Ac(e,i);return $n(n,n.next),$n(e,e.next)}function Kh(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Ni(i,e))return e;do{if(Ni(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&bc(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);gr(e,i)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&jh(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function jh(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function $h(i,t,e,n){let r=i;do r.z===0&&(r.z=Xa(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,tf(r)}function tf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function Xa(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ef(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bc(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function nr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&bc(i,t,e,n,r,s,a,o)}function nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rf(i,t)&&(gr(i,t)&&gr(t,i)&&sf(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Ni(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ni(i,t){return i.x===t.x&&i.y===t.y}function Ec(i,t,e,n){const r=qr(de(i,t,e)),s=qr(de(i,t,n)),a=qr(de(e,n,i)),o=qr(de(e,n,t));return!!(r!==s&&a!==o||r===0&&Qr(i,e,t)||s===0&&Qr(i,n,t)||a===0&&Qr(e,i,n)||o===0&&Qr(e,t,n))}function Qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function rf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ec(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gr(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function sf(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ac(i,t){const e=Ya(i.i,i.x,i.y),n=Ya(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function cl(i,t,e,n){const r=Ya(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function af(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class of{static triangulate(t,e,n=2){return kh(t,e,n)}}class Ti{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ti.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];ul(t),hl(n,t);let a=t.length;e.forEach(ul);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,hl(n,e[c]);const o=of.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function ul(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class go extends Me{constructor(t=new Sc([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:lf;let M,E=!1,C,A,R,L;f&&(M=f.getSpacedPoints(u),E=!0,d=!1,C=f.computeFrenetFrames(u,!1),A=new I,R=new I,L=new I),d||(m=0,p=0,x=0,g=0);const b=o.extractPoints(l);let S=b.shape;const P=b.holes;if(!Ti.isClockWise(S)){S=S.reverse();for(let tt=0,w=P.length;tt<w;tt++){const j=P[tt];Ti.isClockWise(j)&&(P[tt]=j.reverse())}}function B(tt){const j=10000000000000001e-36;let nt=tt[0];for(let ct=1;ct<=tt.length;ct++){const Y=ct%tt.length,it=tt[Y],rt=it.x-nt.x,vt=it.y-nt.y,T=rt*rt+vt*vt,v=Math.max(Math.abs(it.x),Math.abs(it.y),Math.abs(nt.x),Math.abs(nt.y)),F=j*v*v;if(T<=F){tt.splice(Y,1),ct--;continue}nt=it}}B(S),P.forEach(B);const H=P.length,z=S;for(let tt=0;tt<H;tt++){const w=P[tt];S=S.concat(w)}function X(tt,w,j){return w||fe("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(w,j)}const q=S.length;function k(tt,w,j){let nt,ct,Y;const it=tt.x-w.x,rt=tt.y-w.y,vt=j.x-tt.x,T=j.y-tt.y,v=it*it+rt*rt,F=it*T-rt*vt;if(Math.abs(F)>Number.EPSILON){const J=Math.sqrt(v),$=Math.sqrt(vt*vt+T*T),W=w.x-rt/J,wt=w.y+it/J,pt=j.x-T/$,Rt=j.y+vt/$,_t=((pt-W)*T-(Rt-wt)*vt)/(it*T-rt*vt);nt=W+it*_t-tt.x,ct=wt+rt*_t-tt.y;const et=nt*nt+ct*ct;if(et<=2)return new lt(nt,ct);Y=Math.sqrt(et/2)}else{let J=!1;it>Number.EPSILON?vt>Number.EPSILON&&(J=!0):it<-Number.EPSILON?vt<-Number.EPSILON&&(J=!0):Math.sign(rt)===Math.sign(T)&&(J=!0),J?(nt=-rt,ct=it,Y=Math.sqrt(v)):(nt=it,ct=rt,Y=Math.sqrt(v/2))}return new lt(nt/Y,ct/Y)}const st=[];for(let tt=0,w=z.length,j=w-1,nt=tt+1;tt<w;tt++,j++,nt++)j===w&&(j=0),nt===w&&(nt=0),st[tt]=k(z[tt],z[j],z[nt]);const ot=[];let yt,It=st.concat();for(let tt=0,w=H;tt<w;tt++){const j=P[tt];yt=[];for(let nt=0,ct=j.length,Y=ct-1,it=nt+1;nt<ct;nt++,Y++,it++)Y===ct&&(Y=0),it===ct&&(it=0),yt[nt]=k(j[nt],j[Y],j[it]);ot.push(yt),It=It.concat(yt)}let Dt;if(m===0)Dt=Ti.triangulateShape(z,P);else{const tt=[],w=[];for(let j=0;j<m;j++){const nt=j/m,ct=p*Math.cos(nt*Math.PI/2),Y=x*Math.sin(nt*Math.PI/2)+g;for(let it=0,rt=z.length;it<rt;it++){const vt=X(z[it],st[it],Y);Ct(vt.x,vt.y,-ct),nt===0&&tt.push(vt)}for(let it=0,rt=H;it<rt;it++){const vt=P[it];yt=ot[it];const T=[];for(let v=0,F=vt.length;v<F;v++){const J=X(vt[v],yt[v],Y);Ct(J.x,J.y,-ct),nt===0&&T.push(J)}nt===0&&w.push(T)}}Dt=Ti.triangulateShape(tt,w)}const Bt=Dt.length,qt=x+g;for(let tt=0;tt<q;tt++){const w=d?X(S[tt],It[tt],qt):S[tt];E?(R.copy(C.normals[0]).multiplyScalar(w.x),A.copy(C.binormals[0]).multiplyScalar(w.y),L.copy(M[0]).add(R).add(A),Ct(L.x,L.y,L.z)):Ct(w.x,w.y,0)}for(let tt=1;tt<=u;tt++)for(let w=0;w<q;w++){const j=d?X(S[w],It[w],qt):S[w];E?(R.copy(C.normals[tt]).multiplyScalar(j.x),A.copy(C.binormals[tt]).multiplyScalar(j.y),L.copy(M[tt]).add(R).add(A),Ct(L.x,L.y,L.z)):Ct(j.x,j.y,h/u*tt)}for(let tt=m-1;tt>=0;tt--){const w=tt/m,j=p*Math.cos(w*Math.PI/2),nt=x*Math.sin(w*Math.PI/2)+g;for(let ct=0,Y=z.length;ct<Y;ct++){const it=X(z[ct],st[ct],nt);Ct(it.x,it.y,h+j)}for(let ct=0,Y=P.length;ct<Y;ct++){const it=P[ct];yt=ot[ct];for(let rt=0,vt=it.length;rt<vt;rt++){const T=X(it[rt],yt[rt],nt);E?Ct(T.x,T.y+M[u-1].y,M[u-1].x+j):Ct(T.x,T.y,h+j)}}}Q(),K();function Q(){const tt=r.length/3;if(d){let w=0,j=q*w;for(let nt=0;nt<Bt;nt++){const ct=Dt[nt];Et(ct[2]+j,ct[1]+j,ct[0]+j)}w=u+m*2,j=q*w;for(let nt=0;nt<Bt;nt++){const ct=Dt[nt];Et(ct[0]+j,ct[1]+j,ct[2]+j)}}else{for(let w=0;w<Bt;w++){const j=Dt[w];Et(j[2],j[1],j[0])}for(let w=0;w<Bt;w++){const j=Dt[w];Et(j[0]+q*u,j[1]+q*u,j[2]+q*u)}}n.addGroup(tt,r.length/3-tt,0)}function K(){const tt=r.length/3;let w=0;gt(z,w),w+=z.length;for(let j=0,nt=P.length;j<nt;j++){const ct=P[j];gt(ct,w),w+=ct.length}n.addGroup(tt,r.length/3-tt,1)}function gt(tt,w){let j=tt.length;for(;--j>=0;){const nt=j;let ct=j-1;ct<0&&(ct=tt.length-1);for(let Y=0,it=u+m*2;Y<it;Y++){const rt=q*Y,vt=q*(Y+1),T=w+nt+rt,v=w+ct+rt,F=w+ct+vt,J=w+nt+vt;Wt(T,v,F,J)}}}function Ct(tt,w,j){c.push(tt),c.push(w),c.push(j)}function Et(tt,w,j){te(tt),te(w),te(j);const nt=r.length/3,ct=_.generateTopUV(n,r,nt-3,nt-2,nt-1);Ut(ct[0]),Ut(ct[1]),Ut(ct[2])}function Wt(tt,w,j,nt){te(tt),te(w),te(nt),te(w),te(j),te(nt);const ct=r.length/3,Y=_.generateSideWallUV(n,r,ct-6,ct-3,ct-2,ct-1);Ut(Y[0]),Ut(Y[1]),Ut(Y[3]),Ut(Y[1]),Ut(Y[2]),Ut(Y[3])}function te(tt){r.push(c[tt*3+0]),r.push(c[tt*3+1]),r.push(c[tt*3+2])}function Ut(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cf(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ls[r.type]().fromJSON(r)),new go(n,t.options)}}const lf={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new lt(s,a),new lt(o,c),new lt(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[r*3],p=t[r*3+1],x=t[r*3+2],g=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new lt(a,1-c),new lt(l,1-h),new lt(d,1-x),new lt(g,1-f)]:[new lt(o,1-c),new lt(u,1-h),new lt(p,1-x),new lt(m,1-f)]}};function cf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sr extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=t/o,d=e/c,p=[],x=[],g=[],m=[];for(let f=0;f<u;f++){const _=f*d-a;for(let M=0;M<l;M++){const E=M*h-s;x.push(E,-_,0),g.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const M=_+l*f,E=_+l*(f+1),C=_+1+l*(f+1),A=_+1+l*f;p.push(M,E,A),p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.width,t.height,t.widthSegments,t.heightSegments)}}class qn extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,d=new I,p=[],x=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],M=f/n;let E=0;f===0&&a===0?E=.5/e:f===n&&c===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){const A=C/e;h.x=-t*Math.cos(r+A*s)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(r+A*s)*Math.sin(a+M*o),x.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(A+E,1-M),_.push(l++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const M=u[f][_+1],E=u[f][_],C=u[f+1][_],A=u[f+1][_+1];(f!==0||a>0)&&p.push(M,E,A),(f!==n-1||c<Math.PI)&&p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vo extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let x=0;x<=r;x++){const g=x/r*s,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(g),h.y=(t+e*Math.cos(m))*Math.sin(g),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(x/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=r;x++){const g=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,f=(r+1)*(p-1)+x,_=(r+1)*p+x;a.push(g,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mo extends Me{constructor(t=new vc(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new lt;let u=new I;const h=[],d=[],p=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function g(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),_(),f()}function m(M){u=t.getPointAt(M/e,u);const E=a.normals[M],C=a.binormals[M];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,L=Math.sin(R),b=-Math.cos(R);c.x=b*E.x+L*C.x,c.y=b*E.y+L*C.y,c.z=b*E.z+L*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=e;M++)for(let E=1;E<=r;E++){const C=(r+1)*(M-1)+(E-1),A=(r+1)*M+(E-1),R=(r+1)*M+E,L=(r+1)*(M-1)+E;x.push(C,A,L),x.push(A,R,L)}}function _(){for(let M=0;M<=e;M++)for(let E=0;E<=r;E++)l.x=M/e,l.y=E/r,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mo(new ls[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ti extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uf extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hf extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ff extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ys={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class df{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pf=new df;class So{constructor(t){this.manager=t!==void 0?t:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi=new WeakMap;class mf extends So{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ys.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=bi.get(a);h===void 0&&(h=[],bi.set(a,h)),h.push({onLoad:e,onError:r})}return a}const o=dr("img");function c(){u(),e&&e(this);const h=bi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}bi.delete(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),Ys.remove(`image:${t}`);const d=bi.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}bi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ys.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class xf extends So{constructor(t){super(t)}load(t,e,n,r){const s=new Te,a=new mf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class yo extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gf extends yo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Js=new ae,fl=new I,dl=new I;class Tc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(fl),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Js,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Js)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pl=new ae,$i=new I,Qs=new I;class vf extends Tc{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$i.setFromMatrixPosition(t.matrixWorld),n.position.copy($i),Qs.copy(n.position),Qs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qs),n.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,n.coordinateSystem,n.reversedDepth)}}class _c extends yo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wc extends oc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mf extends Tc{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ml extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sf extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function xl(i,t,e,n){const r=yf(n);switch(e){case Zl:return i*t;case no:return i*t/r.components*r.byteLength;case io:return i*t/r.components*r.byteLength;case ro:return i*t*2/r.components*r.byteLength;case so:return i*t*2/r.components*r.byteLength;case Kl:return i*t*3/r.components*r.byteLength;case tn:return i*t*4/r.components*r.byteLength;case ao:return i*t*4/r.components*r.byteLength;case jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ts:case es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case ga:return Math.max(i,16)*Math.max(t,8)/4;case pa:case xa:return Math.max(i,8)*Math.max(t,8)/2;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yf(i){switch(i){case cn:case Yl:return{byteLength:1,components:1};case cr:case Jl:case zi:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case Kn:case $a:case an:return{byteLength:4,components:1};case Ql:case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function bf(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],g=h[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const g=h[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Ef,alphahash_pars_fragment:Af,alphamap_fragment:Tf,alphamap_pars_fragment:_f,alphatest_fragment:wf,alphatest_pars_fragment:Cf,aomap_fragment:Rf,aomap_pars_fragment:Pf,batching_pars_vertex:If,batching_vertex:Df,begin_vertex:Lf,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Gf,color_fragment:Hf,color_pars_fragment:kf,color_pars_vertex:Wf,color_vertex:Xf,common:Yf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:qf,displacementmap_vertex:Zf,emissivemap_fragment:Kf,emissivemap_pars_fragment:jf,colorspace_fragment:$f,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:rd,envmap_physical_pars_fragment:md,envmap_vertex:sd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:ld,fog_pars_fragment:cd,gradientmap_pars_fragment:ud,lightmap_pars_fragment:hd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:dd,lights_pars_begin:pd,lights_toon_fragment:xd,lights_toon_pars_fragment:gd,lights_phong_fragment:vd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:yd,lights_fragment_begin:bd,lights_fragment_maps:Ed,lights_fragment_end:Ad,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Id,map_particle_pars_fragment:Dd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:Bd,morphtarget_vertex:zd,normal_fragment_begin:Vd,normal_fragment_maps:Gd,normal_pars_fragment:Hd,normal_pars_vertex:kd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:qd,opaque_fragment:Zd,packing:Kd,premultiplied_alpha_fragment:jd,project_vertex:$d,dithering_fragment:tp,dithering_pars_fragment:ep,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:sp,shadowmap_vertex:ap,shadowmask_pars_fragment:op,skinbase_vertex:lp,skinning_pars_vertex:cp,skinning_vertex:up,skinnormal_vertex:hp,specularmap_fragment:fp,specularmap_pars_fragment:dp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:xp,transmission_pars_fragment:gp,uv_pars_fragment:vp,uv_pars_vertex:Mp,uv_vertex:Sp,worldpos_vertex:yp,background_vert:bp,background_frag:Ep,backgroundCube_vert:Ap,backgroundCube_frag:Tp,cube_vert:_p,cube_frag:wp,depth_vert:Cp,depth_frag:Rp,distanceRGBA_vert:Pp,distanceRGBA_frag:Ip,equirect_vert:Dp,equirect_frag:Lp,linedashed_vert:Up,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:Bp,meshlambert_frag:zp,meshmatcap_vert:Vp,meshmatcap_frag:Gp,meshnormal_vert:Hp,meshnormal_frag:kp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:Yp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:qp,points_vert:Zp,points_frag:Kp,shadow_vert:jp,shadow_frag:$p,sprite_vert:t0,sprite_frag:e0},mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},sn={basic:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([mt.lights,mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};sn.physical={uniforms:Pe([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Zr={r:0,b:0,g:0},Hn=new nn,n0=new ae;function i0(i,t,e,n,r,s,a){const o=new Yt(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function x(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function g(M){let E=!1;const C=x(M);C===null?f(o,c):C&&C.isColor&&(f(C,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,E){const C=x(E);C&&(C.isCubeTexture||C.mapping===fs)?(u===void 0&&(u=new Zt(new en(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Ui(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hn.copy(E.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(Hn)),u.material.toneMapped=jt.getTransfer(C.colorSpace)!==re,(h!==C||d!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Zt(new Sr(2,2),new Ne({name:"BackgroundMaterial",uniforms:Ui(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=jt.getTransfer(C.colorSpace)!==re,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,E){M.getRGB(Zr,ac(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,E,a)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:g,addToRenderList:m,dispose:_}}function r0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,P,U,B,H){let z=!1;const X=h(B,U,P);s!==X&&(s=X,l(s.object)),z=p(S,B,U,H),z&&x(S,B,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(S,P,U,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,U){const B=U.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let z=H[P.id];z===void 0&&(z={},H[P.id]=z);let X=z[B];return X===void 0&&(X=d(c()),z[B]=X),X}function d(S){const P=[],U=[],B=[];for(let H=0;H<e;H++)P[H]=0,U[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,P,U,B){const H=s.attributes,z=P.attributes;let X=0;const q=U.getAttributes();for(const k in q)if(q[k].location>=0){const ot=H[k];let yt=z[k];if(yt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),ot===void 0||ot.attribute!==yt||yt&&ot.data!==yt.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function x(S,P,U,B){const H={},z=P.attributes;let X=0;const q=U.getAttributes();for(const k in q)if(q[k].location>=0){let ot=z[k];ot===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor));const yt={};yt.attribute=ot,ot&&ot.data&&(yt.data=ot.data),H[k]=yt,X++}s.attributes=H,s.attributesNum=X,s.index=B}function g(){const S=s.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const U=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;U[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),H[S]!==P&&(i.vertexAttribDivisor(S,P),H[S]=P)}function _(){const S=s.newAttributes,P=s.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function M(S,P,U,B,H,z,X){X===!0?i.vertexAttribIPointer(S,P,U,H,z):i.vertexAttribPointer(S,P,U,B,H,z)}function E(S,P,U,B){g();const H=B.attributes,z=U.getAttributes(),X=P.defaultAttributeValues;for(const q in z){const k=z[q];if(k.location>=0){let st=H[q];if(st===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ot=st.normalized,yt=st.itemSize,It=t.get(st);if(It===void 0)continue;const Dt=It.buffer,Bt=It.type,qt=It.bytesPerElement,Q=Bt===i.INT||Bt===i.UNSIGNED_INT||st.gpuType===$a;if(st.isInterleavedBufferAttribute){const K=st.data,gt=K.stride,Ct=st.offset;if(K.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)f(k.location+Et,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Et=0;Et<k.locationSize;Et++)M(k.location+Et,yt/k.locationSize,Bt,ot,gt*qt,(Ct+yt/k.locationSize*Et)*qt,Q)}else{if(st.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)f(k.location+K,st.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let K=0;K<k.locationSize;K++)M(k.location+K,yt/k.locationSize,Bt,ot,yt*qt,yt/k.locationSize*K*qt,Q)}}else if(X!==void 0){const ot=X[q];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(k.location,ot);break;case 3:i.vertexAttrib3fv(k.location,ot);break;case 4:i.vertexAttrib4fv(k.location,ot);break;default:i.vertexAttrib1fv(k.location,ot)}}}}_()}function C(){L();for(const S in n){const P=n[S];for(const U in P){const B=P[U];for(const H in B)u(B[H].object),delete B[H];delete P[U]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const U in P){const B=P[U];for(const H in B)u(B[H].object),delete B[H];delete P[U]}delete n[S.id]}function R(S){for(const P in n){const U=n[P];if(U[S.id]===void 0)continue;const B=U[S.id];for(const H in B)u(B[H].object),delete B[H];delete U[S.id]}}function L(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function s0(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=u[g]*d[g];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function a0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ht("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:C,maxSamples:A}}function o0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Wn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{const _=s?0:n,M=_*4;let E=f.clippingState||null;c.value=E,E=u(x,d,M,p);for(let C=0;C!==M;++C)E[C]=e[C];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,x){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const f=p+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,E=p;M!==g;++M,E+=4)a.copy(h[M]).applyMatrix4(_,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function l0(i){let t=new WeakMap;function e(a,o){return o===ua?a.mapping=Ii:o===ha&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===ha)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Eh(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const In=4,gl=[.125,.215,.35,.446,.526,.582],Yn=20,c0=256,tr=new wc,vl=new Yt;let qs=null,Zs=0,Ks=0,js=!1;const u0=new I;class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=u0}=s;qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qs,Zs,Ks),this._renderer.xr.enabled=js,t.scissorTest=!1,Ei(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:zi,format:tn,colorSpace:Li,depthBuffer:!1},r=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=h0(s)),this._blurMaterial=d0(s,t,e),this._ggxMaterial=f0(s,t,e)}return r}_compileMaterial(t){const e=new Zt(new Me,t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,r,s){const c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(vl),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new en,new uo({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,f=!0):(m.color.copy(vl),f=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):E===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const C=this._cubeSize;Ei(r,E*C,M>2?C:0,C,C),h.setRenderTarget(r),f&&h.render(g,c),h.render(t,c)}h.toneMapping=p,h.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ii||t.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ei(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,p=h*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-In?n-x+In:0),f=4*(this._cubeSize-g);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=x-e,Ei(s,m,f,3*g,2*g),r.setRenderTarget(s),r.render(o,tr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,Ei(t,m,f,3*g,2*g),r.setRenderTarget(t),r.render(o,tr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&fe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):Yn;m>Yn&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let _=0;for(let R=0;R<Yn;++R){const L=R/g,b=Math.exp(-L*L/2);f.push(b),R===0?_+=b:R<m&&(_+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-n;const E=this._sizeLods[r],C=3*E*(r>M-In?r-M+In:0),A=4*(this._cubeSize-E);Ei(e,C,A,3*E,2*E),c.setRenderTarget(e),c.render(h,tr)}}function h0(i){const t=[],e=[],n=[];let r=i;const s=i-In+1+gl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-In?c=gl[a-i+In-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),M=new Float32Array(m*x*p),E=new Float32Array(f*x*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,L=A>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];_.set(b,g*x*A),M.set(d,m*x*A);const S=[A,A,A,A,A,A];E.set(S,f*x*A)}const C=new Me;C.setAttribute("position",new ce(_,g)),C.setAttribute("uv",new ce(M,m)),C.setAttribute("faceIndex",new ce(E,f)),n.push(new Zt(C,null)),r>In&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ml(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ei(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function f0(i,t,e){return new Ne({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function d0(i,t,e){const n=new Float32Array(Yn),r=new I(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Sl(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function yl(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ua||c===ha,u=c===Ii||c===Di;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ja(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ja(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&pr("WebGLRenderer: "+n+" extension not supported."),r}}}function x0(i,t,e,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,x=h.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let M=0,E=_.length;M<E;M+=3){const C=_[M+0],A=_[M+1],R=_[M+2];d.push(C,A,A,R,R,C)}}else if(x!==void 0){const _=x.array;g=x.version;for(let M=0,E=_.length/3-1;M<E;M+=3){const C=M+0,A=M+1,R=M+2;d.push(C,A,A,R,R,C)}}else return;const m=new($l(d)?sc:rc)(d,1);m.version=g;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function g0(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*a,x),e.update(p,n,x))}function u(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,n,1)}function h(d,p,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,x);let f=0;for(let _=0;_<x;_++)f+=p[_]*g[_];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:fe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function M0(i,t,e){const n=new WeakMap,r=new se;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*A*4*h),L=new tc(R,C,A,h);L.type=an,L.needsUpdate=!0;const b=E*4;for(let P=0;P<h;P++){const U=f[P],B=_[P],H=M[P],z=C*A*4*P;for(let X=0;X<U.count;X++){const q=X*b;x===!0&&(r.fromBufferAttribute(U,X),R[z+q+0]=r.x,R[z+q+1]=r.y,R[z+q+2]=r.z,R[z+q+3]=0),g===!0&&(r.fromBufferAttribute(B,X),R[z+q+4]=r.x,R[z+q+5]=r.y,R[z+q+6]=r.z,R[z+q+7]=0),m===!0&&(r.fromBufferAttribute(H,X),R[z+q+8]=r.x,R[z+q+9]=r.y,R[z+q+10]=r.z,R[z+q+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new lt(C,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const g=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function S0(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Rc=new Te,bl=new dc(1,1),Pc=new tc,Ic=new ah,Dc=new lc,El=[],Al=[],Tl=new Float32Array(16),_l=new Float32Array(9),wl=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=El[r];if(s===void 0&&(s=new Float32Array(r),El[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xs(i,t){let e=Al[t];e===void 0&&(e=new Int32Array(t),Al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),be(e,n)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),be(e,n)}}function w0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),be(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function F0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=jl,s=bl):s=Rc,e.setTexture2D(t||s,r)}function O0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ic,r)}function B0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Dc,r)}function z0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Pc,r)}function V0(i){switch(i){case 5126:return y0;case 35664:return b0;case 35665:return E0;case 35666:return A0;case 35674:return T0;case 35675:return _0;case 35676:return w0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return L0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(i,t){i.uniform1fv(this.addr,t)}function H0(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function k0(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q0(i,t){i.uniform1iv(this.addr,t)}function q0(i,t){i.uniform2iv(this.addr,t)}function Z0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function j0(i,t){i.uniform1uiv(this.addr,t)}function $0(i,t){i.uniform2uiv(this.addr,t)}function tm(i,t){i.uniform3uiv(this.addr,t)}function em(i,t){i.uniform4uiv(this.addr,t)}function nm(i,t,e){const n=this.cache,r=t.length,s=xs(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Rc,s[a])}function im(i,t,e){const n=this.cache,r=t.length,s=xs(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ic,s[a])}function rm(i,t,e){const n=this.cache,r=t.length,s=xs(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Dc,s[a])}function sm(i,t,e){const n=this.cache,r=t.length,s=xs(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Pc,s[a])}function am(i){switch(i){case 5126:return G0;case 35664:return H0;case 35665:return k0;case 35666:return W0;case 35674:return X0;case 35675:return Y0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return q0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return $0;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function um(i,t,e){const n=i.name,r=n.length;for($s.lastIndex=0;;){const s=$s.exec(n),a=$s.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Cl(e,l===void 0?new om(o,i,t):new lm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new cm(o),Cl(e,h)),e=h}}}class ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);um(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hm=37297;let fm=0;function dm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pl=new kt;function pm(i){jt._getMatrix(Pl,jt.workingColorSpace,i);const t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case rs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+dm(i.getShaderSource(t),o)}else return s}function mm(i,t){const e=pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xm(i,t){let e;switch(t){case Mu:e="Linear";break;case Su:e="Reinhard";break;case yu:e="Cineon";break;case Wl:e="ACESFilmic";break;case Eu:e="AgX";break;case Au:e="Neutral";break;case bu:e="Custom";break;default:Ht("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new I;function gm(){jt.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Mm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function Dl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(ym,Em)}const bm=new Map;function Em(i,t){let e=Xt[t];if(e===void 0){const n=bm.get(t);if(n!==void 0)e=Xt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(Am,Tm)}function Tm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_m(e),l=wm(e),u=Cm(e),h=Rm(e),d=Pm(e),p=vm(e),x=Mm(s),g=r.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(m=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=Qa(a),a=Dl(a,e),a=Ll(a,e),o=Qa(o),o=Dl(o,e),o=Ll(o,e),a=Ul(a),o=Ul(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=_+m+a,E=_+f+o,C=Rl(r,r.VERTEX_SHADER,M),A=Rl(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,A),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(A)||"",z=U.trim(),X=B.trim(),q=H.trim();let k=!0,st=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,A);else{const ot=Il(r,C,"vertex"),yt=Il(r,A,"fragment");fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ot+`
`+yt)}else z!==""?Ht("WebGLProgram: Program Info Log:",z):(X===""||q==="")&&(st=!1);st&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(C),r.deleteShader(A),L=new ns(r,g),b=Sm(r,g)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,hm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let Dm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Um(t),e.set(t,n)),n}}class Um{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Nm(i,t,e,n,r,s,a){const o=new nc,c=new Lm,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,U,B){const H=U.fog,z=B.geometry,X=b.isMeshStandardMaterial?U.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),k=q&&q.mapping===fs?q.image.height:null,st=x[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Ht("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=ot!==void 0?ot.length:0;let It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let Dt,Bt,qt,Q;if(st){const ne=sn[st];Dt=ne.vertexShader,Bt=ne.fragmentShader}else Dt=b.vertexShader,Bt=b.fragmentShader,c.update(b),qt=c.getVertexShaderID(b),Q=c.getFragmentShaderID(b);const K=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,Et=B.isBatchedMesh===!0,Wt=!!b.map,te=!!b.matcap,Ut=!!q,tt=!!b.aoMap,w=!!b.lightMap,j=!!b.bumpMap,nt=!!b.normalMap,ct=!!b.displacementMap,Y=!!b.emissiveMap,it=!!b.metalnessMap,rt=!!b.roughnessMap,vt=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,J=b.sheen>0,$=b.transmission>0,W=vt&&!!b.anisotropyMap,wt=T&&!!b.clearcoatMap,pt=T&&!!b.clearcoatNormalMap,Rt=T&&!!b.clearcoatRoughnessMap,_t=F&&!!b.iridescenceMap,et=F&&!!b.iridescenceThicknessMap,ht=J&&!!b.sheenColorMap,Ot=J&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,St=!!b.specularColorMap,Vt=!!b.specularIntensityMap,D=$&&!!b.transmissionMap,xt=$&&!!b.thicknessMap,ft=!!b.gradientMap,dt=!!b.alphaMap,at=b.alphaTest>0,Z=!!b.alphaHash,At=!!b.extensions;let Gt=Dn;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const le={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:Bt,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Et,batchingColor:Et&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Li,alphaToCoverage:!!b.alphaToCoverage,map:Wt,matcap:te,envMap:Ut,envMapMode:Ut&&q.mapping,envMapCubeUVHeight:k,aoMap:tt,lightMap:w,bumpMap:j,normalMap:nt,displacementMap:d&&ct,emissiveMap:Y,normalMapObjectSpace:nt&&b.normalMapType===Cu,normalMapTangentSpace:nt&&b.normalMapType===oo,metalnessMap:it,roughnessMap:rt,anisotropy:vt,anisotropyMap:W,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:F,iridescenceMap:_t,iridescenceThicknessMap:et,sheen:J,sheenColorMap:ht,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:St,specularIntensityMap:Vt,transmission:$,transmissionMap:D,thicknessMap:xt,gradientMap:ft,opaque:b.transparent===!1&&b.blending===_i&&b.alphaToCoverage===!1,alphaMap:dt,alphaTest:at,alphaHash:Z,combine:b.combine,mapUv:Wt&&g(b.map.channel),aoMapUv:tt&&g(b.aoMap.channel),lightMapUv:w&&g(b.lightMap.channel),bumpMapUv:j&&g(b.bumpMap.channel),normalMapUv:nt&&g(b.normalMap.channel),displacementMapUv:ct&&g(b.displacementMap.channel),emissiveMapUv:Y&&g(b.emissiveMap.channel),metalnessMapUv:it&&g(b.metalnessMap.channel),roughnessMapUv:rt&&g(b.roughnessMap.channel),anisotropyMapUv:W&&g(b.anisotropyMap.channel),clearcoatMapUv:wt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&g(b.sheenRoughnessMap.channel),specularMapUv:Nt&&g(b.specularMap.channel),specularColorMapUv:St&&g(b.specularColorMap.channel),specularIntensityMapUv:Vt&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:xt&&g(b.thicknessMap.channel),alphaMapUv:dt&&g(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(nt||vt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Wt||dt),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:It,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:Y&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===je,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:At&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const S=x[b.type];let P;if(S){const U=sn[S];P=Mh.clone(U.uniforms)}else P=b.uniforms;return P}function C(b,S){let P;for(let U=0,B=u.length;U<B;U++){const H=u[U];if(H.cacheKey===S){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Im(i,S,b,s),u.push(P)),P}function A(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function Fm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,d,p,x,g,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=g,f.group=m),t++,f}function o(h,d,p,x,g,m){const f=a(h,d,p,x,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(h,d,p,x,g,m){const f=a(h,d,p,x,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Om),n.length>1&&n.sort(d||Fl),r.length>1&&r.sort(d||Fl)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Bm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ol,i.set(n,[a])):r>=s.length?(a=new Ol,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){const t=new zm,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new ae,a=new ae;function o(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,g=0,m=0,f=0,_=0,M=0,E=0,C=0,A=0,R=0;l.sort(Hm);for(let b=0,S=l.length;b<S;b++){const P=l[b],U=P.color,B=P.intensity,H=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*B,h+=U.g*B,d+=U.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,k=e.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=P.shadow.matrix,_++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;const q=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=z,E++}g++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,k=e.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=P.shadow.matrix,M++}n.point[x]=X,x++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==M||L.numSpotShadows!==E||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=p,L.pointLength=x,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=M,L.numSpotShadows=E,L.numSpotMaps=C,L.numLightProbes=R,n.version=Gm++)}function c(l,u){let h=0,d=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let f=0,_=l.length;f<_;f++){const M=l[f];if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Bl(i){const t=new km(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Wm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Bl(i),t.set(r,[o])):s>=a.length?(o=new Bl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jm(i,t,e){let n=new fo;const r=new lt,s=new lt,a=new se,o=new hf({depthPacking:wu}),c=new ff,l={},u=e.maxTextureSize,h={[Ln]:Ie,[Ie]:Ln,[je]:je},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Me;x.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Zt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=f!==Mn&&this.type===Mn,H=f===Mn&&this.type!==Mn;for(let z=0,X=A.length;z<X;z++){const q=A[z],k=q.shadow;if(k===void 0){Ht("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const st=k.getFrameExtents();if(r.multiply(st),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/st.x),r.x=s.x*st.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/st.y),r.y=s.y*st.y,k.mapSize.y=s.y)),k.map===null||B===!0||H===!0){const yt=this.type!==Mn?{minFilter:Ge,magFilter:Ge}:{};k.map!==null&&k.map.dispose(),k.map=new jn(r.x,r.y,yt),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ot=k.getViewportCount();for(let yt=0;yt<ot;yt++){const It=k.getViewport(yt);a.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),U.viewport(a),k.updateMatrices(q,yt),n=k.getFrustum(),E(R,L,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Mn&&_(k,L),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function _(A,R){const L=t.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,p,g,null)}function M(A,R,L,b){let S=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=S.uuid,B=R.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let z=H[B];z===void 0&&(z=S.clone(),H[B]=z,R.addEventListener("dispose",C)),S=z}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Mn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=L}return S}function E(A,R,L,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),H=A.material;if(Array.isArray(H)){const z=B.groups;for(let X=0,q=z.length;X<q;X++){const k=z[X],st=H[k.materialIndex];if(st&&st.visible){const ot=M(A,st,b,S);A.onBeforeShadow(i,A,R,L,B,ot,k),i.renderBufferDirect(L,null,B,ot,A,k),A.onAfterShadow(i,A,R,L,B,ot,k)}}}else if(H.visible){const z=M(A,H,b,S);A.onBeforeShadow(i,A,R,L,B,z,null),i.renderBufferDirect(L,null,B,z,A,null),A.onAfterShadow(i,A,R,L,B,z,null)}}const U=A.children;for(let B=0,H=U.length;B<H;B++)E(U[B],R,L,b,S)}function C(A){A.target.removeEventListener("dispose",C);for(const L in l){const b=l[L],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Qm={[ia]:ra,[sa]:la,[aa]:ca,[Pi]:oa,[ra]:ia,[la]:sa,[ca]:aa,[oa]:Pi};function qm(i,t){function e(){let D=!1;const xt=new se;let ft=null;const dt=new se(0,0,0,0);return{setMask:function(at){ft!==at&&!D&&(i.colorMask(at,at,at,at),ft=at)},setLocked:function(at){D=at},setClear:function(at,Z,At,Gt,le){le===!0&&(at*=Gt,Z*=Gt,At*=Gt),xt.set(at,Z,At,Gt),dt.equals(xt)===!1&&(i.clearColor(at,Z,At,Gt),dt.copy(xt))},reset:function(){D=!1,ft=null,dt.set(-1,0,0,0)}}}function n(){let D=!1,xt=!1,ft=null,dt=null,at=null;return{setReversed:function(Z){if(xt!==Z){const At=t.get("EXT_clip_control");Z?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),xt=Z;const Gt=at;at=null,this.setClear(Gt)}},getReversed:function(){return xt},setTest:function(Z){Z?K(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Z){ft!==Z&&!D&&(i.depthMask(Z),ft=Z)},setFunc:function(Z){if(xt&&(Z=Qm[Z]),dt!==Z){switch(Z){case ia:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){at!==Z&&(xt&&(Z=1-Z),i.clearDepth(Z),at=Z)},reset:function(){D=!1,ft=null,dt=null,at=null,xt=!1}}}function r(){let D=!1,xt=null,ft=null,dt=null,at=null,Z=null,At=null,Gt=null,le=null;return{setTest:function(ne){D||(ne?K(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ne){xt!==ne&&!D&&(i.stencilMask(ne),xt=ne)},setFunc:function(ne,rn,Je){(ft!==ne||dt!==rn||at!==Je)&&(i.stencilFunc(ne,rn,Je),ft=ne,dt=rn,at=Je)},setOp:function(ne,rn,Je){(Z!==ne||At!==rn||Gt!==Je)&&(i.stencilOp(ne,rn,Je),Z=ne,At=rn,Gt=Je)},setLocked:function(ne){D=ne},setClear:function(ne){le!==ne&&(i.clearStencil(ne),le=ne)},reset:function(){D=!1,xt=null,ft=null,dt=null,at=null,Z=null,At=null,Gt=null,le=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,_=null,M=null,E=null,C=null,A=null,R=new Yt(0,0,0),L=0,b=!1,S=null,P=null,U=null,B=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=q>=2);let st=null,ot={};const yt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Dt=new se().fromArray(yt),Bt=new se().fromArray(It);function qt(D,xt,ft,dt){const at=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ft;At++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(xt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Z}const Q={};Q[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Pi),j(!1),nt(Io),K(i.CULL_FACE),tt(bn);function K(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function gt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ct(D,xt){return h[D]!==xt?(i.bindFramebuffer(D,xt),h[D]=xt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Et(D,xt){let ft=p,dt=!1;if(D){ft=d.get(xt),ft===void 0&&(ft=[],d.set(xt,ft));const at=D.textures;if(ft.length!==at.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,At=at.length;Z<At;Z++)ft[Z]=i.COLOR_ATTACHMENT0+Z;ft.length=at.length,dt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,dt=!0);dt&&i.drawBuffers(ft)}function Wt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const te={[Xn]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};te[nu]=i.MIN,te[iu]=i.MAX;const Ut={[ru]:i.ZERO,[su]:i.ONE,[au]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[hu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(D,xt,ft,dt,at,Z,At,Gt,le,ne){if(D===bn){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),D!==$c){if(D!==m||ne!==b){if((f!==Xn||E!==Xn)&&(i.blendEquation(i.FUNC_ADD),f=Xn,E=Xn),ne)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Do:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",D);break}_=null,M=null,C=null,A=null,R.set(0,0,0),L=0,m=D,b=ne}return}at=at||xt,Z=Z||ft,At=At||dt,(xt!==f||at!==E)&&(i.blendEquationSeparate(te[xt],te[at]),f=xt,E=at),(ft!==_||dt!==M||Z!==C||At!==A)&&(i.blendFuncSeparate(Ut[ft],Ut[dt],Ut[Z],Ut[At]),_=ft,M=dt,C=Z,A=At),(Gt.equals(R)===!1||le!==L)&&(i.blendColor(Gt.r,Gt.g,Gt.b,le),R.copy(Gt),L=le),m=D,b=!1}function w(D,xt){D.side===je?gt(i.CULL_FACE):K(i.CULL_FACE);let ft=D.side===Ie;xt&&(ft=!ft),j(ft),D.blending===_i&&D.transparent===!1?tt(bn):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Y(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function nt(D){D!==Zc?(K(i.CULL_FACE),D!==P&&(D===Io?i.cullFace(i.BACK):D===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),P=D}function ct(D){D!==U&&(X&&i.lineWidth(D),U=D)}function Y(D,xt,ft){D?(K(i.POLYGON_OFFSET_FILL),(B!==xt||H!==ft)&&(i.polygonOffset(xt,ft),B=xt,H=ft)):gt(i.POLYGON_OFFSET_FILL)}function it(D){D?K(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function rt(D){D===void 0&&(D=i.TEXTURE0+z-1),st!==D&&(i.activeTexture(D),st=D)}function vt(D,xt,ft){ft===void 0&&(st===null?ft=i.TEXTURE0+z-1:ft=st);let dt=ot[ft];dt===void 0&&(dt={type:void 0,texture:void 0},ot[ft]=dt),(dt.type!==D||dt.texture!==xt)&&(st!==ft&&(i.activeTexture(ft),st=ft),i.bindTexture(D,xt||Q[D]),dt.type=D,dt.texture=xt)}function T(){const D=ot[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{i.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function pt(){try{i.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Rt(){try{i.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function _t(){try{i.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function et(){try{i.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ht(D){Dt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Dt.copy(D))}function Ot(D){Bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function Nt(D,xt){let ft=l.get(xt);ft===void 0&&(ft=new WeakMap,l.set(xt,ft));let dt=ft.get(D);dt===void 0&&(dt=i.getUniformBlockIndex(xt,D.name),ft.set(D,dt))}function St(D,xt){const dt=l.get(xt).get(D);c.get(xt)!==dt&&(i.uniformBlockBinding(xt,dt,D.__bindingPointIndex),c.set(xt,dt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,ot={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,_=null,M=null,E=null,C=null,A=null,R=new Yt(0,0,0),L=0,b=!1,S=null,P=null,U=null,B=null,H=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:gt,bindFramebuffer:Ct,drawBuffers:Et,useProgram:Wt,setBlending:tt,setMaterial:w,setFlipSided:j,setCullFace:nt,setLineWidth:ct,setPolygonOffset:Y,setScissorTest:it,activeTexture:rt,bindTexture:vt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:_t,texImage3D:et,updateUBOMapping:Nt,uniformBlockBinding:St,texStorage2D:pt,texStorage3D:Rt,texSubImage2D:J,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:wt,scissor:ht,viewport:Ot,reset:Vt}}function Zm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return p?new OffscreenCanvas(T,v):dr("canvas")}function g(T,v,F){let J=1;const $=vt(T);if(($.width>F||$.height>F)&&(J=F/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(J*$.width),wt=Math.floor(J*$.height);h===void 0&&(h=x(W,wt));const pt=v?x(W,wt):h;return pt.width=W,pt.height=wt,pt.getContext("2d").drawImage(T,0,0,W,wt),Ht("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+wt+")."),pt}else return"data"in T&&Ht("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,v,F,J,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=v;if(v===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),v===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),v===i.RGBA){const wt=$?rs:jt.getTransfer(J);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=wt===re?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(T,v){let F;return T?v===null||v===Kn||v===ur?F=i.DEPTH24_STENCIL8:v===an?F=i.DEPTH32F_STENCIL8:v===cr&&(F=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===ur?F=i.DEPTH_COMPONENT24:v===an?F=i.DEPTH_COMPONENT32F:v===cr&&(F=i.DEPTH_COMPONENT16),F}function C(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ge&&T.minFilter!==Ye?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&u.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),S(v)}function L(T){const v=n.get(T);if(v.__webglInit===void 0)return;const F=T.source,J=d.get(F);if(J){const $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(J).length===0&&d.delete(F)}n.remove(T)}function b(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const F=T.source,J=d.get(F);delete J[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let $=0;$<v.__webglFramebuffer[J].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[J][$]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let J=0,$=F.length;J<$;J++){const W=n.get(F[J]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(F[J])}n.remove(T)}let P=0;function U(){P=0}function B(){const T=P;return T>=r.maxTextures&&Ht("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function z(T,v){const F=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const J=T.image;if(J===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,T,v);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function X(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,v);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function q(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function k(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const st={[fa]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},ot={[Ge]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},yt={[Ru]:i.NEVER,[Nu]:i.ALWAYS,[Pu]:i.LESS,[jl]:i.LEQUAL,[Iu]:i.EQUAL,[Uu]:i.GEQUAL,[Du]:i.GREATER,[Lu]:i.NOTEQUAL};function It(T,v){if(v.type===an&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ye||v.magFilter===Ms||v.magFilter===Er||v.magFilter===Jn||v.minFilter===Ye||v.minFilter===Ms||v.minFilter===Er||v.minFilter===Jn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ge||v.minFilter!==Er&&v.minFilter!==Jn||v.type===an&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Dt(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let $=d.get(J);$===void 0&&($={},d.set(J,$));const W=H(v);if(W!==T.__cacheKey){$[W]===void 0&&($[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[W].usedTimes++;const wt=$[T.__cacheKey];wt!==void 0&&($[T.__cacheKey].usedTimes--,wt.usedTimes===0&&b(v)),T.__cacheKey=W,T.__webglTexture=$[W].texture}return F}function Bt(T,v,F){return Math.floor(Math.floor(T/F)/v)}function qt(T,v,F,J){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,J,v.data);else{W.sort((et,ht)=>et.start-ht.start);let wt=0;for(let et=1;et<W.length;et++){const ht=W[wt],Ot=W[et],Nt=ht.start+ht.count,St=Bt(Ot.start,v.width,4),Vt=Bt(ht.start,v.width,4);Ot.start<=Nt+1&&St===Vt&&Bt(Ot.start+Ot.count-1,v.width,4)===St?ht.count=Math.max(ht.count,Ot.start+Ot.count-ht.start):(++wt,W[wt]=Ot)}W.length=wt+1;const pt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),_t=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let et=0,ht=W.length;et<ht;et++){const Ot=W[et],Nt=Math.floor(Ot.start/4),St=Math.ceil(Ot.count/4),Vt=Nt%v.width,D=Math.floor(Nt/v.width),xt=St,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Vt,D,xt,ft,F,J,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Q(T,v,F){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const $=Dt(T,v),W=v.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+F);const wt=n.get(W);if(W.version!==wt.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const pt=jt.getPrimaries(jt.workingColorSpace),Rt=v.colorSpace===Pn?null:jt.getPrimaries(v.colorSpace),_t=v.colorSpace===Pn||pt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let et=g(v.image,!1,r.maxTextureSize);et=rt(v,et);const ht=s.convert(v.format,v.colorSpace),Ot=s.convert(v.type);let Nt=M(v.internalFormat,ht,Ot,v.colorSpace,v.isVideoTexture);It(J,v);let St;const Vt=v.mipmaps,D=v.isVideoTexture!==!0,xt=wt.__version===void 0||$===!0,ft=W.dataReady,dt=C(v,et);if(v.isDepthTexture)Nt=E(v.format===fr,v.type),xt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,ht,Ot,null));else if(v.isDataTexture)if(Vt.length>0){D&&xt&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Vt[0].width,Vt[0].height);for(let at=0,Z=Vt.length;at<Z;at++)St=Vt[at],D?ft&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,St.width,St.height,ht,Ot,St.data):e.texImage2D(i.TEXTURE_2D,at,Nt,St.width,St.height,0,ht,Ot,St.data);v.generateMipmaps=!1}else D?(xt&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,et.width,et.height),ft&&qt(v,et,ht,Ot)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,ht,Ot,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,Vt[0].width,Vt[0].height,et.depth);for(let at=0,Z=Vt.length;at<Z;at++)if(St=Vt[at],v.format!==tn)if(ht!==null)if(D){if(ft)if(v.layerUpdates.size>0){const At=xl(St.width,St.height,v.format,v.type);for(const Gt of v.layerUpdates){const le=St.data.subarray(Gt*At/St.data.BYTES_PER_ELEMENT,(Gt+1)*At/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Gt,St.width,St.height,1,ht,le)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,et.depth,ht,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Nt,St.width,St.height,et.depth,0,St.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,et.depth,ht,Ot,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Nt,St.width,St.height,et.depth,0,ht,Ot,St.data)}else{D&&xt&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Vt[0].width,Vt[0].height);for(let at=0,Z=Vt.length;at<Z;at++)St=Vt[at],v.format!==tn?ht!==null?D?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,St.width,St.height,ht,St.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Nt,St.width,St.height,0,St.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ft&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,St.width,St.height,ht,Ot,St.data):e.texImage2D(i.TEXTURE_2D,at,Nt,St.width,St.height,0,ht,Ot,St.data)}else if(v.isDataArrayTexture)if(D){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,et.width,et.height,et.depth),ft)if(v.layerUpdates.size>0){const at=xl(et.width,et.height,v.format,v.type);for(const Z of v.layerUpdates){const At=et.data.subarray(Z*at/et.data.BYTES_PER_ELEMENT,(Z+1)*at/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ht,Ot,At)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Ot,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,ht,Ot,et.data);else if(v.isData3DTexture)D?(xt&&e.texStorage3D(i.TEXTURE_3D,dt,Nt,et.width,et.height,et.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Ot,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,ht,Ot,et.data);else if(v.isFramebufferTexture){if(xt)if(D)e.texStorage2D(i.TEXTURE_2D,dt,Nt,et.width,et.height);else{let at=et.width,Z=et.height;for(let At=0;At<dt;At++)e.texImage2D(i.TEXTURE_2D,At,Nt,at,Z,0,ht,Ot,null),at>>=1,Z>>=1}}else if(Vt.length>0){if(D&&xt){const at=vt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Nt,at.width,at.height)}for(let at=0,Z=Vt.length;at<Z;at++)St=Vt[at],D?ft&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ht,Ot,St):e.texImage2D(i.TEXTURE_2D,at,Nt,ht,Ot,St);v.generateMipmaps=!1}else if(D){if(xt){const at=vt(et);e.texStorage2D(i.TEXTURE_2D,dt,Nt,at.width,at.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Ot,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,ht,Ot,et);m(v)&&f(J),wt.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function K(T,v,F){if(v.image.length!==6)return;const J=Dt(T,v),$=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const W=n.get($);if($.version!==W.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const wt=jt.getPrimaries(jt.workingColorSpace),pt=v.colorSpace===Pn?null:jt.getPrimaries(v.colorSpace),Rt=v.colorSpace===Pn||wt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const _t=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,ht=[];for(let Z=0;Z<6;Z++)!_t&&!et?ht[Z]=g(v.image[Z],!0,r.maxCubemapSize):ht[Z]=et?v.image[Z].image:v.image[Z],ht[Z]=rt(v,ht[Z]);const Ot=ht[0],Nt=s.convert(v.format,v.colorSpace),St=s.convert(v.type),Vt=M(v.internalFormat,Nt,St,v.colorSpace),D=v.isVideoTexture!==!0,xt=W.__version===void 0||J===!0,ft=$.dataReady;let dt=C(v,Ot);It(i.TEXTURE_CUBE_MAP,v);let at;if(_t){D&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Vt,Ot.width,Ot.height);for(let Z=0;Z<6;Z++){at=ht[Z].mipmaps;for(let At=0;At<at.length;At++){const Gt=at[At];v.format!==tn?Nt!==null?D?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,0,0,Gt.width,Gt.height,Nt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,Vt,Gt.width,Gt.height,0,Gt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,0,0,Gt.width,Gt.height,Nt,St,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,Vt,Gt.width,Gt.height,0,Nt,St,Gt.data)}}}else{if(at=v.mipmaps,D&&xt){at.length>0&&dt++;const Z=vt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){D?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ht[Z].width,ht[Z].height,Nt,St,ht[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,ht[Z].width,ht[Z].height,0,Nt,St,ht[Z].data);for(let At=0;At<at.length;At++){const le=at[At].image[Z].image;D?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,0,0,le.width,le.height,Nt,St,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,Vt,le.width,le.height,0,Nt,St,le.data)}}else{D?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,St,ht[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Nt,St,ht[Z]);for(let At=0;At<at.length;At++){const Gt=at[At];D?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,0,0,Nt,St,Gt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,Vt,Nt,St,Gt.image[Z])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),W.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function gt(T,v,F,J,$,W){const wt=s.convert(F.format,F.colorSpace),pt=s.convert(F.type),Rt=M(F.internalFormat,wt,pt,F.colorSpace),_t=n.get(v),et=n.get(F);if(et.__renderTarget=v,!_t.__hasExternalTextures){const ht=Math.max(1,v.width>>W),Ot=Math.max(1,v.height>>W);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,W,Rt,ht,Ot,v.depth,0,wt,pt,null):e.texImage2D($,W,Rt,ht,Ot,0,wt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,et.__webglTexture,0,ct(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,$,et.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(T,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,$=J&&J.isDepthTexture?J.type:null,W=E(v.stencilBuffer,$),wt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ct(v);Y(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,W,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{const J=v.textures;for(let $=0;$<J.length;$++){const W=J[$],wt=s.convert(W.format,W.colorSpace),pt=s.convert(W.type),Rt=M(W.internalFormat,wt,pt,W.colorSpace),_t=ct(v);F&&Y(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Rt,v.width,v.height):Y(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const $=J.__webglTexture,W=ct(v);if(v.depthTexture.format===hr)Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(v.depthTexture.format===fr)Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Wt(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const J=T.texture.mipmaps;J&&J.length>0?Et(v.__webglFramebuffer[0],T):Et(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),Ct(v.__webglDepthbuffer[J],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ct(v.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,v,F){const J=n.get(T);v!==void 0&&gt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Wt(T)}function Ut(T){const v=T.texture,F=n.get(T),J=n.get(v);T.addEventListener("dispose",R);const $=T.textures,W=T.isWebGLCubeRenderTarget===!0,wt=$.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)F.__webglFramebuffer[pt][Rt]=i.createFramebuffer()}else F.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)F.__webglFramebuffer[pt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let pt=0,Rt=$.length;pt<Rt;pt++){const _t=n.get($[pt]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Y(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<$.length;pt++){const Rt=$[pt];F.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);const _t=s.convert(Rt.format,Rt.colorSpace),et=s.convert(Rt.type),ht=M(Rt.internalFormat,_t,et,Rt.colorSpace,T.isXRRenderTarget===!0),Ot=ct(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),It(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)gt(F.__webglFramebuffer[pt][Rt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt);else gt(F.__webglFramebuffer[pt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let pt=0,Rt=$.length;pt<Rt;pt++){const _t=$[pt],et=n.get(_t);let ht=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),It(ht,_t),gt(F.__webglFramebuffer,T,_t,i.COLOR_ATTACHMENT0+pt,ht,0),m(_t)&&f(ht)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),It(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)gt(F.__webglFramebuffer[Rt],T,v,i.COLOR_ATTACHMENT0,pt,Rt);else gt(F.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,pt,0);m(v)&&f(pt),e.unbindTexture()}T.depthBuffer&&Wt(T)}function tt(T){const v=T.textures;for(let F=0,J=v.length;F<J;F++){const $=v[F];if(m($)){const W=_(T),wt=n.get($).__webglTexture;e.bindTexture(W,wt),f(W),e.unbindTexture()}}}const w=[],j=[];function nt(T){if(T.samples>0){if(Y(T)===!1){const v=T.textures,F=T.width,J=T.height;let $=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),pt=v.length>1;if(pt)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const et=n.get(v[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,$,i.NEAREST),c===!0&&(w.length=0,j.length=0,w.push(i.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(W),j.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const et=n.get(v[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ct(T){return Math.min(r.maxSamples,T.samples)}function Y(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function rt(T,v){const F=T.colorSpace,J=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Li&&F!==Pn&&(jt.getTransfer(F)===re?(J!==tn||$!==cn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",F)),v}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=te,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Y}function Km(i,t){function e(n,r=Pn){let s;const a=jt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===tn)return i.RGBA;if(n===hr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===no)return i.RED;if(n===io)return i.RED_INTEGER;if(n===ro)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===jr||n===$r||n===ts||n===es)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===xa||n===ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ma||n===Sa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===va||n===Ma)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===ba||n===Ea||n===Aa||n===Ta||n===_a||n===wa||n===Ca||n===Ra||n===Pa||n===Ia||n===Da||n===La||n===Ua)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Fa||n===Oa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Na)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===za||n===Va||n===Ga)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new pc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ne({vertexShader:jm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ex extends Vi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",m=new tx,f={},_=e.getContextAttributes();let M=null,E=null;const C=[],A=[],R=new lt;let L=null;const b=new Ve;b.viewport=new se;const S=new Ve;S.viewport=new se;const P=[b,S],U=new Sf;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=C[Q];return K===void 0&&(K=new Vs,C[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=C[Q];return K===void 0&&(K=new Vs,C[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=C[Q];return K===void 0&&(K=new Vs,C[Q]=K),K.getHandSpace()};function z(Q){const K=A.indexOf(Q.inputSource);if(K===-1)return;const gt=C[K];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,l||a),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let Q=0;Q<C.length;Q++){const K=A[Q];K!==null&&(A[Q]=null,C[Q].disconnect(K))}B=null,H=null,m.reset();for(const Q in f)delete f[Q];t.setRenderTarget(M),p=null,d=null,h=null,r=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ct=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=_.stencil?fr:hr,Ct=_.stencil?ur:Kn);const Wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Wt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new jn(d.textureWidth,d.textureHeight,{format:tn,type:cn,depthTexture:new dc(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new jn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Q){for(let K=0;K<Q.removed.length;K++){const gt=Q.removed[K],Ct=A.indexOf(gt);Ct>=0&&(A[Ct]=null,C[Ct].disconnect(gt))}for(let K=0;K<Q.added.length;K++){const gt=Q.added[K];let Ct=A.indexOf(gt);if(Ct===-1){for(let Wt=0;Wt<C.length;Wt++)if(Wt>=A.length){A.push(gt),Ct=Wt;break}else if(A[Wt]===null){A[Wt]=gt,Ct=Wt;break}if(Ct===-1)break}const Et=C[Ct];Et&&Et.connect(gt)}}const k=new I,st=new I;function ot(Q,K,gt){k.setFromMatrixPosition(K.matrixWorld),st.setFromMatrixPosition(gt.matrixWorld);const Ct=k.distanceTo(st),Et=K.projectionMatrix.elements,Wt=gt.projectionMatrix.elements,te=Et[14]/(Et[10]-1),Ut=Et[14]/(Et[10]+1),tt=(Et[9]+1)/Et[5],w=(Et[9]-1)/Et[5],j=(Et[8]-1)/Et[0],nt=(Wt[8]+1)/Wt[0],ct=te*j,Y=te*nt,it=Ct/(-j+nt),rt=it*-j;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(it),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Et[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const vt=te+it,T=Ut+it,v=ct-rt,F=Y+(Ct-rt),J=tt*Ut/T*vt,$=w*Ut/T*vt;Q.projectionMatrix.makePerspective(v,F,J,$,vt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let K=Q.near,gt=Q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),U.near=S.near=b.near=K,U.far=S.far=b.far=gt,(B!==U.near||H!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,H=U.far),U.layers.mask=Q.layers.mask|6,b.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Ct=Q.parent,Et=U.cameras;yt(U,Ct);for(let Wt=0;Wt<Et.length;Wt++)yt(Et[Wt],Ct);Et.length===2?ot(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),It(Q,U,Ct)};function It(Q,K,gt){gt===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=mr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return f[Q]};let Dt=null;function Bt(Q,K){if(u=K.getViewerPose(l||a),x=K,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Ct=!1;gt.length!==U.cameras.length&&(U.cameras.length=0,Ct=!0);for(let Ut=0;Ut<gt.length;Ut++){const tt=gt[Ut];let w=null;if(p!==null)w=p.getViewport(tt);else{const nt=h.getViewSubImage(d,tt);w=nt.viewport,Ut===0&&(t.setRenderTargetTextures(E,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(E))}let j=P[Ut];j===void 0&&(j=new Ve,j.layers.enable(Ut),j.viewport=new se,P[Ut]=j),j.matrix.fromArray(tt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(tt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(w.x,w.y,w.width,w.height),Ut===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ct===!0&&U.cameras.push(j)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Ut=h.getDepthInformation(gt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,r.renderState)}if(Et&&Et.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Ut=0;Ut<gt.length;Ut++){const tt=gt[Ut].camera;if(tt){let w=f[tt];w||(w=new pc,f[tt]=w);const j=h.getCameraImage(tt);w.sourceTexture=j}}}}for(let gt=0;gt<C.length;gt++){const Ct=A[gt],Et=C[gt];Ct!==null&&Et!==void 0&&Et.update(Ct,K,l||a)}Dt&&Dt(Q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const qt=new Cc;qt.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){Dt=Q},this.dispose=function(){}}}const kn=new nn,nx=new ae;function ix(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ac(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,_,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),M=_.envMap,E=_.envMapRotation;M&&(m.envMap.value=M,kn.copy(E),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(kn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rx(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){const E=M.program;n.uniformBlockBinding(_,E)}function l(_,M){let E=r[_.id];E===void 0&&(x(_),E=u(_),r[_.id]=E,_.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(_,C);const A=t.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function u(_){const M=h();_.__bindingPointIndex=M;const E=i.createBuffer(),C=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=r[_.id],E=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=E.length;A<R;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,S=L.length;b<S;b++){const P=L[b];if(p(P,A,b,C)===!0){const U=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let z=0;z<B.length;z++){const X=B[z],q=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,E,C){const A=_.value,R=M+"_"+E;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const L=C[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function x(_){const M=_.uniforms;let E=0;const C=16;for(let R=0,L=M.length;R<L;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,P=b.length;S<P;S++){const U=b[S],B=Array.isArray(U.value)?U.value:[U.value];for(let H=0,z=B.length;H<z;H++){const X=B[H],q=g(X),k=E%C,st=k%q.boundary,ot=k+st;E+=st,ot!==0&&C-ot<q.storage&&(E+=C-ot),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=q.storage}}}const A=E%C;return A>0&&(E+=C-A),_.__size=E,_.__cache={},this}function g(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const sx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let vn=null;function ax(){return vn===null&&(vn=new fc(sx,32,32,ro,zi),vn.minFilter=Ye,vn.magFilter=Ye,vn.wrapS=Sn,vn.wrapT=Sn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class ox{constructor(t={}){const{canvas:e=Ou(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Set([ao,so,io]),g=new Set([cn,Kn,cr,ur,to,eo]),m=new Uint32Array(4),f=new Int32Array(4);let _=null,M=null;const E=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=Ue;let L=0,b=0,S=null,P=-1,U=null;const B=new se,H=new se;let z=null;const X=new Yt(0);let q=0,k=e.width,st=e.height,ot=1,yt=null,It=null;const Dt=new se(0,0,k,st),Bt=new se(0,0,k,st);let qt=!1;const Q=new fo;let K=!1,gt=!1;const Ct=new ae,Et=new I,Wt=new se,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function tt(){return S===null?ot:1}let w=n;function j(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",At,!1),w===null){const N="webgl2";if(w=j(N,y),w===null)throw j(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let nt,ct,Y,it,rt,vt,T,v,F,J,$,W,wt,pt,Rt,_t,et,ht,Ot,Nt,St,Vt,D,xt;function ft(){nt=new m0(w),nt.init(),Vt=new Km(w,nt),ct=new a0(w,nt,t,Vt),Y=new qm(w,nt),ct.reversedDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),it=new v0(w),rt=new Fm,vt=new Zm(w,nt,Y,rt,ct,Vt,it),T=new l0(A),v=new p0(A),F=new bf(w),D=new r0(w,F),J=new x0(w,F,it,D),$=new S0(w,J,F,it),Ot=new M0(w,ct,vt),_t=new o0(rt),W=new Nm(A,T,v,nt,ct,D,_t),wt=new ix(A,rt),pt=new Bm,Rt=new Wm(nt),ht=new i0(A,T,v,Y,$,p,c),et=new Jm(A,$,ct),xt=new rx(w,it,ct,Y),Nt=new s0(w,nt,it),St=new g0(w,nt,it),it.programs=W.programs,A.capabilities=ct,A.extensions=nt,A.properties=rt,A.renderLists=pt,A.shadowMap=et,A.state=Y,A.info=it}ft();const dt=new ex(A,w);this.xr=dt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(y){y!==void 0&&(ot=y,this.setSize(k,st,!1))},this.getSize=function(y){return y.set(k,st)},this.setSize=function(y,N,V=!0){if(dt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,st=N,e.width=Math.floor(y*ot),e.height=Math.floor(N*ot),V===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(k*ot,st*ot).floor()},this.setDrawingBufferSize=function(y,N,V){k=y,st=N,ot=V,e.width=Math.floor(y*V),e.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(B)},this.getViewport=function(y){return y.copy(Dt)},this.setViewport=function(y,N,V,G){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,N,V,G),Y.viewport(B.copy(Dt).multiplyScalar(ot).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,N,V,G){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,N,V,G),Y.scissor(H.copy(Bt).multiplyScalar(ot).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(y){Y.setScissorTest(qt=y)},this.setOpaqueSort=function(y){yt=y},this.setTransparentSort=function(y){It=y},this.getClearColor=function(y){return y.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,V=!0){let G=0;if(y){let O=!1;if(S!==null){const ut=S.texture.format;O=x.has(ut)}if(O){const ut=S.texture.type,Mt=g.has(ut),Tt=ht.getClearColor(),bt=ht.getClearAlpha(),Ft=Tt.r,zt=Tt.g,Pt=Tt.b;Mt?(m[0]=Ft,m[1]=zt,m[2]=Pt,m[3]=bt,w.clearBufferuiv(w.COLOR,0,m)):(f[0]=Ft,f[1]=zt,f[2]=Pt,f[3]=bt,w.clearBufferiv(w.COLOR,0,f))}else G|=w.COLOR_BUFFER_BIT}N&&(G|=w.DEPTH_BUFFER_BIT),V&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ht.dispose(),pt.dispose(),Rt.dispose(),rt.dispose(),T.dispose(),v.dispose(),$.dispose(),D.dispose(),xt.dispose(),W.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ao),dt.removeEventListener("sessionend",To),Fn.stop()};function at(y){y.preventDefault(),as("WebGLRenderer: Context Lost."),R=!0}function Z(){as("WebGLRenderer: Context Restored."),R=!1;const y=it.autoReset,N=et.enabled,V=et.autoUpdate,G=et.needsUpdate,O=et.type;ft(),it.autoReset=y,et.enabled=N,et.autoUpdate=V,et.needsUpdate=G,et.type=O}function At(y){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gt(y){const N=y.target;N.removeEventListener("dispose",Gt),le(N)}function le(y){ne(y),rt.remove(y)}function ne(y){const N=rt.get(y).programs;N!==void 0&&(N.forEach(function(V){W.releaseProgram(V)}),y.isShaderMaterial&&W.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,G,O,ut){N===null&&(N=te);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Tt=Hc(y,N,V,G,O);Y.setMaterial(G,Mt);let bt=V.index,Ft=1;if(G.wireframe===!0){if(bt=J.getWireframeAttribute(V),bt===void 0)return;Ft=2}const zt=V.drawRange,Pt=V.attributes.position;let Qt=zt.start*Ft,ie=(zt.start+zt.count)*Ft;ut!==null&&(Qt=Math.max(Qt,ut.start*Ft),ie=Math.min(ie,(ut.start+ut.count)*Ft)),bt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,bt.count)):Pt!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Pt.count));const me=ie-Qt;if(me<0||me===1/0)return;D.setup(O,G,Tt,V,bt);let xe,oe=Nt;if(bt!==null&&(xe=F.get(bt),oe=St,oe.setIndex(xe)),O.isMesh)G.wireframe===!0?(Y.setLineWidth(G.wireframeLinewidth*tt()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(O.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),Y.setLineWidth(Lt*tt()),O.isLineSegments?oe.setMode(w.LINES):O.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else O.isPoints?oe.setMode(w.POINTS):O.isSprite&&oe.setMode(w.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Lt=O._multiDrawStarts,ue=O._multiDrawCounts,Kt=O._multiDrawCount,Fe=bt?F.get(bt).bytesPerElement:1,ni=rt.get(G).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)ni.setValue(w,"_gl_DrawID",Oe),oe.render(Lt[Oe]/Fe,ue[Oe])}else if(O.isInstancedMesh)oe.renderInstances(Qt,me,O.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ue=Math.min(V.instanceCount,Lt);oe.renderInstances(Qt,me,ue)}else oe.render(Qt,me)};function rn(y,N,V){y.transparent===!0&&y.side===je&&y.forceSinglePass===!1?(y.side=Ie,y.needsUpdate=!0,br(y,N,V),y.side=Ln,y.needsUpdate=!0,br(y,N,V),y.side=je):br(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),M=Rt.get(V),M.init(N),C.push(M),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),M.setupLights();const G=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){const Tt=ut[Mt];rn(Tt,V,O),G.add(Tt)}else rn(ut,V,O),G.add(ut)}),M=C.pop(),G},this.compileAsync=function(y,N,V=null){const G=this.compile(y,N,V);return new Promise(O=>{function ut(){if(G.forEach(function(Mt){rt.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){O(y);return}setTimeout(ut,10)}nt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Je=null;function Gc(y){Je&&Je(y)}function Ao(){Fn.stop()}function To(){Fn.start()}const Fn=new Cc;Fn.setAnimationLoop(Gc),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(y){Je=y,dt.setAnimationLoop(y),y===null?Fn.stop():Fn.start()},dt.addEventListener("sessionstart",Ao),dt.addEventListener("sessionend",To),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(N),N=dt.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,N,S),M=Rt.get(y,C.length),M.init(N),C.push(M),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Ct,on,N.reversedDepth),gt=this.localClippingEnabled,K=_t.init(this.clippingPlanes,gt),_=pt.get(y,E.length),_.init(),E.push(_),dt.enabled===!0&&dt.isPresenting===!0){const ut=A.xr.getDepthSensingMesh();ut!==null&&gs(ut,N,-1/0,A.sortObjects)}gs(y,N,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(yt,It),Ut=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Ut&&ht.addToRenderList(_,y),this.info.render.frame++,K===!0&&_t.beginShadows();const V=M.state.shadowsArray;et.render(V,y,N),K===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,O=_.transmissive;if(M.setupLights(),N.isArrayCamera){const ut=N.cameras;if(O.length>0)for(let Mt=0,Tt=ut.length;Mt<Tt;Mt++){const bt=ut[Mt];wo(G,O,y,bt)}Ut&&ht.render(y);for(let Mt=0,Tt=ut.length;Mt<Tt;Mt++){const bt=ut[Mt];_o(_,y,bt,bt.viewport)}}else O.length>0&&wo(G,O,y,N),Ut&&ht.render(y),_o(_,y,N);S!==null&&b===0&&(vt.updateMultisampleRenderTarget(S),vt.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(A,y,N),D.resetDefaultState(),P=-1,U=null,C.pop(),C.length>0?(M=C[C.length-1],K===!0&&_t.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function gs(y,N,V,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){G&&Wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);const Mt=$.update(y),Tt=y.material;Tt.visible&&_.push(y,Mt,Tt,V,Wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const Mt=$.update(y),Tt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Wt.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Wt.copy(Mt.boundingSphere.center)),Wt.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const bt=Mt.groups;for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const Pt=bt[Ft],Qt=Tt[Pt.materialIndex];Qt&&Qt.visible&&_.push(y,Mt,Qt,V,Wt.z,Pt)}}else Tt.visible&&_.push(y,Mt,Tt,V,Wt.z,null)}}const ut=y.children;for(let Mt=0,Tt=ut.length;Mt<Tt;Mt++)gs(ut[Mt],N,V,G)}function _o(y,N,V,G){const{opaque:O,transmissive:ut,transparent:Mt}=y;M.setupLightsView(V),K===!0&&_t.setGlobalState(A.clippingPlanes,V),G&&Y.viewport(B.copy(G)),O.length>0&&yr(O,N,V),ut.length>0&&yr(ut,N,V),Mt.length>0&&yr(Mt,N,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function wo(y,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[G.id]===void 0&&(M.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?zi:cn,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const ut=M.state.transmissionRenderTarget[G.id],Mt=G.viewport||B;ut.setSize(Mt.z*A.transmissionResolutionScale,Mt.w*A.transmissionResolutionScale);const Tt=A.getRenderTarget(),bt=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(ut),A.getClearColor(X),q=A.getClearAlpha(),q<1&&A.setClearColor(16777215,.5),A.clear(),Ut&&ht.render(V);const zt=A.toneMapping;A.toneMapping=Dn;const Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),K===!0&&_t.setGlobalState(A.clippingPlanes,G),yr(y,V,G),vt.updateMultisampleRenderTarget(ut),vt.updateRenderTargetMipmap(ut),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ie=0,me=N.length;ie<me;ie++){const xe=N[ie],{object:oe,geometry:Lt,material:ue,group:Kt}=xe;if(ue.side===je&&oe.layers.test(G.layers)){const Fe=ue.side;ue.side=Ie,ue.needsUpdate=!0,Co(oe,V,G,Lt,ue,Kt),ue.side=Fe,ue.needsUpdate=!0,Qt=!0}}Qt===!0&&(vt.updateMultisampleRenderTarget(ut),vt.updateRenderTargetMipmap(ut))}A.setRenderTarget(Tt,bt,Ft),A.setClearColor(X,q),Pt!==void 0&&(G.viewport=Pt),A.toneMapping=zt}function yr(y,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ut=y.length;O<ut;O++){const Mt=y[O],{object:Tt,geometry:bt,group:Ft}=Mt;let zt=Mt.material;zt.allowOverride===!0&&G!==null&&(zt=G),Tt.layers.test(V.layers)&&Co(Tt,N,V,bt,zt,Ft)}}function Co(y,N,V,G,O,ut){y.onBeforeRender(A,N,V,G,O,ut),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(A,N,V,G,y,ut),O.transparent===!0&&O.side===je&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,A.renderBufferDirect(V,N,G,O,y,ut),O.side=Ln,O.needsUpdate=!0,A.renderBufferDirect(V,N,G,O,y,ut),O.side=je):A.renderBufferDirect(V,N,G,O,y,ut),y.onAfterRender(A,N,V,G,O,ut)}function br(y,N,V){N.isScene!==!0&&(N=te);const G=rt.get(y),O=M.state.lights,ut=M.state.shadowsArray,Mt=O.state.version,Tt=W.getParameters(y,O.state,ut,N,V),bt=W.getProgramCacheKey(Tt);let Ft=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?v:T).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Gt),Ft=new Map,G.programs=Ft);let zt=Ft.get(bt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===Mt)return Po(y,Tt),zt}else Tt.uniforms=W.getUniforms(y),y.onBeforeCompile(Tt,A),zt=W.acquireProgram(Tt,bt),Ft.set(bt,zt),G.uniforms=Tt.uniforms;const Pt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=_t.uniform),Po(y,Tt),G.needsLights=Wc(y),G.lightsStateVersion=Mt,G.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function Ro(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=ns.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Po(y,N){const V=rt.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Hc(y,N,V,G,O){N.isScene!==!0&&(N=te),vt.resetTextureUnits();const ut=N.fog,Mt=G.isMeshStandardMaterial?N.environment:null,Tt=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Li,bt=(G.isMeshStandardMaterial?v:T).get(G.envMap||Mt),Ft=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let me=Dn;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(me=A.toneMapping);const xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=xe!==void 0?xe.length:0,Lt=rt.get(G),ue=M.state.lights;if(K===!0&&(gt===!0||y!==U)){const Ce=y===U&&G.id===P;_t.setState(G,y,Ce)}let Kt=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ue.state.version||Lt.outputColorSpace!==Tt||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==bt||G.fog===!0&&Lt.fog!==ut||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==_t.numPlanes||Lt.numIntersection!==_t.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==zt||Lt.morphTargets!==Pt||Lt.morphNormals!==Qt||Lt.morphColors!==ie||Lt.toneMapping!==me||Lt.morphTargetsCount!==oe)&&(Kt=!0):(Kt=!0,Lt.__version=G.version);let Fe=Lt.currentProgram;Kt===!0&&(Fe=br(G,N,O));let ni=!1,Oe=!1,ki=!1;const he=Fe.getUniforms(),De=Lt.uniforms;if(Y.useProgram(Fe.program)&&(ni=!0,Oe=!0,ki=!0),G.id!==P&&(P=G.id,Oe=!0),ni||U!==y){Y.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(w,"projectionMatrix",y.projectionMatrix),he.setValue(w,"viewMatrix",y.matrixWorldInverse);const Le=he.map.cameraPosition;Le!==void 0&&Le.setValue(w,Et.setFromMatrixPosition(y.matrixWorld)),ct.logarithmicDepthBuffer&&he.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),U!==y&&(U=y,Oe=!0,ki=!0)}if(O.isSkinnedMesh){he.setOptional(w,O,"bindMatrix"),he.setOptional(w,O,"bindMatrixInverse");const Ce=O.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),he.setValue(w,"boneTexture",Ce.boneTexture,vt))}O.isBatchedMesh&&(he.setOptional(w,O,"batchingTexture"),he.setValue(w,"batchingTexture",O._matricesTexture,vt),he.setOptional(w,O,"batchingIdTexture"),he.setValue(w,"batchingIdTexture",O._indirectTexture,vt),he.setOptional(w,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(w,"batchingColorTexture",O._colorsTexture,vt));const He=V.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&Ot.update(O,V,Fe),(Oe||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,he.setValue(w,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(De.envMap.value=bt,De.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(De.envMapIntensity.value=N.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=ax()),Oe&&(he.setValue(w,"toneMappingExposure",A.toneMappingExposure),Lt.needsLights&&kc(De,ki),ut&&G.fog===!0&&wt.refreshFogUniforms(De,ut),wt.refreshMaterialUniforms(De,G,ot,st,M.state.transmissionRenderTarget[y.id]),ns.upload(w,Ro(Lt),De,vt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ns.upload(w,Ro(Lt),De,vt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(w,"center",O.center),he.setValue(w,"modelViewMatrix",O.modelViewMatrix),he.setValue(w,"normalMatrix",O.normalMatrix),he.setValue(w,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ce=G.uniformsGroups;for(let Le=0,vs=Ce.length;Le<vs;Le++){const On=Ce[Le];xt.update(On,Fe),xt.bind(On,Fe)}}return Fe}function kc(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Wc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,N,V){const G=rt.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),rt.get(y.texture).__webglTexture=N,rt.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const V=rt.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Xc=w.createFramebuffer();this.setRenderTarget=function(y,N=0,V=0){S=y,L=N,b=V;let G=!0,O=null,ut=!1,Mt=!1;if(y){const bt=rt.get(y);if(bt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)vt.setupRenderTarget(y);else if(bt.__hasExternalTextures)vt.rebindTextures(y,rt.get(y.texture).__webglTexture,rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pt=y.depthTexture;if(bt.__boundDepthTexture!==Pt){if(Pt!==null&&rt.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const zt=rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?O=zt[N][V]:O=zt[N],ut=!0):y.samples>0&&vt.useMultisampledRTT(y)===!1?O=rt.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?O=zt[V]:O=zt,B.copy(y.viewport),H.copy(y.scissor),z=y.scissorTest}else B.copy(Dt).multiplyScalar(ot).floor(),H.copy(Bt).multiplyScalar(ot).floor(),z=qt;if(V!==0&&(O=Xc),Y.bindFramebuffer(w.FRAMEBUFFER,O)&&G&&Y.drawBuffers(y,O),Y.viewport(B),Y.scissor(H),Y.setScissorTest(z),ut){const bt=rt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,V)}else if(Mt){const bt=N;for(let Ft=0;Ft<y.textures.length;Ft++){const zt=rt.get(y.textures[Ft]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,V,bt)}}else if(y!==null&&V!==0){const bt=rt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,bt.__webglTexture,V)}P=-1},this.readRenderTargetPixels=function(y,N,V,G,O,ut,Mt,Tt=0){if(!(y&&y.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Y.bindFramebuffer(w.FRAMEBUFFER,bt);try{const Ft=y.textures[Tt],zt=Ft.format,Pt=Ft.type;if(!ct.textureFormatReadable(zt)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Pt)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&V>=0&&V<=y.height-O&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Tt),w.readPixels(N,V,G,O,Vt.convert(zt),Vt.convert(Pt),ut))}finally{const Ft=S!==null?rt.get(S).__webglFramebuffer:null;Y.bindFramebuffer(w.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,G,O,ut,Mt,Tt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt)if(N>=0&&N<=y.width-G&&V>=0&&V<=y.height-O){Y.bindFramebuffer(w.FRAMEBUFFER,bt);const Ft=y.textures[Tt],zt=Ft.format,Pt=Ft.type;if(!ct.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.bufferData(w.PIXEL_PACK_BUFFER,ut.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Tt),w.readPixels(N,V,G,O,Vt.convert(zt),Vt.convert(Pt),0);const ie=S!==null?rt.get(S).__webglFramebuffer:null;Y.bindFramebuffer(w.FRAMEBUFFER,ie);const me=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Bu(w,me,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ut),w.deleteBuffer(Qt),w.deleteSync(me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,V=0){const G=Math.pow(2,-V),O=Math.floor(y.image.width*G),ut=Math.floor(y.image.height*G),Mt=N!==null?N.x:0,Tt=N!==null?N.y:0;vt.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,Mt,Tt,O,ut),Y.unbindTexture()};const Yc=w.createFramebuffer(),Jc=w.createFramebuffer();this.copyTextureToTexture=function(y,N,V=null,G=null,O=0,ut=null){ut===null&&(O!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=O,O=0):ut=0);let Mt,Tt,bt,Ft,zt,Pt,Qt,ie,me;const xe=y.isCompressedTexture?y.mipmaps[ut]:y.image;if(V!==null)Mt=V.max.x-V.min.x,Tt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Ft=V.min.x,zt=V.min.y,Pt=V.isBox3?V.min.z:0;else{const He=Math.pow(2,-O);Mt=Math.floor(xe.width*He),Tt=Math.floor(xe.height*He),y.isDataArrayTexture?bt=xe.depth:y.isData3DTexture?bt=Math.floor(xe.depth*He):bt=1,Ft=0,zt=0,Pt=0}G!==null?(Qt=G.x,ie=G.y,me=G.z):(Qt=0,ie=0,me=0);const oe=Vt.convert(N.format),Lt=Vt.convert(N.type);let ue;N.isData3DTexture?(vt.setTexture3D(N,0),ue=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(vt.setTexture2DArray(N,0),ue=w.TEXTURE_2D_ARRAY):(vt.setTexture2D(N,0),ue=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=w.getParameter(w.UNPACK_ROW_LENGTH),Fe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(w.UNPACK_SKIP_PIXELS),Oe=w.getParameter(w.UNPACK_SKIP_ROWS),ki=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ft),w.pixelStorei(w.UNPACK_SKIP_ROWS,zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pt);const he=y.isDataArrayTexture||y.isData3DTexture,De=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const He=rt.get(y),Ce=rt.get(N),Le=rt.get(He.__renderTarget),vs=rt.get(Ce.__renderTarget);Y.bindFramebuffer(w.READ_FRAMEBUFFER,Le.__webglFramebuffer),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let On=0;On<bt;On++)he&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,rt.get(y).__webglTexture,O,Pt+On),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,ut,me+On)),w.blitFramebuffer(Ft,zt,Mt,Tt,Qt,ie,Mt,Tt,w.DEPTH_BUFFER_BIT,w.NEAREST);Y.bindFramebuffer(w.READ_FRAMEBUFFER,null),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||rt.has(y)){const He=rt.get(y),Ce=rt.get(N);Y.bindFramebuffer(w.READ_FRAMEBUFFER,Yc),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,Jc);for(let Le=0;Le<bt;Le++)he?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,He.__webglTexture,O,Pt+Le):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,He.__webglTexture,O),De?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ce.__webglTexture,ut,me+Le):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ce.__webglTexture,ut),O!==0?w.blitFramebuffer(Ft,zt,Mt,Tt,Qt,ie,Mt,Tt,w.COLOR_BUFFER_BIT,w.NEAREST):De?w.copyTexSubImage3D(ue,ut,Qt,ie,me+Le,Ft,zt,Mt,Tt):w.copyTexSubImage2D(ue,ut,Qt,ie,Ft,zt,Mt,Tt);Y.bindFramebuffer(w.READ_FRAMEBUFFER,null),Y.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else De?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(ue,ut,Qt,ie,me,Mt,Tt,bt,oe,Lt,xe.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(ue,ut,Qt,ie,me,Mt,Tt,bt,oe,xe.data):w.texSubImage3D(ue,ut,Qt,ie,me,Mt,Tt,bt,oe,Lt,xe):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ut,Qt,ie,Mt,Tt,oe,Lt,xe.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ut,Qt,ie,xe.width,xe.height,oe,xe.data):w.texSubImage2D(w.TEXTURE_2D,ut,Qt,ie,Mt,Tt,oe,Lt,xe);w.pixelStorei(w.UNPACK_ROW_LENGTH,Kt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Fe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(w.UNPACK_SKIP_ROWS,Oe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ki),ut===0&&N.generateMipmaps&&w.generateMipmap(ue),Y.unbindTexture()},this.initRenderTarget=function(y){rt.get(y).__webglFramebuffer===void 0&&vt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?vt.setTextureCube(y,0):y.isData3DTexture?vt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?vt.setTexture2DArray(y,0):vt.setTexture2D(y,0),Y.unbindTexture()},this.resetState=function(){L=0,b=0,S=null,Y.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const er=new I;function We(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;er.copy(t),er[n]=0,er.normalize();const l=.5*a/(a+o),u=1-er.angleTo(i)/c;return Math.sign(er[e])===1?u*l:o/(a+o)+l+l*(1-u)}class cs extends en{constructor(t=1,e=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new I,l=new I,u=new I(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,x=h.length/6,g=new I,m=.5/a;for(let f=0,_=0;f<h.length;f+=3,_+=2)switch(c.fromArray(h,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[f+0]=u.x*Math.sign(c.x)+l.x*s,h[f+1]=u.y*Math.sign(c.y)+l.y*s,h[f+2]=u.z*Math.sign(c.z)+l.z*s,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/x)){case 0:g.set(1,0,0),p[_+0]=We(g,l,"z","y",s,n),p[_+1]=1-We(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),p[_+0]=1-We(g,l,"z","y",s,n),p[_+1]=1-We(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),p[_+0]=1-We(g,l,"x","z",s,t),p[_+1]=We(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[_+0]=1-We(g,l,"x","z",s,t),p[_+1]=1-We(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[_+0]=1-We(g,l,"x","y",s,t),p[_+1]=1-We(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),p[_+0]=We(g,l,"x","y",s,t),p[_+1]=1-We(g,l,"y","x",s,e);break}}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.segments,t.radius)}}class lx extends cc{constructor(){super();const t=new en;t.deleteAttribute("uv");const e=new ti({side:Ie}),n=new ti,r=new _c(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Zt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new ka(t,n,6),o=new ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Zt(t,Ai(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Zt(t,Ai(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new Zt(t,Ai(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new Zt(t,Ai(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new Zt(t,Ai(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new Zt(t,Ai(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ai(i){return new uf({color:0,emissive:16777215,emissiveIntensity:i})}const Lc=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float halo = exp(-radius * radius * 28.0);
    float core = exp(-radius * radius * 160.0);
    gl_FragColor = vec4(vColor * (1.0 + core), (halo * 0.55 + core * 0.45) * vAlpha);
  }
`;function Uc(i,t=14,e=11,n=9){const r=new Float32Array(i*3),s=new Float32Array(i);for(let l=0;l<i;l++)r[l*3]=(Math.random()-.5)*t,r[l*3+1]=Math.random()*e,r[l*3+2]=(Math.random()-.5)*n,s[l]=.4+Math.random()*1.5;const a=new Me;a.setAttribute("position",new ce(r,3)),a.setAttribute("aSize",new ce(s,1));const o=new Ne({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uHeight:{value:e},uDpr:{value:1},uPointer:{value:new lt(100,100)}},vertexShader:`
      attribute float aSize;
      uniform float uTime;
      uniform float uHeight;
      uniform float uDpr;
      uniform vec2 uPointer;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec3 point = position;
        point.y = mod(position.y - uTime * (0.14 + aSize * 0.10) + uHeight * 20.0, uHeight) - 1.8;
        point.x += sin(uTime * 0.3 + position.y * 2.0) * 0.25;
        vec2 offset = point.xy - uPointer;
        float distanceToPointer = length(offset);
        point.xy += normalize(offset + vec2(0.001)) * max(0.0, 1.0 - distanceToPointer) * 0.5;
        vec4 view = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = clamp(aSize * 27.0 * uDpr / max(0.5, -view.z), 1.0, 18.0 * uDpr);
        vColor = vec3(0.82, 0.9, 0.9);
        vAlpha = 0.36 + aSize * 0.2;
      }
    `,fragmentShader:Lc}),c=new ds(a,o);return c.frustumCulled=!1,{points:c,uniforms:o.uniforms}}function cx(i=2600){const t=new Float32Array(i*3),e=new Float32Array(i*3),n=new Float32Array(i*3),r=new Float32Array(i).fill(-100),s=new Float32Array(i).fill(1),a=new Float32Array(i),o=new Me,c={position:new ce(t,3),aVelocity:new ce(e,3),aColor:new ce(n,3),aStart:new ce(r,1),aLife:new ce(s,1),aSize:new ce(a,1)};Object.entries(c).forEach(([x,g])=>{g.setUsage(Fu),o.setAttribute(x,g)});const l=new Ne({transparent:!0,depthWrite:!1,blending:Zn,uniforms:{uTime:{value:0},uDpr:{value:1}},vertexShader:`
      attribute vec3 aVelocity;
      attribute vec3 aColor;
      attribute float aStart;
      attribute float aLife;
      attribute float aSize;
      uniform float uTime;
      uniform float uDpr;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float age = max(0.0, uTime - aStart);
        float progress = age / aLife;
        vec3 point = position + aVelocity * (1.0 - exp(-age * 0.7)) / 0.7;
        point.y -= age * age * 0.16;
        vec4 view = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = clamp(aSize * 55.0 * uDpr / max(0.5, -view.z), 0.0, 22.0 * uDpr);
        vAlpha = pow(max(0.0, 1.0 - progress), 1.3) * step(0.0, uTime - aStart);
        vColor = aColor;
      }
    `,fragmentShader:Lc}),u=new ds(o,l);u.frustumCulled=!1;let h=0;function d(x,g="#f6cd82",m=240,f="sphere"){const _=new Yt(g);for(let M=0;M<m;M++){const E=h++%i,C=Math.floor(M/7),A=f==="firework"?C/Math.ceil(m/7)*Math.PI*2:Math.random()*Math.PI*2,R=f==="firework"?1.7*(.62+M%7*.065):.4+Math.random()*1.4;let L=Math.cos(A),b=Math.sin(A),S=(Math.random()-.5)*(f==="firework"?.12:1.3);if(f==="star"){const U=Math.floor(Math.random()*10),B=Math.random(),H=U*Math.PI/5+Math.PI/2,z=(U+1)*Math.PI/5+Math.PI/2,X=U%2?.42:1,q=U%2?1:.42;L=Math.cos(H)*X*(1-B)+Math.cos(z)*q*B,b=Math.sin(H)*X*(1-B)+Math.sin(z)*q*B,S*=.2}t.set(x,E*3);const P=f==="star"?1.45:R;e.set([L*P,b*P,S*P],E*3),n.set([_.r,_.g,_.b],E*3),r[E]=l.uniforms.uTime.value,s[E]=2.3+Math.random()*1.5,a[E]=f==="firework"?.7+M%7*.13:.45+Math.random()*.9}Object.values(c).forEach(M=>{M.needsUpdate=!0})}function p(){r.fill(-100),c.aStart.needsUpdate=!0,h=0}return{points:u,uniforms:l.uniforms,burst:d,reset:p}}function ux(i,t=3,e=4800){const n=[];for(let r=0;r<i.height;r+=t)for(let s=0;s<i.width;s+=t){const a=i.data[(r*i.width+s)*4+3];a>=96&&n.push({x:s+.5,y:r+.5,alpha:a/255})}return n.length<=e?n:Array.from({length:e},(r,s)=>n[Math.floor(s*n.length/e)])}function hx(i,t){const e=new Ne({transparent:!0,depthTest:!1,depthWrite:!1,blending:Zn,uniforms:{uAge:{value:0},uTime:{value:0},uDpr:{value:1},uViewport:{value:new lt(1,1)},uPointer:{value:new lt(-1e3,-1e3)}},vertexShader:`
      attribute vec2 aOrigin;
      attribute float aSeed;
      attribute float aAlpha;
      uniform float uAge;
      uniform float uTime;
      uniform float uDpr;
      uniform vec2 uViewport;
      uniform vec2 uPointer;
      varying float vAlpha;
      varying float vSeed;
      void main() {
        float age = max(0.0, uAge - aSeed * 0.65);
        float progress = smoothstep(0.0, 2.1, age);
        vec2 point = mix(aOrigin, position.xy, progress);
        point += (1.0 - progress) * vec2(sin(age * 4.0 + aSeed * 28.0) * 22.0, cos(age * 3.0 + aSeed * 18.0) * 15.0);
        point += vec2(sin(uTime * 1.1 + aSeed * 32.0), cos(uTime * 0.9 + aSeed * 24.0)) * progress * 0.28;
        vec2 offset = point - uPointer;
        float influence = max(0.0, 1.0 - length(offset) / 58.0);
        point += normalize(offset + vec2(0.01)) * influence * influence * 12.0 * progress;
        gl_Position = vec4(point.x / uViewport.x * 2.0 - 1.0, 1.0 - point.y / uViewport.y * 2.0, 0.0, 1.0);
        float sparkle = 0.92 + 0.18 * sin(uTime * 2.2 + aSeed * 65.0);
        gl_PointSize = (2.8 + aSeed * 0.9 + step(0.97, aSeed) * sparkle * 2.8) * uDpr;
        vAlpha = smoothstep(0.0, 0.25, age) * sparkle * aAlpha;
        vSeed = aSeed;
      }
    `,fragmentShader:`
      varying float vAlpha;
      varying float vSeed;
      void main() {
        vec2 point = gl_PointCoord - 0.5;
        float radius = length(point);
        float core = exp(-radius * radius * 13.0);
        float glint = exp(-abs(point.x) * 45.0 - abs(point.y) * 4.0) + exp(-abs(point.y) * 45.0 - abs(point.x) * 4.0);
        float alpha = core + step(0.97, vSeed) * glint * 0.3;
        vec3 color = mix(vec3(1.0, 0.84, 0.52), vec3(1.0, 0.98, 0.88), 0.4 + vSeed * 0.6);
        gl_FragColor = vec4(color, alpha * vAlpha);
      }
    `}),n=new ds(new Me,e);n.frustumCulled=!1,n.renderOrder=100,n.visible=!1;let r=!1,s=!1,a=0,o=0,c=0;function l(){const g=i.getBoundingClientRect(),m=t.getBoundingClientRect();if(!g.width||!g.height)return!1;const f=getComputedStyle(i),_=parseFloat(f.fontSize),M=parseFloat(f.lineHeight),E=2,C=12,A=document.createElement("canvas"),R=A.getContext("2d",{willReadFrequently:!0}),L=i.innerText.split(`
`).filter(Boolean),b=`${f.fontStyle} ${f.fontWeight} ${f.fontSize} ${f.fontFamily}`;R.font=b,R.letterSpacing=f.letterSpacing;const S=Math.max(...L.map(Dt=>R.measureText(Dt).width));A.width=Math.ceil((S+C*2)*E),A.height=Math.ceil((g.height+C*2)*E),R.scale(E,E),R.font=b,R.letterSpacing=f.letterSpacing,R.textAlign="center",R.fillStyle="#fff";const P=R.measureText("Merry"),U=P.fontBoundingBoxAscent??_*.8,B=P.fontBoundingBoxDescent??_*.2,H=C+U+(M-U-B)/2;L.forEach((Dt,Bt)=>R.fillText(Dt,A.width/E/2,H+Bt*M));const z=ux(R.getImageData(0,0,A.width,A.height));if(!z.length)return!1;const X=new Float32Array(z.length*3),q=new Float32Array(z.length*2),k=new Float32Array(z.length),st=new Float32Array(z.length),ot=g.left-m.left+g.width/2-A.width/E/2,yt=g.top-m.top-C;z.forEach((Dt,Bt)=>{X.set([ot+Dt.x/E,yt+Dt.y/E,0],Bt*3),q.set([(Math.random()-.5)*m.width*1.2+m.width/2,g.top-m.top+(Math.random()-.3)*g.height*2],Bt*2),k[Bt]=Math.random(),st[Bt]=Dt.alpha});const It=new Me;return It.setAttribute("position",new ce(X,3)),It.setAttribute("aOrigin",new ce(q,2)),It.setAttribute("aSeed",new ce(k,1)),It.setAttribute("aAlpha",new ce(st,1)),n.geometry.dispose(),n.geometry=It,n.visible=!0,i.classList.add("is-particle-text"),i.dataset.particleCount=String(z.length),!0}async function u(){r=!0;const g=++a;await document.fonts.ready,!(!r||a!==g)&&(s=!0,l()&&(o=c))}function h(){r=!1,a++,n.visible=!1,i.classList.remove("is-particle-text")}function d(g,m,f){e.uniforms.uViewport.value.set(g,m),e.uniforms.uDpr.value=f,r&&s&&l()}function p(g){c=g,r&&(e.uniforms.uTime.value=g,e.uniforms.uAge.value=Math.max(0,g-o))}function x(){h(),n.removeFromParent(),n.geometry.dispose(),e.dispose()}return{points:n,show:u,hide:h,resize:d,update:p,dispose:x,setPointer(g,m){const f=e.uniforms.uViewport.value;e.uniforms.uPointer.value.set((g+1)*f.x/2,(1-m)*f.y/2)}}}const fx="data:image/webp;base64,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",Ke=new ti({color:"#e9c27e",metalness:.78,roughness:.3}),zl=new ti({color:"#540c20",metalness:.05,roughness:.72}),dx=new ti({color:"#e0e9e5",roughness:.93});function px(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,246,214,1)"),e.addColorStop(.12,"rgba(255,223,154,.9)"),e.addColorStop(.35,"rgba(255,192,99,.24)"),e.addColorStop(1,"rgba(255,173,66,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ih(i)}function mx(i=.25){const t=new Sc;for(let n=0;n<10;n++){const r=n*Math.PI/5+Math.PI/2,s=n%2?i*.43:i,a=Math.cos(r)*s,o=Math.sin(r)*s;n===0?t.moveTo(a,o):t.lineTo(a,o)}t.closePath();const e=new go(t,{depth:.065,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:1,steps:1});return e.center(),new Zt(e,Ke)}function xx(i,t){const e=new yn,n=new ve,r=new uo({map:t,color:"#c3d2c7",alphaTest:.4,alphaToCoverage:!0,side:je}),s=new ka(new Sr(1,.34),r,4e3);let a=0;for(let M=0;M<17;M++){const E=.3+M*.25,C=1.62*(1-M/18)**.8,A=Math.round(18-M*.55);for(let R=0;R<A;R++){const L=R/A*Math.PI*2+M*1.31;for(let b=0;b<4;b++){const S=C*(.16+b*.25);for(let P=0;P<3;P++){const U=(.88-M*.029)*(1.1-b*.1);n.position.set(Math.cos(L)*S,E+S*.12,Math.sin(L)*S),n.rotation.set((P-1)*.85+.1,-L,.14),n.scale.set(U,U,U),n.updateMatrix(),s.setMatrixAt(a,n.matrix),s.setColorAt(a,new Yt().setScalar(.65+Math.random()*.35)),a++}}}}s.count=a,e.add(s);const o=new Zt(new ps(.045,.12,4.35,8),new ti({color:"#5b4230",roughness:.95}));o.position.y=2.1,e.add(o);const c=84,l=new ka(new qn(.075,12,8),Ke,c);for(let M=0;M<c;M++){const E=.4+Math.random()*3.7,C=M*2.399,A=1.6*(1-E/4.7)**.8;n.position.set(Math.cos(C)*A,E,Math.sin(C)*A),n.scale.setScalar(.65+Math.random()*.75),n.updateMatrix(),l.setMatrixAt(M,n.matrix),l.setColorAt(M,new Yt(M%5===0?"#b33945":"#e9c78b"))}e.add(l);const u=[],h=[];for(let M=0;M<=300;M++){const E=M/300,C=.28+E*4.05,A=1.86*(1-C/4.65)**.8,R=E*Math.PI*2*5.3,L=new I(Math.cos(R)*A,C,Math.sin(R)*A);u.push(L),M%2===0&&h.push(L.x,L.y,L.z)}const d=new ti({color:"#b79a5e",emissive:"#e1a44d",emissiveIntensity:.35,metalness:.45,roughness:.4});e.add(new Zt(new Mo(new xo(u),300,.012,4,!1),d));const p=new Me;p.setAttribute("position",new pe(h,3));const x=new Ne({uniforms:{uLight:{value:.55},uTime:{value:0},uReveal:{value:5},uDpr:{value:1}},transparent:!0,depthWrite:!1,blending:Zn,vertexShader:`
      uniform float uLight;
      uniform float uTime;
      uniform float uReveal;
      uniform float uDpr;
      varying float vLight;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * view;
        vLight = (0.7 + 0.3 * sin(uTime * 1.4 + position.y * 7.0)) * uLight * smoothstep(position.y - 0.15, position.y + 0.15, uReveal);
        gl_PointSize = clamp((22.0 + vLight * 120.0) * uDpr / max(0.5, -view.z), 1.0, 34.0 * uDpr);
      }
    `,fragmentShader:`
      varying float vLight;
      void main() {
        float radius = length(gl_PointCoord - 0.5);
        float halo = exp(-radius * radius * 22.0);
        float core = exp(-radius * radius * 150.0);
        gl_FragColor = vec4(vec3(1.0, 0.77, 0.39) + core * 1.2, (halo * 0.65 + core) * vLight);
      }
    `}),g=new ds(p,x);e.add(g);const m=mx(.29);m.position.y=4.65,e.add(m);const f=new ho({map:i,transparent:!0,opacity:.7,blending:Zn,depthWrite:!1}),_=new hc(f);return _.position.set(0,4.65,.05),_.scale.setScalar(1.2),e.add(_),{root:e,bulbMaterial:x,wireMaterial:d,haloMaterial:f,star:m}}function Vl(){const i=new yn,t=new Zt(new cs(1.32,1.05,1.15,3,.035),zl);t.position.y=.525,i.add(t);const e=new Zt(new en(.17,1.06,1.164),Ke);e.position.y=.525,i.add(e);const n=new Zt(new en(1.334,1.06,.16),Ke);n.position.y=.525,i.add(n);const r=new yn;r.position.y=1.08,i.add(r);const s=new Zt(new cs(1.43,.22,1.26,3,.025),zl);r.add(s),r.add(new Zt(new en(.18,.235,1.274),Ke)),r.add(new Zt(new en(1.444,.235,.17),Ke)),[-1,1].forEach(o=>{const c=new xo([new I(0,.21,0),new I(o*.35,.58,.03),new I(o*.56,.5,-.03),new I(o*.45,.23,-.06),new I(0,.21,0)]),l=[],u=[];for(let x=0;x<=40;x++){const g=c.getPoint(x/40),m=c.getTangent(x/40),f=new I(-m.y,m.x,0).normalize().multiplyScalar(.065);if(l.push(g.x-f.x,g.y-f.y,g.z,g.x,g.y,g.z+.025,g.x+f.x,g.y+f.y,g.z),x<40){const _=x*3;u.push(_,_+3,_+1,_+1,_+3,_+4,_+1,_+4,_+2,_+2,_+4,_+5)}}const h=new Me;h.setAttribute("position",new pe(l,3)),h.setIndex(u),h.computeVertexNormals();const d=Ke.clone();d.side=je;const p=new Zt(h,d);r.add(p)});const a=new Zt(new qn(.12,12,8),Ke);return a.position.y=.24,a.scale.set(1.2,.7,.8),r.add(a),{root:i,lid:r}}function gx(i){const t=new yn,e=new Zt(new ps(.69,.73,.23,48),Ke);e.position.y=.12,t.add(e),[.04,.23].forEach(c=>{const l=new Zt(new vo(.7,.025,6,48),Ke);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)});const n=new Zt(new qn(.64,32,12),dx);n.scale.y=.19,n.position.y=.31,t.add(n);const r=i.root.clone(!0);r.scale.setScalar(.24),r.position.y=.37,t.add(r);const s=new Ne({transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vNormal = normalize(mat3(modelMatrix) * normal);
        vView = cameraPosition - world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec3 normal = normalize(vNormal);
        float rim = pow(1.0 - max(0.0, dot(normal, normalize(vView))), 2.8);
        float highlight = pow(max(0.0, dot(normal, normalize(vec3(-0.7, 0.8, 1.0)))), 45.0);
        float second = pow(max(0.0, dot(normal, normalize(vec3(0.85, 0.3, 0.7)))), 70.0);
        vec3 color = mix(vec3(0.35, 0.63, 0.66), vec3(0.93, 0.88, 0.72), rim);
        color += highlight * 0.8 + second * 0.5;
        gl_FragColor = vec4(color, 0.035 + rim * 0.7 + highlight * 0.6 + second * 0.4);
      }
    `}),a=new Zt(new qn(.76,48,32),s);a.position.y=.96,a.renderOrder=3,t.add(a);const o=Uc(110,.85,1.03,.75);o.points.position.y=2.3,t.add(o.points);for(let c=0;c<18;c++){const l=new Zt(new qn(.017,6,4),Ke),u=c*Math.PI*2/18;l.position.set(Math.cos(u)*.71,.13,Math.sin(u)*.71),t.add(l)}return{root:t,innerSnow:o}}const Gl={intro:{treeScale:.6,treeX:-.08,treeY:-.22,treeZ:0,giftScale:.34,giftX:.85,giftY:-.22,giftZ:.7,globeScale:0,globeY:1.1,cameraZ:9.5,targetY:1.9},tree:{treeScale:.74,treeX:0,treeY:.55,treeZ:0,giftScale:.28,giftX:1.1,giftY:.52,giftZ:.6,globeScale:0,globeY:1.1,cameraZ:9.6,targetY:2.2},lighting:{treeScale:.78,treeX:0,treeY:.52,treeZ:0,giftScale:.31,giftX:1.12,giftY:.52,giftZ:.7,globeScale:0,globeY:1.1,cameraZ:10,targetY:2.25},gift:{treeScale:.53,treeX:-2.8,treeY:.05,treeZ:-2.5,giftScale:1.12,giftX:0,giftY:.65,giftZ:0,globeScale:0,globeY:1.4,cameraZ:8.8,targetY:2.3},opening:{treeScale:.53,treeX:-2.8,treeY:.05,treeZ:-2.5,giftScale:1.12,giftX:0,giftY:.65,giftZ:0,globeScale:.65,globeY:1.9,cameraZ:9.2,targetY:2.4},globe:{treeScale:.44,treeX:-3.7,treeY:.1,treeZ:-3.5,giftScale:.42,giftX:2.5,giftY:-.4,giftZ:0,globeScale:1.55,globeY:.95,cameraZ:9.2,targetY:2.45},finale:{treeScale:.44,treeX:-3.7,treeY:.1,treeZ:-3.5,giftScale:.4,giftX:2.8,giftY:-.5,giftZ:0,globeScale:1.5,globeY:.55,cameraZ:9.5,targetY:2.45}};function vx(i,t,e){let n,r;const s=new Promise((Y,it)=>{n=Y,r=it});let a=!1,o=!1;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=new ox({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setClearColor(0,0),l.outputColorSpace=Ue,l.toneMapping=Wl,l.toneMappingExposure=1.2;const u=new cc,h=new Ja(l),d=new lx,p=h.fromScene(d,.04);u.environment=p.texture,u.environmentIntensity=.65,d.dispose(),h.dispose();const x=new Ve(40,1,.1,60);x.position.set(0,2.7,9.5);const g=new I(0,1.9,0);u.add(new gf("#c4e3e3","#203d31",1.4));const m=new ml("#ffe1ad",3.1);m.position.set(-3,6,5),u.add(m);const f=new ml("#a0d9e1",1.7);f.position.set(4,3,-3),u.add(f);const _=new _c("#ffc871",9,12,2);_.position.set(0,3.2,2),u.add(_);const M=px(),E=new xf().load(fx,()=>{a=!0},void 0,()=>r(new Error("Tree texture decoding failed")));E.colorSpace=Ue,E.anisotropy=Math.min(4,l.capabilities.getMaxAnisotropy());const C=xx(M,E);u.add(C.root);const A=Vl();A.root.rotation.y=-.35,u.add(A.root);const R=gx(C);u.add(R.root);const L=new yn;for(let Y=0;Y<3;Y++){const it=Vl();it.root.scale.setScalar(.24+Y*.035),it.root.position.set(-.7+Y*.45,0,.75),it.root.rotation.y=Y*.7,L.add(it.root)}C.root.add(L);const b=Uc(c?150:1050);u.add(b.points);const S=cx(c?700:2600);u.add(S.points);const P=c?null:hx(e,i);P&&u.add(P.points);const U=new hc(new ho({map:M,transparent:!0,opacity:0,blending:Zn,depthWrite:!1}));U.scale.setScalar(3.5),U.position.set(0,1.6,0),u.add(U);let B="intro",H=0,z=0,X=0,q=0,k=0,st=0,ot=!1,yt=0,It=0,Dt=!1,Bt=Math.min(window.devicePixelRatio||1,1.5),qt=0,Q=0,K=0;const gt=new I,Ct=new I;function Et(){const Y=i.clientWidth,it=i.clientHeight;x.aspect=Y/it,x.updateProjectionMatrix(),l.setPixelRatio(Bt),l.setSize(Y,it,!1),b.uniforms.uDpr.value=Bt,S.uniforms.uDpr.value=Bt,C.bulbMaterial.uniforms.uDpr.value=Bt,P==null||P.resize(Y,it,Bt)}function Wt(Y){B=Y,H=0,ot=!1,X=0,Y==="intro"&&(q=0,S.reset(),A.lid.position.set(0,1.08,0),A.lid.rotation.set(0,0,0),R.root.scale.setScalar(0),U.material.opacity=0,Dt=!1),Y==="opening"&&(Dt=!1),Y==="finale"?(yt=.1,It=0,P==null||P.show()):P==null||P.hide()}function te(Y){const it=Gl[B],rt=1-Math.exp(-Y*(c?20:3.3));C.root.scale.lerp(gt.setScalar(it.treeScale),rt),C.root.position.lerp(Ct.set(it.treeX,it.treeY,it.treeZ),rt),C.root.rotation.y=ri.damp(C.root.rotation.y,q+Math.sin(z*.16)*(c?0:.07),3,Y),A.root.scale.lerp(gt.setScalar(it.giftScale),rt),A.root.position.lerp(Ct.set(it.giftX,it.giftY,it.giftZ),rt),A.root.rotation.y=-.35+(B==="gift"&&!c?Math.sin(z*1.4)*.055:0);let vt=it.globeScale;B==="opening"&&(vt*=ri.smoothstep(H,.65,2.7)),R.root.scale.lerp(gt.setScalar(vt),rt),R.root.visible=R.root.scale.x>.001,R.root.position.y=ri.damp(R.root.position.y,it.globeY+(c?0:Math.sin(z*1.1)*.045),3,Y),R.root.rotation.y=Math.sin(z*.3)*.1,x.position.z=ri.damp(x.position.z,it.cameraZ,2.8,Y),g.y=ri.damp(g.y,it.targetY,2.8,Y),x.lookAt(g);let T=B==="intro"?.75:1,v=5;if(B==="tree"&&(T=.06+X*.7,v=X*4.8),B==="lighting"&&(T=1.3,v=H*2.15),C.bulbMaterial.uniforms.uLight.value=T,C.bulbMaterial.uniforms.uReveal.value=v,C.bulbMaterial.uniforms.uTime.value=z,C.wireMaterial.emissiveIntensity=T*.9,C.haloMaterial.opacity=B==="tree"?.13+X*.5:.8,_.intensity=B==="tree"?1.8+X*8:10,C.star.rotation.y=Math.sin(z*.4)*.16,R.innerSnow.uniforms.uTime.value=z*.55,b.uniforms.uTime.value=c?0:z,S.uniforms.uTime.value=z,P==null||P.update(z),B==="lighting"&&H>2.1&&!Dt&&(S.burst([0,4.15,0],"#ffe0a0",c?70:360,"star"),Dt=!0),B==="lighting"&&H>(c?.7:3.25)&&!ot&&(ot=!0,t()),B==="opening"){const F=ri.smoothstep(H,0,c?.4:1.6);A.lid.position.y=1.08+F*1.8,A.lid.position.x=F*-.28,A.lid.rotation.z=-F*.35,A.lid.rotation.x=F*.25,U.material.opacity=Math.sin(Math.min(H/3.2,1)*Math.PI)*.7,H>.25&&!Dt&&(S.burst([0,2.1,.25],"#ffda8a",c?150:950),Dt=!0),H>(c?.8:3.1)&&!ot&&(ot=!0,U.material.opacity=0,t())}if(B==="finale"&&H>=yt&&!c){const F=[[-1.8,4.8,-.8],[1.75,4.3,-1.5],[-1.3,2.9,-1],[1.7,6.1,-2],[.1,5.6,-1.5]],J=It%3===1?"#c8e4df":"#f8ce8c";S.burst(F[It%F.length],J,420,It%3===0?"star":"firework"),It++,yt=H+(It<6?.68:2.5)}}function Ut(Y){const it=k?(Y-k)/1e3:.016,rt=Math.min(it,.05);k=Y,z+=rt,H+=rt,te(rt),l.render(u,x),a&&!o&&(o=!0,i.classList.add("is-ready"),n()),Q++,K+=it,Q===120&&(qt=K/Q>.029?qt+1:0,qt>=2&&Bt>1&&(Bt=1,b.points.geometry.setDrawRange(0,c?120:550),Et()),i.dataset.quality=String(Bt),i.dataset.drawCalls=String(l.info.render.calls),Q=0,K=0),st=requestAnimationFrame(Ut)}function tt(){cancelAnimationFrame(st),st=0,k=0}function w(){st||(st=requestAnimationFrame(Ut))}const j=new ResizeObserver(Et);j.observe(i),Et();const nt=Gl.intro;C.root.scale.setScalar(nt.treeScale),C.root.position.set(nt.treeX,nt.treeY,nt.treeZ),A.root.scale.setScalar(nt.giftScale),A.root.position.set(nt.giftX,nt.giftY,nt.giftZ),R.root.scale.setScalar(0),w();function ct(){tt(),j.disconnect(),P==null||P.dispose();const Y=new Set,it=new Set;u.traverse(rt=>{rt.geometry&&Y.add(rt.geometry),rt.material&&it.add(rt.material)}),Y.forEach(rt=>rt.dispose()),it.forEach(rt=>rt.dispose()),M.dispose(),E.dispose(),p.dispose(),l.dispose()}return{ready:s,setStage:Wt,setHold(Y){X=Y},drag(Y){q+=Y*.007},setPointer(Y,it){b.uniforms.uPointer.value.set(Y*3.5,2.5+it*3.5),P==null||P.setPointer(Y,it)},pause:tt,resume:w,dispose:ct}}const ta=[[76,1],[76,1],[76,2],[76,1],[76,1],[76,2],[76,1],[79,1],[72,1.5],[74,.5],[76,4],[77,1],[77,1],[77,1.5],[77,.5],[77,1],[76,1],[76,1],[76,.5],[76,.5],[76,1],[74,1],[74,1],[76,1],[74,2],[79,2]];function Mx(){let i,t,e=!1,n,r=0,s=0;function a(){if(i)return;const g=window.AudioContext||window.webkitAudioContext;g&&(i=new g,t=i.createGain(),t.gain.value=0,t.connect(i.destination))}function o(g,m,f=.13){if(!i)return;const _=440*2**((g-69)/12);[1,2.756].forEach((M,E)=>{const C=i.createOscillator(),A=i.createGain();C.type="sine",C.frequency.value=_*M,A.gain.setValueAtTime(1e-4,m),A.gain.exponentialRampToValueAtTime(f/(E*4+1),m+.008),A.gain.exponentialRampToValueAtTime(1e-4,m+1.8),C.connect(A),A.connect(t),C.start(m),C.stop(m+1.9),C.onended=()=>{C.disconnect(),A.disconnect()}})}function c(){if(!(!i||!e||i.state!=="running"))for(;r<i.currentTime+.35;){const[g,m]=ta[s%ta.length];o(g,r),s%4===0&&o(48+Math.floor(s/8)%3*5,r,.06),r+=m*.34,s++,s%ta.length===0&&(r+=1.4)}}function l(){clearInterval(n),r=i.currentTime+.05,c(),n=setInterval(c,150)}async function u(g){if(a(),!i)return!1;if(e=g,e)try{await i.resume()}catch{e=!1}return t.gain.setTargetAtTime(e?.45:0,i.currentTime,.15),e?l():clearInterval(n),e}function h(g){if(!i||!e)return;(g==="lighting"?[72,76,79,84]:[79,84,88]).forEach((f,_)=>o(f,i.currentTime+_*.11,.18))}function d(){clearInterval(n),(i==null?void 0:i.state)==="running"&&i.suspend()}async function p(){if(e&&i)try{await i.resume(),l()}catch{}}function x(){clearInterval(n),i&&i.close()}return{setEnabled:u,cue:h,pause:d,resume:p,dispose:x}}const un=document.querySelector("#experience"),bo=document.querySelector("#world"),Ae=document.querySelector("#hold-button"),is=document.querySelector("#sound-toggle"),Hl=document.querySelector(".journey"),Fi=Mx(),Sx=matchMedia("(prefers-reduced-motion: reduce)").matches,yx={intro:"大侦探，一份圣诞惊喜，等你开启。",tree:"长按星星 1.2 秒，点亮圣诞树。",lighting:"圣诞树正在点亮。",gift:"圣诞树亮了。划开缎带，或者轻触礼物。",opening:"礼物正在打开。",globe:"惊喜是一颗装着圣诞树的水晶球。轻触水晶球，绽放烟花。",finale:"大侦探，圣诞快乐。愿你今天的开心再多一点。"};let ge="intro",$t,us=!1,qa,Ci=!1,Nc=!1,Oi=0,hs=0,rr;function Fc(){document.querySelector("#scene-loading").hidden=!0,document.querySelector("#enter-button").disabled=!1}function Oc(){is.setAttribute("aria-pressed",String(Ci)),is.setAttribute("aria-label",Ci?"关闭音乐":"开启音乐"),is.querySelector(".sound-label").textContent=Ci?"音乐开启":"声音关闭"}function Eo(){clearTimeout(qa),us&&(ge==="lighting"||ge==="opening")&&(qa=setTimeout(()=>fn("complete"),Sx?500:1500))}function Za(){us||(us=!0,$t==null||$t.pause(),un.classList.add("is-fallback"),document.querySelector("#fallback-notice").hidden=!1,bo.hidden=!0,Fc(),Eo())}function Nn(){cancelAnimationFrame(hs),hs=0,Oi=0,Ae.style.setProperty("--hold","0deg"),Ae.classList.remove("is-holding"),rr!==void 0&&Ae.hasPointerCapture(rr)&&Ae.releasePointerCapture(rr),rr=void 0,$t==null||$t.setHold(0)}function fn(i){const t=qc(ge,i);if(t===ge)return;Nn(),ge=t,un.dataset.stage=ge,document.querySelectorAll("[data-for]").forEach(r=>{r.hidden=!r.dataset.for.split(" ").includes(ge)}),Hl.hidden=ge==="intro";const e={tree:0,lighting:0,gift:1,opening:1,globe:2,finale:3}[ge]??0;Hl.querySelectorAll(".journey-dot").forEach((r,s)=>{r.classList.toggle("is-active",s===e),r.classList.toggle("is-complete",s<e),s===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),Ae.disabled=ge==="lighting",document.querySelector("#hold-hint").textContent=ge==="lighting"?"你的圣诞树，亮了":"长按星星，点亮圣诞树",document.querySelector("#drag-hint").textContent=ge==="lighting"?"一点点魔法，正在发生":"左右轻滑，看看雪夜的另一面",document.querySelector("#gift-hint").textContent=ge==="opening"?"惊喜，正在打开":"划开缎带，拆开惊喜",document.querySelector("#announcer").textContent=yx[ge],$t==null||$t.setStage(ge),["lighting","opening","finale"].includes(ge)&&Fi.cue(ge),Eo();const n=un.querySelector(".scene-content:not([hidden]) h1, .scene-content:not([hidden]) h2");n==null||n.setAttribute("tabindex","-1"),i!=="light"&&(n==null||n.focus({preventScroll:!0}))}function Bc(i){if(!Oi||ge!=="tree")return;const t=Math.min((i-Oi)/1200,1);if(Ae.style.setProperty("--hold",`${t*360}deg`),$t==null||$t.setHold(t),t>=1){fn("light");return}hs=requestAnimationFrame(Bc)}function zc(){ge!=="tree"||Oi||(Oi=performance.now(),Ae.classList.add("is-holding"),hs=requestAnimationFrame(Bc))}Ae.addEventListener("pointerdown",i=>{i.button!==0||ge!=="tree"||(i.preventDefault(),rr=i.pointerId,Ae.setPointerCapture(i.pointerId),zc())});Ae.addEventListener("pointerup",Nn);Ae.addEventListener("pointercancel",Nn);Ae.addEventListener("lostpointercapture",Nn);Ae.addEventListener("contextmenu",i=>i.preventDefault());Ae.addEventListener("keydown",i=>{(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),zc())});Ae.addEventListener("keyup",i=>{(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),Nn())});Ae.addEventListener("blur",Nn);Ae.addEventListener("click",i=>{i.detail===0&&!Oi&&fn("light")});document.querySelector("#enter-button").addEventListener("click",async()=>{Nc||(Ci=await Fi.setEnabled(!0),Oc()),fn("enter")});is.addEventListener("click",async()=>{Nc=!0,Ci=await Fi.setEnabled(!Ci),Oc()});const Bi=document.querySelector("#gift-button");let Qn;Bi.addEventListener("pointerdown",i=>{Qn={x:i.clientX,y:i.clientY},Bi.setPointerCapture(i.pointerId)});Bi.addEventListener("pointermove",i=>{Qn&&Math.hypot(i.clientX-Qn.x,i.clientY-Qn.y)>45&&(Qn=void 0,fn("open"))});Bi.addEventListener("pointerup",()=>{Qn=void 0});Bi.addEventListener("pointercancel",()=>{Qn=void 0});Bi.addEventListener("click",()=>fn("open"));document.querySelector("#globe-button").addEventListener("click",()=>fn("celebrate"));document.querySelector("#celebrate-button").addEventListener("click",()=>fn("celebrate"));document.querySelector("#replay-button").addEventListener("click",()=>fn("replay"));let Ri;un.addEventListener("pointerdown",i=>{ge==="tree"&&!i.target.closest("button, a")&&(Ri=i.clientX,un.setPointerCapture(i.pointerId))});un.addEventListener("pointermove",i=>{const t=un.getBoundingClientRect();$t==null||$t.setPointer((i.clientX/t.width-.5)*2,(.5-i.clientY/t.height)*2),Ri!==void 0&&($t==null||$t.drag(i.clientX-Ri),Ri=i.clientX)});un.addEventListener("pointerup",()=>{Ri=void 0});un.addEventListener("pointercancel",()=>{Ri=void 0});un.addEventListener("pointerleave",()=>$t==null?void 0:$t.setPointer(100,100));function Vc(){document.hidden?(Nn(),$t==null||$t.pause(),Fi.pause(),clearTimeout(qa)):(us||$t==null||$t.resume(),Fi.resume(),Eo())}document.addEventListener("visibilitychange",Vc);window.addEventListener("pagehide",()=>{Nn(),$t==null||$t.pause(),Fi.pause()});window.addEventListener("pageshow",Vc);bo.addEventListener("webglcontextlost",i=>{i.preventDefault(),Za()});try{$t=vx(bo,()=>fn("complete"),document.querySelector("#finale-title")),$t.ready.then(Fc,Za)}catch{Za()}
