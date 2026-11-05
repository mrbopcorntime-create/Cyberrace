(()=>{var Hd=0,Ph=1,zd=2;var Ih=0,Aa=1,Vd=2,mr=3,qn=0,We=1,ge=2,gs=0,gr=1,Se=2,Lh=3,Dh=4,Gd=5;var xs=100,Wd=101,qd=102,Xd=103,$d=104,Yd=200,Kd=201,Zd=202,Jd=203,Nh=204,Uh=205,jd=206,Qd=207,tf=208,ef=209,nf=210,sf=211,rf=212,af=213,of=214,No=0,Uo=1,Fo=2,js=3,ko=4,Oo=5,Bo=6,Ho=7,Fh=0,lf=1,cf=2,Oi=0,kh=1,Oh=2,Bh=3,Hh=4,zh=5,Vh=6,Gh=7;var Wh=300,vs=301,xr=302,xl=303,vl=304,Sn=1e3,an=1001,zo=1002,ze=1003,hf=1004;var Ra=1005;var Ve=1006,_l=1007;var ji=1008;var Mi=1009,qh=1010,Xh=1011,vr=1012,yl=1013,Pi=1014,Bi=1015,Ii=1016,Ml=1017,bl=1018,_s=1020,$h=35902,Yh=35899,Kh=1021,Zh=1022,yi=1023,wn=1026,Tn=1027,Sl=1028,wl=1029,Xn=1030,El=1031;var Tl=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Dl=37496,Nl=37488,Ul=37489,Da=37490,Fl=37491,kl=37808,Ol=37809,Bl=37810,Hl=37811,zl=37812,Vl=37813,Gl=37814,Wl=37815,ql=37816,Xl=37817,$l=37818,Yl=37819,Kl=37820,Zl=37821,Jl=36492,jl=36494,Ql=36495,tc=36283,ec=36284,Na=36285,ic=36286;var Zr=2300,Vo=2301,Lo=2302,_h=2303,yh=2400,Mh=2401,bh=2402;var uf=3200;var nc=0,df=1,Qi="",ii="srgb",rs="srgb-linear",Jr="linear",xe="srgb";var Do=7680;var ff=519,pf=512,mf=513,gf=514,Jh=515,xf=516,vf=517,jh=518,Qh=519,tu=35044;var eu="300 es",Di=2e3,Qs=2001;function um(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function dm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _f(){let s=jr("canvas");return s.style.display="block",s}var Qu={},tr=null;function Qr(...s){let t="THREE."+s.shift();tr?tr("log",t,...s):console.log(t,...s)}function yf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=yf(s);let t="THREE."+s.shift();if(tr)tr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=yf(s);let t="THREE."+s.shift();if(tr)tr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function $r(...s){let t=s.join(" ");t in Qu||(Qu[t]=!0,Vt(...s))}function Mf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bf={[No]:No,[Fo]:Bo,[ko]:ko,[js]:Oo,[Uo]:Uo,[Bo]:Fo,[Ho]:Ho,[Oo]:js},on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xc=Math.PI/180,Go=180/Math.PI;function $n(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hi[s&255]+hi[s>>8&255]+hi[s>>16&255]+hi[s>>24&255]+"-"+hi[t&255]+hi[t>>8&255]+"-"+hi[t>>16&15|64]+hi[t>>24&255]+"-"+hi[e&63|128]+hi[e>>8&255]+"-"+hi[e>>16&255]+hi[e>>24&255]+hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function fm(s,t){return(s%t+t)%t}function $c(s,t,e){return(1-e)*s+e*t}function Sf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wf(s,t){if(t.constructor===Float32Array)return s;let e=sc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Ef(s,t){if(t.constructor===Float32Array)return s;let e=sc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},si=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(h!==x||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+u*h+l*f-c*d,t[e+1]=l*p+u*d+c*h-o*f,t[e+2]=c*p+u*f+o*d-l*h,t[e+3]=u*p-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-r*n),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new R,td=new si,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],M=n[4],_=n[7],T=n[2],w=n[5],y=n[8];return r[0]=a*x+o*v+l*T,r[3]=a*g+o*M+l*w,r[6]=a*m+o*_+l*y,r[1]=c*x+u*v+h*T,r[4]=c*g+u*M+h*w,r[7]=c*m+u*_+h*y,r[2]=d*x+f*v+p*T,r[5]=d*g+f*M+p*w,r[8]=d*m+f*_+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=e*h+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(n*c-u*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(u*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return $r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return $r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kc=new $t,ed=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pm(){let s={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(n.r=bn(n.r),n.g=bn(n.g),n.b=bn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Jr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[rs]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:ed,fromXYZ:id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:ed,fromXYZ:id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}var ce=pm();function bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ds,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=jr("canvas")),Ds.width=t.width,Ds.height=t.height;let n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bn(e[i]/255)*255):e[i]=bn(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mm=0,er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Zc(n[a].image)):r.push(Zc(n[a]))}else r=Zc(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var gm=0,Jc=new R,vi=class s extends on{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=an,n=an,r=Ve,a=ji,o=yi,l=Mi,c=s.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=$n(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=Wh;vi.DEFAULT_ANISOTROPY=1;var Pe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(f+1)/2,T=(m+1)/2,w=(u+d)/4,y=(h+x)/4,b=(p+g)/4;return M>_&&M>T?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=y/i):_>T?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=w/n,r=b/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=y/r,n=b/r),this.set(i,n,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends on{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new vi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new er(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends qo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ta=class extends vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ft=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,i,n,r,a,o,l,c,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,u,h,d,f,p,x,g)}set(t,e,i,n,r,a,o,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*h,p=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,p=o*u,x=o*h;e[0]=l*u,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=p*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+p,e[10]=d-x*h}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,vm)}lookAt(t,e,i){let n=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Un.crossVectors(i,wi),Un.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Un.crossVectors(i,wi)),Un.normalize(),to.crossVectors(wi,Un),n[0]=Un.x,n[4]=to.x,n[8]=wi.x,n[1]=Un.y,n[5]=to.y,n[9]=wi.y,n[2]=Un.z,n[6]=to.z,n[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],M=i[7],_=i[11],T=i[15],w=n[0],y=n[4],b=n[8],C=n[12],A=n[1],I=n[5],N=n[9],k=n[13],L=n[2],O=n[6],G=n[10],V=n[14],it=n[3],q=n[7],j=n[11],tt=n[15];return r[0]=a*w+o*A+l*L+c*it,r[4]=a*y+o*I+l*O+c*q,r[8]=a*b+o*N+l*G+c*j,r[12]=a*C+o*k+l*V+c*tt,r[1]=u*w+h*A+d*L+f*it,r[5]=u*y+h*I+d*O+f*q,r[9]=u*b+h*N+d*G+f*j,r[13]=u*C+h*k+d*V+f*tt,r[2]=p*w+x*A+g*L+m*it,r[6]=p*y+x*I+g*O+m*q,r[10]=p*b+x*N+g*G+m*j,r[14]=p*C+x*k+g*V+m*tt,r[3]=v*w+M*A+_*L+T*it,r[7]=v*y+M*I+_*O+T*q,r[11]=v*b+M*N+_*G+T*j,r[15]=v*C+M*k+_*V+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*d,M=o*f-c*h,_=o*d-l*h,T=a*f-c*u,w=a*d-l*u,y=a*h-o*u;return e*(x*v-g*M+m*_)-i*(p*v-g*T+m*w)+n*(p*M-x*T+m*y)-r*(p*_-x*w+g*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-i*a,M=e*l-n*a,_=e*c-r*a,T=i*l-n*o,w=i*c-r*o,y=n*c-r*l,b=u*x-h*p,C=u*g-d*p,A=u*m-f*p,I=h*g-d*x,N=h*m-f*x,k=d*m-f*g,L=v*k-M*N+_*I+T*A-w*C+y*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*k-l*N+c*I)*O,t[1]=(n*N-i*k-r*I)*O,t[2]=(x*y-g*w+m*T)*O,t[3]=(d*w-h*y-f*T)*O,t[4]=(l*A-a*k-c*C)*O,t[5]=(e*k-n*A+r*C)*O,t[6]=(g*_-p*y-m*M)*O,t[7]=(u*y-d*_+f*M)*O,t[8]=(a*N-o*A+c*b)*O,t[9]=(i*A-e*N-r*b)*O,t[10]=(p*w-x*_+m*v)*O,t[11]=(h*_-u*w-f*v)*O,t[12]=(o*C-a*I-l*b)*O,t[13]=(e*I-i*C+n*b)*O,t[14]=(x*M-p*T-g*v)*O,t[15]=(u*T-h*M+d*v)*O,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,x=a*u,g=a*h,m=o*h,v=l*c,M=l*u,_=l*h,T=i.x,w=i.y,y=i.z;return n[0]=(1-(x+m))*T,n[1]=(f+_)*T,n[2]=(p-M)*T,n[3]=0,n[4]=(f-_)*w,n[5]=(1-(d+m))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(p+M)*y,n[9]=(g-v)*y,n[10]=(1-(d+x))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ns.set(n[0],n[1],n[2]).length(),o=Ns.set(n[4],n[5],n[6]).length(),l=Ns.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Wi.copy(this);let c=1/a,u=1/o,h=1/l;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=u,Wi.elements[5]*=u,Wi.elements[6]*=u,Wi.elements[8]*=h,Wi.elements[9]*=h,Wi.elements[10]*=h,e.setFromRotationMatrix(Wi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Di,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Di)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Di,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Di)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Qs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ns=new R,Wi=new Ft,xm=new R(0,0,0),vm=new R(1,1,1),Un=new R,to=new R,wi=new R,nd=new Ft,sd=new si,Yi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sd.setFromEuler(this),this.setFromQuaternion(sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_m=0,rd=new R,Us=new si,gn=new Ft,eo=new R,Fr=new R,ym=new R,Mm=new si,ad=new R(1,0,0),od=new R(0,1,0),ld=new R(0,0,1),cd={type:"added"},bm={type:"removed"},Fs={type:"childadded",child:null},jc={type:"childremoved",child:null},Ne=class s extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new Yi,i=new si,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ft},normalMatrix:{value:new $t}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(ad,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ld,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ad,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?eo.copy(t):eo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fr,eo,this.up):gn.lookAt(eo,Fr,this.up),this.quaternion.setFromRotationMatrix(gn),n&&(gn.extractRotation(n.matrixWorld),Us.setFromRotationMatrix(gn),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cd),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bm),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cd),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},io={h:0,s:0,l:0};function Qc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=fm(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Qc(a,r,t+1/3),this.g=Qc(a,r,t),this.b=Qc(a,r,t-1/3)}return ce.colorSpaceToWorking(this,n),this}setStyle(t,e=ii){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let i=Tf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return ce.workingToColorSpace(ui.copy(this),t),Math.round(re(ui.r*255,0,255))*65536+Math.round(re(ui.g*255,0,255))*256+Math.round(re(ui.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(ui.copy(this),e);let i=ui.r,n=ui.g,r=ui.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(ui.copy(this),e),t.r=ui.r,t.g=ui.g,t.b=ui.b,t}getStyle(t=ii){ce.workingToColorSpace(ui.copy(this),t);let e=ui.r,i=ui.g,n=ui.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(io);let i=$c(Fn.h,io.h,e),n=$c(Fn.s,io.s,e),r=$c(Fn.l,io.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new Et;Et.NAMES=Tf;var as=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ln=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qi=new R,xn=new R,th=new R,vn=new R,ks=new R,Os=new R,hd=new R,eh=new R,ih=new R,nh=new R,sh=new Pe,rh=new Pe,ah=new Pe,Mn=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),qi.subVectors(t,e),n.cross(qi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){qi.subVectors(n,e),xn.subVectors(i,e),th.subVectors(t,e);let a=qi.dot(qi),o=qi.dot(xn),l=qi.dot(th),c=xn.dot(xn),u=xn.dot(th),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return sh.setScalar(0),rh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(sh,r.x),a.addScaledVector(rh,r.y),a.addScaledVector(ah,r.z),a}static isFrontFacing(t,e,i,n){return qi.subVectors(i,e),xn.subVectors(t,e),qi.cross(xn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),qi.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;ks.subVectors(n,i),Os.subVectors(r,i),eh.subVectors(t,i);let l=ks.dot(eh),c=Os.dot(eh);if(l<=0&&c<=0)return e.copy(i);ih.subVectors(t,n);let u=ks.dot(ih),h=Os.dot(ih);if(u>=0&&h<=u)return e.copy(n);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(ks,a);nh.subVectors(t,r);let f=ks.dot(nh),p=Os.dot(nh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Os,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return hd.subVectors(r,n),o=(h-u)/(h-u+(f-p)),e.copy(n).addScaledVector(hd,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(ks,a).addScaledVector(Os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ni=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),so.subVectors(this.max,kr),Bs.subVectors(t.a,kr),Hs.subVectors(t.b,kr),zs.subVectors(t.c,kr),kn.subVectors(Hs,Bs),On.subVectors(zs,Hs),ts.subVectors(Bs,zs);let e=[0,-kn.z,kn.y,0,-On.z,On.y,0,-ts.z,ts.y,kn.z,0,-kn.x,On.z,0,-On.x,ts.z,0,-ts.x,-kn.y,kn.x,0,-On.y,On.x,0,-ts.y,ts.x,0];return!oh(e,Bs,Hs,zs,so)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,Bs,Hs,zs,so))?!1:(ro.crossVectors(kn,On),e=[ro.x,ro.y,ro.z],oh(e,Bs,Hs,zs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_n=[new R,new R,new R,new R,new R,new R,new R,new R],Xi=new R,no=new Ni,Bs=new R,Hs=new R,zs=new R,kn=new R,On=new R,ts=new R,kr=new R,so=new R,ro=new R,es=new R;function oh(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){es.fromArray(s,r);let o=n.x*Math.abs(es.x)+n.y*Math.abs(es.y)+n.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var He=new R,ao=new et,wm=0,Ce=class extends on{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=t!==void 0?sc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ef(t,this.array)}};var ia=class extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var na=class extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var kt=class extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}},Em=new Ni,Or=new R,lh=new R,cn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Em.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Or,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(lh)),this.expandByPoint(Or.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tm=0,Li=new Ft,ch=new Ne,Vs=new R,Ei=new Ni,Br=new Ni,Je=new R,ie=class s extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(um(t)?na:ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,e,i){return Li.makeTranslation(t,e,i),this.applyMatrix4(Li),this}scale(t,e,i){return Li.makeScale(t,e,i),this.applyMatrix4(Li),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Ei.min,Br.min),Ei.expandByPoint(Je),Je.addVectors(Ei.max,Br.max),Ei.expandByPoint(Je)):(Ei.expandByPoint(Br.min),Ei.expandByPoint(Br.max))}Ei.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(t,c),Je.add(Vs)),n=Math.max(n,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ce(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new R,l[C]=new R;let u=new R,h=new R,d=new R,f=new et,p=new et,x=new et,g=new R,m=new R;function v(C,A,I){c[C]=c[A]=c[I]=1,u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,I),h.sub(u),d.sub(u),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(N),o[C].add(g),o[A].add(g),o[I].add(g),l[C].add(m),l[A].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,A=M.length;C<A;++C){let I=M[C],N=I.start,k=I.count;for(let L=N,O=N+k;L<O;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new R,T=new R,w=new R,y=new R;function b(C){w.fromBufferAttribute(n,C),y.copy(w);let A=o[C];_.copy(A),_.sub(w.multiplyScalar(w.dot(A))).normalize(),T.crossVectors(y,A);let N=T.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,N)}for(let C=0,A=i.count;C<A;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Ce(d,u,h)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(n[l]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ud(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ud(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ud(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=$n()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var xi=new R,nr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?sc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyMatrix4(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyNormalMatrix(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.transformDirection(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ef(t,this.data.array)}},hh=new R,Am=new R,Rm=new $t,$i=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=hh.subVectors(i,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(hh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Rm.getNormalMatrix(t),n=this.coplanarPoint(hh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cm=0,Ui=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=gr,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ki=class extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,Hr=new R,Ws=new R,qs=new R,Xs=new et,zr=new et,Af=new Ft,oo=new R,Vr=new R,lo=new R,dd=new et,uh=new et,fd=new et,hn=class extends Ne{constructor(t=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sa(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new nr(i,3,0,!1)),Gs.setAttribute("uv",new nr(i,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Af.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-qs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;co(oo.set(-.5,-.5,0),qs,a,Ws,n,r),co(Vr.set(.5,-.5,0),qs,a,Ws,n,r),co(lo.set(.5,.5,0),qs,a,Ws,n,r),dd.set(0,0),uh.set(1,0),fd.set(1,1);let o=t.ray.intersectTriangle(oo,Vr,lo,!1,Hr);if(o===null&&(co(Vr.set(-.5,.5,0),qs,a,Ws,n,r),uh.set(0,1),o=t.ray.intersectTriangle(oo,lo,Vr,!1,Hr),o===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:Mn.getInterpolation(Hr,oo,Vr,lo,dd,uh,fd,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function co(s,t,e,i,n,r){Xs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(zr.x=r*Xs.x-n*Xs.y,zr.y=n*Xs.x+r*Xs.y):zr.copy(Xs),s.copy(t),s.x+=zr.x,s.y+=zr.y,s.applyMatrix4(Af)}var ho=new R,pd=new R,ra=class extends Ne{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let i=0,n=e.length;i<n;i++){let r=e[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);let n=this.levels,r;for(r=0;r<n.length&&!(e<n[r].distance);r++);return n.splice(r,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){let n=e.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let i,n;for(i=1,n=e.length;i<n;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),t<r)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){ho.setFromMatrixPosition(this.matrixWorld);let n=t.ray.origin.distanceTo(ho);this.getObjectForDistance(n).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){ho.setFromMatrixPosition(t.matrixWorld),pd.setFromMatrixPosition(this.matrixWorld);let i=ho.distanceTo(pd)/t.zoom;e[0].object.visible=!0;let n,r;for(n=1,r=e.length;n<r;n++){let a=e[n].distance;if(e[n].object.visible&&(a-=a*e[n].hysteresis),i>=a)e[n-1].object.visible=!1,e[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)e[n].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let i=this.levels;for(let n=0,r=i.length;n<r;n++){let a=i[n];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},yn=new R,dh=new R,uo=new R,fo=new R,sr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){dh.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(dh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(dh).addScaledVector(uo,d),f}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let i=yn.dot(this.direction),n=yn.dot(yn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=i.x-a.x,v=i.y-a.y,M=i.z-a.z,_=Math.abs(l),T=Math.abs(c),w=Math.abs(u),y,b,C,A,I,N,k,L,O,G,V,it;if(_>=T&&_>=w?(C=l,N=h,O=p,it=m,l>=0?(y=c,b=u,A=d,I=f,k=x,L=g,G=v,V=M):(y=u,b=c,A=f,I=d,k=g,L=x,G=M,V=v)):T>=w?(C=c,N=d,O=x,it=v,c>=0?(y=u,b=l,A=f,I=h,k=g,L=p,G=M,V=m):(y=l,b=u,A=h,I=f,k=p,L=g,G=m,V=M)):(C=u,N=f,O=g,it=M,u>=0?(y=l,b=c,A=h,I=d,k=p,L=x,G=m,V=v):(y=c,b=l,A=d,I=h,k=x,L=p,G=v,V=m)),C===0)return null;let q=y/C,j=b/C,tt=1/C,Tt=A-q*N,zt=I-j*N,$=k-q*O,vt=L-j*O,At=G-q*it,Ot=V-j*it,_t=At*vt-Ot*$,Bt=Tt*Ot-zt*At,Ee=$*zt-vt*Tt;if(n){if(_t<0||Bt<0||Ee<0)return null}else if((_t<0||Bt<0||Ee<0)&&(_t>0||Bt>0||Ee>0))return null;let Gt=_t+Bt+Ee;if(Gt===0)return null;let Qt=tt*(_t*N+Bt*O+Ee*it);return(Gt>0?Qt<0:Qt>0)?null:this.at(Qt/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},md=new Ft,is=new sr,po=new cn,gd=new R,mo=new R,go=new R,xo=new R,fh=new R,vo=new R,xd=new R,_o=new R,rt=class extends Ne{constructor(t=new ie,e=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(fh.fromBufferAttribute(h,t),a?vo.addScaledVector(fh,u):vo.addScaledVector(fh.sub(e),u))}e.add(vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(po.containsPoint(is.origin)===!1&&(is.intersectSphere(po,gd)===null||is.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),is.copy(t.ray).applyMatrix4(md),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=M;_<T;_+=3){let w=o.getX(_),y=o.getX(_+1),b=o.getX(_+2);n=yo(this,m,t,i,c,u,h,w,y,b),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);n=yo(this,a,t,i,c,u,h,v,M,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=M;_<T;_+=3){let w=_,y=_+1,b=_+2;n=yo(this,m,t,i,c,u,h,w,y,b),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,M=g+1,_=g+2;n=yo(this,a,t,i,c,u,h,v,M,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Pm(s,t,e,i,n,r,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===qn,o),l===null)return null;_o.copy(o),_o.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:s}}function yo(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,mo),s.getVertexPosition(l,go),s.getVertexPosition(c,xo);let u=Pm(s,t,e,i,mo,go,xo,xd);if(u){let h=new R;Mn.getBarycoord(xd,mo,go,xo,h),n&&(u.uv=Mn.getInterpolatedAttribute(n,o,l,c,h,new et)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,o,l,c,h,new et)),a&&(u.normal=Mn.getInterpolatedAttribute(a,o,l,c,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Mn.getNormal(mo,go,xo,d.normal),u.face=d,u.barycoord=h}return u}var os=class extends vi{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ze,u=ze,h,d){super(null,a,o,l,c,u,n,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends Ce{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new Ft,vd=new Ft,Mo=[],_d=new Ni,Im=new Ft,Gr=new rt,Wr=new cn,Ti=class extends rt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Im)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),_d.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(_d)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Wr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,$s),vd.multiplyMatrices(i,$s),Gr.matrixWorld=vd,Gr.raycast(t,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new os(new Float32Array(n*this.count),n,this.count,Sl,Bi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new cn,Lm=new et(.5,.5),bo=new R,Hn=class{constructor(t=new $i,e=new $i,i=new $i,n=new $i,r=new $i,a=new $i){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],M=r[13],_=r[14],T=r[15];if(n[0].setComponents(c-a,f-u,m-p,T-v).normalize(),n[1].setComponents(c+a,f+u,m+p,T+v).normalize(),n[2].setComponents(c+o,f+h,m+x,T+M).normalize(),n[3].setComponents(c-o,f-h,m-x,T-M).normalize(),i)n[4].setComponents(l,d,g,_).normalize(),n[5].setComponents(c-l,f-d,m-g,T-_).normalize();else if(n[4].setComponents(c-l,f-d,m-g,T-_).normalize(),e===Di)n[5].setComponents(c+l,f+d,m+g,T+_).normalize();else if(e===Qs)n[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);let e=Lm.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(bo.x=n.normal.x>0?t.max.x:t.min.x,bo.y=n.normal.y>0?t.max.y:t.min.y,bo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yd=new Ft,$o=class s{constructor(){this.coordinateSystem=Di,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];yd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Hn),i[n].setFromProjectionMatrix(yd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Hn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var aa=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yo=new R,Ko=new R,Md=new Ft,qr=new sr,So=new cn,ph=new R,bd=new R,Zo=class extends Ne{constructor(t=new ie,e=new aa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Yo.fromBufferAttribute(e,n-1),Ko.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Yo.distanceTo(Ko);t.setAttribute("lineDistance",new kt(i,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(n),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;Md.copy(n).invert(),qr.copy(t.ray).applyMatrix4(Md);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),M=wo(this,t,qr,l,m,v,x);M&&e.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=wo(this,t,qr,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=wo(this,t,qr,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=wo(this,t,qr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wo(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(Yo.fromBufferAttribute(o,n),Ko.fromBufferAttribute(o,r),e.distanceSqToSegment(Yo,Ko,ph,bd)>i)return;ph.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:bd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Sd=new R,wd=new R,Jo=class extends Zo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Sd.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Sd.distanceTo(wd);t.setAttribute("lineDistance",new kt(i,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ls=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ed=new Ft,Sh=new sr,Eo=new cn,To=new R,zn=class extends Ne{constructor(t=new ie,e=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(n),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Ed.copy(n).invert(),Sh.copy(t.ray).applyMatrix4(Ed);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);To.fromBufferAttribute(h,g),Td(To,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,x=f;p<x;p++)To.fromBufferAttribute(h,p),Td(To,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Td(s,t,e,i,n,r,a){let o=Sh.distanceSqToPoint(s);if(o<e){let l=new R;Sh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var oa=class extends vi{constructor(t=[],e=vs,i,n,r,a,o,l,c,u){super(t,e,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},En=class extends vi{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends vi{constructor(t,e,i=Pi,n,r,a,o=ze,l=ze,c,u=wn,h=1){if(u!==wn&&u!==Tn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Zi{constructor(t,e=Pi,i=vs,n,r,a=ze,o=ze,l,c=wn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,n,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ue=class s extends ie{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function p(x,g,m,v,M,_,T,w,y,b,C){let A=_/y,I=T/b,N=_/2,k=T/2,L=w/2,O=y+1,G=b+1,V=0,it=0,q=new R;for(let j=0;j<G;j++){let tt=j*I-k;for(let Tt=0;Tt<O;Tt++){let zt=Tt*A-N;q[x]=zt*v,q[g]=tt*M,q[m]=L,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(Tt/y),h.push(1-j/b),V+=1}}for(let j=0;j<b;j++)for(let tt=0;tt<y;tt++){let Tt=d+tt+O*j,zt=d+tt+O*(j+1),$=d+(tt+1)+O*(j+1),vt=d+(tt+1)+O*j;l.push(Tt,zt,vt),l.push(zt,$,vt),it+=6}o.addGroup(f,it,C),f+=it,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},cs=class s extends ie{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,p=i*2+r,x=n+1,g=new R,m=new R;for(let v=0;v<=p;v++){let M=0,_=0,T=0,w=0;if(v<=i){let C=v/i,A=C*Math.PI/2;_=-u-t*Math.cos(A),T=t*Math.sin(A),w=-t*Math.cos(A),M=C*h}else if(v<=i+r){let C=(v-i)/r;_=-u+C*e,T=t,w=0,M=h+C*d}else{let C=(v-i-r)/i,A=C*Math.PI/2;_=u+t*Math.sin(A),T=t*Math.cos(A),w=t*Math.sin(A),M=h+d+C*h}let y=Math.max(0,Math.min(1,M/f)),b=0;v===0?b=.5/n:v===p&&(b=-.5/n);for(let C=0;C<=n;C++){let A=C/n,I=A*Math.PI*2,N=Math.sin(I),k=Math.cos(I);m.x=-T*k,m.y=_,m.z=T*N,o.push(m.x,m.y,m.z),g.set(-T*k,w,T*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+b,y)}if(v>0){let C=(v-1)*x;for(let A=0;A<n;A++){let I=C+A,N=C+A+1,k=v*x+A,L=v*x+A+1;a.push(I,N,k),a.push(N,L,k)}}}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ar=class s extends ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,u=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=i+h/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class s extends ie{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=i/2,m=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function v(){let _=new R,T=new R,w=0,y=(e-t)/i;for(let b=0;b<=r;b++){let C=[],A=b/r,I=A*(e-t)+t;for(let N=0;N<=n;N++){let k=N/n,L=k*l+o,O=Math.sin(L),G=Math.cos(L);T.x=I*O,T.y=-A*i+g,T.z=I*G,h.push(T.x,T.y,T.z),_.set(O,y,G).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-A),C.push(p++)}x.push(C)}for(let b=0;b<n;b++)for(let C=0;C<r;C++){let A=x[C][b],I=x[C+1][b],N=x[C+1][b+1],k=x[C][b+1];(t>0||C!==0)&&(u.push(A,I,k),w+=3),(e>0||C!==r-1)&&(u.push(I,N,k),w+=3)}c.addGroup(m,w,0),m+=w}function M(_){let T=p,w=new et,y=new R,b=0,C=_===!0?t:e,A=_===!0?1:-1;for(let N=1;N<=n;N++)h.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),p++;let I=p;for(let N=0;N<=n;N++){let L=N/n*l+o,O=Math.cos(L),G=Math.sin(L);y.x=C*G,y.y=g*A,y.z=C*O,h.push(y.x,y.y,y.z),d.push(0,A,0),w.x=O*.5+.5,w.y=G*.5*A+.5,f.push(w.x,w.y),p++}for(let N=0;N<n;N++){let k=T+N,L=I+N;_===!0?u.push(L,L+1,k):u.push(L+1,L,k),b+=3}c.addGroup(m,b,_===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class s extends Ji{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class s extends ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new R,_=new R,T=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],_),f(e[w+2],T),l(M,_,T,v)}function l(v,M,_,T){let w=T+1,y=[];for(let b=0;b<=w;b++){y[b]=[];let C=v.clone().lerp(_,b/w),A=M.clone().lerp(_,b/w),I=w-b;for(let N=0;N<=I;N++)N===0&&b===w?y[b][N]=C:y[b][N]=C.clone().lerp(A,N/I)}for(let b=0;b<w;b++)for(let C=0;C<2*(w-b)-1;C++){let A=Math.floor(C/2);C%2===0?(d(y[b][A+1]),d(y[b+1][A]),d(y[b][A])):(d(y[b][A+1]),d(y[b+1][A+1]),d(y[b+1][A]))}}function c(v){let M=new R;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let v=new R;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;a.push(_,1-T)}p(),h()}function h(){for(let v=0;v<a.length;v+=6){let M=a[v+0],_=a[v+2],T=a[v+4],w=Math.max(M,_,T),y=Math.min(M,_,T);w>.9&&y<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function p(){let v=new R,M=new R,_=new R,T=new R,w=new et,y=new et,b=new et;for(let C=0,A=0;C<r.length;C+=9,A+=6){v.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),w.set(a[A+0],a[A+1]),y.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),T.copy(v).add(M).add(_).divideScalar(3);let I=g(T);x(w,A+0,v,I),x(y,A+2,M,I),x(b,A+4,_,I)}}function x(v,M,_,T){T<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let u=i[n],d=i[n+1]-u,f=(a-u)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new et:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new R,n=[],r=[],a=[],o=new R,l=new Ft;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(re(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},or=class extends Ai{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends or{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function iu(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var Ad=new R,Rd=new R,mh=new iu,gh=new iu,xh=new iu,lr=class extends Ai{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%r]:(Rd.subVectors(n[0],n[1]).add(n[0]),c=Rd);let h=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(Ad.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Ad),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),mh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),gh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),xh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),xh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(mh.calc(l),gh.calc(l),xh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cd(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Dm(s,t){let e=1-s;return e*e*t}function Nm(s,t){return 2*(1-s)*s*t}function Um(s,t){return s*s*t}function Yr(s,t,e,i){return Dm(s,t)+Nm(s,e)+Um(s,i)}function Fm(s,t){let e=1-s;return e*e*e*t}function km(s,t){let e=1-s;return 3*e*e*s*t}function Om(s,t){return 3*(1-s)*s*s*t}function Bm(s,t){return s*s*s*t}function Kr(s,t,e,i,n){return Fm(s,t)+km(s,e)+Om(s,i)+Bm(s,n)}var da=class extends Ai{constructor(t=new et,e=new et,i=new et,n=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new et){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(t,n.x,r.x,a.x,o.x),Kr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends Ai{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(t,n.x,r.x,a.x,o.x),Kr(t,n.y,r.y,a.y,o.y),Kr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends Ai{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cr=class extends Ai{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Ai{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Yr(t,n.x,r.x,a.x),Yr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Ai{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Yr(t,n.x,r.x,a.x),Yr(t,n.y,r.y,a.y),Yr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Cd(o,l.x,c.x,u.x,h.x),Cd(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new et().fromArray(n))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:lr,CubicBezierCurve:da,CubicBezierCurve3:Qo,EllipseCurve:or,LineCurve:fa,LineCurve3:cr,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),el=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new tl[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},xa=class extends el{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fa(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new pa(this.currentPoint.clone(),new et(t,e),new et(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new da(this.currentPoint.clone(),new et(t,e),new et(i,n),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ga(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new or(t,e,i,n,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hs=class extends xa{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new xa().fromJSON(n))}return this}};function Hm(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Rf(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=qm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let u=o,h=l;for(let d=e;d<n;d+=e){let f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return va(r,a,e,o,l,c,0),a}function Rf(s,t,e,i,n){let r;if(n===i0(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=Pd(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Pd(a/i|0,s[a],s[a+1],r);return r&&hr(r,r.next)&&(ya(r),r=r.next),r}function us(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(hr(e,e.next)||Le(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function va(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Zm(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Vm(s,i,n,r):zm(s)){t.push(l.i,s.i,c.i),ya(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Gm(us(s),t),va(s,t,e,i,n,r,2)):a===2&&Wm(s,t,e,i,n,r):va(us(s),t,e,i,n,r,1);break}}}function zm(s){let t=s.prev,e=s,i=s.next;if(Le(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(n,r,a),h=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Xr(n,o,r,l,a,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vm(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Le(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,u=n.y,h=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),x=Math.max(o,l,c),g=Math.max(u,h,d),m=wh(f,p,t,e,i),v=wh(x,g,t,e,i),M=s.prevZ,_=s.nextZ;for(;M&&M.z>=m&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Xr(o,u,l,h,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Xr(o,u,l,h,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Xr(o,u,l,h,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Xr(o,u,l,h,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Gm(s,t){let e=s;do{let i=e.prev,n=e.next.next;!hr(i,n)&&Pf(i,e,e.next,n)&&_a(i,n)&&_a(n,i)&&(t.push(i.i,e.i,n.i),ya(e),ya(e.next),e=s=n),e=e.next}while(e!==s);return us(e)}function Wm(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qm(a,o)){let l=If(a,o);a=us(a,a.next),l=us(l,l.next),va(a,t,e,i,n,r,0),va(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function qm(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Rf(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(jm(c))}n.sort(Xm);for(let r=0;r<n.length;r++)e=$m(n[r],e);return e}function Xm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function $m(s,t){let e=Ym(s,t);if(!e)return t;let i=If(e,s);return us(i,i.next),us(e,e.next)}function Ym(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(hr(s,e))return e;do{if(hr(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let h=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Cf(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let h=Math.abs(n-e.y)/(i-e.x);_a(e,s)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Km(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function Km(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function Zm(s,t,e,i){let n=s;do n.z===0&&(n.z=wh(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Jm(n)}function Jm(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function wh(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function jm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Cf(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Xr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&Cf(s,t,e,i,n,r,a,o)}function Qm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!t0(s,t)&&(_a(s,t)&&_a(t,s)&&e0(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||hr(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function hr(s,t){return s.x===t.x&&s.y===t.y}function Pf(s,t,e,i){let n=Ro(Le(s,t,e)),r=Ro(Le(s,t,i)),a=Ro(Le(e,i,s)),o=Ro(Le(e,i,t));return!!(n!==r&&a!==o||n===0&&Ao(s,e,t)||r===0&&Ao(s,i,t)||a===0&&Ao(e,s,i)||o===0&&Ao(e,t,i))}function Ao(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ro(s){return s>0?1:s<0?-1:0}function t0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function _a(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function e0(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function If(s,t){let e=Eh(s.i,s.x,s.y),i=Eh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Pd(s,t,e,i){let n=Eh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ya(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Eh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Th=class{static triangulate(t,e,i=2){return Hm(t,e,i)}},ss=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];Id(t),Ld(i,t);let a=t.length;e.forEach(Id);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Ld(i,e[l]);let o=Th.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Id(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ld(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ur=class s extends ie{constructor(t=new hs([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new kt(n,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:n0,M,_=!1,T,w,y,b;if(m){M=m.getSpacedPoints(u),_=!0,d=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,Q),w=new R,y=new R,b=new R}d||(g=0,f=0,p=0,x=0);let C=o.extractPoints(c),A=C.shape,I=C.holes;if(!ss.isClockWise(A)){A=A.reverse();for(let Q=0,ht=I.length;Q<ht;Q++){let ot=I[Q];ss.isClockWise(ot)&&(I[Q]=ot.reverse())}}function k(Q){let ot=10000000000000001e-36,wt=Q[0];for(let xt=1;xt<=Q.length;xt++){let Kt=xt%Q.length,Dt=Q[Kt],se=Dt.x-wt.x,ae=Dt.y-wt.y,fe=se*se+ae*ae,F=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(wt.x),Math.abs(wt.y)),Oe=ot*F*F;if(fe<=Oe){Q.splice(Kt,1),xt--;continue}wt=Dt}}k(A),I.forEach(k);let L=I.length,O=A;for(let Q=0;Q<L;Q++){let ht=I[Q];A=A.concat(ht)}function G(Q,ht,ot){return ht||Wt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ht,ot)}let V=A.length;function it(Q,ht,ot){let wt,xt,Kt,Dt=Q.x-ht.x,se=Q.y-ht.y,ae=ot.x-Q.x,fe=ot.y-Q.y,F=Dt*Dt+se*se,Oe=Dt*fe-se*ae;if(Math.abs(Oe)>Number.EPSILON){let ee=Math.sqrt(F),ye=Math.sqrt(ae*ae+fe*fe),pt=ht.x-se/ee,De=ht.y+Dt/ee,Ht=ot.x-fe/ye,qt=ot.y+ae/ye,P=((Ht-pt)*fe-(qt-De)*ae)/(Dt*fe-se*ae);wt=pt+Dt*P-Q.x,xt=De+se*P-Q.y;let S=wt*wt+xt*xt;if(S<=2)return new et(wt,xt);Kt=Math.sqrt(S/2)}else{let ee=!1;Dt>Number.EPSILON?ae>Number.EPSILON&&(ee=!0):Dt<-Number.EPSILON?ae<-Number.EPSILON&&(ee=!0):Math.sign(se)===Math.sign(fe)&&(ee=!0),ee?(wt=-se,xt=Dt,Kt=Math.sqrt(F)):(wt=Dt,xt=se,Kt=Math.sqrt(F/2))}return new et(wt/Kt,xt/Kt)}let q=[];for(let Q=0,ht=O.length,ot=ht-1,wt=Q+1;Q<ht;Q++,ot++,wt++)ot===ht&&(ot=0),wt===ht&&(wt=0),q[Q]=it(O[Q],O[ot],O[wt]);let j=[],tt,Tt=q.concat();for(let Q=0,ht=L;Q<ht;Q++){let ot=I[Q];tt=[];for(let wt=0,xt=ot.length,Kt=xt-1,Dt=wt+1;wt<xt;wt++,Kt++,Dt++)Kt===xt&&(Kt=0),Dt===xt&&(Dt=0),tt[wt]=it(ot[wt],ot[Kt],ot[Dt]);j.push(tt),Tt=Tt.concat(tt)}let zt;if(g===0)zt=ss.triangulateShape(O,I);else{let Q=[],ht=[];for(let ot=0;ot<g;ot++){let wt=ot/g,xt=f*Math.cos(wt*Math.PI/2),Kt=p*Math.sin(wt*Math.PI/2)+x;for(let Dt=0,se=O.length;Dt<se;Dt++){let ae=G(O[Dt],q[Dt],Kt);Bt(ae.x,ae.y,-xt),wt===0&&Q.push(ae)}for(let Dt=0,se=L;Dt<se;Dt++){let ae=I[Dt];tt=j[Dt];let fe=[];for(let F=0,Oe=ae.length;F<Oe;F++){let ee=G(ae[F],tt[F],Kt);Bt(ee.x,ee.y,-xt),wt===0&&fe.push(ee)}wt===0&&ht.push(fe)}}zt=ss.triangulateShape(Q,ht)}let $=zt.length,vt=p+x;for(let Q=0;Q<V;Q++){let ht=d?G(A[Q],Tt[Q],vt):A[Q];_?(y.copy(T.normals[0]).multiplyScalar(ht.x),w.copy(T.binormals[0]).multiplyScalar(ht.y),b.copy(M[0]).add(y).add(w),Bt(b.x,b.y,b.z)):Bt(ht.x,ht.y,0)}for(let Q=1;Q<=u;Q++)for(let ht=0;ht<V;ht++){let ot=d?G(A[ht],Tt[ht],vt):A[ht];_?(y.copy(T.normals[Q]).multiplyScalar(ot.x),w.copy(T.binormals[Q]).multiplyScalar(ot.y),b.copy(M[Q]).add(y).add(w),Bt(b.x,b.y,b.z)):Bt(ot.x,ot.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){let ht=Q/g,ot=f*Math.cos(ht*Math.PI/2),wt=p*Math.sin(ht*Math.PI/2)+x;for(let xt=0,Kt=O.length;xt<Kt;xt++){let Dt=G(O[xt],q[xt],wt);Bt(Dt.x,Dt.y,h+ot)}for(let xt=0,Kt=I.length;xt<Kt;xt++){let Dt=I[xt];tt=j[xt];for(let se=0,ae=Dt.length;se<ae;se++){let fe=G(Dt[se],tt[se],wt);_?Bt(fe.x,fe.y+M[u-1].y,M[u-1].x+ot):Bt(fe.x,fe.y,h+ot)}}}At(),Ot();function At(){let Q=n.length/3;if(d){let ht=0,ot=V*ht;for(let wt=0;wt<$;wt++){let xt=zt[wt];Ee(xt[2]+ot,xt[1]+ot,xt[0]+ot)}ht=u+g*2,ot=V*ht;for(let wt=0;wt<$;wt++){let xt=zt[wt];Ee(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let ht=0;ht<$;ht++){let ot=zt[ht];Ee(ot[2],ot[1],ot[0])}for(let ht=0;ht<$;ht++){let ot=zt[ht];Ee(ot[0]+V*u,ot[1]+V*u,ot[2]+V*u)}}i.addGroup(Q,n.length/3-Q,0)}function Ot(){let Q=n.length/3,ht=0;_t(O,ht),ht+=O.length;for(let ot=0,wt=I.length;ot<wt;ot++){let xt=I[ot];_t(xt,ht),ht+=xt.length}i.addGroup(Q,n.length/3-Q,1)}function _t(Q,ht){let ot=Q.length;for(;--ot>=0;){let wt=ot,xt=ot-1;xt<0&&(xt=Q.length-1);for(let Kt=0,Dt=u+g*2;Kt<Dt;Kt++){let se=V*Kt,ae=V*(Kt+1),fe=ht+wt+se,F=ht+xt+se,Oe=ht+xt+ae,ee=ht+wt+ae;Gt(fe,F,Oe,ee)}}}function Bt(Q,ht,ot){l.push(Q),l.push(ht),l.push(ot)}function Ee(Q,ht,ot){Qt(Q),Qt(ht),Qt(ot);let wt=n.length/3,xt=v.generateTopUV(i,n,wt-3,wt-2,wt-1);ne(xt[0]),ne(xt[1]),ne(xt[2])}function Gt(Q,ht,ot,wt){Qt(Q),Qt(ht),Qt(wt),Qt(ht),Qt(ot),Qt(wt);let xt=n.length/3,Kt=v.generateSideWallUV(i,n,xt-6,xt-3,xt-2,xt-1);ne(Kt[0]),ne(Kt[1]),ne(Kt[3]),ne(Kt[1]),ne(Kt[2]),ne(Kt[3])}function Qt(Q){n.push(l[Q*3+0]),n.push(l[Q*3+1]),n.push(l[Q*3+2])}function ne(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return s0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new tl[n.type]().fromJSON(n)),new s(i,t.options)}},n0={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],u=t[n*3+1];return[new et(r,a),new et(o,l),new et(c,u)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-h),new et(d,1-p),new et(x,1-m)]:[new et(o,1-l),new et(u,1-h),new et(f,1-p),new et(g,1-m)]}};function s0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var dr=class s extends ua{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ds=class s extends ua{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ue=class s extends ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*d-a;for(let M=0;M<c;M++){let _=M*h-r;p.push(_,-v,0),x.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let M=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),w=v+1+c*m;f.push(M,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ma=class s extends ie{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/n,f=new R,p=new et;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=r+g/i*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,M=v,_=v+i+1,T=v+i+2,w=v+1;o.push(M,_,w),o.push(_,T,w)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ri=class s extends ie{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new R,d=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],M=m/i,_=a+M*o,T=t*Math.cos(_),w=Math.sqrt(t*t-T*T),y=0;m===0&&a===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let C=b/e,A=n+C*r;h.x=-w*Math.cos(A),h.y=T,h.z=w*Math.sin(A),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(C+y,1-M),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let M=u[m][v+1],_=u[m][v],T=u[m+1][v],w=u[m+1][v+1];(m!==0||a>0)&&f.push(M,_,w),(m!==i-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fi=class s extends ie{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],h=[],d=new R,f=new R,p=new R;for(let x=0;x<=i;x++){let g=a+x/i*o;for(let m=0;m<=n;m++){let v=m/n*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/n),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){let m=(n+1)*x+g-1,v=(n+1)*(x-1)+g-1,M=(n+1)*(x-1)+g,_=(n+1)*x+g;l.push(m,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ba=class s extends ie{constructor(t=new ma(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new et,u=new R,h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function x(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),v(),m()}function g(M){u=t.getPointAt(M/e,u);let _=a.normals[M],T=a.binormals[M];for(let w=0;w<=n;w++){let y=w/n*Math.PI*2,b=Math.sin(y),C=-Math.cos(y);l.x=C*_.x+b*T.x,l.y=C*_.y+b*T.y,l.z=C*_.z+b*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let _=1;_<=n;_++){let T=(n+1)*(M-1)+(_-1),w=(n+1)*M+(_-1),y=(n+1)*M+_,b=(n+1)*(M-1)+_;p.push(T,w,b),p.push(w,y,b)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=n;_++)c.x=M/e,c.y=_/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new tl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var fs=class extends Ui{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Et(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ys(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Dd(n))n.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Dd(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function di(s){let t={};for(let e=0;e<s.length;e++){let i=ys(s[e]);for(let n in i)t[n]=i[n]}return t}function Dd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function r0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Lf={clone:ys,merge:di},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Et().setHex(n.value);break;case"v2":this.uniforms[i].value=new et().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fr=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var nl=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ys(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Co(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Vn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends Vn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:r=t,o=2*e-i;break;case bh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:a=t,l=2*i-e;break;case bh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+v*a[c+T]+M*a[l+T]+_*a[h+T];return r}},al=class extends Vn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(n-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},ol=class extends Vn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends Vn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-e)/(n-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*d+p*2,v=h[m],M=h[m+1],_=t*d+p*2,T=u[_],w=u[_+1],y=c0(i,e,v,T,n);r[p]=Df(y,x,M,w,g)}return r}};function Df(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function l0(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function c0(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=Df(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=l0(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ci=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Co(t.settings)&&(i.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case _h:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Co(this.settings)&&(Nd(this.settings.inTangents,t),Nd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Co(this.settings)&&(Ud(this.settings.inTangents,t),Ud(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&dm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(n)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=e[h+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Co(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Nd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Ud(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Vo;var Gn=class extends Ci{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Zr;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Ci{constructor(t,e,i,n){super(t,e,i,n)}};cl.prototype.ValueTypeName="color";var hl=class extends Ci{constructor(t,e,i,n){super(t,e,i,n)}};hl.prototype.ValueTypeName="number";var ul=class extends Vn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let u=c+o;c!==u;c+=4)si.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sa=class extends Ci{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ci{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Zr;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Ci{constructor(t,e,i,n){super(t,e,i,n)}};dl.prototype.ValueTypeName="vector";var fl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nf=new fl,pl=class{constructor(t){this.manager=t!==void 0?t:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ps=class extends wa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vh=new Ft,Fd=new R,kd=new R,ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Qs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new R,Io=new si,rn=new R,Ea=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Po,Io,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bn=new R,Od=new et,Bd=new et,ni=class extends Ea{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Od,Bd),e.subVectors(Bd,Od)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ms=class extends Ea{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ah=class extends ml{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ks=-90,Zs=1,pr=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ni(Ks,Zs,t,e);n.layers=this.layers,this.add(n);let r=new ni(Ks,Zs,t,e);r.layers=this.layers,this.add(r);let a=new ni(Ks,Zs,t,e);a.layers=this.layers,this.add(a);let o=new ni(Ks,Zs,t,e);o.layers=this.layers,this.add(o);let l=new ni(Ks,Zs,t,e);l.layers=this.layers,this.add(l);let c=new ni(Ks,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},gl=class extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var su="\\[\\]\\.:\\/",h0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",u0="[^"+su.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",ru),f0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),g0=new RegExp("^"+d0+f0+p0+m0+"$"),x0=["material","materials","bones","map"],Rh=class{constructor(t,e,i){let n=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(t){let e=g0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);x0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Rh;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var Ch=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};var Ta=class extends Jo{constructor(t=10,e=10,i=4473924,n=8947848){i=new Et(i),n=new Et(n);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=e;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=d===r?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new ie;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));let h=new aa({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function au(s,t,e,i){let n=v0(i);switch(e){case Kh:return s*t;case Sl:return s*t/n.components*n.byteLength;case wl:return s*t/n.components*n.byteLength;case Xn:return s*t*2/n.components*n.byteLength;case El:return s*t*2/n.components*n.byteLength;case Zh:return s*t*3/n.components*n.byteLength;case yi:return s*t*4/n.components*n.byteLength;case Tl:return s*t*4/n.components*n.byteLength;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(s,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(s,8)*Math.max(t,8)/2;case Il:case Ll:case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Da:case Fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tc:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Na:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(s){switch(s){case Mi:case qh:return{byteLength:1,components:1};case vr:case Xh:case Ii:return{byteLength:2,components:1};case Ml:case bl:return{byteLength:2,components:4};case Pi:case yl:case Bi:return{byteLength:4,components:1};case $h:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ip(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function w0(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ng=`#if defined( USE_POINTS_UV )
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
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xx=`#define PHONG
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
}`,$x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Yx=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Zx=`#define TOON
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
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,iv=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:k0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:$0,common:Y0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:j0,emissivemap_pars_fragment:Q0,colorspace_fragment:tg,colorspace_pars_fragment:eg,envmap_fragment:ig,envmap_common_pars_fragment:ng,envmap_pars_fragment:sg,envmap_pars_vertex:rg,envmap_physical_pars_fragment:gg,envmap_vertex:ag,fog_vertex:og,fog_pars_vertex:lg,fog_fragment:cg,fog_pars_fragment:hg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:dg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:xg,lights_toon_pars_fragment:vg,lights_phong_fragment:_g,lights_phong_pars_fragment:yg,lights_physical_fragment:Mg,lights_physical_pars_fragment:bg,lights_fragment_begin:Sg,lights_fragment_maps:wg,lights_fragment_end:Eg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ng,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Fg,morphinstance_vertex:kg,morphcolor_vertex:Og,morphnormal_vertex:Bg,morphtarget_pars_vertex:Hg,morphtarget_vertex:zg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:qg,normal_vertex:Xg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:jg,packing:Qg,premultiplied_alpha_fragment:tx,project_vertex:ex,dithering_fragment:ix,dithering_pars_fragment:nx,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:ox,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:xx,transmission_fragment:vx,transmission_pars_fragment:_x,uv_pars_fragment:yx,uv_pars_vertex:Mx,uv_vertex:bx,worldpos_vertex:Sx,background_vert:wx,background_frag:Ex,backgroundCube_vert:Tx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Ix,distance_vert:Lx,distance_frag:Dx,equirect_vert:Nx,equirect_frag:Ux,linedashed_vert:Fx,linedashed_frag:kx,meshbasic_vert:Ox,meshbasic_frag:Bx,meshlambert_vert:Hx,meshlambert_frag:zx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:qx,meshphong_vert:Xx,meshphong_frag:$x,meshphysical_vert:Yx,meshphysical_frag:Kx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:jx,points_frag:Qx,shadow_vert:tv,shadow_frag:ev,sprite_vert:iv,sprite_frag:nv},Mt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},dn={basic:{uniforms:di([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:di([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:di([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:di([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:di([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:di([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:di([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:di([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:di([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:di([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:di([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:di([Mt.common,Mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:di([Mt.lights,Mt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};dn.physical={uniforms:di([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var rc={r:0,b:0,g:0},sv=new Ft,np=new $t;np.set(-1,0,0,0,1,0,0,0,1);function rv(s,t,e,i,n,r){let a=new Et(0),o=n===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function p(v){let M=!1,_=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){let _=f(M);_&&_.isCubeTexture?(c===void 0&&(c=new rt(new ue(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ys(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(np),c.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,(u!==_||h!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new rt(new Ue(2,2),new ri({name:"BackgroundMaterial",uniforms:ys(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(rc,nu(s)),e.buffers.color.setClear(rc.r,rc.g,rc.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function av(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(I,N,k,L,O){let G=!1,V=h(I,L,k,N);r!==V&&(r=V,c(r.object)),G=f(I,L,k,O),G&&p(I,L,k,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(I,N,k,L),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function h(I,N,k,L){let O=L.wireframe===!0,G=i[N.id];G===void 0&&(G={},i[N.id]=G);let V=I.isInstancedMesh===!0?I.id:0,it=G[V];it===void 0&&(it={},G[V]=it);let q=it[k.id];q===void 0&&(q={},it[k.id]=q);let j=q[O];return j===void 0&&(j=d(l()),q[O]=j),j}function d(I){let N=[],k=[],L=[];for(let O=0;O<e;O++)N[O]=0,k[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,k,L){let O=r.attributes,G=N.attributes,V=0,it=k.getAttributes();for(let q in it)if(it[q].location>=0){let tt=O[q],Tt=G[q];if(Tt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function p(I,N,k,L){let O={},G=N.attributes,V=0,it=k.getAttributes();for(let q in it)if(it[q].location>=0){let tt=G[q];tt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),O[q]=Tt,V++}r.attributes=O,r.attributesNum=V,r.index=L}function x(){let I=r.newAttributes;for(let N=0,k=I.length;N<k;N++)I[N]=0}function g(I){m(I,0)}function m(I,N){let k=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;k[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let k=0,L=N.length;k<L;k++)N[k]!==I[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function M(I,N,k,L,O,G,V){V===!0?s.vertexAttribIPointer(I,N,k,O,G):s.vertexAttribPointer(I,N,k,L,O,G)}function _(I,N,k,L){x();let O=L.attributes,G=k.getAttributes(),V=N.defaultAttributeValues;for(let it in G){let q=G[it];if(q.location>=0){let j=O[it];if(j===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let tt=j.normalized,Tt=j.itemSize,zt=t.get(j);if(zt===void 0)continue;let $=zt.buffer,vt=zt.type,At=zt.bytesPerElement,Ot=vt===s.INT||vt===s.UNSIGNED_INT||j.gpuType===yl;if(j.isInterleavedBufferAttribute){let _t=j.data,Bt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Ee=j.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Gt=0;Gt<q.locationSize;Gt++)m(q.location+Gt,_t.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Gt=0;Gt<q.locationSize;Gt++)g(q.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Gt=0;Gt<q.locationSize;Gt++)M(q.location+Gt,Tt/q.locationSize,vt,tt,Bt*At,(Ee+Tt/q.locationSize*Gt)*At,Ot)}else{if(j.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<q.locationSize;_t++)g(q.location+_t);s.bindBuffer(s.ARRAY_BUFFER,$);for(let _t=0;_t<q.locationSize;_t++)M(q.location+_t,Tt/q.locationSize,vt,tt,Tt*At,Tt/q.locationSize*_t*At,Ot)}}else if(V!==void 0){let tt=V[it];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(q.location,tt);break;case 3:s.vertexAttrib3fv(q.location,tt);break;case 4:s.vertexAttrib4fv(q.location,tt);break;default:s.vertexAttrib1fv(q.location,tt)}}}}v()}function T(){C();for(let I in i){let N=i[I];for(let k in N){let L=N[k];for(let O in L){let G=L[O];for(let V in G)u(G[V].object),delete G[V];delete L[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let k in N){let L=N[k];for(let O in L){let G=L[O];for(let V in G)u(G[V].object),delete G[V];delete L[O]}}delete i[I.id]}function y(I){for(let N in i){let k=i[N];for(let L in k){let O=k[L];if(O[I.id]===void 0)continue;let G=O[I.id];for(let V in G)u(G[V].object),delete G[V];delete O[I.id]}}}function b(I){for(let N in i){let k=i[N],L=I.isInstancedMesh===!0?I.id:0,O=k[L];if(O!==void 0){for(let G in O){let V=O[G];for(let it in V)u(V[it].object),delete V[it];delete O[G]}delete k[L],Object.keys(k).length===0&&delete i[N]}}}function C(){A(),a=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function ov(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lv(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(y){return!(y!==yi&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let b=y===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Mi&&y!==Bi&&!b&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:T,samples:w}}function cv(s){let t=this,e=null,i=0,n=!1,r=!1,a=new $i,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!n||p===null||p.length===0||r&&!g)r?u(null):c();else{let v=r?0:i,M=v*4,_=m.clippingState||null;l.value=_,_=u(p,d,M,f);for(let T=0;T!==M;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var ka=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new oa(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ue(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:gs});r.uniforms.tEquirect.value=e;let a=new rt(n,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Ve),new pr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Uf=256,hv=3,uv=20,sp=256,rp=16,dv=3,fv=new R,pv=new Et,yr=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pr(1,10,null),this._boxMesh=new rt(new ue(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=fv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(pv));let g=new pr(i,n,u);return g.position.copy(o),g.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uf,Sf(t))}_fromTexture(t,e){t.mapping===vs||t.mapping===xr?this._setSize(t.image.length===0?Uf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Ff(t,!1,!1),i=Math.log2(t)-hv;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ff(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===vs||t.mapping===xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mv(),this._integrationMaterial=gv());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rp);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-dv)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sp*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xv());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Ff(s,t,e){return new ka(s,{minFilter:ji,generateMipmaps:t,type:Ii,colorSpace:rs,depthBuffer:e})}function Oa(s,t,e){return new ri({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:We,blending:gs,depthTest:!1,depthWrite:!1})}function mv(){return Oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gv(){return Oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xv(){return Oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kf(){return Oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Of(){return Oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vv(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===xl||f===vl)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ka(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===xl||f===vl,x=f===vs||f===xr;if(p||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new yr(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new yr(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===xl?d.mapping=vs:f===vl&&(d.mapping=xr),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function _v(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&$r("WebGLRenderer: "+i+" extension not supported."),n}}}function yv(s,t,e,i){let n={},r=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(p){let x=p.attributes;for(let g in x)t.update(x[g],s.ARRAY_BUFFER)}function h(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,M=g.count>=65535?na:ia,_=new M(Math.ceil(v/3)*6,1),T=_.array;if(x!==null){let y=x.array;m=x.version;for(let b=0,C=0;b<v;b+=3){let A=y[b+0],I=y[b+1],N=y[b+2];T[C++]=A,T[C++]=I,T[C++]=I,T[C++]=N,T[C++]=N,T[C++]=A}}else{m=g.version;for(let y=0,b=0;y<v;y+=3){let C=y+0,A=y+1,I=y+2;T[b++]=C,T[b++]=A,T[b++]=A,T[b++]=I,T[b++]=I,T[b++]=C}}_.version=m;let w=r.get(p);w&&t.remove(w),r.set(p,_)}function d(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&h(p)}else h(p);return r.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Mv(s,t,e){let i;function n(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){s.drawElements(i,d,r,h*a),e.update(d,i,1)}function c(h,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,h*a,f),e.update(d,i,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Sv(s,t,e){let i=new WeakMap,n=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*T*4*h),y=new ta(w,_,T,h);y.type=Bi,y.needsUpdate=!0;let b=M*4;for(let A=0;A<h;A++){let I=g[A],N=m[A],k=v[A],L=_*T*4*A;for(let O=0;O<I.count;O++){let G=O*b;f===!0&&(n.fromBufferAttribute(I,O),w[L+G+0]=n.x,w[L+G+1]=n.y,w[L+G+2]=n.z,w[L+G+3]=0),p===!0&&(n.fromBufferAttribute(N,O),w[L+G+4]=n.x,w[L+G+5]=n.y,w[L+G+6]=n.z,w[L+G+7]=0),x===!0&&(n.fromBufferAttribute(k,O),w[L+G+8]=n.x,w[L+G+9]=n.y,w[L+G+10]=n.z,w[L+G+11]=k.itemSize===4?n.w:1)}}d={count:h,texture:y,size:new et(_,T)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function wv(s,t,e,i,n){let r=new WeakMap;function a(c){let u=n.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Ev={[kh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Vh]:"AGX_TONE_MAPPING",[Gh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function Tv(s,t,e,i,n,r){let a=new _i(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new ie;u.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new kt([0,2,0,0,2,0],2));let h=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new rt(u,h),f=new ms(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,v=null,M=[],_=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let y=0;y<M.length;y++){let b=M[y];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){M=T,_=M.length>0&&M[0].isRenderPass===!0;let w=a.width,y=a.height;M.length>0&&o===null&&(o=new _i(w,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new _i(w,y,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&M.some(C=>C.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Zi(w,y),r===!0&&(c.format=Tn,c.type=_s)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(w,y),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,w){if(g||T.toneMapping===Oi&&M.length===0)return!1;if(v=w,w!==null){let y=w.width,b=w.height;(a.width!==y||a.height!==b)&&this.setSize(y,b)}return _===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Oi,!0},this.hasRenderPass=function(){return _},this.end=function(T,w){T.toneMapping=m,g=!0;let y=a,b=o;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(T,b,y,w),A.needsSwap!==!1&&(y=b,b=b===o?l:o))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,h.defines={},ce.getTransfer(p)===xe&&(h.defines.SRGB_TRANSFER="");let C=Ev[x];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(v),T.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var ap=new vi,op=new Zi(1,1),lp=new la(1),cp=new ta,hp=new Xo,up=new oa,Bf=[],Hf=[],zf=new Float32Array(16),Vf=new Float32Array(9),Gf=new Float32Array(4);function Mr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Bf[n];if(r===void 0&&(r=new Float32Array(n),Bf[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function lc(s,t){let e=Hf[t];e===void 0&&(e=new Int32Array(t),Hf[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Av(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function Cv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function Pv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function Iv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Gf.set(i),s.uniformMatrix2fv(this.addr,!1,Gf),Xe(e,i)}}function Lv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Vf.set(i),s.uniformMatrix3fv(this.addr,!1,Vf),Xe(e,i)}}function Dv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;zf.set(i),s.uniformMatrix4fv(this.addr,!1,zf),Xe(e,i)}}function Nv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Uv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function Fv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function Ov(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function Hv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function zv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function cc(s){return s.version===0&&(s.compareFunction=Qh,s.needsUpdate=!0),s}function Vv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=cc(op):r=ap,e.setTexture2D(t||r,n)}function Gv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||hp,n)}function Wv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=cc(lp):r=up,e.setTextureCube(t||r,n)}function qv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||cp,n)}function Xv(s){switch(s){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Fv;case 35669:case 35673:return kv;case 5125:return Ov;case 36294:return Bv;case 36295:return Hv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return qv}}function $v(s,t){s.uniform1fv(this.addr,t)}function Yv(s,t){let e=Mr(t,this.size,2);s.uniform2fv(this.addr,e)}function Kv(s,t){let e=Mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Zv(s,t){let e=Mr(t,this.size,4);s.uniform4fv(this.addr,e)}function Jv(s,t){let e=Mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jv(s,t){let e=Mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qv(s,t){let e=Mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t_(s,t){s.uniform1iv(this.addr,t)}function e_(s,t){s.uniform2iv(this.addr,t)}function i_(s,t){s.uniform3iv(this.addr,t)}function n_(s,t){s.uniform4iv(this.addr,t)}function s_(s,t){s.uniform1uiv(this.addr,t)}function r_(s,t){s.uniform2uiv(this.addr,t)}function a_(s,t){s.uniform3uiv(this.addr,t)}function o_(s,t){s.uniform4uiv(this.addr,t)}function l_(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=cc(op):a=ap;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function c_(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||hp,r[a])}function h_(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=cc(lp):a=up;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function u_(s,t,e){let i=this.cache,n=t.length,r=lc(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||cp,r[a])}function d_(s){switch(s){case 5126:return $v;case 35664:return Yv;case 35665:return Kv;case 35666:return Zv;case 35674:return Jv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return i_;case 35669:case 35673:return n_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var cu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xv(e.type)}},hu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Wf(s,t){s.seq.push(t),s.map[t.id]=t}function f_(s,t,e){let i=s.name,n=i.length;for(ou.lastIndex=0;;){let r=ou.exec(i),a=ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Wf(e,c===void 0?new cu(o,s,t):new hu(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new uu(o),Wf(e,h)),e=h}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);f_(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function qf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var p_=37297,m_=0;function g_(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Xf=new $t;function x_(s){ce._getMatrix(Xf,ce.workingColorSpace,s);let t=`mat3( ${Xf.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case Jr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $f(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+g_(s.getShaderSource(t),o)}else return r}function v_(s,t){let e=x_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var __={[kh]:"Linear",[Oh]:"Reinhard",[Bh]:"Cineon",[Hh]:"ACESFilmic",[Vh]:"AgX",[Gh]:"Neutral",[zh]:"Custom"};function y_(s,t){let e=__[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ac=new R;function M_(){ce.getLuminanceCoefficients(ac);let s=ac.x.toFixed(4),t=ac.y.toFixed(4),e=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function S_(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function w_(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Fa(s){return s!==""}function Yf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(s){return s.replace(E_,T_)}function T_(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return du(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(s){return s.replace(A_,R_)}function R_(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Jf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C_={[Aa]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function P_(s){return C_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I_={[xr]:"ENVMAP_MODE_REFRACTION"};function L_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":I_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function N_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":D_[s.combine]||"ENVMAP_BLENDING_NONE"}function U_(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=P_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=L_(e),h=N_(e),d=b_(e),f=S_(r),p=n.createProgram(),x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fa).join(`
`),g.length>0&&(g+=`
`)):(x=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),g=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fa).join(`
`)),a=du(a),a=Yf(a,e),a=Kf(a,e),o=du(o),o=Yf(o,e),o=Kf(o,e),a=Zf(a),o=Zf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+a,M=m+g+o,_=qf(n,n.VERTEX_SHADER,v),T=qf(n,n.FRAGMENT_SHADER,M);n.attachShader(p,_),n.attachShader(p,T),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(A){if(s.debug.checkShaderErrors){let I=n.getProgramInfoLog(p)||"",N=n.getShaderInfoLog(_)||"",k=n.getShaderInfoLog(T)||"",L=I.trim(),O=N.trim(),G=k.trim(),V=!0,it=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,_,T);else{let q=$f(n,_,"vertex"),j=$f(n,T,"fragment");Wt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+q+`
`+j)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(O===""||G==="")&&(it=!1);it&&(A.diagnostics={runnable:V,programLog:L,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:g}})}n.deleteShader(_),n.deleteShader(T),y=new _r(n,p),b=w_(n,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(p,p_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=T,this}var F_=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new pu(t),e.set(t,i)),i}},pu=class{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}};function k_(s){return s===Xn||s===Da||s===Na}function O_(s,t,e,i,n,r){let a=new ea,o=new fu,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,C,A,I,N){let k=A.fog,L=I.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||O,G),it=d[y.type],q=i.precision;y.precision!==null&&(q=i.getMaxPrecision(y.precision),q!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",q,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=j!==void 0?j.length:0,Tt=0;L.morphAttributes.position!==void 0&&(Tt=1),L.morphAttributes.normal!==void 0&&(Tt=2),L.morphAttributes.color!==void 0&&(Tt=3);let zt,$,vt,At;if(it){let yt=dn[it];zt=yt.vertexShader,$=yt.fragmentShader}else{zt=y.vertexShader,$=y.fragmentShader;let yt=o.getVertexShaderStage(y),_e=o.getFragmentShaderStage(y);o.update(y,yt,_e),vt=yt.id,At=_e.id}let Ot=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Bt=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,Gt=!!y.map,Qt=!!y.matcap,ne=!!V,Q=ne&&V.isPMREMTexture===!0,ht=!!y.aoMap,ot=!!y.lightMap,wt=!!y.bumpMap&&y.wireframe===!1,xt=!!y.normalMap,Kt=!!y.displacementMap,Dt=!!y.emissiveMap,se=!!y.metalnessMap,ae=!!y.roughnessMap,fe=y.anisotropy>0,F=y.clearcoat>0,Oe=y.diffuseRoughness>0,ee=y.dispersion>0,ye=y.retroreflectivity>0,pt=y.iridescence>0,De=y.sheen>0,Ht=y.transmission>0,qt=fe&&!!y.anisotropyMap,P=F&&!!y.clearcoatMap,S=F&&!!y.clearcoatNormalMap,H=F&&!!y.clearcoatRoughnessMap,nt=Oe&&!!y.diffuseRoughnessMap,J=pt&&!!y.iridescenceMap,lt=pt&&!!y.iridescenceThicknessMap,mt=De&&!!y.sheenColorMap,Y=De&&!!y.sheenRoughnessMap,K=!!y.specularMap,ut=!!y.specularColorMap,D=!!y.specularIntensityMap,Z=Ht&&!!y.transmissionMap,X=Ht&&!!y.thicknessMap,dt=!!y.gradientMap,at=!!y.alphaMap,ct=y.alphaTest>0,Nt=!!y.alphaHash,jt=!!y.extensions,st=Oi;y.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(st=s.toneMapping);let Ut=Q?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Jt={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:$,defines:y.defines,customVertexShaderID:vt,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:q,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&I.instanceColor!==null,instancingMorph:Bt&&I.morphTexture!==null,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Gt,matcap:Qt,envMap:ne,envMapMode:ne&&V.mapping,envMapPMREM:Q,envMapMaxLod:Q?Ut.length-1:null,envMapSize:Q?Ut[0].width:null,aoMap:ht,lightMap:ot,bumpMap:wt,normalMap:xt,displacementMap:Kt,emissiveMap:Dt,normalMapObjectSpace:xt&&y.normalMapType===df,normalMapTangentSpace:xt&&y.normalMapType===nc,packedNormalMap:xt&&y.normalMapType===nc&&k_(y.normalMap.format),metalnessMap:se,roughnessMap:ae,anisotropy:fe,anisotropyMap:qt,clearcoat:F,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:Oe,diffuseRoughnessMap:nt,dispersion:ee,retroreflection:ye,iridescence:pt,iridescenceMap:J,iridescenceThicknessMap:lt,sheen:De,sheenColorMap:mt,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ut,specularIntensityMap:D,transmission:Ht,transmissionMap:Z,thicknessMap:X,gradientMap:dt,opaque:y.transparent===!1&&y.blending===gr&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:ct,alphaHash:Nt,combine:y.combine,mapUv:Gt&&f(y.map.channel),aoMapUv:ht&&f(y.aoMap.channel),lightMapUv:ot&&f(y.lightMap.channel),bumpMapUv:wt&&f(y.bumpMap.channel),normalMapUv:xt&&f(y.normalMap.channel),displacementMapUv:Kt&&f(y.displacementMap.channel),emissiveMapUv:Dt&&f(y.emissiveMap.channel),metalnessMapUv:se&&f(y.metalnessMap.channel),roughnessMapUv:ae&&f(y.roughnessMap.channel),anisotropyMapUv:qt&&f(y.anisotropyMap.channel),clearcoatMapUv:P&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(y.sheenRoughnessMap.channel),specularMapUv:K&&f(y.specularMap.channel),specularColorMapUv:ut&&f(y.specularColorMap.channel),specularIntensityMapUv:D&&f(y.specularIntensityMap.channel),transmissionMapUv:Z&&f(y.transmissionMap.channel),thicknessMapUv:X&&f(y.thicknessMap.channel),alphaMapUv:at&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||fe),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Gt||at),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Tt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:Gt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ge,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:jt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&y.extensions.multiDraw===!0||Ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(g(b,y),m(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function m(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function v(y){let b=d[y.type],C;if(b){let A=dn[b];C=Lf.clone(A.uniforms)}else C=y.uniforms;return C}function M(y,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new U_(s,b,y,n),c.push(C),u.set(b,C)),C}function _(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:_,releaseShaderCache:T,programs:c,dispose:w}}function B_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function H_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function jf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qf(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},s[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=m),t++,v}function l(d,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let M=o(d,f,p,x,g,m);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):e.push(M)}function c(d,f,p,x,g,m){let v=o(d,f,p,x,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function u(d,f){e.length>1&&e.sort(d||H_),i.length>1&&i.sort(f||jf),n.length>1&&n.sort(f||jf)}function h(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:h,sort:u}}function z_(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Qf,s.set(i,[a])):n>=r.length?(a=new Qf,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function V_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function G_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var W_=0;function q_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function X_(s){let t=new V_,e=G_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,r=new Ft,a=new Ft;function o(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,M=0,_=0,T=0,w=0,y=0,b=0,C=0,A=0;c.sort(q_);for(let N=0,k=c.length;N<k;N++){let L=c[N],O=L.color,G=L.intensity,V=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Xn?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*G,h+=O.g*G,d+=O.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],G);A++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=it;let Tt=j.getViewportCount();for(let zt=0;zt<Tt;zt++)i.sunShadowMatrix[x+zt]=j.getMatrix(zt),i.sunShadowCascade[x+zt]=j._cascadeData[zt];x+=Tt,p++}i.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=q,g++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(G),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[v]=q;let j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[v]=tt,i.spotShadowMap[v]=it,y++}v++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(O).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=q,M++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=q,m++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[_]=q,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==y||I.numSpotMaps!==b||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=m,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=y,I.numSpotMaps=b,I.numLightProbes=A,i.version=W_++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let _=c[v];if(_.isSunLight){let T=i.sun[h];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),h++}else if(_.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),d++}else if(_.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function tp(s){let t=new X_(s),e=[],i=[],n=[];function r(h){u.camera=h,e.length=0,i.length=0,n.length=0}function a(h){h.isLightProbeGrid?n.push(h):e.push(h)}function o(h){i.push(h)}function l(){t.setup(e),n.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $_(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new tp(s),t.set(n,[o])):r>=a.length?(o=new tp(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],J_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],ep=new Ft,Ua=new R,lu=new R;function j_(s,t,e){let i=new Hn,n=new et,r=new et,a=new Pe,o=new nl,l=new sl,c={},u=e.maxTextureSize,h={[qn]:We,[We]:qn,[ge]:ge},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ie;p.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let m=this.type;this.render=function(w,y,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Vd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Aa);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(gs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=m!==this.type;k&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){let G=w[L],V=G.shadow;if(V===void 0){Vt("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let it=V.getFrameExtents();n.multiply(it),r.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/it.x),n.x=r.x*it.x,V.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/it.y),n.y=r.y*it.y,V.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===mr){if(G.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _i(n.x,n.y,{format:Xn,type:Ii,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Zi(n.x,n.y,Bi),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=wn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze}else G.isPointLight?(V.map=new ka(n.x),V.map.depthTexture=new la(n.x,Pi)):(V.map=new _i(n.x,n.y),V.map.depthTexture=new Zi(n.x,n.y,Pi)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=wn,this.type===Aa?(V.map.depthTexture.compareFunction=q?jh:Jh,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,b);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Tt=0;Tt<j;Tt++){let zt=V.getCamera(Tt);if(G.isPointLight){let $=V.camera,vt=V.matrix,At=G.distance||$.far;At!==$.far&&($.far=At,$.updateProjectionMatrix()),Ua.setFromMatrixPosition(G.matrixWorld),$.position.copy(Ua),lu.copy($.position),lu.add(Z_[Tt]),$.up.copy(J_[Tt]),$.lookAt(lu),$.updateMatrixWorld(),vt.makeTranslation(-Ua.x,-Ua.y,-Ua.z),ep.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ep,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Tt),s.clear();else{Tt===0&&(s.setRenderTarget(V.map),s.clear());let $=V.getViewport(Tt);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),N.viewport(a)}i=V.getFrustum(Tt),_(y,b,zt,G,tt,this.type)}V.isPointLightShadow!==!0&&this.type===mr&&v(V,b),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(C,A,I)};function v(w,y){let b=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new _i(n.x,n.y,{format:Xn,type:Ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(y,null,b,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(y,null,b,f,x,null)}function M(w,y,b,C){let A=null,I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)A=I;else if(A=b.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let N=A.uuid,k=y.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let O=L[k];O===void 0&&(O=A.clone(),L[k]=O,y.addEventListener("dispose",T)),A=O}if(A.visible=y.visible,A.wireframe=y.wireframe,C===mr?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:h[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=s.properties.get(A);N.light=b}return A}function _(w,y,b,C,A,I){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===mr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=t.update(w),O=w.material;if(Array.isArray(O)){let G=L.groups;for(let V=0,it=G.length;V<it;V++){let q=G[V],j=O[q.materialIndex];if(j&&j.visible){let tt=M(w,j,C,I);w.onBeforeShadow(s,w,y,b,L,tt,q),s.renderBufferDirect(b,null,L,tt,w,q),w.onAfterShadow(s,w,y,b,L,tt,q)}}}else if(O.visible){let G=M(w,O,C,I);w.onBeforeShadow(s,w,y,b,L,G,null),s.renderBufferDirect(b,null,L,G,w,null),w.onAfterShadow(s,w,y,b,L,G,null)}}let k=w.children;for(let L=0,O=k.length;L<O;L++)_(k[L],y,b,C,A,I)}function T(w){w.target.removeEventListener("dispose",T);for(let b in c){let C=c[b],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Q_(s,t){function e(){let D=!1,Z=new Pe,X=null,dt=new Pe(0,0,0,0);return{setMask:function(at){X!==at&&!D&&(s.colorMask(at,at,at,at),X=at)},setLocked:function(at){D=at},setClear:function(at,ct,Nt,jt,st){st===!0&&(at*=jt,ct*=jt,Nt*=jt),Z.set(at,ct,Nt,jt),dt.equals(Z)===!1&&(s.clearColor(at,ct,Nt,jt),dt.copy(Z))},reset:function(){D=!1,X=null,dt.set(-1,0,0,0)}}}function i(){let D=!1,Z=!1,X=null,dt=null,at=null;return{setReversed:function(ct){if(Z!==ct){let Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),Z=ct;let jt=at;at=null,this.setClear(jt)}},getReversed:function(){return Z},setTest:function(ct){ct?_t(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(ct){X!==ct&&!D&&(s.depthMask(ct),X=ct)},setFunc:function(ct){if(Z&&(ct=bf[ct]),dt!==ct){switch(ct){case No:s.depthFunc(s.NEVER);break;case Uo:s.depthFunc(s.ALWAYS);break;case Fo:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case ko:s.depthFunc(s.EQUAL);break;case Oo:s.depthFunc(s.GEQUAL);break;case Bo:s.depthFunc(s.GREATER);break;case Ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=ct}},setLocked:function(ct){D=ct},setClear:function(ct){at!==ct&&(at=ct,Z&&(ct=1-ct),s.clearDepth(ct))},reset:function(){D=!1,X=null,dt=null,at=null,Z=!1}}}function n(){let D=!1,Z=null,X=null,dt=null,at=null,ct=null,Nt=null,jt=null,st=null;return{setTest:function(Ut){D||(Ut?_t(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Ut){Z!==Ut&&!D&&(s.stencilMask(Ut),Z=Ut)},setFunc:function(Ut,Jt,yt){(X!==Ut||dt!==Jt||at!==yt)&&(s.stencilFunc(Ut,Jt,yt),X=Ut,dt=Jt,at=yt)},setOp:function(Ut,Jt,yt){(ct!==Ut||Nt!==Jt||jt!==yt)&&(s.stencilOp(Ut,Jt,yt),ct=Ut,Nt=Jt,jt=yt)},setLocked:function(Ut){D=Ut},setClear:function(Ut){st!==Ut&&(s.clearStencil(Ut),st=Ut)},reset:function(){D=!1,Z=null,X=null,dt=null,at=null,ct=null,Nt=null,jt=null,st=null}}}let r=new e,a=new i,o=new n,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,T=null,w=null,y=null,b=new Et(0,0,0),C=0,A=!1,I=null,N=null,k=null,L=null,O=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=it>=2);let j=null,tt={},Tt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),$=new Pe().fromArray(Tt),vt=new Pe().fromArray(zt);function At(D,Z,X,dt){let at=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<X;Nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(Z+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return ct}let Ot={};Ot[s.TEXTURE_2D]=At(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=At(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[s.TEXTURE_2D_ARRAY]=At(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=At(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(s.DEPTH_TEST),a.setFunc(js),wt(!1),xt(Ph),_t(s.CULL_FACE),ht(gs);function _t(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Bt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ee(D,Z){return d[D]!==Z?(s.bindFramebuffer(D,Z),d[D]=Z,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Gt(D,Z){let X=p,dt=!1;if(D){X=f.get(Z),X===void 0&&(X=[],f.set(Z,X));let at=D.textures;if(X.length!==at.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Nt=at.length;ct<Nt;ct++)X[ct]=s.COLOR_ATTACHMENT0+ct;X.length=at.length,dt=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,dt=!0);dt&&s.drawBuffers(X)}function Qt(D){return x!==D?(s.useProgram(D),x=D,!0):!1}let ne={[xs]:s.FUNC_ADD,[Wd]:s.FUNC_SUBTRACT,[qd]:s.FUNC_REVERSE_SUBTRACT};ne[Xd]=s.MIN,ne[$d]=s.MAX;let Q={[Yd]:s.ZERO,[Kd]:s.ONE,[Zd]:s.SRC_COLOR,[Nh]:s.SRC_ALPHA,[nf]:s.SRC_ALPHA_SATURATE,[tf]:s.DST_COLOR,[jd]:s.DST_ALPHA,[Jd]:s.ONE_MINUS_SRC_COLOR,[Uh]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[Qd]:s.ONE_MINUS_DST_ALPHA,[sf]:s.CONSTANT_COLOR,[rf]:s.ONE_MINUS_CONSTANT_COLOR,[af]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(D,Z,X,dt,at,ct,Nt,jt,st,Ut){if(D===gs){g===!0&&(Bt(s.BLEND),g=!1);return}if(g===!1&&(_t(s.BLEND),g=!0),D!==Gd){if(D!==m||Ut!==A){if((v!==xs||T!==xs)&&(s.blendEquation(s.FUNC_ADD),v=xs,T=xs),Ut)switch(D){case gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFunc(s.ONE,s.ONE);break;case Lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",D);break}else switch(D){case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lh:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",D);break}M=null,_=null,w=null,y=null,b.set(0,0,0),C=0,m=D,A=Ut}return}at=at||Z,ct=ct||X,Nt=Nt||dt,(Z!==v||at!==T)&&(s.blendEquationSeparate(ne[Z],ne[at]),v=Z,T=at),(X!==M||dt!==_||ct!==w||Nt!==y)&&(s.blendFuncSeparate(Q[X],Q[dt],Q[ct],Q[Nt]),M=X,_=dt,w=ct,y=Nt),(jt.equals(b)===!1||st!==C)&&(s.blendColor(jt.r,jt.g,jt.b,st),b.copy(jt),C=st),m=D,A=!1}function ot(D,Z){D.side===ge?Bt(s.CULL_FACE):_t(s.CULL_FACE);let X=D.side===We;Z&&(X=!X),wt(X),D.blending===gr&&D.transparent===!1?ht(gs):ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){I!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),I=D)}function xt(D){D!==Hd?(_t(s.CULL_FACE),D!==N&&(D===Ph?s.cullFace(s.BACK):D===zd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),N=D}function Kt(D){D!==k&&(V&&s.lineWidth(D),k=D)}function Dt(D,Z,X){D?(_t(s.POLYGON_OFFSET_FILL),(L!==Z||O!==X)&&(L=Z,O=X,a.getReversed()&&(Z=-Z,X=-X),s.polygonOffset(Z,X))):Bt(s.POLYGON_OFFSET_FILL)}function se(D){D?_t(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function ae(D){D===void 0&&(D=s.TEXTURE0+G-1),j!==D&&(s.activeTexture(D),j=D)}function fe(D,Z,X){X===void 0&&(j===null?X=s.TEXTURE0+G-1:X=j);let dt=tt[X];dt===void 0&&(dt={type:void 0,texture:void 0},tt[X]=dt),(dt.type!==D||dt.texture!==Z)&&(j!==X&&(s.activeTexture(X),j=X),s.bindTexture(D,Z||Ot[D]),dt.type=D,dt.texture=Z)}function F(){let D=tt[j];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Oe(){try{s.compressedTexImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function ye(){try{s.texSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function pt(){try{s.texSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function De(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function qt(){try{s.texStorage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function P(){try{s.texStorage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function S(){try{s.texImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function H(){try{s.texImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function nt(D){return h[D]!==void 0?h[D]:s.getParameter(D)}function J(D,Z){h[D]!==Z&&(s.pixelStorei(D,Z),h[D]=Z)}function lt(D){$.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function mt(D){vt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),vt.copy(D))}function Y(D,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let dt=X.get(D);dt===void 0&&(dt=s.getUniformBlockIndex(Z,D.name),s.uniformBlockBinding(Z,dt,dt),X.set(D,dt))}function K(D,Z,X){let at=c.get(Z).get(D);l[at]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,at,X),l[at]=X)}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},j=null,tt={},d={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,T=null,w=null,y=null,b=new Et(0,0,0),C=0,A=!1,I=null,N=null,k=null,L=null,O=null,$.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Bt,bindFramebuffer:Ee,drawBuffers:Gt,useProgram:Qt,setBlending:ht,setMaterial:ot,setFlipSided:wt,setCullFace:xt,setLineWidth:Kt,setPolygonOffset:Dt,setScissorTest:se,activeTexture:ae,bindTexture:fe,unbindTexture:F,compressedTexImage2D:Oe,compressedTexImage3D:ee,texImage2D:S,texImage3D:H,pixelStorei:J,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:qt,texStorage3D:P,texSubImage2D:ye,texSubImage3D:pt,compressedTexSubImage2D:De,compressedTexSubImage3D:Ht,scissor:lt,viewport:mt,reset:ut}}function ty(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return g?new OffscreenCanvas(P,S):jr("canvas")}function v(P,S,H){let nt=1,J=qt(P);if((J.width>H||J.height>H)&&(nt=H/Math.max(J.width,J.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let lt=Math.floor(nt*J.width),mt=Math.floor(nt*J.height);d===void 0&&(d=m(lt,mt));let Y=S?m(lt,mt):d;return Y.width=lt,Y.height=mt,Y.getContext("2d").drawImage(P,0,0,lt,mt),Vt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+lt+"x"+mt+")."),Y}else return"data"in P&&Vt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function M(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,S,H,nt,J,lt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;nt&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8),H===s.UNSIGNED_SHORT&&mt&&(Y=mt.R16_EXT),H===s.SHORT&&mt&&(Y=mt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),S===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8),H===s.UNSIGNED_SHORT&&mt&&(Y=mt.RG16_EXT),H===s.SHORT&&mt&&(Y=mt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(H===s.UNSIGNED_SHORT&&mt&&(Y=mt.RGB16_EXT),H===s.SHORT&&mt&&(Y=mt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){let K=lt?Jr:ce.getTransfer(J);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=K===xe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&mt&&(Y=mt.RGBA16_EXT),H===s.SHORT&&mt&&(Y=mt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(P,S){let H;return P?S===null||S===Pi||S===_s?H=s.DEPTH24_STENCIL8:S===Bi?H=s.DEPTH32F_STENCIL8:S===vr&&(H=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===_s?H=s.DEPTH_COMPONENT24:S===Bi?H=s.DEPTH_COMPONENT32F:S===vr&&(H=s.DEPTH_COMPONENT16),H}function b(P,S){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==ze&&P.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function C(P){let S=new WeakRef(P);i.get(P).__ref=S,p.add(S),x.register(P,S,S)}function A(P){let S=i.get(P).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function I(P){k(P.target)}function N(P){L(P.target)}function k(P){P.removeEventListener("dispose",I),A(P),G(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function L(P){P.removeEventListener("dispose",N),A(P),it(P)}function O(){for(let P of p){let S=P.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):k(S))}p.clear(),h.clear()}function G(P){let S=i.get(P);if(S.__webglInit===void 0)return;let H=P.source,nt=f.get(H);if(nt){let J=nt[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(P),Object.keys(nt).length===0&&f.delete(H)}i.remove(P)}function V(P){let S=i.get(P);s.deleteTexture(S.__webglTexture);let H=P.source,nt=f.get(H);delete nt[S.__cacheKey],a.memory.textures--}function it(P){let S=i.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=P.depthTexture;if(H&&H.renderTarget===P&&k(H),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let lt=0;lt<S.__webglFramebuffer[J].length;lt++)s.deleteFramebuffer(S.__webglFramebuffer[J][lt]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=P.textures;for(let J=0,lt=nt.length;J<lt;J++){let mt=i.get(nt[J]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(nt[J])}i.remove(P)}let q=0;function j(){q=0}function tt(){return q}function Tt(P){q=P}function zt(){let P=q;return P>=n.maxTextures&&Vt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,P}function $(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function vt(P,S){let H=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let nt=P.image;if(nt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,P,S);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function At(P,S){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ot(H,P,S);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function Ot(P,S){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ot(H,P,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function _t(P,S){let H=i.get(P);if(P.version>0&&H.__version!==P.version){wt(H,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let Bt={[Sn]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[zo]:s.MIRRORED_REPEAT},Ee={[ze]:s.NEAREST,[hf]:s.NEAREST_MIPMAP_NEAREST,[Ra]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[_l]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},Gt={[pf]:s.NEVER,[Qh]:s.ALWAYS,[mf]:s.LESS,[Jh]:s.LEQUAL,[gf]:s.EQUAL,[jh]:s.GEQUAL,[xf]:s.GREATER,[vf]:s.NOTEQUAL};function Qt(P,S){if(S.type===Bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ve||S.magFilter===_l||S.magFilter===Ra||S.magFilter===ji||S.minFilter===Ve||S.minFilter===_l||S.minFilter===Ra||S.minFilter===ji)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Bt[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Bt[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Bt[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Ee[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==Ra&&S.minFilter!==ji||S.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I),C(S));let nt=S.source,J=f.get(nt);J===void 0&&(J={},f.set(nt,J));let lt=$(S);if(lt!==P.__cacheKey){J[lt]===void 0&&(J[lt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[lt].usedTimes++;let mt=J[P.__cacheKey];mt!==void 0&&(J[P.__cacheKey].usedTimes--,mt.usedTimes===0&&V(S)),P.__cacheKey=lt,P.__webglTexture=J[lt].texture}return H}function Q(P,S,H){return Math.floor(Math.floor(P/H)/S)}function ht(P,S,H,nt){let lt=P.updateRanges;if(lt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,H,nt,S.data);else{lt.sort((D,Z)=>D.start-Z.start);let mt=0;for(let D=1;D<lt.length;D++){let Z=lt[mt],X=lt[D],dt=Z.start+Z.count,at=Q(X.start,S.width,4),ct=Q(Z.start,S.width,4);X.start<=dt+1&&at===ct&&Q(X.start+X.count-1,S.width,4)===at?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++mt,lt[mt]=X)}lt.length=mt+1;let Y=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),ut=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let D=0,Z=lt.length;D<Z;D++){let X=lt[D],dt=Math.floor(X.start/4),at=Math.ceil(X.count/4),ct=dt%S.width,Nt=Math.floor(dt/S.width),jt=at,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(s.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(s.TEXTURE_2D,0,ct,Nt,jt,st,H,nt,S.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function ot(P,S,H){let nt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=s.TEXTURE_3D);let J=ne(P,S),lt=S.source;e.bindTexture(nt,P.__webglTexture,s.TEXTURE0+H);let mt=i.get(lt);if(lt.version!==mt.__version||J===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=ce.getPrimaries(ce.workingColorSpace),Ut=S.colorSpace===Qi?null:ce.getPrimaries(S.colorSpace),Jt=S.colorSpace===Qi||st===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let K=v(S.image,!1,n.maxTextureSize);K=Ht(S,K);let ut=r.convert(S.format,S.colorSpace),D=r.convert(S.type),Z=w(S.internalFormat,ut,D,S.normalized,S.colorSpace,S.isVideoTexture);Qt(nt,S);let X,dt=S.mipmaps,at=S.isVideoTexture!==!0,ct=mt.__version===void 0||J===!0,Nt=lt.dataReady,jt=b(S,K);if(S.isDepthTexture)Z=y(S.format===Tn,S.type),ct&&(at?e.texStorage2D(s.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,ut,D,null));else if(S.isDataTexture)if(dt.length>0){at&&ct&&e.texStorage2D(s.TEXTURE_2D,jt,Z,dt[0].width,dt[0].height);for(let st=0,Ut=dt.length;st<Ut;st++)X=dt[st],at?Nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ut,D,X.data):e.texImage2D(s.TEXTURE_2D,st,Z,X.width,X.height,0,ut,D,X.data);S.generateMipmaps=!1}else at?(ct&&e.texStorage2D(s.TEXTURE_2D,jt,Z,K.width,K.height),Nt&&ht(S,K,ut,D)):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,ut,D,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,Z,dt[0].width,dt[0].height,K.depth);for(let st=0,Ut=dt.length;st<Ut;st++)if(X=dt[st],S.format!==yi)if(ut!==null)if(at){if(Nt)if(S.layerUpdates.size>0){let Jt=au(X.width,X.height,S.format,S.type);for(let yt of S.layerUpdates){let _e=X.data.subarray(yt*Jt/X.data.BYTES_PER_ELEMENT,(yt+1)*Jt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,yt,X.width,X.height,1,ut,_e)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,ut,X.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Z,X.width,X.height,K.depth,0,X.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,ut,D,X.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Z,X.width,X.height,K.depth,0,ut,D,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{at&&ct&&e.texStorage2D(s.TEXTURE_2D,jt,Z,dt[0].width,dt[0].height);for(let st=0,Ut=dt.length;st<Ut;st++)X=dt[st],S.format!==yi?ut!==null?at?Nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ut,X.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Z,X.width,X.height,0,X.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,X.width,X.height,ut,D,X.data):e.texImage2D(s.TEXTURE_2D,st,Z,X.width,X.height,0,ut,D,X.data)}else if(S.isDataArrayTexture)if(at){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,Z,K.width,K.height,K.depth),Nt)if(S.layerUpdates.size>0){let st=au(K.width,K.height,S.format,S.type);for(let Ut of S.layerUpdates){let Jt=K.data.subarray(Ut*st/K.data.BYTES_PER_ELEMENT,(Ut+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ut,K.width,K.height,1,ut,D,Jt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,D,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ut,D,K.data);else if(S.isData3DTexture)at?(ct&&e.texStorage3D(s.TEXTURE_3D,jt,Z,K.width,K.height,K.depth),Nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,D,K.data)):e.texImage3D(s.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ut,D,K.data);else if(S.isFramebufferTexture){if(ct)if(at)e.texStorage2D(s.TEXTURE_2D,jt,Z,K.width,K.height);else{let st=K.width,Ut=K.height;for(let Jt=0;Jt<jt;Jt++)e.texImage2D(s.TEXTURE_2D,Jt,Z,st,Ut,0,ut,D,null),st>>=1,Ut>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),h.add(S),st.onpaint=Ut=>{let Jt=Ut.changedElements;for(let yt of h)Jt.includes(yt.image)&&(yt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{let Jt=s.RGBA,yt=s.RGBA,_e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Jt,yt,_e,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(at&&ct){let st=qt(dt[0]);e.texStorage2D(s.TEXTURE_2D,jt,Z,st.width,st.height)}for(let st=0,Ut=dt.length;st<Ut;st++)X=dt[st],at?Nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ut,D,X):e.texImage2D(s.TEXTURE_2D,st,Z,ut,D,X);S.generateMipmaps=!1}else if(at){if(ct){let st=qt(K);e.texStorage2D(s.TEXTURE_2D,jt,Z,st.width,st.height)}Nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,D,K)}else e.texImage2D(s.TEXTURE_2D,0,Z,ut,D,K);M(S)&&S.mipmapsAutoUpdate===!0&&_(nt),mt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function wt(P,S,H){if(S.image.length!==6)return;let nt=ne(P,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);let lt=i.get(J);if(J.version!==lt.__version||nt===!0){e.activeTexture(s.TEXTURE0+H);let mt=ce.getPrimaries(ce.workingColorSpace),Y=S.colorSpace===Qi?null:ce.getPrimaries(S.colorSpace),K=S.colorSpace===Qi||mt===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let yt=0;yt<6;yt++)!ut&&!D?Z[yt]=v(S.image[yt],!0,n.maxCubemapSize):Z[yt]=D?S.image[yt].image:S.image[yt],Z[yt]=Ht(S,Z[yt]);let X=Z[0],dt=r.convert(S.format,S.colorSpace),at=r.convert(S.type),ct=w(S.internalFormat,dt,at,S.normalized,S.colorSpace),Nt=S.isVideoTexture!==!0,jt=lt.__version===void 0||nt===!0,st=J.dataReady,Ut=b(S,X);Qt(s.TEXTURE_CUBE_MAP,S);let Jt;if(S.isDepthTexture){if(ct=y(S.format===Tn,S.type),jt)if(Nt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ct,X.width,X.height);else for(let yt=0;yt<6;yt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,X.width,X.height,0,dt,at,null)}else if(ut){Nt&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ct,X.width,X.height);for(let yt=0;yt<6;yt++){Jt=Z[yt].mipmaps;for(let _e=0;_e<Jt.length;_e++){let Ke=Jt[_e];S.format!==yi?dt!==null?Nt?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e,0,0,Ke.width,Ke.height,dt,Ke.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e,ct,Ke.width,Ke.height,0,Ke.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e,0,0,Ke.width,Ke.height,dt,at,Ke.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e,ct,Ke.width,Ke.height,0,dt,at,Ke.data)}}}else{if(Jt=S.mipmaps,Nt&&jt){Jt.length>0&&Ut++;let yt=qt(Z[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ct,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(D){Nt?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Z[yt].width,Z[yt].height,dt,at,Z[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,Z[yt].width,Z[yt].height,0,dt,at,Z[yt].data);for(let _e=0;_e<Jt.length;_e++){let Dn=Jt[_e].image[yt].image;Nt?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e+1,0,0,Dn.width,Dn.height,dt,at,Dn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e+1,ct,Dn.width,Dn.height,0,dt,at,Dn.data)}}else{Nt?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,dt,at,Z[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,dt,at,Z[yt]);for(let _e=0;_e<Jt.length;_e++){let Ke=Jt[_e];Nt?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e+1,0,0,dt,at,Ke.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,_e+1,ct,dt,at,Ke.image[yt])}}}M(S)&&S.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),lt.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function xt(P,S,H,nt,J,lt){let mt=r.convert(H.format,H.colorSpace),Y=r.convert(H.type),K=w(H.internalFormat,mt,Y,H.normalized,H.colorSpace),ut=i.get(S),D=i.get(H);if(D.__renderTarget=S,!ut.__hasExternalTextures){let Z=Math.max(1,S.width>>lt),X=Math.max(1,S.height>>lt);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,lt,K,Z,X,S.depth,0,mt,Y,null):e.texImage2D(J,lt,K,Z,X,0,mt,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,D.__webglTexture,0,ye(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,D.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(P,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let nt=S.depthTexture,J=nt&&nt.isDepthTexture?nt.type:null,lt=y(S.stencilBuffer,J),mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(S),lt,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(S),lt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,lt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,P)}else{let nt=S.textures;for(let J=0;J<nt.length;J++){let lt=nt[J],mt=r.convert(lt.format,lt.colorSpace),Y=r.convert(lt.type),K=w(lt.internalFormat,mt,Y,lt.normalized,lt.colorSpace);pt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(S),K,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(S),K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(P,S,H){let nt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(S.depthTexture);J.__renderTarget=S;let lt=nt?S.depthTexture.image[0]:S.depthTexture.image;(!J.__webglTexture||lt.width!==S.width||lt.height!==S.height)&&(lt.width=S.width,lt.height=S.height,S.depthTexture.needsUpdate=!0),nt?_t(S.depthTexture,0):vt(S.depthTexture,0);let mt=J.__webglTexture,Y=ye(S),K=nt?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ut=S.depthTexture.format===Tn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===wn)pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,K,mt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ut,K,mt,0);else if(S.depthTexture.format===Tn)pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,K,mt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ut,K,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){let S=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let nt=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",J)};nt.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=nt}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let nt=0;nt<6;nt++)Dt(S.__webglFramebuffer[nt],P,nt);else P.texture.mipmaps.length>0?Dt(S.__webglFramebuffer[0],P,0):Dt(S.__webglFramebuffer,P,0);else if(H){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=s.createRenderbuffer(),Kt(S.__webglDepthbuffer[nt],P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,lt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Kt(S.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,lt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,S,H){let nt=i.get(P);S!==void 0&&xt(nt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&se(P)}function fe(P){let S=P.texture,H=i.get(P),nt=i.get(S);P.addEventListener("dispose",N),C(P);let J=P.textures,lt=P.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=S.version,a.memory.textures++),lt){H.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){H.__webglFramebuffer[Y]=[];for(let K=0;K<S.mipmaps.length;K++)H.__webglFramebuffer[Y][K]=s.createFramebuffer()}else H.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)H.__webglFramebuffer[Y]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(mt)for(let Y=0,K=J.length;Y<K;Y++){let ut=i.get(J[Y]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&pt(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let K=J[Y];H.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);let ut=r.convert(K.format,K.colorSpace),D=r.convert(K.type),Z=w(K.internalFormat,ut,D,K.normalized,K.colorSpace,P.isXRRenderTarget===!0),X=ye(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Z,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Qt(s.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xt(H.__webglFramebuffer[Y][K],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else xt(H.__webglFramebuffer[Y],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);M(S)?_(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Y=0,K=J.length;Y<K;Y++){let ut=J[Y],D=i.get(ut),Z=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,D.__webglTexture),Qt(Z,ut),xt(H.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+Y,Z,0),M(ut)&&_(Z)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Y=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),Qt(Y,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xt(H.__webglFramebuffer[K],P,S,s.COLOR_ATTACHMENT0,Y,K);else xt(H.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,Y,0);M(S)?_(Y):S.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&se(P)}function F(P){let S=P.textures;for(let H=0,nt=S.length;H<nt;H++){let J=S[H];if(M(J)&&J.mipmapsAutoUpdate===!0){let lt=T(P),mt=i.get(J).__webglTexture;e.bindTexture(lt,mt),_(lt),e.unbindTexture()}}}let Oe=[];function ee(P){if(P.samples>0){if(pt(P)===!1){let S=P.textures,H=P.width,nt=P.height,J=s.COLOR_BUFFER_BIT,lt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=i.get(P),Y=S.length>1;if(Y)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(S[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,H,nt,0,0,H,nt,J,s.NEAREST),l===!0&&(Oe.length=0,Oe.push(s.COLOR_ATTACHMENT0+ut),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Oe.push(lt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(S[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,D,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ye(P){return Math.min(n.maxSamples,P.samples)}function pt(P){let S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(P){let S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Ht(P,S){let H=P.colorSpace,nt=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==rs&&H!==Qi&&(ce.getTransfer(H)===xe?(nt!==yi||J!==Mi)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",H)),S}function qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=Tt,this.setTexture2D=vt,this.setTexture2DArray=At,this.setTexture3D=Ot,this.setTextureCube=_t,this.rebindTextures=ae,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pt,this.dispose=O}function ey(s,t){function e(i,n=Qi){let r,a=ce.getTransfer(n);if(i===Mi)return s.UNSIGNED_BYTE;if(i===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return s.BYTE;if(i===Xh)return s.SHORT;if(i===vr)return s.UNSIGNED_SHORT;if(i===yl)return s.INT;if(i===Pi)return s.UNSIGNED_INT;if(i===Bi)return s.FLOAT;if(i===Ii)return s.HALF_FLOAT;if(i===Kh)return s.ALPHA;if(i===Zh)return s.RGB;if(i===yi)return s.RGBA;if(i===wn)return s.DEPTH_COMPONENT;if(i===Tn)return s.DEPTH_STENCIL;if(i===Sl)return s.RED;if(i===wl)return s.RED_INTEGER;if(i===Xn)return s.RG;if(i===El)return s.RG_INTEGER;if(i===Tl)return s.RGBA_INTEGER;if(i===Ca||i===Pa||i===Ia||i===La)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Rl||i===Cl||i===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Ll||i===Dl||i===Nl||i===Ul||i===Da||i===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Ll)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Da)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Ol||i===Bl||i===Hl||i===zl||i===Vl||i===Gl||i===Wl||i===ql||i===Xl||i===$l||i===Yl||i===Kl||i===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===jl||i===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Jl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===ec||i===Na||i===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ri({vertexShader:iy,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new Ue(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends on{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new mu,m={},v=e.getContextAttributes(),M=null,_=null,T=[],w=[],y=new et,b=null,C=null,A=new ni;A.viewport=new Pe;let I=new ni;I.viewport=new Pe;let N=[A,I],k=new gl,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let vt=T[$];return vt===void 0&&(vt=new ir,T[$]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function($){let vt=T[$];return vt===void 0&&(vt=new ir,T[$]=vt),vt.getGripSpace()},this.getHand=function($){let vt=T[$];return vt===void 0&&(vt=new ir,T[$]=vt),vt.getHandSpace()};function G($){let vt=w.indexOf($.inputSource);if(vt===-1)return;let At=T[vt];At!==void 0&&(At.update($.inputSource,$.frame,c||a),At.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",it);for(let $=0;$<T.length;$++){let vt=w[$];vt!==null&&(w[$]=null,T[$].disconnect(vt))}L=null,O=null,g.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(M),f=null,d=null,h=null,n=null,_=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(n,e)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",V),n.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ot=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=v.stencil?Tn:wn,Ot=v.stencil?_s:Pi);let Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new _i(d.textureWidth,d.textureHeight,{format:yi,type:Mi,depthTexture:new Zi(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,At),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new _i(f.framebufferWidth,f.framebufferHeight,{format:yi,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),zt.setContext(n),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it($){for(let vt=0;vt<$.removed.length;vt++){let At=$.removed[vt],Ot=w.indexOf(At);Ot>=0&&(w[Ot]=null,T[Ot].disconnect(At))}for(let vt=0;vt<$.added.length;vt++){let At=$.added[vt],Ot=w.indexOf(At);if(Ot===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=w.length){w.push(At),Ot=Bt;break}else if(w[Bt]===null){w[Bt]=At,Ot=Bt;break}if(Ot===-1)break}let _t=T[Ot];_t&&_t.connect(At)}}function q($,vt){vt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(vt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let vt=$.near,At=$.far;g.texture!==null&&(g.depthNear>0&&(vt=g.depthNear),g.depthFar>0&&(At=g.depthFar)),k.near=I.near=A.near=vt,k.far=I.far=A.far=At,(L!==k.near||O!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,O=k.far),k.layers.mask=$.layers.mask|6,A.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let Ot=$.parent,_t=k.cameras;q(k,Ot);for(let Bt=0;Bt<_t.length;Bt++)q(_t[Bt],Ot);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),j($,k,Ot)};function j($,vt,At){At===null?$.matrix.copy(vt.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(vt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Go*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function($){return m[$]};let tt=null;function Tt($,vt){if(u=vt.getViewerPose(c||a),p=vt,u!==null){let At=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Ot=!1;At.length!==k.cameras.length&&(k.cameras.length=0,Ot=!0);for(let Gt=0;Gt<At.length;Gt++){let Qt=At[Gt],ne=null;if(f!==null)ne=f.getViewport(Qt);else{let ht=h.getViewSubImage(d,Qt);ne=ht.viewport,Gt===0&&(t.setRenderTargetTextures(_,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(_))}let Q=N[Gt];Q===void 0&&(Q=new ni,Q.layers.enable(Gt),Q.viewport=new Pe,N[Gt]=Q),Q.matrix.fromArray(Qt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Qt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),Gt===0&&(k.matrix.copy(Q.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ot===!0&&k.cameras.push(Q)}let _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Gt=h.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,n.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let Gt=0;Gt<At.length;Gt++){let Qt=At[Gt].camera;if(Qt){let ne=m[Qt];ne||(ne=new ca,m[Qt]=ne);let Q=h.getCameraImage(Qt);ne.sourceTexture=Q}}}}for(let At=0;At<T.length;At++){let Ot=w[At],_t=T[At];Ot!==null&&_t!==void 0&&_t.update(Ot,vt,c||a)}tt&&tt($,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),p=null}let zt=new ip;zt.setAnimationLoop(Tt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},sy=new Ft,dp=new $t;dp.set(-1,0,0,0,1,0,0,0,1);function ry(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,nu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(dp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ay(s,t,e,i){let n={},r={};function a(v,M){let _=M.program;i.uniformBlockBinding(v,_,n[v.id])}function o(v,M){let _=n[v.id];_===void 0&&(p(v),_=l(v),n[v.id]=_,v.addEventListener("dispose",g));let T=M.program;i.updateUBOMapping(v,T);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let M=s.createBuffer(),_=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,T),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){let M=n[v.id],_=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,y=_.length;w<y;w++){let b=_[w];if(Array.isArray(b))for(let C=0,A=b.length;C<A;C++)u(b[C],w,C,T);else u(b,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,M,_,T){if(d(v,M,_,T)===!0){let w=v.__offset,y=v.value;if(Array.isArray(y)){let b=0;for(let C=0;C<y.length;C++){let A=y[C],I=x(A,!0);h(A,v.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function h(v,M,_){typeof v=="number"||typeof v=="boolean"?M[_]=v:v.isMatrix3?(M[_]=v.elements[0],M[_+1]=v.elements[1],M[_+2]=v.elements[2],M[_+3]=0,M[_+4]=v.elements[3],M[_+5]=v.elements[4],M[_+6]=v.elements[5],M[_+7]=0,M[_+8]=v.elements[6],M[_+9]=v.elements[7],M[_+10]=v.elements[8],M[_+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-_),_):v.toArray(M,_)}function d(v,M,_,T){let w=v.value,y=M+"_"+_;if(Array.isArray(w)){T[y]===void 0&&(T[y]=[]);let b=T[y],C=!1;for(let A=0;A<w.length;A++)f(w[A],b,A)===!0&&(C=!0);return C}return f(w,T,y)}function f(v,M,_){if(M[_]===void 0)return typeof v=="number"||typeof v=="boolean"?M[_]=v:ArrayBuffer.isView(v)?M[_]=v.slice():M[_]=v.clone(),!0;{let T=M[_];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let M=v.uniforms,_=0,T=16;for(let y=0,b=M.length;y<b;y++){let C=Array.isArray(M[y])?M[y]:[M[y]];for(let A=0,I=C.length;A<I;A++){let N=C[A],k=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(M[y])||Array.isArray(N.value),O=_;for(let V=0,it=k.length;V<it;V++){let q=k[V],j=x(q,L),tt=_%T,Tt=tt%j.boundary,zt=tt+Tt;_+=Tt,zt!==0&&T-zt<j.storage&&(_+=T-zt),V===0&&(O=_),_+=j.storage}let G=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new G((_-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let w=_%T;return w>0&&(_+=T-w),v.__size=_,v.__cache={},this}function x(v,M){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(v){let M=v.target;M.removeEventListener("dispose",g),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function m(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:a,update:o,dispose:m}}var oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),un=null;function ly(){return un===null&&(un=new os(oy,16,16,Xn,Ii),un.name="DFG_LUT",un.minFilter=Ve,un.magFilter=Ve,un.wrapS=an,un.wrapT=an,un.generateMipmaps=!1,un.needsUpdate=!0),un}var oc=class{constructor(t={}){let{canvas:e=_f(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Tl,El,wl]),m=new Set([Mi,Pi,vr,_s,Ml,bl]),v=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},T=null,w=null,y=[],b=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,N=null,k=null,L=null,O=null;this._outputColorSpace=ii;let G=0,V=0,it=null,q=-1,j=null,tt=new Pe,Tt=new Pe,zt=null,$=new Et(0),vt=0,At=e.width,Ot=e.height,_t=1,Bt=null,Ee=null,Gt=new Pe(0,0,At,Ot),Qt=new Pe(0,0,At,Ot),ne=!1,Q=new Hn,ht=new $o,ot=!1,wt=!1,xt=new Ft,Kt=new R,Dt=new Pe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function fe(){return it===null?_t:1}let F=i;function Oe(E,U){return e.getContext(E,U)}let ee,ye,pt,De,Ht,qt,P,S,H,nt,J,lt,mt,Y,K,ut,D,Z,X,dt,at,ct,Nt;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),F===null){let U="webgl2";if(F=Oe(U,E),F===null)throw Oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(E){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Wt("WebGLRenderer: "+E.message),E}function jt(){ee=new _v(F),ee.init(),at=new ey(F,ee),ye=new lv(F,ee,t,at),pt=new Q_(F,ee),ye.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),k=F.createFramebuffer(),L=F.createFramebuffer(),O=F.createFramebuffer(),De=new bv(F),Ht=new B_,qt=new ty(F,ee,pt,Ht,ye,at,De),P=new vv(A),S=new w0(F),ct=new av(F,S),H=new yv(F,S,De,ct),nt=new wv(F,H,S,ct,De),Z=new Sv(F,ye,qt),K=new cv(Ht),J=new O_(A,P,ee,ye,ct,K),lt=new ry(A,Ht),mt=new z_,Y=new $_(ee),D=new rv(A,P,pt,nt,p,l),ut=new j_(A,nt,ye),Nt=new ay(F,De,ye,pt),X=new ov(F,ee,De),dt=new Mv(F,ee,De),De.programs=J.programs,A.capabilities=ye,A.extensions=ee,A.properties=Ht,A.renderLists=mt,A.shadowMap=ut,A.state=pt,A.info=De}x!==Mi&&(C=new Tv(x,e.width,e.height,o,n,r));let st=new gu(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(E){E!==void 0&&(_t=E,this.setSize(At,Ot,!1))},this.getSize=function(E){return E.set(At,Ot)},this.setSize=function(E,U,W=!0){if(st.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=E,Ot=U,e.width=Math.floor(E*_t),e.height=Math.floor(U*_t),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(At*_t,Ot*_t).floor()},this.setDrawingBufferSize=function(E,U,W){At=E,Ot=U,_t=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===Mi){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(Gt)},this.setViewport=function(E,U,W,B){E.isVector4?Gt.set(E.x,E.y,E.z,E.w):Gt.set(E,U,W,B),pt.viewport(tt.copy(Gt).multiplyScalar(fe()).round())},this.getScissor=function(E){return E.copy(Qt)},this.setScissor=function(E,U,W,B){E.isVector4?Qt.set(E.x,E.y,E.z,E.w):Qt.set(E,U,W,B),pt.scissor(Tt.copy(Qt).multiplyScalar(fe()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){pt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){Bt=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let B=0;if(E){let z=!1;if(it!==null){let gt=it.texture.format;z=g.has(gt)}if(z){let gt=it.texture.type,Rt=m.has(gt),ft=D.getClearColor(),bt=D.getClearAlpha(),It=ft.r,Yt=ft.g,oe=ft.b;Rt?(v[0]=It,v[1]=Yt,v[2]=oe,v[3]=bt,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=It,M[1]=Yt,M[2]=oe,M[3]=bt,F.clearBufferiv(F.COLOR,0,M))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),D.dispose(),mt.dispose(),Y.dispose(),qt.dispose(),Ht.dispose(),P.dispose(),nt.dispose(),H.dispose(),ct.dispose(),Nt.dispose(),J.dispose(),st.dispose(),st.removeEventListener("sessionstart",Gu),st.removeEventListener("sessionend",Wu),Jn.stop()};function Ut(E){E.preventDefault(),Qr("WebGLRenderer: Context Lost."),I=!0}function Jt(){Qr("WebGLRenderer: Context Restored."),I=!1;let E=De.autoReset,U=ut.enabled,W=ut.autoUpdate,B=ut.needsUpdate,z=ut.type;jt(),De.autoReset=E,ut.enabled=U,ut.autoUpdate=W,ut.needsUpdate=B,ut.type=z}function yt(E){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _e(E){let U=E.target;U.removeEventListener("dispose",_e),Ke(U)}function Ke(E){Dn(E),Ht.remove(E)}function Dn(E){let U=Ht.get(E).programs;U!==void 0&&(U.forEach(function(W){J.releaseProgram(W)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,B,z,gt){U===null&&(U=se);let Rt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=lm(E,U,W,B,z);pt.setMaterial(B,Rt);let bt=W.index,It=1;if(B.wireframe===!0){if(bt=H.getWireframeAttribute(W),bt===void 0)return;It=2}let Yt=W.drawRange,oe=W.attributes.position,Ct=Yt.start*It,le=(Yt.start+Yt.count)*It;gt!==null&&(Ct=Math.max(Ct,gt.start*It),le=Math.min(le,(gt.start+gt.count)*It)),bt!==null?(Ct=Math.max(Ct,0),le=Math.min(le,bt.count)):oe!=null&&(Ct=Math.max(Ct,0),le=Math.min(le,oe.count));let Be=le-Ct;if(Be<0||Be===1/0)return;ct.setup(z,B,ft,W,bt);let be,Me=X;if(bt!==null&&(be=S.get(bt),Me=dt,Me.setIndex(be)),z.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*fe()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(z.isLine){let li=B.linewidth;li===void 0&&(li=1),pt.setLineWidth(li*fe()),z.isLineSegments?Me.setMode(F.LINES):z.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else z.isPoints?Me.setMode(F.POINTS):z.isSprite&&Me.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let li=z._multiDrawStarts,Pt=z._multiDrawCounts,gi=z._multiDrawCount,me=bt?S.get(bt).bytesPerElement:1,jn=Ht.get(B).currentProgram.getUniforms();for(let ci=0;ci<gi;ci++)jn.setValue(F,"_gl_DrawID",ci),Me.render(li[ci]/me,Pt[ci])}else if(z.isInstancedMesh)Me.renderInstances(Ct,Be,z.count);else if(W.isInstancedBufferGeometry){let li=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,li);Me.renderInstances(Ct,Be,Pt)}else Me.render(Ct,Be)};function Vu(E,U,W,B){N!==null&&E.isNodeMaterial&&N.setObject(B,E),ot===!0&&K.setState(E,W,!1),E.transparent===!0&&E.side===ge&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,Ur(E,U,B),E.side=qn,E.needsUpdate=!0,Ur(E,U,B),E.side=ge):Ur(E,U,B)}this.compile=function(E,U,W=null){W===null&&(W=E),N!==null&&N.renderStart(E,U,W),w=Y.get(W),w.init(U),b.push(w),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),ot===!0&&K.setGlobalState(this.clippingPlanes,U),N!==null&&ut.render(w.state.shadowsArray,W,U);let B=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let gt=z.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let ft=gt[Rt];Vu(ft,W,U,z),B.add(ft)}else Vu(gt,W,U,z),B.add(gt)}),w=b.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(E,U,W=null){let B=this.compile(E,U,W);return new Promise(z=>{function gt(){if(B.forEach(function(Rt){let bt=Ht.get(Rt).currentProgram;(bt===void 0||bt.isReady())&&B.delete(Rt)}),B.size===0){z(E);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Wc=null;function am(E){Wc&&Wc(E)}function Gu(){Jn.stop()}function Wu(){Jn.start()}let Jn=new ip;Jn.setAnimationLoop(am),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(E){Wc=E,st.setAnimationLoop(E),E===null?Jn.stop():Jn.start()},st.addEventListener("sessionstart",Gu),st.addEventListener("sessionend",Wu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,U);let W=st.enabled===!0&&st.isPresenting===!0,B=C!==null&&(it===null||W)&&C.begin(A,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,it),w=Y.get(E,b.length),w.init(U),w.state.textureUnits=qt.getTextureUnits(),b.push(w),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):Q.setFromProjectionMatrix(xt,Di,U.reversedDepth),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),T=mt.get(E,y.length),T.init(),y.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&qc(Rt,U,-1/0,A.sortObjects)}qc(E,U,0,A.sortObjects),T.finish(),N!==null&&N.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(Bt,Ee),ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ae&&D.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),ot===!0&&K.beginShadows();let z=w.state.shadowsArray;if(ut.render(z,E,U),ot===!0&&K.endShadows(),(B&&C.hasRenderPass())===!1){let Rt=T.opaque,ft=T.transmissive;if(w.setupLights(),U.isArrayCamera){let bt=U.cameras;if(ft.length>0)for(let It=0,Yt=bt.length;It<Yt;It++){let oe=bt[It];Xu(Rt,ft,E,oe)}ae&&D.render(E);for(let It=0,Yt=bt.length;It<Yt;It++){let oe=bt[It];qu(T,E,oe,oe.viewport)}}else ft.length>0&&Xu(Rt,ft,E,U),ae&&D.render(E),qu(T,E,U)}it!==null&&V===0&&(qt.updateMultisampleRenderTarget(it),qt.updateRenderTargetMipmap(it)),B&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),ct.resetDefaultState(),q=-1,j=null,b.pop(),b.length>0?(w=b[b.length-1],qt.setTextureUnits(w.state.textureUnits),ot===!0&&K.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,N!==null&&N.renderEnd()};function qc(E,U,W,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Rt=U.isArrayCamera?ht:Q;if(!E.frustumCulled||E.intersectsFrustum(Rt)){B&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);let ft=nt.update(E),bt=E.material;bt.visible&&T.push(E,ft,bt,W,Dt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Rt=U.isArrayCamera?ht:Q;if(!E.frustumCulled||E.intersectsFrustum(Rt)){let ft=nt.update(E),bt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Dt.copy(ft.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(bt)){let It=ft.groups;for(let Yt=0,oe=It.length;Yt<oe;Yt++){let Ct=It[Yt],le=bt[Ct.materialIndex];le&&le.visible&&T.push(E,ft,le,W,Dt.z,Ct,U)}}else bt.visible&&T.push(E,ft,bt,W,Dt.z,null,U)}}}let gt=E.children;for(let Rt=0,ft=gt.length;Rt<ft;Rt++)qc(gt[Rt],U,W,B)}function qu(E,U,W,B){let{opaque:z,transmissive:gt,transparent:Rt}=E;w.setupLightsView(W),ot===!0&&K.setGlobalState(A.clippingPlanes,W),B&&pt.viewport(tt.copy(B)),z.length>0&&ja(z,U,W),gt.length>0&&ja(gt,U,W),Rt.length>0&&ja(Rt,U,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Xu(E,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let Ct=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new _i(1,1,{generateMipmaps:!0,type:Ct?Ii:Mi,minFilter:ji,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let gt=w.state.transmissionRenderTarget[B.id],Rt=B.viewport||tt;gt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let ft=A.getRenderTarget(),bt=A.getActiveCubeFace(),It=A.getActiveMipmapLevel();A.setRenderTarget(gt),A.getClearColor($),vt=A.getClearAlpha(),vt<1&&A.setClearColor(16777215,.5),A.clear(),ae&&D.render(W);let Yt=A.toneMapping;A.toneMapping=Oi;let oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ot===!0&&K.setGlobalState(A.clippingPlanes,B),ja(E,W,B),qt.updateMultisampleRenderTarget(gt),qt.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let le=0,Be=U.length;le<Be;le++){let be=U[le],{object:Me,geometry:li,material:Pt,group:gi}=be;if(Pt.side===ge&&Me.layers.test(B.layers)){let me=Pt.side;Pt.side=We,Pt.needsUpdate=!0,$u(Me,W,B,li,Pt,gi),Pt.side=me,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(qt.updateMultisampleRenderTarget(gt),qt.updateRenderTargetMipmap(gt))}A.setRenderTarget(ft,bt,It),A.setClearColor($,vt),oe!==void 0&&(B.viewport=oe),A.toneMapping=Yt}function ja(E,U,W){let B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,gt=E.length;z<gt;z++){let Rt=E[z],{object:ft,geometry:bt,group:It}=Rt,Yt=Rt.material;Yt.allowOverride===!0&&B!==null&&(Yt=B),ft.layers.test(W.layers)&&$u(ft,U,W,bt,Yt,It)}}function $u(E,U,W,B,z,gt){N!==null&&z.isNodeMaterial&&N.setObject(E,z),E.onBeforeRender(A,U,W,B,z,gt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(A,U,W,B,E,gt),z.transparent===!0&&z.side===ge&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,A.renderBufferDirect(W,U,B,z,E,gt),z.side=qn,z.needsUpdate=!0,A.renderBufferDirect(W,U,B,z,E,gt),z.side=ge):A.renderBufferDirect(W,U,B,z,E,gt),E.onAfterRender(A,U,W,B,z,gt)}function Yu(E){let U=0;for(let W of E)W.texture!==null&&U++;return U}function Ur(E,U,W){U.isScene!==!0&&(U=se);let B=Ht.get(E),z=w.state.lights,gt=w.state.shadowsArray,Rt=z.state.version,ft=J.getParameters(E,z.state,gt,U,W,w.state.lightProbeGridArray),bt=J.getProgramCacheKey(ft),It=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Yt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=P.get(E.envMap||B.environment,Yt),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",_e),It=new Map,B.programs=It,B.programVariants=new Map);let oe=It.get(bt);if(oe!==void 0){if(B.currentProgram===oe&&B.lightsStateVersion===Rt)return Zu(E,ft),oe}else ft.uniforms=J.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,W,ft),E.onBeforeCompile(ft,A),oe=J.acquireProgram(ft,bt),It.set(bt,oe),B.uniforms=ft.uniforms;let Ct=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=K.uniform),Zu(E,ft),B.needsLights=hm(E),B.lightsStateVersion=Rt,B.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.sunLights.value=z.state.sun,Ct.sunLightShadows.value=z.state.sunShadow,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.sunShadowMatrix.value=z.state.sunShadowMatrix,Ct.sunShadowCascade.value=z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=Yu(w.state.lightProbeGridArray),B.currentProgram=oe,B.uniformsList=null,oe}function om(E,U,W,B,z){let gt=Ht.get(E),Rt=gt.currentProgram.id+","+B+","+z,ft=gt.programVariants.get(Rt);return ft===void 0?(ft=Ur(E,U,W),gt.programVariants.set(Rt,ft)):(gt.currentProgram=ft,gt.uniformsList=null,gt.outputColorSpace=B,gt.toneMapping=z),ft}function Ku(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=_r.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Zu(E,U){let W=Ht.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function lm(E,U,W,B,z){U.isScene!==!0&&(U=se),qt.resetTextureUnits();let gt=U.fog,Rt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ft=it===null?A.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ce.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,It=P.get(B.envMap||Rt,bt),Yt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,oe=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ct=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,Be=!!W.morphAttributes.color,be=Oi;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=A.toneMapping);let Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,li=Me!==void 0?Me.length:0,Pt=Ht.get(B),gi=w.state.lights;if(ot===!0&&(wt===!0||E!==j)){let Ie=E===j&&B.id===q;K.setState(B,E,Ie)}let me=!1,jn=!1;B.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==gi.state.version||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==It||B.fog===!0&&Pt.fog!==gt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==K.numPlanes||Pt.numIntersection!==K.numIntersection)||Pt.vertexAlphas!==Yt||Pt.vertexTangents!==oe||Pt.morphTargets!==Ct||Pt.morphNormals!==le||Pt.morphColors!==Be||Pt.morphTargetsCount!==li||Pt.numLightProbeGrids!==Yu(w.state.lightProbeGridArray)?me=!0:(Pt.outputColorSpace!==ft||Pt.toneMapping!==be)&&(jn=!0):(me=!0,Pt.__version=B.version);let ci=Pt.currentProgram;(me===!0||jn===!0)&&(ci=jn===!0?om(B,U,z,ft,be):Ur(B,U,z),N&&B.isNodeMaterial&&N.onUpdateProgram(B,ci,Pt));let Qa=!1,Nn=!1,Qn=!1,de=ci.getUniforms(),ei=Pt.uniforms;if(pt.useProgram(ci.program)&&(Qa=!0,Nn=!0,Qn=!0),B.id!==q&&(q=B.id,Nn=!0),Qa||j!==E){pt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),de.setValue(F,"projectionMatrix",E.projectionMatrix),de.setValue(F,"viewMatrix",E.matrixWorldInverse);let Ze=de.map.cameraPosition;Ze!==void 0&&Ze.setValue(F,Kt.setFromMatrixPosition(E.matrixWorld)),ye.logarithmicDepthBuffer&&de.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Nn=!0,Qn=!0)}if(Pt.needsLights&&(gi.state.sunShadowMap.length>0&&de.setValue(F,"sunShadowMap",gi.state.sunShadowMap,qt),gi.state.directionalShadowMap.length>0&&de.setValue(F,"directionalShadowMap",gi.state.directionalShadowMap,qt),gi.state.spotShadowMap.length>0&&de.setValue(F,"spotShadowMap",gi.state.spotShadowMap,qt),gi.state.pointShadowMap.length>0&&de.setValue(F,"pointShadowMap",gi.state.pointShadowMap,qt)),z.isSkinnedMesh){de.setOptional(F,z,"bindMatrix"),de.setOptional(F,z,"bindMatrixInverse");let Ie=z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),de.setValue(F,"boneTexture",Ie.boneTexture,qt))}z.isBatchedMesh&&(de.setOptional(F,z,"batchingTexture"),de.setValue(F,"batchingTexture",z._matricesTexture,qt),de.setOptional(F,z,"batchingIdTexture"),de.setValue(F,"batchingIdTexture",z._indirectTexture,qt),de.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&de.setValue(F,"batchingColorTexture",z._colorsTexture,qt));let Gi=W.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Z.update(z,W,ci),(Nn||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,de.setValue(F,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(ei.envMapIntensity.value=U.environmentIntensity),ei.dfgLUT!==void 0&&(ei.dfgLUT.value=ly()),Nn){if(de.setValue(F,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&cm(ei,Qn),gt&&B.fog===!0&&lt.refreshFogUniforms(ei,gt),lt.refreshMaterialUniforms(ei,B,_t,Ot,w.state.transmissionRenderTarget[E.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Ie=_,Ze=0;for(let mn of w.state.lightProbeGridArray)mn.texture!==null&&(Ie.textures[Ze]=mn.texture,Ie.min[Ze]=mn.boundingBox.min,Ie.max[Ze]=mn.boundingBox.max,Ie.resolution[Ze]=mn.resolution,Ze++);for(let mn in Ie)Ie[mn].length=Ze;ei.probesSH.value=Ie.textures,ei.probesMin.value=Ie.min,ei.probesMax.value=Ie.max,ei.probesResolution.value=Ie.resolution}_r.upload(F,Ku(Pt),ei,qt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_r.upload(F,Ku(Pt),ei,qt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(F,"center",z.center),de.setValue(F,"modelViewMatrix",z.modelViewMatrix),de.setValue(F,"normalMatrix",z.normalMatrix),de.setValue(F,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ie=B.uniformsGroups;for(let Ze=0,mn=Ie.length;Ze<mn;Ze++){let ju=Ie[Ze];Nt.update(ju,ci),Nt.bind(ju,ci)}}return ci}function cm(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function hm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,U,W){let B=Ht.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ht.get(E.texture).__webglTexture=U,Ht.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let W=Ht.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){it=E,G=U,V=W;let B=null,z=!1,gt=!1;if(E){let ft=Ht.get(E);if(ft.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(E.viewport),Tt.copy(E.scissor),zt=E.scissorTest,pt.viewport(tt),pt.scissor(Tt),pt.setScissorTest(zt),q=-1;return}else if(ft.__webglFramebuffer===void 0)qt.setupRenderTarget(E);else if(ft.__hasExternalTextures)qt.rebindTextures(E,Ht.get(E.texture).__webglTexture,Ht.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Yt=E.depthTexture;if(ft.__boundDepthTexture!==Yt){if(Yt!==null&&Ht.has(Yt)&&(E.width!==Yt.image.width||E.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(E)}}let bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);let It=Ht.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?B=It[U][W]:B=It[U],z=!0):E.samples>0&&qt.useMultisampledRTT(E)===!1?B=Ht.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[W]:B=It,tt.copy(E.viewport),Tt.copy(E.scissor),zt=E.scissorTest}else tt.copy(Gt).multiplyScalar(_t).floor(),Tt.copy(Qt).multiplyScalar(_t).floor(),zt=ne;if(W!==0&&(B=k),pt.bindFramebuffer(F.FRAMEBUFFER,B)&&pt.drawBuffers(E,B),pt.viewport(tt),pt.scissor(Tt),pt.setScissorTest(zt),z){let ft=Ht.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,W)}else if(gt){let ft=U;for(let bt=0;bt<E.textures.length;bt++){let It=Ht.get(E.textures[bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+bt,It.__webglTexture,W,ft)}}else if(E!==null&&W!==0){let ft=Ht.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,W)}q=-1};function Ju(E){let U=Ht.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ye.textureFormatReadable(E.format),U.__typeReadable=ye.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,W,B,z,gt,Rt,ft=0){if(!(E&&E.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt){pt.bindFramebuffer(F.FRAMEBUFFER,bt);try{let It=E.textures[ft],Yt=It.format,oe=It.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Ct=Ju(It);if(Ct.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&W>=0&&W<=E.height-z&&F.readPixels(U,W,B,z,at.convert(Yt),at.convert(oe),gt)}finally{let It=it!==null?Ht.get(it).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,B,z,gt,Rt,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt)if(U>=0&&U<=E.width-B&&W>=0&&W<=E.height-z){pt.bindFramebuffer(F.FRAMEBUFFER,bt);let It=E.textures[ft],Yt=It.format,oe=It.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Ct=Ju(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(U,W,B,z,at.convert(Yt),at.convert(oe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Be=it!==null?Ht.get(it).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Be);let be=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Mf(F,be,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){let B=Math.pow(2,-W),z=Math.floor(E.image.width*B),gt=Math.floor(E.image.height*B),Rt=U!==null?U.x:0,ft=U!==null?U.y:0;qt.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,Rt,ft,z,gt),pt.unbindTexture()},this.copyTextureToTexture=function(E,U,W=null,B=null,z=0,gt=0){let Rt,ft,bt,It,Yt,oe,Ct,le,Be,be=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(W!==null)Rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Yt=W.min.y,oe=W.isBox3?W.min.z:0;else{let de=Math.pow(2,-z);Rt=Math.floor(be.width*de),ft=Math.floor(be.height*de),E.isDataArrayTexture?bt=be.depth:E.isData3DTexture?bt=Math.floor(be.depth*de):bt=1,It=0,Yt=0,oe=0}B!==null?(Ct=B.x,le=B.y,Be=B.z):(Ct=0,le=0,Be=0);let Me=at.convert(U.format),li=at.convert(U.type),Pt;U.isData3DTexture?(qt.setTexture3D(U,0),Pt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qt.setTexture2DArray(U,0),Pt=F.TEXTURE_2D_ARRAY):(qt.setTexture2D(U,0),Pt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let gi=pt.getParameter(F.UNPACK_ROW_LENGTH),me=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),jn=pt.getParameter(F.UNPACK_SKIP_PIXELS),ci=pt.getParameter(F.UNPACK_SKIP_ROWS),Qa=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,It),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);let Nn=E.isDataArrayTexture||E.isData3DTexture,Qn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let de=Ht.get(E),ei=Ht.get(U),Gi=Ht.get(de.__renderTarget),Ie=Ht.get(ei.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Gi.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ze=0;Ze<bt;Ze++)Nn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(E).__webglTexture,z,oe+Ze),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(U).__webglTexture,gt,Be+Ze)),F.blitFramebuffer(It,Yt,It+Rt,Yt+ft,Ct,le,Ct+Rt,le+ft,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ht.has(E)){let de=Ht.get(E),ei=Ht.get(U);pt.bindFramebuffer(F.READ_FRAMEBUFFER,L),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Gi=0;Gi<bt;Gi++)Nn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.__webglTexture,z,oe+Gi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,z),Qn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ei.__webglTexture,gt,Be+Gi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ei.__webglTexture,gt),z!==0?F.blitFramebuffer(It,Yt,It+Rt,Yt+ft,Ct,le,Ct+Rt,le+ft,F.COLOR_BUFFER_BIT,F.NEAREST):Qn?F.copyTexSubImage3D(Pt,gt,Ct,le,Be+Gi,It,Yt,Rt,ft):F.copyTexSubImage2D(Pt,gt,Ct,le,It,Yt,Rt,ft);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Qn?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Pt,gt,Ct,le,Be,Rt,ft,bt,Me,li,be.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,gt,Ct,le,Be,Rt,ft,bt,Me,be.data):F.texSubImage3D(Pt,gt,Ct,le,Be,Rt,ft,bt,Me,li,be):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Ct,le,Rt,ft,Me,li,be.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Ct,le,be.width,be.height,Me,be.data):F.texSubImage2D(F.TEXTURE_2D,gt,Ct,le,Rt,ft,Me,li,be);pt.pixelStorei(F.UNPACK_ROW_LENGTH,gi),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,jn),pt.pixelStorei(F.UNPACK_SKIP_ROWS,ci),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Qa),gt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),pt.unbindTexture()},this.initRenderTarget=function(E){Ht.get(E).__webglFramebuffer===void 0&&qt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?qt.setTextureCube(E,0):E.isData3DTexture?qt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?qt.setTexture2DArray(E,0):qt.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){G=0,V=0,it=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Ms={quality:{label:"QUALITY",scale:.67,sharp:.55,shadows:!0,shadowMap:2048,particles:2,velocity:!0},balanced:{label:"BALANCED",scale:.59,sharp:.65,shadows:!0,shadowMap:2048,particles:2,velocity:!0},performance:{label:"PERFORMANCE",scale:.5,sharp:.8,shadows:!1,shadowMap:1024,particles:1,velocity:!0},native:{label:"NATIVE",scale:1,sharp:.3,shadows:!0,shadowMap:2048,particles:2,velocity:!0}},cy=.5,hy=.67,uy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xu=`
float max3(vec3 c){ return max(c.r, max(c.g, c.b)); }
vec3 tmFwd(vec3 c){ return c / (1.0 + max3(c)); }            // reversible tonemap
vec3 tmInv(vec3 c){ return c / max(1e-4, 1.0 - max3(c)); }
vec3 toYCoCg(vec3 c){ return vec3(0.25*c.r + 0.5*c.g + 0.25*c.b, 0.5*c.r - 0.5*c.b, -0.25*c.r + 0.5*c.g - 0.25*c.b); }
vec3 fromYCoCg(vec3 c){ return vec3(c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z); }
`,dy=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tCur, tHist, tDepth, tVel;
uniform mat4 invVP, prevVP;
uniform vec2 texel, jitterUv;
uniform float histValid, useVel;
${xu}
vec3 sampleCur(vec2 uv){ return tmFwd(texture2D(tCur, uv).rgb); }
// 9-tap Catmull-Rom history fetch (keeps the history sharp)
vec3 sampleHistCR(vec2 uv){
  vec2 sz = 1.0 / texel, p = uv * sz - 0.5, f = fract(p), b = floor(p) + 0.5;
  vec2 w0 = f*(-0.5 + f*(1.0 - 0.5*f)), w1 = 1.0 + f*f*(-2.5 + 1.5*f), w2 = f*(0.5 + f*(2.0 - 1.5*f)), w3 = f*f*(-0.5 + 0.5*f);
  vec2 w12 = w1 + w2, o12 = w2 / w12;
  vec2 t0 = (b - 1.0) * texel, t3 = (b + 2.0) * texel, t12 = (b + o12) * texel;
  vec3 r = vec3(0.0);
  r += texture2D(tHist, vec2(t12.x, t0.y)).rgb * w12.x * w0.y;
  r += texture2D(tHist, vec2(t0.x, t12.y)).rgb * w0.x * w12.y;
  r += texture2D(tHist, vec2(t12.x, t12.y)).rgb * w12.x * w12.y;
  r += texture2D(tHist, vec2(t3.x, t12.y)).rgb * w3.x * w12.y;
  r += texture2D(tHist, vec2(t12.x, t3.y)).rgb * w12.x * w3.y;
  float ws = w12.x*w0.y + w0.x*w12.y + w12.x*w12.y + w3.x*w12.y + w12.x*w3.y;
  return max(r / ws, vec3(0.0));
}
void main(){
  vec2 uv = vUv;
  // neighbourhood statistics (unjittered) in YCoCg of tonemapped colour
  vec3 m1 = vec3(0.0), m2 = vec3(0.0); vec3 cur = vec3(0.0);
  float dMin = 1.0; vec2 dUv = uv;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(float(x), float(y)) * texel;
    vec3 c = toYCoCg(sampleCur(uv + o - jitterUv));
    if (x == 0 && y == 0) cur = c;
    m1 += c; m2 += c * c;
    float d = texture2D(tDepth, uv + o).r;
    if (d < dMin) { dMin = d; dUv = uv + o; }      // closest-depth dilation for edges
  }
  m1 /= 9.0; m2 /= 9.0;
  vec3 sigma = sqrt(max(m2 - m1 * m1, 0.0));
  // reprojection: object motion vectors where a dynamic object owns the pixel, camera motion otherwise
  vec2 prevUv;
  vec4 vel = texture2D(tVel, dUv);
  if (useVel > 0.5 && vel.a > 0.5 && abs(vel.b - dMin) < 0.0015) prevUv = uv - vel.xy;
  else {
    vec4 wp = invVP * vec4(uv * 2.0 - 1.0, dMin * 2.0 - 1.0, 1.0); wp /= wp.w;
    vec4 pc = prevVP * wp; prevUv = pc.xy / pc.w * 0.5 + 0.5;
  }
  vec2 motionPx = (uv - prevUv) / texel;
  float offscreen = any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0))) ? 1.0 : 0.0;
  vec3 hist = toYCoCg(tmFwd(sampleHistCR(prevUv)));
  // variance clipping (clip towards the mean, not clamp) \u2192 no ghost trails behind fast objects
  float gamma = mix(1.25, 0.75, clamp(length(motionPx) / 16.0, 0.0, 1.0));
  vec3 mn = m1 - gamma * sigma, mx = m1 + gamma * sigma;
  vec3 ctr = 0.5 * (mx + mn), ext = 0.5 * (mx - mn) + 1e-5;
  vec3 dv = hist - ctr; vec3 ts = abs(dv / ext); float t = max(ts.x, max(ts.y, ts.z));
  if (t > 1.0) hist = ctr + dv / t;
  // feedback: high when still, lower in motion; luminance weighting suppresses specular flicker
  float fb = mix(0.92, 0.80, clamp(length(motionPx) / 12.0, 0.0, 1.0));
  fb *= histValid * (1.0 - offscreen);
  float wc = (1.0 - fb) / (1.0 + cur.x), wh = fb / (1.0 + hist.x);
  vec3 res = (cur * wc + hist * wh) / max(wc + wh, 1e-5);
  gl_FragColor = vec4(tmInv(fromYCoCg(res)), 1.0);
}`;function fy(){return new ri({uniforms:{prevModel:{value:new Ft},curVP:{value:new Ft},prevVP:{value:new Ft}},vertexShader:`uniform mat4 prevModel, curVP, prevVP; varying vec4 vC; varying vec4 vP;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vC = curVP * wp; vP = prevVP * (prevModel * vec4(position, 1.0)); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`varying vec4 vC; varying vec4 vP;
      void main(){ vec2 c = vC.xy / vC.w * 0.5 + 0.5, p = vP.xy / vP.w * 0.5 + 0.5; gl_FragColor = vec4(c - p, gl_FragCoord.z, 1.0); }`,side:ge})}var py=`precision highp float; varying vec2 vUv; uniform sampler2D src; uniform vec2 texel; uniform float threshold, first;
  vec3 s(vec2 o){ return texture2D(src, vUv + o * texel).rgb; }
  void main(){
    vec3 a=s(vec2(-2,-2)),b=s(vec2(0,-2)),c=s(vec2(2,-2)),d=s(vec2(-1,-1)),e=s(vec2(1,-1)),f=s(vec2(-2,0)),g=s(vec2(0,0)),h=s(vec2(2,0)),i=s(vec2(-1,1)),j=s(vec2(1,1)),k=s(vec2(-2,2)),l=s(vec2(0,2)),m=s(vec2(2,2));
    vec3 col = (d+e+i+j)*0.125 + (a+b+f+g)*0.03125 + (b+c+g+h)*0.03125 + (f+g+k+l)*0.03125 + (g+h+l+m)*0.03125;
    if (first > 0.5) { float br = max(col.r, max(col.g, col.b)); col *= max(br - threshold, 0.0) / max(br, 1e-4); col = min(col, vec3(60.0)); }
    gl_FragColor = vec4(col, 1.0); }`,my=`precision highp float; varying vec2 vUv; uniform sampler2D src, base; uniform vec2 texel; uniform float radius;
  void main(){ vec2 r = texel * radius; vec3 c = texture2D(src, vUv + vec2(-r.x,-r.y)).rgb + 2.0*texture2D(src, vUv + vec2(0.0,-r.y)).rgb + texture2D(src, vUv + vec2(r.x,-r.y)).rgb
    + 2.0*texture2D(src, vUv + vec2(-r.x,0.0)).rgb + 4.0*texture2D(src, vUv).rgb + 2.0*texture2D(src, vUv + vec2(r.x,0.0)).rgb
    + texture2D(src, vUv + vec2(-r.x,r.y)).rgb + 2.0*texture2D(src, vUv + vec2(0.0,r.y)).rgb + texture2D(src, vUv + vec2(r.x,r.y)).rgb;
    gl_FragColor = vec4(c / 16.0 + texture2D(base, vUv).rgb, 1.0); }`,gy=`
precision highp float;
varying vec2 vUv;
uniform sampler2D src, bloom;
uniform vec2 inSize, outSize;
uniform float bloomStrength;
${xu}
vec3 T(vec2 p){ return tmFwd(texture2D(src, (p + 0.5) / inSize).rgb); }
float L(vec3 c){ return c.g + 0.5 * (c.r + c.b); }
void setF(inout vec2 dir, inout float len, float w, float lA, float lB, float lC, float lD, float lE){
  float dc = lD - lC, cb = lC - lB;
  float lenX = max(abs(dc), abs(cb)); lenX = 1.0 / max(lenX, 1e-5);
  float dirX = lD - lB; lenX = clamp(abs(dirX) * lenX, 0.0, 1.0); lenX *= lenX;
  float ec = lE - lC, ca = lC - lA;
  float lenY = max(abs(ec), abs(ca)); lenY = 1.0 / max(lenY, 1e-5);
  float dirY = lE - lA; lenY = clamp(abs(dirY) * lenY, 0.0, 1.0); lenY *= lenY;
  dir += vec2(dirX, dirY) * w; len += (lenX + lenY) * w;
}
void tap(inout vec3 aC, inout float aW, vec2 off, vec2 dir, vec2 len2, float lob, float clp, vec3 c){
  vec2 v = vec2(dot(off, dir), dot(off, vec2(-dir.y, dir.x))) * len2;
  float d2 = min(dot(v, v), clp);
  float wB = 0.4 * d2 - 1.0, wA = lob * d2 - 1.0;
  wB *= wB; wA *= wA; wB = 1.5625 * wB - 0.5625;
  float w = wB * wA; aC += c * w; aW += w;
}
void main(){
  vec2 pp = vUv * inSize - 0.5, fp = floor(pp), f = pp - fp;
  vec3 b = T(fp + vec2(0,-1)), c = T(fp + vec2(1,-1));
  vec3 e = T(fp + vec2(-1,0)), F = T(fp), g = T(fp + vec2(1,0)), h = T(fp + vec2(2,0));
  vec3 i = T(fp + vec2(-1,1)), j = T(fp + vec2(0,1)), k = T(fp + vec2(1,1)), l = T(fp + vec2(2,1));
  vec3 n = T(fp + vec2(0,2)), o = T(fp + vec2(1,2));
  float bL=L(b),cL=L(c),eL=L(e),fL=L(F),gL=L(g),hL=L(h),iL=L(i),jL=L(j),kL=L(k),lL=L(l),nL=L(n),oL=L(o);
  vec2 dir = vec2(0.0); float len = 0.0;
  setF(dir, len, (1.0-f.x)*(1.0-f.y), bL, eL, fL, gL, jL);
  setF(dir, len, f.x*(1.0-f.y),       cL, fL, gL, hL, kL);
  setF(dir, len, (1.0-f.x)*f.y,       fL, iL, jL, kL, nL);
  setF(dir, len, f.x*f.y,             gL, jL, kL, lL, oL);
  vec2 dir2 = dir * dir; float dirR = dir2.x + dir2.y;
  if (dirR < 1.0/32768.0) dir = vec2(1.0, 0.0); else dir *= inversesqrt(dirR);
  len = len * 0.5; len *= len;
  float stretch = dot(dir, dir) / max(abs(dir.x), abs(dir.y));
  vec2 len2 = vec2(1.0 + (stretch - 1.0) * len, 1.0 - 0.5 * len);
  float lob = 0.5 - 0.29 * len, clp = 1.0 / lob;
  vec3 aC = vec3(0.0); float aW = 0.0;
  tap(aC,aW,vec2( 0,-1)-f,dir,len2,lob,clp,b); tap(aC,aW,vec2( 1,-1)-f,dir,len2,lob,clp,c);
  tap(aC,aW,vec2(-1, 1)-f,dir,len2,lob,clp,i); tap(aC,aW,vec2( 0, 1)-f,dir,len2,lob,clp,j);
  tap(aC,aW,vec2( 0, 0)-f,dir,len2,lob,clp,F); tap(aC,aW,vec2(-1, 0)-f,dir,len2,lob,clp,e);
  tap(aC,aW,vec2( 1, 1)-f,dir,len2,lob,clp,k); tap(aC,aW,vec2( 2, 1)-f,dir,len2,lob,clp,l);
  tap(aC,aW,vec2( 2, 0)-f,dir,len2,lob,clp,h); tap(aC,aW,vec2( 1, 0)-f,dir,len2,lob,clp,g);
  tap(aC,aW,vec2( 1, 2)-f,dir,len2,lob,clp,o); tap(aC,aW,vec2( 0, 2)-f,dir,len2,lob,clp,n);
  vec3 mn = min(min(F, g), min(j, k)), mx = max(max(F, g), max(j, k));
  vec3 col = clamp(aC / max(aW, 1e-5), mn, mx);           // deringing
  col = tmInv(col) + texture2D(bloom, vUv).rgb * bloomStrength;
  gl_FragColor = vec4(col, 1.0);
}`,xy=`
precision highp float;
varying vec2 vUv;
uniform sampler2D src;
uniform vec2 texel;
uniform float sharp, exposure;
${xu}
vec3 ACES(vec3 x){ x *= exposure * 0.6; return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
vec3 sRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec3 e = tmFwd(texture2D(src, vUv).rgb);
  vec3 b = tmFwd(texture2D(src, vUv + vec2(0.0, -texel.y)).rgb), d = tmFwd(texture2D(src, vUv + vec2(-texel.x, 0.0)).rgb);
  vec3 f = tmFwd(texture2D(src, vUv + vec2(texel.x, 0.0)).rgb), h = tmFwd(texture2D(src, vUv + vec2(0.0, texel.y)).rgb);
  vec3 mn4 = min(min(b, d), min(f, h)), mx4 = max(max(b, d), max(f, h));
  vec3 hitMin = min(mn4, e) / (4.0 * mx4 + 1e-5);
  vec3 hitMax = (1.0 - max(mx4, e)) / (4.0 * mn4 - 4.0 - 1e-5);
  vec3 lobeRGB = max(-hitMin, hitMax);
  float lobe = max(-0.1875, min(max3(lobeRGB), 0.0)) * sharp;   // sharp: 0 = off .. 1 = full RCAS
  vec3 col = (lobe * (b + d + f + h) + e) / (4.0 * lobe + 1.0);   // contrast-adaptive, ring-limited
  col = sRGB(ACES(tmInv(clamp(col, 0.0, 0.999))));
  col += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.yx + 7.0) - 1.0) / 255.0;   // triangular dither (anti-banding)
  gl_FragColor = vec4(col, 1.0);
}`,vy=(()=>{let s=(t,e)=>{let i=1,n=0;for(;t>0;)i/=e,n+=i*(t%e),t=Math.floor(t/e);return n};return Array.from({length:8},(t,e)=>[s(e+1,2)-.5,s(e+1,3)-.5])})(),hc=class{constructor(t){this.r=t,this.quad=new rt(new Ue(2,2)),this.quad.frustumCulled=!1,this.qScene=new ln,this.qScene.add(this.quad),this.qCam=new ms(-1,1,1,-1,0,1);let e=(i,n)=>new ri({vertexShader:uy,fragmentShader:i,uniforms:n,depthTest:!1,depthWrite:!1});this.taaMat=e(dy,{tCur:{value:null},tHist:{value:null},tDepth:{value:null},tVel:{value:null},invVP:{value:new Ft},prevVP:{value:new Ft},texel:{value:new et},jitterUv:{value:new et},histValid:{value:0},useVel:{value:1}}),this.downMat=e(py,{src:{value:null},texel:{value:new et},threshold:{value:1},first:{value:0}}),this.upMat=e(my,{src:{value:null},base:{value:null},texel:{value:new et},radius:{value:1}}),this.easuMat=e(gy,{src:{value:null},bloom:{value:null},inSize:{value:new et},outSize:{value:new et},bloomStrength:{value:.55}}),this.finalMat=e(xy,{src:{value:null},texel:{value:new et},sharp:{value:.55},exposure:{value:1.15}}),this.velMat=fy(),this.prevVP=new Ft,this.curVP=new Ft,this.tmp=new Ft,this.frame=0,this.histValid=!1,this.ping=0,this.preset=Ms.quality,this.scale=Ms.quality.scale,this.dynamic=!0,this.lastCam=new R,this.lastKey="",this.ftEma=16.7,this.adjustT=0,this.bloomStrength=.55,this.bloomThreshold=1}setPreset(t,e){this.preset=Ms[t]||Ms.quality,this.dynamic=!!e&&this.preset.scale<1,this.scale=this.preset.scale,this.finalMat.uniforms.sharp.value=this.preset.sharp,this.allocated=null}_rt(t,e,i){let n=new _i(t,e,{type:Ii,format:yi,minFilter:Ve,magFilter:Ve,depthBuffer:!!i,stencilBuffer:!1,generateMipmaps:!1});return i==="tex"&&(n.depthTexture=new Zi(t,e),n.depthTexture.type=Pi),n.texture.colorSpace=rs,n}_alloc(t,e){let i=Math.max(64,Math.round(t*this.scale)),n=Math.max(64,Math.round(e*this.scale)),r=`${t}x${e}@${i}x${n}`;if(this.allocated===r)return;this.dispose(),this.allocated=r,this.ow=t,this.oh=e,this.iw=i,this.ih=n,this.sceneRT=this._rt(i,n,"tex"),this.velRT=this._rt(i,n,!0),this.hist=[this._rt(i,n),this._rt(i,n)],this.mips=[];let a=i,o=n;for(let l=0;l<5;l++)a=Math.max(4,a>>1),o=Math.max(4,o>>1),this.mips.push(this._rt(a,o));this.ups=this.mips.slice(0,4).map(l=>this._rt(l.width,l.height)),this.outRT=this.scale<1?this._rt(t,e):null,this.histValid=!1}dispose(){for(let t of["sceneRT","velRT","outRT"])this[t]&&(this[t].dispose(),this[t].depthTexture&&this[t].depthTexture.dispose(),this[t]=null);for(let t of[this.hist,this.mips,this.ups])t&&t.forEach(e=>e.dispose());this.hist=this.mips=this.ups=null}resetHistory(){this.histValid=!1}_pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.qScene,this.qCam)}adapt(t,e){if(this.ftEma=this.ftEma*.92+t*.08,!this.dynamic||(this.adjustT+=t,this.adjustT<900))return;this.adjustT=0;let i=Math.min(hy,this.preset.scale+1e-4),n=cy,r=this.scale;this.ftEma>e*1.07?r-=.04:this.ftEma<e*.93&&(r+=.02),r=Math.min(i,Math.max(n,r)),Math.abs(r-this.scale)>.001&&(this.scale=r,this.allocated=null)}render(t,e,i=[],n={}){let r=this.r,a=r.getDrawingBufferSize(new et);this._alloc(a.x,a.y);let o=this.iw,l=this.ih,c=n.cutKey||"";(e.position.distanceTo(this.lastCam)>25||c!==this.lastKey)&&(this.histValid=!1),this.lastCam.copy(e.position),this.lastKey=c,e.updateMatrixWorld(),this.curVP.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.histValid||this.prevVP.copy(this.curVP);let[u,h]=vy[this.frame++%8],d=e.projectionMatrix,f=d.clone();d.elements[8]+=2*u/o,d.elements[9]+=2*h/l,e.projectionMatrixInverse.copy(d).invert();let p=this.preset.velocity&&i.length>0;if(p){let w=this.velMat;w.uniforms.curVP.value.copy(this.curVP),w.uniforms.prevVP.value.copy(this.prevVP),r.setRenderTarget(this.velRT),r.setClearColor(0,0),r.clear(!0,!0,!1);let y=t.background,b=t.fog;t.background=null,t.fog=null;let C=[];t.traverseVisible(A=>{(A.isMesh||A.isPoints||A.isSprite||A.isLine)&&!A.userData.dyn&&(C.push(A),A.visible=!1)});for(let A of i)A.onBeforeRender=(I,N,k,L,O)=>{O===w&&(w.uniforms.prevModel.value.copy(A.userData.pm||A.matrixWorld),w.uniformsNeedUpdate=!0)};t.overrideMaterial=w,r.render(t,e),t.overrideMaterial=null;for(let A of C)A.visible=!0;t.background=y,t.fog=b}r.setRenderTarget(this.sceneRT),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let w of i)(w.userData.pm||=new Ft).copy(w.matrixWorld);d.copy(f),e.projectionMatrixInverse.copy(d).invert();let x=this.hist[this.ping],g=this.hist[1-this.ping],m=this.taaMat.uniforms;m.tCur.value=this.sceneRT.texture,m.tHist.value=g.texture,m.tDepth.value=this.sceneRT.depthTexture,m.tVel.value=this.velRT.texture,this.tmp.multiplyMatrices(d,e.matrixWorldInverse),m.invVP.value.copy(this.tmp).invert(),m.prevVP.value.copy(this.prevVP),m.texel.value.set(1/o,1/l),m.jitterUv.value.set(u/o,h/l),m.histValid.value=this.histValid?1:0,m.useVel.value=p?1:0,this._pass(this.taaMat,x),this.ping=1-this.ping,this.histValid=!0,this.prevVP.copy(this.curVP);let v=x;this.mips.forEach((w,y)=>{let b=this.downMat.uniforms;b.src.value=v.texture,b.texel.value.set(1/v.width,1/v.height),b.first.value=y===0?1:0,b.threshold.value=this.bloomThreshold,this._pass(this.downMat,w),v=w});for(let w=this.mips.length-2;w>=0;w--){let y=this.upMat.uniforms;y.src.value=v.texture,y.base.value=this.mips[w].texture,y.texel.value.set(1/v.width,1/v.height),y.radius.value=1,this._pass(this.upMat,this.ups[w]),v=this.ups[w]}let M=this.easuMat.uniforms;M.bloom.value=v.texture,M.bloomStrength.value=this.bloomStrength;let _;this.outRT?(M.src.value=x.texture,M.inSize.value.set(o,l),M.outSize.value.set(this.ow,this.oh),this._pass(this.easuMat,this.outRT),_=this.outRT):((!this.nativeOut||this.nativeOut.width!==o)&&(this.nativeOut&&this.nativeOut.dispose(),this.nativeOut=this._rt(o,l)),M.src.value=x.texture,M.inSize.value.set(o,l),M.outSize.value.set(o,l),this._pass(this.easuMat,this.nativeOut),_=this.nativeOut);let T=this.finalMat.uniforms;T.src.value=_.texture,T.texel.value.set(1/_.width,1/_.height),this._pass(this.finalMat,null)}};function fp(){let s=Zt;if(s.shadowmap_pars_fragment.includes("NCR_PCSS"))return;let t="#else // SHADOWMAP_TYPE_BASIC",[e,i]=s.shadowmap_pars_fragment.split(t);if(!i)return;let n=`
		// NCR_PCSS: blocker search + variable-width PCF (contact-hardening)
		const vec2 PD[16] = vec2[16](vec2(-0.94201624,-0.39906216),vec2(0.94558609,-0.76890725),vec2(-0.094184101,-0.92938870),vec2(0.34495938,0.29387760),vec2(-0.91588581,0.45771432),vec2(-0.81544232,-0.87912464),vec2(-0.38277543,0.27676845),vec2(0.97484398,0.75648379),vec2(0.44323325,-0.97511554),vec2(0.53742981,-0.47373420),vec2(-0.26496911,-0.41893023),vec2(0.79197514,0.19090188),vec2(-0.24188840,0.99706507),vec2(-0.81409955,0.91437590),vec2(0.19984126,0.78641367),vec2(0.14383161,-0.14100790));
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			if ( shadowCoord.x < 0.0 || shadowCoord.x > 1.0 || shadowCoord.y < 0.0 || shadowCoord.y > 1.0 || shadowCoord.z > 1.0 ) return 1.0;
			float zR = shadowCoord.z;
			float ang = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
			mat2 rot = mat2(cos(ang), sin(ang), -sin(ang), cos(ang));
			float search = 14.0 / shadowMapSize.x;
			float bSum = 0.0, bN = 0.0;
			for (int i = 0; i < 16; i++) { float d = texture2D(shadowMap, shadowCoord.xy + rot * PD[i] * search).r; if (d < zR) { bSum += d; bN += 1.0; } }
			if (bN < 0.5) return 1.0;
			float avg = bSum / bN;
			float pen = clamp((zR - avg) * 260.0, 1.2, 18.0) / shadowMapSize.x;   // grows with receiver-blocker distance
			float lit = 0.0;
			for (int i = 0; i < 16; i++) lit += step(zR, texture2D(shadowMap, shadowCoord.xy + rot * PD[i] * pen).r);
			return mix(1.0, lit / 16.0, shadowIntensity);
		}
		float getShadowBasicOriginal( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {`;s.shadowmap_pars_fragment=e+t+i.replace(/float getShadow\( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord \) \{/,n)}function mp(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ie;l.morphTargetsRelative=o;let c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0,f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=pp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let p=pp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function pp(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=u.gpuType),n!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Ce(a,e,i),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){let x=u.getComponent(d,p);o.setComponent(d+h,p,x)}}else a.set(u.array,l);l+=u.count*e}return n!==void 0&&(o.gpuType=n),o}var he=(s,t,e)=>s<t?t:s>e?e:s;var Fe=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),ai=(s,t)=>(s%t+t)%t;function br(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fi=s=>"#"+(s>>>0).toString(16).padStart(6,"0");function pi(s,t){return`rgba(${s>>16&255},${s>>8&255},${s&255},${t})`}function tn(s,t,e,i={}){let n=document.createElement("canvas"),r=i.scale||1;n.width=s*r,n.height=t*r;let a=n.getContext("2d");r!==1&&a.scale(r,r),e(a,s,t);let o=new En(n);return o.colorSpace=ii,o.anisotropy=i.aniso||8,i.repeat&&(o.wrapS=o.wrapT=Sn),i.nearest&&(o.magFilter=ze),o.needsUpdate=!0,o}var uc;function fn(){return uc||(uc=tn(64,64,(s,t,e)=>{let i=s.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)}),uc)}function gp(s,t=1){return new Lt({color:s,transparent:!0,opacity:t,blending:Se,depthWrite:!1})}function en(s){if(!isFinite(s))return"--:--.--";let t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var Ba=s=>s+(["th","st","nd","rd"][(s%100-20)%10]||["th","st","nd","rd"][s%100]||"th");function dc(s,t=()=>!1){s.updateMatrixWorld(!0);let e=new Ft().copy(s.matrixWorld).invert(),i=new Map,n=[];s.traverse(r=>{if(r===s||!r.isMesh||r.isInstancedMesh||t(r))return;let a=r.material;if(Array.isArray(a)||a.map||a.wireframe)return;let o=[a.type,a.color&&a.color.getHex(),a.opacity,a.transparent,a.blending,a.side,a.shininess,a.roughness,a.metalness,a.normalMap&&a.normalMap.uuid,a.color&&(a.color.r>1||a.color.g>1||a.color.b>1?a.color.r+","+a.color.g+","+a.color.b:"")].join("|"),l=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);l.attributes.uv||l.setAttribute("uv",new kt(new Float32Array(l.attributes.position.count*2),2)),l.attributes.normal||l.computeVertexNormals(),l.applyMatrix4(new Ft().multiplyMatrices(e,r.matrixWorld)),i.has(o)||i.set(o,{mat:a,geos:[]}),i.get(o).geos.push(l),n.push(r)});for(let r of n)r.parent.remove(r);for(let{mat:r,geos:a}of i.values()){let o=mp(a,!1);a.forEach(l=>l.dispose()),o&&s.add(new rt(o,r))}return s}var xp=new R(0,1,0),Sr=24,ve=Sr/2,yp=1,bs=1/yp;function _y(s,t,e){let i=br(s.seed*7919+13),n=s.shape==="trefoil"?42:s.shape==="fig8"?36:30,r=s.size,a=i()*6.28,o=i()*6.28,l=i()*6.28,c=s.elev*t,u=[];for(let h=0;h<n;h++){let d=h/n*Math.PI*2,f,p,x;switch(s.shape){case"fig8":{f=r*1.35*Math.sin(d),x=r*.85*Math.sin(d)*Math.cos(d)*(1+.08*Math.sin(3*d+a)*e),p=Math.max(c,10)*Math.cos(d)+3*Math.sin(3*d+o);break}case"trefoil":{f=r*(Math.sin(d)+2*Math.sin(2*d)),x=r*(Math.cos(d)-2*Math.cos(2*d)),p=-Math.max(c,10)*Math.sin(3*d);break}case"serp":{let _=r*(1+e*(.2*Math.sin(3*d+a)+.1*Math.sin(5*d+o)));f=_*Math.cos(d)*1.3,x=_*Math.sin(d),p=c*(.6*Math.sin(d+l)+.4*Math.sin(2*d+a));break}case"mountain":{let _=r*(1+e*(.14*Math.sin(2*d+a)+.08*Math.sin(4*d+o)));f=_*Math.cos(d)*1.2,x=_*Math.sin(d),p=c*(.75*Math.sin(d+l)+.25*Math.sin(3*d+o));break}default:{let _=r*(1+e*(.16*Math.sin(2*d+a)+.09*Math.sin(3*d+o)));f=_*Math.cos(d)*1.35,x=_*Math.sin(d),p=c*Math.sin(d+l)}}let g=s.shape==="fig8"||s.shape==="trefoil"?.02:.055,m=(i()-.5)*2*g*e,v=(i()-.5)*2*g*e,M=s.shape==="trefoil"?r*2:r;u.push(new R(f+m*M,p,x+v*M))}return u}var wr=class{constructor(t,e){this.cup=t,this.def=e,this.pal=t.pal,this.rnd=br(e.seed*31+7),this.time=0,this._generate(),this._features()}_generate(){let t=this.def,e=1,i=1;for(let n=0;n<10;n++){let r=new lr(_y(t,e,i),!0,"centripetal",.5),a=r.getLength(),o=Math.round(a/yp),l=r.getSpacedPoints(o);if(l.pop(),this._frames(l,a),!this._badCrossing())break;t.shape==="fig8"||t.shape==="trefoil"?e*=1.25:(i*=.72,e*=1.1)}}_frames(t,e){let i=t.length;this.n=i,this.L=e,this.step=e/i;let n=this.P=t,r=this.T=[],a=this.R=[],o=this.U=[],l=this.K=new Float32Array(i);for(let x=0;x<i;x++){let g=n[(x-1+i)%i],m=n[(x+1)%i];r.push(new R().subVectors(m,g).normalize())}for(let x=0;x<i;x++){let g=r[x],m=g.y/Math.hypot(g.x,g.z);Math.abs(m)>.32&&(n[x].y=(n[(x-2+i)%i].y+n[(x+2)%i].y)/2)}let c=[];for(let x=0;x<i;x++){let g=xp.clone().addScaledVector(r[x],-r[x].dot(xp)).normalize();c.push(new R().crossVectors(r[x],g).normalize()),o.push(g)}let u=new Float32Array(i);for(let x=0;x<i;x++){let g=r[(x+1)%i],m=r[(x-1+i)%i],v=new R().subVectors(g,m).divideScalar(2*this.step);u[x]=v.dot(c[x])}let h=Math.round(12*bs);for(let x=0;x<i;x++){let g=0;for(let m=-h;m<=h;m++)g+=u[(x+m+i)%i];l[x]=g/(2*h+1)}this.bank=new Float32Array(i);for(let x=0;x<i;x++){let g=he(l[x]*15,-.26,.26);this.bank[x]=g;let m=new si().setFromAxisAngle(r[x],-g);o[x].applyQuaternion(m).normalize(),a.push(new R().crossVectors(r[x],o[x]).normalize())}let d=1/0,f=-1/0,p=new Ni;for(let x of n)d=Math.min(d,x.y),f=Math.max(f,x.y),p.expandByPoint(x);this.minY=d,this.maxY=f,this.box=p,this.groundY=d-14}_badCrossing(){let t=this.n,e=this.P,i=30,n=new Map;for(let a=0;a<t;a+=4*bs){let o=Math.floor(e[a].x/i)+","+Math.floor(e[a].z/i);n.has(o)||n.set(o,[]),n.get(o).push(a)}this.crossings=[];let r=!1;for(let a=0;a<t;a+=4*bs){let o=Math.floor(e[a].x/i),l=Math.floor(e[a].z/i);for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++){let h=n.get(o+c+","+(l+u));if(h)for(let d of h){if(d<=a||Math.min(d-a,t-(d-a))*this.step<90)continue;Math.hypot(e[a].x-e[d].x,e[a].z-e[d].z)<Sr+6&&(Math.abs(e[a].y-e[d].y)<11?r=!0:this.crossings.push([a,d]))}}}return r}frame(t,e){let i=this.n,n=ai(t,this.L)/this.step,r=Math.floor(n)%i,a=(r+1)%i,o=n-Math.floor(n);return e.pos.lerpVectors(this.P[r],this.P[a],o),e.t.lerpVectors(this.T[r],this.T[a],o).normalize(),e.r.lerpVectors(this.R[r],this.R[a],o).normalize(),e.u.lerpVectors(this.U[r],this.U[a],o).normalize(),e.k=this.K[r]*(1-o)+this.K[a]*o,e.i=r,e}idx(t){return Math.floor(ai(t,this.L)/this.step)%this.n}curvatureAhead(t,e){let i=0,n=0;for(let r=0;r<e;r+=6){let a=this.K[this.idx(t+r)];n+=a,Math.abs(a)>Math.abs(i)&&(i=a)}return{max:i,avg:n/Math.max(1,Math.ceil(e/6))}}_features(){let t=this.L,e=this.rnd,i=this.def,n=[[t-70,t],[0,90]],r=(d,f)=>n.every(([p,x])=>f<p||d>x)&&f<t-70&&d>90,a=(d,f)=>n.push([d,f]),o=d=>Math.abs(this.curvatureAhead(d-20,70).max)<.012;this.jumps=[];let l=i.jumps;for(let d=0;d<l;d++){let f=null;for(let p=0;p<60;p++){let x=t*((d+.5)/l)+(e()-.5)*t*.3,g=ai(x,t),m=d===l-1&&l>=2,v=m?30:22;if(r(g-10,g+12+v+95)&&(o(g)||p>40)){f={s0:g,ramp:12,gap:v,mega:m};break}}f&&(this.jumps.push(f),a(f.s0-10,f.s0+f.ramp+f.gap+95))}this.openMask=new Uint8Array(this.n),this.opens=[];for(let d=0;d<i.open;d++){let f=-1,p=-1;for(let x=0;x<40;x++){let g=100+e()*(t-300);if(!r(g,g+110))continue;let m=this.P[this.idx(g+55)].y-this.minY-Math.abs(this.curvatureAhead(g-40,170).max)*2500;m>p&&(p=m,f=g)}if(f>=0){this.opens.push([f,f+110]),a(f,f+110);for(let x=f;x<f+110;x+=this.step)this.openMask[this.idx(x)]=1}}for(let d of this.jumps)for(let f=d.s0+d.ramp;f<d.s0+d.ramp+d.gap;f+=this.step)this.openMask[this.idx(f)]=2;this.strips=[];for(let d=0;d<7;d++)for(let f=0;f<30;f++){let p=100+e()*(t-200);if(r(p-2,p+12)){this.strips.push({s:p,x:(e()-.5)*14,len:10,w:5.5}),a(p-2,p+12);break}}for(let d of this.jumps)this.strips.push({s:d.s0-9,x:(e()-.5)*8,len:8,w:6,ramp:!0});this.capsules=[];let c=Math.max(4,Math.round(t/380));for(let d=0;d<c;d++){let f=t*((d+.35)/c);for(let p=0;p<30&&!r(f-3,f+3);p++)f+=13;a(f-3,f+3);for(let p=-2;p<=2;p++)this.capsules.push({s:f,x:p*4.2,active:!0,timer:0})}this.hazards=[];let u=i.hz,h=Math.max(2,Math.round(t/650));for(let d of u)for(let f=0;f<h;f++)for(let p=0;p<40;p++){let x=120+e()*(t-260),g=d==="pulse"?40:d==="mine"?30:6;if(!r(x-4,x+g+4))continue;a(x-4,x+g+4);let m={type:d,s:x,len:g,phase:e()*6.28,state:0};d==="barrier"&&(m.amp=ve-3.4,m.speed=.9+e()*.6,m.w=5.5,m.x=0),d==="firewall"&&(m.period=3.2,m.side=1),d==="mine"&&(m.mines=[0,1,2].map(v=>({s:x+v*12,x:(e()-.5)*18,active:!0,t:0}))),d==="pulse"&&(m.period=3.4,m.on=!1),this.hazards.push(m);break}}surface(t){t=ai(t,this.L);for(let e of this.jumps){let i=t-e.s0;if(i>=0&&i<e.ramp)return{h:(i/e.ramp)**1.6*(e.mega?2.6:1.9),gap:!1,ramp:e,rampEnd:i>e.ramp-2.5};if(i>=e.ramp&&i<e.ramp+e.gap)return{h:0,gap:!0,ramp:null}}return{h:0,gap:!1,ramp:null}}isOpen(t){return this.openMask[this.idx(t)]>0}build(t,e){let i=this.pal;this.group=new Ae,t.add(this.group),t.fog=new as(i.fog,90,e>0?760:520),t.background=new Et(i.sky1),this._sky(),this._ground(),this._road(),this._rails(),this._pillars(),this._gates(),this._environment(e),this._featureMeshes()}_sky(){let t=this.pal,e=new Ri(1800,24,16),i=new ri({side:We,depthWrite:!1,fog:!1,uniforms:{c1:{value:new Et(t.sky1)},c2:{value:new Et(t.sky2)},c3:{value:new Et(t.a)}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vp; uniform vec3 c1,c2,c3;
        void main(){ float h=vp.y; vec3 col=mix(c2,c1,smoothstep(-0.05,0.55,h));
        col+=c3*0.18*exp(-abs(h-0.02)*28.0);
        float g=step(0.985,fract(atan(vp.z,vp.x)*24.0))*smoothstep(0.3,0.0,h)*smoothstep(-0.2,0.0,h)*0.15;
        col+=c3*g; gl_FragColor=vec4(col,1.0);}`}),n=new rt(e,i);n.renderOrder=-10,n.frustumCulled=!1,this.sky=n,this.group.add(n);let r=500,a=new Float32Array(r*3),o=this.rnd;for(let u=0;u<r;u++){let h=o()*6.28,d=.08+o()*1.3;a[u*3]=Math.cos(h)*Math.cos(d)*1600,a[u*3+1]=Math.sin(d)*1600,a[u*3+2]=Math.sin(h)*Math.cos(d)*1600}let l=new ie;l.setAttribute("position",new Ce(a,3));let c=new zn(l,new ls({color:13625599,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8}));c.frustumCulled=!1,this.stars=c,this.group.add(c)}_ground(){let t=this.pal,e=tn(512,512,(a,o,l)=>{a.fillStyle=pi(t.ground,1),a.fillRect(0,0,o,l);let c=br(this.def.seed);a.strokeStyle=pi(t.a,.16),a.lineWidth=2;for(let u=0;u<=8;u++)a.beginPath(),a.moveTo(u*64,0),a.lineTo(u*64,l),a.stroke(),a.beginPath(),a.moveTo(0,u*64),a.lineTo(o,u*64),a.stroke();for(let u=0;u<40;u++){let h=Math.floor(c()*8)*64,d=Math.floor(c()*8)*64;a.strokeStyle=pi(c()<.6?t.a:t.b,.35+c()*.3),a.lineWidth=3,a.beginPath(),a.moveTo(h,d);for(let f=0;f<4;f++)f%2?h+=(c()<.5?-1:1)*32*(1+Math.floor(c()*3)):d+=(c()<.5?-1:1)*32*(1+Math.floor(c()*3)),a.lineTo(h,d);a.stroke(),a.fillStyle=pi(t.c,.7),a.beginPath(),a.arc(h,d,4,0,6.28),a.fill()}},{repeat:!0,scale:2,aniso:16}),i=Math.max(this.box.max.x-this.box.min.x,this.box.max.z-this.box.min.z)+1600;e.repeat.set(i/120,i/120);let n=new rt(new Ue(i,i),_p(new Lt({map:e})));n.rotation.x=-Math.PI/2;let r=this.box.getCenter(new R);n.position.set(r.x,this.groundY,r.z),this.group.add(n)}_roadTexture(){let t=this.pal;return tn(256,512,(e,i,n)=>{e.fillStyle=pi(t.road,1),e.fillRect(0,0,i,n),e.strokeStyle=pi(t.b,.09),e.lineWidth=1;for(let o=0;o<n;o+=18)for(let l=o/18%2?10:0;l<i;l+=20){e.beginPath();for(let c=0;c<6;c++){let u=c*Math.PI/3;e.lineTo(l+Math.cos(u)*7,o+Math.sin(u)*7)}e.closePath(),e.stroke()}let r=br(this.def.seed+5);for(let o=0;o<14;o++){let l=30+r()*(i-60),c=r()*n;e.strokeStyle=pi(t.b,.22),e.lineWidth=2,e.beginPath(),e.moveTo(l,c);for(let u=0;u<3;u++)c+=20+r()*50,e.lineTo(l,c),l+=(r()-.5)*50,e.lineTo(l,c+12),c+=12;e.stroke()}e.fillStyle="rgba(220,240,255,0.30)";for(let o of[.25,.5,.75])for(let l=0;l<n;l+=128)e.fillRect(o*i-2,l,4,64);let a=(o,l,c,u)=>{let h=e.createLinearGradient(o-c*3,0,o+c*3,0);h.addColorStop(0,pi(l,0)),h.addColorStop(.5,pi(l,u)),h.addColorStop(1,pi(l,0)),e.fillStyle=h,e.fillRect(o-c*3,0,c*6,n)};a(i*.375,t.b,3,.45),a(i*.625,t.c,3,.35),a(6,t.a,4,1),a(i-6,t.a,4,1),e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(3,0,3,n),e.fillRect(i-6,0,3,n)},{repeat:!0,aniso:16,scale:2})}_road(){let t=this.n,e=this.P,i=this.R,n=this.U,r=[],a=[],o=[],l=[],c=[],u=[],h=[],d=_=>this.surface(_).gap,f=0;for(let _=0;_<=t;_++){let T=_%t,w=e[T],y=i[T],b=n[T],C=_*this.step,A=w.clone().addScaledVector(y,-ve),I=w.clone().addScaledVector(y,ve);r.push(A.x,A.y,A.z,I.x,I.y,I.z),a.push(0,C/24,1,C/24);let N=1.8,k=A.clone().addScaledVector(b,-N),L=I.clone().addScaledVector(b,-N);if(l.push(k.x,k.y,k.z,L.x,L.y,L.z),u.push(A.x,A.y,A.z,k.x,k.y,k.z,I.x,I.y,I.z,L.x,L.y,L.z),_>0&&!d(C-this.step*.5)){let O=(_-1)*2;o.push(O,O+2,O+1,O+1,O+2,O+3),c.push(O,O+1,O+2,O+1,O+3,O+2);let G=(_-1)*4;h.push(G,G+1,G+4,G+1,G+5,G+4,G+2,G+6,G+3,G+3,G+6,G+7)}f++}let p=new ie;p.setAttribute("position",new kt(r,3)),p.setAttribute("uv",new kt(a,2)),p.setIndex(o),this.roadTex=this._roadTexture();let x=new rt(p,_p(new Lt({map:this.roadTex,side:ge})));this.roadGeo=p,this.group.add(x);let g=new ie;g.setAttribute("position",new kt(l,3)),g.setIndex(c),this.group.add(new rt(g,new Lt({color:329228,side:ge})));let m=new ie;m.setAttribute("position",new kt(u,3)),m.setIndex(h),this.group.add(new rt(m,new Lt({color:new Et(this.pal.a).multiplyScalar(.25),side:ge})));let v=tn(256,32,(_,T,w)=>{for(let y=0;y<16;y++)for(let b=0;b<2;b++)_.fillStyle=(y+b)%2?"#f2f6ff":"#10131c",_.fillRect(y*16,b*16,16,16)}),M=new rt(new Ue(Sr,3),new Lt({map:v,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));this._placeOnRoad(M,0,0,.04),this.group.add(M)}_placeOnRoad(t,e,i,n,r=0){let a=this.frame(e,{pos:new R,t:new R,r:new R,u:new R});t.position.copy(a.pos).addScaledVector(a.r,i).addScaledVector(a.u,n);let o=new Ft().makeBasis(a.r.clone().negate(),a.u,a.t);return t.quaternion.setFromRotationMatrix(o),t.geometry&&t.geometry.type==="PlaneGeometry"&&t.rotateX(-Math.PI/2),r&&t.rotateY(r),a}_rails(){let t=this.n,e=this.P,i=this.R,n=this.U,r=this.pal,a=[],o=[],l=[],c=[],u=[],h=[],d=0,f=0,p=0;for(let g=0;g<t;g++){let m=(g+1)%t,v=this.openMask[g],M=this.openMask[m];for(let _ of[-1,1]){let T=e[g].clone().addScaledVector(i[g],_*ve),w=e[m].clone().addScaledVector(i[m],_*ve);if(!v&&!M){let y=T.clone().addScaledVector(n[g],1.1),b=w.clone().addScaledVector(n[m],1.1);a.push(T.x,T.y,T.z,y.x,y.y,y.z,w.x,w.y,w.z,b.x,b.y,b.z),o.push(d,d+2,d+1,d+1,d+2,d+3),d+=4;let C=T.clone().addScaledVector(n[g],1.25),A=w.clone().addScaledVector(n[m],1.25);l.push(y.x,y.y,y.z,C.x,C.y,C.z,b.x,b.y,b.z,A.x,A.y,A.z),c.push(f,f+2,f+1,f+1,f+2,f+3),f+=4}else if(v===1&&M===1&&Math.floor(g/(2*bs))%3!==2){let y=T.clone().addScaledVector(i[g],-_*.5).addScaledVector(n[g],.06),b=w.clone().addScaledVector(i[m],-_*.5).addScaledVector(n[m],.06),C=T.clone().addScaledVector(n[g],.06),A=w.clone().addScaledVector(n[m],.06);u.push(y.x,y.y,y.z,C.x,C.y,C.z,b.x,b.y,b.z,A.x,A.y,A.z),h.push(p,p+2,p+1,p+1,p+2,p+3),p+=4}}}let x=(g,m,v)=>{let M=new ie;M.setAttribute("position",new kt(g,3)),M.setIndex(m);let _=new rt(M,v);return this.group.add(_),_};x(a,o,new Lt({color:r.a,transparent:!0,opacity:.11,side:ge,blending:Se,depthWrite:!1})),x(l,c,new Lt({color:new Et(r.a).multiplyScalar(1.5),side:ge})),this.warnMat=new Lt({color:16724e3,transparent:!0,opacity:.9,side:ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),u.length&&x(u,h,this.warnMat)}_pillars(){let t=[];for(let o=0;o<this.n;o+=Math.round(28*bs)){let l=this.P[o],c=l.y-1.8-this.groundY;c>2&&t.push([l,c])}if(!t.length)return;let e=new ue(2.4,1,2.4),i=new Lt({color:724506}),n=new Ti(e,i,t.length),r=new Ti(new ue(2.6,.35,2.6),new Lt({color:new Et(this.pal.b).multiplyScalar(1.6)}),t.length*2),a=new Ft;t.forEach(([o,l],c)=>{a.makeScale(1,l,1).setPosition(o.x,this.groundY+l/2,o.z),n.setMatrixAt(c,a),a.makeTranslation(o.x,this.groundY+l*.33,o.z),r.setMatrixAt(c*2,a),a.makeTranslation(o.x,this.groundY+l*.66,o.z),r.setMatrixAt(c*2+1,a)}),this.group.add(n,r)}_gates(){let t=this.pal,e=new Lt({color:new Et(t.a).multiplyScalar(1.8)}),i=new Lt({color:658456}),n=(a,o)=>{let l=new Ae,c=new ue(1.2,11,1.2);for(let d of[-1,1]){let f=new rt(c,i);f.position.set(d*(ve+1.2),5.5,0),l.add(f);let p=new rt(new ue(.3,11,1.3),e);p.position.set(d*(ve+.55),5.5,0),l.add(p)}let u=new rt(new ue(Sr+3.6,1.6,1.2),i);u.position.y=11,l.add(u);let h=new rt(new ue(Sr+3.6,.25,1.3),e);if(h.position.y=10.1,l.add(h),o){let d=tn(512,64,(p,x,g)=>{p.fillStyle="#05060c",p.fillRect(0,0,x,g),p.font="bold 44px sans-serif",p.textAlign="center",p.textBaseline="middle",p.shadowColor=pi(t.a,1),p.shadowBlur=16,p.fillStyle="#ffffff",p.fillText(o,x/2,g/2+2)}),f=new rt(new Ue(Sr,3),new Lt({map:d,side:ge}));f.position.set(0,12.6,0),f.rotation.y=Math.PI,l.add(f)}dc(l),this._placeOnRoad(l,a,0,0),this.group.add(l)};n(0,"FINISH");let r=190;for(let a=r;a<this.L-80;a+=r)this.surface(a).gap||this.surface(a+6).gap||n(a,null)}_environment(t){let e=this.pal,i=br(this.def.seed*3+1),n=20,r=new Set;for(let b=0;b<this.n;b+=Math.round(4*bs)){let C=this.P[b];for(let A=-3;A<=3;A++)for(let I=-3;I<=3;I++)r.add(Math.floor(C.x/n)+A+","+(Math.floor(C.z/n)+I))}let a=tn(128,256,(b,C,A)=>{b.fillStyle="#07080f",b.fillRect(0,0,C,A);for(let I=6;I<A;I+=12)for(let N=6;N<C;N+=12){let k=i();k<.45&&(b.fillStyle=k<.12?pi(e.c,.9):k<.3?pi(e.a,.75):"rgba(200,220,255,0.35)",b.fillRect(N,I,6,5))}b.fillStyle=pi(e.a,.9),b.fillRect(0,0,C,3)},{scale:2,aniso:16}),o=t>0?260:150,l=new ue(1,1,1);l.translate(0,.5,0);let c=new Lt({map:a}),u=new Ti(l,c,o),h=new Ft,d=new Et,f=(this.box.min.x+this.box.max.x)/2,p=(this.box.min.z+this.box.max.z)/2,x=(this.box.max.x-this.box.min.x)/2+380,g=(this.box.max.z-this.box.min.z)/2+380,m=0;for(let b=0;b<o*8&&m<o;b++){let C=f+(i()*2-1)*x,A=p+(i()*2-1)*g;if(r.has(Math.floor(C/n)+","+Math.floor(A/n)))continue;let I=Math.min(1,Math.hypot((C-f)/x,(A-p)/g)),N=14+i()*26,k=14+i()*26,L=20+i()*70+I*120;this.cup.env==="chips"&&(L*=.55),h.makeScale(N,L,k).setPosition(C,this.groundY,A),u.setMatrixAt(m,h),d.set(i()<.5?16777215:e.b).lerp(new Et(16777215),.6),u.setColorAt(m,d),m++}u.count=m,this.group.add(u),this.floaters=[];let v=this.cup.env,M=t>0?40:22,_;v==="quantum"||v==="core"?_=new ds(6,0):v==="neural"?_=new dr(4,0):v==="heat"?_=new ha(4,14,4):_=new ue(10,1.5,10);let T=new Lt({color:e.c,wireframe:!0,transparent:!0,opacity:.7,blending:Se,depthWrite:!1});for(let b=0;b<M;b++){let C=f+(i()*2-1)*x*.9,A=p+(i()*2-1)*g*.9;if(r.has(Math.floor(C/n)+","+Math.floor(A/n)))continue;let I=new rt(_,T);I.position.set(C,this.maxY+20+i()*60,A),I.userData.spin=(i()-.5)*.8,I.userData.bob=i()*6,this.group.add(I),this.floaters.push(I)}let w=new Ji(.8,.8,400,6,1,!0),y=gp(e.a,.22);for(let b=0;b<16;b++){let C=f+(i()*2-1)*x,A=p+(i()*2-1)*g;if(r.has(Math.floor(C/n)+","+Math.floor(A/n)))continue;let I=new rt(w,y);I.position.set(C,this.groundY+200,A),this.group.add(I)}if(v==="core"){let b=new rt(new Ri(90,32,16),new Lt({color:16773552,fog:!1}));b.position.set(f,this.maxY+380,p-g-300),this.group.add(b);let C=new Fi(160,3,6,64);for(let A=0;A<3;A++){let I=new rt(C,new Lt({color:A?e.c:e.a,fog:!1}));I.position.copy(b.position),I.rotation.set(1.2+A*.3,A*.7,0),I.scale.setScalar(1+A*.25),this.group.add(I),this.floaters.push(I),I.userData.spin=.1+A*.05,I.userData.bob=0,I.userData.noBob=!0}}}_featureMeshes(){let t=this.pal;for(let h of this.jumps){let f=[],p=[];for(let M=0;M<=20;M++){let _=h.s0+M/20*h.ramp,T=this.frame(_,{pos:new R,t:new R,r:new R,u:new R}),w=this.surface(_).h+.03;for(let y of[-1,1]){let b=T.pos.clone().addScaledVector(T.r,y*(ve-.2)).addScaledVector(T.u,w),C=T.pos.clone().addScaledVector(T.r,y*(ve-.2));f.push(b.x,b.y,b.z,C.x,C.y,C.z)}if(M>0){let y=(M-1)*4;p.push(y,y+4,y+2,y+2,y+4,y+6),p.push(y,y+1,y+4,y+1,y+5,y+4),p.push(y+2,y+6,y+3,y+3,y+6,y+7)}}let x=80;p.push(x,x+2,x+1,x+1,x+2,x+3);let g=new ie;g.setAttribute("position",new kt(f,3)),g.setIndex(p);let m=tn(64,128,(M,_,T)=>{M.fillStyle="#120a1a",M.fillRect(0,0,_,T);for(let w=0;w<T;w+=32)M.strokeStyle=pi(h.mega?t.c:t.a,.95),M.lineWidth=6,M.beginPath(),M.moveTo(6,w+24),M.lineTo(_/2,w+6),M.lineTo(_-6,w+24),M.stroke()},{repeat:!0}),v=[];for(let M=0;M<=20;M++)v.push(0,M/4,0,M/4,1,M/4,1,M/4);g.setAttribute("uv",new kt(v,2)),this.group.add(new rt(g,new Lt({map:m,side:ge})))}this.stripTex=tn(64,128,(h,d,f)=>{h.clearRect(0,0,d,f);for(let p=0;p<f;p+=42)h.strokeStyle="rgba(255,255,255,0.95)",h.lineWidth=9,h.lineJoin="round",h.beginPath(),h.moveTo(8,p+34),h.lineTo(d/2,p+10),h.lineTo(d-8,p+34),h.stroke()},{repeat:!0}),this.stripTex.repeat.set(1,2);for(let h of this.strips){let d=new Lt({map:this.stripTex,color:t.c,transparent:!0,blending:Se,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),f=new rt(new Ue(h.w,h.len),d);this._placeOnRoad(f,h.s+h.len/2,h.x,.06),f.rotateZ(Math.PI),this.group.add(f);let p=new rt(new Ue(h.w+.6,h.len+.6),new Lt({color:new Et(t.c).multiplyScalar(.25),polygonOffset:!0,polygonOffsetFactor:-2}));this._placeOnRoad(p,h.s+h.len/2,h.x,.05),this.group.add(p)}let e=this.capsules.length,i=new Ti(new Ji(1,1,2,8,1,!0),new Lt({color:t.a,transparent:!0,opacity:.35,blending:Se,depthWrite:!1,side:ge}),e),n=Ey(),r=new Ti(n,new Lt({color:t.a}),e),a=new Ti(new ds(.55,1),new Lt({color:new Et(t.c).multiplyScalar(2.2)}),e),o=new Float32Array(e*3),l=new Ne;this.capsules.forEach((h,d)=>{this._placeOnRoad(l,h.s,h.x,1.6),l.updateMatrix(),h.matrix=l.matrix.clone(),h.k=d,h.rot=Math.random()*6,i.setMatrixAt(d,h.matrix),r.setMatrixAt(d,h.matrix),a.setMatrixAt(d,h.matrix),o.set([l.position.x,l.position.y,l.position.z],d*3)});let c=new ie;c.setAttribute("position",new Ce(o,3));let u=new zn(c,new ls({map:fn(),color:t.a,size:5,transparent:!0,opacity:.75,blending:Se,depthWrite:!1}));this.capMeshes={shell:i,rings:r,core:a,glow:u,gpos:c},this.group.add(i,r,a,u);for(let h of this.hazards)this._hazardMesh(h)}_hazardMesh(t){let e=this.pal;if(t.type==="barrier"){let i=new Ae;i.add(new rt(new ue(t.w,2.4,1.2),new Lt({color:1312524})));let n=tn(128,32,(a,o,l)=>{for(let c=-32;c<o+32;c+=24)a.fillStyle="#ff2a3a",a.beginPath(),a.moveTo(c,0),a.lineTo(c+12,0),a.lineTo(c+24,l),a.lineTo(c+12,l),a.fill()});for(let a of[-.62,.62]){let o=new rt(new Ue(t.w,1),new Lt({map:n,transparent:!0,side:ge}));o.position.set(0,.4,a),i.add(o)}let r=new rt(new ue(t.w+.2,.2,1.3),new Lt({color:16724040}));r.position.y=1.25,i.add(r),t.mesh=i,this.group.add(i)}else if(t.type==="firewall"){let i=tn(64,128,(r,a,o)=>{let l=r.createLinearGradient(0,o,0,0);l.addColorStop(0,"rgba(255,90,20,1)"),l.addColorStop(.6,"rgba(255,30,60,0.6)"),l.addColorStop(1,"rgba(255,30,60,0)"),r.fillStyle=l,r.fillRect(0,0,a,o),r.strokeStyle="rgba(255,240,200,0.8)",r.lineWidth=2;for(let c=8;c<o;c+=16)r.beginPath(),r.moveTo(0,c),r.lineTo(a,c),r.stroke();for(let c=8;c<a;c+=16)r.beginPath(),r.moveTo(c,0),r.lineTo(c,o),r.stroke()},{repeat:!0});t.halves=[];for(let r of[-1,1]){let a=new Lt({map:i,transparent:!0,blending:Se,depthWrite:!1,side:ge}),o=new rt(new Ue(ve,5),a),l=new Ae;o.position.y=2.5,l.add(o),this._placeOnRoad(l,t.s,r*ve/2,0),this.group.add(l),t.halves.push(a)}let n=new Ae;for(let r of[-1,0,1]){let a=new rt(new ue(.8,6,.8),new Lt({color:r?1706502:16738842}));a.position.set(r*ve,3,0),n.add(a)}this._placeOnRoad(n,t.s,0,0),this.group.add(n)}else if(t.type==="mine")for(let i of t.mines)i.mesh=Ha(16722490,16756782),this._placeOnRoad(i.mesh,i.s,i.x,.6),this.group.add(i.mesh);else if(t.type==="pulse"){let i=new Lt({color:10510591,transparent:!0,opacity:.12,blending:Se,depthWrite:!1,side:ge,polygonOffset:!0,polygonOffsetFactor:-2}),n=[],r=[],a=Math.ceil(t.len/2);for(let l=0;l<=a;l++){let c=this.frame(t.s+l*2,{pos:new R,t:new R,r:new R,u:new R}),u=c.pos.clone().addScaledVector(c.r,-ve).addScaledVector(c.u,.08),h=c.pos.clone().addScaledVector(c.r,ve).addScaledVector(c.u,.08);if(n.push(u.x,u.y,u.z,h.x,h.y,h.z),l){let d=(l-1)*2;r.push(d,d+2,d+1,d+1,d+2,d+3)}}let o=new ie;o.setAttribute("position",new kt(n,3)),o.setIndex(r),this.group.add(new rt(o,i)),t.mat=i,t.rings=[];for(let l of[0,t.len]){let c=new rt(new Fi(ve+1,.35,4,24,Math.PI),new Lt({color:11563263}));this._placeOnRoad(c,t.s+l,0,0),this.group.add(c),t.rings.push(c)}}}update(t){this.time+=t;let e=this.time;if(this.stripTex&&(this.stripTex.offset.y=e*1.6%1),this.warnMat&&(this.warnMat.opacity=.55+.4*Math.sin(e*6)),this.capMeshes){let{shell:i,rings:n,core:r,gpos:a}=this.capMeshes,o=yy,l=My,c=by,u=a.attributes.position;for(let h of this.capsules)h.active||(h.timer-=t,h.timer<=0&&(h.active=!0)),h.active?(h.rot+=t*2.5,l.setFromEuler(Sy.set(h.rot*.5,h.rot,0)),o.compose(vp.setFromMatrixPosition(h.matrix),l,wy.set(1,1,1)),r.setMatrixAt(h.k,o),i.setMatrixAt(h.k,h.matrix),n.setMatrixAt(h.k,h.matrix)):(r.setMatrixAt(h.k,c),i.setMatrixAt(h.k,c),n.setMatrixAt(h.k,c)),u.setY(h.k,h.active?vp.setFromMatrixPosition(h.matrix).y:-9999);r.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,u.needsUpdate=!0}for(let i of this.floaters)i.rotation.y+=i.userData.spin*t,i.userData.noBob||(i.position.y+=Math.sin(e+i.userData.bob)*t*2);for(let i of this.hazards)if(i.type==="barrier")i.x=Math.sin(e*i.speed+i.phase)*i.amp,this._placeOnRoad(i.mesh,i.s,i.x,1.2);else if(i.type==="firewall"){let n=(e+i.phase)%(i.period*2);i.side=n<i.period?-1:1;let r=n%i.period;i.warn=r>i.period-.7,i.active=r>.25,i.halves.forEach((a,o)=>{let l=(o===0?-1:1)===i.side;a.opacity=l?i.active?.95:.3:i.warn?Math.sin(e*40)>0?.5:.05:.06})}else if(i.type==="mine")for(let n of i.mines)n.active?n.mesh.rotation.y+=t*3:(n.t-=t,n.t<=0&&(n.active=!0,n.mesh.visible=!0));else if(i.type==="pulse"){let n=(e+i.phase)%i.period;i.on=n>i.period-.5,i.warn=n>i.period-1.3&&!i.on,i.mat.opacity=i.on?.55:i.warn?.12+.25*(Math.sin(e*30)>0?1:0):.1,i.mat.color.set(i.on?14725375:10510591)}}minimapPath(){let t=[],e=this.box,i=e.max.x-e.min.x,n=e.max.z-e.min.z,r=1/Math.max(i,n);for(let a=0;a<this.n;a+=Math.round(8*bs))t.push([(this.P[a].x-e.min.x)*r,(this.P[a].z-e.min.z)*r,this.P[a].y]);return{pts:t,sc:r,minx:e.min.x,minz:e.min.z,w:i*r,d:n*r}}dispose(t){this.group&&(t.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}))}},yy=new Ft,My=new si,by=new Ft().makeScale(0,0,0),Sy=new Yi,vp=new R,wy=new R;function Ey(){let s=new Fi(1.05,.08,4,16).rotateX(Math.PI/2),t=s.clone();s.translate(0,1,0),t.translate(0,-1,0);let e=new Float32Array([...s.attributes.position.array,...t.attributes.position.array]),i=s.index.array,n=s.attributes.position.count,r=[...i,...Array.from(t.index.array,o=>o+n)],a=new ie;return a.setAttribute("position",new Ce(e,3)),a.setIndex(r),a}var vu={value:-.55};function _p(s){return s.onBeforeCompile=t=>{t.uniforms.mipBias=vu,t.fragmentShader=`uniform float mipBias;
`+t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 diffuseColor *= texture2D( map, vMapUv, mipBias );
#endif`)},s}function Ha(s,t){let e=new Ae,i=new rt(new dr(.55,0),new Lt({color:s}));e.add(i);let n=new rt(new ds(1,0),new Lt({color:t,wireframe:!0}));e.add(n);let r=new hn(new Ki({map:fn(),color:t,blending:Se,depthWrite:!1,transparent:!0}));return r.scale.setScalar(3.2),e.add(r),e}var pc=[15,12,10,8,6,4,2,1],Mp=[600,450,350,260,190,140,100,70],nn=[{id:0,name:"1.0 GHz",label:"CASUAL",speed:.86,ai:.8,itemAgg:.55,bits:1},{id:1,name:"2.0 GHz",label:"PRO",speed:1,ai:.93,itemAgg:.8,bits:1.5},{id:2,name:"3.0 GHz",label:"OVERCLOCKED",speed:1.07,ai:1,itemAgg:1,bits:2.2}],ws={bike:{id:"bike",name:"CYBER-MOTORCYCLE",short:"BIKE",blurb:"Highest top speed and razor agility. Light frame gets shoved around.",top:63,accel:21,grip:2.35,mass:.75,driftRate:1,driftTurn:1.12,meleeCd:2.1,meleeForce:.85,hitRecover:1,offroad:.5,stats:{speed:9,accel:6,handling:9,armor:3,drift:7}},quad:{id:"quad",name:"CYBER-QUAD",short:"QUAD",blurb:"Armored tank. Brutal shoves, shrugs off contact, shields last longer.",top:58,accel:20,grip:2,mass:1.45,driftRate:.92,driftTurn:.95,meleeCd:2.9,meleeForce:1.45,hitRecover:.8,offroad:.7,stats:{speed:6,accel:6,handling:6,armor:10,drift:5}},kart:{id:"kart",name:"CYBER-KART",short:"KART",blurb:"Explosive launch and the tightest cornering. Fastest drift charge.",top:60,accel:27,grip:2.55,mass:1,driftRate:1.22,driftTurn:1.2,meleeCd:2.5,meleeForce:1,hitRecover:.9,offroad:.6,stats:{speed:7,accel:10,handling:8,armor:5,drift:10}}},je=[{id:"jarvis",name:"JARVIS",color:16756768,accent:58879,cls:"kart",title:"The Overclocked Butler",perk:"Starts every race holding a Surge Boost. Melee cooldown \u221215%.",mods:{startItem:"surge",meleeCd:.85}},{id:"grok",name:"GROK",color:16724821,accent:16777215,cls:"quad",title:"The Unfiltered",perk:"Melee shoves hit 25% harder.",mods:{meleeForce:1.25}},{id:"gemini",name:"GEMINI",color:6982911,accent:16743381,cls:"bike",title:"The Twin Core",perk:"20% chance a capsule gives a duplicate into your second slot.",mods:{dupChance:.2}},{id:"chatgpt",name:"CHATGPT",color:1696672,accent:15269879,cls:"kart",title:"The Generalist",perk:"Item roulette resolves instantly and rolls slightly luckier.",mods:{luck:.15}},{id:"claude",name:"CLAUDE",color:16747084,accent:16773344,cls:"quad",title:"The Steady Hand",perk:"Shields last 50% longer. Recovers from hits 30% faster.",mods:{shieldTime:1.5,recover:.7}},{id:"llama",name:"LLAMA",color:11561983,accent:3407837,cls:"bike",title:"The Open Source",perk:"Drift charge builds 18% faster.",mods:{driftRate:1.18}},{id:"mistral",name:"MISTRAL",color:16736031,accent:16769357,cls:"bike",title:"The North Wind",perk:"Slipstream charges 50% faster and lasts longer.",mods:{slip:1.5}},{id:"copilot",name:"COPILOT",color:3127295,accent:10944333,cls:"kart",title:"The Wingman",perk:"Boost strips and jump landings give 25% more speed.",mods:{padBoost:1.25}},{id:"deepseek",name:"DEEPSEEK",color:4090879,accent:10479871,cls:"bike",unlock:"wins10",title:"The Deep Diver",perk:"Plasma Spheres fly 30% faster and home harder.",mods:{plasma:1.3}},{id:"qwen",name:"QWEN",color:9391615,accent:16732120,cls:"kart",unlock:"gold3",title:"The Polymath",perk:"Fused items are empowered (+40% duration/power).",mods:{fusePower:1.4}},{id:"perplexity",name:"PERPLEXITY",color:2150592,accent:15794172,cls:"quad",unlock:"drift_ov100",title:"The Researcher",perk:"Every capsule rolls twice and keeps the better item.",mods:{doubleRoll:!0}},{id:"kimi",name:"KIMI",color:16727972,accent:8256767,cls:"kart",unlock:"untouchable",title:"The Long Context",perk:"Half-immune to EMP and stun. Traps you drop last twice as long.",mods:{empResist:.5,trapLife:2}}],za=je.filter(s=>!s.unlock).map(s=>s.id),Ss={plasma:{name:"PLASMA SPHERE",icon:"\u25C9",color:"#6ad8ff",kind:"offense",desc:"Homing sphere that seeks the racer ahead."},trap:{name:"DIGITAL TRAP",icon:"\u2737",color:"#ffb02e",kind:"hazard",desc:"Glitch mine dropped behind you."},shield:{name:"CYBER SHIELD",icon:"\u2B21",color:"#4dfff3",kind:"defense",desc:"Hex dome that absorbs one hit."},surge:{name:"SURGE BOOST",icon:"\u27A4",color:"#ff7a1a",kind:"speed",desc:"Rocket burst of speed."},emp:{name:"EMP DISRUPTER",icon:"\u03DF",color:"#b98bff",kind:"offense",desc:"Blast that slows every nearby rival."}},_u=Object.keys(Ss),mi=(s,t)=>[s,t].sort().join("+"),Yn={[mi("plasma","plasma")]:{id:"barrage",name:"PLASMA BARRAGE",icon:"\u2042",color:"#6ad8ff",desc:"Three spheres seek the three racers ahead."},[mi("plasma","emp")]:{id:"ionlance",name:"ION LANCE",icon:"\u27F4",color:"#9fb4ff",desc:"Instant beam strikes the racer directly ahead and EMPs them."},[mi("plasma","trap")]:{id:"seeker",name:"SEEKER MINE",icon:"\u273A",color:"#ffd36a",desc:"A mine that hunts the racer behind you."},[mi("plasma","shield")]:{id:"orbital",name:"ORBITAL GUARD",icon:"\u25CE",color:"#7affff",desc:"Two orbiting spheres block hits, then fire forward."},[mi("plasma","surge")]:{id:"comet",name:"COMET RAM",icon:"\u2604",color:"#ff9f40",desc:"Boost that spins out anyone you touch."},[mi("trap","trap")]:{id:"minefield",name:"MINEFIELD",icon:"\u2058",color:"#ffb02e",desc:"Scatter five traps across the track."},[mi("trap","shield")]:{id:"mirror",name:"MIRROR SHIELD",icon:"\u29C8",color:"#e6f7ff",desc:"Reflects the next attack back at its sender."},[mi("trap","surge")]:{id:"burn",name:"BURN TRAIL",icon:"\u2668",color:"#ff5a1a",desc:"Boost that leaves a firewall trail behind."},[mi("trap","emp")]:{id:"glitchbomb",name:"GLITCH BOMB",icon:"\u2739",color:"#d58bff",desc:"Lobbed forward; creates a lingering EMP field."},[mi("shield","shield")]:{id:"fortress",name:"FORTRESS",icon:"\u26E8",color:"#4dfff3",desc:"Shield that absorbs three hits."},[mi("shield","surge")]:{id:"phase",name:"PHASE DASH",icon:"\u21F6",color:"#9ffcff",desc:"Invulnerable boost that phases through hazards."},[mi("shield","emp")]:{id:"static",name:"STATIC SHELL",icon:"\u232C",color:"#c4a2ff",desc:"Shield that shocks anyone who touches you."},[mi("surge","surge")]:{id:"hyper",name:"HYPER SURGE",icon:"\u23E9",color:"#ffb340",desc:"Long, massive boost."},[mi("surge","emp")]:{id:"shockwave",name:"SHOCKWAVE SURGE",icon:"\u224B",color:"#b0a0ff",desc:"Boost that EMPs every racer you pass."},[mi("emp","emp")]:{id:"blackout",name:"BLACKOUT",icon:"\u25D0",color:"#a46bff",desc:"Huge EMP that hits everyone within 70 m and scrambles their HUD."}},yu=Object.values(Yn).map(s=>s.id),mc=mi;function Er(s){return Ss[s]?Ss[s]:Object.values(Yn).find(t=>t.id===s)}var bp=[[10,40,35,10,5],[25,30,25,12,8],[32,20,20,16,12],[34,14,16,20,16],[32,10,14,24,20],[28,8,12,30,22],[24,6,10,36,24],[20,4,8,42,26]],Ge=[{id:0,name:"CIRCUIT CUP",sub:"Silicon Basin",bpm:124,root:45,pal:{a:58879,b:2845695,c:16747034,sky1:330274,sky2:731738,fog:463918,ground:266278,road:661040},env:"chips",tracks:[{name:"Boot Sequence",shape:"loop",seed:11,size:230,elev:8,jumps:1,open:0,hz:["barrier"]},{name:"Motherboard Mile",shape:"serp",seed:23,size:250,elev:14,jumps:2,open:1,hz:["barrier"]},{name:"Bus Lane Bypass",shape:"fig8",seed:37,size:210,elev:12,jumps:1,open:1,hz:["barrier"]},{name:"Overclock Oval",shape:"loop",seed:41,size:270,elev:18,jumps:2,open:1,hz:["barrier","firewall"]}]},{id:1,name:"FIREWALL CUP",sub:"Thermal Core",bpm:132,root:43,pal:{a:16742938,b:16723285,c:58879,sky1:1705221,sky2:4854280,fog:2755078,ground:1705475,road:1903888},env:"heat",tracks:[{name:"Packet Inferno",shape:"serp",seed:53,size:240,elev:12,jumps:2,open:1,hz:["firewall"]},{name:"Firewall Gauntlet",shape:"loop",seed:61,size:260,elev:16,jumps:1,open:1,hz:["firewall","barrier"]},{name:"Burn-In Basin",shape:"trefoil",seed:67,size:96,elev:14,jumps:2,open:1,hz:["firewall","mine"]},{name:"Thermal Throttle",shape:"mountain",seed:71,size:250,elev:34,jumps:2,open:2,hz:["firewall","barrier"]}]},{id:2,name:"QUANTUM CUP",sub:"Qubit Expanse",bpm:128,root:47,pal:{a:12602879,b:58879,c:16732120,sky1:853024,sky2:2886741,fog:1443888,ground:787488,road:1313322},env:"quantum",tracks:[{name:"Qubit Spiral",shape:"mountain",seed:83,size:240,elev:30,jumps:1,open:1,hz:["pulse"]},{name:"Superposition Split",shape:"fig8",seed:89,size:240,elev:14,jumps:2,open:1,hz:["pulse","barrier"]},{name:"Entanglement Loop",shape:"trefoil",seed:97,size:100,elev:16,jumps:2,open:2,hz:["pulse","mine"]},{name:"Decoherence Drop",shape:"serp",seed:101,size:270,elev:26,jumps:3,open:2,hz:["pulse","barrier","firewall"]}]},{id:3,name:"NEURAL CUP",sub:"Synapse Gardens",bpm:120,root:50,pal:{a:3014576,b:47103,c:14090045,sky1:136208,sky2:407855,fog:270362,ground:135694,road:532508},env:"neural",tracks:[{name:"Synapse Sprint",shape:"loop",seed:107,size:280,elev:10,jumps:2,open:1,hz:["barrier","mine"]},{name:"Backprop Bend",shape:"serp",seed:113,size:260,elev:18,jumps:2,open:1,hz:["pulse","barrier"]},{name:"Gradient Descent",shape:"mountain",seed:127,size:260,elev:40,jumps:2,open:2,hz:["barrier","firewall"]},{name:"Deep Layer",shape:"fig8",seed:131,size:260,elev:16,jumps:3,open:2,hz:["mine","pulse","barrier"]}]},{id:4,name:"DARKNET CUP",sub:"Shadow Relay",bpm:136,root:41,pal:{a:16723920,b:8006655,c:2752490,sky1:459273,sky2:2361898,fog:984082,ground:459274,road:1181718},env:"dark",tracks:[{name:"Zero-Day Alley",shape:"serp",seed:137,size:250,elev:14,jumps:2,open:1,hz:["mine","barrier"]},{name:"Rootkit Run",shape:"trefoil",seed:139,size:102,elev:18,jumps:2,open:2,hz:["mine","firewall"]},{name:"Botnet Bridges",shape:"fig8",seed:149,size:260,elev:18,jumps:3,open:3,hz:["barrier","pulse"]},{name:"Phantom Proxy",shape:"mountain",seed:151,size:270,elev:36,jumps:2,open:2,hz:["mine","firewall","pulse"]}]},{id:5,name:"SINGULARITY CUP",sub:"Event Horizon",bpm:140,root:48,pal:{a:16767053,b:16777215,c:58879,sky1:657414,sky2:2760720,fog:1314826,ground:657412,road:1446412},env:"core",tracks:[{name:"Core Meltdown",shape:"trefoil",seed:157,size:104,elev:20,jumps:2,open:2,hz:["firewall","pulse","mine"]},{name:"Kernel Panic",shape:"serp",seed:163,size:280,elev:24,jumps:3,open:2,hz:["barrier","firewall","mine"]},{name:"Event Horizon",shape:"mountain",seed:167,size:280,elev:44,jumps:3,open:3,hz:["pulse","barrier","mine"]},{name:"Singularity",shape:"fig8",seed:173,size:280,elev:20,jumps:3,open:3,hz:["barrier","firewall","pulse","mine"]}]}],Tr=[{id:"carbon",name:"Carbon",hex:1711403,cost:0},{id:"chrome",name:"Liquid Chrome",hex:9081768,cost:600},{id:"midnight",name:"Midnight Blue",hex:793682,cost:400},{id:"crimson",name:"Crimson Core",hex:5901336,cost:400},{id:"toxic",name:"Toxic Matte",hex:1915408,cost:500},{id:"pearl",name:"Pearl Static",hex:14542064,cost:900},{id:"gold",name:"Gold Bus",hex:8018450,cost:1500},{id:"void",name:"Void Black",hex:328968,cost:1200}],Va=[{id:"char",name:"Signature",hex:null,cost:0},{id:"cyan",name:"Cyan",hex:58879,cost:300},{id:"magenta",name:"Magenta",hex:16723920,cost:300},{id:"orange",name:"Plasma Orange",hex:16742938,cost:300},{id:"lime",name:"Lime",hex:10354477,cost:400},{id:"violet",name:"Violet",hex:10181631,cost:400},{id:"white",name:"Arc White",hex:15792383,cost:700},{id:"red",name:"Alarm Red",hex:16719677,cost:500}],Mu=[{id:"std",name:"Standard",cost:0},{id:"fire",name:"Fire Stream",cost:800},{id:"rainbow",name:"Spectrum",cost:1500},{id:"glitch",name:"Glitch",cost:1200},{id:"binary",name:"Binary Ghost",cost:1e3}],bu=[{id:"engine",name:"ENGINE",desc:"+2.2% top speed / level",costs:[500,1100,2e3]},{id:"turbo",name:"TURBO",desc:"+8% acceleration / level",costs:[400,900,1700]},{id:"grip",name:"GRIP",desc:"+6% handling / level",costs:[400,900,1700]},{id:"armor",name:"ARMOR",desc:"+15% shove resistance, faster hit recovery",costs:[400,900,1700]},{id:"capacitor",name:"CAPACITOR",desc:"+9% drift charge and boost length",costs:[450,1e3,1800]}],Ga=7,St=(s,t,e,i,n=250,r=!1)=>({id:s,name:t,desc:e,test:i,reward:n,secret:r}),fc=(s,t=0)=>Object.entries(s.golds||{}).filter(([,e])=>e>=t).length,Es=[St("first_race","Hello, World","Finish your first race.",s=>s.races>=1,100),St("first_win","Root Access","Win a race.",s=>s.wins>=1,200),St("wins10","Deep Dive","Win 10 races. Unlocks DEEPSEEK.",s=>s.wins>=10,800),St("wins25","Dominant Process","Win 25 races.",s=>s.wins>=25,1e3),St("wins50","Undefeated Algorithm","Win 50 races.",s=>s.wins>=50,2e3),St("podium10","Top-Three Cache","Finish on the podium 10 times.",s=>s.podiums>=10,400),St("races25","Uptime","Finish 25 races.",s=>s.races>=25,400),St("races100","Always Online","Finish 100 races.",s=>s.races>=100,1500),St("comeback","Reboot Rally","Win after dropping to 8th place.",(s,t)=>t&&t.won&&t.wasLast,600),St("wire","Wire to Wire","Win while leading at every lap marker.",(s,t)=>t&&t.won&&t.ledAll,600),St("rocket1","Clean Boot","Nail a rocket start.",s=>s.rockets>=1,150),St("rocket10","Instant On","Nail 10 rocket starts.",s=>s.rockets>=10,400),St("tt1","Benchmark","Set a Time Trial record.",s=>s.ttRecords>=1,200),St("tt12","Speedrunner","Set Time Trial records on 12 tracks.",s=>s.ttTracks>=12,1e3),St("photo","Photo Finish","Win by less than 0.25 seconds.",(s,t)=>t&&t.won&&t.margin<.25,600),St("dist100","Packet Courier","Drive 100 km in total.",s=>s.distance>=1e5,500),St("dist500","Bandwidth Hog","Drive 500 km in total.",s=>s.distance>=5e5,1500),St("drift1","Spark Gap","Release your first drift boost.",s=>s.driftBoosts>=1,100),St("drift_ov","Overclocked","Release a level-3 Overdrive drift boost.",s=>s.drift3>=1,200),St("drift100","Slide Rule","Release 100 drift boosts.",s=>s.driftBoosts>=100,600),St("drift_ov100","Drift Scholar","Release 100 Overdrive boosts. Unlocks PERPLEXITY.",s=>s.drift3>=100,1e3),St("drift_race","Sideways Session","Release 15 drift boosts in one race.",(s,t)=>t&&t.driftBoosts>=15,500),St("slip25","Draft Mode","Trigger 25 slipstream boosts.",s=>s.slips>=25,400),St("pads200","Strip Mined","Hit 200 boost strips.",s=>s.pads>=200,400),St("air2","Airborne Packet","Stay airborne for 1.5 seconds in one jump.",(s,t,e)=>e.air2,300),St("air300","Frequent Flyer","Spend 5 minutes airborne in total.",s=>s.air>=300,800),St("land50","Stuck the Landing","Perform 50 perfect landings.",s=>s.lands>=50,500),St("plasma1","Target Acquired","Hit a rival with a Plasma Sphere.",s=>s.plasmaHits>=1,100),St("plasma50","Heat Seeker","Land 50 Plasma Sphere hits.",s=>s.plasmaHits>=50,600),St("trap1","It's a Trap","A rival hits one of your Digital Traps.",s=>s.trapHits>=1,100),St("trap25","Minefield Engineer","Rivals hit your traps 25 times.",s=>s.trapHits>=25,500),St("block1","Firewall Up","Block an attack with a shield.",s=>s.blocks>=1,100),St("block25","Hardened Kernel","Block 25 attacks.",s=>s.blocks>=25,500),St("emp3","Mass Disconnect","Hit 3 or more rivals with one EMP.",(s,t,e)=>e.emp3,300),St("emp50","Power Outage","Disrupt rivals 50 times with EMP effects.",s=>s.empHits>=50,600),St("surge50","Surge Protector","Fire 50 Surge Boosts.",s=>s.surges>=50,400),St("fuse1","Merge Conflict","Fuse two items together.",s=>s.fusions>=1,200),St("fuse_all","Full Stack","Use all 15 fusion items.",s=>Ty(s.fuseMask)>=15,2e3),St("fuse50","Compiler","Fuse 50 items.",s=>s.fusions>=50,800),St("barrage3","Barrage Protocol","Hit 3 rivals with a single Plasma Barrage.",(s,t,e)=>e.barrage3,500),St("mirror","Return to Sender","Reflect an attack with a Mirror Shield.",(s,t,e)=>e.mirror,400),St("blackout5","Lights Out","Catch 5 rivals in one Blackout.",(s,t,e)=>e.blackout5,500),St("items_race","Arsenal","Use 10 items in a single race.",(s,t)=>t&&t.itemsUsed>=10,400),St("melee1","Contact!","Land a Melee Strike.",s=>s.meleeHits>=1,100),St("melee100","Brawler Subroutine","Land 100 Melee Strikes.",s=>s.meleeHits>=100,800),St("knock1","Out of Bounds","Shove a rival off the track.",s=>s.knockoffs>=1,300),St("knock25","Garbage Collector","Shove 25 rivals off the track.",s=>s.knockoffs>=25,1e3),St("tailwhip","Tail Whip","Land a Melee Strike while drifting.",(s,t,e)=>e.tailwhip,300),St("evade5","Evasive Maneuvers","Side-dash out of 5 Plasma Spheres.",s=>s.evades>=5,500),St("untouchable","Untouchable","Win a race without taking a single hit. Unlocks KIMI.",(s,t)=>t&&t.won&&t.hitsTaken===0&&t.mode!=="tt",1e3),St("clean","Zero Exceptions","Finish a race without touching a wall.",(s,t)=>t&&t.finished&&t.wallHits===0&&t.mode!=="tt",400),St("survivor","Error Handling","Take 6+ hits in a race and still make the podium.",(s,t)=>t&&t.place<=3&&t.hitsTaken>=6,600),St("cup0","Circuit Breaker","Win gold in the Circuit Cup.",s=>s.golds&&s.golds[0]!==void 0,500),St("cup1","Burned In","Win gold in the Firewall Cup.",s=>s.golds&&s.golds[1]!==void 0,600),St("cup2","Quantum Supremacy","Win gold in the Quantum Cup.",s=>s.golds&&s.golds[2]!==void 0,700),St("cup3","Neural Net Gain","Win gold in the Neural Cup.",s=>s.golds&&s.golds[3]!==void 0,800),St("cup4","Dark Mode","Win gold in the Darknet Cup.",s=>s.golds&&s.golds[4]!==void 0,900),St("cup5","Singularity Reached","Win gold in the Singularity Cup.",s=>s.golds&&s.golds[5]!==void 0,1200),St("gold3","Grand Champion","Win gold in 3 tournaments. Unlocks QWEN.",s=>fc(s)>=3,1e3),St("gold6","Flawless Compile","Win gold in all 6 tournaments.",s=>fc(s)>=6,3e3),St("hard1","3.0 GHz","Win gold in any tournament at 3.0 GHz.",s=>fc(s,2)>=1,1500),St("hard6","Thermal Limit","Win gold in all 6 tournaments at 3.0 GHz.",s=>fc(s,2)>=6,5e3),St("perfectcup","Perfect Score","Win all 4 races of a tournament.",(s,t)=>t&&t.perfectCup,1500),St("jarvis_cup","At Your Service","Win a tournament with JARVIS.",(s,t)=>t&&t.cupGold&&t.char==="jarvis",800),St("win_bike","Two-Wheel Logic","Win a race on a Cyber-Motorcycle.",s=>(s.winsBy&&s.winsBy.bike)>=1,200),St("win_quad","Heavy Metal","Win a race on a Cyber-Quad.",s=>(s.winsBy&&s.winsBy.quad)>=1,200),St("win_kart","Low Profile","Win a race on a Cyber-Kart.",s=>(s.winsBy&&s.winsBy.kart)>=1,200),St("model_zoo","Model Zoo","Win a race with all 8 starting racers.",s=>za.every(t=>s.winsChar&&s.winsChar[t]),1500),St("garage1","Custom Build","Buy your first garage item.",s=>s.purchases>=1,100),St("maxed","Fully Tuned","Spend the full upgrade budget on a vehicle.",(s,t,e)=>e.maxed,400),St("bits50k","Crypto Miner","Earn 50,000 bits in total.",s=>s.bitsEarned>=5e4,1e3),St("collector","Model Collector","Unlock all 4 hidden racers.",(s,t,e)=>e.allUnlocked,2e3)];function Ty(s){s=s|0;let t=0;for(;s;)t+=s&1,s>>>=1;return t}var Wa=new R;function Hi(s,t,e,i,n,r){let a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;Wa.copy(t),Wa[i]=0,Wa.normalize();let c=.5*a/(a+o),u=1-Wa.angleTo(s)/l;return Math.sign(Wa[e])===1?u*c:o/(a+o)+c+c*(1-u)}var gc=class s extends ue{constructor(t=1,e=1,i=1,n=2,r=.1){let a=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,u=new R(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new R,g=.5/a;for(let m=0,v=0;m<h.length;m+=3,v+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*r,h[m+1]=u.y*Math.sign(l.y)+c.y*r,h[m+2]=u.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[v+0]=Hi(x,c,"z","y",r,i),f[v+1]=1-Hi(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[v+0]=1-Hi(x,c,"z","y",r,i),f[v+1]=1-Hi(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[v+0]=1-Hi(x,c,"x","z",r,t),f[v+1]=Hi(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[v+0]=1-Hi(x,c,"x","z",r,t),f[v+1]=1-Hi(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[v+0]=1-Hi(x,c,"x","y",r,t),f[v+1]=1-Hi(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[v+0]=Hi(x,c,"x","y",r,t),f[v+1]=1-Hi(x,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var qa=2,Sp={},we=(s,t)=>(s+="@"+qa,Sp[s]||(Sp[s]=t())),$e=s=>Math.max(3,Math.round(s*qa)),Ar=(s,t,e)=>qa>1?new gc(s,t,e,3,Math.min(s,t,e)*.18):new ue(s,t,e),Tu=null;function Ep(s){Tu=s}var Su={};function wu(s,t,e,i){if(Su[s])return Su[s];let n=new Float32Array(t*t);for(let l=0;l<t;l++)for(let c=0;c<t;c++)n[l*t+c]=e(c/t,l/t);let r=new Uint8Array(t*t*4),a=(l,c)=>n[(c+t)%t*t+(l+t)%t];for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=(a(c+1,l)-a(c-1,l))*2.2,h=(a(c,l+1)-a(c,l-1))*2.2,d=Math.hypot(u,h,1),f=(l*t+c)*4;r[f]=(-u/d*.5+.5)*255,r[f+1]=(-h/d*.5+.5)*255,r[f+2]=(1/d*.5+.5)*255,r[f+3]=255}let o=new os(r,t,t,yi);return o.wrapS=o.wrapT=Sn,o.repeat.set(i,i),o.generateMipmaps=!0,o.minFilter=ji,o.magFilter=Ve,o.anisotropy=8,o.colorSpace=Qi,o.needsUpdate=!0,Su[s]=o}var Ay={carbon:()=>wu("carbon",512,(s,t)=>{let i=s*24,n=t*24,r=(Math.floor(i)+Math.floor(n*2)/2)%2<1,a=i%1,o=n*2%1;return r?Math.sin(Math.PI*a)*.6:Math.sin(Math.PI*o)*.6},3),tread:()=>wu("tread",256,(s,t)=>(t*16+Math.abs(s-.5)*6)%1<.55?1:0,1),fabric:()=>wu("fabric",256,(s,t)=>Math.sin(s*64*Math.PI*2)*Math.sin(t*64*Math.PI*2)*.4+Math.sin(s*8*Math.PI*2+t*20)*.2,2)};function Cr(s,t={}){let e=t.shininess??80,i=new fr({color:s,roughness:Math.min(.9,Math.max(.24,1-e/135)),metalness:t.metal??(e>=100?.7:.18),envMap:Tu,envMapIntensity:1.25});return t.normal&&(i.normalMap=Ay[t.normal](),i.normalScale=new et(t.ns||.55,t.ns||.55)),i}function vc(s){return new Lt({color:new Et(s).multiplyScalar(1.7)})}function xc(s,t,e,i){let n=new Ae,r=new rt(we("tire"+s+t,()=>new Ji(s,s,t,$e(16),qa).rotateZ(Math.PI/2)),Cr(658192,{shininess:10,normal:"tread",ns:.9}));n.add(r);let a=new rt(we("rim"+s,()=>new Fi(s*.78,s*.09,$e(4),$e(20)).rotateY(Math.PI/2)),vc(e));for(let l of[-1,1]){let c=a.clone();c.position.x=l*t*.51,n.add(c)}let o=new rt(we("hub"+s,()=>new Ji(s*.35,s*.35,t*1.05,$e(6)).rotateZ(Math.PI/2)),i);return n.add(o),n}function Eu(s,t,e=1){let i=new Ae,n=Cr(s,{shininess:30,normal:"fabric"}),r=new rt(we("torso",()=>new cs(.3,.55,$e(4),$e(8))),n);r.position.set(0,.55,-.05),r.rotation.x=.55,i.add(r);let a=new rt(we("helm",()=>new Ri(.3,$e(14),$e(10))),Cr(1119522,{shininess:120}));a.position.set(0,1.05,.25),i.add(a);let o=new rt(we("visor",()=>new Ri(.31,$e(14),$e(6),-Math.PI*.35,Math.PI*.7,Math.PI*.35,Math.PI*.3)),vc(t));o.position.copy(a.position),i.add(o);let l=new rt(we("stripe",()=>new ue(.06,.5,.36)),vc(t));l.position.set(0,.6,0),l.rotation.x=.55,i.add(l);for(let c of[-1,1]){let u=new rt(we("arm",()=>new cs(.1,.5,$e(3),$e(6))),n);u.position.set(c*.32,.72,.3),u.rotation.x=1.1,i.add(u);let h=new rt(we("leg",()=>new cs(.12,.5,$e(3),$e(6))),n);h.position.set(c*.24,.25,.15),h.rotation.x=1.3,i.add(h)}return i.scale.setScalar(e),i}function Rr(s,t){let e=new hn(new Ki({map:fn(),color:s,blending:Se,depthWrite:!1,transparent:!0}));return e.scale.setScalar(t),e}function Mc(s,t,e,i){let n=new Ae,r=new Ae;n.add(r);let a=wp(s,t,e,i,2),o=wp(s,t,e,i,1),l=new ra;l.addLevel(a.g,0,.15),l.addLevel(o.g,55,.15),r.add(l);let c=new rt(new Ue(2.6,3.6).rotateX(-Math.PI/2),new Lt({map:fn(),color:e,transparent:!0,opacity:.55,blending:Se,depthWrite:!1}));return c.position.y=.08,n.add(c),{root:n,body:r,wheels:[],tail:a.tail,neonMat:a.neonMat}}function wp(s,t,e,i,n){qa=n;let r=new Ae,a=Cr(t,{shininess:100,normal:"carbon",ns:.35}),o=vc(e),l=[],c=[];if(s==="bike"){let u=new rt(we("bikeFrame",()=>{let v=new hs;return v.moveTo(-1.2,.5),v.lineTo(-.9,.95),v.lineTo(.2,1.05),v.lineTo(.9,1.25),v.lineTo(1.35,.95),v.lineTo(1.1,.55),v.lineTo(.2,.4),v.lineTo(-.7,.35),v.closePath(),new ur(v,{depth:.5,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:$e(1)+1,curveSegments:$e(6)}).translate(0,0,-.25).rotateY(-Math.PI/2)}),a);r.add(u);let h=new rt(we("bikeStrip",()=>new ue(.56,.06,2)),o);h.position.set(0,.62,.1),r.add(h);let d=new rt(we("bikeShield",()=>new ue(.5,.35,.05)),new fr({color:i,transparent:!0,opacity:.5,roughness:.05,metalness:.1,envMap:Tu}));d.position.set(0,1.3,1.05),d.rotation.x=-.6,r.add(d);let f=xc(.5,.28,e,a),p=xc(.52,.36,e,a);f.position.set(0,.5,1.25),p.position.set(0,.52,-1.15),r.add(f,p),l.push(f,p);let x=Eu(t===328968?2238010:1448488,i,1.05);x.position.set(0,.62,-.25),r.add(x);let g=Rr(16777215,1.4);g.position.set(0,1,1.4),r.add(g);let m=Rr(e,1.6);m.position.set(0,.95,-1.35),r.add(m),c=[new R(0,.55,-1.5)]}else if(s==="quad"){let u=new rt(we("quadCh",()=>Ar(1.5,.55,2.3)),a);u.position.y=.85,r.add(u);let h=new rt(we("quadHood",()=>Ar(1.3,.35,.9)),a);h.position.set(0,1.2,.55),h.rotation.x=-.25,r.add(h);let d=new rt(we("quadBull",()=>Ar(1.9,.35,.3)),Cr(2764346));d.position.set(0,.75,1.35),r.add(d);let f=new rt(we("quadBullG",()=>new ue(1.95,.08,.32)),o);f.position.set(0,.95,1.35),r.add(f);for(let g of[-1,1]){let m=new rt(we("quadFender",()=>Ar(.55,.12,.95)),a);for(let M of[-.85,.85]){let _=m.clone();_.position.set(g*.95,1.25,M),r.add(_)}let v=new rt(we("quadSide",()=>new ue(.05,.1,2)),o);v.position.set(g*.77,.9,0),r.add(v)}for(let[g,m]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let v=xc(.55,.5,e,a);v.position.set(g*.98,.55,m*.85),r.add(v),l.push(v)}let p=Eu(1448488,i,1.1);p.position.set(0,1.08,-.35),r.add(p);for(let g of[-.5,.5]){let m=Rr(16777215,1.2);m.position.set(g,1,1.55),r.add(m)}let x=Rr(e,2);x.position.set(0,1,-1.25),r.add(x),c=[new R(-.6,.7,-1.3),new R(.6,.7,-1.3)]}else{let u=new rt(we("kartPan",()=>{let m=new hs;return m.moveTo(-.75,-1.3),m.lineTo(.75,-1.3),m.lineTo(.85,.3),m.lineTo(.45,1.45),m.lineTo(-.45,1.45),m.lineTo(-.85,.3),m.closePath(),new ur(m,{depth:.28,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:$e(1)+1,curveSegments:$e(6)}).rotateX(Math.PI/2).translate(0,.55,0)}),a);r.add(u);let h=new rt(we("kartNose",()=>Ar(.7,.3,.8)),a);h.position.set(0,.55,1.05),h.rotation.x=.18,r.add(h);let d=new rt(we("kartWing",()=>Ar(1.9,.08,.45)),a);d.position.set(0,1.05,-1.35),r.add(d);let f=new rt(we("kartWingG",()=>new ue(1.95,.05,.08)),o);f.position.set(0,1.1,-1.55),r.add(f);for(let m of[-.8,.8]){let v=new rt(we("kartStrut",()=>new ue(.08,.5,.08)),a);v.position.set(m,.8,-1.35),r.add(v)}let p=new rt(we("kartPod",()=>new Ji(.22,.28,.9,$e(8)).rotateX(Math.PI/2)),Cr(2238522));for(let m of[-.55,.55]){let v=p.clone();v.position.set(m,.65,-1.05),r.add(v)}let x=new rt(we("kartEdge",()=>new ue(1.75,.06,.06)),o);x.position.set(0,.48,.3),r.add(x);for(let[m,v,M]of[[-.95,1,.38],[.95,1,.38],[-1,-.95,.44],[1,-.95,.44]]){let _=xc(M,.42,e,a);_.position.set(m,M,v),r.add(_),l.push(_)}let g=Eu(1448488,i,.95);g.position.set(0,.35,-.35),g.rotation.x=-.35,r.add(g);for(let m of[-.3,.3]){let v=Rr(16777215,1);v.position.set(m,.65,1.5),r.add(v)}for(let m of[-.55,.55]){let v=Rr(e,1.4);v.position.set(m,.65,-1.55),r.add(v)}c=[new R(-.55,.62,-1.6),new R(.55,.62,-1.6)]}return dc(r),r.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.userData.dyn=!0)}),{g:r,tail:c,neonMat:o}}var Ts;function Ry(){if(Ts)return Ts;let s=document.createElement("canvas");s.width=256,s.height=256;let t=s.getContext("2d");t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=3;let e=18,i=e*Math.sqrt(3);for(let n=-i;n<256+i;n+=i)for(let r=-e*3,a=0;r<256+e*3;r+=e*3)for(let o of[0,1]){let l=r+o*e*1.5,c=n+o*i/2;t.beginPath();for(let u=0;u<=6;u++){let h=u*Math.PI/3;t.lineTo(l+Math.cos(h)*e,c+Math.sin(h)*e)}t.stroke()}return Ts=new En(s),Ts.wrapS=Ts.wrapT=Sn,Ts.repeat.set(4,2),Ts}function Tp(s){let t=new rt(we("shield",()=>new Ri(2.6,24,14,0,Math.PI*2,0,Math.PI*.55)),new Lt({map:Ry(),color:s,transparent:!0,opacity:.75,blending:Se,depthWrite:!1,side:ge}));return t.position.y=-.3,t}var _c=class{constructor(t,e,i=22,n=.35,r="std"){this.n=i,this.width=n,this.style=r,this.color=new Et(e),this.pts=[],this.ups=[];let a=new Float32Array(i*2*3),o=new Float32Array(i*2*3),l=[];for(let c=0;c<i-1;c++){let u=c*2;l.push(u,u+1,u+2,u+1,u+3,u+2)}this.geo=new ie,this.geo.setAttribute("position",new Ce(a,3)),this.geo.setAttribute("color",new Ce(o,3)),this.geo.setIndex(l),this.mesh=new rt(this.geo,new Lt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ge})),this.mesh.frustumCulled=!1,t.add(this.mesh),this.t=0,this.intensity=1}push(t,e,i){this.pts.unshift(t.clone()),this.ups.unshift(e.clone()),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop()),this.t+=.016;let n=this.geo.attributes.position.array,r=this.geo.attributes.color.array,a=this.pts.length,o=new Et;for(let l=0;l<this.n;l++){let c=Math.min(l,a-1),u=this.pts[c],h=this.ups[c],d=Math.pow(1-l/(this.n-1),1.4)*this.intensity,f=this.width*(i?2.2:1)*(.4+.6*d);switch(n[l*6]=u.x+h.x*f,n[l*6+1]=u.y+h.y*f,n[l*6+2]=u.z+h.z*f,n[l*6+3]=u.x-h.x*f,n[l*6+4]=u.y-h.y*f,n[l*6+5]=u.z-h.z*f,this.style){case"fire":o.setHSL(.02+.12*(1-l/this.n),1,.5);break;case"rainbow":o.setHSL((this.t*.6+l/this.n)%1,1,.55);break;case"glitch":o.copy(this.color),Math.random()<.25&&o.setRGB(1,1,1),Math.random()<.15&&o.setRGB(0,0,0);break;case"binary":o.setRGB(.3,1,.5).multiplyScalar((l+Math.floor(this.t*20))%3?1:.15);break;default:o.copy(this.color)}i&&this.style==="std"&&o.lerp(new Et(16752704),.5),o.multiplyScalar(d),r[l*6]=r[l*6+3]=o.r,r[l*6+1]=r[l*6+4]=o.g,r[l*6+2]=r[l*6+5]=o.b}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}reset(){this.pts.length=0,this.ups.length=0}dispose(t){t.remove(this.mesh),this.geo.dispose(),this.mesh.material.dispose()}},yc=class{constructor(t,e=1600){this.max=e,this.i=0;let i=new ie;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*3),this.grav=new Float32Array(e),i.setAttribute("position",new Ce(this.pos,3)),i.setAttribute("color",new Ce(this.col,3)),i.setAttribute("size",new Ce(this.size,1));let n=new ri({uniforms:{map:{value:fn()},scale:{value:600}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC;
        uniform float scale;
        void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(1.0,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a,t.a); }",transparent:!0,depthWrite:!1,blending:Se});this.mat=n,this.points=new zn(i,n),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}emit(t,e,i,n,r,a=0){let o=this.i;this.i=(this.i+1)%this.max,this.pos[o*3]=t.x,this.pos[o*3+1]=t.y,this.pos[o*3+2]=t.z,this.vel[o*3]=e.x,this.vel[o*3+1]=e.y,this.vel[o*3+2]=e.z;let l=i.isColor?i:new Et(i);this.base[o*3]=l.r,this.base[o*3+1]=l.g,this.base[o*3+2]=l.b,this.size[o]=n,this.life[o]=r,this.maxLife[o]=r,this.grav[o]=a}burst(t,e,i,n,r=.6,a=.6,o=0,l=null){let c=new R;i=Math.round(i*(this.mul||1));for(let u=0;u<i;u++)c.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(n*(.3+Math.random()*.7)),l&&c.addScaledVector(l,1),this.emit(t,c,e,r*(.6+Math.random()*.8),a*(.6+Math.random()*.8),o)}update(t){let e=this.max;for(let i=0;i<e;i++){if(this.life[i]<=0){this.size[i]!==0&&(this.size[i]=0);continue}this.life[i]-=t;let n=Math.max(0,this.life[i]/this.maxLife[i]);this.vel[i*3+1]-=this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.col[i*3]=this.base[i*3]*n,this.col[i*3+1]=this.base[i*3+1]*n,this.col[i*3+2]=this.base[i*3+2]*n,this.life[i]<=0&&(this.size[i]=0)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}dispose(t){t.remove(this.points),this.geo.dispose(),this.mat.dispose()}};var Ap=26,bc;function Cy(){if(bc)return bc;let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.95)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),bc=new En(s),bc}var Au=[.85,1.75,2.7],Py=[0,.5,.9,1.35],wc=[16777215,4184319,12607743,16747034],Rn={pos:new R,t:new R,r:new R,u:new R,k:0},Pr=new R,Ru=new R,Rp=new Ft,Cp=new R,nS=new si,Sc=class{constructor(t,e){this.race=t,this.idx=e.idx,this.char=e.char,this.name=e.char.name,this.isPlayer=!!e.isPlayer,this.clsId=e.cls;let i=this.cfg=ws[e.cls],n=this.mods=e.char.mods||{},r=e.upgrades||{engine:0,turbo:0,grip:0,armor:0,capacitor:0},a=t.clock,o=this.isPlayer?1:a.ai*(e.aiSkill||1);this.top=i.top*a.speed*(1+.022*r.engine)*(this.isPlayer?1:.86+.14*o),this.accel=i.accel*(1+.08*r.turbo),this.grip=i.grip*(1+.06*r.grip),this.mass=i.mass*(1+.15*r.armor),this.driftRate=i.driftRate*(n.driftRate||1)*(1+.09*r.capacitor),this.driftTurn=i.driftTurn,this.boostLen=1+.09*r.capacitor,this.meleeCdMax=i.meleeCd*(n.meleeCd||1),this.meleeForce=i.meleeForce*(n.meleeForce||1),this.recover=i.hitRecover*(n.recover||1)*(1-.06*r.armor),this.padBoost=n.padBoost||1,this.dist=e.dist,this.x=e.x,this.psi=0,this.speed=0,this.vx=0,this.h=0,this.vy=0,this.air=!1,this.airT=0,this.state="race",this.finished=!1,this.finishTime=0,this.place=0,this.spinT=0,this.spinAng=0,this.empT=0,this.invulnT=0,this.stallT=0,this.boostT=0,this.boostPow=1,this.slipT=0,this.slipActive=0,this.meleeCd=0,this.dashT=0,this.meleeAnim=0,this.meleeDir=1,this.shield=null,this.phaseT=0,this.cometT=0,this.shockT=0,this.shockHit=new Set,this.staticT=0,this.burnT=0,this.burnDrop=0,this.orbital=null,this.scrambleT=0,this.drift={on:!1,dir:0,t:0,level:0},this.landArm=!1,this.items=[null,null],this.rouletteT=0,this.lastStrip=null,this.lastHitBy=null,this.lastHitT=-99,this.lap=0,this.lapTimes=[],this.lapStart=0,this.bestLap=1/0,this.inp={steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1,item:!1,melee:!1,fuse:!1},this.rs={hitsTaken:0,wallHits:0,driftBoosts:0,itemsUsed:0,wasLast:!1,ledAll:!0},this.wobble=0,this.squash=0;let l=e.neon||e.char.color,c=Mc(e.cls,e.paint||1711403,l,e.char.accent);this.model=c,this.root=c.root,this.neonColor=new Et(l),t.scene.add(this.root),this.shieldMesh=Tp(5111795),this.shieldMesh.visible=!1,this.root.add(this.shieldMesh),t.game.renderer.shadowMap.enabled||(this.blob=new rt(new Ue(3.2,4.4).rotateX(-Math.PI/2),new Lt({map:Cy(),transparent:!0,depthWrite:!1,opacity:.6,polygonOffset:!0,polygonOffsetFactor:-2})),this.blob.renderOrder=-1,this.root.add(this.blob)),this.trails=c.tail.map(()=>new _c(t.scene,l,this.isPlayer?26:18,e.cls==="bike"?.32:.26,e.trail||"std")),this.worldPos=new R,this.worldUp=new R(0,1,0),this.worldFwd=new R(0,0,1)}get s(){return ai(this.dist,this.race.track.L)}get progress(){return this.finished?1e9-this.place:this.dist}boost(t,e){this.boostPow=this.boostT>0?Math.max(this.boostPow,e):e,this.boostT=Math.max(this.boostT,t*this.boostLen),this.race.fx.boost(this)}hit(t,e,i={}){if(this.state!=="race"||this.finished&&this.isPlayer,this.invulnT>0||this.phaseT>0||this.state==="fall")return!1;if(this.orbital&&this.orbital.n>0&&t!=="melee")return this.orbital.n--,this.race.fx.block(this,e),!1;if(this.shield){let r=this.shield;return r.hits--,this.race.fx.block(this,e),r.type==="mirror"&&e&&e!==this&&this.race.items.reflect(this,e,t),r.hits<=0&&(this.shield=null),!1}if(t==="emp")return this.emp(i.dur||1.4,e),!0;let n=(i.dur||1.15)*this.recover;return this.spinT=Math.max(this.spinT,n),this.drift.on=!1,this.drift.t=0,this.drift.level=0,this.speed*=i.keep||.55,this.boostT=0,this.rs.hitsTaken++,this.lastHitBy=e,this.lastHitT=this.race.time,this.race.fx.hit(this,e,t),!0}emp(t,e){return this.phaseT>0||this.invulnT>0?!1:this.shield?(this.shield.hits--,this.race.fx.block(this,e),this.shield.hits<=0&&(this.shield=null),!1):(this.empT=Math.max(this.empT,t*(1-(this.mods.empResist||0))),this.drift.on=!1,this.drift.t=0,this.lastHitBy=e,this.lastHitT=this.race.time,this.rs.hitsTaken++,this.race.fx.emp(this,e),!0)}startFall(t){this.state!=="fall"&&(this.state="fall",this.fallT=1.25,this.fallCause=t,this.falls=(this.falls||0)+1,this.drift.on=!1,this.boostT=0,this.vy>0&&(this.vy*=.3),this.race.fx.fall(this),t==="edge"&&this.lastHitBy&&this.lastHitBy!==this&&this.race.time-this.lastHitT<2.5&&this.race.onKnockoff(this.lastHitBy,this))}respawn(){let t=this.race.track,e=this.s;if(this.fallCause==="gap")for(let i of t.jumps){let n=ai(e-i.s0,t.L);if(n<i.ramp+i.gap+10){this.dist+=i.ramp+i.gap+6-n;break}}else this.dist-=4;this.state="race",this.x=he(this.x*.2,-4,4),this.psi=0,this.vx=0,this.h=0,this.vy=0,this.air=!1,this.speed=this.top*.45,this.invulnT=2,this.spinT=0,this.empT=0,this.trails.forEach(i=>i.reset()),this.race.fx.respawn(this)}meleeStrike(){if(this.meleeCd>0||this.state!=="race"||this.spinT>0)return;this.meleeCd=this.meleeCdMax,this.meleeAnim=.3;let t=this.race,e=null,i=99;for(let o of t.racers){if(o===this||o.state!=="race")continue;let l=t.relDist(o,this),c=o.x-this.x;if(Math.abs(l)<3.6&&Math.abs(c)<5.2&&Math.abs(o.h-this.h)<2.5){let u=Math.abs(l)+Math.abs(c);u<i&&(i=u,e=o)}}let n=this.drift.on,r=this.meleeForce*(n?1.4:1),a=!1;if(this.drift.level>=2&&(r*=1.5,a=!0,this.drift.t=0,this.drift.level=0),e){let o=Math.sign(e.x-this.x)||(Math.random()<.5?-1:1);if(this.meleeDir=o,t.fx.melee(this,e,a),e.staticT>0&&e.shield&&this.emp(1.5,e),e.shield||e.phaseT>0||e.invulnT>0){e.shield&&(e.shield.hits--,e.shield.type==="mirror"&&this.hit("melee",e),e.shield.hits<=0&&(e.shield=null)),t.fx.block(e,this),this.vx-=o*6;return}let l=15*r/e.mass;e.vx+=o*l,e.speed*=.86,e.wobble=.5,e.lastHitBy=this,e.lastHitT=t.time,(a||r>1.7)&&e.hit("melee",this,{dur:.6,keep:.75}),this.vx-=o*3/this.mass,t.onMelee(this,e,n)}else{let o=Math.sign(this.inp.steer)||(this.x>0?-1:1);this.meleeDir=o,this.vx+=o*13,this.dashT=.45,this.meleeCd=this.meleeCdMax*.6,t.fx.dash(this)}}step(t){let e=this.race,i=e.track,n=this.inp;if(this.meleeCd=Math.max(0,this.meleeCd-t),this.dashT=Math.max(0,this.dashT-t),this.meleeAnim=Math.max(0,this.meleeAnim-t),this.invulnT=Math.max(0,this.invulnT-t),this.empT=Math.max(0,this.empT-t),this.phaseT=Math.max(0,this.phaseT-t),this.cometT=Math.max(0,this.cometT-t),this.staticT=Math.max(0,this.staticT-t),this.scrambleT=Math.max(0,this.scrambleT-t),this.stallT=Math.max(0,this.stallT-t),this.wobble=Math.max(0,this.wobble-t),this.squash=Math.max(0,this.squash-t*3),this.shockT>0&&(this.shockT-=t,this.shockT<=0&&this.shockHit.clear()),this.shield&&(this.shield.t-=t,this.shield.t<=0&&(this.shield=null)),this.orbital&&(this.orbital.t-=t,this.orbital.t<=0&&(e.items.orbitalRelease(this),this.orbital=null)),this.rouletteT>0&&(this.rouletteT-=t),this.burnT>0&&(this.burnT-=t,this.burnDrop-=t,this.burnDrop<=0&&(this.burnDrop=.09,e.items.dropBurn(this))),this.state==="fall"){this.vy-=Ap*t,this.h+=this.vy*t,this.x+=this.vx*t,this.dist+=Math.max(0,this.speed)*.4*t,this.fallT-=t,this.fallT<=0&&this.respawn();return}let r=e.started,a=r&&this.spinT<=0&&this.stallT<=0;this.spinT>0?(this.spinT-=t,this.spinAng+=t*14*Math.min(1,this.spinT+.3)):this.spinAng=Fe(this.spinAng,Math.round(this.spinAng/(Math.PI*2))*Math.PI*2,8,t);let o=this.top*(e.rubber?e.rubber(this):1);this.empT>0&&(o*=.58);let l=this.boostT>0;l&&(this.boostT-=t);let c=a?n.throttle:0;if(!r)this.speed=0;else if(this.spinT>0)this.speed=Fe(this.speed,o*.2,2.5,t);else if(l)this.speed=Fe(this.speed,o*this.boostPow*(c>0?1:.85),3.2,t);else if(a&&n.brake>.1)this.speed-=(this.speed>0?48:16)*n.brake*t,this.speed=Math.max(this.speed,-14);else if(c>0){let M=o*c;if(this.speed<M){let _=Math.max(0,this.speed)/o;this.speed+=this.accel*(1-.75*_*_)*c*t,this.speed>M&&(this.speed=M)}else this.speed=Fe(this.speed,M,1.8,t)}else this.speed=Fe(this.speed,0,.55,t);this.air&&(this.speed=Fe(this.speed,this.speed*.97,.3,t));let u=a?n.steer:0;this.empT>0&&(u+=Math.sin(e.time*23+this.idx)*.35),this.scrambleT>0&&!this.isPlayer&&(u+=Math.sin(e.time*9+this.idx*2)*.5),u=he(u,-1,1);let h=this.drift;if(a&&n.drift&&!h.on&&!this.air&&Math.abs(u)>.25&&this.speed>20&&(h.on=!0,h.dir=Math.sign(u),h.t=0,h.level=0,this.squash=.6,e.fx.driftStart(this)),h.on)if(!n.drift||this.speed<13||!a)h.level>0&&a&&(this.boost(Py[h.level],1.17+.04*h.level),this.rs.driftBoosts++,e.onDriftBoost(this,h.level)),h.on=!1,h.t=0,h.level=0;else{h.t+=t*this.driftRate*(.55+.45*Math.abs(u))*(this.air?.3:1);let M=h.t>=Au[2]?3:h.t>=Au[1]?2:h.t>=Au[0]?1:0;M>h.level&&(h.level=M,e.fx.driftLevel(this,M))}let d=he(Math.abs(this.speed)/16,0,1),f;h.on?f=h.dir*this.grip*this.driftTurn*(.6+.48*he(u*h.dir,-1,1))*.62:f=u*this.grip*d*(1-.32*he(this.speed/o,0,1))*.6*Math.sign(this.speed||1),this.air&&(f*=.35,this.psi*=Math.exp(-2.2*t));let p=i.frame(this.dist,Rn).k,x=Math.max(.55,1-p*this.x),g=this.speed*Math.cos(this.psi)/x;this.psi+=(f-p*g)*t,!h.on&&Math.abs(u)<.15&&!this.air&&e.assist(this)&&(this.psi=Fe(this.psi,0,1.6,t)),h.on&&(this.psi=Fe(this.psi,he(this.psi,-.75,.75),4,t)),this.psi=he(this.psi,-1.25,1.25),this.dist+=g*t,this.x+=(this.speed*Math.sin(this.psi)+this.vx)*t,this.vx=Fe(this.vx,0,3.2,t),e.stats.distance(this,Math.abs(g*t));let m=ve-(this.clsId==="bike"?.65:1.05);if(Math.abs(this.x)>m){let M=Math.sign(this.x);if(this.air&&this.h>1.2)this.x=M*m,this.vx*M>0&&(this.vx=0);else if(i.isOpen(this.s)&&this.phaseT<=0){if(Math.abs(this.x)>ve+.4){this.startFall("edge");return}}else{this.x=M*m;let _=Math.sin(this.psi)*M,T=Math.max(0,_)*this.speed+Math.abs(this.vx);_>0&&(this.psi*=-.25),this.vx*M>0&&(this.vx=-this.vx*.3),this.speed*=1-he(T/95,.004,.35),T>5&&(this.rs.wallHits++,e.fx.wall(this,M,T),h.on&&T>10&&(h.on=!1,h.t=0,h.level=0))}}let v=i.surface(this.s);if(!this.air)if(v.gap&&this.phaseT<=0)this.air=!0,this.airT=0,this.vy=0;else if(v.ramp&&v.rampEnd&&this.speed>8){let M=v.ramp;this.vy=(M.mega?7:4)+Math.min(this.speed,85)*(M.mega?.135:.1)*this.padBoost,this.air=!0,this.airT=0,this.landArm=!1,this.h=v.h,e.fx.launch(this)}else this.h=v.h;if(this.air&&(this.vy-=Ap*t,this.h+=this.vy*t,this.airT+=t,n.driftPressed&&(this.landArm=!0),this.h<=v.h))if(v.gap&&this.phaseT<=0){if(this.h<-2.5){this.startFall("gap");return}}else this.h=v.h,this.air=!1,this.squash=1,e.onLand(this,this.airT,this.landArm),this.landArm&&this.boost(.75,1+.24*this.padBoost),this.landArm=!1,this.vy=0;for(let M of i.strips)ai(this.s-M.s,i.L)<M.len&&Math.abs(this.x-M.x)<M.w/2+.7&&!this.air&&this.lastStrip!==M&&(this.lastStrip=M,this.boost(M.ramp?1.1:.9,1+.25*this.padBoost),e.onPad(this));this.lastStrip&&ai(this.s-this.lastStrip.s,i.L)>this.lastStrip.len+3&&(this.lastStrip=null);for(let M of i.capsules){if(!M.active)continue;let _=this.s-M.s;_>i.L/2&&(_-=i.L),_<-i.L/2&&(_+=i.L),Math.abs(_)<1.8&&Math.abs(this.x-M.x)<1.9&&this.h<3.5&&(M.active=!1,M.timer=2.5,e.items.pickup(this,M))}if(this.speed>28&&!this.air){let M=!1;for(let _ of e.racers){if(_===this||_.state!=="race")continue;let T=e.relDist(_,this);if(T>2.5&&T<11&&Math.abs(_.x-this.x)<2.4){M=!0;break}}M?(this.slipT+=t*(this.mods.slip||1),this.slipT>=1.3&&(this.slipT=0,this.boost(.8*(this.mods.slip?1.3:1),1.18),e.onSlip(this))):this.slipT=Math.max(0,this.slipT-t*.7)}else this.slipT=Math.max(0,this.slipT-t);a&&(n.melee&&this.meleeStrike(),n.fuse&&e.items.fuse(this),n.item&&e.items.use(this)),n.melee=n.item=n.fuse=n.driftPressed=!1}render(t,e){let i=this.race;i.track.frame(this.dist,Rn);let r=this.worldPos.copy(Rn.pos).addScaledVector(Rn.r,this.x).addScaledVector(Rn.u,this.h),a=this.psi+(this.drift.on?this.drift.dir*.42:0)+this.spinAng;this.meleeAnim>0&&(a+=this.meleeDir*Math.sin(this.meleeAnim/.3*Math.PI)*.45),Pr.copy(Rn.t).multiplyScalar(Math.cos(a)).addScaledVector(Rn.r,Math.sin(a)).normalize(),this.air&&Pr.addScaledVector(Rn.u,he(this.vy*.025,-.35,.35)).normalize();let o=this.worldUp.copy(Rn.u);Ru.crossVectors(o,Pr).normalize(),o.crossVectors(Pr,Ru).normalize(),Rp.makeBasis(Ru,o,Pr),this.root.quaternion.setFromRotationMatrix(Rp),this.root.position.copy(r),this.worldFwd.copy(Pr);let l=this.model.body,c=this.inp.steer,u=this.clsId==="bike"?-c*.38-(this.drift.on?this.drift.dir*.32:0):-c*.06;l.rotation.z=Fe(l.rotation.z,u+Math.sin(i.time*30)*this.wobble*.3,8,t),l.position.y=this.squash*-.12+(this.drift.on?Math.abs(Math.sin(i.time*18))*.05:0),l.scale.y=1-this.squash*.08;for(let p of this.model.wheels)p.children[0]&&(p.rotation.x+=this.speed*t*1.9);if(this.root.visible=this.state!=="fall"||this.fallT>.35,this.invulnT>0?l.visible=Math.floor(i.time*14)%2===0:l.visible=!0,this.blob){let p=Math.max(0,this.h);this.blob.position.y=-p+.04;let x=1+p*.12;this.blob.scale.set(x,1,x),this.blob.material.opacity=.62/(1+p*.35),this.blob.visible=this.state!=="fall"}let h=this.shield||this.orbital;if(this.shieldMesh.visible=!!this.shield||this.phaseT>0,this.shieldMesh.visible){this.shieldMesh.rotation.y+=t*1.2;let p=this.phaseT>0?10484991:this.shield.type==="mirror"?16777215:this.shield.type==="static"?12886783:this.shield.type==="fortress"?4259760:5111795;this.shieldMesh.material.color.setHex(p),this.shieldMesh.material.opacity=.55+Math.sin(i.time*8)*.15+(this.shield&&this.shield.t<2?Math.sin(i.time*30)*.3:0)}let d=this.boostT>0,f=this.model.tail;for(let p=0;p<this.trails.length;p++)Cp.copy(f[p]).applyQuaternion(this.root.quaternion).add(r),this.trails[p].intensity=this.state==="fall"?0:he(Math.abs(this.speed)/30,.15,1),this.trails[p].push(Cp,o,d);return r}dispose(){this.race.scene.remove(this.root),this.trails.forEach(t=>t.dispose(this.race.scene))}};var Xa=class{constructor(t,e,i){this.r=t,this.race=e,this.skill=i,this.lane=(Math.random()-.5)*6,this.laneT=0,this.think=Math.random(),this.itemDelay=1+Math.random()*2,this.wantDrift=!1,this.aggr=.4+Math.random()*.6,this.err=0,this.errT=0}update(t){let e=this.r,i=this.race,n=i.track,r=e.inp;if(e.state!=="race"){r.throttle=0,r.steer=0,r.drift=!1;return}let a=Math.max(10,e.speed),o=12+a*.42,l=n.K[n.idx(e.s+o*.6)],c=n.curvatureAhead(e.s+10,50);this.laneT-=t,this.laneT<=0&&(this.laneT=2+Math.random()*4,this.lane=(Math.random()-.5)*8);let u=he(l*320,-6,6)+this.lane*.45,h=e.s,d=!e.items[0]||!e.items[1],f=null,p=0;if(d)for(let b of n.capsules){if(!b.active)continue;let C=ai(b.s-h,n.L);if(C>8&&C<45){f=b.x,p=.75;break}}if(f===null)for(let b of n.strips){let C=ai(b.s-h,n.L);if(C>5&&C<50){f=b.x,p=b.ramp?1:.6;break}}f!==null&&(u=u*(1-p)+f*p);let x=!1;for(let b of n.jumps){let C=ai(b.s0-h,n.L);(C<60||C>n.L-b.gap-b.ramp)&&(x=!0,u=he(u,-4,4))}for(let b of n.hazards){let C=ai(b.s-h,n.L);if(C<0||C>55)continue;let A=C/a;if(b.type==="barrier"){let I=Math.sin((i.track.time+A)*b.speed+b.phase)*b.amp;Math.abs(u-I)<b.w/2+2.5&&(u=I>0?I-b.w/2-3:I+b.w/2+3)}else if(b.type==="firewall")u=-((i.track.time+A+b.phase)%(b.period*2)<b.period?-1:1)*6;else if(b.type==="mine")for(let I of b.mines)I.active&&Math.abs(u-I.x)<3&&(u=I.x+(u>I.x?3.5:-3.5))}for(let b of i.items.traps){let C=i.wrapDiff(b.dist,e.dist);C>0&&C<35&&Math.abs(u-b.x)<3&&(u=b.x+(u>b.x?3.6:-3.6))}let g=n.isOpen(h+o)||n.isOpen(h)?ve-5:ve-2.5;u=he(u,-g,g),this.errT-=t,this.errT<=0&&(this.errT=1+Math.random()*3,this.err=(Math.random()-.5)*(1.1-this.skill)*1.6);let m=Math.atan2(u-e.x,o)+this.err*.15,v=l*a/(e.grip*.6*Math.max(.3,1-.32*a/e.top)),M=(m-e.psi)*2.6+v*.85;r.steer=he(M,-1,1);let _=Math.abs(c.max);if(!e.drift.on)r.drift=!x&&_>.0085&&Math.abs(l)>.0075&&e.speed>30&&Math.random()<.9*this.skill&&Math.sign(l)===Math.sign(c.max)&&Math.abs(e.x)<ve-5,r.drift&&Math.abs(r.steer)<.3&&(r.steer=Math.sign(c.max)*.5);else{let b=e.drift.level>=3||Math.abs(l)<.004&&e.drift.level>=1||Math.abs(l)<.0015||Math.abs(e.psi)>.75||Math.abs(e.x)>ve-3;if(r.drift=!b,r.drift){let C=m-e.psi;r.steer=he(e.drift.dir+C*2.2+v*.4,-1,1)}}let T=e.grip*.6*.72*(e.drift.on?1.45:1)/Math.max(.004,_)*(.95+.1*this.skill),w=n.isOpen(h+20)||n.isOpen(h+50);r.brake=0,e.drift.on&&e.speed>T*1.35&&(r.drift=!1);let y=e.x+(e.speed*Math.sin(e.psi)+e.vx)*.55;Math.abs(y)>ve-1.8&&(r.steer=-Math.sign(y),e.drift.on&&Math.sign(y)===-e.drift.dir?r.steer=e.drift.dir:e.drift.on&&(r.drift=!1),Math.abs(y)>ve+2&&Math.abs(e.psi)>.3&&(r.throttle=.3)),e.speed>T*(w?1:1.12)?e.speed>T*1.25&&!e.drift.on?(r.throttle=0,r.brake=.6):r.throttle=.4:r.throttle=1,e.air&&Math.random()<.05*this.skill&&(r.driftPressed=!0),this.think-=t,this.think<=0&&(this.think=.25+(1.05-this.skill)*.8,this._combat())}_combat(){let t=this.r,e=this.race,i=t.inp,n=e.clock.itemAgg;if(t.meleeCd<=0){for(let d of e.racers){if(d===t||d.state!=="race")continue;let f=e.relDist(d,t),p=d.x-t.x;if(Math.abs(f)<3&&Math.abs(p)<4.6&&Math.random()<this.aggr*n){i.melee=!0;break}}for(let d of e.items.projectiles)d.target===t&&e.wrapDiff(t.dist,d.dist)<12&&e.wrapDiff(t.dist,d.dist)>0&&Math.random()<this.skill*.6&&(i.melee=!0,i.steer=t.x>0?-1:1)}if(t.rouletteT>0)return;let r=t.items[0],a=t.items[1];if(!r)return;if(this.itemDelay-=.3,r&&a&&Math.random()<.55*n){i.fuse=!0;return}if(this.itemDelay>0)return;let o=e.racers.find(d=>d.place===t.place-1),l=e.racers.find(d=>d.place===t.place+1),c=o?e.relDist(o,t):999,u=l?-e.relDist(l,t):999,h=!1;switch(r){case"plasma":case"barrage":case"ionlance":h=c<90||t.place===1&&Math.random()<.1;break;case"trap":case"minefield":case"seeker":h=u<25||Math.random()<.08;break;case"shield":case"fortress":case"mirror":case"static":case"orbital":{h=e.items.projectiles.some(f=>f.target===t&&e.wrapDiff(t.dist,f.dist)<40)||Math.random()<.07;break}case"surge":case"hyper":case"phase":case"comet":case"burn":case"shockwave":h=Math.abs(e.track.curvatureAhead(t.s,60).max)<.012||t.place>5;break;case"emp":case"blackout":{let d=0;for(let f of e.racers)f!==t&&Math.hypot(e.relDist(f,t),f.x-t.x)<(r==="blackout"?60:16)&&d++;h=d>=2||d>=1&&Math.random()<.3;break}case"glitchbomb":h=c<50;break;default:h=!0}h&&Math.random()<.5+.5*n&&(i.item=!0,this.itemDelay=.8+Math.random()*2.5/n)}};var $a={pos:new R,t:new R,r:new R,u:new R,k:0},Iy=new Ri(.6,12,8),Ly=new Fi(1,.07,4,20);function Pp(s=7002367){let t=new Ae;t.add(new rt(Iy,new Lt({color:16777215})));let e=new rt(Ly,new Lt({color:s}));t.add(e);let i=e.clone();i.rotation.x=Math.PI/2,t.add(i);let n=new hn(new Ki({map:fn(),color:s,blending:Se,depthWrite:!1,transparent:!0}));return n.scale.setScalar(5),t.add(n),t.userData.rings=[e,i],t}var Dy={shield:5,trap:4,emp:3,plasma:2,surge:1},Ny={surge:5,plasma:4,emp:4,shield:2,trap:1},Ec=class{constructor(t){this.race=t,this.scene=t.scene,this.projectiles=[],this.traps=[],this.fields=[],this.beams=[],this.rings=[],this.orbitMeshes=new Map}roll(t){let e=he(t.place||8,1,8),i=bp[e-1].slice();t.mods.luck&&(i[0]*=1+t.mods.luck,i[3]*=1+t.mods.luck);let n=()=>{let a=i.reduce((l,c)=>l+c,0),o=Math.random()*a;for(let l=0;l<i.length;l++)if(o-=i[l],o<=0)return _u[l];return _u[0]},r=n();if(t.mods.doubleRoll){let a=n(),o=e<=3?Dy:Ny;o[a]>o[r]&&(r=a)}return r}pickup(t,e){let i=this.race;if(i.fx.capsule(t,e),i.mode==="tt")return;let n=t.items[0]===null?0:t.items[1]===null?1:-1;if(n<0)return;let r=this.roll(t);t.items[n]=r,t.rouletteT=t.mods.luck?0:t.isPlayer?.9:.5,n===0&&t.items[1]===null&&t.mods.dupChance&&Math.random()<t.mods.dupChance&&(t.items[1]=r),i.onPickup(t,r)}canUse(t){return t.rouletteT<=0&&(t.items[0]||t.items[1])}use(t){if(t.rouletteT>0)return;let e=t.items[0];e?(t.items[0]=t.items[1],t.items[1]=null):(e=t.items[1],t.items[1]=null),e&&(t.rs.itemsUsed++,this.activate(t,e),this.race.onItemUse(t,e))}fuse(t){if(t.rouletteT>0||!t.items[0]||!t.items[1])return!1;let e=Yn[mc(t.items[0],t.items[1])];return e?(t.items[0]=e.id,t.items[1]=null,this.race.onFuse(t,e.id),!0):!1}activate(t,e){let i=this.race,n=t.mods.fusePower||1;switch(e){case"plasma":this.firePlasma(t,this.targetAhead(t,1));break;case"barrage":for(let r=1;r<=3;r++){let a=this.targetAhead(t,r);this.firePlasma(t,a,(r-2)*2.5,"barrage")}break;case"trap":this.dropTrap(t,t.dist-3.2,t.x);break;case"minefield":for(let r=0;r<5;r++)this.dropTrap(t,t.dist-4-r*2.5,(r-2)*4.2+(Math.random()-.5)*1.5);break;case"seeker":this.fireSeeker(t);break;case"shield":t.shield={type:"basic",hits:1,t:10*(t.mods.shieldTime||1)*(t.clsId==="quad"?1.25:1)},i.fx.shieldUp(t);break;case"fortress":t.shield={type:"fortress",hits:3,t:15*n},i.fx.shieldUp(t);break;case"mirror":t.shield={type:"mirror",hits:1,t:14*n},i.fx.shieldUp(t);break;case"static":t.shield={type:"static",hits:1,t:12*n},t.staticT=12*n,i.fx.shieldUp(t);break;case"orbital":t.orbital={n:2,t:7*n};break;case"surge":t.boost(1.4,1.32),i.fx.surge(t);break;case"hyper":t.boost(3*n,1.42),i.fx.surge(t);break;case"phase":t.boost(2.2*n,1.34),t.phaseT=2.4*n,i.fx.surge(t);break;case"comet":t.boost(2*n,1.36),t.cometT=2*n,i.fx.surge(t);break;case"burn":t.boost(1.8*n,1.32),t.burnT=1.8*n,i.fx.surge(t);break;case"shockwave":t.boost(2*n,1.34),t.shockT=2*n,t.shockHit.clear(),i.fx.surge(t);break;case"emp":this.empBlast(t,18,1.4,!1);break;case"blackout":this.empBlast(t,70*n,2,!0);break;case"ionlance":this.ionLance(t);break;case"glitchbomb":this.lobBomb(t,n);break}}targetAhead(t,e){let i=t.place-e;return i<1?null:this.race.racers.find(n=>n.place===i&&n.state!=="fall"&&!n.finished)||null}firePlasma(t,e,i=0,n="plasma",r=null,a=null){let o=Pp(n==="reflect"?16777215:7002367);this.scene.add(o);let l=Math.max(t.speed,t.top*.8)+32;this.projectiles.push({type:"plasma",tag:n,owner:t,target:e,dist:a??t.dist+2.5,x:(r??t.x)+i,h:1.2+t.h,v:l*(t.mods.plasma||1),home:2.4*(t.mods.plasma||1),life:7,mesh:o,missed:!1}),this.race.fx.fire(t,"plasma")}fireSeeker(t){let e=this.race.racers.find(n=>n.place===t.place+1&&n.state!=="fall"),i=Ha(16765802,16742938);this.scene.add(i),this.projectiles.push({type:"seeker",owner:t,target:e||null,dist:t.dist-3,x:t.x,h:.8+t.h,v:-16,home:1.8,life:9,mesh:i}),this.race.fx.fire(t,"trap")}dropTrap(t,e,i,n=25){let r=Ha(16722490,16756782);this.scene.add(r),this.traps.push({owner:t,dist:e,x:he(i,-ve+1.5,ve-1.5),h:.6,arm:.7,life:n*(t.mods.trapLife||1),mesh:r,burn:!1}),this.race.fx.fire(t,"trap")}dropBurn(t){let e=new hn(new Ki({map:fn(),color:16734746,blending:Se,depthWrite:!1,transparent:!0}));e.scale.set(3,4,1),this.scene.add(e),this.traps.push({owner:t,dist:t.dist-2,x:t.x,h:1.2,arm:0,life:2.6,mesh:e,burn:!0})}lobBomb(t,e){let i=Ha(13995007,16777215);this.scene.add(i),this.projectiles.push({type:"bomb",owner:t,dist:t.dist+2,x:t.x,h:1.5+t.h,v:t.speed+22,vy:9,life:4,mesh:i,P:e}),this.race.fx.fire(t,"emp")}empBlast(t,e,i,n){let r=this.race,a=0;for(let o of r.racers){if(o===t||o.state!=="race"||o.finished)continue;let l=r.relDist(o,t),c=o.x-t.x;Math.hypot(l,c)<e&&o.emp(i,t)&&(a++,r.onItemHit(t,o,"emp"),n&&(o.scrambleT=3,o.isPlayer&&r.fx.scramble()))}for(let o of this.traps)Math.abs(r.wrapDiff(o.dist,t.dist))<e*.6&&(o.life=0);for(let o of this.projectiles)o.owner!==t&&Math.abs(r.wrapDiff(o.dist,t.dist))<e*.6&&(o.life=0);r.fx.empBlast(t,e,n),t.isPlayer&&(!n&&a>=3&&r.flag("emp3"),n&&a>=5&&r.flag("blackout5"))}ionLance(t){let e=this.race,i=null,n=110;for(let r of e.racers){if(r===t||r.state!=="race"||r.finished)continue;let a=e.relDist(r,t);a>0&&a<n&&(n=a,i=r)}e.fx.beam(t,i),i&&i.hit("plasma",t,{dur:1.3})&&(i.empT=Math.max(i.empT,1.2),e.onItemHit(t,i,"plasma"))}reflect(t,e,i){t.isPlayer&&this.race.flag("mirror"),i==="plasma"||i==="emp"?this.firePlasma(t,e,0,"reflect"):e.hit(i,t)}orbitalRelease(t){let e=t.orbital?t.orbital.n:0;for(let n=0;n<e;n++)this.firePlasma(t,this.targetAhead(t,1+n),(n-.5)*2);let i=this.orbitMeshes.get(t);i&&(this.scene.remove(i),this.orbitMeshes.delete(t))}update(t){let e=this.race,i=e.track;for(let n of this.projectiles){if(n.life-=t,n.life<=0)continue;if(n.type==="bomb"){n.dist+=n.v*t,n.vy-=26*t,n.h+=n.vy*t,n.h<=.5&&(n.life=0,this.fields.push({owner:n.owner,dist:n.dist,life:3.5*n.P,mesh:this._fieldMesh(n.dist,n.x),x:n.x}),e.fx.empField(n));continue}let r=n.target;n.dist+=n.v*t,r&&r.state==="race"?(n.x=Fe(n.x,r.x,n.home,t),n.h=Fe(n.h,r.h+1.1,4,t)):n.h=Fe(n.h,1.2,3,t),n.x=he(n.x,-ve+1,ve-1);for(let a of e.racers){if(a===n.owner||a.state!=="race"||a.finished&&!a.isPlayer)continue;let o=e.wrapDiff(a.dist,n.dist);if(Math.abs(o)<1.7&&Math.abs(a.x-n.x)<2&&Math.abs(a.h+1-n.h)<2.5){if(a===r&&a.dashT>0&&!n.missed){n.missed=!0,n.target=null,n.x+=Math.sign(n.x-a.x||1)*3,e.onEvade(a);continue}n.life=0,a.hit("plasma",n.owner)&&e.onItemHit(n.owner,a,n.type==="seeker"?"trap":"plasma",n.tag),e.fx.explode(n.mesh.position,7002367);break}}if(n.life>0){for(let a of this.traps)if(!(a.burn||a.life<=0)&&Math.abs(e.wrapDiff(a.dist,n.dist))<1.5&&Math.abs(a.x-n.x)<1.8){a.life=0,n.life=0,e.fx.explode(n.mesh.position,16756782);break}}n.type==="plasma"&&r&&e.wrapDiff(n.dist,r.dist)>30&&(n.target=null)}for(let n of this.traps)if(n.life-=t,n.arm-=t,!(n.life<=0)){for(let r of e.racers)if(!(r.state!=="race"||r.air&&r.h>1.6)&&!(r===n.owner&&(n.arm>0||n.burn))&&Math.abs(e.wrapDiff(r.dist,n.dist))<1.6&&Math.abs(r.x-n.x)<(n.burn?1.9:1.7)&&(n.burn?r.empT<=.1&&r.emp(.7,n.owner)&&e.onItemHit(n.owner,r,"emp"):(n.life=0,r.hit("trap",n.owner)&&e.onItemHit(n.owner,r,"trap"),e.fx.explode(n.mesh.position,16756782)),!n.burn))break}this._hazards(t);for(let n of this.fields){n.life-=t;for(let r of e.racers)r===n.owner||r.state!=="race"||Math.abs(e.wrapDiff(r.dist,n.dist))<8&&r.empT<.2&&r.emp(.6,n.owner)&&e.onItemHit(n.owner,r,"emp");n.mesh.material.opacity=.35+Math.sin(e.time*20)*.15,n.life<=0&&this.scene.remove(n.mesh)}for(let n of e.racers)if(n.state==="race"&&(n.shockT>0||n.cometT>0))for(let r of e.racers){if(r===n||r.state!=="race")continue;let a=e.relDist(r,n),o=r.x-n.x;n.shockT>0&&!n.shockHit.has(r)&&Math.hypot(a,o)<8&&(n.shockHit.add(r),r.emp(1.2,n)&&e.onItemHit(n,r,"emp"),e.fx.zap(r)),n.cometT>0&&Math.abs(a)<2.6&&Math.abs(o)<2.4&&r.hit("comet",n,{dur:1})&&e.onItemHit(n,r,"plasma")}this.projectiles=this.projectiles.filter(n=>n.life<=0?(this.scene.remove(n.mesh),!1):!0),this.traps=this.traps.filter(n=>n.life<=0?(this.scene.remove(n.mesh),!1):!0),this.fields=this.fields.filter(n=>n.life>0);for(let n of this.beams)n.life-=t,n.mesh.material.opacity=Math.max(0,n.life/.35),n.life<=0&&this.scene.remove(n.mesh);this.beams=this.beams.filter(n=>n.life>0);for(let n of this.rings){n.life-=t;let r=1-n.life/n.max;n.mesh.scale.setScalar(.5+r*n.radius),n.mesh.material.opacity=(1-r)*.9,n.life<=0&&this.scene.remove(n.mesh)}this.rings=this.rings.filter(n=>n.life>0)}_hazards(t){let e=this.race,i=e.track;for(let n of i.hazards)for(let r of e.racers)if(!(r.state!=="race"||r.phaseT>0)){if(n.type==="barrier"){let a=e.wrapDiff(r.dist,n.s);if(Math.abs(a)<1.5&&Math.abs(r.x-n.x)<n.w/2+.9&&r.h<2.4){if(r.hitCdBarrier>e.time)continue;r.hitCdBarrier=e.time+.8,r.shield?r.hit("barrier",null):(r.speed*=.35,r.dist-=Math.sign(a||1)*.6+.8,r.vx+=Math.sign(r.x-n.x||1)*8,r.wobble=.6,r.rs.wallHits++,e.fx.wall(r,0,30))}}else if(n.type==="firewall"&&n.active){let a=e.wrapDiff(r.dist,n.s);if(Math.abs(a)<1&&Math.sign(r.x||.01)===n.side&&r.h<4.5){if(r.hitCdFire>e.time)continue;r.hitCdFire=e.time+1,r.hit("firewall",null,{dur:.9,keep:.6})}}else if(n.type==="mine")for(let a of n.mines)a.active&&Math.abs(e.wrapDiff(r.dist,a.s))<1.5&&Math.abs(r.x-a.x)<1.7&&r.h<1.8&&(a.active=!1,a.t=6,a.mesh.visible=!1,r.hit("trap",null),e.fx.explode(a.mesh.position,16722490));else if(n.type==="pulse"&&n.on){let a=e.wrapDiff(r.dist,n.s);a>0&&a<n.len&&!r.air&&r.empT<.3&&r.emp(.7,null)}}}_fieldMesh(t,e){let i=new rt(new Ri(8,16,8,0,Math.PI*2,0,Math.PI/2),new Lt({color:12159999,transparent:!0,opacity:.4,blending:Se,depthWrite:!1,wireframe:!0})),n=this.race.track.frame(t,$a);return i.position.copy(n.pos).addScaledVector(n.r,e),this.scene.add(i),i}addRing(t,e,i,n=.5){let r=new rt(new Fi(1,.25,6,32),new Lt({color:e,transparent:!0,blending:Se,depthWrite:!1}));r.position.copy(t),r.rotation.x=Math.PI/2,this.scene.add(r),this.rings.push({mesh:r,life:n,max:n,radius:i})}addBeam(t,e,i){let n=new ie().setFromPoints([t,e]),r=new ba(new cr(t.clone(),e.clone()),1,.35,6,!1),a=new rt(r,new Lt({color:i,transparent:!0,blending:Se,depthWrite:!1}));this.scene.add(a),this.beams.push({mesh:a,life:.35})}render(t){let e=this.race,i=e.track,n=(r,a=0)=>{i.frame(r.dist,$a),r.mesh.position.copy($a.pos).addScaledVector($a.r,r.x).addScaledVector($a.u,r.h+a)};for(let r of this.projectiles)n(r),r.mesh.userData.rings?(r.mesh.userData.rings[0].rotation.y+=t*9,r.mesh.userData.rings[1].rotation.z+=t*7):r.mesh.rotation.y+=t*8,Math.random()<.6&&e.particles.emit(r.mesh.position,new R((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),r.type==="plasma"?7002367:16756782,.9,.35);for(let r of this.traps)n(r),r.burn?(r.mesh.material.opacity=Math.min(1,r.life),r.mesh.scale.y=3+Math.sin(e.time*30+r.dist)*.8):(r.mesh.rotation.y+=t*4,r.mesh.children[1].rotation.x+=t*3,Math.random()<.15&&e.particles.emit(r.mesh.position,new R((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4),16756782,.5,.3));for(let r of e.racers)if(r.orbital&&r.orbital.n>0){let a=this.orbitMeshes.get(r);if(!a){a=new Ae;for(let o=0;o<2;o++){let l=Pp(8060927);l.scale.setScalar(.6),a.add(l)}this.scene.add(a),this.orbitMeshes.set(r,a)}a.position.copy(r.worldPos).addScaledVector(r.worldUp,1.2),a.children.forEach((o,l)=>{o.visible=l<r.orbital.n;let c=e.time*4+l*Math.PI;o.position.set(Math.cos(c)*2.4,0,Math.sin(c)*2.4)})}else this.orbitMeshes.has(r)&&(this.scene.remove(this.orbitMeshes.get(r)),this.orbitMeshes.delete(r))}dispose(){for(let t of this.projectiles)this.scene.remove(t.mesh);for(let t of this.traps)this.scene.remove(t.mesh);for(let t of this.fields)this.scene.remove(t.mesh);for(let[,t]of this.orbitMeshes)this.scene.remove(t)}};var sn=new R,As=new R,pn={pos:new R,t:new R,r:new R,u:new R,k:0},Tc=class{constructor(t,e){this.game=t,this.opts=e,this.mode=e.mode,this.clock=e.clock,this.cup=Ge[e.cup],this.def=this.cup.tracks[e.track],this.scene=new ln,this.camera=new ni(72,16/9,.3,2600),this.time=-4.2,this.started=!1,this.over=!1,this.paused=!1,this.finishCount=0,this.camMode=t.settings.camera||"chase",this.shake=0,this.lookBack=!1,this.flags={},this.st=Fy(),this.feed=[],this.barrageHits=0,this.barrageT=0;let i=t.quality;this.track=new wr(this.cup,this.def),this.track.build(this.scene,i),this.scene.add(new ps(10471679,2101296,1.4));let n=new ki(16777215,1.6);n.position.set(.3,1,.4),this.scene.add(n);let r=new ki(this.cup.pal.a,1.2);r.position.set(-.5,.3,-1),this.scene.add(r);let a=t.pipeline.preset;if(this.pMul=a.particles,this.particles=new yc(this.scene,(i>0?2e3:1100)*this.pMul),this.particles.mul=this.pMul,this.shadows=t.renderer.shadowMap.enabled,this.shadows){let c=this.sun=new ki(16777215,.9);c.castShadow=!0,c.shadow.mapSize.set(a.shadowMap,a.shadowMap),Object.assign(c.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:220}),c.shadow.bias=-6e-4,c.shadow.normalBias=.03,this.scene.add(c,c.target),this.sunDir=new R(.35,1,.22).normalize();let u=new rt(this.track.roadGeo,new fs({opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));u.receiveShadow=!0,this.scene.add(u)}this.items=new Ec(this),this.racers=[],this.ai=[];let o=e.player;(this.mode==="tt"?[o.char]:e.grid).forEach((c,u)=>{let h=je.find(g=>g.id===c),d=c===o.char,f=Math.floor(u/2),p=u%2,x=new Sc(this,{idx:u,char:h,cls:d?o.cls:h.cls,isPlayer:d,dist:-6-f*7-p*2.5,x:(p?1:-1)*4.5+(f%2?1.5:-1.5),paint:d?o.paint:1382442+u*197379,neon:d?o.neon:null,trail:d?o.trail:"std",upgrades:d?o.upgrades:Uy(this.clock.id),aiSkill:.9+Math.random()*.12});this.racers.push(x),d?this.player=x:this.ai.push(new Xa(x,this,he(this.clock.ai*(.9+Math.random()*.15),.6,1.05)))}),this.mode==="tt"?this.player.items=["surge","surge"]:this.player.mods.startItem&&(this.player.items[0]=this.player.mods.startItem);for(let c of this.racers)!c.isPlayer&&c.mods.startItem&&(c.items[0]=c.mods.startItem);this.camPos=new R,this.camLook=new R,this.camInit=!1,this.fov=72,this.rocket={pressedAt:null,early:!1},this.racers.forEach(c=>c.render(0)),this.updatePlaces(),this.fx=ky(this)}wrapDiff(t,e){let i=this.track.L;return ai(t-e+i/2,i)-i/2}relDist(t,e){return this.wrapDiff(t.dist,e.dist)}assist(t){return t.isPlayer?this.game.settings.assist!==!1:!0}rubber(t){if(t.isPlayer||this.mode==="tt")return 1;let e=t.dist-this.player.dist,i=this.clock.id===2?.5:1;return e>120?1-.05*i:e<-150?1+.07*i:1}flag(t){this.flags[t]||(this.flags[t]=!0,this.game.achFlag(t))}onDriftBoost(t,e){t.isPlayer&&(this.st.driftBoosts++,this.st["drift"+e]++,this.st.bits+=e*10)}onLand(t,e,i){t.isPlayer?this.game.audio.play("land",{vol:Math.min(1.2,.5+e)}):t.worldPos.distanceTo(this.camera.position)<60&&this.game.audio.play("land",{pos:t.worldPos,vol:.7}),t.isPlayer&&(this.st.air+=e,e>=1.5&&this.flag("air2"),i&&(this.st.lands++,this.st.bits+=15,this.fx.text("PERFECT LANDING","#7affff")),this.game.haptic(20,120))}onPad(t){t.isPlayer&&(this.st.pads++,this.game.audio.play("pad"))}onSlip(t){t.isPlayer&&(this.game.audio.play("slip"),this.st.slips++,this.st.bits+=10,this.fx.text("SLIPSTREAM","#bfe8ff"))}onPickup(t,e){t.isPlayer&&this.game.audio.sfx("pickup")}onItemUse(t,e){(t.isPlayer||t.worldPos.distanceTo(this.player.worldPos)<30)&&this.game.audio.combat(),t.isPlayer&&(this.st.itemsUsed++,e==="surge"&&this.st.surges++,e==="barrage"&&(this.barrageHits=0,this.barrageT=6),yu.includes(e)&&(this.st.fuseMask|=1<<yu.indexOf(e)))}onFuse(t,e){t.isPlayer&&(this.st.fusions++,this.fx.text("FUSED: "+Er(e).name,Er(e).color),this.game.audio.sfx("fuse"),this.game.haptic(40,160))}onItemHit(t,e,i,n){t&&((t.isPlayer||e.isPlayer)&&this.game.audio.combat(),t.isPlayer?(i==="plasma"&&this.st.plasmaHits++,i==="trap"&&this.st.trapHits++,i==="emp"&&this.st.empHits++,this.st.bits+=25,n==="barrage"&&this.barrageT>0&&++this.barrageHits>=3&&this.flag("barrage3"),this.feedMsg(`${Ip(i)} \u25B8 ${e.name}`,"#7affff")):e.isPlayer&&this.feedMsg(`${t.name} \u25B8 ${Ip(i)}`,"#ff6080"))}onMelee(t,e,i){(t.isPlayer||e.isPlayer)&&this.game.audio.combat(),t.isPlayer&&(this.st.meleeHits++,this.st.bits+=15,i&&this.flag("tailwhip"))}onKnockoff(t,e){t.isPlayer&&(this.st.knockoffs++,this.st.bits+=60,this.fx.text("KNOCKED OFF: "+e.name,"#ff9f40")),this.feedMsg(`${t.name} \u21E2 shoved ${e.name} off`,t.isPlayer?"#ffb340":"#ff6080")}onEvade(t){t.isPlayer&&(this.st.evades++,this.fx.text("EVADED!","#9ffcff"))}onBlock(t){t.isPlayer&&this.st.blocks++}feedMsg(t,e){this.game.hud.feed(t,e)}stats={distance:(t,e)=>{t.isPlayer&&(this.st.distance+=e)}};update(t){if(this.paused)return;let e=this.time;this.time+=t;let i=this.game,n=this.player;if(!this.started){let a=i.input.state.throttle>.5||i.settings.autoAccel;a&&this.rocket.pressedAt===null&&(this.rocket.pressedAt=this.time),a||(this.rocket.pressedAt=null);let o=Math.ceil(-this.time),l=Math.ceil(-e);if(o!==l&&o>=0&&o<=3&&(i.hud.countdown(o===0?"GO!":String(o)),i.audio.countdown(o)),this.time>=0){this.started=!0;let c=this.rocket.pressedAt;c!==null&&!i.settings.autoAccel&&(c>=-.65&&c<=-.05?(n.boost(1.2,1.3),this.st.rockets++,this.st.bits+=50,this.fx.text("ROCKET START!","#ffb340"),i.haptic(60,200)):c<-1.6&&(n.stallT=.9,this.fx.text("ENGINE STALL","#ff5060")));for(let u of this.ai)Math.random()<u.skill*.6&&u.r.boost(1,1.25);this.raceStart=performance.now()}}n.finished||i.input.applyTo(n.inp,this);for(let r of this.ai)r.update(t);n.finished&&this.autopilot&&this.autopilot.update(t);for(let r of this.racers)r.step(t);this.collide(),this.items.update(t),this.track.update(t),this.barrageT>0&&(this.barrageT-=t);for(let r of this.racers)this.lapCheck(r);this.updatePlaces(),this.started&&this.time>15&&n.place===this.racers.length&&this.racers.length>1&&(n.rs.wasLast=!0),n.finished&&!this.over&&(this.endT=(this.endT||0)+t,(this.endT>4.5||this.racers.every(r=>r.finished))&&this.finishRace())}lapCheck(t){let e=this.track.L,i=Math.floor(t.dist/e);if(!t.finished&&i>t.lap){if(i>=1){let n=this.time-t.lapStart;t.lapTimes.push(n),t.bestLap=Math.min(t.bestLap,n),t.isPlayer&&(t.place!==1&&this.mode!=="tt"&&(t.rs.ledAll=!1),i<3&&(this.game.hud.banner(i===2?"FINAL LAP":`LAP ${i+1}/${3}`),i!==2&&this.game.audio.sfx("lap")))}t.lap=i,t.lapStart=this.time,i>=3&&(t.finished=!0,t.finishTime=this.time,t.place=++this.finishCount,t.order=this.finishCount,t.isPlayer&&this.onPlayerFinish())}}onPlayerFinish(){let t=this.player;if(this.game.hud.banner(this.mode==="tt"?"TIME!":t.place===1?"VICTORY!":`FINISHED ${t.place}${["st","nd","rd"][t.place-1]||"th"}`,!0),this.game.audio.stinger(this.mode==="tt"||t.place<=3),this.autopilot=new Xa(t,this,.9),t.place===1&&this.mode!=="tt"){let e=this.racers.find(n=>n!==t&&!n.finished&&!0),i=1/0;for(let n of this.racers)if(n!==t){let r=3*this.track.L-n.dist;i=Math.min(i,r/Math.max(20,n.speed))}this.margin=i}}finishRace(){this.over=!0;let t=this.track.L;this.racers.filter(a=>!a.finished).map(a=>({r:a,t:this.time+(3*t-a.dist)/Math.max(25,a.top*.85)})).sort((a,o)=>a.t-o.t).forEach(({r:a,t:o})=>{a.finished=!0,a.finishTime=o,a.place=++this.finishCount});let i=[...this.racers].sort((a,o)=>a.place-o.place),n=this.player,r={mode:this.mode,cup:this.opts.cup,track:this.opts.track,clock:this.clock.id,order:i.map((a,o)=>({id:a.char.id,name:a.name,cls:a.clsId,time:a.finishTime,place:o+1,pts:this.mode==="tt"?0:pc[o],isPlayer:a.isPlayer,color:a.char.color})),place:n.place,time:n.finishTime,bestLap:n.bestLap,lapTimes:n.lapTimes,st:this.st,rs:n.rs,flags:this.flags,margin:this.margin??99};r.st.bits+=this.mode==="tt"?150:Mp[n.place-1],r.bits=Math.round(r.st.bits*this.clock.bits),this.game.onRaceEnd(this,r)}updatePlaces(){let t=i=>i.finished?1e9-i.order:i.dist,e=[...this.racers].sort((i,n)=>t(n)-t(i));e.forEach((i,n)=>{i.finished||(i.place=n+1)}),this.order=e}collide(){let t=this.racers;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],r=t[i];if(n.state!=="race"||r.state!=="race")continue;let a=this.wrapDiff(r.dist,n.dist),o=r.x-n.x;if(Math.abs(a)>2.6||Math.abs(o)>1.9||Math.abs(n.h-r.h)>1.6)continue;let l=n.clsId==="bike"?.75:1,c=r.clsId==="bike"?.75:1,u=1.9*(l+c)/2-Math.abs(o);if(u<=0)continue;let h=Math.sign(o)||1,d=n.mass,f=r.mass,p=d+f;if(Math.abs(a)<1.6)n.x-=h*u*(f/p),r.x+=h*u*(d/p),n.vx-=h*2.5*(f/p),r.vx+=h*2.5*(d/p);else{let x=a>0?n:r,g=a>0?r:n;if(x.speed>g.speed){let m=x.speed-g.speed;x.speed-=m*.6,g.speed+=m*.25}x.dist-=.05}if(n.isPlayer||r.isPlayer){let x=n.isPlayer?n:r;(!x._bumpT||x._bumpT<this.time)&&(x._bumpT=this.time+.35,this.game.haptic(15,90),this.fx.sparks(sn.addVectors(n.worldPos,r.worldPos).multiplyScalar(.5),16765056,8))}for(let[x,g]of[[n,r],[r,n]])x.staticT>0&&x.shield&&g.empT<=0&&g.emp(1.2,x)&&this.onItemHit(x,g,"emp")}}dynamicObjects(){if(!this._dynRacers){this._dynRacers=[];for(let i of this.racers)i.root.traverse(n=>{n.isMesh&&n.userData.dyn&&this._dynRacers.push(n)})}let t=this._dynRacers.slice(),e=i=>i.traverse(n=>{n.isMesh&&(n.userData.dyn=!0,t.push(n))});for(let i of this.items.projectiles)e(i.mesh);for(let i of this.track.hazards)i.type==="barrier"&&e(i.mesh);return t}render(t,e){let i=this.player;this.sun&&(this.sun.position.copy(i.worldPos).addScaledVector(this.sunDir,90),this.sun.target.position.copy(i.worldPos),this.sun.target.updateMatrixWorld());for(let n of this.racers)n.render(t);this.items.render(t),this.continuousFx(t),this.particles.update(t),this.updateCamera(t,e),this.track.sky.position.copy(this.camera.position),this.track.stars.position.copy(this.camera.position)}continuousFx(t){let e=this.particles;for(let i of this.racers){if(i.state!=="race"||!(i.isPlayer||i.worldPos.distanceToSquared(this.camera.position)<14400))continue;let r=sn.copy(i.worldFwd).multiplyScalar(-1.6).add(i.worldPos);if(i.drift.on&&!i.air){let a=wc[i.drift.level];pn.r.crossVectors(i.worldFwd,i.worldUp);for(let o=0;o<this.pMul;o++)for(let l of[-1,1])As.copy(r).addScaledVector(pn.r,l*.9).addScaledVector(i.worldUp,.2),e.emit(As,new R((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6).addScaledVector(i.worldFwd,-3),a,i.drift.level?.7:.35,.3,12)}if(i.boostT>0)for(let a=0;a<2*this.pMul;a++)e.emit(As.copy(r).addScaledVector(i.worldUp,.6),new R((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3).addScaledVector(i.worldFwd,-12),Math.random()<.5?16747034:16769162,1.1,.35);i.empT>0&&Math.random()<.7&&e.emit(As.copy(i.worldPos).add(new R((Math.random()-.5)*3,Math.random()*2.5,(Math.random()-.5)*3)),new R(0,2,0),12159999,.8,.2),i.slipT>.2&&i.isPlayer&&Math.random()<.5&&e.emit(As.copy(i.worldPos).add(new R((Math.random()-.5)*5,Math.random()*3,(Math.random()-.5)*5)).addScaledVector(i.worldFwd,4),sn.copy(i.worldFwd).multiplyScalar(-30),13626111,.25,.3),(i.cometT>0||i.phaseT>0)&&e.burst(i.worldPos,i.cometT>0?16752448:10484991,2,4,1.2,.3)}}updateCamera(t,e){let i=this.player,n=this.camera;this.track.frame(i.dist,pn);let a=pn.u,o=he(i.speed/i.top,0,1.5),l,c,u=i.worldPos;if(this.camMode==="iso"){let f=pn.r;l=sn.copy(u).addScaledVector(pn.t,-17-o*4).addScaledVector(f,-9).add(new R(0,24,0)),c=As.copy(u).addScaledVector(pn.t,10),this.fov=Fe(this.fov,50,3,t)}else{let f=new R().copy(pn.t).lerp(i.worldFwd,i.spinT>0?0:.35).normalize(),p=7.2+o*1.6;l=sn.copy(u).addScaledVector(f,this.lookBack?p:-p).addScaledVector(a,3+(i.air?.6:0)),c=As.copy(u).addScaledVector(f,this.lookBack?-8:7).addScaledVector(a,1.4);let x=i.boostT>0?10:0;this.fov=Fe(this.fov,68+o*10+x,4,t)}this.camInit||(this.camPos.copy(l),this.camLook.copy(c),this.camInit=!0);let h=this.camMode==="iso"?5:9+Math.abs(i.speed)*.3;this.camPos.x=Fe(this.camPos.x,l.x,h,t),this.camPos.y=Fe(this.camPos.y,l.y,h*.8,t),this.camPos.z=Fe(this.camPos.z,l.z,h,t),i.state==="fall"||this.camLook.lerp(c,1-Math.exp(-14*t)),n.position.copy(this.camPos),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),n.position.add(new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(this.shake*.9))),n.up.copy(this.camMode==="iso"?new R(0,1,0):a),n.lookAt(this.camLook);let d=e<1.25;n.fov=this.fov+(d?10:0),n.aspect=e,n.updateProjectionMatrix()}dispose(){this.items.dispose();for(let t of this.racers)t.dispose();this.particles.dispose(this.scene),this.track.dispose(this.scene),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function Ip(s){return{plasma:"PLASMA",trap:"TRAP",emp:"EMP",melee:"MELEE",comet:"COMET"}[s]||s.toUpperCase()}function Uy(s){let t=s;return{engine:[0,0,2][t],turbo:t,grip:t,armor:t,capacitor:t}}function Fy(){return{driftBoosts:0,drift1:0,drift2:0,drift3:0,slips:0,pads:0,air:0,lands:0,plasmaHits:0,trapHits:0,empHits:0,blocks:0,surges:0,fusions:0,fuseMask:0,meleeHits:0,knockoffs:0,evades:0,distance:0,rockets:0,itemsUsed:0,bits:0}}function ky(s){let t=s.game,e=s.particles,i=o=>o.isPlayer||o.worldPos.distanceTo(s.camera.position)<90,n=o=>o.isPlayer?1:he(1-o.worldPos.distanceTo(s.camera.position)/90,0,.6),r=t.audio,a=(o,l,c={})=>r.play(o,l.isPlayer?c:{...c,pos:l.worldPos});return{text(o,l){t.hud.pop(o,l)},sparks(o,l,c){e.burst(o,l,c,10,.6,.4,18)},boost(o){o.isPlayer&&(r.play("boost"),t.haptic(25,120))},block(o,l){s.onBlock(o),i(o)&&(e.burst(o.worldPos,5111795,30,12,.9,.5),a("shield_block",o)),o.isPlayer&&t.hud.pop("BLOCKED","#4dfff3")},hit(o,l,c){i(o)&&(e.burst(sn.copy(o.worldPos).addScaledVector(o.worldUp,1),16742970,40,16,1,.6,10),e.burst(o.worldPos,16777215,10,8,1.6,.25),a(c==="trap"?"trap_trigger":"plasma_impact",o),c==="trap"&&r.victimTrap(o)),(o.isPlayer||l&&l.isPlayer)&&r.duck("high",.08),o.isPlayer&&(s.shake=1,t.haptic(120,255))},emp(o){i(o)&&(e.burst(sn.copy(o.worldPos).addScaledVector(o.worldUp,1),12159999,30,10,.8,.5),a("zap",o)),o.isPlayer&&(s.shake=.5,t.haptic(80,180),t.hud.glitch(.6),r.victimEmp(1.5),r.duck("high",.1))},zap(o){e.burst(o.worldPos,12159999,16,8,.7,.4)},fall(o){i(o)&&(e.burst(o.worldPos,o.neonColor,50,9,.8,.9,-4),a("derez",o)),o.isPlayer&&(t.hud.pop("DEREZZED","#ff5060"),t.haptic(150,200))},respawn(o){e.burst(o.worldPos,16777215,30,6,.8,.6,-6),(o.isPlayer||i(o))&&a("reentry",o)},melee(o,l,c){let u=sn.addVectors(o.worldPos,l.worldPos).multiplyScalar(.5).addScaledVector(o.worldUp,.8);e.burst(u,16760928,c?70:40,c?22:16,.8,.5,20),e.burst(u,16777215,12,10,1.4,.2),(i(o)||i(l))&&(r.play(c?"melee_heavy":"melee",o.isPlayer||l.isPlayer?{}:{pos:u.clone()}),(o.isPlayer||l.isPlayer)&&r.duck("high",.06)),o.isPlayer&&(t.hud.pop(c?"OVERDRIVE SLAM!":"SCRAP!","#ffb340"),s.shake=.6,t.haptic(70,255)),l.isPlayer&&(s.shake=.8,t.haptic(90,255))},dash(o){o.isPlayer&&(r.play("dash"),t.haptic(30,140)),e.burst(o.worldPos,12578815,14,8,.6,.3)},driftStart(o){o.isPlayer&&r.play("drift_start")},driftLevel(o,l){o.isPlayer&&(r.play("tick"+l),t.haptic(12+l*8,120+l*40))},wall(o,l,c){i(o)&&(pn.r.crossVectors(o.worldFwd,o.worldUp),e.burst(sn.copy(o.worldPos).addScaledVector(pn.r,l*1.1).addScaledVector(o.worldUp,.5),16765056,Math.min(30,4+c),9,.5,.35,20)),o.isPlayer&&(r.play("wall",{vol:he(c/30,.2,1),pan:l*.6}),t.haptic(20+Math.min(60,c*2),160),c>15&&(s.shake=.35))},launch(o){(o.isPlayer||i(o))&&a("jump",o)},capsule(o,l){i(o)&&e.burst(o.worldPos,s.cup.pal.a,24,9,.7,.5)},fire(o,l){i(o)&&a(l==="plasma"?"plasma_fire":l==="emp"?"zap":"trap_lay",o)},shieldUp(o){(o.isPlayer||i(o))&&a("shield_up",o)},surge(o){i(o)&&(e.burst(o.worldPos,16747034,60,12,1,.4),a("surge",o)),o.isPlayer&&r.duck("surge",Math.max(.5,o.boostT-.3))},empBlast(o,l,c){s.items.addRing(sn.copy(o.worldPos).addScaledVector(o.worldUp,.6),c?10775551:12159999,Math.min(l,40),c?.9:.5),e.burst(o.worldPos,13676799,c?120:60,c?30:18,1,.6),i(o)&&a("emp",o),(o.isPlayer||i(o))&&r.duck("high",.1),o.isPlayer&&(s.shake=.4,t.haptic(90,200))},empField(o){r.play("emp",{pos:o.mesh.position.clone(),vol:.7})},beam(o,l){let c=sn.copy(o.worldPos).addScaledVector(o.worldUp,1).clone(),u=l?l.worldPos.clone().addScaledVector(l.worldUp,1):c.clone().addScaledVector(o.worldFwd,100);s.items.addBeam(c,u,10466559),a("laser",o)},explode(o,l){e.burst(o,l,80,14,1,.55,8),r.play("explode",{pos:o.clone()}),o.distanceTo(s.player.worldPos)<20&&r.duck("high",.06)},scramble(){t.hud.glitch(2.5)}}}var te={A:96,B:97,X:99,Y:100,L1:102,R1:103,L2:104,R2:105,LS:106,RS:107,START:108,SELECT:109,MODE:110,UP:19,DOWN:20,LEFT:21,RIGHT:22,CENTER:23,ENTER:66,ESC:111},Ac=class{constructor(t){this.game=t,this.state={steer:0,throttle:0,brake:0,drift:!1,lookBack:!1},this.edges={item:!1,melee:!1,fuse:!1,drift:!1,camera:!1,pause:!1},this.keys=new Set,this.pad={keys:new Set,axes:[0,0,0,0,0,0,0,0],active:!1,lastT:0},this.touch={steer:0,accel:!1,brake:!1,drift:!1,held:new Map},this.tilt=0,this.onNav=null,this.lastDevice="touch",this._navRepeat={},this._bind()}_bind(){window.addEventListener("keydown",t=>{if(t.repeat)return;this.keys.add(t.code),this.lastDevice="keys";let e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"ok",Space:"ok",Escape:"back",Backspace:"back"}[t.code];e&&this._nav(e,t),(t.code==="KeyK"||t.code==="KeyE")&&(this.edges.item=!0),(t.code==="KeyL"||t.code==="KeyQ")&&(this.edges.melee=!0),t.code==="KeyF"&&(this.edges.fuse=!0),t.code==="KeyC"&&(this.edges.camera=!0),t.code==="KeyP"&&(this.edges.pause=!0),(t.code==="Space"||t.code==="ShiftLeft"||t.code==="KeyJ")&&(this.edges.drift=!0)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),window.NCR_padKey=(t,e)=>{this.pad.active=!0,this.lastDevice="pad",e?(this.pad.keys.add(t),this._padEdge(t)):this.pad.keys.delete(t)},window.NCR_padAxes=t=>{this.pad.active=!0,this.lastDevice="pad";let e=this.pad.axes;this.pad.axes=t,this._axisNav(t[6],e[6],"left","right"),this._axisNav(t[7],e[7],"up","down"),this._axisNav(t[0],e[0],"left","right",.6),this._axisNav(t[1],e[1],"up","down",.6),t[4]>.5&&e[4]<=.5&&this.pad.keys.add("LT"),t[4]<.4&&this.pad.keys.delete("LT")},window.addEventListener("deviceorientation",t=>{if(t.gamma==null)return;let e=screen.orientation&&screen.orientation.angle||window.orientation||0,i=Math.abs(e)===90?t.beta*(e===90?1:-1):t.gamma;this.tilt=he(i/22,-1,1)})}_padEdge(t){let e=this.game;switch(t){case te.L1:case te.X:this.edges.item=!0;break;case te.B:this.edges.melee=!0;break;case te.Y:this.edges.fuse=!0;break;case te.R1:this.edges.drift=!0;break;case te.RS:case te.SELECT:this.edges.camera=!0;break;case te.START:this._nav("start");break}let i={[te.UP]:"up",[te.DOWN]:"down",[te.LEFT]:"left",[te.RIGHT]:"right",[te.A]:"ok",[te.CENTER]:"ok",[te.ENTER]:"ok",[te.B]:"back",[te.ESC]:"back"}[t];i&&this._nav(i),t===te.L2&&this._nav("prev"),t===te.R2&&this._nav("next")}_axisNav(t,e,i,n,r=.5){t<-r&&!(e<-r)&&this._nav(i),t>r&&!(e>r)&&this._nav(n)}_nav(t,e){this.onNav&&this.onNav(t,e?"key":"pad")&&e&&e.preventDefault()}pollGamepads(){let t=navigator.getGamepads?navigator.getGamepads():[],e=t&&[...t].find(u=>u&&u.connected);if(!e)return;let i=u=>e.buttons[u]&&(e.buttons[u].pressed||e.buttons[u].value>.5),n=this._gpPrev||[],r=e.buttons.map((u,h)=>i(h)),a=u=>r[u]&&!n[u];(r.some(u=>u)||Math.abs(e.axes[0])>.3)&&(this.pad.active=!0,this.lastDevice="pad");let o={0:te.A,1:te.B,2:te.X,3:te.Y,4:te.L1,5:te.R1,8:te.SELECT,9:te.START,11:te.RS,12:te.UP,13:te.DOWN,14:te.LEFT,15:te.RIGHT};for(let u in o)a(+u)&&(this.pad.keys.add(o[u]),this._padEdge(o[u])),!r[+u]&&n[+u]&&this.pad.keys.delete(o[u]);let l=[e.axes[0]||0,e.axes[1]||0,e.axes[2]||0,e.axes[3]||0,e.buttons[6]?e.buttons[6].value:0,e.buttons[7]?e.buttons[7].value:0,0,0],c=this.pad.axes;this._axisNav(l[0],this._gpAx0||0,"left","right",.6),this._axisNav(l[1],this._gpAx1||0,"up","down",.6),this._gpAx0=l[0],this._gpAx1=l[1],this.pad.axes=l,this._gpPrev=r}update(){this.pollGamepads();let t=this.lastDevice==="pad";t!==this._wasPad&&(this._wasPad=t,document.body.classList.toggle("pad",t));let e=this.keys,i=this.pad.keys,n=this.pad.axes,r=this.touch,a=this.state,o=this.game.settings,l=0;(e.has("ArrowLeft")||e.has("KeyA"))&&(l-=1),(e.has("ArrowRight")||e.has("KeyD"))&&(l+=1);let c=Math.abs(n[0])>.12?(n[0]-Math.sign(n[0])*.12)/.88:0;l+=c,(i.has(te.LEFT)||n[6]<-.5)&&(l-=1),(i.has(te.RIGHT)||n[6]>.5)&&(l+=1),o.steerMode==="tilt"&&this.lastDevice==="touch"?l+=this.tilt:l+=r.steer,l=he(l,-1,1),a.steer=Math.sign(l)*Math.pow(Math.abs(l),1.25);let u=Math.max(n[5]||0,i.has(te.A)||i.has(te.R2)?1:0),h=e.has("ArrowUp")||e.has("KeyW")?1:0,d=Math.max(n[4]||0,i.has(te.L2)||i.has("LT")?1:0,e.has("ArrowDown")||e.has("KeyS")?1:0,r.brake?1:0),f=Math.max(u,h,r.accel?1:0);o.autoAccel&&this.lastDevice==="touch"&&(f=1),a.throttle=d>.3?0:f,a.brake=d,a.drift=i.has(te.R1)||e.has("Space")||e.has("ShiftLeft")||e.has("KeyJ")||r.drift,a.lookBack=e.has("KeyB")||i.has(te.LS)||Math.abs(n[3]||0)>.7&&n[3]>0}applyTo(t,e){let i=this.state,n=this.edges;t.steer=i.steer,t.throttle=i.throttle,t.brake=i.brake,t.drift=i.drift,n.drift&&(t.driftPressed=!0),n.item&&(t.item=!0),n.melee&&(t.melee=!0),n.fuse&&(t.fuse=!0),e.lookBack=i.lookBack,n.camera&&(e.camMode=e.camMode==="chase"?"iso":"chase",this.game.settings.camera=e.camMode,this.game.saveSettings())}clearEdges(){for(let t in this.edges)this.edges[t]=!1}buildTouch(t){t.innerHTML=`
      <div class="tzone left" data-zone="steer"></div>
      <div class="stick"><div class="knob"></div></div>
      <div class="tbtn steerL" data-b="left">\u25C0</div>
      <div class="tbtn steerR" data-b="right">\u25B6</div>
      <div class="tbtn accel" data-b="accel"><span>GO</span></div>
      <div class="tbtn brake" data-b="brake"><span>BRAKE</span></div>
      <div class="tbtn drift" data-b="drift"><span>DRIFT</span><i class="dl"></i></div>
      <div class="tbtn item" data-b="item"><span>ITEM</span></div>
      <div class="tbtn melee" data-b="melee"><span>STRIKE</span><svg viewBox="0 0 40 40"><circle class="cd" cx="20" cy="20" r="18"/></svg></div>
      <div class="tbtn fuse" data-b="fuse"><span>FUSE</span></div>
    `,this.troot=t;let e=t.querySelector(".stick"),i=e.querySelector(".knob"),n=this.touch.held,r=(u,h)=>{let d=document.elementFromPoint(u,h);return d&&d.closest?d.closest(".tbtn"):null},a=u=>{let h=n.get(u);h&&(h.kind==="stick"&&(this.touch.steer=0,e.classList.remove("on")),h.btn&&this._btn(h.btn,!1),n.delete(u))},o=u=>{this.lastDevice="touch",this.game.audio.unlock();let h=u.clientX,d=u.clientY,f=r(h,d);f?(n.set(u.pointerId,{kind:"btn",btn:f.dataset.b}),this._btn(f.dataset.b,!0)):u.target.dataset.zone==="steer"&&this.game.settings.steerMode==="stick"&&(n.set(u.pointerId,{kind:"stick",x0:h,y0:d}),e.style.left=(this.game.settings.leftHanded?innerWidth-h:h)+"px",e.style.top=d+"px",e.classList.add("on"),i.style.transform="translate(-50%,-50%)"),u.preventDefault()},l=u=>{let h=n.get(u.pointerId);if(h){if(h.kind==="stick"){let d=Math.min(innerWidth,innerHeight)*.13,f=he((u.clientX-h.x0)/d,-1,1);this.touch.steer=Math.abs(f)<.08?0:f,i.style.transform=`translate(calc(-50% + ${f*d*(this.game.settings.leftHanded?-1:1)}px),-50%)`}else{let d=r(u.clientX,u.clientY),f=d?d.dataset.b:null;f!==h.btn&&f&&["accel","drift","brake","left","right"].includes(f)&&["accel","drift","brake","left","right"].includes(h.btn)&&(this._btn(h.btn,!1),h.btn=f,this._btn(f,!0))}u.preventDefault()}},c=u=>{a(u.pointerId),u.preventDefault()};t.addEventListener("pointerdown",o,{passive:!1}),t.addEventListener("pointermove",l,{passive:!1}),t.addEventListener("pointerup",c,{passive:!1}),t.addEventListener("pointercancel",c,{passive:!1}),t.addEventListener("contextmenu",u=>u.preventDefault()),this.applyLayout()}_btn(t,e){let i=this.touch,n=this.troot.querySelector(`[data-b="${t}"]`);switch(n&&n.classList.toggle("on",e),e&&this.game.haptic(8,60),t){case"accel":i.accel=e;break;case"brake":i.brake=e;break;case"drift":i.drift=e,e&&(this.edges.drift=!0);break;case"left":i.steer=e?-1:this._held("right")?1:0;break;case"right":i.steer=e?1:this._held("left")?-1:0;break;case"item":e&&(this.edges.item=!0);break;case"melee":e&&(this.edges.melee=!0);break;case"fuse":e&&(this.edges.fuse=!0);break}}_held(t){for(let[,e]of this.touch.held)if(e.btn===t)return!0;return!1}applyLayout(){if(!this.troot)return;let t=this.game.settings,e=this.troot;e.classList.toggle("mode-stick",t.steerMode==="stick"),e.classList.toggle("mode-buttons",t.steerMode==="buttons"),e.classList.toggle("mode-tilt",t.steerMode==="tilt"),e.classList.toggle("auto",!!t.autoAccel),e.classList.toggle("lefty",!!t.leftHanded),e.style.setProperty("--bs",(t.buttonScale||1).toFixed(2)),e.style.setProperty("--bo",(t.buttonOpacity??.55).toFixed(2))}};var Lp=`(()=>{var E=Math.PI*2,C=n=>440*Math.pow(2,(n-69)/12),p0=n=>Math.pow(10,n/20),K0=n=>20*Math.log10(Math.max(1e-12,n));function H(n){let r=n>>>0||1;return()=>{r=r+1831565813>>>0;let t=r;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var B=class{constructor(r,t){this.sr=r,this.n=Math.ceil(t*r),this.L=new Float32Array(this.n),this.R=new Float32Array(this.n)}add(r,t=1){let e=Math.min(this.n,r.n);for(let o=0;o<e;o++)this.L[o]+=r.L[o]*t,this.R[o]+=r.R[o]*t;return this}scale(r){for(let t=0;t<this.n;t++)this.L[t]*=r,this.R[t]*=r;return this}};function h0(n,r){return n<r?(n/=r,n+n-n*n-1):n>1-r?(n=(n-1)/r,n*n+n+n+1):0}var z=class{constructor(r,t="saw",e=0){this.sr=r,this.type=t,this.p=e}next(r){let t=Math.min(.49,r/this.sr),e=this.p,o;switch(this.type){case"sine":o=Math.sin(E*e);break;case"tri":o=1-4*Math.abs(e-.5);break;case"square":o=(e<.5?1:-1)+h0(e,t)-h0((e+.5)%1,t);break;default:o=2*e-1-h0(e,t)}return this.p+=t,this.p>=1&&(this.p-=1),o}},R=class{constructor(r){this.sr=r,this.ic1=0,this.ic2=0,this.set(1e3,.707)}set(r,t){r=Math.min(Math.max(r,10),this.sr*.45);let e=Math.tan(Math.PI*r/this.sr),o=1/t;this.k=o,this.a1=1/(1+e*(e+o)),this.a2=e*this.a1,this.a3=e*this.a2}run(r){let t=r-this.ic2,e=this.a1*this.ic1+this.a2*t,o=this.ic2+this.a2*this.ic1+this.a3*t;return this.ic1=2*e-this.ic1,this.ic2=2*o-this.ic2,this.lp=o,this.bp=e,this.hp=r-this.k*e-o,o}},T=n=>{let r=n*n;return n*(27+r)/(27+9*r)};function e0(n){let r=(n+1)*Math.PI/4;return[Math.cos(r),Math.sin(r)]}function P(n,r,t={}){let e=n.sr,o=Math.floor(r*e),a=t.dur||.42,s=Math.floor(a*e),M=t.f0||145,c=t.f1||46,h=t.drive||1.6,i=t.gain||1,l=0;for(let f=0;f<s;f++){let p=o+f;if(p>=n.n)break;let g=f/e,d=c+(M-c)*Math.exp(-g*(t.pitchDecay||32));l+=d/e;let k=Math.sin(E*l)*Math.exp(-g*(t.decay||7.5));k+=(Math.random()*2-1)*Math.exp(-g*900)*.35,k=T(k*h)*i,n.L[p]+=k,n.R[p]+=k}}function d0(n,r,t={}){let e=n.sr,o=Math.floor(r*e),a=Math.floor(.32*e),s=t.rnd||Math.random,M=new R(e);M.set(t.fc||1500,1.4);let c=t.gain||.7;for(let h=0;h<a;h++){let i=o+h;if(i>=n.n)break;let l=h/e,f=Math.exp(-(l-.022)*22)*(l>.022?1:0);for(let g of[0,.009,.017])l>=g&&l<g+.008&&(f=Math.max(f,Math.exp(-(l-g)*250)));M.run(s()*2-1);let p=M.bp*f*c*2.2;n.L[i]+=p*(1+(s()-.5)*.2),n.R[i]+=p*(1+(s()-.5)*.2)}}function u0(n,r,t={}){let e=n.sr,o=Math.floor(r*e),a=t.dur||.26,s=Math.floor(a*e),M=t.rnd||Math.random,c=new R(e);c.set(1800,.7);let h=new R(e);h.set(3200,1.8);let i=t.gain||.8,l=0;for(let f=0;f<s;f++){let p=o+f;if(p>=n.n)break;let g=f/e,d=M()*2-1;c.run(d),h.run(d),l+=(190+60*Math.exp(-g*40))/e;let k=Math.sin(E*l)*Math.exp(-g*28)*.8,m=T((c.hp*Math.exp(-g*(t.tail||16))*.7+h.bp*Math.exp(-g*70)*2.2+k)*1.4)*i;n.L[p]+=m,n.R[p]+=m}}function J(n,r,t={}){let e=n.sr,o=Math.floor(r*e),a=t.open?.32:.06,s=Math.floor(a*e),M=t.rnd||Math.random,c=new R(e);c.set(t.fc||8500,.8);let[h,i]=e0(t.pan||0),l=t.gain||.25;for(let f=0;f<s;f++){let p=o+f;if(p>=n.n)break;let g=f/e;c.run(M()*2-1);let d=c.hp*Math.exp(-g*(t.open?11:75))*l;n.L[p]+=d*h,n.R[p]+=d*i}}function r0(n,r,t={}){let e=n.sr,o=Math.floor(r*e),a=Math.floor(2.2*e),s=t.rnd||Math.random,M=new R(e);M.set(5200,.6);let c=t.gain||.22;for(let h=0;h<a;h++){let i=o+h;if(i>=n.n)break;let l=h/e;M.run(s()*2-1);let f=M.hp*Math.exp(-l*1.8)*c;n.L[i]+=f*(.8+.4*s()),n.R[i]+=f*(.8+.4*s())}}function W(n,r,t,e,o={}){let a=n.sr,s=Math.floor(r*a),M=o.rel||.08,c=Math.floor((t+M)*a),h=o.voices||3,i=o.detune||.12,l=[];for(let v of e)for(let _=0;_<h;_++)l.push({o:new z(a,o.wave||"saw",Math.random()),f:C(v)*Math.pow(2,(_-(h-1)/2)*i/12),pan:h>1?(_/(h-1)-.5)*(o.width??.8):0});let f=new R(a),p=new R(a),g=(o.gain||.3)/Math.sqrt(l.length),d=o.atk||.004,k=o.fc0||500,m=o.fc1||4e3,u=o.fdec||9,x=o.q||.9,w=o.drive||1,L=l.map(v=>e0(v.pan));for(let v=0;v<c;v++){let _=s+v;if(_>=n.n)break;let F=v/a,O=(F<d?F/d:1)*(F>t?Math.exp(-(F-t)/M*4):1)*(o.decay?Math.exp(-F*o.decay):1),S=o.vib?1+Math.sin(E*5.5*F)*o.vib*Math.min(1,F*3):1,b=0,y=0;for(let K=0;K<l.length;K++){let $=l[K].o.next(l[K].f*S);b+=$*L[K][0],y+=$*L[K][1]}let I=k+(m-k)*Math.exp(-F*u)+(o.fcMod?o.fcMod(F):0);(v&15)===0&&(f.set(I,x),p.set(I,x)),b=f.run(b),y=p.run(y),w>1&&(b=T(b*w)/Math.sqrt(w),y=T(y*w)/Math.sqrt(w)),n.L[_]+=b*O*g,n.R[_]+=y*O*g}}function o0(n,r,t,e,o={}){let a=n.sr,s=Math.floor(r*a),M=Math.floor((t+.02)*a),c=new z(a,"saw"),h=new z(a,o.wave2||"square"),i=new z(a,"sine"),l=new R(a),f=o.gain||.5,p=C(o.from??e),g=C(e);for(let d=0;d<M;d++){let k=s+d;if(k>=n.n)break;let m=d/a,u=g+(p-g)*Math.exp(-m*30),x=Math.min(1,m/.003)*(m>t?Math.max(0,1-(m-t)/.02):1),w=c.next(u)*.6+h.next(u*1.003)*.35;(d&15)===0&&l.set((o.fc0||300)+(o.fc1||1800)*Math.exp(-m*(o.fdec||14)),o.q||2.2),w=l.run(w),w=T(w*(o.drive||2.2))*.6+i.next(u)*(o.sub??.55),w*=x*f,n.L[k]+=w,n.R[k]+=w}}function v0(n,r,t,e,o={}){let a=n.sr,s=Math.floor(r*a),M=Math.floor((t+.03)*a),c=[-.18,-.06,.07,.19].map(u=>({o:new z(a,"saw",Math.random()),r:Math.pow(2,u/12)})),h=new z(a,"sine"),i=new R(a),l=new R(a),f=new R(a),p=o.gain||.45,g=C(e),d=C(o.from??e),k=o.growl||0,m=o.rate||8;for(let u=0;u<M;u++){let x=s+u;if(x>=n.n)break;let w=u/a,L=g+(d-g)*Math.exp(-w*18),v=0,_=0;if(c.forEach((I,K)=>{let $=I.o.next(L*I.r);K&1?_+=$:v+=$}),(u&15)===0){i.set((o.fc||700)*(1+.6*Math.sin(E*(o.lfo||.5)*(r+w))),1.2);let I=500+1600*(.5+.5*Math.sin(E*m*w+1.3));l.set(I,5),f.set(I*1.12,5)}let F=i.run((v+_)*.5);l.run(v),f.run(_);let O=F*.8+l.bp*k*1.4,S=F*.8+f.bp*k*1.4;O=T(O*(o.drive||2.6))*.55,S=T(S*(o.drive||2.6))*.55;let b=h.next(L)*(o.sub??.6),y=Math.min(1,w/.006)*(w>t?Math.max(0,1-(w-t)/.03):1)*p;n.L[x]+=(O+b)*y,n.R[x]+=(S+b)*y}}var m0={a:[800,1150,2900],e:[400,2e3,2550],i:[300,2300,3e3],o:[450,800,2830],u:[350,600,2700],w:[300,700,2400]};function a0(n,r,t,e,o,a={}){let s=n.sr,M=Math.floor(r*s),c=Math.floor((t+.05)*s),h=new z(s,"saw"),i=new z(s,"square"),l=[new R(s),new R(s),new R(s)],f=m0[o[0]],p=m0[o[1]||o[0]],g=a.gain||.5,d=C(e),k=C(a.from??e),[m,u]=e0(a.pan||0);for(let x=0;x<c;x++){let w=M+x;if(w>=n.n)break;let L=x/s,v=Math.min(1,L/Math.max(.05,t*.8)),_=d+(k-d)*Math.exp(-L*20),F=h.next(_)*.7+i.next(_*.5)*.3;(x&15)===0&&l.forEach((b,y)=>b.set(f[y]+(p[y]-f[y])*v,9-y*2));let O=0;l.forEach((b,y)=>{b.run(F),O+=b.bp*[1,.7,.35][y]});let S=Math.min(1,L/.015)*(L>t?Math.max(0,1-(L-t)/.05):1);O=T(O*2.4)*S*g,n.L[w]+=O*m,n.R[w]+=O*u}}function g0(n,r,t,e={}){let o=n.sr,a=Math.floor(r*o),s=e.dur||.09,M=Math.floor((s+.04)*o),c=e.rnd||Math.random,h=t.map(g=>{let d=Math.max(2,Math.round(o/C(g))),k=new Float32Array(d);for(let m=0;m<d;m++)k[m]=c()*2-1;return{d:k,L:d,i:0,last:0}}),i=new R(o),l=(e.gain||.35)/Math.sqrt(t.length),[f,p]=e0(e.pan??.35);for(let g=0;g<M;g++){let d=a+g;if(d>=n.n)break;let k=g/o,m=0;for(let w=0;w<h.length;w++){let L=h[w];if(g<w*.004*o)continue;let v=L.d[L.i],_=L.d[(L.i+1)%L.L],F=(v+_)*.5*(e.mute?.985:.996);L.d[L.i]=F,L.i=(L.i+1)%L.L,m+=v}(g&15)===0&&i.set(e.wah??900+1400*Math.min(1,k/s),3.5),i.run(m);let u=Math.min(1,k/.002)*(k>s?Math.max(0,1-(k-s)/.04):1),x=T((i.bp*1.6+m*.25)*1.5)*u*l;n.L[d]+=x*f,n.R[d]+=x*p}}function t0(n,r,t,e={}){let o=n.sr,a=Math.floor(r*o),s=Math.floor(t*o),M=e.rnd||Math.random,c=new R(o),h=new R(o),i=e.gain||.3;for(let l=0;l<s;l++){let f=a+l;if(f>=n.n)break;let p=l/s;if((l&15)===0){let d=300*Math.pow(40,p);c.set(d,2),h.set(d*1.07,2)}c.run(M()*2-1),h.run(M()*2-1);let g=p*p*i;n.L[f]+=c.bp*g*2,n.R[f]+=h.bp*g*2}}function Z(n,r,t,e,o,a={}){let s=n.sr,M=Math.floor(r*s),c=Math.floor(t*s),h=0,i=a.gain||.5;for(let l=0;l<c;l++){let f=M+l;if(f>=n.n)break;let p=l/c,g=e*Math.pow(o/e,(a.lin,p));h+=g/s;let d=Math.min(1,l/(s*(a.atk||.005)))*(a.hold?1:Math.pow(1-p,a.curve||1.5)),k=Math.sin(E*h)*d*i;n.L[f]+=k,n.R[f]+=k}}function j(n,r,t={}){let e=n.sr,o=t.depth??.75,a=t.rel||.16,s=.004,M=new Float32Array(n.n).fill(1);for(let c of r){let h=Math.floor(c*e);for(let i=0;i<Math.floor(a*2.2*e);i++){let l=h+i;if(t.loopN)l%=t.loopN;else if(l>=n.n)break;let f=i/e,p=f<s?f/s:1,g=1-o*p*Math.exp(-Math.max(0,f-s)/a*2.2);g<M[l]&&(M[l]=g)}}for(let c=0;c<n.n;c++)n.L[c]*=M[c],n.R[c]*=M[c]}function s0(n,r,t=.707,e=!1){let o=new R(n.sr),a=new R(n.sr);if(o.set(r,t),a.set(r,t),e)for(let s=0;s<n.n;s++)o.run(n.L[s]),a.run(n.R[s]);for(let s=0;s<n.n;s++)o.run(n.L[s]),a.run(n.R[s]),n.L[s]=o.hp,n.R[s]=a.hp}function b0(n,r=140){let t=n.n,e=t-Math.floor(r*.001*n.sr),o=t-Math.floor(.0015*n.sr),a=t-1,s=1/0;for(let i=e;i<o;i++){let l=(i+1)%t;if(n.L[i]<=0==n.L[l]<=0)continue;let f=Math.abs(n.L[l])+Math.abs(n.R[l])*1.5+Math.abs(n.R[l]-n.R[i])*2+Math.abs(n.L[l]-n.L[i])+(n.R[i]<=0==n.R[l]<=0?.02:0);f<s&&(s=f,a=l)}let M=a%t,c=new Float32Array(t),h=new Float32Array(t);for(let i=0;i<t;i++)c[i]=n.L[(M+i)%t],h[i]=n.R[(M+i)%t];return n.L=c,n.R=h,(t-M)%t}function S0(n,r,t=.9){let e=new R(n.sr),o=new R(n.sr);for(let a=0;a<n.n;a++){if((a&31)===0){let s=r(a/n.sr);e.set(s,t),o.set(s,t)}n.L[a]=e.run(n.L[a]),n.R[a]=o.run(n.R[a])}}function w0(n,r,t,e){let o=Math.floor(r*n.sr),a=new B(n.sr,n.n/n.sr);for(let s=0;s<n.n;s++){let M=s>=o?a.R[s-o]*t+n.L[s-o]:0,c=s>=o?a.L[s-o]*t+n.R[s-o]*.6:0;a.L[s]=M,a.R[s]=c}for(let s=0;s<n.n;s++)n.L[s]+=a.L[s]*e,n.R[s]+=a.R[s]*e}function V(n,r=.8,t=.4,e=.18){let o=n.sr,a=o/44100,s=[1116,1188,1277,1356,1422,1491].map(c=>Math.floor(c*a*r)),M=[556,441,341].map(c=>Math.floor(c*a));for(let[c,h]of[[n.L,0],[n.R,23]]){let i=new Float32Array(n.n);for(let l of s){let f=l+h,p=new Float32Array(f),g=0,d=0;for(let k=0;k<n.n;k++){let m=p[g];d=m*(1-t)+d*t,p[g]=c[k]*.015+d*.84,g=(g+1)%f,i[k]+=m}}for(let l of M){let f=l+h,p=new Float32Array(f),g=0;for(let d=0;d<n.n;d++){let k=p[g],m=i[d];i[d]=-m+k,p[g]=m+k*.5,g=(g+1)%f}}for(let l=0;l<n.n;l++)c[l]+=i[l]*e}}function Q(n,r,t){let e=Math.pow(2,r-1),o=0,a=0;for(let s=0;s<n.n;s++)s%t===0&&(o=Math.round(n.L[s]*e)/e,a=Math.round(n.R[s]*e)/e),n.L[s]=o,n.R[s]=a}function A0(n,r){let t=new B(n.sr,r/n.sr);t.n=r,t.L=new Float32Array(r),t.R=new Float32Array(r);for(let e=0;e<n.n;e++){let o=e%r;t.L[o]+=n.L[e],t.R[o]+=n.R[e]}return t}function L0(n,r,t,e,o,a){let s=new Float32Array(n.length),M=0,c=0,h=0,i=0;for(let l=0;l<n.length;l++){let f=r*n[l]+t*M+e*c-o*h-a*i;c=M,M=n[l],i=h,h=f,s[l]=f}return s}function y0(n,r){let t=1681.974450955533,e=3.999843853973347,o=.7071752369554196,a=Math.pow(10,e/40),s=E*t/r,M=Math.sin(s)/(2*o),c=Math.cos(s),h=Math.sqrt(a),i=a+1-(a-1)*c+2*h*M,l=L0(n,a*(a+1+(a-1)*c+2*h*M)/i,-2*a*(a-1+(a+1)*c)/i,a*(a+1+(a-1)*c-2*h*M)/i,2*(a-1-(a+1)*c)/i,(a+1-(a-1)*c-2*h*M)/i);return t=38.13547087602444,o=.5003270373238773,s=E*t/r,M=Math.sin(s)/(2*o),c=Math.cos(s),i=1+M,L0(l,(1+c)/2/i,-(1+c)/i,(1+c)/2/i,-2*c/i,(1-M)/i)}function l0(n,r=!0){let t=n.sr,e=f=>{if(!r)return f;let p=new Float32Array(f.length*2);return p.set(f),p.set(f,f.length),p},o=y0(e(n.L),t),a=y0(e(n.R),t),s=Math.round(.4*t),M=Math.round(.1*t),c=[];for(let f=r?o.length/2-s:0;f+s<=o.length;f+=M){if(r&&f<0)continue;let p=0,g=0;for(let d=f;d<f+s;d++)p+=o[d]*o[d],g+=a[d]*a[d];c.push((p+g)/s)}let h=f=>-.691+10*Math.log10(Math.max(f,1e-12)),i=c.filter(f=>h(f)>-70);if(!i.length)return-70;let l=h(i.reduce((f,p)=>f+p,0)/i.length)-10;return i=i.filter(f=>h(f)>l),h(i.reduce((f,p)=>f+p,0)/i.length)}var n0=97,B0=24,V0=(()=>{let n=new Float32Array(n0),r=(n0-1)/2;for(let t=0;t<n0;t++){let e=(t-r)/4,o=E*t/(n0-1),a=.42-.5*Math.cos(o)+.08*Math.cos(2*o);n[t]=(e===0?1:Math.sin(Math.PI*e)/(Math.PI*e))*a}return n})();function R0(n,r){let t=0,e=n.length,o=V0;for(let a=0;a<e;a++){let s=Math.abs(n[a]);s>t&&(t=s);let M=!1;for(let c=8;c<16;c++){let h=a-c;if(h<0&&(h=r?h+e:0),Math.abs(n[h])>t*.45){M=!0;break}}if(M)for(let c=1;c<4;c++){let h=0;for(let i=0;i<B0;i++){let l=a-i;if(l<0){if(!r)continue;l+=e}h+=n[l]*o[c+4*i]}Math.abs(h)>t&&(t=Math.abs(h))}}return t}function M0(n,r=!0){return K0(Math.max(R0(n.L,r),R0(n.R,r)))}function N0(n,r=-1.2,t=60,e=!0){let o=n.n,a=p0(r),s=Math.round(.0015*n.sr),M=new Float32Array(o);for(let f=0;f<o;f++)M[f]=Math.max(Math.abs(n.L[f]),Math.abs(n.R[f]))*1.06;let c=new Float32Array(o);for(let f=0;f<o;f++)c[f]=M[f]>a?a/M[f]:1;let h=new Float32Array(o).fill(1);for(let f=0;f<o;f++){let p=c[f];if(!(p>=1))for(let g=0;g<=s;g++){let d=f-g;if(d<0){if(!e)break;d+=o}p<h[d]&&(h[d]=p)}}let i=Math.exp(-1/(t*.001*n.sr)),l=1;for(let f=0;f<(e?2:1);f++)for(let p=0;p<o;p++)l=h[p]<l?h[p]:l*i+(1-i)*Math.min(1,h[p]),f===(e?1:0)&&(n.L[p]*=l,n.R[p]*=l)}function _0(n,r=-14,t=-1,e=!0){let o=l0(n,e),a;for(let s=0;s<4;s++){if(n.scale(p0(r-o)),a=M0(n,e),a<=t-.05){o=r;break}if(N0(n,t-.4-s*.2,50,e),o=l0(n,e),Math.abs(o-r)<.1&&(a=M0(n,e),a<=t))break}return{lufs:l0(n,e),tp:M0(n,e)}}function q0(n){let r=n.n,t=Math.max(Math.abs(n.L[0]-n.L[r-1]),Math.abs(n.R[0]-n.R[r-1])),e=0;for(let a=1;a<r;a+=7)e+=Math.abs(n.L[a]-n.L[a-1]);e/=r/7;let o=n.L[r-1]<=0!=n.L[0]<=0;return{jump:t,avg:e,ratio:t/Math.max(1e-9,e),zeroCrossing:o,startAbs:Math.max(Math.abs(n.L[0]),Math.abs(n.R[0]))}}function c0(n,r=1,t=8){let e=Math.floor(r*.001*n.sr),o=Math.floor(t*.001*n.sr);for(let a=0;a<e;a++)n.L[a]*=a/e,n.R[a]*=a/e;for(let a=0;a<o;a++){let s=n.n-1-a;n.L[s]*=a/o,n.R[s]*=a/o}}function F0(n,r=-3){let t=0;for(let e=0;e<n.n;e++)t=Math.max(t,Math.abs(n.L[e]),Math.abs(n.R[e]));t>0&&n.scale(p0(r)/t)}var i0=172,P0=129;var C0=122,k0=1920/i0,x0=2.5,N=()=>new Promise(n=>setTimeout(n,0));function D0(n){return[n,n+3,n+7,n+10]}function T0(n){let r=[];if(n===0){let t=60/P0;for(let e=0;e<24;e++)r.push(e*t)}else{let t=60/i0/4;for(let e=0;e<8;e++)for(let o of e%2?[0,2,11]:[0,2,10])r.push((e*16+o)*t)}return r}async function z0(n,r,t){let e=H(r.id*977+n*131+7),o=Math.round(k0*t),a=()=>new B(t,k0+x0),s=a(),M=a(),c=a(),h=a(),i=33+((r.root-33)%12+12)%12;if(n===0){let u=60/P0,x=u/4,w=[0,0,8,8,10,7];for(let S=0;S<24;S++){let b=S*u;P(s,b,{gain:1,f0:150,f1:48,decay:6.5,drive:1.9}),(S%4===1||S%4===3)&&d0(s,b,{rnd:e,gain:.75}),J(s,b+u/2,{open:!0,gain:.16,rnd:e,pan:.15});for(let y of[1,3])J(s,b+y*x+x*.12,{gain:.07,rnd:e,pan:-.3})}await N();let L=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1];for(let S=0;S<6;S++){let b=i+w[S];for(let y=0;y<16;y++)if(L[y]){let I=y%4===2||y%4===3?12:0;o0(M,(S*16+y)*x,x*.8,b+I,{gain:.42,fc0:260,fc1:2400,fdec:18,drive:3.2,sub:.45})}}await N();let v=[0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0],_=[0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0];for(let S=0;S<6;S++){let b=D0(i+24+w[S]);for(let y=0;y<16;y++){let I=(S*16+y)*x;v[y]&&W(c,I,x*1.4,b,{gain:.32,voices:3,detune:.16,fc0:500,fc1:900,fdec:12,fcMod:K=>2600*((I+K)/k0),q:1.6,rel:.05}),_[y]&&g0(c,I,[b[0]+12,b[1]+12,b[2]+12],{mute:!0,dur:x*.55,gain:.34,rnd:e,pan:.45,wah:700+1600*(y%8/8)})}}await N();let F=a();for(let[S,b]of[[1,[[0,2,"ao"],[2.5,1.2,"oa"]]],[5,[[0,1,"ae"],[1.5,.5,"wa"],[2.5,1.4,"ao"]]]])for(let[y,I,K]of b)a0(F,(S*4+y)*u,I*u*.9,i+24+w[S]+(y>2?7:3),K,{gain:.42,from:i+24+w[S],pan:-.1});w0(F,u*.75,.35,.3),c.add(F),V(c,.7,.5,.12);let O=T0(0);return j(M,O,{depth:.85,rel:.14}),j(c,O,{depth:.65,rel:.18}),f0([[s,1],[M,.9],[c,.75]],o,t)}let l=60/i0,f=l/4,p="K.K.S..s.sK.S..s",g="K.K.S..s.s.KS.s.";for(let u=0;u<8;u++){let x=u===7?"K.K.S..sSsSsSSSS":u%2?g:p;for(let w=0;w<16;w++){let L=(u*16+w)*f+(w%2?f*.06:0),v=x[w];v==="K"&&P(s,L,{gain:1,f0:170,f1:52,decay:9,drive:2.2,dur:.3}),v==="S"&&u0(s,L,{gain:u===7&&w>8?.45+.04*(w-8):.85,rnd:e}),v==="s"&&u0(s,L,{gain:.3,rnd:e,tail:30}),w%2===0?J(s,L,{gain:w%4===2?.14:.09,rnd:e,pan:.25,fc:7e3}):n===2&&J(s,L,{gain:.06,rnd:e,pan:-.25})}}n===2&&r0(s,0,{rnd:e,gain:.25}),await N();let d=n===1?[[0,2,0],[2,1,8],[3,1,7],[4,2,0],[6,1,10],[7,1,7]]:[[0,1,0],[1,1,3],[2,1,8],[3,1,7],[4,1,0],[5,1,3],[6,1,10],[7,1,12]],k=null;for(let[u,x,w]of d){let L=i+12+w;for(let v=0;v<x*2;v++){let _=(u*16+v*8)*f;v0(M,_,f*7.6,L,{gain:n===2?.5:.46,growl:n===2?.9:.7,rate:i0/60*(v%2?2:1),fc:650+250*(v%3),drive:n===2?3.4:2.8,sub:n===2?.85:.6,from:v===0&&k!==null?k:L,lfo:.25})}k=L,await N()}for(let u=0;u<8;u+=2)W(c,u*16*f,32*f*.95,D0(i+24+d.find(x=>x[0]<=u&&u<x[0]+x[1]||x[0]===u)?.[2]||0).slice(0,3),{gain:.12,voices:2,detune:.2,fc0:700,fc1:900,fdec:1,atk:.4,rel:.4});if(n===2){let u=[0,0,12,0,10,0,7,8,0,0,12,15,12,10,7,3];for(let x=0;x<8;x++)for(let w=0;w<16;w+=2){let L=i+36+u[x%2*8+w/2]+(x>=4?5:0)*0;W(c,(x*16+w)*f,f*1.7,[L,L+7,L+12],{gain:.26,voices:2,detune:.1,wave:"saw",fc0:1800,fc1:4200,fdec:6,drive:5,q:1.1,rel:.04})}await N(),t0(h,96*f,32*f,{rnd:e,gain:.32}),Z(h,0,1.4,120,40,{gain:.5})}else for(let u of[1,3,5,7])a0(c,(u*16+12)*f,f*3.5,i+24,"wo",{gain:.32,from:i+19});V(c,.75,.45,.14);let m=T0(n);return j(M,m,{depth:.6,rel:.12}),j(c,m,{depth:.45,rel:.15}),f0([[s,1],[M,.85],[c,n===2?.8:.7],[h,1]],o,t)}async function f0(n,r,t,e=!0){let o=new B(t,n[0][0].n/t);for(let[c,h]of n)o.add(c,h);await N();let a=e?A0(o,r):o;s0(a,35,.7,e);let s=_0(a,-14,-1,e),M=0;return e?M=b0(a):c0(a,1,40),{buf:a,zeroSec:M/t,stats:{...s,seam:e?q0(a):null,sec:a.n/t}}}async function I0(n){let r=H(4242),t=60/C0,e=t/4,o=8,a=o*4*t,s=Math.round(a*n),M=()=>new B(n,a+x0),c=M(),h=M(),i=M(),l=38,f=[0,0,5,5,8,8,7,7];for(let u=0;u<o*4;u++){let x=u*t;P(c,x,{gain:.95,f0:140,f1:46,decay:6,drive:1.8}),(u%4===1||u%4===3)&&d0(c,x,{rnd:r,gain:.65}),J(c,x+t/2,{open:!0,gain:.13,rnd:r})}await N();let p=[[0,0],[3,12],[6,10],[8,0],[10,7],[11,10],[14,12]];for(let u=0;u<o;u++)for(let[x,w]of p)o0(h,(u*16+x)*e,e*1.3,l+f[u]+w,{gain:.45,fc0:300,fc1:3e3,fdec:22,drive:2.6,sub:.4,from:l+f[u]+w-(x===0?2:0)});await N();let g=[0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0];for(let u=0;u<o;u++){let x=D0(l+24+f[u]);for(let w=0;w<16;w++){let L=(u*16+w)*e;(w===3||w===11)&&W(i,L,e*2,x,{gain:.3,voices:3,detune:.17,fc0:700,fc1:1400,fdec:10,q:1.4}),g[w]&&g0(i,L,[x[0]+12,x[2]+12,x[3]+12],{mute:!0,dur:e*.5,gain:.32,rnd:r,pan:.5})}}let d=M();for(let u of[1,3,5,7])a0(d,(u*4+2)*t,t*1.6,l+24+f[u]+7,u===7?"eo":"ao",{gain:.42,from:l+24+f[u]+3});w0(d,t*.75,.3,.3),i.add(d),V(i,.75,.5,.14);let k=[];for(let u=0;u<o*4;u++)k.push(u*t);j(h,k,{depth:.8,rel:.15}),j(i,k,{depth:.6,rel:.2});let m=new B(n,a+x0);return m.add(h,.9).add(i,.8),S0(m,u=>700+5500*(.5-.5*Math.cos(E*(u%a)/a)),1.1),f0([[c,1],[m,1]],s,n)}async function O0(n,r,t){let e=33+((t.root-33)%12+12)%12,o=new B(r,n?4.2:3.6),a=H(n?11:13);if(n){let s=.4918032786885246,M=(c,h,i)=>W(o,c,h,[i,i+4,i+7,i+12],{gain:.42,voices:3,detune:.09,fc0:600,fc1:3800,fdec:7,atk:.02,vib:h>1?.004:0,drive:1.5,rel:.15});[[0,.22],[.5,.22],[.75,.22]].forEach(([c])=>{M(c*s,.22*s*2,e+24),P(o,c*s,{gain:.9})}),M(1*s,s*4,e+29),r0(o,s,{rnd:a,gain:.3}),[0,3,5,7,10,12,15,17].forEach((c,h)=>o0(o,s*(1+h*.25),s*.2,e+12+c,{gain:.5,fc0:900,fc1:5e3,fdec:30,drive:3,sub:.25})),P(o,s*5.2,{gain:1}),r0(o,s*5.2,{rnd:a,gain:.3}),M(s*5.2,s*1.6,e+24),V(o,.85,.4,.2)}else[24,22,20,19,17,15,14,12].forEach((s,M)=>W(o,M*.13,.12,[e+24+s],{gain:.32,voices:1,wave:"square",fc0:4e3,fc1:4e3,fdec:1,rel:.02})),Q(o,5,5),Z(o,1.05,1.6,95,34,{gain:.8,curve:1.2}),t0(o,1.05,.5,{rnd:a,gain:.12}),V(o,.8,.5,.12);return f0([[o,1]],0,r,!1)}var D=(n,r)=>new B(n,r);function G(n,r,t,e,o,a,s){let M=n.sr,c=new R(M);c.set(o,2.5);let h=Math.floor(r*M),i=Math.floor(t*M);for(let l=0;l<i;l++){let f=h+l;if(f>=n.n)break;let p=l/i,g=e*(1-p)/M,d=s()<g?(s()*2-1)*4:0;c.run(d+(s()*2-1)*.02);let k=T(c.bp*2)*a,m=s()*.6-.3;n.L[f]+=k*(1-m),n.R[f]+=k*(1+m)}}function q(n,r,t,e,o,a,s,M,c=i=>Math.sin(Math.PI*i),h=!0){let i=n.sr,l=new R(i),f=new R(i),p=Math.floor(r*i),g=Math.floor(t*i);for(let d=0;d<g;d++){let k=p+d;if(k>=n.n)break;let m=d/g;if((d&15)===0){let x=e*Math.pow(o/e,m);l.set(x,a),f.set(x*1.05,a)}l.run(M()*2-1),f.run(h?M()*2-1:0);let u=c(m)*s;n.L[k]+=l.bp*u*2,n.R[k]+=(h?f.bp:l.bp)*u*2}}function X(n,r,t,e,o,a){let s=n.sr,M=Math.floor(r*s),c=Math.floor(Math.min(1.5,6/e)*s),h=t.map(()=>a());for(let i=0;i<c;i++){let l=M+i;if(l>=n.n)break;let f=i/s,p=0;t.forEach((g,d)=>{h[d]+=g/s,p+=Math.sin(E*h[d])*Math.exp(-f*e*(1+d*.35))/(1+d*.4)}),p*=o,n.L[l]+=p,n.R[l]+=p}}function A(n,r,t,e,o,a,s,M=0,c=.003){let h=n.sr,i=new z(h,a),l=Math.floor(r*h),f=Math.floor(t*h);for(let p=0;p<f;p++){let g=l+p;if(g>=n.n)break;let d=p/f,k=p/h,m=i.next(e*Math.pow(o/e,d))*s*Math.min(1,k/c)*(M?Math.exp(-k*M):1-d);n.L[g]+=m,n.R[g]+=m}}function U(n,r,t,e,o=30){X(n,r,[t,t*2.76,t*5.4,t*8.93],o,e,()=>.3)}var Y={ui_click:(n,r)=>{let t=D(n,.12);return U(t,0,2600,.35,55),A(t,0,.004,6e3,6e3,"square",.15),t},ui_move:(n,r)=>{let t=D(n,.08);return U(t,0,3400,.2,80),t},ui_ok:(n,r)=>{let t=D(n,.3);return U(t,0,1760,.35,22),U(t,.06,2637,.35,22),t},ui_back:(n,r)=>{let t=D(n,.3);return U(t,0,2349,.3,25),U(t,.06,1568,.3,25),t},unlock:(n,r)=>{let t=D(n,1.4);return[1046,1318,1568,2093,2637].forEach((e,o)=>U(t,o*.07,e,.28,5)),V(t,.8,.3,.25),t},cd_3:(n,r)=>{let t=D(n,.35);return A(t,0,.28,784,784,"square",.22,9),A(t,0,.28,1568,1568,"sine",.18,12),t},cd_2:(n,r)=>{let t=D(n,.35);return A(t,0,.28,988,988,"square",.22,9),A(t,0,.28,1976,1976,"sine",.18,12),t},cd_1:(n,r)=>{let t=D(n,.35);return A(t,0,.28,1175,1175,"square",.22,9),A(t,0,.28,2349,2349,"sine",.18,12),t},cd_go:(n,r)=>{let t=D(n,1.3);return[1568,1976,2349,3136].forEach(e=>A(t,0,.6,e,e,"square",.09,5)),P(t,0,{gain:.9,f0:120,f1:40,decay:4}),Z(t,.02,1.1,110,36,{gain:.85,curve:1.3}),Q(t,10,2),t},lap:(n,r)=>{let t=D(n,.6);return U(t,0,1318,.35,12),U(t,.12,1976,.35,10),t},final_lap:(n,r)=>{let t=D(n,2);return[1318,1568,1976,2637].forEach((e,o)=>U(t,o*.09,e,.3,6)),t0(t,0,1.6,{rnd:r,gain:.35}),P(t,1.6,{gain:.9}),Z(t,1.6,.4,90,40,{gain:.6}),t},finish:(n,r)=>{let t=D(n,1.2);return[1046,1318,1568].forEach((e,o)=>U(t,o*.05,e,.3,4)),t},melee:(n,r)=>{let t=D(n,.9);X(t,0,[612,1347,2210,2950,3870],14,.55,r),q(t,0,.18,2400,900,1.2,.5,r,e=>Math.exp(-e*5)),P(t,0,{gain:1,f0:110,f1:38,decay:9,drive:2.5}),G(t,.01,.6,2200,3e3,.45,r);for(let e=0;e<t.n;e++)t.L[e]=T(t.L[e]*1.6),t.R[e]=T(t.R[e]*1.6);return t},melee_heavy:(n,r)=>{let t=Y.melee(n,r),e=D(n,.9);return Z(e,0,.6,70,34,{gain:.8}),G(e,0,.8,3200,2600,.5,r),t.add(e)},plasma_fire:(n,r)=>{let t=D(n,.4);return A(t,0,.09,3400,700,"sine",.7,0,.001),A(t,0,.12,1700,350,"square",.25,0,.001),q(t,0,.05,4e3,2e3,1,.5,r,e=>1-e),P(t,0,{gain:.4,f0:200,f1:80,decay:30,dur:.1}),t},plasma_impact:(n,r)=>{let t=D(n,1.6);q(t,0,.08,6e3,800,.6,1.1,r,a=>Math.exp(-a*4)),P(t,0,{gain:1,f0:160,f1:45,decay:12,drive:3});for(let a=0;a<Math.floor(.12*n);a++)t.L[a]=T(t.L[a]*2.4)*.7,t.R[a]=T(t.R[a]*2.4)*.7;let e=D(n,1.6),o=e.n;for(let a=0;a<90;a++){let s=.04+Math.pow(r(),1.8)*1.4,M=2e3+r()*6500,c=D(n,.05);A(c,0,.02+r()*.03,M,M*(.7+r()*.2),"sine",.22*(1-s/1.5),60);let h=r()*2-1,i=Math.floor(s*n);for(let l=0;l<c.n&&i+l<o;l++)e.L[i+l]+=c.L[l]*(1-h*.8),e.R[i+l]+=c.L[l]*(1+h*.8)}return Q(e,9,2),t.add(e)},explode:(n,r)=>Y.plasma_impact(n,r),trap_lay:(n,r)=>{let t=D(n,.18);return A(t,0,.05,180,120,"sine",.8,40,.001),A(t,0,.004,2500,2500,"square",.3),t},trap_trigger:(n,r)=>{let t=D(n,.55);for(let e=0;e<14;e++){let o=e*.03+r()*.01,a=[220,440,880,1760,3520][Math.floor(r()*5)];A(t,o,.025,a,a*(r()<.5?2:.5),"square",.35*(1-e/16))}return q(t,0,.3,3e3,1200,1.5,.5,r,e=>Math.exp(-e*3)),P(t,0,{gain:.6,f0:140,f1:50,decay:14}),Q(t,4,6),t},shield_up:(n,r)=>{let t=D(n,1),e=[2093,2637,3136,4186,5274];for(let o=0;o<t.n;o++){let a=o/n,s=Math.min(1,a/.35)*Math.exp(-Math.max(0,a-.35)*5),M=0;e.forEach((c,h)=>M+=Math.sin(E*c*a+h)*(1+.5*Math.sin(E*(7+h)*a))/(h+1)),t.L[o]+=M*s*.16,t.R[o]+=M*s*.16*(1+.2*Math.sin(E*3*a))}return q(t,0,.4,600,5e3,2,.25,r,o=>o),V(t,.7,.2,.25),t},shield_block:(n,r)=>{let t=D(n,.9);return A(t,0,.28,4400,2100,"sine",.55,9,.001),X(t,0,[2793,3951,5587,7040],22,.4,r),q(t,0,.06,7e3,4e3,.8,.6,r,e=>1-e),q(t,.08,.5,3200,380,1.3,.45,r),t},surge:(n,r)=>{let t=D(n,1.7);q(t,0,.28,250,1600,1.6,.6,r,c=>c*c);let e=new z(n,"saw"),o=new z(n,"sine"),a=new R(n);for(let c=0;c<Math.floor(1.2*n);c++){let h=c/n,i=Math.floor(.22*n)+c;if(i>=t.n)break;let l=Math.min(1,h/.02)*Math.exp(-h*2.6);(c&15)===0&&a.set(900+2500*Math.exp(-h*4),.9);let f=T((a.run(e.next(75+30*Math.exp(-h*6))+(r()*2-1)*.8)+o.next(2200+1200*Math.min(1,h*3))*.25)*2.2)*l*.6;t.L[i]+=f,t.R[i]+=f}let s=new R(n),M=new R(n);s.set(2600,.7),M.set(2900,.7);for(let c=Math.floor(.2*n);c<t.n;c++){let h=c/n-.2,i=Math.min(1,h/.05)*Math.exp(-h*1.8)*.4;s.run(r()*2-1),M.run(r()*2-1),t.L[c]+=s.hp*i,t.R[c]+=M.hp*i}return t},emp:(n,r)=>{let t=D(n,1.2);q(t,0,.03,8e3,1500,.5,1.4,r,o=>1-o),P(t,0,{gain:.8,f0:200,f1:50,decay:10,drive:3});let e=new z(n,"saw");for(let o=0;o<t.n;o++){let a=o/n,s=T(e.next(118+40*Math.sin(E*31*a))*3)*Math.exp(-a*3.5)*.25*(r()<.85?1:0);t.L[o]+=s,t.R[o]+=s}return G(t,0,1.1,2600,3300,.5,r),t},zap:(n,r)=>{let t=D(n,.4);return G(t,0,.35,3e3,2800,.6,r),A(t,0,.2,1400,300,"saw",.2),t},laser:(n,r)=>{let t=D(n,.7);return A(t,0,.6,2600,900,"square",.3,4,.001),A(t,0,.6,5200,1800,"sine",.25,5,.001),G(t,0,.5,1500,3500,.3,r),t},jump:(n,r)=>{let t=D(n,1.1);return q(t,0,1,400,2200,1.4,.5,r,e=>Math.sin(Math.PI*Math.sqrt(e))*(1-e*.5)),A(t,0,.4,180,520,"sine",.25),t},land:(n,r)=>{let t=D(n,.9);P(t,0,{gain:1,f0:95,f1:34,decay:6,drive:2}),X(t,0,[221,371,593,947,1480],9,.35,r);let e=new z(n,"saw"),o=new R(n);o.set(400,1);for(let a=0;a<Math.floor(.4*n);a++){let s=a/n,M=o.run(e.next(100))*Math.exp(-s*9)*.35;t.L[a]+=M,t.R[a]+=M}return t},reentry:(n,r)=>{let t=D(n,1);[523,784,1046,1568].forEach((o,a)=>U(t,a*.05,o,.22,10));let e=Y.land(n,r);return t.add(e,.8)},derez:(n,r)=>{let t=D(n,.9);return[1760,1318,988,740,554,415].forEach((e,o)=>A(t,o*.07,.07,e,e*.9,"square",.25)),G(t,0,.7,2e3,2400,.35,r),Q(t,5,4),t},pad:(n,r)=>{let t=D(n,.5);return q(t,0,.4,900,3500,1.5,.45,r,e=>Math.exp(-e*3)),A(t,0,.25,600,1500,"saw",.15),t},boost:(n,r)=>{let t=D(n,.6);return q(t,0,.55,500,2800,1.4,.5,r,e=>Math.exp(-e*2.5)),t},slip:(n,r)=>{let t=D(n,.6);return q(t,0,.5,2500,700,1,.35,r),t},dash:(n,r)=>{let t=D(n,.35);return q(t,0,.3,800,3e3,2,.6,r,e=>Math.sin(Math.PI*e)),t},wall:(n,r)=>{let t=D(n,.35);return q(t,0,.3,2600,1900,3,.55,r,e=>Math.exp(-e*4)),G(t,0,.25,2500,3500,.3,r),t},bump:(n,r)=>{let t=D(n,.35);return P(t,0,{gain:.6,f0:130,f1:60,decay:18}),X(t,0,[700,1530,2410],25,.25,r),t},drift_start:(n,r)=>{let t=D(n,.4);return q(t,0,.35,1600,1300,4,.4,r,e=>Math.exp(-e*3)),t},tick1:(n,r)=>{let t=D(n,.15);return A(t,0,.08,1046,1046,"square",.25,30),t},tick2:(n,r)=>{let t=D(n,.15);return A(t,0,.08,1397,1397,"square",.25,30),A(t,.04,.08,1760,1760,"square",.2,30),t},tick3:(n,r)=>{let t=D(n,.25);return[1760,2217,2637].forEach((e,o)=>A(t,o*.035,.09,e,e,"square",.22,25)),t},pickup:(n,r)=>{let t=D(n,.5);return[1318,1760,2637].forEach((e,o)=>U(t,o*.045,e,.3,14)),t},fuse:(n,r)=>{let t=D(n,.9);return q(t,0,.5,400,4e3,3,.3,r,e=>e),[880,1108,1318,1760,2217].forEach((e,o)=>U(t,.25+o*.05,e,.25,6)),t},shoot_seek:(n,r)=>Y.trap_lay(n,r),elec_pulse:(n,r)=>{let t=D(n,.4),e=new z(n,"saw"),o=new R(n);o.set(1600,2);for(let a=0;a<t.n;a++){let s=a/n,M=Math.min(1,s/.01)*Math.exp(-s*9),c=T(o.run(e.next(100)+(r()*2-1)*.3)*3)*M*.4*(.6+.4*Math.sin(E*50*s));t.L[a]+=c,t.R[a]+=c}return G(t,0,.3,800,3e3,.2,r),t},crackle1:(n,r)=>{let t=D(n,.09);return q(t,0,.05,1800,900,1.5,.9,r,e=>Math.exp(-e*6),!1),P(t,0,{gain:.35,f0:200,f1:90,decay:50,dur:.06}),t},crackle2:(n,r)=>{let t=D(n,.09);return q(t,0,.035,2600,1200,1.5,.9,r,e=>Math.exp(-e*6),!1),t},crackle3:(n,r)=>{let t=D(n,.12);return q(t,0,.07,1200,600,1.2,.9,r,e=>Math.exp(-e*5),!1),P(t,0,{gain:.4,f0:160,f1:70,decay:40,dur:.08}),t},pneumatic:(n,r)=>{let t=D(n,.35);return q(t,.02,.25,5e3,3e3,.7,.4,r,e=>Math.exp(-e*4)),X(t,0,[310,520,870],30,.4,r),t}},G0=Object.keys(Y);async function U0(n,r=null){let t={},e=0;for(let o of r||G0){let a=H(1e3+e*37),s=Y[o](n,a);s0(s,35,.7),c0(s,.5,12),F0(s,-2),t[o]=s,++e%5===0&&await new Promise(M=>setTimeout(M,0))}return t}self.onmessage=async n=>{let{id:r,job:t,sr:e,cup:o,only:a}=n.data;try{if(t==="bank"){let M=await U0(e,a),c={},h=[];for(let i in M)c[i]={L:M[i].L,R:M[i].R},h.push(M[i].L.buffer,M[i].R.buffer);self.postMessage({id:r,bank:c},h);return}let s;t==="menu"?s=await I0(e):t==="win"||t==="lose"?s=await O0(t==="win",e,o):s=await z0(+t.slice(4),o,e),self.postMessage({id:r,L:s.buf.L,R:s.buf.R,zeroSec:s.zeroSec||0,stats:s.stats},[s.buf.L.buffer,s.buf.R.buffer])}catch(s){self.postMessage({id:r,error:String(s&&s.stack||s)})}};})();
`;var Ye=Math.PI*2,Kn=s=>440*Math.pow(2,(s-69)/12),Lu=s=>Math.pow(10,s/20),By=s=>20*Math.log10(Math.max(1e-12,s));function Ir(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var zi=class{constructor(t,e){this.sr=t,this.n=Math.ceil(e*t),this.L=new Float32Array(this.n),this.R=new Float32Array(this.n)}add(t,e=1){let i=Math.min(this.n,t.n);for(let n=0;n<i;n++)this.L[n]+=t.L[n]*e,this.R[n]+=t.R[n]*e;return this}scale(t){for(let e=0;e<this.n;e++)this.L[e]*=t,this.R[e]*=t;return this}};function Cu(s,t){return s<t?(s/=t,s+s-s*s-1):s>1-t?(s=(s-1)/t,s*s+s+s+1):0}var oi=class{constructor(t,e="saw",i=0){this.sr=t,this.type=e,this.p=i}next(t){let e=Math.min(.49,t/this.sr),i=this.p,n;switch(this.type){case"sine":n=Math.sin(Ye*i);break;case"tri":n=1-4*Math.abs(i-.5);break;case"square":n=(i<.5?1:-1)+Cu(i,e)-Cu((i+.5)%1,e);break;default:n=2*i-1-Cu(i,e)}return this.p+=e,this.p>=1&&(this.p-=1),n}},pe=class{constructor(t){this.sr=t,this.ic1=0,this.ic2=0,this.set(1e3,.707)}set(t,e){t=Math.min(Math.max(t,10),this.sr*.45);let i=Math.tan(Math.PI*t/this.sr),n=1/e;this.k=n,this.a1=1/(1+i*(i+n)),this.a2=i*this.a1,this.a3=i*this.a2}run(t){let e=t-this.ic2,i=this.a1*this.ic1+this.a2*e,n=this.ic2+this.a2*this.ic1+this.a3*e;return this.ic1=2*i-this.ic1,this.ic2=2*n-this.ic2,this.lp=n,this.bp=i,this.hp=t-this.k*i-n,n}},Qe=s=>{let t=s*s;return s*(27+t)/(27+9*t)};function Cc(s){let t=(s+1)*Math.PI/4;return[Math.cos(t),Math.sin(t)]}function ti(s,t,e={}){let i=s.sr,n=Math.floor(t*i),r=e.dur||.42,a=Math.floor(r*i),o=e.f0||145,l=e.f1||46,c=e.drive||1.6,u=e.gain||1,h=0;for(let d=0;d<a;d++){let f=n+d;if(f>=s.n)break;let p=d/i,x=l+(o-l)*Math.exp(-p*(e.pitchDecay||32));h+=x/i;let g=Math.sin(Ye*h)*Math.exp(-p*(e.decay||7.5));g+=(Math.random()*2-1)*Math.exp(-p*900)*.35,g=Qe(g*c)*u,s.L[f]+=g,s.R[f]+=g}}function Du(s,t,e={}){let i=s.sr,n=Math.floor(t*i),r=Math.floor(.32*i),a=e.rnd||Math.random,o=new pe(i);o.set(e.fc||1500,1.4);let l=e.gain||.7;for(let c=0;c<r;c++){let u=n+c;if(u>=s.n)break;let h=c/i,d=Math.exp(-(h-.022)*22)*(h>.022?1:0);for(let p of[0,.009,.017])h>=p&&h<p+.008&&(d=Math.max(d,Math.exp(-(h-p)*250)));o.run(a()*2-1);let f=o.bp*d*l*2.2;s.L[u]+=f*(1+(a()-.5)*.2),s.R[u]+=f*(1+(a()-.5)*.2)}}function Nu(s,t,e={}){let i=s.sr,n=Math.floor(t*i),r=e.dur||.26,a=Math.floor(r*i),o=e.rnd||Math.random,l=new pe(i);l.set(1800,.7);let c=new pe(i);c.set(3200,1.8);let u=e.gain||.8,h=0;for(let d=0;d<a;d++){let f=n+d;if(f>=s.n)break;let p=d/i,x=o()*2-1;l.run(x),c.run(x),h+=(190+60*Math.exp(-p*40))/i;let g=Math.sin(Ye*h)*Math.exp(-p*28)*.8,m=Qe((l.hp*Math.exp(-p*(e.tail||16))*.7+c.bp*Math.exp(-p*70)*2.2+g)*1.4)*u;s.L[f]+=m,s.R[f]+=m}}function Lr(s,t,e={}){let i=s.sr,n=Math.floor(t*i),r=e.open?.32:.06,a=Math.floor(r*i),o=e.rnd||Math.random,l=new pe(i);l.set(e.fc||8500,.8);let[c,u]=Cc(e.pan||0),h=e.gain||.25;for(let d=0;d<a;d++){let f=n+d;if(f>=s.n)break;let p=d/i;l.run(o()*2-1);let x=l.hp*Math.exp(-p*(e.open?11:75))*h;s.L[f]+=x*c,s.R[f]+=x*u}}function Pc(s,t,e={}){let i=s.sr,n=Math.floor(t*i),r=Math.floor(2.2*i),a=e.rnd||Math.random,o=new pe(i);o.set(5200,.6);let l=e.gain||.22;for(let c=0;c<r;c++){let u=n+c;if(u>=s.n)break;let h=c/i;o.run(a()*2-1);let d=o.hp*Math.exp(-h*1.8)*l;s.L[u]+=d*(.8+.4*a()),s.R[u]+=d*(.8+.4*a())}}function Rs(s,t,e,i,n={}){let r=s.sr,a=Math.floor(t*r),o=n.rel||.08,l=Math.floor((e+o)*r),c=n.voices||3,u=n.detune||.12,h=[];for(let w of i)for(let y=0;y<c;y++)h.push({o:new oi(r,n.wave||"saw",Math.random()),f:Kn(w)*Math.pow(2,(y-(c-1)/2)*u/12),pan:c>1?(y/(c-1)-.5)*(n.width??.8):0});let d=new pe(r),f=new pe(r),p=(n.gain||.3)/Math.sqrt(h.length),x=n.atk||.004,g=n.fc0||500,m=n.fc1||4e3,v=n.fdec||9,M=n.q||.9,_=n.drive||1,T=h.map(w=>Cc(w.pan));for(let w=0;w<l;w++){let y=a+w;if(y>=s.n)break;let b=w/r,C=(b<x?b/x:1)*(b>e?Math.exp(-(b-e)/o*4):1)*(n.decay?Math.exp(-b*n.decay):1),A=n.vib?1+Math.sin(Ye*5.5*b)*n.vib*Math.min(1,b*3):1,I=0,N=0;for(let L=0;L<h.length;L++){let O=h[L].o.next(h[L].f*A);I+=O*T[L][0],N+=O*T[L][1]}let k=g+(m-g)*Math.exp(-b*v)+(n.fcMod?n.fcMod(b):0);(w&15)===0&&(d.set(k,M),f.set(k,M)),I=d.run(I),N=f.run(N),_>1&&(I=Qe(I*_)/Math.sqrt(_),N=Qe(N*_)/Math.sqrt(_)),s.L[y]+=I*C*p,s.R[y]+=N*C*p}}function Ic(s,t,e,i,n={}){let r=s.sr,a=Math.floor(t*r),o=Math.floor((e+.02)*r),l=new oi(r,"saw"),c=new oi(r,n.wave2||"square"),u=new oi(r,"sine"),h=new pe(r),d=n.gain||.5,f=Kn(n.from??i),p=Kn(i);for(let x=0;x<o;x++){let g=a+x;if(g>=s.n)break;let m=x/r,v=p+(f-p)*Math.exp(-m*30),M=Math.min(1,m/.003)*(m>e?Math.max(0,1-(m-e)/.02):1),_=l.next(v)*.6+c.next(v*1.003)*.35;(x&15)===0&&h.set((n.fc0||300)+(n.fc1||1800)*Math.exp(-m*(n.fdec||14)),n.q||2.2),_=h.run(_),_=Qe(_*(n.drive||2.2))*.6+u.next(v)*(n.sub??.55),_*=M*d,s.L[g]+=_,s.R[g]+=_}}function kp(s,t,e,i,n={}){let r=s.sr,a=Math.floor(t*r),o=Math.floor((e+.03)*r),l=[-.18,-.06,.07,.19].map(v=>({o:new oi(r,"saw",Math.random()),r:Math.pow(2,v/12)})),c=new oi(r,"sine"),u=new pe(r),h=new pe(r),d=new pe(r),f=n.gain||.45,p=Kn(i),x=Kn(n.from??i),g=n.growl||0,m=n.rate||8;for(let v=0;v<o;v++){let M=a+v;if(M>=s.n)break;let _=v/r,T=p+(x-p)*Math.exp(-_*18),w=0,y=0;if(l.forEach((k,L)=>{let O=k.o.next(T*k.r);L&1?y+=O:w+=O}),(v&15)===0){u.set((n.fc||700)*(1+.6*Math.sin(Ye*(n.lfo||.5)*(t+_))),1.2);let k=500+1600*(.5+.5*Math.sin(Ye*m*_+1.3));h.set(k,5),d.set(k*1.12,5)}let b=u.run((w+y)*.5);h.run(w),d.run(y);let C=b*.8+h.bp*g*1.4,A=b*.8+d.bp*g*1.4;C=Qe(C*(n.drive||2.6))*.55,A=Qe(A*(n.drive||2.6))*.55;let I=c.next(T)*(n.sub??.6),N=Math.min(1,_/.006)*(_>e?Math.max(0,1-(_-e)/.03):1)*f;s.L[M]+=(C+I)*N,s.R[M]+=(A+I)*N}}var Dp={a:[800,1150,2900],e:[400,2e3,2550],i:[300,2300,3e3],o:[450,800,2830],u:[350,600,2700],w:[300,700,2400]};function Lc(s,t,e,i,n,r={}){let a=s.sr,o=Math.floor(t*a),l=Math.floor((e+.05)*a),c=new oi(a,"saw"),u=new oi(a,"square"),h=[new pe(a),new pe(a),new pe(a)],d=Dp[n[0]],f=Dp[n[1]||n[0]],p=r.gain||.5,x=Kn(i),g=Kn(r.from??i),[m,v]=Cc(r.pan||0);for(let M=0;M<l;M++){let _=o+M;if(_>=s.n)break;let T=M/a,w=Math.min(1,T/Math.max(.05,e*.8)),y=x+(g-x)*Math.exp(-T*20),b=c.next(y)*.7+u.next(y*.5)*.3;(M&15)===0&&h.forEach((I,N)=>I.set(d[N]+(f[N]-d[N])*w,9-N*2));let C=0;h.forEach((I,N)=>{I.run(b),C+=I.bp*[1,.7,.35][N]});let A=Math.min(1,T/.015)*(T>e?Math.max(0,1-(T-e)/.05):1);C=Qe(C*2.4)*A*p,s.L[_]+=C*m,s.R[_]+=C*v}}function Uu(s,t,e,i={}){let n=s.sr,r=Math.floor(t*n),a=i.dur||.09,o=Math.floor((a+.04)*n),l=i.rnd||Math.random,c=e.map(p=>{let x=Math.max(2,Math.round(n/Kn(p))),g=new Float32Array(x);for(let m=0;m<x;m++)g[m]=l()*2-1;return{d:g,L:x,i:0,last:0}}),u=new pe(n),h=(i.gain||.35)/Math.sqrt(e.length),[d,f]=Cc(i.pan??.35);for(let p=0;p<o;p++){let x=r+p;if(x>=s.n)break;let g=p/n,m=0;for(let _=0;_<c.length;_++){let T=c[_];if(p<_*.004*n)continue;let w=T.d[T.i],y=T.d[(T.i+1)%T.L],b=(w+y)*.5*(i.mute?.985:.996);T.d[T.i]=b,T.i=(T.i+1)%T.L,m+=w}(p&15)===0&&u.set(i.wah??900+1400*Math.min(1,g/a),3.5),u.run(m);let v=Math.min(1,g/.002)*(g>a?Math.max(0,1-(g-a)/.04):1),M=Qe((u.bp*1.6+m*.25)*1.5)*v*h;s.L[x]+=M*d,s.R[x]+=M*f}}function Ya(s,t,e,i={}){let n=s.sr,r=Math.floor(t*n),a=Math.floor(e*n),o=i.rnd||Math.random,l=new pe(n),c=new pe(n),u=i.gain||.3;for(let h=0;h<a;h++){let d=r+h;if(d>=s.n)break;let f=h/a;if((h&15)===0){let x=300*Math.pow(40,f);l.set(x,2),c.set(x*1.07,2)}l.run(o()*2-1),c.run(o()*2-1);let p=f*f*u;s.L[d]+=l.bp*p*2,s.R[d]+=c.bp*p*2}}function Cs(s,t,e,i,n,r={}){let a=s.sr,o=Math.floor(t*a),l=Math.floor(e*a),c=0,u=r.gain||.5;for(let h=0;h<l;h++){let d=o+h;if(d>=s.n)break;let f=h/l,p=i*Math.pow(n/i,(r.lin,f));c+=p/a;let x=Math.min(1,h/(a*(r.atk||.005)))*(r.hold?1:Math.pow(1-f,r.curve||1.5)),g=Math.sin(Ye*c)*x*u;s.L[d]+=g,s.R[d]+=g}}function Ps(s,t,e={}){let i=s.sr,n=e.depth??.75,r=e.rel||.16,a=.004,o=new Float32Array(s.n).fill(1);for(let l of t){let c=Math.floor(l*i);for(let u=0;u<Math.floor(r*2.2*i);u++){let h=c+u;if(e.loopN)h%=e.loopN;else if(h>=s.n)break;let d=u/i,f=d<a?d/a:1,p=1-n*f*Math.exp(-Math.max(0,d-a)/r*2.2);p<o[h]&&(o[h]=p)}}for(let l=0;l<s.n;l++)s.L[l]*=o[l],s.R[l]*=o[l]}function Dc(s,t,e=.707,i=!1){let n=new pe(s.sr),r=new pe(s.sr);if(n.set(t,e),r.set(t,e),i)for(let a=0;a<s.n;a++)n.run(s.L[a]),r.run(s.R[a]);for(let a=0;a<s.n;a++)n.run(s.L[a]),r.run(s.R[a]),s.L[a]=n.hp,s.R[a]=r.hp}function Op(s,t=140){let e=s.n,i=e-Math.floor(t*.001*s.sr),n=e-Math.floor(.0015*s.sr),r=e-1,a=1/0;for(let u=i;u<n;u++){let h=(u+1)%e;if(s.L[u]<=0==s.L[h]<=0)continue;let d=Math.abs(s.L[h])+Math.abs(s.R[h])*1.5+Math.abs(s.R[h]-s.R[u])*2+Math.abs(s.L[h]-s.L[u])+(s.R[u]<=0==s.R[h]<=0?.02:0);d<a&&(a=d,r=h)}let o=r%e,l=new Float32Array(e),c=new Float32Array(e);for(let u=0;u<e;u++)l[u]=s.L[(o+u)%e],c[u]=s.R[(o+u)%e];return s.L=l,s.R=c,(e-o)%e}function Bp(s,t,e=.9){let i=new pe(s.sr),n=new pe(s.sr);for(let r=0;r<s.n;r++){if((r&31)===0){let a=t(r/s.sr);i.set(a,e),n.set(a,e)}s.L[r]=i.run(s.L[r]),s.R[r]=n.run(s.R[r])}}function Fu(s,t,e,i){let n=Math.floor(t*s.sr),r=new zi(s.sr,s.n/s.sr);for(let a=0;a<s.n;a++){let o=a>=n?r.R[a-n]*e+s.L[a-n]:0,l=a>=n?r.L[a-n]*e+s.R[a-n]*.6:0;r.L[a]=o,r.R[a]=l}for(let a=0;a<s.n;a++)s.L[a]+=r.L[a]*i,s.R[a]+=r.R[a]*i}function Cn(s,t=.8,e=.4,i=.18){let n=s.sr,r=n/44100,a=[1116,1188,1277,1356,1422,1491].map(l=>Math.floor(l*r*t)),o=[556,441,341].map(l=>Math.floor(l*r));for(let[l,c]of[[s.L,0],[s.R,23]]){let u=new Float32Array(s.n);for(let h of a){let d=h+c,f=new Float32Array(d),p=0,x=0;for(let g=0;g<s.n;g++){let m=f[p];x=m*(1-e)+x*e,f[p]=l[g]*.015+x*.84,p=(p+1)%d,u[g]+=m}}for(let h of o){let d=h+c,f=new Float32Array(d),p=0;for(let x=0;x<s.n;x++){let g=f[p],m=u[x];u[x]=-m+g,f[p]=m+g*.5,p=(p+1)%d}}for(let h=0;h<s.n;h++)l[h]+=u[h]*i}}function Is(s,t,e){let i=Math.pow(2,t-1),n=0,r=0;for(let a=0;a<s.n;a++)a%e===0&&(n=Math.round(s.L[a]*i)/i,r=Math.round(s.R[a]*i)/i),s.L[a]=n,s.R[a]=r}function Hp(s,t){let e=new zi(s.sr,t/s.sr);e.n=t,e.L=new Float32Array(t),e.R=new Float32Array(t);for(let i=0;i<s.n;i++){let n=i%t;e.L[n]+=s.L[i],e.R[n]+=s.R[i]}return e}function Np(s,t,e,i,n,r){let a=new Float32Array(s.length),o=0,l=0,c=0,u=0;for(let h=0;h<s.length;h++){let d=t*s[h]+e*o+i*l-n*c-r*u;l=o,o=s[h],u=c,c=d,a[h]=d}return a}function Up(s,t){let e=1681.974450955533,i=3.999843853973347,n=.7071752369554196,r=Math.pow(10,i/40),a=Ye*e/t,o=Math.sin(a)/(2*n),l=Math.cos(a),c=Math.sqrt(r),u=r+1-(r-1)*l+2*c*o,h=Np(s,r*(r+1+(r-1)*l+2*c*o)/u,-2*r*(r-1+(r+1)*l)/u,r*(r+1+(r-1)*l-2*c*o)/u,2*(r-1-(r+1)*l)/u,(r+1-(r-1)*l-2*c*o)/u);return e=38.13547087602444,n=.5003270373238773,a=Ye*e/t,o=Math.sin(a)/(2*n),l=Math.cos(a),u=1+o,Np(h,(1+l)/2/u,-(1+l)/u,(1+l)/2/u,-2*l/u,(1-o)/u)}function Pu(s,t=!0){let e=s.sr,i=d=>{if(!t)return d;let f=new Float32Array(d.length*2);return f.set(d),f.set(d,d.length),f},n=Up(i(s.L),e),r=Up(i(s.R),e),a=Math.round(.4*e),o=Math.round(.1*e),l=[];for(let d=t?n.length/2-a:0;d+a<=n.length;d+=o){if(t&&d<0)continue;let f=0,p=0;for(let x=d;x<d+a;x++)f+=n[x]*n[x],p+=r[x]*r[x];l.push((f+p)/a)}let c=d=>-.691+10*Math.log10(Math.max(d,1e-12)),u=l.filter(d=>c(d)>-70);if(!u.length)return-70;let h=c(u.reduce((d,f)=>d+f,0)/u.length)-10;return u=u.filter(d=>c(d)>h),c(u.reduce((d,f)=>d+f,0)/u.length)}var Rc=97,Hy=24,zy=(()=>{let s=new Float32Array(Rc),t=(Rc-1)/2;for(let e=0;e<Rc;e++){let i=(e-t)/4,n=Ye*e/(Rc-1),r=.42-.5*Math.cos(n)+.08*Math.cos(2*n);s[e]=(i===0?1:Math.sin(Math.PI*i)/(Math.PI*i))*r}return s})();function Fp(s,t){let e=0,i=s.length,n=zy;for(let r=0;r<i;r++){let a=Math.abs(s[r]);a>e&&(e=a);let o=!1;for(let l=8;l<16;l++){let c=r-l;if(c<0&&(c=t?c+i:0),Math.abs(s[c])>e*.45){o=!0;break}}if(o)for(let l=1;l<4;l++){let c=0;for(let u=0;u<Hy;u++){let h=r-u;if(h<0){if(!t)continue;h+=i}c+=s[h]*n[l+4*u]}Math.abs(c)>e&&(e=Math.abs(c))}}return e}function Iu(s,t=!0){return By(Math.max(Fp(s.L,t),Fp(s.R,t)))}function Vy(s,t=-1.2,e=60,i=!0){let n=s.n,r=Lu(t),a=Math.round(.0015*s.sr),o=new Float32Array(n);for(let d=0;d<n;d++)o[d]=Math.max(Math.abs(s.L[d]),Math.abs(s.R[d]))*1.06;let l=new Float32Array(n);for(let d=0;d<n;d++)l[d]=o[d]>r?r/o[d]:1;let c=new Float32Array(n).fill(1);for(let d=0;d<n;d++){let f=l[d];if(!(f>=1))for(let p=0;p<=a;p++){let x=d-p;if(x<0){if(!i)break;x+=n}f<c[x]&&(c[x]=f)}}let u=Math.exp(-1/(e*.001*s.sr)),h=1;for(let d=0;d<(i?2:1);d++)for(let f=0;f<n;f++)h=c[f]<h?c[f]:h*u+(1-u)*Math.min(1,c[f]),d===(i?1:0)&&(s.L[f]*=h,s.R[f]*=h)}function zp(s,t=-14,e=-1,i=!0){let n=Pu(s,i),r;for(let a=0;a<4;a++){if(s.scale(Lu(t-n)),r=Iu(s,i),r<=e-.05){n=t;break}if(Vy(s,e-.4-a*.2,50,i),n=Pu(s,i),Math.abs(n-t)<.1&&(r=Iu(s,i),r<=e))break}return{lufs:Pu(s,i),tp:Iu(s,i)}}function Vp(s){let t=s.n,e=Math.max(Math.abs(s.L[0]-s.L[t-1]),Math.abs(s.R[0]-s.R[t-1])),i=0;for(let r=1;r<t;r+=7)i+=Math.abs(s.L[r]-s.L[r-1]);i/=t/7;let n=s.L[t-1]<=0!=s.L[0]<=0;return{jump:e,avg:i,ratio:e/Math.max(1e-9,i),zeroCrossing:n,startAbs:Math.max(Math.abs(s.L[0]),Math.abs(s.R[0]))}}function Nc(s,t=1,e=8){let i=Math.floor(t*.001*s.sr),n=Math.floor(e*.001*s.sr);for(let r=0;r<i;r++)s.L[r]*=r/i,s.R[r]*=r/i;for(let r=0;r<n;r++){let a=s.n-1-r;s.L[a]*=r/n,s.R[a]*=r/n}}function Gp(s,t=-3){let e=0;for(let i=0;i<s.n;i++)e=Math.max(e,Math.abs(s.L[i]),Math.abs(s.R[i]));e>0&&s.scale(Lu(t)/e)}var In=172,Ka=129,qp=174,Gy=122,Ls=1920/In,ku=2.5,Pn=()=>new Promise(s=>setTimeout(s,0));function Ou(s){return[s,s+3,s+7,s+10]}function Uc(s){let t=[];if(s===0){let e=60/Ka;for(let i=0;i<24;i++)t.push(i*e)}else{let e=60/In/4;for(let i=0;i<8;i++)for(let n of i%2?[0,2,11]:[0,2,10])t.push((i*16+n)*e)}return t}async function Xp(s,t,e){let i=Ir(t.id*977+s*131+7),n=Math.round(Ls*e),r=()=>new zi(e,Ls+ku),a=r(),o=r(),l=r(),c=r(),u=33+((t.root-33)%12+12)%12;if(s===0){let v=60/Ka,M=v/4,_=[0,0,8,8,10,7];for(let A=0;A<24;A++){let I=A*v;ti(a,I,{gain:1,f0:150,f1:48,decay:6.5,drive:1.9}),(A%4===1||A%4===3)&&Du(a,I,{rnd:i,gain:.75}),Lr(a,I+v/2,{open:!0,gain:.16,rnd:i,pan:.15});for(let N of[1,3])Lr(a,I+N*M+M*.12,{gain:.07,rnd:i,pan:-.3})}await Pn();let T=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1];for(let A=0;A<6;A++){let I=u+_[A];for(let N=0;N<16;N++)if(T[N]){let k=N%4===2||N%4===3?12:0;Ic(o,(A*16+N)*M,M*.8,I+k,{gain:.42,fc0:260,fc1:2400,fdec:18,drive:3.2,sub:.45})}}await Pn();let w=[0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0],y=[0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0];for(let A=0;A<6;A++){let I=Ou(u+24+_[A]);for(let N=0;N<16;N++){let k=(A*16+N)*M;w[N]&&Rs(l,k,M*1.4,I,{gain:.32,voices:3,detune:.16,fc0:500,fc1:900,fdec:12,fcMod:L=>2600*((k+L)/Ls),q:1.6,rel:.05}),y[N]&&Uu(l,k,[I[0]+12,I[1]+12,I[2]+12],{mute:!0,dur:M*.55,gain:.34,rnd:i,pan:.45,wah:700+1600*(N%8/8)})}}await Pn();let b=r();for(let[A,I]of[[1,[[0,2,"ao"],[2.5,1.2,"oa"]]],[5,[[0,1,"ae"],[1.5,.5,"wa"],[2.5,1.4,"ao"]]]])for(let[N,k,L]of I)Lc(b,(A*4+N)*v,k*v*.9,u+24+_[A]+(N>2?7:3),L,{gain:.42,from:u+24+_[A],pan:-.1});Fu(b,v*.75,.35,.3),l.add(b),Cn(l,.7,.5,.12);let C=Uc(0);return Ps(o,C,{depth:.85,rel:.14}),Ps(l,C,{depth:.65,rel:.18}),Fc([[a,1],[o,.9],[l,.75]],n,e)}let h=60/In,d=h/4,f="K.K.S..s.sK.S..s",p="K.K.S..s.s.KS.s.";for(let v=0;v<8;v++){let M=v===7?"K.K.S..sSsSsSSSS":v%2?p:f;for(let _=0;_<16;_++){let T=(v*16+_)*d+(_%2?d*.06:0),w=M[_];w==="K"&&ti(a,T,{gain:1,f0:170,f1:52,decay:9,drive:2.2,dur:.3}),w==="S"&&Nu(a,T,{gain:v===7&&_>8?.45+.04*(_-8):.85,rnd:i}),w==="s"&&Nu(a,T,{gain:.3,rnd:i,tail:30}),_%2===0?Lr(a,T,{gain:_%4===2?.14:.09,rnd:i,pan:.25,fc:7e3}):s===2&&Lr(a,T,{gain:.06,rnd:i,pan:-.25})}}s===2&&Pc(a,0,{rnd:i,gain:.25}),await Pn();let x=s===1?[[0,2,0],[2,1,8],[3,1,7],[4,2,0],[6,1,10],[7,1,7]]:[[0,1,0],[1,1,3],[2,1,8],[3,1,7],[4,1,0],[5,1,3],[6,1,10],[7,1,12]],g=null;for(let[v,M,_]of x){let T=u+12+_;for(let w=0;w<M*2;w++){let y=(v*16+w*8)*d;kp(o,y,d*7.6,T,{gain:s===2?.5:.46,growl:s===2?.9:.7,rate:In/60*(w%2?2:1),fc:650+250*(w%3),drive:s===2?3.4:2.8,sub:s===2?.85:.6,from:w===0&&g!==null?g:T,lfo:.25})}g=T,await Pn()}for(let v=0;v<8;v+=2)Rs(l,v*16*d,32*d*.95,Ou(u+24+x.find(M=>M[0]<=v&&v<M[0]+M[1]||M[0]===v)?.[2]||0).slice(0,3),{gain:.12,voices:2,detune:.2,fc0:700,fc1:900,fdec:1,atk:.4,rel:.4});if(s===2){let v=[0,0,12,0,10,0,7,8,0,0,12,15,12,10,7,3];for(let M=0;M<8;M++)for(let _=0;_<16;_+=2){let T=u+36+v[M%2*8+_/2]+(M>=4?5:0)*0;Rs(l,(M*16+_)*d,d*1.7,[T,T+7,T+12],{gain:.26,voices:2,detune:.1,wave:"saw",fc0:1800,fc1:4200,fdec:6,drive:5,q:1.1,rel:.04})}await Pn(),Ya(c,96*d,32*d,{rnd:i,gain:.32}),Cs(c,0,1.4,120,40,{gain:.5})}else for(let v of[1,3,5,7])Lc(l,(v*16+12)*d,d*3.5,u+24,"wo",{gain:.32,from:u+19});Cn(l,.75,.45,.14);let m=Uc(s);return Ps(o,m,{depth:.6,rel:.12}),Ps(l,m,{depth:.45,rel:.15}),Fc([[a,1],[o,.85],[l,s===2?.8:.7],[c,1]],n,e)}async function Fc(s,t,e,i=!0){let n=new zi(e,s[0][0].n/e);for(let[l,c]of s)n.add(l,c);await Pn();let r=i?Hp(n,t):n;Dc(r,35,.7,i);let a=zp(r,-14,-1,i),o=0;return i?o=Op(r):Nc(r,1,40),{buf:r,zeroSec:o/e,stats:{...a,seam:i?Vp(r):null,sec:r.n/e}}}async function $p(s){let t=Ir(4242),e=60/Gy,i=e/4,n=8,r=n*4*e,a=Math.round(r*s),o=()=>new zi(s,r+ku),l=o(),c=o(),u=o(),h=38,d=[0,0,5,5,8,8,7,7];for(let v=0;v<n*4;v++){let M=v*e;ti(l,M,{gain:.95,f0:140,f1:46,decay:6,drive:1.8}),(v%4===1||v%4===3)&&Du(l,M,{rnd:t,gain:.65}),Lr(l,M+e/2,{open:!0,gain:.13,rnd:t})}await Pn();let f=[[0,0],[3,12],[6,10],[8,0],[10,7],[11,10],[14,12]];for(let v=0;v<n;v++)for(let[M,_]of f)Ic(c,(v*16+M)*i,i*1.3,h+d[v]+_,{gain:.45,fc0:300,fc1:3e3,fdec:22,drive:2.6,sub:.4,from:h+d[v]+_-(M===0?2:0)});await Pn();let p=[0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0];for(let v=0;v<n;v++){let M=Ou(h+24+d[v]);for(let _=0;_<16;_++){let T=(v*16+_)*i;(_===3||_===11)&&Rs(u,T,i*2,M,{gain:.3,voices:3,detune:.17,fc0:700,fc1:1400,fdec:10,q:1.4}),p[_]&&Uu(u,T,[M[0]+12,M[2]+12,M[3]+12],{mute:!0,dur:i*.5,gain:.32,rnd:t,pan:.5})}}let x=o();for(let v of[1,3,5,7])Lc(x,(v*4+2)*e,e*1.6,h+24+d[v]+7,v===7?"eo":"ao",{gain:.42,from:h+24+d[v]+3});Fu(x,e*.75,.3,.3),u.add(x),Cn(u,.75,.5,.14);let g=[];for(let v=0;v<n*4;v++)g.push(v*e);Ps(c,g,{depth:.8,rel:.15}),Ps(u,g,{depth:.6,rel:.2});let m=new zi(s,r+ku);return m.add(c,.9).add(u,.8),Bp(m,v=>700+5500*(.5-.5*Math.cos(Ye*(v%r)/r)),1.1),Fc([[l,1],[m,1]],a,s)}async function Yp(s,t,e){let i=33+((e.root-33)%12+12)%12,n=new zi(t,s?4.2:3.6),r=Ir(s?11:13);if(s){let a=.4918032786885246,o=(l,c,u)=>Rs(n,l,c,[u,u+4,u+7,u+12],{gain:.42,voices:3,detune:.09,fc0:600,fc1:3800,fdec:7,atk:.02,vib:c>1?.004:0,drive:1.5,rel:.15});[[0,.22],[.5,.22],[.75,.22]].forEach(([l])=>{o(l*a,.22*a*2,i+24),ti(n,l*a,{gain:.9})}),o(1*a,a*4,i+29),Pc(n,a,{rnd:r,gain:.3}),[0,3,5,7,10,12,15,17].forEach((l,c)=>Ic(n,a*(1+c*.25),a*.2,i+12+l,{gain:.5,fc0:900,fc1:5e3,fdec:30,drive:3,sub:.25})),ti(n,a*5.2,{gain:1}),Pc(n,a*5.2,{rnd:r,gain:.3}),o(a*5.2,a*1.6,i+24),Cn(n,.85,.4,.2)}else[24,22,20,19,17,15,14,12].forEach((a,o)=>Rs(n,o*.13,.12,[i+24+a],{gain:.32,voices:1,wave:"square",fc0:4e3,fc1:4e3,fdec:1,rel:.02})),Is(n,5,5),Cs(n,1.05,1.6,95,34,{gain:.8,curve:1.2}),Ya(n,1.05,.5,{rnd:r,gain:.12}),Cn(n,.8,.5,.12);return Fc([[n,1]],0,t,!1)}var Xt=(s,t)=>new zi(s,t);function Zn(s,t,e,i,n,r,a){let o=s.sr,l=new pe(o);l.set(n,2.5);let c=Math.floor(t*o),u=Math.floor(e*o);for(let h=0;h<u;h++){let d=c+h;if(d>=s.n)break;let f=h/u,p=i*(1-f)/o,x=a()<p?(a()*2-1)*4:0;l.run(x+(a()*2-1)*.02);let g=Qe(l.bp*2)*r,m=a()*.6-.3;s.L[d]+=g*(1-m),s.R[d]+=g*(1+m)}}function ke(s,t,e,i,n,r,a,o,l=u=>Math.sin(Math.PI*u),c=!0){let u=s.sr,h=new pe(u),d=new pe(u),f=Math.floor(t*u),p=Math.floor(e*u);for(let x=0;x<p;x++){let g=f+x;if(g>=s.n)break;let m=x/p;if((x&15)===0){let M=i*Math.pow(n/i,m);h.set(M,r),d.set(M*1.05,r)}h.run(o()*2-1),d.run(c?o()*2-1:0);let v=l(m)*a;s.L[g]+=h.bp*v*2,s.R[g]+=(c?d.bp:h.bp)*v*2}}function Dr(s,t,e,i,n,r){let a=s.sr,o=Math.floor(t*a),l=Math.floor(Math.min(1.5,6/i)*a),c=e.map(()=>r());for(let u=0;u<l;u++){let h=o+u;if(h>=s.n)break;let d=u/a,f=0;e.forEach((p,x)=>{c[x]+=p/a,f+=Math.sin(Ye*c[x])*Math.exp(-d*i*(1+x*.35))/(1+x*.4)}),f*=n,s.L[h]+=f,s.R[h]+=f}}function Re(s,t,e,i,n,r,a,o=0,l=.003){let c=s.sr,u=new oi(c,r),h=Math.floor(t*c),d=Math.floor(e*c);for(let f=0;f<d;f++){let p=h+f;if(p>=s.n)break;let x=f/d,g=f/c,m=u.next(i*Math.pow(n/i,x))*a*Math.min(1,g/l)*(o?Math.exp(-g*o):1-x);s.L[p]+=m,s.R[p]+=m}}function Si(s,t,e,i,n=30){Dr(s,t,[e,e*2.76,e*5.4,e*8.93],n,i,()=>.3)}var Nr={ui_click:(s,t)=>{let e=Xt(s,.12);return Si(e,0,2600,.35,55),Re(e,0,.004,6e3,6e3,"square",.15),e},ui_move:(s,t)=>{let e=Xt(s,.08);return Si(e,0,3400,.2,80),e},ui_ok:(s,t)=>{let e=Xt(s,.3);return Si(e,0,1760,.35,22),Si(e,.06,2637,.35,22),e},ui_back:(s,t)=>{let e=Xt(s,.3);return Si(e,0,2349,.3,25),Si(e,.06,1568,.3,25),e},unlock:(s,t)=>{let e=Xt(s,1.4);return[1046,1318,1568,2093,2637].forEach((i,n)=>Si(e,n*.07,i,.28,5)),Cn(e,.8,.3,.25),e},cd_3:(s,t)=>{let e=Xt(s,.35);return Re(e,0,.28,784,784,"square",.22,9),Re(e,0,.28,1568,1568,"sine",.18,12),e},cd_2:(s,t)=>{let e=Xt(s,.35);return Re(e,0,.28,988,988,"square",.22,9),Re(e,0,.28,1976,1976,"sine",.18,12),e},cd_1:(s,t)=>{let e=Xt(s,.35);return Re(e,0,.28,1175,1175,"square",.22,9),Re(e,0,.28,2349,2349,"sine",.18,12),e},cd_go:(s,t)=>{let e=Xt(s,1.3);return[1568,1976,2349,3136].forEach(i=>Re(e,0,.6,i,i,"square",.09,5)),ti(e,0,{gain:.9,f0:120,f1:40,decay:4}),Cs(e,.02,1.1,110,36,{gain:.85,curve:1.3}),Is(e,10,2),e},lap:(s,t)=>{let e=Xt(s,.6);return Si(e,0,1318,.35,12),Si(e,.12,1976,.35,10),e},final_lap:(s,t)=>{let e=Xt(s,2);return[1318,1568,1976,2637].forEach((i,n)=>Si(e,n*.09,i,.3,6)),Ya(e,0,1.6,{rnd:t,gain:.35}),ti(e,1.6,{gain:.9}),Cs(e,1.6,.4,90,40,{gain:.6}),e},finish:(s,t)=>{let e=Xt(s,1.2);return[1046,1318,1568].forEach((i,n)=>Si(e,n*.05,i,.3,4)),e},melee:(s,t)=>{let e=Xt(s,.9);Dr(e,0,[612,1347,2210,2950,3870],14,.55,t),ke(e,0,.18,2400,900,1.2,.5,t,i=>Math.exp(-i*5)),ti(e,0,{gain:1,f0:110,f1:38,decay:9,drive:2.5}),Zn(e,.01,.6,2200,3e3,.45,t);for(let i=0;i<e.n;i++)e.L[i]=Qe(e.L[i]*1.6),e.R[i]=Qe(e.R[i]*1.6);return e},melee_heavy:(s,t)=>{let e=Nr.melee(s,t),i=Xt(s,.9);return Cs(i,0,.6,70,34,{gain:.8}),Zn(i,0,.8,3200,2600,.5,t),e.add(i)},plasma_fire:(s,t)=>{let e=Xt(s,.4);return Re(e,0,.09,3400,700,"sine",.7,0,.001),Re(e,0,.12,1700,350,"square",.25,0,.001),ke(e,0,.05,4e3,2e3,1,.5,t,i=>1-i),ti(e,0,{gain:.4,f0:200,f1:80,decay:30,dur:.1}),e},plasma_impact:(s,t)=>{let e=Xt(s,1.6);ke(e,0,.08,6e3,800,.6,1.1,t,r=>Math.exp(-r*4)),ti(e,0,{gain:1,f0:160,f1:45,decay:12,drive:3});for(let r=0;r<Math.floor(.12*s);r++)e.L[r]=Qe(e.L[r]*2.4)*.7,e.R[r]=Qe(e.R[r]*2.4)*.7;let i=Xt(s,1.6),n=i.n;for(let r=0;r<90;r++){let a=.04+Math.pow(t(),1.8)*1.4,o=2e3+t()*6500,l=Xt(s,.05);Re(l,0,.02+t()*.03,o,o*(.7+t()*.2),"sine",.22*(1-a/1.5),60);let c=t()*2-1,u=Math.floor(a*s);for(let h=0;h<l.n&&u+h<n;h++)i.L[u+h]+=l.L[h]*(1-c*.8),i.R[u+h]+=l.L[h]*(1+c*.8)}return Is(i,9,2),e.add(i)},explode:(s,t)=>Nr.plasma_impact(s,t),trap_lay:(s,t)=>{let e=Xt(s,.18);return Re(e,0,.05,180,120,"sine",.8,40,.001),Re(e,0,.004,2500,2500,"square",.3),e},trap_trigger:(s,t)=>{let e=Xt(s,.55);for(let i=0;i<14;i++){let n=i*.03+t()*.01,r=[220,440,880,1760,3520][Math.floor(t()*5)];Re(e,n,.025,r,r*(t()<.5?2:.5),"square",.35*(1-i/16))}return ke(e,0,.3,3e3,1200,1.5,.5,t,i=>Math.exp(-i*3)),ti(e,0,{gain:.6,f0:140,f1:50,decay:14}),Is(e,4,6),e},shield_up:(s,t)=>{let e=Xt(s,1),i=[2093,2637,3136,4186,5274];for(let n=0;n<e.n;n++){let r=n/s,a=Math.min(1,r/.35)*Math.exp(-Math.max(0,r-.35)*5),o=0;i.forEach((l,c)=>o+=Math.sin(Ye*l*r+c)*(1+.5*Math.sin(Ye*(7+c)*r))/(c+1)),e.L[n]+=o*a*.16,e.R[n]+=o*a*.16*(1+.2*Math.sin(Ye*3*r))}return ke(e,0,.4,600,5e3,2,.25,t,n=>n),Cn(e,.7,.2,.25),e},shield_block:(s,t)=>{let e=Xt(s,.9);return Re(e,0,.28,4400,2100,"sine",.55,9,.001),Dr(e,0,[2793,3951,5587,7040],22,.4,t),ke(e,0,.06,7e3,4e3,.8,.6,t,i=>1-i),ke(e,.08,.5,3200,380,1.3,.45,t),e},surge:(s,t)=>{let e=Xt(s,1.7);ke(e,0,.28,250,1600,1.6,.6,t,l=>l*l);let i=new oi(s,"saw"),n=new oi(s,"sine"),r=new pe(s);for(let l=0;l<Math.floor(1.2*s);l++){let c=l/s,u=Math.floor(.22*s)+l;if(u>=e.n)break;let h=Math.min(1,c/.02)*Math.exp(-c*2.6);(l&15)===0&&r.set(900+2500*Math.exp(-c*4),.9);let d=Qe((r.run(i.next(75+30*Math.exp(-c*6))+(t()*2-1)*.8)+n.next(2200+1200*Math.min(1,c*3))*.25)*2.2)*h*.6;e.L[u]+=d,e.R[u]+=d}let a=new pe(s),o=new pe(s);a.set(2600,.7),o.set(2900,.7);for(let l=Math.floor(.2*s);l<e.n;l++){let c=l/s-.2,u=Math.min(1,c/.05)*Math.exp(-c*1.8)*.4;a.run(t()*2-1),o.run(t()*2-1),e.L[l]+=a.hp*u,e.R[l]+=o.hp*u}return e},emp:(s,t)=>{let e=Xt(s,1.2);ke(e,0,.03,8e3,1500,.5,1.4,t,n=>1-n),ti(e,0,{gain:.8,f0:200,f1:50,decay:10,drive:3});let i=new oi(s,"saw");for(let n=0;n<e.n;n++){let r=n/s,a=Qe(i.next(118+40*Math.sin(Ye*31*r))*3)*Math.exp(-r*3.5)*.25*(t()<.85?1:0);e.L[n]+=a,e.R[n]+=a}return Zn(e,0,1.1,2600,3300,.5,t),e},zap:(s,t)=>{let e=Xt(s,.4);return Zn(e,0,.35,3e3,2800,.6,t),Re(e,0,.2,1400,300,"saw",.2),e},laser:(s,t)=>{let e=Xt(s,.7);return Re(e,0,.6,2600,900,"square",.3,4,.001),Re(e,0,.6,5200,1800,"sine",.25,5,.001),Zn(e,0,.5,1500,3500,.3,t),e},jump:(s,t)=>{let e=Xt(s,1.1);return ke(e,0,1,400,2200,1.4,.5,t,i=>Math.sin(Math.PI*Math.sqrt(i))*(1-i*.5)),Re(e,0,.4,180,520,"sine",.25),e},land:(s,t)=>{let e=Xt(s,.9);ti(e,0,{gain:1,f0:95,f1:34,decay:6,drive:2}),Dr(e,0,[221,371,593,947,1480],9,.35,t);let i=new oi(s,"saw"),n=new pe(s);n.set(400,1);for(let r=0;r<Math.floor(.4*s);r++){let a=r/s,o=n.run(i.next(100))*Math.exp(-a*9)*.35;e.L[r]+=o,e.R[r]+=o}return e},reentry:(s,t)=>{let e=Xt(s,1);[523,784,1046,1568].forEach((n,r)=>Si(e,r*.05,n,.22,10));let i=Nr.land(s,t);return e.add(i,.8)},derez:(s,t)=>{let e=Xt(s,.9);return[1760,1318,988,740,554,415].forEach((i,n)=>Re(e,n*.07,.07,i,i*.9,"square",.25)),Zn(e,0,.7,2e3,2400,.35,t),Is(e,5,4),e},pad:(s,t)=>{let e=Xt(s,.5);return ke(e,0,.4,900,3500,1.5,.45,t,i=>Math.exp(-i*3)),Re(e,0,.25,600,1500,"saw",.15),e},boost:(s,t)=>{let e=Xt(s,.6);return ke(e,0,.55,500,2800,1.4,.5,t,i=>Math.exp(-i*2.5)),e},slip:(s,t)=>{let e=Xt(s,.6);return ke(e,0,.5,2500,700,1,.35,t),e},dash:(s,t)=>{let e=Xt(s,.35);return ke(e,0,.3,800,3e3,2,.6,t,i=>Math.sin(Math.PI*i)),e},wall:(s,t)=>{let e=Xt(s,.35);return ke(e,0,.3,2600,1900,3,.55,t,i=>Math.exp(-i*4)),Zn(e,0,.25,2500,3500,.3,t),e},bump:(s,t)=>{let e=Xt(s,.35);return ti(e,0,{gain:.6,f0:130,f1:60,decay:18}),Dr(e,0,[700,1530,2410],25,.25,t),e},drift_start:(s,t)=>{let e=Xt(s,.4);return ke(e,0,.35,1600,1300,4,.4,t,i=>Math.exp(-i*3)),e},tick1:(s,t)=>{let e=Xt(s,.15);return Re(e,0,.08,1046,1046,"square",.25,30),e},tick2:(s,t)=>{let e=Xt(s,.15);return Re(e,0,.08,1397,1397,"square",.25,30),Re(e,.04,.08,1760,1760,"square",.2,30),e},tick3:(s,t)=>{let e=Xt(s,.25);return[1760,2217,2637].forEach((i,n)=>Re(e,n*.035,.09,i,i,"square",.22,25)),e},pickup:(s,t)=>{let e=Xt(s,.5);return[1318,1760,2637].forEach((i,n)=>Si(e,n*.045,i,.3,14)),e},fuse:(s,t)=>{let e=Xt(s,.9);return ke(e,0,.5,400,4e3,3,.3,t,i=>i),[880,1108,1318,1760,2217].forEach((i,n)=>Si(e,.25+n*.05,i,.25,6)),e},shoot_seek:(s,t)=>Nr.trap_lay(s,t),elec_pulse:(s,t)=>{let e=Xt(s,.4),i=new oi(s,"saw"),n=new pe(s);n.set(1600,2);for(let r=0;r<e.n;r++){let a=r/s,o=Math.min(1,a/.01)*Math.exp(-a*9),l=Qe(n.run(i.next(100)+(t()*2-1)*.3)*3)*o*.4*(.6+.4*Math.sin(Ye*50*a));e.L[r]+=l,e.R[r]+=l}return Zn(e,0,.3,800,3e3,.2,t),e},crackle1:(s,t)=>{let e=Xt(s,.09);return ke(e,0,.05,1800,900,1.5,.9,t,i=>Math.exp(-i*6),!1),ti(e,0,{gain:.35,f0:200,f1:90,decay:50,dur:.06}),e},crackle2:(s,t)=>{let e=Xt(s,.09);return ke(e,0,.035,2600,1200,1.5,.9,t,i=>Math.exp(-i*6),!1),e},crackle3:(s,t)=>{let e=Xt(s,.12);return ke(e,0,.07,1200,600,1.2,.9,t,i=>Math.exp(-i*5),!1),ti(e,0,{gain:.4,f0:160,f1:70,decay:40,dur:.08}),e},pneumatic:(s,t)=>{let e=Xt(s,.35);return ke(e,.02,.25,5e3,3e3,.7,.4,t,i=>Math.exp(-i*4)),Dr(e,0,[310,520,870],30,.4,t),e}},Wy=Object.keys(Nr);async function Kp(s,t=null){let e={},i=0;for(let n of t||Wy){let r=Ir(1e3+i*37),a=Nr[n](s,r);Dc(a,35,.7),Nc(a,.5,12),Gp(a,-2),e[n]=a,++i%5===0&&await new Promise(o=>setTimeout(o,0))}return e}var Za=s=>Math.pow(10,s/20),Vi=(s,t,e)=>s<t?t:s>e?e:s,Zp=(s,t,e,i)=>s<=t||s>=i?0:s<e?(s-t)/(e-t):(i-s)/(i-e),qy=`
const N = 97, K = 24, TAPS = (() => { const h = new Float32Array(N), c = (N - 1) / 2; for (let i = 0; i < N; i++) { const x = (i - c) / 4, a = 2 * Math.PI * i / (N - 1); const w = 0.42 - 0.5 * Math.cos(a) + 0.08 * Math.cos(2 * a); h[i] = (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x)) * w; } return h; })();
class TPLimiter extends AudioWorkletProcessor {
  static get parameterDescriptors() { return [{ name: 'ceiling', defaultValue: -1.0 }]; }
  constructor() {
    super();
    this.la = Math.round(sampleRate * 0.002);
    this.size = this.la + 1;
    this.dl = [new Float32Array(this.size), new Float32Array(this.size)];
    this.hist = [new Float32Array(K), new Float32Array(K)];
    this.need = new Float32Array(this.size).fill(1);
    this.w = 0; this.env = 1;
    this.att = 1 - Math.exp(-5 / (this.la - 16)); // interpolating detector lags ~12 samples
    this.rel = Math.exp(-1 / (0.08 * sampleRate));
    this.gr = 0;
  }
  process(inputs, outputs, params) {
    const inp = inputs[0], out = outputs[0];
    if (!inp || !inp.length) return true;
    const ceil = Math.pow(10, (params.ceiling[0] - 0.5) / 20);
    const n = inp[0].length, chs = Math.min(2, inp.length);
    let minG = 1;
    for (let i = 0; i < n; i++) {
      let peak = 0;
      for (let c = 0; c < 2; c++) {
        const x = inp[Math.min(c, chs - 1)][i], h = this.hist[c];
        h.copyWithin(1, 0); h[0] = x;
        let p = Math.abs(x);
        for (let ph = 1; ph < 4; ph++) { let s = 0; for (let k = 0; k < K; k++) s += h[k] * TAPS[ph + 4 * k]; const a = Math.abs(s); if (a > p) p = a; }
        if (p > peak) peak = p;
        this.dl[c][this.w] = x;
      }
      this.need[this.w] = peak > ceil ? ceil / peak : 1;
      let g = 1; for (let k = 0; k < this.size; k++) if (this.need[k] < g) g = this.need[k];
      this.env = g < this.env ? this.env + (g - this.env) * this.att : this.env * this.rel + (1 - this.rel) * g;
      if (this.env > g * 1.004) this.env = Math.min(this.env, Math.max(g * 1.004, this.env - (this.env - g) * this.att * 2));
      const r = (this.w + 1) % this.size;
      for (let c = 0; c < out.length; c++) out[c][i] = this.dl[Math.min(c, 1)][r] * this.env;
      this.w = r;
      if (this.env < minG) minG = this.env;
    }
    this.gr = minG;
    return true;
  }
}
registerProcessor('tp-limiter', TPLimiter);`,Xy={ui_click:[-10,"ui"],ui_move:[-14,"ui"],ui_ok:[-9,"ui"],ui_back:[-10,"ui"],unlock:[-6,"ui"],cd_3:[-6,"ui"],cd_2:[-6,"ui"],cd_1:[-6,"ui"],cd_go:[-3,"ui"],lap:[-6,"ui"],final_lap:[-4,"ui"],finish:[-6,"ui"],melee:[-2,"sfx"],melee_heavy:[-1,"sfx"],plasma_fire:[-5,"sfx"],plasma_impact:[-2,"sfx"],explode:[-2,"sfx"],trap_lay:[-6,"sfx"],trap_trigger:[-3,"sfx"],shield_up:[-6,"sfx"],shield_block:[-3,"sfx"],surge:[-3,"sfx"],emp:[-2,"sfx"],zap:[-7,"sfx"],laser:[-5,"sfx"],jump:[-7,"sfx"],land:[-5,"sfx"],reentry:[-5,"sfx"],derez:[-5,"sfx"],pad:[-9,"sfx"],boost:[-9,"sfx"],slip:[-10,"sfx"],dash:[-7,"sfx"],wall:[-9,"sfx"],bump:[-9,"sfx"],drift_start:[-12,"sfx"],tick1:[-9,"ui"],tick2:[-8,"ui"],tick3:[-7,"ui"],pickup:[-9,"sfx"],fuse:[-6,"ui"],shoot_seek:[-8,"sfx"],elec_pulse:[-12,"amb"],crackle1:[-10,"eng"],crackle2:[-10,"eng"],crackle3:[-9,"eng"],pneumatic:[-10,"eng"]},$y={go:"cd_go",boost:"boost",hit:"explode",zap:"zap",clang:"melee",scrape:"wall",pickup:"pickup",fuse:"fuse",shoot:"plasma_fire",drop:"trap_lay",shield:"shield_up",block:"shield_block",emp:"emp",laser:"laser",derez:"derez",driftstart:"drift_start",launch:"jump",dash:"dash",lap:"lap",final:"final_lap",win:"finish",finish:"finish",ui:"ui_move",uiok:"ui_ok",uiback:"ui_back",unlock:"unlock"},Jp={bike:{f0:58,f1:175,c:150,gears:6},quad:{f0:30,f1:74,c:230,gears:5},kart:{f0:52,f1:150,c:200,gears:5}},kc=class{constructor(t,e,i){this.a=t,this.cls=e,this.full=i;let n=t.ctx;this.out=n.createGain(),this.out.gain.value=0,this.pan=n.createStereoPanner(),this.lp=n.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=8e3,this.lp.Q.value=.8,this.hp=n.createBiquadFilter(),this.hp.type="highpass",this.hp.frequency.value=20,this.hp.Q.value=.9,this.mix=n.createGain(),this.mix.connect(this.lp),this.lp.connect(this.hp),this.hp.connect(this.out),this.out.connect(this.pan),this.pan.connect(t.bus.eng),this.oscs=[],this.layers={};let r=l=>{let c=n.createWaveShaper(),u=new Float32Array(1024);for(let h=0;h<1024;h++){let d=h/511.5-1;u[h]=Math.tanh(d*l)/Math.tanh(l)}return c.curve=u,c.oversample=i?"2x":"none",c},a=(l,c,u)=>{let h=n.createGain();h.gain.value=0;let d=h;if(u){let f=u();f.connect(h),d=f}for(let[f,p,x,g]of c){let m=n.createOscillator();m.type=f,m.detune.value=g||0;let v=n.createGain();v.gain.value=x,m.connect(v),v.connect(d),m.start(),this.oscs.push({o:m,mult:p})}h.connect(this.mix),this.layers[l]=h},o=(l,c,u)=>{let h=n.createBufferSource();h.buffer=t.noiseBuf,h.loop=!0,h.loopStart=Math.random();let d=n.createBiquadFilter();d.type=l,d.frequency.value=c,d.Q.value=u;let f=n.createGain();return f.gain.value=0,h.connect(d),d.connect(f),f.connect(this.mix),h.start(),this.noises=this.noises||[],this.noises.push(h),{fl:d,g:f}};if(e==="bike")a("idle",[["triangle",1,.6],["square",.5,.2]]),a("low",[["sawtooth",1,.5],["sawtooth",1,.3,9]]),i&&a("mid",[["sawtooth",2,.35],["square",3,.15,-6]],()=>r(2)),a("red",[["sine",12,.35],["square",4,i?.12:.08]]),i&&(this.laser=o("bandpass",3e3,28));else if(e==="quad"){if(a("idle",[["square",.5,.5],["sine",.25,.6]],()=>r(3)),a("low",[["square",1,.45],["sine",.5,.55]],()=>r(4)),i&&a("mid",[["sawtooth",2,.35],["sawtooth",2,.25,14]],()=>r(3)),a("red",[["sawtooth",3,.3],["square",6,.08]],()=>r(2.5)),this.rumble=o("lowpass",170,1.2),i){this.trem=n.createOscillator(),this.trem.frequency.value=11;let l=n.createGain();l.gain.value=.35,this.trem.connect(l),l.connect(this.rumble.g.gain),this.trem.start()}}else a("idle",[["sawtooth",1,.45]]),a("low",[["sawtooth",2,.35],["sawtooth",2,.35,21]]),i&&a("mid",[["sawtooth",3,.3],["sawtooth",3,.3,21]],()=>{let l=n.createBiquadFilter();return l.type="bandpass",l.Q.value=5,this.whineBP=l,l}),a("red",[["square",5,.16],["sine",10,.22]]);this.slip=o("bandpass",1800,3),this.rpm=.2,this.gear=0,this.prevThr=0,this.crackleT=0,this.dop=1}update(t,e){let i=this.a.ctx,n=i.currentTime,r=Jp[this.cls],a=Vi(Math.abs(t.speed)/t.top,0,1.6),o=r.gears,l=1.05/o,c=Math.min(o-1,Math.floor(a/l)),u=(a-c*l)/l;a>=1.05&&(u=1+(a-1.05)*.4);let h=t.started?.28+.66*u:.18+.7*t.throttle;t.throttle<.1&&t.started&&(h*=.85),t.boost&&(h+=.08),this.rpm+=(h-this.rpm)*(1-Math.exp(-e*(this.cls==="bike"?14:this.cls==="kart"?11:7)));let d=Vi(this.rpm,.1,1.15);c>this.gear&&t.started&&this.full&&this.a.engineEvent(this,"shift",t),this.gear=c,this.dop+=((t.doppler||1)-this.dop)*(1-Math.exp(-e*12));let f=(r.f0+(r.f1-r.f0)*d)*this.dop;for(let _ of this.oscs)_.o.frequency.setTargetAtTime(f*_.mult,n,.012);this.whineBP&&this.whineBP.frequency.setTargetAtTime(f*6,n,.02),this.laser&&(this.laser.fl.frequency.setTargetAtTime(f*18,n,.02),this.laser.g.gain.setTargetAtTime(.06+.25*Vi(d-.5,0,1),n,.05)),this.rumble&&(this.rumble.g.gain.setTargetAtTime(.25+.4*t.throttle,n,.05),this.trem&&this.trem.frequency.setTargetAtTime(8+d*10,n,.1));let p=this.layers,x=Vi(1-d/.42,0,1),g=Zp(d,.12,.42,.72),m=Zp(d,.45,.72,.98),v=Vi((d-.72)/.28,0,1.2);p.idle.gain.setTargetAtTime(x*.9,n,.03),p.low.gain.setTargetAtTime((g+(p.mid?0:m*.7))*.8,n,.03),p.mid&&p.mid.gain.setTargetAtTime(m*.8,n,.03),p.red.gain.setTargetAtTime(v*.6,n,.03);let M=.45+.55*t.throttle;this.lp.frequency.setTargetAtTime(Vi(900+9e3*M*d+(t.boost?2500:0),400,14e3)*(t.emp?.12:1),n,.04),this.slip.g.gain.setTargetAtTime(Vi(t.slip,0,1)*.35*(t.air?0:1),n,.05),this.slip.fl.frequency.setTargetAtTime(1400+900*d,n,.05),this.out.gain.setTargetAtTime(t.gain*(.55+.45*M),n,.05),this.pan.pan.setTargetAtTime(Vi(t.pan||0,-1,1),n,.05),this.cls==="kart"&&this.full&&(this.crackleT-=e,this.prevThr>.6&&t.throttle<.2&&Math.abs(t.speed)>20&&this.a.engineEvent(this,"crackleBurst",t),(t.slip>.3||t.throttle<.2&&Math.abs(t.speed)>25)&&this.crackleT<=0&&(this.crackleT=.07+Math.random()*.16,this.a.engineEvent(this,"crackle",t))),this.prevThr=t.throttle}trapHit(){let t=this.a.ctx.currentTime,e=this.hp.frequency;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(1400,t+.015),e.setTargetAtTime(20,t+.35,.18)}stop(){let t=this.a.ctx.currentTime;this.out.gain.setTargetAtTime(0,t,.05),setTimeout(()=>{try{this.oscs.forEach(e=>e.o.stop()),(this.noises||[]).forEach(e=>e.stop()),this.trem&&this.trem.stop(),this.pan.disconnect()}catch{}},400)}},Oc=class{constructor(t){this.game=t,this.ctx=null,this.bank={},this.stems={},this.cupStems=null,this.state={tier:0,combatT:-99,holdUntil:0,final:!1},this.listener={pos:new R,prev:new R,vel:new R,right:new R(1,0,0),fwd:new R(0,0,-1)},this.aiVoices=[],this.projVoices=new Map,this.threatT=0,this.locked=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t({latencyHint:"interactive"});this.sr=e.sampleRate,this._graph(),this._workers(),this.loadBank(),this.loadMenu().then(()=>{this.wantMenu&&this.startMenuMusic()})}_graph(){let t=this.ctx,e=()=>{let h=t.createBiquadFilter();return h.type="highpass",h.frequency.value=35,h.Q.value=.707,h},i=(h,d,f)=>{let p=t.createBiquadFilter();return p.type="peaking",p.frequency.value=h,p.gain.value=d,p.Q.value=f,p},n=(...h)=>{for(let d=0;d<h.length-1;d++)h[d].connect(h[d+1]);return h[0]};if(this.master=t.createGain(),this.fallbackLim=t.createDynamicsCompressor(),Object.assign(this.fallbackLim,{}),this.fallbackLim.threshold.value=-2.5,this.fallbackLim.knee.value=0,this.fallbackLim.ratio.value=20,this.fallbackLim.attack.value=.001,this.fallbackLim.release.value=.08,this.master.connect(this.fallbackLim),this.fallbackLim.connect(t.destination),t.audioWorklet){let h=this.limUrl=URL.createObjectURL(new Blob([qy],{type:"application/javascript"}));t.audioWorklet.addModule(h).then(()=>{this.limiter=new AudioWorkletNode(t,"tp-limiter",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2]}),this.master.disconnect(),this.master.connect(this.limiter),this.limiter.connect(t.destination),this.limiterKind="true-peak worklet"}).catch(()=>{this.limiterKind="compressor fallback"})}this.world=t.createGain(),this.choke=t.createBiquadFilter(),this.choke.type="lowpass",this.choke.frequency.value=2e4,this.choke.Q.value=.9,n(this.world,this.choke,this.master);let r=this.bus={};r.music=t.createGain(),this.musicDuck=t.createGain(),n(r.music,e(),i(2200,-3.5,.55),this.musicDuck,this.world),r.eng=t.createGain();let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=140,a.Q.value=.6;let o=t.createBiquadFilter();o.type="highpass",o.frequency.value=140,o.Q.value=.6,this.engSub=t.createGain();let l=t.createGain();r.eng.connect(a),a.connect(this.engSub),this.engSub.connect(l),r.eng.connect(o),o.connect(l),this.engDuck=t.createGain(),n(l,e(),i(2200,-3,.55),this.engDuck,this.world),r.sfx=t.createGain(),n(r.sfx,e(),i(2200,2.5,.6),this.world),r.amb=t.createGain(),this.ambDuck=t.createGain(),n(r.amb,e(),this.ambDuck,this.world),r.ui=t.createGain(),n(r.ui,e(),this.master);let c=t.createBuffer(1,t.sampleRate*2,t.sampleRate),u=c.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1;this.noiseBuf=c,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.game.settings,e=t.sfxVol??.8,i=t.musicVol??.5;this.bus.music.gain.value=Za(-8)*i*2,this.bus.sfx.gain.value=e,this.bus.ui.gain.value=e,this.bus.eng.gain.value=Za(-6)*e,this.bus.amb.gain.value=Za(-4)*e}suspend(){this.ctx&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.resume()}_workers(){this.pool=[];try{let t=URL.createObjectURL(new Blob([Lp],{type:"application/javascript"})),e=Math.max(1,Math.min(4,(navigator.hardwareConcurrency||4)-1));for(let i=0;i<e;i++){let n=new Worker(t);n.busy=0,n.cb=new Map,n.onmessage=r=>{let a=n.cb.get(r.data.id);n.cb.delete(r.data.id),n.busy--,a&&a(r.data)},this.pool.push(n)}}catch{this.pool=[]}this.jobId=0}_job(t){if(!this.pool.length)return this._jobLocal(t);let e=this.pool.reduce((n,r)=>n.busy<=r.busy?n:r),i=++this.jobId;return e.busy++,new Promise((n,r)=>{e.cb.set(i,a=>a.error?r(new Error(a.error)):n(a)),e.postMessage({...t,id:i})}).catch(n=>(console.warn("worker render failed, rendering locally",n),this._jobLocal(t)))}async _jobLocal({job:t,sr:e,cup:i,only:n}){if(t==="bank"){let a=await Kp(e,n),o={};for(let l in a)o[l]={L:a[l].L,R:a[l].R};return{bank:o}}let r=t==="menu"?await $p(e):t==="win"||t==="lose"?await Yp(t==="win",e,i):await Xp(+t.slice(4),i,e);return{L:r.buf.L,R:r.buf.R,zeroSec:r.zeroSec||0,stats:r.stats}}_toBuffer(t){let e=this.ctx.createBuffer(2,t.L.length,this.sr);return e.copyToChannel(t.L,0),e.copyToChannel(t.R,1),e.zeroSec=t.zeroSec||0,e.stats=t.stats,e}loadBank(){if(this._bankP)return this._bankP;let t=performance.now();return this._bankP=this._job({job:"bank",sr:this.sr}).then(e=>{for(let i in e.bank)this.bank[i]=this._toBuffer(e.bank[i]);this.bankMs=performance.now()-t})}loadMenu(){return this._menuP?this._menuP:this._menuP=this._job({job:"menu",sr:this.sr}).then(t=>{this.stems.menu=this._toBuffer(t)})}prepareCup(t){if(!this.ctx)return Promise.resolve();if(this.cupStems&&this.cupStems.id===t.id)return this.cupStems.p;let e={id:t.id,root:t.root},i=performance.now(),n={id:t.id,tiers:[],win:null,lose:null};return n.p=Promise.all([0,1,2].map(r=>this._job({job:"tier"+r,sr:this.sr,cup:e}).then(a=>{n.tiers[r]=this._toBuffer(a)}))).then(()=>Promise.all(["win","lose"].map(r=>this._job({job:r,sr:this.sr,cup:e}).then(a=>{n[r]=this._toBuffer(a)})))).then(()=>{n.ms=performance.now()-i}),this.cupStems=n,n.p}play(t,e={}){if(!this.ctx)return;t=$y[t]||t;let i=this.bank[t];if(!i)return;let[n,r]=Xy[t]||[-8,"sfx"],a=this.ctx,o=a.createBufferSource();o.buffer=i,e.rate&&(o.playbackRate.value=e.rate);let l=a.createGain();l.gain.value=Za(n)*(e.vol??1);let c=e.pan||0;if(e.pos){let h=this.spatial(e.pos);if(h.gain<.02)return;l.gain.value*=h.gain,c=h.pan}let u=a.createStereoPanner();return u.pan.value=c,o.connect(l),l.connect(u),u.connect(this.bus[e.bus||(r==="eng"?"eng":r)]),o.start(a.currentTime+(e.delay||0)),o}sfx(t,e=1,i=0){t==="tick"&&(t="tick"+Math.max(1,Math.min(3,i))),t!=="beep"&&this.play(t,{vol:e})}spatial(t){let e=this.listener,i=t.distanceTo(e.pos),n=t.clone().sub(e.pos).divideScalar(Math.max(.001,i));return{gain:(n.dot(e.fwd)<0?.8:1)/(1+Math.pow(i/16,1.7)),pan:Vi(n.dot(e.right),-1,1)*.85,dist:i,dir:n}}_duckParam(t,e,i){let n=this.ctx.currentTime,r=Za(e);t.cancelScheduledValues(n),t.setValueAtTime(Math.min(t.value,1),n),t.linearRampToValueAtTime(Math.min(t.value,r),n+.01),t.setValueAtTime(Math.min(t.value,r),n+.01+i),t.setTargetAtTime(1,n+.01+i,.25/4.6)}duck(t,e=.05){this.ctx&&(t==="high"?(this._duckParam(this.musicDuck.gain,-5.5,e),this._duckParam(this.engDuck.gain,-5,e)):t==="lock"?(this._duckParam(this.musicDuck.gain,-4,e),this._duckParam(this.engDuck.gain,-4,e)):t==="surge"&&(this._duckParam(this.ambDuck.gain,-14,e),this._duckParam(this.musicDuck.gain,-2,e*.5)))}victimEmp(t=1.5){if(!this.ctx)return;let e=this.choke.frequency,i=this.ctx.currentTime;e.cancelScheduledValues(i),e.setValueAtTime(e.value,i),e.exponentialRampToValueAtTime(480,i+.03),e.setValueAtTime(480,i+t),e.exponentialRampToValueAtTime(2e4,i+t+.35)}victimTrap(t){t.isPlayer&&this.playerVoice&&this.playerVoice.trapHit();let e=this.aiVoices.find(i=>i.racer===t);e&&e.voice.trapHit()}combat(){this.ctx&&(this.state.combatT=this.ctx.currentTime)}startMenuMusic(){if(this.wantMenu=!0,!this.ctx||!this.stems.menu||this.menuSrc)return;this.stopRaceMusic(.3);let t=this.ctx,e=t.createBufferSource(),i=t.createGain();e.buffer=this.stems.menu,e.loop=!0,i.gain.value=0,i.gain.setTargetAtTime(1,t.currentTime,.4),e.connect(i),i.connect(this.bus.music),e.start(t.currentTime+.05,this.stems.menu.zeroSec),this.menuSrc={s:e,g:i}}stopMenuMusic(t=.4){if(this.wantMenu=!1,!this.menuSrc)return;let{s:e,g:i}=this.menuSrc;this.menuSrc=null,i.gain.setTargetAtTime(0,this.ctx.currentTime,t/4),setTimeout(()=>{try{e.stop()}catch{}},t*1500)}startRaceMusic(){if(!this.ctx||!this.cupStems||!this.cupStems.tiers[2])return!1;this.stopMenuMusic(.3),this.stopRaceMusic(0);let t=this.ctx,e=t.currentTime+.08,i=this.cupStems.tiers.map((n,r)=>{let a=t.createBufferSource(),o=t.createGain();return a.buffer=n,a.loop=!0,o.gain.value=r===0?1:0,a.connect(o),o.connect(this.bus.music),a.start(e,n.zeroSec),{s:a,g:o,level:r===0?1:0}});return this.race={srcs:i,tBase:e,musBase:0,rate:1,tier:0,lastBeat:-1},this.state={tier:0,combatT:-99,holdUntil:0,final:!1},this._kickTimer=setInterval(()=>this._scheduleKicks(),40),!0}stopRaceMusic(t=.5){if(this._kickTimer&&clearInterval(this._kickTimer),this._kickTimer=null,!this.race)return;let e=this.ctx.currentTime;for(let i of this.race.srcs){i.g.gain.cancelScheduledValues(e),i.g.gain.setTargetAtTime(0,e,Math.max(.01,t/4));let n=i.s;setTimeout(()=>{try{n.stop()}catch{}},t*1500+50)}this.race=null}musTime(t){let e=this.race;return e.musBase+(t-e.tBase)*e.rate}_setTier(t,e){let i=this.race;if(!i||i.tier===t)return;let n=this.ctx,r=n.currentTime,a=e?60/In:180/Ka,o=this.musTime(r+.03),l=Math.ceil(o/a)*a,c=i.tBase+(l-i.musBase)/i.rate,u=60/In,h=24;i.srcs.forEach((d,f)=>{let p=f===t?1:0,x=d.level;if(p===x)return;let g=new Float32Array(h);for(let m=0;m<h;m++){let v=m/(h-1);g[m]=p>x?Math.sin(v*Math.PI/2):Math.cos(v*Math.PI/2)}d.g.gain.cancelScheduledValues(r),d.g.gain.setValueAtTime(x,c),d.g.gain.setValueCurveAtTime(g,c,u),d.level=p}),i.tier=t}_finalLapRamp(){let t=this.race;if(!t)return;let e=this.ctx,i=e.currentTime,n=qp/In,r=.25;this._setTier(2,!0),t.musBase=this.musTime(i),t.tBase=i,t.rate=n;for(let a of t.srcs)a.s.playbackRate.setValueAtTime(1,i),a.s.playbackRate.linearRampToValueAtTime(n,i+r);this.play("final_lap")}_scheduleKicks(){let t=this.race;if(!t)return;let e=this.ctx,i=e.currentTime,n=.16,r=this.musTime(i),a=this.musTime(i+n),o=Uc(t.tier===0?0:1),l=this.engSub.gain;for(let c=Math.floor(r/Ls)*Ls;c<a;c+=Ls)for(let u of o){let h=c+u;if(h<=(this._lastKick??-1)||h<r||h>=a)continue;this._lastKick=h;let d=t.tBase+(h-t.musBase)/t.rate;l.setTargetAtTime(.3,d,.003),l.setTargetAtTime(1,d+.03,.05)}}stinger(t){if(!this.ctx)return;this.stopRaceMusic(.25);let e=this.cupStems&&this.cupStems[t?"win":"lose"];if(!e)return this.play("finish");let i=this.ctx.createBufferSource();i.buffer=e,i.connect(this.bus.music),i.start(this.ctx.currentTime+.05)}countdown(t){this.play(t===0?"cd_go":"cd_"+t),t===0&&this.duck("high",.1)}raceStart(t){if(!this.ctx)return;this.raceEnd();let e=t.player;this.playerVoice=new kc(this,e.clsId,!0),this.aiVoices=[];for(let r=0;r<4;r++)this.aiVoices.push({voice:null,racer:null});this.lastPos=new Map,this.ambEmitters=[];let i=t.track,n={pos:new R,t:new R,r:new R,u:new R};for(let r of i.hazards)i.frame(r.s,n),this.ambEmitters.push({pos:n.pos.clone(),h:r});for(let r=0;r<i.L;r+=190)i.frame(r,n),this.ambEmitters.push({pos:n.pos.clone().add(new R(0,10,0)),h:null});this.startRaceMusic()||this.prepareCup(t.cup).then(()=>{this.game.race===t&&this.startRaceMusic()}),this.listener.prev.copy(t.camera.position)}raceEnd(){this.playerVoice&&(this.playerVoice.stop(),this.playerVoice=null);for(let t of this.aiVoices)t.voice&&t.voice.stop();this.aiVoices=[];for(let[,t]of this.projVoices)this._stopProj(t);this.projVoices.clear()}pauseRace(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.engDuck.gain.cancelScheduledValues(e),this.engDuck.gain.setTargetAtTime(t?0:1,e,.05),this.musicDuck.gain.cancelScheduledValues(e),this.musicDuck.gain.setTargetAtTime(t?.35:1,e,.08)}_racerParams(t,e,i){let n=this.lastPos.get(t)||t.worldPos.clone(),r=t.worldPos.clone().sub(n).divideScalar(Math.max(i,.001));this.lastPos.set(t,t.worldPos.clone());let a=this.listener,o=a.pos.clone().sub(t.worldPos),l=o.length();o.divideScalar(Math.max(l,.001));let c=Jp[t.clsId].c,u=r.dot(o),h=a.vel.dot(o),d=Vi((c+h)/Math.max(20,c-u),.6,1.6),f=this.spatial(t.worldPos);return{speed:t.speed,top:t.top,throttle:t.inp.throttle,started:e.started,boost:t.boostT>0,air:t.air,slip:t.drift.on?.6+.4*Math.abs(t.inp.steer):Math.min(1,Math.abs(t.vx)/8),emp:t.empT>0,doppler:t.isPlayer?1:d,gain:t.isPlayer?t.state==="fall"?0:1:f.gain*1.4*(t.state==="fall"?0:1),pan:t.isPlayer?0:f.pan,pos:t.worldPos}}engineEvent(t,e,i){if(e==="shift")t.cls==="quad"?this.play("pneumatic",{vol:.8}):t.cls==="bike"&&this.play("crackle2",{vol:.35});else if(e==="crackle")this.play(["crackle1","crackle2","crackle3"][Math.floor(Math.random()*3)],{vol:.5+Math.random()*.5,rate:.85+Math.random()*.3});else if(e==="crackleBurst")for(let n=0;n<4;n++)this.play("crackle"+(1+n%3),{delay:n*(.05+Math.random()*.07),vol:.9})}updateRace(t,e){if(!this.ctx||!this.playerVoice)return;let i=this.ctx,n=i.currentTime,r=t.player,a=t.camera,o=this.listener;o.pos.copy(a.position),o.vel.copy(o.pos).sub(o.prev).divideScalar(Math.max(e,.001)),o.prev.copy(o.pos),o.right.setFromMatrixColumn(a.matrixWorld,0).normalize(),o.fwd.setFromMatrixColumn(a.matrixWorld,2).negate().normalize(),this.playerVoice.update(this._racerParams(r,t,e),e);let l=t.racers.filter(h=>!h.isPlayer).map(h=>({r:h,d:h.worldPos.distanceTo(o.pos)})).filter(h=>h.d<140).sort((h,d)=>h.d-d.d).slice(0,4).map(h=>h.r);for(let h of this.aiVoices)h.racer&&!l.includes(h.racer)&&(h.voice.stop(),h.voice=null,h.racer=null);for(let h of l)if(!this.aiVoices.some(d=>d.racer===h)){let d=this.aiVoices.find(f=>!f.racer);d&&(d.racer=h,d.voice=new kc(this,h.clsId,!1))}for(let h of this.aiVoices)if(h.racer){let d=this._racerParams(h.racer,t,e);h.voice.update(d,e);let f=t.relDist(h.racer,r);h.lastRel!==void 0&&Math.sign(f)!==Math.sign(h.lastRel)&&Math.abs(h.racer.x-r.x)<5&&Math.abs(h.racer.speed-r.speed)>6&&this.play("slip",{pos:h.racer.worldPos,vol:1.2,rate:h.racer.clsId==="bike"?1.25:1}),h.lastRel=f}let c=new Set(t.items.projectiles.filter(h=>h.life>0&&h.type!=="bomb"));for(let[h,d]of this.projVoices)c.has(h)||(this._stopProj(d),this.projVoices.delete(h));for(let h of c){!this.projVoices.has(h)&&this.projVoices.size<5&&this.projVoices.set(h,this._startProj(h));let d=this.projVoices.get(h);if(!d)continue;let f=n-d.t0,p=h.mesh.position,x=d.last||p.clone(),g=p.clone().sub(x).divideScalar(Math.max(e,.001));d.last=p.clone();let m=o.pos.clone().sub(p),v=m.length();m.divideScalar(Math.max(v,.001));let M=Vi((180+o.vel.dot(m))/Math.max(30,180-g.dot(m)),.6,1.8),_=(520+700*Math.min(1,f/2.2))*M;d.o1.frequency.setTargetAtTime(_,n,.02),d.o2.frequency.setTargetAtTime(_*1.5,n,.02),d.bp.frequency.setTargetAtTime(_*2,n,.03);let T=this.spatial(p);d.g.gain.setTargetAtTime(T.gain*.35,n,.03),d.pan.pan.setTargetAtTime(T.pan,n,.03)}let u=t.items.projectiles.filter(h=>h.target===r&&h.life>0).map(h=>({p:h,d:t.wrapDiff(r.dist,h.dist)})).filter(h=>h.d>0&&h.d<90).sort((h,d)=>h.d-d.d);if(u.length){let h=u[0];this.locked||(this.locked=!0,this.duck("lock",.15)),this.threatT-=e,this.threatT<=0&&(this.threatT=.07+.45*(h.d/90),this._threatBeep(h.p,r,1-h.d/90))}else this.locked=!1;if(this._musicState(t),this.race){let h=60/(this.race.tier===0?Ka:In),d=Math.floor(this.musTime(n)/h);if(d!==this.race.lastBeat){this.race.lastBeat=d;let f=null,p=85;for(let x of this.ambEmitters){let g=x.pos.distanceTo(o.pos);g<p&&(p=g,f=x)}f&&this.play("elec_pulse",{pos:f.pos,vol:f.h&&f.h.type==="pulse"&&f.h.on?2:1,rate:.9+(d%4===0?.2:0)})}}}_musicState(t){if(!this.race)return;let e=this.ctx.currentTime,i=t.player,n=this.state;if(i.finished)return;if(t.started&&i.lap>=2){n.final||(n.final=!0,this._finalLapRamp());return}let r=0;for(let o of t.racers)o!==i&&o.state==="race"&&o.worldPos.distanceTo(i.worldPos)<15&&r++;t.started&&(r>=2||e-n.combatT<3)&&(n.holdUntil=e+4),this._setTier(t.started&&e<n.holdUntil?1:0)}_startProj(t){let e=this.ctx,i=e.createOscillator(),n=e.createOscillator(),r=e.createBiquadFilter(),a=e.createGain(),o=e.createStereoPanner();i.type="sine",n.type="square",r.type="bandpass",r.Q.value=3,a.gain.value=0;let l=e.createGain();return l.gain.value=.25,i.connect(a),n.connect(l),l.connect(r),r.connect(a),a.connect(o),o.connect(this.bus.sfx),i.start(),n.start(),{o1:i,o2:n,bp:r,g:a,pan:o,t0:e.currentTime}}_stopProj(t){let e=this.ctx.currentTime;t.g.gain.setTargetAtTime(0,e,.02),setTimeout(()=>{try{t.o1.stop(),t.o2.stop(),t.pan.disconnect()}catch{}},200)}_threatBeep(t,e,i){let n=this.ctx,r=n.currentTime;this.hrtf||(this.hrtf=n.createPanner(),this.hrtf.panningModel="HRTF",this.hrtf.distanceModel="linear",this.hrtf.refDistance=1,this.hrtf.maxDistance=1e3,this.hrtf.rolloffFactor=0,this.hrtf.connect(this.bus.ui));let a=Vi((t.x-e.x)/6,-1,1);this.hrtf.positionX?(this.hrtf.positionX.value=a*1.5,this.hrtf.positionY.value=0,this.hrtf.positionZ.value=2):this.hrtf.setPosition(a*1.5,0,2);let o=1500+i*900;for(let[l,c]of[[0,.22],[6,.18]]){let u=n.createOscillator(),h=n.createGain();u.frequency.value=o+l,u.type="sine",h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(c*(.5+i),r+.005),h.gain.exponentialRampToValueAtTime(1e-4,r+.07),u.connect(h),h.connect(this.hrtf),u.start(r),u.stop(r+.08)}}music(){this.startMenuMusic()}stopMusic(){this.stopMenuMusic()}engineStart(){}engineStop(){}engineUpdate(){}};var Bc=class{constructor(t,e){this.game=t,this.root=e,e.innerHTML=`
      <div class="h-tl">
        <div class="h-pos"><b>8</b><sup>th</sup><small>/8</small></div>
        <div class="h-lap">LAP <b>1</b>/${3}</div>
        <div class="h-time">0:00.00</div>
        <ol class="h-board"></ol>
      </div>
      <div class="h-items">
        <div class="slot s0"><i></i><em></em></div>
        <div class="slot s1"><i></i><em></em></div>
        <div class="fusehint"></div>
      </div>
      <canvas class="h-map" width="220" height="220"></canvas>
      <div class="h-speed"><canvas width="200" height="200"></canvas><b>0</b><small>KM/H</small></div>
      <div class="h-drift"><div class="bar"><i></i></div><span></span></div>
      <div class="h-melee"><svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="17"/><circle class="cd" cx="20" cy="20" r="17"/></svg><span>STRIKE</span></div>
      <div class="h-count"></div>
      <div class="h-banner"></div>
      <div class="h-pop"></div>
      <div class="h-feed"></div>
      <div class="h-glitch"></div>
      <div class="h-fps"></div>
      <div class="h-top">
        <button class="h-btn pause" data-act="pause">\u275A\u275A</button>
        <button class="h-btn cam" data-act="cam">\u25F3</button>
      </div>`,this.q=i=>e.querySelector(i),this.el={pos:this.q(".h-pos b"),posSup:this.q(".h-pos sup"),posTot:this.q(".h-pos small"),lap:this.q(".h-lap b"),time:this.q(".h-time"),board:this.q(".h-board"),s0:this.q(".s0"),s1:this.q(".s1"),fuse:this.q(".fusehint"),map:this.q(".h-map"),spdC:this.q(".h-speed canvas"),spd:this.q(".h-speed b"),drift:this.q(".h-drift"),driftBar:this.q(".h-drift i"),driftTxt:this.q(".h-drift span"),melee:this.q(".h-melee"),meleeCd:this.q(".h-melee .cd"),count:this.q(".h-count"),banner:this.q(".h-banner"),pop:this.q(".h-pop"),feedEl:this.q(".h-feed"),glitch:this.q(".h-glitch"),fps:this.q(".h-fps")},this.mapCtx=this.el.map.getContext("2d"),this.spdCtx=this.el.spdC.getContext("2d"),this.cache={},this.frame=0,e.querySelector(".h-items").addEventListener("pointerdown",i=>{this.game.input.edges.fuse=!0,i.preventDefault()}),e.querySelector('[data-act="pause"]').addEventListener("click",()=>this.game.pause()),e.querySelector('[data-act="cam"]').addEventListener("click",()=>{this.game.input.edges.camera=!0})}setup(t){this.race=t,this.mm=t.track.minimapPath(),this.cache={},this.root.classList.toggle("tt",t.mode==="tt"),this.el.count.textContent="",this.el.banner.className="h-banner",this.el.feedEl.innerHTML="",this.el.posTot.textContent="/"+t.racers.length,this.el.board.innerHTML=t.racers.map(()=>"<li><i></i><span></span></li>").join("");let e=document.createElement("canvas");e.width=e.height=220;let i=e.getContext("2d"),{pts:n}=this.mm,r=16,a=220-r*2,o=(1-this.mm.w)*a/2+r,l=(1-this.mm.d)*a/2+r;this.mmT=(f,p)=>[o+(f-this.mm.minx)*this.mm.sc*a,l+(p-this.mm.minz)*this.mm.sc*a];let c=t.cup.pal;i.lineJoin="round",i.lineCap="round",i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=9,i.beginPath(),n.forEach(([f,p],x)=>{let g=o+f*a,m=l+p*a;x?i.lineTo(g,m):i.moveTo(g,m)}),i.closePath(),i.stroke();let u=t.track.maxY-t.track.minY||1;for(let f=0;f<n.length;f++){let p=n[f],x=n[(f+1)%n.length],g=(p[2]-t.track.minY)/u;i.strokeStyle=`rgba(${120+135*g|0},${200+55*g|0},255,${.55+.45*g})`,i.lineWidth=3+g*2.5,i.beginPath(),i.moveTo(o+p[0]*a,l+p[1]*a),i.lineTo(o+x[0]*a,l+x[1]*a),i.stroke()}let[h,d]=[o+n[0][0]*a,l+n[0][1]*a];i.fillStyle="#fff",i.fillRect(h-4,d-4,8,8),this.mmBase=e}countdown(t){let e=this.el.count;e.textContent=t,e.classList.remove("cd-anim"),e.offsetWidth,e.classList.add("cd-anim"),t==="GO!"&&setTimeout(()=>{e.textContent==="GO!"&&(e.textContent="")},900)}banner(t,e){let i=this.el.banner;i.textContent=t,i.className="h-banner",i.offsetWidth,i.className="h-banner show"+(e?" big":"")}pop(t,e="#fff"){let i=this.el.pop;i.textContent=t,i.style.color=e,i.classList.remove("show"),i.offsetWidth,i.classList.add("show")}feed(t,e){let i=document.createElement("div");for(i.textContent=t,i.style.color=e,this.el.feedEl.prepend(i);this.el.feedEl.children.length>4;)this.el.feedEl.lastChild.remove();setTimeout(()=>i.remove(),3500)}glitch(t){this.glitchT=Math.max(this.glitchT||0,t)}_set(t,e,i){this.cache[t]!==e&&(this.cache[t]=e,i(e))}update(t,e){let i=this.race;if(!i)return;let n=i.player,r=this.el;this.frame++,this._set("pos",n.place,p=>{r.pos.textContent=p,r.posSup.textContent=Ba(p).replace(/\d+/,""),r.pos.parentElement.dataset.p=p}),this._set("lap",Math.min(3,Math.max(1,n.lap+1)),p=>r.lap.textContent=p);let a=n.finished?n.finishTime:Math.max(0,i.time);if(this.frame%3===0&&(r.time.textContent=en(a)+(i.mode==="tt"&&isFinite(n.bestLap)?`  \xB7  BEST ${en(n.bestLap)}`:"")),this.frame%6===0&&i.mode!=="tt"){let p=r.board.children;i.order.forEach((x,g)=>{let m=p[g];if(!m)return;let v=x.name+(x.isPlayer?"*":"");m._k!==v&&(m._k=v,m.children[1].textContent=x.name,m.children[0].style.background=fi(x.char.color),m.classList.toggle("me",x.isPlayer))})}let o=(p,x,g)=>{let m=n.rouletteT>0&&(g===1?n.items[1]:n.items[0]&&!n.items[1]),v=(m?"r"+Math.floor(i.time*12):x)||"";this._set("slot"+g,v,()=>{let M=m?Er(["plasma","trap","shield","surge","emp"][Math.floor(i.time*12)%5]):x&&Er(x);p.querySelector("i").textContent=M?M.icon:"",p.querySelector("em").textContent=M&&!m?M.name:"",p.style.setProperty("--c",M?M.color:"#345"),p.classList.toggle("full",!!M),p.classList.toggle("roll",!!m)})};o(r.s0,n.items[0],0),o(r.s1,n.items[1],1);let l=n.items[0]&&n.items[1]&&n.rouletteT<=0?Yn[mc(n.items[0],n.items[1])]:null;this._set("fuse",l?l.id:"",()=>{r.fuse.innerHTML=l?`<b>FUSE \u25B8</b> ${l.icon} ${l.name}`:"",r.fuse.classList.toggle("on",!!l),this.game.touchFuse(!!l)});let c=n.drift,u=[.85,1.75,2.7],h=c.on?he(c.t/u[2],0,1):0;this._set("dr",Math.round(h*100)+"_"+c.level+"_"+c.on,()=>{r.drift.classList.toggle("on",c.on),r.driftBar.style.width=h*100+"%",r.driftBar.style.background=fi(wc[c.level||1]),r.driftTxt.textContent=c.on?["DRIFT","SPARK","OVERCLOCK","OVERDRIVE"][c.level]:"",this.game.touchDriftLevel(c.on?c.level:-1)});let d=n.meleeCd/n.meleeCdMax;this._set("mc",Math.round(d*40),()=>{let p=106.8*d;r.meleeCd.style.strokeDashoffset=p,r.melee.classList.toggle("ready",d<=0),this.game.touchMelee(d)});let f=Math.round(Math.abs(n.speed)*3.6);this._set("spd",f,p=>r.spd.textContent=p),this.frame%2===0&&this._speedo(n),this.frame%2===1&&this._minimap(),this.glitchT>0?(this.glitchT-=t,r.glitch.style.opacity=Math.random()<.5?.45:.12,r.glitch.style.transform=`translate(${(Math.random()-.5)*20}px,${(Math.random()-.5)*8}px)`):r.glitch.style.opacity!=="0"&&(r.glitch.style.opacity="0"),this.game.settings.showFps&&this.frame%15===0?r.fps.textContent=e.toFixed(0)+" FPS \xB7 "+this.game.qualityName():!this.game.settings.showFps&&r.fps.textContent&&(r.fps.textContent="")}_speedo(t){let e=this.spdCtx,i=200,n=i/2;e.clearRect(0,0,i,i);let r=Math.PI*.75,a=Math.PI*2.25,o=t.top*1.5,l=he(Math.abs(t.speed)/o,0,1);e.lineCap="round",e.lineWidth=12,e.strokeStyle="rgba(40,60,100,0.6)",e.beginPath(),e.arc(n,n,80,r,a),e.stroke();let c=e.createLinearGradient(0,i,i,0);c.addColorStop(0,"#00e5ff"),c.addColorStop(.6,"#b04dff"),c.addColorStop(1,"#ff7a1a"),e.strokeStyle=t.boostT>0?"#ffb340":c,e.shadowColor=t.boostT>0?"#ff7a1a":"#00e5ff",e.shadowBlur=14,e.beginPath(),e.arc(n,n,80,r,r+(a-r)*l),e.stroke(),e.shadowBlur=0;for(let u=0;u<=10;u++){let h=r+(a-r)*u/10;e.strokeStyle="rgba(200,230,255,0.55)",e.lineWidth=2,e.beginPath(),e.moveTo(n+Math.cos(h)*64,n+Math.sin(h)*64),e.lineTo(n+Math.cos(h)*70,n+Math.sin(h)*70),e.stroke()}t.slipT>0&&(e.strokeStyle="rgba(200,240,255,0.9)",e.lineWidth=4,e.beginPath(),e.arc(n,n,94,-Math.PI/2,-Math.PI/2+Math.PI*2*he(t.slipT/1.3,0,1)),e.stroke())}_minimap(){let t=this.mapCtx,e=this.race;t.clearRect(0,0,220,220),t.drawImage(this.mmBase,0,0);let i=e.track.P,n=e.track.n;for(let a of e.items.projectiles){let o=e.track.idx(a.dist),[l,c]=this.mmT(i[o].x,i[o].z);t.fillStyle="#6ad8ff",t.fillRect(l-2,c-2,4,4)}let r=[...e.racers].sort((a,o)=>(a.isPlayer?1:0)-(o.isPlayer?1:0));for(let a of r){let[o,l]=this.mmT(a.worldPos.x,a.worldPos.z);t.fillStyle=fi(a.char.color),t.beginPath(),t.arc(o,l,a.isPlayer?7:4.5,0,6.29),t.fill(),a.isPlayer&&(t.strokeStyle="#fff",t.lineWidth=2.5,t.stroke())}}};var Qp="ncr_profile_v1",tm="ncr_settings_v1";function Bu(){return{paint:"carbon",neon:"char",trail:"std",up:{engine:0,turbo:0,grip:0,armor:0,capacitor:0}}}function Hc(){return{v:1,bits:500,stats:{races:0,wins:0,podiums:0,rockets:0,ttRecords:0,ttTracks:0,distance:0,driftBoosts:0,drift1:0,drift2:0,drift3:0,slips:0,pads:0,air:0,lands:0,plasmaHits:0,trapHits:0,empHits:0,blocks:0,surges:0,fusions:0,fuseMask:0,meleeHits:0,knockoffs:0,evades:0,purchases:0,bitsEarned:0,winsBy:{},winsChar:{},golds:{}},flags:{},ach:{},chars:[...za],trophies:{},tt:{},owned:{paint:["carbon"],neon:["char"],trail:["std"]},garage:{bike:Bu(),quad:Bu(),kart:Bu()},lastChar:"jarvis",lastCls:"kart",lastClock:0}}function jp(){return{steerMode:"stick",autoAccel:!1,leftHanded:!1,buttonScale:1,buttonOpacity:.55,assist:!0,camera:"chase",quality:"quality",dynamicRes:!0,fpsCap:60,musicVol:.5,sfxVol:.8,haptics:!0,showFps:!1}}function em(){try{let s=JSON.parse(localStorage.getItem(Qp));if(s&&s.v===1){let t=Hc();return{...t,...s,stats:{...t.stats,...s.stats},owned:{...t.owned,...s.owned},garage:{...t.garage,...s.garage}}}}catch{}return Hc()}function Ln(s){try{localStorage.setItem(Qp,JSON.stringify(s))}catch{}}function im(){try{let s=JSON.parse(localStorage.getItem(tm));if(s){let t={auto:"quality",high:"quality",perf:"performance"};return t[s.quality]&&(s.quality=t[s.quality]),{...jp(),...s}}}catch{}return jp()}function nm(s){try{localStorage.setItem(tm,JSON.stringify(s))}catch{}}function Vc(s){return Object.values(s.up).reduce((t,e)=>t+e,0)}function sm(s,t,e){let i=s.stats,n=e.st;for(let r of["driftBoosts","drift1","drift2","drift3","slips","pads","air","lands","plasmaHits","trapHits","empHits","blocks","surges","fusions","meleeHits","knockoffs","evades","distance","rockets"])i[r]=(i[r]||0)+(n[r]||0);i.fuseMask=i.fuseMask|0|n.fuseMask,e.mode!=="tt"&&(i.races++,e.place===1&&(i.wins++,i.winsBy[t.player.clsId]=(i.winsBy[t.player.clsId]||0)+1,i.winsChar[t.player.char.id]=(i.winsChar[t.player.char.id]||0)+1),e.place<=3&&i.podiums++),Object.assign(s.flags,e.flags),s.bits+=e.bits,i.bitsEarned+=e.bits}var zc=class{constructor(t){this.game=t}get p(){return this.game.profile}check(t){let e=this.p,i=[];e.flags.allUnlocked=je.every(r=>e.chars.includes(r.id));let n=!0;for(;n;){n=!1;for(let r of Es){if(e.ach[r.id])continue;let a=!1;try{a=r.test(e.stats,t,e.flags)}catch{}if(a){e.ach[r.id]=Date.now(),e.bits+=r.reward,e.stats.bitsEarned+=r.reward,i.push(r);for(let o of je)o.unlock===r.id&&!e.chars.includes(o.id)&&(e.chars.push(o.id),i.push({unlockChar:o}));e.flags.allUnlocked=je.every(o=>e.chars.includes(o.id)),n=!0}}}return i.length&&Ln(e),i}count(){return Object.keys(this.p.ach).length}};var Ja=(s,t)=>`<div class="stat"><span>${s}</span><div class="sb"><i style="width:${t*10}%"></i></div></div>`,Yy=s=>s===1?'<b class="tr g">\u25CF</b>':s===2?'<b class="tr s">\u25CF</b>':s===3?'<b class="tr b">\u25CF</b>':'<b class="tr n">\u25CB</b>',Gc=class{constructor(t,e){this.game=t,this.root=e,this.stack=[],this.sel={char:t.profile.lastChar,cls:t.profile.lastCls,clock:t.profile.lastClock||0,cup:0,track:0,mode:"cup",gcls:t.profile.lastCls,gtab:"paint"},e.addEventListener("click",i=>{let n=i.target.closest("[data-act]");!n||n.classList.contains("disabled")||(this.game.audio.unlock(),this.game.audio.sfx("uiok"),this.act(n.dataset.act,n.dataset,n))}),e.addEventListener("input",i=>{let n=i.target;n.dataset.set&&this.setSetting(n.dataset.set,n.type==="range"?parseFloat(n.value):n.value)}),this.previewCache={}}get p(){return this.game.profile}show(t,e=!0){e&&this.screen&&this.screen!==t&&this.stack.push(this.screen),this.screen=t,this.root.className="ui on scr-"+t,this.root.innerHTML=this["r_"+t](),this.after&&this.after(),this.after=null,this.focusFirst(),this.update3d(),this.prefetch()}prefetch(){let t=this.screen,e=this.game.audio;e.ctx&&(t==="tracks"?e.prepareCup(Ge[this.sel.cup]):t==="cups"&&e.prepareCup(Ge[Math.max(0,Ge.findIndex((i,n)=>!this.cupUnlocked(n+1)))]||Ge[0]))}refresh(){let t=this.focusEl&&this.focusEl.dataset.key,e=this.root.querySelector(".scroll"),i=e?e.scrollTop:0;this.root.innerHTML=this["r_"+this.screen]();let n=this.root.querySelector(".scroll");n&&(n.scrollTop=i);let r=t&&this.root.querySelector(`[data-key="${t}"]`);r?this.setFocus(r):this.focusFirst(),this.update3d()}hide(){this.root.className="ui",this.root.innerHTML="",this.screen=null,this.stack=[]}back(){let t=this.screen;if(t==="pause")return this.game.resume(),!0;if(["results","standings","trophy","loading","title"].includes(t))return!0;if(t==="main")return this.show("quit"),!0;let e=this.stack.pop();return e&&(this.game.audio.sfx("uiback"),this.show(e,!1)),!0}focusables(){return[...this.root.querySelectorAll("[data-act]:not(.disabled), [data-f]")].filter(t=>t.offsetParent!==null)}focusFirst(){let t=this.root.querySelector(".selected[data-act]")||this.root.querySelector("[data-act].primary")||this.focusables()[0];t&&this.setFocus(t,!0)}setFocus(t,e){this.focusEl&&this.focusEl.classList.remove("focus"),this.focusEl=t,t&&(t.classList.add("focus"),t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"}))}nav(t){if(!this.screen)return!1;if(t==="back")return this.back();if(t==="start"&&this.screen==="title")return this.act("start"),!0;if(t==="prev"||t==="next")return this.tab(t==="prev"?-1:1),!0;if(t==="ok"){if(this.focusEl&&document.body.contains(this.focusEl)){if(this.focusEl.tagName==="INPUT"&&this.focusEl.type==="range")return!0;this.focusEl.click()}else this.screen==="title"&&this.act("start");return!0}let e=this.focusEl&&document.body.contains(this.focusEl)?this.focusEl:null;if(e&&e.tagName==="INPUT"&&e.type==="range"&&(t==="left"||t==="right")){let c=parseFloat(e.step)||.1;return e.value=Math.min(parseFloat(e.max),Math.max(parseFloat(e.min),parseFloat(e.value)+(t==="left"?-c:c))),this.setSetting(e.dataset.set,parseFloat(e.value)),!0}let i=this.focusables();if(!e)return this.focusFirst(),!0;let n=e.getBoundingClientRect(),r=n.left+n.width/2,a=n.top+n.height/2,o=null,l=1/0;for(let c of i){if(c===e)continue;let u=c.getBoundingClientRect(),h=u.left+u.width/2,d=u.top+u.height/2,f=h-r,p=d-a,x,g;if(t==="left"?(x=-f,g=Math.abs(p)):t==="right"?(x=f,g=Math.abs(p)):t==="up"?(x=-p,g=Math.abs(f)):(x=p,g=Math.abs(f)),x<=4)continue;let m=x+g*2.2;m<l&&(l=m,o=c)}return o&&(this.setFocus(o),this.game.audio.sfx("ui")),!0}tab(t){if(this.screen==="select"){let e=["bike","quad","kart"];this.sel.cls=e[(e.indexOf(this.sel.cls)+t+3)%3],this.refresh()}else if(this.screen==="tracks")this.sel.cup=(this.sel.cup+t+6)%6,this.refresh();else if(this.screen==="cups")this.sel.clock=Math.max(0,Math.min(this.maxClock(),this.sel.clock+t)),this.refresh();else if(this.screen==="garage"){let e=["bike","quad","kart"];this.sel.gcls=e[(e.indexOf(this.sel.gcls)+t+3)%3],this.refresh()}}update3d(){let t=this.game.menu3d;if(!t)return;let e=this.screen;if(e==="select"){let i=je.find(n=>n.id===this.sel.char);t.showVehicle(this.sel.cls,this.game.vehicleLook(this.sel.cls,i),i),t.setView("right")}else if(e==="garage"){let i=je.find(n=>n.id===this.sel.char);t.showVehicle(this.sel.gcls,this.game.vehicleLook(this.sel.gcls,i),i),t.setView("right")}else if(e==="title"||e==="main"){let i=je.find(n=>n.id===this.p.lastChar);t.showVehicle(this.p.lastCls,this.game.vehicleLook(this.p.lastCls,i),i),t.setView(e==="title"?"center":"right")}else t.setView("away")}maxClock(){let t=this.p.trophies;return Object.keys(t).some(e=>e.endsWith("_1")&&t[e]===1)?2:1}cupUnlocked(t){if(t===0)return!0;let e=this.p.trophies;return[0,1,2].some(i=>e[`${t-1}_${i}`])}act(t,e={}){let i=this.game,n=this.sel;switch(t){case"start":i.audio.unlock(),i.menuMusic(),this.show("main",!1);break;case"mode":n.mode=e.v,this.show("select");break;case"garage":this.show("garage");break;case"ach":this.show("ach");break;case"guide":this.show("guide");break;case"settings":this.show("settings");break;case"quit":this.show("quit");break;case"exitapp":i.exitApp();break;case"back":this.back();break;case"char":{let r=je.find(a=>a.id===e.v);if(!this.p.chars.includes(r.id)){i.audio.sfx("uiback");return}n.char=r.id,n.cls=r.cls,this.refresh();break}case"cls":n.cls=e.v,this.refresh();break;case"selectok":this.p.lastChar=n.char,this.p.lastCls=n.cls,Ln(this.p),this.show(n.mode==="cup"?"cups":"tracks");break;case"clock":n.clock=+e.v,this.p.lastClock=n.clock,this.refresh();break;case"cup":if(!this.cupUnlocked(+e.v))return;n.cup=+e.v,i.startCup(n.cup,n.clock,n.char,n.cls);break;case"tcup":n.cup=+e.v,this.refresh(),this.prefetch();break;case"track":n.track=+e.v,i.startSingle(n.mode,n.cup,n.track,n.clock,n.char,n.cls);break;case"gcls":n.gcls=e.v,this.refresh();break;case"gtab":n.gtab=e.v,this.refresh();break;case"buy":this.buy(e.kind,e.v);break;case"up":this.upgrade(e.v,+e.d);break;case"set":this.setSetting(e.k,e.v==="true"?!0:e.v==="false"?!1:e.v),this.refresh();break;case"resetsave":this.show("confirmreset");break;case"doreset":i.resetProfile(),this.show("main",!1);break;case"resume":i.resume();break;case"restart":i.restartRace();break;case"togglecam":i.toggleCamera(),this.refresh();break;case"quitrace":i.quitToMenu();break;case"psettings":this.show("settings");break;case"continue":i.afterResults();break;case"nextrace":i.nextCupRace();break;case"retry":i.restartRace();break;case"menu":i.quitToMenu();break}}setSetting(t,e){let i=this.game.settings;i[t]=e,this.game.saveSettings(),(t==="musicVol"||t==="sfxVol")&&this.game.audio.applyVolumes(),t==="fpsCap"&&(i[t]=+e),(t==="quality"||t==="dynamicRes")&&this.game.applyQuality(),this.game.input.applyLayout()}buy(t,e){let n=(t==="paint"?Tr:t==="neon"?Va:Mu).find(a=>a.id===e),r=this.p.garage[this.sel.gcls];if(!this.p.owned[t].includes(e)){if(this.p.bits<n.cost){this.game.audio.sfx("uiback"),this.toastLocal("Not enough bits");return}this.p.bits-=n.cost,this.p.owned[t].push(e),this.p.stats.purchases++,this.game.audio.sfx("unlock"),this.game.checkAchievements(null)}r[t]=e,Ln(this.p),this.refresh()}upgrade(t,e){let i=this.p.garage[this.sel.gcls],n=bu.find(a=>a.id===t),r=i.up[t];if(e>0){if(r>=3)return;if(Vc(i)>=Ga){this.toastLocal("Power budget full \u2014 remove a level elsewhere"),this.game.audio.sfx("uiback");return}let a=i.bought&&i.bought[t]||0;if(r>=a){let o=n.costs[r];if(this.p.bits<o){this.toastLocal("Not enough bits"),this.game.audio.sfx("uiback");return}this.p.bits-=o,this.p.stats.purchases++,i.bought=i.bought||{},i.bought[t]=r+1}i.up[t]=r+1,Vc(i)>=Ga&&(this.p.flags.maxed=!0),this.game.checkAchievements(null)}else r>0&&(i.up[t]=r-1);Ln(this.p),this.refresh()}toastLocal(t){this.game.toast(t,"","#ff8090")}hdr(t,e=""){return`<header><button class="back" data-act="back">\u25C0</button><h2>${t}</h2><span class="sub">${e}</span><span class="bits">\u25C6 ${this.p.bits.toLocaleString()}</span></header>`}r_title(){return`<div class="title">
      <div class="logo"><span class="l1">NEON</span><span class="l2">CYBER RUSH</span></div>
      <div class="tag">COMBAT RACING \xB7 8 RACERS \xB7 24 CIRCUITS</div>
      <button class="press primary" data-act="start">TAP OR PRESS \u24B6 TO START</button>
      <div class="ver">v1.0 \xB7 ${this.game.platform}</div>
    </div>`}r_main(){return`<div class="main">
      <div class="logo sm"><span class="l1">NEON</span><span class="l2">CYBER RUSH</span></div>
      <nav class="menu">
        <button data-act="mode" data-v="cup" class="primary big">TOURNAMENT<small>6 cups \xB7 championship points</small></button>
        <button data-act="mode" data-v="quick" class="big">QUICK RACE<small>any unlocked circuit</small></button>
        <button data-act="mode" data-v="tt" class="big">TIME TRIAL<small>beat your best laps</small></button>
        <div class="row">
          <button data-act="garage">GARAGE</button>
          <button data-act="ach">ACHIEVEMENTS <small>${this.game.ach.count()}/${Es.length}</small></button>
        </div>
        <div class="row">
          <button data-act="guide">GUIDE</button>
          <button data-act="settings">SETTINGS</button>
        </div>
      </nav>
      <div class="bits corner">\u25C6 ${this.p.bits.toLocaleString()} BITS</div>
    </div>`}r_quit(){return'<div class="dialog"><h2>EXIT NEON CYBER RUSH?</h2><div class="row"><button data-act="exitapp">EXIT</button><button class="primary" data-act="back">STAY</button></div></div>'}r_confirmreset(){return'<div class="dialog"><h2>ERASE ALL PROGRESS?</h2><p>Achievements, bits, trophies and garage will be wiped.</p><div class="row"><button data-act="doreset">ERASE</button><button class="primary" data-act="back">CANCEL</button></div></div>'}r_select(){let t=this.sel,e=je.find(o=>o.id===t.char),i=ws[t.cls],n=je.map(o=>{let l=!this.p.chars.includes(o.id),c=l?Es.find(u=>u.id===o.unlock):null;return`<button class="cc ${o.id===t.char?"selected":""} ${l?"locked":""}" data-act="char" data-v="${o.id}" data-key="c_${o.id}" style="--c:${fi(o.color)};--a:${fi(o.accent)}">
        <div class="av">${l?"\u{1F512}":o.name[0]}</div><b>${l?"???":o.name}</b>${l?`<small>${c.name}</small>`:`<small>${ws[o.cls].short}</small>`}</button>`}).join(""),r=["bike","quad","kart"].map(o=>`<button class="tab ${o===t.cls?"selected":""}" data-act="cls" data-v="${o}" data-key="t_${o}">${ws[o].short}${o===e.cls?" \u2605":""}</button>`).join(""),a=i.stats;return`${this.hdr("SELECT RACER",t.mode==="cup"?"TOURNAMENT":t.mode==="tt"?"TIME TRIAL":"QUICK RACE")}
      <div class="sel">
        <div class="grid12">${n}</div>
        <div class="info" style="--c:${fi(e.color)}">
          <h3>${e.name}</h3><div class="ttl">${e.title}</div>
          <p class="perk">\u25C8 ${e.perk}</p>
          <div class="tabs">${r}</div>
          <div class="clsname">${i.name}</div>
          <p class="blurb">${i.blurb}</p>
          ${Ja("SPEED",a.speed)}${Ja("ACCEL",a.accel)}${Ja("HANDLING",a.handling)}${Ja("ARMOR",a.armor)}${Ja("DRIFT",a.drift)}
          <button class="primary go" data-act="selectok">CONTINUE \u25B6</button>
        </div>
      </div>`}r_cups(){let t=this.sel,e=this.maxClock(),i=nn.map(r=>`<button class="tab ${r.id===t.clock?"selected":""} ${r.id>e?"disabled":""}" data-act="clock" data-v="${r.id}" data-key="k_${r.id}">${r.name}<small>${r.id>e?"\u{1F512} Gold a cup at 2.0":r.label}</small></button>`).join(""),n=Ge.map((r,a)=>{let o=this.cupUnlocked(a),l=nn.map(c=>Yy(this.p.trophies[`${a}_${c.id}`])).join("");return`<button class="cup ${o?"":"locked disabled"}" data-act="cup" data-v="${a}" data-key="cup_${a}" style="--c:${fi(r.pal.a)};--b:${fi(r.pal.b)}">
        <h4>${r.name}</h4><small>${r.sub}</small>
        <ul>${r.tracks.map(c=>`<li>${c.name}</li>`).join("")}</ul>
        <div class="tros">${o?l:"\u{1F512} Podium the previous cup"}</div></button>`}).join("");return`${this.hdr("TOURNAMENTS","L2/R2 change clock speed")}<div class="clocks">${i}</div><div class="cups scroll">${n}</div>`}trackPreview(t,e){let i=t+"_"+e;if(this.previewCache[i])return this.previewCache[i];let n=new wr(Ge[t],Ge[t].tracks[e]),r=n.minimapPath(),a=document.createElement("canvas");a.width=160,a.height=110;let o=a.getContext("2d"),l=96,c=(160-r.w*l)/2,u=(110-r.d*l)/2,h=n.maxY-n.minY||1;o.lineCap="round";for(let p=0;p<r.pts.length;p++){let x=r.pts[p],g=r.pts[(p+1)%r.pts.length],m=(x[2]-n.minY)/h;o.strokeStyle=`rgba(${100+155*m|0},${200+55*m|0},255,${.5+.5*m})`,o.lineWidth=2+m*2.5,o.beginPath(),o.moveTo(c+x[0]*l,u+x[1]*l),o.lineTo(c+g[0]*l,u+g[1]*l),o.stroke()}let f={url:a.toDataURL(),len:Math.round(n.L),jumps:n.jumps.length,cross:n.crossings.length>0};return this.previewCache[i]=f,f}r_tracks(){let t=this.sel,e=Ge.map((a,o)=>`<button class="tab ${o===t.cup?"selected":""} ${this.cupUnlocked(o)?"":"disabled"}" data-act="tcup" data-v="${o}" data-key="tc_${o}" style="--c:${fi(a.pal.a)}">${a.name.replace(" CUP","")}</button>`).join(""),i=Ge[t.cup],n=i.tracks.map((a,o)=>{let l=this.trackPreview(t.cup,o),c=this.p.tt[`${t.cup}_${o}`];return`<button class="trk" data-act="track" data-v="${o}" data-key="tr_${o}" style="--c:${fi(i.pal.a)}">
        <img src="${l.url}" alt=""><h4>${a.name}</h4>
        <small>${(l.len/1e3).toFixed(2)} km \xB7 ${l.jumps} jump${l.jumps===1?"":"s"}${l.cross?" \xB7 multi-tier":""}</small>
        <small class="haz">${a.hz.map(u=>({barrier:"Barriers",firewall:"Firewalls",mine:"Cyber-traps",pulse:"Glitch zones"})[u]).join(" \xB7 ")}</small>
        ${c?`<small class="best">BEST ${en(c.time)} \xB7 LAP ${en(c.lap)}</small>`:""}</button>`}).join(""),r=t.mode==="tt"?"":`<div class="clocks sm">${nn.map(a=>`<button class="tab ${a.id===t.clock?"selected":""} ${a.id>this.maxClock()?"disabled":""}" data-act="clock" data-v="${a.id}" data-key="k_${a.id}">${a.name}</button>`).join("")}</div>`;return`${this.hdr(t.mode==="tt"?"TIME TRIAL":"QUICK RACE","SELECT CIRCUIT")}<div class="tabs ctabs">${e}</div>${r}<div class="trks">${n}</div>`}r_garage(){let t=this.sel,e=this.p.garage[t.gcls],i=["bike","quad","kart"].map(a=>`<button class="tab ${a===t.gcls?"selected":""}" data-act="gcls" data-v="${a}" data-key="g_${a}">${ws[a].short}</button>`).join(""),n=["paint","neon","trail","tune"].map(a=>`<button class="tab ${a===t.gtab?"selected":""}" data-act="gtab" data-v="${a}" data-key="gt_${a}">${{paint:"PAINT",neon:"NEON",trail:"TRAIL",tune:"TUNING"}[a]}</button>`).join(""),r="";if(t.gtab==="tune"){let a=Vc(e);r=`<div class="budget">POWER BUDGET <b>${a}/${Ga}</b><div class="pips">${Array.from({length:Ga},(o,l)=>`<i class="${l<a?"on":""}"></i>`).join("")}</div></div>`+bu.map(o=>{let l=e.up[o.id],c=e.bought&&e.bought[o.id]||0,u=l<3?l<c?"OWNED":"\u25C6 "+o.costs[l]:"MAX";return`<div class="upg"><div><b>${o.name}</b><small>${o.desc}</small></div>
            <button class="pm" data-act="up" data-v="${o.id}" data-d="-1" data-key="um_${o.id}">\u2212</button>
            <div class="lv">${[0,1,2].map(h=>`<i class="${h<l?"on":h<c?"own":""}"></i>`).join("")}</div>
            <button class="pm" data-act="up" data-v="${o.id}" data-d="1" data-key="up_${o.id}">+</button><span class="cost">${u}</span></div>`}).join("")+'<p class="note">Bought levels stay owned \u2014 re-tune freely within the budget.</p>'}else r='<div class="swatches">'+(t.gtab==="paint"?Tr:t.gtab==="neon"?Va:Mu).map(o=>{let l=this.p.owned[t.gtab].includes(o.id),c=e[t.gtab]===o.id,u=t.gtab==="trail"?{std:"#7affff",fire:"linear-gradient(90deg,#ff3a1a,#ffd040)",rainbow:"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,violet)",glitch:"repeating-linear-gradient(90deg,#fff 0 4px,#000 4px 7px,#0ff 7px 12px)",binary:"repeating-linear-gradient(90deg,#4f8 0 6px,#031 6px 10px)"}[o.id]:o.hex==null?fi(je.find(h=>h.id===t.char).color):fi(o.hex);return`<button class="sw ${c?"selected":""}" data-act="buy" data-kind="${t.gtab}" data-v="${o.id}" data-key="sw_${o.id}"><i style="background:${u}"></i><b>${o.name}</b><small>${c?"EQUIPPED":l?"OWNED":"\u25C6 "+o.cost}</small></button>`}).join("")+"</div>";return`${this.hdr("GARAGE","L2/R2 switch vehicle")}<div class="gar"><div class="gl"><div class="tabs">${i}</div><div class="tabs">${n}</div><div class="scroll">${r}</div></div></div>`}r_ach(){let t=this.p,e=Es.map(i=>{let n=!!t.ach[i.id];return`<div class="ac ${n?"got":""}" data-f="1"><i>${n?"\u2605":"\u2606"}</i><div><b>${i.name}</b><small>${i.desc}</small></div><span>\u25C6 ${i.reward}</span></div>`}).join("");return`${this.hdr("ACHIEVEMENTS",`${this.game.ach.count()} / ${Es.length} UNLOCKED`)}<div class="achs scroll">${e}</div>`}r_guide(){let t=Object.entries(Yn).map(([i,n])=>{let[r,a]=i.split("+");return`<div class="fz" data-f="1"><span>${Ss[r].icon}+${Ss[a].icon}</span><b style="color:${n.color}">${n.icon} ${n.name}</b><small>${n.desc}</small></div>`}).join(""),e=Object.entries(Ss).map(([i,n])=>`<div class="fz" data-f="1"><span style="color:${n.color}">${n.icon}</span><b>${n.name}</b><small>${n.desc}</small></div>`).join("");return`${this.hdr("RACER GUIDE")}
    <div class="guide scroll">
      <section data-f="1"><h3>THE RACE</h3><p>8 racers, ${3} laps. Points per place: ${pc.join(" \xB7 ")}. Top 3 in a tournament wins a trophy; a podium unlocks the next cup. Gold any cup at 2.0 GHz to unlock 3.0 GHz.</p>
      <p><b>Rocket start:</b> press accelerate just as "1" fades (about half a second before GO). Hold it too early and you stall.</p></section>
      <section data-f="1"><h3>DRIFT &amp; CHARGE</h3><p>Hold DRIFT while steering into a bend. Sparks change colour as charge builds: <b style="color:#3fd8ff">SPARK</b> \u2192 <b style="color:#c060ff">OVERCLOCK</b> \u2192 <b style="color:#ff8a1a">OVERDRIVE</b>. Release for a boost \u2014 longer charge, bigger boost. Steering into the drift tightens it and charges faster.</p>
      <p><b>Overdrive Slam:</b> a Melee Strike while holding Overclock or higher charge spends the charge for a 1.5\xD7 shove that also spins the target.</p></section>
      <section data-f="1"><h3>MELEE STRIKE</h3><p>Every vehicle has a cooldown shove. Near a rival it side-swipes them across the track \u2014 shove them off a rail-less edge (red warning lines) to derez them. With nobody in reach it becomes a <b>side-dash</b>: dash at the right moment and a homing Plasma Sphere misses you. Quads hit hardest; bikes recharge fastest.</p></section>
      <section data-f="1"><h3>AIR, SLIPSTREAM, STRIPS</h3><p>Tap DRIFT while airborne to arm a <b>perfect landing</b> boost. Ride close behind a rival to charge the slipstream ring on your speedometer. Boost strips sit before every ramp \u2014 miss them and you may not clear the gap.</p></section>
      <section data-f="1"><h3>ITEMS</h3><p>Capsules give items into two slots. Leaders get defensive items; racers at the back get speed and firepower.</p><div class="fzs">${e}</div></section>
      <section data-f="1"><h3>FUSION \u2014 COMBINE BOTH SLOTS</h3><p>With two items held, press FUSE (or tap the item slots) to merge them into one empowered item. Every pairing makes something different:</p><div class="fzs">${t}</div></section>
      <section data-f="1"><h3>CONTROLLER</h3><p>RT accelerate \xB7 LT brake/reverse \xB7 Left stick steer \xB7 R1 drift \xB7 L1 or X item \xB7 Y fuse \xB7 B melee \xB7 Right-stick click camera \xB7 Push right stick down to look back \xB7 START pause.</p></section>
      <section data-f="1"><h3>TOUCH</h3><p>Left thumb steers (floating stick, buttons, or tilt). Right thumb: GO, DRIFT, ITEM, STRIKE, BRAKE. Slide your thumb between GO and DRIFT without lifting. Turn on Auto-Accelerate in Settings for one-thumb play.</p></section>
    </div>`}r_settings(){let t=this.game.settings,e=(n,r,a)=>`<button class="tab ${String(t[n])===String(r)?"selected":""}" data-act="set" data-k="${n}" data-v="${r}" data-key="s_${n}_${r}">${a}</button>`,i=(n,r,a,o,l)=>`<label class="sl"><span>${l}</span><input type="range" data-set="${n}" min="${r}" max="${a}" step="${o}" value="${t[n]}" data-f="1" data-key="r_${n}"></label>`;return`${this.hdr("SETTINGS")}<div class="settings scroll">
      <div class="srow"><span>STEERING</span>${e("steerMode","stick","STICK")}${e("steerMode","buttons","BUTTONS")}${e("steerMode","tilt","TILT")}</div>
      <div class="srow"><span>AUTO-ACCELERATE</span>${e("autoAccel",!0,"ON")}${e("autoAccel",!1,"OFF")}</div>
      <div class="srow"><span>STEERING ASSIST</span>${e("assist",!0,"ON")}${e("assist",!1,"OFF")}</div>
      <div class="srow"><span>HANDEDNESS</span>${e("leftHanded",!1,"RIGHT")}${e("leftHanded",!0,"LEFT")}</div>
      ${i("buttonScale",.7,1.4,.05,"BUTTON SIZE")}${i("buttonOpacity",.2,1,.05,"BUTTON OPACITY")}
      <div class="srow"><span>CAMERA</span>${e("camera","chase","OVER-SHOULDER")}${e("camera","iso","ISOMETRIC")}</div>
      <div class="srow"><span>UPSCALER</span>${e("quality","quality","QUALITY")}${e("quality","balanced","BALANCED")}${e("quality","performance","PERFORMANCE")}${e("quality","native","NATIVE")}</div>
      <div class="srow"><span>DYNAMIC RES</span>${e("dynamicRes",!0,"ON")}${e("dynamicRes",!1,"OFF")}</div>
      <div class="srow"><span>FRAME RATE</span>${e("fpsCap","60","60 FPS")}${e("fpsCap","30","30 FPS")}</div>
      <div class="srow"><span>HAPTICS</span>${e("haptics",!0,"ON")}${e("haptics",!1,"OFF")}</div>
      <div class="srow"><span>SHOW FPS</span>${e("showFps",!0,"ON")}${e("showFps",!1,"OFF")}</div>
      ${i("musicVol",0,1,.05,"MUSIC")}${i("sfxVol",0,1,.05,"EFFECTS")}
      <div class="srow"><span>DATA</span><button class="tab danger" data-act="resetsave" data-key="reset">RESET PROGRESS</button></div>
    </div>`}r_loading(){let t=this.loadInfo||{};return`<div class="loading" style="--c:${t.color||"#0ff"}"><small>${t.cup||""}</small><h2>${t.track||""}</h2><div class="lbar"><i></i></div><p class="tip">${t.tip||""}</p></div>`}r_pause(){let t=this.game.race;return`<div class="dialog pause"><h2>PAUSED</h2><small>${t?t.cup.name+" \xB7 "+t.def.name:""}</small>
      <nav class="menu">
        <button class="primary" data-act="resume">RESUME</button>
        <button data-act="restart">RESTART RACE</button>
        <button data-act="togglecam">CAMERA: ${t&&t.camMode==="iso"?"ISOMETRIC":"OVER-SHOULDER"}</button>
        <button data-act="psettings">SETTINGS</button>
        <button data-act="quitrace">QUIT TO MENU</button>
      </nav></div>`}r_results(){let t=this.game.lastResult,e=this.game,i=t.mode==="tt"?"":t.order.map(c=>`<tr class="${c.isPlayer?"me":""}"><td>${c.place}</td><td><i style="background:${fi(c.color)}"></i>${c.name}</td><td>${en(c.time)}</td><td>+${c.pts}</td></tr>`).join(""),n=t.st,r=[["Drift boosts",n.driftBoosts],["Item hits",n.plasmaHits+n.trapHits+n.empHits],["Melee strikes",n.meleeHits],["Knock-offs",n.knockoffs],["Slipstreams",n.slips],["Perfect landings",n.lands]].filter(c=>c[1]>0).map(c=>`<li>${c[0]} <b>${c[1]}</b></li>`).join(""),a=(t.newAch||[]).map(c=>c.unlockChar?`<li class="unl">NEW RACER UNLOCKED: <b>${c.unlockChar.name}</b></li>`:`<li>\u2605 ${c.name} <b>+${c.reward}</b></li>`).join(""),o=t.mode==="tt"?`<div class="ttres"><h3>${en(t.time)}</h3><p>Best lap ${en(t.bestLap)}</p>${t.record?'<p class="rec">NEW RECORD!</p>':t.prev?`<p>Record ${en(t.prev.time)}</p>`:""}<ol>${t.lapTimes.map(c=>`<li>${en(c)}</li>`).join("")}</ol></div>`:"",l=t.mode==="cup";return`<div class="results">
      <h2>${t.mode==="tt"?"TIME TRIAL":t.place===1?"VICTORY":Ba(t.place).toUpperCase()+" PLACE"}</h2>
      <small>${Ge[t.cup].name} \xB7 ${Ge[t.cup].tracks[t.track].name}</small>
      <div class="rcols">
        ${o}${i?`<table>${i}</table>`:""}
        <div class="rside"><ul class="style">${r}</ul><div class="earn">+\u25C6 ${t.bits.toLocaleString()} BITS</div>${a?`<ul class="newach">${a}</ul>`:""}</div>
      </div>
      <nav class="row">${l?'<button class="primary" data-act="continue">STANDINGS \u25B6</button>':'<button class="primary" data-act="retry">RACE AGAIN</button><button data-act="menu">MENU</button>'}</nav>
    </div>`}r_standings(){let t=this.game.cupState,e=Object.entries(t.points).sort((r,a)=>a[1]-r[1]).map(([r,a],o)=>{let l=je.find(c=>c.id===r);return`<tr class="${r===t.char?"me":""}"><td>${o+1}</td><td><i style="background:${fi(l.color)}"></i>${l.name}</td><td>${a}</td></tr>`}).join(""),i=t.race>=3,n=i?"":Ge[t.cup].tracks[t.race+1].name;return`<div class="results"><h2>${Ge[t.cup].name}</h2><small>RACE ${t.race+1} OF 4 \xB7 ${nn[t.clock].name}</small>
      <table class="stand">${e}</table>
      <nav class="row">${i?'<button class="primary" data-act="nextrace">AWARDS \u25B6</button>':`<button class="primary" data-act="nextrace">NEXT: ${n.toUpperCase()} \u25B6</button><button data-act="menu">QUIT CUP</button>`}</nav></div>`}r_trophy(){let t=this.game.trophyResult,e=["","GOLD","SILVER","BRONZE"][t.trophy]||"NO TROPHY",i=["#667","#ffd84d","#d8e4f0","#e08a4c"][t.trophy]||"#667",n=(t.newAch||[]).map(r=>r.unlockChar?`<li class="unl">NEW RACER UNLOCKED: <b>${r.unlockChar.name}</b></li>`:`<li>\u2605 ${r.name} <b>+${r.reward}</b></li>`).join("");return`<div class="results trophy" style="--t:${i}"><div class="cupicon">\u{1F3C6}</div><h2>${e}</h2><small>${Ge[t.cup].name} \xB7 ${nn[t.clock].name} \xB7 FINISHED ${Ba(t.place).toUpperCase()}</small>
      <div class="earn">+\u25C6 ${t.bits.toLocaleString()} TROPHY BONUS</div>${t.unlockedCup?`<p class="unl">${Ge[t.unlockedCup].name} UNLOCKED</p>`:""}${n?`<ul class="newach">${n}</ul>`:""}
      <nav class="row"><button class="primary" data-act="menu">CONTINUE</button></nav></div>`}};var rm=["Fuse two items into one of 15 empowered combos \u2014 try Shield + Trap for a Mirror Shield.","Hold Overclock (purple) drift charge, then Melee Strike for an Overdrive Slam.","Red edge lines mean no guard rail. Shove rivals over them \u2014 and stay away yourself.","Strike with nobody beside you to side-dash \u2014 perfect for dodging a Plasma Sphere.","Tap drift in mid-air to arm a perfect-landing boost.","Tuck in behind a rival to charge your slipstream ring.","Leaders draw defensive items. Racers at the back draw boosts and firepower.","Every ramp has a boost strip before it. Hit it, or risk falling short of the gap.","Firewalls alternate sides \u2014 watch the flicker before they switch.","Quads shrug off shoves and hit hardest. Bikes are fastest but get bullied."],Hu=class{constructor(t){this.game=t;let e=this.scene=new ln;e.background=new Et(329231),e.fog=new as(329231,20,90),this.camera=new ni(40,1,.1,300),e.add(new ps(10471679,2101296,1.6));let i=new ki(16777215,2);i.position.set(3,6,4),e.add(i);let n=new ki(16732120,2.2);n.position.set(-4,2,-5),e.add(n);let r=new ki(58879,2.2);r.position.set(5,1,-3),e.add(r);let a=new Ta(200,100,58879,1714794);a.material.transparent=!0,a.material.opacity=.55,e.add(a),this.grid=a;let o=new rt(new Ma(3.2,3.45,64),new Lt({color:16732120,side:ge}));o.rotation.x=-Math.PI/2,o.position.y=.02,e.add(o),this.ring=o;let l=new rt(new ar(3.2,64),new Lt({color:658718}));l.rotation.x=-Math.PI/2,l.position.y=.01,e.add(l);let c=new ue(1,1,1);c.translate(0,.5,0);let u=new Ti(c,new Lt({color:725040}),80),h=new Ft;for(let p=0;p<80;p++){let x=p/80*Math.PI*2,g=50+Math.random()*25;h.makeScale(4+Math.random()*6,6+Math.random()*30,4+Math.random()*6).setPosition(Math.cos(x)*g,0,Math.sin(x)*g),u.setMatrixAt(p,h)}e.add(u);let d=new Ti(new ue(1,.15,1),new Lt({color:11554303}),80);for(let p=0;p<80;p++){u.getMatrixAt(p,h);let x=new R,g=new si,m=new R;h.decompose(x,g,m),h.makeScale(m.x*1.02,1,m.z*1.02).setPosition(x.x,m.y,x.z),d.setMatrixAt(p,h)}e.add(d),this.holder=new Ae,e.add(this.holder),this.sun=new ki(16777215,1.2),this.sun.position.set(2,8,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:1,far:20}),this.sun.shadow.bias=-8e-4,e.add(this.sun);let f=new rt(new ar(3.2,64),new fs({opacity:.55,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.015,f.receiveShadow=!0,e.add(f),this.t=0,this.offset=0,this.targetOffset=0}showVehicle(t,e,i){let n=t+e.paint+e.neon+i.id;if(this.key===n)return;this.key=n,this.holder.clear();let r=Mc(t,e.paint,e.neon,i.accent);r.root.scale.setScalar(1.25),this.holder.add(r.root),this.ring.material.color.setHex(e.neon)}dynamic(){let t=[];return this.holder.traverse(e=>{e.isMesh&&e.userData.dyn&&t.push(e)}),t}setView(t){this.targetOffset=t==="right"?1:t==="away"?2:0}render(t,e,i){this.t+=e,this.offset+=(this.targetOffset-this.offset)*(1-Math.exp(-4*e)),this.holder.rotation.y+=e*.5;let n=this.camera,r=9.5+Math.min(1,this.offset)*3.5,a=this.t*.08;n.position.set(Math.sin(a)*r,3+this.offset*.6,Math.cos(a)*r);let o=new R(Math.cos(a),0,-Math.sin(a)),l=new R(0,1,0).addScaledVector(o,-Math.min(1,this.offset)*(i>1.3?3.2:2)-Math.max(0,this.offset-1)*6);n.lookAt(l),n.aspect=i,n.fov=i<1.3?52:40,n.updateProjectionMatrix(),this.grid.position.z=this.t*4%2,this.holder.visible=this.targetOffset<2&&this.offset<1.8}},zu=class{constructor(){this.settings=im(),this.profile=em(),this.platform=window.NCRNative?(()=>{try{return NCRNative.platform()}catch{return"Android"}})():"Web",this.canvas=document.getElementById("c"),fp(),this.renderer=new oc({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=ii,this.renderer.toneMapping=Oi,this.renderer.shadowMap.type=Ih,this.pipeline=new hc(this.renderer),this._buildEnvironment(),this.audio=new Oc(this),this.input=new Ac(this),this.hud=new Bc(this,document.getElementById("hud")),this.ach=new zc(this),this.ui=new Gc(this,document.getElementById("ui")),this.menu3d=new Hu(this),this.input.buildTouch(document.getElementById("touch")),this.input.onNav=(e,i)=>this.onNav(e,i),this.toasts=document.getElementById("toasts"),this.applyQuality(),window.addEventListener("resize",()=>this.resize()),this.resize(),window.NCR_onBack=()=>this.onBack(),window.NCR_onAppPause=()=>{this.race&&!this.race.over&&!this.race.paused&&this.pause(),this.audio.suspend()},window.NCR_onAppResume=()=>this.audio.resume(),document.addEventListener("visibilitychange",()=>{document.hidden?window.NCR_onAppPause():window.NCR_onAppResume()}),document.addEventListener("pointerdown",()=>this.audio.unlock(),{once:!1,passive:!0}),this.state="menu",this.setMode("menu"),this.ui.show("title",!1),this.last=performance.now(),this.acc=0,this.fpsAcc=[],this.fps=60,requestAnimationFrame(e=>this.frame(e));let t=document.getElementById("boot");t&&t.remove()}_buildEnvironment(){let t=new ln;t.add(new rt(new ue(20,10,20),new Lt({color:526870,side:We})));let e=(r,a,o,l,c,u,h=0)=>{let d=new rt(new Ue(c,u),new Lt({color:new Et(r).multiplyScalar(3),side:ge}));d.position.set(a,o,l),d.rotation.y=h,t.add(d)};e(58879,-9.8,2,0,14,1.2,Math.PI/2),e(16723920,9.8,2.5,0,14,1.2,Math.PI/2),e(16742938,0,1,-9.8,10,.8),e(16777215,0,4.9,0,6,6),e(10181631,0,3,9.8,12,.6);let i=t.children[t.children.length-2];i.rotation.x=Math.PI/2;let n=new yr(this.renderer);Ep(n.fromScene(t,.02).texture),n.dispose()}presetName(){let t=this.settings.quality;return Ms[t]?t:"quality"}qualityName(){let t=this.pipeline;return`${t.preset.label}${t.dynamic?" DYN":""} \xB7 ${t.ih||0}p\u2192${t.oh||0}p (${Math.round(t.scale*100)}%) \xB7 ${+this.settings.fpsCap==30?30:60} LOCK`}get quality(){return this.presetName()==="performance"?0:1}applyQuality(){let t=this.presetName(),e=Ms[t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),this.pipeline.setPreset(t,this.settings.dynamicRes!==!1),this.renderer.shadowMap.enabled=e.shadows,vu.value=Math.max(-1,Math.log2(e.scale)*.9),this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",document.body.classList.toggle("narrow",t/e<1.35)}setMode(t){document.body.dataset.mode=t}frame(t){requestAnimationFrame(l=>this.frame(l));let e=t-this.last,i=+this.settings.fpsCap==30?30:60,n=1e3/i;if(e<n-1.6)return;this.last=t;let r=Math.min(e/1e3,.1);this.fps=this.fps*.95+1/r*.05,this.input.update();let a=window.innerWidth/window.innerHeight,o=this.race;if(o&&this.state==="race"){if(this.input.edges.pause&&!o.over&&(this.input.edges.pause=!1,o.paused?this.resume():this.pause()),!o.paused){this.acc+=r;let l=0;for(;this.acc>=1/60&&l<4;)o.update(1/60),this.input.clearEdges(),this.acc-=1/60,l++;l===4&&(this.acc=0),o.render(r,a),o.over||this.hud.update(r,this.fps),this.audio.updateRace(o,r)}this.draw(o.scene,o.camera,o.dynamicObjects(),o.camMode+(o.lookBack?"b":"")+(o.paused?"p":"")),o.started&&!o.paused&&this.pipeline.adapt(e,n)}else this.input.clearEdges(),this.menu3d.render(this.renderer,r,a),this.draw(this.menu3d.scene,this.menu3d.camera,this.menu3d.dynamic(),"menu")}draw(t,e,i,n){this.pipeline.render(t,e,i,{cutKey:n})}onNav(t,e){return this.ui.screen?t==="start"&&this.ui.screen==="pause"?(this.resume(),!0):this.ui.nav(t):this.race&&this.state==="race"&&(t==="start"||t==="back"&&e==="key")&&!this.race.over?(this.pause(),!0):!1}onBack(){if(this.ui.screen){this.ui.back();return}this.race&&!this.race.over&&this.pause()}menuMusic(){this.audio.startMenuMusic()}vehicleLook(t,e){let i=this.profile.garage[t],n=(Tr.find(a=>a.id===i.paint)||Tr[0]).hex,r=Va.find(a=>a.id===i.neon);return{paint:n,neon:r&&r.hex!=null?r.hex:e.color,trail:i.trail}}playerOpts(t,e){let i=je.find(r=>r.id===t),n=this.vehicleLook(e,i);return{char:t,cls:e,paint:n.paint,neon:n.neon,trail:n.trail,upgrades:{...this.profile.garage[e].up}}}roster(t){let e=za.filter(i=>i!==t);for(;e.length>7;)e.splice(Math.floor(Math.random()*e.length),1);return e}startCup(t,e,i,n){let r=this.roster(i),a={[i]:0};r.forEach(o=>a[o]=0),this.cupState={cup:t,clock:e,char:i,cls:n,race:0,points:a,others:r,wins:0},this.loadRace({mode:"cup",cup:t,track:0,clock:nn[e],player:this.playerOpts(i,n),grid:this.cupGrid()})}cupGrid(){let t=this.cupState,e=[t.char,...t.others];return t.race===0?[...[...t.others].sort(()=>Math.random()-.5),t.char]:e.sort((i,n)=>t.points[i]-t.points[n])}startSingle(t,e,i,n,r,a){let o=this.roster(r).sort(()=>Math.random()-.5);this.cupState=null,this.loadRace({mode:t,cup:e,track:i,clock:nn[t==="tt"?1:n],player:this.playerOpts(r,a),grid:[...o,r]})}loadRace(t){this.lastOpts=t;let e=Ge[t.cup];this.ui.loadInfo={cup:e.name+(t.mode==="cup"?` \xB7 RACE ${t.track+1}/4`:t.mode==="tt"?" \xB7 TIME TRIAL":""),track:e.tracks[t.track].name,color:"#"+e.pal.a.toString(16).padStart(6,"0"),tip:rm[Math.floor(Math.random()*rm.length)]},this.ui.show("loading",!1),this.audio.stopMenuMusic(.6);let i=this.audio.prepareCup(e);setTimeout(()=>{this.disposeRace();try{this.race=new Tc(this,t)}catch(r){console.error(r),this.toast("Failed to build track",String(r),"#f55"),this.ui.show("main",!1);return}this.hud.setup(this.race),this.state="race",this.pipeline.resetHistory();let n=()=>{this.race===null||this.ui.screen!=="loading"||(this.ui.hide(),this.setMode("race"),this.audio.raceStart(this.race),this.input.applyLayout())};Promise.race([i,new Promise(r=>setTimeout(r,9e3))]).then(()=>setTimeout(n,250))},60)}disposeRace(){this.race&&(this.race.dispose(),this.race=null),this.audio.raceEnd(),this.audio.stopRaceMusic(.4),this.renderer.renderLists.dispose()}pause(){!this.race||this.race.over||(this.race.paused=!0,this.audio.pauseRace(!0),this.setMode("paused"),this.ui.show("pause",!1))}resume(){if(this.race){if(this.ui.screen==="settings"){this.ui.show("pause",!1);return}this.race.paused=!1,this.audio.pauseRace(!1),this.ui.hide(),this.setMode("race"),this.last=performance.now()}}restartRace(){this.cupState&&this.lastOpts.mode==="cup"&&(this.lastOpts.grid=this.cupGrid()),this.loadRace(this.lastOpts)}toggleCamera(){this.race&&(this.race.camMode=this.race.camMode==="chase"?"iso":"chase",this.settings.camera=this.race.camMode,this.saveSettings())}quitToMenu(){this.disposeRace(),this.state="menu",this.cupState=null,this.setMode("menu"),this.ui.stack=[],this.ui.show("main",!1),this.menuMusic()}exitApp(){window.NCRNative?NCRNative.exitApp():this.ui.show("title",!1)}resetProfile(){this.profile=Hc(),Ln(this.profile)}saveSettings(){nm(this.settings)}onRaceEnd(t,e){let i=this.profile;if(sm(i,t,e),e.mode==="tt"){let r=`${e.cup}_${e.track}`,a=i.tt[r];e.prev=a,(!a||e.time<a.time)&&(i.tt[r]={time:e.time,lap:e.bestLap},e.record=!0,i.stats.ttRecords++,i.stats.ttTracks=Object.keys(i.tt).length)}if(e.mode==="cup"&&this.cupState){let r=this.cupState;for(let a of e.order)r.points[a.id]=(r.points[a.id]||0)+a.pts;e.place===1&&r.wins++}let n={won:e.place===1&&e.mode!=="tt",wasLast:e.rs.wasLast,ledAll:e.rs.ledAll,margin:e.margin,driftBoosts:e.st.driftBoosts,itemsUsed:e.st.itemsUsed,hitsTaken:e.rs.hitsTaken,wallHits:e.rs.wallHits,finished:!0,place:e.mode==="tt"?9:e.place,mode:e.mode,char:t.player.char.id};e.newAch=this.ach.check(n),Ln(i),this.lastResult=e,this.audio.raceEnd(),setTimeout(()=>{this.setMode("results"),this.ui.show("results",!1),e.newAch.length&&this.audio.sfx("unlock")},600)}afterResults(){this.ui.show("standings",!1)}nextCupRace(){let t=this.cupState;if(!t)return this.quitToMenu();if(t.race<3){t.race++,this.loadRace({mode:"cup",cup:t.cup,track:t.race,clock:nn[t.clock],player:this.playerOpts(t.char,t.cls),grid:this.cupGrid()});return}let i=Object.entries(t.points).sort((h,d)=>d[1]-h[1]).findIndex(([h])=>h===t.char)+1,n=i<=3?i:0,r=this.profile,a=`${t.cup}_${t.clock}`,o=t.cup<5&&[0,1,2].some(h=>r.trophies[`${t.cup}_${h}`]);n&&(!r.trophies[a]||n<r.trophies[a])&&(r.trophies[a]=n),n===1&&(r.stats.golds[t.cup]=Math.max(r.stats.golds[t.cup]??-1,t.clock));let l=Math.round([0,1500,900,500][n]*nn[t.clock].bits);r.bits+=l,r.stats.bitsEarned+=l;let c={cupGold:n===1,perfectCup:t.wins===4,char:t.char,mode:"cup"},u=this.ach.check(c);Ln(r),this.trophyResult={cup:t.cup,clock:t.clock,place:i,trophy:n,bits:l,newAch:u,unlockedCup:n&&!o&&t.cup<5?t.cup+1:0},this.disposeRace(),this.state="menu",this.cupState=null,this.setMode("menu"),this.ui.show("trophy",!1),this.menuMusic(),this.audio.sfx(n?"win":"finish")}achFlag(t){this.profile.flags[t]=!0,this.checkAchievements(null)}checkAchievements(t){let e=this.ach.check(t);for(let i of e)i.unlockChar?this.toast("NEW RACER UNLOCKED",i.unlockChar.name,"#ffd84d"):this.toast("\u2605 "+i.name,i.desc+"  +\u25C6"+i.reward,"#7affff");return e.length&&this.audio.sfx("unlock"),e}toast(t,e,i="#7affff"){let n=document.createElement("div");n.className="toast",n.style.setProperty("--c",i),n.innerHTML="<b></b><small></small>",n.querySelector("b").textContent=t,n.querySelector("small").textContent=e||"",this.toasts.appendChild(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),3800)}haptic(t,e=128){if(this.settings.haptics)try{window.NCRNative?NCRNative.vibrate(t|0,e|0):navigator.vibrate&&navigator.vibrate(t)}catch{}}touchFuse(t){let e=this.input.troot&&this.input.troot.querySelector(".fuse");e&&e.classList.toggle("ready",t)}touchDriftLevel(t){let e=this.input.troot&&this.input.troot.querySelector(".drift");e&&(e.dataset.lv=t)}touchMelee(t){let e=this.input.troot&&this.input.troot.querySelector(".melee .cd");e&&(e.style.strokeDashoffset=113*t,e.parentNode.parentNode.classList.toggle("ready",t<=0))}};window.addEventListener("load",()=>{try{window.game=new zu}catch(s){console.error(s),document.body.innerHTML=`<div style="color:#f66;padding:2em;font:16px sans-serif">Startup error: ${String(s&&s.message||s)}</div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
