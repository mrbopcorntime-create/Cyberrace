(()=>{var Hu=0,th=1,Gu=2;var ia=1,Vu=2,Xs=3,Cn=0,Ze=1,xe=2,cn=0,qs=1,_e=2,eh=3,ih=4,Wu=5;var jn=100,Xu=101,qu=102,$u=103,Yu=104,Zu=200,Ku=201,Ju=202,ju=203,nh=204,sh=205,Qu=206,td=207,ed=208,id=209,nd=210,sd=211,rd=212,ad=213,od=214,ho=0,uo=1,fo=2,Rs=3,po=4,mo=5,go=6,xo=7,$o=0,ld=1,cd=2,$i=0,na=1,sa=2,ra=3,Qn=4,aa=5,oa=6,la=7;var rh=300,ts=301,$s=302,Yo=303,Zo=304,Sn=1e3,Gi=1001,_o=1002,Oe=1003,hd=1004;var ca=1005;var ci=1006,Ko=1007;var hn=1008;var di=1009,ah=1010,oh=1011,Ys=1012,Jo=1013,Ui=1014,Ei=1015,Ke=1016,jo=1017,Qo=1018,es=1020,lh=35902,ch=35899,hh=1021,uh=1022,Fi=1023,on=1026,un=1027,tl=1028,el=1029,Pn=1030,il=1031;var nl=1033,ha=33776,ua=33777,da=33778,fa=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37488,dl=37489,pa=37490,fl=37491,pl=37808,ml=37809,gl=37810,xl=37811,_l=37812,vl=37813,yl=37814,Ml=37815,bl=37816,Sl=37817,El=37818,Tl=37819,wl=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Ll=36284,ma=36285,Dl=36286;var br=2300,vo=2301,lo=2302,Vc=2303,Wc=2400,Xc=2401,qc=2402;var ud=3200;var Nl=0,dd=1,dn="",qe="srgb",Sr="srgb-linear",Er="linear",fe="srgb";var co=7680;var fd=519,pd=512,md=513,gd=514,dh=515,xd=516,_d=517,fh=518,ph=519,mh=35044;var gh="300 es",Mi=2e3,Cs=2001;function Hf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vd(){let r=Tr("canvas");return r.style.display="block",r}var eu={},Ps=null;function wr(...r){let t="THREE."+r.shift();Ps?Ps("log",t,...r):console.log(t,...r)}function yd(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ht(...r){r=yd(r);let t="THREE."+r.shift();if(Ps)Ps("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Vt(...r){r=yd(r);let t="THREE."+r.shift();if(Ps)Ps("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function vr(...r){let t=r.join(" ");t in eu||(eu[t]=!0,Ht(...r))}function Md(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var bd={[ho]:ho,[fo]:go,[po]:po,[Rs]:mo,[uo]:uo,[go]:fo,[xo]:xo,[mo]:Rs},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,yo=180/Math.PI;function In(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function ae(r,t,e){return Math.max(t,Math.min(e,r))}function Vf(r,t){return(r%t+t)%t}function xc(r,t,e){return(1-e)*r+e*t}function Sd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ul(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ed(r,t){if(t.constructor===Float32Array)return r;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Td(r,t){if(t.constructor===Float32Array)return r;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),v=Math.sin(M);g=Math.sin(g*M)/v,o=Math.sin(o*M)/v,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new R,iu=new Ye,Xt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],M=n[1],v=n[4],y=n[7],T=n[2],w=n[5],_=n[8];return s[0]=a*x+o*M+l*T,s[3]=a*m+o*v+l*w,s[6]=a*g+o*y+l*_,s[1]=c*x+h*M+u*T,s[4]=c*m+h*v+u*w,s[7]=c*g+h*y+u*_,s[2]=d*x+f*M+p*T,s[5]=d*m+f*v+p*w,s[8]=d*g+f*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vc=new Xt,nu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){let r={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===fe&&(n.r=an(n.r),n.g=an(n.g),n.b=an(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(n.r=As(n.r),n.g=As(n.g),n.b=As(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dn?Er:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Sr]:{primaries:t,whitePoint:i,transfer:Er,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),r}var ie=Wf();function an(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function As(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var cs,Mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cs===void 0&&(cs=Tr("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=cs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=an(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(an(e[i]/255)*255):e[i]=an(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(yc(n[a].image)):s.push(yc(n[a]))}else s=yc(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function yc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var qf=0,Mc=new R,hi=class r extends Vi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Gi,n=Gi,s=ci,a=hn,o=Fi,l=di,c=r.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=In(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=rh;hi.DEFAULT_ANISOTROPY=1;var Ae=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,T=(g+1)/2,w=(h+d)/4,_=(u+x)/4,b=(p+m)/4;return v>y&&v>T?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=_/i):y>T?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=_/s,n=b/s),this.set(i,n,s,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends Vi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new hi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends bo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ar=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $t=class r{static{this.prototype.isMatrix4=!0}constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Yf)}lookAt(t,e,i){let n=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),_n.crossVectors(i,fi),_n.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),_n.crossVectors(i,fi)),_n.normalize(),La.crossVectors(fi,_n),n[0]=_n.x,n[4]=La.x,n[8]=fi.x,n[1]=_n.y,n[5]=La.y,n[9]=fi.y,n[2]=_n.z,n[6]=La.z,n[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],M=i[3],v=i[7],y=i[11],T=i[15],w=n[0],_=n[4],b=n[8],P=n[12],A=n[1],I=n[5],F=n[9],H=n[13],L=n[2],B=n[6],V=n[10],G=n[14],it=n[3],X=n[7],j=n[11],tt=n[15];return s[0]=a*w+o*A+l*L+c*it,s[4]=a*_+o*I+l*B+c*X,s[8]=a*b+o*F+l*V+c*j,s[12]=a*P+o*H+l*G+c*tt,s[1]=h*w+u*A+d*L+f*it,s[5]=h*_+u*I+d*B+f*X,s[9]=h*b+u*F+d*V+f*j,s[13]=h*P+u*H+d*G+f*tt,s[2]=p*w+x*A+m*L+g*it,s[6]=p*_+x*I+m*B+g*X,s[10]=p*b+x*F+m*V+g*j,s[14]=p*P+x*H+m*G+g*tt,s[3]=M*w+v*A+y*L+T*it,s[7]=M*_+v*I+y*B+T*X,s[11]=M*b+v*F+y*V+T*j,s[15]=M*P+v*H+y*G+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*f-c*d,v=o*f-c*u,y=o*d-l*u,T=a*f-c*h,w=a*d-l*h,_=a*u-o*h;return e*(x*M-m*v+g*y)-i*(p*M-m*T+g*w)+n*(p*v-x*T+g*_)-s*(p*y-x*w+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*o-i*a,v=e*l-n*a,y=e*c-s*a,T=i*l-n*o,w=i*c-s*o,_=n*c-s*l,b=h*x-u*p,P=h*m-d*p,A=h*g-f*p,I=u*m-d*x,F=u*g-f*x,H=d*g-f*m,L=M*H-v*F+y*I+T*A-w*P+_*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*H-l*F+c*I)*B,t[1]=(n*F-i*H-s*I)*B,t[2]=(x*_-m*w+g*T)*B,t[3]=(d*w-u*_-f*T)*B,t[4]=(l*A-a*H-c*P)*B,t[5]=(e*H-n*A+s*P)*B,t[6]=(m*y-p*_-g*v)*B,t[7]=(h*_-d*y+f*v)*B,t[8]=(a*F-o*A+c*b)*B,t[9]=(i*A-e*F-s*b)*B,t[10]=(p*w-x*y+g*M)*B,t[11]=(u*y-h*w-f*M)*B,t[12]=(o*P-a*I-l*b)*B,t[13]=(e*I-i*P+n*b)*B,t[14]=(x*v-p*T-m*M)*B,t[15]=(h*T-u*v+d*M)*B,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,m=a*u,g=o*u,M=l*c,v=l*h,y=l*u,T=i.x,w=i.y,_=i.z;return n[0]=(1-(x+g))*T,n[1]=(f+y)*T,n[2]=(p-v)*T,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(d+g))*w,n[6]=(m+M)*w,n[7]=0,n[8]=(p+v)*_,n[9]=(m-M)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=hs.set(n[0],n[1],n[2]).length(),o=hs.set(n[4],n[5],n[6]).length(),l=hs.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Ai.copy(this);let c=1/a,h=1/o,u=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,e.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=Mi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===Mi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Cs)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Mi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===Mi)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===Cs)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},hs=new R,Ai=new $t,$f=new R(0,0,0),Yf=new R(1,1,1),_n=new R,La=new R,fi=new R,ru=new $t,au=new Ye,Ii=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,ou=new R,us=new Ye,Qi=new $t,Da=new R,lr=new R,Kf=new R,Jf=new Ye,lu=new R(1,0,0),cu=new R(0,1,0),hu=new R(0,0,1),uu={type:"added"},jf={type:"removed"},ds={type:"childadded",child:null},bc={type:"childremoved",child:null},Le=class r extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new Ii,i=new Ye,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new $t},normalMatrix:{value:new Xt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Da.copy(t):Da.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(lr,Da,this.up):Qi.lookAt(Da,lr,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),us.setFromRotationMatrix(Qi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),ds.child=t,this.dispatchEvent(ds),ds.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new R(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Sc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=Vf(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Sc(a,s,t+1/3),this.g=Sc(a,s,t),this.b=Sc(a,s,t-1/3)}return ie.colorSpaceToWorking(this,n),this}setStyle(t,e=qe){function i(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ie.workingToColorSpace(ei.copy(this),t),Math.round(ae(ei.r*255,0,255))*65536+Math.round(ae(ei.g*255,0,255))*256+Math.round(ae(ei.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,s=ei.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=qe){ie.workingToColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Na);let i=xc(vn.h,Na.h,e),n=xc(vn.s,Na.s,e),s=xc(vn.l,Na.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Et;Et.NAMES=wd;var Gn=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vn=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new R,tn=new R,Ec=new R,en=new R,fs=new R,ps=new R,du=new R,Tc=new R,wc=new R,Ac=new R,Rc=new Ae,Cc=new Ae,Pc=new Ae,rn=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ri.subVectors(n,e),tn.subVectors(i,e),Ec.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot(tn),l=Ri.dot(Ec),c=tn.dot(tn),h=tn.dot(Ec),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Rc,s.x),a.addScaledVector(Cc,s.y),a.addScaledVector(Pc,s.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),tn.subVectors(t,e),Ri.cross(tn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ri.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;fs.subVectors(n,i),ps.subVectors(s,i),Tc.subVectors(t,i);let l=fs.dot(Tc),c=ps.dot(Tc);if(l<=0&&c<=0)return e.copy(i);wc.subVectors(t,n);let h=fs.dot(wc),u=ps.dot(wc);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(fs,a);Ac.subVectors(t,s);let f=fs.dot(Ac),p=ps.dot(Ac);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ps,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return du.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(du,o);let g=1/(m+x+d);return a=x*g,o=d*g,e.copy(i).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(s,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Fa.subVectors(this.max,cr),ms.subVectors(t.a,cr),gs.subVectors(t.b,cr),xs.subVectors(t.c,cr),yn.subVectors(gs,ms),Mn.subVectors(xs,gs),On.subVectors(ms,xs);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!Ic(e,ms,gs,xs,Fa)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,ms,gs,xs,Fa))?!1:(Oa.crossVectors(yn,Mn),e=[Oa.x,Oa.y,Oa.z],Ic(e,ms,gs,xs,Fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nn=[new R,new R,new R,new R,new R,new R,new R,new R],Ci=new R,Ua=new bi,ms=new R,gs=new R,xs=new R,yn=new R,Mn=new R,On=new R,cr=new R,Fa=new R,Oa=new R,Bn=new R;function Ic(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);let o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new R,Ba=new et,tp=0,we=class extends Vi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=Ei,this.version=0,this._normalizationScale=t!==void 0?Ul(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.array)}};var Cr=class extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Pr=class extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Nt=class extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}},ep=new bi,hr=new R,Lc=new R,Wi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ep.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(hr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Lc)),this.expandByPoint(hr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ip=0,yi=new $t,Dc=new Le,_s=new R,pi=new bi,ur=new bi,Ve=new R,Jt=class r extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?Pr:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,i){return yi.makeTranslation(t,e,i),this.applyMatrix4(yi),this}scale(t,e,i){return yi.makeScale(t,e,i),this.applyMatrix4(yi),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(pi.min,ur.min),pi.expandByPoint(Ve),Ve.addVectors(pi.max,ur.max),pi.expandByPoint(Ve)):(pi.expandByPoint(ur.min),pi.expandByPoint(ur.max))}pi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(t,c),Ve.add(_s)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new we(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new R,l[P]=new R;let h=new R,u=new R,d=new R,f=new et,p=new et,x=new et,m=new R,g=new R;function M(P,A,I){c[P]=c[A]=c[I]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,I),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),o[P].add(m),o[A].add(m),o[I].add(m),l[P].add(g),l[A].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,A=v.length;P<A;++P){let I=v[P],F=I.start,H=I.count;for(let L=F,B=F+H;L<B;L+=3)M(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new R,T=new R,w=new R,_=new R;function b(P){w.fromBufferAttribute(n,P),_.copy(w);let A=o[P];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),T.crossVectors(_,A);let F=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,F)}for(let P=0,A=i.count;P<A;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new we(d,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function fu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=In()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var li=new R,Ds=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Ul(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.data.array)}},Nc=new R,np=new R,sp=new Xt,Pi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Nc.subVectors(i,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||sp.getNormalMatrix(t),n=this.coplanarPoint(Nc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rp=0,Li=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=In(),this.name="",this.type="Material",this.blending=qs,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=sh,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Pi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Di=class extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,dr=new R,ys=new R,Ms=new R,bs=new et,fr=new et,Ad=new $t,ka=new R,pr=new R,za=new R,pu=new et,Uc=new et,mu=new et,Xi=class extends Le{constructor(t=new Di){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ir(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Ds(i,3,0,!1)),vs.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=vs,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Ha(ka.set(-.5,-.5,0),Ms,a,ys,n,s),Ha(pr.set(.5,-.5,0),Ms,a,ys,n,s),Ha(za.set(.5,.5,0),Ms,a,ys,n,s),pu.set(0,0),Uc.set(1,0),mu.set(1,1);let o=t.ray.intersectTriangle(ka,pr,za,!1,dr);if(o===null&&(Ha(pr.set(-.5,.5,0),Ms,a,ys,n,s),Uc.set(0,1),o=t.ray.intersectTriangle(ka,za,pr,!1,dr),o===null))return;let l=t.ray.origin.distanceTo(dr);l<t.near||l>t.far||e.push({distance:l,point:dr.clone(),uv:rn.getInterpolation(dr,ka,pr,za,pu,Uc,mu,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ha(r,t,e,i,n,s){bs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(fr.x=s*bs.x-n*bs.y,fr.y=n*bs.x+s*bs.y):fr.copy(bs),r.copy(t),r.x+=fr.x,r.y+=fr.y,r.applyMatrix4(Ad)}var sn=new R,Fc=new R,Ga=new R,Va=new R,Ns=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Fc.copy(t).add(e).multiplyScalar(.5),Ga.copy(e).sub(t).normalize(),Va.copy(this.origin).sub(Fc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Ga),o=Va.dot(this.direction),l=-Va.dot(Ga),c=Va.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Fc).addScaledVector(Ga,d),f}intersectSphere(t,e){if(t.radius<0)return null;sn.subVectors(t.center,this.origin);let i=sn.dot(this.direction),n=sn.dot(sn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,M=i.y-a.y,v=i.z-a.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,b,P,A,I,F,H,L,B,V,G,it;if(y>=T&&y>=w?(P=l,F=u,B=p,it=g,l>=0?(_=c,b=h,A=d,I=f,H=x,L=m,V=M,G=v):(_=h,b=c,A=f,I=d,H=m,L=x,V=v,G=M)):T>=w?(P=c,F=d,B=x,it=M,c>=0?(_=h,b=l,A=f,I=u,H=m,L=p,V=v,G=g):(_=l,b=h,A=u,I=f,H=p,L=m,V=g,G=v)):(P=h,F=f,B=m,it=v,h>=0?(_=l,b=c,A=u,I=d,H=p,L=x,V=g,G=M):(_=c,b=l,A=d,I=u,H=x,L=p,V=M,G=g)),P===0)return null;let X=_/P,j=b/P,tt=1/P,wt=A-X*F,zt=I-j*F,$=H-X*B,_t=L-j*B,At=V-X*it,Ot=G-j*it,vt=At*_t-Ot*$,Bt=wt*Ot-zt*At,Se=$*zt-_t*wt;if(n){if(vt<0||Bt<0||Se<0)return null}else if((vt<0||Bt<0||Se<0)&&(vt>0||Bt>0||Se>0))return null;let Gt=vt+Bt+Se;if(Gt===0)return null;let Qt=tt*(vt*F+Bt*B+Se*it);return(Gt>0?Qt<0:Qt>0)?null:this.at(Qt/Gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gu=new $t,kn=new Ns,Wa=new Wi,xu=new R,Xa=new R,qa=new R,$a=new R,Oc=new R,Ya=new R,_u=new R,Za=new R,dt=class extends Le{constructor(t=new Jt,e=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Oc.fromBufferAttribute(u,t),a?Ya.addScaledVector(Oc,h):Ya.addScaledVector(Oc.sub(e),h))}e.add(Ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),kn.copy(t.ray).recast(t.near),!(Wa.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Wa,xu)===null||kn.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(gu.copy(s).invert(),kn.copy(t.ray).applyMatrix4(gu),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let w=o.getX(y),_=o.getX(y+1),b=o.getX(y+2);n=Ka(this,g,t,i,c,h,u,w,_,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);n=Ka(this,a,t,i,c,h,u,M,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let w=y,_=y+1,b=y+2;n=Ka(this,g,t,i,c,h,u,w,_,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let M=m,v=m+1,y=m+2;n=Ka(this,a,t,i,c,h,u,M,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function ap(r,t,e,i,n,s,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Cn,o),l===null)return null;Za.copy(o),Za.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Za);return c<e.near||c>e.far?null:{distance:c,point:Za.clone(),object:r}}function Ka(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Xa),r.getVertexPosition(l,qa),r.getVertexPosition(c,$a);let h=ap(r,t,e,i,Xa,qa,$a,_u);if(h){let u=new R;rn.getBarycoord(_u,Xa,qa,$a,u),n&&(h.uv=rn.getInterpolatedAttribute(n,o,l,c,u,new et)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,l,c,u,new et)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};rn.getNormal(Xa,qa,$a,d.normal),h.face=d,h.barycoord=u}return h}var Lr=class extends hi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Oe,h=Oe,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends we{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ss=new $t,vu=new $t,Ja=[],yu=new bi,op=new $t,mr=new dt,gr=new Wi,mi=class extends dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ss),yu.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(yu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ss),gr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),t.ray.intersectsSphere(gr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ss),vu.multiplyMatrices(i,Ss),mr.matrixWorld=vu,mr.raycast(t,Ja);for(let a=0,o=Ja.length;a<o;a++){let l=Ja[a];l.instanceId=s,l.object=this,e.push(l)}Ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(n*this.count),n,this.count,tl,Ei));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zn=new Wi,lp=new et(.5,.5),ja=new R,En=class{constructor(t=new Pi,e=new Pi,i=new Pi,n=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],M=s[12],v=s[13],y=s[14],T=s[15];if(n[0].setComponents(c-a,f-h,g-p,T-M).normalize(),n[1].setComponents(c+a,f+h,g+p,T+M).normalize(),n[2].setComponents(c+o,f+u,g+x,T+v).normalize(),n[3].setComponents(c-o,f-u,g-x,T-v).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,g-m,T-y).normalize();else if(n[4].setComponents(c-l,f-d,g-m,T-y).normalize(),e===Mi)n[5].setComponents(c+l,f+d,g+m,T+y).normalize();else if(e===Cs)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){zn.center.set(0,0,0);let e=lp.distanceTo(t.center);return zn.radius=.7071067811865476+e,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ja.x=n.normal.x>0?t.max.x:t.min.x,ja.y=n.normal.y>0?t.max.y:t.min.y,ja.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ja)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mu=new $t,Eo=class r{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];Mu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new En),i[n].setFromProjectionMatrix(Mu,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new En),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Dr=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},To=new R,wo=new R,bu=new $t,xr=new Ns,Qa=new Wi,Bc=new R,Su=new R,Ao=class extends Le{constructor(t=new Jt,e=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)To.fromBufferAttribute(e,n-1),wo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=To.distanceTo(wo);t.setAttribute("lineDistance",new Nt(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(n),Qa.radius+=s,t.ray.intersectsSphere(Qa)===!1)return;bu.copy(n).invert(),xr.copy(t.ray).applyMatrix4(bu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),M=h.getX(x+1),v=to(this,t,xr,l,g,M,x);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=to(this,t,xr,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=to(this,t,xr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=to(this,t,xr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function to(r,t,e,i,n,s,a){let o=r.geometry.attributes.position;if(To.fromBufferAttribute(o,n),wo.fromBufferAttribute(o,s),e.distanceSqToSegment(To,wo,Bc,Su)>i)return;Bc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Bc);if(!(c<t.near||c>t.far))return{distance:c,point:Su.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Eu=new R,Tu=new R,Ro=class extends Ao{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Eu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new Nt(i,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wn=class extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wu=new $t,$c=new Ns,eo=new Wi,io=new R,Tn=class extends Le{constructor(t=new Jt,e=new Wn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(n),eo.radius+=s,t.ray.intersectsSphere(eo)===!1)return;wu.copy(n).invert(),$c.copy(t.ray).applyMatrix4(wu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);io.fromBufferAttribute(u,m),Au(io,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)io.fromBufferAttribute(u,p),Au(io,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Au(r,t,e,i,n,s,a){let o=$c.distanceSqToPoint(r);if(o<e){let l=new R;$c.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Nr=class extends hi{constructor(t=[],e=ts,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xn=class extends hi{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ln=class extends hi{constructor(t,e,i=Ui,n,s,a,o=Oe,l=Oe,c,h=on,u=1){if(h!==on&&h!==un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ur=class extends ln{constructor(t,e=Ui,i=ts,n,s,a=Oe,o=Oe,l,c=on){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fr=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},he=class r extends Jt{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function p(x,m,g,M,v,y,T,w,_,b,P){let A=y/_,I=T/b,F=y/2,H=T/2,L=w/2,B=_+1,V=b+1,G=0,it=0,X=new R;for(let j=0;j<V;j++){let tt=j*I-H;for(let wt=0;wt<B;wt++){let zt=wt*A-F;X[x]=zt*M,X[m]=tt*v,X[g]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(wt/_),u.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let tt=0;tt<_;tt++){let wt=d+tt+B*j,zt=d+tt+B*(j+1),$=d+(tt+1)+B*(j+1),_t=d+(tt+1)+B*j;l.push(wt,zt,_t),l.push(zt,$,_t),it+=6}o.addGroup(f,it,P),f+=it,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qn=class r extends Jt{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+s,x=n+1,m=new R,g=new R;for(let M=0;M<=p;M++){let v=0,y=0,T=0,w=0;if(M<=i){let P=M/i,A=P*Math.PI/2;y=-h-t*Math.cos(A),T=t*Math.sin(A),w=-t*Math.cos(A),v=P*u}else if(M<=i+s){let P=(M-i)/s;y=-h+P*e,T=t,w=0,v=u+P*d}else{let P=(M-i-s)/i,A=P*Math.PI/2;y=h+t*Math.sin(A),T=t*Math.cos(A),w=t*Math.sin(A),v=u+d+P*u}let _=Math.max(0,Math.min(1,v/f)),b=0;M===0?b=.5/n:M===p&&(b=-.5/n);for(let P=0;P<=n;P++){let A=P/n,I=A*Math.PI*2,F=Math.sin(I),H=Math.cos(I);g.x=-T*H,g.y=y,g.z=T*F,o.push(g.x,g.y,g.z),m.set(-T*H,w,T*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+b,_)}if(M>0){let P=(M-1)*x;for(let A=0;A<n;A++){let I=P+A,F=P+A+1,H=M*x+A,L=M*x+A+1;a.push(I,F,H),a.push(F,L,H)}}}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Or=class r extends Jt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ni=class r extends Jt{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],m=i/2,g=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function M(){let y=new R,T=new R,w=0,_=(e-t)/i;for(let b=0;b<=s;b++){let P=[],A=b/s,I=A*(e-t)+t;for(let F=0;F<=n;F++){let H=F/n,L=H*l+o,B=Math.sin(L),V=Math.cos(L);T.x=I*B,T.y=-A*i+m,T.z=I*V,u.push(T.x,T.y,T.z),y.set(B,_,V).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-A),P.push(p++)}x.push(P)}for(let b=0;b<n;b++)for(let P=0;P<s;P++){let A=x[P][b],I=x[P+1][b],F=x[P+1][b+1],H=x[P][b+1];(t>0||P!==0)&&(h.push(A,I,H),w+=3),(e>0||P!==s-1)&&(h.push(I,F,H),w+=3)}c.addGroup(g,w,0),g+=w}function v(y){let T=p,w=new et,_=new R,b=0,P=y===!0?t:e,A=y===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let I=p;for(let F=0;F<=n;F++){let L=F/n*l+o,B=Math.cos(L),V=Math.sin(L);_.x=P*V,_.y=m*A,_.z=P*B,u.push(_.x,_.y,_.z),d.push(0,A,0),w.x=B*.5+.5,w.y=V*.5*A+.5,f.push(w.x,w.y),p++}for(let F=0;F<n;F++){let H=T+F,L=I+F;y===!0?h.push(L,L+1,H):h.push(L+1,L,H),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class r extends Ni{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kr=class r extends Jt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new R,y=new R,T=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],y),f(e[w+2],T),l(v,y,T,M)}function l(M,v,y,T){let w=T+1,_=[];for(let b=0;b<=w;b++){_[b]=[];let P=M.clone().lerp(y,b/w),A=v.clone().lerp(y,b/w),I=w-b;for(let F=0;F<=I;F++)F===0&&b===w?_[b][F]=P:_[b][F]=P.clone().lerp(A,F/I)}for(let b=0;b<w;b++)for(let P=0;P<2*(w-b)-1;P++){let A=Math.floor(P/2);P%2===0?(d(_[b][A+1]),d(_[b+1][A]),d(_[b][A])):(d(_[b][A+1]),d(_[b+1][A+1]),d(_[b+1][A]))}}function c(M){let v=new R;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(M),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){let M=new R;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];let y=m(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;a.push(y,1-T)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let v=a[M+0],y=a[M+2],T=a[M+4],w=Math.max(v,y,T),_=Math.min(v,y,T);w>.9&&_<.1&&(v<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){let M=new R,v=new R,y=new R,T=new R,w=new et,_=new et,b=new et;for(let P=0,A=0;P<s.length;P+=9,A+=6){M.set(s[P+0],s[P+1],s[P+2]),v.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),w.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),T.copy(M).add(v).add(y).divideScalar(3);let I=m(T);x(w,A+0,M,I),x(_,A+2,v,I),x(b,A+4,y,I)}}function x(M,v,y,T){T<0&&M.x===1&&(a[v]=M.x-1),y.x===0&&y.z===0&&(a[v]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new et:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new R,n=[],s=[],a=[],o=new R,l=new $t;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ae(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(ae(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fs=class extends gi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Co=class extends Fs{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Ru=new R,Cu=new R,kc=new xh,zc=new xh,Hc=new xh,Os=class extends gi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Cu.subVectors(n[0],n[1]).add(n[0]),c=Cu);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Ru.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),kc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),zc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Hc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(kc.calc(l),zc.calc(l),Hc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function cp(r,t){let e=1-r;return e*e*t}function hp(r,t){return 2*(1-r)*r*t}function up(r,t){return r*r*t}function yr(r,t,e,i){return cp(r,t)+hp(r,e)+up(r,i)}function dp(r,t){let e=1-r;return e*e*e*t}function fp(r,t){let e=1-r;return 3*e*e*r*t}function pp(r,t){return 3*(1-r)*r*r*t}function mp(r,t){return r*r*r*t}function Mr(r,t,e,i,n){return dp(r,t)+fp(r,e)+pp(r,i)+mp(r,n)}var zr=class extends gi{constructor(t=new et,e=new et,i=new et,n=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new et){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Mr(t,n.x,s.x,a.x,o.x),Mr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends gi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Mr(t,n.x,s.x,a.x,o.x),Mr(t,n.y,s.y,a.y,o.y),Mr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends gi{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bs=class extends gi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends gi{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(yr(t,n.x,s.x,a.x),yr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends gi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(yr(t,n.x,s.x,a.x),yr(t,n.y,s.y,a.y),yr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Pu(o,l.x,c.x,h.x,u.x),Pu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new et().fromArray(n))}return this}},Io=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Os,CubicBezierCurve:zr,CubicBezierCurve3:Po,EllipseCurve:Fs,LineCurve:Hr,LineCurve3:Bs,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:Vr,SplineCurve:Wr}),Lo=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Io[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Io[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Xr=class extends Lo{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Hr(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Gr(this.currentPoint.clone(),new et(t,e),new et(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new zr(this.currentPoint.clone(),new et(t,e),new et(i,n),new et(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Wr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new Fs(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$n=class extends Xr{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Xr().fromJSON(n))}return this}};function gp(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Rd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Mp(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,u=l;for(let d=e;d<n;d+=e){let f=r[d],p=r[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return qr(s,a,e,o,l,c,0),a}function Rd(r,t,e,i,n){let s;if(n===Lp(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=Iu(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Iu(a/i|0,r[a],r[a+1],s);return s&&ks(s,s.next)&&(Yr(s),s=s.next),s}function Yn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(ks(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&wp(r,i,n,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?_p(r,i,n,s):xp(r)){t.push(l.i,r.i,c.i),Yr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=vp(Yn(r),t),qr(r,t,e,i,n,s,2)):a===2&&yp(r,t,e,i,n,s):qr(Yn(r),t,e,i,n,s,1);break}}}function xp(r){let t=r.prev,e=r,i=r.next;if(Ce(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,s,a),u=Math.min(o,l,c),d=Math.max(n,s,a),f=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&_r(n,o,s,l,a,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _p(r,t,e,i){let n=r.prev,s=r,a=r.next;if(Ce(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=Yc(f,p,t,e,i),M=Yc(x,m,t,e,i),v=r.prevZ,y=r.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==n&&v!==a&&_r(o,h,l,u,c,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&_r(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==n&&v!==a&&_r(o,h,l,u,c,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&_r(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vp(r,t){let e=r;do{let i=e.prev,n=e.next.next;!ks(i,n)&&Pd(i,e,e.next,n)&&$r(i,n)&&$r(n,i)&&(t.push(i.i,e.i,n.i),Yr(e),Yr(e.next),e=r=n),e=e.next}while(e!==r);return Yn(e)}function yp(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cp(a,o)){let l=Id(a,o);a=Yn(a,a.next),l=Yn(l,l.next),qr(a,t,e,i,n,s,0),qr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Mp(r,t,e,i){let n=[];for(let s=0,a=t.length;s<a;s++){let o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=Rd(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Rp(c))}n.sort(bp);for(let s=0;s<n.length;s++)e=Sp(n[s],e);return e}function bp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Sp(r,t){let e=Ep(r,t);if(!e)return t;let i=Id(e,r);return Yn(i,i.next),Yn(e,e.next)}function Ep(r,t){let e=t,i=r.x,n=r.y,s=-1/0,a;if(ks(r,e))return e;do{if(ks(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Cd(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){let u=Math.abs(n-e.y)/(i-e.x);$r(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Tp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Tp(r,t){return Ce(r.prev,r,t.prev)<0&&Ce(t.next,r,r.next)<0}function wp(r,t,e,i){let n=r;do n.z===0&&(n.z=Yc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Ap(n)}function Ap(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function Yc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Rp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Cd(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function _r(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&Cd(r,t,e,i,n,s,a,o)}function Cp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Pp(r,t)&&($r(r,t)&&$r(t,r)&&Ip(r,t)&&(Ce(r.prev,r,t.prev)||Ce(r,t.prev,t))||ks(r,t)&&Ce(r.prev,r,r.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ks(r,t){return r.x===t.x&&r.y===t.y}function Pd(r,t,e,i){let n=so(Ce(r,t,e)),s=so(Ce(r,t,i)),a=so(Ce(e,i,r)),o=so(Ce(e,i,t));return!!(n!==s&&a!==o||n===0&&no(r,e,t)||s===0&&no(r,i,t)||a===0&&no(e,r,i)||o===0&&no(e,t,i))}function no(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function so(r){return r>0?1:r<0?-1:0}function Pp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function $r(r,t){return Ce(r.prev,r,r.next)<0?Ce(r,t,r.next)>=0&&Ce(r,r.prev,t)>=0:Ce(r,t,r.prev)<0||Ce(r,r.next,t)<0}function Ip(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Id(r,t){let e=Zc(r.i,r.x,r.y),i=Zc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Iu(r,t,e,i){let n=Zc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Yr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lp(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var Kc=class{static triangulate(t,e,i=2){return gp(t,e,i)}},Hn=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Lu(t),Du(i,t);let a=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Du(i,e[l]);let o=Kc.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Lu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Du(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var zs=class r extends Jt{constructor(t=new $n([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Nt(n,3)),this.setAttribute("uv",new Nt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Dp,v,y=!1,T,w,_,b;if(g){v=g.getSpacedPoints(h),y=!0,d=!1;let Q=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,Q),w=new R,_=new R,b=new R}d||(m=0,f=0,p=0,x=0);let P=o.extractPoints(c),A=P.shape,I=P.holes;if(!Hn.isClockWise(A)){A=A.reverse();for(let Q=0,ct=I.length;Q<ct;Q++){let at=I[Q];Hn.isClockWise(at)&&(I[Q]=at.reverse())}}function H(Q){let at=10000000000000001e-36,Tt=Q[0];for(let xt=1;xt<=Q.length;xt++){let Yt=xt%Q.length,Lt=Q[Yt],re=Lt.x-Tt.x,oe=Lt.y-Tt.y,de=re*re+oe*oe,U=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Ne=at*U*U;if(de<=Ne){Q.splice(Yt,1),xt--;continue}Tt=Lt}}H(A),I.forEach(H);let L=I.length,B=A;for(let Q=0;Q<L;Q++){let ct=I[Q];A=A.concat(ct)}function V(Q,ct,at){return ct||Vt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,at)}let G=A.length;function it(Q,ct,at){let Tt,xt,Yt,Lt=Q.x-ct.x,re=Q.y-ct.y,oe=at.x-Q.x,de=at.y-Q.y,U=Lt*Lt+re*re,Ne=Lt*de-re*oe;if(Math.abs(Ne)>Number.EPSILON){let ee=Math.sqrt(U),ve=Math.sqrt(oe*oe+de*de),pt=ct.x-re/ee,Pe=ct.y+Lt/ee,kt=at.x-de/ve,Wt=at.y+oe/ve,C=((kt-pt)*de-(Wt-Pe)*oe)/(Lt*de-re*oe);Tt=pt+Lt*C-Q.x,xt=Pe+re*C-Q.y;let S=Tt*Tt+xt*xt;if(S<=2)return new et(Tt,xt);Yt=Math.sqrt(S/2)}else{let ee=!1;Lt>Number.EPSILON?oe>Number.EPSILON&&(ee=!0):Lt<-Number.EPSILON?oe<-Number.EPSILON&&(ee=!0):Math.sign(re)===Math.sign(de)&&(ee=!0),ee?(Tt=-re,xt=Lt,Yt=Math.sqrt(U)):(Tt=Lt,xt=re,Yt=Math.sqrt(U/2))}return new et(Tt/Yt,xt/Yt)}let X=[];for(let Q=0,ct=B.length,at=ct-1,Tt=Q+1;Q<ct;Q++,at++,Tt++)at===ct&&(at=0),Tt===ct&&(Tt=0),X[Q]=it(B[Q],B[at],B[Tt]);let j=[],tt,wt=X.concat();for(let Q=0,ct=L;Q<ct;Q++){let at=I[Q];tt=[];for(let Tt=0,xt=at.length,Yt=xt-1,Lt=Tt+1;Tt<xt;Tt++,Yt++,Lt++)Yt===xt&&(Yt=0),Lt===xt&&(Lt=0),tt[Tt]=it(at[Tt],at[Yt],at[Lt]);j.push(tt),wt=wt.concat(tt)}let zt;if(m===0)zt=Hn.triangulateShape(B,I);else{let Q=[],ct=[];for(let at=0;at<m;at++){let Tt=at/m,xt=f*Math.cos(Tt*Math.PI/2),Yt=p*Math.sin(Tt*Math.PI/2)+x;for(let Lt=0,re=B.length;Lt<re;Lt++){let oe=V(B[Lt],X[Lt],Yt);Bt(oe.x,oe.y,-xt),Tt===0&&Q.push(oe)}for(let Lt=0,re=L;Lt<re;Lt++){let oe=I[Lt];tt=j[Lt];let de=[];for(let U=0,Ne=oe.length;U<Ne;U++){let ee=V(oe[U],tt[U],Yt);Bt(ee.x,ee.y,-xt),Tt===0&&de.push(ee)}Tt===0&&ct.push(de)}}zt=Hn.triangulateShape(Q,ct)}let $=zt.length,_t=p+x;for(let Q=0;Q<G;Q++){let ct=d?V(A[Q],wt[Q],_t):A[Q];y?(_.copy(T.normals[0]).multiplyScalar(ct.x),w.copy(T.binormals[0]).multiplyScalar(ct.y),b.copy(v[0]).add(_).add(w),Bt(b.x,b.y,b.z)):Bt(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<G;ct++){let at=d?V(A[ct],wt[ct],_t):A[ct];y?(_.copy(T.normals[Q]).multiplyScalar(at.x),w.copy(T.binormals[Q]).multiplyScalar(at.y),b.copy(v[Q]).add(_).add(w),Bt(b.x,b.y,b.z)):Bt(at.x,at.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let ct=Q/m,at=f*Math.cos(ct*Math.PI/2),Tt=p*Math.sin(ct*Math.PI/2)+x;for(let xt=0,Yt=B.length;xt<Yt;xt++){let Lt=V(B[xt],X[xt],Tt);Bt(Lt.x,Lt.y,u+at)}for(let xt=0,Yt=I.length;xt<Yt;xt++){let Lt=I[xt];tt=j[xt];for(let re=0,oe=Lt.length;re<oe;re++){let de=V(Lt[re],tt[re],Tt);y?Bt(de.x,de.y+v[h-1].y,v[h-1].x+at):Bt(de.x,de.y,u+at)}}}At(),Ot();function At(){let Q=n.length/3;if(d){let ct=0,at=G*ct;for(let Tt=0;Tt<$;Tt++){let xt=zt[Tt];Se(xt[2]+at,xt[1]+at,xt[0]+at)}ct=h+m*2,at=G*ct;for(let Tt=0;Tt<$;Tt++){let xt=zt[Tt];Se(xt[0]+at,xt[1]+at,xt[2]+at)}}else{for(let ct=0;ct<$;ct++){let at=zt[ct];Se(at[2],at[1],at[0])}for(let ct=0;ct<$;ct++){let at=zt[ct];Se(at[0]+G*h,at[1]+G*h,at[2]+G*h)}}i.addGroup(Q,n.length/3-Q,0)}function Ot(){let Q=n.length/3,ct=0;vt(B,ct),ct+=B.length;for(let at=0,Tt=I.length;at<Tt;at++){let xt=I[at];vt(xt,ct),ct+=xt.length}i.addGroup(Q,n.length/3-Q,1)}function vt(Q,ct){let at=Q.length;for(;--at>=0;){let Tt=at,xt=at-1;xt<0&&(xt=Q.length-1);for(let Yt=0,Lt=h+m*2;Yt<Lt;Yt++){let re=G*Yt,oe=G*(Yt+1),de=ct+Tt+re,U=ct+xt+re,Ne=ct+xt+oe,ee=ct+Tt+oe;Gt(de,U,Ne,ee)}}}function Bt(Q,ct,at){l.push(Q),l.push(ct),l.push(at)}function Se(Q,ct,at){Qt(Q),Qt(ct),Qt(at);let Tt=n.length/3,xt=M.generateTopUV(i,n,Tt-3,Tt-2,Tt-1);se(xt[0]),se(xt[1]),se(xt[2])}function Gt(Q,ct,at,Tt){Qt(Q),Qt(ct),Qt(Tt),Qt(ct),Qt(at),Qt(Tt);let xt=n.length/3,Yt=M.generateSideWallUV(i,n,xt-6,xt-3,xt-2,xt-1);se(Yt[0]),se(Yt[1]),se(Yt[3]),se(Yt[1]),se(Yt[2]),se(Yt[3])}function Qt(Q){n.push(l[Q*3+0]),n.push(l[Q*3+1]),n.push(l[Q*3+2])}function se(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Np(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Io[n.type]().fromJSON(n)),new r(i,t.options)}},Dp={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new et(s,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(d,1-p),new et(x,1-g)]:[new et(o,1-l),new et(h,1-u),new et(f,1-p),new et(m,1-g)]}};function Np(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Hs=class r extends kr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Zn=class r extends kr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},ui=class r extends Jt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let M=g*d-a;for(let v=0;v<c;v++){let y=v*u-s;p.push(y,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let v=M+c*g,y=M+c*(g+1),T=M+1+c*(g+1),w=M+1+c*g;f.push(v,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Zr=class r extends Jt{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,p=new et;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=s+m/i*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let M=g+m,v=M,y=M+i+1,T=M+i+2,w=M+1;o.push(v,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var xi=class r extends Jt{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let M=[],v=g/i,y=a+v*o,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T),_=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let P=b/e,A=n+P*s;u.x=-w*Math.cos(A),u.y=T,u.z=w*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+_,1-v),M.push(c++)}h.push(M)}for(let g=0;g<i;g++)for(let M=0;M<e;M++){let v=h[g][M+1],y=h[g][M],T=h[g+1][M],w=h[g+1][M+1];(g!==0||a>0)&&f.push(v,y,w),(g!==i-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Si=class r extends Jt{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new R,f=new R,p=new R;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=n;g++){let M=g/n*s;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,M=(n+1)*(x-1)+m-1,v=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,M,y),l.push(M,v,y)}this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Kr=class r extends Jt{constructor(t=new Vr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new et,h=new R,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function x(){for(let v=0;v<e;v++)m(v);m(s===!1?e:0),M(),g()}function m(v){h=t.getPointAt(v/e,h);let y=a.normals[v],T=a.binormals[v];for(let w=0;w<=n;w++){let _=w/n*Math.PI*2,b=Math.sin(_),P=-Math.cos(_);l.x=P*y.x+b*T.x,l.y=P*y.y+b*T.y,l.z=P*y.z+b*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=e;v++)for(let y=1;y<=n;y++){let T=(n+1)*(v-1)+(y-1),w=(n+1)*v+(y-1),_=(n+1)*v+y,b=(n+1)*(v-1)+y;p.push(T,w,b),p.push(w,_,b)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=n;y++)c.x=v/e,c.y=y/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function is(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Nu(n))n.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Nu(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ii(r){let t={};for(let e=0;e<r.length;e++){let i=is(r[e]);for(let n in i)t[n]=i[n]}return t}function Nu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Up(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _h(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var fn={clone:is,merge:ii},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Et().setHex(n.value);break;case"v2":this.uniforms[i].value=new et().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ae().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gs=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vs=class extends Li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=$o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Do=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},No=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Es(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function ro(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var wn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends wn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:s=t,o=2*e-i;break;case qc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=t,l=2*i-e;break;case qc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+M*a[c+T]+v*a[l+T]+y*a[u+T];return s}},Fo=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Oo=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Bo=class extends wn{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*x+a[l+m]*p;return s}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*d+p*2,M=u[g],v=u[g+1],y=t*d+p*2,T=h[y],w=h[y+1],_=kp(i,e,M,T,n);s[p]=Ld(_,x,v,w,m)}return s}};function Ld(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Bp(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function kp(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=Ld(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=Bp(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var _i=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),ro(t.settings)&&(i.settings={inTangents:Es(t.settings.inTangents,Array),outTangents:Es(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break;case Vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;ro(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;ro(this.settings)&&(Fu(this.settings.inTangents,t),Fu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Gf(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===lo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,ro(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Uu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Fu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=vo;var An=class extends _i{constructor(t,e,i){super(t,e,i)}};An.prototype.ValueTypeName="bool";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=br;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};ko.prototype.ValueTypeName="color";var zo=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};zo.prototype.ValueTypeName="number";var Ho=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(s,0,a,c-o,a,c,l);return s}},Jr=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rn=class extends _i{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="string";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=br;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Go.prototype.ValueTypeName="vector";var Vo=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new Vo,Wo=class{constructor(t){this.manager=t!==void 0?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kn=class extends jr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new $t,Ou=new R,Bu=new R,Xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new En,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ao=new R,oo=new Ye,Hi=new R,Qr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ao,oo,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ao,oo,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new R,ku=new et,zu=new et,$e=class extends Qr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,ku,zu),e.subVectors(zu,ku)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jn=class extends Qr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends Xo{constructor(){super(new Jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=-90,ws=1,Ws=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new $e(Ts,ws,t,e);n.layers=this.layers,this.add(n);let s=new $e(Ts,ws,t,e);s.layers=this.layers,this.add(s);let a=new $e(Ts,ws,t,e);a.layers=this.layers,this.add(a);let o=new $e(Ts,ws,t,e);o.layers=this.layers,this.add(o);let l=new $e(Ts,ws,t,e);l.layers=this.layers,this.add(l);let c=new $e(Ts,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},qo=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zp(){this._document.hidden===!1&&this.reset()}var vh="\\[\\]\\.:\\/",Hp=new RegExp("["+vh+"]","g"),yh="[^"+vh+"]",Gp="[^"+vh.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",yh),Wp=/(WCOD+)?/.source.replace("WCOD",Gp),Xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),$p=new RegExp("^"+Vp+Wp+Xp+qp+"$"),Yp=["material","materials","bones","map"],jc=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=$p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Yp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=jc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);var Qc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};var ea=class extends Ro{constructor(t=10,e=10,i=4473924,n=8947848){i=new Et(i),n=new Et(n);let s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=e;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=d===s?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Jt;h.setAttribute("position",new Nt(l,3)),h.setAttribute("color",new Nt(c,3));let u=new Dr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Mh(r,t,e,i){let n=Zp(i);switch(e){case hh:return r*t;case tl:return r*t/n.components*n.byteLength;case el:return r*t/n.components*n.byteLength;case Pn:return r*t*2/n.components*n.byteLength;case il:return r*t*2/n.components*n.byteLength;case uh:return r*t*3/n.components*n.byteLength;case Fi:return r*t*4/n.components*n.byteLength;case nl:return r*t*4/n.components*n.byteLength;case ha:case ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rl:case ol:return Math.max(r,16)*Math.max(t,8)/4;case sl:case al:return Math.max(r,8)*Math.max(t,8)/2;case ll:case cl:case ul:case dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hl:case pa:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Il:case Ll:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ma:case Dl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zp(r){switch(r){case di:case ah:return{byteLength:1,components:1};case Ys:case oh:case Ke:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case Ui:case Jo:case Ei:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ef(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function em(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,Qm=`uniform sampler2D dfgLUT;
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
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
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform float backgroundBlurriness;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:im,alphahash_pars_fragment:nm,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:bm,color_pars_vertex:Sm,color_vertex:Em,common:Tm,defaultnormal_vertex:wm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:km,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:Km,lights_phong_pars_fragment:Jm,lights_physical_fragment:jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:i0,lightprobes_pars_fragment:n0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:y0,normal_pars_fragment:M0,normal_pars_vertex:b0,normal_vertex:S0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:k0,shadowmask_pars_fragment:z0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:$0,tonemapping_pars_fragment:Y0,transmission_fragment:Z0,transmission_pars_fragment:K0,uv_pars_fragment:J0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:tg,background_vert:eg,background_frag:ig,backgroundCube_vert:ng,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distance_vert:cg,distance_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:xg,meshlambert_frag:_g,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:bg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:Tg,meshphysical_frag:wg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},Mt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Zi={basic:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ii([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ii([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ii([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ii([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ii([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ii([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ii([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ii([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:ii([Mt.common,Mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:ii([Mt.lights,Mt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Zi.physical={uniforms:ii([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Fl={r:0,b:0,g:0},Ug=new $t,nf=new Xt;nf.set(-1,0,0,0,1,0,0,0,1);function Fg(r,t,e,i,n,s){let a=new Et(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){let y=M.backgroundBlurriness>0;v=t.get(v,y)}return v}function p(M){let v=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),v=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(M,v){let y=f(v);y&&y.isCubeTexture?(c===void 0&&(c=new dt(new he(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:is(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nf),c.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new dt(new ui(2,2),new Ie({name:"BackgroundMaterial",uniforms:is(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(Fl,_h(r)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:x,dispose:g}}function Og(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(I,F,H,L,B){let V=!1,G=u(I,L,H,F);s!==G&&(s=G,c(s.object)),V=f(I,L,H,B),V&&p(I,L,H,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(I,F,H,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function u(I,F,H,L){let B=L.wireframe===!0,V=i[F.id];V===void 0&&(V={},i[F.id]=V);let G=I.isInstancedMesh===!0?I.id:0,it=V[G];it===void 0&&(it={},V[G]=it);let X=it[H.id];X===void 0&&(X={},it[H.id]=X);let j=X[B];return j===void 0&&(j=d(l()),X[B]=j),j}function d(I){let F=[],H=[],L=[];for(let B=0;B<e;B++)F[B]=0,H[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,F,H,L){let B=s.attributes,V=F.attributes,G=0,it=H.getAttributes();for(let X in it)if(it[X].location>=0){let tt=B[X],wt=V[X];if(wt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function p(I,F,H,L){let B={},V=F.attributes,G=0,it=H.getAttributes();for(let X in it)if(it[X].location>=0){let tt=V[X];tt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),B[X]=wt,G++}s.attributes=B,s.attributesNum=G,s.index=L}function x(){let I=s.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){g(I,0)}function g(I,F){let H=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;H[I]=1,L[I]===0&&(r.enableVertexAttribArray(I),L[I]=1),B[I]!==F&&(r.vertexAttribDivisor(I,F),B[I]=F)}function M(){let I=s.newAttributes,F=s.enabledAttributes;for(let H=0,L=F.length;H<L;H++)F[H]!==I[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function v(I,F,H,L,B,V,G){G===!0?r.vertexAttribIPointer(I,F,H,B,V):r.vertexAttribPointer(I,F,H,L,B,V)}function y(I,F,H,L){x();let B=L.attributes,V=H.getAttributes(),G=F.defaultAttributeValues;for(let it in V){let X=V[it];if(X.location>=0){let j=B[it];if(j===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let tt=j.normalized,wt=j.itemSize,zt=t.get(j);if(zt===void 0)continue;let $=zt.buffer,_t=zt.type,At=zt.bytesPerElement,Ot=_t===r.INT||_t===r.UNSIGNED_INT||j.gpuType===Jo;if(j.isInterleavedBufferAttribute){let vt=j.data,Bt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Se=j.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Gt=0;Gt<X.locationSize;Gt++)g(X.location+Gt,vt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,$);for(let Gt=0;Gt<X.locationSize;Gt++)v(X.location+Gt,wt/X.locationSize,_t,tt,Bt*At,(Se+wt/X.locationSize*Gt)*At,Ot)}else{if(j.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)g(X.location+vt,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt);r.bindBuffer(r.ARRAY_BUFFER,$);for(let vt=0;vt<X.locationSize;vt++)v(X.location+vt,wt/X.locationSize,_t,tt,wt*At,wt/X.locationSize*vt*At,Ot)}}else if(G!==void 0){let tt=G[it];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(X.location,tt);break;case 3:r.vertexAttrib3fv(X.location,tt);break;case 4:r.vertexAttrib4fv(X.location,tt);break;default:r.vertexAttrib1fv(X.location,tt)}}}}M()}function T(){P();for(let I in i){let F=i[I];for(let H in F){let L=F[H];for(let B in L){let V=L[B];for(let G in V)h(V[G].object),delete V[G];delete L[B]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let H in F){let L=F[H];for(let B in L){let V=L[B];for(let G in V)h(V[G].object),delete V[G];delete L[B]}}delete i[I.id]}function _(I){for(let F in i){let H=i[F];for(let L in H){let B=H[L];if(B[I.id]===void 0)continue;let V=B[I.id];for(let G in V)h(V[G].object),delete V[G];delete B[I.id]}}}function b(I){for(let F in i){let H=i[F],L=I.isInstancedMesh===!0?I.id:0,B=H[L];if(B!==void 0){for(let V in B){let G=B[V];for(let it in G)h(G[it].object),delete G[it];delete B[V]}delete H[L],Object.keys(H).length===0&&delete i[F]}}}function P(){A(),a=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Bg(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function kg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Fi&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==di&&_!==Ei&&!b&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,maxSamples:T,samples:w}}function zg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Pi,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let M=s?0:i,v=M*4,y=g.clippingState||null;l.value=y,y=h(p,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,y=f;v!==x;++v,y+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var _a=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Nr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new he(5,5,5),s=new Ie({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:cn});s.uniforms.tEquirect.value=e;let a=new dt(n,s),o=e.minFilter;return e.minFilter===hn&&(e.minFilter=ci),new Ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Nd=256,Hg=3,Gg=20,sf=256,rf=16,Vg=3,Wg=new R,Xg=new Et,Bl=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new dt(new he(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=Wg}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Xg));let m=new Ws(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Nd,Sd(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===$s?this._setSize(t.image.length===0?Nd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Ud(t,!1,!1),i=Math.log2(t)-Hg;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ud(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=qg(),this._integrationMaterial=$g());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/rf);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-Vg)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Yg());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function Ud(r,t,e){return new _a(r,{minFilter:hn,generateMipmaps:t,type:Ke,colorSpace:Sr,depthBuffer:e})}function va(r,t,e){return new Ie({name:r,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:Ze,blending:cn,depthTest:!1,depthWrite:!1})}function qg(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sf}u

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
	`)}function $g(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rf}},`

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
	`)}function Yg(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gg}
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
	`)}function Fd(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Od(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zg(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yo||f===Zo)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new _a(p.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Yo||f===Zo,x=f===ts||f===$s;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Bl(r)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Bl(r)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Yo?d.mapping=ts:f===Zo&&(d.mapping=$s),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Kg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&vr("WebGLRenderer: "+i+" extension not supported."),n}}}function Jg(r,t,e,i){let n={},s=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let x=s.get(p);x&&(t.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?Pr:Cr,y=new v(Math.ceil(M/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,P=0;b<M;b+=3){let A=_[b+0],I=_[b+1],F=_[b+2];T[P++]=A,T[P++]=I,T[P++]=I,T[P++]=F,T[P++]=F,T[P++]=A}}else{g=m.version;for(let _=0,b=0;_<M;_+=3){let P=_+0,A=_+1,I=_+2;T[b++]=P,T[b++]=A,T[b++]=A,T[b++]=I,T[b++]=I,T[b++]=P}}y.version=g;let w=s.get(p);w&&t.remove(w),s.set(p,y)}function d(p){let x=s.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return s.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function jg(r,t,e){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function tx(r,t,e){let i=new WeakMap,n=new Ae;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*u),_=new Ar(w,y,T,u);_.type=Ei,_.needsUpdate=!0;let b=v*4;for(let A=0;A<u;A++){let I=m[A],F=g[A],H=M[A],L=y*T*4*A;for(let B=0;B<I.count;B++){let V=B*b;f===!0&&(n.fromBufferAttribute(I,B),w[L+V+0]=n.x,w[L+V+1]=n.y,w[L+V+2]=n.z,w[L+V+3]=0),p===!0&&(n.fromBufferAttribute(F,B),w[L+V+4]=n.x,w[L+V+5]=n.y,w[L+V+6]=n.z,w[L+V+7]=0),x===!0&&(n.fromBufferAttribute(H,B),w[L+V+8]=n.x,w[L+V+9]=n.y,w[L+V+10]=n.z,w[L+V+11]=H.itemSize===4?n.w:1)}}d={count:u,texture:_,size:new et(y,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ex(r,t,e,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ix={[na]:"LINEAR_TONE_MAPPING",[sa]:"REINHARD_TONE_MAPPING",[ra]:"CINEON_TONE_MAPPING",[Qn]:"ACES_FILMIC_TONE_MAPPING",[oa]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[aa]:"CUSTOM_TONE_MAPPING"};function nx(r,t,e,i,n,s){let a=new Be(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Jt;h.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let u=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new dt(h,u),f=new Jn(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,M=null,v=[],y=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<v.length;_++){let b=v[_];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){v=T,y=v.length>0&&v[0].isRenderPass===!0;let w=a.width,_=a.height;v.length>0&&o===null&&(o=new Be(w,_,{type:Ke,depthBuffer:!1,stencilBuffer:!1}),l=new Be(w,_,{type:Ke,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&v.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ln(w,_),s===!0&&(c.format=un,c.type=es)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<v.length;P++){let A=v[P];A.setSize&&A.setSize(w,_),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,w){if(m||T.toneMapping===$i&&v.length===0)return!1;if(M=w,w!==null){let _=w.width,b=w.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=$i,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=g,m=!0;let _=a,b=o;for(let P=0;P<v.length;P++){let A=v[P];A.enabled!==!1&&(A.render(T,b,_,w),A.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,u.defines={},ie.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");let P=ix[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(M),T.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var af=new hi,of=new ln(1,1),lf=new Ur(1),cf=new Ar,hf=new So,uf=new Nr,Bd=[],kd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Gd=new Float32Array(4);function Ks(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Bd[n];if(s===void 0&&(s=new Float32Array(n),Bd[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ke(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ze(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function zl(r,t){let e=kd[t];e===void 0&&(e=new Int32Array(t),kd[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function sx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2fv(this.addr,t),ze(e,t)}}function ax(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;r.uniform3fv(this.addr,t),ze(e,t)}}function ox(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4fv(this.addr,t),ze(e,t)}}function lx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Gd.set(i),r.uniformMatrix2fv(this.addr,!1,Gd),ze(e,i)}}function cx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Hd.set(i),r.uniformMatrix3fv(this.addr,!1,Hd),ze(e,i)}}function hx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;zd.set(i),r.uniformMatrix4fv(this.addr,!1,zd),ze(e,i)}}function ux(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2iv(this.addr,t),ze(e,t)}}function fx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3iv(this.addr,t),ze(e,t)}}function px(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4iv(this.addr,t),ze(e,t)}}function mx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2uiv(this.addr,t),ze(e,t)}}function xx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3uiv(this.addr,t),ze(e,t)}}function _x(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4uiv(this.addr,t),ze(e,t)}}function Hl(r){return r.version===0&&(r.compareFunction=ph,r.needsUpdate=!0),r}function vx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Hl(of):s=af,e.setTexture2D(t||s,n)}function yx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||hf,n)}function Mx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Hl(lf):s=uf,e.setTextureCube(t||s,n)}function bx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||cf,n)}function Sx(r){switch(r){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return bx}}function Ex(r,t){r.uniform1fv(this.addr,t)}function Tx(r,t){let e=Ks(t,this.size,2);r.uniform2fv(this.addr,e)}function wx(r,t){let e=Ks(t,this.size,3);r.uniform3fv(this.addr,e)}function Ax(r,t){let e=Ks(t,this.size,4);r.uniform4fv(this.addr,e)}function Rx(r,t){let e=Ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Cx(r,t){let e=Ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Px(r,t){let e=Ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ix(r,t){r.uniform1iv(this.addr,t)}function Lx(r,t){r.uniform2iv(this.addr,t)}function Dx(r,t){r.uniform3iv(this.addr,t)}function Nx(r,t){r.uniform4iv(this.addr,t)}function Ux(r,t){r.uniform1uiv(this.addr,t)}function Fx(r,t){r.uniform2uiv(this.addr,t)}function Ox(r,t){r.uniform3uiv(this.addr,t)}function Bx(r,t){r.uniform4uiv(this.addr,t)}function kx(r,t,e){let i=this.cache,n=t.length,s=zl(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Hl(of):a=af;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function zx(r,t,e){let i=this.cache,n=t.length,s=zl(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||hf,s[a])}function Hx(r,t,e){let i=this.cache,n=t.length,s=zl(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Hl(lf):a=uf;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function Gx(r,t,e){let i=this.cache,n=t.length,s=zl(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||cf,s[a])}function Vx(r){switch(r){case 5126:return Ex;case 35664:return Tx;case 35665:return wx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}var Eh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sx(e.type)}},Th=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vx(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function Vd(r,t){r.seq.push(t),r.map[t.id]=t}function Wx(r,t,e){let i=r.name,n=i.length;for(bh.lastIndex=0;;){let s=bh.exec(i),a=bh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Vd(e,c===void 0?new Eh(o,r,t):new Th(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new wh(o),Vd(e,u)),e=u}}}var Zs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wx(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Wd(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Xx=37297,qx=0;function $x(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Xd=new Xt;function Yx(r){ie._getMatrix(Xd,ie.workingColorSpace,r);let t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case Er:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function qd(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+$x(r.getShaderSource(t),o)}else return s}function Zx(r,t){let e=Yx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Kx={[na]:"Linear",[sa]:"Reinhard",[ra]:"Cineon",[Qn]:"ACESFilmic",[oa]:"AgX",[la]:"Neutral",[aa]:"Custom"};function Jx(r,t){let e=Kx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ol=new R;function jx(){ie.getLuminanceCoefficients(Ol);let r=Ol.x.toFixed(4),t=Ol.y.toFixed(4),e=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function t_(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function e_(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function xa(r){return r!==""}function $d(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Yd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(r){return r.replace(i_,n_)}function n_(r,t){let e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ah(e)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(r){return r.replace(s_,r_)}function r_(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Kd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var a_={[ia]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function o_(r){return a_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[$s]:"ENVMAP_MODE_REFRACTION"};function c_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[$o]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function u_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":h_[r.combine]||"ENVMAP_BLENDING_NONE"}function d_(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=o_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=c_(e),u=u_(e),d=Qx(e),f=t_(s),p=n.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(x=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?jt.tonemapping_pars_fragment:"",e.toneMapping!==$i?Jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Zx("linearToOutputTexel",e.outputColorSpace),jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),a=Ah(a),a=$d(a,e),a=Yd(a,e),o=Ah(o),o=$d(o,e),o=Yd(o,e),a=Zd(a),o=Zd(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+x+a,v=g+m+o,y=Wd(n,n.VERTEX_SHADER,M),T=Wd(n,n.FRAGMENT_SHADER,v);n.attachShader(p,y),n.attachShader(p,T),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(A){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(p)||"",F=n.getShaderInfoLog(y)||"",H=n.getShaderInfoLog(T)||"",L=I.trim(),B=F.trim(),V=H.trim(),G=!0,it=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,T);else{let X=qd(n,y,"vertex"),j=qd(n,T,"fragment");Vt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+X+`
`+j)}else L!==""?Ht("WebGLProgram: Program Info Log:",L):(B===""||V==="")&&(it=!1);it&&(A.diagnostics={runnable:G,programLog:L,vertexShader:{log:B,prefix:x},fragmentShader:{log:V,prefix:m}})}n.deleteShader(y),n.deleteShader(T),_=new Zs(n,p),b=e_(n,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,Xx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var f_=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ch(t),e.set(t,i)),i}},Ch=class{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}};function p_(r){return r===Pn||r===pa||r===ma}function m_(r,t,e,i,n,s){let a=new Rr,o=new Rh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,P,A,I,F){let H=A.fog,L=I.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||B,V),it=d[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=j!==void 0?j.length:0,wt=0;L.morphAttributes.position!==void 0&&(wt=1),L.morphAttributes.normal!==void 0&&(wt=2),L.morphAttributes.color!==void 0&&(wt=3);let zt,$,_t,At;if(it){let yt=Zi[it];zt=yt.vertexShader,$=yt.fragmentShader}else{zt=_.vertexShader,$=_.fragmentShader;let yt=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,yt,ge),_t=yt.id,At=ge.id}let Ot=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Bt=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,Gt=!!_.map,Qt=!!_.matcap,se=!!G,Q=se&&G.isPMREMTexture===!0,ct=!!_.aoMap,at=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Yt=!!_.displacementMap,Lt=!!_.emissiveMap,re=!!_.metalnessMap,oe=!!_.roughnessMap,de=_.anisotropy>0,U=_.clearcoat>0,Ne=_.diffuseRoughness>0,ee=_.dispersion>0,ve=_.retroreflectivity>0,pt=_.iridescence>0,Pe=_.sheen>0,kt=_.transmission>0,Wt=de&&!!_.anisotropyMap,C=U&&!!_.clearcoatMap,S=U&&!!_.clearcoatNormalMap,k=U&&!!_.clearcoatRoughnessMap,nt=Ne&&!!_.diffuseRoughnessMap,J=pt&&!!_.iridescenceMap,ot=pt&&!!_.iridescenceThicknessMap,mt=Pe&&!!_.sheenColorMap,Y=Pe&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ht=!!_.specularColorMap,D=!!_.specularIntensityMap,K=kt&&!!_.transmissionMap,q=kt&&!!_.thicknessMap,ut=!!_.gradientMap,rt=!!_.alphaMap,lt=_.alphaTest>0,Dt=!!_.alphaHash,Kt=!!_.extensions,st=$i;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(st=r.toneMapping);let Ft=Q?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Zt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:zt,fragmentShader:$,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&I.instanceColor!==null,instancingMorph:Bt&&I.morphTexture!==null,outputColorSpace:Ot===null?r.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:Qt,envMap:se,envMapMode:se&&G.mapping,envMapPMREM:Q,envMapMaxLod:Q?Ft.length-1:null,envMapSize:Q?Ft[0].width:null,aoMap:ct,lightMap:at,bumpMap:Tt,normalMap:xt,displacementMap:Yt,emissiveMap:Lt,normalMapObjectSpace:xt&&_.normalMapType===dd,normalMapTangentSpace:xt&&_.normalMapType===Nl,packedNormalMap:xt&&_.normalMapType===Nl&&p_(_.normalMap.format),metalnessMap:re,roughnessMap:oe,anisotropy:de,anisotropyMap:Wt,clearcoat:U,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:Ne,diffuseRoughnessMap:nt,dispersion:ee,retroreflection:ve,iridescence:pt,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:Pe,sheenColorMap:mt,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ht,specularIntensityMap:D,transmission:kt,transmissionMap:K,thicknessMap:q,gradientMap:ut,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Dt,combine:_.combine,mapUv:Gt&&f(_.map.channel),aoMapUv:ct&&f(_.aoMap.channel),lightMapUv:at&&f(_.lightMap.channel),bumpMapUv:Tt&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:Yt&&f(_.displacementMap.channel),emissiveMapUv:Lt&&f(_.emissiveMap.channel),metalnessMapUv:re&&f(_.metalnessMap.channel),roughnessMapUv:oe&&f(_.roughnessMap.channel),anisotropyMapUv:Wt&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:ht&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||de),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Gt||rt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(yt=>yt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xe,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(b,_),g(b,_),b.push(r.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],P;if(b){let A=Zi[b];P=fn.clone(A.uniforms)}else P=_.uniforms;return P}function v(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new d_(r,b,_,n),c.push(P),h.set(b,P)),P}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function g_(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function x_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Jd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function jd(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,m,g){let M=r[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},r[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=g),t++,M}function l(d,f,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);let v=o(d,f,p,x,m,g);p.transmission>0?i.push(v):p.transparent===!0?n.push(v):e.push(v)}function c(d,f,p,x,m,g){let M=o(d,f,p,x,m,g);p.transmission>0?i.unshift(M):p.transparent===!0?n.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||x_),i.length>1&&i.sort(f||Jd),n.length>1&&n.sort(f||Jd)}function u(){for(let d=t,f=r.length;d<f;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function __(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new jd,r.set(i,[a])):n>=s.length?(a=new jd,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function v_(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function y_(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var M_=0;function b_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function S_(r){let t=new v_,e=y_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new $t,a=new $t;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,v=0,y=0,T=0,w=0,_=0,b=0,P=0,A=0;c.sort(b_);for(let F=0,H=c.length;F<H;F++){let L=c[F],B=L.color,V=L.intensity,G=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Pn?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*V,u+=B.g*V,d+=B.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);A++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=it;let wt=j.getViewportCount();for(let zt=0;zt<wt;zt++)i.sunShadowMatrix[x+zt]=j.getMatrix(zt),i.sunShadowCascade[x+zt]=j._cascadeData[zt];x+=wt,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[M]=X;let j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[M]=j.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[M]=tt,i.spotShadowMap[M]=it,_++}M++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=L.shadow.matrix,w++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[y]=X,y++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==v||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==_||I.numSpotMaps!==b||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=v,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=v,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=_,I.numSpotMaps=b,I.numLightProbes=A,i.version=M_++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let M=0,v=c.length;M<v;M++){let y=c[M];if(y.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),d++}else if(y.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Qd(r){let t=new S_(r),e=[],i=[],n=[];function s(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E_(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Qd(r),t.set(n,[o])):s>=a.length?(o=new Qd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,A_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],R_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],tf=new $t,ga=new R,Sh=new R;function C_(r,t,e){let i=new En,n=new et,s=new et,a=new Ae,o=new Do,l=new No,c={},h=e.maxTextureSize,u={[Cn]:Ze,[Ze]:Cn,[xe]:xe},d=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Jt;p.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let g=this.type;this.render=function(w,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=w.length;L<B;L++){let V=w[L],G=V.shadow;if(G===void 0){Ht("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let it=G.getFrameExtents();n.multiply(it),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/it.x),n.x=s.x*it.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/it.y),n.y=s.y*it.y,G.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xs){if(V.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Be(n.x,n.y,{format:Pn,type:Ke,minFilter:ci,magFilter:ci,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new ln(n.x,n.y,Ei),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=on,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Oe,G.map.depthTexture.magFilter=Oe}else V.isPointLight?(G.map=new _a(n.x),G.map.depthTexture=new Ur(n.x,Ui)):(G.map=new Be(n.x,n.y),G.map.depthTexture=new ln(n.x,n.y,Ui)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=on,this.type===ia?(G.map.depthTexture.compareFunction=X?fh:dh,G.map.depthTexture.minFilter=ci,G.map.depthTexture.magFilter=ci):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Oe,G.map.depthTexture.magFilter=Oe);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==n.x||G.map.height!==n.y)&&G.map.setSize(n.x,n.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let wt=0;wt<j;wt++){let zt=G.getCamera(wt);if(V.isPointLight){let $=G.camera,_t=G.matrix,At=V.distance||$.far;At!==$.far&&($.far=At,$.updateProjectionMatrix()),ga.setFromMatrixPosition(V.matrixWorld),$.position.copy(ga),Sh.copy($.position),Sh.add(A_[wt]),$.up.copy(R_[wt]),$.lookAt(Sh),$.updateMatrixWorld(),_t.makeTranslation(-ga.x,-ga.y,-ga.z),tf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tf,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,wt),r.clear();else{wt===0&&(r.setRenderTarget(G.map),r.clear());let $=G.getViewport(wt);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),F.viewport(a)}i=G.getFrustum(wt),y(_,b,zt,V,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Xs&&M(G,b),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,A,I)};function M(w,_){let b=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Be(n.x,n.y,{format:Pn,type:Ke}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,b,f,x,null)}function v(w,_,b,P){let A=null,I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)A=I;else if(A=b.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=A.uuid,H=_.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let B=L[H];B===void 0&&(B=A.clone(),L[H]=B,_.addEventListener("dispose",T)),A=B}if(A.visible=_.visible,A.wireframe=_.wireframe,P===Xs?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:u[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=r.properties.get(A);F.light=b}return A}function y(w,_,b,P,A,I){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Xs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=t.update(w),B=w.material;if(Array.isArray(B)){let V=L.groups;for(let G=0,it=V.length;G<it;G++){let X=V[G],j=B[X.materialIndex];if(j&&j.visible){let tt=v(w,j,P,I);w.onBeforeShadow(r,w,_,b,L,tt,X),r.renderBufferDirect(b,null,L,tt,w,X),w.onAfterShadow(r,w,_,b,L,tt,X)}}}else if(B.visible){let V=v(w,B,P,I);w.onBeforeShadow(r,w,_,b,L,V,null),r.renderBufferDirect(b,null,L,V,w,null),w.onAfterShadow(r,w,_,b,L,V,null)}}let H=w.children;for(let L=0,B=H.length;L<B;L++)y(H[L],_,b,P,A,I)}function T(w){w.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function P_(r,t){function e(){let D=!1,K=new Ae,q=null,ut=new Ae(0,0,0,0);return{setMask:function(rt){q!==rt&&!D&&(r.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){D=rt},setClear:function(rt,lt,Dt,Kt,st){st===!0&&(rt*=Kt,lt*=Kt,Dt*=Kt),K.set(rt,lt,Dt,Kt),ut.equals(K)===!1&&(r.clearColor(rt,lt,Dt,Kt),ut.copy(K))},reset:function(){D=!1,q=null,ut.set(-1,0,0,0)}}}function i(){let D=!1,K=!1,q=null,ut=null,rt=null;return{setReversed:function(lt){if(K!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),K=lt;let Kt=rt;rt=null,this.setClear(Kt)}},getReversed:function(){return K},setTest:function(lt){lt?vt(r.DEPTH_TEST):Bt(r.DEPTH_TEST)},setMask:function(lt){q!==lt&&!D&&(r.depthMask(lt),q=lt)},setFunc:function(lt){if(K&&(lt=bd[lt]),ut!==lt){switch(lt){case ho:r.depthFunc(r.NEVER);break;case uo:r.depthFunc(r.ALWAYS);break;case fo:r.depthFunc(r.LESS);break;case Rs:r.depthFunc(r.LEQUAL);break;case po:r.depthFunc(r.EQUAL);break;case mo:r.depthFunc(r.GEQUAL);break;case go:r.depthFunc(r.GREATER);break;case xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=lt}},setLocked:function(lt){D=lt},setClear:function(lt){rt!==lt&&(rt=lt,K&&(lt=1-lt),r.clearDepth(lt))},reset:function(){D=!1,q=null,ut=null,rt=null,K=!1}}}function n(){let D=!1,K=null,q=null,ut=null,rt=null,lt=null,Dt=null,Kt=null,st=null;return{setTest:function(Ft){D||(Ft?vt(r.STENCIL_TEST):Bt(r.STENCIL_TEST))},setMask:function(Ft){K!==Ft&&!D&&(r.stencilMask(Ft),K=Ft)},setFunc:function(Ft,Zt,yt){(q!==Ft||ut!==Zt||rt!==yt)&&(r.stencilFunc(Ft,Zt,yt),q=Ft,ut=Zt,rt=yt)},setOp:function(Ft,Zt,yt){(lt!==Ft||Dt!==Zt||Kt!==yt)&&(r.stencilOp(Ft,Zt,yt),lt=Ft,Dt=Zt,Kt=yt)},setLocked:function(Ft){D=Ft},setClear:function(Ft){st!==Ft&&(r.clearStencil(Ft),st=Ft)},reset:function(){D=!1,K=null,q=null,ut=null,rt=null,lt=null,Dt=null,Kt=null,st=null}}}let s=new e,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,y=null,T=null,w=null,_=null,b=new Et(0,0,0),P=0,A=!1,I=null,F=null,H=null,L=null,B=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,it=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=it>=2);let j=null,tt={},wt=r.getParameter(r.SCISSOR_BOX),zt=r.getParameter(r.VIEWPORT),$=new Ae().fromArray(wt),_t=new Ae().fromArray(zt);function At(D,K,q,ut){let rt=new Uint8Array(4),lt=r.createTexture();r.bindTexture(D,lt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<q;Dt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(K+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return lt}let Ot={};Ot[r.TEXTURE_2D]=At(r.TEXTURE_2D,r.TEXTURE_2D,1),Ot[r.TEXTURE_CUBE_MAP]=At(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[r.TEXTURE_2D_ARRAY]=At(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ot[r.TEXTURE_3D]=At(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(r.DEPTH_TEST),a.setFunc(Rs),Tt(!1),xt(th),vt(r.CULL_FACE),ct(cn);function vt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Bt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Se(D,K){return d[D]!==K?(r.bindFramebuffer(D,K),d[D]=K,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=K),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Gt(D,K){let q=p,ut=!1;if(D){q=f.get(K),q===void 0&&(q=[],f.set(K,q));let rt=D.textures;if(q.length!==rt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Dt=rt.length;lt<Dt;lt++)q[lt]=r.COLOR_ATTACHMENT0+lt;q.length=rt.length,ut=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,ut=!0);ut&&r.drawBuffers(q)}function Qt(D){return x!==D?(r.useProgram(D),x=D,!0):!1}let se={[jn]:r.FUNC_ADD,[Xu]:r.FUNC_SUBTRACT,[qu]:r.FUNC_REVERSE_SUBTRACT};se[$u]=r.MIN,se[Yu]=r.MAX;let Q={[Zu]:r.ZERO,[Ku]:r.ONE,[Ju]:r.SRC_COLOR,[nh]:r.SRC_ALPHA,[nd]:r.SRC_ALPHA_SATURATE,[ed]:r.DST_COLOR,[Qu]:r.DST_ALPHA,[ju]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[id]:r.ONE_MINUS_DST_COLOR,[td]:r.ONE_MINUS_DST_ALPHA,[sd]:r.CONSTANT_COLOR,[rd]:r.ONE_MINUS_CONSTANT_COLOR,[ad]:r.CONSTANT_ALPHA,[od]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(D,K,q,ut,rt,lt,Dt,Kt,st,Ft){if(D===cn){m===!0&&(Bt(r.BLEND),m=!1);return}if(m===!1&&(vt(r.BLEND),m=!0),D!==Wu){if(D!==g||Ft!==A){if((M!==jn||T!==jn)&&(r.blendEquation(r.FUNC_ADD),M=jn,T=jn),Ft)switch(D){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _e:r.blendFunc(r.ONE,r.ONE);break;case eh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Vt("WebGLState: Invalid blending: ",D);break}else switch(D){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _e:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case eh:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",D);break}v=null,y=null,w=null,_=null,b.set(0,0,0),P=0,g=D,A=Ft}return}rt=rt||K,lt=lt||q,Dt=Dt||ut,(K!==M||rt!==T)&&(r.blendEquationSeparate(se[K],se[rt]),M=K,T=rt),(q!==v||ut!==y||lt!==w||Dt!==_)&&(r.blendFuncSeparate(Q[q],Q[ut],Q[lt],Q[Dt]),v=q,y=ut,w=lt,_=Dt),(Kt.equals(b)===!1||st!==P)&&(r.blendColor(Kt.r,Kt.g,Kt.b,st),b.copy(Kt),P=st),g=D,A=!1}function at(D,K){D.side===xe?Bt(r.CULL_FACE):vt(r.CULL_FACE);let q=D.side===Ze;K&&(q=!q),Tt(q),D.blending===qs&&D.transparent===!1?ct(cn):ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ut=D.stencilWrite;o.setTest(ut),ut&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function xt(D){D!==Hu?(vt(r.CULL_FACE),D!==F&&(D===th?r.cullFace(r.BACK):D===Gu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Bt(r.CULL_FACE),F=D}function Yt(D){D!==H&&(G&&r.lineWidth(D),H=D)}function Lt(D,K,q){D?(vt(r.POLYGON_OFFSET_FILL),(L!==K||B!==q)&&(L=K,B=q,a.getReversed()&&(K=-K,q=-q),r.polygonOffset(K,q))):Bt(r.POLYGON_OFFSET_FILL)}function re(D){D?vt(r.SCISSOR_TEST):Bt(r.SCISSOR_TEST)}function oe(D){D===void 0&&(D=r.TEXTURE0+V-1),j!==D&&(r.activeTexture(D),j=D)}function de(D,K,q){q===void 0&&(j===null?q=r.TEXTURE0+V-1:q=j);let ut=tt[q];ut===void 0&&(ut={type:void 0,texture:void 0},tt[q]=ut),(ut.type!==D||ut.texture!==K)&&(j!==q&&(r.activeTexture(q),j=q),r.bindTexture(D,K||Ot[D]),ut.type=D,ut.texture=K)}function U(){let D=tt[j];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ne(){try{r.compressedTexImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ve(){try{r.texSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function pt(){try{r.texSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Pe(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Wt(){try{r.texStorage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function C(){try{r.texStorage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function S(){try{r.texImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function k(){try{r.texImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function nt(D){return u[D]!==void 0?u[D]:r.getParameter(D)}function J(D,K){u[D]!==K&&(r.pixelStorei(D,K),u[D]=K)}function ot(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function mt(D){_t.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),_t.copy(D))}function Y(D,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let ut=q.get(D);ut===void 0&&(ut=r.getUniformBlockIndex(K,D.name),r.uniformBlockBinding(K,ut,ut),q.set(D,ut))}function Z(D,K,q){let rt=c.get(K).get(D);l[rt]!==q&&(r.bindBufferBase(r.UNIFORM_BUFFER,rt,q),l[rt]=q)}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,tt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,y=null,T=null,w=null,_=null,b=new Et(0,0,0),P=0,A=!1,I=null,F=null,H=null,L=null,B=null,$.set(0,0,r.canvas.width,r.canvas.height),_t.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:vt,disable:Bt,bindFramebuffer:Se,drawBuffers:Gt,useProgram:Qt,setBlending:ct,setMaterial:at,setFlipSided:Tt,setCullFace:xt,setLineWidth:Yt,setPolygonOffset:Lt,setScissorTest:re,activeTexture:oe,bindTexture:de,unbindTexture:U,compressedTexImage2D:Ne,compressedTexImage3D:ee,texImage2D:S,texImage3D:k,pixelStorei:J,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Wt,texStorage3D:C,texSubImage2D:ve,texSubImage3D:pt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:kt,scissor:ot,viewport:mt,reset:ht}}function I_(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Tr("canvas")}function M(C,S,k){let nt=1,J=Wt(C);if((J.width>k||J.height>k)&&(nt=k/Math.max(J.width,J.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(nt*J.width),mt=Math.floor(nt*J.height);d===void 0&&(d=g(ot,mt));let Y=S?g(ot,mt):d;return Y.width=ot,Y.height=mt,Y.getContext("2d").drawImage(C,0,0,ot,mt),Ht("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ot+"x"+mt+")."),Y}else return"data"in C&&Ht("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function v(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,S,k,nt,J,ot=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;nt&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8),k===r.UNSIGNED_SHORT&&mt&&(Y=mt.R16_EXT),k===r.SHORT&&mt&&(Y=mt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8),k===r.UNSIGNED_SHORT&&mt&&(Y=mt.RG16_EXT),k===r.SHORT&&mt&&(Y=mt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_SHORT&&mt&&(Y=mt.RGB16_EXT),k===r.SHORT&&mt&&(Y=mt.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){let Z=ot?Er:ie.getTransfer(J);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=Z===fe?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&mt&&(Y=mt.RGBA16_EXT),k===r.SHORT&&mt&&(Y=mt.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(C,S){let k;return C?S===null||S===Ui||S===es?k=r.DEPTH24_STENCIL8:S===Ei?k=r.DEPTH32F_STENCIL8:S===Ys&&(k=r.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===es?k=r.DEPTH_COMPONENT24:S===Ei?k=r.DEPTH_COMPONENT32F:S===Ys&&(k=r.DEPTH_COMPONENT16),k}function b(C,S){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==ci?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=new WeakRef(C);i.get(C).__ref=S,p.add(S),x.register(C,S,S)}function A(C){let S=i.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function I(C){H(C.target)}function F(C){L(C.target)}function H(C){C.removeEventListener("dispose",I),A(C),V(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",F),A(C),it(C)}function B(){for(let C of p){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):H(S))}p.clear(),u.clear()}function V(C){let S=i.get(C);if(S.__webglInit===void 0)return;let k=C.source,nt=f.get(k);if(nt){let J=nt[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(C),Object.keys(nt).length===0&&f.delete(k)}i.remove(C)}function G(C){let S=i.get(C);r.deleteTexture(S.__webglTexture);let k=C.source,nt=f.get(k);delete nt[S.__cacheKey],a.memory.textures--}function it(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&H(k),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ot=0;ot<S.__webglFramebuffer[J].length;ot++)r.deleteFramebuffer(S.__webglFramebuffer[J][ot]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=C.textures;for(let J=0,ot=nt.length;J<ot;J++){let mt=i.get(nt[J]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(nt[J])}i.remove(C)}let X=0;function j(){X=0}function tt(){return X}function wt(C){X=C}function zt(){let C=X;return C>=n.maxTextures&&Ht("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,C}function $(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function _t(C,S){let k=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let nt=C.image;if(nt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function At(C,S){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){at(k,C,S);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function Ot(C,S){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){at(k,C,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function vt(C,S){let k=i.get(C);if(C.version>0&&k.__version!==C.version){Tt(k,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}let Bt={[Sn]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[_o]:r.MIRRORED_REPEAT},Se={[Oe]:r.NEAREST,[hd]:r.NEAREST_MIPMAP_NEAREST,[ca]:r.NEAREST_MIPMAP_LINEAR,[ci]:r.LINEAR,[Ko]:r.LINEAR_MIPMAP_NEAREST,[hn]:r.LINEAR_MIPMAP_LINEAR},Gt={[pd]:r.NEVER,[ph]:r.ALWAYS,[md]:r.LESS,[dh]:r.LEQUAL,[gd]:r.EQUAL,[fh]:r.GEQUAL,[xd]:r.GREATER,[_d]:r.NOTEQUAL};function Qt(C,S){if(S.type===Ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ci||S.magFilter===Ko||S.magFilter===ca||S.magFilter===hn||S.minFilter===ci||S.minFilter===Ko||S.minFilter===ca||S.minFilter===hn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Bt[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Bt[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Bt[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Se[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==ca&&S.minFilter!==hn||S.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function se(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I),P(S));let nt=S.source,J=f.get(nt);J===void 0&&(J={},f.set(nt,J));let ot=$(S);if(ot!==C.__cacheKey){J[ot]===void 0&&(J[ot]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[ot].usedTimes++;let mt=J[C.__cacheKey];mt!==void 0&&(J[C.__cacheKey].usedTimes--,mt.usedTimes===0&&G(S)),C.__cacheKey=ot,C.__webglTexture=J[ot].texture}return k}function Q(C,S,k){return Math.floor(Math.floor(C/k)/S)}function ct(C,S,k,nt){let ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,nt,S.data);else{ot.sort((D,K)=>D.start-K.start);let mt=0;for(let D=1;D<ot.length;D++){let K=ot[mt],q=ot[D],ut=K.start+K.count,rt=Q(q.start,S.width,4),lt=Q(K.start,S.width,4);q.start<=ut+1&&rt===lt&&Q(q.start+q.count-1,S.width,4)===rt?K.count=Math.max(K.count,q.start+q.count-K.start):(++mt,ot[mt]=q)}ot.length=mt+1;let Y=e.getParameter(r.UNPACK_ROW_LENGTH),Z=e.getParameter(r.UNPACK_SKIP_PIXELS),ht=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let D=0,K=ot.length;D<K;D++){let q=ot[D],ut=Math.floor(q.start/4),rt=Math.ceil(q.count/4),lt=ut%S.width,Dt=Math.floor(ut/S.width),Kt=rt,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(r.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(r.TEXTURE_2D,0,lt,Dt,Kt,st,k,nt,S.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Y),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(r.UNPACK_SKIP_ROWS,ht)}}function at(C,S,k){let nt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=r.TEXTURE_3D);let J=se(C,S),ot=S.source;e.bindTexture(nt,C.__webglTexture,r.TEXTURE0+k);let mt=i.get(ot);if(ot.version!==mt.__version||J===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),Ft=S.colorSpace===dn?null:ie.getPrimaries(S.colorSpace),Zt=S.colorSpace===dn||st===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=M(S.image,!1,n.maxTextureSize);Z=kt(S,Z);let ht=s.convert(S.format,S.colorSpace),D=s.convert(S.type),K=w(S.internalFormat,ht,D,S.normalized,S.colorSpace,S.isVideoTexture);Qt(nt,S);let q,ut=S.mipmaps,rt=S.isVideoTexture!==!0,lt=mt.__version===void 0||J===!0,Dt=ot.dataReady,Kt=b(S,Z);if(S.isDepthTexture)K=_(S.format===un,S.type),lt&&(rt?e.texStorage2D(r.TEXTURE_2D,1,K,Z.width,Z.height):e.texImage2D(r.TEXTURE_2D,0,K,Z.width,Z.height,0,ht,D,null));else if(S.isDataTexture)if(ut.length>0){rt&&lt&&e.texStorage2D(r.TEXTURE_2D,Kt,K,ut[0].width,ut[0].height);for(let st=0,Ft=ut.length;st<Ft;st++)q=ut[st],rt?Dt&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,q.width,q.height,ht,D,q.data):e.texImage2D(r.TEXTURE_2D,st,K,q.width,q.height,0,ht,D,q.data);S.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(r.TEXTURE_2D,Kt,K,Z.width,Z.height),Dt&&ct(S,Z,ht,D)):e.texImage2D(r.TEXTURE_2D,0,K,Z.width,Z.height,0,ht,D,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,K,ut[0].width,ut[0].height,Z.depth);for(let st=0,Ft=ut.length;st<Ft;st++)if(q=ut[st],S.format!==Fi)if(ht!==null)if(rt){if(Dt)if(S.layerUpdates.size>0){let Zt=Mh(q.width,q.height,S.format,S.type);for(let yt of S.layerUpdates){let ge=q.data.subarray(yt*Zt/q.data.BYTES_PER_ELEMENT,(yt+1)*Zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,yt,q.width,q.height,1,ht,ge)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,Z.depth,ht,q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,K,q.width,q.height,Z.depth,0,q.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Dt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,Z.depth,ht,D,q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,K,q.width,q.height,Z.depth,0,ht,D,q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(r.TEXTURE_2D,Kt,K,ut[0].width,ut[0].height);for(let st=0,Ft=ut.length;st<Ft;st++)q=ut[st],S.format!==Fi?ht!==null?rt?Dt&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,q.width,q.height,ht,q.data):e.compressedTexImage2D(r.TEXTURE_2D,st,K,q.width,q.height,0,q.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Dt&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,q.width,q.height,ht,D,q.data):e.texImage2D(r.TEXTURE_2D,st,K,q.width,q.height,0,ht,D,q.data)}else if(S.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,K,Z.width,Z.height,Z.depth),Dt)if(S.layerUpdates.size>0){let st=Mh(Z.width,Z.height,S.format,S.type);for(let Ft of S.layerUpdates){let Zt=Z.data.subarray(Ft*st/Z.data.BYTES_PER_ELEMENT,(Ft+1)*st/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ft,Z.width,Z.height,1,ht,D,Zt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ht,D,Z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,ht,D,Z.data);else if(S.isData3DTexture)rt?(lt&&e.texStorage3D(r.TEXTURE_3D,Kt,K,Z.width,Z.height,Z.depth),Dt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ht,D,Z.data)):e.texImage3D(r.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,ht,D,Z.data);else if(S.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(r.TEXTURE_2D,Kt,K,Z.width,Z.height);else{let st=Z.width,Ft=Z.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(r.TEXTURE_2D,Zt,K,st,Ft,0,ht,D,null),st>>=1,Ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),u.add(S),st.onpaint=Ft=>{let Zt=Ft.changedElements;for(let yt of u)Zt.includes(yt.image)&&(yt.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Z);else{let Zt=r.RGBA,yt=r.RGBA,ge=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Zt,yt,ge,Z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(rt&&lt){let st=Wt(ut[0]);e.texStorage2D(r.TEXTURE_2D,Kt,K,st.width,st.height)}for(let st=0,Ft=ut.length;st<Ft;st++)q=ut[st],rt?Dt&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,ht,D,q):e.texImage2D(r.TEXTURE_2D,st,K,ht,D,q);S.generateMipmaps=!1}else if(rt){if(lt){let st=Wt(Z);e.texStorage2D(r.TEXTURE_2D,Kt,K,st.width,st.height)}Dt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,D,Z)}else e.texImage2D(r.TEXTURE_2D,0,K,ht,D,Z);v(S)&&S.mipmapsAutoUpdate===!0&&y(nt),mt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Tt(C,S,k){if(S.image.length!==6)return;let nt=se(C,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);let ot=i.get(J);if(J.version!==ot.__version||nt===!0){e.activeTexture(r.TEXTURE0+k);let mt=ie.getPrimaries(ie.workingColorSpace),Y=S.colorSpace===dn?null:ie.getPrimaries(S.colorSpace),Z=S.colorSpace===dn||mt===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ht=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,K=[];for(let yt=0;yt<6;yt++)!ht&&!D?K[yt]=M(S.image[yt],!0,n.maxCubemapSize):K[yt]=D?S.image[yt].image:S.image[yt],K[yt]=kt(S,K[yt]);let q=K[0],ut=s.convert(S.format,S.colorSpace),rt=s.convert(S.type),lt=w(S.internalFormat,ut,rt,S.normalized,S.colorSpace),Dt=S.isVideoTexture!==!0,Kt=ot.__version===void 0||nt===!0,st=J.dataReady,Ft=b(S,q);Qt(r.TEXTURE_CUBE_MAP,S);let Zt;if(S.isDepthTexture){if(lt=_(S.format===un,S.type),Kt)if(Dt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let yt=0;yt<6;yt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,q.width,q.height,0,ut,rt,null)}else if(ht){Dt&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,lt,q.width,q.height);for(let yt=0;yt<6;yt++){Zt=K[yt].mipmaps;for(let ge=0;ge<Zt.length;ge++){let He=Zt[ge];S.format!==Fi?ut!==null?Dt?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge,0,0,He.width,He.height,ut,He.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge,lt,He.width,He.height,0,He.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge,0,0,He.width,He.height,ut,rt,He.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge,lt,He.width,He.height,0,ut,rt,He.data)}}}else{if(Zt=S.mipmaps,Dt&&Kt){Zt.length>0&&Ft++;let yt=Wt(K[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,lt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(D){Dt?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,K[yt].width,K[yt].height,ut,rt,K[yt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,K[yt].width,K[yt].height,0,ut,rt,K[yt].data);for(let ge=0;ge<Zt.length;ge++){let gn=Zt[ge].image[yt].image;Dt?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge+1,0,0,gn.width,gn.height,ut,rt,gn.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge+1,lt,gn.width,gn.height,0,ut,rt,gn.data)}}else{Dt?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ut,rt,K[yt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,ut,rt,K[yt]);for(let ge=0;ge<Zt.length;ge++){let He=Zt[ge];Dt?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge+1,0,0,ut,rt,He.image[yt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ge+1,lt,ut,rt,He.image[yt])}}}v(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ot.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xt(C,S,k,nt,J,ot){let mt=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),Z=w(k.internalFormat,mt,Y,k.normalized,k.colorSpace),ht=i.get(S),D=i.get(k);if(D.__renderTarget=S,!ht.__hasExternalTextures){let K=Math.max(1,S.width>>ot),q=Math.max(1,S.height>>ot);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,ot,Z,K,q,S.depth,0,mt,Y,null):e.texImage2D(J,ot,Z,K,q,0,mt,Y,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,D.__webglTexture,0,ve(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,D.__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(C,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let nt=S.depthTexture,J=nt&&nt.isDepthTexture?nt.type:null,ot=_(S.stencilBuffer,J),mt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(S),ot,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(S),ot,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ot,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,C)}else{let nt=S.textures;for(let J=0;J<nt.length;J++){let ot=nt[J],mt=s.convert(ot.format,ot.colorSpace),Y=s.convert(ot.type),Z=w(ot.internalFormat,mt,Y,ot.normalized,ot.colorSpace);pt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(S),Z,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(S),Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(C,S,k){let nt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(S.depthTexture);J.__renderTarget=S;let ot=nt?S.depthTexture.image[0]:S.depthTexture.image;(!J.__webglTexture||ot.width!==S.width||ot.height!==S.height)&&(ot.width=S.width,ot.height=S.height,S.depthTexture.needsUpdate=!0),nt?vt(S.depthTexture,0):_t(S.depthTexture,0);let mt=J.__webglTexture,Y=ve(S),Z=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ht=S.depthTexture.format===un?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===on)pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,Z,mt,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,ht,Z,mt,0);else if(S.depthTexture.format===un)pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,Z,mt,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,ht,Z,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(C){let S=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let nt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",J)};nt.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=nt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Lt(S.__webglFramebuffer[nt],C,nt);else C.texture.mipmaps.length>0?Lt(S.__webglFramebuffer[0],C,0):Lt(S.__webglFramebuffer,C,0);else if(k){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=r.createRenderbuffer(),Yt(S.__webglDepthbuffer[nt],C,!1);else{let J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ot)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Yt(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ot)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(C,S,k){let nt=i.get(C);S!==void 0&&xt(nt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&re(C)}function de(C){let S=C.texture,k=i.get(C),nt=i.get(S);C.addEventListener("dispose",F),P(C);let J=C.textures,ot=C.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=S.version,a.memory.textures++),ot){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let Z=0;Z<S.mipmaps.length;Z++)k.__webglFramebuffer[Y][Z]=r.createFramebuffer()}else k.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)k.__webglFramebuffer[Y]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(mt)for(let Y=0,Z=J.length;Y<Z;Y++){let ht=i.get(J[Y]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let Z=J[Y];k.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);let ht=s.convert(Z.format,Z.colorSpace),D=s.convert(Z.type),K=w(Z.internalFormat,ht,D,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),q=ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,q,K,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Qt(r.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)xt(k.__webglFramebuffer[Y][Z],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else xt(k.__webglFramebuffer[Y],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);v(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Y=0,Z=J.length;Y<Z;Y++){let ht=J[Y],D=i.get(ht),K=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,D.__webglTexture),Qt(K,ht),xt(k.__webglFramebuffer,C,ht,r.COLOR_ATTACHMENT0+Y,K,0),v(ht)&&y(K)}e.unbindTexture()}else{let Y=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),Qt(Y,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)xt(k.__webglFramebuffer[Z],C,S,r.COLOR_ATTACHMENT0,Y,Z);else xt(k.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,Y,0);v(S)?y(Y):S.mipmaps.length>0&&r.texParameteri(Y,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&re(C)}function U(C){let S=C.textures;for(let k=0,nt=S.length;k<nt;k++){let J=S[k];if(v(J)&&J.mipmapsAutoUpdate===!0){let ot=T(C),mt=i.get(J).__webglTexture;e.bindTexture(ot,mt),y(ot),e.unbindTexture()}}}let Ne=[];function ee(C){if(C.samples>0){if(pt(C)===!1){let S=C.textures,k=C.width,nt=C.height,J=r.COLOR_BUFFER_BIT,ot=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=i.get(C),Y=S.length>1;if(Y)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);let D=i.get(S[ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,k,nt,0,0,k,nt,J,r.NEAREST),l===!0&&(Ne.length=0,Ne.push(r.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ne.push(ot),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);let D=i.get(S[ht]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,D,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ve(C){return Math.min(n.maxSamples,C.samples)}function pt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function kt(C,S){let k=C.colorSpace,nt=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Sr&&k!==dn&&(ie.getTransfer(k)===fe?(nt!==Fi||J!==di)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",k)),S}function Wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=_t,this.setTexture2DArray=At,this.setTexture3D=Ot,this.setTextureCube=vt,this.rebindTextures=oe,this.setupRenderTarget=de,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pt,this.dispose=B}function L_(r,t){function e(i,n=dn){let s,a=ie.getTransfer(n);if(i===di)return r.UNSIGNED_BYTE;if(i===jo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Qo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===ah)return r.BYTE;if(i===oh)return r.SHORT;if(i===Ys)return r.UNSIGNED_SHORT;if(i===Jo)return r.INT;if(i===Ui)return r.UNSIGNED_INT;if(i===Ei)return r.FLOAT;if(i===Ke)return r.HALF_FLOAT;if(i===hh)return r.ALPHA;if(i===uh)return r.RGB;if(i===Fi)return r.RGBA;if(i===on)return r.DEPTH_COMPONENT;if(i===un)return r.DEPTH_STENCIL;if(i===tl)return r.RED;if(i===el)return r.RED_INTEGER;if(i===Pn)return r.RG;if(i===il)return r.RG_INTEGER;if(i===nl)return r.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===al||i===ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===pa||i===fl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ll||i===cl)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ul)return s.COMPRESSED_R11_EAC;if(i===dl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return s.COMPRESSED_RG11_EAC;if(i===fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pl||i===ml||i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===bl||i===Sl||i===El||i===Tl||i===wl||i===Al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Cl||i===Pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Il||i===Ll||i===ma||i===Dl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ie({vertexShader:D_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends Vi{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Ph,g={},M=e.getContextAttributes(),v=null,y=null,T=[],w=[],_=new et,b=null,P=null,A=new $e;A.viewport=new Ae;let I=new $e;I.viewport=new Ae;let F=[A,I],H=new qo,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let _t=T[$];return _t===void 0&&(_t=new Ls,T[$]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function($){let _t=T[$];return _t===void 0&&(_t=new Ls,T[$]=_t),_t.getGripSpace()},this.getHand=function($){let _t=T[$];return _t===void 0&&(_t=new Ls,T[$]=_t),_t.getHandSpace()};function V($){let _t=w.indexOf($.inputSource);if(_t===-1)return;let At=T[_t];At!==void 0&&(At.update($.inputSource,$.frame,c||a),At.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",it);for(let $=0;$<T.length;$++){let _t=w[$];_t!==null&&(w[$]=null,T[$].disconnect(_t))}L=null,B=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(v),f=null,d=null,u=null,n=null,y=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(v=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",G),n.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ot=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=M.stencil?un:on,Ot=M.stencil?es:Ui);let Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Be(d.textureWidth,d.textureHeight,{format:Fi,type:di,depthTexture:new ln(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,At),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Be(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),zt.setContext(n),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let _t=0;_t<$.removed.length;_t++){let At=$.removed[_t],Ot=w.indexOf(At);Ot>=0&&(w[Ot]=null,T[Ot].disconnect(At))}for(let _t=0;_t<$.added.length;_t++){let At=$.added[_t],Ot=w.indexOf(At);if(Ot===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=w.length){w.push(At),Ot=Bt;break}else if(w[Bt]===null){w[Bt]=At,Ot=Bt;break}if(Ot===-1)break}let vt=T[Ot];vt&&vt.connect(At)}}function X($,_t){_t===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(_t.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let _t=$.near,At=$.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(At=m.depthFar)),H.near=I.near=A.near=_t,H.far=I.far=A.far=At,(L!==H.near||B!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,B=H.far),H.layers.mask=$.layers.mask|6,A.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Ot=$.parent,vt=H.cameras;X(H,Ot);for(let Bt=0;Bt<vt.length;Bt++)X(vt[Bt],Ot);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),j($,H,Ot)};function j($,_t,At){At===null?$.matrix.copy(_t.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(_t.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(_t.projectionMatrix),$.projectionMatrixInverse.copy(_t.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return g[$]};let tt=null;function wt($,_t){if(h=_t.getViewerPose(c||a),p=_t,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ot=!1;At.length!==H.cameras.length&&(H.cameras.length=0,Ot=!0);for(let Gt=0;Gt<At.length;Gt++){let Qt=At[Gt],se=null;if(f!==null)se=f.getViewport(Qt);else{let ct=u.getViewSubImage(d,Qt);se=ct.viewport,Gt===0&&(t.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(y))}let Q=F[Gt];Q===void 0&&(Q=new $e,Q.layers.enable(Gt),Q.viewport=new Ae,F[Gt]=Q),Q.matrix.fromArray(Qt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Qt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(se.x,se.y,se.width,se.height),Gt===0&&(H.matrix.copy(Q.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ot===!0&&H.cameras.push(Q)}let vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Gt=u.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,n.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Gt=0;Gt<At.length;Gt++){let Qt=At[Gt].camera;if(Qt){let se=g[Qt];se||(se=new Fr,g[Qt]=se);let Q=u.getCameraImage(Qt);se.sourceTexture=Q}}}}for(let At=0;At<T.length;At++){let Ot=w[At],vt=T[At];Ot!==null&&vt!==void 0&&vt.update(Ot,_t,c||a)}tt&&tt($,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),p=null}let zt=new ef;zt.setAnimationLoop(wt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},U_=new $t,df=new Xt;df.set(-1,0,0,0,1,0,0,0,1);function F_(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,_h(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,M,v,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(df),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function O_(r,t,e,i){let n={},s={};function a(M,v){let y=v.program;i.uniformBlockBinding(M,y,n[M.id])}function o(M,v){let y=n[M.id];y===void 0&&(p(M),y=l(M),n[M.id]=y,M.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(M,T);let w=t.render.frame;s[M.id]!==w&&(c(M),s[M.id]=w)}function l(M){let v=r.createBuffer(),y=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),v}function c(M){let v=n[M.id],y=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,_=y.length;w<_;w++){let b=y[w];if(Array.isArray(b))for(let P=0,A=b.length;P<A;P++)h(b[P],w,P,T);else h(b,w,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,v,y,T){if(d(M,v,y,T)===!0){let w=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let A=_[P],I=x(A,!0);u(A,M.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,M.__data)}}function u(M,v,y){typeof M=="number"||typeof M=="boolean"?v[y]=M:M.isMatrix3?(v[y]=M.elements[0],v[y+1]=M.elements[1],v[y+2]=M.elements[2],v[y+3]=0,v[y+4]=M.elements[3],v[y+5]=M.elements[4],v[y+6]=M.elements[5],v[y+7]=0,v[y+8]=M.elements[6],v[y+9]=M.elements[7],v[y+10]=M.elements[8],v[y+11]=0):ArrayBuffer.isView(M)?v.set(M.subarray(0,v.length-y),y):M.toArray(v,y)}function d(M,v,y,T){let w=M.value,_=v+"_"+y;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let b=T[_],P=!1;for(let A=0;A<w.length;A++)f(w[A],b,A)===!0&&(P=!0);return P}return f(w,T,_)}function f(M,v,y){if(v[y]===void 0)return typeof M=="number"||typeof M=="boolean"?v[y]=M:ArrayBuffer.isView(M)?v[y]=M.slice():v[y]=M.clone(),!0;{let T=v[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return v[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function p(M){let v=M.uniforms,y=0,T=16;for(let _=0,b=v.length;_<b;_++){let P=Array.isArray(v[_])?v[_]:[v[_]];for(let A=0,I=P.length;A<I;A++){let F=P[A],H=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(v[_])||Array.isArray(F.value),B=y;for(let G=0,it=H.length;G<it;G++){let X=H[G],j=x(X,L),tt=y%T,wt=tt%j.boundary,zt=tt+wt;y+=wt,zt!==0&&T-zt<j.storage&&(y+=T-zt),G===0&&(B=y),y+=j.storage}let V=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new V((y-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let w=y%T;return w>0&&(y+=T-w),M.__size=y,M.__cache={},this}function x(M,v){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",M),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(M){let v=M.target;v.removeEventListener("dispose",m),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function g(){for(let M in n)r.deleteBuffer(n[M]);n={},s={}}return{bind:a,update:o,dispose:g}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function k_(){return Yi===null&&(Yi=new Lr(B_,16,16,Pn,Ke),Yi.name="DFG_LUT",Yi.minFilter=ci,Yi.magFilter=ci,Yi.wrapS=Gi,Yi.wrapT=Gi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var kl=class{constructor(t={}){let{canvas:e=vd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,m=new Set([nl,il,el]),g=new Set([di,Ui,Ys,es,jo,Qo]),M=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,F=null,H=null,L=null,B=null;this._outputColorSpace=qe;let V=0,G=0,it=null,X=-1,j=null,tt=new Ae,wt=new Ae,zt=null,$=new Et(0),_t=0,At=e.width,Ot=e.height,vt=1,Bt=null,Se=null,Gt=new Ae(0,0,At,Ot),Qt=new Ae(0,0,At,Ot),se=!1,Q=new En,ct=new Eo,at=!1,Tt=!1,xt=new $t,Yt=new R,Lt=new Ae,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function de(){return it===null?vt:1}let U=i;function Ne(E,N){return e.getContext(E,N)}let ee,ve,pt,Pe,kt,Wt,C,S,k,nt,J,ot,mt,Y,Z,ht,D,K,q,ut,rt,lt,Dt;try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),U===null){let N="webgl2";if(U=Ne(N,E),U===null)throw Ne(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(E){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Vt("WebGLRenderer: "+E.message),E}function Kt(){ee=new Kg(U),ee.init(),rt=new L_(U,ee),ve=new kg(U,ee,t,rt),pt=new P_(U,ee),ve.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),H=U.createFramebuffer(),L=U.createFramebuffer(),B=U.createFramebuffer(),Pe=new Qg(U),kt=new g_,Wt=new I_(U,ee,pt,kt,ve,rt,Pe),C=new Zg(A),S=new em(U),lt=new Og(U,S),k=new Jg(U,S,Pe,lt),nt=new ex(U,k,S,lt,Pe),K=new tx(U,ve,Wt),Z=new zg(kt),J=new m_(A,C,ee,ve,lt,Z),ot=new F_(A,kt),mt=new __,Y=new E_(ee),D=new Fg(A,C,pt,nt,p,l),ht=new C_(A,nt,ve),Dt=new O_(U,Pe,ve,pt),q=new Bg(U,ee,Pe),ut=new jg(U,ee,Pe),Pe.programs=J.programs,A.capabilities=ve,A.extensions=ee,A.properties=kt,A.renderLists=mt,A.shadowMap=ht,A.state=pt,A.info=Pe}x!==di&&(P=new nx(x,e.width,e.height,o,n,s));let st=new Ih(A,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(E){E!==void 0&&(vt=E,this.setSize(At,Ot,!1))},this.getSize=function(E){return E.set(At,Ot)},this.setSize=function(E,N,W=!0){if(st.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}At=E,Ot=N,e.width=Math.floor(E*vt),e.height=Math.floor(N*vt),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(At*vt,Ot*vt).floor()},this.setDrawingBufferSize=function(E,N,W){At=E,Ot=N,vt=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(x===di){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(Gt)},this.setViewport=function(E,N,W,O){E.isVector4?Gt.set(E.x,E.y,E.z,E.w):Gt.set(E,N,W,O),pt.viewport(tt.copy(Gt).multiplyScalar(de()).round())},this.getScissor=function(E){return E.copy(Qt)},this.setScissor=function(E,N,W,O){E.isVector4?Qt.set(E.x,E.y,E.z,E.w):Qt.set(E,N,W,O),pt.scissor(wt.copy(Qt).multiplyScalar(de()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){pt.setScissorTest(se=E)},this.setOpaqueSort=function(E){Bt=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,W=!0){let O=0;if(E){let z=!1;if(it!==null){let gt=it.texture.format;z=m.has(gt)}if(z){let gt=it.texture.type,Rt=g.has(gt),ft=D.getClearColor(),bt=D.getClearAlpha(),It=ft.r,qt=ft.g,le=ft.b;Rt?(M[0]=It,M[1]=qt,M[2]=le,M[3]=bt,U.clearBufferuiv(U.COLOR,0,M)):(v[0]=It,v[1]=qt,v[2]=le,v[3]=bt,U.clearBufferiv(U.COLOR,0,v))}else O|=U.COLOR_BUFFER_BIT}N&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),D.dispose(),mt.dispose(),Y.dispose(),Wt.dispose(),kt.dispose(),C.dispose(),nt.dispose(),k.dispose(),lt.dispose(),Dt.dispose(),J.dispose(),st.dispose(),st.removeEventListener("sessionstart",Xh),st.removeEventListener("sessionend",qh),Nn.stop()};function Ft(E){E.preventDefault(),wr("WebGLRenderer: Context Lost."),I=!0}function Zt(){wr("WebGLRenderer: Context Restored."),I=!1;let E=Pe.autoReset,N=ht.enabled,W=ht.autoUpdate,O=ht.needsUpdate,z=ht.type;Kt(),Pe.autoReset=E,ht.enabled=N,ht.autoUpdate=W,ht.needsUpdate=O,ht.type=z}function yt(E){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ge(E){let N=E.target;N.removeEventListener("dispose",ge),He(N)}function He(E){gn(E),kt.remove(E)}function gn(E){let N=kt.get(E).programs;N!==void 0&&(N.forEach(function(W){J.releaseProgram(W)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,O,z,gt){N===null&&(N=re);let Rt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Bf(E,N,W,O,z);pt.setMaterial(O,Rt);let bt=W.index,It=1;if(O.wireframe===!0){if(bt=k.getWireframeAttribute(W),bt===void 0)return;It=2}let qt=W.drawRange,le=W.attributes.position,Ct=qt.start*It,ce=(qt.start+qt.count)*It;gt!==null&&(Ct=Math.max(Ct,gt.start*It),ce=Math.min(ce,(gt.start+gt.count)*It)),bt!==null?(Ct=Math.max(Ct,0),ce=Math.min(ce,bt.count)):le!=null&&(Ct=Math.max(Ct,0),ce=Math.min(ce,le.count));let Ue=ce-Ct;if(Ue<0||Ue===1/0)return;lt.setup(z,O,ft,W,bt);let be,ye=q;if(bt!==null&&(be=S.get(bt),ye=ut,ye.setIndex(be)),z.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*de()),ye.setMode(U.LINES)):ye.setMode(U.TRIANGLES);else if(z.isLine){let je=O.linewidth;je===void 0&&(je=1),pt.setLineWidth(je*de()),z.isLineSegments?ye.setMode(U.LINES):z.isLineLoop?ye.setMode(U.LINE_LOOP):ye.setMode(U.LINE_STRIP)}else z.isPoints?ye.setMode(U.POINTS):z.isSprite&&ye.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let je=z._multiDrawStarts,Pt=z._multiDrawCounts,oi=z._multiDrawCount,pe=bt?S.get(bt).bytesPerElement:1,Un=kt.get(O).currentProgram.getUniforms();for(let Qe=0;Qe<oi;Qe++)Un.setValue(U,"_gl_DrawID",Qe),ye.render(je[Qe]/pe,Pt[Qe])}else if(z.isInstancedMesh)ye.renderInstances(Ct,Ue,z.count);else if(W.isInstancedBufferGeometry){let je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,je);ye.renderInstances(Ct,Ue,Pt)}else ye.render(Ct,Ue)};function Wh(E,N,W,O){F!==null&&E.isNodeMaterial&&F.setObject(O,E),at===!0&&Z.setState(E,W,!1),E.transparent===!0&&E.side===xe&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,or(E,N,O),E.side=Cn,E.needsUpdate=!0,or(E,N,O),E.side=xe):or(E,N,O)}this.compile=function(E,N,W=null){W===null&&(W=E),F!==null&&F.renderStart(E,N,W),w=Y.get(W),w.init(N),b.push(w),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Tt=this.localClippingEnabled,at=Z.init(this.clippingPlanes,Tt),at===!0&&Z.setGlobalState(this.clippingPlanes,N),F!==null&&ht.render(w.state.shadowsArray,W,N);let O=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let gt=z.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let ft=gt[Rt];Wh(ft,W,N,z),O.add(ft)}else Wh(gt,W,N,z),O.add(gt)}),w=b.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(E,N,W=null){let O=this.compile(E,N,W);return new Promise(z=>{function gt(){if(O.forEach(function(Rt){let bt=kt.get(Rt).currentProgram;(bt===void 0||bt.isReady())&&O.delete(Rt)}),O.size===0){z(E);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let pc=null;function Ff(E){pc&&pc(E)}function Xh(){Nn.stop()}function qh(){Nn.start()}let Nn=new ef;Nn.setAnimationLoop(Ff),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(E){pc=E,st.setAnimationLoop(E),E===null?Nn.stop():Nn.start()},st.addEventListener("sessionstart",Xh),st.addEventListener("sessionend",qh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,N);let W=st.enabled===!0&&st.isPresenting===!0,O=P!==null&&(it===null||W)&&P.begin(A,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,N,it),w=Y.get(E,b.length),w.init(N),w.state.textureUnits=Wt.getTextureUnits(),b.push(w),xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ct.setFromArrayCamera(N):Q.setFromProjectionMatrix(xt,Mi,N.reversedDepth),Tt=this.localClippingEnabled,at=Z.init(this.clippingPlanes,Tt),T=mt.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&mc(Rt,N,-1/0,A.sortObjects)}mc(E,N,0,A.sortObjects),T.finish(),F!==null&&F.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(Bt,Se),oe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,oe&&D.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),at===!0&&Z.beginShadows();let z=w.state.shadowsArray;if(ht.render(z,E,N),at===!0&&Z.endShadows(),(O&&P.hasRenderPass())===!1){let Rt=T.opaque,ft=T.transmissive;if(w.setupLights(),N.isArrayCamera){let bt=N.cameras;if(ft.length>0)for(let It=0,qt=bt.length;It<qt;It++){let le=bt[It];Yh(Rt,ft,E,le)}oe&&D.render(E);for(let It=0,qt=bt.length;It<qt;It++){let le=bt[It];$h(T,E,le,le.viewport)}}else ft.length>0&&Yh(Rt,ft,E,N),oe&&D.render(E),$h(T,E,N)}it!==null&&G===0&&(Wt.updateMultisampleRenderTarget(it),Wt.updateRenderTargetMipmap(it)),O&&P.end(A),E.isScene===!0&&E.onAfterRender(A,E,N),lt.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(w=b[b.length-1],Wt.setTextureUnits(w.state.textureUnits),at===!0&&Z.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function mc(E,N,W,O){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Rt=N.isArrayCamera?ct:Q;if(!E.frustumCulled||E.intersectsFrustum(Rt)){O&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);let ft=nt.update(E),bt=E.material;bt.visible&&T.push(E,ft,bt,W,Lt.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let Rt=N.isArrayCamera?ct:Q;if(!E.frustumCulled||E.intersectsFrustum(Rt)){let ft=nt.update(E),bt=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(bt)){let It=ft.groups;for(let qt=0,le=It.length;qt<le;qt++){let Ct=It[qt],ce=bt[Ct.materialIndex];ce&&ce.visible&&T.push(E,ft,ce,W,Lt.z,Ct,N)}}else bt.visible&&T.push(E,ft,bt,W,Lt.z,null,N)}}}let gt=E.children;for(let Rt=0,ft=gt.length;Rt<ft;Rt++)mc(gt[Rt],N,W,O)}function $h(E,N,W,O){let{opaque:z,transmissive:gt,transparent:Rt}=E;w.setupLightsView(W),at===!0&&Z.setGlobalState(A.clippingPlanes,W),O&&pt.viewport(tt.copy(O)),z.length>0&&Pa(z,N,W),gt.length>0&&Pa(gt,N,W),Rt.length>0&&Pa(Rt,N,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Yh(E,N,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Ct=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Be(1,1,{generateMipmaps:!0,type:Ct?Ke:di,minFilter:hn,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let gt=w.state.transmissionRenderTarget[O.id],Rt=O.viewport||tt;gt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let ft=A.getRenderTarget(),bt=A.getActiveCubeFace(),It=A.getActiveMipmapLevel();A.setRenderTarget(gt),A.getClearColor($),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),oe&&D.render(W);let qt=A.toneMapping;A.toneMapping=$i;let le=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),at===!0&&Z.setGlobalState(A.clippingPlanes,O),Pa(E,W,O),Wt.updateMultisampleRenderTarget(gt),Wt.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ce=0,Ue=N.length;ce<Ue;ce++){let be=N[ce],{object:ye,geometry:je,material:Pt,group:oi}=be;if(Pt.side===xe&&ye.layers.test(O.layers)){let pe=Pt.side;Pt.side=Ze,Pt.needsUpdate=!0,Zh(ye,W,O,je,Pt,oi),Pt.side=pe,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Wt.updateMultisampleRenderTarget(gt),Wt.updateRenderTargetMipmap(gt))}A.setRenderTarget(ft,bt,It),A.setClearColor($,_t),le!==void 0&&(O.viewport=le),A.toneMapping=qt}function Pa(E,N,W){let O=N.isScene===!0?N.overrideMaterial:null;for(let z=0,gt=E.length;z<gt;z++){let Rt=E[z],{object:ft,geometry:bt,group:It}=Rt,qt=Rt.material;qt.allowOverride===!0&&O!==null&&(qt=O),ft.layers.test(W.layers)&&Zh(ft,N,W,bt,qt,It)}}function Zh(E,N,W,O,z,gt){F!==null&&z.isNodeMaterial&&F.setObject(E,z),E.onBeforeRender(A,N,W,O,z,gt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(A,N,W,O,E,gt),z.transparent===!0&&z.side===xe&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,A.renderBufferDirect(W,N,O,z,E,gt),z.side=Cn,z.needsUpdate=!0,A.renderBufferDirect(W,N,O,z,E,gt),z.side=xe):A.renderBufferDirect(W,N,O,z,E,gt),E.onAfterRender(A,N,W,O,z,gt)}function Kh(E){let N=0;for(let W of E)W.texture!==null&&N++;return N}function or(E,N,W){N.isScene!==!0&&(N=re);let O=kt.get(E),z=w.state.lights,gt=w.state.shadowsArray,Rt=z.state.version,ft=J.getParameters(E,z.state,gt,N,W,w.state.lightProbeGridArray),bt=J.getProgramCacheKey(ft),It=O.programs;O.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;O.envMap=C.get(E.envMap||O.environment,qt),O.envMapRotation=O.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",ge),It=new Map,O.programs=It,O.programVariants=new Map);let le=It.get(bt);if(le!==void 0){if(O.currentProgram===le&&O.lightsStateVersion===Rt)return jh(E,ft),le}else ft.uniforms=J.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,W,ft),E.onBeforeCompile(ft,A),le=J.acquireProgram(ft,bt),It.set(bt,le),O.uniforms=ft.uniforms;let Ct=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=Z.uniform),jh(E,ft),O.needsLights=zf(E),O.lightsStateVersion=Rt,O.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.sunLights.value=z.state.sun,Ct.sunLightShadows.value=z.state.sunShadow,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.sunShadowMatrix.value=z.state.sunShadowMatrix,Ct.sunShadowCascade.value=z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Kh(w.state.lightProbeGridArray),O.currentProgram=le,O.uniformsList=null,le}function Of(E,N,W,O,z){let gt=kt.get(E),Rt=gt.currentProgram.id+","+O+","+z,ft=gt.programVariants.get(Rt);return ft===void 0?(ft=or(E,N,W),gt.programVariants.set(Rt,ft)):(gt.currentProgram=ft,gt.uniformsList=null,gt.outputColorSpace=O,gt.toneMapping=z),ft}function Jh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Zs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function jh(E,N){let W=kt.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Bf(E,N,W,O,z){N.isScene!==!0&&(N=re),Wt.resetTextureUnits();let gt=N.fog,Rt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,ft=it===null?A.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ie.workingColorSpace,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,It=C.get(O.envMap||Rt,bt),qt=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,le=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ct=!!W.morphAttributes.position,ce=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color,be=$i;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=A.toneMapping);let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,je=ye!==void 0?ye.length:0,Pt=kt.get(O),oi=w.state.lights;if(at===!0&&(Tt===!0||E!==j)){let Re=E===j&&O.id===X;Z.setState(O,E,Re)}let pe=!1,Un=!1;O.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==oi.state.version||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==It||O.fog===!0&&Pt.fog!==gt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Z.numPlanes||Pt.numIntersection!==Z.numIntersection)||Pt.vertexAlphas!==qt||Pt.vertexTangents!==le||Pt.morphTargets!==Ct||Pt.morphNormals!==ce||Pt.morphColors!==Ue||Pt.morphTargetsCount!==je||Pt.numLightProbeGrids!==Kh(w.state.lightProbeGridArray)?pe=!0:(Pt.outputColorSpace!==ft||Pt.toneMapping!==be)&&(Un=!0):(pe=!0,Pt.__version=O.version);let Qe=Pt.currentProgram;(pe===!0||Un===!0)&&(Qe=Un===!0?Of(O,N,z,ft,be):or(O,N,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Qe,Pt));let Ia=!1,xn=!1,Fn=!1,ue=Qe.getUniforms(),Xe=Pt.uniforms;if(pt.useProgram(Qe.program)&&(Ia=!0,xn=!0,Fn=!0),O.id!==X&&(X=O.id,xn=!0),Ia||j!==E){pt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",E.projectionMatrix),ue.setValue(U,"viewMatrix",E.matrixWorldInverse);let Ge=ue.map.cameraPosition;Ge!==void 0&&Ge.setValue(U,Yt.setFromMatrixPosition(E.matrixWorld)),ve.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ue.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,xn=!0,Fn=!0)}if(Pt.needsLights&&(oi.state.sunShadowMap.length>0&&ue.setValue(U,"sunShadowMap",oi.state.sunShadowMap,Wt),oi.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",oi.state.directionalShadowMap,Wt),oi.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",oi.state.spotShadowMap,Wt),oi.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",oi.state.pointShadowMap,Wt)),z.isSkinnedMesh){ue.setOptional(U,z,"bindMatrix"),ue.setOptional(U,z,"bindMatrixInverse");let Re=z.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ue.setValue(U,"boneTexture",Re.boneTexture,Wt))}z.isBatchedMesh&&(ue.setOptional(U,z,"batchingTexture"),ue.setValue(U,"batchingTexture",z._matricesTexture,Wt),ue.setOptional(U,z,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",z._indirectTexture,Wt),ue.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",z._colorsTexture,Wt));let wi=W.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&K.update(z,W,Qe),(xn||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,ue.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(Xe.envMapIntensity.value=N.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=k_()),xn){if(ue.setValue(U,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&kf(Xe,Fn),gt&&O.fog===!0&&ot.refreshFogUniforms(Xe,gt),ot.refreshMaterialUniforms(Xe,O,vt,Ot,w.state.transmissionRenderTarget[E.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Re=y,Ge=0;for(let ji of w.state.lightProbeGridArray)ji.texture!==null&&(Re.textures[Ge]=ji.texture,Re.min[Ge]=ji.boundingBox.min,Re.max[Ge]=ji.boundingBox.max,Re.resolution[Ge]=ji.resolution,Ge++);for(let ji in Re)Re[ji].length=Ge;Xe.probesSH.value=Re.textures,Xe.probesMin.value=Re.min,Xe.probesMax.value=Re.max,Xe.probesResolution.value=Re.resolution}Zs.upload(U,Jh(Pt),Xe,Wt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Zs.upload(U,Jh(Pt),Xe,Wt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ue.setValue(U,"center",z.center),ue.setValue(U,"modelViewMatrix",z.modelViewMatrix),ue.setValue(U,"normalMatrix",z.normalMatrix),ue.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Re=O.uniformsGroups;for(let Ge=0,ji=Re.length;Ge<ji;Ge++){let tu=Re[Ge];Dt.update(tu,Qe),Dt.bind(tu,Qe)}}return Qe}function kf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function zf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,N,W){let O=kt.get(E);O.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),kt.get(E.texture).__webglTexture=N,kt.get(E.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let W=kt.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){it=E,V=N,G=W;let O=null,z=!1,gt=!1;if(E){let ft=kt.get(E);if(ft.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(E.viewport),wt.copy(E.scissor),zt=E.scissorTest,pt.viewport(tt),pt.scissor(wt),pt.setScissorTest(zt),X=-1;return}else if(ft.__webglFramebuffer===void 0)Wt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Wt.rebindTextures(E,kt.get(E.texture).__webglTexture,kt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qt=E.depthTexture;if(ft.__boundDepthTexture!==qt){if(qt!==null&&kt.has(qt)&&(E.width!==qt.image.width||E.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(E)}}let bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);let It=kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[N])?O=It[N][W]:O=It[N],z=!0):E.samples>0&&Wt.useMultisampledRTT(E)===!1?O=kt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[W]:O=It,tt.copy(E.viewport),wt.copy(E.scissor),zt=E.scissorTest}else tt.copy(Gt).multiplyScalar(vt).floor(),wt.copy(Qt).multiplyScalar(vt).floor(),zt=se;if(W!==0&&(O=H),pt.bindFramebuffer(U.FRAMEBUFFER,O)&&pt.drawBuffers(E,O),pt.viewport(tt),pt.scissor(wt),pt.setScissorTest(zt),z){let ft=kt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,W)}else if(gt){let ft=N;for(let bt=0;bt<E.textures.length;bt++){let It=kt.get(E.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,It.__webglTexture,W,ft)}}else if(E!==null&&W!==0){let ft=kt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,W)}X=-1};function Qh(E){let N=kt.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=ve.textureFormatReadable(E.format),N.__typeReadable=ve.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,W,O,z,gt,Rt,ft=0){if(!(E&&E.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt){pt.bindFramebuffer(U.FRAMEBUFFER,bt);try{let It=E.textures[ft],qt=It.format,le=It.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);let Ct=Qh(It);if(Ct.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-O&&W>=0&&W<=E.height-z&&U.readPixels(N,W,O,z,rt.convert(qt),rt.convert(le),gt)}finally{let It=it!==null?kt.get(it).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,O,z,gt,Rt,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt)if(N>=0&&N<=E.width-O&&W>=0&&W<=E.height-z){pt.bindFramebuffer(U.FRAMEBUFFER,bt);let It=E.textures[ft],qt=It.format,le=It.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);let Ct=Qh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(N,W,O,z,rt.convert(qt),rt.convert(le),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ue=it!==null?kt.get(it).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,Ue);let be=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Md(U,be,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ce),U.deleteSync(be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,W=0){let O=Math.pow(2,-W),z=Math.floor(E.image.width*O),gt=Math.floor(E.image.height*O),Rt=N!==null?N.x:0,ft=N!==null?N.y:0;Wt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Rt,ft,z,gt),pt.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,O=null,z=0,gt=0){let Rt,ft,bt,It,qt,le,Ct,ce,Ue,be=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(W!==null)Rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,qt=W.min.y,le=W.isBox3?W.min.z:0;else{let ue=Math.pow(2,-z);Rt=Math.floor(be.width*ue),ft=Math.floor(be.height*ue),E.isDataArrayTexture?bt=be.depth:E.isData3DTexture?bt=Math.floor(be.depth*ue):bt=1,It=0,qt=0,le=0}O!==null?(Ct=O.x,ce=O.y,Ue=O.z):(Ct=0,ce=0,Ue=0);let ye=rt.convert(N.format),je=rt.convert(N.type),Pt;N.isData3DTexture?(Wt.setTexture3D(N,0),Pt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Wt.setTexture2DArray(N,0),Pt=U.TEXTURE_2D_ARRAY):(Wt.setTexture2D(N,0),Pt=U.TEXTURE_2D),pt.activeTexture(U.TEXTURE0),pt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),pt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),pt.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let oi=pt.getParameter(U.UNPACK_ROW_LENGTH),pe=pt.getParameter(U.UNPACK_IMAGE_HEIGHT),Un=pt.getParameter(U.UNPACK_SKIP_PIXELS),Qe=pt.getParameter(U.UNPACK_SKIP_ROWS),Ia=pt.getParameter(U.UNPACK_SKIP_IMAGES);pt.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,It),pt.pixelStorei(U.UNPACK_SKIP_ROWS,qt),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,le);let xn=E.isDataArrayTexture||E.isData3DTexture,Fn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let ue=kt.get(E),Xe=kt.get(N),wi=kt.get(ue.__renderTarget),Re=kt.get(Xe.__renderTarget);pt.bindFramebuffer(U.READ_FRAMEBUFFER,wi.__webglFramebuffer),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<bt;Ge++)xn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.get(E).__webglTexture,z,le+Ge),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.get(N).__webglTexture,gt,Ue+Ge)),U.blitFramebuffer(It,qt,It+Rt,qt+ft,Ct,ce,Ct+Rt,ce+ft,U.DEPTH_BUFFER_BIT,U.NEAREST);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||kt.has(E)){let ue=kt.get(E),Xe=kt.get(N);pt.bindFramebuffer(U.READ_FRAMEBUFFER,L),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let wi=0;wi<bt;wi++)xn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ue.__webglTexture,z,le+wi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,z),Fn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xe.__webglTexture,gt,Ue+wi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xe.__webglTexture,gt),z!==0?U.blitFramebuffer(It,qt,It+Rt,qt+ft,Ct,ce,Ct+Rt,ce+ft,U.COLOR_BUFFER_BIT,U.NEAREST):Fn?U.copyTexSubImage3D(Pt,gt,Ct,ce,Ue+wi,It,qt,Rt,ft):U.copyTexSubImage2D(Pt,gt,Ct,ce,It,qt,Rt,ft);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Fn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Pt,gt,Ct,ce,Ue,Rt,ft,bt,ye,je,be.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,gt,Ct,ce,Ue,Rt,ft,bt,ye,be.data):U.texSubImage3D(Pt,gt,Ct,ce,Ue,Rt,ft,bt,ye,je,be):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,Ct,ce,Rt,ft,ye,je,be.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,Ct,ce,be.width,be.height,ye,be.data):U.texSubImage2D(U.TEXTURE_2D,gt,Ct,ce,Rt,ft,ye,je,be);pt.pixelStorei(U.UNPACK_ROW_LENGTH,oi),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,Un),pt.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,Ia),gt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Pt),pt.unbindTexture()},this.initRenderTarget=function(E){kt.get(E).__webglFramebuffer===void 0&&Wt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Wt.setTextureCube(E,0):E.isData3DTexture?Wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Wt.setTexture2DArray(E,0):Wt.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){V=0,G=0,it=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},z_=new Jn(-1,1,1,-1,0,1),Lh=class extends Jt{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}},H_=new Lh,Ln=class{constructor(t){this._mesh=new dt(H_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,z_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Gl=class extends vi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fn.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ln(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ya=class extends vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Vl=class extends vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gl(Js),this.copyPass.material.blending=cn,this.timer=new ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(a instanceof ya?i=!0:a instanceof Vl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xl=class extends vi{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var ff={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var js=class r extends vi{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(s,a,{type:Ke,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Be(s,a,{type:Ke,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Be(s,a,{type:Ke,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=ff;this.highPassUniforms=fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fn.clone(Js.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:Js.vertexShader,fragmentShader:Js.fragmentShader,premultipliedAlpha:!0,blending:_e,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new Ut,this._fsQuad=new Ln(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],s=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new Ie({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};js.BlurDirectionX=new et(1,0);js.BlurDirectionY=new et(0,1);var Ma={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ql=class extends vi{constructor(){super(),this.isOutputPass=!0,this.uniforms=fn.clone(Ma.uniforms),this.material=new Gs({name:Ma.name,uniforms:this.uniforms,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader}),this._fsQuad=new Ln(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===na?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yl=[15,12,10,8,6,4,2,1],pf=[600,450,350,260,190,140,100,70],Oi=[{id:0,name:"1.0 GHz",label:"CASUAL",speed:.86,ai:.8,itemAgg:.55,bits:1},{id:1,name:"2.0 GHz",label:"PRO",speed:1,ai:.93,itemAgg:.8,bits:1.5},{id:2,name:"3.0 GHz",label:"OVERCLOCKED",speed:1.07,ai:1,itemAgg:1,bits:2.2}],rs={bike:{id:"bike",name:"CYBER-MOTORCYCLE",short:"BIKE",blurb:"Highest top speed and razor agility. Light frame gets shoved around.",top:63,accel:21,grip:2.35,mass:.75,driftRate:1,driftTurn:1.12,meleeCd:2.1,meleeForce:.85,hitRecover:1,offroad:.5,stats:{speed:9,accel:6,handling:9,armor:3,drift:7}},quad:{id:"quad",name:"CYBER-QUAD",short:"QUAD",blurb:"Armored tank. Brutal shoves, shrugs off contact, shields last longer.",top:58,accel:20,grip:2,mass:1.45,driftRate:.92,driftTurn:.95,meleeCd:2.9,meleeForce:1.45,hitRecover:.8,offroad:.7,stats:{speed:6,accel:6,handling:6,armor:10,drift:5}},kart:{id:"kart",name:"CYBER-KART",short:"KART",blurb:"Explosive launch and the tightest cornering. Fastest drift charge.",top:60,accel:27,grip:2.55,mass:1,driftRate:1.22,driftTurn:1.2,meleeCd:2.5,meleeForce:1,hitRecover:.9,offroad:.6,stats:{speed:7,accel:10,handling:8,armor:5,drift:10}}},We=[{id:"jarvis",name:"JARVIS",color:16756768,accent:58879,cls:"kart",title:"The Overclocked Butler",perk:"Starts every race holding a Surge Boost. Melee cooldown \u221215%.",mods:{startItem:"surge",meleeCd:.85}},{id:"grok",name:"GROK",color:16724821,accent:16777215,cls:"quad",title:"The Unfiltered",perk:"Melee shoves hit 25% harder.",mods:{meleeForce:1.25}},{id:"gemini",name:"GEMINI",color:6982911,accent:16743381,cls:"bike",title:"The Twin Core",perk:"20% chance a capsule gives a duplicate into your second slot.",mods:{dupChance:.2}},{id:"chatgpt",name:"CHATGPT",color:1696672,accent:15269879,cls:"kart",title:"The Generalist",perk:"Item roulette resolves instantly and rolls slightly luckier.",mods:{luck:.15}},{id:"claude",name:"CLAUDE",color:16747084,accent:16773344,cls:"quad",title:"The Steady Hand",perk:"Shields last 50% longer. Recovers from hits 30% faster.",mods:{shieldTime:1.5,recover:.7}},{id:"llama",name:"LLAMA",color:11561983,accent:3407837,cls:"bike",title:"The Open Source",perk:"Drift charge builds 18% faster.",mods:{driftRate:1.18}},{id:"mistral",name:"MISTRAL",color:16736031,accent:16769357,cls:"bike",title:"The North Wind",perk:"Slipstream charges 50% faster and lasts longer.",mods:{slip:1.5}},{id:"copilot",name:"COPILOT",color:3127295,accent:10944333,cls:"kart",title:"The Wingman",perk:"Boost strips and jump landings give 25% more speed.",mods:{padBoost:1.25}},{id:"deepseek",name:"DEEPSEEK",color:4090879,accent:10479871,cls:"bike",unlock:"wins10",title:"The Deep Diver",perk:"Plasma Spheres fly 30% faster and home harder.",mods:{plasma:1.3}},{id:"qwen",name:"QWEN",color:9391615,accent:16732120,cls:"kart",unlock:"gold3",title:"The Polymath",perk:"Fused items are empowered (+40% duration/power).",mods:{fusePower:1.4}},{id:"perplexity",name:"PERPLEXITY",color:2150592,accent:15794172,cls:"quad",unlock:"drift_ov100",title:"The Researcher",perk:"Every capsule rolls twice and keeps the better item.",mods:{doubleRoll:!0}},{id:"kimi",name:"KIMI",color:16727972,accent:8256767,cls:"kart",unlock:"untouchable",title:"The Long Context",perk:"Half-immune to EMP and stun. Traps you drop last twice as long.",mods:{empResist:.5,trapLife:2}}],ba=We.filter(r=>!r.unlock).map(r=>r.id),ss={plasma:{name:"PLASMA SPHERE",icon:"\u25C9",color:"#6ad8ff",kind:"offense",desc:"Homing sphere that seeks the racer ahead."},trap:{name:"DIGITAL TRAP",icon:"\u2737",color:"#ffb02e",kind:"hazard",desc:"Glitch mine dropped behind you."},shield:{name:"CYBER SHIELD",icon:"\u2B21",color:"#4dfff3",kind:"defense",desc:"Hex dome that absorbs one hit."},surge:{name:"SURGE BOOST",icon:"\u27A4",color:"#ff7a1a",kind:"speed",desc:"Rocket burst of speed."},emp:{name:"EMP DISRUPTER",icon:"\u03DF",color:"#b98bff",kind:"offense",desc:"Blast that slows every nearby rival."}},Dh=Object.keys(ss),ni=(r,t)=>[r,t].sort().join("+"),Dn={[ni("plasma","plasma")]:{id:"barrage",name:"PLASMA BARRAGE",icon:"\u2042",color:"#6ad8ff",desc:"Three spheres seek the three racers ahead."},[ni("plasma","emp")]:{id:"ionlance",name:"ION LANCE",icon:"\u27F4",color:"#9fb4ff",desc:"Instant beam strikes the racer directly ahead and EMPs them."},[ni("plasma","trap")]:{id:"seeker",name:"SEEKER MINE",icon:"\u273A",color:"#ffd36a",desc:"A mine that hunts the racer behind you."},[ni("plasma","shield")]:{id:"orbital",name:"ORBITAL GUARD",icon:"\u25CE",color:"#7affff",desc:"Two orbiting spheres block hits, then fire forward."},[ni("plasma","surge")]:{id:"comet",name:"COMET RAM",icon:"\u2604",color:"#ff9f40",desc:"Boost that spins out anyone you touch."},[ni("trap","trap")]:{id:"minefield",name:"MINEFIELD",icon:"\u2058",color:"#ffb02e",desc:"Scatter five traps across the track."},[ni("trap","shield")]:{id:"mirror",name:"MIRROR SHIELD",icon:"\u29C8",color:"#e6f7ff",desc:"Reflects the next attack back at its sender."},[ni("trap","surge")]:{id:"burn",name:"BURN TRAIL",icon:"\u2668",color:"#ff5a1a",desc:"Boost that leaves a firewall trail behind."},[ni("trap","emp")]:{id:"glitchbomb",name:"GLITCH BOMB",icon:"\u2739",color:"#d58bff",desc:"Lobbed forward; creates a lingering EMP field."},[ni("shield","shield")]:{id:"fortress",name:"FORTRESS",icon:"\u26E8",color:"#4dfff3",desc:"Shield that absorbs three hits."},[ni("shield","surge")]:{id:"phase",name:"PHASE DASH",icon:"\u21F6",color:"#9ffcff",desc:"Invulnerable boost that phases through hazards."},[ni("shield","emp")]:{id:"static",name:"STATIC SHELL",icon:"\u232C",color:"#c4a2ff",desc:"Shield that shocks anyone who touches you."},[ni("surge","surge")]:{id:"hyper",name:"HYPER SURGE",icon:"\u23E9",color:"#ffb340",desc:"Long, massive boost."},[ni("surge","emp")]:{id:"shockwave",name:"SHOCKWAVE SURGE",icon:"\u224B",color:"#b0a0ff",desc:"Boost that EMPs every racer you pass."},[ni("emp","emp")]:{id:"blackout",name:"BLACKOUT",icon:"\u25D0",color:"#a46bff",desc:"Huge EMP that hits everyone within 70 m and scrambles their HUD."}},Nh=Object.values(Dn).map(r=>r.id),Zl=ni;function Qs(r){return ss[r]?ss[r]:Object.values(Dn).find(t=>t.id===r)}var mf=[[10,40,35,10,5],[25,30,25,12,8],[32,20,20,16,12],[34,14,16,20,16],[32,10,14,24,20],[28,8,12,30,22],[24,6,10,36,24],[20,4,8,42,26]],si=[{id:0,name:"CIRCUIT CUP",sub:"Silicon Basin",bpm:124,root:45,pal:{a:58879,b:2845695,c:16747034,sky1:330274,sky2:731738,fog:463918,ground:266278,road:661040},env:"chips",tracks:[{name:"Boot Sequence",shape:"loop",seed:11,size:230,elev:8,jumps:1,open:0,hz:["barrier"]},{name:"Motherboard Mile",shape:"serp",seed:23,size:250,elev:14,jumps:2,open:1,hz:["barrier"]},{name:"Bus Lane Bypass",shape:"fig8",seed:37,size:210,elev:12,jumps:1,open:1,hz:["barrier"]},{name:"Overclock Oval",shape:"loop",seed:41,size:270,elev:18,jumps:2,open:1,hz:["barrier","firewall"]}]},{id:1,name:"FIREWALL CUP",sub:"Thermal Core",bpm:132,root:43,pal:{a:16742938,b:16723285,c:58879,sky1:1705221,sky2:4854280,fog:2755078,ground:1705475,road:1903888},env:"heat",tracks:[{name:"Packet Inferno",shape:"serp",seed:53,size:240,elev:12,jumps:2,open:1,hz:["firewall"]},{name:"Firewall Gauntlet",shape:"loop",seed:61,size:260,elev:16,jumps:1,open:1,hz:["firewall","barrier"]},{name:"Burn-In Basin",shape:"trefoil",seed:67,size:96,elev:14,jumps:2,open:1,hz:["firewall","mine"]},{name:"Thermal Throttle",shape:"mountain",seed:71,size:250,elev:34,jumps:2,open:2,hz:["firewall","barrier"]}]},{id:2,name:"QUANTUM CUP",sub:"Qubit Expanse",bpm:128,root:47,pal:{a:12602879,b:58879,c:16732120,sky1:853024,sky2:2886741,fog:1443888,ground:787488,road:1313322},env:"quantum",tracks:[{name:"Qubit Spiral",shape:"mountain",seed:83,size:240,elev:30,jumps:1,open:1,hz:["pulse"]},{name:"Superposition Split",shape:"fig8",seed:89,size:240,elev:14,jumps:2,open:1,hz:["pulse","barrier"]},{name:"Entanglement Loop",shape:"trefoil",seed:97,size:100,elev:16,jumps:2,open:2,hz:["pulse","mine"]},{name:"Decoherence Drop",shape:"serp",seed:101,size:270,elev:26,jumps:3,open:2,hz:["pulse","barrier","firewall"]}]},{id:3,name:"NEURAL CUP",sub:"Synapse Gardens",bpm:120,root:50,pal:{a:3014576,b:47103,c:14090045,sky1:136208,sky2:407855,fog:270362,ground:135694,road:532508},env:"neural",tracks:[{name:"Synapse Sprint",shape:"loop",seed:107,size:280,elev:10,jumps:2,open:1,hz:["barrier","mine"]},{name:"Backprop Bend",shape:"serp",seed:113,size:260,elev:18,jumps:2,open:1,hz:["pulse","barrier"]},{name:"Gradient Descent",shape:"mountain",seed:127,size:260,elev:40,jumps:2,open:2,hz:["barrier","firewall"]},{name:"Deep Layer",shape:"fig8",seed:131,size:260,elev:16,jumps:3,open:2,hz:["mine","pulse","barrier"]}]},{id:4,name:"DARKNET CUP",sub:"Shadow Relay",bpm:136,root:41,pal:{a:16723920,b:8006655,c:2752490,sky1:459273,sky2:2361898,fog:984082,ground:459274,road:1181718},env:"dark",tracks:[{name:"Zero-Day Alley",shape:"serp",seed:137,size:250,elev:14,jumps:2,open:1,hz:["mine","barrier"]},{name:"Rootkit Run",shape:"trefoil",seed:139,size:102,elev:18,jumps:2,open:2,hz:["mine","firewall"]},{name:"Botnet Bridges",shape:"fig8",seed:149,size:260,elev:18,jumps:3,open:3,hz:["barrier","pulse"]},{name:"Phantom Proxy",shape:"mountain",seed:151,size:270,elev:36,jumps:2,open:2,hz:["mine","firewall","pulse"]}]},{id:5,name:"SINGULARITY CUP",sub:"Event Horizon",bpm:140,root:48,pal:{a:16767053,b:16777215,c:58879,sky1:657414,sky2:2760720,fog:1314826,ground:657412,road:1446412},env:"core",tracks:[{name:"Core Meltdown",shape:"trefoil",seed:157,size:104,elev:20,jumps:2,open:2,hz:["firewall","pulse","mine"]},{name:"Kernel Panic",shape:"serp",seed:163,size:280,elev:24,jumps:3,open:2,hz:["barrier","firewall","mine"]},{name:"Event Horizon",shape:"mountain",seed:167,size:280,elev:44,jumps:3,open:3,hz:["pulse","barrier","mine"]},{name:"Singularity",shape:"fig8",seed:173,size:280,elev:20,jumps:3,open:3,hz:["barrier","firewall","pulse","mine"]}]}],tr=[{id:"carbon",name:"Carbon",hex:1711403,cost:0},{id:"chrome",name:"Liquid Chrome",hex:9081768,cost:600},{id:"midnight",name:"Midnight Blue",hex:793682,cost:400},{id:"crimson",name:"Crimson Core",hex:5901336,cost:400},{id:"toxic",name:"Toxic Matte",hex:1915408,cost:500},{id:"pearl",name:"Pearl Static",hex:14542064,cost:900},{id:"gold",name:"Gold Bus",hex:8018450,cost:1500},{id:"void",name:"Void Black",hex:328968,cost:1200}],Sa=[{id:"char",name:"Signature",hex:null,cost:0},{id:"cyan",name:"Cyan",hex:58879,cost:300},{id:"magenta",name:"Magenta",hex:16723920,cost:300},{id:"orange",name:"Plasma Orange",hex:16742938,cost:300},{id:"lime",name:"Lime",hex:10354477,cost:400},{id:"violet",name:"Violet",hex:10181631,cost:400},{id:"white",name:"Arc White",hex:15792383,cost:700},{id:"red",name:"Alarm Red",hex:16719677,cost:500}],Uh=[{id:"std",name:"Standard",cost:0},{id:"fire",name:"Fire Stream",cost:800},{id:"rainbow",name:"Spectrum",cost:1500},{id:"glitch",name:"Glitch",cost:1200},{id:"binary",name:"Binary Ghost",cost:1e3}],Fh=[{id:"engine",name:"ENGINE",desc:"+2.2% top speed / level",costs:[500,1100,2e3]},{id:"turbo",name:"TURBO",desc:"+8% acceleration / level",costs:[400,900,1700]},{id:"grip",name:"GRIP",desc:"+6% handling / level",costs:[400,900,1700]},{id:"armor",name:"ARMOR",desc:"+15% shove resistance, faster hit recovery",costs:[400,900,1700]},{id:"capacitor",name:"CAPACITOR",desc:"+9% drift charge and boost length",costs:[450,1e3,1800]}],Ea=7,St=(r,t,e,i,n=250,s=!1)=>({id:r,name:t,desc:e,test:i,reward:n,secret:s}),$l=(r,t=0)=>Object.entries(r.golds||{}).filter(([,e])=>e>=t).length,as=[St("first_race","Hello, World","Finish your first race.",r=>r.races>=1,100),St("first_win","Root Access","Win a race.",r=>r.wins>=1,200),St("wins10","Deep Dive","Win 10 races. Unlocks DEEPSEEK.",r=>r.wins>=10,800),St("wins25","Dominant Process","Win 25 races.",r=>r.wins>=25,1e3),St("wins50","Undefeated Algorithm","Win 50 races.",r=>r.wins>=50,2e3),St("podium10","Top-Three Cache","Finish on the podium 10 times.",r=>r.podiums>=10,400),St("races25","Uptime","Finish 25 races.",r=>r.races>=25,400),St("races100","Always Online","Finish 100 races.",r=>r.races>=100,1500),St("comeback","Reboot Rally","Win after dropping to 8th place.",(r,t)=>t&&t.won&&t.wasLast,600),St("wire","Wire to Wire","Win while leading at every lap marker.",(r,t)=>t&&t.won&&t.ledAll,600),St("rocket1","Clean Boot","Nail a rocket start.",r=>r.rockets>=1,150),St("rocket10","Instant On","Nail 10 rocket starts.",r=>r.rockets>=10,400),St("tt1","Benchmark","Set a Time Trial record.",r=>r.ttRecords>=1,200),St("tt12","Speedrunner","Set Time Trial records on 12 tracks.",r=>r.ttTracks>=12,1e3),St("photo","Photo Finish","Win by less than 0.25 seconds.",(r,t)=>t&&t.won&&t.margin<.25,600),St("dist100","Packet Courier","Drive 100 km in total.",r=>r.distance>=1e5,500),St("dist500","Bandwidth Hog","Drive 500 km in total.",r=>r.distance>=5e5,1500),St("drift1","Spark Gap","Release your first drift boost.",r=>r.driftBoosts>=1,100),St("drift_ov","Overclocked","Release a level-3 Overdrive drift boost.",r=>r.drift3>=1,200),St("drift100","Slide Rule","Release 100 drift boosts.",r=>r.driftBoosts>=100,600),St("drift_ov100","Drift Scholar","Release 100 Overdrive boosts. Unlocks PERPLEXITY.",r=>r.drift3>=100,1e3),St("drift_race","Sideways Session","Release 15 drift boosts in one race.",(r,t)=>t&&t.driftBoosts>=15,500),St("slip25","Draft Mode","Trigger 25 slipstream boosts.",r=>r.slips>=25,400),St("pads200","Strip Mined","Hit 200 boost strips.",r=>r.pads>=200,400),St("air2","Airborne Packet","Stay airborne for 1.5 seconds in one jump.",(r,t,e)=>e.air2,300),St("air300","Frequent Flyer","Spend 5 minutes airborne in total.",r=>r.air>=300,800),St("land50","Stuck the Landing","Perform 50 perfect landings.",r=>r.lands>=50,500),St("plasma1","Target Acquired","Hit a rival with a Plasma Sphere.",r=>r.plasmaHits>=1,100),St("plasma50","Heat Seeker","Land 50 Plasma Sphere hits.",r=>r.plasmaHits>=50,600),St("trap1","It's a Trap","A rival hits one of your Digital Traps.",r=>r.trapHits>=1,100),St("trap25","Minefield Engineer","Rivals hit your traps 25 times.",r=>r.trapHits>=25,500),St("block1","Firewall Up","Block an attack with a shield.",r=>r.blocks>=1,100),St("block25","Hardened Kernel","Block 25 attacks.",r=>r.blocks>=25,500),St("emp3","Mass Disconnect","Hit 3 or more rivals with one EMP.",(r,t,e)=>e.emp3,300),St("emp50","Power Outage","Disrupt rivals 50 times with EMP effects.",r=>r.empHits>=50,600),St("surge50","Surge Protector","Fire 50 Surge Boosts.",r=>r.surges>=50,400),St("fuse1","Merge Conflict","Fuse two items together.",r=>r.fusions>=1,200),St("fuse_all","Full Stack","Use all 15 fusion items.",r=>G_(r.fuseMask)>=15,2e3),St("fuse50","Compiler","Fuse 50 items.",r=>r.fusions>=50,800),St("barrage3","Barrage Protocol","Hit 3 rivals with a single Plasma Barrage.",(r,t,e)=>e.barrage3,500),St("mirror","Return to Sender","Reflect an attack with a Mirror Shield.",(r,t,e)=>e.mirror,400),St("blackout5","Lights Out","Catch 5 rivals in one Blackout.",(r,t,e)=>e.blackout5,500),St("items_race","Arsenal","Use 10 items in a single race.",(r,t)=>t&&t.itemsUsed>=10,400),St("melee1","Contact!","Land a Melee Strike.",r=>r.meleeHits>=1,100),St("melee100","Brawler Subroutine","Land 100 Melee Strikes.",r=>r.meleeHits>=100,800),St("knock1","Out of Bounds","Shove a rival off the track.",r=>r.knockoffs>=1,300),St("knock25","Garbage Collector","Shove 25 rivals off the track.",r=>r.knockoffs>=25,1e3),St("tailwhip","Tail Whip","Land a Melee Strike while drifting.",(r,t,e)=>e.tailwhip,300),St("evade5","Evasive Maneuvers","Side-dash out of 5 Plasma Spheres.",r=>r.evades>=5,500),St("untouchable","Untouchable","Win a race without taking a single hit. Unlocks KIMI.",(r,t)=>t&&t.won&&t.hitsTaken===0&&t.mode!=="tt",1e3),St("clean","Zero Exceptions","Finish a race without touching a wall.",(r,t)=>t&&t.finished&&t.wallHits===0&&t.mode!=="tt",400),St("survivor","Error Handling","Take 6+ hits in a race and still make the podium.",(r,t)=>t&&t.place<=3&&t.hitsTaken>=6,600),St("cup0","Circuit Breaker","Win gold in the Circuit Cup.",r=>r.golds&&r.golds[0]!==void 0,500),St("cup1","Burned In","Win gold in the Firewall Cup.",r=>r.golds&&r.golds[1]!==void 0,600),St("cup2","Quantum Supremacy","Win gold in the Quantum Cup.",r=>r.golds&&r.golds[2]!==void 0,700),St("cup3","Neural Net Gain","Win gold in the Neural Cup.",r=>r.golds&&r.golds[3]!==void 0,800),St("cup4","Dark Mode","Win gold in the Darknet Cup.",r=>r.golds&&r.golds[4]!==void 0,900),St("cup5","Singularity Reached","Win gold in the Singularity Cup.",r=>r.golds&&r.golds[5]!==void 0,1200),St("gold3","Grand Champion","Win gold in 3 tournaments. Unlocks QWEN.",r=>$l(r)>=3,1e3),St("gold6","Flawless Compile","Win gold in all 6 tournaments.",r=>$l(r)>=6,3e3),St("hard1","3.0 GHz","Win gold in any tournament at 3.0 GHz.",r=>$l(r,2)>=1,1500),St("hard6","Thermal Limit","Win gold in all 6 tournaments at 3.0 GHz.",r=>$l(r,2)>=6,5e3),St("perfectcup","Perfect Score","Win all 4 races of a tournament.",(r,t)=>t&&t.perfectCup,1500),St("jarvis_cup","At Your Service","Win a tournament with JARVIS.",(r,t)=>t&&t.cupGold&&t.char==="jarvis",800),St("win_bike","Two-Wheel Logic","Win a race on a Cyber-Motorcycle.",r=>(r.winsBy&&r.winsBy.bike)>=1,200),St("win_quad","Heavy Metal","Win a race on a Cyber-Quad.",r=>(r.winsBy&&r.winsBy.quad)>=1,200),St("win_kart","Low Profile","Win a race on a Cyber-Kart.",r=>(r.winsBy&&r.winsBy.kart)>=1,200),St("model_zoo","Model Zoo","Win a race with all 8 starting racers.",r=>ba.every(t=>r.winsChar&&r.winsChar[t]),1500),St("garage1","Custom Build","Buy your first garage item.",r=>r.purchases>=1,100),St("maxed","Fully Tuned","Spend the full upgrade budget on a vehicle.",(r,t,e)=>e.maxed,400),St("bits50k","Crypto Miner","Earn 50,000 bits in total.",r=>r.bitsEarned>=5e4,1e3),St("collector","Model Collector","Unlock all 4 hidden racers.",(r,t,e)=>e.allUnlocked,2e3)];function G_(r){r=r|0;let t=0;for(;r;)t+=r&1,r>>>=1;return t}function xf(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Jt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==r[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=gf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=gf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function gf(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new we(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var ne=(r,t,e)=>r<t?t:r>e?e:r;var De=(r,t,e,i)=>r+(t-r)*(1-Math.exp(-e*i)),Je=(r,t)=>(r%t+t)%t;function er(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ri=r=>"#"+(r>>>0).toString(16).padStart(6,"0");function ai(r,t){return`rgba(${r>>16&255},${r>>8&255},${r&255},${t})`}function Bi(r,t,e,i={}){let n=document.createElement("canvas");n.width=r,n.height=t;let s=n.getContext("2d");e(s,r,t);let a=new Xn(n);return a.colorSpace=qe,a.anisotropy=i.aniso||4,i.repeat&&(a.wrapS=a.wrapT=Sn),i.nearest&&(a.magFilter=Oe),a.needsUpdate=!0,a}var Kl;function Ki(){return Kl||(Kl=Bi(64,64,(r,t,e)=>{let i=r.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=i,r.fillRect(0,0,t,e)}),Kl)}function _f(r,t=1){return new Ut({color:r,transparent:!0,opacity:t,blending:_e,depthWrite:!1})}function ki(r){if(!isFinite(r))return"--:--.--";let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var Ta=r=>r+(["th","st","nd","rd"][(r%100-20)%10]||["th","st","nd","rd"][r%100]||"th");function Jl(r,t=()=>!1){r.updateMatrixWorld(!0);let e=new $t().copy(r.matrixWorld).invert(),i=new Map,n=[];r.traverse(s=>{if(s===r||!s.isMesh||s.isInstancedMesh||t(s))return;let a=s.material;if(Array.isArray(a)||a.map||a.wireframe)return;let o=[a.type,a.color&&a.color.getHex(),a.opacity,a.transparent,a.blending,a.side,a.shininess].join("|"),l=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);l.attributes.uv||l.setAttribute("uv",new Nt(new Float32Array(l.attributes.position.count*2),2)),l.attributes.normal||l.computeVertexNormals(),l.applyMatrix4(new $t().multiplyMatrices(e,s.matrixWorld)),i.has(o)||i.set(o,{mat:a,geos:[]}),i.get(o).geos.push(l),n.push(s)});for(let s of n)s.parent.remove(s);for(let{mat:s,geos:a}of i.values()){let o=xf(a,!1);a.forEach(l=>l.dispose()),o&&r.add(new dt(o,s))}return r}var vf=new R(0,1,0),ir=24,me=ir/2,V_=2;function W_(r,t,e){let i=er(r.seed*7919+13),n=r.shape==="trefoil"?42:r.shape==="fig8"?36:30,s=r.size,a=i()*6.28,o=i()*6.28,l=i()*6.28,c=r.elev*t,h=[];for(let u=0;u<n;u++){let d=u/n*Math.PI*2,f,p,x;switch(r.shape){case"fig8":{f=s*1.35*Math.sin(d),x=s*.85*Math.sin(d)*Math.cos(d)*(1+.08*Math.sin(3*d+a)*e),p=Math.max(c,10)*Math.cos(d)+3*Math.sin(3*d+o);break}case"trefoil":{f=s*(Math.sin(d)+2*Math.sin(2*d)),x=s*(Math.cos(d)-2*Math.cos(2*d)),p=-Math.max(c,10)*Math.sin(3*d);break}case"serp":{let y=s*(1+e*(.2*Math.sin(3*d+a)+.1*Math.sin(5*d+o)));f=y*Math.cos(d)*1.3,x=y*Math.sin(d),p=c*(.6*Math.sin(d+l)+.4*Math.sin(2*d+a));break}case"mountain":{let y=s*(1+e*(.14*Math.sin(2*d+a)+.08*Math.sin(4*d+o)));f=y*Math.cos(d)*1.2,x=y*Math.sin(d),p=c*(.75*Math.sin(d+l)+.25*Math.sin(3*d+o));break}default:{let y=s*(1+e*(.16*Math.sin(2*d+a)+.09*Math.sin(3*d+o)));f=y*Math.cos(d)*1.35,x=y*Math.sin(d),p=c*Math.sin(d+l)}}let m=r.shape==="fig8"||r.shape==="trefoil"?.02:.055,g=(i()-.5)*2*m*e,M=(i()-.5)*2*m*e,v=r.shape==="trefoil"?s*2:s;h.push(new R(f+g*v,p,x+M*v))}return h}var nr=class{constructor(t,e){this.cup=t,this.def=e,this.pal=t.pal,this.rnd=er(e.seed*31+7),this.time=0,this._generate(),this._features()}_generate(){let t=this.def,e=1,i=1;for(let n=0;n<10;n++){let s=new Os(W_(t,e,i),!0,"centripetal",.5),a=s.getLength(),o=Math.round(a/V_),l=s.getSpacedPoints(o);if(l.pop(),this._frames(l,a),!this._badCrossing())break;t.shape==="fig8"||t.shape==="trefoil"?e*=1.25:(i*=.72,e*=1.1)}}_frames(t,e){let i=t.length;this.n=i,this.L=e,this.step=e/i;let n=this.P=t,s=this.T=[],a=this.R=[],o=this.U=[],l=this.K=new Float32Array(i);for(let x=0;x<i;x++){let m=n[(x-1+i)%i],g=n[(x+1)%i];s.push(new R().subVectors(g,m).normalize())}for(let x=0;x<i;x++){let m=s[x],g=m.y/Math.hypot(m.x,m.z);Math.abs(g)>.32&&(n[x].y=(n[(x-2+i)%i].y+n[(x+2)%i].y)/2)}let c=[];for(let x=0;x<i;x++){let m=vf.clone().addScaledVector(s[x],-s[x].dot(vf)).normalize();c.push(new R().crossVectors(s[x],m).normalize()),o.push(m)}let h=new Float32Array(i);for(let x=0;x<i;x++){let m=s[(x+1)%i],g=s[(x-1+i)%i],M=new R().subVectors(m,g).divideScalar(2*this.step);h[x]=M.dot(c[x])}let u=6;for(let x=0;x<i;x++){let m=0;for(let g=-u;g<=u;g++)m+=h[(x+g+i)%i];l[x]=m/(2*u+1)}this.bank=new Float32Array(i);for(let x=0;x<i;x++){let m=ne(l[x]*15,-.26,.26);this.bank[x]=m;let g=new Ye().setFromAxisAngle(s[x],-m);o[x].applyQuaternion(g).normalize(),a.push(new R().crossVectors(s[x],o[x]).normalize())}let d=1/0,f=-1/0,p=new bi;for(let x of n)d=Math.min(d,x.y),f=Math.max(f,x.y),p.expandByPoint(x);this.minY=d,this.maxY=f,this.box=p,this.groundY=d-14}_badCrossing(){let t=this.n,e=this.P,i=30,n=new Map;for(let a=0;a<t;a+=2){let o=Math.floor(e[a].x/i)+","+Math.floor(e[a].z/i);n.has(o)||n.set(o,[]),n.get(o).push(a)}this.crossings=[];let s=!1;for(let a=0;a<t;a+=2){let o=Math.floor(e[a].x/i),l=Math.floor(e[a].z/i);for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){let u=n.get(o+c+","+(l+h));if(u)for(let d of u){if(d<=a||Math.min(d-a,t-(d-a))*this.step<90)continue;Math.hypot(e[a].x-e[d].x,e[a].z-e[d].z)<ir+6&&(Math.abs(e[a].y-e[d].y)<11?s=!0:this.crossings.push([a,d]))}}}return s}frame(t,e){let i=this.n,n=Je(t,this.L)/this.step,s=Math.floor(n)%i,a=(s+1)%i,o=n-Math.floor(n);return e.pos.lerpVectors(this.P[s],this.P[a],o),e.t.lerpVectors(this.T[s],this.T[a],o).normalize(),e.r.lerpVectors(this.R[s],this.R[a],o).normalize(),e.u.lerpVectors(this.U[s],this.U[a],o).normalize(),e.k=this.K[s]*(1-o)+this.K[a]*o,e.i=s,e}idx(t){return Math.floor(Je(t,this.L)/this.step)%this.n}curvatureAhead(t,e){let i=0,n=0;for(let s=0;s<e;s+=6){let a=this.K[this.idx(t+s)];n+=a,Math.abs(a)>Math.abs(i)&&(i=a)}return{max:i,avg:n/Math.max(1,Math.ceil(e/6))}}_features(){let t=this.L,e=this.rnd,i=this.def,n=[[t-70,t],[0,90]],s=(d,f)=>n.every(([p,x])=>f<p||d>x)&&f<t-70&&d>90,a=(d,f)=>n.push([d,f]),o=d=>Math.abs(this.curvatureAhead(d-20,70).max)<.012;this.jumps=[];let l=i.jumps;for(let d=0;d<l;d++){let f=null;for(let p=0;p<60;p++){let x=t*((d+.5)/l)+(e()-.5)*t*.3,m=Je(x,t),g=d===l-1&&l>=2,M=g?30:22;if(s(m-10,m+12+M+95)&&(o(m)||p>40)){f={s0:m,ramp:12,gap:M,mega:g};break}}f&&(this.jumps.push(f),a(f.s0-10,f.s0+f.ramp+f.gap+95))}this.openMask=new Uint8Array(this.n),this.opens=[];for(let d=0;d<i.open;d++){let f=-1,p=-1;for(let x=0;x<40;x++){let m=100+e()*(t-300);if(!s(m,m+110))continue;let g=this.P[this.idx(m+55)].y-this.minY-Math.abs(this.curvatureAhead(m-40,170).max)*2500;g>p&&(p=g,f=m)}if(f>=0){this.opens.push([f,f+110]),a(f,f+110);for(let x=f;x<f+110;x+=this.step)this.openMask[this.idx(x)]=1}}for(let d of this.jumps)for(let f=d.s0+d.ramp;f<d.s0+d.ramp+d.gap;f+=this.step)this.openMask[this.idx(f)]=2;this.strips=[];for(let d=0;d<7;d++)for(let f=0;f<30;f++){let p=100+e()*(t-200);if(s(p-2,p+12)){this.strips.push({s:p,x:(e()-.5)*14,len:10,w:5.5}),a(p-2,p+12);break}}for(let d of this.jumps)this.strips.push({s:d.s0-9,x:(e()-.5)*8,len:8,w:6,ramp:!0});this.capsules=[];let c=Math.max(4,Math.round(t/380));for(let d=0;d<c;d++){let f=t*((d+.35)/c);for(let p=0;p<30&&!s(f-3,f+3);p++)f+=13;a(f-3,f+3);for(let p=-2;p<=2;p++)this.capsules.push({s:f,x:p*4.2,active:!0,timer:0})}this.hazards=[];let h=i.hz,u=Math.max(2,Math.round(t/650));for(let d of h)for(let f=0;f<u;f++)for(let p=0;p<40;p++){let x=120+e()*(t-260),m=d==="pulse"?40:d==="mine"?30:6;if(!s(x-4,x+m+4))continue;a(x-4,x+m+4);let g={type:d,s:x,len:m,phase:e()*6.28,state:0};d==="barrier"&&(g.amp=me-3.4,g.speed=.9+e()*.6,g.w=5.5,g.x=0),d==="firewall"&&(g.period=3.2,g.side=1),d==="mine"&&(g.mines=[0,1,2].map(M=>({s:x+M*12,x:(e()-.5)*18,active:!0,t:0}))),d==="pulse"&&(g.period=3.4,g.on=!1),this.hazards.push(g);break}}surface(t){t=Je(t,this.L);for(let e of this.jumps){let i=t-e.s0;if(i>=0&&i<e.ramp)return{h:(i/e.ramp)**1.6*(e.mega?2.6:1.9),gap:!1,ramp:e,rampEnd:i>e.ramp-2.5};if(i>=e.ramp&&i<e.ramp+e.gap)return{h:0,gap:!0,ramp:null}}return{h:0,gap:!1,ramp:null}}isOpen(t){return this.openMask[this.idx(t)]>0}build(t,e){let i=this.pal;this.group=new Te,t.add(this.group),t.fog=new Gn(i.fog,90,e>0?760:520),t.background=new Et(i.sky1),this._sky(),this._ground(),this._road(),this._rails(),this._pillars(),this._gates(),this._environment(e),this._featureMeshes()}_sky(){let t=this.pal,e=new xi(1800,24,16),i=new Ie({side:Ze,depthWrite:!1,fog:!1,uniforms:{c1:{value:new Et(t.sky1)},c2:{value:new Et(t.sky2)},c3:{value:new Et(t.a)}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vp; uniform vec3 c1,c2,c3;
        void main(){ float h=vp.y; vec3 col=mix(c2,c1,smoothstep(-0.05,0.55,h));
        col+=c3*0.18*exp(-abs(h-0.02)*28.0);
        float g=step(0.985,fract(atan(vp.z,vp.x)*24.0))*smoothstep(0.3,0.0,h)*smoothstep(-0.2,0.0,h)*0.15;
        col+=c3*g; gl_FragColor=vec4(col,1.0);}`}),n=new dt(e,i);n.renderOrder=-10,n.frustumCulled=!1,this.sky=n,this.group.add(n);let s=500,a=new Float32Array(s*3),o=this.rnd;for(let h=0;h<s;h++){let u=o()*6.28,d=.08+o()*1.3;a[h*3]=Math.cos(u)*Math.cos(d)*1600,a[h*3+1]=Math.sin(d)*1600,a[h*3+2]=Math.sin(u)*Math.cos(d)*1600}let l=new Jt;l.setAttribute("position",new we(a,3));let c=new Tn(l,new Wn({color:13625599,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8}));c.frustumCulled=!1,this.stars=c,this.group.add(c)}_ground(){let t=this.pal,e=Bi(512,512,(a,o,l)=>{a.fillStyle=ai(t.ground,1),a.fillRect(0,0,o,l);let c=er(this.def.seed);a.strokeStyle=ai(t.a,.16),a.lineWidth=2;for(let h=0;h<=8;h++)a.beginPath(),a.moveTo(h*64,0),a.lineTo(h*64,l),a.stroke(),a.beginPath(),a.moveTo(0,h*64),a.lineTo(o,h*64),a.stroke();for(let h=0;h<40;h++){let u=Math.floor(c()*8)*64,d=Math.floor(c()*8)*64;a.strokeStyle=ai(c()<.6?t.a:t.b,.35+c()*.3),a.lineWidth=3,a.beginPath(),a.moveTo(u,d);for(let f=0;f<4;f++)f%2?u+=(c()<.5?-1:1)*32*(1+Math.floor(c()*3)):d+=(c()<.5?-1:1)*32*(1+Math.floor(c()*3)),a.lineTo(u,d);a.stroke(),a.fillStyle=ai(t.c,.7),a.beginPath(),a.arc(u,d,4,0,6.28),a.fill()}},{repeat:!0}),i=Math.max(this.box.max.x-this.box.min.x,this.box.max.z-this.box.min.z)+1600;e.repeat.set(i/120,i/120);let n=new dt(new ui(i,i),new Ut({map:e}));n.rotation.x=-Math.PI/2;let s=this.box.getCenter(new R);n.position.set(s.x,this.groundY,s.z),this.group.add(n)}_roadTexture(){let t=this.pal;return Bi(256,512,(e,i,n)=>{e.fillStyle=ai(t.road,1),e.fillRect(0,0,i,n),e.strokeStyle=ai(t.b,.09),e.lineWidth=1;for(let o=0;o<n;o+=18)for(let l=o/18%2?10:0;l<i;l+=20){e.beginPath();for(let c=0;c<6;c++){let h=c*Math.PI/3;e.lineTo(l+Math.cos(h)*7,o+Math.sin(h)*7)}e.closePath(),e.stroke()}let s=er(this.def.seed+5);for(let o=0;o<14;o++){let l=30+s()*(i-60),c=s()*n;e.strokeStyle=ai(t.b,.22),e.lineWidth=2,e.beginPath(),e.moveTo(l,c);for(let h=0;h<3;h++)c+=20+s()*50,e.lineTo(l,c),l+=(s()-.5)*50,e.lineTo(l,c+12),c+=12;e.stroke()}e.fillStyle="rgba(220,240,255,0.30)";for(let o of[.25,.5,.75])for(let l=0;l<n;l+=128)e.fillRect(o*i-2,l,4,64);let a=(o,l,c,h)=>{let u=e.createLinearGradient(o-c*3,0,o+c*3,0);u.addColorStop(0,ai(l,0)),u.addColorStop(.5,ai(l,h)),u.addColorStop(1,ai(l,0)),e.fillStyle=u,e.fillRect(o-c*3,0,c*6,n)};a(i*.375,t.b,3,.45),a(i*.625,t.c,3,.35),a(6,t.a,4,1),a(i-6,t.a,4,1),e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(3,0,3,n),e.fillRect(i-6,0,3,n)},{repeat:!0,aniso:8})}_road(){let t=this.n,e=this.P,i=this.R,n=this.U,s=[],a=[],o=[],l=[],c=[],h=[],u=[],d=y=>this.surface(y).gap,f=0;for(let y=0;y<=t;y++){let T=y%t,w=e[T],_=i[T],b=n[T],P=y*this.step,A=w.clone().addScaledVector(_,-me),I=w.clone().addScaledVector(_,me);s.push(A.x,A.y,A.z,I.x,I.y,I.z),a.push(0,P/24,1,P/24);let F=1.8,H=A.clone().addScaledVector(b,-F),L=I.clone().addScaledVector(b,-F);if(l.push(H.x,H.y,H.z,L.x,L.y,L.z),h.push(A.x,A.y,A.z,H.x,H.y,H.z,I.x,I.y,I.z,L.x,L.y,L.z),y>0&&!d(P-this.step*.5)){let B=(y-1)*2;o.push(B,B+2,B+1,B+1,B+2,B+3),c.push(B,B+1,B+2,B+1,B+3,B+2);let V=(y-1)*4;u.push(V,V+1,V+4,V+1,V+5,V+4,V+2,V+6,V+3,V+3,V+6,V+7)}f++}let p=new Jt;p.setAttribute("position",new Nt(s,3)),p.setAttribute("uv",new Nt(a,2)),p.setIndex(o),this.roadTex=this._roadTexture();let x=new dt(p,new Ut({map:this.roadTex,side:xe}));this.group.add(x);let m=new Jt;m.setAttribute("position",new Nt(l,3)),m.setIndex(c),this.group.add(new dt(m,new Ut({color:329228,side:xe})));let g=new Jt;g.setAttribute("position",new Nt(h,3)),g.setIndex(u),this.group.add(new dt(g,new Ut({color:new Et(this.pal.a).multiplyScalar(.25),side:xe})));let M=Bi(256,32,(y,T,w)=>{for(let _=0;_<16;_++)for(let b=0;b<2;b++)y.fillStyle=(_+b)%2?"#f2f6ff":"#10131c",y.fillRect(_*16,b*16,16,16)}),v=new dt(new ui(ir,3),new Ut({map:M,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));this._placeOnRoad(v,0,0,.04),this.group.add(v)}_placeOnRoad(t,e,i,n,s=0){let a=this.frame(e,{pos:new R,t:new R,r:new R,u:new R});t.position.copy(a.pos).addScaledVector(a.r,i).addScaledVector(a.u,n);let o=new $t().makeBasis(a.r.clone().negate(),a.u,a.t);return t.quaternion.setFromRotationMatrix(o),t.geometry&&t.geometry.type==="PlaneGeometry"&&t.rotateX(-Math.PI/2),s&&t.rotateY(s),a}_rails(){let t=this.n,e=this.P,i=this.R,n=this.U,s=this.pal,a=[],o=[],l=[],c=[],h=[],u=[],d=0,f=0,p=0;for(let m=0;m<t;m++){let g=(m+1)%t,M=this.openMask[m],v=this.openMask[g];for(let y of[-1,1]){let T=e[m].clone().addScaledVector(i[m],y*me),w=e[g].clone().addScaledVector(i[g],y*me);if(!M&&!v){let _=T.clone().addScaledVector(n[m],1.1),b=w.clone().addScaledVector(n[g],1.1);a.push(T.x,T.y,T.z,_.x,_.y,_.z,w.x,w.y,w.z,b.x,b.y,b.z),o.push(d,d+2,d+1,d+1,d+2,d+3),d+=4;let P=T.clone().addScaledVector(n[m],1.25),A=w.clone().addScaledVector(n[g],1.25);l.push(_.x,_.y,_.z,P.x,P.y,P.z,b.x,b.y,b.z,A.x,A.y,A.z),c.push(f,f+2,f+1,f+1,f+2,f+3),f+=4}else if(M===1&&v===1&&m%3!==2){let _=T.clone().addScaledVector(i[m],-y*.5).addScaledVector(n[m],.06),b=w.clone().addScaledVector(i[g],-y*.5).addScaledVector(n[g],.06),P=T.clone().addScaledVector(n[m],.06),A=w.clone().addScaledVector(n[g],.06);h.push(_.x,_.y,_.z,P.x,P.y,P.z,b.x,b.y,b.z,A.x,A.y,A.z),u.push(p,p+2,p+1,p+1,p+2,p+3),p+=4}}}let x=(m,g,M)=>{let v=new Jt;v.setAttribute("position",new Nt(m,3)),v.setIndex(g);let y=new dt(v,M);return this.group.add(y),y};x(a,o,new Ut({color:s.a,transparent:!0,opacity:.11,side:xe,blending:_e,depthWrite:!1})),x(l,c,new Ut({color:new Et(s.a).multiplyScalar(.8),side:xe})),this.warnMat=new Ut({color:16724e3,transparent:!0,opacity:.9,side:xe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),h.length&&x(h,u,this.warnMat)}_pillars(){let t=[];for(let o=0;o<this.n;o+=14){let l=this.P[o],c=l.y-1.8-this.groundY;c>2&&t.push([l,c])}if(!t.length)return;let e=new he(2.4,1,2.4),i=new Ut({color:724506}),n=new mi(e,i,t.length),s=new mi(new he(2.6,.35,2.6),new Ut({color:this.pal.b}),t.length*2),a=new $t;t.forEach(([o,l],c)=>{a.makeScale(1,l,1).setPosition(o.x,this.groundY+l/2,o.z),n.setMatrixAt(c,a),a.makeTranslation(o.x,this.groundY+l*.33,o.z),s.setMatrixAt(c*2,a),a.makeTranslation(o.x,this.groundY+l*.66,o.z),s.setMatrixAt(c*2+1,a)}),this.group.add(n,s)}_gates(){let t=this.pal,e=new Ut({color:t.a}),i=new Ut({color:658456}),n=(a,o)=>{let l=new Te,c=new he(1.2,11,1.2);for(let d of[-1,1]){let f=new dt(c,i);f.position.set(d*(me+1.2),5.5,0),l.add(f);let p=new dt(new he(.3,11,1.3),e);p.position.set(d*(me+.55),5.5,0),l.add(p)}let h=new dt(new he(ir+3.6,1.6,1.2),i);h.position.y=11,l.add(h);let u=new dt(new he(ir+3.6,.25,1.3),e);if(u.position.y=10.1,l.add(u),o){let d=Bi(512,64,(p,x,m)=>{p.fillStyle="#05060c",p.fillRect(0,0,x,m),p.font="bold 44px sans-serif",p.textAlign="center",p.textBaseline="middle",p.shadowColor=ai(t.a,1),p.shadowBlur=16,p.fillStyle="#ffffff",p.fillText(o,x/2,m/2+2)}),f=new dt(new ui(ir,3),new Ut({map:d,side:xe}));f.position.set(0,12.6,0),f.rotation.y=Math.PI,l.add(f)}Jl(l),this._placeOnRoad(l,a,0,0),this.group.add(l)};n(0,"FINISH");let s=190;for(let a=s;a<this.L-80;a+=s)this.surface(a).gap||this.surface(a+6).gap||n(a,null)}_environment(t){let e=this.pal,i=er(this.def.seed*3+1),n=20,s=new Set;for(let b=0;b<this.n;b+=2){let P=this.P[b];for(let A=-3;A<=3;A++)for(let I=-3;I<=3;I++)s.add(Math.floor(P.x/n)+A+","+(Math.floor(P.z/n)+I))}let a=Bi(128,256,(b,P,A)=>{b.fillStyle="#07080f",b.fillRect(0,0,P,A);for(let I=6;I<A;I+=12)for(let F=6;F<P;F+=12){let H=i();H<.45&&(b.fillStyle=H<.12?ai(e.c,.9):H<.3?ai(e.a,.75):"rgba(200,220,255,0.35)",b.fillRect(F,I,6,5))}b.fillStyle=ai(e.a,.9),b.fillRect(0,0,P,3)}),o=t>0?260:150,l=new he(1,1,1);l.translate(0,.5,0);let c=new Ut({map:a}),h=new mi(l,c,o),u=new $t,d=new Et,f=(this.box.min.x+this.box.max.x)/2,p=(this.box.min.z+this.box.max.z)/2,x=(this.box.max.x-this.box.min.x)/2+380,m=(this.box.max.z-this.box.min.z)/2+380,g=0;for(let b=0;b<o*8&&g<o;b++){let P=f+(i()*2-1)*x,A=p+(i()*2-1)*m;if(s.has(Math.floor(P/n)+","+Math.floor(A/n)))continue;let I=Math.min(1,Math.hypot((P-f)/x,(A-p)/m)),F=14+i()*26,H=14+i()*26,L=20+i()*70+I*120;this.cup.env==="chips"&&(L*=.55),u.makeScale(F,L,H).setPosition(P,this.groundY,A),h.setMatrixAt(g,u),d.set(i()<.5?16777215:e.b).lerp(new Et(16777215),.6),h.setColorAt(g,d),g++}h.count=g,this.group.add(h),this.floaters=[];let M=this.cup.env,v=t>0?40:22,y;M==="quantum"||M==="core"?y=new Zn(6,0):M==="neural"?y=new Hs(4,0):M==="heat"?y=new Br(4,14,4):y=new he(10,1.5,10);let T=new Ut({color:e.c,wireframe:!0,transparent:!0,opacity:.7,blending:_e,depthWrite:!1});for(let b=0;b<v;b++){let P=f+(i()*2-1)*x*.9,A=p+(i()*2-1)*m*.9;if(s.has(Math.floor(P/n)+","+Math.floor(A/n)))continue;let I=new dt(y,T);I.position.set(P,this.maxY+20+i()*60,A),I.userData.spin=(i()-.5)*.8,I.userData.bob=i()*6,this.group.add(I),this.floaters.push(I)}let w=new Ni(.8,.8,400,6,1,!0),_=_f(e.a,.22);for(let b=0;b<16;b++){let P=f+(i()*2-1)*x,A=p+(i()*2-1)*m;if(s.has(Math.floor(P/n)+","+Math.floor(A/n)))continue;let I=new dt(w,_);I.position.set(P,this.groundY+200,A),this.group.add(I)}if(M==="core"){let b=new dt(new xi(90,32,16),new Ut({color:16773552,fog:!1}));b.position.set(f,this.maxY+380,p-m-300),this.group.add(b);let P=new Si(160,3,6,64);for(let A=0;A<3;A++){let I=new dt(P,new Ut({color:A?e.c:e.a,fog:!1}));I.position.copy(b.position),I.rotation.set(1.2+A*.3,A*.7,0),I.scale.setScalar(1+A*.25),this.group.add(I),this.floaters.push(I),I.userData.spin=.1+A*.05,I.userData.bob=0,I.userData.noBob=!0}}}_featureMeshes(){let t=this.pal;for(let u of this.jumps){let f=[],p=[];for(let v=0;v<=10;v++){let y=u.s0+v/10*u.ramp,T=this.frame(y,{pos:new R,t:new R,r:new R,u:new R}),w=this.surface(y).h+.03;for(let _ of[-1,1]){let b=T.pos.clone().addScaledVector(T.r,_*(me-.2)).addScaledVector(T.u,w),P=T.pos.clone().addScaledVector(T.r,_*(me-.2));f.push(b.x,b.y,b.z,P.x,P.y,P.z)}if(v>0){let _=(v-1)*4;p.push(_,_+4,_+2,_+2,_+4,_+6),p.push(_,_+1,_+4,_+1,_+5,_+4),p.push(_+2,_+6,_+3,_+3,_+6,_+7)}}let x=40;p.push(x,x+2,x+1,x+1,x+2,x+3);let m=new Jt;m.setAttribute("position",new Nt(f,3)),m.setIndex(p);let g=Bi(64,128,(v,y,T)=>{v.fillStyle="#120a1a",v.fillRect(0,0,y,T);for(let w=0;w<T;w+=32)v.strokeStyle=ai(u.mega?t.c:t.a,.95),v.lineWidth=6,v.beginPath(),v.moveTo(6,w+24),v.lineTo(y/2,w+6),v.lineTo(y-6,w+24),v.stroke()},{repeat:!0}),M=[];for(let v=0;v<=10;v++)M.push(0,v/2,0,v/2,1,v/2,1,v/2);m.setAttribute("uv",new Nt(M,2)),this.group.add(new dt(m,new Ut({map:g,side:xe})))}this.stripTex=Bi(64,128,(u,d,f)=>{u.clearRect(0,0,d,f);for(let p=0;p<f;p+=42)u.strokeStyle="rgba(255,255,255,0.95)",u.lineWidth=9,u.lineJoin="round",u.beginPath(),u.moveTo(8,p+34),u.lineTo(d/2,p+10),u.lineTo(d-8,p+34),u.stroke()},{repeat:!0}),this.stripTex.repeat.set(1,2);for(let u of this.strips){let d=new Ut({map:this.stripTex,color:t.c,transparent:!0,blending:_e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),f=new dt(new ui(u.w,u.len),d);this._placeOnRoad(f,u.s+u.len/2,u.x,.06),f.rotateZ(Math.PI),this.group.add(f);let p=new dt(new ui(u.w+.6,u.len+.6),new Ut({color:new Et(t.c).multiplyScalar(.25),polygonOffset:!0,polygonOffsetFactor:-2}));this._placeOnRoad(p,u.s+u.len/2,u.x,.05),this.group.add(p)}let e=this.capsules.length,i=new mi(new Ni(1,1,2,8,1,!0),new Ut({color:t.a,transparent:!0,opacity:.35,blending:_e,depthWrite:!1,side:xe}),e),n=K_(),s=new mi(n,new Ut({color:t.a}),e),a=new mi(new Zn(.55,0),new Ut({color:t.c}),e),o=new Float32Array(e*3),l=new Le;this.capsules.forEach((u,d)=>{this._placeOnRoad(l,u.s,u.x,1.6),l.updateMatrix(),u.matrix=l.matrix.clone(),u.k=d,u.rot=Math.random()*6,i.setMatrixAt(d,u.matrix),s.setMatrixAt(d,u.matrix),a.setMatrixAt(d,u.matrix),o.set([l.position.x,l.position.y,l.position.z],d*3)});let c=new Jt;c.setAttribute("position",new we(o,3));let h=new Tn(c,new Wn({map:Ki(),color:t.a,size:5,transparent:!0,opacity:.75,blending:_e,depthWrite:!1}));this.capMeshes={shell:i,rings:s,core:a,glow:h,gpos:c},this.group.add(i,s,a,h);for(let u of this.hazards)this._hazardMesh(u)}_hazardMesh(t){let e=this.pal;if(t.type==="barrier"){let i=new Te;i.add(new dt(new he(t.w,2.4,1.2),new Ut({color:1312524})));let n=Bi(128,32,(a,o,l)=>{for(let c=-32;c<o+32;c+=24)a.fillStyle="#ff2a3a",a.beginPath(),a.moveTo(c,0),a.lineTo(c+12,0),a.lineTo(c+24,l),a.lineTo(c+12,l),a.fill()});for(let a of[-.62,.62]){let o=new dt(new ui(t.w,1),new Ut({map:n,transparent:!0,side:xe}));o.position.set(0,.4,a),i.add(o)}let s=new dt(new he(t.w+.2,.2,1.3),new Ut({color:16724040}));s.position.y=1.25,i.add(s),t.mesh=i,this.group.add(i)}else if(t.type==="firewall"){let i=Bi(64,128,(s,a,o)=>{let l=s.createLinearGradient(0,o,0,0);l.addColorStop(0,"rgba(255,90,20,1)"),l.addColorStop(.6,"rgba(255,30,60,0.6)"),l.addColorStop(1,"rgba(255,30,60,0)"),s.fillStyle=l,s.fillRect(0,0,a,o),s.strokeStyle="rgba(255,240,200,0.8)",s.lineWidth=2;for(let c=8;c<o;c+=16)s.beginPath(),s.moveTo(0,c),s.lineTo(a,c),s.stroke();for(let c=8;c<a;c+=16)s.beginPath(),s.moveTo(c,0),s.lineTo(c,o),s.stroke()},{repeat:!0});t.halves=[];for(let s of[-1,1]){let a=new Ut({map:i,transparent:!0,blending:_e,depthWrite:!1,side:xe}),o=new dt(new ui(me,5),a),l=new Te;o.position.y=2.5,l.add(o),this._placeOnRoad(l,t.s,s*me/2,0),this.group.add(l),t.halves.push(a)}let n=new Te;for(let s of[-1,0,1]){let a=new dt(new he(.8,6,.8),new Ut({color:s?1706502:16738842}));a.position.set(s*me,3,0),n.add(a)}this._placeOnRoad(n,t.s,0,0),this.group.add(n)}else if(t.type==="mine")for(let i of t.mines)i.mesh=wa(16722490,16756782),this._placeOnRoad(i.mesh,i.s,i.x,.6),this.group.add(i.mesh);else if(t.type==="pulse"){let i=new Ut({color:10510591,transparent:!0,opacity:.12,blending:_e,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-2}),n=[],s=[],a=Math.ceil(t.len/2);for(let l=0;l<=a;l++){let c=this.frame(t.s+l*2,{pos:new R,t:new R,r:new R,u:new R}),h=c.pos.clone().addScaledVector(c.r,-me).addScaledVector(c.u,.08),u=c.pos.clone().addScaledVector(c.r,me).addScaledVector(c.u,.08);if(n.push(h.x,h.y,h.z,u.x,u.y,u.z),l){let d=(l-1)*2;s.push(d,d+2,d+1,d+1,d+2,d+3)}}let o=new Jt;o.setAttribute("position",new Nt(n,3)),o.setIndex(s),this.group.add(new dt(o,i)),t.mat=i,t.rings=[];for(let l of[0,t.len]){let c=new dt(new Si(me+1,.35,4,24,Math.PI),new Ut({color:11563263}));this._placeOnRoad(c,t.s+l,0,0),this.group.add(c),t.rings.push(c)}}}update(t){this.time+=t;let e=this.time;if(this.stripTex&&(this.stripTex.offset.y=e*1.6%1),this.warnMat&&(this.warnMat.opacity=.55+.4*Math.sin(e*6)),this.capMeshes){let{shell:i,rings:n,core:s,gpos:a}=this.capMeshes,o=X_,l=q_,c=$_,h=a.attributes.position;for(let u of this.capsules)u.active||(u.timer-=t,u.timer<=0&&(u.active=!0)),u.active?(u.rot+=t*2.5,l.setFromEuler(Y_.set(u.rot*.5,u.rot,0)),o.compose(yf.setFromMatrixPosition(u.matrix),l,Z_.set(1,1,1)),s.setMatrixAt(u.k,o),i.setMatrixAt(u.k,u.matrix),n.setMatrixAt(u.k,u.matrix)):(s.setMatrixAt(u.k,c),i.setMatrixAt(u.k,c),n.setMatrixAt(u.k,c)),h.setY(u.k,u.active?yf.setFromMatrixPosition(u.matrix).y:-9999);s.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=n.instanceMatrix.needsUpdate=!0,h.needsUpdate=!0}for(let i of this.floaters)i.rotation.y+=i.userData.spin*t,i.userData.noBob||(i.position.y+=Math.sin(e+i.userData.bob)*t*2);for(let i of this.hazards)if(i.type==="barrier")i.x=Math.sin(e*i.speed+i.phase)*i.amp,this._placeOnRoad(i.mesh,i.s,i.x,1.2);else if(i.type==="firewall"){let n=(e+i.phase)%(i.period*2);i.side=n<i.period?-1:1;let s=n%i.period;i.warn=s>i.period-.7,i.active=s>.25,i.halves.forEach((a,o)=>{let l=(o===0?-1:1)===i.side;a.opacity=l?i.active?.95:.3:i.warn?Math.sin(e*40)>0?.5:.05:.06})}else if(i.type==="mine")for(let n of i.mines)n.active?n.mesh.rotation.y+=t*3:(n.t-=t,n.t<=0&&(n.active=!0,n.mesh.visible=!0));else if(i.type==="pulse"){let n=(e+i.phase)%i.period;i.on=n>i.period-.5,i.warn=n>i.period-1.3&&!i.on,i.mat.opacity=i.on?.55:i.warn?.12+.25*(Math.sin(e*30)>0?1:0):.1,i.mat.color.set(i.on?14725375:10510591)}}minimapPath(){let t=[],e=this.box,i=e.max.x-e.min.x,n=e.max.z-e.min.z,s=1/Math.max(i,n);for(let a=0;a<this.n;a+=4)t.push([(this.P[a].x-e.min.x)*s,(this.P[a].z-e.min.z)*s,this.P[a].y]);return{pts:t,sc:s,minx:e.min.x,minz:e.min.z,w:i*s,d:n*s}}dispose(t){this.group&&(t.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}))}},X_=new $t,q_=new Ye,$_=new $t().makeScale(0,0,0),Y_=new Ii,yf=new R,Z_=new R;function K_(){let r=new Si(1.05,.08,4,16).rotateX(Math.PI/2),t=r.clone();r.translate(0,1,0),t.translate(0,-1,0);let e=new Float32Array([...r.attributes.position.array,...t.attributes.position.array]),i=r.index.array,n=r.attributes.position.count,s=[...i,...Array.from(t.index.array,o=>o+n)],a=new Jt;return a.setAttribute("position",new we(e,3)),a.setIndex(s),a}function wa(r,t){let e=new Te,i=new dt(new Hs(.55,0),new Ut({color:r}));e.add(i);let n=new dt(new Zn(1,0),new Ut({color:t,wireframe:!0}));e.add(n);let s=new Xi(new Di({map:Ki(),color:t,blending:_e,depthWrite:!1,transparent:!0}));return s.scale.setScalar(3.2),e.add(s),e}var Mf={},Me=(r,t)=>Mf[r]||(Mf[r]=t());function rr(r,t={}){return new Vs({color:r,shininess:80,specular:5596808,...t})}function Ql(r){return new Ut({color:r})}function jl(r,t,e,i){let n=new Te,s=new dt(Me("tire"+r+t,()=>new Ni(r,r,t,16).rotateZ(Math.PI/2)),rr(658192,{shininess:10}));n.add(s);let a=new dt(Me("rim"+r,()=>new Si(r*.78,r*.09,4,20).rotateY(Math.PI/2)),Ql(e));for(let l of[-1,1]){let c=a.clone();c.position.x=l*t*.51,n.add(c)}let o=new dt(Me("hub"+r,()=>new Ni(r*.35,r*.35,t*1.05,6).rotateZ(Math.PI/2)),i);return n.add(o),n}function Oh(r,t,e=1){let i=new Te,n=rr(r,{shininess:30}),s=new dt(Me("torso",()=>new qn(.3,.55,4,8)),n);s.position.set(0,.55,-.05),s.rotation.x=.55,i.add(s);let a=new dt(Me("helm",()=>new xi(.3,14,10)),rr(1119522,{shininess:120}));a.position.set(0,1.05,.25),i.add(a);let o=new dt(Me("visor",()=>new xi(.31,14,6,-Math.PI*.35,Math.PI*.7,Math.PI*.35,Math.PI*.3)),Ql(t));o.position.copy(a.position),i.add(o);let l=new dt(Me("stripe",()=>new he(.06,.5,.36)),Ql(t));l.position.set(0,.6,0),l.rotation.x=.55,i.add(l);for(let c of[-1,1]){let h=new dt(Me("arm",()=>new qn(.1,.5,3,6)),n);h.position.set(c*.32,.72,.3),h.rotation.x=1.1,i.add(h);let u=new dt(Me("leg",()=>new qn(.12,.5,3,6)),n);u.position.set(c*.24,.25,.15),u.rotation.x=1.3,i.add(u)}return i.scale.setScalar(e),i}function sr(r,t){let e=new Xi(new Di({map:Ki(),color:r,blending:_e,depthWrite:!1,transparent:!0}));return e.scale.setScalar(t),e}function ic(r,t,e,i){let n=new Te,s=new Te;n.add(s);let a=rr(t,{shininess:100}),o=Ql(e),l=[],c=[];if(r==="bike"){let u=new dt(Me("bikeFrame",()=>{let v=new $n;return v.moveTo(-1.2,.5),v.lineTo(-.9,.95),v.lineTo(.2,1.05),v.lineTo(.9,1.25),v.lineTo(1.35,.95),v.lineTo(1.1,.55),v.lineTo(.2,.4),v.lineTo(-.7,.35),v.closePath(),new zs(v,{depth:.5,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:1}).translate(0,0,-.25).rotateY(-Math.PI/2)}),a);s.add(u);let d=new dt(Me("bikeStrip",()=>new he(.56,.06,2)),o);d.position.set(0,.62,.1),s.add(d);let f=new dt(Me("bikeShield",()=>new he(.5,.35,.05)),new Vs({color:i,transparent:!0,opacity:.5}));f.position.set(0,1.3,1.05),f.rotation.x=-.6,s.add(f);let p=jl(.5,.28,e,a),x=jl(.52,.36,e,a);p.position.set(0,.5,1.25),x.position.set(0,.52,-1.15),s.add(p,x),l.push(p,x);let m=Oh(t===328968?2238010:1448488,i,1.05);m.position.set(0,.62,-.25),s.add(m);let g=sr(16777215,1.4);g.position.set(0,1,1.4),s.add(g);let M=sr(e,1.6);M.position.set(0,.95,-1.35),s.add(M),c=[new R(0,.55,-1.5)]}else if(r==="quad"){let u=new dt(Me("quadCh",()=>new he(1.5,.55,2.3)),a);u.position.y=.85,s.add(u);let d=new dt(Me("quadHood",()=>new he(1.3,.35,.9).translate(0,0,0)),a);d.position.set(0,1.2,.55),d.rotation.x=-.25,s.add(d);let f=new dt(Me("quadBull",()=>new he(1.9,.35,.3)),rr(2764346));f.position.set(0,.75,1.35),s.add(f);let p=new dt(Me("quadBullG",()=>new he(1.95,.08,.32)),o);p.position.set(0,.95,1.35),s.add(p);for(let g of[-1,1]){let M=new dt(Me("quadFender",()=>new he(.55,.12,.95)),a);for(let y of[-.85,.85]){let T=M.clone();T.position.set(g*.95,1.25,y),s.add(T)}let v=new dt(Me("quadSide",()=>new he(.05,.1,2)),o);v.position.set(g*.77,.9,0),s.add(v)}for(let[g,M]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let v=jl(.55,.5,e,a);v.position.set(g*.98,.55,M*.85),s.add(v),l.push(v)}let x=Oh(1448488,i,1.1);x.position.set(0,1.08,-.35),s.add(x);for(let g of[-.5,.5]){let M=sr(16777215,1.2);M.position.set(g,1,1.55),s.add(M)}let m=sr(e,2);m.position.set(0,1,-1.25),s.add(m),c=[new R(-.6,.7,-1.3),new R(.6,.7,-1.3)]}else{let u=new dt(Me("kartPan",()=>{let M=new $n;return M.moveTo(-.75,-1.3),M.lineTo(.75,-1.3),M.lineTo(.85,.3),M.lineTo(.45,1.45),M.lineTo(-.45,1.45),M.lineTo(-.85,.3),M.closePath(),new zs(M,{depth:.28,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1}).rotateX(Math.PI/2).translate(0,.55,0)}),a);s.add(u);let d=new dt(Me("kartNose",()=>new he(.7,.3,.8)),a);d.position.set(0,.55,1.05),d.rotation.x=.18,s.add(d);let f=new dt(Me("kartWing",()=>new he(1.9,.08,.45)),a);f.position.set(0,1.05,-1.35),s.add(f);let p=new dt(Me("kartWingG",()=>new he(1.95,.05,.08)),o);p.position.set(0,1.1,-1.55),s.add(p);for(let M of[-.8,.8]){let v=new dt(Me("kartStrut",()=>new he(.08,.5,.08)),a);v.position.set(M,.8,-1.35),s.add(v)}let x=new dt(Me("kartPod",()=>new Ni(.22,.28,.9,8).rotateX(Math.PI/2)),rr(2238522));for(let M of[-.55,.55]){let v=x.clone();v.position.set(M,.65,-1.05),s.add(v)}let m=new dt(Me("kartEdge",()=>new he(1.75,.06,.06)),o);m.position.set(0,.48,.3),s.add(m);for(let[M,v,y]of[[-.95,1,.38],[.95,1,.38],[-1,-.95,.44],[1,-.95,.44]]){let T=jl(y,.42,e,a);T.position.set(M,y,v),s.add(T),l.push(T)}let g=Oh(1448488,i,.95);g.position.set(0,.35,-.35),g.rotation.x=-.35,s.add(g);for(let M of[-.3,.3]){let v=sr(16777215,1);v.position.set(M,.65,1.5),s.add(v)}for(let M of[-.55,.55]){let v=sr(e,1.4);v.position.set(M,.65,-1.55),s.add(v)}c=[new R(-.55,.62,-1.6),new R(.55,.62,-1.6)]}let h=new dt(Me("underglow",()=>new ui(2.6,3.6).rotateX(-Math.PI/2)),new Ut({map:Ki(),color:e,transparent:!0,opacity:.55,blending:_e,depthWrite:!1}));return h.position.y=.08,n.add(h),Jl(s),{root:n,body:s,wheels:[],tail:c,neonMat:o}}var os;function J_(){if(os)return os;let r=document.createElement("canvas");r.width=256,r.height=256;let t=r.getContext("2d");t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=3;let e=18,i=e*Math.sqrt(3);for(let n=-i;n<256+i;n+=i)for(let s=-e*3,a=0;s<256+e*3;s+=e*3)for(let o of[0,1]){let l=s+o*e*1.5,c=n+o*i/2;t.beginPath();for(let h=0;h<=6;h++){let u=h*Math.PI/3;t.lineTo(l+Math.cos(u)*e,c+Math.sin(u)*e)}t.stroke()}return os=new Xn(r),os.wrapS=os.wrapT=Sn,os.repeat.set(4,2),os}function bf(r){let t=new dt(Me("shield",()=>new xi(2.6,24,14,0,Math.PI*2,0,Math.PI*.55)),new Ut({map:J_(),color:r,transparent:!0,opacity:.75,blending:_e,depthWrite:!1,side:xe}));return t.position.y=-.3,t}var tc=class{constructor(t,e,i=22,n=.35,s="std"){this.n=i,this.width=n,this.style=s,this.color=new Et(e),this.pts=[],this.ups=[];let a=new Float32Array(i*2*3),o=new Float32Array(i*2*3),l=[];for(let c=0;c<i-1;c++){let h=c*2;l.push(h,h+1,h+2,h+1,h+3,h+2)}this.geo=new Jt,this.geo.setAttribute("position",new we(a,3)),this.geo.setAttribute("color",new we(o,3)),this.geo.setIndex(l),this.mesh=new dt(this.geo,new Ut({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:xe})),this.mesh.frustumCulled=!1,t.add(this.mesh),this.t=0,this.intensity=1}push(t,e,i){this.pts.unshift(t.clone()),this.ups.unshift(e.clone()),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop()),this.t+=.016;let n=this.geo.attributes.position.array,s=this.geo.attributes.color.array,a=this.pts.length,o=new Et;for(let l=0;l<this.n;l++){let c=Math.min(l,a-1),h=this.pts[c],u=this.ups[c],d=Math.pow(1-l/(this.n-1),1.4)*this.intensity,f=this.width*(i?2.2:1)*(.4+.6*d);switch(n[l*6]=h.x+u.x*f,n[l*6+1]=h.y+u.y*f,n[l*6+2]=h.z+u.z*f,n[l*6+3]=h.x-u.x*f,n[l*6+4]=h.y-u.y*f,n[l*6+5]=h.z-u.z*f,this.style){case"fire":o.setHSL(.02+.12*(1-l/this.n),1,.5);break;case"rainbow":o.setHSL((this.t*.6+l/this.n)%1,1,.55);break;case"glitch":o.copy(this.color),Math.random()<.25&&o.setRGB(1,1,1),Math.random()<.15&&o.setRGB(0,0,0);break;case"binary":o.setRGB(.3,1,.5).multiplyScalar((l+Math.floor(this.t*20))%3?1:.15);break;default:o.copy(this.color)}i&&this.style==="std"&&o.lerp(new Et(16752704),.5),o.multiplyScalar(d),s[l*6]=s[l*6+3]=o.r,s[l*6+1]=s[l*6+4]=o.g,s[l*6+2]=s[l*6+5]=o.b}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}reset(){this.pts.length=0,this.ups.length=0}dispose(t){t.remove(this.mesh),this.geo.dispose(),this.mesh.material.dispose()}},ec=class{constructor(t,e=1600){this.max=e,this.i=0;let i=new Jt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.base=new Float32Array(e*3),this.grav=new Float32Array(e),i.setAttribute("position",new we(this.pos,3)),i.setAttribute("color",new we(this.col,3)),i.setAttribute("size",new we(this.size,1));let n=new Ie({uniforms:{map:{value:Ki()},scale:{value:600}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC;
        uniform float scale;
        void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(1.0,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a,t.a); }",transparent:!0,depthWrite:!1,blending:_e});this.mat=n,this.points=new Tn(i,n),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}emit(t,e,i,n,s,a=0){let o=this.i;this.i=(this.i+1)%this.max,this.pos[o*3]=t.x,this.pos[o*3+1]=t.y,this.pos[o*3+2]=t.z,this.vel[o*3]=e.x,this.vel[o*3+1]=e.y,this.vel[o*3+2]=e.z;let l=i.isColor?i:new Et(i);this.base[o*3]=l.r,this.base[o*3+1]=l.g,this.base[o*3+2]=l.b,this.size[o]=n,this.life[o]=s,this.maxLife[o]=s,this.grav[o]=a}burst(t,e,i,n,s=.6,a=.6,o=0,l=null){let c=new R;for(let h=0;h<i;h++)c.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(n*(.3+Math.random()*.7)),l&&c.addScaledVector(l,1),this.emit(t,c,e,s*(.6+Math.random()*.8),a*(.6+Math.random()*.8),o)}update(t){let e=this.max;for(let i=0;i<e;i++){if(this.life[i]<=0){this.size[i]!==0&&(this.size[i]=0);continue}this.life[i]-=t;let n=Math.max(0,this.life[i]/this.maxLife[i]);this.vel[i*3+1]-=this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.col[i*3]=this.base[i*3]*n,this.col[i*3+1]=this.base[i*3+1]*n,this.col[i*3+2]=this.base[i*3+2]*n,this.life[i]<=0&&(this.size[i]=0)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}dispose(t){t.remove(this.points),this.geo.dispose(),this.mat.dispose()}};var Sf=26,Bh=[.85,1.75,2.7],j_=[0,.5,.9,1.35],sc=[16777215,4184319,12607743,16747034],pn={pos:new R,t:new R,r:new R,u:new R,k:0},ar=new R,kh=new R,Ef=new $t,Tf=new R,Hb=new Ye,nc=class{constructor(t,e){this.race=t,this.idx=e.idx,this.char=e.char,this.name=e.char.name,this.isPlayer=!!e.isPlayer,this.clsId=e.cls;let i=this.cfg=rs[e.cls],n=this.mods=e.char.mods||{},s=e.upgrades||{engine:0,turbo:0,grip:0,armor:0,capacitor:0},a=t.clock,o=this.isPlayer?1:a.ai*(e.aiSkill||1);this.top=i.top*a.speed*(1+.022*s.engine)*(this.isPlayer?1:.86+.14*o),this.accel=i.accel*(1+.08*s.turbo),this.grip=i.grip*(1+.06*s.grip),this.mass=i.mass*(1+.15*s.armor),this.driftRate=i.driftRate*(n.driftRate||1)*(1+.09*s.capacitor),this.driftTurn=i.driftTurn,this.boostLen=1+.09*s.capacitor,this.meleeCdMax=i.meleeCd*(n.meleeCd||1),this.meleeForce=i.meleeForce*(n.meleeForce||1),this.recover=i.hitRecover*(n.recover||1)*(1-.06*s.armor),this.padBoost=n.padBoost||1,this.dist=e.dist,this.x=e.x,this.psi=0,this.speed=0,this.vx=0,this.h=0,this.vy=0,this.air=!1,this.airT=0,this.state="race",this.finished=!1,this.finishTime=0,this.place=0,this.spinT=0,this.spinAng=0,this.empT=0,this.invulnT=0,this.stallT=0,this.boostT=0,this.boostPow=1,this.slipT=0,this.slipActive=0,this.meleeCd=0,this.dashT=0,this.meleeAnim=0,this.meleeDir=1,this.shield=null,this.phaseT=0,this.cometT=0,this.shockT=0,this.shockHit=new Set,this.staticT=0,this.burnT=0,this.burnDrop=0,this.orbital=null,this.scrambleT=0,this.drift={on:!1,dir:0,t:0,level:0},this.landArm=!1,this.items=[null,null],this.rouletteT=0,this.lastStrip=null,this.lastHitBy=null,this.lastHitT=-99,this.lap=0,this.lapTimes=[],this.lapStart=0,this.bestLap=1/0,this.inp={steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1,item:!1,melee:!1,fuse:!1},this.rs={hitsTaken:0,wallHits:0,driftBoosts:0,itemsUsed:0,wasLast:!1,ledAll:!0},this.wobble=0,this.squash=0;let l=e.neon||e.char.color,c=ic(e.cls,e.paint||1711403,l,e.char.accent);this.model=c,this.root=c.root,this.neonColor=new Et(l),t.scene.add(this.root),this.shieldMesh=bf(5111795),this.shieldMesh.visible=!1,this.root.add(this.shieldMesh),this.trails=c.tail.map(()=>new tc(t.scene,l,this.isPlayer?26:18,e.cls==="bike"?.32:.26,e.trail||"std")),this.worldPos=new R,this.worldUp=new R(0,1,0),this.worldFwd=new R(0,0,1)}get s(){return Je(this.dist,this.race.track.L)}get progress(){return this.finished?1e9-this.place:this.dist}boost(t,e){this.boostPow=this.boostT>0?Math.max(this.boostPow,e):e,this.boostT=Math.max(this.boostT,t*this.boostLen),this.race.fx.boost(this)}hit(t,e,i={}){if(this.state!=="race"||this.finished&&this.isPlayer,this.invulnT>0||this.phaseT>0||this.state==="fall")return!1;if(this.orbital&&this.orbital.n>0&&t!=="melee")return this.orbital.n--,this.race.fx.block(this,e),!1;if(this.shield){let s=this.shield;return s.hits--,this.race.fx.block(this,e),s.type==="mirror"&&e&&e!==this&&this.race.items.reflect(this,e,t),s.hits<=0&&(this.shield=null),!1}if(t==="emp")return this.emp(i.dur||1.4,e),!0;let n=(i.dur||1.15)*this.recover;return this.spinT=Math.max(this.spinT,n),this.drift.on=!1,this.drift.t=0,this.drift.level=0,this.speed*=i.keep||.55,this.boostT=0,this.rs.hitsTaken++,this.lastHitBy=e,this.lastHitT=this.race.time,this.race.fx.hit(this,e,t),!0}emp(t,e){return this.phaseT>0||this.invulnT>0?!1:this.shield?(this.shield.hits--,this.race.fx.block(this,e),this.shield.hits<=0&&(this.shield=null),!1):(this.empT=Math.max(this.empT,t*(1-(this.mods.empResist||0))),this.drift.on=!1,this.drift.t=0,this.lastHitBy=e,this.lastHitT=this.race.time,this.rs.hitsTaken++,this.race.fx.emp(this,e),!0)}startFall(t){this.state!=="fall"&&(this.state="fall",this.fallT=1.25,this.fallCause=t,this.falls=(this.falls||0)+1,this.drift.on=!1,this.boostT=0,this.vy>0&&(this.vy*=.3),this.race.fx.fall(this),t==="edge"&&this.lastHitBy&&this.lastHitBy!==this&&this.race.time-this.lastHitT<2.5&&this.race.onKnockoff(this.lastHitBy,this))}respawn(){let t=this.race.track,e=this.s;if(this.fallCause==="gap")for(let i of t.jumps){let n=Je(e-i.s0,t.L);if(n<i.ramp+i.gap+10){this.dist+=i.ramp+i.gap+6-n;break}}else this.dist-=4;this.state="race",this.x=ne(this.x*.2,-4,4),this.psi=0,this.vx=0,this.h=0,this.vy=0,this.air=!1,this.speed=this.top*.45,this.invulnT=2,this.spinT=0,this.empT=0,this.trails.forEach(i=>i.reset()),this.race.fx.respawn(this)}meleeStrike(){if(this.meleeCd>0||this.state!=="race"||this.spinT>0)return;this.meleeCd=this.meleeCdMax,this.meleeAnim=.3;let t=this.race,e=null,i=99;for(let o of t.racers){if(o===this||o.state!=="race")continue;let l=t.relDist(o,this),c=o.x-this.x;if(Math.abs(l)<3.6&&Math.abs(c)<5.2&&Math.abs(o.h-this.h)<2.5){let h=Math.abs(l)+Math.abs(c);h<i&&(i=h,e=o)}}let n=this.drift.on,s=this.meleeForce*(n?1.4:1),a=!1;if(this.drift.level>=2&&(s*=1.5,a=!0,this.drift.t=0,this.drift.level=0),e){let o=Math.sign(e.x-this.x)||(Math.random()<.5?-1:1);if(this.meleeDir=o,t.fx.melee(this,e,a),e.staticT>0&&e.shield&&this.emp(1.5,e),e.shield||e.phaseT>0||e.invulnT>0){e.shield&&(e.shield.hits--,e.shield.type==="mirror"&&this.hit("melee",e),e.shield.hits<=0&&(e.shield=null)),t.fx.block(e,this),this.vx-=o*6;return}let l=15*s/e.mass;e.vx+=o*l,e.speed*=.86,e.wobble=.5,e.lastHitBy=this,e.lastHitT=t.time,(a||s>1.7)&&e.hit("melee",this,{dur:.6,keep:.75}),this.vx-=o*3/this.mass,t.onMelee(this,e,n)}else{let o=Math.sign(this.inp.steer)||(this.x>0?-1:1);this.meleeDir=o,this.vx+=o*13,this.dashT=.45,this.meleeCd=this.meleeCdMax*.6,t.fx.dash(this)}}step(t){let e=this.race,i=e.track,n=this.inp;if(this.meleeCd=Math.max(0,this.meleeCd-t),this.dashT=Math.max(0,this.dashT-t),this.meleeAnim=Math.max(0,this.meleeAnim-t),this.invulnT=Math.max(0,this.invulnT-t),this.empT=Math.max(0,this.empT-t),this.phaseT=Math.max(0,this.phaseT-t),this.cometT=Math.max(0,this.cometT-t),this.staticT=Math.max(0,this.staticT-t),this.scrambleT=Math.max(0,this.scrambleT-t),this.stallT=Math.max(0,this.stallT-t),this.wobble=Math.max(0,this.wobble-t),this.squash=Math.max(0,this.squash-t*3),this.shockT>0&&(this.shockT-=t,this.shockT<=0&&this.shockHit.clear()),this.shield&&(this.shield.t-=t,this.shield.t<=0&&(this.shield=null)),this.orbital&&(this.orbital.t-=t,this.orbital.t<=0&&(e.items.orbitalRelease(this),this.orbital=null)),this.rouletteT>0&&(this.rouletteT-=t),this.burnT>0&&(this.burnT-=t,this.burnDrop-=t,this.burnDrop<=0&&(this.burnDrop=.09,e.items.dropBurn(this))),this.state==="fall"){this.vy-=Sf*t,this.h+=this.vy*t,this.x+=this.vx*t,this.dist+=Math.max(0,this.speed)*.4*t,this.fallT-=t,this.fallT<=0&&this.respawn();return}let s=e.started,a=s&&this.spinT<=0&&this.stallT<=0;this.spinT>0?(this.spinT-=t,this.spinAng+=t*14*Math.min(1,this.spinT+.3)):this.spinAng=De(this.spinAng,Math.round(this.spinAng/(Math.PI*2))*Math.PI*2,8,t);let o=this.top*(e.rubber?e.rubber(this):1);this.empT>0&&(o*=.58);let l=this.boostT>0;l&&(this.boostT-=t);let c=a?n.throttle:0;if(!s)this.speed=0;else if(this.spinT>0)this.speed=De(this.speed,o*.2,2.5,t);else if(l)this.speed=De(this.speed,o*this.boostPow*(c>0?1:.85),3.2,t);else if(a&&n.brake>.1)this.speed-=(this.speed>0?48:16)*n.brake*t,this.speed=Math.max(this.speed,-14);else if(c>0){let v=o*c;if(this.speed<v){let y=Math.max(0,this.speed)/o;this.speed+=this.accel*(1-.75*y*y)*c*t,this.speed>v&&(this.speed=v)}else this.speed=De(this.speed,v,1.8,t)}else this.speed=De(this.speed,0,.55,t);this.air&&(this.speed=De(this.speed,this.speed*.97,.3,t));let h=a?n.steer:0;this.empT>0&&(h+=Math.sin(e.time*23+this.idx)*.35),this.scrambleT>0&&!this.isPlayer&&(h+=Math.sin(e.time*9+this.idx*2)*.5),h=ne(h,-1,1);let u=this.drift;if(a&&n.drift&&!u.on&&!this.air&&Math.abs(h)>.25&&this.speed>20&&(u.on=!0,u.dir=Math.sign(h),u.t=0,u.level=0,this.squash=.6,e.fx.driftStart(this)),u.on)if(!n.drift||this.speed<13||!a)u.level>0&&a&&(this.boost(j_[u.level],1.17+.04*u.level),this.rs.driftBoosts++,e.onDriftBoost(this,u.level)),u.on=!1,u.t=0,u.level=0;else{u.t+=t*this.driftRate*(.55+.45*Math.abs(h))*(this.air?.3:1);let v=u.t>=Bh[2]?3:u.t>=Bh[1]?2:u.t>=Bh[0]?1:0;v>u.level&&(u.level=v,e.fx.driftLevel(this,v))}let d=ne(Math.abs(this.speed)/16,0,1),f;u.on?f=u.dir*this.grip*this.driftTurn*(.6+.48*ne(h*u.dir,-1,1))*.62:f=h*this.grip*d*(1-.32*ne(this.speed/o,0,1))*.6*Math.sign(this.speed||1),this.air&&(f*=.35,this.psi*=Math.exp(-2.2*t));let p=i.frame(this.dist,pn).k,x=Math.max(.55,1-p*this.x),m=this.speed*Math.cos(this.psi)/x;this.psi+=(f-p*m)*t,!u.on&&Math.abs(h)<.15&&!this.air&&e.assist(this)&&(this.psi=De(this.psi,0,1.6,t)),u.on&&(this.psi=De(this.psi,ne(this.psi,-.75,.75),4,t)),this.psi=ne(this.psi,-1.25,1.25),this.dist+=m*t,this.x+=(this.speed*Math.sin(this.psi)+this.vx)*t,this.vx=De(this.vx,0,3.2,t),e.stats.distance(this,Math.abs(m*t));let g=me-(this.clsId==="bike"?.65:1.05);if(Math.abs(this.x)>g){let v=Math.sign(this.x);if(this.air&&this.h>1.2)this.x=v*g,this.vx*v>0&&(this.vx=0);else if(i.isOpen(this.s)&&this.phaseT<=0){if(Math.abs(this.x)>me+.4){this.startFall("edge");return}}else{this.x=v*g;let y=Math.sin(this.psi)*v,T=Math.max(0,y)*this.speed+Math.abs(this.vx);y>0&&(this.psi*=-.25),this.vx*v>0&&(this.vx=-this.vx*.3),this.speed*=1-ne(T/95,.004,.35),T>5&&(this.rs.wallHits++,e.fx.wall(this,v,T),u.on&&T>10&&(u.on=!1,u.t=0,u.level=0))}}let M=i.surface(this.s);if(!this.air)if(M.gap&&this.phaseT<=0)this.air=!0,this.airT=0,this.vy=0;else if(M.ramp&&M.rampEnd&&this.speed>8){let v=M.ramp;this.vy=(v.mega?7:4)+Math.min(this.speed,85)*(v.mega?.135:.1)*this.padBoost,this.air=!0,this.airT=0,this.landArm=!1,this.h=M.h,e.fx.launch(this)}else this.h=M.h;if(this.air&&(this.vy-=Sf*t,this.h+=this.vy*t,this.airT+=t,n.driftPressed&&(this.landArm=!0),this.h<=M.h))if(M.gap&&this.phaseT<=0){if(this.h<-2.5){this.startFall("gap");return}}else this.h=M.h,this.air=!1,this.squash=1,e.onLand(this,this.airT,this.landArm),this.landArm&&this.boost(.75,1+.24*this.padBoost),this.landArm=!1,this.vy=0;for(let v of i.strips)Je(this.s-v.s,i.L)<v.len&&Math.abs(this.x-v.x)<v.w/2+.7&&!this.air&&this.lastStrip!==v&&(this.lastStrip=v,this.boost(v.ramp?1.1:.9,1+.25*this.padBoost),e.onPad(this));this.lastStrip&&Je(this.s-this.lastStrip.s,i.L)>this.lastStrip.len+3&&(this.lastStrip=null);for(let v of i.capsules){if(!v.active)continue;let y=this.s-v.s;y>i.L/2&&(y-=i.L),y<-i.L/2&&(y+=i.L),Math.abs(y)<1.8&&Math.abs(this.x-v.x)<1.9&&this.h<3.5&&(v.active=!1,v.timer=2.5,e.items.pickup(this,v))}if(this.speed>28&&!this.air){let v=!1;for(let y of e.racers){if(y===this||y.state!=="race")continue;let T=e.relDist(y,this);if(T>2.5&&T<11&&Math.abs(y.x-this.x)<2.4){v=!0;break}}v?(this.slipT+=t*(this.mods.slip||1),this.slipT>=1.3&&(this.slipT=0,this.boost(.8*(this.mods.slip?1.3:1),1.18),e.onSlip(this))):this.slipT=Math.max(0,this.slipT-t*.7)}else this.slipT=Math.max(0,this.slipT-t);a&&(n.melee&&this.meleeStrike(),n.fuse&&e.items.fuse(this),n.item&&e.items.use(this)),n.melee=n.item=n.fuse=n.driftPressed=!1}render(t,e){let i=this.race;i.track.frame(this.dist,pn);let s=this.worldPos.copy(pn.pos).addScaledVector(pn.r,this.x).addScaledVector(pn.u,this.h),a=this.psi+(this.drift.on?this.drift.dir*.42:0)+this.spinAng;this.meleeAnim>0&&(a+=this.meleeDir*Math.sin(this.meleeAnim/.3*Math.PI)*.45),ar.copy(pn.t).multiplyScalar(Math.cos(a)).addScaledVector(pn.r,Math.sin(a)).normalize(),this.air&&ar.addScaledVector(pn.u,ne(this.vy*.025,-.35,.35)).normalize();let o=this.worldUp.copy(pn.u);kh.crossVectors(o,ar).normalize(),o.crossVectors(ar,kh).normalize(),Ef.makeBasis(kh,o,ar),this.root.quaternion.setFromRotationMatrix(Ef),this.root.position.copy(s),this.worldFwd.copy(ar);let l=this.model.body,c=this.inp.steer,h=this.clsId==="bike"?-c*.38-(this.drift.on?this.drift.dir*.32:0):-c*.06;l.rotation.z=De(l.rotation.z,h+Math.sin(i.time*30)*this.wobble*.3,8,t),l.position.y=this.squash*-.12+(this.drift.on?Math.abs(Math.sin(i.time*18))*.05:0),l.scale.y=1-this.squash*.08;for(let p of this.model.wheels)p.children[0]&&(p.rotation.x+=this.speed*t*1.9);this.root.visible=this.state!=="fall"||this.fallT>.35,this.invulnT>0?l.visible=Math.floor(i.time*14)%2===0:l.visible=!0;let u=this.shield||this.orbital;if(this.shieldMesh.visible=!!this.shield||this.phaseT>0,this.shieldMesh.visible){this.shieldMesh.rotation.y+=t*1.2;let p=this.phaseT>0?10484991:this.shield.type==="mirror"?16777215:this.shield.type==="static"?12886783:this.shield.type==="fortress"?4259760:5111795;this.shieldMesh.material.color.setHex(p),this.shieldMesh.material.opacity=.55+Math.sin(i.time*8)*.15+(this.shield&&this.shield.t<2?Math.sin(i.time*30)*.3:0)}let d=this.boostT>0,f=this.model.tail;for(let p=0;p<this.trails.length;p++)Tf.copy(f[p]).applyQuaternion(this.root.quaternion).add(s),this.trails[p].intensity=this.state==="fall"?0:ne(Math.abs(this.speed)/30,.15,1),this.trails[p].push(Tf,o,d);return s}dispose(){this.race.scene.remove(this.root),this.trails.forEach(t=>t.dispose(this.race.scene))}};var Aa=class{constructor(t,e,i){this.r=t,this.race=e,this.skill=i,this.lane=(Math.random()-.5)*6,this.laneT=0,this.think=Math.random(),this.itemDelay=1+Math.random()*2,this.wantDrift=!1,this.aggr=.4+Math.random()*.6,this.err=0,this.errT=0}update(t){let e=this.r,i=this.race,n=i.track,s=e.inp;if(e.state!=="race"){s.throttle=0,s.steer=0,s.drift=!1;return}let a=Math.max(10,e.speed),o=12+a*.42,l=n.K[n.idx(e.s+o*.6)],c=n.curvatureAhead(e.s+10,50);this.laneT-=t,this.laneT<=0&&(this.laneT=2+Math.random()*4,this.lane=(Math.random()-.5)*8);let h=ne(l*320,-6,6)+this.lane*.45,u=e.s,d=!e.items[0]||!e.items[1],f=null,p=0;if(d)for(let b of n.capsules){if(!b.active)continue;let P=Je(b.s-u,n.L);if(P>8&&P<45){f=b.x,p=.75;break}}if(f===null)for(let b of n.strips){let P=Je(b.s-u,n.L);if(P>5&&P<50){f=b.x,p=b.ramp?1:.6;break}}f!==null&&(h=h*(1-p)+f*p);let x=!1;for(let b of n.jumps){let P=Je(b.s0-u,n.L);(P<60||P>n.L-b.gap-b.ramp)&&(x=!0,h=ne(h,-4,4))}for(let b of n.hazards){let P=Je(b.s-u,n.L);if(P<0||P>55)continue;let A=P/a;if(b.type==="barrier"){let I=Math.sin((i.track.time+A)*b.speed+b.phase)*b.amp;Math.abs(h-I)<b.w/2+2.5&&(h=I>0?I-b.w/2-3:I+b.w/2+3)}else if(b.type==="firewall")h=-((i.track.time+A+b.phase)%(b.period*2)<b.period?-1:1)*6;else if(b.type==="mine")for(let I of b.mines)I.active&&Math.abs(h-I.x)<3&&(h=I.x+(h>I.x?3.5:-3.5))}for(let b of i.items.traps){let P=i.wrapDiff(b.dist,e.dist);P>0&&P<35&&Math.abs(h-b.x)<3&&(h=b.x+(h>b.x?3.6:-3.6))}let m=n.isOpen(u+o)||n.isOpen(u)?me-5:me-2.5;h=ne(h,-m,m),this.errT-=t,this.errT<=0&&(this.errT=1+Math.random()*3,this.err=(Math.random()-.5)*(1.1-this.skill)*1.6);let g=Math.atan2(h-e.x,o)+this.err*.15,M=l*a/(e.grip*.6*Math.max(.3,1-.32*a/e.top)),v=(g-e.psi)*2.6+M*.85;s.steer=ne(v,-1,1);let y=Math.abs(c.max);if(!e.drift.on)s.drift=!x&&y>.0085&&Math.abs(l)>.0075&&e.speed>30&&Math.random()<.9*this.skill&&Math.sign(l)===Math.sign(c.max)&&Math.abs(e.x)<me-5,s.drift&&Math.abs(s.steer)<.3&&(s.steer=Math.sign(c.max)*.5);else{let b=e.drift.level>=3||Math.abs(l)<.004&&e.drift.level>=1||Math.abs(l)<.0015||Math.abs(e.psi)>.75||Math.abs(e.x)>me-3;if(s.drift=!b,s.drift){let P=g-e.psi;s.steer=ne(e.drift.dir+P*2.2+M*.4,-1,1)}}let T=e.grip*.6*.72*(e.drift.on?1.45:1)/Math.max(.004,y)*(.95+.1*this.skill),w=n.isOpen(u+20)||n.isOpen(u+50);s.brake=0,e.drift.on&&e.speed>T*1.35&&(s.drift=!1);let _=e.x+(e.speed*Math.sin(e.psi)+e.vx)*.55;Math.abs(_)>me-1.8&&(s.steer=-Math.sign(_),e.drift.on&&Math.sign(_)===-e.drift.dir?s.steer=e.drift.dir:e.drift.on&&(s.drift=!1),Math.abs(_)>me+2&&Math.abs(e.psi)>.3&&(s.throttle=.3)),e.speed>T*(w?1:1.12)?e.speed>T*1.25&&!e.drift.on?(s.throttle=0,s.brake=.6):s.throttle=.4:s.throttle=1,e.air&&Math.random()<.05*this.skill&&(s.driftPressed=!0),this.think-=t,this.think<=0&&(this.think=.25+(1.05-this.skill)*.8,this._combat())}_combat(){let t=this.r,e=this.race,i=t.inp,n=e.clock.itemAgg;if(t.meleeCd<=0){for(let d of e.racers){if(d===t||d.state!=="race")continue;let f=e.relDist(d,t),p=d.x-t.x;if(Math.abs(f)<3&&Math.abs(p)<4.6&&Math.random()<this.aggr*n){i.melee=!0;break}}for(let d of e.items.projectiles)d.target===t&&e.wrapDiff(t.dist,d.dist)<12&&e.wrapDiff(t.dist,d.dist)>0&&Math.random()<this.skill*.6&&(i.melee=!0,i.steer=t.x>0?-1:1)}if(t.rouletteT>0)return;let s=t.items[0],a=t.items[1];if(!s)return;if(this.itemDelay-=.3,s&&a&&Math.random()<.55*n){i.fuse=!0;return}if(this.itemDelay>0)return;let o=e.racers.find(d=>d.place===t.place-1),l=e.racers.find(d=>d.place===t.place+1),c=o?e.relDist(o,t):999,h=l?-e.relDist(l,t):999,u=!1;switch(s){case"plasma":case"barrage":case"ionlance":u=c<90||t.place===1&&Math.random()<.1;break;case"trap":case"minefield":case"seeker":u=h<25||Math.random()<.08;break;case"shield":case"fortress":case"mirror":case"static":case"orbital":{u=e.items.projectiles.some(f=>f.target===t&&e.wrapDiff(t.dist,f.dist)<40)||Math.random()<.07;break}case"surge":case"hyper":case"phase":case"comet":case"burn":case"shockwave":u=Math.abs(e.track.curvatureAhead(t.s,60).max)<.012||t.place>5;break;case"emp":case"blackout":{let d=0;for(let f of e.racers)f!==t&&Math.hypot(e.relDist(f,t),f.x-t.x)<(s==="blackout"?60:16)&&d++;u=d>=2||d>=1&&Math.random()<.3;break}case"glitchbomb":u=c<50;break;default:u=!0}u&&Math.random()<.5+.5*n&&(i.item=!0,this.itemDelay=.8+Math.random()*2.5/n)}};var Ra={pos:new R,t:new R,r:new R,u:new R,k:0},Q_=new xi(.6,12,8),tv=new Si(1,.07,4,20);function wf(r=7002367){let t=new Te;t.add(new dt(Q_,new Ut({color:16777215})));let e=new dt(tv,new Ut({color:r}));t.add(e);let i=e.clone();i.rotation.x=Math.PI/2,t.add(i);let n=new Xi(new Di({map:Ki(),color:r,blending:_e,depthWrite:!1,transparent:!0}));return n.scale.setScalar(5),t.add(n),t.userData.rings=[e,i],t}var ev={shield:5,trap:4,emp:3,plasma:2,surge:1},iv={surge:5,plasma:4,emp:4,shield:2,trap:1},rc=class{constructor(t){this.race=t,this.scene=t.scene,this.projectiles=[],this.traps=[],this.fields=[],this.beams=[],this.rings=[],this.orbitMeshes=new Map}roll(t){let e=ne(t.place||8,1,8),i=mf[e-1].slice();t.mods.luck&&(i[0]*=1+t.mods.luck,i[3]*=1+t.mods.luck);let n=()=>{let a=i.reduce((l,c)=>l+c,0),o=Math.random()*a;for(let l=0;l<i.length;l++)if(o-=i[l],o<=0)return Dh[l];return Dh[0]},s=n();if(t.mods.doubleRoll){let a=n(),o=e<=3?ev:iv;o[a]>o[s]&&(s=a)}return s}pickup(t,e){let i=this.race;if(i.fx.capsule(t,e),i.mode==="tt")return;let n=t.items[0]===null?0:t.items[1]===null?1:-1;if(n<0)return;let s=this.roll(t);t.items[n]=s,t.rouletteT=t.mods.luck?0:t.isPlayer?.9:.5,n===0&&t.items[1]===null&&t.mods.dupChance&&Math.random()<t.mods.dupChance&&(t.items[1]=s),i.onPickup(t,s)}canUse(t){return t.rouletteT<=0&&(t.items[0]||t.items[1])}use(t){if(t.rouletteT>0)return;let e=t.items[0];e?(t.items[0]=t.items[1],t.items[1]=null):(e=t.items[1],t.items[1]=null),e&&(t.rs.itemsUsed++,this.activate(t,e),this.race.onItemUse(t,e))}fuse(t){if(t.rouletteT>0||!t.items[0]||!t.items[1])return!1;let e=Dn[Zl(t.items[0],t.items[1])];return e?(t.items[0]=e.id,t.items[1]=null,this.race.onFuse(t,e.id),!0):!1}activate(t,e){let i=this.race,n=t.mods.fusePower||1;switch(e){case"plasma":this.firePlasma(t,this.targetAhead(t,1));break;case"barrage":for(let s=1;s<=3;s++){let a=this.targetAhead(t,s);this.firePlasma(t,a,(s-2)*2.5,"barrage")}break;case"trap":this.dropTrap(t,t.dist-3.2,t.x);break;case"minefield":for(let s=0;s<5;s++)this.dropTrap(t,t.dist-4-s*2.5,(s-2)*4.2+(Math.random()-.5)*1.5);break;case"seeker":this.fireSeeker(t);break;case"shield":t.shield={type:"basic",hits:1,t:10*(t.mods.shieldTime||1)*(t.clsId==="quad"?1.25:1)},i.fx.shieldUp(t);break;case"fortress":t.shield={type:"fortress",hits:3,t:15*n},i.fx.shieldUp(t);break;case"mirror":t.shield={type:"mirror",hits:1,t:14*n},i.fx.shieldUp(t);break;case"static":t.shield={type:"static",hits:1,t:12*n},t.staticT=12*n,i.fx.shieldUp(t);break;case"orbital":t.orbital={n:2,t:7*n};break;case"surge":t.boost(1.4,1.32),i.fx.surge(t);break;case"hyper":t.boost(3*n,1.42),i.fx.surge(t);break;case"phase":t.boost(2.2*n,1.34),t.phaseT=2.4*n,i.fx.surge(t);break;case"comet":t.boost(2*n,1.36),t.cometT=2*n,i.fx.surge(t);break;case"burn":t.boost(1.8*n,1.32),t.burnT=1.8*n,i.fx.surge(t);break;case"shockwave":t.boost(2*n,1.34),t.shockT=2*n,t.shockHit.clear(),i.fx.surge(t);break;case"emp":this.empBlast(t,18,1.4,!1);break;case"blackout":this.empBlast(t,70*n,2,!0);break;case"ionlance":this.ionLance(t);break;case"glitchbomb":this.lobBomb(t,n);break}}targetAhead(t,e){let i=t.place-e;return i<1?null:this.race.racers.find(n=>n.place===i&&n.state!=="fall"&&!n.finished)||null}firePlasma(t,e,i=0,n="plasma",s=null,a=null){let o=wf(n==="reflect"?16777215:7002367);this.scene.add(o);let l=Math.max(t.speed,t.top*.8)+32;this.projectiles.push({type:"plasma",tag:n,owner:t,target:e,dist:a??t.dist+2.5,x:(s??t.x)+i,h:1.2+t.h,v:l*(t.mods.plasma||1),home:2.4*(t.mods.plasma||1),life:7,mesh:o,missed:!1}),this.race.fx.fire(t,"plasma")}fireSeeker(t){let e=this.race.racers.find(n=>n.place===t.place+1&&n.state!=="fall"),i=wa(16765802,16742938);this.scene.add(i),this.projectiles.push({type:"seeker",owner:t,target:e||null,dist:t.dist-3,x:t.x,h:.8+t.h,v:-16,home:1.8,life:9,mesh:i}),this.race.fx.fire(t,"trap")}dropTrap(t,e,i,n=25){let s=wa(16722490,16756782);this.scene.add(s),this.traps.push({owner:t,dist:e,x:ne(i,-me+1.5,me-1.5),h:.6,arm:.7,life:n*(t.mods.trapLife||1),mesh:s,burn:!1}),this.race.fx.fire(t,"trap")}dropBurn(t){let e=new Xi(new Di({map:Ki(),color:16734746,blending:_e,depthWrite:!1,transparent:!0}));e.scale.set(3,4,1),this.scene.add(e),this.traps.push({owner:t,dist:t.dist-2,x:t.x,h:1.2,arm:0,life:2.6,mesh:e,burn:!0})}lobBomb(t,e){let i=wa(13995007,16777215);this.scene.add(i),this.projectiles.push({type:"bomb",owner:t,dist:t.dist+2,x:t.x,h:1.5+t.h,v:t.speed+22,vy:9,life:4,mesh:i,P:e}),this.race.fx.fire(t,"emp")}empBlast(t,e,i,n){let s=this.race,a=0;for(let o of s.racers){if(o===t||o.state!=="race"||o.finished)continue;let l=s.relDist(o,t),c=o.x-t.x;Math.hypot(l,c)<e&&o.emp(i,t)&&(a++,s.onItemHit(t,o,"emp"),n&&(o.scrambleT=3,o.isPlayer&&s.fx.scramble()))}for(let o of this.traps)Math.abs(s.wrapDiff(o.dist,t.dist))<e*.6&&(o.life=0);for(let o of this.projectiles)o.owner!==t&&Math.abs(s.wrapDiff(o.dist,t.dist))<e*.6&&(o.life=0);s.fx.empBlast(t,e,n),t.isPlayer&&(!n&&a>=3&&s.flag("emp3"),n&&a>=5&&s.flag("blackout5"))}ionLance(t){let e=this.race,i=null,n=110;for(let s of e.racers){if(s===t||s.state!=="race"||s.finished)continue;let a=e.relDist(s,t);a>0&&a<n&&(n=a,i=s)}e.fx.beam(t,i),i&&i.hit("plasma",t,{dur:1.3})&&(i.empT=Math.max(i.empT,1.2),e.onItemHit(t,i,"plasma"))}reflect(t,e,i){t.isPlayer&&this.race.flag("mirror"),i==="plasma"||i==="emp"?this.firePlasma(t,e,0,"reflect"):e.hit(i,t)}orbitalRelease(t){let e=t.orbital?t.orbital.n:0;for(let n=0;n<e;n++)this.firePlasma(t,this.targetAhead(t,1+n),(n-.5)*2);let i=this.orbitMeshes.get(t);i&&(this.scene.remove(i),this.orbitMeshes.delete(t))}update(t){let e=this.race,i=e.track;for(let n of this.projectiles){if(n.life-=t,n.life<=0)continue;if(n.type==="bomb"){n.dist+=n.v*t,n.vy-=26*t,n.h+=n.vy*t,n.h<=.5&&(n.life=0,this.fields.push({owner:n.owner,dist:n.dist,life:3.5*n.P,mesh:this._fieldMesh(n.dist,n.x),x:n.x}),e.fx.empField(n));continue}let s=n.target;n.dist+=n.v*t,s&&s.state==="race"?(n.x=De(n.x,s.x,n.home,t),n.h=De(n.h,s.h+1.1,4,t)):n.h=De(n.h,1.2,3,t),n.x=ne(n.x,-me+1,me-1);for(let a of e.racers){if(a===n.owner||a.state!=="race"||a.finished&&!a.isPlayer)continue;let o=e.wrapDiff(a.dist,n.dist);if(Math.abs(o)<1.7&&Math.abs(a.x-n.x)<2&&Math.abs(a.h+1-n.h)<2.5){if(a===s&&a.dashT>0&&!n.missed){n.missed=!0,n.target=null,n.x+=Math.sign(n.x-a.x||1)*3,e.onEvade(a);continue}n.life=0,a.hit("plasma",n.owner)&&e.onItemHit(n.owner,a,n.type==="seeker"?"trap":"plasma",n.tag),e.fx.explode(n.mesh.position,7002367);break}}if(n.life>0){for(let a of this.traps)if(!(a.burn||a.life<=0)&&Math.abs(e.wrapDiff(a.dist,n.dist))<1.5&&Math.abs(a.x-n.x)<1.8){a.life=0,n.life=0,e.fx.explode(n.mesh.position,16756782);break}}n.type==="plasma"&&s&&e.wrapDiff(n.dist,s.dist)>30&&(n.target=null)}for(let n of this.traps)if(n.life-=t,n.arm-=t,!(n.life<=0)){for(let s of e.racers)if(!(s.state!=="race"||s.air&&s.h>1.6)&&!(s===n.owner&&(n.arm>0||n.burn))&&Math.abs(e.wrapDiff(s.dist,n.dist))<1.6&&Math.abs(s.x-n.x)<(n.burn?1.9:1.7)&&(n.burn?s.empT<=.1&&s.emp(.7,n.owner)&&e.onItemHit(n.owner,s,"emp"):(n.life=0,s.hit("trap",n.owner)&&e.onItemHit(n.owner,s,"trap"),e.fx.explode(n.mesh.position,16756782)),!n.burn))break}this._hazards(t);for(let n of this.fields){n.life-=t;for(let s of e.racers)s===n.owner||s.state!=="race"||Math.abs(e.wrapDiff(s.dist,n.dist))<8&&s.empT<.2&&s.emp(.6,n.owner)&&e.onItemHit(n.owner,s,"emp");n.mesh.material.opacity=.35+Math.sin(e.time*20)*.15,n.life<=0&&this.scene.remove(n.mesh)}for(let n of e.racers)if(n.state==="race"&&(n.shockT>0||n.cometT>0))for(let s of e.racers){if(s===n||s.state!=="race")continue;let a=e.relDist(s,n),o=s.x-n.x;n.shockT>0&&!n.shockHit.has(s)&&Math.hypot(a,o)<8&&(n.shockHit.add(s),s.emp(1.2,n)&&e.onItemHit(n,s,"emp"),e.fx.zap(s)),n.cometT>0&&Math.abs(a)<2.6&&Math.abs(o)<2.4&&s.hit("comet",n,{dur:1})&&e.onItemHit(n,s,"plasma")}this.projectiles=this.projectiles.filter(n=>n.life<=0?(this.scene.remove(n.mesh),!1):!0),this.traps=this.traps.filter(n=>n.life<=0?(this.scene.remove(n.mesh),!1):!0),this.fields=this.fields.filter(n=>n.life>0);for(let n of this.beams)n.life-=t,n.mesh.material.opacity=Math.max(0,n.life/.35),n.life<=0&&this.scene.remove(n.mesh);this.beams=this.beams.filter(n=>n.life>0);for(let n of this.rings){n.life-=t;let s=1-n.life/n.max;n.mesh.scale.setScalar(.5+s*n.radius),n.mesh.material.opacity=(1-s)*.9,n.life<=0&&this.scene.remove(n.mesh)}this.rings=this.rings.filter(n=>n.life>0)}_hazards(t){let e=this.race,i=e.track;for(let n of i.hazards)for(let s of e.racers)if(!(s.state!=="race"||s.phaseT>0)){if(n.type==="barrier"){let a=e.wrapDiff(s.dist,n.s);if(Math.abs(a)<1.5&&Math.abs(s.x-n.x)<n.w/2+.9&&s.h<2.4){if(s.hitCdBarrier>e.time)continue;s.hitCdBarrier=e.time+.8,s.shield?s.hit("barrier",null):(s.speed*=.35,s.dist-=Math.sign(a||1)*.6+.8,s.vx+=Math.sign(s.x-n.x||1)*8,s.wobble=.6,s.rs.wallHits++,e.fx.wall(s,0,30))}}else if(n.type==="firewall"&&n.active){let a=e.wrapDiff(s.dist,n.s);if(Math.abs(a)<1&&Math.sign(s.x||.01)===n.side&&s.h<4.5){if(s.hitCdFire>e.time)continue;s.hitCdFire=e.time+1,s.hit("firewall",null,{dur:.9,keep:.6})}}else if(n.type==="mine")for(let a of n.mines)a.active&&Math.abs(e.wrapDiff(s.dist,a.s))<1.5&&Math.abs(s.x-a.x)<1.7&&s.h<1.8&&(a.active=!1,a.t=6,a.mesh.visible=!1,s.hit("trap",null),e.fx.explode(a.mesh.position,16722490));else if(n.type==="pulse"&&n.on){let a=e.wrapDiff(s.dist,n.s);a>0&&a<n.len&&!s.air&&s.empT<.3&&s.emp(.7,null)}}}_fieldMesh(t,e){let i=new dt(new xi(8,16,8,0,Math.PI*2,0,Math.PI/2),new Ut({color:12159999,transparent:!0,opacity:.4,blending:_e,depthWrite:!1,wireframe:!0})),n=this.race.track.frame(t,Ra);return i.position.copy(n.pos).addScaledVector(n.r,e),this.scene.add(i),i}addRing(t,e,i,n=.5){let s=new dt(new Si(1,.25,6,32),new Ut({color:e,transparent:!0,blending:_e,depthWrite:!1}));s.position.copy(t),s.rotation.x=Math.PI/2,this.scene.add(s),this.rings.push({mesh:s,life:n,max:n,radius:i})}addBeam(t,e,i){let n=new Jt().setFromPoints([t,e]),s=new Kr(new Bs(t.clone(),e.clone()),1,.35,6,!1),a=new dt(s,new Ut({color:i,transparent:!0,blending:_e,depthWrite:!1}));this.scene.add(a),this.beams.push({mesh:a,life:.35})}render(t){let e=this.race,i=e.track,n=(s,a=0)=>{i.frame(s.dist,Ra),s.mesh.position.copy(Ra.pos).addScaledVector(Ra.r,s.x).addScaledVector(Ra.u,s.h+a)};for(let s of this.projectiles)n(s),s.mesh.userData.rings?(s.mesh.userData.rings[0].rotation.y+=t*9,s.mesh.userData.rings[1].rotation.z+=t*7):s.mesh.rotation.y+=t*8,Math.random()<.6&&e.particles.emit(s.mesh.position,new R((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),s.type==="plasma"?7002367:16756782,.9,.35);for(let s of this.traps)n(s),s.burn?(s.mesh.material.opacity=Math.min(1,s.life),s.mesh.scale.y=3+Math.sin(e.time*30+s.dist)*.8):(s.mesh.rotation.y+=t*4,s.mesh.children[1].rotation.x+=t*3,Math.random()<.15&&e.particles.emit(s.mesh.position,new R((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4),16756782,.5,.3));for(let s of e.racers)if(s.orbital&&s.orbital.n>0){let a=this.orbitMeshes.get(s);if(!a){a=new Te;for(let o=0;o<2;o++){let l=wf(8060927);l.scale.setScalar(.6),a.add(l)}this.scene.add(a),this.orbitMeshes.set(s,a)}a.position.copy(s.worldPos).addScaledVector(s.worldUp,1.2),a.children.forEach((o,l)=>{o.visible=l<s.orbital.n;let c=e.time*4+l*Math.PI;o.position.set(Math.cos(c)*2.4,0,Math.sin(c)*2.4)})}else this.orbitMeshes.has(s)&&(this.scene.remove(this.orbitMeshes.get(s)),this.orbitMeshes.delete(s))}dispose(){for(let t of this.projectiles)this.scene.remove(t.mesh);for(let t of this.traps)this.scene.remove(t.mesh);for(let t of this.fields)this.scene.remove(t.mesh);for(let[,t]of this.orbitMeshes)this.scene.remove(t)}};var zi=new R,ls=new R,Ji={pos:new R,t:new R,r:new R,u:new R,k:0},ac=class{constructor(t,e){this.game=t,this.opts=e,this.mode=e.mode,this.clock=e.clock,this.cup=si[e.cup],this.def=this.cup.tracks[e.track],this.scene=new Vn,this.camera=new $e(72,16/9,.3,2600),this.time=-4.2,this.started=!1,this.over=!1,this.paused=!1,this.finishCount=0,this.camMode=t.settings.camera||"chase",this.shake=0,this.lookBack=!1,this.flags={},this.st=sv(),this.feed=[],this.barrageHits=0,this.barrageT=0;let i=t.quality;this.track=new nr(this.cup,this.def),this.track.build(this.scene,i),this.scene.add(new Kn(10471679,2101296,1.4));let n=new qi(16777215,1.6);n.position.set(.3,1,.4),this.scene.add(n);let s=new qi(this.cup.pal.a,1.2);s.position.set(-.5,.3,-1),this.scene.add(s),this.particles=new ec(this.scene,i>0?2e3:1100),this.items=new rc(this),this.racers=[],this.ai=[];let a=e.player;(this.mode==="tt"?[a.char]:e.grid).forEach((l,c)=>{let h=We.find(x=>x.id===l),u=l===a.char,d=Math.floor(c/2),f=c%2,p=new nc(this,{idx:c,char:h,cls:u?a.cls:h.cls,isPlayer:u,dist:-6-d*7-f*2.5,x:(f?1:-1)*4.5+(d%2?1.5:-1.5),paint:u?a.paint:1382442+c*197379,neon:u?a.neon:null,trail:u?a.trail:"std",upgrades:u?a.upgrades:nv(this.clock.id),aiSkill:.9+Math.random()*.12});this.racers.push(p),u?this.player=p:this.ai.push(new Aa(p,this,ne(this.clock.ai*(.9+Math.random()*.15),.6,1.05)))}),this.mode==="tt"?this.player.items=["surge","surge"]:this.player.mods.startItem&&(this.player.items[0]=this.player.mods.startItem);for(let l of this.racers)!l.isPlayer&&l.mods.startItem&&(l.items[0]=l.mods.startItem);this.camPos=new R,this.camLook=new R,this.camInit=!1,this.fov=72,this.rocket={pressedAt:null,early:!1},this.racers.forEach(l=>l.render(0)),this.updatePlaces(),this.fx=rv(this)}wrapDiff(t,e){let i=this.track.L;return Je(t-e+i/2,i)-i/2}relDist(t,e){return this.wrapDiff(t.dist,e.dist)}assist(t){return t.isPlayer?this.game.settings.assist!==!1:!0}rubber(t){if(t.isPlayer||this.mode==="tt")return 1;let e=t.dist-this.player.dist,i=this.clock.id===2?.5:1;return e>120?1-.05*i:e<-150?1+.07*i:1}flag(t){this.flags[t]||(this.flags[t]=!0,this.game.achFlag(t))}onDriftBoost(t,e){t.isPlayer&&(this.st.driftBoosts++,this.st["drift"+e]++,this.st.bits+=e*10)}onLand(t,e,i){t.isPlayer&&(this.st.air+=e,e>=1.5&&this.flag("air2"),i&&(this.st.lands++,this.st.bits+=15,this.fx.text("PERFECT LANDING","#7affff")),this.game.haptic(20,120))}onPad(t){t.isPlayer&&this.st.pads++}onSlip(t){t.isPlayer&&(this.st.slips++,this.st.bits+=10,this.fx.text("SLIPSTREAM","#bfe8ff"))}onPickup(t,e){t.isPlayer&&this.game.audio.sfx("pickup")}onItemUse(t,e){t.isPlayer&&(this.st.itemsUsed++,e==="surge"&&this.st.surges++,e==="barrage"&&(this.barrageHits=0,this.barrageT=6),Nh.includes(e)&&(this.st.fuseMask|=1<<Nh.indexOf(e)))}onFuse(t,e){t.isPlayer&&(this.st.fusions++,this.fx.text("FUSED: "+Qs(e).name,Qs(e).color),this.game.audio.sfx("fuse"),this.game.haptic(40,160))}onItemHit(t,e,i,n){t&&(t.isPlayer?(i==="plasma"&&this.st.plasmaHits++,i==="trap"&&this.st.trapHits++,i==="emp"&&this.st.empHits++,this.st.bits+=25,n==="barrage"&&this.barrageT>0&&++this.barrageHits>=3&&this.flag("barrage3"),this.feedMsg(`${Af(i)} \u25B8 ${e.name}`,"#7affff")):e.isPlayer&&this.feedMsg(`${t.name} \u25B8 ${Af(i)}`,"#ff6080"))}onMelee(t,e,i){t.isPlayer&&(this.st.meleeHits++,this.st.bits+=15,i&&this.flag("tailwhip"))}onKnockoff(t,e){t.isPlayer&&(this.st.knockoffs++,this.st.bits+=60,this.fx.text("KNOCKED OFF: "+e.name,"#ff9f40")),this.feedMsg(`${t.name} \u21E2 shoved ${e.name} off`,t.isPlayer?"#ffb340":"#ff6080")}onEvade(t){t.isPlayer&&(this.st.evades++,this.fx.text("EVADED!","#9ffcff"))}onBlock(t){t.isPlayer&&this.st.blocks++}feedMsg(t,e){this.game.hud.feed(t,e)}stats={distance:(t,e)=>{t.isPlayer&&(this.st.distance+=e)}};update(t){if(this.paused)return;let e=this.time;this.time+=t;let i=this.game,n=this.player;if(!this.started){let a=i.input.state.throttle>.5||i.settings.autoAccel;a&&this.rocket.pressedAt===null&&(this.rocket.pressedAt=this.time),a||(this.rocket.pressedAt=null);let o=Math.ceil(-this.time),l=Math.ceil(-e);if(o!==l&&o>=0&&o<=3&&(i.hud.countdown(o===0?"GO!":String(o)),i.audio.sfx(o===0?"go":"beep")),this.time>=0){this.started=!0;let c=this.rocket.pressedAt;c!==null&&!i.settings.autoAccel&&(c>=-.65&&c<=-.05?(n.boost(1.2,1.3),this.st.rockets++,this.st.bits+=50,this.fx.text("ROCKET START!","#ffb340"),i.haptic(60,200)):c<-1.6&&(n.stallT=.9,this.fx.text("ENGINE STALL","#ff5060")));for(let h of this.ai)Math.random()<h.skill*.6&&h.r.boost(1,1.25);this.raceStart=performance.now()}}n.finished||i.input.applyTo(n.inp,this);for(let s of this.ai)s.update(t);n.finished&&this.autopilot&&this.autopilot.update(t);for(let s of this.racers)s.step(t);this.collide(),this.items.update(t),this.track.update(t),this.barrageT>0&&(this.barrageT-=t);for(let s of this.racers)this.lapCheck(s);this.updatePlaces(),this.started&&this.time>15&&n.place===this.racers.length&&this.racers.length>1&&(n.rs.wasLast=!0),n.finished&&!this.over&&(this.endT=(this.endT||0)+t,(this.endT>4.5||this.racers.every(s=>s.finished))&&this.finishRace())}lapCheck(t){let e=this.track.L,i=Math.floor(t.dist/e);if(!t.finished&&i>t.lap){if(i>=1){let n=this.time-t.lapStart;t.lapTimes.push(n),t.bestLap=Math.min(t.bestLap,n),t.isPlayer&&(t.place!==1&&this.mode!=="tt"&&(t.rs.ledAll=!1),i<3&&(this.game.hud.banner(i===2?"FINAL LAP":`LAP ${i+1}/${3}`),this.game.audio.sfx(i===2?"final":"lap")))}t.lap=i,t.lapStart=this.time,i>=3&&(t.finished=!0,t.finishTime=this.time,t.place=++this.finishCount,t.order=this.finishCount,t.isPlayer&&this.onPlayerFinish())}}onPlayerFinish(){let t=this.player;if(this.game.hud.banner(this.mode==="tt"?"TIME!":t.place===1?"VICTORY!":`FINISHED ${t.place}${["st","nd","rd"][t.place-1]||"th"}`,!0),this.game.audio.sfx(t.place<=3?"win":"finish"),this.autopilot=new Aa(t,this,.9),t.place===1&&this.mode!=="tt"){let e=this.racers.find(n=>n!==t&&!n.finished&&!0),i=1/0;for(let n of this.racers)if(n!==t){let s=3*this.track.L-n.dist;i=Math.min(i,s/Math.max(20,n.speed))}this.margin=i}}finishRace(){this.over=!0;let t=this.track.L;this.racers.filter(a=>!a.finished).map(a=>({r:a,t:this.time+(3*t-a.dist)/Math.max(25,a.top*.85)})).sort((a,o)=>a.t-o.t).forEach(({r:a,t:o})=>{a.finished=!0,a.finishTime=o,a.place=++this.finishCount});let i=[...this.racers].sort((a,o)=>a.place-o.place),n=this.player,s={mode:this.mode,cup:this.opts.cup,track:this.opts.track,clock:this.clock.id,order:i.map((a,o)=>({id:a.char.id,name:a.name,cls:a.clsId,time:a.finishTime,place:o+1,pts:this.mode==="tt"?0:Yl[o],isPlayer:a.isPlayer,color:a.char.color})),place:n.place,time:n.finishTime,bestLap:n.bestLap,lapTimes:n.lapTimes,st:this.st,rs:n.rs,flags:this.flags,margin:this.margin??99};s.st.bits+=this.mode==="tt"?150:pf[n.place-1],s.bits=Math.round(s.st.bits*this.clock.bits),this.game.onRaceEnd(this,s)}updatePlaces(){let t=i=>i.finished?1e9-i.order:i.dist,e=[...this.racers].sort((i,n)=>t(n)-t(i));e.forEach((i,n)=>{i.finished||(i.place=n+1)}),this.order=e}collide(){let t=this.racers;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],s=t[i];if(n.state!=="race"||s.state!=="race")continue;let a=this.wrapDiff(s.dist,n.dist),o=s.x-n.x;if(Math.abs(a)>2.6||Math.abs(o)>1.9||Math.abs(n.h-s.h)>1.6)continue;let l=n.clsId==="bike"?.75:1,c=s.clsId==="bike"?.75:1,h=1.9*(l+c)/2-Math.abs(o);if(h<=0)continue;let u=Math.sign(o)||1,d=n.mass,f=s.mass,p=d+f;if(Math.abs(a)<1.6)n.x-=u*h*(f/p),s.x+=u*h*(d/p),n.vx-=u*2.5*(f/p),s.vx+=u*2.5*(d/p);else{let x=a>0?n:s,m=a>0?s:n;if(x.speed>m.speed){let g=x.speed-m.speed;x.speed-=g*.6,m.speed+=g*.25}x.dist-=.05}if(n.isPlayer||s.isPlayer){let x=n.isPlayer?n:s;(!x._bumpT||x._bumpT<this.time)&&(x._bumpT=this.time+.35,this.game.haptic(15,90),this.fx.sparks(zi.addVectors(n.worldPos,s.worldPos).multiplyScalar(.5),16765056,8))}for(let[x,m]of[[n,s],[s,n]])x.staticT>0&&x.shield&&m.empT<=0&&m.emp(1.2,x)&&this.onItemHit(x,m,"emp")}}render(t,e){let i=this.player;for(let n of this.racers)n.render(t);this.items.render(t),this.continuousFx(t),this.particles.update(t),this.updateCamera(t,e),this.track.sky.position.copy(this.camera.position),this.track.stars.position.copy(this.camera.position)}continuousFx(t){let e=this.particles;for(let i of this.racers){if(i.state!=="race"||!(i.isPlayer||i.worldPos.distanceToSquared(this.camera.position)<14400))continue;let s=zi.copy(i.worldFwd).multiplyScalar(-1.6).add(i.worldPos);if(i.drift.on&&!i.air){let a=sc[i.drift.level];Ji.r.crossVectors(i.worldFwd,i.worldUp);for(let o of[-1,1])ls.copy(s).addScaledVector(Ji.r,o*.9).addScaledVector(i.worldUp,.2),e.emit(ls,new R((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6).addScaledVector(i.worldFwd,-3),a,i.drift.level?.7:.35,.3,12)}if(i.boostT>0)for(let a=0;a<2;a++)e.emit(ls.copy(s).addScaledVector(i.worldUp,.6),new R((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3).addScaledVector(i.worldFwd,-12),Math.random()<.5?16747034:16769162,1.1,.35);i.empT>0&&Math.random()<.7&&e.emit(ls.copy(i.worldPos).add(new R((Math.random()-.5)*3,Math.random()*2.5,(Math.random()-.5)*3)),new R(0,2,0),12159999,.8,.2),i.slipT>.2&&i.isPlayer&&Math.random()<.5&&e.emit(ls.copy(i.worldPos).add(new R((Math.random()-.5)*5,Math.random()*3,(Math.random()-.5)*5)).addScaledVector(i.worldFwd,4),zi.copy(i.worldFwd).multiplyScalar(-30),13626111,.25,.3),(i.cometT>0||i.phaseT>0)&&e.burst(i.worldPos,i.cometT>0?16752448:10484991,2,4,1.2,.3)}}updateCamera(t,e){let i=this.player,n=this.camera;this.track.frame(i.dist,Ji);let a=Ji.u,o=ne(i.speed/i.top,0,1.5),l,c,h=i.worldPos;if(this.camMode==="iso"){let f=Ji.r;l=zi.copy(h).addScaledVector(Ji.t,-17-o*4).addScaledVector(f,-9).add(new R(0,24,0)),c=ls.copy(h).addScaledVector(Ji.t,10),this.fov=De(this.fov,50,3,t)}else{let f=new R().copy(Ji.t).lerp(i.worldFwd,i.spinT>0?0:.35).normalize(),p=7.2+o*1.6;l=zi.copy(h).addScaledVector(f,this.lookBack?p:-p).addScaledVector(a,3+(i.air?.6:0)),c=ls.copy(h).addScaledVector(f,this.lookBack?-8:7).addScaledVector(a,1.4);let x=i.boostT>0?10:0;this.fov=De(this.fov,68+o*10+x,4,t)}this.camInit||(this.camPos.copy(l),this.camLook.copy(c),this.camInit=!0);let u=this.camMode==="iso"?5:9;this.camPos.x=De(this.camPos.x,l.x,u,t),this.camPos.y=De(this.camPos.y,l.y,u*.8,t),this.camPos.z=De(this.camPos.z,l.z,u,t),i.state==="fall"||this.camLook.lerp(c,1-Math.exp(-14*t)),n.position.copy(this.camPos),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),n.position.add(new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(this.shake*.9))),n.up.copy(this.camMode==="iso"?new R(0,1,0):a),n.lookAt(this.camLook);let d=e<1.25;n.fov=this.fov+(d?10:0),n.aspect=e,n.updateProjectionMatrix()}dispose(){this.items.dispose();for(let t of this.racers)t.dispose();this.particles.dispose(this.scene),this.track.dispose(this.scene),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function Af(r){return{plasma:"PLASMA",trap:"TRAP",emp:"EMP",melee:"MELEE",comet:"COMET"}[r]||r.toUpperCase()}function nv(r){let t=r;return{engine:[0,0,2][t],turbo:t,grip:t,armor:t,capacitor:t}}function sv(){return{driftBoosts:0,drift1:0,drift2:0,drift3:0,slips:0,pads:0,air:0,lands:0,plasmaHits:0,trapHits:0,empHits:0,blocks:0,surges:0,fusions:0,fuseMask:0,meleeHits:0,knockoffs:0,evades:0,distance:0,rockets:0,itemsUsed:0,bits:0}}function rv(r){let t=r.game,e=r.particles,i=s=>s.isPlayer||s.worldPos.distanceTo(r.camera.position)<90,n=s=>s.isPlayer?1:ne(1-s.worldPos.distanceTo(r.camera.position)/90,0,.6);return{text(s,a){t.hud.pop(s,a)},sparks(s,a,o){e.burst(s,a,o,10,.6,.4,18)},boost(s){s.isPlayer&&(t.audio.sfx("boost"),t.haptic(25,120))},block(s,a){r.onBlock(s),i(s)&&(e.burst(s.worldPos,5111795,30,12,.9,.5),t.audio.sfx("block",n(s))),s.isPlayer&&t.hud.pop("BLOCKED","#4dfff3")},hit(s,a,o){i(s)&&(e.burst(zi.copy(s.worldPos).addScaledVector(s.worldUp,1),16742970,40,16,1,.6,10),e.burst(s.worldPos,16777215,10,8,1.6,.25),t.audio.sfx("hit",n(s))),s.isPlayer&&(r.shake=1,t.haptic(120,255))},emp(s){i(s)&&(e.burst(zi.copy(s.worldPos).addScaledVector(s.worldUp,1),12159999,30,10,.8,.5),t.audio.sfx("zap",n(s))),s.isPlayer&&(r.shake=.5,t.haptic(80,180),t.hud.glitch(.6))},zap(s){e.burst(s.worldPos,12159999,16,8,.7,.4)},fall(s){i(s)&&(e.burst(s.worldPos,s.neonColor,50,9,.8,.9,-4),t.audio.sfx("derez",n(s))),s.isPlayer&&(t.hud.pop("DEREZZED","#ff5060"),t.haptic(150,200))},respawn(s){e.burst(s.worldPos,16777215,30,6,.8,.6,-6)},melee(s,a,o){let l=zi.addVectors(s.worldPos,a.worldPos).multiplyScalar(.5).addScaledVector(s.worldUp,.8);e.burst(l,16760928,o?70:40,o?22:16,.8,.5,20),e.burst(l,16777215,12,10,1.4,.2),(i(s)||i(a))&&t.audio.sfx("clang",Math.max(n(s),n(a))),s.isPlayer&&(t.hud.pop(o?"OVERDRIVE SLAM!":"SCRAP!","#ffb340"),r.shake=.6,t.haptic(70,255)),a.isPlayer&&(r.shake=.8,t.haptic(90,255))},dash(s){s.isPlayer&&(t.audio.sfx("dash"),t.haptic(30,140)),e.burst(s.worldPos,12578815,14,8,.6,.3)},driftStart(s){s.isPlayer&&t.audio.sfx("driftstart")},driftLevel(s,a){s.isPlayer&&(t.audio.sfx("tick",1,a),t.haptic(12+a*8,120+a*40))},wall(s,a,o){i(s)&&(Ji.r.crossVectors(s.worldFwd,s.worldUp),e.burst(zi.copy(s.worldPos).addScaledVector(Ji.r,a*1.1).addScaledVector(s.worldUp,.5),16765056,Math.min(30,4+o),9,.5,.35,20)),s.isPlayer&&(t.audio.sfx("scrape",ne(o/30,.2,1)),t.haptic(20+Math.min(60,o*2),160),o>15&&(r.shake=.35))},launch(s){s.isPlayer&&t.audio.sfx("launch")},capsule(s,a){i(s)&&e.burst(s.worldPos,r.cup.pal.a,24,9,.7,.5)},fire(s,a){i(s)&&t.audio.sfx(a==="plasma"?"shoot":a==="emp"?"zap":"drop",n(s))},shieldUp(s){s.isPlayer&&t.audio.sfx("shield")},surge(s){i(s)&&e.burst(s.worldPos,16747034,30,12,1,.4)},empBlast(s,a,o){r.items.addRing(zi.copy(s.worldPos).addScaledVector(s.worldUp,.6),o?10775551:12159999,Math.min(a,40),o?.9:.5),e.burst(s.worldPos,13676799,o?120:60,o?30:18,1,.6),i(s)&&t.audio.sfx("emp",n(s)),s.isPlayer&&(r.shake=.4,t.haptic(90,200))},empField(s){t.audio.sfx("zap",.6)},beam(s,a){let o=zi.copy(s.worldPos).addScaledVector(s.worldUp,1).clone(),l=a?a.worldPos.clone().addScaledVector(a.worldUp,1):o.clone().addScaledVector(s.worldFwd,100);r.items.addBeam(o,l,10466559),t.audio.sfx("laser",n(s))},explode(s,a){e.burst(s,a,40,14,1,.55,8)},scramble(){t.hud.glitch(2.5)}}}var te={A:96,B:97,X:99,Y:100,L1:102,R1:103,L2:104,R2:105,LS:106,RS:107,START:108,SELECT:109,MODE:110,UP:19,DOWN:20,LEFT:21,RIGHT:22,CENTER:23,ENTER:66,ESC:111},oc=class{constructor(t){this.game=t,this.state={steer:0,throttle:0,brake:0,drift:!1,lookBack:!1},this.edges={item:!1,melee:!1,fuse:!1,drift:!1,camera:!1,pause:!1},this.keys=new Set,this.pad={keys:new Set,axes:[0,0,0,0,0,0,0,0],active:!1,lastT:0},this.touch={steer:0,accel:!1,brake:!1,drift:!1,held:new Map},this.tilt=0,this.onNav=null,this.lastDevice="touch",this._navRepeat={},this._bind()}_bind(){window.addEventListener("keydown",t=>{if(t.repeat)return;this.keys.add(t.code),this.lastDevice="keys";let e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"ok",Space:"ok",Escape:"back",Backspace:"back"}[t.code];e&&this._nav(e,t),(t.code==="KeyK"||t.code==="KeyE")&&(this.edges.item=!0),(t.code==="KeyL"||t.code==="KeyQ")&&(this.edges.melee=!0),t.code==="KeyF"&&(this.edges.fuse=!0),t.code==="KeyC"&&(this.edges.camera=!0),t.code==="KeyP"&&(this.edges.pause=!0),(t.code==="Space"||t.code==="ShiftLeft"||t.code==="KeyJ")&&(this.edges.drift=!0)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),window.NCR_padKey=(t,e)=>{this.pad.active=!0,this.lastDevice="pad",e?(this.pad.keys.add(t),this._padEdge(t)):this.pad.keys.delete(t)},window.NCR_padAxes=t=>{this.pad.active=!0,this.lastDevice="pad";let e=this.pad.axes;this.pad.axes=t,this._axisNav(t[6],e[6],"left","right"),this._axisNav(t[7],e[7],"up","down"),this._axisNav(t[0],e[0],"left","right",.6),this._axisNav(t[1],e[1],"up","down",.6),t[4]>.5&&e[4]<=.5&&this.pad.keys.add("LT"),t[4]<.4&&this.pad.keys.delete("LT")},window.addEventListener("deviceorientation",t=>{if(t.gamma==null)return;let e=screen.orientation&&screen.orientation.angle||window.orientation||0,i=Math.abs(e)===90?t.beta*(e===90?1:-1):t.gamma;this.tilt=ne(i/22,-1,1)})}_padEdge(t){let e=this.game;switch(t){case te.L1:case te.X:this.edges.item=!0;break;case te.B:this.edges.melee=!0;break;case te.Y:this.edges.fuse=!0;break;case te.R1:this.edges.drift=!0;break;case te.RS:case te.SELECT:this.edges.camera=!0;break;case te.START:this._nav("start");break}let i={[te.UP]:"up",[te.DOWN]:"down",[te.LEFT]:"left",[te.RIGHT]:"right",[te.A]:"ok",[te.CENTER]:"ok",[te.ENTER]:"ok",[te.B]:"back",[te.ESC]:"back"}[t];i&&this._nav(i),t===te.L2&&this._nav("prev"),t===te.R2&&this._nav("next")}_axisNav(t,e,i,n,s=.5){t<-s&&!(e<-s)&&this._nav(i),t>s&&!(e>s)&&this._nav(n)}_nav(t,e){this.onNav&&this.onNav(t,e?"key":"pad")&&e&&e.preventDefault()}pollGamepads(){let t=navigator.getGamepads?navigator.getGamepads():[],e=t&&[...t].find(h=>h&&h.connected);if(!e)return;let i=h=>e.buttons[h]&&(e.buttons[h].pressed||e.buttons[h].value>.5),n=this._gpPrev||[],s=e.buttons.map((h,u)=>i(u)),a=h=>s[h]&&!n[h];(s.some(h=>h)||Math.abs(e.axes[0])>.3)&&(this.pad.active=!0,this.lastDevice="pad");let o={0:te.A,1:te.B,2:te.X,3:te.Y,4:te.L1,5:te.R1,8:te.SELECT,9:te.START,11:te.RS,12:te.UP,13:te.DOWN,14:te.LEFT,15:te.RIGHT};for(let h in o)a(+h)&&(this.pad.keys.add(o[h]),this._padEdge(o[h])),!s[+h]&&n[+h]&&this.pad.keys.delete(o[h]);let l=[e.axes[0]||0,e.axes[1]||0,e.axes[2]||0,e.axes[3]||0,e.buttons[6]?e.buttons[6].value:0,e.buttons[7]?e.buttons[7].value:0,0,0],c=this.pad.axes;this._axisNav(l[0],this._gpAx0||0,"left","right",.6),this._axisNav(l[1],this._gpAx1||0,"up","down",.6),this._gpAx0=l[0],this._gpAx1=l[1],this.pad.axes=l,this._gpPrev=s}update(){this.pollGamepads();let t=this.lastDevice==="pad";t!==this._wasPad&&(this._wasPad=t,document.body.classList.toggle("pad",t));let e=this.keys,i=this.pad.keys,n=this.pad.axes,s=this.touch,a=this.state,o=this.game.settings,l=0;(e.has("ArrowLeft")||e.has("KeyA"))&&(l-=1),(e.has("ArrowRight")||e.has("KeyD"))&&(l+=1);let c=Math.abs(n[0])>.12?(n[0]-Math.sign(n[0])*.12)/.88:0;l+=c,(i.has(te.LEFT)||n[6]<-.5)&&(l-=1),(i.has(te.RIGHT)||n[6]>.5)&&(l+=1),o.steerMode==="tilt"&&this.lastDevice==="touch"?l+=this.tilt:l+=s.steer,l=ne(l,-1,1),a.steer=Math.sign(l)*Math.pow(Math.abs(l),1.25);let h=Math.max(n[5]||0,i.has(te.A)||i.has(te.R2)?1:0),u=e.has("ArrowUp")||e.has("KeyW")?1:0,d=Math.max(n[4]||0,i.has(te.L2)||i.has("LT")?1:0,e.has("ArrowDown")||e.has("KeyS")?1:0,s.brake?1:0),f=Math.max(h,u,s.accel?1:0);o.autoAccel&&this.lastDevice==="touch"&&(f=1),a.throttle=d>.3?0:f,a.brake=d,a.drift=i.has(te.R1)||e.has("Space")||e.has("ShiftLeft")||e.has("KeyJ")||s.drift,a.lookBack=e.has("KeyB")||i.has(te.LS)||Math.abs(n[3]||0)>.7&&n[3]>0}applyTo(t,e){let i=this.state,n=this.edges;t.steer=i.steer,t.throttle=i.throttle,t.brake=i.brake,t.drift=i.drift,n.drift&&(t.driftPressed=!0),n.item&&(t.item=!0),n.melee&&(t.melee=!0),n.fuse&&(t.fuse=!0),e.lookBack=i.lookBack,n.camera&&(e.camMode=e.camMode==="chase"?"iso":"chase",this.game.settings.camera=e.camMode,this.game.saveSettings())}clearEdges(){for(let t in this.edges)this.edges[t]=!1}buildTouch(t){t.innerHTML=`
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
    `,this.troot=t;let e=t.querySelector(".stick"),i=e.querySelector(".knob"),n=this.touch.held,s=(h,u)=>{let d=document.elementFromPoint(h,u);return d&&d.closest?d.closest(".tbtn"):null},a=h=>{let u=n.get(h);u&&(u.kind==="stick"&&(this.touch.steer=0,e.classList.remove("on")),u.btn&&this._btn(u.btn,!1),n.delete(h))},o=h=>{this.lastDevice="touch",this.game.audio.unlock();let u=h.clientX,d=h.clientY,f=s(u,d);f?(n.set(h.pointerId,{kind:"btn",btn:f.dataset.b}),this._btn(f.dataset.b,!0)):h.target.dataset.zone==="steer"&&this.game.settings.steerMode==="stick"&&(n.set(h.pointerId,{kind:"stick",x0:u,y0:d}),e.style.left=(this.game.settings.leftHanded?innerWidth-u:u)+"px",e.style.top=d+"px",e.classList.add("on"),i.style.transform="translate(-50%,-50%)"),h.preventDefault()},l=h=>{let u=n.get(h.pointerId);if(u){if(u.kind==="stick"){let d=Math.min(innerWidth,innerHeight)*.13,f=ne((h.clientX-u.x0)/d,-1,1);this.touch.steer=Math.abs(f)<.08?0:f,i.style.transform=`translate(calc(-50% + ${f*d*(this.game.settings.leftHanded?-1:1)}px),-50%)`}else{let d=s(h.clientX,h.clientY),f=d?d.dataset.b:null;f!==u.btn&&f&&["accel","drift","brake","left","right"].includes(f)&&["accel","drift","brake","left","right"].includes(u.btn)&&(this._btn(u.btn,!1),u.btn=f,this._btn(f,!0))}h.preventDefault()}},c=h=>{a(h.pointerId),h.preventDefault()};t.addEventListener("pointerdown",o,{passive:!1}),t.addEventListener("pointermove",l,{passive:!1}),t.addEventListener("pointerup",c,{passive:!1}),t.addEventListener("pointercancel",c,{passive:!1}),t.addEventListener("contextmenu",h=>h.preventDefault()),this.applyLayout()}_btn(t,e){let i=this.touch,n=this.troot.querySelector(`[data-b="${t}"]`);switch(n&&n.classList.toggle("on",e),e&&this.game.haptic(8,60),t){case"accel":i.accel=e;break;case"brake":i.brake=e;break;case"drift":i.drift=e,e&&(this.edges.drift=!0);break;case"left":i.steer=e?-1:this._held("right")?1:0;break;case"right":i.steer=e?1:this._held("left")?-1:0;break;case"item":e&&(this.edges.item=!0);break;case"melee":e&&(this.edges.melee=!0);break;case"fuse":e&&(this.edges.fuse=!0);break}}_held(t){for(let[,e]of this.touch.held)if(e.btn===t)return!0;return!1}applyLayout(){if(!this.troot)return;let t=this.game.settings,e=this.troot;e.classList.toggle("mode-stick",t.steerMode==="stick"),e.classList.toggle("mode-buttons",t.steerMode==="buttons"),e.classList.toggle("mode-tilt",t.steerMode==="tilt"),e.classList.toggle("auto",!!t.autoAccel),e.classList.toggle("lefty",!!t.leftHanded),e.style.setProperty("--bs",(t.buttonScale||1).toFixed(2)),e.style.setProperty("--bo",(t.buttonOpacity??.55).toFixed(2))}};var lc=class{constructor(t){this.game=t,this.ctx=null,this.enabled=!0,this.musicOn=!1,this.step=0,this.nextT=0,this.timer=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t({latencyHint:"interactive"});this.master=e.createGain(),this.master.connect(e.destination);let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,i.connect(this.master),this.bus=i,this.sfxG=e.createGain(),this.sfxG.connect(i),this.musG=e.createGain(),this.musG.connect(i);let n=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;this.noiseBuf=n,this.delay=e.createDelay(1),this.delay.delayTime.value=.28;let a=e.createGain();a.gain.value=.32;let o=e.createGain();o.gain.value=.25,this.delay.connect(a),a.connect(this.delay),this.delay.connect(o),o.connect(this.musG),this.applyVolumes(),this._pendingMusic&&this.music(...this._pendingMusic)}applyVolumes(){if(!this.ctx)return;let t=this.game.settings;this.sfxG.gain.value=t.sfxVol??.8,this.musG.gain.value=(t.musicVol??.5)*.55}suspend(){this.ctx&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.resume()}_osc(t,e,i,n,s,a,o=this.sfxG,l="exp"){let c=this.ctx,h=c.createOscillator(),u=c.createGain();return h.type=t,h.frequency.setValueAtTime(e,n),i!==e&&h.frequency[l==="exp"?"exponentialRampToValueAtTime":"linearRampToValueAtTime"](Math.max(1,i),n+s),u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(a,n+.008),u.gain.exponentialRampToValueAtTime(1e-4,n+s),h.connect(u),u.connect(o),h.start(n),h.stop(n+s+.02),h}_noise(t,e,i,n,s,a,o=1,l=this.sfxG){let c=this.ctx,h=c.createBufferSource(),u=c.createBiquadFilter(),d=c.createGain();h.buffer=this.noiseBuf,u.type=n,u.Q.value=o,u.frequency.setValueAtTime(s,t),u.frequency.exponentialRampToValueAtTime(Math.max(20,a),t+e),d.gain.setValueAtTime(i,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u),u.connect(d),d.connect(l),h.start(t,Math.random()*.5),h.stop(t+e+.02)}sfx(t,e=1,i=0){if(!this.ctx||e<=.01)return;let n=this.ctx.currentTime,s=e;switch(t){case"beep":this._osc("square",660,660,n,.16,.18*s);break;case"go":this._osc("square",990,990,n,.5,.2*s),this._osc("sawtooth",495,500,n,.5,.08*s);break;case"boost":this._noise(n,.55,.35*s,"bandpass",400,3e3,1.5),this._osc("sawtooth",120,420,n,.4,.07*s);break;case"hit":this._noise(n,.5,.6*s,"lowpass",3e3,100),this._osc("sine",160,35,n,.45,.4*s);break;case"zap":for(let a=0;a<4;a++)this._osc("sawtooth",200+Math.random()*1200,60+Math.random()*300,n+a*.04,.08,.08*s);break;case"clang":[310,467,733,1011].forEach((a,o)=>this._osc("square",a,a*.96,n,.25-o*.03,.06*s)),this._noise(n,.2,.35*s,"highpass",2e3,800);break;case"scrape":this._noise(n,.18,.25*s,"bandpass",2500,1800,3);break;case"pickup":[880,1320,1760].forEach((a,o)=>this._osc("sine",a,a,n+o*.05,.12,.12*s));break;case"fuse":[440,554,659,880,1108].forEach((a,o)=>this._osc("triangle",a,a,n+o*.045,.2,.14*s));break;case"shoot":this._osc("sine",1100,260,n,.3,.25*s),this._noise(n,.2,.15*s,"bandpass",3e3,800,2);break;case"drop":this._osc("square",220,110,n,.15,.15*s);break;case"shield":[523,659,784].forEach(a=>this._osc("triangle",a,a*1.01,n,.6,.08*s));break;case"block":this._osc("sine",1800,1700,n,.25,.18*s),this._osc("sine",2700,2600,n,.2,.08*s);break;case"emp":this._osc("sawtooth",600,40,n,.7,.2*s),this._noise(n,.7,.4*s,"lowpass",5e3,200);break;case"laser":this._osc("square",2200,400,n,.3,.12*s);break;case"derez":[880,660,440,330,220].forEach((a,o)=>this._osc("square",a,a,n+o*.07,.1,.09*s));break;case"tick":this._osc("square",500+i*260,500+i*260,n,.08,.12*s);break;case"driftstart":this._noise(n,.25,.14*s,"bandpass",1800,1500,4);break;case"launch":this._osc("sine",200,700,n,.4,.15*s);break;case"dash":this._noise(n,.22,.25*s,"bandpass",800,2400,2);break;case"lap":[660,990].forEach((a,o)=>this._osc("square",a,a,n+o*.12,.14,.14*s));break;case"final":[660,880,1320].forEach((a,o)=>this._osc("square",a,a,n+o*.12,.16,.15*s));break;case"win":[523,659,784,1046,784,1046].forEach((a,o)=>this._osc("square",a,a,n+o*.11,.2,.12*s));break;case"finish":[523,392,523].forEach((a,o)=>this._osc("triangle",a,a,n+o*.15,.22,.14*s));break;case"ui":this._osc("square",1200,1200,n,.04,.06*s);break;case"uiok":this._osc("square",900,1400,n,.09,.08*s);break;case"uiback":this._osc("square",900,500,n,.09,.07*s);break;case"unlock":[523,784,1046,1568].forEach((a,o)=>this._osc("triangle",a,a,n+o*.09,.4,.12*s));break}}engineStart(t){if(!this.ctx||this.eng)return;let e=this.ctx,i=e.createOscillator(),n=e.createOscillator(),s=e.createBiquadFilter(),a=e.createGain();i.type="sawtooth",n.type=t==="bike"?"square":"sawtooth",n.detune.value=t==="quad"?-1200:7,s.type="lowpass",s.frequency.value=600,s.Q.value=4,a.gain.value=0,i.connect(s),n.connect(s),s.connect(a),a.connect(this.sfxG),i.start(),n.start(),this.eng={o1:i,o2:n,f:s,g:a,base:t==="bike"?70:t==="quad"?45:58}}engineUpdate(t,e,i){if(!this.eng)return;let n=this.eng,s=this.ctx.currentTime,a=n.base+t*n.base*2.6+(e?40:0);n.o1.frequency.setTargetAtTime(a,s,.05),n.o2.frequency.setTargetAtTime(a*1.005,s,.05),n.f.frequency.setTargetAtTime(500+t*2200+(e?1200:0),s,.06),n.g.gain.setTargetAtTime(i?.05+t*.05:0,s,.1)}engineStop(){if(!this.eng)return;let t=this.eng;this.eng=null;try{t.g.gain.setTargetAtTime(0,this.ctx.currentTime,.05),t.o1.stop(this.ctx.currentTime+.3),t.o2.stop(this.ctx.currentTime+.3)}catch{}}music(t,e,i=1,n=1){if(!this.ctx){this._pendingMusic=[t,e,i,n];return}this.stopMusic(),this.bpm=t,this.root=e,this.seed=i,this.intensity=n,this.step=0,this.nextT=this.ctx.currentTime+.1;let s=i*9301+49297,a=()=>(s=(s*9301+49297)%233280)/233280,o=[[0,8,3,10],[0,5,8,7],[0,3,8,10],[0,10,8,7]];this.prog=o[Math.floor(a()*o.length)],this.arp=Array.from({length:16},()=>[0,3,7,12,7,3,10,15][Math.floor(a()*8)]),this.leadMask=Array.from({length:16},()=>a()<.55),this.musicOn=!0,this.timer=setInterval(()=>this._schedule(),25)}stopMusic(){this.musicOn=!1,this.timer&&clearInterval(this.timer),this.timer=null}_note(t){return 440*Math.pow(2,(t-69)/12)}_schedule(){if(!this.ctx||!this.musicOn)return;let t=60/this.bpm/4;for(;this.nextT<this.ctx.currentTime+.12;)this._playStep(this.step,this.nextT,t),this.nextT+=t,this.step++}_playStep(t,e,i){let n=t%16,s=Math.floor(t/16)%4,a=this.root+this.prog[s],o=this.intensity,l=this.musG;if(o>.3&&n%4===0&&this._osc("sine",150,40,e,.22,.55,l),o>.3&&(n===4||n===12)&&this._noise(e,.16,.22,"bandpass",1800,1200,.8,l),o>.5&&n%2===1&&this._noise(e,.04,.07,"highpass",8e3,7e3,1,l),n%2===0){let c=a-12+(n%4===2?12:0),h=this._osc("sawtooth",this._note(c),this._note(c),e,i*1.8,.14,l)}if(o>.6&&this.leadMask[n]){let c=a+12+this.arp[n],h=this.ctx,u=h.createOscillator(),d=h.createGain(),f=h.createBiquadFilter();u.type="square",u.frequency.value=this._note(c),f.type="lowpass",f.frequency.value=2600,d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(.05,e+.01),d.gain.exponentialRampToValueAtTime(1e-4,e+i*1.6),u.connect(f),f.connect(d),d.connect(l),d.connect(this.delay),u.start(e),u.stop(e+i*1.7)}if(n===0)for(let c of[0,3,7]){let h=this.ctx,u=h.createOscillator(),d=h.createGain();u.type="triangle",u.frequency.value=this._note(a+c),u.detune.value=(Math.random()-.5)*12,d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(.035,e+i*4),d.gain.linearRampToValueAtTime(1e-4,e+i*16),u.connect(d),d.connect(l),d.connect(this.delay),u.start(e),u.stop(e+i*16.1)}}};var cc=class{constructor(t,e){this.game=t,this.root=e,e.innerHTML=`
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
      </div>`,this.q=i=>e.querySelector(i),this.el={pos:this.q(".h-pos b"),posSup:this.q(".h-pos sup"),posTot:this.q(".h-pos small"),lap:this.q(".h-lap b"),time:this.q(".h-time"),board:this.q(".h-board"),s0:this.q(".s0"),s1:this.q(".s1"),fuse:this.q(".fusehint"),map:this.q(".h-map"),spdC:this.q(".h-speed canvas"),spd:this.q(".h-speed b"),drift:this.q(".h-drift"),driftBar:this.q(".h-drift i"),driftTxt:this.q(".h-drift span"),melee:this.q(".h-melee"),meleeCd:this.q(".h-melee .cd"),count:this.q(".h-count"),banner:this.q(".h-banner"),pop:this.q(".h-pop"),feedEl:this.q(".h-feed"),glitch:this.q(".h-glitch"),fps:this.q(".h-fps")},this.mapCtx=this.el.map.getContext("2d"),this.spdCtx=this.el.spdC.getContext("2d"),this.cache={},this.frame=0,e.querySelector(".h-items").addEventListener("pointerdown",i=>{this.game.input.edges.fuse=!0,i.preventDefault()}),e.querySelector('[data-act="pause"]').addEventListener("click",()=>this.game.pause()),e.querySelector('[data-act="cam"]').addEventListener("click",()=>{this.game.input.edges.camera=!0})}setup(t){this.race=t,this.mm=t.track.minimapPath(),this.cache={},this.root.classList.toggle("tt",t.mode==="tt"),this.el.count.textContent="",this.el.banner.className="h-banner",this.el.feedEl.innerHTML="",this.el.posTot.textContent="/"+t.racers.length,this.el.board.innerHTML=t.racers.map(()=>"<li><i></i><span></span></li>").join("");let e=document.createElement("canvas");e.width=e.height=220;let i=e.getContext("2d"),{pts:n}=this.mm,s=16,a=220-s*2,o=(1-this.mm.w)*a/2+s,l=(1-this.mm.d)*a/2+s;this.mmT=(f,p)=>[o+(f-this.mm.minx)*this.mm.sc*a,l+(p-this.mm.minz)*this.mm.sc*a];let c=t.cup.pal;i.lineJoin="round",i.lineCap="round",i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=9,i.beginPath(),n.forEach(([f,p],x)=>{let m=o+f*a,g=l+p*a;x?i.lineTo(m,g):i.moveTo(m,g)}),i.closePath(),i.stroke();let h=t.track.maxY-t.track.minY||1;for(let f=0;f<n.length;f++){let p=n[f],x=n[(f+1)%n.length],m=(p[2]-t.track.minY)/h;i.strokeStyle=`rgba(${120+135*m|0},${200+55*m|0},255,${.55+.45*m})`,i.lineWidth=3+m*2.5,i.beginPath(),i.moveTo(o+p[0]*a,l+p[1]*a),i.lineTo(o+x[0]*a,l+x[1]*a),i.stroke()}let[u,d]=[o+n[0][0]*a,l+n[0][1]*a];i.fillStyle="#fff",i.fillRect(u-4,d-4,8,8),this.mmBase=e}countdown(t){let e=this.el.count;e.textContent=t,e.classList.remove("cd-anim"),e.offsetWidth,e.classList.add("cd-anim"),t==="GO!"&&setTimeout(()=>{e.textContent==="GO!"&&(e.textContent="")},900)}banner(t,e){let i=this.el.banner;i.textContent=t,i.className="h-banner",i.offsetWidth,i.className="h-banner show"+(e?" big":"")}pop(t,e="#fff"){let i=this.el.pop;i.textContent=t,i.style.color=e,i.classList.remove("show"),i.offsetWidth,i.classList.add("show")}feed(t,e){let i=document.createElement("div");for(i.textContent=t,i.style.color=e,this.el.feedEl.prepend(i);this.el.feedEl.children.length>4;)this.el.feedEl.lastChild.remove();setTimeout(()=>i.remove(),3500)}glitch(t){this.glitchT=Math.max(this.glitchT||0,t)}_set(t,e,i){this.cache[t]!==e&&(this.cache[t]=e,i(e))}update(t,e){let i=this.race;if(!i)return;let n=i.player,s=this.el;this.frame++,this._set("pos",n.place,p=>{s.pos.textContent=p,s.posSup.textContent=Ta(p).replace(/\d+/,""),s.pos.parentElement.dataset.p=p}),this._set("lap",Math.min(3,Math.max(1,n.lap+1)),p=>s.lap.textContent=p);let a=n.finished?n.finishTime:Math.max(0,i.time);if(this.frame%3===0&&(s.time.textContent=ki(a)+(i.mode==="tt"&&isFinite(n.bestLap)?`  \xB7  BEST ${ki(n.bestLap)}`:"")),this.frame%6===0&&i.mode!=="tt"){let p=s.board.children;i.order.forEach((x,m)=>{let g=p[m];if(!g)return;let M=x.name+(x.isPlayer?"*":"");g._k!==M&&(g._k=M,g.children[1].textContent=x.name,g.children[0].style.background=ri(x.char.color),g.classList.toggle("me",x.isPlayer))})}let o=(p,x,m)=>{let g=n.rouletteT>0&&(m===1?n.items[1]:n.items[0]&&!n.items[1]),M=(g?"r"+Math.floor(i.time*12):x)||"";this._set("slot"+m,M,()=>{let v=g?Qs(["plasma","trap","shield","surge","emp"][Math.floor(i.time*12)%5]):x&&Qs(x);p.querySelector("i").textContent=v?v.icon:"",p.querySelector("em").textContent=v&&!g?v.name:"",p.style.setProperty("--c",v?v.color:"#345"),p.classList.toggle("full",!!v),p.classList.toggle("roll",!!g)})};o(s.s0,n.items[0],0),o(s.s1,n.items[1],1);let l=n.items[0]&&n.items[1]&&n.rouletteT<=0?Dn[Zl(n.items[0],n.items[1])]:null;this._set("fuse",l?l.id:"",()=>{s.fuse.innerHTML=l?`<b>FUSE \u25B8</b> ${l.icon} ${l.name}`:"",s.fuse.classList.toggle("on",!!l),this.game.touchFuse(!!l)});let c=n.drift,h=[.85,1.75,2.7],u=c.on?ne(c.t/h[2],0,1):0;this._set("dr",Math.round(u*100)+"_"+c.level+"_"+c.on,()=>{s.drift.classList.toggle("on",c.on),s.driftBar.style.width=u*100+"%",s.driftBar.style.background=ri(sc[c.level||1]),s.driftTxt.textContent=c.on?["DRIFT","SPARK","OVERCLOCK","OVERDRIVE"][c.level]:"",this.game.touchDriftLevel(c.on?c.level:-1)});let d=n.meleeCd/n.meleeCdMax;this._set("mc",Math.round(d*40),()=>{let p=106.8*d;s.meleeCd.style.strokeDashoffset=p,s.melee.classList.toggle("ready",d<=0),this.game.touchMelee(d)});let f=Math.round(Math.abs(n.speed)*3.6);this._set("spd",f,p=>s.spd.textContent=p),this.frame%2===0&&this._speedo(n),this.frame%2===1&&this._minimap(),this.glitchT>0?(this.glitchT-=t,s.glitch.style.opacity=Math.random()<.5?.45:.12,s.glitch.style.transform=`translate(${(Math.random()-.5)*20}px,${(Math.random()-.5)*8}px)`):s.glitch.style.opacity!=="0"&&(s.glitch.style.opacity="0"),this.game.settings.showFps&&this.frame%15===0?s.fps.textContent=e.toFixed(0)+" FPS \xB7 "+this.game.qualityName():!this.game.settings.showFps&&s.fps.textContent&&(s.fps.textContent="")}_speedo(t){let e=this.spdCtx,i=200,n=i/2;e.clearRect(0,0,i,i);let s=Math.PI*.75,a=Math.PI*2.25,o=t.top*1.5,l=ne(Math.abs(t.speed)/o,0,1);e.lineCap="round",e.lineWidth=12,e.strokeStyle="rgba(40,60,100,0.6)",e.beginPath(),e.arc(n,n,80,s,a),e.stroke();let c=e.createLinearGradient(0,i,i,0);c.addColorStop(0,"#00e5ff"),c.addColorStop(.6,"#b04dff"),c.addColorStop(1,"#ff7a1a"),e.strokeStyle=t.boostT>0?"#ffb340":c,e.shadowColor=t.boostT>0?"#ff7a1a":"#00e5ff",e.shadowBlur=14,e.beginPath(),e.arc(n,n,80,s,s+(a-s)*l),e.stroke(),e.shadowBlur=0;for(let h=0;h<=10;h++){let u=s+(a-s)*h/10;e.strokeStyle="rgba(200,230,255,0.55)",e.lineWidth=2,e.beginPath(),e.moveTo(n+Math.cos(u)*64,n+Math.sin(u)*64),e.lineTo(n+Math.cos(u)*70,n+Math.sin(u)*70),e.stroke()}t.slipT>0&&(e.strokeStyle="rgba(200,240,255,0.9)",e.lineWidth=4,e.beginPath(),e.arc(n,n,94,-Math.PI/2,-Math.PI/2+Math.PI*2*ne(t.slipT/1.3,0,1)),e.stroke())}_minimap(){let t=this.mapCtx,e=this.race;t.clearRect(0,0,220,220),t.drawImage(this.mmBase,0,0);let i=e.track.P,n=e.track.n;for(let a of e.items.projectiles){let o=e.track.idx(a.dist),[l,c]=this.mmT(i[o].x,i[o].z);t.fillStyle="#6ad8ff",t.fillRect(l-2,c-2,4,4)}let s=[...e.racers].sort((a,o)=>(a.isPlayer?1:0)-(o.isPlayer?1:0));for(let a of s){let[o,l]=this.mmT(a.worldPos.x,a.worldPos.z);t.fillStyle=ri(a.char.color),t.beginPath(),t.arc(o,l,a.isPlayer?7:4.5,0,6.29),t.fill(),a.isPlayer&&(t.strokeStyle="#fff",t.lineWidth=2.5,t.stroke())}}};var Cf="ncr_profile_v1",Pf="ncr_settings_v1";function zh(){return{paint:"carbon",neon:"char",trail:"std",up:{engine:0,turbo:0,grip:0,armor:0,capacitor:0}}}function hc(){return{v:1,bits:500,stats:{races:0,wins:0,podiums:0,rockets:0,ttRecords:0,ttTracks:0,distance:0,driftBoosts:0,drift1:0,drift2:0,drift3:0,slips:0,pads:0,air:0,lands:0,plasmaHits:0,trapHits:0,empHits:0,blocks:0,surges:0,fusions:0,fuseMask:0,meleeHits:0,knockoffs:0,evades:0,purchases:0,bitsEarned:0,winsBy:{},winsChar:{},golds:{}},flags:{},ach:{},chars:[...ba],trophies:{},tt:{},owned:{paint:["carbon"],neon:["char"],trail:["std"]},garage:{bike:zh(),quad:zh(),kart:zh()},lastChar:"jarvis",lastCls:"kart",lastClock:0}}function Rf(){return{steerMode:"stick",autoAccel:!1,leftHanded:!1,buttonScale:1,buttonOpacity:.55,assist:!0,camera:"chase",quality:"auto",musicVol:.5,sfxVol:.8,haptics:!0,showFps:!1}}function If(){try{let r=JSON.parse(localStorage.getItem(Cf));if(r&&r.v===1){let t=hc();return{...t,...r,stats:{...t.stats,...r.stats},owned:{...t.owned,...r.owned},garage:{...t.garage,...r.garage}}}}catch{}return hc()}function mn(r){try{localStorage.setItem(Cf,JSON.stringify(r))}catch{}}function Lf(){try{let r=JSON.parse(localStorage.getItem(Pf));if(r)return{...Rf(),...r}}catch{}return Rf()}function Df(r){try{localStorage.setItem(Pf,JSON.stringify(r))}catch{}}function dc(r){return Object.values(r.up).reduce((t,e)=>t+e,0)}function Nf(r,t,e){let i=r.stats,n=e.st;for(let s of["driftBoosts","drift1","drift2","drift3","slips","pads","air","lands","plasmaHits","trapHits","empHits","blocks","surges","fusions","meleeHits","knockoffs","evades","distance","rockets"])i[s]=(i[s]||0)+(n[s]||0);i.fuseMask=i.fuseMask|0|n.fuseMask,e.mode!=="tt"&&(i.races++,e.place===1&&(i.wins++,i.winsBy[t.player.clsId]=(i.winsBy[t.player.clsId]||0)+1,i.winsChar[t.player.char.id]=(i.winsChar[t.player.char.id]||0)+1),e.place<=3&&i.podiums++),Object.assign(r.flags,e.flags),r.bits+=e.bits,i.bitsEarned+=e.bits}var uc=class{constructor(t){this.game=t}get p(){return this.game.profile}check(t){let e=this.p,i=[];e.flags.allUnlocked=We.every(s=>e.chars.includes(s.id));let n=!0;for(;n;){n=!1;for(let s of as){if(e.ach[s.id])continue;let a=!1;try{a=s.test(e.stats,t,e.flags)}catch{}if(a){e.ach[s.id]=Date.now(),e.bits+=s.reward,e.stats.bitsEarned+=s.reward,i.push(s);for(let o of We)o.unlock===s.id&&!e.chars.includes(o.id)&&(e.chars.push(o.id),i.push({unlockChar:o}));e.flags.allUnlocked=We.every(o=>e.chars.includes(o.id)),n=!0}}}return i.length&&mn(e),i}count(){return Object.keys(this.p.ach).length}};var Ca=(r,t)=>`<div class="stat"><span>${r}</span><div class="sb"><i style="width:${t*10}%"></i></div></div>`,av=r=>r===1?'<b class="tr g">\u25CF</b>':r===2?'<b class="tr s">\u25CF</b>':r===3?'<b class="tr b">\u25CF</b>':'<b class="tr n">\u25CB</b>',fc=class{constructor(t,e){this.game=t,this.root=e,this.stack=[],this.sel={char:t.profile.lastChar,cls:t.profile.lastCls,clock:t.profile.lastClock||0,cup:0,track:0,mode:"cup",gcls:t.profile.lastCls,gtab:"paint"},e.addEventListener("click",i=>{let n=i.target.closest("[data-act]");!n||n.classList.contains("disabled")||(this.game.audio.unlock(),this.game.audio.sfx("uiok"),this.act(n.dataset.act,n.dataset,n))}),e.addEventListener("input",i=>{let n=i.target;n.dataset.set&&this.setSetting(n.dataset.set,n.type==="range"?parseFloat(n.value):n.value)}),this.previewCache={}}get p(){return this.game.profile}show(t,e=!0){e&&this.screen&&this.screen!==t&&this.stack.push(this.screen),this.screen=t,this.root.className="ui on scr-"+t,this.root.innerHTML=this["r_"+t](),this.after&&this.after(),this.after=null,this.focusFirst(),this.update3d()}refresh(){let t=this.focusEl&&this.focusEl.dataset.key,e=this.root.querySelector(".scroll"),i=e?e.scrollTop:0;this.root.innerHTML=this["r_"+this.screen]();let n=this.root.querySelector(".scroll");n&&(n.scrollTop=i);let s=t&&this.root.querySelector(`[data-key="${t}"]`);s?this.setFocus(s):this.focusFirst(),this.update3d()}hide(){this.root.className="ui",this.root.innerHTML="",this.screen=null,this.stack=[]}back(){let t=this.screen;if(t==="pause")return this.game.resume(),!0;if(["results","standings","trophy","loading","title"].includes(t))return!0;if(t==="main")return this.show("quit"),!0;let e=this.stack.pop();return e&&(this.game.audio.sfx("uiback"),this.show(e,!1)),!0}focusables(){return[...this.root.querySelectorAll("[data-act]:not(.disabled), [data-f]")].filter(t=>t.offsetParent!==null)}focusFirst(){let t=this.root.querySelector(".selected[data-act]")||this.root.querySelector("[data-act].primary")||this.focusables()[0];t&&this.setFocus(t,!0)}setFocus(t,e){this.focusEl&&this.focusEl.classList.remove("focus"),this.focusEl=t,t&&(t.classList.add("focus"),t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"}))}nav(t){if(!this.screen)return!1;if(t==="back")return this.back();if(t==="start"&&this.screen==="title")return this.act("start"),!0;if(t==="prev"||t==="next")return this.tab(t==="prev"?-1:1),!0;if(t==="ok"){if(this.focusEl&&document.body.contains(this.focusEl)){if(this.focusEl.tagName==="INPUT"&&this.focusEl.type==="range")return!0;this.focusEl.click()}else this.screen==="title"&&this.act("start");return!0}let e=this.focusEl&&document.body.contains(this.focusEl)?this.focusEl:null;if(e&&e.tagName==="INPUT"&&e.type==="range"&&(t==="left"||t==="right")){let c=parseFloat(e.step)||.1;return e.value=Math.min(parseFloat(e.max),Math.max(parseFloat(e.min),parseFloat(e.value)+(t==="left"?-c:c))),this.setSetting(e.dataset.set,parseFloat(e.value)),!0}let i=this.focusables();if(!e)return this.focusFirst(),!0;let n=e.getBoundingClientRect(),s=n.left+n.width/2,a=n.top+n.height/2,o=null,l=1/0;for(let c of i){if(c===e)continue;let h=c.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2,f=u-s,p=d-a,x,m;if(t==="left"?(x=-f,m=Math.abs(p)):t==="right"?(x=f,m=Math.abs(p)):t==="up"?(x=-p,m=Math.abs(f)):(x=p,m=Math.abs(f)),x<=4)continue;let g=x+m*2.2;g<l&&(l=g,o=c)}return o&&(this.setFocus(o),this.game.audio.sfx("ui")),!0}tab(t){if(this.screen==="select"){let e=["bike","quad","kart"];this.sel.cls=e[(e.indexOf(this.sel.cls)+t+3)%3],this.refresh()}else if(this.screen==="tracks")this.sel.cup=(this.sel.cup+t+6)%6,this.refresh();else if(this.screen==="cups")this.sel.clock=Math.max(0,Math.min(this.maxClock(),this.sel.clock+t)),this.refresh();else if(this.screen==="garage"){let e=["bike","quad","kart"];this.sel.gcls=e[(e.indexOf(this.sel.gcls)+t+3)%3],this.refresh()}}update3d(){let t=this.game.menu3d;if(!t)return;let e=this.screen;if(e==="select"){let i=We.find(n=>n.id===this.sel.char);t.showVehicle(this.sel.cls,this.game.vehicleLook(this.sel.cls,i),i),t.setView("right")}else if(e==="garage"){let i=We.find(n=>n.id===this.sel.char);t.showVehicle(this.sel.gcls,this.game.vehicleLook(this.sel.gcls,i),i),t.setView("right")}else if(e==="title"||e==="main"){let i=We.find(n=>n.id===this.p.lastChar);t.showVehicle(this.p.lastCls,this.game.vehicleLook(this.p.lastCls,i),i),t.setView(e==="title"?"center":"right")}else t.setView("away")}maxClock(){let t=this.p.trophies;return Object.keys(t).some(e=>e.endsWith("_1")&&t[e]===1)?2:1}cupUnlocked(t){if(t===0)return!0;let e=this.p.trophies;return[0,1,2].some(i=>e[`${t-1}_${i}`])}act(t,e={}){let i=this.game,n=this.sel;switch(t){case"start":i.audio.unlock(),i.menuMusic(),this.show("main",!1);break;case"mode":n.mode=e.v,this.show("select");break;case"garage":this.show("garage");break;case"ach":this.show("ach");break;case"guide":this.show("guide");break;case"settings":this.show("settings");break;case"quit":this.show("quit");break;case"exitapp":i.exitApp();break;case"back":this.back();break;case"char":{let s=We.find(a=>a.id===e.v);if(!this.p.chars.includes(s.id)){i.audio.sfx("uiback");return}n.char=s.id,n.cls=s.cls,this.refresh();break}case"cls":n.cls=e.v,this.refresh();break;case"selectok":this.p.lastChar=n.char,this.p.lastCls=n.cls,mn(this.p),this.show(n.mode==="cup"?"cups":"tracks");break;case"clock":n.clock=+e.v,this.p.lastClock=n.clock,this.refresh();break;case"cup":if(!this.cupUnlocked(+e.v))return;n.cup=+e.v,i.startCup(n.cup,n.clock,n.char,n.cls);break;case"tcup":n.cup=+e.v,this.refresh();break;case"track":n.track=+e.v,i.startSingle(n.mode,n.cup,n.track,n.clock,n.char,n.cls);break;case"gcls":n.gcls=e.v,this.refresh();break;case"gtab":n.gtab=e.v,this.refresh();break;case"buy":this.buy(e.kind,e.v);break;case"up":this.upgrade(e.v,+e.d);break;case"set":this.setSetting(e.k,e.v==="true"?!0:e.v==="false"?!1:e.v),this.refresh();break;case"resetsave":this.show("confirmreset");break;case"doreset":i.resetProfile(),this.show("main",!1);break;case"resume":i.resume();break;case"restart":i.restartRace();break;case"togglecam":i.toggleCamera(),this.refresh();break;case"quitrace":i.quitToMenu();break;case"psettings":this.show("settings");break;case"continue":i.afterResults();break;case"nextrace":i.nextCupRace();break;case"retry":i.restartRace();break;case"menu":i.quitToMenu();break}}setSetting(t,e){let i=this.game.settings;i[t]=e,this.game.saveSettings(),(t==="musicVol"||t==="sfxVol")&&this.game.audio.applyVolumes(),t==="quality"&&this.game.applyQuality(),this.game.input.applyLayout()}buy(t,e){let n=(t==="paint"?tr:t==="neon"?Sa:Uh).find(a=>a.id===e),s=this.p.garage[this.sel.gcls];if(!this.p.owned[t].includes(e)){if(this.p.bits<n.cost){this.game.audio.sfx("uiback"),this.toastLocal("Not enough bits");return}this.p.bits-=n.cost,this.p.owned[t].push(e),this.p.stats.purchases++,this.game.audio.sfx("unlock"),this.game.checkAchievements(null)}s[t]=e,mn(this.p),this.refresh()}upgrade(t,e){let i=this.p.garage[this.sel.gcls],n=Fh.find(a=>a.id===t),s=i.up[t];if(e>0){if(s>=3)return;if(dc(i)>=Ea){this.toastLocal("Power budget full \u2014 remove a level elsewhere"),this.game.audio.sfx("uiback");return}let a=i.bought&&i.bought[t]||0;if(s>=a){let o=n.costs[s];if(this.p.bits<o){this.toastLocal("Not enough bits"),this.game.audio.sfx("uiback");return}this.p.bits-=o,this.p.stats.purchases++,i.bought=i.bought||{},i.bought[t]=s+1}i.up[t]=s+1,dc(i)>=Ea&&(this.p.flags.maxed=!0),this.game.checkAchievements(null)}else s>0&&(i.up[t]=s-1);mn(this.p),this.refresh()}toastLocal(t){this.game.toast(t,"","#ff8090")}hdr(t,e=""){return`<header><button class="back" data-act="back">\u25C0</button><h2>${t}</h2><span class="sub">${e}</span><span class="bits">\u25C6 ${this.p.bits.toLocaleString()}</span></header>`}r_title(){return`<div class="title">
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
          <button data-act="ach">ACHIEVEMENTS <small>${this.game.ach.count()}/${as.length}</small></button>
        </div>
        <div class="row">
          <button data-act="guide">GUIDE</button>
          <button data-act="settings">SETTINGS</button>
        </div>
      </nav>
      <div class="bits corner">\u25C6 ${this.p.bits.toLocaleString()} BITS</div>
    </div>`}r_quit(){return'<div class="dialog"><h2>EXIT NEON CYBER RUSH?</h2><div class="row"><button data-act="exitapp">EXIT</button><button class="primary" data-act="back">STAY</button></div></div>'}r_confirmreset(){return'<div class="dialog"><h2>ERASE ALL PROGRESS?</h2><p>Achievements, bits, trophies and garage will be wiped.</p><div class="row"><button data-act="doreset">ERASE</button><button class="primary" data-act="back">CANCEL</button></div></div>'}r_select(){let t=this.sel,e=We.find(o=>o.id===t.char),i=rs[t.cls],n=We.map(o=>{let l=!this.p.chars.includes(o.id),c=l?as.find(h=>h.id===o.unlock):null;return`<button class="cc ${o.id===t.char?"selected":""} ${l?"locked":""}" data-act="char" data-v="${o.id}" data-key="c_${o.id}" style="--c:${ri(o.color)};--a:${ri(o.accent)}">
        <div class="av">${l?"\u{1F512}":o.name[0]}</div><b>${l?"???":o.name}</b>${l?`<small>${c.name}</small>`:`<small>${rs[o.cls].short}</small>`}</button>`}).join(""),s=["bike","quad","kart"].map(o=>`<button class="tab ${o===t.cls?"selected":""}" data-act="cls" data-v="${o}" data-key="t_${o}">${rs[o].short}${o===e.cls?" \u2605":""}</button>`).join(""),a=i.stats;return`${this.hdr("SELECT RACER",t.mode==="cup"?"TOURNAMENT":t.mode==="tt"?"TIME TRIAL":"QUICK RACE")}
      <div class="sel">
        <div class="grid12">${n}</div>
        <div class="info" style="--c:${ri(e.color)}">
          <h3>${e.name}</h3><div class="ttl">${e.title}</div>
          <p class="perk">\u25C8 ${e.perk}</p>
          <div class="tabs">${s}</div>
          <div class="clsname">${i.name}</div>
          <p class="blurb">${i.blurb}</p>
          ${Ca("SPEED",a.speed)}${Ca("ACCEL",a.accel)}${Ca("HANDLING",a.handling)}${Ca("ARMOR",a.armor)}${Ca("DRIFT",a.drift)}
          <button class="primary go" data-act="selectok">CONTINUE \u25B6</button>
        </div>
      </div>`}r_cups(){let t=this.sel,e=this.maxClock(),i=Oi.map(s=>`<button class="tab ${s.id===t.clock?"selected":""} ${s.id>e?"disabled":""}" data-act="clock" data-v="${s.id}" data-key="k_${s.id}">${s.name}<small>${s.id>e?"\u{1F512} Gold a cup at 2.0":s.label}</small></button>`).join(""),n=si.map((s,a)=>{let o=this.cupUnlocked(a),l=Oi.map(c=>av(this.p.trophies[`${a}_${c.id}`])).join("");return`<button class="cup ${o?"":"locked disabled"}" data-act="cup" data-v="${a}" data-key="cup_${a}" style="--c:${ri(s.pal.a)};--b:${ri(s.pal.b)}">
        <h4>${s.name}</h4><small>${s.sub}</small>
        <ul>${s.tracks.map(c=>`<li>${c.name}</li>`).join("")}</ul>
        <div class="tros">${o?l:"\u{1F512} Podium the previous cup"}</div></button>`}).join("");return`${this.hdr("TOURNAMENTS","L2/R2 change clock speed")}<div class="clocks">${i}</div><div class="cups scroll">${n}</div>`}trackPreview(t,e){let i=t+"_"+e;if(this.previewCache[i])return this.previewCache[i];let n=new nr(si[t],si[t].tracks[e]),s=n.minimapPath(),a=document.createElement("canvas");a.width=160,a.height=110;let o=a.getContext("2d"),l=96,c=(160-s.w*l)/2,h=(110-s.d*l)/2,u=n.maxY-n.minY||1;o.lineCap="round";for(let p=0;p<s.pts.length;p++){let x=s.pts[p],m=s.pts[(p+1)%s.pts.length],g=(x[2]-n.minY)/u;o.strokeStyle=`rgba(${100+155*g|0},${200+55*g|0},255,${.5+.5*g})`,o.lineWidth=2+g*2.5,o.beginPath(),o.moveTo(c+x[0]*l,h+x[1]*l),o.lineTo(c+m[0]*l,h+m[1]*l),o.stroke()}let f={url:a.toDataURL(),len:Math.round(n.L),jumps:n.jumps.length,cross:n.crossings.length>0};return this.previewCache[i]=f,f}r_tracks(){let t=this.sel,e=si.map((a,o)=>`<button class="tab ${o===t.cup?"selected":""} ${this.cupUnlocked(o)?"":"disabled"}" data-act="tcup" data-v="${o}" data-key="tc_${o}" style="--c:${ri(a.pal.a)}">${a.name.replace(" CUP","")}</button>`).join(""),i=si[t.cup],n=i.tracks.map((a,o)=>{let l=this.trackPreview(t.cup,o),c=this.p.tt[`${t.cup}_${o}`];return`<button class="trk" data-act="track" data-v="${o}" data-key="tr_${o}" style="--c:${ri(i.pal.a)}">
        <img src="${l.url}" alt=""><h4>${a.name}</h4>
        <small>${(l.len/1e3).toFixed(2)} km \xB7 ${l.jumps} jump${l.jumps===1?"":"s"}${l.cross?" \xB7 multi-tier":""}</small>
        <small class="haz">${a.hz.map(h=>({barrier:"Barriers",firewall:"Firewalls",mine:"Cyber-traps",pulse:"Glitch zones"})[h]).join(" \xB7 ")}</small>
        ${c?`<small class="best">BEST ${ki(c.time)} \xB7 LAP ${ki(c.lap)}</small>`:""}</button>`}).join(""),s=t.mode==="tt"?"":`<div class="clocks sm">${Oi.map(a=>`<button class="tab ${a.id===t.clock?"selected":""} ${a.id>this.maxClock()?"disabled":""}" data-act="clock" data-v="${a.id}" data-key="k_${a.id}">${a.name}</button>`).join("")}</div>`;return`${this.hdr(t.mode==="tt"?"TIME TRIAL":"QUICK RACE","SELECT CIRCUIT")}<div class="tabs ctabs">${e}</div>${s}<div class="trks">${n}</div>`}r_garage(){let t=this.sel,e=this.p.garage[t.gcls],i=["bike","quad","kart"].map(a=>`<button class="tab ${a===t.gcls?"selected":""}" data-act="gcls" data-v="${a}" data-key="g_${a}">${rs[a].short}</button>`).join(""),n=["paint","neon","trail","tune"].map(a=>`<button class="tab ${a===t.gtab?"selected":""}" data-act="gtab" data-v="${a}" data-key="gt_${a}">${{paint:"PAINT",neon:"NEON",trail:"TRAIL",tune:"TUNING"}[a]}</button>`).join(""),s="";if(t.gtab==="tune"){let a=dc(e);s=`<div class="budget">POWER BUDGET <b>${a}/${Ea}</b><div class="pips">${Array.from({length:Ea},(o,l)=>`<i class="${l<a?"on":""}"></i>`).join("")}</div></div>`+Fh.map(o=>{let l=e.up[o.id],c=e.bought&&e.bought[o.id]||0,h=l<3?l<c?"OWNED":"\u25C6 "+o.costs[l]:"MAX";return`<div class="upg"><div><b>${o.name}</b><small>${o.desc}</small></div>
            <button class="pm" data-act="up" data-v="${o.id}" data-d="-1" data-key="um_${o.id}">\u2212</button>
            <div class="lv">${[0,1,2].map(u=>`<i class="${u<l?"on":u<c?"own":""}"></i>`).join("")}</div>
            <button class="pm" data-act="up" data-v="${o.id}" data-d="1" data-key="up_${o.id}">+</button><span class="cost">${h}</span></div>`}).join("")+'<p class="note">Bought levels stay owned \u2014 re-tune freely within the budget.</p>'}else s='<div class="swatches">'+(t.gtab==="paint"?tr:t.gtab==="neon"?Sa:Uh).map(o=>{let l=this.p.owned[t.gtab].includes(o.id),c=e[t.gtab]===o.id,h=t.gtab==="trail"?{std:"#7affff",fire:"linear-gradient(90deg,#ff3a1a,#ffd040)",rainbow:"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,violet)",glitch:"repeating-linear-gradient(90deg,#fff 0 4px,#000 4px 7px,#0ff 7px 12px)",binary:"repeating-linear-gradient(90deg,#4f8 0 6px,#031 6px 10px)"}[o.id]:o.hex==null?ri(We.find(u=>u.id===t.char).color):ri(o.hex);return`<button class="sw ${c?"selected":""}" data-act="buy" data-kind="${t.gtab}" data-v="${o.id}" data-key="sw_${o.id}"><i style="background:${h}"></i><b>${o.name}</b><small>${c?"EQUIPPED":l?"OWNED":"\u25C6 "+o.cost}</small></button>`}).join("")+"</div>";return`${this.hdr("GARAGE","L2/R2 switch vehicle")}<div class="gar"><div class="gl"><div class="tabs">${i}</div><div class="tabs">${n}</div><div class="scroll">${s}</div></div></div>`}r_ach(){let t=this.p,e=as.map(i=>{let n=!!t.ach[i.id];return`<div class="ac ${n?"got":""}" data-f="1"><i>${n?"\u2605":"\u2606"}</i><div><b>${i.name}</b><small>${i.desc}</small></div><span>\u25C6 ${i.reward}</span></div>`}).join("");return`${this.hdr("ACHIEVEMENTS",`${this.game.ach.count()} / ${as.length} UNLOCKED`)}<div class="achs scroll">${e}</div>`}r_guide(){let t=Object.entries(Dn).map(([i,n])=>{let[s,a]=i.split("+");return`<div class="fz" data-f="1"><span>${ss[s].icon}+${ss[a].icon}</span><b style="color:${n.color}">${n.icon} ${n.name}</b><small>${n.desc}</small></div>`}).join(""),e=Object.entries(ss).map(([i,n])=>`<div class="fz" data-f="1"><span style="color:${n.color}">${n.icon}</span><b>${n.name}</b><small>${n.desc}</small></div>`).join("");return`${this.hdr("RACER GUIDE")}
    <div class="guide scroll">
      <section data-f="1"><h3>THE RACE</h3><p>8 racers, ${3} laps. Points per place: ${Yl.join(" \xB7 ")}. Top 3 in a tournament wins a trophy; a podium unlocks the next cup. Gold any cup at 2.0 GHz to unlock 3.0 GHz.</p>
      <p><b>Rocket start:</b> press accelerate just as "1" fades (about half a second before GO). Hold it too early and you stall.</p></section>
      <section data-f="1"><h3>DRIFT &amp; CHARGE</h3><p>Hold DRIFT while steering into a bend. Sparks change colour as charge builds: <b style="color:#3fd8ff">SPARK</b> \u2192 <b style="color:#c060ff">OVERCLOCK</b> \u2192 <b style="color:#ff8a1a">OVERDRIVE</b>. Release for a boost \u2014 longer charge, bigger boost. Steering into the drift tightens it and charges faster.</p>
      <p><b>Overdrive Slam:</b> a Melee Strike while holding Overclock or higher charge spends the charge for a 1.5\xD7 shove that also spins the target.</p></section>
      <section data-f="1"><h3>MELEE STRIKE</h3><p>Every vehicle has a cooldown shove. Near a rival it side-swipes them across the track \u2014 shove them off a rail-less edge (red warning lines) to derez them. With nobody in reach it becomes a <b>side-dash</b>: dash at the right moment and a homing Plasma Sphere misses you. Quads hit hardest; bikes recharge fastest.</p></section>
      <section data-f="1"><h3>AIR, SLIPSTREAM, STRIPS</h3><p>Tap DRIFT while airborne to arm a <b>perfect landing</b> boost. Ride close behind a rival to charge the slipstream ring on your speedometer. Boost strips sit before every ramp \u2014 miss them and you may not clear the gap.</p></section>
      <section data-f="1"><h3>ITEMS</h3><p>Capsules give items into two slots. Leaders get defensive items; racers at the back get speed and firepower.</p><div class="fzs">${e}</div></section>
      <section data-f="1"><h3>FUSION \u2014 COMBINE BOTH SLOTS</h3><p>With two items held, press FUSE (or tap the item slots) to merge them into one empowered item. Every pairing makes something different:</p><div class="fzs">${t}</div></section>
      <section data-f="1"><h3>CONTROLLER</h3><p>RT accelerate \xB7 LT brake/reverse \xB7 Left stick steer \xB7 R1 drift \xB7 L1 or X item \xB7 Y fuse \xB7 B melee \xB7 Right-stick click camera \xB7 Push right stick down to look back \xB7 START pause.</p></section>
      <section data-f="1"><h3>TOUCH</h3><p>Left thumb steers (floating stick, buttons, or tilt). Right thumb: GO, DRIFT, ITEM, STRIKE, BRAKE. Slide your thumb between GO and DRIFT without lifting. Turn on Auto-Accelerate in Settings for one-thumb play.</p></section>
    </div>`}r_settings(){let t=this.game.settings,e=(n,s,a)=>`<button class="tab ${t[n]===s?"selected":""}" data-act="set" data-k="${n}" data-v="${s}" data-key="s_${n}_${s}">${a}</button>`,i=(n,s,a,o,l)=>`<label class="sl"><span>${l}</span><input type="range" data-set="${n}" min="${s}" max="${a}" step="${o}" value="${t[n]}" data-f="1" data-key="r_${n}"></label>`;return`${this.hdr("SETTINGS")}<div class="settings scroll">
      <div class="srow"><span>STEERING</span>${e("steerMode","stick","STICK")}${e("steerMode","buttons","BUTTONS")}${e("steerMode","tilt","TILT")}</div>
      <div class="srow"><span>AUTO-ACCELERATE</span>${e("autoAccel",!0,"ON")}${e("autoAccel",!1,"OFF")}</div>
      <div class="srow"><span>STEERING ASSIST</span>${e("assist",!0,"ON")}${e("assist",!1,"OFF")}</div>
      <div class="srow"><span>HANDEDNESS</span>${e("leftHanded",!1,"RIGHT")}${e("leftHanded",!0,"LEFT")}</div>
      ${i("buttonScale",.7,1.4,.05,"BUTTON SIZE")}${i("buttonOpacity",.2,1,.05,"BUTTON OPACITY")}
      <div class="srow"><span>CAMERA</span>${e("camera","chase","OVER-SHOULDER")}${e("camera","iso","ISOMETRIC")}</div>
      <div class="srow"><span>GRAPHICS</span>${e("quality","auto","AUTO")}${e("quality","high","HIGH")}${e("quality","balanced","BALANCED")}${e("quality","perf","PERFORMANCE")}</div>
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
      </nav></div>`}r_results(){let t=this.game.lastResult,e=this.game,i=t.mode==="tt"?"":t.order.map(c=>`<tr class="${c.isPlayer?"me":""}"><td>${c.place}</td><td><i style="background:${ri(c.color)}"></i>${c.name}</td><td>${ki(c.time)}</td><td>+${c.pts}</td></tr>`).join(""),n=t.st,s=[["Drift boosts",n.driftBoosts],["Item hits",n.plasmaHits+n.trapHits+n.empHits],["Melee strikes",n.meleeHits],["Knock-offs",n.knockoffs],["Slipstreams",n.slips],["Perfect landings",n.lands]].filter(c=>c[1]>0).map(c=>`<li>${c[0]} <b>${c[1]}</b></li>`).join(""),a=(t.newAch||[]).map(c=>c.unlockChar?`<li class="unl">NEW RACER UNLOCKED: <b>${c.unlockChar.name}</b></li>`:`<li>\u2605 ${c.name} <b>+${c.reward}</b></li>`).join(""),o=t.mode==="tt"?`<div class="ttres"><h3>${ki(t.time)}</h3><p>Best lap ${ki(t.bestLap)}</p>${t.record?'<p class="rec">NEW RECORD!</p>':t.prev?`<p>Record ${ki(t.prev.time)}</p>`:""}<ol>${t.lapTimes.map(c=>`<li>${ki(c)}</li>`).join("")}</ol></div>`:"",l=t.mode==="cup";return`<div class="results">
      <h2>${t.mode==="tt"?"TIME TRIAL":t.place===1?"VICTORY":Ta(t.place).toUpperCase()+" PLACE"}</h2>
      <small>${si[t.cup].name} \xB7 ${si[t.cup].tracks[t.track].name}</small>
      <div class="rcols">
        ${o}${i?`<table>${i}</table>`:""}
        <div class="rside"><ul class="style">${s}</ul><div class="earn">+\u25C6 ${t.bits.toLocaleString()} BITS</div>${a?`<ul class="newach">${a}</ul>`:""}</div>
      </div>
      <nav class="row">${l?'<button class="primary" data-act="continue">STANDINGS \u25B6</button>':'<button class="primary" data-act="retry">RACE AGAIN</button><button data-act="menu">MENU</button>'}</nav>
    </div>`}r_standings(){let t=this.game.cupState,e=Object.entries(t.points).sort((s,a)=>a[1]-s[1]).map(([s,a],o)=>{let l=We.find(c=>c.id===s);return`<tr class="${s===t.char?"me":""}"><td>${o+1}</td><td><i style="background:${ri(l.color)}"></i>${l.name}</td><td>${a}</td></tr>`}).join(""),i=t.race>=3,n=i?"":si[t.cup].tracks[t.race+1].name;return`<div class="results"><h2>${si[t.cup].name}</h2><small>RACE ${t.race+1} OF 4 \xB7 ${Oi[t.clock].name}</small>
      <table class="stand">${e}</table>
      <nav class="row">${i?'<button class="primary" data-act="nextrace">AWARDS \u25B6</button>':`<button class="primary" data-act="nextrace">NEXT: ${n.toUpperCase()} \u25B6</button><button data-act="menu">QUIT CUP</button>`}</nav></div>`}r_trophy(){let t=this.game.trophyResult,e=["","GOLD","SILVER","BRONZE"][t.trophy]||"NO TROPHY",i=["#667","#ffd84d","#d8e4f0","#e08a4c"][t.trophy]||"#667",n=(t.newAch||[]).map(s=>s.unlockChar?`<li class="unl">NEW RACER UNLOCKED: <b>${s.unlockChar.name}</b></li>`:`<li>\u2605 ${s.name} <b>+${s.reward}</b></li>`).join("");return`<div class="results trophy" style="--t:${i}"><div class="cupicon">\u{1F3C6}</div><h2>${e}</h2><small>${si[t.cup].name} \xB7 ${Oi[t.clock].name} \xB7 FINISHED ${Ta(t.place).toUpperCase()}</small>
      <div class="earn">+\u25C6 ${t.bits.toLocaleString()} TROPHY BONUS</div>${t.unlockedCup?`<p class="unl">${si[t.unlockedCup].name} UNLOCKED</p>`:""}${n?`<ul class="newach">${n}</ul>`:""}
      <nav class="row"><button class="primary" data-act="menu">CONTINUE</button></nav></div>`}};var Uf=["Fuse two items into one of 15 empowered combos \u2014 try Shield + Trap for a Mirror Shield.","Hold Overclock (purple) drift charge, then Melee Strike for an Overdrive Slam.","Red edge lines mean no guard rail. Shove rivals over them \u2014 and stay away yourself.","Strike with nobody beside you to side-dash \u2014 perfect for dodging a Plasma Sphere.","Tap drift in mid-air to arm a perfect-landing boost.","Tuck in behind a rival to charge your slipstream ring.","Leaders draw defensive items. Racers at the back draw boosts and firepower.","Every ramp has a boost strip before it. Hit it, or risk falling short of the gap.","Firewalls alternate sides \u2014 watch the flicker before they switch.","Quads shrug off shoves and hit hardest. Bikes are fastest but get bullied."],Hh={high:{pr:1.75,bloom:!0,q:1,name:"HIGH"},balanced:{pr:1.35,bloom:!0,q:1,name:"BALANCED"},perf:{pr:1,bloom:!1,q:0,name:"PERFORMANCE"}},Gh=class{constructor(t){this.game=t;let e=this.scene=new Vn;e.background=new Et(329231),e.fog=new Gn(329231,20,90),this.camera=new $e(40,1,.1,300),e.add(new Kn(10471679,2101296,1.6));let i=new qi(16777215,2);i.position.set(3,6,4),e.add(i);let n=new qi(16732120,2.2);n.position.set(-4,2,-5),e.add(n);let s=new qi(58879,2.2);s.position.set(5,1,-3),e.add(s);let a=new ea(200,100,58879,1714794);a.material.transparent=!0,a.material.opacity=.55,e.add(a),this.grid=a;let o=new dt(new Zr(3.2,3.45,64),new Ut({color:16732120,side:xe}));o.rotation.x=-Math.PI/2,o.position.y=.02,e.add(o),this.ring=o;let l=new dt(new Or(3.2,64),new Ut({color:658718}));l.rotation.x=-Math.PI/2,l.position.y=.01,e.add(l);let c=new he(1,1,1);c.translate(0,.5,0);let h=new mi(c,new Ut({color:725040}),80),u=new $t;for(let f=0;f<80;f++){let p=f/80*Math.PI*2,x=50+Math.random()*25;u.makeScale(4+Math.random()*6,6+Math.random()*30,4+Math.random()*6).setPosition(Math.cos(p)*x,0,Math.sin(p)*x),h.setMatrixAt(f,u)}e.add(h);let d=new mi(new he(1,.15,1),new Ut({color:11554303}),80);for(let f=0;f<80;f++){h.getMatrixAt(f,u);let p=new R,x=new Ye,m=new R;u.decompose(p,x,m),u.makeScale(m.x*1.02,1,m.z*1.02).setPosition(p.x,m.y,p.z),d.setMatrixAt(f,u)}e.add(d),this.holder=new Te,e.add(this.holder),this.t=0,this.offset=0,this.targetOffset=0}showVehicle(t,e,i){let n=t+e.paint+e.neon+i.id;if(this.key===n)return;this.key=n,this.holder.clear();let s=ic(t,e.paint,e.neon,i.accent);s.root.scale.setScalar(1.25),this.holder.add(s.root),this.ring.material.color.setHex(e.neon)}setView(t){this.targetOffset=t==="right"?1:t==="away"?2:0}render(t,e,i){this.t+=e,this.offset+=(this.targetOffset-this.offset)*(1-Math.exp(-4*e)),this.holder.rotation.y+=e*.5;let n=this.camera,s=9.5+Math.min(1,this.offset)*3.5,a=this.t*.08;n.position.set(Math.sin(a)*s,3+this.offset*.6,Math.cos(a)*s);let o=new R(Math.cos(a),0,-Math.sin(a)),l=new R(0,1,0).addScaledVector(o,-Math.min(1,this.offset)*(i>1.3?3.2:2)-Math.max(0,this.offset-1)*6);n.lookAt(l),n.aspect=i,n.fov=i<1.3?52:40,n.updateProjectionMatrix(),this.grid.position.z=this.t*4%2,this.holder.visible=this.targetOffset<2&&this.offset<1.8}},Vh=class{constructor(){this.settings=Lf(),this.profile=If(),this.platform=window.NCRNative?(()=>{try{return NCRNative.platform()}catch{return"Android"}})():"Web",this.canvas=document.getElementById("c"),this.renderer=new kl({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=qe,this.renderer.toneMapping=Qn,this.renderer.toneMappingExposure=1.15,this.audio=new lc(this),this.input=new oc(this),this.hud=new cc(this,document.getElementById("hud")),this.ach=new uc(this),this.ui=new fc(this,document.getElementById("ui")),this.menu3d=new Gh(this),this.input.buildTouch(document.getElementById("touch")),this.input.onNav=(e,i)=>this.onNav(e,i),this.toasts=document.getElementById("toasts"),this.qLevel=this.settings.quality==="auto"?"high":this.settings.quality,this.applyQuality(),window.addEventListener("resize",()=>this.resize()),this.resize(),window.NCR_onBack=()=>this.onBack(),window.NCR_onAppPause=()=>{this.race&&!this.race.over&&!this.race.paused&&this.pause(),this.audio.suspend()},window.NCR_onAppResume=()=>this.audio.resume(),document.addEventListener("visibilitychange",()=>{document.hidden?window.NCR_onAppPause():window.NCR_onAppResume()}),document.addEventListener("pointerdown",()=>this.audio.unlock(),{once:!1,passive:!0}),this.state="menu",this.setMode("menu"),this.ui.show("title",!1),this.last=performance.now(),this.acc=0,this.fpsAcc=[],this.fps=60,requestAnimationFrame(e=>this.frame(e));let t=document.getElementById("boot");t&&t.remove()}qualityName(){return Hh[this.qLevel].name+(this.settings.quality==="auto"?" (AUTO)":"")}get quality(){return Hh[this.qLevel].q}applyQuality(){this.settings.quality!=="auto"&&(this.qLevel=this.settings.quality);let t=Hh[this.qLevel];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pr)),t.bloom&&!this.composer&&(this.composer=new Wl(this.renderer),this.renderPass=new Xl(this.menu3d.scene,this.menu3d.camera),this.bloom=new js(new et(256,256),.62,.5,.58),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new ql)),this.useBloom=t.bloom,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e),this.bloom.resolution.set(t*this.renderer.getPixelRatio()/2,e*this.renderer.getPixelRatio()/2)),document.body.classList.toggle("narrow",t/e<1.35)}setMode(t){document.body.dataset.mode=t}frame(t){requestAnimationFrame(a=>this.frame(a));let e=t-this.last;if(e<15.2)return;this.last=t;let i=Math.min(e/1e3,.1);this.fps=this.fps*.95+1/i*.05,this.input.update();let n=window.innerWidth/window.innerHeight,s=this.race;if(s&&this.state==="race"){if(this.input.edges.pause&&!s.over&&(this.input.edges.pause=!1,s.paused?this.resume():this.pause()),!s.paused){this.acc+=i;let a=0;for(;this.acc>=1/60&&a<4;)s.update(1/60),this.input.clearEdges(),this.acc-=1/60,a++;a===4&&(this.acc=0),s.render(i,n),s.over||this.hud.update(i,this.fps);let o=s.player;this.audio.engineUpdate(ne(Math.abs(o.speed)/o.top,0,1.4),o.boostT>0,s.started&&o.state==="race")}this.draw(s.scene,s.camera),this.adaptQuality(i)}else this.input.clearEdges(),this.menu3d.render(this.renderer,i,n),this.draw(this.menu3d.scene,this.menu3d.camera)}draw(t,e){this.useBloom&&this.composer?(this.renderPass.scene=t,this.renderPass.camera=e,this.composer.render()):this.renderer.render(t,e)}adaptQuality(t){if(!(this.settings.quality!=="auto"||!this.race||!this.race.started)&&(this.fpsAcc.push(t),this.fpsAcc.length>=180)){let e=this.fpsAcc.length/this.fpsAcc.reduce((i,n)=>i+n,0);this.fpsAcc.length=0,e<52&&this.qLevel!=="perf"&&(this.qLevel=this.qLevel==="high"?"balanced":"perf",this.applyQuality())}}onNav(t,e){return this.ui.screen?t==="start"&&this.ui.screen==="pause"?(this.resume(),!0):this.ui.nav(t):this.race&&this.state==="race"&&(t==="start"||t==="back"&&e==="key")&&!this.race.over?(this.pause(),!0):!1}onBack(){if(this.ui.screen){this.ui.back();return}this.race&&!this.race.over&&this.pause()}menuMusic(){this.audio.music(100,45,3,.7)}vehicleLook(t,e){let i=this.profile.garage[t],n=(tr.find(a=>a.id===i.paint)||tr[0]).hex,s=Sa.find(a=>a.id===i.neon);return{paint:n,neon:s&&s.hex!=null?s.hex:e.color,trail:i.trail}}playerOpts(t,e){let i=We.find(s=>s.id===t),n=this.vehicleLook(e,i);return{char:t,cls:e,paint:n.paint,neon:n.neon,trail:n.trail,upgrades:{...this.profile.garage[e].up}}}roster(t){let e=ba.filter(i=>i!==t);for(;e.length>7;)e.splice(Math.floor(Math.random()*e.length),1);return e}startCup(t,e,i,n){let s=this.roster(i),a={[i]:0};s.forEach(o=>a[o]=0),this.cupState={cup:t,clock:e,char:i,cls:n,race:0,points:a,others:s,wins:0},this.loadRace({mode:"cup",cup:t,track:0,clock:Oi[e],player:this.playerOpts(i,n),grid:this.cupGrid()})}cupGrid(){let t=this.cupState,e=[t.char,...t.others];return t.race===0?[...[...t.others].sort(()=>Math.random()-.5),t.char]:e.sort((i,n)=>t.points[i]-t.points[n])}startSingle(t,e,i,n,s,a){let o=this.roster(s).sort(()=>Math.random()-.5);this.cupState=null,this.loadRace({mode:t,cup:e,track:i,clock:Oi[t==="tt"?1:n],player:this.playerOpts(s,a),grid:[...o,s]})}loadRace(t){this.lastOpts=t;let e=si[t.cup];this.ui.loadInfo={cup:e.name+(t.mode==="cup"?` \xB7 RACE ${t.track+1}/4`:t.mode==="tt"?" \xB7 TIME TRIAL":""),track:e.tracks[t.track].name,color:"#"+e.pal.a.toString(16).padStart(6,"0"),tip:Uf[Math.floor(Math.random()*Uf.length)]},this.ui.show("loading",!1),this.audio.stopMusic(),setTimeout(()=>{this.disposeRace();try{this.race=new ac(this,t)}catch(i){console.error(i),this.toast("Failed to build track",String(i),"#f55"),this.ui.show("main",!1);return}this.hud.setup(this.race),this.state="race",this.fpsAcc.length=0,setTimeout(()=>{this.ui.hide(),this.setMode("race"),this.audio.engineStart(t.player.cls),this.audio.music(e.bpm,e.root,t.cup*7+t.track+1,1),this.input.applyLayout()},650)},60)}disposeRace(){this.race&&(this.race.dispose(),this.race=null),this.audio.engineStop(),this.renderer.renderLists.dispose()}pause(){!this.race||this.race.over||(this.race.paused=!0,this.audio.engineUpdate(0,!1,!1),this.setMode("paused"),this.ui.show("pause",!1))}resume(){if(this.race){if(this.ui.screen==="settings"){this.ui.show("pause",!1);return}this.race.paused=!1,this.ui.hide(),this.setMode("race"),this.last=performance.now()}}restartRace(){this.cupState&&this.lastOpts.mode==="cup"&&(this.lastOpts.grid=this.cupGrid()),this.loadRace(this.lastOpts)}toggleCamera(){this.race&&(this.race.camMode=this.race.camMode==="chase"?"iso":"chase",this.settings.camera=this.race.camMode,this.saveSettings())}quitToMenu(){this.disposeRace(),this.state="menu",this.cupState=null,this.setMode("menu"),this.ui.stack=[],this.ui.show("main",!1),this.menuMusic()}exitApp(){window.NCRNative?NCRNative.exitApp():this.ui.show("title",!1)}resetProfile(){this.profile=hc(),mn(this.profile)}saveSettings(){Df(this.settings)}onRaceEnd(t,e){let i=this.profile;if(Nf(i,t,e),e.mode==="tt"){let s=`${e.cup}_${e.track}`,a=i.tt[s];e.prev=a,(!a||e.time<a.time)&&(i.tt[s]={time:e.time,lap:e.bestLap},e.record=!0,i.stats.ttRecords++,i.stats.ttTracks=Object.keys(i.tt).length)}if(e.mode==="cup"&&this.cupState){let s=this.cupState;for(let a of e.order)s.points[a.id]=(s.points[a.id]||0)+a.pts;e.place===1&&s.wins++}let n={won:e.place===1&&e.mode!=="tt",wasLast:e.rs.wasLast,ledAll:e.rs.ledAll,margin:e.margin,driftBoosts:e.st.driftBoosts,itemsUsed:e.st.itemsUsed,hitsTaken:e.rs.hitsTaken,wallHits:e.rs.wallHits,finished:!0,place:e.mode==="tt"?9:e.place,mode:e.mode,char:t.player.char.id};e.newAch=this.ach.check(n),mn(i),this.lastResult=e,this.audio.engineStop(),setTimeout(()=>{this.setMode("results"),this.ui.show("results",!1),e.newAch.length&&this.audio.sfx("unlock")},600)}afterResults(){this.ui.show("standings",!1)}nextCupRace(){let t=this.cupState;if(!t)return this.quitToMenu();if(t.race<3){t.race++,this.loadRace({mode:"cup",cup:t.cup,track:t.race,clock:Oi[t.clock],player:this.playerOpts(t.char,t.cls),grid:this.cupGrid()});return}let i=Object.entries(t.points).sort((u,d)=>d[1]-u[1]).findIndex(([u])=>u===t.char)+1,n=i<=3?i:0,s=this.profile,a=`${t.cup}_${t.clock}`,o=t.cup<5&&[0,1,2].some(u=>s.trophies[`${t.cup}_${u}`]);n&&(!s.trophies[a]||n<s.trophies[a])&&(s.trophies[a]=n),n===1&&(s.stats.golds[t.cup]=Math.max(s.stats.golds[t.cup]??-1,t.clock));let l=Math.round([0,1500,900,500][n]*Oi[t.clock].bits);s.bits+=l,s.stats.bitsEarned+=l;let c={cupGold:n===1,perfectCup:t.wins===4,char:t.char,mode:"cup"},h=this.ach.check(c);mn(s),this.trophyResult={cup:t.cup,clock:t.clock,place:i,trophy:n,bits:l,newAch:h,unlockedCup:n&&!o&&t.cup<5?t.cup+1:0},this.disposeRace(),this.state="menu",this.cupState=null,this.setMode("menu"),this.ui.show("trophy",!1),this.menuMusic(),this.audio.sfx(n?"win":"finish")}achFlag(t){this.profile.flags[t]=!0,this.checkAchievements(null)}checkAchievements(t){let e=this.ach.check(t);for(let i of e)i.unlockChar?this.toast("NEW RACER UNLOCKED",i.unlockChar.name,"#ffd84d"):this.toast("\u2605 "+i.name,i.desc+"  +\u25C6"+i.reward,"#7affff");return e.length&&this.audio.sfx("unlock"),e}toast(t,e,i="#7affff"){let n=document.createElement("div");n.className="toast",n.style.setProperty("--c",i),n.innerHTML="<b></b><small></small>",n.querySelector("b").textContent=t,n.querySelector("small").textContent=e||"",this.toasts.appendChild(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),3800)}haptic(t,e=128){if(this.settings.haptics)try{window.NCRNative?NCRNative.vibrate(t|0,e|0):navigator.vibrate&&navigator.vibrate(t)}catch{}}touchFuse(t){let e=this.input.troot&&this.input.troot.querySelector(".fuse");e&&e.classList.toggle("ready",t)}touchDriftLevel(t){let e=this.input.troot&&this.input.troot.querySelector(".drift");e&&(e.dataset.lv=t)}touchMelee(t){let e=this.input.troot&&this.input.troot.querySelector(".melee .cd");e&&(e.style.strokeDashoffset=113*t,e.parentNode.parentNode.classList.toggle("ready",t<=0))}};window.addEventListener("load",()=>{try{window.game=new Vh}catch(r){console.error(r),document.body.innerHTML=`<div style="color:#f66;padding:2em;font:16px sans-serif">Startup error: ${String(r&&r.message||r)}</div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
