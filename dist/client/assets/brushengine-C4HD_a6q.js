var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,F=33778,I=33779,ee=35840,te=35841,ne=35842,re=35843,ie=36196,ae=37492,L=37496,oe=37808,se=37809,ce=37810,le=37811,ue=37812,de=37813,fe=37814,pe=37815,R=37816,me=37817,z=37818,B=37819,V=37820,he=37821,H=36492,U=36494,ge=36495,_e=36283,ve=36284,ye=36285,be=36286,xe=2300,Se=2301,Ce=2302,we=2400,Te=2401,Ee=2402,De=3200,Oe=3201,ke=`srgb`,Ae=`srgb-linear`,je=`linear`,Me=`srgb`,Ne=7680,Pe=35044,Fe=2e3,Ie=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},W=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Le=Math.PI/180,Re=180/Math.PI;function ze(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(W[e&255]+W[e>>8&255]+W[e>>16&255]+W[e>>24&255]+`-`+W[t&255]+W[t>>8&255]+`-`+W[t>>16&15|64]+W[t>>24&255]+`-`+W[n&63|128]+W[n>>8&255]+`-`+W[n>>16&255]+W[n>>24&255]+W[r&255]+W[r>>8&255]+W[r>>16&255]+W[r>>24&255]).toLowerCase()}function Be(e,t,n){return Math.max(t,Math.min(n,e))}function Ve(e,t){return(e%t+t)%t}function He(e,t,n){return(1-n)*e+n*t}function Ue(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function We(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var G=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},K=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ge.makeScale(e,t)),this}rotate(e){return this.premultiply(Ge.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ge.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ge=new K;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(e){e in Ye||(Ye[e]=!0,console.warn(e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Qe(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $e(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var q={enabled:!0,workingColorSpace:Ae,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=et(e.r),e.g=et(e.g),e.b=et(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=tt(e.r),e.g=tt(e.g),e.b=tt(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?je:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function et(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function tt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var nt=[.64,.33,.3,.6,.15,.06],rt=[.2126,.7152,.0722],it=[.3127,.329],at=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ot=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);q.define({[Ae]:{primaries:nt,whitePoint:it,transfer:je,toXYZ:at,fromXYZ:ot,luminanceCoefficients:rt,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:nt,whitePoint:it,transfer:Me,toXYZ:at,fromXYZ:ot,luminanceCoefficients:rt,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});var st,ct=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{st===void 0&&(st=qe(`canvas`)),st.width=e.width,st.height=e.height;let n=st.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=st}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=et(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(et(t[e]/255)*255):t[e]=et(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},lt=0,ut=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lt++}),this.uuid=ze(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(dt(r[t].image)):e.push(dt(r[t]))}else e=dt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function dt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var ft=0,pt=class r extends Ie{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ft++}),this.uuid=ze(),this.name=``,this.source=new ut(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pt.DEFAULT_IMAGE=null,pt.DEFAULT_MAPPING=300,pt.DEFAULT_ANISOTROPY=1;var mt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ht=class extends Ie{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ut(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},gt=class extends ht{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_t=class extends pt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vt=class extends pt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bt.copy(this).projectOnVector(e),this.sub(bt)}reflect(e){return this.sub(bt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bt=new J,xt=new yt,St=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,wt):wt.fromBufferAttribute(r,t),wt.applyMatrix4(e.matrixWorld),this.expandByPoint(wt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Tt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Tt.copy(e.boundingBox)),Tt.applyMatrix4(e.matrixWorld),this.union(Tt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wt),wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mt),Nt.subVectors(this.max,Mt),Et.subVectors(e.a,Mt),Dt.subVectors(e.b,Mt),Ot.subVectors(e.c,Mt),kt.subVectors(Dt,Et),At.subVectors(Ot,Dt),jt.subVectors(Et,Ot);let t=[0,-kt.z,kt.y,0,-At.z,At.y,0,-jt.z,jt.y,kt.z,0,-kt.x,At.z,0,-At.x,jt.z,0,-jt.x,-kt.y,kt.x,0,-At.y,At.x,0,-jt.y,jt.x,0];return!It(t,Et,Dt,Ot,Nt)||(t=[1,0,0,0,1,0,0,0,1],!It(t,Et,Dt,Ot,Nt))?!1:(Pt.crossVectors(kt,At),t=[Pt.x,Pt.y,Pt.z],It(t,Et,Dt,Ot,Nt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ct[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ct[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ct[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ct[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ct[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ct[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ct[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ct[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ct),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ct=[new J,new J,new J,new J,new J,new J,new J,new J],wt=new J,Tt=new St,Et=new J,Dt=new J,Ot=new J,kt=new J,At=new J,jt=new J,Mt=new J,Nt=new J,Pt=new J,Ft=new J;function It(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ft.fromArray(e,a);let o=i.x*Math.abs(Ft.x)+i.y*Math.abs(Ft.y)+i.z*Math.abs(Ft.z),s=t.dot(Ft),c=n.dot(Ft),l=r.dot(Ft);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Lt=new St,Rt=new J,zt=new J,Bt=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rt.subVectors(e,this.center);let t=Rt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rt.copy(e.center).add(zt)),this.expandByPoint(Rt.copy(e.center).sub(zt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vt=new J,Ht=new J,Ut=new J,Wt=new J,Gt=new J,Kt=new J,qt=new J,Jt=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ht.copy(e).add(t).multiplyScalar(.5),Ut.copy(t).sub(e).normalize(),Wt.copy(this.origin).sub(Ht);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ut),o=Wt.dot(this.direction),s=-Wt.dot(Ut),c=Wt.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ht).addScaledVector(Ut,d),f}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);let n=Vt.dot(this.direction),r=Vt.dot(Vt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,r,i){Gt.subVectors(t,e),Kt.subVectors(n,e),qt.crossVectors(Gt,Kt);let a=this.direction.dot(qt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wt.subVectors(this.origin,e);let s=o*this.direction.dot(Kt.crossVectors(Wt,Kt));if(s<0)return null;let c=o*this.direction.dot(Gt.cross(Wt));if(c<0||s+c>a)return null;let l=-o*Wt.dot(qt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Xt.set(r[0],r[1],r[2]).length(),a=Xt.set(r[4],r[5],r[6]).length(),o=Xt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);let s=1/i,c=1/a,l=1/o;return Zt.elements[0]*=s,Zt.elements[1]*=s,Zt.elements[2]*=s,Zt.elements[4]*=c,Zt.elements[5]*=c,Zt.elements[6]*=c,Zt.elements[8]*=l,Zt.elements[9]*=l,Zt.elements[10]*=l,t.setFromRotationMatrix(Zt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Fe){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Fe){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xt=new J,Zt=new Yt,Qt=new J(0,0,0),$t=new J(1,1,1),en=new J,tn=new J,nn=new J,rn=new Yt,an=new yt,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},cn=0,ln=new J,un=new yt,dn=new Yt,fn=new J,pn=new J,mn=new J,hn=new yt,gn=new J(1,0,0),_n=new J(0,1,0),vn=new J(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends Ie{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new on,r=new yt,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new K}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Cn.DEFAULT_UP=new J(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new J,Tn=new J,En=new J,Dn=new J,On=new J,kn=new J,An=new J,jn=new J,Mn=new J,Nn=new J,Pn=new mt,Fn=new mt,In=new mt,Ln=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){wn.subVectors(r,t),Tn.subVectors(n,t),En.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Tn),s=wn.dot(En),c=Tn.dot(Tn),l=Tn.dot(En),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Dn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Dn.x),s.addScaledVector(a,Dn.y),s.addScaledVector(o,Dn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Pn.setScalar(0),Fn.setScalar(0),In.setScalar(0),Pn.fromBufferAttribute(e,t),Fn.fromBufferAttribute(e,n),In.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pn,i.x),a.addScaledVector(Fn,i.y),a.addScaledVector(In,i.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Tn.subVectors(e,t),wn.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),wn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;On.subVectors(r,n),kn.subVectors(i,n),jn.subVectors(e,n);let s=On.dot(jn),c=kn.dot(jn);if(s<=0&&c<=0)return t.copy(n);Mn.subVectors(e,r);let l=On.dot(Mn),u=kn.dot(Mn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(On,a);Nn.subVectors(e,i);let f=On.dot(Nn),p=kn.dot(Nn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return An.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(An,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(On,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,q.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=q.workingColorSpace){return this.r=e,this.g=t,this.b=n,q.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=q.workingColorSpace){if(e=Ve(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vn(i,r,e+1/3),this.g=Vn(i,r,e),this.b=Vn(i,r,e-1/3)}return q.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){let n=Rn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=et(e.r),this.g=et(e.g),this.b=et(e.b),this}copyLinearToSRGB(e){return this.r=tt(e.r),this.g=tt(e.g),this.b=tt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return q.fromWorkingColorSpace(Hn.copy(this),e),Math.round(Be(Hn.r*255,0,255))*65536+Math.round(Be(Hn.g*255,0,255))*256+Math.round(Be(Hn.b*255,0,255))}getHexString(e=ke){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=q.workingColorSpace){q.fromWorkingColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=q.workingColorSpace){return q.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ke){q.fromWorkingColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bn);let n=He(zn.h,Bn.h,t),r=He(zn.s,Bn.s,t),i=He(zn.l,Bn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Y;Y.NAMES=Rn;var Un=0,Wn=class extends Ie{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Un++}),this.uuid=ze(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ne,this.stencilZFail=Ne,this.stencilZPass=Ne,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},Gn=class extends Wn{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},X=new J,Kn=new G,qn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Pe,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXY(t,Kn.x,Kn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)X.fromBufferAttribute(this,t),X.applyMatrix3(e),this.setXYZ(t,X.x,X.y,X.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)X.fromBufferAttribute(this,t),X.applyMatrix4(e),this.setXYZ(t,X.x,X.y,X.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)X.fromBufferAttribute(this,t),X.applyNormalMatrix(e),this.setXYZ(t,X.x,X.y,X.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)X.fromBufferAttribute(this,t),X.transformDirection(e),this.setXYZ(t,X.x,X.y,X.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ue(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=We(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ue(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ue(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ue(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ue(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Jn=class extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Yn=class extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Xn=class extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zn=0,Qn=new Yt,$n=new Cn,er=new J,tr=new St,nr=new St,rr=new J,ir=class e extends Ie{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zn++}),this.uuid=ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ke(e)?Yn:Jn)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return $n.lookAt(e),$n.updateMatrix(),this.applyMatrix4($n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Xn(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];tr.setFromBufferAttribute(n),this.morphTargetsRelative?(rr.addVectors(this.boundingBox.min,tr.min),this.boundingBox.expandByPoint(rr),rr.addVectors(this.boundingBox.max,tr.max),this.boundingBox.expandByPoint(rr)):(this.boundingBox.expandByPoint(tr.min),this.boundingBox.expandByPoint(tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nr.setFromBufferAttribute(n),this.morphTargetsRelative?(rr.addVectors(tr.min,nr.min),tr.expandByPoint(rr),rr.addVectors(tr.max,nr.max),tr.expandByPoint(rr)):(tr.expandByPoint(nr.min),tr.expandByPoint(nr.max))}tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)rr.fromBufferAttribute(a,t),o&&(er.fromBufferAttribute(e,t),rr.add(er)),r=Math.max(r,n.distanceToSquared(rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new qn(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new G,f=new G,p=new G,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rr.fromBufferAttribute(e,t),rr.normalize(),e.setXYZ(t,rr.x,rr.y,rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new qn(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},ar=new Yt,or=new Jt,sr=new Bt,cr=new J,lr=new J,ur=new J,dr=new J,fr=new J,pr=new J,mr=new J,hr=new J,gr=class extends Cn{constructor(e=new ir,t=new Gn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){pr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(fr.fromBufferAttribute(s,e),a?pr.addScaledVector(fr,r):pr.addScaledVector(fr.sub(t),r))}t.add(pr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),or.copy(e.ray).recast(e.near),!(sr.containsPoint(or.origin)===!1&&(or.intersectSphere(sr,cr)===null||or.origin.distanceToSquared(cr)>(e.far-e.near)**2))&&(ar.copy(i).invert(),or.copy(e.ray).applyMatrix4(ar),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=vr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=vr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=vr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=vr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function _r(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;hr.copy(s),hr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(hr);return l<n.near||l>n.far?null:{distance:l,point:hr.clone(),object:e}}function vr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,lr),e.getVertexPosition(c,ur),e.getVertexPosition(l,dr);let u=_r(e,t,n,r,lr,ur,dr,mr);if(u){let e=new J;Ln.getBarycoord(mr,lr,ur,dr,e),i&&(u.uv=Ln.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Ln.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Ln.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Ln.getNormal(lr,ur,dr,t.normal),u.face=t,u.barycoord=e}return u}var yr=class e extends ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Xn(c,3)),this.setAttribute(`normal`,new Xn(l,3)),this.setAttribute(`uv`,new Xn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function xr(e){let t={};for(let n=0;n<e.length;n++){let r=br(e[n]);for(let e in r)t[e]=r[e]}return t}function Sr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Cr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:q.workingColorSpace}var wr={clone:br,merge:xr},Tr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Er=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dr=class extends Wn{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tr,this.fragmentShader=Er,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Sr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Or=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kr=new J,Ar=new G,jr=new G,Mr=class extends Or{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Re*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Le*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Re*2*Math.atan(Math.tan(Le*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,Ar,jr),t.subVectors(jr,Ar)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Le*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Pr=1,Fr=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mr(Nr,Pr,e,t);r.layers=this.layers,this.add(r);let i=new Mr(Nr,Pr,e,t);i.layers=this.layers,this.add(i);let a=new Mr(Nr,Pr,e,t);a.layers=this.layers,this.add(a);let o=new Mr(Nr,Pr,e,t);o.layers=this.layers,this.add(o);let s=new Mr(Nr,Pr,e,t);s.layers=this.layers,this.add(s);let c=new Mr(Nr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ir=class extends pt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ir(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),i=new Dr({name:`CubemapFromEquirect`,uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new gr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Fr(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Rr=new J,zr=new J,Br=new K,Vr=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rr.subVectors(n,t).cross(zr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Br.getNormalMatrix(e),r=this.coplanarPoint(Rr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new Bt,Ur=new J,Wr=class{constructor(e=new Vr,t=new Vr,n=new Vr,r=new Vr,i=new Vr,a=new Vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fe){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Kr(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var qr=class e extends ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Xn(p,3)),this.setAttribute(`normal`,new Xn(m,3)),this.setAttribute(`uv`,new Xn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},Jr={basic:{uniforms:xr([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:xr([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:xr([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:xr([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:xr([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:xr([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:xr([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:xr([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:xr([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:xr([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:xr([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:xr([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag},shadow:{uniforms:xr([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Jr.physical={uniforms:xr([Jr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Yr={r:0,b:0,g:0},Xr=new on,Zr=new Yt;function Qr(e,t,n,r,i,a,o){let s=new Y(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new gr(new yr(1,1,1),new Dr({name:`BackgroundCubeMaterial`,uniforms:br(Jr.backgroundCube.uniforms),vertexShader:Jr.backgroundCube.vertexShader,fragmentShader:Jr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xr.copy(n.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zr.makeRotationFromEuler(Xr)),u.material.toneMapped=q.getTransfer(r.colorSpace)!==Me,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new gr(new qr(2,2),new Dr({name:`BackgroundMaterial`,uniforms:br(Jr.background.uniforms),vertexShader:Jr.background.vertexShader,fragmentShader:Jr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=q.getTransfer(r.colorSpace)!==Me,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Yr,Cr(e)),r.buffers.color.setClear(Yr.r,Yr.g,Yr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function $r(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ei(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ti(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function ni(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Vr,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function ri(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Lr(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var ii=class extends Or{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ai=4,oi=[.125,.215,.35,.446,.526,.582],si=20,ci=new ii,li=new Y,ui=null,di=0,fi=0,pi=!1,mi=(1+Math.sqrt(5))/2,hi=1/mi,gi=[new J(-mi,hi,0),new J(mi,hi,0),new J(-hi,0,mi),new J(hi,0,mi),new J(0,mi,-hi),new J(0,mi,hi),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],_i=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ui=this._renderer.getRenderTarget(),di=this._renderer.getActiveCubeFace(),fi=this._renderer.getActiveMipmapLevel(),pi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ci(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Si(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ui,di,fi),this._renderer.xr.enabled=pi,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ui=this._renderer.getRenderTarget(),di=this._renderer.getActiveCubeFace(),fi=this._renderer.getActiveMipmapLevel(),pi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:Ae,depthBuffer:!1},r=yi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vi(r)),this._blurMaterial=xi(r,e,t)}return r}_compileMaterial(e){let t=new gr(this._lodPlanes[0],e);this._renderer.compile(t,ci)}_sceneToCubeUV(e,t,n,r){let i=new Mr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(li),s.toneMapping=0,s.autoClear=!1;let u=new Gn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new gr(new yr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(li),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;bi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ci()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Si());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new gr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;bi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ci)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=gi[(r-t-1)%gi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new gr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*si-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):si;m>si&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);let h=[],g=0;for(let e=0;e<si;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];bi(t,3*v*(r>_-ai?r-_+ai:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ci)}};function vi(e){let t=[],n=[],r=[],i=e,a=e-ai+1+oi.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ai?s=oi[o-e+ai-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ir;h.setAttribute(`position`,new qn(f,3)),h.setAttribute(`uv`,new qn(p,2)),h.setAttribute(`faceIndex`,new qn(m,1)),t.push(h),i>ai&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function yi(e,t,n){let r=new gt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function bi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function xi(e,t,n){let r=new Float32Array(si),i=new J(0,1,0);return new Dr({name:`SphericalGaussianBlur`,defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Si(){return new Dr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ci(){return new Dr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wi(){return`

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
	`}function Ti(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new _i(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new _i(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ei(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Di(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Ke(n)?Yn:Jn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Oi(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ki(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ai(e,t,n){let r=new WeakMap,i=new mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new _t(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ji(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Mi=class extends pt{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ni=new pt,Pi=new Mi(1,1),Fi=new _t,Ii=new vt,Li=new Ir,Ri=[],zi=[],Bi=new Float32Array(16),Vi=new Float32Array(9),Hi=new Float32Array(4);function Ui(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ri[i];if(a===void 0&&(a=new Float32Array(i),Ri[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ki(e,t){let n=zi[t];n===void 0&&(n=new Int32Array(t),zi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wi(n,t))return;e.uniform2fv(this.addr,t),Gi(n,t)}}function Yi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wi(n,t))return;e.uniform3fv(this.addr,t),Gi(n,t)}}function Xi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wi(n,t))return;e.uniform4fv(this.addr,t),Gi(n,t)}}function Zi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gi(n,t)}else{if(Wi(n,r))return;Hi.set(r),e.uniformMatrix2fv(this.addr,!1,Hi),Gi(n,r)}}function Qi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gi(n,t)}else{if(Wi(n,r))return;Vi.set(r),e.uniformMatrix3fv(this.addr,!1,Vi),Gi(n,r)}}function $i(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gi(n,t)}else{if(Wi(n,r))return;Bi.set(r),e.uniformMatrix4fv(this.addr,!1,Bi),Gi(n,r)}}function ea(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wi(n,t))return;e.uniform2iv(this.addr,t),Gi(n,t)}}function na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wi(n,t))return;e.uniform3iv(this.addr,t),Gi(n,t)}}function ra(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wi(n,t))return;e.uniform4iv(this.addr,t),Gi(n,t)}}function ia(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wi(n,t))return;e.uniform2uiv(this.addr,t),Gi(n,t)}}function oa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wi(n,t))return;e.uniform3uiv(this.addr,t),Gi(n,t)}}function sa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wi(n,t))return;e.uniform4uiv(this.addr,t),Gi(n,t)}}function ca(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Pi.compareFunction=515,a=Pi):a=Ni,n.setTexture2D(t||a,i)}function la(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ii,i)}function ua(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Li,i)}function da(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fi,i)}function fa(e){switch(e){case 5126:return qi;case 35664:return Ji;case 35665:return Yi;case 35666:return Xi;case 35674:return Zi;case 35675:return Qi;case 35676:return $i;case 5124:case 35670:return ea;case 35667:case 35671:return ta;case 35668:case 35672:return na;case 35669:case 35673:return ra;case 5125:return ia;case 36294:return aa;case 36295:return oa;case 36296:return sa;case 35678:case 36198:case 36298:case 36306:case 35682:return ca;case 35679:case 36299:case 36307:return la;case 35680:case 36300:case 36308:case 36293:return ua;case 36289:case 36303:case 36311:case 36292:return da}}function pa(e,t){e.uniform1fv(this.addr,t)}function ma(e,t){let n=Ui(t,this.size,2);e.uniform2fv(this.addr,n)}function ha(e,t){let n=Ui(t,this.size,3);e.uniform3fv(this.addr,n)}function ga(e,t){let n=Ui(t,this.size,4);e.uniform4fv(this.addr,n)}function _a(e,t){let n=Ui(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function va(e,t){let n=Ui(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ya(e,t){let n=Ui(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ba(e,t){e.uniform1iv(this.addr,t)}function xa(e,t){e.uniform2iv(this.addr,t)}function Sa(e,t){e.uniform3iv(this.addr,t)}function Ca(e,t){e.uniform4iv(this.addr,t)}function wa(e,t){e.uniform1uiv(this.addr,t)}function Ta(e,t){e.uniform2uiv(this.addr,t)}function Ea(e,t){e.uniform3uiv(this.addr,t)}function Da(e,t){e.uniform4uiv(this.addr,t)}function Oa(e,t,n){let r=this.cache,i=t.length,a=Ki(n,i);Wi(r,a)||(e.uniform1iv(this.addr,a),Gi(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ni,a[e])}function ka(e,t,n){let r=this.cache,i=t.length,a=Ki(n,i);Wi(r,a)||(e.uniform1iv(this.addr,a),Gi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ii,a[e])}function Aa(e,t,n){let r=this.cache,i=t.length,a=Ki(n,i);Wi(r,a)||(e.uniform1iv(this.addr,a),Gi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Li,a[e])}function ja(e,t,n){let r=this.cache,i=t.length,a=Ki(n,i);Wi(r,a)||(e.uniform1iv(this.addr,a),Gi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fi,a[e])}function Ma(e){switch(e){case 5126:return pa;case 35664:return ma;case 35665:return ha;case 35666:return ga;case 35674:return _a;case 35675:return va;case 35676:return ya;case 5124:case 35670:return ba;case 35667:case 35671:return xa;case 35668:case 35672:return Sa;case 35669:case 35673:return Ca;case 5125:return wa;case 36294:return Ta;case 36295:return Ea;case 36296:return Da;case 35678:case 36198:case 36298:case 36306:case 35682:return Oa;case 35679:case 36299:case 36307:return ka;case 35680:case 36300:case 36308:case 36293:return Aa;case 36289:case 36303:case 36311:case 36292:return ja}}var Na=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fa(t.type)}},Pa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ma(t.type)}},Fa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function La(e,t){e.seq.push(t),e.map[t.id]=t}function Ra(e,t,n){let r=e.name,i=r.length;for(Ia.lastIndex=0;;){let a=Ia.exec(r),o=Ia.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){La(n,l===void 0?new Na(s,e,t):new Pa(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Fa(s),La(n,e)),n=e}}}var za=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ra(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ba(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Va=37297,Ha=0;function Ua(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wa=new K;function Ga(e){q._getMatrix(Wa,q.workingColorSpace,e);let t=`mat3( ${Wa.elements.map(e=>e.toFixed(4))} )`;switch(q.getTransfer(e)){case je:return[t,`LinearTransferOETF`];case Me:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ka(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ua(e.getShaderSource(t),r)}else return i}function qa(e,t){let n=Ga(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Ja(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ya=new J;function Xa(){return q.getLuminanceCoefficients(Ya),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ya.x.toFixed(4)}, ${Ya.y.toFixed(4)}, ${Ya.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Za(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(eo).join(`
`)}function Qa(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $a(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function eo(e){return e!==``}function to(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function no(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ro=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(e){return e.replace(ro,oo)}var ao=new Map;function oo(e,t){let n=Z[t];if(n===void 0){let e=ao.get(t);if(e!==void 0)n=Z[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return io(n)}var so=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(e){return e.replace(so,lo)}function lo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function uo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function fo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function po(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function mo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function ho(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function go(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function _o(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fo(n),l=po(n),u=mo(n),d=ho(n),f=go(n),p=Za(n),m=Qa(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eo).join(`
`),_.length>0&&(_+=`
`)):(g=[uo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(eo).join(`
`),_=[uo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Ja(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,qa(`linearToOutputTexel`,n.outputColorSpace),Xa(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(eo).join(`
`)),o=io(o),o=to(o,n),o=no(o,n),s=io(s),s=to(s,n),s=no(s,n),o=co(o),s=co(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ba(i,i.VERTEX_SHADER,y),S=Ba(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ka(i,x,`vertex`),r=Ka(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new za(i,h),T=$a(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Va)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ha++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var vo=0,yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bo(e),t.set(e,n)),n}},bo=class{constructor(e){this.id=vo++,this.code=e,this.usedTimes=0}};function xo(e,t,n,r,i,a,o){let s=new sn,c=new yo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Jr[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=_.isInstancedMesh===!0,P=_.isBatchedMesh===!0,F=!!a.map,I=!!a.matcap,ee=!!x,te=!!a.aoMap,ne=!!a.lightMap,re=!!a.bumpMap,ie=!!a.normalMap,ae=!!a.displacementMap,L=!!a.emissiveMap,oe=!!a.metalnessMap,se=!!a.roughnessMap,ce=a.anisotropy>0,le=a.clearcoat>0,ue=a.dispersion>0,de=a.iridescence>0,fe=a.sheen>0,pe=a.transmission>0,R=ce&&!!a.anisotropyMap,me=le&&!!a.clearcoatMap,z=le&&!!a.clearcoatNormalMap,B=le&&!!a.clearcoatRoughnessMap,V=de&&!!a.iridescenceMap,he=de&&!!a.iridescenceThicknessMap,H=fe&&!!a.sheenColorMap,U=fe&&!!a.sheenRoughnessMap,ge=!!a.specularMap,_e=!!a.specularColorMap,ve=!!a.specularIntensityMap,ye=pe&&!!a.transmissionMap,be=pe&&!!a.thicknessMap,xe=!!a.gradientMap,Se=!!a.alphaMap,Ce=a.alphaTest>0,we=!!a.alphaHash,Te=!!a.extensions,Ee=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let De={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ae,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:f&&ae,emissiveMap:L,normalMapObjectSpace:ie&&a.normalMapType===1,normalMapTangentSpace:ie&&a.normalMapType===0,metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:R,clearcoat:le,clearcoatMap:me,clearcoatNormalMap:z,clearcoatRoughnessMap:B,dispersion:ue,iridescence:de,iridescenceMap:V,iridescenceThicknessMap:he,sheen:fe,sheenColorMap:H,sheenRoughnessMap:U,specularMap:ge,specularColorMap:_e,specularIntensityMap:ve,transmission:pe,transmissionMap:ye,thicknessMap:be,gradientMap:xe,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:we,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:te&&h(a.aoMap.channel),lightMapUv:ne&&h(a.lightMap.channel),bumpMapUv:re&&h(a.bumpMap.channel),normalMapUv:ie&&h(a.normalMap.channel),displacementMapUv:ae&&h(a.displacementMap.channel),emissiveMapUv:L&&h(a.emissiveMap.channel),metalnessMapUv:oe&&h(a.metalnessMap.channel),roughnessMapUv:se&&h(a.roughnessMap.channel),anisotropyMapUv:R&&h(a.anisotropyMap.channel),clearcoatMapUv:me&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:z&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:he&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:H&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:U&&h(a.sheenRoughnessMap.channel),specularMapUv:ge&&h(a.specularMap.channel),specularColorMapUv:_e&&h(a.specularColorMap.channel),specularIntensityMapUv:ve&&h(a.specularIntensityMap.channel),transmissionMapUv:ye&&h(a.transmissionMap.channel),thicknessMapUv:be&&h(a.thicknessMap.channel),alphaMapUv:Se&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ie||ce),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(F||Se),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:M,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&q.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&a.emissiveMap.isVideoTexture===!0&&q.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Te&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Te&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Jr[t];n=wr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new _o(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function So(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Co(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function To(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Co),r.length>1&&r.sort(t||wo),i.length>1&&i.sort(t||wo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Eo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new To,e.set(t,[i])):n>=r.length?(i=new To,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Do(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new Y};break;case`SpotLight`:n={position:new J,direction:new J,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function Oo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ko=0;function Ao(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function jo(e){let t=new Do,n=Oo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Yt,o=new Yt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ao);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ko++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Mo(e){let t=new jo(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function No(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Mo(e),t.set(n,[a])):r>=i.length?(a=new Mo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Po=class extends Wn{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=De,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends Wn{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Io=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lo=`uniform sampler2D shadow_pass;
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
}`;function Ro(e,t,n){let i=new Wr,a=new G,o=new G,s=new mt,c=new Po({depthPacking:Oe}),l=new Fo,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Io,fragmentShader:Lo}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new ir;h.setAttribute(`position`,new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new gr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new gt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new gt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var zo={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Bo(e,t){function n(){let t=!1,n=new mt,r=null,i=new mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=zo[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Y(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,I={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new mt().fromArray(ee),re=new mt().fromArray(te);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),R(!1),me(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(oe(e.BLEND),h=!1);return}if(h===!1&&(L(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(ue[n],ue[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function pe(t,n){t.side===2?oe(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),R(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),B(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function R(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function me(t){t===0?oe(e.CULL_FACE):(L(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function z(t){t!==O&&(M&&e.lineWidth(t),O=t)}function B(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):oe(e.POLYGON_OFFSET_FILL)}function V(t){t?L(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function he(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function H(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function U(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ge(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function De(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function Oe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},F=null,I={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Y(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:R,setCullFace:me,setLineWidth:z,setPolygonOffset:B,setScissorTest:V,activeTexture:he,bindTexture:H,unbindTexture:U,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:we,texImage3D:Te,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:Ee,viewport:De,reset:Ae}}function Vo(e,t,n,r){let i=Ho(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case ee:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case le:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case z:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case B:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case V:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case he:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case H:case U:case ge:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _e:case ve:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ho(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function Uo(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):qe(`canvas`)}function w(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function T(e){return e.generateMipmaps}function E(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?je:q.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function A(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t),t.isVideoTexture&&y.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),I(t)}function P(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function F(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function I(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ee=0;function te(){ee=0}function ne(){let e=ee;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ee+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(e,t){let n=f.get(e);if(e.isVideoTexture&&be(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ae(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){fe(n,e,t);return}d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function L(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){fe(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function oe(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){pe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let se={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ce={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},le={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ue(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,se[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,se[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,se[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ce[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ce[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,le[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function de(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,M));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=re(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&F(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function fe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=de(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=q.getPrimaries(q.workingColorSpace),s=t.colorSpace===``?null:q.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=xe(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=k(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);ue(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(t,u);if(t.isDepthTexture)g=A(t.format===D,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture)if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023)if(f!==null)if(y){if(x)if(t.layerUpdates.size>0){let n=Vo(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}else if(t.isDataArrayTexture)if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x)if(t.layerUpdates.size>0){let e=Vo(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b)if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}else if(v.length>0){if(y&&b){let e=Se(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=Se(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function pe(e,t,n){if(t.image.length!==6)return;let r=de(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=q.getPrimaries(q.workingColorSpace),o=t.colorSpace===``?null:q.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=xe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ue(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Se(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function R(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),ye(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,ve(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function me(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=A(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=ve(t);ye(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.colorSpace),c=ve(t);n&&ye(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):ye(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function z(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,(!n.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),ie(t.depthTexture,0);let r=n.__webglTexture,i=ve(t);if(t.depthTexture.format===1026)ye(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)ye(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function B(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);z(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),me(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),me(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function V(e,t,n){let r=f.get(e);t!==void 0&&R(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&B(e)}function he(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,N);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&ye(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=ve(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),me(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ue(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)R(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else R(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),ue(l.TEXTURE_2D,r),R(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ue(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)R(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else R(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&B(e)}function H(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let U=[],ge=[];function _e(e){if(e.samples>0){if(ye(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(U.length=0,ge.length=0,U.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(U.push(a),ge.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ge)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,U))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function ve(e){return Math.min(p.maxSamples,e.samples)}function ye(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function be(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(q.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ne,this.resetTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=L,this.setTextureCube=oe,this.rebindTextures=V,this.setupRenderTarget=he,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=R,this.useMultisampledRTT=ye}function Wo(e,t){function n(n,r=``){let i,a=q.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Go=class extends Mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ko=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},qo={type:`move`},Jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qo)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ko;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xo=`
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

}`,Zo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new pt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dr({vertexShader:Yo,fragmentShader:Xo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gr(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qo=class extends Ie{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new Zo,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new G,T=null,O=new Mr;O.viewport=new mt;let k=new Mr;k.viewport=new mt;let A=[O,k],j=new Go,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Jo,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Jo,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Jo,x[e]=t),t.getHandSpace()};function P(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,I);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,I),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new gt(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?D:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new gt(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new Mi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ee=new J,te=new J;function ne(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),O.layers.mask=e.layers.mask|2,k.layers.mask=e.layers.mask|4,j.layers.mask=O.layers.mask|k.layers.mask;let i=e.parent,a=j.cameras;re(j,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),ie(e,j,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Re*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let ae=null;function L(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=A[r];o===void 0&&(o=new Mr,o.layers.enable(r),o.viewport=new mt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let oe=new Gr;oe.setAnimationLoop(L),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},$o=new on,es=new Yt;function ts(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Cr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,$o.copy(o),$o.x*=-1,$o.y*=-1,$o.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&($o.y*=-1,$o.z*=-1),e.envMapRotation.value.setFromMatrix4(es.makeRotationFromEuler($o)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ns(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var rs=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,O=null,k=new mt,A=new mt,j=null,M=new Y(0),N=0,P=t.width,F=t.height,I=1,ee=null,te=null,ne=new mt(0,0,P,F),re=new mt(0,0,P,F),ie=!1,ae=new Wr,L=!1,oe=!1,se=new Yt,ce=new Yt,le=new J,ue=new mt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function pe(){return E===null?I:1}let R=n;function me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),R===null){let t=`webgl2`;if(R=me(t,e),R===null)throw me(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let z,B,V,he,H,U,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,je,Me,Ne,Pe,Fe;function Ie(){z=new Ei(R),z.init(),Ne=new Wo(R,z),B=new ti(R,z,e,Ne),V=new Bo(R,z),B.reverseDepthBuffer&&p&&V.buffers.depth.setReversed(!0),he=new ki(R),H=new So,U=new Uo(R,z,V,H,B,Ne,he),ge=new ri(S),_e=new Ti(S),ve=new Kr(R),Pe=new $r(R,ve),ye=new Di(R,ve,he,Pe),be=new ji(R,ye,ve,he),Oe=new Ai(R,B,U),Te=new ni(H),xe=new xo(S,ge,_e,z,B,Pe,Te),Se=new ts(S,H),Ce=new Eo,we=new No(z),De=new Qr(S,ge,_e,V,be,m,s),Ee=new Ro(S,be,B),Fe=new ns(R,he,B,V),je=new ei(R,z,he),Me=new Oi(R,z,he),he.programs=xe.programs,S.capabilities=B,S.extensions=z,S.properties=H,S.renderLists=Ce,S.shadowMap=Ee,S.state=V,S.info=he}Ie();let W=new Qo(S,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=z.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=z.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(P,F,!1))},this.getSize=function(e){return e.set(P,F)},this.setSize=function(e,n,r=!0){if(W.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}P=e,F=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(P*I,F*I).floor()},this.setDrawingBufferSize=function(e,n,r){P=e,F=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(ne)},this.setViewport=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),V.viewport(k.copy(ne).multiplyScalar(I).round())},this.getScissor=function(e){return e.copy(re)},this.setScissor=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),V.scissor(A.copy(re).multiplyScalar(I).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){V.setScissorTest(ie=e)},this.setOpaqueSort=function(e){ee=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=De.getClearColor(),r=De.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,R.clearBufferuiv(R.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferiv(R.COLOR,0,_))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Ce.dispose(),we.dispose(),H.dispose(),ge.dispose(),_e.dispose(),be.dispose(),Pe.dispose(),Fe.dispose(),xe.dispose(),W.dispose(),W.removeEventListener(`sessionstart`,K),W.removeEventListener(`sessionend`,Ge),Ke.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=he.autoReset,t=Ee.enabled,n=Ee.autoUpdate,r=Ee.needsUpdate,i=Ee.type;Ie(),he.autoReset=e,Ee.enabled=t,Ee.autoUpdate=n,Ee.needsUpdate=r,Ee.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),H.remove(e)}function He(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){xe.releaseProgram(e)}),e.isShaderMaterial&&xe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=de);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ot(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ye.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Pe.setup(i,r,s,n,c);let h,g=je;if(c!==null&&(h=ve.get(c),g=Me,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*pe()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*pe()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(z.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ve.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,n),e.side=0,e.needsUpdate=!0,rt(e,t,n),e.side=2):rt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=we.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}z.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function G(e){We&&We(e)}function K(){Ke.stop()}function Ge(){Ke.start()}let Ke=new Gr;Ke.setAnimationLoop(G),typeof self<`u`&&Ke.setContext(self),this.setAnimationLoop=function(e){We=e,W.setAnimationLoop(e),e===null?Ke.stop():Ke.start()},W.addEventListener(`sessionstart`,K),W.addEventListener(`sessionend`,Ge),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(t),t=W.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=we.get(e,x.length),y.init(t),x.push(y),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(ce),oe=this.localClippingEnabled,L=Te.init(this.clippingPlanes,oe),v=Ce.get(e,b.length),v.init(),b.push(v),W.enabled===!0&&W.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&qe(e,t,-1/0,S.sortObjects)}qe(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ee,te),fe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,fe&&De.addToRenderList(v,e),this.info.render.frame++,L===!0&&Te.beginShadows();let n=y.state.shadowsArray;Ee.render(n,e,t),L===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];et(r,i,e,a)}fe&&De.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ye(v,e,r,r.viewport)}}else i.length>0&&et(r,i,e,t),fe&&De.render(e),Ye(v,e,t);E!==null&&(U.updateMultisampleRenderTarget(E),U.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Pe.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],L===!0&&Te.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ae.intersectsSprite(e)){r&&ue.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);let t=be.update(e),i=e.material;i.visible&&v.push(e,t,i,n,ue.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ae.intersectsObject(e))){let t=be.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ue.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ue.copy(e.boundingSphere.center)),ue.applyMatrix4(e.matrixWorld).applyMatrix4(ce)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,ue.z,o)}}else i.visible&&v.push(e,t,i,n,ue.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)qe(i[e],t,n,r)}function Ye(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),L===!0&&Te.setGlobalState(S.clippingPlanes,n),r&&V.viewport(k.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new gt(1,1,{generateMipmaps:!0,type:z.has(`EXT_color_buffer_half_float`)||z.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:q.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(M),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),fe&&De.render(n);let u=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),L===!0&&Te.setGlobalState(S.clippingPlanes,r),tt(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),z.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,nt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(M,N),d!==void 0&&(r.viewport=d),S.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&nt(o,t,n,s,c,l)}}function nt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=de);let r=H.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=xe.getParameters(e,i.state,a,t,n),c=xe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?_e:ge).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return at(e,s),u}else s.uniforms=xe.getUniforms(e),e.onBeforeCompile(s,S),u=xe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Te.uniform),at(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=za.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t,n,r,i){t.isScene!==!0&&(t=de),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ae,c=(r.isMeshStandardMaterial?_e:ge).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=H.get(r),v=y.state.lights;if(L===!0&&(oe===!0||e!==O)){let t=e===O&&r.id===D;Te.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Te.numPlanes||_.numIntersection!==Te.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=rt(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(V.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){V.buffers.depth.getReversed()?(se.copy(e.projectionMatrix),Qe(se),$e(se),k.setValue(R,`projectionMatrix`,se)):k.setValue(R,`projectionMatrix`,e.projectionMatrix),k.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(R,le.setFromMatrixPosition(e.matrixWorld)),B.logarithmicDepthBuffer&&k.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(R,i,`bindMatrix`),k.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(R,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(k.setOptional(R,i,`batchingTexture`),k.setValue(R,`batchingTexture`,i._matricesTexture,U),k.setOptional(R,i,`batchingIdTexture`),k.setValue(R,`batchingIdTexture`,i._indirectTexture,U),k.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(R,`batchingColorTexture`,i._colorsTexture,U));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Oe.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(R,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(R,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&st(A,T),a&&r.fog===!0&&Se.refreshFogUniforms(A,a),Se.refreshMaterialUniforms(A,r,I,F,y.state.transmissionRenderTarget[e.id]),za.upload(R,it(_),A,U)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(za.upload(R,it(_),A,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(R,`center`,i.center),k.setValue(R,`modelViewMatrix`,i.modelViewMatrix),k.setValue(R,`normalMatrix`,i.normalMatrix),k.setValue(R,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Fe.update(n,x),Fe.bind(n,x)}}return x}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=n;let r=H.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||z.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=H.get(e);if(s.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(R.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(s.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(ne).multiplyScalar(I).floor(),A.copy(re).multiplyScalar(I).floor(),j=ie;if(V.bindFramebuffer(R.FRAMEBUFFER,i)&&r&&V.drawBuffers(e,i),V.viewport(k),V.scissor(A),V.setScissorTest(j),a){let r=H.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=H.get(e.texture),i=t||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){V.bindFramebuffer(R.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!B.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!B.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Ne.convert(s),Ne.convert(c),a)}finally{let e=E===null?null:H.get(E).__webglFramebuffer;V.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!B.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!B.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(R.FRAMEBUFFER,s);let e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,e),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Ne.convert(c),Ne.convert(l),0);let o=E===null?null:H.get(E).__webglFramebuffer;V.bindFramebuffer(R.FRAMEBUFFER,o);let u=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ze(R,u,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.deleteBuffer(e),R.deleteSync(u),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Xe(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Xe(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ne.convert(t.format),g=Ne.convert(t.type),_;t.isData3DTexture?(U.setTexture3D(t,0),_=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),_=R.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),_=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let v=R.getParameter(R.UNPACK_ROW_LENGTH),y=R.getParameter(R.UNPACK_IMAGE_HEIGHT),b=R.getParameter(R.UNPACK_SKIP_PIXELS),x=R.getParameter(R.UNPACK_SKIP_ROWS),S=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,m.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,m.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,c),R.pixelStorei(R.UNPACK_SKIP_ROWS,l),R.pixelStorei(R.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=H.get(e),r=H.get(t),m=H.get(n.__renderTarget),h=H.get(r.__renderTarget);V.bindFramebuffer(R.READ_FRAMEBUFFER,m.__webglFramebuffer),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(t).__webglTexture,i,p+n),R.blitFramebuffer(c,l,a,o,d,f,a,o,R.DEPTH_BUFFER_BIT,R.NEAREST)):w?R.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):R.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);V.bindFramebuffer(R.READ_FRAMEBUFFER,null),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):R.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):R.texSubImage2D(R.TEXTURE_2D,i,d,f,a,o,h,g,m);R.pixelStorei(R.UNPACK_ROW_LENGTH,v),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,y),R.pixelStorei(R.UNPACK_SKIP_PIXELS,b),R.pixelStorei(R.UNPACK_SKIP_ROWS,x),R.pixelStorei(R.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&R.generateMipmap(_),V.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(Xe(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),Xe(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,V.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Fe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=q._getDrawingBufferColorSpace(e),t.unpackColorSpace=q._getUnpackColorSpace()}},is=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},as=class extends Dr{static get type(){return`RawShaderMaterial`}constructor(e){super(e),this.isRawShaderMaterial=!0}};function os(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ss(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var cs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},ls=class extends cs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:we,endingEnd:we}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Te:i=e,o=2*t-n;break;case Ee:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Te:a=e,s=2*n-t;break;case Ee:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},us=class extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ds=class extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ds(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new us(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ls(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xe:t=this.InterpolantFactoryMethodDiscrete;break;case Se:t=this.InterpolantFactoryMethodLinear;break;case Ce:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xe;case this.InterpolantFactoryMethodLinear:return Se;case this.InterpolantFactoryMethodSmooth:return Ce}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ss(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ce,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fs.prototype.TimeBufferType=Float32Array,fs.prototype.ValueBufferType=Float32Array,fs.prototype.DefaultInterpolation=Se;var ps=class extends fs{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName=`bool`,ps.prototype.ValueBufferType=Array,ps.prototype.DefaultInterpolation=xe,ps.prototype.InterpolantFactoryMethodLinear=void 0,ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends fs{};ms.prototype.ValueTypeName=`color`;var hs=class extends fs{};hs.prototype.ValueTypeName=`number`;var gs=class extends cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)yt.slerpFlat(i,0,a,c-o,a,c,s);return i}},_s=class extends fs{InterpolantFactoryMethodLinear(e){return new gs(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName=`quaternion`,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends fs{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName=`string`,vs.prototype.ValueBufferType=Array,vs.prototype.DefaultInterpolation=xe,vs.prototype.InterpolantFactoryMethodLinear=void 0,vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends fs{};ys.prototype.ValueTypeName=`vector`;var bs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},xs=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Ss=class{constructor(e){this.manager=e===void 0?xs:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ss.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Cs=class extends Ss{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=bs.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=qe(`img`);function s(){l(),bs.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},ws=class extends Ss{constructor(e){super(e)}load(e,t,n,r){let i=new pt,a=new Cs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Ts=`\\[\\]\\.:\\/`,Es=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ds=`[^\\[\\]\\.:\\/]`,Os=`[^`+Ts.replace(`\\.`,``)+`]`,ks=`((?:WC+[\\/:])*)`.replace(`WC`,Ds),As=`(WCOD+)?`.replace(`WCOD`,Os),js=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ds),Ms=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ds),Ns=RegExp(`^`+ks+As+js+Ms+`$`),Ps=[`material`,`materials`,`bones`,`map`],Fs=class{constructor(e,t,n){let r=n||$.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Es,``)}static parseTrackName(e){let t=Ns.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ps.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$.Composite=Fs,$.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$.prototype.GetterByBindingType=[$.prototype._getValue_direct,$.prototype._getValue_array,$.prototype._getValue_arrayElement,$.prototype._getValue_toArray],$.prototype.SetterByBindingTypeAndVersioning=[[$.prototype._setValue_direct,$.prototype._setValue_direct_setNeedsUpdate,$.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$.prototype._setValue_array,$.prototype._setValue_array_setNeedsUpdate,$.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$.prototype._setValue_arrayElement,$.prototype._setValue_arrayElement_setNeedsUpdate,$.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$.prototype._setValue_fromArray,$.prototype._setValue_fromArray_setNeedsUpdate,$.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var Is=Object.defineProperty,Ls=(e,t,n)=>t in e?Is(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rs=(e,t,n)=>Ls(e,typeof t==`symbol`?t:t+``,n),zs=`
precision highp float;

// --- ribbon attributes (per vertex; baked per-stroke at merge time) ---
attribute vec3 aCenter;   // this centre-line point
attribute vec3 aPrev;     // previous centre-line point
attribute vec3 aNext;     // next centre-line point
attribute float aSide;    // -1 or +1 (which edge of the ribbon)
attribute vec2 aUv;       // u along length, v across width
attribute vec3 aColor;    // stroke colour (straight sRGB)
attribute float aWidthPx; // stroke width in CSS px (at depth w=1)
attribute float aOpacity; // stroke opacity

// --- 2-point projection params ---
uniform vec2  uVpX;          // vanishing point of world +X (NDC)
uniform vec2  uVpZ;          // vanishing point of world +Z (NDC)
uniform vec2  uOrigin;       // screen position of world origin (NDC)
uniform float uPerspective;  // convergence strength (focal knob)
uniform float uVerticalScale;
uniform float uZoom;

// --- ribbon / viewport params ---
// The model is authored in a square frame (logical NDC, [-1,1] on both axes).
// uFit maps that square into the actual canvas clip space, preserving the
// model's aspect ratio (the square is centred; extra space becomes margin).
uniform vec2  uFit;             // (minDim/width, minDim/height)
uniform float uMinDim;          // min(width, height) in CSS px
uniform float uThicknessFalloff;// 0 = constant px width, 1 = perspective

varying vec2 vUv;
varying vec3 vColor;
varying float vOpacity;

// Custom 2-point projection. Returns vec3(q.x, q.y, w) where q is the position
// in the square authoring frame and w is the homogeneous depth term (~1 near the
// origin, growing with distance).
vec3 project(vec3 world) {
  float k = uPerspective;
  float hx = world.x * k * uVpX.x + world.z * k * uVpZ.x + uOrigin.x;
  float hy = world.x * k * uVpX.y + world.y * uVerticalScale + world.z * k * uVpZ.y + uOrigin.y;
  float hw = world.x * k + world.z * k + 1.0;
  vec2 q = vec2(hx, hy) / hw * uZoom;
  return vec3(q, hw);
}

void main() {
  vec3 c = project(aCenter);
  vec2 qc = c.xy;
  vec2 qp = project(aPrev).xy;
  vec2 qn = project(aNext).xy;

  // The square frame is isotropic in pixels, so tangent/normal are computed
  // directly in it — no aspect correction needed.
  vec2 dir = qn - qp;
  if (length(dir) < 1e-6) dir = qc - qp;        // endpoint fallbacks
  if (length(dir) < 1e-6) dir = qn - qc;
  if (length(dir) < 1e-6) dir = vec2(1.0, 0.0);
  dir = normalize(dir);
  vec2 normal = vec2(-dir.y, dir.x);

  // Half width in square-frame units: 2 units span minDim px, so px/minDim.
  float halfWidth = aWidthPx / uMinDim;

  // Thickness vs distance: w==1 near origin -> factor 1; far -> 1/w (< 1).
  float depthScale = mix(1.0, clamp(1.0 / c.z, 0.0, 8.0), uThicknessFalloff);

  vec2 q = qc + normal * halfWidth * depthScale * aSide;

  vUv = aUv;
  vColor = aColor;
  vOpacity = aOpacity;
  gl_Position = vec4(q * uFit, 0.0, 1.0);
}
`,Bs=`
precision highp float;

uniform sampler2D uBrush;
uniform float uInkBlend;   // 1 = CMYK multiply mode, 0 = normal alpha

varying vec2 vUv;
varying vec3 vColor;
varying float vOpacity;

void main() {
  vec4 tex = texture2D(uBrush, vUv);
  // Brush textures carry the ink shape in their alpha channel.
  float a = tex.a * vOpacity;
  if (a < 0.01) discard;

  if (uInkBlend > 0.5) {
    // CMYK ink mix on a transparent canvas. The RGB blend multiplies (dst * src)
    // against a white-cleared framebuffer, so the colour we emit IS the multiply
    // factor: a coverage-weighted mix(white, colour, a) — full ink darkens fully,
    // faint/edge pixels barely darken (matches the old opaque-white look). Alpha
    // carries straight coverage and accumulates "over", so non-ink stays
    // transparent (the page shows through).
    gl_FragColor = vec4(mix(vec3(1.0), vColor, a), a);
  } else {
    gl_FragColor = vec4(vColor, a); // ordinary alpha "over"
  }
}
`,Vs=`
precision highp float;
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,Hs=`
precision highp float;
uniform sampler2D uTex;
varying vec2 vUv;
void main() {
  vec4 t = texture2D(uTex, vUv);     // t.rgb = T (ink over white), t.a = coverage
  float a = t.a;
  // Un-premultiply T against white: rgb*a + (1-a) == T  =>  rgb = (T-1+a)/a.
  vec3 rgb = a > 1e-4 ? (t.rgb - (1.0 - a)) / a : vec3(0.0);
  gl_FragColor = vec4(clamp(rgb, 0.0, 1.0), a);
}
`;function Us(e){let t=0,n=0;for(let r of e){let e=r.points.length;e<2||(t+=e*2,n+=(e-1)*6)}let r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t*3),o=new Float32Array(t),s=new Float32Array(t*2),c=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t),d=new Uint32Array(n),f=0,p=0,m=(e,t,n)=>{e[t*3+0]=n[0],e[t*3+1]=n[1],e[t*3+2]=n[2]};for(let t of e){let e=t.points,n=e.length;if(n<2)continue;let h=0,g=Array(n);g[0]=0;for(let t=1;t<n;t++){let n=e[t-1],r=e[t];h+=Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2]),g[t]=h}let _=h||1,v=f;for(let d=0;d<n;d++){let p=e[d],h=e[Math.max(d-1,0)],v=e[Math.min(d+1,n-1)],y=g[d]/_;for(let e=0;e<2;e++)m(r,f,p),m(i,f,h),m(a,f,v),m(c,f,t.color),o[f]=e===0?-1:1,l[f]=t.widthPx,u[f]=t.opacity,s[f*2+0]=y,s[f*2+1]=e===0?0:1,f++}for(let e=0;e<n-1;e++){let t=v+e*2,n=v+e*2+1,r=v+(e+1)*2,i=v+(e+1)*2+1;d[p++]=t,d[p++]=n,d[p++]=r,d[p++]=r,d[p++]=n,d[p++]=i}}let h=new ir;return h.setAttribute(`aCenter`,new qn(r,3)),h.setAttribute(`aPrev`,new qn(i,3)),h.setAttribute(`aNext`,new qn(a,3)),h.setAttribute(`aSide`,new qn(o,1)),h.setAttribute(`aUv`,new qn(s,2)),h.setAttribute(`aColor`,new qn(c,3)),h.setAttribute(`aWidthPx`,new qn(l,1)),h.setAttribute(`aOpacity`,new qn(u,1)),h.setIndex(new qn(d,1)),h}var Ws=document.createElement(`canvas`);Ws.width=Ws.height=1;var Gs=Ws.getContext(`2d`,{willReadFrequently:!0}),Ks=new Map;function qs(e){let t=Ks.get(e);if(t)return t;Gs.clearRect(0,0,1,1),Gs.fillStyle=`#000`,Gs.fillStyle=e,Gs.fillRect(0,0,1,1);let n=Gs.getImageData(0,0,1,1).data,r=[n[0]/255,n[1]/255,n[2]/255];return Ks.set(e,r),r}var Js=class{constructor(e){Rs(this,`renderer`),Rs(this,`scene`,new is),Rs(this,`camera`,new Or),Rs(this,`batches`,[]),Rs(this,`brushes`,[]),Rs(this,`params`,{vpX:{x:.95,y:-.25},vpZ:{x:-.95,y:-.25},origin:{x:0,y:-.1},perspective:.35,verticalScale:.9,zoom:1}),Rs(this,`global`,{thicknessFalloff:0,brushOverride:null,inkBlend:!0}),Rs(this,`width`,1),Rs(this,`height`,1),Rs(this,`raf`,0),Rs(this,`dirty`,!0),Rs(this,`target`),Rs(this,`compositeScene`,new is),Rs(this,`compositeMat`),Rs(this,`renderOnce`,()=>{if(!this.dirty)return;this.dirty=!1;let e=this.params,t=Math.min(this.width,this.height),n=t/this.width,r=t/this.height,i=this.global.brushOverride;for(let a of this.batches){let o=a.material.uniforms;o.uVpX.value.set(e.vpX.x,e.vpX.y),o.uVpZ.value.set(e.vpZ.x,e.vpZ.y),o.uOrigin.value.set(e.origin.x,e.origin.y),o.uPerspective.value=e.perspective,o.uVerticalScale.value=e.verticalScale,o.uZoom.value=e.zoom,o.uFit.value.set(n,r),o.uMinDim.value=t,o.uThicknessFalloff.value=this.global.thicknessFalloff;let s=i??a.brushIndex;this.brushes[s]&&(o.uBrush.value=this.brushes[s])}this.global.inkBlend?(this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.compositeScene,this.camera)):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera))}),this.renderer=new rs({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(16777215,0),this.target=new gt(1,1,{type:g,depthBuffer:!1,stencilBuffer:!1,magFilter:r,minFilter:r,samples:4});let t=new ir;t.setAttribute(`aPos`,new qn(new Float32Array([-1,-1,3,-1,-1,3]),2)),t.setIndex([0,1,2]),this.compositeMat=new as({vertexShader:Vs,fragmentShader:Hs,uniforms:{uTex:{value:this.target.texture}},depthTest:!1,depthWrite:!1,blending:0});let n=new gr(t,this.compositeMat);n.frustumCulled=!1,this.compositeScene.add(n)}setBrushes(e){this.brushes=e,this.dirty=!0}setStrokes(e){for(let e of this.batches)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose();this.batches=[];let t=new Map;for(let n of e){let e=n.style.brush,r=t.get(e);r||t.set(e,r=[]),r.push({points:n.points,color:qs(n.style.color),widthPx:n.style.widthPx,opacity:n.style.opacity})}for(let[e,n]of t){let t=Us(n),r=new as({vertexShader:zs,fragmentShader:Bs,transparent:!0,depthTest:!1,depthWrite:!1,side:2,uniforms:{uVpX:{value:new G},uVpZ:{value:new G},uOrigin:{value:new G},uPerspective:{value:0},uVerticalScale:{value:1},uZoom:{value:1},uFit:{value:new G(1,1)},uMinDim:{value:1},uThicknessFalloff:{value:0},uBrush:{value:this.brushes[e]??null},uInkBlend:{value:1}}}),i=new gr(t,r);i.frustumCulled=!1,this.scene.add(i),this.batches.push({mesh:i,material:r,brushIndex:e})}this.applyBlendMode(),this.dirty=!0}applyBlendMode(){this.renderer.setClearColor(16777215,0);for(let e of this.batches){let t=e.material;t.uniforms.uInkBlend.value=+!!this.global.inkBlend,this.global.inkBlend?(t.blending=5,t.blendEquation=100,t.blendSrc=200,t.blendDst=202,t.blendEquationAlpha=100,t.blendSrcAlpha=201,t.blendDstAlpha=205):t.blending=1}}setProjection(e){this.params=e,this.dirty=!0}setGlobalStyle(e){this.global=e,this.applyBlendMode(),this.dirty=!0}getProjection(){return this.params}resize(e,t){this.width=Math.max(1,e),this.height=Math.max(1,t),this.renderer.setSize(this.width,this.height,!1);let n=this.renderer.getDrawingBufferSize(new G);this.target.setSize(Math.max(1,n.x),Math.max(1,n.y)),this.dirty=!0}render(){this.dirty=!0,this.renderOnce()}start(){let e=()=>{this.renderOnce(),this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e)}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}dispose(){this.stop();for(let e of this.batches)e.mesh.geometry.dispose(),e.material.dispose();this.batches=[],this.target.dispose(),this.compositeMat.dispose(),this.renderer.dispose()}},Ys=[`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDUxMiAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNDczIDY0LjE0MjFMLTEuMDk2NzNlLTA1IDY0LjE0MjEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iNDgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPg0KPHBhdGggZD0iTTQzMyAxMTQuMTQyTDQ4MyA2NC4xNDIyTDQzMyAxNC4xNDIxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjQwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4NCjwvc3ZnPg0K`,`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDUxMiAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTkuMTM0NyA0LjAwMTg3QzE5LjA4MjIgMS4zMjIwOSAxOS43NzcgLTAuMDU4OTY3NiAyMS4wNTA4IDAuMDAxOTMwMjRDMjEuMTAyOSAyLjY4MDM0IDIwLjQwODEgNC4wNjI3NiAxOS4xMzQ3IDQuMDAxODdaTTg0Ljg1OTQgMTEuMTczNkM4NC44NjIzIDkuNDIwNDggODQuODUxNSA3LjYxODcxIDg0Ljg1MTYgNS44NTM0Qzg1LjU4OSA1LjgxMDc4IDg2LjM1MDUgNS44NjEzNCA4Ny4wODIgNS44MDY1M0M4Ny44MTMyIDUuNzUxMjcgODguNjc4MSA1LjA0NDEyIDg4LjY4MTYgNy4xMTEyQzg3LjgxNjIgNy4xNjU5OSA4Ny4wMjA0IDYuNzQ3NDcgODYuNDQzNCA4LjUxNzQzQzg1Ljg2NjIgMTAuMjg5NyA4Ni4yODc2IDExLjczNCA4NC44NTk0IDExLjE3MzZaTTgzLjU5NTcgMTUuMTk3QzgzLjE2NTMgMTIuOTg1MyA4Mi43MzcxIDEwLjc3NjEgODIuMzA2NiA4LjU2NDNDODEuMjQ1OCA5LjQ2NTYxIDgwLjE4MTkgMTAuMzczOSA3OS4xMjExIDExLjI3NTJDNzkuNDY3OSA2LjgwNTQ3IDgwLjg5MjggNS41MDc1OCA4Mi45MzU1IDUuODg0NjVDODMuMTU0IDguOTg3NTMgODMuMzc3MyAxMi4wOTQxIDgzLjU5NTcgMTUuMTk3Wk03Ni41MzMyIDExLjM4NDZDNzYuMTE2NCAxMC45MTU2IDc1LjcwMTkgMTAuNDQ3MyA3NS4yODUyIDkuOTc4MzRDNzUuOTIzNSA5Ljk2NjE2IDc2LjU2NDggOS45NTkyNyA3Ny4yMDMxIDkuOTQ3MDlDNzcuNDEyOCA4LjYxMzgyIDc3LjYyMDMgNy4yODA0MyA3Ny44MzAxIDUuOTQ3MTVDNzcuODM1OSA4LjYxMzc3IDc3Ljg0MTggMTEuMjg4MiA3Ny44NDc3IDEzLjk1NDhDNzcuNDIyMSAxMy45NjA5IDc2Ljk5NTggMTMuOTcyMiA3Ni41NzAzIDEzLjk3ODNDNzYuNTU4NyAxMy4xMTQgNzYuNTQ0OCAxMi4yNDg4IDc2LjUzMzIgMTEuMzg0NlpNNzEuNDU1MSAxMC4wNjQzQzcxLjMzMDggOC43MzUyNCA3MS44Njk0IDUuNzA0NjIgNzIuNzIyNyA2LjA1NjUzQzcyLjcyNTUgNy4zODk0MyA3Mi43MzI1IDguNzIzNTYgNzIuNzMyNCAxMC4wNTY1QzcyLjMwNjkgMTAuMDU2NSA3MS44ODA2IDEwLjA2NDMgNzEuNDU1MSAxMC4wNjQzWk05MS4yNDQxIDExLjA4NzdDOTEuMjE5IDEwLjg0NzQgOTEuMjM0OSAxMC42MjcgOTEuMjYzNyAxMC4zOTI0QzkwLjgzMjYgMTAuMTkxNiA5MC4zOTg4IDkuOTc3NzggODkuOTY0OCA5Ljc4MzA0QzkwLjg1OTYgNi4xNzkwOSA5Mi43NTg5IDcuMDEyMzMgOTQuNDI1OCA2LjM2MTIxQzk1LjQ0NTkgNS45NTkyNCA5NS42NjQ2IDUuODk4NzcgOTYuMzQzOCA3LjY4OTMyQzk1LjgwMTggNy44ODQxNSA5NS4yNjU2IDguMDk5NDkgOTQuNzI2NiA4LjMwNjVDOTQuNjMwNCA5LjIxOTU3IDk0LjUzMTcgMTAuMTI3OCA5NC40MzU1IDExLjA0MDhDOTMuMzU3MiAxMS4yNjAxIDkyLjg4NzkgOS45MTgyOSA5Mi4xOTczIDguNDA4MDVDOTIuMzA1MSA5LjI5NzI2IDkyLjQxNTYgMTAuMTgyOSA5Mi41MjM0IDExLjA3MjFDOTIuMDk5OCAxMS4xMDIyIDkxLjY3ODUgMTEuMDE4OSA5MS4yNTc4IDExLjA4NzdDOTEuMjUzMiAxMS4wODc3IDkxLjI0ODcgMTEuMDg3NyA5MS4yNDQxIDExLjA4NzdaTTU5Ljk1OSA2LjIyODRDNjAuMTcxOCA2LjIyMjMxIDYwLjM4NDkgNi4yMjA1OSA2MC41OTc3IDYuMjIwNTlDNjAuNjAwNSA3LjEwOTc5IDYwLjYwMzUgOC4wMDMyMiA2MC42MDM1IDguODkyNDJDNjAuMzkwNyA4Ljg5ODUxIDYwLjE3NzYgOC45MDAyMyA1OS45NjQ4IDguOTAwMjNDNTkuOTYxOSA4LjAxMTAzIDU5Ljk1ODkgNy4xMTc2IDU5Ljk1OSA2LjIyODRaTTQzMy44OTEgMTI3LjA5NEM0MzIuNDMzIDEyNi4xNDQgNDMxLjE4MyAxMjUuNjYgNDMwLjA3MiAxMjMuMjQyQzQyOS4yMjcgMTI2Ljc5OCA0MjguMDg1IDEyNC41MTcgNDI3LjEgMTI0Ljc2NkM0MjQuNDMgMTI1LjQzNiA0MjEuNjQzIDEyNS42IDQxOS40NDUgMTI0LjYwMkM0MTcuMjQ4IDEyMy42MDkgNDE3LjU3NCAxMjMuMjI0IDQxNS4zNDggMTIzLjQ5MkM0MTMuNzQ4IDEyMy42ODcgNDExLjQzNSAxMjIuNTE3IDQwOS42ODQgMTIyLjIxOUM0MDkuNzU2IDEyMS4zMyA0MDkuODg3IDEyMC40MjggNDA5Ljk4IDExOS41MzlDNDA5LjAzOSAxMTkuOTc4IDQwOC4wNjMgMTIwLjIyOSA0MDcuMTEzIDEyMC41MzlDNDA2Ljg3NyAxMjAuNjE4IDQwNi42NTcgMTE5LjgyMSA0MDYuNSAxMTkuOTA2QzQwNS4xNiAxMjAuNjEzIDQwNC4wNjcgMTIyLjYwNyA0MDIuNjU2IDEyMi4zNTJDNDAxLjcxOCAxMjAuNTY3IDQwMS45MDEgMTE3LjkyMSA0MDAuNDAyIDExOC40MTRDNDAwLjYxNSAxMTkuNzQyIDQwMC44NCAxMjEuMDc5IDQwMS4wNDcgMTIyLjQwNkM0MDAuMDgyIDEyMi4zNDUgMzk5LjExOCAxMjEuMDQ0IDM5OC4xODYgMTIxLjA4NkMzOTcuNjU1IDEyMS4xMSAzOTcuMTgyIDEyMi4yMTkgMzk2Ljg3MyAxMjIuMzA1QzM5NC4yNjIgMTIzLjAyMyAzOTIuODYgMTIwLjk4OSAzOTEuMTQxIDExNy4zMDVDMzkwLjUxMSAxMTguNjM4IDM4OS44NzIgMTE5Ljk4NyAzODkuMjQgMTIxLjMyQzM4OC40OTQgMTIwLjQ2MiAzODcuNzQ0IDExOS42MDEgMzg2Ljk5OCAxMTguNzQyQzM4Ny40MjYgMTIwLjA1NyAzODcuODU4IDEyMS4zOTkgMzg4LjI4MyAxMjIuNjk1QzM4Ny4zNzcgMTIzLjM5NiAzODYuODU4IDEyMS45MSAzODYuMDYyIDEyMS43ODFDMzg1LjUxNSAxMjEuNjkgMzg1LjM4OSAxMjIuODMxIDM4NC43NzEgMTIyLjg0NEMzODIuODA3IDEyMi44OTkgMzgwLjcxMyAxMjIuODU4IDM3OC43MTcgMTIyLjkzOEMzNzguNzA4IDEyMS42MTEgMzc4LjcwNiAxMjAuMjcgMzc4LjcwMyAxMTguOTM4QzM3Ny45NiAxMTkuODQ1IDM3Ny4yMTggMTIwLjc1OCAzNzYuNDc1IDEyMS42NzJDMzc2LjU3NyAxMjAuMzM5IDM3Ni42OCAxMTguOTk3IDM3Ni43ODUgMTE3LjY2NEMzNzYuMDQ1IDExOS4wMTYgMzc1LjMwNCAxMjAuMzY4IDM3NC41NjEgMTIxLjcyN0MzNzQuMTMyIDExOS4wNzEgMzczLjY4NiAxMTYuNDEyIDM3My4yNyAxMTMuNzVDMzcyLjQ4MyAxMTQuNDgxIDM3My4xNTIgMTE4LjI4MSAzNzIuMjgzIDExOS43NzRDMzcxLjU0NiAxMjEuMDM4IDM3MS40NjIgMTE5LjQ1OSAzNzAuNjg5IDExOS41MDhDMzY5LjkxNyAxMTkuNTU3IDM2OS45MDIgMTIxLjY1NiAzNjguNzMgMTIxLjkzQzM2Ny41NTkgMTIyLjE5OCAzNjUuMDE4IDEyMi40ODIgMzYzLjc0NCAxMjIuMDMxQzM2Mi4xODggMTIxLjQ3NyAzNjEuMzYzIDExOS4zNzEgMzU5Ljg2NSAxMTkuNDA2QzM1OC4wMTEgMTE5LjQ1NSAzNTYuNjYxIDExOS40NDIgMzU0LjY2NCAxMTkuMjY2QzM1NC4xNzQgMTE5LjIyMiAzNTIuNjMxIDExNi45MTkgMzUyLjE5OSAxMTUuNzE5QzM1MS41OSAxMTguODM3IDM0OS42ODIgMTE3LjUxMSAzNDguODUyIDExOC41N0MzNDguMDIyIDExOS42MyAzNDguODE2IDEyMS43MzIgMzQ3LjcyNyAxMjIuNDE0QzM0Ny41NzggMTIxLjU5MyAzNDcuMjkyIDEyMC42NjYgMzQ3LjEzNSAxMTkuODJDMzQ2LjY1OCAxMjAuMTg2IDM0Ny4wNDQgMTIwLjk5NiAzNDYuMjY0IDEyMS4wMDhDMzQ1LjQ4MiAxMjEuMDIgMzQyLjkzNCAxMjAuMzQzIDM0Mi4xNTggMTE5Ljc4OUMzNDAuODkzIDExOC44ODggMzQxLjA5NiAxMTYuODcgMzM5Ljc1MiAxMTcuMzJDMzM5Ljc3MiAxMTguMTk2IDMzOS43NDYgMTE5LjA3OCAzMzkuNzQ2IDExOS45NTNDMzM4Ljc5MyAxMTkuOTkgMzM3Ljg0MyAxMjAuMDI2IDMzNi44OTMgMTIwLjA2M0MzMzYuODkzIDExOS4xNzUgMzM2Ljg5IDExOC4yODcgMzM2Ljg4NyAxMTcuMzk5QzMzMy43OCAxMjMuMDUgMzMwLjY3MiAxMjQuOTE5IDMyNy4zMiAxMTkuMTMzQzMyNi40MjYgMTE5LjgzNCAzMjUuNjc3IDEyMS4zOTMgMzI0LjY3MiAxMjEuNTk0QzMyMi4xMDQgMTIyLjExMSAzMTguOTg1IDExOS44NDQgMzE2LjU1NSAxMTkuMjg5QzMxNC43MDEgMTE4Ljg2MyAzMTMuNTExIDExOC45MzcgMzExLjk4NCAxMjAuNjcyQzMxMS40NzQgMTE4LjQ5OCAzMTAuOTE0IDExNi4zMDUgMzEwLjM4NyAxMTQuMTI1QzMxMC4zOTMgMTE1Ljg5MSAzMTAuMzkyIDExNy43MDggMzEwLjQgMTE5LjQzOEMzMDkuNDM5IDEyMC4yNDYgMzA5LjAwOCAxMTguNTQxIDMwOC4xNjYgMTE4LjQ2MUMzMDcuMzI0IDExOC4zODIgMzA3LjgzMyAxMjAuNDggMzA2LjYzNSAxMjAuODUyQzMwNi4xOTEgMTIwLjk5MiAzMDQuMTM3IDEyMC44ODkgMzAzLjAxOCAxMjEuMDQ3QzMwMS4wMjEgMTIxLjMyNyAyOTguODM1IDEyMS44NzIgMjk2LjU0NyAxMjIuMzA1QzI5NC42MjMgMTIyLjY2NCAyOTIuNjAxIDEyMC4zNzEgMjkyLjU2NiAxMTUuMzI4QzI5Mi41NjEgMTE0LjU5NyAyOTMuMzg3IDExNS41MTIgMjkyLjg5NSAxMTMuNTA4QzI5Mi4xMjggMTEwLjM5IDI5MC4zOTQgMTA2Ljc5MyAyOTQuNDIyIDEwNi42MUMyOTQuMzc4IDEwNS4xMyAyOTQuMzk2IDEwMy45NDUgMjk0LjQxIDEwMi41MzJDMjk2LjEzOSAxMDUuMzE1IDI5OC4wMTUgMTAxLjI5NyAyOTUuODUgMTAwLjAyNEMyOTUuMDM1IDk5LjU1MjEgMjkyLjA0OCAxMDMuMzc0IDI5MS41OTYgMTA1LjIxOUMyOTAuNDUzIDEwOS44OTYgMjkyLjQwOCAxMTMuMDUgMjkxLjcxNSAxMTguMTcyQzI5MS42MSAxMTguOTU4IDI4OC4zNTkgMTIyLjQzIDI4Ny43NzMgMTIyLjYyNUMyODYuOTQgMTIyLjg5OSAyODYuODkzIDEyMS43NyAyODYuNCAxMjEuNTk0QzI4NS41MDYgMTIxLjI3OCAyODUuNDM1IDEyMi45NzUgMjg0LjUwNiAxMjIuODU5QzI4My40MzkgMTIyLjcyNSAyODIuMjg1IDEyMC43ODUgMjgxLjA1MyAxMjEuNTk0QzI4MS40NTggMTE5Ljc4NiAyODEuODkyIDExOC4wMTUgMjgyLjMwOSAxMTYuMjE5QzI4MC4xODcgMTE2LjIyNSAyODAuMjM2IDEyMC44NjMgMjc4LjgxNCAxMjIuOTc3QzI3OC4zNjYgMTIyLjExOCAyNzcuOTEgMTIxLjI1NyAyNzcuNDYxIDEyMC4zOTlDMjc2Ljk1NCAxMjAuNjQyIDI3Ni40NDQgMTIwLjg4OCAyNzUuOTM4IDEyMS4xMjVDMjc0LjIyOSAxMTcuODk3IDI3MS45NzEgMTExLjE2NyAyNzYuNTUzIDExNS4wNDdDMjc2LjY0IDExMi40MDYgMjc2LjM4IDExMC41ODQgMjc2LjY1NiAxMDcuNzQyQzI3Ni44NDYgMTA1LjgyNCAyNzcuNTA1IDEwNC42ODEgMjc2LjE5OSAxMDMuMDU1QzI3Ni4xMTIgMTA0Ljc3OCAyNzUuOTkgMTA2LjU4NyAyNzUuODkxIDEwOC4zNTJDMjczLjk0NiAxMDguODQ1IDI3My41ODIgMTEzLjIyOSAyNzMuMDI1IDExNi40NjlDMjcyLjc5NiAxMTcuNzk2IDI3My44NSAxMTkuNDI4IDI3My4zMTEgMTIwLjM1OUMyNzIuNDc0IDEyMS44MDggMjcxLjIzIDExOC4zMDYgMjcxLjQ2MyAxMTYuNTE2QzI3MS4yMyAxMTYuNDkxIDI3MS4wMzUgMTE2LjUxNiAyNzAuODE2IDExNi41MTZDMjcwLjgxMSAxMTcuNDA1IDI3MC44MTYgMTE4LjI2NSAyNzAuODA1IDExOS4xNzJDMjY5LjUyMiAxMTguNDk2IDI2OC40ODYgMTIwLjQ0NiAyNjcuMzUgMTIwLjY0MUMyNjYuNDE0IDEyMC43OTkgMjY2LjMxNSAxMTkuMzQgMjY1LjM4OSAxMTkuMjk3QzI2My42NzggMTE5LjIxMiAyNjMuMzk4IDEyMS40MjEgMjYxLjI1IDEyMS45NDVDMjYwLjMzNSAxMjIuMTcxIDI1Ni42OTkgMTE5Ljk3MiAyNTUuMTc4IDExOS45NTNDMjU0Ljc4NyAxMTkuOTU0IDI1NC41OTQgMTIxLjIzOCAyNTMuOTMgMTIwLjgzNkMyNTIuNDI5IDExOS45MjggMjUwLjc0IDExNi44OTQgMjUxLjAyNyAxMTMuMDQ3QzI1MC42OTIgMTEzLjkzIDI1MC4zODkgMTE0LjgzMiAyNTAuMDY4IDExNS43MjdDMjUwLjg3IDExNy40MDIgMjUxLjcyOSAxMTguNDMxIDI1MS42OCAxMjEuMDMxQzI1MC4wOCAxMTkuMTk5IDI0OC42NDYgMTIxLjY1NyAyNDYuOTI0IDEyMUMyNDYuNTIyIDEyMC44NDggMjQ1Ljc5IDExNy45NDYgMjQ1LjI5NSAxMTguNTM5QzI0NS4yNzUgMTE5LjgyMyAyNDUuMzM1IDEyMS4yMjIgMjQ1LjI3MSAxMjIuNUMyNDQuNzg1IDEyMy4yODUgMjQzLjM1OSAxMjEuNjEyIDI0My4xNyAxMjEuNjAyQzI0MS44NzYgMTIxLjU2NSAyNDAuODAzIDEyMC4zNzIgMjM5Ljk0OSAxMjAuMjE5QzIzOS4wOTYgMTIwLjA2NyAyMzguNTM1IDEyMi42NTMgMjM4LjAyNSAxMjIuNTE2QzIzNi41MyAxMjIuMDk1IDIzNS43NTEgMTE5LjI0MSAyMzQuNzQ4IDExNy40NjlDMjM0LjY1OCAxMTguMzM4IDIzNC41MzIgMTE5LjIzNiAyMzQuNDI4IDEyMC4xMTdDMjMzLjgwMSAxMjAuMTM2IDIzMy4xNzQgMTIwLjE1NCAyMzIuNTQ1IDEyMC4xNzJDMjMyLjU0NSAxMTkuMjg5IDIzMi41MjIgMTE4LjM4NiAyMzIuNTI3IDExNy41MTZDMjMxLjA2NCAxMTkuNzMyIDIzMC4yNDUgMTIwLjUzOCAyMjguMzA3IDEyMC4yNThDMjI3LjIxNyAxMjAuMDk5IDIyNi43MjQgMTE4Ljc1IDIyNS44MzggMTIxLjU5NEMyMjUuMzg5IDEyMC43NzggMjI0Ljk4NCAxMjAuMDA5IDIyNC41NTMgMTE5LjIxMUMyMjEuNDQgMTIxLjk3IDIxOS4wMjcgMTE3LjQ3NiAyMTUuOTQ5IDExNi41MzFDMjE1LjkzOCAxMTUuNjYgMjE1LjkyNSAxMTQuNzg1IDIxNS45MTYgMTEzLjkxNEMyMTUuNDkxIDExNC4xNDYgMjE1LjA2NSAxMTQuMzg2IDIxNC42NDMgMTE0LjYxN0MyMTUuMDY4IDExNi4xNTIgMjE1LjUwOSAxMTcuNzE4IDIxNS45MjYgMTE5LjIzNUMyMTQuOTIzIDExOS43ODMgMjEzLjk4MyAxMTguMjEzIDIxMy4xMTEgMTE4QzIxMS43MjQgMTE3LjY2IDIxMC44NDEgMTE5LjA4IDIwOS41NTMgMTE5LjM5MUMyMDkuNTQxIDExOC41NTYgMjA5LjUxOCAxMTcuNjg5IDIwOS41MDQgMTE2LjgzNkMyMDguNTYzIDExNS45NDEgMjA3LjYyMSAxMTUuMDUgMjA2LjY4IDExNC4xNDlDMjA1LjgyOSAxMTUuOTM5IDIwNC45NzcgMTE3LjczMSAyMDQuMTIzIDExOS41MTZDMjAzLjY3MSAxMTguNjY0IDIwMy4yMjMgMTE3LjgxMyAyMDIuNzcxIDExNi45NjFDMjAyLjM2OSAxMTcuNCAyMDEuOTY5IDExNy44MzUgMjAxLjU2NiAxMTguMjc0QzIwMS42NjggMTE2LjQ5NiAyMDEuNzcxIDExNC43MDggMjAxLjg3MyAxMTIuOTNDMjAwLjcxIDExNi4wNzIgMTk5LjU0OCAxMTkuMjA4IDE5OC4zODUgMTIyLjM0NEMxOTcuOTUzIDEyMC4xMzMgMTk3LjUyNSAxMTcuOTE0IDE5Ny4wOTQgMTE1LjcwM0MxOTYuNTYzIDExNy40OTQgMTk2LjAzMiAxMTkuMjk1IDE5NS41MDIgMTIxLjA4NkMxOTQuNjYgMTIwLjY0MiAxOTMuODE3IDEyMC4xOTUgMTkyLjk3NSAxMTkuNzVDMTkyLjk2IDExOC44OCAxOTIuOTQ0IDExOC4wMSAxOTIuOTMgMTE3LjE0MUMxOTIuNDA1IDExNy41OTcgMTkxLjg3OCAxMTguMDU5IDE5MS4zNTQgMTE4LjUxNkMxOTEuMzUzIDExNy42MjcgMTkxLjM0MiAxMTYuNzI3IDE5MS4zNTQgMTE1Ljg0NEMxOTAuMzQ4IDExNy4zNjYgMTg5LjYwMiAxMTguODY5IDE4OC4xNjggMTE4LjQwNkMxODcuMzc1IDExOC4xNTEgMTg0LjQ5MiAxMTcuMDM1IDE4My45MTIgMTE3LjQ2MUMxODIuMDUgMTE4LjgzMSAxODIuMTU4IDEyMS4wMTIgMTgwLjE4OCAxMjAuMDYzQzE4MC4yMDIgMTE5LjIyOSAxODAuMTUyIDExOC4zNzcgMTgwLjE0MSAxMTcuNTMxQzE3OC43NjggMTE2LjE5MiAxNzcuMzk0IDExNC44NTYgMTc2LjAyMSAxMTMuNTE2QzE3Ni4wNDIgMTE0LjQwNSAxNzYuMDYgMTE1LjI5OCAxNzYuMDggMTE2LjE4OEMxNzYuMzgzIDExNi42MjYgMTc2LjY4NyAxMTcuMDU0IDE3Ni45OSAxMTcuNDkyQzE3NS44MDEgMTE4LjQgMTc0LjU5NCAxMTkuMjY1IDE3My40MiAxMjAuMjAzQzE3MS4yNCAxMTcuOTg3IDE2OS40NjcgMTIwLjA4NyAxNjcuMDggMTE4Ljc2NkMxNjYuMDU0IDExOC4xOTkgMTY1LjExNyAxMTUuMDQyIDE2My42MTMgMTE2LjUxNkMxNjMuNTcgMTE3LjMwNyAxNjMuNTk2IDExOC4yNDUgMTYzLjU3IDExOS4xMUMxNjIuMDU1IDExOS41NzIgMTU5Ljc5OSAxMTcuMzI0IDE1OC40NzkgMTE1Ljg5OUMxNTcuNTE3IDExNC44NjMgMTU3LjcyNiAxMTMuNjQxIDE1Ni41NzQgMTE1LjI3NEMxNTYuMjU3IDExMy45MjkgMTU1LjkxNiAxMTIuNjE0IDE1NS41OSAxMTEuMjgyQzE1NS40ODggMTEzLjA1OCAxNTUuMzgzIDExNC44NDEgMTU1LjI4MSAxMTYuNjE3QzE1My43MzEgMTE0Ljc5IDE1Mi45MDQgMTE1LjE4NSAxNTEuNzczIDExOC4wMjRDMTUxLjQ1OSAxMTcuMzY2IDE1MS4xNDQgMTE2LjcxMiAxNTAuODI2IDExNi4wNTVDMTUxLjc0MSAxMTQuMTQyIDE1MS4zNzQgMTEyLjk2OCAxNTAuNDgyIDExMS4zOTFDMTQ5Ljk0MSAxMTEuNjM1IDE1MC4xMzIgMTEzLjI2NSAxNDkuODU0IDExNC4wOTRDMTQ4Ljc0NiAxMTcuMzUyIDE0OC4xMTkgMTE2LjA0NCAxNDYuNzA1IDExNS44NjdDMTQ0LjQwNiAxMTUuNTgxIDE0Mi41NjkgMTE2LjI3MyAxNDAuMjkzIDExNS40MTRDMTM5Ljg2NSAxMTUuMjUgMTM5LjMyMyAxMTMuODI0IDEzOC42OTkgMTE0LjI5N0MxMzguNjczIDExMi45MzMgMTM4LjY4MiAxMTEuNjI5IDEzOC42NyAxMTAuMjg5QzEzNy4wOSAxMTEuNzAyIDEzNi4wNDMgMTE0LjU2NCAxMzQuMjI1IDExNC4zNzVDMTM0LjIxMyAxMTMuNTA0IDEzNC4xOTUgMTEyLjYyMSAxMzQuMTg0IDExMS43NUMxMzMuMzQ3IDExMS43NjIgMTMyLjUwOCAxMTEuNzc3IDEzMS42NzIgMTExLjc4OUMxMzEuNjY5IDExMi42NzIgMTMxLjY2MyAxMTMuNTU1IDEzMS42NiAxMTQuNDM4QzEzMS4xMjcgMTEzLjU3OSAxMzAuNTkyIDExMi43MTggMTMwLjA1OSAxMTEuODZDMTI5LjEwMyAxMTIuNzQ4IDEyOC4xNDcgMTEzLjYyMyAxMjcuMTkxIDExNC41MjRDMTI2Ljk5IDExMC42MzIgMTI4LjQxMyAxMTIuNjQyIDEyOS40MjggMTEwLjQzOEMxMjkuODQ3IDEwOS41MjQgMTMwLjAxMSAxMDcuNTc3IDEzMC4zNjkgMTA2LjQ2OUMxMjkuMzAyIDEwNi40NTcgMTI4LjI0MSAxMDYuNTEyIDEyNy4xOCAxMDYuNTI0QzEyNi45NTIgMTA4LjczNCAxMjYuNzkyIDExMC45ODYgMTI2LjUyMyAxMTMuMTcyQzEyNS43NTQgMTEzLjc1NiAxMjMuNjk5IDExMS44NDUgMTIzLjEzNSAxMTEuODY3QzExOC42ODcgMTEyLjA1IDExNS4xMzMgMTEzLjQ2NSAxMTAuNzcgMTEyLjIzNUMxMTAuMTc1IDExMi4wNjQgMTA5LjgzMyAxMTMuNjMzIDEwOC45IDExMy41MjRDMTA3LjcwMiAxMTMuMzg5IDEwNS42MzcgMTExLjE4MiAxMDQuNSAxMDkuNjE3QzEwMy44MzggMTEwLjQ1OCAxMDMuMjQzIDExMS4zNTIgMTAyLjYwNyAxMTIuMjExQzEwMS43MyAxMTAuOTUxIDEwMC44NTYgMTA5LjY0OCA5OS45NzY2IDEwOC40MDdDOTguNzM1MSAxMDguNjA3IDk3LjQ1ODIgMTEwLjAxMiA5Ni4yMTY4IDEwOS43MjdDOTQuNjk4MiAxMDkuMzY4IDk0LjE1NzcgMTA3LjU2NSA5Mi43MjA3IDEwOS44MTNDOTIuNjEyOCAxMDguODk5IDkyLjUwMzMgMTA4LjAyOCA5Mi4zOTI2IDEwNy4xMzNDOTAuMjI2OSAxMDkuODAxIDg4LjA3ODIgMTA4LjI1IDg2IDEwNS44OTlDODUuOTAwOSAxMDcuMjI2IDg1Ljc4MTggMTA4LjU5NSA4NS42OTczIDEwOS44OTlDODQuMTAzMiAxMTAuODM2IDgzLjYzOSAxMDcuOTUzIDgyLjEwOTQgMTA3LjYxN0M4MS4zNDg3IDEwNy40NTMgODAuNzc5NSAxMDkuNjM1IDc5LjU4MiAxMDguNDYxQzc4LjgyNzEgMTA3LjcyNCA3OC4zMzk0IDEwNS41MjEgNzcuMTIxMSAxMDcuMzkxQzc2LjA2NjUgMTA1LjUyNyA3Ni40MTggMTAzLjA3NCA3NC43NTM5IDEwMy4zMDVDNzQuOTAyNiAxMTEuMzQ0IDcxLjk3OTQgMTA1LjU1NyA3MS41ODAxIDEwNS4zOTlDNjkuMjIyOCAxMDQuNDQ5IDY4LjQzNTYgMTA1LjgwNCA2Ni41MjczIDEwNC44NjhDNjYuNTM5IDEwNS43OTIgNjYuNTUyMyAxMDYuNjM5IDY2LjQ4MjQgMTA3LjQ4NUM2NS4xOTExIDEwOC42NDEgNjIuODQ0NSAxMDYuMzQ4IDYxLjg3MTEgMTA2LjI1QzU5LjMyMDggMTA1Ljk4OCA1Ni45MjQ3IDEwNi4wMzUgNTQuODM3OSAxMDYuNDA3QzUyLjM1MjEgMTA2Ljg1MSA1MS42MjkzIDEwNC45NDIgNDkuNTU0NyAxMDMuOTYxQzQ3LjgwNTggMTAzLjEzOSA0Ni4zMzI1IDEwNC4zMzEgNDQuNTE5NSAxMDMuNjQ5QzQ0LjEzMTkgMTAzLjUwMiA0My41MjUxIDEwMi4xMDYgNDIuOTQ1MyAxMDIuNDc3QzQyLjkxMDMgMTAxLjU3IDQyLjkxNTkgMTAwLjczNSA0Mi44OTI2IDk5Ljg1MkM0MC42MTM2IDEwMy4wMDUgMzguODAzMiAxMDIuMjA2IDM2LjI4NTIgMTAxLjE2NEMzNC44NDU2IDEwMC41NjggMzMuNzIwNyAxMDAuNjA3IDMyLjI0MDIgMTAwLjEwMkMzMS42NjYyIDk5LjkwNzIgMzEuMjY2OSAxMDEuNTE4IDMwLjQ5MjIgMTAxLjE3MkMyOS45MDM0IDEwMC45MDQgMjkuMDY2MSA5OS40MDk5IDI4LjI1NTkgMTAwQzI4LjIyMDkgOTkuMDkzIDI4LjIxMTkgOTguMjYxMiAyOC4yMDkgOTcuMzU5OEMyNi41MjQzIDk5LjY1NTkgMjUuODg4MSA5OC4wMDcgMjQuMDY2NCA5Ny40MjIzQzIyLjc0NjcgOTcuMDAyNyAyMi41MDY5IDk3Ljg4MjYgMjAuNjc5NyA5Ny43OTczQzE4LjU2NjMgOTcuNjk5OCAxNC40NzY2IDk2LjkwNzggMTIuMDQyOSA5Ni4wNTUyQzEwLjcyNjEgOTUuNTkxNiA5LjIxMTI3IDkyLjg1MjMgOC4xOTEzOCA5Mi42MjU1QzcuMTcxMyA5Mi40MDAyIDcuNDg0OTkgOTQuMjkyOSA2LjQ4MjM5IDkzLjU4NjVDNy4wMTU1OSA5MC4wODU1IDUuODM2NTggODguOTkyMyA1LjMzMiA4Ni4xMjU2QzQuMDI2MjUgNzguNjgzMSAzLjk3NTg5IDY5Ljk1MzEgMy44NTkzNCA2Mi40NjE5QzMuODMwNjMgNjAuNTU2OSA0LjY5MjI5IDYwLjMxMzcgNC41MTc1NSA1OC45MDczQzMuODg4MjQgNTguOTg2NCAzLjI1MDM0IDU4Ljk0NzMgMi42MDkzNCA1OC45MjI5QzIuODMyNzkgNTYuOTMyOSAyLjA3MDEgNTQuNzM1OCAxLjk0NzI0IDUzLjExMDVDMS43ODk4OSA1MS4wMjc5IDIuNDE2MjkgNTAuMzQzNyAyLjUwOTc0IDQ4LjgyMTVDMi41MTU1OSA0OC44MTYzIDIuNTIxNDUgNDguODExMSAyLjUyNzMxIDQ4LjgwNTlDMi42NjcyMSA0Ni42MDEzIDIuMjIxNDQgNDUuNzcwMiAyLjUzMzE3IDQzLjQwNzVDMi42MDMxOCA0Mi44ODk4IDIuNDY2NjcgNDEuNTk0NiAyLjYzODY0IDQxLjA0MDRDMy43NTc5IDM3LjM5MjYgNS42MTAzMiAzOC43ODcxIDUuNzkwOTkgNDIuODkxOUM2LjMyMTQ0IDQyLjg5MTkgNi44NDc0NyA0Mi44OTAyIDcuMzc0OTcgNDIuODg0MUM3LjM3NTAzIDQxLjk5NDkgNy4zNzIwMSA0MS4xMDE1IDcuMzY5MTEgNDAuMjEyM0M4LjMyNzg4IDQxLjA4OTEgOS4yODczMiA0MS45Njk5IDEwLjI0NjEgNDIuODUyOEM5LjgyMDUzIDQxLjc0NDQgOS4zOTAzOCA0MC42MjcxIDguOTY0ODEgMzkuNTI0OEM5LjI4MjI2IDM4LjQwNTEgOS42MDM0NSAzNy4zMTcyIDkuOTE3OTQgMzYuMTczM0MxMC45NDQgMzcuMzg1MiAxMS45NTEgMzYuODM3OSAxMy4wNjQ0IDM3LjY5NjdDMTQuMTc0MyAzOC41NjE4IDE0LjE4MTUgNDAuNTA3NSAxNS42MTUyIDM4Ljg0NTFDMTYuMjc5NSAzOS41MTA1IDE2Ljk3MjkgNDIuMjU4NCAxNy41NTI3IDQyLjY0MTlDMTkuMzM2MiA0My44MjkgMTcuODA0MiAzNy44NTI2IDE3Ljg5NDUgMzYuMTEwOEMxNi44MjQ4IDM2LjUzNzEgMTUuNzY5IDM3LjAxOTQgMTQuNzA1IDM3LjQ3MDFDMTQuNjk5MiAzNi4xNDI0IDE0LjY5MjMgMzQuODA1NyAxNC42ODM2IDMzLjQ3OEMxMy43NjUzIDMzLjI2OTQgMTIuMTAyMiAzMC43ODg4IDExLjQ5NjEgMzIuOTMxMUMxMS40OTkgMzMuNTY0NCAxMS41MDQ5IDM0LjIwNCAxMS41MDc4IDM0LjgzNzNDMTEuMjk0OSAzNC44MzczIDExLjA4MiAzNC44MzczIDEwLjg2OTEgMzQuODM3M0MxMC42NjIyIDMzLjcxMDYgMTAuNDU1IDMyLjU4MTMgMTAuMjQ4IDMxLjQ1NDZDOS42MDEyNiAzMS4yNTM3IDguOTU0NDQgMzEuMDUzOSA4LjMxMDUyIDMwLjg1M0M4LjMwNDY2IDI5LjA4MTYgOC4yOTg4IDI3LjMwNDIgOC4yOTI5NCAyNS41MzI4QzcuMTI3MTEgMjUuNDExIDYuMTcwMjkgMjMuMTUwMyA1LjEwMzQ5IDI0Ljg5MjJDNS45NTE2OSAyNi4yMjYgNi44MDAyMyAyNy41NjYxIDcuNjQ4NDEgMjguODk5OUM3Ljc4ODE4IDMzLjE4NjggNi45MDUzNiAzNi4wMjcyIDUuNDUxMTQgMzguOTA3NkM0LjU1OTIzIDM2LjkxNiAzLjY2MTQ0IDM2LjEyNjEgMy45MTIwOCAzMi44OTIxQzQuMDAzNzggMzEuNzI3MiA1LjA0NDU5IDI4LjkyMDIgNC45ODA0NCAyNy42NDIxQzQuODU3MjQgMjUuMTk2NCAzLjU3NDQ2IDI0LjE3ODggMy44MzAwNSAyMS41NTYzQzUuMDgwMTcgMjEuMDk5NiA2LjM2MjI3IDIwLjYwMzMgNy42MjY5MiAyMC4xMzQ0QzguMTYwMSAxOC44MTM1IDguNzA4OTIgMTcuNDk0NSA5LjIzMDQ0IDE2LjE3MzZDOS42NjEyOSAxNy45OTQxIDguMzE4NiAxOS4wMTIxIDcuOTkyMTYgMjAuMTgxM0M3LjU5NzM4IDIxLjU5ODMgOC40NzE3MSAyMi42NDMxIDguMjkyOTQgMjQuMTgxM0M5LjYzMDQgMjQuNDY3MiAxMC4zMjk2IDIzLjU4MDUgMTEuMTYwMSAyMS40ODZDMTIuMDYzMiAyMi43NTIgMTEuOTQyIDI0LjA2NzUgMTIuMTQ4NCAyNi4wMzI4QzEyLjI5NDEgMjcuNDI3MiAxMy4zNzg0IDI2Ljc5MTIgMTMuNzE2OCAyOC4xNDIxQzE0LjA5NTIgMjYuMzc2NSAxMy4xNiAyNS41NzI5IDEzLjQ5OCAyMy40MjM1QzEzLjY5MDQgMjIuMTk5MyAxNC45NTM2IDIwLjgzODggMTQuNjYyMSAxOC43OTg1QzE2LjcwNDcgMTguNTg2NSAxNy44MTkgMjIuMjQ1NCAxOS43ODMyIDIyLjcyMDNDMTkuMTQyIDIxLjYxOCAxOC40OTk2IDIwLjUxMDIgMTcuODYxMyAxOS40MDc5QzE5LjAzMzEgMjAuMDUzNSAyMC4yMDUyIDIwLjY5MiAyMS4zNzY5IDIxLjMzNzVDMjIuNjgyMSAxOC4zNzc5IDIxLjg1ODEgMTUuNDI3NSAyNC4yMzYzIDE1Ljk5MzlDMjMuODEzOCAxNC4yMzQ1IDIzLjM2NzkgMTIuNDIgMjIuOTU3IDEwLjY5NzFDMjQuNTcxNyA5LjYzMTg1IDI1Ljc5MyAxMi40MjEzIDI3LjEyNSAxMy4wNDg2QzI5LjQ0MTkgMTQuMTMyNCAzMC4xMjY4IDEzLjEyOCAzMS4yMjg1IDE3LjkzOTJDMzAuNTk2MiAyMC4zNjI2IDI5Ljk4MyAyMi44MzMzIDI5LjM1OTQgMjUuMjc1QzMwLjAwMzIgMjQuOTk0OSAzMC42NDUyIDI0LjcwOTYgMzEuMjg5MSAyNC40MjM0QzMxLjQ0MDcgMjAuNjIzIDMyLjg1MiAyMy42MDgxIDMzLjUxMzcgMjUuMjI4MUMzMy4zMDEgMjYuNTYxNCAzMy4wOTE2IDI3LjkwMjYgMzIuODc4OSAyOS4yMzU5QzM0LjYzMDMgMjYuMDI2OCAzNS4zMzQ1IDIzLjUxNjEgMzUuMTA3NCAxOC41NzJDMzUuNTE4MiAxOC41NDE1IDM1LjkzMjkgMTguNTEwNCAzNi4zNDM4IDE4LjQ4NkMzNi4zNDk1IDE3LjE2NDQgMzYuMzU2NSAxNS44MzkgMzYuMzY1MiAxNC41MTczQzM3LjIxNTggMTQuNTA1MiAzOC4wNjM1IDE0LjQ5ODMgMzguOTE0MSAxNC40ODYxQzM4LjcxODggMTUuMTU1OSAzOC41MjcyIDE1LjgzMTkgMzguMzMyIDE2LjUwMTdDMzguNjM1MSAxNy4xNjUzIDM4LjkzOTEgMTcuODMwMyAzOS4yNDIyIDE4LjQ5MzhDMzkuNjY0NyAxNy42NTk4IDQwLjA4NjIgMTYuODE4NCA0MC41MDU5IDE1Ljk3ODJDNDEuMDM5MiAxNi4zNTU4IDQxLjU3NiAxNi43NDEzIDQyLjEwOTQgMTcuMTE4OUM0MS42MzQ2IDEzLjkzNCA0Mi4xMDkzIDExLjAyODkgNDIuMDkxOCA3Ljc4MzA3QzQzLjI2OTEgNy42NDMwMSA0NC40NDk2IDcuOTYzODMgNDUuNjE1MiA3Ljc3NTI1QzQ2LjQwOCA3LjY0NzM1IDQ2LjY2NTcgNi4yNDU0OSA0Ny41NjA1IDYuMzYxMjFDNDguNjQ3NSA2LjUwMTg0IDQ5Ljc2OTQgOC40NjE2IDUxLjAyNTQgNy42NTgwN0M1MC45NDA5IDkuNDczMDEgNTAuMDk1NiA5LjY2MDIxIDQ5LjMxNDUgMTAuMjIwNUM0OC41MzM1IDEwLjc4MDYgNDguMzAzNiAxMC43Mzk5IDQ4LjQ3ODUgMTMuMDE3NEM0Ny4zMTU2IDEyLjQwODMgNDYuNDU1IDEyLjQxMDggNDUuMzA2NiAxMy4wNTY0QzQ1LjM3MDcgMTAuNTYwNSA0NS4yMjQ5IDEwLjE0NTMgNDQuMDAzOSAxMC40MzE1QzQ0LjM1MDYgMTIuMzAwNSA0My41ODU0IDEzLjQzNDcgNDMuNTY0NSAxNS4wNzJDNDMuNTQ0IDE2LjcxMDMgNDQuMjg2NCAxNy4xNTQ0IDQzLjk2ODggMTkuMDQ4NUM0My44Mjg5IDE5Ljg2NTMgNDIuNTMwNSAyMS40MDA4IDQyLjc2NTYgMjIuNDQ2OUM0My41MDU4IDIyLjAxNDYgNDQuMjYzNyAyMS41NjUgNDUuMDA5OCAyMS4xMjY2QzQ1LjExMTcgMTkuNzgxMiA0NS4yMTE1IDE4LjQ0MjYgNDUuMzEwNSAxNy4xMDMyQzQ3LjU4MzIgMTcuNzc4MiA0OC42NTAxIDEzLjkxNzYgNTAuNzE4OCAxMy4wMDk1QzUwLjkzNDIgMTMuODk3OSA1MS4xNDc5IDE0Ljc4NTMgNTEuMzYzMyAxNS42NzM2QzUxLjQ2NTMgMTMuNDUxNSA1MS41Njc5IDExLjIyMzkgNTEuNjY5OSA5LjAwMTc5QzUzLjY0ODggOC45MTY1MSA1NS43ODc2IDcuNzcxOTcgNTYuMTQ2NSAxMi45NDdDNTUuMjk1NiAxMi41MTQ3IDU0LjQ0MDcgMTIuMDc0NyA1My41ODk4IDExLjY0MjRDNTMuMzggMTMuNDIwNCA1My4xNzA4IDE1LjIwMDIgNTIuOTYwOSAxNi45NzgyQzUwLjgzNjIgMTcuNDUzMyA0OC43MTA3IDE3LjkzMjkgNDYuNTg1OSAxOC40MDc5QzQ2LjgwNDQgMjEuMDY3NyA0Ny4wMjM3IDIzLjczMjQgNDcuMjQyMiAyNi4zOTIyQzQ2LjE3ODMgMjYuODU1IDQ1LjExNjYgMjcuMzEyMSA0NC4wNTI3IDI3Ljc3NDlDNDQuMDQ2OSAyNi40NDIzIDQ0LjA0MSAyNS4xMTU1IDQ0LjAzNTIgMjMuNzgyOEM0Mi4wMTU1IDIyLjk1NDcgMzkuOTkyMyAyMi4xMjY2IDM3Ljk3MjcgMjEuMjk4NUMzNy40NDUzIDIyLjYwMTMgMzYuOTE4IDIzLjkwMTggMzYuMzkwNiAyNS4yMDQ3QzM3LjI0MTcgMjUuODYyNCAzOC4wOTYxIDI2LjUxNTYgMzguOTQ3MyAyNy4xNzM0QzM4LjA0OTUgMjkuNDM5IDM3LjA3ODIgMjkuMzQ2NCAzNS43NTc4IDI5LjIxMjRDMzYuNjk5MiAzMi43MjY0IDM1LjE4OTkgMzUuNDM0NSAzNi43MzQ0IDM4LjU0MDRDMzYuNjIzNiAzNi43NjIgMzYuNTEzMSAzNC45ODMgMzYuNDAyMyAzMy4yMDQ2QzM3LjAzNDggMzMuMTgwMiAzNy42NjgzIDMzLjE1ODYgMzguMzAwOCAzMy4xMzQyQzM4LjMyMTEgMzIuMjk0IDM4LjMzOTkgMzEuNDUxMSAzOC4zNTc0IDMwLjYxMDhDMzkuODg3MyAzMC42Nzc4IDM5LjY0OTEgMjkuMTU1NyAzOS41ODIgMjYuNTAxNUM0MC41MDg4IDI2LjIyNzUgNDEuMDIyNSAyNi4zNDEzIDQwLjg3MTEgMjguNDc4MUM0MC43ODA3IDI5LjczODggNDAuMTEzNiAzMC42OTg1IDQwLjU1NjYgMzEuODM3NEM0MS40MzMzIDI5LjM3NTMgNDIuMDMzOCAzMS45NTA5IDQzLjAwOTggMzEuNjY1NUM0My43MTggMzEuNDU4NCA0My43ODI2IDI5LjU5MDkgNDQuNDI5NyAyOS4yNDM3QzQ1LjU4NjYgMjguNjE2NSA0Ni43Mzc1IDI4LjQ4OSA0Ny44ODg3IDI3LjcyODFDNDcuODA0MiAyOS42MjE5IDQ4LjE4MDggMzEuMTQ2MiA0Ny4xODE2IDMyLjQzMTFDNDYuNjAxNiAzMy4xODAyIDQ1Ljg4NCAzMS41MTM2IDQ1LjM1MzUgMzMuNzY3QzQ1Ljg1NzcgMzQuMzg4MiA0Ni40MTQ4IDM1LjAyMjUgNDYuOTM5NSAzNS42NDk4QzQ3LjY4MjUgMzQuNzc5MSA0OC40MjY4IDMzLjkxMTIgNDkuMTY5OSAzMy4wNDA1QzQ4Ljk1NDIgMzEuNzEyOCA0OC43MzcyIDMwLjM3NjEgNDguNTIxNSAyOS4wNDg0QzQ5LjM3MjYgMjguNTkxNiA1MC4yMjQxIDI4LjEzOCA1MS4wNzIzIDI3LjY4MTJDNTEuMDgzOSAzMC4zNjA5IDUwLjc5ODcgMzIuODgxMSA1MS43MjI3IDM1LjAyNDhDNTEuMyAzNS40Njk0IDUwLjg3MzggMzUuOTE3OSA1MC40NTEyIDM2LjM2ODZDNTIuMTUzMiAzNy4wMTQxIDUzLjg1ODUgMzcuNjU4OCA1NS41NjA1IDM4LjI5ODJDNTQuMjgxMiAzNi43NTc2IDUzLjAwMiAzNS4yMjE3IDUxLjcyMjcgMzMuNjgxMUM1MS45MzI0IDMyLjU2NyA1Mi4xNDE4IDMxLjQ1MTUgNTIuMzUxNiAzMC4zMzc0QzU0LjA5MTYgMjkuOTIzMyA1My4wNTggMzIuNjk3OCA1NC4yNzM0IDMyLjk3OEM1NC4yNzkzIDMyLjA4OTQgNTQuMjg1MiAzMS4xOTQ3IDU0LjI5MSAzMC4zMDYyQzU1LjEzNTcgMzAuMjk0IDU1Ljk3NzUgMzAuMjg3MSA1Ni44MjIzIDMwLjI3NDlDNTYuNDk2IDI5LjM5MjQgNTYuMTcgMjguNTAxMiA1NS44NDM4IDI3LjYxODdDNTMuNzEwNCAyOS42NzA5IDUyLjg4ODIgMjguNDEyOSA1MS4zNjEzIDI1LjA2NEM1MC40MTQyIDI1LjUwMjUgNDkuNDY2NyAyNS45NDU5IDQ4LjUxOTUgMjYuMzg0M0M0OC4yOTUxIDI0LjE2NzkgNDguMDk2MyAyMS45Mzg2IDQ3Ljg1NzQgMTkuNzI4MkM0OC41MzY0IDE5LjMzMjUgNDguODY4NSAyMS44NTg5IDQ5LjYxMTMgMjIuMjk4NUM0OS45NTUxIDIyLjQ5OTQgNTEuMTU4NiAyMS45OTY0IDUxLjY4OTUgMjIuMzYxQzUxLjYwNTIgMjMuMjA4NCA1MS41NzE0IDI0LjgwNTggNTIuMDEzNyAyNC45NzAzQzUyLjU4NDcgMjUuMTgzNCA1My41MjMgMjYuMDcwNSA1My44NzMgMjUuOTg1OUM1NC45MTkzIDI1LjczNjIgNTUuMTQxMyAyNC4zNDc5IDU2LjE3NTggMjQuOTYyNUM1Ni4zOTczIDI5LjE3NzEgNTguMjg2NSAyOS4zNTkyIDU5LjY5NzMgMzEuNTYzOUM1OS44NzUxIDMwLjQwMDcgNTkuNTQyMyAyOC4xMDk0IDU5LjAyMzQgMjcuNjM0M0M1OC4yOTIgMjYuOTc3IDU4LjE0MzUgMjguMjA4NiA1Ny4zNzcgMjYuODE0QzU2LjYwNzcgMjUuNDE5NCA1NS45OTU4IDIxLjYyNiA1NC45MDA0IDIwLjMyMTlDNTYuMzY2IDE5LjEyODcgNTcuODY2NSAxOC4wNDQ3IDU5LjM0MzggMTYuOTAwMUM1OS42MDYxIDIwLjg4MzIgNjEuMDIzNyAyMi4yNjY4IDYyLjc4NzEgMjAuOTM5MUM2NC4wODcyIDIyLjYyNTYgNjYuOTExNyAyMi40MDYyIDY3LjU4NzkgMjUuNDkzN0M2Ny42ODkxIDI1Ljk2OCA2Ny4wOTUzIDI1Ljk2MDcgNjcuMTk3MyAyNi45NDY4QzY3LjIzNDIgMjcuMzExMyA2Ny42MTg5IDMwLjczMzcgNjguMzEwNSAzMC4wNzE4QzY4Ljk1MTQgMjcuNzA5NiA2OS41NzQ4IDI1LjE3MDIgNzAuMjEyOSAyMi43NTk0QzY5LjY4MjcgMjEuNTU2OCA2OS4xOSAyNC40MjggNjguOTMzNiAyMi42ODkxQzY4Ljc5MzcgMjEuNzMzIDY5LjI1NDYgMjAuNTkxMSA2OC44NjcyIDE5LjM2MUM2OS42NDUxIDE5LjUwNzEgNzAuMTY2OCAxOS4zNzE0IDcwLjg0NTcgMTkuNDA3OUM3MC4zMDY1IDE4LjA3NDEgNjkuNzc2NSAxNi43NTEzIDY5LjI0MDIgMTUuNDIzNkM2OS4xMzUzIDE1LjQyMzYgNjkuMDIzOSAxNS40MjUzIDY4LjkyMTkgMTUuNDMxNEM2OC44ODQgMTYuNzE2NSA2OS4wMDMyIDE4LjE4NTYgNjguODYzMyAxOS4zNjFDNjguNzE0NCAxOC44OTA3IDY3LjA4NjIgMTcuNTY3NyA2Ny4xMjcgMTYuMDk1NEM2Ny4xNDI0IDE1LjU3OTggNjcuNjA0IDE1LjU1MzEgNjcuNDUxMiAxNC42NzM2QzY3LjE5NDcgMTMuMTk5NyA2NS42NjM5IDExLjIzNzggNjcuMzU3NCAxMC4xNjU4QzY3Ljk4MzYgOS43NzA5NSA2OC44MDEyIDExLjMwMTggNjguOTA0MyAxMi43NDM5QzY4LjQ5NjYgMTMuMjEyNSA2OC4wNiAxMy42NDg2IDY3LjY0MDYgMTQuMTExMUM3MC43NDEgMTMuODc0MyA3Mi4zMjA1IDE3LjY2OTYgNzQuMzU3NCAyMi4wMTcyQzc1LjAxIDIwLjkyNzUgNzUuMjY0NyAxOS41MjE4IDc1LjYyMyAxNy45OTM4Qzc2LjExMjYgMTUuOTExNCA3NS44NzQxIDE0LjkwMjUgNzcuMjEwOSAxNS4zMjJDNzcuMjA1MSAxNi43NTI5IDc3LjU0MDkgMTkuNzk2OCA3Ni44ODI4IDIwLjU0MDdDNzUuOTY3NyAyMS41Njk4IDc1LjEzNjkgMjMuODQwMyA3NC40MjU4IDI0LjMyMTlDNzMuNzE0OCAyNC44MDI5IDczLjg2NTYgMjIuODI4MyA3My4xNDA2IDIzLjQ3ODFDNzIuNTU0OCAyNC4wMDE5IDcyLjI2NTUgMjUuMDYyMSA3MS40OTAyIDI0Ljc1MTZDNzEuNjc5NyAyNS40MTU0IDcxLjg3NSAyNi4wNzA0IDcyLjA2NDUgMjYuNzI4MUM3MS43NjQ0IDI3LjM5NzggNzEuNDYzMSAyOC4wNzQgNzEuMTYwMiAyOC43NDM3QzcwLjQyOSAyOC45NzUgNjkuNjc0NiAyOS4yMDE2IDY4Ljk1NTEgMjkuNDM5QzY5LjU3ODggMzAuNjY3OSA3MS4wNTc5IDMwLjQxNyA3MS43MjI3IDI5Ljk1NDZDNzIuMzg0IDI5LjQ5MTkgNzIuNzc4MSAyNi45OTExIDczLjQwNDMgMjcuMzg0M0M3My44MjEgMjkuMTQ0IDcyLjg4MzYgMzAuNTg1NCA3Mi45Mjk3IDMxLjk4NThDNzIuOTk2NyAzMy45NzczIDc0LjE3NzUgMzMuODgwOSA3My45NTkgMzYuMjQzNkM3NC4zOTkxIDM0LjgxMjQgNzQuNzk2MSAzMy40MjIyIDc1LjIxODggMzIuMDA5M0M3NS4wNDM5IDMwLjQ1NzIgNzQuODY2MiAyOC45MDUyIDc0LjY5MTQgMjcuMzUzMUM3NS4zMzIyIDI4LjIyOTYgNzUuOTcwNSAyOS4xMDk0IDc2LjYxMTMgMjkuOTg1OEM3Ni4xODMxIDI4LjY1OTEgNzUuNzU0MyAyNy4zMzYxIDc1LjMyNjIgMjYuMDA5M0M3Ni44NTMyIDI2LjM3NDUgNzguMzAxNyAyNC43NDAxIDc5Ljc2NzYgMjUuOTM5Qzc5Ljk4MDMgMjQuODAwNSA4MC4xOTA2IDIzLjY1NTggODAuNDAwNCAyMi41MTcyQzgxLjQ2OTkgMjEuNDE1IDgyLjUzOTggMjAuMzE0OCA4My42MDk0IDE5LjIxMjZDODIuOTgyOSAyMC43OTUzIDgyLjM1NjkgMjIuMzg1OCA4MS43MzA1IDIzLjk2MjVDODEuNTU4NyAyNy40MDcyIDgxLjY4MzcgMjYuNjQ1OSA4Mi45OTIyIDI3LjMyMThDODMuMDI5NiAyNy4zNDY3IDgzLjAxOSAyOC40MDk4IDgzLjMwODYgMjguMzk5OUM4My41OTk5IDI4LjM4NzggODMuNTgwMyAyNy4zNTAxIDgzLjYyMTEgMjcuMzA2MkM4NC4wNTU0IDI2Ljg5MjEgODQuNDcyOSAyNy4zNDEzIDg0LjkwNDMgMjcuMTg5Qzg0LjQ5MDUgMjUuNjU0OCA4NC4wNzM5IDI0LjA4NyA4My42NjAyIDIyLjU0MDZDODQuMzQ0NSAyMC41NDk5IDg0LjA5NzMgMTguOTYyNCA4NS40Nzg1IDE5LjA3MkM4NS41MDQ3IDE4LjI1MTUgODUuNTMxNSAxNy40MzE1IDg1LjU2MDUgMTYuNjExMUM4Ni4zOTY2IDE1LjY3MzYgODcuMjMyMyAxNC43MzYgODguMDY4NCAxMy43OTg2Qzg4LjYwNDYgMTYuMDE1NCA4OS4xNDE1IDE4LjIzNjIgODkuNjc3NyAyMC40NDY5QzkwLjIwNTMgMTguNDM3MSA5MC43MzQxIDE2LjQyNTYgOTEuMjYxNyAxNC40MTU4QzkwLjgzMzMgMTMuMzEzNSA5MC40MDQgMTIuMjA1NiA4OS45Nzg1IDExLjEwMzNDOTAuNDAwNCAxMS4wNzMxIDkwLjgyMjMgMTEuMTUxNiA5MS4yNDQxIDExLjA4NzdDOTEuMjQ4NyAxMS4wODY5IDkxLjI1MzIgMTEuMDg4NCA5MS4yNTc4IDExLjA4NzdDOTEuNTQwMSAxMy4wNzU2IDkxLjc3MTIgMTQuNTA3MyA5MS4yNjc2IDE2LjQyMzZDOTEuNjkwMiAxNS4wODM3IDkyLjExMjUgMTMuNzM4MyA5Mi41MzUyIDEyLjM5MjRDOTMuNDM4NCAxMi4yNDYyIDkzLjkzMzggMTIuMDA0NyA5My43OTEgMTQuMjUxN0M5NC40MzggMTQuNTA3NSA5NS4wODU0IDE0Ljc1MzcgOTUuNzMyNCAxNS4wMDk1Qzk1LjA5NyAxNS40NzI0IDk0LjQ2MDYgMTUuOTM1NSA5My44MjgxIDE2LjM5MjNDOTMuNjMyOSAyMC42MzcyIDkyLjY2ODQgMjMuMTUzMSA5NC40NDM0IDI2LjM2ODdDOTQuMDMyNiAyNy45MzMxIDkzLjYyMDcgMjkuNDkxOCA5My4yMTI5IDMxLjA1NjFDOTIuNjc5OSAyOS43Mjk0IDkyLjE0NDMgMjguNDA2NCA5MS42MTEzIDI3LjA3OTZDOTEuMTg5IDI4LjQxODYgOTAuNzY2MSAyOS43NTYyIDkwLjM0MzggMzEuMDk1MkM4OS40NDMxIDI5LjI5MjYgODkuNTY3NCAyNi43MzM3IDg4LjEwNzQgMjcuMTEwOUM4OC4yMDkzIDI1LjMzOTggODguMzA4MiAyMy41NjE4IDg4LjQxMDIgMjEuNzkwN0M4Ny44Nzk5IDIxLjc5NjggODcuMzQ2NyAyMS44MDE5IDg2LjgxNjQgMjEuODE0MUM4Ny4wMjkxIDIzLjc4MDggODcuMjQyNCAyNS43NTM2IDg3LjQ1NTEgMjcuNzIwM0M4Ni42MTI3IDI5LjU0MTMgODUuNzY2MSAzMS4zNjc5IDg0LjkyMzggMzMuMTg4OUM4NS45ODE4IDMyLjA2ODMgODcuMDUyMiAzMC45MTIgODguMTAxNiAyOS44MjE4Qzg4LjA1NDkgMzEuMzUyIDg4LjAwMDYgMzQuNzUzOCA4OS4xMzA5IDM0Ljg5OThDODkuNTYyIDM0Ljk1MzMgOTAuMDM3NiAzMy41Njk3IDkwLjY1MjMgMzUuMTM0MkM5MC42Nzg1IDMzLjcyNzkgOTAuNjUxNCAzMi40NTI5IDkwLjY2MDIgMzEuMDk1MkM5MS4yOTI2IDMxLjA5NTIgOTEuOTI2MSAzMS4wODU3IDkyLjU1ODYgMzEuMDc5NkM5Mi41NjQ0IDMxLjcwNjggOTIuNTY3NCAzMi4zMzY5IDkyLjU3MDMgMzIuOTcwMkM5Mi45OTg2IDMyLjc3NTQgOTMuNDI3MiAzMi41NzkxIDkzLjg1NTUgMzIuMzg0M0M5My41NDA3IDM0LjE2ODMgOTMuMjI1OCAzNS45NTE3IDkyLjkwODIgMzcuNzM1N0M5Mi40Nzk4IDM2LjQwODQgOTIuMDUxNCAzNS4wODA0IDkxLjYyMyAzMy43NTkyQzkxLjUyMSAzNS4wOTMgOTEuNDE1NCAzNi40MzMyIDkxLjMxMDUgMzcuNzY3QzkwLjY2NjQgMzcuMzM0NiA5MC4wMzk2IDM2Ljg5NDcgODkuMzg2NyAzNi40NjIzQzg5LjcwNzMgMzguMzU2NCA4OS4wMDgzIDM5LjQ0MTkgODguOTI5NyA0MS4xMTA3Qzg4Ljg3NzMgNDIuMjE4NCA4OS40MjAyIDQyLjU2NTUgODkuNDI5NyA0My44MDZDODkuNDQxMyA0NS42NjM1IDg5LjM5NzYgNDcuODU5NiA4OS40MjM4IDQ5Ljc5MDJDOTAuNDkwNiA1MC4yMzQ4IDkxLjU1MzMgNTAuNjU0NyA5Mi42MTcyIDUxLjA4NzFDOTIuNzI3OCA1My40NjE2IDkyLjU3MjIgNTQuOTI4NCA5MS42NDg0IDU2LjQzODZDOTEuMDMzNSA1Ni4wMTg0IDkwLjQyMTUgNTUuNTk5MiA4OS44MDY2IDU1LjE3M0M4OS4yNTg3IDU2LjA2MiA4OC43MTEgNTYuOTQ2MyA4OC4xNjAyIDU3LjgyOTJDODcuOTQ3NCA1NS4xNjc3IDg3LjcxMzggNTIuNDk4NiA4Ny41MDk4IDQ5LjgzNzFDODUuOTI3MSA1MC44ODQ3IDg2LjMwMjUgNTMuOTg4NCA4NS40OTggNTYuNDg1NUM4NS4zNTIzIDU2LjkyNjQgODQuMTE5IDU2LjQ4NTggODQuMDMzMiA1Ny44OTk1QzgzLjY2MzMgNTYuOTk4OSA4My4zODI3IDU2LjEzMTcgODMuMDQ0OSA1NS4yNDMzQzgzLjY4MzEgNTQuMzQ4MiA4NC4zMTc5IDUzLjQ0MTQgODQuOTUzMSA1Mi41NDAyQzg0LjIwNyA1Mi4xMTM5IDgzLjQ2MDkgNTEuNjkzIDgyLjcxNDggNTEuMjY2OEM4Mi4zOTQzIDUyLjU4ODEgODIuMDc0NCA1My45MTQxIDgxLjc1MzkgNTUuMjM1NUM4MC4wNTc2IDU1LjcxMDUgNzguMzYwNCA1Ni4xOTAxIDc2LjY2NDEgNTYuNjY1MUM3Ny4wODk1IDU2LjIxNDYgNzcuNTEyIDU1Ljc2NDIgNzcuOTM3NSA1NS4zMTM2Qzc3LjcyMTggNTMuNTM1MyA3Ny41MDI4IDUxLjc2MzggNzcuMjg3MSA0OS45ODU2Qzc2Ljc2ODQgNTAuODc0NCA3Ni4yMDgyIDUxLjc5NDYgNzUuNzEyOSA1Mi42NjUyQzc0LjcxMTQgNTEuODg1NiA3NS4yNjQyIDUwLjExNCA3NC42MDk0IDQ4LjgyOTNDNzMuOTUzNiA0Ny41NDQ0IDcyLjI4NjQgNDcuNjU3IDcxLjU1NDcgNDYuMDU1OUM3MC44ODE0IDQ2LjA5ODYgNzAuMjY5IDQ2LjA4NDUgNjkuNjE5MSA0Ni4xMDI4QzcwLjA0NzUgNDYuOTk3OSA3MC40NzI5IDQ3Ljg5MzQgNzAuODk4NCA0OC43ODI0QzcwLjY4ODYgNTAuNTU0OCA3MC40ODUyIDUyLjMyNDMgNzAuMjY5NSA1NC4xMDI3QzcwLjg0OTQgNTQuMjUzMyA3MS40NjQ2IDUyLjIzNiA3MS45NjI5IDUxLjU0OEM3Mi40NjE2IDUwLjg1OTMgNzMuNTk0NSA0OS4xMTcgNzQuMDg5OCA1MC43MTIxQzcyLjAwNiA1NS44ODc2IDcwLjA5NjIgNTYuNzM1NSA2Ny4zOTQ1IDUyLjgxMzZDNjcuMzk3NSA1NC4xNDYyIDY3LjQwMTQgNTUuNDgxIDY3LjQwNDMgNTYuODEzNkM2Ni44NjUxIDU0LjgyMiA2Ni4zMjQzIDUyLjgyODcgNjUuNzg1MiA1MC44MzcxQzY2Ljg0OSA0OS4wMzQzIDY3LjkwNzggNDcuMjU4MSA2OC45NzQ2IDQ1LjQzMDlDNjguMTg1MiA0NC40OTI0IDY4LjY1MzIgNDEuMTgzIDY3LjM0NzcgNDIuMjY2OUM2Ni42NzcyIDQyLjgyMzMgNjUuNTc4NCA0Ny4xNDg2IDY0LjkwMjMgNDcuMjI3OEM2My40NzczIDQ3LjM5OCA2Mi42MDI2IDQ2LjQyNjEgNjEuMzA4NiA0Ni4yNDM0QzYyLjMwMjUgNDguNDE3NyA2My4yNjE4IDUwLjY1NTggNjQuMjQ0MSA1Mi44NjA1QzY0LjEyNDcgNTMuNzM3IDY0LjAwODEgNTQuNjA3MiA2My44ODg3IDU1LjQ3NzdDNjcuNTE0NCA1Ny4yNjgzIDY0Ljc2ODYgNjIuODI1MyA2My4yNjc2IDYyLjIwNDFDNjIuNzM3NCA1OS45OTQ3IDYyLjE4MzYgNTcuNzY4NyA2MS42NjggNTUuNTcxNEM2MC40MjM5IDU3LjM5MTUgNjAuOTM4MiA1OC4wMjI5IDYxLjI3MzQgNjAuMjQzMkM2MS44MTU0IDYzLjgyOTYgNTkuNTkwMyA2MS4xMzI5IDU4LjgxNDUgNjAuOTMwN0M1OC43OTExIDU5LjU5MDggNTguNzk1OSA1OC4yNjQ2IDU4Ljc4NzEgNTYuOTMwOEM1Ny45MzkxIDU3LjM4NzUgNTcuMDg3MyA1Ny44NDkgNTYuMjM2MyA1OC4zMDU3QzU2LjY2NDcgNTkuMTg4OCA1Ny4wOTExIDYwLjA3MTEgNTcuNTE5NSA2MC45NTQxQzU0Ljk0MDEgNjAuNjU1OSA1My4xNTg3IDYzLjQ5MjcgNTMuMDY4NCA2OS4wMTY1QzUzLjU5ODcgNjcuMjMyMiA1NC4xMjM5IDY1LjQ0MTUgNTQuNjU0MyA2My42NTcyQzU0Ljk3NDkgNjUuODY4IDU1LjI5ODUgNjguMDc5MSA1NS42MTkxIDcwLjI4OTlDNTUuMTk2NiA3MS4xOTEyIDU0Ljc3NiA3Mi4wOTM1IDU0LjM1MzUgNzMuMDAwOEM1NC45OTE2IDcyLjI4MjUgNTUuNjMwNSA3MS41NzA3IDU2LjI2NTYgNzAuODUyNEM1Ni42NTkxIDY5LjU2MTYgNTcuMDU1OCA2OC4yNjA1IDU3LjQ0OTIgNjYuOTY5N0M1Ny4yNjI4IDY1Ljg1NTggNTcuMDc3IDY0LjczOTkgNTYuODkwNiA2My42MjZDNTcuNTIzIDYzLjE3NTQgNTguMTUyOCA2Mi43MjUgNTguNzg1MiA2Mi4yNzQ0QzU4Ljc5NjggNjMuMTUxNCA1OC44MDg3IDY0LjAzMDIgNTguODIwMyA2NC45MDcyQzYwLjMwMzcgNjQuNDUwNSA2MS43ODcgNjMuOTg4OSA2My4yNjc2IDYzLjUzMjJDNjMuMjY3NSA2NC44NjUxIDYzLjI3NDQgNjYuMjAxIDYzLjI3NzMgNjcuNTRDNjIuODU0OSA2Ny4wOTU1IDYyLjQzMTIgNjYuNjU2MyA2Mi4wMDU5IDY2LjIxMTlDNjEuNjg1MyA2Ny41NTc0IDYxLjM2NzQgNjguODk1OCA2MS4wNDY5IDcwLjIzNTJDNjAuOTMzMiA2OS4zNTgyIDYwLjgxOTcgNjguNDcxNyA2MC43MDMxIDY3LjU5NDdDNTkuODU3OCA2Ny41OTQ3IDU5LjAxMTMgNjcuNjA0MiA1OC4xNjYgNjcuNjEwM0M1OC44OTQ2IDczLjY1MTQgNjAuNjk5NCA3My4wMDU1IDYyLjk2MDkgNzAuMzQ0NkM2My4zODYyIDcxLjE1NDEgNjMuODEyIDcxLjk2NDcgNjQuMjQwMiA3Mi43NzQzQzY0Ljk4MzMgNzEuOTAzNSA2NS43Mjc2IDcxLjAzNTcgNjYuNDcwNyA3MC4xNjQ5QzY2LjM2IDcxLjA1MzEgNjYuMjQ5MyA3MS45NDg2IDY2LjEzODcgNzIuODM2OEM2Ni44OTA2IDczLjI2OTIgNjcuNjQyNiA3My43MDEyIDY4LjM5NDUgNzQuMTMzNkM2OC4xODE4IDcyLjM2NzUgNjcuOTY1NiA3MC41OTUyIDY3Ljc1IDY4LjgyOUM2OC4xNTggNjguNzgwMyA2OC41NjY2IDY4LjczMSA2OC45NzQ2IDY4LjY4ODRDNjguOTk1IDY3Ljg1NCA2OS4wMTU3IDY3LjAxNSA2OS4wMzkxIDY2LjE4MDZDNzAuNDMyMiA2Ni40MDU4IDcxLjA5NjYgNjQuODc0OSA3Mi4yMDEyIDYzLjQwNzJDNzEuOTk0MiA2NS4xODU1IDcxLjc4NCA2Ni45NzI2IDcxLjU3NDIgNjguNzUwOUM3MC4zNTMzIDY4LjQ4MjcgNjkuOTA2NSA2Ny4wNjY5IDY5LjAyMzQgNjkuNDU0QzY5LjM1ODYgNzAuMTE3OSA2OS42OTIxIDcwLjc4MDYgNzAuMDI3MyA3MS40Mzg0QzY5LjkwNzggNzIuNzcxOCA2OS43OTA0IDc0LjExMjcgNjkuNjczOCA3NS40NDYxQzcwLjMwOTIgNzQuNTQ0NyA3MC45NDg1IDczLjY1MjIgNzEuNTg0IDcyLjc1MDhDNzEuODAyNSA3NC41Mjg2IDcyLjAxNzggNzYuMzAxMSA3Mi4yMzYzIDc4LjA3ODlDNzIuODY4OCA3OC4wNjA2IDczLjUxODggNzguMDgwNyA3NC4xNDI2IDc4LjAzMkM3NC4xNzQ2IDc1Ljg2NDUgNzIuNDE4MSA3Ny4zNTMxIDcyLjkwMDQgNzQuODI4OUM3My4zODQgNzIuMzAyNCA3My45MjY2IDczLjU2MzYgNzQuNzQyMiA3NC4wMDg2Qzc0Ljc2ODMgNzMuMTY5NyA3NC43NzE3IDcyLjI3MDQgNzQuNzg5MSA3MS40MDcxQzc1LjQyMTUgNzEuMzgyNyA3Ni4wNTUgNzEuMzUzMyA3Ni42ODc1IDcxLjMyOUM3NS43OTg1IDY4LjQ0ODQgNzQuODY4OSA2Ny40OTUzIDc2LjM1NTUgNjQuNjU3MkM3Ny4xMjE2IDY2LjE3MjkgNzcuNjExMyA2Ny4wNzk4IDc3Ljk3ODUgNjkuMzk5M0M3OC4wNjU5IDY5Ljk0NzMgNzguNDk2NiA3Mi41NTMgNzguNDUzMSA3My4yMTE4Qzc4LjMxOTEgNzUuMjE0NCA3Ny42OTg5IDc1Ljk0MTQgNzcuOTgwNSA3Ny45ODUxQzc4LjE5MzIgNzcuMDgzNyA3OC40MTYyIDc2LjIzMDMgNzguNjM0OCA3NS4zMjg5Qzc5LjQ2NTIgNzUuNDYyMyA4MC4wNjI3IDczLjk3MTUgODAuODI2MiA3My44NjhDODEuMzk3NCA3My43ODg5IDgxLjYxNCA3NC44NTkzIDgyLjEyNyA3NC44ODM2QzgyLjYzODkgNzQuOTA2NCA4Mi42OTc5IDczLjUxMDQgODMuMzU1NSA3NC4wMzIxQzg0LjE1OTggNzQuNjc3NSA4NC40OTU3IDc3LjA2OTEgODUuNjI4OSA3Ni41MTY0Qzg1LjIxMjIgNzQuNTczOSA4NC43NzkgNzIuNTc4OSA4NC4zNTM1IDcwLjYxODFDODQuNTYzMiA2OS40ODU4IDg0Ljc3MzYgNjguMzYxNCA4NC45ODA1IDY3LjIzNTNDODUuNjE1NSA2Ny4yMTcgODYuMjUzNiA2Ny4xOTcxIDg2Ljg4ODcgNjcuMTcyOEM4Ni43NzggNjUuMzk1MyA4Ni42NjczIDYzLjYyMjMgODYuNTU2NiA2MS44NDQ3Qzg3LjMwMjcgNjIuOTM0OCA4OC4wNTE3IDY0LjA1NDIgODguNzk0OSA2NS4xMjU5Qzg4LjM1MjEgNjYuNTYyMiA4Ny44NTc2IDY3LjQwOTMgODcuNjY4IDY5LjI1ODdDODcuMzk5OCA3MS44NzE1IDg3LjUxOSA3NS4zMjU4IDg4LjE4MzYgNzcuNzc0MkM4Ny43NjM5IDc3LjgyOSA4Ny4zMzQ3IDc3LjgzOTIgODYuOTEyMSA3Ny44NzU4Qzg2LjkxMjEgNzkuMTk2IDg2LjkxMjEgODAuNTE2MyA4Ni45MTIxIDgxLjgzNjZDODcuNzYzMiA4Mi4yNjkxIDg4LjYxNzYgODIuNzAxMSA4OS40Njg4IDgzLjEzMzVDODkuMjUwMSA4MC40NjU5IDg5LjAzMTEgNzcuODAxMiA4OC44MTI1IDc1LjEzMzZDOTAuMDM2NyA3Ni42OTg4IDkwLjMwMjMgNzUuMDA3MiA5MS4zNjMzIDczLjc1ODZDOTEuMzY5MSA3NC42NDc4IDkxLjM3NSA3NS41MzM1IDkxLjM4MDkgNzYuNDIyN0M5MS45MDgyIDc1Ljk3MjIgOTIuNDM1NSA3NS41MjE2IDkyLjk2MjkgNzUuMDcxMUM5Mi44NjY3IDc1Ljk1OTkgOTIuNzI3MSA3Ni44MjggOTIuNjYwMiA3Ny43MzUxQzkzLjU0OTIgNzcuMTI2MSA5NC43NzM5IDc5LjIwOTcgOTUuNDM1NSA3OC45NTM5Qzk2Ljc2MDYgNzguNDM1NCA5Ni4yMTU3IDc0Ljk5NiA5Ni40OTIyIDczLjk1MzlDOTYuNzY5IDcyLjkxMjYgOTcuMDI5IDczLjg5NzkgOTcuMzQ5NiA3My41NjMzQzk5LjYwNTYgNzEuMTY5OCAxMDEuNzM2IDY4LjYxNzMgMTAzLjc5NyA2NS41NDc4QzEwNC4xMjMgNjcuMzU2MSAxMDQuNDMzIDY5LjA0NTkgMTA0Ljc3MyA3MC45MTQ5QzEwNS4yNjkgNjkuMzYyMyAxMDYuMTMxIDcwLjgyOTYgMTA2LjYyMSA2OS4yMTE4QzEwNy4xMTEgNjcuNTkxOCAxMDYuODcgNjMuNzk2NiAxMDguMjcgNjIuODUyNUMxMDguMTUzIDY0LjUzMzUgMTA4LjA2MSA2Ni40MDE0IDEwNy45NTMgNjguMTQ5M0MxMDguNjk2IDY2LjgxMDEgMTA5LjQzNyA2NS40NTU3IDExMC4xOCA2NC4xMTAzQzExMS4yNDcgNjQuOTgxMyAxMTIuMzEyIDY1Ljg0NyAxMTMuMzc5IDY2LjcxMTlDMTEzLjI4IDY1Ljg0MTQgMTEzLjE0NCA2NC45MTMgMTEzLjA2OCA2NC4wNzkxQzExNC4wNTQgNjMuMzYwNCAxMTQuNjkgNjYuMDMyOSAxMTUuMjczIDY2LjQ3NzVDMTE2LjU1NSA2Ny40NTY1IDExNy40NTkgNjQuOTIzNyAxMTguMzU5IDY1LjQyMjhDMTE5LjU1NCA2Ni4wOTI4IDExOS4zODMgNjguNTA4NCAxMjAuNzMyIDY3Ljg5OTNDMTIwLjcwNiA2Ni41OTE0IDEyMC43MjMgNjUuMjM1MSAxMjAuNzExIDYzLjkxNUMxMjEuNzc4IDY0LjM0MTMgMTIyLjg0MiA2NC43NjIxIDEyMy45MDYgNjUuMTg4NEMxMjMuOTA2IDY1LjYzMzggMTIzLjkwNiA2Ni4wNzkxIDEyMy45MDYgNjYuNTI0NEMxMjQuMzMgNjYuNTI0NCAxMjQuNzU0IDY2LjUyNDQgMTI1LjE3OCA2Ni41MjQ0QzEyNS4xODQgNjguNzQxMyAxMjUuMTkyIDcwLjk1NTggMTI1LjIwMSA3My4xNzI3QzEyNS40MTEgNzIuMjc4NSAxMjUuNjIyIDcxLjM4MTEgMTI1LjgzMiA3MC40OTMxQzEyNi40NyA3MS4xNTA1IDEyNy4xMTIgNzEuNzk2NSAxMjcuNzUgNzIuNDU0QzEyNy4zMzMgNzMuMzQzIDEyNi44OTMgNzQuMjc1IDEyNi40ODggNzUuMTMzNkMxMjYuNDk4IDc2LjY3NDkgMTI3LjQ2IDc1LjIyNjMgMTI3LjcyMSA3NS44ODM2QzEyOC4yNjYgNzcuMjc4MSAxMjcuMTgzIDc5LjQ0OTIgMTI3LjQ1MyA4MS4xMTc5QzEyOC41MDUgNzkuNzkwNCAxMjkuNTc4IDc4LjQyNDcgMTMwLjYzOSA3Ny4wNzg5QzEzMC45NTYgNzcuMDY2NyAxMzEuMjcyIDc3LjA1MzcgMTMxLjU5IDc3LjA0NzZDMTMxLjU5NiA3OC4zNzU0IDEzMS42MDQgNzkuNzEyMSAxMzEuNjA5IDgxLjAzOThDMTMyLjQ1NyA4MS40NzIyIDEzMy4zMDYgODEuOTA0MiAxMzQuMTU0IDgyLjMzNjZDMTMzLjcyNiA4MS42NzkxIDEzMy4yOTcgODEuMDA1NSAxMzIuODY5IDgwLjM2MDFDMTMyLjkzOSA3Ny45NDk1IDEzMy4zMTQgNzYuMTA3MiAxMzMuNTA0IDczLjYxOEMxMzMuNTk0IDcyLjQzMDQgMTMzLjUwNSA3MC43MjUxIDEzNC40NjcgNzEuNzExOEMxMzQuODQ4IDcyLjEwMjcgMTM1LjIwNyA3NC4wMzg1IDEzNS43MyA3NC4wMTY0QzEzNi41NjEgNzMuOTY3NyAxMzcuMTMxIDczLjU3MzcgMTM3Ljk0MSA3NC4zMjg5QzEzNy45NjIgNzUuMTYyNSAxMzcuOTc5IDc2LjAyMDUgMTM3Ljk5NiA3Ni44NjAxQzEzOC42MzcgNzcuMDczMiAxMzkuMjc1IDc3LjI4NzcgMTM5LjkxNiA3Ny41MDA4QzE0MC4xMjMgNzguNjI3IDE0MC4zMzQgNzkuNzU3MyAxNDAuNTQxIDgwLjg4MzVDMTQxLjE3MyA4MC40MjcgMTQxLjgwNSA3OS45NzEyIDE0Mi40MzggNzkuNTA4NUMxNDIuNDQ2IDgwLjM5MDcgMTQyLjQ1NSA4MS4yNzQ4IDE0Mi40NjcgODIuMTU2OUMxNDQuMDE3IDgyLjQzMSAxNDQuODY5IDgxLjUzMjUgMTQ1LjAxMiA3OC4xNDE0QzE0Ni43MDggNzcuNjU0MSAxNDguNDA1IDc3LjE2NzcgMTUwLjEwMiA3Ni42ODA1QzE0OS44OTggODAuMjQyNCAxNDkuNjkgODMuNzk4IDE0OS40ODYgODcuMzZDMTUwLjExOCA4Ni44OTczIDE1MC43NTEgODYuNDMyIDE1MS4zODMgODUuOTY5NEMxNTEuMzgzIDg0LjY0MzMgMTUxLjM4NiA4My4zMTExIDE1MS4zODkgODEuOTg1MUMxNTIuNDY0IDgxLjcyOTMgMTUyLjkwMyA4My4xMjUgMTUzLjYyOSA4NC41MzE5QzE1NC4zNzIgODMuNDI5OCAxNTUuMTEyIDgyLjMyMTUgMTU1Ljg1NSA4MS4yMTk1QzE1NS4yMTcgODEuMDEyNCAxNTQuNTc4IDgwLjgwOTQgMTUzLjkzOSA4MC42MDIzQzE1My45MzQgNzkuMjc0NiAxNTMuOTI2IDc3LjkzNzkgMTUzLjkyIDc2LjYxMDJDMTUyLjk3OSA3Ni4xNTM1IDE1Mi4wMzcgNzUuNjk5NyAxNTEuMDk2IDc1LjI0M0MxNTAuNTQ1IDczLjA1NjYgMTQ5Ljk5NiA3MC44NzQ3IDE0OS40NDUgNjguNjg4NEMxNDkuOTc2IDY4LjIzMTcgMTUwLjUwNiA2Ny43NzAxIDE1MS4wMzkgNjcuMzEzNEMxNTEuMTUgNjkuMDkxOCAxNTEuMjU3IDcwLjg3MDkgMTUxLjM3MSA3Mi42NDkzQzE1Mi4yMTMgNzIuNjE4OCAxNTMuMDYgNzIuNTg2IDE1My45MDIgNzIuNTU1NUMxNTMuOTA4IDcxLjY3ODUgMTUzLjkxNCA3MC43OTk4IDE1My45MiA2OS45MjI3QzE1NC4zNDUgNjkuOTE2NyAxNTQuNzcgNjkuOTA1NCAxNTUuMTk1IDY5Ljg5OTNDMTU1LjIwNCA3MC43ODc4IDE1NS4yMSA3MS42NzY2IDE1NS4yMTkgNzIuNTcxMUMxNTUuOTU2IDcyLjEwODMgMTU2LjY5NSA3MS42NTEyIDE1Ny40MzYgNzEuMTg4NEMxNTcuNzIxIDczLjE5MjEgMTU4LjAwMyA3NS4xOTg0IDE1OC4yODkgNzcuMTk2MUMxNTguMTExIDc4LjI4NjMgMTU3LjkzNCA3OS4zNzkzIDE1Ny43NTYgODAuNDY5NUMxNTcuMzM5IDgwLjcxOTIgMTU2LjkxOSA4MC45NjggMTU2LjUwMiA4MS4yMTE2QzE1Ny43OTkgODQuNDk5MyAxNTkuNDU3IDg0LjU1MjMgMTYxLjI5MyA4NS43ODE5QzE2Mi43MTggODMuMTkzNSAxNjEuNTkyIDgxLjExNjEgMTYxLjYwNCA3Ny43NjY0QzE2Mi4xMTYgNzguMTg2NCAxNjIuNjMgNzguNjExOSAxNjMuMTQzIDc5LjAzMkMxNjMuNTg1IDc4LjE1NTQgMTY0LjAyOCA3Ny4yNzU4IDE2NC40NzEgNzYuMzk5MkMxNjUuMjE3IDc3LjcxNDcgMTY1Ljk2NyA3OC45OTY4IDE2Ni43MTMgODAuMzM2N0MxNjcuNDU3IDczLjY2NDYgMTcwLjE5NiA3NS45MzI0IDE3Mi43MjMgNzQuNjQxNEMxNzMuNzQzIDc0LjEyMzcgMTc0LjAzMiA3MC42MzQxIDE3NS4zMDkgNzAuODI5QzE3NS42MjkgNzIuNTMyOCAxNzUuOTU1IDc0LjM1NzggMTc2LjI3NSA3Ni4xMTAyQzE3NC45MzIgNzUuMjU3OCAxNzMuODE1IDc1LjkzNzcgMTcyLjQ1NyA3Ni4yMTE3QzE3Mi40NDggNzcuNTI2NCAxNzIuNDQgNzguODUwMSAxNzIuNDMyIDgwLjE2NDhDMTcyLjAxNSA4MC4xODkxIDE3MS41OTUgODAuMjEyNSAxNzEuMTc4IDgwLjI0MjlDMTcwLjc0MSA4Mi45NDAxIDE3Mi42MzIgODUuNjQxNSAxNzMuNzQyIDg1LjUwODVDMTczLjU0NyA4Mi4yNjkyIDE3NS4xMDMgODAuNTM3NyAxNzQuMzYzIDc3LjQ5MjlDMTc1LjIxNyA3OC44MDg0IDE3Ni4wNzIgODAuMTIyNyAxNzYuOTI2IDgxLjQzODJDMTc3LjU1NSA3Ni45ODIxIDE3OC4xODEgNzIuNTE5NSAxNzguODExIDY4LjA2MzRDMTc5LjEzMSA3MC4yOTIzIDE3OS40NDYgNzIuNTIxOSAxNzkuNzY0IDc0Ljc1MDhDMTgxLjA1OCA3Ni40ODA1IDE4Mi4zNSA3OC4yMDA3IDE4My42NDUgNzkuOTMwNEMxODMuNjQ1IDgxLjI2OTUgMTgzLjYzMyA4Mi42MTQ3IDE4My42MzkgODMuOTUzOEMxODQuNDc1IDgyLjEyNzMgMTg1LjUxMyA4MC43NTc0IDE4NS4xNzggNzcuOTM4M0MxODQuODgzIDc1LjQ0ODEgMTgzLjM4NiA3Ni42OTM4IDE4Mi43NjggNzUuNzgyQzE4Mi4xNTYgNzQuODY3OCAxODIuNTg3IDczLjA1MzQgMTgxLjc4NyA3Mi4xODgzQzE4MS43ODkgNzIuMTgzNSAxODEuNzkxIDcyLjE3NzYgMTgxLjc5MyA3Mi4xNzI3QzE4MS43ODkgNzIuMTY2NiAxODEuNzg1IDcyLjE1NTYgMTgxLjc4MSA3Mi4xNDkzQzE4Mi4xOTcgNzEuMTU4OSAxODIuNTYzIDcwLjI2MDkgMTgyLjk1OSA2OS4zMDU2QzE4My42MDkgNzEuMDY1MyAxODQuMjU4IDcyLjgyNyAxODQuOTA4IDc0LjU4NjdDMTg1LjY0NiA3NC4xMyAxODYuMzgyIDczLjY2MDcgMTg3LjExOSA3My4yMDM5QzE4Ny4zMzUgNzQuOTc2MyAxODcuNTQ5IDc2Ljc1OTcgMTg3Ljc2OCA3OC41MzJDMTg3LjM0MiA3OC4zMTkgMTg2LjkxNyA3OC4xMDQzIDE4Ni40OTIgNzcuODkxNEMxODYuNDkyIDc4Ljk5ODcgMTg2LjQ5NyA4MC4xMDYxIDE4Ni41IDgxLjIxOTVDMTg3LjkzMSA4Mi4xMDg2IDE4OC45MDUgODIuMTAxNiAxOTAuMzMgODEuMTMzNUMxODkuODk5IDc4LjQ3OTcgMTg5LjQ2OCA3NS44MTg3IDE4OS4wMzcgNzMuMTY0OUMxODkuODkxIDc0LjQ3OTYgMTkwLjc0NCA3NS43OTM3IDE5MS41OTggNzcuMTAyM0MxOTEuNTkyIDc0LjQzNTcgMTkxLjU4NiA3MS43NjkxIDE5MS41OCA2OS4xMDI1QzE5Mi4wMTcgNzEuNTMyNSAxOTIuNDUzIDczLjk1OTYgMTkyLjg5MSA3Ni4zODM2QzE5Mi44ODUgNzcuMDQ3NCAxOTIuODc5IDc3LjcxOTggMTkyLjg3MyA3OC4zODM2QzE5MS4wMDggNzguMzIyNyAxOTEuNDg4IDgwLjQ3MDIgMTkyLjU4NCA4Mi40MDY5QzE5My41MzQgODEuOTM4MiAxOTQuNDg0IDgxLjQ3NzMgMTk1LjQzNCA4MS4wMDg1QzE5NS4yMTggNzkuOTAwOSAxOTUuMDA3IDc4Ljc5NTkgMTk0Ljc5MSA3Ny42ODgzQzE5NS40MjYgNzYuNTYyIDE5Ni4wNjIgNzUuNDMxNyAxOTYuNjk3IDc0LjMwNTVDMTk4LjI4MiA3Ni40MDY4IDE5OC4xMDQgODAuNTg4OSAxOTkuODk2IDgyLjIyNzNDMjAwLjEwOSA3OS44NTMgMTk4LjAxOSA3Ny42NDk2IDE5OC42NzggNzUuNzE5NUMxOTkuMDYyIDc0LjYwNSAyMDAuMDIyIDc3LjQwNjQgMjAwLjUxOCA3Ni4xODgzQzE5OS44OTcgNzUuNTQ4NCAyMDAuMTkxIDczLjE2NzEgMTk5LjUgNzIuOTU0QzE5OC4zMTQgNzIuNTg4OSAxOTcuODAyIDczLjU1MjMgMTk3Ljk2NSA3MC4yODIxQzE5OS4yNzMgNjkuODkzMiAxOTkuNjE4IDcyLjMzMDcgMjAwLjUyNyA3My41MjQzQzIwMS4xOCA3NC4zOCAyMDEuNzM2IDcyLjQ5MzMgMjAyLjQzNiA3Mi44NTI0QzIwMi4wMTMgNzMuMjcyNSAyMDEuNTg4IDczLjc1OTQgMjAxLjE2MiA3NC4yMDM5QzIwMS4zODEgNzYuODY0OCAyMDEuNTk5IDc5LjUyNzMgMjAxLjgyIDgyLjE4ODJDMjAzLjMwNCA4MS43MDcgMjA0LjgwOCA4MS4yMTggMjA2LjI3NyA4MC43NDI5QzIwNi41MzggNzkuMDU4NSAyMDUuNzkgNzguNjU3NCAyMDUuNzIzIDc3LjIyNzNDMjA1LjYwOSA3NC43NDkyIDIwNi41ODkgNzMuODgzNiAyMDUuNjE5IDcxLjQzMDVDMjA2LjQ4NSA3MS44NTY4IDIwNy4zMjcgNzIuMjkzNCAyMDguMTg0IDcyLjcxOTZDMjA4LjAwMyA3My4zODMzIDIwNy44MjUgNzQuMDQ4IDIwNy42NDUgNzQuNzExN0MyMDcuODI1IDc1LjM1MDcgMjA4LjAwMyA3NS45ODg1IDIwOC4xODQgNzYuNjMzNkMyMDcuNzYxIDc2LjY3NjIgMjA3LjM0MSA3Ni43MTc3IDIwNi45MTggNzYuNzY2NEMyMDYuOTE4IDc4LjA4OCAyMDYuOTE5IDc5LjQxMzUgMjA2LjkyMiA4MC43MzUxQzIwNy41NiA4MC43MjI5IDIwOC4xOTggODAuNzAwNCAyMDguODM2IDgwLjY4ODJDMjA4LjgzMyA3OC45MTIyIDIwOC44MjcgNzcuMTM2MiAyMDguODI0IDc1LjM2MDJDMjEwLjEwMSA3NS43NzQzIDIxMS4zODIgNzYuMTg4MiAyMTIuNjU4IDc2LjYwMjNDMjEyLjU0NSA3NS43MzE0IDIxMi40MjcgNzQuODQ4MyAyMTIuMzE2IDczLjk3NzRDMjEzLjEyNiA2OC4zMjcyIDIxMi4zNiA2NS41MjIyIDIwOS40NDMgNjYuMDA4N0MyMDkuODcyIDY3LjMyOTggMjEwLjMgNjguNjU2NCAyMTAuNzI5IDY5Ljk3NzRDMjEwLjE5OCA3MC40MzQyIDIwOS42NjcgNzAuODk1NiAyMDkuMTM3IDcxLjM1MjRDMjA4LjI0OCA2OS44NjAzIDIwOC4wNzMgNjguMzc2MSAyMDguMTYgNjYuMDU1NkMyMDcuNTI1IDY2LjA2NzggMjA2Ljg5IDY2LjA3MyAyMDYuMjUyIDY2LjA3OTFDMjA2LjI0NiA2NS4xOTY1IDIwNi4yMzkgNjQuMzEzMiAyMDYuMjMgNjMuNDMwN0MyMDUuMzgzIDYyLjk5ODQgMjA0LjUzNSA2Mi41NzM5IDIwMy42ODkgNjIuMTQxNkMyMDQuOTYzIDYxLjY2NjcgMjA2LjIzNiA2MS4xODY5IDIwNy41MSA2MC43MTJDMjA3LjUxIDU5LjM3ODIgMjA3LjUwOCA1OC4wMzggMjA3LjUwOCA1Ni43MDQyQzIwOC42OTkgNTYuNDI0NCAyMDguODMxIDU2Ljc4NzIgMjA4LjgzNCA1OS4yNTFDMjA5LjI0OCA1OS4yODE1IDIwOS42NTkgNTkuMzIyMiAyMTAuMDcyIDU5LjM1MjZDMjA5Ljg2IDYwLjIzNTEgMjA5LjY0NyA2MS4xMTg1IDIwOS40MzIgNjIuMDAxQzIxMC40OTUgNjEuNzUxMyAyMTEuNTU5IDYxLjUwODUgMjEyLjYyMyA2MS4yNTg4QzIxMS43NiA1OS4wMTE3IDIwOS45ODMgNTguNTY1NyAyMTAuMDQxIDU1LjM0NDhDMjA4LjA4OCA1NC44ODgxIDIwNy4xNTcgNTYuNDczNCAyMDUuOTA2IDU5LjQxNTFDMjA1LjcgNTkuNDE1MSAyMDUuNDk2IDU5LjQyMjkgMjA1LjI4OSA1OS40MjI5QzIwNC4zNDggNTcuNjU3MSAyMDMuNzgyIDU1LjQ2NTQgMjAyLjM5OCA1NS41MDExQzIwMi41OTQgNTYuODU3NyAyMDIuODY2IDU4LjEwNzMgMjAzLjAxMiA1OS41MjQ1QzIwMS42NDIgNTkuMjI4NiAxOTkuNDQ5IDY0LjAwNjkgMTk4LjQxNCA2My40MDcyQzE5Ni4zMTMgNjIuMTgzNCAxOTguMzMzIDU3LjAyMTggMTk3LjkgNTQuMzI5MkMxOTUuNzEyIDUzLjA5MzIgMTk1Ljc4MSA1OC4wNjUyIDE5NC40MyA1OS40MzA3QzE5My4zMDcgNjAuNTY5NiAxOTIuMjI1IDU5LjQwNjcgMTkxLjI1NCA1OS42ODA3QzE5MC41NTUgNTkuODc2MSAxOTAuNDA4IDYwLjk4MTEgMTg5Ljg5MyA2MC45Mzg1QzE4Ny40NDIgNjAuNzQ4NyAxODUuNzU0IDU1Ljk0MzggMTgzLjI0NCA1NS45NjJDMTgzLjg4OCA1Ny43MDM4IDE4NC41MzEgNTkuNDgxNSAxODUuMTcyIDYxLjIzNTRDMTg0LjExNyA2MC43OTcgMTgzLjA1OSA2MC4zNTk2IDE4Mi4wMDQgNTkuOTE1MUMxODEuOTg2IDU5LjA2MzEgMTgxLjk2OCA1OC4yMDQ2IDE4MS45NTMgNTcuMzUyNkMxODAuODk2IDU3LjM2NDggMTc5Ljg0MSA1Ny4zNzE3IDE3OC43ODMgNTcuMzgzOUMxNzguNzgzIDU4LjcxNzIgMTc4Ljc4NiA2MC4wNTA1IDE3OC43ODkgNjEuMzgzOEMxNzguNTczIDYwLjUwMDcgMTc4LjM1NyA1OS42MTA3IDE3OC4xNDUgNTguNzI3NkMxNzcuMDIgNjAuMjA3MyAxNzYuMzg0IDYxLjg0NjUgMTc0Ljk1OSA2MS40Njk4QzE3NS42IDYyLjc5MSAxNzYuMjQyIDY0LjEwOTQgMTc2Ljg4MyA2NS40MzA2QzE3Ni4wNCA2NC45Nzk5IDE3NS4xOTcgNjQuNTM3NiAxNzQuMzUyIDY0LjA4NjlDMTc0LjMyOCA2My4yNTk0IDE3NC4zMDMgNjIuNDIyMiAxNzQuMjc5IDYxLjU5NDhDMTczLjMzMiA2MC4yNDg5IDE3Mi4zODUgNTguODkzOCAxNzEuNDM4IDU3LjU0NzlDMTcxLjMyNyA1OC40MzEgMTcxLjIzMSA1OS4zNDcxIDE3MS4xMTEgNjAuMjEyQzE3MC40MjEgNjAuNzE3NSAxNjkuOTcxIDU5LjMxODQgMTY5LjQ2NyA1OS4wODdDMTY4LjY1NiA1OC43MjE2IDE2OC40MjkgNjAuNjI3IDE2Ny42NjggNjAuMTg4NUMxNjcuMDk3IDU5Ljg1MzMgMTY2Ljc3MyA1OC42MjM5IDE2Ni4wNDUgNTguOTQ2NEMxNjYuMDI1IDU4LjA4MjMgMTY2LjAxNSA1Ny4xODcgMTY1Ljk5MiA1Ni4zODM5QzE2NS4yOTkgNTUuNjQxOSAxNjQuOTYxIDU3LjUxMDEgMTY0LjQzNCA1Ny4zODM5QzE2My4xMzkgNTcuMDczMyAxNjIuNDcxIDU0LjQ2ODYgMTYxLjA0MyA1NS4wMTY3QzE2MS4yMDYgNTQuMTIyNSAxNjEuMzcyIDUzLjMwNDkgMTYxLjUyMyA1Mi40MjNDMTYwLjkwNiA1Mi42NDEyIDE1OS44ODYgNTEuNTU0OSAxNTkuNjM1IDUzLjMzNzFDMTU5LjM4NCA1NS4xMTUgMTU5LjQ5OCA1NS4zNzI3IDE1OC4zODkgNTUuMjUxMUMxNTguMzc3IDU2LjEyMTIgMTU4LjM1MiA1Ni45NDM2IDE1OC4zMzIgNTcuODEzNkMxNTcuMDg4IDU4LjA2OTIgMTU2LjAwNiA1Ny42NDMzIDE1NC44NzUgNTYuNTE2N0MxNTQuMTU1IDU1Ljc5NzggMTU0LjU4MiA1My44OTY0IDE1NC41MDYgNTIuNTg3MUMxNTUuNTc1IDUyLjU0NDUgMTU2LjYzMyA1Mi41Mzk0IDE1Ny42OTkgNTIuNTA5QzE1Ny43NjMgNDcuOTg1NyAxNTUuNjYzIDQ2LjM5IDE1NS43NjIgNDEuODg0MUMxNTYuNCA0Mi4wOTExIDE1Ny4wMzggNDIuMzAyMSAxNTcuNjc2IDQyLjUwOTFDMTU3LjQ1MiA0MS40MDI2IDE1Ny4yNjMgNDAuMzAxNCAxNTcuMDE2IDM5LjE4ODhDMTU2LjQ5NyA0MC42NzQ5IDE1NS4xMTEgNDEuMDYyNiAxNTQuNTkyIDQxLjk3QzE1NC4wNzUgNDIuODc2OSAxNTQuNjUzIDQ0LjA5MzUgMTU0LjQzNiA0NS4xMzQxQzE1NC4zMTYgNDUuNzA2NiAxNTMuOTY5IDQ2LjEyMyAxNTMuOTE2IDQ2Ljc3NDdDMTUzLjgwMyA0OC4yNjYxIDE1NC41NDYgNDguNzkxIDE1NC40MyA1MC40Nzc3QzE1NC4zNzcgNTEuMjMyOSAxNTMuODg3IDUyLjA2MTggMTUzLjg1MiA1My4yOThDMTUzLjgwNSA1NC45NzI4IDE1My45MTcgNTcuNDQwOSAxNTMuODg1IDU5LjI0MzJDMTUyLjk5NiA1OS42MjY4IDE1Mi40ODYgNTcuOTI4OSAxNTEuNjQ2IDU3Ljk0NjRDMTUwLjgwNyA1Ny45NjQ2IDE1MC4zMTEgNTkuNjg1OCAxNDkuNDE2IDU5LjM0NDhDMTQ5LjgzNiA1OC4yNDI4IDE1MC4yNTUgNTcuMDk3OSAxNTAuNjc4IDU1Ljk3NzZDMTUwLjI1MiA1NC44ODc4IDE0OS44MzEgNTMuNzY4IDE0OS40MDIgNTIuNjk2NEMxNDkuMzg4IDUzLjk1MDkgMTQ5LjY4NyA1NS45MzMzIDE0OS4wOSA1Ni42MzM5QzE0OC43MzcgNTcuMDQ4IDE0OC4xMjUgNTcuODU1NCAxNDcuODU5IDU3Ljc4MjNDMTQ2LjgyOCA1Ny40OTU5IDE0Ni4zMjEgNTYuMDU0NCAxNDUuMjYgNTYuNzY2N0MxNDUuMDU2IDU3LjY0MzcgMTQ0LjgzNyA1OC41NTg5IDE0NC42MjcgNTkuNDU0MkMxNDQuMzEyIDU4LjExNDUgMTQzLjk2NSA1Ni44MjI2IDE0My42NzQgNTUuNDQ2NEMxNDQuNDE0IDU1Ljk1OCAxNDYuMzYxIDUzLjI1NTkgMTQ1LjQ2OSA1MS41ODcxQzE0NC43OTUgNTAuMzI5NiAxNDMuNTUyIDU0LjA2MDggMTQyLjcwMSA1MS42ODA4QzE0MS43MTMgNTMuMDA4NSAxNDAuNzg4IDU0LjI3NiAxMzkuODMyIDU1LjUyNDVDMTM5LjYgNTQuNDE1IDE0MC4yMzggNTEuNzY5IDE0MC41IDUxLjA4NzFDMTQxLjM4OSA0OC43NzI3IDE0Mi40OTcgNDkuMzc3NiAxNDIuMzYzIDQ2LjE0OTdDMTQxLjI5OSA0Ni42MzY5IDE0MC4yMzggNDcuMDg4NyAxMzkuMTc0IDQ3LjU2MzdDMTM5LjE2OCA0Ni4yMzEgMTM5LjE2NCA0NC44OTgzIDEzOS4xNTggNDMuNTcxNkMxMzguNTIgNDMuNTgzOCAxMzcuODg4IDQzLjU5MDcgMTM3LjI0NCA0My42MDI4QzEzNy4yOTcgNDIuNzMxOSAxMzcuNTc0IDQxLjYxOTIgMTM3LjkzIDQwLjkzMUMxMzcuOTg2IDQwLjgzIDEzOC41MzkgNDAuOTQ4OCAxMzguNTE4IDQwLjI2NjlDMTM4LjQ5MSAzOS41MjM5IDEzNy45NjcgMzkuNzE2OSAxMzcuOTMyIDM5LjU5NTFDMTM3LjY4MSAzOC43NDI1IDEzNy45NjEgMzcuODA2MyAxMzcuODcxIDM2LjkyMzNDMTM3Ljc2NiAzNi45MjMzIDEzNy42NjEgMzYuOTIzMyAxMzcuNTU3IDM2LjkyMzNDMTM3LjQ2NyAzNy44Mjg2IDEzNy4zMjMgMzguNjQ3NyAxMzcuMjcgMzkuNjEwN0MxMzcuNDc5IDM5LjYxMDUgMTM3LjY4OCAzOS42MDg5IDEzNy44OTYgMzkuNjAyOUMxMzcuODk4IDM5LjYwMjkgMTM3Ljg5OSAzOS42MDI5IDEzNy45IDM5LjYwMjlDMTM3LjkgNDAuMDQ4MiAxMzcuOSA0MC40OTM1IDEzNy45IDQwLjkzODhDMTM3LjY5IDQwLjUwNjIgMTM3LjQ3OCA0MC4wNzI2IDEzNy4yNjggMzkuNjM0MUMxMzUuNDY5IDQxLjgxNDUgMTM3LjQwMiA0NS4wMjc4IDEzNy42ODIgNDYuNjk2NUMxMzcuOTY0IDQ4LjM2MzUgMTM3LjIxMiA0OC4zNTIxIDEzNy4yMDkgNDkuNTMyNEMxMzcuMjAzIDUxLjQxOTUgMTM4LjM2OCA1NC4wNjg1IDEzNy44MTEgNTUuNDY5OEMxMzcuMzk0IDU2LjUyMzIgMTM2LjA1MiA1NS4wMDE5IDEzNi4zMTYgNTIuNzk4QzEzNi41ODIgNTAuNTkzNyAxMzUuOTY4IDQ3LjI4NzEgMTM0LjcxNSA0Ni4zNjA2QzEzNC40ODUgNDguNTU4NiAxMzYuNTE3IDUwLjYwODggMTM1LjMxOCA1Mi4yMDQzQzEzNC4zNjIgNTMuNDc3IDEzMy4yNCA1MS4xMDM5IDEzMi4xNzYgNTEuNzEyMUMxMzIuMTM1IDU0LjMxMjUgMTMxLjU1OCA1NS44MjY1IDEzMC4yNTggNTUuNzM1NUMxMzEuMjg0IDUxLjYxMjMgMTMwLjYwOSA0Ny4zMjQ1IDEyOC4zMTggNDYuNDIzMUMxMjguNTI4IDQ1LjA4OTggMTI4Ljc0MiA0My43NTY0IDEyOC45NTUgNDIuNDIzMkMxMjcuNDY5IDQxLjU1MjIgMTI1Ljk4NSA0MC42NjkxIDEyNC40OTggMzkuNzk4MkMxMjQuMjc3IDM4LjkyMTUgMTI0LjA1NyAzOC4wNDk5IDEyMy44MzYgMzcuMTczMkMxMjMuNjI2IDM4LjUxMjggMTIzLjQxNyAzOS44NDkzIDEyMy4yMDcgNDEuMTg4OEMxMjQuNjkzIDQxLjYwOSAxMjYuMTgzIDQyLjAzNDIgMTI3LjY3IDQyLjQ1NDRDMTI3Ljg5MSA0NS45OTkgMTI4LjExMSA0OS41NDI0IDEyOC4zMzYgNTMuMDg3MUMxMjcuOTE0IDUzLjU0MzQgMTI3LjQ4OSA1NC4wMDU3IDEyNy4wNjYgNTQuNDYyQzEyNy45MTQgNTQuODg4MyAxMjguNzggNTUuMzI5MiAxMjkuNjEzIDU1Ljc0MzNDMTI3LjkxNCA1Ny4xMTk1IDEyNi42ODQgNTcuMDE1NSAxMjUuMTkxIDU1LjI0MzNDMTIzLjY5OSA1My40NzEgMTI0LjMyOCA1NC42MTIzIDEyMi44NTQgNTQuNTYzNkMxMjIuMDY0IDU0LjUzODQgMTIxLjAyNiA1Mi42MTk2IDEyMC4wNTMgNTMuMjU4OUMxMTkuOTQyIDQ5LjMzNzUgMTIwLjU3MiA0Ni4wODE4IDEyMS4yOTUgNDIuNTU2QzEyMC43NjcgNDIuMTExNCAxMjAuMjIyIDQxLjcxNjggMTE5LjcwMyA0MS4yMzU3QzExOC45NCA0Mi41MDIyIDExOS41OTggNDMuODk0NyAxMTkuMjUyIDQ2LjA1NTlDMTE5LjE4OCA0Ni40NTE1IDExOC4yNDQgNDkuNzY2NSAxMTcuNzg5IDUwLjYzNEMxMTYuOTYxIDUyLjIyMzYgMTE0Ljg0MSA1My45MTQ3IDExMy42NzIgNTMuMzYwNUMxMTMuNjQ5IDUyLjQ3NzQgMTEzLjY1MiA1MS41ODU3IDExMy42MzUgNTAuNjk2NUMxMTIuNTAxIDUyLjMyMjMgMTExLjQwOCA1MS44MDY1IDExMC4xMzUgNTIuMDU1OEMxMDkuMzI0IDUyLjIxNDIgMTA5LjA5NiA1My42NDgyIDEwOC4xODQgNTMuNDc3N0MxMDYuNjU5IDUzLjE5MTEgMTA1LjYyOCA1MS4wMzE0IDEwNC4wODYgNTMuNTQwMkMxMDQuNDk0IDUyLjE3NjMgMTA0LjkyOCA1MC44NTQ2IDEwNS4zNDggNDkuNTA5QzEwNC4yMiA0OS44MTMzIDEwMy40MjQgNDkuNDI0NyAxMDIuNDQ3IDQ4LjI5ODFDMTAyLjIzMiA0OC4wNDg5IDEwMi4xMDQgNDcuOTU3OSAxMDEuODc3IDQ3Ljg2MDZDMTAxLjc2MyA0OC44NzczIDEwMS42NDEgNDkuODkwNyAxMDEuNTIxIDUwLjkwNzRDMTAwLjAzMiA1MS4zNzY0IDk4LjU0NDIgNTEuODQ0NyA5Ny4wNTQ3IDUyLjMxMzZDOTcuNDM2NSA0OS4zNzIgOTguNzEwOCA0NS43MzA2IDk2LjQwMjMgNDUuNjU3NUM5Ni42MTc5IDQ3LjQyODkgOTYuODM0MiA0OS4yMDYzIDk3LjA1MjcgNTAuOTc3N0M5NS45OTc2IDUxLjQ1MjggOTQuOTQxOCA1MS45MjQ1IDkzLjg4NjcgNTIuMzk5NkM5My42NjgxIDUzLjI4MjcgOTMuNDQ5MSA1NC4xNjMxIDkzLjIzMDUgNTUuMDQwMkM5My4zMzI1IDUzLjcxODUgOTMuNDY1MyA1Mi4zMzkyIDkzLjU0NjkgNTEuMDQ4QzkzLjIwMzEgNDkuNTg3MyA5Mi4zODczIDUwLjQ5OTUgOTIuMDQzIDQ5LjU0MDJDOTEuMzE0MyA0Ny41MTIxIDkxLjY2ODIgNDUuNDU2NCA5MC4wMDM5IDQ1LjcxMjJDOTAuNzE1IDQ0LjA3NCA5MC4xMjM0IDQzLjk3MjMgOTAuMTY5OSA0Mi40MDc1QzkwLjIxNjUgNDAuODQyMyA5MS45NDk0IDM3Ljg3OTEgOTIuNTQ2OSAzOS43MTIzQzkyLjE1NjMgNDAuODM5IDkxLjY5MjMgNDEuOTI4MyA5MS4yOTg4IDQzLjA3OTRDOTEuOTg2NyA0Mi44Mjk3IDkzLjI1NzYgNDIuNTE3IDkzLjc4NTIgNDEuNzQzNUM5My42NzI0IDQxLjgyMiA5My4xMSA0NC41MzI5IDkyLjY4OTUgNDQuOTIzMUM5Mi45NTM5IDQ0LjgzNDYgOTMuMjUzNSA0NC42MDY2IDkzLjUyNTQgNDQuNDc3OEM5My43NDExIDQ0Ljg1NTQgOTMuOTQ4NCA0NS4yNTQ3IDk0LjE2OTkgNDUuNjI2MkM5NS4wODIyIDQ0LjEyMTkgOTUuNzQzNyA0MC4zOTc3IDkzLjc4NTIgNDEuNzQzNUM5NC4zMTI0IDQwLjk3MDEgOTQuMTY3MSAzOS4yNzg2IDk0LjgxNjQgMzkuMDk1MUM5Ni4yNTA1IDM4LjY4NyA5Ni45Mzk2IDQwLjkyNDMgOTguMjk0OSAzOC45Mzg4Qzk4LjEyMDEgNDAuMDg5NiA5OC45MTQ0IDQzLjQ5NzYgOTkuNTM1MiA0Mi44NjA3QzEwMC4xNTYgNDIuMjE1MyAxMDAuMzIgNDAuOTcyNyAxMDAuODYxIDQwLjIzNTdDMTAwLjMwOCAzOC40NDcgOTkuNzg2NyAzNi43MDE2IDk5LjI0OCAzNC45MzExQzk4LjcxNzYgMzUuODI2NCA5OC4xODU3IDM2LjcyMzMgOTcuNjU4MiAzNy42MTg1Qzk3LjU0NzUgMzUuODQxIDk3LjQzNzkgMzQuMDY4MSA5Ny4zMzAxIDMyLjI5MDVDOTYuOTA3NCAzMy4xODU4IDk2LjQ4MTIgMzQuMDgyNyA5Ni4wNTg2IDM0Ljk3OEM5NS43MzUzIDM0LjMxNDUgOTUuNDI2NyAzMy42Njc0IDk1LjA5MTggMzIuOTg1OEM5Ni40NCAyOS4wOTM4IDkzLjYyNTQgMjEuMjA0NSA5Ni4xMTkxIDE5LjI2NzNDOTYuMzk4OSAxOS4wNTQyIDk3LjI2MjEgMjAuNzczOCA5Ny41OTE4IDE4LjI0MzhDOTcuNDIyNyAxNi44MDY1IDk3LjE0ODQgMTUuMTg1NyA5Ni45NDE0IDEzLjY4MTRDOTYuNTI0NyAxMy42NjMxIDk2LjExIDEzLjY0NSA5NS42OTM0IDEzLjYyNjdDOTYuMDExIDEyLjI5MjkgOTYuMzI2OCAxMC45NjA2IDk2LjY0NDUgOS42MjY3OUM5Ny42MTIyIDEzLjYwOTkgOTguNTc2MiAxNy42MDQ0IDk5LjU0MSAyMS41ODc1Qzk5Ljc1MDkgMjAuMjQ3NyA5OS45NjIgMTguOTA1OCAxMDAuMTcyIDE3LjU3MkMxMDEuNjQ2IDE3LjQ5MzIgMTAyLjYzMiAxOS4yOTgxIDEwNC4wMDIgMTcuNTAxN0MxMDQuMDA4IDE5LjczMDggMTA0LjAxNCAyMS45NDYxIDEwNC4wMiAyNC4xODEzQzEwNC43MTMgMjMuODcxNSAxMDUuMDI4IDI0LjgxNTkgMTA1LjYxMyAyNS4xODEyQzEwNS44NTggMjUuMzMzMyAxMDYuMDMyIDI0LjMwMTUgMTA2LjIyNSAyNC40MDc4QzEwNy4zIDI1LjAzNSAxMDguMDU2IDI2LjQ3OTggMTA4LjgxMSAyOC4wODc0QzEwOC45MSAyNS44NzIyIDEwOS4wMTQgMjMuNjQ0OCAxMDkuMTEzIDIxLjQyMzVDMTA5Ljc1NSAyMi4yOTQ0IDExMC4zOTQgMjMuMTcxNCAxMTEuMDM1IDI0LjA0ODRDMTExLjQ1MiAxOS41OTExIDExMS44NjUgMTUuMTIzMSAxMTIuMjgxIDEwLjY2NThDMTEyLjUwMyAxMS41NTUgMTEyLjcyNiAxMi40NDA3IDExMi45NDcgMTMuMzI5OUMxMTQuMjgyIDExLjUxNjggMTE1LjEwMiAxNC44NzA2IDExNi40MzQgMTMuMjc1MkMxMTYuOTM0IDE0LjUyMzUgMTE1Ljg0MyAxNi4wMyAxMTUuNTI1IDE2LjYyNjdDMTE1LjAzMyAxNy41NDk5IDExNC42NjkgMTYuNDU4IDExNC4yNjQgMTcuNTcyQzExMy44NTkgMTguNjg3MSAxMTMuODM1IDIxLjI4NTEgMTEyLjk1MyAyMi4wNDA3QzExMy4zNTUgMjMuNDA0NiAxMTMuNzUyIDI0LjY2NDYgMTE0LjE1NCAyNS45ODU5QzExMy45NzEgMjcuMTAwMyAxMTMuNzg3IDI4LjIyNDggMTEzLjYwNCAyOS4zNDUyQzExNC41NTYgMjguMDggMTE1LjEzIDI5LjEzNCAxMTYuMTU2IDI5LjI5ODRDMTE2LjA0IDI2Ljc5NTIgMTE2LjIyNyAyNC45MjU3IDExNy40MjIgMjMuOTM5MUMxMTcuODIyIDI3LjcxMjQgMTE4LjkzMSAzMC41OTM2IDExOC43MjUgMzQuNTU2MUMxMTkuNDA0IDMyLjI0NzggMTIwLjI2OSAyOC42OTA1IDEyMC45MDQgMjYuNjgxMkMxMjEuNTQgMjQuNjcyMyAxMjEuOTM5IDI0LjIwMjkgMTIyLjUyNyAyMi40ODZDMTIyLjA5NiAyMi41NDA3IDEyMS42ODEgMjIuNDg5NCAxMjEuMjU2IDIyLjUwMTZDMTIxLjEzOSAxOC44NTQyIDEyMS43MDggMTUuNDQ3NSAxMjEuMjI1IDExLjg2MTFDMTIyLjUwNCAxMy4wMTg0IDEyMi4yMDcgMTYuMjk1MyAxMjMuNzg3IDE1LjgxNDJDMTIzLjU3MiAxNC45Mzc2IDEyMy4zNTIgMTQuMDU4IDEyMy4xMzcgMTMuMTgxNEMxMjMuOTg4IDEyLjI3NDIgMTI0LjgzOSAxMS4zNjIxIDEyNS42ODkgMTAuNDU0OUMxMjUuNzU3IDEzLjE2OSAxMjUuOTk4IDE0LjY4NjEgMTI0LjQyMiAxNC41MDk1QzEyNC42MzcgMTUuODI5OCAxMjQuODUzIDE3LjE1MDEgMTI1LjA2OCAxOC40NzA0QzEyNC41MzggMTguOTAyNiAxMjQuMDA4IDE5LjMzNSAxMjMuNDc1IDE5Ljc2NzNDMTIyLjk0NCAxOC45MDg3IDEyMi40MDQgMTguMDU1NSAxMjEuODc3IDE3LjE5N0MxMjIuMTEzIDIwLjgyMDMgMTIzLjQ0NSAyMy4yOTQ3IDEyMy4xMDcgMjcuMTE4N0MxMjMuMDI5IDI4LjAwNzkgMTIxLjYyOSAyOS40MzgyIDEyMS45MTIgMzAuNTQwNUMxMjQuMzIgMzAuNzUzNyAxMjQuOTk2IDI2Ljk3OSAxMjUuMDggMjIuNDc4MUMxMjUuNzE4IDIyLjQ2NiAxMjYuMzU0IDIyLjQ1MyAxMjYuOTkyIDIyLjQ0NjlDMTI2Ljg4NyAyMy4zMyAxMjYuNzg2IDI0LjIxODMgMTI2LjY3OCAyNS4wOTUzQzEyNi4wNjkgMjMuNTYwNSAxMjUuNDI0IDIzLjQzMzUgMTI1LjczNiAyNS44NDUzQzEyNS44NSAyNi43MjMgMTI2LjI0OSAyOC45MjY5IDEyNi40MTIgMjkuNTU2MkMxMjYuOTU3IDMxLjYzOTEgMTI3LjU4OCAzMi43NTE1IDEyOC42MTEgMzMuMTEwOEMxMjguMjk0IDMyLjYzNTggMTI3Ljk4MSAzMi4xOTg3IDEyNy42NjYgMzEuNzM1OEMxMjcuMTc5IDI2LjQwMTggMTI2LjIzMyAyNC4wMTAxIDEyOS41NDkgMjMuNzM1OUMxMjkuNTQ2IDIyLjQwMjEgMTI5LjU0IDIxLjA2OTggMTI5LjUzNyAxOS43MzZDMTI4LjkwMiAyMC42NDMyIDEyOC4yNjQgMjEuNTIzMiAxMjcuNjI5IDIyLjQ1NDdDMTI3LjM0OSAxNy4zMzI4IDEyOS4yMzUgMTcuODc5MiAxMzAuNTE4IDE0LjE1OEMxMzAuNjk0IDEzLjYzMzIgMTMwLjQ2OCAxMC4wNDkzIDEzMC43OTkgOS4xMjY3OUMxMzEuNjkxIDkuMjc5MDQgMTMyLjMzMyAxMi40NDgzIDEzMy4wMTggMTIuODE0MkMxMzQuNjM1IDEzLjY3OTEgMTM1LjY0OCAxMS4yNzAxIDEzNy4xODQgMTEuNjExMUMxMzcuMzIxIDE1LjQyMzcgMTM1Ljk4MSAxNC4yNDExIDEzNC42MzUgMTQuMzE0MkMxMzQuNDE5IDE3LjQxMzIgMTM0LjIyOCAyMC41NTYzIDEzMy45OTggMjMuNjE4OEMxMzMuMzEzIDIzLjY1NTMgMTMxLjU5MiAyMy4zNDgyIDEzMS41ODYgMjUuODQ1M0MxMzEuNTg1IDI3LjE5NjEgMTMyLjQzNyAyOC42Mjk1IDEzMS40NTkgMzAuMzQ1MkMxMzIuMzQ4IDMwLjM5MzkgMTMzLjE2NyAzMC4zMjE4IDEzNC4wMjkgMzAuMzIxOEMxMzQuMTMxIDI4LjUzODggMTM0LjIzNCAyNi43NjI4IDEzNC4zMzYgMjQuOTg1OUMxMzUuMjk1IDI1Ljg1NjYgMTM2LjI1NCAyNi43MjQ2IDEzNy4yMTMgMjcuNTk1M0MxMzYuNzg0IDI1LjgyOSAxMzYuMzUyIDI0LjA1NTIgMTM1LjkyNCAyMi4yODI4QzEzNi41NTkgMjIuMjY0NiAxMzcuMTk0IDIyLjI0NjQgMTM3LjgzMiAyMi4yMjgyQzEzOC4yNTcgMjAuNDUwMyAxMzguNjgxIDE4LjY2ODUgMTM5LjEwNCAxNi44ODQ1QzEzOC41NSAyMS44Mjg4IDEzNy4zOSAyNS4xMzA4IDEzOS4xMTUgMjkuNTY0QzEzOC4zODEgMzEuMTIyOSAxMzcuNjQ2IDMyLjY4MjkgMTM2LjkwOCAzNC4yMzU4QzEzNS43MzYgMzIuNDQ1MSAxMzMuNDE3IDI5LjI1NjEgMTMzLjQwMiAzNC4zNTNDMTM0LjY5MSAzMi42NjU5IDEzNS42MTIgMzUuNzY3NCAxMzYuODgzIDM1LjYwM0MxMzkuMDIyIDM1LjMyMjggMTM4LjI0NyAzNS45MzQ1IDE0MC4zOTMgMzYuNzIwMUMxNDAuOTkxIDM2LjkzNzcgMTQzLjgwNCAzNC40NTA1IDE0NC41MjEgMzguMTQyQzE0NC45NTkgMzcuMTg1OCAxNDUuMTc5IDM2LjM0NDYgMTQ1LjUzMSAzNS40MzExQzE0NC40NjggMzUuMDA0OSAxNDMuNDA5IDM0LjU3NjEgMTQyLjM0NiAzNC4xNDk5QzE0Mi4zMzcgMzIuODE2IDE0Mi4zMjcgMzEuNDc3NiAxNDIuMzE4IDMwLjE0OTlDMTQyLjAwMSAzMC41NDU0IDE0MS42ODcgMzAuOTQxOSAxNDEuMzY5IDMxLjMzNzRDMTQxLjA0OSAzMC4wNzA4IDE0MC43MjUgMjguODA1NCAxNDAuNDA0IDI3LjUzMjhDMTQxLjU4NSAyNy4xNjEzIDE0Mi44MzIgMjYuNjk4NSAxNDMuOTk4IDI2LjM0NTNDMTQ1LjE2NCAyNS45OTIyIDE0Ni4yNzEgMjUuNzMwNSAxNDcuNDEgMjUuNDA3OEMxNDYuNzE5IDIzLjI5NjIgMTQ1LjU3MSAyMy4yMjUyIDE0NC41NjggMjMuNDA3OEMxNDMuNzI2IDIzLjU2MTggMTQyLjMzNyAyNy43MTk0IDE0MS43NzEgMjUuOTIzNEMxNDAuOTU1IDIzLjMzNSAxNDQuMTQ5IDIwLjAxNDIgMTQyLjkxNiAxNi44NTMyQzE0My41ODYgMTYuNzYxOSAxNDQuMjAzIDE2LjgxMzQgMTQ0Ljg1IDE2Ljc4MjlDMTQ0LjY0NiAxNy42NzczIDE0NC40MDkgMTguNTYyMSAxNDQuMjI5IDE5LjQ2MjZDMTQ1LjQxMiAxOS41NTQxIDE0Ny41ODYgMjAuMTQzNSAxNDguMzAzIDIxLjk3MDNDMTQ5LjEyMSAyNC4wNTg1IDE0OC4yNzQgMjQuMjcwOSAxNDguODI0IDI2LjgyMThDMTQ5LjI5MyAyOS4wMDIyIDE1MC44MyAzMi44ODkxIDE1MS41ODIgMzUuMjgyNkMxNTEuNDk1IDMzLjU4OTUgMTUxLjM2NyAzMS43NDE2IDE1MS4yNjIgMjkuOTkzN0MxNTEuNjg0IDI5LjUzNzEgMTUyLjExIDI5LjA5MDkgMTUyLjUzNSAyOC42MzQzQzE1MS44ODggMjkuMDkxMSAxNTEuMjc4IDI5LjU2MyAxNTAuNjA3IDMwLjAwMTVDMTUwLjU5MyAyNy42MjYyIDE0OS4xNjYgMjQuNTg0MSAxNTEuMTA3IDIzLjQzOTFDMTUxLjYzNiAyMy4xMzA3IDE1NC4wOTIgMjUuNjg3NyAxNTUuMDIxIDI0LjU3OTdDMTU1LjEyNiAyNS40OTgzIDE1NS4wNjUgMjYuMzE0OSAxNTUuMTA1IDI3LjE5NjhDMTU2LjE2MSAyNy4xNzg2IDE1Ny4yMjIgMjcuMTgyMSAxNTguMjc3IDI3LjE1NzhDMTU4LjQ2OSAyOC4yOTYzIDE1Ny4zMTcgMjkuNDI5OCAxNTcuMTQ4IDMwLjU1NjJDMTU3LjA4MyAzMC45OTk5IDE1Ny41ODggMzEuMjYyIDE1Ny40OTIgMzEuODc2NUMxNTcuMjAxIDMzLjcyMDQgMTU2LjE2OCAzNC4xMjk3IDE1Ni4zODkgMzYuNTMyNkMxNTcuMDE1IDM0LjMwNDYgMTU3LjY1MyAzMi4wNjM3IDE1OC4yODUgMjkuODI5NkMxNTguOTI2IDMwLjcwNjYgMTU5LjU2NiAzMS41ODM2IDE2MC4yMDcgMzIuNDU0NkMxNTkuOTk3IDMwLjk0NDIgMTU5Ljc4NiAyOS40MzM4IDE1OS41NzYgMjcuOTIzNEMxNTkuNzggMjYuNzY2NCAxNTkuOTg1IDI1LjYxMTcgMTYwLjE4OSAyNC40NTQ3QzE2MC44MjUgMjQuODg2OSAxNjEuNDYgMjUuMzE5MyAxNjIuMDkyIDI1Ljc1MTVDMTYyLjEwMyAyNC44NzQ5IDE2Mi4xMTMgMjQuMDAzMiAxNjIuMTI1IDIzLjEyNjZDMTYzLjExMyAyMy4yMjM0IDE2NC4xNzkgMjEuNDI3NiAxNjQuOTc1IDIzLjAwOTRDMTY0Ljg2NyAyMS45MzE3IDE2NC43NjIgMjAuODUyOCAxNjQuNjU0IDE5Ljc3NTFDMTY2LjA0OCAxNy4wNDY2IDE2OC4wODIgMTMuMTU4OCAxNjcuODQgMjAuMjkwN0MxNjguMzcgMTkuMzk1NCAxNjguOTAyIDE4LjQ4OSAxNjkuNDMgMTcuNTg3NkMxNjkuMzI1IDE5LjM2NiAxNjkuMjIxIDIxLjE1MjkgMTY5LjExOSAyMi45MzEzQzE2OS43NiAyMy4zNTc2IDE3MC4zOTcgMjMuNzk0IDE3MS4wNDEgMjQuMjIwM0MxNzEuMDg1IDIyLjM2OTYgMTcxLjAzOCAyMC42MjczIDE3MC43MDMgMTguODkyM0MxNzAuMjM0IDE2LjQ2MjUgMTY5LjE0OCAxNC45OTUyIDE2OS4xMDIgMTIuMjY3NEMxNzAuODAxIDEyLjA4NDcgMTcxLjM2OCAxNi4xMDIyIDE3Mi42NDUgMTcuMzE0MkMxNzMuNTM2IDE4LjE1OTQgMTc0LjA4MSAxNi44NzE3IDE3NC44ODUgMTguMTczNUMxNzUuNTUyIDE5LjI1MTUgMTc1LjY3NSAyMS42OTUyIDE3Ni40NTkgMjIuNzY3MkMxNzcuNjQ1IDIyLjUgMTc4IDIxLjEyOTcgMTc4LjA0NSAxOC43NjczQzE3OC4wNTEgMTguNzY4MiAxNzguMDU4IDE4Ljc2NjMgMTc4LjA2NCAxOC43NjczQzE3OC4wNjQgMTguNzU5MiAxNzguMDYzIDE4Ljc1MTkgMTc4LjA2MiAxOC43NDM4QzE3OC40ODIgMTguODA0OCAxNzguODk5IDE4LjY4ODYgMTc5LjMxOCAxOC43MTI2QzE3OS4zMjcgMjAuMDQwMiAxNzkuMzMzIDIxLjM3NzEgMTc5LjM0MiAyMi43MDQ3QzE4MC4xOSAyMy4xMzcxIDE4MS4wMzkgMjMuNTY5MSAxODEuODg3IDI0LjAwMTZDMTgyLjAxOCAyNi41MTY5IDE4MS44MTYgMjYuODUwOCAxODAuNjIxIDI2LjcwNDdDMTgwLjgzNyAyOC45MDkyIDE4MS4wNTYgMzEuMTA5NCAxODEuMjcxIDMzLjMxMzlDMTgyLjEyMyAzMy4yOTU3IDE4Mi45NzEgMzMuMjg3MSAxODMuODIyIDMzLjI3NDlDMTgzLjQgMzUuMDU5MSAxODIuOTc5IDM2Ljg1IDE4Mi41NTcgMzguNjM0MkMxODMuNDA4IDM3Ljc0NSAxODQuMjUxIDM2Ljc4MzcgMTg1LjEwNyAzNS45MzExQzE4NS4wNDYgMzguNTMxNyAxODQuODUxIDQyLjQ1NjcgMTg2LjA2MSA0My43MzU2QzE4Ny4yNyA0NS4wMTQ0IDE4Ni44NjggNDIuNTMzNyAxODcuMDU1IDQxLjI2NjlDMTg3LjY3OCA0MS4xODE3IDE4OC4zMiA0MS4xOTI0IDE4OC45NDkgNDEuMTQ5N0MxODkuMTQxIDM4LjAwMzYgMTg4LjE5MSAzNi42Mjc2IDE4Ny41ODIgMzMuOTg1OEMxODcuNjAyIDMyLjM3ODkgMTg3LjYyMiAzMC43NjQ2IDE4Ny42NDMgMjkuMTU3N0MxODguMDggMzAuNDczIDE4OC41MTQgMzEuNzg3NyAxODguOTUxIDMzLjEwM0MxODkuMzU5IDMzLjEyMTMgMTg5Ljc3MiAzMy4xMjk5IDE5MC4xOCAzMy4xNDIxQzE5MC4xOTEgMzQuNDYzNyAxOTAuMTk5IDM1Ljc5NjkgMTkwLjIxMSAzNy4xMTg2QzE5MS4yNjYgMzYuMTgwNiAxOTIuMzIyIDM1LjI0NCAxOTMuMzc3IDM0LjMwNjFDMTkzLjY5OCAzMS42NDUxIDE5NC4wMTggMjguOTgyOCAxOTQuMzM2IDI2LjMyMThDMTk0LjQ1IDI4LjA5NDIgMTk0LjU2MiAyOS44ODIgMTk0LjY3NiAzMS42NDIxQzE5NS4xMDcgMzEuODE4NyAxOTUuNTE0IDMxLjMzODIgMTk1Ljk1MSAzMS43MjhDMTk1Ljk5MSAzMS43ODM0IDE5NS45NzMgMzIuODQ2OCAxOTYuMjY4IDMyLjgyOTZDMTk2LjU2NCAzMi44MTEzIDE5Ni41MjcgMzEuNzk3OCAxOTYuNTgyIDMxLjcxMjRDMTk2LjkwNiAzMS4yNjE3IDE5Ny4xMzcgMzEuOTE3NSAxOTcuNDY3IDMxLjQ1NDZDMTk4LjUwNCAzMC4wMDU1IDE5OS4wMjUgMjguNDA2NiAyMDAuNDA2IDI4Ljg2ODdDMjAwLjA4OSAzMC4xNDYxIDE5OS44ODIgMzAuNDQwOCAxOTkuMTM3IDMwLjIyOEMxOTkuMzU1IDMyLjQ0NDMgMTk5LjU3MSAzNC42NjggMTk5Ljc4OSAzNi44ODQyQzE5OS4xNTEgMzYuNDUxOCAxOTguNTA5IDM2LjAyMTQgMTk3Ljg3MSAzNS41OTUxQzE5OC40MTYgMzcuNDA5MyAxOTguMTUzIDM4LjI3ODYgMTk3Ljg4NSA0MC4xOTY2QzE5OC41NzUgNDIuMTE0OCAxOTkuMzA4IDQyLjM3MiAyMDAuNDEyIDQyLjI3NDdDMjAwLjQzIDQzLjEzMjEgMjAwLjQ0NCA0My45ODk0IDIwMC40NjUgNDQuODUyOEMyMDEuMDk3IDQ0Ljg0NjcgMjAxLjcyNyA0NC44MzU1IDIwMi4zNTkgNDQuODI5NEMyMDIuMzU0IDQzLjQ5MDIgMjAyLjM1OSA0Mi4xNzMgMjAyLjM0OCA0MC44MjE2QzIwMC40NzQgNDMuMzc4NyAxOTguOTMzIDQwLjExMzIgMjAwLjc4NSAzOC4yOTgyQzIwMS41NDYgMzcuNTQ5MSAyMDIuNDAxIDM4Ljc1ODQgMjAzLjI3NSAzNy45NTQ1QzIwNC4wMyAzNy4yNjYgMjA0LjQ1OCAzNS4wNDAyIDIwNS41MjEgMzUuMzkyQzIwNS4zMTUgMzMuMTY0MSAyMDUuMDkxIDMwLjk4NDUgMjA0Ljg3NSAyOC43NzQ5QzIwNC4yMzcgMjguNzg3MSAyMDMuNTk5IDI4Ljc5NTcgMjAyLjk2MSAyOC44MTRDMjAyLjk2MSAyOS43MDIgMjAyLjk3IDMwLjU5IDIwMi45NjcgMzEuNDc4QzIwMi41NDEgMzEuNDIzMiAyMDIuMTE1IDMxLjUyNzUgMjAxLjY4OSAzMS41MDkzQzIwMi4xMTIgMzAuMzc2OCAyMDIuNTMyIDI5LjIzNTUgMjAyLjk1MSAyOC4xMDMxQzIwMi41MzcgMjYuNzkzNiAyMDIuMTIxIDI1LjQ3NTEgMjAxLjcwNyAyNC4xNjU2QzIwMi4yMjMgMjIuNjAwOCAyMDIuNzM4IDIxLjAzMzUgMjAzLjI1NCAxOS40NjI2QzIwNC4yMjIgMjIuMjY0MiAyMDUuNDEyIDIxLjUxMSAyMDYuNzg1IDIyLjcwNDdDMjA2Ljk3NCAyMy4xNDg2IDIwNy4xNiAyMy41OTg1IDIwNy4zNSAyNC4wNDg0QzIwNy4xOCAyNC40OTMgMjA3LjAxMiAyNC45NDkzIDIwNi44NDYgMjUuNEMyMDcuNTA0IDI3LjM2NTkgMjA4LjI0MiAyNy41Njg4IDIwOS4zNDQgMjcuMzM3NUMyMDkuMjc3IDMxLjM2OTMgMjA4Ljg5NyAzMy4zNjU2IDIwNy4wNjYgMzUuMzk5OEMyMDYuNjcyIDM1LjgzODEgMjA1LjI4MyAzNi4xNjc3IDIwNS44NjMgMzguMDc5NUMyMDYuNjUzIDM3LjY1MzIgMjA3LjQ5OSAzNy4yMDkgMjA4LjMxMiAzNi43ODI2QzIwOC42NjIgMzcuMTg0MSAyMDkuMDExIDM3LjYxNjQgMjA5LjM1NyAzNy45OTM1QzIwOS4xNTMgMzYuNDUyNyAyMDkuMzczIDMxLjYzIDIxMC42NDEgMzQuMjEyNEMyMTAuNzY5IDM0LjQ3ODcgMjEwLjg1NCAzNy44MjA1IDIxMS41OSAzNy44ODQyQzIxMi4xMjkgMzcuMTIzMSAyMTIuNjUxIDM2LjA4NDggMjEzLjE4MiAzNS4yMjAxQzIxMy40NDQgMzUuNzUgMjEzLjcwNCAzNi4yOTUzIDIxMy45NjcgMzYuODM3M0MyMTQuNjA1IDM0LjgyMTUgMjE0LjY2MyAzMy42NDY5IDIxMy44MTQgMzEuODY4NkMyMTQuMzA3IDMyLjAzMzEgMjE0LjggMzIuMTk2NCAyMTUuMjkzIDMyLjM2MDhDMjE2LjI4NiAzMS40OTY0IDIxNy4yOCAzMC42MzE1IDIxOC4yNzMgMjkuNzY3MUMyMTcuMjEgMjkuNzkxNSAyMTYuMTQ2IDI5LjgxMzEgMjE1LjA4MiAyOS44Mzc0QzIxNS41MDUgMjguMDQ2OCAyMTUuOTI2IDI2LjI1MzEgMjE2LjM0NiAyNC40NjI1QzIxNS4yODUgMjUuODIwNSAyMTQuMjIzIDI3LjE3NDcgMjEzLjE2MiAyOC41MzI3QzIxMy41ODUgMjYuNTExNyAyMTQuMDAxIDI0LjQ5MTQgMjE0LjQyNCAyMi40NzAzQzIxNS4wNjIgMjIuNjg5NiAyMTUuNzAxIDIyLjg5OTUgMjE2LjM0MiAyMy4xMTg4QzIxNS40ODggMjEuMzUyOCAyMTQuNjMxIDE5LjU4NjIgMjEzLjc3NyAxNy44MTQyQzIxNS4wNTcgMTguNjg1IDIxNi4zMzQgMTkuNTUyNyAyMTcuNjEzIDIwLjQyMzVDMjE4LjM2OCAyMy41MjM1IDIxOS4xMiAyNi42MjYzIDIxOS44NzUgMjkuNzIwMkMyMjAuNjE1IDI5LjI2MzcgMjIxLjM1OCAyOC44MDE4IDIyMi4wOTggMjguMzQ1M0MyMjIuMzE2IDMwLjU2ODMgMjIyLjUzMyAzMi43ODYyIDIyMi43NTIgMzUuMDA5MkMyMjEuNjg4IDM1LjAzMzYgMjIwLjYyNiAzNS4wNTY5IDIxOS41NjIgMzUuMDg3M0MyMTkuNjA2IDMyLjQwNzYgMjE5Ljg0NyAzMC43MDcxIDIxOC4yNzMgMzEuMTAzQzIxOS4zMDggMzQuOTg4NyAyMTguMDAxIDM3LjIzMzQgMjE3LjAyMSA0MC40ODU3QzIxOC4wODIgMzkuNTcyMiAyMTkuMTQzIDM4LjY1NyAyMjAuMjA3IDM3Ljc0MzVDMjIwLjIxIDM5LjA3NjkgMjIwLjIxMiA0MC40MTAyIDIyMC4yMTUgNDEuNzQzNUMyMTguOTA3IDQyLjE5NDQgMjE4LjI2MiA0My40OTAxIDIxNy4wMjMgNDEuODIxNkMyMTcuMDM4IDQyLjczNDQgMjE3LjAwNiA0My41NjM0IDIxNy4wNDcgNDQuNTI0N0MyMTcuNTU3IDQzLjc2OTUgMjE4LjMzOSA0NS42MjQ2IDIxOC41NzIgNDUuNTYzN0MyMTkuNjkxIDQ1LjI3MDMgMjIwLjgyNSA0MS42MzE5IDIyMS43MTEgNDEuODQ1QzIyMy44MTggNDIuMzQ0NSAyMjEuOTQgNDguNDU1NCAyMjIuMTc4IDQ5LjI5ODFDMjIzLjAwOCA1Mi4yMTU0IDIyMy41ODYgNDguMDUwNCAyMjMuNzE3IDQ3LjA2MzdDMjI0LjA2OSA0NC4zNjIxIDIyMy43ODEgNDIuNjYzIDIyNS4zMjQgNDIuOTU0NEMyMjQuNDY4IDQyLjA5NjEgMjIzLjYxNyA0MS4yMTczIDIyMi43NjQgNDAuMzUyOUMyMjQuMjUzIDQwLjMxNjQgMjI1Ljc0MiA0MC4yOCAyMjcuMjMgNDAuMjQzNUMyMjYuNTI4IDM3LjM4MzEgMjI1LjU5OSAzNi4wMzIzIDIyNC4wMzcgMzYuMzA2MUMyMjQuMTMgMzIuOTI2MSAyMjMuNzgxIDMwLjI3OTkgMjIyLjczNCAyNy42NzM0QzIyMy4zNjkgMjcuODg2NCAyMjQuMDAyIDI4LjEwMDkgMjI0LjYzNyAyOC4zMTRDMjI0LjU3OCAzMC41ODU2IDIyNC42NjMgMzIuMTQwOCAyMjUuNjE5IDMzLjQ2MjRDMjI1LjgzNSAzMy4wNzg3IDIyNi4wNTQgMzIuNjkxNSAyMjYuMjcgMzIuMzEzOUMyMjYuMzc3IDMzLjE4NDkgMjI2LjQ4MiAzNC4wNjAyIDIyNi41OSAzNC45MzExQzIyNy40MzUgMzMuMzY1OSAyMjguMjc5IDMxLjc1MzMgMjI5LjEyMSAzMC4yMTI0QzIyNy40MTkgMjcuODMxMSAyMjguMzk3IDMzLjAwNzggMjI2Ljg5MyAzMi4xMTg2QzIyNS45MzggMzEuNTUxNyAyMjUuODI2IDI4Ljc3NDQgMjI1LjkyMiAyNi45NzgxQzIyNi4zNDcgMjYuNDYwNCAyMjYuNzcyIDI2LjA0NjkgMjI3LjE5NyAyNS41NzE5QzIyNS4xMjIgMjQuMTcxMiAyMjMuNTE1IDI0LjIzNDcgMjIxLjQ1NSAyNS43MjAzQzIyMS40MzggMjMuNTQxIDIyMi41MzIgMjQuNTk4MiAyMjMuMDYyIDIyLjkzOTFDMjIzLjU0IDIxLjQ0NzEgMjIzLjM3MiAxOC43NjU2IDIyNC4yODcgMTcuNzM2QzIyNi4yNDYgMTYuNjIxNSAyMjQuNTU2IDIxLjAwNDMgMjI0LjcxMSAyMS4zNDU0QzIyNS44NjggMjMuOTE0NyAyMjcuNDc0IDI0Ljg5NDggMjI4Ljc5MSAyNi44OTIyQzIyOC44IDI1LjUxNTcgMjI4Ljc4NSAyNC4yMTQ4IDIyOC43ODUgMjIuODY4OEMyMjkuMjE2IDIzLjY5NjcgMjI5LjYxOSAyNC40MjUzIDIzMC4wNyAyNS4zMTRDMjMwLjc2NCAyMy4yMDMxIDIzMS4zNSAyNS4zMjYxIDIzMS45MzYgMjUuMTVDMjMzLjIxNSAyNC43NjYzIDIzMi44NzIgMjAuNjY3OSAyMzQuMjEzIDIwLjA5NTRDMjM0LjMwOSAyMS44MjQgMjM0LjQzIDIzLjY0NzIgMjM0LjUzNSAyNS40QzIzNS4yNyAyNC41NDE0IDIzNC4yOTQgMjIuNjIzNCAyMzUuNDg4IDIzLjQwNzhDMjM2LjEgMjMuODA5OCAyMzYuNzIyIDI0LjI1MTMgMjM3LjM5OCAyNC4wMDE2QzIzNy40ODMgMjcuOTA1NSAyMzYuOTMyIDMxLjYzOTUgMjM4LjM4NyAzNC42NDJDMjM5LjM0MyAzMy41MDk0IDI0MC4yOTYgMzIuMzY4NCAyNDEuMjUyIDMxLjIzNThDMjQwLjYxNCAzMS4yNTQxIDIzOS45NzggMzEuMjY0NCAyMzkuMzQgMzEuMjgyN0MyMzkuNTA2IDMwLjgzMjggMjM5LjY3MiAzMC4zODg5IDIzOS44MzggMjkuOTM5QzIzOC43NzcgMjcuNjkyMyAyMzguNTQ5IDI1LjczODggMjM4LjY3NCAyMi42MzQ0QzIzOS41MTkgMjIuNjA0IDI0MC4zNjYgMjIuNTY5NCAyNDEuMjExIDIyLjUzMjhDMjQxLjIyMyAyMS42Njk4IDI0MS4yMTYgMjAuNzcwMiAyNDEuMjM2IDE5LjkzMTNDMjQyLjEyNSAxOS4xNzAyIDI0Mi43OTkgMjAuNzY4NiAyNDMuNDk4IDIxLjAyNUMyNDQuNDUxIDIxLjM3MjIgMjQ0Ljc1NiAxOS40NDE3IDI0NS42OTEgMTkuODM3NkMyNDUuNzUgMjIuNDg1OCAyNDUuOTkzIDI0LjAyNzYgMjQ0LjQ1NSAyMy45QzI0NC4yMzYgMjYuNTQ5IDI0NC4wMTYgMjkuMTk2MiAyNDMuODAxIDMxLjg0NTJDMjQ1LjQ4MyAzMS44NDUyIDI0OC4yMDUgMjguODE2NyAyNDguMjY0IDI1LjA0MDZDMjQ4LjU4NCAyNS40NTQ1IDI0OC45MDUgMjUuODc2NyAyNDkuMjIzIDI2LjI5MDZDMjQ5LjY0NSAyNC45NzUxIDI1MC4wNTQgMjMuNjQ1MiAyNTAuNDg4IDIyLjMyOTdDMjUxLjM2NSAyMy45NDk0IDI1MS42NTQgMjQuNzkzIDI1MC40MTYgMjYuMjM1OUMyNDguOTk5IDI3Ljg4NjQgMjQ3LjkwNSAyNy40MTQzIDI0OC4yODEgMzEuNzIwMkMyNTAuOTM5IDMxLjc1MDcgMjUxLjA1MSAyNS4zNjMyIDI1My41OSAyNS4xNUMyNTUuNTYzIDI0Ljk3OTMgMjU1Ljc1MyAyMy4zNDY4IDI1Ny42NjggMjIuMzI5N0MyNTguNjYyIDIxLjgwMDIgMjYwLjY3NSAyMS40MDY5IDI2MS45MzkgMjIuMjgyOEMyNjMuMjA0IDIzLjE1OTkgMjYzLjgzNiAyNS44MTQyIDI2NS40NzcgMjQuNjI2NkMyNjUuOTIyIDI2Ljg4IDI2Ni4zNDQgMjkuMDQwNiAyNjYuNzgxIDMxLjI1MTVDMjY2LjM1OSAzMS4yNzU4IDI2NS45NCAzMS4yOTc0IDI2NS41MTggMzEuMzIxOEMyNjUuNTE4IDMzLjA5IDI2NS41MTggMzQuODU4MiAyNjUuNTE4IDM2LjYyNjRDMjY0Ljk4NyAzNS44MTY2IDI2NC40NTYgMzUuMDA2NSAyNjMuOTI2IDM0LjE5NjdDMjYyLjc1NyAzNS45MTQyIDI2MS43MSAzMy44NTYxIDI2MC40MDQgMzQuMDg3NEMyNjAuNjQxIDMxLjQ0NTMgMjYxLjkzNyAzMi43Mjk4IDI2Mi42NDMgMzMuOTIzM0MyNjMuMTcgMzIuNjE0MiAyNjMuNjk3IDMxLjMwMjcgMjY0LjIyNSAyOS45OTM3QzI2Mi42MzYgMjkuNTkxOCAyNjEuMDQ3IDI5LjE5MjUgMjU5LjQ1OSAyOC43OTA2QzI1OC45MjMgMzEuMDE4OSAyNTguMzkxIDMzLjI1NzQgMjU3Ljg1NyAzNS40ODU4QzI1OC44MSAzNS40NTUzIDI1OS43NjEgMzUuNDIyNSAyNjAuNzExIDM1LjM5MkMyNjEuMDQgMzYuNzI0NyAyNjEuMzY2IDM4LjA1MTQgMjYxLjY5NSAzOS4zODQxQzI2MC40MTYgMzguNTI1NSAyNTkuMTM5IDM3LjY2NjUgMjU3Ljg1OSAzNi44MTM5QzI1Ny44NjUgMzkuMDM2OSAyNTcuODY5IDQxLjI2MjcgMjU3Ljg3NSA0My40ODU3QzI1OS40MjIgNDMuNDY3IDI2MC44MTUgNDIuNDI1NCAyNjIuMzQyIDQzLjM2ODVDMjYyLjY1NyA0MS4xMzk0IDI2Mi45NzEgMzguOTEwMSAyNjMuMjgzIDM2LjY4MTFDMjY1LjUwMSAzOC4xNjEgMjY0LjczMiA0MC4yMTU1IDI2My42MjcgNDMuMzIxNkMyNjQuNDU1IDQzLjkyNDUgMjY2LjAyOSA0MS42MDMzIDI2Ni40NjEgNDAuNzIwMUMyNjYuODkyIDM5LjgzNyAyNjYuNTkyIDM4LjQ1NzkgMjY2LjgyOCAzOC4xMTA3QzI2OC4xMjUgMzYuMTc0MiAyNjkuNzQ2IDM3LjM5NTQgMjcwLjk0MSAzNS4xNDJDMjcwLjYyNyAzNy4zOTQyIDI3MC4zMTUgMzkuNjAzMyAyNzAgNDEuODM3MkMyNjguOTM2IDQyLjA4NjkgMjY3Ljg3MiA0Mi4zMzc1IDI2Ni44MTEgNDIuNTg3MkMyNjYuOTMzIDQ2LjA4MzEgMjY4Ljc5MSA0NC44ODE5IDI2OS42OTEgNDMuMTg4OEMyNjkuNzk5IDQ0LjA3MSAyNjkuOTAxIDQ0Ljk2MjggMjcwLjAxMiA0NS44NDVDMjcwLjUyNyA0NS44NTc0IDI3MC45OTkgNDYuMjc4OCAyNzEuMjc1IDQ1LjExODRDMjcxLjM5NSA0NC42MTQ2IDI3MS43ODYgNDIuODcwMSAyNzEuNzcxIDQyLjU4NzJDMjcxLjU2MiAzOS40OTMzIDI3MS4yNjIgMzkuMjgwMSAyNzIuNTI3IDM2Ljk3NzlDMjcyLjMxNSAzNS45MzA1IDI3Mi4xMDQgMzQuODUxOCAyNzEuODk1IDMzLjc5ODNDMjcyLjUzMyAzMy4zMjk1IDI3My4xNjkgMzIuODYyNiAyNzMuODA3IDMyLjM5OTlDMjczLjU5NyAzMy43Mzk4IDI3My4zODcgMzUuMDgzNCAyNzMuMTggMzYuNDIzM0MyNzQuMDI4IDM1LjcyOTEgMjc0Ljg3OSAzNS4wMzMyIDI3NS43MjcgMzQuMzQ1MkMyNzUuMzAxIDM0LjU3NjUgMjc0Ljg3OSAzNC44MTA4IDI3NC40NTMgMzUuMDQ4M0MyNzQuNjU3IDMyLjM3NjYgMjc0Ljg2NCAyOS43MDQ1IDI3NS4wNyAyNy4wMzI4QzI3NS43MDggMjcuNjkwMyAyNzYuMzUgMjguMzQ4MyAyNzYuOTg4IDI4Ljk5MzdDMjc2LjU2MyAyOS40NDM4IDI3Ni4xNDEgMjkuODk1MSAyNzUuNzE5IDMwLjM0NTJDMjc2LjU2NyAzMi4wOTkzIDI3Ny40MTUgMzMuODU2NyAyNzguMjY0IDM1LjYxMDhDMjc4LjA2IDM2LjcyNTMgMjc3Ljg1NCAzNy44NDc3IDI3Ny42NSAzOC45NjIzQzI3Ny4yMjUgMzguNTI5OSAyNzYuNzk5IDM4LjA4OTkgMjc2LjM3MSAzNy42NTc2QzI3Ni4zNzEgMzguOTkwOSAyNzYuMzc4IDQwLjMyNDIgMjc2LjM4MSA0MS42NTc1QzI3OC4yNTQgNDIuOTE3NiAyNzkuNjE4IDQyLjkwOTMgMjgxLjQ3NSA0MS41MDkxQzI4MS40NzUgNDAuMTc1OCAyODEuNDc1IDM4Ljg0MjUgMjgxLjQ3NSAzNy41MDkyQzI4MS45OTkgMzcuOTQxNiAyODIuNTI1IDM4LjM3MzYgMjgzLjA1MyAzOC44MDZDMjgzLjM3NiAzOC4xMzA3IDI4My43MDIgMzcuNDUwMiAyODQuMDI1IDM2Ljc3NDhDMjgzLjYgMzYuMzQyNSAyODMuMTcyIDM1LjkxMDIgMjgyLjc0NiAzNS40NzhDMjgzLjcwMiAzNC4zMzkxIDI4NC42NTUgMzMuMTk1IDI4NS42MTEgMzIuMDU2MUMyODUuNzIyIDMyLjk0MzMgMjg1LjgzMiAzMy44MjUyIDI4NS45NDUgMzQuNzEyM0MyODYuNTY5IDM0LjIzMTIgMjg3LjE5MiAzMy43NDgyIDI4Ny44MTggMzMuMjY3MUMyODguMjQ3IDMxLjA1MDggMjg4LjY4NCAyOC44MzUgMjg5LjEwNCAyNi42MTg3QzI5MC45NjUgMjcuOTY0NSAyODkuMzk4IDI5LjM3OTYgMjg5LjgyNiAzMS45MzExQzI4OS44ODUgMzIuMjcxOSAyOTEuMjE3IDMyLjI4ODYgMjkxLjAxNiAzMS4wOTUyQzI5MS4wNTMgMzAuNDcwMSAyOTEuMDE2IDI5Ljg2MjggMjkxLjAyNyAyOS4yNDM3QzI5MS40NTIgMjkuMjMxNSAyOTEuODc4IDI5LjIyNDYgMjkyLjMwMyAyOS4yMTI0QzI5Mi4zMTEgMzAuMDg4MSAyOTIuMzIxIDMwLjk2MzUgMjkyLjMzIDMxLjg0NTJDMjkzLjYwMSAzMS44MjY5IDI5NC44NzEgMzEuODAxIDI5Ni4xMzkgMzEuNzgyN0MyOTUuNjIzIDMwLjQ4NjQgMjk1LjA4MSAyOS4yMjIzIDI5NC41OCAyNy45MDc4QzI5NC41ODcgMjcuOTAzOCAyOTQuNTkzIDI3LjkwMzkgMjk0LjYgMjcuODk5OUMyOTQuNTk5IDI3Ljg5NzMgMjk0LjU5OCAyNy44OTQ3IDI5NC41OTggMjcuODkyMUMyOTUuMjkgMjcuNTIyIDI5Ni40MzcgMjYuNzAyNiAyOTcuMDEgMjYuNDU0N0MyOTcuNTg3IDI2LjIwNSAyOTcuNTgyIDI2LjUzMiAyOTguMDUxIDI2LjM5MjJDMjk3LjgxOCAyNy41MTI4IDI5Ny42MjYgMjguNjA0IDI5Ny40MSAyOS43MTI0QzI5OC4yNjcgMzEuNjQ3OCAyOTkuNTI1IDMxLjI2NDkgMjk5LjMzNiAzNC4zNzY0QzMwMC4wMTIgMzQuMDU5OCAzMDAuNzAzIDMyLjUyMjcgMzAxLjI0MiAzMS42NTc3QzMwMS4zNSAzMi4wODQgMzAxLjQ1NiAzMi41NjY1IDMwMS41NjYgMzIuOTYyNEMzMDEuODQ5IDMzLjA1OTYgMzAxLjgyMyAzMS43NzMzIDMwMS44NzMgMzEuNzEyNEMzMDMuNDg3IDI5LjgwNzUgMzA0Ljk0MiAzMS45ODMxIDMwNi42NTIgMzEuNDc4QzMwNi44NzEgMzIuMzc4IDMwNy4wOTIgMzMuMjYzOCAzMDcuMzExIDM0LjE1NzdDMzA3LjIgMzIuMzg2NyAzMDcuMDg5IDMwLjYwODQgMzA2Ljk3OSAyOC44Mzc0QzMwNy42MTcgMjguODE5MiAzMDguMjU2IDI4LjgwMSAzMDguODk1IDI4Ljc4MjdDMzA4LjczMSAzMi44Njk0IDMwOS4yMTggMzUuOTEzNSAzMTAuMTk3IDM5LjQxNTRDMzA5LjM0NiAzOS44ODQ0IDMwOC40OTggNDAuMzU4OCAzMDcuNjQ2IDQwLjgyMTZDMzA3Ljg2MiA0Mi4xNDc0IDMwOC4wNzggNDMuNDcyMyAzMDguMjkzIDQ0Ljc5ODFDMzA5LjE1IDQ1LjIxODQgMzA5Ljk5MSA0NS42NTEzIDMxMC44NTkgNDYuMDcxNkMzMTAuOTY3IDQ0LjUwNjMgMzExLjQ0NyA0Mi45NDU5IDMxMS40NzEgNDEuMzY4NUMzMTEuNDkzIDM5Ljc5MjUgMzEwLjkxNyAzOC4wMTI4IDMxMC41MDYgMzYuNzU5MkMzMDkuNzkyIDM0LjU5MSAzMDkuMzEyIDM0LjkyMDUgMzEwLjUwNCAzMi43MjhDMzExLjQ2IDM0LjQ5MzUgMzEyLjQyNiAzNi4yNDAyIDMxMy4zODUgMzcuOTkzNUMzMTMuMzkxIDM2LjY3MTkgMzEzLjM5NSAzNS4zNDY1IDMxMy40IDM0LjAyNDlDMzEzLjgxMSAzMy45ODgzIDMxNC4yMTkgMzMuOTUwMyAzMTQuNjI3IDMzLjkwNzdDMzE0LjYyNyAzMi42MDY0IDMxNC42NDcgMzEuMjM4NSAzMTQuNjMzIDI5Ljk4NThDMzE1Ljg0MiAyOS45ODU4IDMxNS40NjIgMzIuNjUyNiAzMTUuOTk4IDMzLjcxMjRDMzE2LjUzNCAzNC43Njk0IDMxNy4zNTEgMzMuNTgyMiAzMTguMTM1IDM0LjAzMjdDMzE4LjUzIDM0LjI2NTIgMzE4Ljc0MyAzNS40MDg4IDMxOS41MTggMzUuMTQyQzMyMC43MDQgMzQuNzQwMSAzMjIuODI5IDMwLjI3MzggMzI0LjIwNSAzMS4wNDA1QzMyNC41MjkgMzQuMTY0OSAzMjIuOTA1IDM3LjE2NzMgMzIzLjU4NCAzOS43NDM1QzMyMy4xNjcgNDAuNDA3IDMyMi43NDUgNDEuMDkwNSAzMjIuMzM0IDQxLjczNTdDMzIxLjA0MSA0MS41MjI2IDMyMi4wMzUgMzguNDQ2OCAzMjIuMzgzIDM3LjMwNjFDMzIyLjczIDM2LjE2NzEgMzIzLjY1NyAzNC45NjM1IDMyMy41OSAzMy42OTY3QzMyMS40NTMgMzMuODkxOCAzMTkuNjI0IDM1LjQ3OTcgMzE5Ljc3NSA0MC40ODU3QzMxOC45MjQgNDAuMDY1NSAzMTguMDcgMzkuNjM4NiAzMTcuMjE5IDM5LjIxMjNDMzE3LjQzNyA0MS40MjkyIDMxNy42NTMgNDMuNjUxNSAzMTcuODc1IDQ1Ljg2ODRDMzE4Ljc2NiA0NS44NDM0IDMxOS40MTYgNDQuMTg3MiAzMjAuMTA5IDQ1Ljc5ODFDMzIwLjYxMSA0NC43OTkzIDMxOS4xMzkgNDEuOTk1OSAzMjAuNzg5IDQzLjIyQzMyMS4wMDUgNDMuMzc4NCAzMjIuMjQ5IDQ1Ljg0NDggMzIyLjI5MyA0Ni4zMTM3QzMyMi41OTIgNDkuNjE4NiAzMjAuMjM2IDQ4LjcxMTcgMzIwLjQ1MSA1Mi40NjIxQzMyMS40NTEgNTIuNjA4MSAzMjAuNzc1IDUwLjYyNjMgMzIxLjQ1NyA0OS43OTgxQzMyMi4zOTMgNDguNjU5MiAzMjMuMTY1IDQ3LjI5MTggMzI0LjI1MiA0Ni45OTM0QzMyNC4yNTIgNDUuMjI1MiAzMjQuMjUyIDQzLjQ1NyAzMjQuMjUyIDQxLjY4ODhDMzI0LjY3OCA0MS45MDIgMzI1LjEwNCA0Mi4xMDg0IDMyNS41MjkgNDIuMzIxNkMzMjUuMzIyIDQzLjg3MzkgMzI1LjExNSA0NS40MzMzIDMyNC45MDggNDYuOTg1NkMzMjUuMzE2IDQ3LjAxNiAzMjUuNzI4IDQ3LjA0MTEgMzI2LjEzMyA0Ny4wNzE1QzMyNi4xNjggNDcuOTE2OCAzMjYuMTU4IDQ4Ljc1MTUgMzI2LjIxOSA0OS42MDI3QzMyNy41ODMgNDkuNTQxOSAzMjkuODY2IDUwLjUzOTEgMzMwLjU1MSA0Ny41MDEyQzMzMS4yMzYgNDQuNDYyMSAzMjguMzIzIDQ1Ljg2NjYgMzI3LjcwNSA0NC40MjMxQzMyNy4xNjkgNDQuMzY4NCAzMjYuNjk2IDQ0LjMyMzQgMzI2LjE4NCA0NC4yNzQ3QzMyNS45NjUgNDMuMTc5NyAzMjUuNzQ1IDQyLjA4ODUgMzI1LjUyMyA0MC45OTM1QzMyNS43MzMgMzkuNDM1IDMyNS45MzkgMzcuODcyNCAzMjYuMTQ4IDM2LjMxMzlDMzI2LjU4IDM3LjY0MTYgMzI3LjAxIDM4Ljk3MDUgMzI3LjQ0MSA0MC4yOTgyQzMyNy44NjQgNDAuMDU0NyAzMjguMjg3IDM5LjgwOSAzMjguNzA5IDM5LjU3MTZDMzI4LjgyIDQxLjEyNDcgMzI4LjkzIDQyLjY5MDQgMzI5LjA0MSA0NC4yNDM0QzMyOS40NTUgNDIuOTA5NiAzMjkuODk5IDQxLjUyOTUgMzMwLjI5NSA0MC4yMjAxQzMzMS4yMzYgNDEuMDQ4NiAzMzAuODI1IDQyLjc4NjkgMzMxLjM3MyA0NC4wMTY5QzMzMS45MjEgNDUuMjQ2MSAzMzMuNjkyIDQ1LjYzNTkgMzM0LjQ0NyA0NS40MjMxQzMzNC40OTEgNDQuNTMzOSAzMzQuNDg1IDQzLjcwOTkgMzM0LjUxMiA0Mi44NDVDMzM0LjkwOCA0Mi43ODQyIDMzNS4zMDcgNDIuNzE4NCAzMzUuNzAzIDQyLjY1NzVDMzM2LjAxNSA0MC4wMzkgMzM2LjAxOSAzNy4wMDk0IDMzNy42MzkgMzcuMzM3M0MzMzcuNzQ5IDM4LjY2MzggMzM3Ljg1OCAzOS45OTUxIDMzNy45NjkgNDEuMzIxNkMzMzguNTAyIDQxLjc1MzkgMzM5LjAzNSA0Mi4xODYyIDMzOS41NjggNDIuNjE4NUMzMzguNzIzIDQzLjk2NCAzMzcuODY4IDQ1LjM0NTggMzM3LjAyOSA0Ni42NzMxQzMzOC4xMTEgNDUuOTcyNyAzMzkuMDUgNDMuOTM3OSAzMzkuOTUxIDQyLjgyOTRDMzQxLjEzMSA0MS4zODA1IDM0Mi4yNjEgNDEuODQwOCAzNDIuMTMxIDM4LjU0ODJDMzQzLjEzNiAzNy44NjAyIDM0NC43NzQgNDAuNDU3NyAzNDUuNjU0IDQwLjkxNTRDMzQ2LjUzNSA0MS4zNjYxIDM0Ny4wNTggNDAuNzg2MyAzNDcuODcxIDQxLjA0ODJDMzQ2LjkwMyA0Mi45NDgyIDM0Ni4wNTEgNDMuOTMzNSAzNDQuNzA1IDQzLjg2MDZDMzQ0LjY4OCA0NC43MDExIDM0NC42NjYgNDUuNTI5NyAzNDQuNjQ4IDQ2LjM3NjJDMzQyLjE0OSA0Ny40NjcgMzQyLjU0OCA1MS45NjY2IDM0NS4wMjEgNTEuNzEyMUMzNDUuNTU1IDUxLjY1NzMgMzQ1LjQ4NiA0OS4wMjEgMzQ1Ljk0MyA0OC4zOTk2QzM0Ni41ODggNDguMTE5NSAzNDcuMjI5IDQ3LjkyNDUgMzQ3Ljg3MyA0Ny42ODA5QzM0OC4wMzYgNDUuMzQ4NiAzNDguNTc2IDQzLjQ0MjQgMzQ4LjUwNiA0MS4wMjQ4QzM0OS4yMTcgNDEuMTk1MyAzNDkuNzg2IDQxLjY0ODMgMzUwLjQyNCA0Mi4zMDZDMzUwLjQyNyA0MC45ODQ0IDM1MC40MjkgMzkuNjU4OSAzNTAuNDMyIDM4LjMzNzNDMzUxLjcxNyAzOC4xNDg2IDM1Mi4zMDUgMzYuOTUxNCAzNTIuMzI2IDM0LjI0MzZDMzUzLjE3NCAzNC42NjM4IDM1NC4wMjMgMzUuMDkwNyAzNTQuODcxIDM1LjUxN0MzNTQuNjk2IDM2LjYzMDQgMzU0LjUyNSAzNy43Mzk1IDM1NC4zNTQgMzguODUyOUMzNTQuOTcxIDQyLjYwMzUgMzU1LjU4OSA0Ni4zNTk5IDM1Ni4yMDcgNTAuMTEwNkMzNTcuMzY5IDUwLjM3MjkgMzU4LjA3MiA1Mi4xMTcxIDM1OS4wNjIgNTAuMTM0QzM1OS4yODEgNTEuODg3MSAzNTkuNDkxIDUzLjYyNjUgMzU5LjcxMyA1NS4zOTE3QzM2MC43MTIgNTMuMzgyNyAzNjAuNzkxIDUzLjIyNDYgMzU5Ljk5IDUwLjY4MDlDMzU5LjMzNCA0OC41OTggMzU4LjQ5OCA0NS40NTA2IDM1Ny40NjMgNDQuMTEwNkMzNTYuODM5IDQzLjMwMDYgMzU2LjYxNyA0NS4zODcgMzU2LjE2OCA0NC4xMjYzQzM1Ni4zODQgNDMuMDQ5IDM1Ni41ODggNDEuODk4MiAzNTYuODAxIDQwLjc5MDRDMzU3LjM0MyA0MS42NDkxIDM1Ny44ODYgNDIuNTAyIDM1OC40MjggNDMuMzYwN0MzNTkuOTMyIDQzLjY1ODYgMzYwLjQ2NSA0MC43NTk0IDM2MS45MDIgNDAuNjQ5OEMzNjEuOTAyIDQxLjI2MzcgMzYxLjg5NiA0MS44NzE3IDM2MS44OTYgNDIuNDg1N0MzNjIuNTQgNDIuNzQ3NCAzNjMuMTg0IDQzLjAwNTEgMzYzLjgyOCA0My4yNjY5QzM2My42MTIgNDEuOTM5MiAzNjMuMzkzIDQwLjYxMDMgMzYzLjE3OCAzOS4yODI2QzM2My44MTYgMzkuMjY0MyAzNjQuNDU1IDM5LjI0NjIgMzY1LjA5NiAzOS4yMjc5QzM2NS4wODEgMzcuNDYxOCAzNjUuMDk5IDM1LjY0MzMgMzY1LjA3IDMzLjkwNzdDMzY2LjIwMSAzMy40ODIgMzY1LjMyMSAzNy4xMzE0IDM2Ni4xIDM2LjQzMTFDMzY3LjUwMSAzNS4xNjUgMzY5LjM0OSAzNS41MTExIDM3MC40OTQgMzIuNTA5MkMzNzEuNDQxIDM0LjkwODQgMzcyLjI0NiAzNC42ODU1IDM3My42NDUgMzUuMTk2N0MzNzQuNzM3IDM1LjU5ODYgMzc2LjQ1NyAzNi4zNTA5IDM3Ny40NzUgMzYuMzQ1MUMzODAuNzA3IDM2LjMyMDggMzgzLjMwNSAzNi45NzcgMzg2LjQ5NCAzNy4zNjA3QzM4OC41MTcgMzcuNjA0IDM5MS4zMSAzNS45NzMgMzkyLjQ2NyA0MC41NDA0QzM5My4xODkgNDMuMzk2IDM5MS4xMiA0MS41MjU1IDM5MS4yOTEgNDMuODkxOUMzOTMuMjg4IDQ0Ljk4MjEgMzk0LjEzOSA0OC41MDM4IDM5Ni4zOTMgNDcuNzY2OEMzOTUuNTQyIDQ3LjM0NjYgMzk0LjY4NyA0Ni45MjE0IDM5My44MzYgNDYuNTAxMkMzOTQuMDQgNDQuNzE3OSAzOTQuMjU1IDQyLjkzMzEgMzk0LjQ1MyA0MS4xNDk3QzM5NS4zNTEgNDEuMDUyMyAzOTUuODEyIDQxLjk5NDkgMzk2LjcwMyA0Mi40N0MzOTcuMjYgNDIuNzY4NSAzOTcuOTAyIDQyLjAxNTggMzk4LjU4NCA0Mi41NjM4QzM5OS4zNzQgNDMuMTk3MiAzOTkuNzQxIDQ1LjU3NDQgNDAwLjg0IDQ0Ljk3NzhDNDAwLjg1MSA0NC4xMTk0IDQwMC44NDYgNDMuMjA2MSA0MDAuODUyIDQyLjMyOTRDNDAxLjU5OCA0Mi43NDM2IDQwMi4zMjcgNDMuMTgzNSA0MDMuMDg4IDQzLjU3OTRDNDAzLjM4OSA0Mi44MTkgNDA0LjE3NCA0Mi4wODc1IDQwMy42NzQgNDAuOTYyM0M0MDIuNTA1IDM4LjM0MzQgNDAwLjc5MSA0My4zMzA2IDQwMC44MzggMzguMzA2QzQwMy4yNjggMzguMjY5NSA0MDUuNzE2IDM4LjIxNDEgNDA4LjE1MiAzOC4xNjU0QzQwOS4yODYgMzkuOTMxNiA0MDkuMjA4IDQyLjAzMjMgNDA5LjE0NiA0NC43NjY5QzQwOS4zNjggNDMuOTA4MyA0MDkuNTU1IDQyLjkxOTcgNDA5LjgwMyA0Mi4xMzQxQzQxMS41NjYgNDAuMTk3NCA0MTMuMjc1IDQ0Ljg2NzggNDE0LjQ3OSA0NS41MDEyQzQxNS42ODUgNDYuMTMzOCA0MTUuNjYyIDQzLjQyODggNDE2LjgxOCA0NC42MDI4QzQxNi41NzcgNDYuMjc3MSA0MTYuMzk1IDQ4LjE1MzkgNDE2LjE4IDQ5LjkwNzRDNDE2Ljc5NSA0OC43ODY5IDQxNy40MSA0Ny42NTkxIDQxOC4wMjUgNDYuNTMyNUM0MTcuODMzIDQ1LjQyNDQgNDE3LjYyNyA0NC4zMTI1IDQxNy40NDMgNDMuMjA0NEM0MTcuODg0IDQzLjA5NTIgNDE4LjU2OSA0My4yNTkgNDE4Ljk1MyA0My4zMTM4QzQyMC40NzQgNDMuNTA4OCA0MjAuOTQ0IDQ0LjI3MjcgNDIyLjM2MyA0NS42MTg0QzQyMi43ODEgNDYuMDEzNyA0MjMuOTc1IDQ2LjEyNDcgNDI0LjQ1MyA0Ny4wMDEyQzQyNC4zMzkgNDMuNzMwNyA0MjQuOTg3IDQxLjc2MjUgNDI2LjM2NSA0MC4yODI2QzQyNi4zNjggNDIuMDYwOCA0MjYuMzc2IDQzLjg0MiA0MjYuMzc5IDQ1LjYyNjJDNDI3LjY1MyA0NC43MDA1IDQyOC45MjcgNDMuNzgwMyA0MzAuMjAxIDQyLjg2MDdDNDI5Ljc4MSA0My43NjgxIDQyOS4zNTcgNDQuNjcxOSA0MjguOTM4IDQ1LjU3OTRDNDI5LjI2MSA0Ny4zMzkzIDQyOS41ODIgNDkuMTA4NCA0MjkuOTAyIDUwLjg2ODRDNDI5Ljc5MiA0OS41NDA2IDQyOS42ODIgNDguMjAyMiA0MjkuNTc0IDQ2Ljg2ODRDNDMxLjI3MyA0Ni44MTk3IDQzMi45NzYgNDYuNzg0MyA0MzQuNjc4IDQ2LjczNTZDNDM0LjY3OCA0NS40MDE4IDQzNC42NzEgNDQuMDYxNiA0MzQuNjY4IDQyLjcyNzhDNDM1LjMwNiA0Mi43MDk2IDQzNS45NDYgNDIuNjk5MiA0MzYuNTg0IDQyLjY4MUM0MzUuOTk1IDQ0LjY5MDIgNDM2LjUwNyA0NS44Nzg2IDQzNi41OTggNDguMDA5QzQzNi4wNjQgNDcuNjE5NCA0MzUuNTI3IDQ3LjIzNDYgNDM0Ljk5NCA0Ni44NDVDNDM0LjQ3IDQ3LjkyODcgNDMzLjk0NSA0OS4wMTkgNDMzLjQxOCA1MC4xMDI3QzQzMy44NDMgNTEuMjA0NSA0MzQuMjcyIDUyLjI5NzggNDM0LjY5NyA1My4zOTk2QzQzMy44NDYgNTIuOTc5NCA0MzIuOTkyIDUyLjU2MTkgNDMyLjE0MSA1Mi4xNDE4QzQzMi41NjMgNTIuNTg2NCA0MzIuOTg4IDUzLjAyMzYgNDMzLjQxIDUzLjQ2MjFDNDMzLjQxOSA1NC43ODk2IDQzMy40MjggNTYuMTE3MSA0MzMuNDM0IDU3LjQzODZDNDM1LjE5NCA1Ny4zNTg1IDQzNi42MyA1NC4zMjE5IDQzOC4yMTkgNTcuMzA1OEM0MzguMTA1IDU0LjY0NDIgNDM3Ljk5MSA1MS45NzUyIDQzNy44NzcgNDkuMzEzN0M0MzkuNDU0IDQ4Ljg0NDcgNDQwLjAwOCA1MC40ODA3IDQ0MS4wODQgNTIuNTYzNkM0NDEuODUgNTQuMDQ5MyA0NDIuNDM2IDU1LjE3MjMgNDQyLjk2NyA1Mi40Mzg2QzQ0My41NDQgNDkuNDY3MiA0NDIuMTgxIDUyLjA3ODYgNDQxLjcxMSA1MS4yMjc3QzQ0Mi41MTIgNDkuODQ1NCA0NDIuMTU0IDQ4LjIzODUgNDQyLjY3NiA0Ni40NTQ0QzQ0My4yNTMgNDQuNDgxMSA0NDMuOTMyIDQ0LjU5MiA0NDIuNjQxIDQyLjUwOTFDNDQxLjQ4OSA0NC4zMTE1IDQ0MC4zMTIgNDYuMTMwMiA0MzkuMTUyIDQ3LjkzODdDNDM5LjA4OCA0NS4yNjUgNDM4LjgzMSA0My43NDQ5IDQ0MC4zOTEgNDMuODYwNkM0NDAuMzk2IDQyLjUzOSA0NDAuNDAyIDQxLjIxMTggNDQwLjQwOCAzOS44ODQxQzQ0MS40NjMgMzkuODcyIDQ0Mi41MjEgMzkuODU3MyA0NDMuNTc2IDM5Ljg0NTFDNDQzLjU3NiA0MC43MTU1IDQ0My42MTQgNDEuNjE3OSA0NDMuNTk0IDQyLjQ3QzQ0NC45ODEgNDIuOTkzNiA0NDQuNjg0IDQwLjY2MTggNDQ1Ljk5IDM5LjkzMUM0NDYuNjY2IDM5LjU1MzEgNDQ3Ljk4NiAzOC4yNTgzIDQ0OS4wOTYgMzguNzc0OEM0NTAuMjA2IDM5LjI5MjUgNDUxLjYwNyA0Mi42NzMgNDUzLjE2IDQwLjg3NjNDNDUyLjc3MyA0Mi4zMTk0IDQ1Mi4zMjEgNDMuNTg0NCA0NTEuOTEgNDQuOTU0NEM0NTIuNjY4IDQ0LjA1OTQgNDUzLjQyOCA0My4xNjE5IDQ1NC4xODYgNDIuMjY2OUM0NTQuOTE0IDQyLjY4MDkgNDU1LjY0MyA0My4wOTUxIDQ1Ni4zNzEgNDMuNTA5MUM0NTYuMTU2IDQyLjYyNjYgNDU1Ljk0IDQxLjc0MzEgNDU1LjcyNSA0MC44NjA3QzQ1Ni41NzUgNDAuODQyNCA0NTcuNDI2IDQwLjgyMjUgNDU4LjI3NyA0MC43OTgyQzQ1OC4wNyA0Mi41ODI3IDQ1Ny44NjEgNDQuMzY1MiA0NTcuNjU0IDQ2LjE0OTdDNDU3Ljk3OCA0NS43MTcyIDQ1OC4zIDQ1LjI4NTIgNDU4LjYyMyA0NC44NTI4QzQ1OC42MjMgNDUuNzIyIDQ1OC42MTcgNDYuNTg1MSA0NTguNjE3IDQ3LjQ1NDNDNDU5LjU2NyA0Ny40NDgyIDQ2MC41MjEgNDcuNDI5MiA0NjEuNDcxIDQ3LjQyMzFDNDYxLjQ4OCA0OC4yODA4IDQ2MS41MDQgNDkuMTM1NiA0NjEuNTIxIDQ5Ljk5MzRDNDYyLjA0NiA1MC40MTM1IDQ2Mi41NzEgNTAuODQwNSA0NjMuMDk2IDUxLjI2NjhDNDY0LjU5NyA0OC4wMzI4IDQ2Ni41NzQgNDguNTIxNiA0NjguNTEgNDcuMjEyMkM0NjguMTggNDUuODg0NCA0NjcuODQ3IDQ0LjU1MzggNDY3LjUxOCA0My4yMkM0NjYuOTk2IDQzLjY3NjggNDY2LjQ3MSA0NC4xMzgzIDQ2NS45NDkgNDQuNTk1QzQ2NS45NDMgNDMuMjYxNSA0NjUuOTQgNDEuOTIwOCA0NjUuOTM4IDQwLjU4NzNDNDY2LjQ2OCA0MC4xNjcxIDQ2Ni45OTkgMzkuNzQ3OSA0NjcuNTI5IDM5LjMyMTZDNDY3Ljk1OCA0MC4xMzc1IDQ2OC4zODMgNDAuOTU4OSA0NjguODA5IDQxLjc3NDdDNDY5Ljk3NyA0MC44OTE2IDQ3MS4xNDggNDAuMDA5NCA0NzIuMzE2IDM5LjEyNjNDNDcyLjIxMSA0MC4wMTU0IDQ3Mi4xMDkgNDAuOTA5MiA0NzIuMDA0IDQxLjc5ODJDNDcyLjMyMSA0MS43OTgyIDQ3Mi42NDIgNDEuNzgyNiA0NzIuOTU5IDQxLjc4MjVDNDczLjA2NyA0MC44ODIzIDQ3My4xNzYgMzkuOTc5OCA0NzMuMjgxIDM5LjA3OTVDNDc2LjIxMyAzOC42ODQyIDQ3OC45NDkgNDEuMzQyNyA0ODEuNTYxIDM3LjY5NjdDNDgzLjYwMSA0MS4zMTQyIDQ4NS41MjUgMzkuNTc4NiA0ODguMTAyIDQwLjAxN0M0ODguNzMxIDQwLjEyNjYgNDg5LjQzMyAzOC42OTU5IDQ5MC4xNDUgNDAuMTI2M0M0OTAuMTg1IDM5LjIyNDkgNDkwLjE3MSAzOC4zNDIgNDkwLjE5MSAzNy40NDY3QzQ5MS4xNDcgMzguMjg3MiA0OTIuMTA1IDM5LjA5NzQgNDkzLjA2MSAzOS45NjIzQzQ5NC44ODUgMzUuODcwMSA0OTUuNjE5IDM3Ljc2NDMgNDk3LjU5MiAzOS43NDM1QzQ5OC43NDMgNDAuODk0NCA0OTkuNTEgNDEuODkzMiA1MDAuNzk1IDQyLjQyMzJDNTAxLjM4NCA0Mi42NjY4IDUwMC43OTkgMzguMjIzMSA1MDIuMjk3IDM5Ljk0NjZDNTAyLjMzNSA0MS42MzMgNTAyLjMxMiA0My40OSA1MDIuMzI2IDQ1LjI0MzRDNTAzLjMyNiA0My45Mjg1IDUwMy44MTMgNDQuMjI4IDUwNC4yNDQgNDYuNTQ4MUM1MDIuOTUzIDQ2LjQxNDIgNTAyLjE3IDQ1Ljk4ODYgNTAyLjMzOCA0OS4yNDM0QzUwMS45MjEgNDkuMjY3NyA1MDEuNTA0IDQ5LjI5NzEgNTAxLjA5IDQ5LjMyMTVDNTAwLjkwNiA1MS44Mjk0IDUwMC4yNjIgNTIuNzgyMyA1MDEuMzk4IDU0LjYwMjdDNTAzLjIwMyA1My42ODMxIDUwNS4wMSA1Mi43NjQ1IDUwNi44MTQgNTEuODQ0OUM1MDcuMDk4IDU1LjA2NTcgNTA0LjY4OSA1OC4wOTAyIDUwNC4yODcgNjEuMjE5OEM1MDUuOTI4IDYxLjM5NjQgNTA2LjMzIDYzLjMyMTQgNTA2LjIyMyA2Ni41MjQ0QzUwNi45NTEgNjYuODI4OSA1MDcuMzQgNjYuMTYxMiA1MDcuNzg5IDY1LjE4MDZDNTA4LjcwNyA2My4xODM0IDUwOC41MjMgNjAuODcwNiA1MTAuMDM1IDYxLjEyNkM1MDkuOTEzIDYyLjQ2NDkgNTA5LjgyMSA2My43NDA5IDUwOS42ODkgNjUuMTEwM0M1MTAuNTI3IDY2LjcyMzYgNTA5LjY2IDY4LjM1NTEgNTA5LjU2MSA2OS42ODg0QzUwOS40NjIgNzEuMDIwNCA1MTAuMjM5IDcwLjk3OSA1MTAuMzk2IDcxLjcyNzRDNTEwLjg2IDczLjkzODEgNTEwLjY3MSA3NC42OTA0IDUxMS45NjUgNzQuNDc3NEM1MTEuOTc2IDc2LjY3OTYgNTExLjk4OCA3OC44OTQgNTEyIDgxLjEwMjNDNTExLjY4IDgwLjY3MDIgNTExLjM1OSA4MC4yMzc0IDUxMS4wMzkgNzkuODA1NEM1MTEuMTQ3IDgxLjEyNyA1MTEuMjYgODIuNDYwMyA1MTEuMzY1IDgzLjc4MTlDNTA5LjgwOSA4NC44MTEyIDUwOC4xODEgODUuMjc3NyA1MDYuNTkgODUuMjM1QzUwNi4xMTIgODUuMjIyNCA1MDUuNjA3IDg0LjM1MTUgNTA1LjM0MiA4NC4yNjYzQzUwMy4wMDggODMuNDk5NCA1MDIuNDI1IDg0LjM4NiA0OTkuOTk0IDg1LjE5NkM0OTkuNTEzIDg1LjM1NDIgNDk4LjAzOCA4My40MDE3IDQ5Ni45ODIgODQuMTU2OUM0OTYuNjIyIDg0LjQyMDcgNDk2LjM5NCA4Ni4zMDQ4IDQ5NS41NTkgODYuNjFDNDk0LjU1OSA4Ni45NjkzIDQ5Mi41MiA4NS4zMzU1IDQ5MS4yNTggODUuNDE0N0M0OTAuMjI5IDg1LjQ3NjEgNDg5LjEyMiA4Ni42MzM2IDQ4OC4wODggODYuODI4N0M0ODguMDc5IDg1Ljk1ODMgNDg4LjA3OSA4NS4wNDc0IDQ4OC4wNzYgODQuMTY0N0M0ODcuMDE4IDg1LjQ0MzcgNDg1Ljk1OSA4Ni43MTM4IDQ4NC44OTggODcuOTkyOEM0ODMuNTIgODcuNjM5NiA0ODIuMTM4IDg3LjI5MTMgNDgwLjc2IDg2LjkzODFDNDgwLjc0OCA4Ni4wNTU2IDQ4MC43MzMgODUuMjA2IDQ4MC43MjUgODQuMzA1M0M0NzkuNTkxIDg1LjQ4MDIgNDc4Ljk5MSA4NC4yNTgxIDQ3Ny44NTcgODQuMzM2NkM0NzYuNzI0IDg0LjQxNTggNDc1LjkxNSA4Ni40NjQ2IDQ3NC42ODYgODUuNzU4NUM0NzQuMjUxIDg0LjQ2MTIgNDczLjgyMiA4My4xMDUzIDQ3My4zOTEgODEuNzg5OEM0NzMuNDkzIDgzLjU0OTYgNDczLjYzMyA4NS4zNzExIDQ3My43MDkgODcuMDk0NEM0NzIuODM1IDg4LjAwMTggNDcxLjU5MiA4Ni4xNzUgNDcwLjkxNiA4Ni4yMTE2QzQ2OC44NTMgODYuMzI3NiA0NjcuMzAyIDg4LjUzMSA0NjUuNDM0IDg2LjU5NDRDNDY0LjY5IDg1LjgyNjcgNDYzLjc5IDgyLjQ5ODggNDYzLjIzNiA4Mi4yMTE2QzQ2MC45NiA4MS4wMjQyIDQ2MC43NzYgODQuNjcwNyA0NTkuMzc1IDg1LjkzODFDNDU4LjU2MiA4Ni42NzQ5IDQ1OC42MSA4NS4wNzQ5IDQ1OC4xMDQgODUuMTQxM0M0NTUuNDQ4IDg1LjQ4ODQgNDUzLjAzNyA4OC40NzM1IDQ1MC40NTEgODguOTMwM0M0NDcuODY2IDg5LjM4NjEgNDQ1LjIzNyA4NS41MzUzIDQ0Mi44MzYgODUuMjQyOEM0NDAuOTIxIDg1LjAxMTQgNDQwLjM0NCA4Ny42NzcxIDQzOC42MjEgODUuMjg5N0M0MzguNjMzIDg2LjIwOTQgNDM4LjYxNiA4Ny4wNjQ1IDQzOC42MDIgODcuOTUzN0M0MzcuNzI0IDg3Ljk4NDIgNDM2LjU4NCA4OC4xMzcgNDM1Ljc2OCA4OC4wOTQ0QzQzNS4yMDIgODguMDYzOSA0MzQuODY0IDg3LjA0OTkgNDM0LjQ5NCA4Ny4wNTUzQzQzMy4zODQgODcuMDg1NyA0MzIuNDA0IDg5Ljg5MTMgNDMxLjM2NyA4OS4zMjA5QzQzMC4xMTcgODguNjI2NiA0MjkuOTQ2IDg1Ljk5NiA0MjguNDIyIDg2Ljg5MTJDNDI4LjQyOCA4Ni4yMjgzIDQyOC40MTEgODUuNjU2NSA0MjguNDA4IDg1LjAyNDFDNDI4LjA4MiA4NS4yMDA2IDQyNy43NTggODUuMzcyNyA0MjcuNDMyIDg1LjU1NTNDNDI3LjIyMiA4NC42OTA3IDQyNy4wMDkgODMuODI2MiA0MjYuNzk5IDgyLjk2MTZDNDI2LjQ4NCA4NC4zMDc2IDQyNi4xNjYgODUuNjUyOSA0MjUuODUyIDg2Ljk5MjhDNDI2LjQ5IDg3LjQxOTEgNDI3LjEzMSA4Ny44Mzk5IDQyNy43NyA4OC4yNjYyQzQyNi45MjcgODguNTI4MSA0MjYuMDg1IDg4Ljc5MzQgNDI1LjI0MiA4OS4wNTUzQzQyNC42MDQgODguODExNyA0MjMuOTY4IDg4LjU3MjMgNDIzLjMzIDg4LjMyODdDNDIzLjMxMyA4Ny40NzE1IDQyMy4yOTMgODYuNjA3OSA0MjMuMjc1IDg1Ljc1MDZDNDIyLjY1MiA4NS43Njg5IDQyMi4wMjQgODUuNzg1MyA0MjEuNCA4NS43OTc1QzQyMS41MDggODkuMDQxOCA0MjAuNzcgODguNjA0MSA0MTkuNDcxIDg4LjUwMDZDNDE5LjA0MyA4Ny42MjQxIDQxOC42MTggODYuNzQ0MyA0MTguMTg5IDg1Ljg2NzhDNDE4LjQwOCA4Ny4xOTQ5IDQxOC42MjIgODguNTI1MSA0MTguODM4IDg5Ljg1MjFDNDE4LjIwMyA5MC43NjUyIDQxNy41NjggOTEuNjcxNyA0MTYuOTMgOTIuNTc4N0M0MTYuMTgxIDkwLjgxODUgNDE1LjQzMSA4OS4wNTc2IDQxNC42ODIgODcuMjk3NUM0MTQuNzg5IDg4LjYxNzkgNDE0LjkwMyA4OS45Nzc4IDQxNS4wMDggOTEuMjc0QzQxNC4yOTcgOTEuNzkwMSA0MTMuOTk3IDkwLjQyMDUgNDEzLjQ0MSA5MC4zNTIxQzQxMi44ODUgOTAuMjg1MSA0MTIuNzM3IDkxLjM3MiA0MTIuMTM3IDkxLjQxNDZDNDExLjI0MiA5MS40ODE1IDQxMC4yMDggOTEuNDEzNyA0MDkuMjgxIDkxLjQzODFDNDA5LjI3IDkwLjU1NTUgNDA5LjI2NiA4OS42NzA0IDQwOS4yNiA4OC43ODE4QzQwOS4wNDggODguNzg3OSA0MDguODM1IDg4Ljc5MTQgNDA4LjYyMyA4OC43OTc1QzQwOC42MjMgODkuNjc0NSA0MDguNjA1IDkwLjU1OTMgNDA4LjYxMyA5MS40MzAyQzQwNi45MzggOTIuNTU2OCA0MDUuNzEgOTMuMDYzNiA0MDMuODk1IDkyLjc4OTZDMzk4LjkxMyA5Mi4wNTI3IDM5NC4wNzIgOTQuNDUwMiAzODkuMjI1IDkwLjY4MDNDMzg3LjQ1NSA5Mi43MDgyIDM4NS43NTkgOTMuNjEyOSAzODMuNzQyIDkzLjQzMDJDMzg0LjE3MSA5NC43NTE4IDM4NC42IDk2LjA3OSAzODUuMDMxIDk3LjQwNjdDMzg0LjE4MyA5Ni45ODA1IDM4My4zMzQgOTYuNTUxNyAzODIuNDg2IDk2LjEyNTVDMzgyLjE2IDk0LjgwMzkgMzgxLjgzMiA5My40Nzg0IDM4MS41MDYgOTIuMTU2OEMzODEuMTk0IDk0LjgzMDUgMzgwLjg4MiA5Ny41MTQyIDM4MC41NyAxMDAuMTg4QzM3OC42NTkgOTguMTkwMyAzNzkuOTM1IDk1LjcyMTkgMzc5LjkwNiA5Mi4xOTU5QzM3OC4zODUgOTIuMjQ0NiAzNzYuNiA5Mi4yNzgxIDM3NS4xNDggOTIuMzc1NUMzNzQuNTYgOTIuNDEwOCAzNzQuMTk5IDkxLjI0NDYgMzczLjg5MSA5MS4zMjg3QzM3Mi4zOTUgOTEuNzYxMSAzNzEuNDA3IDk0Ljc2ODUgMzcwLjAwOCA5Mi42MjU1QzM2OS4zOSA5My45Mjg3IDM2OC43MzkgOTUuMjA5NCAzNjguMTIxIDk2LjUwMDVDMzY3LjQ4MyA5NS40ODk4IDM2Ny4xODMgOTQuMTU1OSAzNjYuNDkgOTMuMTg4QzM2NS42NzEgOTIuMDQzNCAzNjUuMDI1IDkyLjgzNjcgMzY1LjIwNSA4OS45NzcxQzM2NC4zNTEgODkuNTM4NiAzNjMuNTEzIDg5LjA4NzUgMzYyLjY2OCA4OC42NDlDMzYyLjY2NSA4OS45NjkzIDM2Mi42NiA5MS4yODk2IDM2Mi42NTQgOTIuNjA5OUMzNjIuMjQ2IDkyLjY0NjUgMzYxLjgzNCA5Mi42ODQ1IDM2MS40MjYgOTIuNzI3MUMzNjEuNDIgOTQuMDQ3NCAzNjEuNDE4IDk1LjM2NzcgMzYxLjQxMiA5Ni42ODhDMzYwLjc3NCA5Ni4yNjE5IDM2MC4xMzYgOTUuODMyOCAzNTkuNDk4IDk1LjQwNjdDMzU5LjM1NSA5OC41MjQ1IDM1Ny42MzIgMTAxLjg4NSAzNTcuNTgyIDk2Ljc5NzNDMzU4LjAwOCA5Ni41NjU5IDM1OC40MzQgOTYuMzI1NyAzNTguODU5IDk2LjA5NDJDMzU4LjQzNyA5NS44NzUgMzU4LjAxNiA5NS42NTcyIDM1Ny41OTQgOTUuNDM4QzM1Ny41ODUgOTQuMTEwOSAzNTcuNTc2IDkyLjc4ODYgMzU3LjU3IDkxLjQ2MTVDMzU2LjI5NyA5MC41Nzg2IDM1NC45NTYgOTQuNTI4OSAzNTUuMDMxIDk2Ljg2NzdDMzU0LjQ5OCA5Ni4wMDkyIDM1My45NjUgOTUuMTU1OSAzNTMuNDMyIDk0LjI5NzRDMzUxLjYxNiA5Ni4zNDk3IDM1MC45OTUgOTcuODkwNCAzNTEuMjE3IDEwMi4zMDVDMzUwLjU4NyAxMDEuODU0IDM0OS45NTggMTAxLjQwMiAzNDkuMzI4IDEwMC45NDZDMzQ5LjMwNSAxMDAuMTIgMzQ5LjI3OCA5OS4yODc2IDM0OS4yNTIgOTguNDYxNEMzNDguNTE4IDk3LjU2MDMgMzQ3Ljc4MyA5Ni42NTE1IDM0Ny4wNDkgOTUuNzUwNUMzNDYuNzM0IDk3LjA4OTYgMzQ2LjQxNiA5OC40MjY5IDM0Ni4xMDIgOTkuNzY2MUMzNDYuNTEyIDk5Ljc4NDMgMzQ2LjkyIDk5LjgxMDMgMzQ3LjMzIDk5LjgyODZDMzQ3LjY3NyAxMDEuMTA4IDM0OC4wMjIgMTAyLjM5MyAzNDguMzY5IDEwMy42NzJDMzQ5Ljc0NSAxMDMuNjQ4IDM1MS4xMiAxMDMuNjI2IDM1Mi40OTYgMTAzLjYwMkMzNTEuOTEgOTkuNzE3MSAzNTEuODg0IDk4LjMwNjggMzUzLjQzMiA5NS41Nzg2QzM1My41NDUgOTguMjQ0OSAzNTMuNjYgMTAwLjkwNCAzNTMuNzczIDEwMy41NzFDMzU0LjUxMyAxMDEuNzc1IDM1NS4yNTQgOTkuOTgyMSAzNTUuOTk0IDk4LjE4MDFDMzU1Ljg4OSA5OS4wNjI4IDM1NS43ODEgOTkuOTQ3NiAzNTUuNjc2IDEwMC44MzZDMzU3LjQwMSAxMDAuOTM0IDM1OC41NDEgMTAyLjgzNiAzNjAuMTUgMTAwLjczNUMzNjAuMDE2IDEwNC43OTEgMzYwLjE4OSAxMDcuMzgxIDM2MS43NzEgMTEwQzM2Mi41MTQgMTA5LjA5OSAzNjMuMjU1IDEwOC4xOTggMzYzLjk5OCAxMDcuMjk3QzM2My4zNiAxMDYuODY1IDM2Mi43MTggMTA2LjQ0IDM2Mi4wOCAxMDYuMDA4QzM2Mi4wNzQgMTAyLjg5NyAzNjIuMDYgOTkuNzkxNSAzNjIuMDU3IDk2LjY4MDJDMzYzLjU4NCA5Ny40MTA2IDM2NS4yNzEgOTcuMzA0MSAzNjYuNzY2IDk4LjAxNjFDMzY3LjI5NiA5OC4yNzE4IDM2Ny40MTMgOTkuNDk1NyAzNjcuNzc3IDk5Ljg2NzZDMzY4LjgzMiAxMDAuOTUxIDM2OS4yMTcgMTAwLjMzOSAzNjkuMTA0IDEwMy4xNTdDMzY5LjcyNyAxMDIuNjgyIDM3MC4zNjEgMTAyLjIyNyAzNzAuOTkgMTAxLjc1OEMzNzAuOTI2IDk4LjgyMjggMzcwLjgxNiA5Ni40MTA3IDM3Mi4yNjIgOTUuMDcwOEMzNzIuMjczIDk2LjM5MjQgMzcyLjI4MyA5Ny43MTc5IDM3Mi4yOTUgOTkuMDM5NUMzNzIuNjk3IDk5LjA3NiAzNzMuMDk4IDk5LjExMjMgMzczLjUgOTkuMTQ4OUMzNzMuNTE3IDEwMCAzNzMuNTM0IDEwMC44NTQgMzczLjU1NSAxMDEuNzExQzM3My45NjMgMTAxLjczNiAzNzQuMzY5IDEwMS43NTcgMzc0Ljc3OSAxMDEuNzgyQzM3NC44MDUgMTAyLjYyOCAzNzQuODI5IDEwMy40ODIgMzc0Ljg1NSAxMDQuMzI4QzM3NS40ODIgMTA0LjMxIDM3Ni4xMDYgMTA0LjMgMzc2LjczMiAxMDQuMjgyQzM3Ni43NDQgMTAzLjQyMyAzNzYuNzU5IDEwMi41NTQgMzc2Ljc3MyAxMDEuNjk2QzM3Ny41MDggMTAxLjI0NSAzNzguMjQyIDEwMC43OTUgMzc4Ljk3NyAxMDAuMzQ0QzM4MC4xMDQgMTAyLjAzNyAzODAuMzA4IDEwNS43NiAzODEuODU1IDEwNS41MjRDMzgxLjc1NiAxMDcuMzAxIDM4MS42NTYgMTA5LjA3NCAzODEuNTU3IDExMC44NTJDMzgyLjMgMTEwLjM4OSAzODMuMDQyIDEwOS45MjQgMzgzLjc4NSAxMDkuNDYxQzM4NC4xMzIgMTA1LjEwMiAzODEuNjg2IDEwMi43NDYgMzgxLjg0MiA5OC44NDQyQzM4My4zNTcgMTAwLjU4NSAzODQuNjkgOTguNDg1MSAzODYuMzExIDk4LjczNDhDMzg1Ljg4OCA5OS40MTA5IDM4NS40NjIgMTAwLjA4NCAzODUuMDM5IDEwMC43NjZDMzg1LjU5MyAxMDEuODUgMzg2LjE0NiAxMDIuOTQgMzg2LjcwMyAxMDQuMDI0QzM4Ny4yMTMgMTAzLjc5OCAzODcuNzI2IDEwMy41NzEgMzg4LjIzNiAxMDMuMzUyQzM4Ny4xMjYgMTA2LjM2NiAzODYuNDA5IDEwOS4xMTUgMzg3Ljk0MSAxMTIuMDMxQzM4OC4wNCAxMDkuODA5IDM4OC4xNDMgMTA3LjU4MiAzODguMjQyIDEwNS4zNkMzODkuMDkzIDEwNS4zMzUgMzg5Ljk0MiAxMDUuMzA2IDM5MC43OTMgMTA1LjI4MkMzOTEuMDAzIDEwMy41MDUgMzkxLjIxIDEwMS43MjMgMzkxLjQyIDk5Ljk0NTdDMzkzLjQ0MiAxMDIuMjcyIDM5Mi4zMDMgMTAzLjAwOSAzOTEuNTE2IDEwNS45MzhDMzkzLjIzOCAxMTIuMjM0IDM5MC43MTUgMTA4LjY0NCAzODkuODQgMTA2LjY2NEMzODkuMzg4IDEwNi42MTYgMzg5LjM1OSAxMDguMDQ4IDM4OS41NDMgMTA4LjYzM0MzOTAuNDEyIDExMS4zOTcgMzkxLjk4OCAxMTAuNjI2IDM5My4zNjMgMTEwLjU3MUMzOTMuMTUxIDEwOS4yMzcgMzkyLjkyOSAxMDcuOTE0IDM5Mi43MTMgMTA2LjU4NkMzOTMuMzQ4IDEwNS45MDQgMzkzLjk4OCAxMDUuMjIyIDM5NC42MjMgMTA0LjUzOUMzOTQuNjIzIDEwNC4wOTQgMzk0LjYyMyAxMDMuNjQ5IDM5NC42MjMgMTAzLjIwM0MzOTQuMTk1IDEwMi4xMDEgMzkzLjc2NiAxMDEuMDAxIDM5My4zMzggOTkuODk4OUMzOTQuNjE0IDk5Ljg2ODQgMzk1Ljg5MSA5OS44NDE3IDM5Ny4xNjggOTkuODA1MUMzOTcuNTk4IDEwMi40OSAzOTUuNzYyIDEwNS4yNzYgMzk0LjYyOSAxMDUuMjAzQzM5NC42ODcgMTA4LjYzOCAzOTUuNjc1IDEwOS40NTkgMzk3LjE5MyAxMDkuMTQ5QzM5Ny4xOSAxMDcuODE2IDM5Ny4xODcgMTA2LjQ3NCAzOTcuMTgyIDEwNS4xNDFDMzk4LjkwNyAxMDYuMDk3IDQwMC41MzQgMTA0Ljg5NCA0MDIuMjgzIDEwNS4wMTZDNDAzLjAyMSAxMDEuODg2IDQwMy43NTggOTguNzQ3NyA0MDQuNDk4IDk1LjYxNzdDNDA1LjI0NyA5Ni45MjcxIDQwNS45OTcgOTguMjczNSA0MDYuNzQgOTkuNTcwN0M0MDYuMTU1IDk5LjkyOTkgNDA1LjE3IDk3LjcxMTkgNDA0Ljg0IDk5LjAyMzlDNDA0LjUxIDEwMC4zMzkgNDA0LjIyMyAxMDIuMDc2IDQwNC4xOTcgMTAzLjY0MUM0MDYuMDEzIDEwMy4xMjMgNDA3LjEzIDEwMC45NSA0MDguMzM0IDk4LjIwMzZDNDA5LjA2MyA5OS45ODc2IDQwOS45MTcgMTAwLjkzMyA0MTAuNTA2IDEwMy4xMjVDNDEwLjg4NyAxMDQuNTM3IDQxMC42ODcgMTA1LjQ1OCA0MTEuODYxIDEwNC44MTNDNDExLjY0MyAxMDMuNTIzIDQxMS40MjYgMTAyLjE1NyA0MTEuMjExIDEwMC44MzZDNDExLjk2IDEwMC4zOCA0MTIuNzEyIDk5LjkxODEgNDEzLjQ2MSA5OS40NjE0QzQxMy4zNDcgOTguNTcyNCA0MTMuMjI3IDk3LjY4NjMgNDEzLjExMyA5Ni43OTczQzQxMy43NTIgOTYuNzg1MiA0MTQuMzkxIDk2Ljc4NjEgNDE1LjAyOSA5Ni43NzM5QzQxNC44MjIgOTkuMDAyMSA0MTQuNjE1IDEwMS4yMjUgNDE0LjQwOCAxMDMuNDUzQzQxNS4yNTMgMTAxLjY2MyA0MTYuMDk5IDk5Ljg2MTMgNDE2Ljk0NyA5OC4wNzA4QzQxNi44NDUgOTkuODQ5MiA0MTYuNzQzIDEwMS42MzQgNDE2LjY0MSAxMDMuNDA3QzQxNi44NTMgMTAzLjA2NiA0MTcuMDY2IDEwMi43MjIgNDE3LjI3NSAxMDIuMzc1QzQxNy41OTYgMTAzLjYgNDE3LjkyMSAxMDQuODMxIDQxOC4yNDQgMTA2LjA1NUM0MTcuMzkzIDEwNi4wNjcgNDE2LjU0MiAxMDYuMDgyIDQxNS42OTEgMTA2LjA5NEM0MTYuNjUgMTA3LjQwMyA0MTcuNjEzIDEwOC43MTUgNDE4LjU3NCAxMTAuMDI0QzQxOS40MTEgMTA3Ljk2NyA0MjAuODc2IDEwNy44MjQgNDIwLjgzOCAxMDQuNzc0QzQyMS4yNCAxMDQuNzI1IDQyMS42NDIgMTA0LjY2NiA0MjIuMDQxIDEwNC42MThDNDIyLjA0NyAxMDMuMjk3IDQyMi4wNTEgMTAxLjk2OSA0MjIuMDU3IDEwMC42NDlDNDIyLjQ4MiAxMDAuODYyIDQyMi45MDggMTAxLjA4NCA0MjMuMzM0IDEwMS4yOTdDNDIzLjEyNyAxMDMuMzAxIDQyMi45MiAxMDUuMzAzIDQyMi43MTMgMTA3LjMxM0M0MjMuNjggMTA1LjA5NyA0MjQuNjMzIDEwMi44OTQgNDI1LjYwOSAxMDAuNjcyQzQyNi41NzEgMTAwLjY4NCA0MjcuNzgxIDEwMC4xNjcgNDI4LjY3NiAxMDAuNjcyQzQyOS4yNDcgMTAwLjk5NSA0MjkuNTg1IDEwMi43MTcgNDI5Ljk4NCAxMDIuODUyQzQzMS4xNDQgMTAzLjI1NCA0MzAuOTY0IDEwMy40NzcgNDMyLjEyMSAxMDQuMzZDNDMzLjA2NSAxMDUuMDc4IDQzNi4xOTkgMTA1LjA2MSA0MzYuNzM4IDEwNy43MzVDNDM2LjM1MSAxMDkuNTEzIDQzNS45MTMgMTExLjI2OSA0MzUuNDk2IDExMy4wNDdDNDM2LjIxNiAxMTQuMzM4IDQzNi42MjUgMTE1LjkxMSA0MzcuNDQxIDExNy4wODZDNDM4LjI1NyAxMTguMjYgNDM4LjkyMyAxMTcuNDYgNDM4LjcxNyAxMjAuMzQ0QzQzOS4xNDggMTIwLjQzNSA0MzkuNTU3IDEyMC4zNDcgNDM5Ljk4MiAxMjAuMzU5QzQzOS45OTQgMTIxLjAwNSA0NDAuMDA2IDEyMS42MTYgNDM5Ljk1OSAxMjIuMjc0QzQzOC45MDEgMTI0LjkyOSA0MzguMjIxIDEyNi4wNzQgNDM2LjQzMiAxMjUuNzI3QzQzNS4yMiAxMjUuNDg5IDQzNC44NyAxMjQuMzI0IDQzMy44OTEgMTI3LjA5NFpNMTA1LjU4NCAxNC44NTMzQzEwNS41OTMgMTMuOTcwNiAxMDUuNjAxIDEzLjA3OTggMTA1LjYwOSAxMi4xOTcxQzEwNS4wNzkgMTIuNDIyMyAxMDQuNTQ2IDEyLjY1OTMgMTA0LjAxNiAxMi44ODQ1QzEwNC4yMzEgMTMuOTk4NiAxMDQuNDQ1IDE1LjEwNDcgMTA0LjY2IDE2LjIxMjZDMTAzLjgxMiAxNi4yMjQ4IDEwMi45NjMgMTYuMjM5NSAxMDIuMTE1IDE2LjI1MTdDMTAxLjg5NyAxNC40Nzk0IDEwMS42NzggMTIuNjk2IDEwMS40NTkgMTAuOTIzNkMxMDIuMzA3IDEwLjkwNTQgMTAzLjE1OSAxMC45MDQ2IDEwNC4wMSAxMC44OTI0QzEwNC4wMDcgOS41NTk0MyAxMDQuMDA4IDguMjE3NjEgMTA0LjAwOCA2Ljg4NDY0QzEwNC45NTggNi44NjAyOSAxMDUuOTEgNi44NDA0MSAxMDYuODYzIDYuODIyMTRDMTA2Ljk3NyA3LjcxNzM4IDEwNy4wODcgOC42MTQzNiAxMDcuMjAxIDkuNTA5NkMxMDcuNDA4IDguODc2MiAxMDcuNjE1IDguMjQ0NTkgMTA3LjgyMiA3LjYxMTE5QzEwOC40NjMgNy4zNDMyNCAxMDkuMTA1IDcuMDc0NDcgMTA5Ljc0NiA2LjgwNjUxQzEwOS4xMjMgOC44MTU2NyAxMDguNDk3IDEwLjgyODUgMTA3Ljg3MyAxMi44Mzc3QzEwOC4yOTMgMTMuOTM5NiAxMDguNzA5IDE1LjA0ODIgMTA5LjEyOSAxNi4xNTAxQzEwNy44MjkgMTYuMTk4OCAxMDcuMjQgMTcuNDY1IDEwNy4yMjMgMjAuMTgxM0MxMDYuNjc1IDE4LjQwOSAxMDYuMTI5IDE2LjYyNTYgMTA1LjU4NCAxNC44NTMzWk0xMDEuNDUxIDcuNTc5OTRDMTAxLjU1NiA3LjM1NDkyIDEwMS42NjUgNy4xNDA5MiAxMDEuNzcgNi45MTU4OUMxMDIuMDkgNy41NzI5NiAxMDIuNDEgOC4yMzcwOSAxMDIuNzMgOC45MDAyM0MxMDIuNjIzIDkuMTI1MzcgMTAyLjUxNyA5LjMzOTEzIDEwMi40MTIgOS41NjQyOUMxMDIuMDkyIDguOTA3MTcgMTAxLjc3MSA4LjI0MzEzIDEwMS40NTEgNy41Nzk5NFpNOTcuNjAzNSA3LjY1ODA3Qzk3LjYwNjQgOC40OTg1NCA5Ny4wMDI5IDguNTIwMjYgOTcgNy42NzM2OUM5Ni45OTcyIDYuODI4NTQgOTcuNjAxOCA2LjgyMTMgOTcuNjAzNSA3LjY1ODA3Wk03NS4yNjU2IDcuOTg2MThDNzUuMjY3NyA4LjgyMzc5IDc0LjY2MzcgOC44MzA0NCA3NC42NjIxIDcuOTk0Qzc0LjY1OTIgNy4xNTM1MiA3NS4yNjU2IDcuMTQ1NzEgNzUuMjY1NiA3Ljk4NjE4Wk02OS41MzcxIDcuNDE1ODhDNjkuOTYyNiA3LjQxNTg4IDcwLjM4ODkgNy40MDgwNyA3MC44MTQ1IDcuNDA4MDdDNzAuODE0NSA3Ljg1MDc3IDcwLjgxNDUgOC4yOTM0NyA3MC44MTQ1IDguNzM2MThDNzAuMzg4OSA4LjczNjE4IDY5Ljk2MjYgOC43NTE4IDY5LjUzNzEgOC43NTE4QzY5LjUzNzEgOC4zMDY0OSA2OS41MzcxIDcuODYxMTkgNjkuNTM3MSA3LjQxNTg4Wk01OC4wMzMyIDguMjU5NjJDNTguMDM1NiA5LjA5ODA4IDU3LjQzMTEgOS4xMDQ3NCA1Ny40Mjk3IDguMjY3NDNDNTcuNDI2OCA3LjQyNjk2IDU4LjAzMzEgNy40MTkxNCA1OC4wMzMyIDguMjU5NjJaTTExNS40NzcgOC42NjU4NkMxMTUuNDc3IDkuNTA2MDIgMTE0Ljg3MyA5LjUxMzE4IDExNC44NzMgOC42NzM2OEMxMTQuODcgNy44MzM0NSAxMTUuNDc2IDcuODI2MTUgMTE1LjQ3NyA4LjY2NTg2Wk04OC4wMzEyIDkuMTM0NjFDODguMDM0MiA5Ljk4MDM1IDg3LjQyODkgOS45ODgyMyA4Ny40Mjc3IDkuMTUwMjNDODcuNDI0OCA4LjMwMzk5IDg4LjAzMDggOC4yOTUxIDg4LjAzMTIgOS4xMzQ2MVpNMTQ0Ljg1NSA4Ljc5ODY4QzE0NS4yODEgOC43OTI1OSAxNDUuNzA2IDguNzg5MTMgMTQ2LjEzMSA4Ljc4MzA1QzE0Ni4wMTUgMTAuNDg3NiAxNDYuNTAzIDExLjI4OTQgMTQ2Ljc3NyAxMi43NzUyQzE0Ni4xMzkgMTIuNzgxMyAxNDUuNTAxIDEyLjc4NjQgMTQ0Ljg2MyAxMi43OTg2QzE0NC44NiAxMS40NjU5IDE0NC44NTUgMTAuMTMxMyAxNDQuODU1IDguNzk4NjhaTTEyNy42MzEgMTQuNDU0OEMxMjcuNjE2IDEzLjU5MjMgMTI3LjYwMiAxMi43MjM2IDEyNy41ODggMTEuODYxMUMxMjcuMTc0IDExLjg0OSAxMjYuNzYzIDExLjgyNjQgMTI2LjM1IDExLjgxNDNDMTI2LjM0NyAxMC45MjYyIDEyNi4zNDYgMTAuMDM4MiAxMjYuMzQ2IDkuMTUwMjNDMTI2Ljc3MSA5LjE0NDE0IDEyNy4xOTcgOS4xMzI4OCAxMjcuNjIzIDkuMTI2NzlDMTI3LjgzOSAxMC44OTc5IDEyOC4wNTggMTIuNjc1OSAxMjguMjczIDE0LjQ0N0MxMjguMDYxIDE0LjQ1MzEgMTI3Ljg0NyAxNC40NTQ4IDEyNy42MzUgMTQuNDU0OEMxMjcuNjMzIDE0LjQ1NDggMTI3LjYzMiAxNC40NTQ4IDEyNy42MzEgMTQuNDU0OFpNMzguMjY1NiA5Ljg0NTUzQzM3LjMxODQgMTIuMDI1OCAzNi4yMTg2IDEzLjE2MSAzNi4zNDk2IDkuMTk3MTFDMzYuNjY3MSA5LjYxMTExIDM2Ljk4ODEgMTAuMDE3NSAzNy4zMDg2IDEwLjQzMTVDMzcuNjI2MyAxMC4yMzY2IDM3Ljk0NzkgMTAuMDQwNCAzOC4yNjU2IDkuODQ1NTNaTTk4LjI3MTUgMTMuNjU4Qzk4LjE0NjEgMTIuMzMwMyA5OC42ODUgOS4yODkxNiA5OS41MzkxIDkuNjQyNDFDOTkuNTQyIDEwLjk2OTEgOTkuNTQ2OCAxMi4zMDE4IDk5LjU0NjkgMTMuNjM0NUM5OS4xMjE3IDEzLjY0MDYgOTguNjk2NiAxMy42NTE5IDk4LjI3MTUgMTMuNjU4Wk0xNTMuNzkxIDkuOTIzNjVDMTU0LjIxNiA5LjkxNzU3IDE1NC42NDEgOS45MDAyNSAxNTUuMDY2IDkuOTAwMjJDMTU1LjA2OSAxMC4zNDQ2IDE1NS4wNjggMTAuNzkxNyAxNTUuMDY4IDExLjIzNjFDMTU0LjY0MyAxMS4yNDIyIDE1NC4yMTcgMTEuMjUxOCAxNTMuNzkxIDExLjI1MThDMTUzLjc5MSAxMC44MDkxIDE1My43OTEgMTAuMzY2NCAxNTMuNzkxIDkuOTIzNjVaTTYyLjUxMzcgMTIuNjU4QzYxLjk1NCAxNC4wMjgzIDYwLjM2NzcgMTEuMDYwNyA2MC42MjExIDEwLjQzOTNDNjEuMTgwNCA5LjA2OTY5IDYyLjc2NTEgMTIuMDM0NSA2Mi41MTM3IDEyLjY1OFpNMTQyLjMxMiAxMi44NDU1QzE0Mi4zMSAxMS45NTYzIDE0Mi4zMDcgMTEuMDYyOSAxNDIuMzA3IDEwLjE3MzdDMTQyLjczMiAxMC4xNjc2IDE0My4xNTggMTAuMTY0MSAxNDMuNTg0IDEwLjE1OEMxNDMuMjY2IDExLjA1MzMgMTQyLjk0OSAxMS45NTAyIDE0Mi42MzEgMTIuODQ1NUMxNDIuNTI1IDEyLjg0NTUgMTQyLjQxOSAxMi44NDU1IDE0Mi4zMTIgMTIuODQ1NVpNMTQwLjM4OSAxMC4yMDQ5QzE0MC42MDEgMTAuMTk4OCAxNDAuODE1IDEwLjE5NzEgMTQxLjAyNyAxMC4xOTcxQzE0MS4wMyAxMS41MzY0IDE0MS4wMzcgMTIuODcxNiAxNDEuMDM3IDE0LjIwNDhDMTQwLjgyNSAxNC4yMTA5IDE0MC42MTEgMTQuMjEyNiAxNDAuMzk4IDE0LjIxMjdDMTQwLjM5NiAxMi44NzM1IDE0MC4zOTQgMTEuNTM3OSAxNDAuMzg5IDEwLjIwNDlaTTM5LjU0MSAxMC40OTRDMzkuOTY2NiAxMC40ODc5IDQwLjM5MjggMTAuNDc4MyA0MC44MTg0IDEwLjQ3ODNDNDAuODIxMiAxMS44MTEyIDQwLjgyNjIgMTMuMTQ1NCA0MC44MjYyIDE0LjQ3ODNDNDAuNDAxIDE0LjQ4NDQgMzkuOTc1OSAxNC40OTM5IDM5LjU1MDggMTQuNDkzOUMzOS41NDc5IDEzLjE2MDYgMzkuNTQxIDExLjgyNzMgMzkuNTQxIDEwLjQ5NFpNMzMuMTk5MiAxNC44NDU1QzMyLjgyMDYgMTUuNjAxMiAzMy40MjYyIDE4LjUzMDIgMzEuODk2NSAxNy4xOTdDMzEuOTI5NiAxMy45NTczIDM0LjA1NjcgOS45OTI4MyAzNS43MTQ4IDEwLjU0MDhDMzUuNzE0OCAxMi4yOTQzIDM1LjcyMjcgMTQuMTM0NSAzNS43MjI3IDE1Ljg0NTRDMzQuODc3NiAxNS44NTYzIDM0LjA3NjMgMTMuMTA0IDMzLjE5OTIgMTQuODQ1NVpNMTE3LjQxNiAxMC42MzQ2QzExOC4xMTUgMTAuMzM3IDExOC42NzUgMTAuODg4MiAxMTkuMzIyIDExLjI1OTZDMTE5Ljk3MiAxMS42MjQyIDEyMC42NDcgMTEuNTQyNCAxMjAuNjEzIDEzLjI0MzlDMTE5Ljc2MiAxMy4yNTYxIDExOC45MTYgMTMuMjgwMyAxMTguMDY4IDEzLjI5ODZDMTE3Ljg1NiAxNC4xODc4IDExNy42MzkgMTUuMDgxMiAxMTcuNDI2IDE1Ljk3MDRDMTE3LjQyMyAxNC4xOTIzIDExNy40MTYgMTIuNDA2NiAxMTcuNDE2IDEwLjYzNDZaTTE2MS40NjUgMTYuNDA3OUMxNjEuOTI1IDE0LjU5OTEgMTYyLjIyMSAxMy4xMzk0IDE2Mi4wOTYgMTEuMDU2NEMxNjIuNzM0IDExLjA0NDMgMTYzLjM3IDExLjAzOTEgMTY0LjAwOCAxMS4wMzNDMTY0LjAxMSAxMi44MTA3IDE2NC4wMTcgMTQuNTkxMiAxNjQuMDIgMTYuMzY4OUMxNjMuMTY4IDE2LjM4NzEgMTYyLjMxNiAxNi4zOTU4IDE2MS40NjUgMTYuNDA3OVpNMTUxLjI0NCAxMS4yODNDMTUxLjY3MiAxMi4xNjU0IDE1Mi4wOTcgMTMuMDQ5IDE1Mi41MjUgMTMuOTMxNEMxNTIuMSAxMy45Mzc1IDE1MS42NzUgMTMuOTQ3IDE1MS4yNSAxMy45NDdDMTUxLjI0NyAxMy4wNTkgMTUxLjI0NCAxMi4xNzEgMTUxLjI0NCAxMS4yODNaTTEzOS43MzggMTIuMjIwNUMxMzkuNzQgMTMuMDYzOSAxMzkuMTM3IDEzLjA2NzcgMTM5LjEzNyAxMi4yMjgzQzEzOS4xMzQgMTEuMzgyOSAxMzkuNzM4IDExLjM4MDQgMTM5LjczOCAxMi4yMjA1Wk01OS45NzQ2IDEyLjkwMDJDNjAuMDQxMyAxNy4zOTMyIDU3LjYxNjUgMTUuMzgxOSA1Ni4xNTA0IDE1LjYxODlDNTYuNjkyNSAxNC4yODUxIDU3LjIzMTMgMTIuOTQ2NiA1Ny43NzM0IDExLjYxODlDNTguNTA3OSAxMi4wNDUzIDU5LjI0MDEgMTIuNDczOCA1OS45NzQ2IDEyLjkwMDJaTTc5Ljc3MTUgMTcuOTM5MkM4MC4yMjYyIDE2LjEyNDIgODAuNTM1NCAxNC42NzY3IDgwLjM5ODQgMTIuNTg3N0M4MC42MTA3IDEyLjU4NzcgODAuODIyOSAxMi41Nzk5IDgxLjAzNTIgMTIuNTc5OUM4MS4wNDEgMTQuMzU3NSA4MS4wNDQgMTYuMTM4MSA4MS4wNDY5IDE3LjkxNTdDODAuNjIxNyAxNy45MjE4IDgwLjE5NjYgMTcuOTMzMSA3OS43NzE1IDE3LjkzOTJaTTE1Ni45NzUgMTMuMjEyN0MxNTYuOTc4IDE0LjA1MzEgMTU2LjM3NCAxNC4wNjEgMTU2LjM3MSAxMy4yMjA1QzE1Ni4zNjkgMTIuMzgyOSAxNTYuOTczIDEyLjM3NjMgMTU2Ljk3NSAxMy4yMTI3Wk0xNDguNjc2IDEzLjQwOEMxNDguNjc5IDE0LjI0ODUgMTQ4LjA3MiAxNC4yNTYzIDE0OC4wNzIgMTMuNDE1OEMxNDguMDcgMTIuNTc3NyAxNDguNjc0IDEyLjU3MSAxNDguNjc2IDEzLjQwOFpNMTkwLjE4IDEzLjA2NDJDMTkxLjI0NiAxMy45MzUgMTkyLjMxIDE0LjgxMDYgMTkzLjM3NyAxNS42ODE0QzE5Mi4zMTMgMTYuMTQ0MiAxOTEuMjUxIDE2LjYwNzQgMTkwLjE4OCAxNy4wNjQyQzE5MC4xODUgMTUuNzMwOSAxOTAuMTggMTQuMzk3NSAxOTAuMTggMTMuMDY0MlpNMjIuMDM5IDMwLjY4MTJDMjIuNjMyNiAzMC41MDM3IDIyLjEwOTEgMjguNjY0MiAyMi43MTY4IDI4LjA0ODRDMjMuMDg2OSAyNy42NzY5IDIzLjU0ODMgMjYuODYxIDI0LjAyMzQgMjYuODA2MkMyNS4zMjA1IDI2LjY1NCAyNS43NDM3IDI5LjA4ODYgMjYuODEwNSAyNS45NzAzQzI2LjM5MzggMjUuNzYzMiAyNS45Njc1IDI1LjUxNiAyNS41NDQ5IDI1LjI5MDZDMjUuNTM5IDIyLjY0MjggMjUuNTM3MSAyMC4wMDEgMjUuNTMxMiAxNy4zNTMyQzI1Ljk1MDcgMTcuMTE1OSAyNi4zNzM1IDE2Ljg3OTcgMjYuNzkzIDE2LjY0MjNDMjYuMDE3NyAxNC43MTE5IDI2LjMyMzEgMTIuODQzMiAyNC44NzUgMTMuMzI5OUMyNC44OTU0IDE0LjM1OTEgMjUuNTkxOSAxNC45NDIxIDI1LjIxODcgMTUuOTQ3QzI0LjMwOTggMTguNDA2MyAyMy45ODI5IDE3LjI5MTkgMjMuNDEyMSAyMC43ODI5QzIyLjg4NDUgMjQuMDEwOCAyMC4xMTUzIDI3LjE2MDkgMjIuMDM5IDMwLjY4MTJaTTE3OS45NzEgMTMuNDAwMkMxODAuNjgyIDEzLjk1NDQgMTgxLjA2OCAxNC45NTggMTgxLjg4MSAxNC43MjA1QzE4MS44ODcgMTYuNDkyOCAxODEuODkzIDE4LjI2ODQgMTgxLjg5OCAyMC4wNDA3QzE4MS40NzMgMjAuMDQ2OCAxODEuMDUgMjAuMDUwMiAxODAuNjI1IDIwLjA1NjNDMTgwLjQwNiAxNy44Mzk0IDE4MC4xODkgMTUuNjE3MSAxNzkuOTcxIDEzLjQwMDJaTTE3Ni43NzcgMTMuNDYyN0MxNzYuOTkgMTMuNDU2NiAxNzcuMjAzIDEzLjQ0NyAxNzcuNDE2IDEzLjQ0N0MxNzcuNDYyIDE1LjMzMTggMTc3Ljk2OCAxNi44NzQ1IDE3OC4wNjIgMTguNzQzOEMxNzguMDU3IDE4Ljc0MyAxNzguMDUxIDE4Ljc0NDggMTc4LjA0NSAxOC43NDM4QzE3OC4wNDUgMTguNzUxNiAxNzguMDQ1IDE4Ljc1OTUgMTc4LjA0NSAxOC43NjczQzE3Ny42MjYgMTguNzA3IDE3Ny4yMDggMTguODIyNCAxNzYuNzg5IDE4Ljc5ODVDMTc2Ljc4MyAxNy4wMjExIDE3Ni43OCAxNS4yNDAxIDE3Ni43NzcgMTMuNDYyN1pNNjYuMzQxOCAxNC43OTg2QzY2LjM0NDYgMTUuNjM4OCA2NS43NDA2IDE1LjY0NjIgNjUuNzQwMiAxNC44MDY0QzY1LjczNzQgMTMuOTY2MyA2Ni4zNDEyIDEzLjk1OTIgNjYuMzQxOCAxNC43OTg2Wk02MC43MjY2IDE4LjE5N0M2MC4wNzE0IDE3LjAyODcgNjEuNDg5OSAxMy43Mjc5IDYxLjc4OTEgMTQuMjQzOUM2Mi40NDQ2IDE1LjQwNjcgNjEuMDI0NyAxOC43MTc1IDYwLjcyNjYgMTguMTk3Wk0yNy40MjE5IDE0LjYzNDVDMjcuMzc1MiAxNy4zMTQzIDI4LjA3MiAxOC42OTE5IDI5LjM0NTcgMTguNjE4OEMyOC43MDQ0IDE3LjI5MTEgMjguMDYzMSAxNS45NjIyIDI3LjQyMTkgMTQuNjM0NVpNMTU5LjU0NyAxNS4wOTU1QzE1OS45NzIgMTUuMDk1NSAxNjAuMzk5IDE1LjA3OTggMTYwLjgyNCAxNS4wNzk4QzE2MC44MjcgMTUuNTI0NCAxNjAuODI4IDE1Ljk3MTEgMTYwLjgyOCAxNi40MTU3QzE2MC40MDMgMTYuNDE1NyAxNTkuOTc2IDE2LjQyMzYgMTU5LjU1MSAxNi40MjM2QzE1OS41NDggMTUuOTgwOSAxNTkuNTQ3IDE1LjUzODIgMTU5LjU0NyAxNS4wOTU1Wk0xNTEuMjM0IDE1Ljk0N0MxNTEuMjM3IDE2Ljc4NzUgMTUwLjYzMSAxNi43OTUzIDE1MC42MzEgMTUuOTU0OEMxNTAuNjI5IDE1LjExNzYgMTUxLjIzMyAxNS4xMTEgMTUxLjIzNCAxNS45NDdaTTE0NS41MSAxNS40NTQ4QzE0Ni4zNjEgMTUuNDQyNiAxNDcuMjEzIDE1LjQyNzkgMTQ4LjA2NCAxNS40MTU4QzE0OC4wNjQgMTUuODYxMSAxNDguMDY0IDE2LjMwNjQgMTQ4LjA2NCAxNi43NTE3QzE0Ny4yMTMgMTYuNzYzOSAxNDYuMzYxIDE2Ljc3ODYgMTQ1LjUxIDE2Ljc5MDdDMTQ1LjUxIDE2LjM0NTQgMTQ1LjUxIDE1LjkwMDEgMTQ1LjUxIDE1LjQ1NDhaTTIwNS41MDQgMTUuNDQ3QzIwNi41OTQgMTYuODc4MSAyMDcuMTU0IDE2LjM3NzggMjA4LjI5NyAxNS40NzA0QzIwOS4yODIgMTYuNTQ4NCAyMTAuMjcxIDE3LjYxMTEgMjExLjI1NiAxOC42ODkxQzIwOS41OTQgMjIuMDI2NyAyMDguMDE3IDE4LjQ2MDcgMjA2LjE1NCAyMC43NzUxQzIwNS45MzYgMTguOTk2NyAyMDUuNzIzIDE3LjIyNTMgMjA1LjUwNCAxNS40NDdaTTIwMS42NzIgMTUuNTE3M0MyMDIuMDk3IDE1LjUxMTIgMjAyLjUyNCAxNS41MDE3IDIwMi45NDkgMTUuNTAxN0MyMDIuOTUyIDE1Ljk0NTcgMjAyLjk1MSAxNi4zOTM2IDIwMi45NTEgMTYuODM3NkMyMDIuNTI2IDE2Ljg0MzcgMjAyLjA5OSAxNi44NTMyIDIwMS42NzQgMTYuODUzMkMyMDEuNjcxIDE2LjQwODYgMjAxLjY3MiAxNS45NjE5IDIwMS42NzIgMTUuNTE3M1pNMTMwLjgzOCAxOS43MzZDMTMyLjExMSAxOS43NzIyIDEzMi44MDIgMTguMzc1MSAxMzIuNzQ0IDE1LjY5N0MxMzEuNDcgMTUuNjYwNSAxMzAuNzggMTcuMDU2MiAxMzAuODM4IDE5LjczNlpNMTIwLjYzMyAyNS4yNTk0QzExOS44MzUgMjUuMjEwNCAxMTkuNjQ1IDIzLjE5MzcgMTE5LjM1NCAyMS45MzkxQzExOC44NTggMTkuODA3NSAxMTguNTA4IDE4LjM2NjYgMTE4LjY5NyAxNS45NTQ4QzExOC42OTkgMTUuOTU3NCAxMTguNyAxNS45NiAxMTguNzAxIDE1Ljk2MjZDMTIwLjM0MSAxNS40ODIxIDExOS43NjUgMTYuOTI1NCAxMTkuOTg2IDE5LjI1MTZDMTIwLjIwOCAyMS41NzA3IDEyMC44MjQgMjIuODY4IDEyMC42MzMgMjUuMjU5NFpNMjE3LjYzOSAyMC40MzkxQzIxOC40ODcgMTkuMDkwMiAyMTkuMzM1IDE3Ljc0MTIgMjIwLjE4NCAxNi4zOTIzQzIxOS43NjEgMTguMTc2OCAyMTkuMzQxIDE5Ljk2ODggMjE4LjkxOCAyMS43NTk0QzIxOC40OTMgMjEuMzE1IDIxOC4wNjQgMjAuODc3NCAyMTcuNjM5IDIwLjQzOTFaTTE1Ni4zNDQgMTcuMjIwNEMxNTYuMzQ3IDE4LjA2MDkgMTU1Ljc0IDE4LjA2ODcgMTU1Ljc0IDE3LjIyODJDMTU1LjczOCAxNi4zOTA0IDE1Ni4zNDIgMTYuMzgzNyAxNTYuMzQ0IDE3LjIyMDRaTTY1LjA4NTkgMTYuODIyQzY1LjUxMTUgMTYuODE1OSA2NS45Mzc3IDE2LjgwNjQgNjYuMzYzMyAxNi44MDY0QzY2LjM2NjIgMTcuNjk0NCA2Ni4zNjkxIDE4LjU4MjQgNjYuMzY5MSAxOS40NzA0QzY1Ljk0MzYgMTkuNDc2NSA2NS41MTczIDE5LjQ4NiA2NS4wOTE4IDE5LjQ4NkM2NS4wODg5IDE4LjU5OCA2NS4wODU5IDE3LjcxIDY1LjA4NTkgMTYuODIyWk0xOTguNDkyIDE4LjkzMTNDMTk4LjkxNSAxOC4yNTUzIDE5OS4zNDEgMTcuNTc2MSAxOTkuNzY0IDE2LjkwMDFDMTk5Ljc2NyAxOC4yMzMyIDE5OS43NzEgMTkuNTY3IDE5OS43NzEgMjAuOTAwMUMxOTkuNjY3IDIwLjkwNjEgMTk5LjU1OCAyMC45MDc5IDE5OS40NTMgMjAuOTA3OUMxOTkuMTMzIDIwLjI1MDggMTk4LjgxMiAxOS41ODg0IDE5OC40OTIgMTguOTMxM1pNMTM1LjkzOCAxNi45NzA0QzEzNi4xNSAxNi45NjQzIDEzNi4zNjQgMTYuOTYyNiAxMzYuNTc2IDE2Ljk2MjZDMTM2LjU3OSAxNy44NTA2IDEzNi41ODIgMTguNzM4NiAxMzYuNTgyIDE5LjYyNjZDMTM2LjM2OSAxOS42MzI3IDEzNi4xNTYgMTkuNjQyMyAxMzUuOTQzIDE5LjY0MjNDMTM1Ljk0IDE4Ljc1MzEgMTM1LjkzNyAxNy44NTk2IDEzNS45MzggMTYuOTcwNFpNMTEuNDU1IDE4LjE1MDFDMTEuNDU0OCAxOC45ODkxIDEwLjg1MjcgMTguOTk1NyAxMC44NTE1IDE4LjE1NzlDMTAuODQ4NyAxNy4zMTc0IDExLjQ1NSAxNy4zMDk2IDExLjQ1NSAxOC4xNTAxWk0yMjAuODI4IDE3LjcxMjZDMjIxLjQ2OSAxOS4wMzM4IDIyMi4xMTEgMjAuMzUyMiAyMjIuNzUyIDIxLjY3MzVDMjIyLjExNCAyMS42ODU3IDIyMS40NzQgMjEuNzAwNCAyMjAuODM2IDIxLjcxMjVDMjIwLjgzMyAyMC4zNzkzIDIyMC44MzQgMTkuMDQ1OCAyMjAuODI4IDE3LjcxMjZaTTg2LjgxMDUgMTguNDkzOEM4Ni44MTA1IDE5LjMzMzggODcuNDE2MSAxOS4zMjQ4IDg3LjQxNDEgMTguNDg2Qzg3LjQxNDEgMTcuNjQ2NCA4Ni44MDg5IDE3LjY1IDg2LjgxMDUgMTguNDkzOFpNMTUzLjE1NiAxOC42MDMyQzE1My4xNTggMTkuNDQwNiAxNTIuNTU2IDE5LjQ0MjYgMTUyLjU1MyAxOC42MDMyQzE1Mi41NTEgMTcuNzY1NyAxNTMuMTU2IDE3Ljc2MzcgMTUzLjE1NiAxOC42MDMyWk0xNDguNjg4IDE4LjczNkMxNDguNjg5IDE5LjU3NDYgMTQ4LjA4NyAxOS41ODM3IDE0OC4wODQgMTguNzQzOEMxNDguMDgyIDE3LjkwNTcgMTQ4LjY4OCAxNy44OTYzIDE0OC42ODggMTguNzM2Wk0xNDEuMDQ1IDE4LjIwNDhDMTQxLjI1OCAxOC4xOTg3IDE0MS40NzEgMTguMTg5MiAxNDEuNjg0IDE4LjE4OTJDMTQxLjY4NiAxOS4wNzg0IDE0MS42ODkgMTkuOTcxOCAxNDEuNjg5IDIwLjg2MUMxNDEuNDc3IDIwLjg2NzEgMTQxLjI2NCAyMC44Njg4IDE0MS4wNTEgMjAuODY4OEMxNDEuMDQ4IDE5Ljk4MDggMTQxLjA0NSAxOS4wOTI4IDE0MS4wNDUgMTguMjA0OFpNMTkzLjM2NyAxOS4wMTczQzE5My4zNjkgMTkuODU0NyAxOTIuNzY0IDE5Ljg2NDUgMTkyLjc2NCAxOS4wMjUxQzE5Mi43NjEgMTguMTc5OSAxOTMuMzY0IDE4LjE3NzIgMTkzLjM2NyAxOS4wMTczWk0xOTAuODE0IDE5LjA1NjNDMTkwLjgxNyAxOS44OTY0IDE5MC4yMTEgMTkuOTAzNCAxOTAuMjExIDE5LjA2NDFDMTkwLjIwOCAxOC4yMjM4IDE5MC44MTQgMTguMjE2NCAxOTAuODE0IDE5LjA1NjNaTTExNy4zMzYgMjIuNjExQzExNy4wNDEgMjMuMTM5NyAxMTUuNjA5IDE5Ljg3MTIgMTE2LjI1OCAxOC42ODkxQzExNi41NTIgMTguMTU5MyAxMTcuOTg5IDIxLjQyOTQgMTE3LjMzNiAyMi42MTFaTTE3Mi45NjcgMjEuNTQwN0MxNzIuOTY3IDIwLjY1MjYgMTcyLjk2NCAxOS43NjQ3IDE3Mi45NjEgMTguODc2NkMxNzIuNTM2IDE4Ljg4MjcgMTcyLjExMSAxOC44OTQgMTcxLjY4NiAxOC45MDAxQzE3MS42ODYgMTkuNzg4MSAxNzEuNjg5IDIwLjY3NjEgMTcxLjY5MSAyMS41NjQxQzE3Mi4xMTcgMjEuNTU4IDE3Mi41NDIgMjEuNTQ2OCAxNzIuOTY3IDIxLjU0MDdaTTE2Ni41OTYgMTkuNjY1N0MxNjYuNTk2IDIwLjUwNjIgMTY3LjIwMiAyMC40OTA1IDE2Ny4xOTkgMTkuNjUwMUMxNjcuMTk3IDE4LjgxMzMgMTY2LjU5MyAxOC44MjY2IDE2Ni41OTYgMTkuNjY1N1pNNTMuNjExMyAyMi45OTM4QzUzLjA3NSAyMy41OTY3IDUyLjIzNzQgMjIuNjMzMyA1MS42OTUzIDIyLjM1MzJDNTEuNjk4MiAyMS40NjQgNTEuNjg5NSAyMC41NzA1IDUxLjY4OTUgMTkuNjgxM0M1Mi4xMTQ5IDE5LjY3NTIgNTIuNTQxMyAxOS42NjU3IDUyLjk2NjggMTkuNjY1N0M1My4xODE2IDIwLjc3NTEgNTMuMzk2NSAyMS44ODQ0IDUzLjYxMTMgMjIuOTkzOFpNMjgzLjQ1MSAyMC42NzM1QzI4My41NTYgMjAuNDU0NSAyODMuNjY1IDIwLjIyODQgMjgzLjc3IDIwLjAwOTRDMjg0LjA4NyAyMC42NzI5IDI4NC40MDQgMjEuMzQ1OSAyODQuNzI1IDIyLjAwOTRDMjg0LjYyIDIyLjIyODYgMjg0LjUxMSAyMi40NDgyIDI4NC40MDYgMjIuNjczNUMyODQuMDg5IDIyLjAxMDIgMjgzLjc2OSAyMS4zNDI4IDI4My40NTEgMjAuNjczNVpNMTU3LjAxOCAyNS44NzY1QzE1Ni44MDIgMjQuNzY4NiAxNTYuNTg5IDIzLjY2NDIgMTU2LjM3MyAyMi41NTYzQzE1Ni42OTEgMjEuODg2NSAxNTcuMDA5IDIxLjIxMDQgMTU3LjMyNiAyMC41NDA3QzE1Ny42NDcgMjEuNjQzIDE1Ny45NyAyMi43NTA4IDE1OC4yOTEgMjMuODUzMUMxNTcuODY5IDI0LjUyODQgMTU3LjQ0NCAyNS4yMDEzIDE1Ny4wMjEgMjUuODc2NUMxNTcuMDIgMjUuODc2NSAxNTcuMDE5IDI1Ljg3NjUgMTU3LjAxOCAyNS44NzY1Wk0xOTQuNjY4IDIwLjk5MzhDMTk1LjA5MyAyMS42NTc1IDE5NS41MjIgMjIuMzIwNiAxOTUuOTQ3IDIyLjk3ODFDMTk1LjYzIDIzLjY1NDIgMTk1LjMxMiAyNC4zMjU1IDE5NC45OTQgMjUuMDAxNUMxOTQuODg5IDI1LjAwNzYgMTk0Ljc4MSAyNS4wMDk0IDE5NC42NzYgMjUuMDA5NEMxOTQuNjczIDIzLjY2OTUgMTk0LjY2OCAyMi4zMzM2IDE5NC42NjggMjAuOTkzOFpNMjczLjIxNyAyMi4wMDk0QzI3My4yMTcgMjIuODQ5OSAyNzIuNjEzIDIyLjg0OTkgMjcyLjYxMyAyMi4wMDk0QzI3Mi42MTQgMjEuMTcwNyAyNzMuMjE2IDIxLjE3MDcgMjczLjIxNyAyMi4wMDk0Wk0yMTAuMDEyIDI5LjM0NTJDMjEwLjY0OSAyOC4zNDA4IDIxMC40OTcgMjcuNzE0NSAyMTAuMDAyIDI2LjcyODFDMjA5LjA1NSAyNC44NTM0IDIwNy45MzYgMjUuMjA2MiAyMDguMDcgMjIuMDY0MUMyMDkuMTM0IDIyLjUwMjQgMjEwLjE5NCAyMi45MjA5IDIxMS4yNTggMjMuMzUzMUMyMTEuMjY0IDI1LjU2OTUgMjExLjI3MyAyNy43ODM0IDIxMS4yNzkgMjkuOTkzN0MyMTAuODU3IDI5Ljc3NDUgMjEwLjQzNCAyOS41NzY1IDIxMC4wMTIgMjkuMzQ1MlpNMjAuNDM3NSAzMC43MjhDMjAuMDAwMyAyOC41MjMzIDE5LjU2MDIgMjYuMzE1NyAxOS4xMjMgMjQuMTEwOUMxNy44NTI2IDIzLjQ0MTIgMTYuNTgyIDIyLjc4MDcgMTUuMzE0NCAyMi4xMTFDMTcuMDI3NiAyNi43MzI3IDE3LjE5MTYgMzEuMjU3IDIwLjQzNzUgMzAuNzI4Wk0xMzkuNzc3IDIyLjIyODJDMTQwLjIwMyAyMi4yMjIxIDE0MC42MjkgMjIuMjEwOCAxNDEuMDU1IDIyLjIwNDdDMTQxLjA1NSAyMi4yMDIxIDE0MS4wNTYgMjIuMTk5NSAxNDEuMDU3IDIyLjE5NjlDMTQxLjA1NyAyMi42NDIyIDE0MS4wNTcgMjMuMDg3NSAxNDEuMDU3IDIzLjUzMjhDMTQwLjYzMSAyMy41NDUgMTQwLjIwNSAyMy41NTE5IDEzOS43NzkgMjMuNTY0MUMxMzkuNzc2IDIzLjExOTUgMTM5Ljc3NyAyMi42NzI4IDEzOS43NzcgMjIuMjI4MlpNMTk1LjMyIDI5LjAwMTVDMTk1Ljk1NyAyOC45ODg1IDE5Ni41OTQgMjguOTc1NSAxOTcuMjMgMjguOTYyNEMxOTcuMjUgMjcuOTczMSAxOTYuNjY4IDI3LjkzMyAxOTYuNzMgMjYuOTE1NkMxOTYuNzk1IDI1Ljg5MjQgMTk3LjQ1MiAyNS4wNTg2IDE5Ny4yMyAyMy42NTc4QzE5OC4xOTIgMjMuMTU4NiAxOTkuMTI3IDIyLjY5MTggMjAwLjA4IDIyLjIwNDdDMjAwLjYxOSAyMy43NTc2IDIwMS4xNjIgMjUuMzE1OCAyMDEuNzAxIDI2Ljg2ODdDMjAxLjgzNSAyOS40NjkzIDIwMS4zMjcgMjguNTU3MSAyMDAuNDMgMjguODkyMUMyMDAuMzIyIDI4LjQ0ODMgMjAwLjIxNSAyOC4wMDc4IDIwMC4xMDcgMjcuNTY0QzE5OS4zNyAyNy4xMzc3IDE5OC42MjggMjYuNzA5MSAxOTcuODkxIDI2LjI4MjhDMTk3LjY3IDI3LjE4MTcgMTk3LjQ2MyAyOC4wNTE0IDE5Ny4yMyAyOC45NjI0QzE5Ny4yMzIgMjguOTYyNCAxOTcuMjM0IDI4Ljk2MjQgMTk3LjIzNiAyOC45NjI0QzE5Ny4xNTggMzAuMDYzNSAxOTYuNjM3IDMwLjUzMDMgMTk2LjYwNCAzMS42NDIxQzE5Ni4zOTEgMzEuNjQ4MiAxOTYuMTc4IDMxLjY1NzcgMTk1Ljk2NSAzMS42NTc3QzE5NS43NDkgMzAuNzc0NiAxOTUuNTM2IDI5Ljg4NDYgMTk1LjMyIDI5LjAwMTVaTTEwMi43NjIgMjQuMjQzOEMxMDIuNzYyIDIzLjgwMTEgMTAyLjc2MiAyMy4zNTg0IDEwMi43NjIgMjIuOTE1NkMxMDIuMzM3IDIyLjkyMTcgMTAxLjkxMSAyMi45MjUyIDEwMS40ODYgMjIuOTMxM0MxMDEuNDg2IDIzLjM3NjYgMTAxLjQ4NiAyMy44MjE5IDEwMS40ODYgMjQuMjY3MkMxMDEuOTExIDI0LjI2MTEgMTAyLjMzNyAyNC4yNDk4IDEwMi43NjIgMjQuMjQzOFpNMTc4LjcyNSAyNi43NTE1QzE3OC43MjUgMjUuODY0MSAxNzguNzIyIDI0Ljk4MjcgMTc4LjcxOSAyNC4wOTUzQzE3OC4wODQgMjMuODUxOCAxNzYuNjMyIDI1LjAxMzEgMTc2LjgwOSAyNi43OTA2QzE3Ny40NDcgMjYuNzc4NCAxNzguMDg2IDI2Ljc2MzcgMTc4LjcyNSAyNi43NTE1Wk0xNzAuMTY0IDU2LjI2NjdDMTcwLjYxMyA1NS4zODk0IDE3MC42MzYgNTIuOTc2NCAxNzEuMTg0IDUyLjQ0NjVDMTcxLjczMiA1MS45MTY2IDE3Mi42MzIgNTUuMTgyIDE3Mi4zNzUgNTEuNjQ5NkMxNzIuMzc1IDUxLjY0NDQgMTcyLjM3NSA1MS42MzkyIDE3Mi4zNzUgNTEuNjM0QzE3Mi4xMTggNDguMTAzNSAxNzEuNDcgNDkuNzggMTcwLjUzNyA0OC4wMDlDMTcwLjEwOSA0Ny4xOTkzIDE3MC43NjMgNDQuMzg3NyAxNjkuODMyIDQzLjY0OTdDMTcwLjQ3OSA0Mi44NzA2IDE3MS4wOTEgNDIuMjUyNiAxNzEuNzI3IDQxLjU0MDRDMTcxLjkxOSAzOS4wOTkxIDE3Mi4xMDcgMzYuNjUzNiAxNzIuMzAzIDM0LjIxMjRDMTcwLjk0OCAzMS4zMzgyIDE2OS45OTcgMjguMDQ4NiAxNjcuODc5IDI4LjMyMThDMTY3Ljk5NiAyNy42MDkyIDE2OC42NDcgMjYuMzQyNSAxNjguNTEgMjUuNjQyMkMxNjcuNjU5IDI2LjEwNDggMTY2LjgxMiAyNi41NzAyIDE2NS45NjEgMjcuMDMyOEMxNjUuOTYxIDI2LjE0MzYgMTY1Ljk1OCAyNS4yNTAxIDE2NS45NTUgMjQuMzYwOUMxNjQuODkxIDI0LjM4NTMgMTYzLjgyNyAyNC40MDY5IDE2Mi43NjQgMjQuNDMxM0MxNjIuNzY0IDI0Ljg3MzkgMTYyLjc2MyAyNS4zMTY3IDE2Mi43NjYgMjUuNzU5NEMxNjMuODMgMjYuMTc5NiAxNjQuODk3IDI2LjYxMjUgMTY1Ljk2MSAyNy4wMzI4QzE2NS45NjQgMjcuOTIwOCAxNjUuOTY3IDI4LjgwODggMTY1Ljk2NyAyOS42OTY4QzE2Ni43OTQgMjkuOTQ1NyAxNjcuMTU2IDI4Ljg2MzcgMTY3Ljg3OSAyOC4zMjE4QzE2Ny43MyAzMC42NTQgMTY3Ljk2OSAzMi4xMzAxIDE2OC44NSAzMy42MzQyQzE2OS4zOCAzMy40MDI5IDE2OS45MTMgMzMuMTcwMiAxNzAuNDQzIDMyLjkzODlDMTY5LjM4MiAzMy42MjcxIDE2OC4zMTkgMzQuMzIxMSAxNjcuMjU4IDM1LjAwOTJDMTY3LjY5MiAzNi43NzQ2IDE2OC4xMDggMzguNTU0NSAxNjguNTUxIDQwLjMxMzhDMTY3LjQ1NiA0MC4xOTA4IDE2Ny45MjggMzcuMjc1OSAxNjYuODYxIDM2LjQyMzNDMTY2LjI5MyAzNS45NjY1IDE2NS4wNzcgMzYuMzYzMyAxNjQuMzk1IDM2LjM5OThDMTYzLjcxMyAzNi40MzYxIDE2My4zNTcgMzYuMDU2MyAxNjMuNDMgMzcuNzU5MkMxNjUuNDc2IDM3LjUyMTYgMTY0LjQwNyA0Mi4zMjMxIDE2NS4zNTcgNDUuMDYzOEMxNjQuNzIyIDQ1LjI5NTIgMTY0LjA4MyA0NS41MzU0IDE2My40NDcgNDUuNzY2OUMxNjMuNjY4IDQ3LjA4MSAxNjMuODg4IDQ4LjM5OCAxNjQuMTA5IDQ5LjcxMjFDMTY0Ljg1IDUwLjEyMDIgMTY1LjU5MSA1MC41MjI4IDE2Ni4zMzQgNTAuOTMwOUMxNjcuMTY3IDQ5LjM3ODcgMTY3Ljk1NCA0OC4xOTMgMTY3LjkxNiA0NS42NzMxQzE2OC4zNDEgNDUuODg2MiAxNjguNzY3IDQ2LjEwMDYgMTY5LjE5NSA0Ni4zMTM3QzE2OS4wNDkgNDguODE1IDE2Ny44NDcgNDkuNjcwNCAxNjcuOTMyIDUyLjMzNzFDMTY5LjM5NCA1MS45IDE2OS4yODEgNTQuNTMxMyAxNzAuMTY0IDU2LjI2NjdaTTY0Ljc5NDkgMjguODI5NkM2NS40NDcyIDI3LjYxMjYgNjUuODYxOCAyNi43MzczIDY1Ljc0NjEgMjQuODIxOUM2NS4xMDc3IDI0LjgzNCA2NC40Njg0IDI0LjgzMzEgNjMuODMwMSAyNC44NDUzQzYzLjcxOTMgMjYuNzY5NiA2NC4xMzY0IDI3LjYzMDEgNjQuNzk0OSAyOC44Mjk2Wk0xNzYuMTc2IDI5LjQ2MjRDMTc2LjE3NiAyOC4xMzQ4IDE3Ni4xNzEgMjYuNzk3OSAxNzYuMTY4IDI1LjQ3MDNDMTc1Ljc0MiAyNS40NzY0IDE3NS4zMTYgMjUuNDg3NiAxNzQuODkxIDI1LjQ5MzdDMTc0Ljg5MSAyNi44MjYyIDE3NC44OTcgMjguMTUzNCAxNzQuOSAyOS40ODU5QzE3NS4zMjYgMjkuNDczNyAxNzUuNzUxIDI5LjQ3NDYgMTc2LjE3NiAyOS40NjI0Wk0xMDAuODU5IDI5LjYxMDlDMTAwLjMyNiAyOC4zMDE0IDk5Ljc4OTMgMjYuOTg4OSA5OS4yNTU5IDI1LjY3MzRDOTguNzI1NSAyNi4xMTE4IDk4LjE5NTMgMjYuNTU1MyA5Ny42NjIxIDI2Ljk5MzdDOTguMTk1NCAyOC4zMDI5IDk4LjczMjMgMjkuNjA4MSA5OS4yNjU2IDMwLjkyMzNDOTkuNzk1OCAzMC40ODUxIDEwMC4zMjYgMzAuMDQ5MSAxMDAuODU5IDI5LjYxMDlaTTgzLjI5ODggMjUuODkyMkM4My40MDM3IDI2LjMzNjQgODMuNTEzNCAyNi43NzYgODMuNjIxMSAyNy4yMjAzQzgzLjQwODQgMjcuMjI2NCA4My4xOTUxIDI3LjIyODEgODIuOTgyNCAyNy4yMjgxQzgzLjA4NzMgMjYuNzc3NCA4My4xOTM5IDI2LjMzNjggODMuMjk4OCAyNS44OTIyWk02My4xOTczIDI4Ljg2MDlDNjMuMTk3MiAyNy45NzI4IDYzLjE5NDMgMjcuMDg0OSA2My4xOTE0IDI2LjE5NjhDNjEuOTY0NiAyNS45ODM4IDYxLjExMDggMjYuMzMwMSA2MC42NDQ1IDI4Ljg5OTlDNjEuNDk1NCAyOC44ODc3IDYyLjM0NjMgMjguODczIDYzLjE5NzMgMjguODYwOVpNMjA3LjQ2MSAzNC4wNzk1QzIwNy40NzggMzEuOTI5NyAyMDcuMjU0IDI5LjM4MzUgMjA2Ljc5NyAyNy40NDY4QzIwNi4xNjEgMjcuMjI3NiAyMDUuNTI4IDI3LjAxNzcgMjA0Ljg5MyAyNi43OTg0QzIwNS43NSAyOS4yMjI0IDIwNi42MDQgMzEuNjU1NiAyMDcuNDYxIDM0LjA3OTVaTTI4MC41MjUgMjkuNTA5M0MyODAuMjA1IDI4Ljg1MTUgMjc5Ljg4MyAyOC4xODg4IDI3OS41NjIgMjcuNTI0OUMyNzkuNTYyIDI3LjMwMzYgMjc5LjU2MiAyNy4wODIzIDI3OS41NjIgMjYuODYwOUMyODAuMjAxIDI2Ljg1NDggMjgwLjg0IDI2Ljg0MzYgMjgxLjQ3OSAyNi44Mzc1QzI4MS4xNjEgMjcuNzMyNyAyODAuODQ1IDI4LjYyMTggMjgwLjUyNyAyOS41MTcxQzI4MC41MjcgMjkuNTE0NSAyODAuNTI2IDI5LjUxMTkgMjgwLjUyNSAyOS41MDkzWk0xNjMuNDEgMjkuNzQzN0MxNjMuNDEgMjguODU1NyAxNjMuNDA3IDI3Ljk2NzcgMTYzLjQwNCAyNy4wNzk2QzE2Mi45NzkgMjcuMDg1NyAxNjIuNTUzIDI3LjA5ODcgMTYyLjEyNyAyNy4xMTA5QzE2Mi40NDcgMjcuOTkzNyAxNjIuNzY4IDI4Ljg3NDcgMTYzLjA5MiAyOS43NTE1QzE2My4xOTcgMjkuNzUxNSAxNjMuMzA1IDI5Ljc0OTggMTYzLjQxIDI5Ljc0MzdaTTc5LjE1MjMgMjcuMjgyOEM3OC41MTQzIDI3LjI5NDkgNzcuODc2MyAyNy4zMDE4IDc3LjIzODMgMjcuMzE0Qzc3LjIzODMgMjcuNTM1NCA3Ny4yMzgzIDI3Ljc1NjcgNzcuMjM4MyAyNy45NzgxQzc3LjU1ODYgMjguNjQxMyA3Ny44Nzg5IDI5LjI5OTEgNzguMTk5MiAyOS45NjI0Qzc4LjUxNjggMjkuMDY3MyA3OC44MzQ3IDI4LjE3MTggNzkuMTUyMyAyNy4yODI4Wk0yOTguNzEzIDI3LjY5NjhDMjk5LjEzOCAyNy42OTA3IDI5OS41NjUgMjcuNjc3OCAyOTkuOTkgMjcuNjY1NkMyOTkuOTkzIDI4LjEwOTggMjk5Ljk5MiAyOC41NTcyIDI5OS45OTIgMjkuMDAxNUMyOTkuNTY3IDI5LjAwNzYgMjk5LjE0IDI5LjAyMDYgMjk4LjcxNSAyOS4wMzI3QzI5OC43MTIgMjguNTg4MiAyOTguNzEzIDI4LjE0MTMgMjk4LjcxMyAyNy42OTY4Wk0xOTAuMjE3IDI5LjExODdDMTkwLjIxNCAyOC42NzQ1IDE5MC4yMTUgMjguMjE5MSAxOTAuMjE1IDI3Ljc3NDlDMTkxLjA2NiAyNy43NTY3IDE5MS45MTcgMjcuNzM4NSAxOTIuNzY4IDI3LjcyMDNDMTkyLjc2OCAyOC42MTU2IDE5Mi43NzEgMjkuNTEwNyAxOTIuNzczIDMwLjM5OTlDMTkxLjkxOSAyOS45NzM2IDE5MS4wNjggMjkuNTQ1IDE5MC4yMTcgMjkuMTE4N1pNMjkzLjYwNSAyOC41MDE1QzI5My45MjYgMjguMjcwMSAyOTQuMjQ1IDI4LjAzNzYgMjk0LjU2MiAyNy44MDYyQzI5NC41NzMgMjcuODM0NCAyOTQuNTg2IDI3Ljg2MzkgMjk0LjU5OCAyNy44OTIxQzI5NC41OTIgMjcuODk3MyAyOTQuNTg2IDI3LjkwMjYgMjk0LjU4IDI3LjkwNzhDMjk0LjI1NyAyOC4xMDQ2IDI5My45MzIgMjguMzA0NiAyOTMuNjA5IDI4LjUwMTVDMjkzLjYwOCAyOC41MDE1IDI5My42MDcgMjguNTAxNSAyOTMuNjA1IDI4LjUwMTVaTTI0MS4yOTMgMjguNTY0QzI0MS4yOTMgMjkuNDAzNiAyNDEuODk2IDI5LjM4NjMgMjQxLjg5NSAyOC41NDg0QzI0MS44OTQgMjcuNzA3OSAyNDEuMjkgMjcuNzIzNSAyNDEuMjkzIDI4LjU2NFpNMzAuMDA3OCAyOS45NjI0QzI5LjU4MjMgMjkuMjk4NyAyOS4xNTQgMjguNjMzOSAyOC43Mjg1IDI3Ljk3MDNDMjguNzMxMSAyOS4zMDM2IDI4LjczMzcgMzAuNjM2OSAyOC43MzYzIDMxLjk3MDJDMjguODQyNCAzMS45NzAyIDI4Ljk0ODUgMzEuOTcwMiAyOS4wNTQ3IDMxLjk3MDJDMjkuMzcyMyAzMS4zMDA0IDI5LjY5MDIgMzAuNjMyMiAzMC4wMDc4IDI5Ljk2MjRaTTExMi4zNjMgMjguNzQzN0MxMTIuMzY1IDI5LjU4MTEgMTEyLjk3IDI5LjU2NzUgMTEyLjk2NyAyOC43MjgxQzExMi45NjcgMjcuODg4IDExMi4zNiAyNy45MDMzIDExMi4zNjMgMjguNzQzN1pNMTc3LjQ2OSAyOC43NzQ5QzE3Ny40NzEgMjkuNjExNCAxNzguMDczIDI5LjU5ODEgMTc4LjA3IDI4Ljc1OTNDMTc4LjA3IDI3LjkxODggMTc3LjQ2NiAyNy45MzQ1IDE3Ny40NjkgMjguNzc0OVpNMTcyLjM1IDMwLjg4NDNDMTcyLjM1IDI5Ljk5NjMgMTcyLjM0NyAyOS4xMDgzIDE3Mi4zNDQgMjguMjIwM0MxNzIuMTMxIDI4LjIyMDMgMTcxLjkxOCAyOC4yMjgxIDE3MS43MDUgMjguMjI4MUMxNzEuNzA1IDI5LjExNzMgMTcxLjcwOCAzMC4wMTA3IDE3MS43MTEgMzAuODk5OUMxNzEuOTI0IDMwLjg5OTkgMTcyLjEzNyAzMC44ODQzIDE3Mi4zNSAzMC44ODQzWk0xMTMuNjM1IDQ0LjA3OTRDMTE0LjA4OSA0Mi4wMzk4IDExNC40ODcgNDAuMTEzIDExNC45MDYgMzguMDc5NUMxMTQuNTMzIDM2Ljk4MzIgMTEzLjkzNSAzNS4wOTc0IDExMy42NTIgMzQuMTEwOEMxMTMuMTg2IDMyLjQ3MjcgMTEzLjU0NyAzMi4xODAxIDExMy4zMDUgMzAuNzEyNEMxMTIuOTk2IDMyLjUyMDYgMTEyLjY3MyAzNC4yODE4IDExMi4zNTUgMzYuMDcxN0MxMTEuNTEgMzYuMDkgMTEwLjY1MiAzNi4xMDIgMTA5LjgxMiAzNi4xMjY0QzEwOS41MDIgMzIuNTYyNCAxMTEuMjExIDM0LjU1NTUgMTExLjAyIDMxLjM5OTlDMTEwLjk1NSAzMC4zMjE5IDEwOS43MTEgMzAuNjg4MyAxMDkuNDg2IDI5LjQ3MDJDMTA5LjE0MiAzMi4xMTM1IDEwOC44NiAzNC44MzczIDEwOC41MjcgMzcuNDYyM0MxMDcuNDIzIDM4LjE3MzMgMTA3LjA1NiAzNS41NzczIDEwNi4yODcgMzUuMDQwNUMxMDUuMDkyIDM0LjIwNjIgMTA0LjQzMyAzNS4zOTM2IDEwMy40MjIgMzYuMjI3OUMxMDMuNDQ4IDMzLjE3NjcgMTAyLjU2NSAzMS4xMTIyIDEwMy40MSAyOC4yNDM3QzEwMi43NzIgMjguMjU1OSAxMDIuMTMyIDI4LjI2ODkgMTAxLjQ5NCAyOC4yNzQ5QzEwMi4zMDcgMzIuNjQ3NSAxMDIuODM5IDM2Ljg2NzYgMTAyLjgwMSA0MS41ODcyQzEwNC40MzYgNDEuNDY1MiAxMDQuODM3IDM5LjM2ODcgMTA0LjcwMyAzNi4yMjAxQzEwNi40MDIgMzcuNTQ3OCAxMDguNTk4IDQyLjQ0NzIgMTEwLjQ2MSA0MS40NTQ0QzExMC41NTcgNDAuMTI2NyAxMTAuNjc4IDM4Ljc2MzkgMTEwLjc2IDM3LjQ1NDVDMTExLjk0MyAzOC43MDg5IDExMS4zMTIgNDAuNzgwMyAxMTEuODQyIDQyLjY0OTdDMTEyLjA5MiA0My41MzI2IDExMy4yOTMgNDIuOTI5NyAxMTMuNjM1IDQ0LjA3OTRaTTI2OC43MDMgMjkuMjEyNEMyNjguNzA1IDMwLjA1IDI2OC4xMDMgMzAuMDY3MyAyNjguMSAyOS4yMjgxQzI2OC4wOTcgMjguMzg3NiAyNjguNzAzIDI4LjM3MTkgMjY4LjcwMyAyOS4yMTI0Wk0zMTIuMTE3IDI4LjY4OUMzMTIuNTQzIDI4LjY3NjggMzEyLjk2OSAyOC42NjIxIDMxMy4zOTUgMjguNjQ5OUMzMTMuMDc3IDI5LjU0NTIgMzEyLjc2MSAzMC40NDIxIDMxMi40NDMgMzEuMzM3NEMzMTIuNDQzIDMxLjM0IDMxMi40NDIgMzEuMzQyNiAzMTIuNDQxIDMxLjM0NTJDMzEyLjMzNiAzMS4zNTEzIDMxMi4yMjggMzEuMzUzIDMxMi4xMjMgMzEuMzUzQzMxMi4xMjMgMzAuNDY1IDMxMi4xMTcgMjkuNTc3IDMxMi4xMTcgMjguNjg5Wk0xNDUuNTQ1IDMyLjc5ODNDMTQ1LjU5MiAzMC4xMTg1IDE0NC44OTIgMjguNzUwNCAxNDMuNjIxIDI4LjgyOTZDMTQzLjU3NCAzMS41MDkxIDE0NC4yNzEgMzIuODgzMiAxNDUuNTQ1IDMyLjc5ODNaTTEyOC45NjEgMjkuNzc0OUMxMjguOTYxIDMwLjYxNDMgMTI5LjU2NiAzMC42MDQzIDEyOS41NjQgMjkuNzY3MUMxMjkuNTY0IDI4LjkyNyAxMjguOTU5IDI4LjkzNTUgMTI4Ljk2MSAyOS43NzQ5Wk0xODUuMTAyIDMxLjcyOEMxODQuNTQ1IDMzLjEwMjkgMTgyLjk2MyAzMC4xNjYzIDE4My4yMDkgMjkuNTQwNUMxODMuNzY1IDI4LjE2NDggMTg1LjM1IDMxLjEwNDcgMTg1LjEwMiAzMS43MjhaTTMyMS4wMzkgMzAuNDM5QzMyMS4wNDIgMzEuMjc5NCAzMjAuNDM2IDMxLjI5NTEgMzIwLjQzNiAzMC40NTQ2QzMyMC40MzQgMjkuNjE3OSAzMjEuMDM5IDI5LjYwMDYgMzIxLjAzOSAzMC40MzlaTTI2OC4wODggMzEuMjI4QzI2OC44OTggMzEuNDQwOCAyNjkuMjkyIDMwLjQxOTQgMjcwIDI5Ljg1M0MyNzAgMzAuNzM1NyAyNzAuMDA2IDMxLjYyNjYgMjcwLjAwNiAzMi41MDkyQzI2OS4zNjggMzIuNTIxNCAyNjguNzI4IDMyLjUzNzkgMjY4LjA5IDMyLjU1NjFDMjY4LjA4OSAzMi4xMTM0IDI2OC4wODkgMzEuNjcwNyAyNjguMDg4IDMxLjIyOFpNMzU4LjcxMyAzMC4wNDA1QzM1OC45MjYgMzAuMDM0NCAzNTkuMTM5IDMwLjAzMjcgMzU5LjM1MiAzMC4wMzI3QzM1OS4zNTIgMzAuOTIwNyAzNTkuMzU3IDMxLjgxNjYgMzU5LjM1NyAzMi43MDQ2QzM1OS4xNDUgMzIuNzA0NiAzNTguOTMyIDMyLjcyMDIgMzU4LjcxOSAzMi43MjAyQzM1OC43MTkgMzEuODMxIDM1OC43MTMgMzAuOTI5NyAzNTguNzEzIDMwLjA0MDVaTTMwLjY2OTkgMzkuOTU0NUMzMi4yNjkxIDQwLjI3NjUgMzEuOTU5OCAzOC42Mjg2IDMxLjkzOTUgMzUuOTMxMUMzMS43MjY5IDM1LjkwMDggMzEuNTEzMyAzNS45NjMyIDMxLjMwMDggMzUuOTM4OUMzMS4wODUzIDM0LjE2MTYgMzAuODY3OCAzMi4zODgxIDMwLjY1MjMgMzAuNjEwOEMzMC42NTgxIDMzLjcyMjkgMzAuNjYxMiAzNi44MzYzIDMwLjY2OTkgMzkuOTU0NVpNMzIuNTgyIDMxLjI1OTNDMzIuNTgzNiAzMi4wOTU5IDMzLjE4NTcgMzIuMDg5MyAzMy4xODM2IDMxLjI1MTVDMzMuMTgzNSAzMC40MTEgMzIuNTc5MSAzMC40MTg4IDMyLjU4MiAzMS4yNTkzWk0zMDEuMjc3IDMxLjY0MjFDMzAxLjU1NCAzMC41ODI4IDMwMS42MTYgMzAuMDQzNiAzMDEuOTE2IDMxLjYxODZDMzAxLjcwMyAzMS42MjQ3IDMwMS40OSAzMS42NDIxIDMwMS4yNzcgMzEuNjQyMVpNMTE3LjQ3NyAzMS4zMTRDMTE3LjQ3NyAzMi4xNTM5IDExOC4wODIgMzIuMTQ1MiAxMTguMDggMzEuMzA2MUMxMTguMDggMzAuNDY2NiAxMTcuNDc1IDMwLjQ3NjMgMTE3LjQ3NyAzMS4zMTRaTTE4Mi41NDUgMzEuMzI5NkMxODIuNTQ4IDMyLjE2OTUgMTgxLjk0MSAzMi4xNzc3IDE4MS45NDEgMzEuMzM3NEMxODEuOTQgMzAuNTAwNyAxODIuNTQ1IDMwLjQ5MDQgMTgyLjU0NSAzMS4zMjk2Wk02LjQxMjA4IDMxLjU0ODNDNi40MTIxNCAzMi4zODg4IDcuMDE4NDkgMzIuMzgxIDcuMDE1NTkgMzEuNTQwNUM3LjAxNDc3IDMwLjcwMTcgNi40MDkxOCAzMC43MDg0IDYuNDEyMDggMzEuNTQ4M1pNMTYyLjE0MyAzMy43NzQ5QzE2Mi4xNDMgMzIuODg1NyAxNjIuMTQgMzEuOTkyMiAxNjIuMTM3IDMxLjEwM0MxNjEuNzE0IDMxLjk5ODMgMTYxLjI4OCAzMi45MDMgMTYwLjg2NSAzMy43OTgzQzE2MS4yOTEgMzMuNzkyMiAxNjEuNzE3IDMzLjc4MDkgMTYyLjE0MyAzMy43NzQ5Wk04Mi4zNzExIDMxLjkwNzdDODIuMzcxMSAzMi43NDgxIDgyLjk3NzUgMzIuNzMyNSA4Mi45NzQ2IDMxLjg5MjFDODIuOTczIDMxLjA1NSA4Mi4zNjgyIDMxLjA2MjMgODIuMzcxMSAzMS45MDc3Wk04MC40NDczIDM1LjkzODlDODEuMDg1NiAzNi41OTY3IDgxLjcyNjkgMzcuMjU3NyA4Mi4zNjUyIDM3LjkxNTRDODEuOTQyNiAzNy40NzA4IDgxLjUxOTMgMzcuMDIyNCA4MS4wOTk2IDM2LjU3MTdDODEuMDg4IDM1LjI0NDQgODEuMDggMzMuOTIyNSA4MS4wNjg0IDMyLjU5NTJDODAuNTQwOCAzMi4xOTMyIDgwLjAxMjggMzEuNzg2MiA3OS40ODI0IDMxLjM4NDNDNzguNTI4MSAzMi40NzI1IDc3LjU3MzUgMzMuNTYzMyA3Ni42MTkxIDM0LjY1NzdDNzcuMDQzMiAzNS4wNzAzIDc3LjQ3MDUgMzUuNDg3MSA3Ny44OTQ1IDM1Ljg5OThDNzcuODk0NSAzNS41NDczIDc3Ljg5MTYgMzUuMTkxNyA3Ny44ODg3IDM0Ljg0NTJDNzguMzEzOCAzNC41NDcgNzguNzM4OSAzNC4yNTQ0IDc5LjE2NDEgMzMuOTYyNEM3OS41OTI0IDM1LjczNDMgODAuMDIxOSAzNy41MDI4IDgwLjQ1MzEgMzkuMjc0OEM4MC40NTAyIDM4LjE2MSA4MC40NDczIDM3LjA1MjcgODAuNDQ3MyAzNS45Mzg5Wk03MS41MTk1IDMyLjA3MThDNzEuNTE5NiAzMi45MTIyIDcyLjEyNTkgMzIuOTAyNyA3Mi4xMjMgMzIuMDU2MUM3Mi4xMTg0IDMxLjIxMzQgNzEuNTE2NyAzMS4yMjY3IDcxLjUxOTUgMzIuMDcxOFpNMjAyLjk4NiAzMS41MDkzQzIwMy40MTIgMzEuNTY0MSAyMDMuODM4IDMxLjQ2NzYgMjA0LjI2NCAzMS40ODU4QzIwMy44NDEgMzIuMzgxMSAyMDMuNDE1IDMzLjI4NTggMjAyLjk5MiAzNC4xODExQzIwMi45OTIgMzMuMjkxOSAyMDIuOTg2IDMyLjM5ODUgMjAyLjk4NiAzMS41MDkzWk0yNTQuNzA1IDMyLjIyOEMyNTQuNzA3IDMzLjA2NDggMjU1LjMxMSAzMy4wNDM4IDI1NS4zMDkgMzIuMjA0NkMyNTUuMzA4IDMxLjM2NTYgMjU0LjcwMiAzMS4zODggMjU0LjcwNSAzMi4yMjhaTTExNi44MjYgMzQuNjU3N0MxMTYuODI2IDMzLjc2OTYgMTE2LjgyMyAzMi44ODE2IDExNi44MiAzMS45OTM2QzExNi4zOTUgMzEuOTk5NyAxMTUuOTY4IDMyLjAxMSAxMTUuNTQzIDMyLjAxNzFDMTE1LjU0MyAzMi45MDUgMTE1LjU0NiAzMy43OTMyIDExNS41NDkgMzQuNjgxMUMxMTUuOTc0IDM0LjY3NSAxMTYuNDAxIDM0LjY2MzggMTE2LjgyNiAzNC42NTc3Wk0zMzkuNTU1IDMyLjYzNDJDMzM5LjU1NyAzMy40NzE3IDMzOC45NTMgMzMuNDc4MyAzMzguOTUxIDMyLjY0MjFDMzM4Ljk0OCAzMS44MDE2IDMzOS41NTUgMzEuNzkzOCAzMzkuNTU1IDMyLjYzNDJaTTMzMy4xODkgMzIuMTEwOEMzMzMuODI3IDMyLjA5MjYgMzM0LjQ2NSAzMi4wNzQ0IDMzNS4xMDQgMzIuMDU2MUMzMzUuMTA2IDMyLjUwMDIgMzM1LjEwNSAzMi45NDggMzM1LjEwNSAzMy4zOTIxQzMzNC40NjcgMzMuNDEwMyAzMzMuODI5IDMzLjQyMDcgMzMzLjE5MSAzMy40Mzg5QzMzMy4xODkgMzIuOTk2MiAzMzMuMTg5IDMyLjU1MzUgMzMzLjE4OSAzMi4xMTA4Wk0xNzQuMjkzIDQ0LjE3MzFDMTc2LjMyMiA0NC40NjU1IDE3Ni44ODYgNDAuNTc3MSAxNzguNzQ4IDQwLjA3MTZDMTc4Ljc2NiA0MC45NDI2IDE3OC43NjUgNDEuNzk5NiAxNzguNzk3IDQyLjY4ODhDMTgwLjAyNCA0My4wOTY3IDE4MS4xOCA0NS4xNDY1IDE4MS44OTUgNDEuOTQ2NkMxODIuNTE1IDM5LjE2MzMgMTgwLjY4IDQwLjQ1NDggMTgwLjA5NCAzOS45MzFDMTgwLjA2NCAzOS44ODk0IDE4MC4wMzUgMzkuODQ3NyAxODAuMDA2IDM5LjgwNkMxNzkuODY1IDM5LjQ0MDYgMTgwLjE0NyAzOC42OTMyIDE3OS45NjMgMzguMTgxQzE3OS4yMjUgMzYuMDk4MSAxNzguNTI4IDM0LjkwMzcgMTc4LjczMiAzMi4wNzE4QzE3Ni43NzcgMzIuMDExMyAxNzUuNTI0IDM1LjU5MTYgMTczLjYzMyAzMy41MTdDMTczLjQyNiAzNi4xOTA2IDE3My4yMTkgMzguODY2OCAxNzMuMDEyIDQxLjU0MDRDMTczLjY1IDQxLjA4MzcgMTc0LjI4NiA0MC42MTQzIDE3NC45MjQgNDAuMTU3NkMxNzQuNzE0IDQxLjQ5NzUgMTc0LjUwMyA0Mi44MzMyIDE3NC4yOTMgNDQuMTczMVpNMjMyLjk5NCAzNC43NTkyQzIzMi44NDYgMzguOTM1NCAyMzUuNDY0IDM4LjIwMjggMjM2LjE4MiAzNS4zMjk1QzIzNS41NzcgMzQuOTMxNCAyMzUuNzgzIDMyLjE5NzggMjM1LjIzMiAzMi4xNzMzQzIzMy4zMzIgMzIuMDY5OCAyMzUuMTk3IDM3LjYwMjQgMjMyLjk5NCAzNC43NTkyWk0yODIuMTE1IDMyLjgyMTdDMjgyLjExOCAzMy42NjE3IDI4MS41MTcgMzMuNjc3NyAyODEuNTE0IDMyLjgzNzRDMjgxLjUxMiAzMS45OTg5IDI4Mi4xMTUgMzEuOTgyIDI4Mi4xMTUgMzIuODIxN1pNMzI2LjE3IDMyLjMwNjFDMzI2LjE3IDMzLjE5NSAzMjYuMTc4IDM0LjA4MTMgMzI2LjE3OCAzNC45NzAyQzMyNS43NTMgMzQuOTc2MiAzMjUuMzI3IDM0Ljk4OTIgMzI0LjkwMiAzNS4wMDE0QzMyNS4zMjIgMzQuMTA2NCAzMjUuNzQ3IDMzLjIwMTIgMzI2LjE3IDMyLjMwNjFaTTI1OS43NzcgMzMuNDMxMUMyNTkuNzggMzQuMjcwNyAyNTkuMTc0IDM0LjI4NjkgMjU5LjE3NCAzMy40NDY3QzI1OS4xNzIgMzIuNjA4IDI1OS43NzQgMzIuNTkxMiAyNTkuNzc3IDMzLjQzMTFaTTM0My43MjUgMzMuMTQyMUMzNDQuMjU1IDMzLjU3NDQgMzQ0Ljc4OSAzNC4wMDY1IDM0NS4zMjIgMzQuNDM4OUMzNDUuMzI0IDM0LjQzNjMgMzQ1LjMyNSAzNC40MzM3IDM0NS4zMjYgMzQuNDMxMUMzNDUuMzI2IDM1LjMxOTEgMzQ1LjMzMiAzNi4yMDcxIDM0NS4zMzIgMzcuMDk1MUMzNDQuNDgxIDM3LjExOTUgMzQzLjYyOCAzNy4xNDg5IDM0Mi43NzcgMzcuMTczMkMzNDMuMDk1IDM1LjgzMzUgMzQzLjQxIDM0LjQ4NzkgMzQzLjcyNSAzMy4xNDIxWk0yNDIuNTc4IDM0LjU2MzlDMjQyLjk5OCAzNC4xMDEyIDI0My40MTcgMzMuNjM0MyAyNDMuODQgMzMuMTY1NUMyNDIuOTg2IDMzLjE4MzggMjQyLjMwNiAzNC43MTgzIDI0MS42MTUgMzMuMjc0OUMyNDAuNTUyIDM0LjY4NzUgMjQwLjk3MiAzNS4wNzk5IDI0MS4xODggMzYuNjgxMUMyNDEuNTIzIDM5LjE1MjkgMjQwLjU3MSA0MC4yODY3IDI0MC42NzggNDIuNTg3MkMyNDEuMjk4IDM5Ljg4OTggMjQxLjk0NiAzNy4yNDMxIDI0Mi41NzggMzQuNTYzOVpNMzQuNDkwMiAzNC41NzE3QzMzLjYzOTEgMzQuMTM5MyAzMi43ODQ3IDMzLjY5OTUgMzEuOTMzNiAzMy4yNjcxQzMxLjkzMDcgMzQuMTUyNSAzMS45NTA4IDM1LjA0NTYgMzEuOTM5NSAzNS45MzExQzMyLjI0NzQgMzUuOTcyOCAzMi41NDk1IDM1Ljg3ODMgMzIuODU3NCAzNS44ODQyQzMzLjA4NDcgMzYuNzg1NiAzMy4zMTM3IDM3LjY3ODEgMzMuNTQxIDM4LjU3OTVDMzMuODU4MyAzNy4yNDEzIDM0LjE3MjkgMzUuOTA5OSAzNC40OTAyIDM0LjU3MTdaTTMzNy4wMDggMzQuMDE3QzMzNy4wMSAzNC44NTU0IDMzNi40MDcgMzQuODcyNCAzMzYuNDA0IDM0LjAzMjdDMzM2LjQwMiAzMy4xOTI3IDMzNy4wMDggMzMuMTc2NyAzMzcuMDA4IDM0LjAxN1pNMzI4LjA5NiAzNy41ODczQzMyNy45NjkgMzYuMjU3OSAzMjguNTA4IDMzLjIwODEgMzI5LjM2MSAzMy41NDgzQzMyOS4zNjcgMzQuODgyMSAzMjkuMzcgMzYuMjIyMyAzMjkuMzczIDM3LjU1NkMzMjguOTQ4IDM3LjU2ODIgMzI4LjUyMSAzNy41NzUxIDMyOC4wOTYgMzcuNTg3M1pNMzU4LjcwNyAzNC43MjAyQzM1OC43MSAzNS41NTk5IDM1OC4xMDUgMzUuNTgwMSAzNTguMTA0IDM0LjczNThDMzU4LjEwMSAzMy44OTU3IDM1OC43MDYgMzMuODgwOSAzNTguNzA3IDM0LjcyMDJaTTMwMy44NjMgNDQuOTA3NUMzMDMuNDM1IDQzLjU4NjUgMzAzLjAwNiA0Mi4yNjc2IDMwMi41NzggNDAuOTQ2NkMzMDMuNDI5IDQwLjkyMjMgMzA0LjI4IDQwLjkwMDcgMzA1LjEzMSA0MC44NzYzQzMwNS4xMzEgMzkuNTQzNiAzMDUuMTI2IDM4LjIxMDggMzA1LjEyMyAzNi44ODQyQzMwMy42MjggMzYuMDI1NSAzMDIuMTQ0IDM1LjE5MjYgMzAwLjY0MyAzNC4zMjE3QzMwMC43NyAzNS45MDM3IDMwMC4yMTUgMzYuNjc3MSAzMDAuMzUyIDM4LjM0NTFDMzAwLjM1IDM4LjM0MjUgMzAwLjM0OSAzOC4zMzk5IDMwMC4zNDggMzguMzM3M0MzMDAuNTYgNDAuOTE5NiAzMDEuNDQ1IDQzLjQ2NzggMzAxLjMxMSA0Ni4zMDU5QzMwMi4xNjcgNDUuODU1MyAzMDMuMDA5IDQ1LjM3MDMgMzAzLjg2MyA0NC45MDc1Wk0yNTIuMTQ2IDM2LjI5MDRDMjUxLjUwOCAzNS42Mzg4IDI1MC44NjcgMzQuOTgyOSAyNTAuMjI5IDM0LjMzNzRDMjUwLjIyOCAzNC43ODIgMjUwLjIzIDM1LjIyODcgMjUwLjIzMiAzNS42NzMzQzI1MC4yMzEgMzUuNjczMyAyNTAuMjMgMzUuNjczMyAyNTAuMjI5IDM1LjY3MzNDMjUwLjc2MiAzNi4xMDU1IDI1MS4yOTUgMzYuNTMwMSAyNTEuODI4IDM2Ljk2MjNDMjUxLjkzMyAzNi43Mzc0IDI1Mi4wMzkgMzYuNTE1NCAyNTIuMTQ2IDM2LjI5MDRaTTI4OS44NDYgNTQuNjE4M0MyOTEuOTczIDUzLjY3NDMgMjkxLjkyMiA0OC43NDk0IDI5NC4zMDEgNDkuMTU3NEMyOTMuODY5IDQ3LjM5MTIgMjkzLjQzOSA0NS42MjUxIDI5My4wMDggNDMuODUyOEMyOTQuMzg0IDQ0LjgwOSAyOTUuNjc2IDQ0LjAzMzUgMjk3LjA5NiA0My41OTVDMjk3LjM5OCA0My41MDI2IDI5Ny40OTYgNDIuNTA4MiAyOTcuOTA2IDQyLjUzMjVDMjk5LjEwNCA0Mi42MDY5IDMwMC4xNTYgNDUuNDc1IDMwMC4wMiA0MC45OTM1QzI5OS4xNzQgNDEuMDMgMjk4LjMxNyA0MS4wMzk1IDI5Ny40NjkgNDEuMDYzOEMyOTcuNDYzIDM4Ljg0MjUgMjk3LjQ1NyAzNi42MjEyIDI5Ny40NTEgMzQuMzk5OUMyOTYuNjQ0IDM1LjM1NTggMjk2LjM4MSAzNS40OTY3IDI5NS41NjggMzQuNDYyNEMyOTUuNTQ1IDM1LjMyMDIgMjk1LjUyMSAzNi4xNzQ3IDI5NS40OTggMzcuMDMyNkMyOTUuMDk2IDM3LjA4NzQgMjk0LjY5NyAzNy4xMzQxIDI5NC4yOTUgMzcuMTg4OUMyOTQuMjggMzguNDk4MSAyOTQuMjY4IDM5LjgwOTMgMjk0LjI1NCA0MS4xMTg1QzI5My44NTIgNDEuMTczMyAyOTMuNDUxIDQxLjIzNTYgMjkzLjA0OSA0MS4yOTA0QzI5My4wMzQgNDIuMTQxOCAyOTMuMDI1IDQzLjAwMTQgMjkzLjAwOCA0My44NTI4QzI5Mi41ODUgNDMuODgzMyAyOTIuMTU4IDQzLjkxNjEgMjkxLjczMiA0My45NDY2QzI5MS45MjggNDQuNTg2IDI5Mi4xMjYgNDUuMjMwNyAyOTIuMzI0IDQ1Ljg3NjJDMjkyLjAyNCA0Ni41NTIxIDI5MS43MjMgNDcuMjIyIDI5MS40MiA0Ny44OTE4QzI5MC44ODcgNDcuNDU5NiAyOTAuMzUzIDQ3LjAzNjcgMjg5LjgyIDQ2LjYxMDZDMjkxLjE2OSA1MC4xMTc5IDI5MS4xNiA1MS4wNjc5IDI4OS44NCA1NC42MTgzQzI4OS44NDIgNTQuNjE4MyAyODkuODQ0IDU0LjYxODMgMjg5Ljg0NiA1NC42MTgzWk00My43MjQ2IDM4LjQxNTRDNDMuOTg3MiAzOC43NDMzIDQ0LjYwOTYgMzguNTY2NyA0NC42NTA0IDM4LjQzODlDNDUuMTMxMSAzNi45NTk1IDQ0LjIyNjIgMzUuMjkxIDQzLjc0MjIgMzQuNDYyNEM0My4yMDg4IDM1LjM2MzcgNDIuNjc0MSAzNi4yNDIzIDQyLjE1MjMgMzcuMTQ5OEM0Mi4xNTM2IDM3LjE0OTggNDIuMTU0OSAzNy4xNDk4IDQyLjE1NjIgMzcuMTQ5OEM0Mi45MDgxIDM2LjczNiA0My4yMjkxIDM3Ljc4ODIgNDMuNzI0NiAzOC40MTU0Wk0yOS4zODY3IDM3LjI5ODJDMjkuMzg2NyAzNi40MDkgMjkuMzgzNyAzNS41MTU2IDI5LjM4MDkgMzQuNjI2NEMyOC45NTUzIDM0LjYyNjQgMjguNTI5MSAzNC42NDIgMjguMTAzNSAzNC42NDJDMjguMTAzNSAzNS41MyAyOC4xMDY0IDM2LjQxODEgMjguMTA5NCAzNy4zMDYxQzI4LjUzNDkgMzcuMzA2MSAyOC45NjEyIDM3LjI5ODIgMjkuMzg2NyAzNy4yOTgyWk0xNzYuMTg4IDM0Ljc5ODNDMTc2LjgyNiAzNC43ODYxIDE3Ny40NjUgMzQuNzcxNCAxNzguMTA0IDM0Ljc1OTJDMTc4LjEwNiAzNS4yMDM0IDE3OC4xMDUgMzUuNjUxIDE3OC4xMDUgMzYuMDk1MUMxNzcuNDY3IDM2LjEwNzMgMTc2LjgyOSAzNi4xMjIgMTc2LjE5MSAzNi4xMzQyQzE3Ni4xODkgMzUuNjg5NiAxNzYuMTg4IDM1LjI0MjggMTc2LjE4OCAzNC43OTgzWk0yNzguMzI0IDQxLjU5NUMyNzguMTkxIDM3Ljg2OTQgMjc5LjA2MiAzNS4zNDY2IDI4MC44NTkgMzQuODUzQzI4MC44NjIgMzYuNjMwMSAyODAuODY2IDM4LjQwMzggMjgwLjg2OSA0MC4xODFDMjgwLjAyMSA0MC42NDk5IDI3OS4xNzIgNDEuMTI2MSAyNzguMzI0IDQxLjU5NVpNMTMuNDA4MiAzNS40NzhDMTMuNDEwNCAzNi4zMTYxIDEyLjgwOTEgMzYuMzIyNyAxMi44MDQ3IDM1LjQ4NThDMTIuODAxOCAzNC42NDUzIDEzLjQwODEgMzQuNjM3NSAxMy40MDgyIDM1LjQ3OFpNMzA4LjMxMSAzNi43ODI2QzMwOC4zMTEgMzYuMzM5OSAzMDguMzExIDM1Ljg5NzIgMzA4LjMwOSAzNS40NTQ1QzMwNy42NzMgMzYuMTM2NiAzMDcuMDM0IDM2LjgxOTIgMzA2LjM5OCAzNy41MDE0QzMwNi41MDYgMzcuNzIwMyAzMDYuNjExIDM3Ljk0NjQgMzA2LjcxOSAzOC4xNjU0QzMwNy4yNDkgMzcuNzA4NyAzMDcuNzggMzcuMjM5MyAzMDguMzExIDM2Ljc4MjZaTTM1OC4wOTIgMzYuNzQzNkMzNTguNzY4IDM2Ljg1OTMgMzU5LjE5OCAzNi41MDM3IDM1OS42ODIgMzUuNTE3QzM2MC42NDMgMzYuNzcxMiAzNjEuNjA1IDM4LjAzMDIgMzYyLjU2NiAzOS4yOTA0QzM2MS4wOCAzOS4zMjY5IDM1OS41OTEgMzkuMzY1IDM1OC4xMDIgMzkuNDA3NkMzNTguMDk5IDM4LjUxOTYgMzU4LjA5MiAzNy42MzE2IDM1OC4wOTIgMzYuNzQzNlpNMzM4LjkyOCAzNi42MzQyQzMzOC45MyAzNy40NzMgMzM4LjMyNiAzNy40ODYzIDMzOC4zMjQgMzYuNjQ5OEMzMzguMzIxIDM1LjgwOTMgMzM4LjkyOCAzNS43OTM3IDMzOC45MjggMzYuNjM0MlpNMjMuMDE1NiA0Mi43MDQ0QzIzLjEyOTIgMzkuMTQ4OCAyMy4wNjEyIDM2LjMzNjcgMjEuMDg1OSAzNi4wNTYxQzIwLjY2MzMgMzcuODQwNCAyMC4yNCAzOS42MjMzIDE5LjgyMDMgNDEuNDA3NkMyMC44ODQyIDQxLjg0IDIxLjk1MTcgNDIuMjcyIDIzLjAxNTYgNDIuNzA0NFpNMTkuODI2MSAzNi43MzU4QzE5LjgyNjIgMzcuNTc2MiAyMC40MzI2IDM3LjU2ODQgMjAuNDI5NyAzNi43Mjc5QzIwLjQyODEgMzUuODkxMyAxOS44MjQgMzUuODk3OSAxOS44MjYxIDM2LjczNThaTTIzMi4zNjEgMzcuNDQ2N0MyMzIuMzYxIDM3LjAwNCAyMzIuMzYyIDM2LjU2MTIgMjMyLjM1OSAzNi4xMTg2QzIzMS45MzQgMzYuMTMwOCAyMzEuNTA3IDM2LjEzNzYgMjMxLjA4MiAzNi4xNDk4QzIzMS4wODIgMzYuNTkyNSAyMzEuMDgxIDM3LjAzNTIgMjMxLjA4NCAzNy40Nzc5QzIzMS41MSAzNy40NjU3IDIzMS45MzYgMzcuNDU4OSAyMzIuMzYxIDM3LjQ0NjdaTTMzMC42NDYgMzYuMTgxMUMzMzEuMDcyIDM2LjE2ODkgMzMxLjQ5OCAzNi4xNjIgMzMxLjkyNCAzNi4xNDk4QzMzMS45MjcgMzcuMDM3OCAzMzEuOTMgMzcuOTI1OCAzMzEuOTMgMzguODEzOEMzMzEuODI1IDM4LjgxOTkgMzMxLjcxNiAzOC44MjE3IDMzMS42MTEgMzguODIxN0MzMzEuMjg4IDM3Ljk0NDcgMzMwLjk2NyAzNy4wNjQxIDMzMC42NDYgMzYuMTgxMVpNMTYyLjc4NyAzNy43NTkyQzE2Mi43ODcgMzcuMzE1IDE2Mi43ODggMzYuODY3NCAxNjIuNzg1IDM2LjQyMzNDMTYxLjkzNCAzNi40NDE1IDE2MS4wODMgMzYuNDU5NyAxNjAuMjMyIDM2LjQ3NzlDMTYwLjIzMiAzNi45MjMzIDE2MC4yMzIgMzcuMzY4NiAxNjAuMjMyIDM3LjgxMzlDMTYxLjA4NCAzNy43OTU2IDE2MS45MzYgMzcuNzc3NCAxNjIuNzg3IDM3Ljc1OTJaTTE1OC45NjUgMzkuMTczMkMxNTguOTY1IDM4LjI4NTIgMTU4Ljk1OSAzNy4zOTcyIDE1OC45NTkgMzYuNTA5MkMxNTguNzQ2IDM2LjUwOTIgMTU4LjUzMyAzNi41MTcgMTU4LjMyIDM2LjUxN0MxNTguMzIgMzcuNDA2MiAxNTguMzIzIDM4LjI5OTYgMTU4LjMyNiAzOS4xODg4QzE1OC41MzkgMzkuMTg4OCAxNTguNzUyIDM5LjE3OTMgMTU4Ljk2NSAzOS4xNzMyWk0xMzIuMTU4IDQxLjA1NkMxMzEuOTA4IDM2LjM1NDIgMTMwLjE2NiAzNi45MTkzIDEyOC4zMTggMzcuMTI2NEMxMjguMzE4IDM4LjQ2MDIgMTI4LjMyNSAzOS43OTI1IDEyOC4zMjggNDEuMTI2M0MxMjguOTc1IDQxLjM1MTUgMTI5LjYxOSA0MS41NzI5IDEzMC4yNjYgNDEuNzk4MkMxMzAuODk1IDQxLjU0ODUgMTMxLjUyOSA0MS4zMDU3IDEzMi4xNTggNDEuMDU2Wk0yNDUuMTI5IDM4LjQ3MDFDMjQ1LjEyOSAzOC4wMjc0IDI0NS4xMjggMzcuNTg0NyAyNDUuMTI1IDM3LjE0MkMyNDQuNjk5IDM3LjE1NDIgMjQ0LjI3MyAzNy4xNjcyIDI0My44NDggMzcuMTczMkMyNDMuODQ4IDM3LjYxNiAyNDMuODQ5IDM4LjA1ODYgMjQzLjg1MiAzOC41MDE0QzI0NC4yNzcgMzguNDg5MiAyNDQuNzAzIDM4LjQ3NjIgMjQ1LjEyOSAzOC40NzAxWk00MS41MTc2IDM5LjgyMTZDNDEuMDg5MSAzOC45Mzg1IDQwLjY2MjggMzguMDU2NCA0MC4yMzQ0IDM3LjE3MzJDNDAuMjM0NCAzOC4wNjEyIDQwLjIzNzMgMzguOTQ5MyA0MC4yNDAyIDM5LjgzNzNDNDAuNjY1NyAzOS44MzczIDQxLjA5MjEgMzkuODI3NyA0MS41MTc2IDM5LjgyMTZaTTE4Ni40MDQgMzcuMjM1N0MxODYuODMgMzcuMjI5NyAxODcuMjU2IDM3LjIxNjcgMTg3LjY4MiAzNy4yMDQ1QzE4Ny42ODIgMzguMDkzNyAxODcuNjg4IDM4Ljk4NzEgMTg3LjY4OCAzOS44NzYzQzE4Ny4yNjIgMzkuODg4NSAxODYuODM2IDM5Ljg5NTQgMTg2LjQxIDM5LjkwNzZDMTg2LjQwNyAzOS4wMTg0IDE4Ni40MDQgMzguMTI0OSAxODYuNDA0IDM3LjIzNTdaTTUwMC40MTYgMzcuMjUxNEM1MDAuNDE5IDM4LjEzOTQgNTAwLjQyNiAzOS4wMTk2IDUwMC40MjYgMzkuOTA3NkM1MDAgMzkuOTE5OCA0OTkuNTc0IDM5LjkyNDkgNDk5LjE0OCAzOS45MzFDNDk5LjU3MSAzOS4wMzY0IDQ5OS45OTQgMzguMTQ2IDUwMC40MTYgMzcuMjUxNFpNMzc0Ljc0MiA1Ny42NDE3QzM3My42NzMgNTQuNTI5OCAzNzQuNjUxIDU0LjAxNTcgMzc1LjI3MSA1MS41NTU4QzM3NS41ODYgNTAuMzA3MyAzNzQuOTU1IDQ5LjI0NzkgMzc1LjQ0MSA0OC40MDc1QzM3NS45MzEgNDcuNTYxOCAzNzYuOTQ0IDQ4LjAzMTggMzc3LjI1IDQ2LjIzNTZDMzc2LjgzNiA0NC43MjA0IDM3Ni4zNzkgNDMuMTUwMiAzNzUuOTUxIDQxLjYxMDdDMzc1LjYzOSA0Mi4wMzA5IDM3NS4zMjkgNDIuNDQ2NSAzNzUuMDE4IDQyLjg2MDdDMzczLjg0MSA0MS4xMjU3IDM3NC41OTUgNDAuMTMyNCAzNzQuNjg2IDM3LjY0MkMzNzMuNjI4IDM5LjAxMiAzNzIuNTcgNDAuMzg5MSAzNzEuNTEgNDEuNzU5MUMzNzEuNTEgNDMuMDczNiAzNzEuNTE2IDQ0LjM5NzcgMzcxLjUxNiA0NS43MTIyQzM3MS45NDEgNDYuMTUwMyAzNzIuMzcgNDYuNTk0MyAzNzIuNzk1IDQ3LjAzMjVDMzcyLjE2IDQ3LjcxNDYgMzcxLjUyIDQ4LjM5NzIgMzcwLjg4NSA0OS4wNzkzQzM3MS45NTIgNTAuMTYzNCAzNzMuMDE5IDUxLjI1MyAzNzQuMDg2IDUyLjMzNzFDMzczLjAyNSA1My4wMzEzIDM3MS45NjMgNTMuNzIxIDM3MC45MDIgNTQuNDE1MkMzNzEuNTQxIDU0LjYyMjIgMzcyLjE4MiA1NC44MzE0IDM3Mi44MiA1NS4wMzI0QzM3Mi42MDggNTUuOTI3NSAzNzIuMzk4IDU2LjgyNDcgMzcyLjE4NiA1Ny43MTk4QzM3My4wMzkgNTcuNjg5NCAzNzMuODg1IDU3LjY5MDQgMzc0Ljc0MiA1Ny42NDE3Wk0yMTUuMTMzIDM5LjE5NjZDMjE1LjIzMSAzOC4xMDE5IDIxNC45MjEgMzcuODg1MiAyMTQuNDU1IDM3LjgwNkMyMTQuNjc5IDM4LjI2ODkgMjE0LjkwOCAzOC43MzM4IDIxNS4xMzMgMzkuMTk2NlpNODguMTIxMSA0My4xNjUzQzg3LjgxNTMgNDIuNzM5NCA4Ny41MTI4IDQyLjMxIDg3LjIwNyA0MS44ODQxQzg3LjA4MTYgNDAuNTM4MiA4Ni45NTY0IDM5LjE5MTEgODYuODM0IDM3Ljg0NTFDODYuNjE1MyAzOS4xNjY3IDg2LjM5NjQgNDAuNDkyMiA4Ni4xNzc3IDQxLjgxMzhDODUuNzYxIDQxLjgzODIgODUuMzQwNiA0MS44NTE5IDg0LjkyMzggNDEuODc2M0M4NC45MjM4IDQyLjc2NTUgODQuOTI3NyA0My42NTg5IDg0LjkzMzYgNDQuNTQ4MUM4NS45OTcxIDQ0LjA4NTQgODcuMDU3NiA0My42MjggODguMTIxMSA0My4xNjUzWk03NS4zNjMzIDM4LjY4ODhDNzUuMzY0NSAzOS41MjY3IDc1Ljk2OTcgMzkuNTE4OSA3NS45NjY4IDM4LjY3MzJDNzUuOTY2NCAzNy44MzM2IDc1LjM2MDQgMzcuODQyNiA3NS4zNjMzIDM4LjY4ODhaTTE0MS4xIDQzLjU0MDNDMTQxLjA5NyA0MS43NjIzIDE0MS4wOTEgMzkuOTg0MiAxNDEuMDg4IDM4LjIxMjNDMTQwLjY2MyAzOC4yMTg0IDE0MC4yMzggMzguMjI5NiAxMzkuODEyIDM4LjIzNTdDMTQwLjAyOCA0MC4wMDc4IDE0MC4yNDcgNDEuNzgzOSAxNDAuNDYzIDQzLjU1NkMxNDAuNjc1IDQzLjU1NTkgMTQwLjg4NyA0My41NDY0IDE0MS4xIDQzLjU0MDNaTTYwLjA1MjcgNTUuNjE4M0M2MC4wMjA3IDUyLjY2NDQgNTkuMDg0MiA1MS41NDU0IDU5LjUyNzMgNDguMTY1M0M1OS44MjI4IDQ1LjkyMzMgNjIuMjA5NSA0MS4xNzQgNjEuOTI5NyAzOC4yNTE0QzYwLjM1NTcgNDEuMTA3OCA1OS40MjI2IDQwLjEzODggNTcuNDc4NSAzOS42MDI5QzU3LjQxMjQgNDEuNjE5NyA1OC4xNzU0IDQwLjY4OTMgNTguNzc1NCA0MS42MTg1QzU5LjY2MTUgNDIuOTk0OSA1OS4zOTM2IDQ1LjQ5ODEgNTkuNDA4MiA0Ny41ODcyQzU4Ljk3OTcgNDYuMjgzOCA1OC41NTE1IDQ0LjkzMjMgNTguMTIzIDQzLjYxMDZDNTcuOTE5IDQ2LjAyODUgNTcuNzE1NyA0OC40NTgzIDU3LjUxMTcgNTAuODc2MkM1OC4zNTY3IDUyLjQ2NTIgNTkuMjI1MiA1My45OTI3IDYwLjA1MjcgNTUuNjE4M1pNMzk0LjQ3NSAzOC40NzAxQzM5NS4xMTMgMzguNDUxOCAzOTUuNzUxIDM4LjQzMzcgMzk2LjM4OSAzOC40MTU0QzM5Ni4zOTIgMzguODU5OCAzOTYuMzkzIDM5LjMwNyAzOTYuMzkzIDM5Ljc1MTNDMzk1Ljc1NCAzOS43Njk2IDM5NS4xMTUgMzkuNzc5OSAzOTQuNDc3IDM5Ljc5ODJDMzk0LjQ3NCAzOS4zNTU1IDM5NC40NzUgMzguOTEyOCAzOTQuNDc1IDM4LjQ3MDFaTTI5MS43MjkgNDIuNTU2QzI5MS43MjYgNDEuMjIzNCAyOTEuNzI0IDM5Ljg4ODYgMjkxLjcyMSAzOC41NTZDMjkwLjggMzguMzQyOSAyOTAuMzg1IDM5LjIyMDQgMjg5LjgxMSA0MC42MDI5QzI5MC4zOTYgNDEuOTYwOCAyOTAuODE0IDQyLjgxNzMgMjkxLjcyOSA0Mi41NTZaTTI5Mi4zNzkgMzkuMjA0NUMyOTIuMzgyIDQwLjA0MzQgMjkyLjk4NCA0MC4wMjYgMjkyLjk4MiAzOS4xODg4QzI5Mi45ODIgMzguMzQ4NCAyOTIuMzc2IDM4LjM2NCAyOTIuMzc5IDM5LjIwNDVaTTM4OC4xMTMgMzkuMjk4MkMzODguMTE2IDQwLjEzODcgMzg4LjcyIDQwLjEyMzEgMzg4LjcxNyAzOS4yODI2QzM4OC43MTcgMzguNDQzNyAzODguMTEyIDM4LjQ2MTEgMzg4LjExMyAzOS4yOTgyWk0yNy40NzY2IDQwLjY0OThDMjcuMTU2NSAzOS45ODY5IDI2LjgzNTcgMzkuMzI4MyAyNi41MTU2IDM4LjY2NTRDMjYuNDEwOCAzOC44OTA1IDI2LjMwMjEgMzkuMTA0MyAyNi4xOTczIDM5LjMyOTVDMjYuNTE3OSAzOS45OTMzIDI2LjgzOTUgNDAuNjU3OCAyNy4xNjAyIDQxLjMyMTZDMjcuMjY0OCA0MS4xMDI5IDI3LjM2OSA0MC44NzQ1IDI3LjQ3NjYgNDAuNjQ5OFpNMzgzLjY0NiA0NS40MTUzQzM4Mi44NzcgNDIuNzc4MiAzODMuOTA1IDQwLjE4OTUgMzgyLjM1MiAzOC43ODI2QzM4Mi4zNDMgNDAuMzYgMzgyLjMzNyA0MS45NDczIDM4Mi4zMjggNDMuNTI0N0MzODIuNzY4IDQ0LjE1ODEgMzgzLjIwNiA0NC43ODE5IDM4My42NDYgNDUuNDE1M1pNMzc5LjE5MSA0OC4yMkMzNzkuODE4IDQ3LjUyNTcgMzgwLjQ0NiA0Ni44NDQgMzgxLjA3MiA0Ni4xNDk3QzM4MC44NTkgNDQuMTU4MiAzODAuNjQxIDQyLjE2NDYgMzgwLjQyOCA0MC4xNzMyQzM3OS41OCAzOS43NDcgMzc4LjczMiAzOS4zMTY1IDM3Ny44ODEgMzguODg0MkMzNzguNTIyIDQwLjQyNDcgMzc5LjE2NiA0MS45Njg2IDM3OS44MDcgNDMuNTA5MUMzNzkuOTU4IDQ2LjY2OTMgMzc4Ljg0IDQ1LjAwMDEgMzc3LjkwNCA0NS41NzE2QzM3Ny45OCA0OS4xNzY5IDM3Ni44NzIgNTEuMzgxOCAzNzYuMDA2IDU0LjI3NDVDMzc2LjAwNyA1NC4yNzcyIDM3Ni4wMDggNTQuMjc5OCAzNzYuMDEgNTQuMjgyNEMzNzcuMDczIDU0LjkyMTYgMzc4LjE0IDU1LjU2NDkgMzc5LjIwMyA1Ni4yMDQyQzM3OS4yIDUzLjU0MjcgMzc5LjE5NCA1MC44ODE1IDM3OS4xOTEgNDguMjJaTTE2Ni42MjUgMzkuMDE3QzE2Ny4zODUgMzguOTUwMyAxNjcuNjg1IDQxLjI0MDggMTY3Ljg0IDQyLjQyMzJDMTY3Ljk5NCA0My41OTg2IDE2Ny44OTkgNDQuNTEyNSAxNjcuOTE0IDQ1LjY1NzVDMTY3LjI3MyA0NS42NjM2IDE2Ni42MzYgNDUuNjc2NiAxNjUuOTk4IDQ1LjY4ODdDMTY2LjIwOCA0My40NjY2IDE2Ni40MTIgNDEuMjMzIDE2Ni42MjUgMzkuMDE3Wk0yMDguNzcgNDguNjQ5NkMyMDguOTUzIDQ3LjQyNSAyMDguNDcgNDIuOTE5NCAyMDguMDg4IDQyLjM2MDdDMjA3LjA4NSA0MC45MTcyIDIwNi42NjggNDIuODM5MSAyMDYuODI4IDM5LjM5MkMyMDUuMTk5IDM4LjMyNjIgMjAzLjY1NyA0NC43NTI3IDIwMy42NiA0Ny40OTM0QzIwMy45NzggNDYuNTkyMiAyMDQuMjk2IDQ1LjY4NzEgMjA0LjYxMyA0NC43OTgxQzIwNS45OTggNDYuMDY0OSAyMDcuMzg1IDQ3LjQ2ODIgMjA4Ljc3IDQ4LjY0OTZaTTMxNC4wOCAzOS45NjIzQzMxNC4wOCA0MC44MDI3IDMxNC42ODcgNDAuNzg3MSAzMTQuNjg0IDM5Ljk0NjZDMzE0LjY4MSAzOS4xMDc0IDMxNC4wNzkgMzkuMTI0OCAzMTQuMDggMzkuOTYyM1pNMjEwLjAzMSA0Mi4wMDkxQzIxMC4wMzEgNDEuMTE5OSAyMTAuMDI1IDQwLjIyNjUgMjEwLjAyNSAzOS4zMzczQzIwOS44MTMgMzkuMzM3MyAyMDkuNTk5IDM5LjM0NjggMjA5LjM4NyAzOS4zNTI5QzIwOS4zODcgNDAuMjQyMSAyMDkuMzkzIDQxLjEzNTUgMjA5LjM5MyA0Mi4wMjQ3QzIwOS42MDUgNDIuMDI0NyAyMDkuODE5IDQyLjAxNTIgMjEwLjAzMSA0Mi4wMDkxWk0xNTMuMjMyIDQ0LjYzNDFDMTUzLjAxMSA0My4zMTk1IDE1Mi43OTIgNDEuOTk1NiAxNTIuNTcgNDAuNjgxQzE1MS43MjIgNDAuMjQyNSAxNTAuODc2IDM5LjgwNyAxNTAuMDI3IDM5LjM2ODVDMTQ5Ljk0IDQ0LjIxIDE1MS4xMTYgNDUuMDE3OCAxNTMuMjMyIDQ0LjYzNDFaTTE0OC43ODkgNTQuMDU1OEMxNDguNzQgNTIuODMyNCAxNDkuMTEyIDUxLjI4MzEgMTQ5LjExNSA1MC4xMjYyQzE0OS4xMjEgNDguNzEzMiAxNDkuNDE5IDQ1LjIwNjkgMTQ5LjM0NiA0NC40N0MxNDkuMzQ1IDQ0LjQ2NzQgMTQ5LjM0NCA0NC40NjQ4IDE0OS4zNDQgNDQuNDYyMkMxNDkuMDg3IDQxLjg3MDcgMTQ4LjQ4OSA0MS43OTY4IDE0OC43NTQgMzkuMzY4NUMxNDguMTEzIDM5Ljg3OTkgMTQ3LjQ4IDQwLjI5MiAxNDYuODQyIDQwLjc2NjlDMTQ3LjA1NCA0Mi4yODg4IDE0Ny4yNjggNDMuODE1MyAxNDcuNDggNDUuMzM3MkMxNDYuODQ4IDQ2LjcwNzMgMTQ2LjIxNSA0OC4wODU5IDE0NS41ODYgNDkuNDYyMUMxNDYuMDEyIDQ5LjQyNTYgMTQ2LjQzOCA0OS4zODE1IDE0Ni44NjMgNDkuMzQ0OUMxNDcuNTA3IDUwLjkwOTkgMTQ4LjE0MiA1Mi41MDkxIDE0OC43ODkgNTQuMDU1OFpNNDA3Ljg4OSA0Mi4xMTg1QzQwNy44ODkgNDEuMjI5MyA0MDcuODgzIDQwLjMzNTggNDA3Ljg4MyAzOS40NDY2QzQwNy42NyAzOS40NDY2IDQwNy40NTcgMzkuNDU2MiA0MDcuMjQ0IDM5LjQ2MjNDNDA3LjI0NyA0MC4zNTE1IDQwNy4yNDcgNDEuMjQ0OSA0MDcuMjUgNDIuMTM0MUM0MDcuNDYzIDQyLjEzNDEgNDA3LjY3NiA0Mi4xMjQ2IDQwNy44ODkgNDIuMTE4NVpNMzk4Ljk0NSAzOS42ODFDMzk5LjM3MSAzOS42NzQ5IDM5OS43OTcgMzkuNjYyIDQwMC4yMjMgMzkuNjQ5OEM0MDAuMjI2IDQwLjA5MzkgNDAwLjIyNSA0MC41NDE1IDQwMC4yMjUgNDAuOTg1N0MzOTkuNzk5IDQwLjk5MTggMzk5LjM3NCA0MC45OTcgMzk4Ljk0OSA0MS4wMDkxQzM5OC45NDYgNDAuNTY2NCAzOTguOTQ1IDQwLjEyMzggMzk4Ljk0NSAzOS42ODFaTTEzNC4wNjggMzkuNjg4OEMxMzMuNjQzIDM5LjY5NDkgMTMzLjIxOCAzOS43MDYyIDEzMi43OTMgMzkuNzEyM0MxMzMuMTE0IDQwLjU5NTMgMTMzLjQzNSA0MS40Nzc2IDEzMy43NTYgNDIuMzYwN0MxMzMuODYxIDQyLjM2MDcgMTMzLjk2NyA0Mi4zNjA3IDEzNC4wNzIgNDIuMzYwN0MxMzQuMDcyIDQxLjQ3MTUgMTM0LjA3MSA0MC41NzggMTM0LjA2OCAzOS42ODg4Wk00OS44MjIzIDQyLjM4NDFDNDkuODIyMyA0MS40OTQ5IDQ5LjgxOTMgNDAuNjAxNSA0OS44MTY0IDM5LjcxMjNDNDkuNjAzNiAzOS43MTIzIDQ5LjM5MDUgMzkuNzE0IDQ5LjE3NzcgMzkuNzIwMUM0OS4xNzc3IDQwLjYwOTMgNDkuMTgwNyA0MS41MDI3IDQ5LjE4MzYgNDIuMzkxOUM0OS4zOTY0IDQyLjM5MTkgNDkuNjA5NSA0Mi4zOTAyIDQ5LjgyMjMgNDIuMzg0MVpNNDAuMjQ0MSA0Mi41MTY5QzQwLjE0MjEgNDUuMjIxMSA0MC41NTM3IDQ1Ljc5MDEgNDEuODg4NyA0NS4xMjYyQzQzLjA4MDQgNDQuNTM1IDQ0LjA3NjEgNDIuNjExMyA0NC4wNjQ1IDM5Ljc5ODJDNDIuNTE3NyAzOS41NjY5IDQxLjk4MDggMzkuNTM0IDQyLjE2NDEgNDMuMTE4NUM0MS41MjMxIDQyLjkyMzYgNDAuODkwOSA0Mi43MDU2IDQwLjI0NDEgNDIuNTE2OVpNMzk3LjY1NCA0MC4zNzYzQzM5Ny42NTcgNDEuMjE2MSAzOTcuMDU1IDQxLjIzODEgMzk3LjA1MSA0MC4zOTk4QzM5Ny4wNDggMzkuNTYwMyAzOTcuNjUzIDM5LjUzOSAzOTcuNjU0IDQwLjM3NjNaTTM0Ny44OTEgNDEuMDI0OEMzNDcuOTkzIDQwLjY3MTQgMzQ3LjkxOCAzOS44MzM3IDM0OC4yMDMgMzkuODc2M0MzNDguNDg4IDM5LjkxOTggMzQ4LjQ5MSA0MC41NDY2IDM0OC41MjkgNDEuMDA5MUMzNDguMzE3IDQwLjk5NjkgMzQ4LjEwMyA0MS4wNzM0IDM0Ny44OTEgNDEuMDI0OFpNMjM3LjQ3MSA0Ni42NjUzQzIzNy44NjcgNDIuNTM2OSAyMzUuMzMgNDMuNTEyNiAyMzQuNDI2IDQyLjY3MzJDMjMzLjUyMiA0MS44MzI3IDIzMy42ODUgNDAuOTU1NSAyMzIuOTg4IDQwLjEwMjlDMjMzLjQ2MyA0Mi4zMDcyIDIzMy44NjUgNDQuNTE1NiAyMzQuMzExIDQ2LjcyQzIzNS4zNTcgNDYuNzAxNyAyMzYuNDUxIDQ2LjY4MzYgMjM3LjQ3MSA0Ni42NjUzWk00ODEuNjI5IDUyLjIyNzdDNDgyLjg3IDUwLjE3MTIgNDg0LjI5NSA1MC45NjkxIDQ4NS43NyA1MC44MjkzQzQ4NC42NDIgNDguMjcxMyA0ODMuODQ5IDQ0LjI4MDggNDgyLjU4NCA0Mi4yNTkxQzQ4MS45OTIgNDEuMzA5IDQ4MS45NzIgNDIuNDEyNiA0ODEuNTg0IDQyLjg0NUM0ODEuNDkxIDQyLjAxNzUgNDgxLjM3OCA0MS4xMDkyIDQ4MS4yNzkgNDAuMjUxM0M0ODAuODU0IDQwLjkzMzMgNDgwLjQzIDQxLjYyNTggNDgwLjAwOCA0Mi4zMTM4QzQ4MC4yMzIgNDQuOTU2NiA0ODAuNDU3IDQ3LjYwMDYgNDgwLjY4MiA1MC4yNDM0QzQ4MC45OTYgNTAuOTA3IDQ4MS4zMTQgNTEuNTY0IDQ4MS42MjkgNTIuMjI3N1pNMjc1LjE1IDQxLjAyNDhDMjc1LjE1IDQxLjg2NDQgMjc1Ljc1NiA0MS44NDcyIDI3NS43NTQgNDEuMDA5MUMyNzUuNzU0IDQwLjE2ODcgMjc1LjE0OCA0MC4xODQ1IDI3NS4xNSA0MS4wMjQ4Wk0yMTYuNDMgNDguNTE2OEMyMTYuNTYxIDQzLjgwMzQgMjE0Ljg1OSA0Mi44NTg0IDIxMy4yMjEgNDAuNTg3M0MyMTMuMTMzIDQ1LjIwOTQgMjE0LjU3OSA0Ni44NDIgMjE2LjQzIDQ4LjUxNjhaTTQ2NS4zMDkgNDEuMjM1N0M0NjUuMzEyIDQyLjA4MTkgNDY0LjcwNiA0Mi4wOTA4IDQ2NC43MDUgNDEuMjUxM0M0NjQuNzAyIDQwLjQwNTYgNDY1LjMwNyA0MC4zOTc3IDQ2NS4zMDkgNDEuMjM1N1pNMTQ0LjMwNyA0MS40Nzc5QzE0NC4zMSA0Mi4zMTgyIDE0NC45MTMgNDIuMzEwMSAxNDQuOTEgNDEuNDcwMUMxNDQuOTEgNDAuNjMwOSAxNDQuMzA2IDQwLjY0MTMgMTQ0LjMwNyA0MS40Nzc5Wk0yNTIuMTk5IDU4LjI5MDFDMjUyLjI1NSA1NS41ODY5IDI1Mi40OSA1NC4wMjYgMjUwLjkxNCA1NC4zMDU4QzI1MS40NDEgNTIuNTgyOCAyNTEuOTY5IDUwLjg2NDkgMjUyLjQ5NiA0OS4xNDE4QzI1Mi44MDggNDkuNTEzMyAyNTMuMTIxIDQ5Ljg5NTMgMjUzLjQzNiA1MC4yNjY4QzI1My42NjkgNDYuMjIzMSAyNTUuMzE3IDQ1LjI4NTEgMjU2LjYyOSA0Mi44MzcyQzI1NS4xODQgMzkuNjc5MiAyNTMuOTM2IDQxLjM1MDggMjUyLjE2MiA0Mi4yODI1QzI1Mi4zNzggNDMuNjA5NCAyNTIuNTkyIDQ0Ljk0IDI1Mi44MTEgNDYuMjY2OUMyNTEuNTI2IDQ2LjAwNTUgMjUwLjgyMyA0Ni45NjM3IDI0OS45NDkgNDguODQ0OUMyNDkuNDE2IDQ4LjQ2NzMgMjQ4Ljg3OSA0OC4wOTc2IDI0OC4zNDYgNDcuNzJDMjQ4LjU2MSA0OC42MDI1IDI0OC43NzcgNDkuNDg1OCAyNDguOTkyIDUwLjM2ODRDMjQ4LjE0MiA1MS4wNTYxIDI0Ny4yOTQgNTEuNzQzIDI0Ni40NDMgNTIuNDMwOEMyNDYuNDQyIDUyLjQzMzQgMjQ2LjQ0MSA1Mi40MzYgMjQ2LjQzOSA1Mi40Mzg2QzI0Ny41MzIgNTQuOTc4MyAyNDguNzU3IDU0LjM4NCAyNTAuMjU4IDU0LjM4MzlDMjUwLjEyNyA1Ny4zNzc2IDI1MS4xMjcgNTcuMTg4MSAyNTIuMTk5IDU4LjI5MDFaTTM5My44MyA0MS44MTM4QzM5My44MzMgNDIuNjUzNSAzOTMuMjI4IDQyLjY3NTUgMzkzLjIyNyA0MS44MzcyQzM5My4yMjQgNDAuOTk3NyAzOTMuODI5IDQwLjk3NjMgMzkzLjgzIDQxLjgxMzhaTTQ5MC44NjcgNDYuNzU5QzQ5MC44NjcgNDUuODY5OCA0OTAuODYyIDQ0Ljk3NjQgNDkwLjg1OSA0NC4wODcyQzQ5MC4yMjQgNDQuNTM3OSA0ODkuNTg4IDQ1LjAwOTggNDg4Ljk0OSA0NS40NTQ0QzQ4OC45OTMgNDQuNTM0NyA0ODguODc4IDQzLjQ5NTEgNDg4LjY1IDQyLjc4MjVDNDg4LjA3MSA0MC45ODA0IDQ4OCA0Mi4zNDY2IDQ4Ny4zNTQgNDIuMzg0MUM0ODYuNzA3IDQyLjQyMDYgNDg2LjQ3OCA0MS4wMTk3IDQ4NS43NDQgNDEuNTI0N0M0ODUuNzUgNDIuODI4IDQ4NS43NTUgNDQuMTg5MyA0ODUuNzU4IDQ1LjUxNjlDNDg3LjI4OCA0My41NDk3IDQ4OC4wOTEgNDQuNDQ5MyA0ODguMzI0IDQ4LjEzNEM0ODkuMTcyIDQ3LjY3NzUgNDkwLjAyIDQ3LjIxNTUgNDkwLjg2NyA0Ni43NTlaTTQ5MS41MTIgNDIuMDcxNkM0OTEuNTEyIDQyLjkxMDkgNDkyLjExNiA0Mi45MDA5IDQ5Mi4xMTUgNDIuMDYzOEM0OTIuMTE1IDQxLjIyMzYgNDkxLjUwOSA0MS4yMzIxIDQ5MS41MTIgNDIuMDcxNlpNMTA1LjM3MSA0Mi4yMDQ0QzEwNS4zNzEgNDMuMDQ0MSAxMDUuOTc2IDQzLjAzNDggMTA1Ljk3NSA0Mi4xOTY2QzEwNS45NzUgNDEuMzU2OCAxMDUuMzY5IDQxLjM2NiAxMDUuMzcxIDQyLjIwNDRaTTMxNS45OTIgNDcuMjI3OEMzMTUuNzEyIDQ2LjMzMjUgMzE1LjQ5OSA0My41OTEzIDMxNS4wMjMgNDMuMzI5NEMzMTQuMTA5IDQyLjgzMDUgMzEzLjU1OCA0My4xMTI2IDMxMi43ODkgNDEuOTkzNUMzMTIuOTExIDQzLjM0OTIgMzEzLjAyMiA0NC42NTU4IDMxMy4xMzkgNDUuOTkzNEMzMTQuMDg5IDQ2LjQwMTQgMzE1LjA1MSA0Ni44NTAzIDMxNS45OTIgNDcuMjI3OFpNNzUuMzU1NSA0My4zNTI4Qzc1LjM1NTUgNDIuOTA3NSA3NS4zNTU1IDQyLjQ2MjIgNzUuMzU1NSA0Mi4wMTY5Qzc0LjkyOTkgNDIuMDIzIDc0LjUwMzcgNDIuMDI2NSA3NC4wNzgxIDQyLjAzMjVDNzQuMDc4MSA0Mi40Nzc5IDc0LjA3ODEgNDIuOTIzMiA3NC4wNzgxIDQzLjM2ODVDNzQuNTAzNyA0My4zNjI0IDc0LjkyOTkgNDMuMzU4OSA3NS4zNTU1IDQzLjM1MjhaTTQ0Ni44NTIgNTQuMzgzOUM0NDYuODA1IDUyLjU5MzcgNDQ2LjcyNCA1MC44NDkzIDQ0Ny40NzkgNDkuNzA0M0M0NDguMDc2IDQ4LjgwMjkgNDQ3Ljg2MiA1MC4wODc0IDQ0OC40NzEgNDkuOTc3N0M0NDguODkgNDkuODk3MiA0NDkuNDI2IDQ4LjU3OTYgNDUwLjAxOCA0OC45OTM0QzQ0OS43MTIgNDYuNzUyOCA0NDkuMzcxIDQ0LjU1NzggNDQ5LjA1MSA0Mi4zMjk0QzQ0OS4xNjIgNDQuMTA3MiA0NDkuMjcyIDQ1Ljg3OTYgNDQ5LjM4MyA0Ny42NTc1QzQ0Ny44OTMgNDcuNDY4NyA0NDYuNDAzIDQ3LjI4MzggNDQ0LjkxNCA0Ny4wOTVDNDQ1LjU1NSA0OC4xOTEyIDQ0Ni4xOTcgNDkuMjg3NyA0NDYuODM4IDUwLjM4NEM0NDYuODQgNTAuMzg0IDQ0Ni44NDIgNTAuMzg0IDQ0Ni44NDQgNTAuMzg0QzQ0NS45OTMgNTAuNDAyMiA0NDUuMTQyIDUwLjQyODIgNDQ0LjI5MSA1MC40NDY1QzQ0NS4xNDUgNTEuNzU1NCA0NDYuMDAxIDUzLjA4NzIgNDQ2Ljg1MiA1NC4zODM5Wk0xODMuMjQ0IDQzLjMxMzhDMTgzLjI0NCA0NC4xNTMyIDE4My44NDkgNDQuMTQzMyAxODMuODQ4IDQzLjMwNkMxODMuODQ4IDQyLjQ2NTkgMTgzLjI0MiA0Mi40NzQ1IDE4My4yNDQgNDMuMzEzOFpNNDg4LjM1OSA2NS40NDYzQzQ4OS44MyA2NS4wNzM3IDQ4OS4yNTcgNjEuODY0IDQ4OS43MjMgNjAuMzgzOEM0OTAuMTkyIDU4LjkwNCA0OTEuMjI0IDYwLjE5ODkgNDkxLjUyNyA1OC4wNTU3QzQ5MS4xMjUgNTYuNTgyMiA0OTAuNjczIDU0Ljk3NDggNDkwLjI1IDUzLjQ0NjRDNDkxLjMxNCA1NC4zMTEyIDQ5Mi4zODEgNTUuMTg0OSA0OTMuNDQ3IDU2LjA1NThDNDkzLjIzMiA1NC43MjgzIDQ5My4wMTMgNTMuMzk3MiA0OTIuNzk3IDUyLjA2MzZDNDkzLjQzNSA1Mi4wNTE1IDQ5NC4wNzUgNTIuMDQyOSA0OTQuNzEzIDUyLjAyNDZDNDk0LjcwNCA0OC45MTMzIDQ5NC42OTQgNDUuODA3OSA0OTQuNjg2IDQyLjY5NjZDNDk0LjA0OCA0Mi43MDg4IDQ5My40MSA0Mi43MTU3IDQ5Mi43NzEgNDIuNzI3OEM0OTIuNzc3IDQ0LjA0OTMgNDkyLjc4MiA0NS4zNjczIDQ5Mi43OTEgNDYuNjg4N0M0OTMuMjE0IDQ2LjcwMDkgNDkzLjYzOCA0Ni43MDc4IDQ5NC4wNjEgNDYuNzJDNDk0LjA2MSA0Ni43MTQ4IDQ5NC4wNjIgNDYuNzA5NiA0OTQuMDYyIDQ2LjcwNDNDNDk0LjA2MyA0Ny4zNjc0IDQ5NC4wNjMgNDguMDMzNCA0OTQuMDY2IDQ4LjY5NjVDNDkzLjQ0MyA0OS40MDMgNDkyLjgxNyA1MC4xMTUgNDkyLjE5MyA1MC44MjE1QzQ5Mi4xNzYgNTEuNjc5OCA0OTIuMTYgNTIuNTQxMyA0OTIuMTQzIDUzLjM5OTZDNDkxLjYyNCA1Mi45NjExIDQ5MS4xMDEgNTIuNTI3MyA0OTAuNTgyIDUyLjA5NDlDNDg5LjQ5IDU0LjAwMDggNDg5LjMyNyA1NS42OTQ3IDQ5MC4xOTUgNTguMTE4MkM0ODkuMTI2IDYwLjQ5MzQgNDg4LjIwMiA2MS45OTk1IDQ4OC4zNTkgNjUuNDQ2M1pNMzg1LjU3MiA0My4zNjA3QzM4NS41NzUgNDQuMjAxMSAzODYuMTc5IDQ0LjE4NTUgMzg2LjE3NiA0My4zNDVDMzg2LjE3NiA0Mi41MDYgMzg1LjU3MSA0Mi41MjMzIDM4NS41NzIgNDMuMzYwN1pNMjg0LjA3NCA0My40Mzg4QzI4My45NjcgNDMuMjE5OCAyODMuODYyIDQzLjAwMTUgMjgzLjc1NCA0Mi43ODI1QzI4My40MzYgNDMuNDU4MSAyODMuMTE4IDQ0LjEzMDQgMjgyLjgwMSA0NC44MDU5QzI4Mi45MDggNDUuMDI0NiAyODMuMDE0IDQ1LjI0MzUgMjgzLjEyMSA0NS40NjIyQzI4My40MzkgNDQuNzg2NyAyODMuNzU3IDQ0LjExNDMgMjg0LjA3NCA0My40Mzg4Wk0xMDYuMDE2IDQ4LjgyOTNDMTA3Ljk0OCA1MS4yMDQzIDEwOS45NzMgNTIuMDUyOCAxMTEuNzQ4IDQ4Ljc1OUMxMTEuMzIgNDYuNzU4MSAxMTAuODg5IDQ0Ljc3NzQgMTEwLjQ2MSA0Mi43ODI1QzExMC4yNTEgNDMuNjc3NSAxMTAuMDM4IDQ0LjU3MzMgMTA5LjgyOCA0NS40NjIyQzEwOC43NjEgNDQuNTkxMyAxMDcuNjk4IDQzLjcxNTkgMTA2LjYzMSA0Mi44NDVDMTA2LjY0MyA0NC42NDEyIDEwNi42MTggNDYuMzc3NyAxMDYuNjU2IDQ4LjIwNDNDMTA2LjIzNCA0Ny42ODc2IDEwNi41MDIgNDguMTc1NCAxMDUuOTE2IDQ3LjQzODdDMTA1LjMzIDQ2LjcwMjYgMTA1LjQyMSA0OC4wOTI0IDEwNi4wMTYgNDguODI5M1pNNDAuNTk5NiA3MC40MzA2QzQxLjYzNjkgNzEuMzQzOCA0MS42NjY0IDY5LjI2NzEgNDEuODkwNiA2Ny44NjAzQzQyLjE3MDQgNjYuMTA2MiA0Mi4yMDI1IDY0LjQ4OTMgNDIuODQzOCA2My4xNDk0QzQyLjE5OTcgNjIuMDQ3MyA0MS41NjEgNjAuOTQ2OSA0MC45MTk5IDU5Ljg0NDhDNDIuNzI2OCA1OS41NzA4IDQzLjg1NzUgNjEuMzcyOSA0NC4xMjMgNjUuMTQxNkM0NC4zMzU4IDY0LjI1MjQgNDQuNTQ5OSA2My4zNTg5IDQ0Ljc1OTggNjIuNDY5N0M0NS42MDc3IDYyLjkwMiA0Ni40NTI4IDYzLjMyNjUgNDcuMzAwOCA2My43NTg4QzQ3LjMwNjYgNjIuODc2MiA0Ny4zMDk2IDYxLjk5MjkgNDcuMzE4NCA2MS4xMTA0QzQ4LjM3MDUgNjEuNTYxIDQ5LjQyMDQgNjIuMDE5MSA1MC40NzI3IDYyLjQ2OTdDNTAuNDkwMSA2My4zMjgzIDUwLjUwNyA2NC4xODc2IDUwLjUyNzMgNjUuMDRDNTEuMTU4MiA2NS4wNCA1MS43ODkxIDY1LjA0IDUyLjQxOTkgNjUuMDRDNTIuNjM4NCA2Mi44MzY5IDUyLjg1ODYgNjAuNjI2MSA1My4wODAxIDU4LjQyMjlDNTMuNDc2NCA1OC4zNjIgNTMuODc3IDU4LjMwNDEgNTQuMjczNCA1OC4yNDMyQzU0LjI0NDMgNTcuNzEzNCA1NC4yMjI4IDU3LjE4NzIgNTQuMjU3OCA1Ni42NTczQzUzLjg0NjkgNTYuOTkyMyA1My40NTU3IDU3LjM2ODUgNTMuMDMzMiA1Ny42NzI5QzUyLjY4MzMgNTguODkwOCA1MS44NjIgNTYuOTUxOSA1MS43OTQ5IDU2LjQ0NjRDNTEuNTY3NyA1NC42ODc0IDUxLjg0MzggNTMuMzg0NiA1MS43NTM5IDUxLjczNTVDNTIuMTgyNCA1MS41MTAyIDUyLjYwMjggNTEuMjU2IDUzLjAyNTQgNTEuMDI0NkM1Mi4zOTAxIDUwLjE0NzggNTEuNzM2OSA0OS4yNjI2IDUxLjExMzMgNDguMzkxOEM1MS41MzMgNDYuODkzNiA1Mi41ODU1IDQ2LjUwMjkgNTIuMzI2MiA0NC4yOTgxQzUyLjE3NCA0My4wMjY2IDUxLjI5OTcgNDEuOTM5MSA1MC43NjM3IDQzLjc3NDdDNTAuMDgxNiA0Ni4xMTM0IDQ5LjY3NjUgNDguODI4NyA0OS44Mzk4IDUxLjcyNzdDNDguNDAxNyA1Mi4zODQ2IDQ3LjM2NzQgNTEuMTI5MiA0Ni4wMTE3IDUwLjQ0NjVDNDYuMDExNyA1MC40NDEzIDQ2LjAxMTcgNTAuNDM2MSA0Ni4wMTE3IDUwLjQzMDlDNDYuMDA5MSA1MC40MzEgNDYuMDA2NSA1MC40MzA3IDQ2LjAwMzkgNTAuNDMwOUM0NS45MTQ4IDQ5LjYyNDUgNDUuNjY0IDQ5LjA4OTIgNDUuNDIzOCA0OC40NTQzQzQ1LjgyNTkgNDcuMzQwMSA0Ni4yMzA3IDQ2LjIxNzEgNDYuNjMyOCA0NS4xMDI4QzQ0LjE5NjQgNDUuMjkxOSA0My4wNjggNDguMjQ4NyA0Mi44MjAzIDUzLjE1NzRDNDIuMjI1OSA1Mi43Nzk2IDQxLjkwNDYgNTEuNjk4OCA0MS4yNDAyIDUxLjg0NDlDNDAuNSA1NC4zMjM0IDM5Ljc1NjggNTYuNzk2IDM5LjAxMzcgNTkuMjc0NUMzOS40NDE4IDYxLjQ2NTQgMzkuODY4NyA2My42NjE2IDQwLjI5NjkgNjUuODUyNUMzOS44NzUxIDY2LjMxNDIgMzkuNDQyMyA2Ni43MzM2IDM5LjAyOTMgNjcuMjE5N0MzOS41MzYzIDY3Ljk2MzUgNDAuMDk1NiA2OS45ODYxIDQwLjU5OTYgNzAuNDMwNlpNMjMwLjQ2MSA0NC4xNjUzQzIzMC40NjEgNDMuNzIyNiAyMzAuNDYgNDMuMjggMjMwLjQ1NyA0Mi44MzcyQzIyOS42MDYgNDMuMjk5OCAyMjguNzU5IDQzLjc2NTMgMjI3LjkwOCA0NC4yMjc4QzIyOC4wMTkgNDUuMTEwOCAyMjguMTI0IDQ2LjAwMjggMjI4LjIzNCA0Ni44OTE4QzIyOC45NzggNDUuOTg0NSAyMjkuNzE4IDQ1LjA3MjcgMjMwLjQ2MSA0NC4xNjUzWk0zNjguOTY3IDQ1Ljc5MDNDMzY4LjUzOSA0NC45MTQzIDM2OC4xMTEgNDQuMDM5NyAzNjcuNjg2IDQzLjE1NzVDMzY3LjY4OCA0NC4wNDU1IDM2Ny42ODkgNDQuOTMzNSAzNjcuNjkxIDQ1LjgyMTZDMzY4LjExNyA0NS44MDk0IDM2OC41NDIgNDUuNzk2NCAzNjguOTY3IDQ1Ljc5MDNaTTcyLjgwMjcgNDQuNzI3OEM3Mi44MDI3IDQ0LjI4MjUgNzIuODAyNyA0My44MzcyIDcyLjgwMjcgNDMuMzkxOUM3Mi4zNzczIDQzLjM5OCA3MS45NTA4IDQzLjQwOTMgNzEuNTI1NCA0My40MTUzQzcxLjUyNTQgNDMuODU4IDcxLjUyNTQgNDQuMzAwNyA3MS41MjU0IDQ0Ljc0MzRDNzEuOTUwOCA0NC43Mzc0IDcyLjM3NzMgNDQuNzMzOSA3Mi44MDI3IDQ0LjcyNzhaTTM1My42NDYgNDYuMjA0NEMzNTMuNjQ2IDQ1LjMxNTIgMzUzLjY0MSA0NC40MjE3IDM1My42NDEgNDMuNTMyNUMzNTMuNDI4IDQzLjUzMjUgMzUzLjIxNiA0My41NDk5IDM1My4wMDQgNDMuNTU2QzM1My4wMDcgNDQuNDQ0IDM1My4wMSA0NS4zMzIgMzUzLjAxIDQ2LjIyQzM1My4yMjIgNDYuMjE5OSAzNTMuNDM0IDQ2LjIxMDQgMzUzLjY0NiA0Ni4yMDQ0Wk0zMDUuNzkzIDQ0LjE4ODhDMzA1Ljc5MyA0NS4wMjkyIDMwNi4zOTkgNDUuMDEzNiAzMDYuMzk2IDQ0LjE3MzFDMzA2LjM5MyA0My4zMzQzIDMwNS43OTIgNDMuMzUxNyAzMDUuNzkzIDQ0LjE4ODhaTTMwNC41MTYgNDQuMjJDMzA0LjUxOSA0NS4wNjA0IDMwNS4xMjIgNDUuMDQ0NyAzMDUuMTE5IDQ0LjIwNDRDMzA1LjExOSA0My4zNjQ3IDMwNC41MTQgNDMuMzgyIDMwNC41MTYgNDQuMjJaTTEzNC4wODggNDcuNjgwOUMxMzQuMDg4IDQ2LjM0NzYgMTM0LjA4MSA0NS4wMTQzIDEzNC4wNzggNDMuNjgxQzEzMy44NjYgNDMuNjgxIDEzMy42NTIgNDMuNjgyNyAxMzMuNDM5IDQzLjY4ODhDMTMzLjQ0MiA0NS4wMjI2IDEzMy40NDYgNDYuMzYyNyAxMzMuNDQ5IDQ3LjY5NjVDMTMzLjY2MiA0Ny42OTY1IDEzMy44NzUgNDcuNjg3IDEzNC4wODggNDcuNjgwOVpNNDkuMTg5NSA0NS4wNTU5QzQ5LjE4OTUgNDQuNjEwNiA0OS4xODk1IDQ0LjE2NTMgNDkuMTg5NSA0My43MkM0OC43NjM5IDQzLjcyIDQ4LjMzNzYgNDMuNzM3NCA0Ny45MTIxIDQzLjc0MzVDNDcuOTEyMSA0NC4xODYyIDQ3LjkxMjEgNDQuNjI4OSA0Ny45MTIxIDQ1LjA3MTZDNDguMzM3NiA0NS4wNzE2IDQ4Ljc2MzkgNDUuMDYyIDQ5LjE4OTUgNDUuMDU1OVpNMzEuOTQ1MyA0OS4zMjkzQzMxLjc5MiA1MC43Mzc2IDMyLjMxMTIgNTMuNzYxMyAzMy4yNDYxIDUxLjcwNDNDMzMuNDM4NCA1MS4yNzc5IDMzLjQxNTEgNDguMTc3IDM0LjE5MzQgNDcuOTdDMzQuNjI0NCA0OS4xNjkyIDM1LjA0NjUgNTAuNjEzNSAzNS40ODA1IDUxLjg5MThDMzYuMDgwOCA1MC41OTQ4IDM2Ljc4MzIgNDguNzY1MiAzNy4wMTM3IDQ3LjEwMjhDMzcuMTQ0OCA0Ni4xNDY3IDM2LjgzNjUgNDUuODk3NyAzNi43NTc4IDQ1LjExODRDMzYuNjQxMiA0Ni4wNjIxIDM2LjUzODUgNDYuOTY2NCAzNi40Mjc3IDQ3Ljg5MThDMzUuOTk5MyA0Ni41NjQzIDM1LjU3MSA0NS4yMzMzIDM1LjE0MjYgNDMuODk5N0MzMy44MDIyIDQzLjU5NTYgMzMuMTI4MSA0NC42MTUxIDMyLjIyNDYgNDYuNTYzN0MzMS40OTYzIDQ2LjEzNzYgMzAuNzY3MyA0NS43MjQzIDMwLjAzOTEgNDUuMjk4MUMyOS44Mjk1IDQ2LjYyOTcgMjkuNjE5NyA0Ny45NjY1IDI5LjQxMDIgNDkuMjk4MUMzMC4yNTUyIDQ5LjMxMDIgMzEuMTAwMyA0OS4yODY3IDMxLjk0NTMgNDkuMzI5M1pNMTg5LjYzMSA0NC40OTM0QzE4OS42MzEgNDUuMzMzOSAxOTAuMjM3IDQ1LjMxODMgMTkwLjIzNCA0NC40Nzc4QzE5MC4yMzQgNDMuNjM4OCAxODkuNjI5IDQzLjY1NjEgMTg5LjYzMSA0NC40OTM0Wk0zODguMTEzIDQ3Ljk3QzM4OC4xMTUgNDcuOTcgMzg4LjExNiA0Ny45NyAzODguMTE3IDQ3Ljk3QzM4Ny45OCA0Ni4yNDAzIDM4OC40NzMgNDUuNDY0OCAzODguNzQ0IDQzLjk1NDRDMzg4LjEwNiA0My45NzI3IDM4Ny40NjYgNDMuOTgzIDM4Ni44MjggNDQuMDAxM0MzODYuNzA5IDQ1LjMyODUgMzg3LjI2MyA0OC4zNTcxIDM4OC4xMTMgNDcuOTdaTTI4LjE0MjYgNDQuNjQ5N0MyOC4xNDU5IDQ1LjQ4OTIgMjguNzQ5IDQ1LjQ4MiAyOC43NDYxIDQ0LjY0MTlDMjguNzQ1NyA0My44MDIyIDI4LjEzOTYgNDMuODA5NSAyOC4xNDI2IDQ0LjY0OTdaTTE5LjE5OTIgNDkuNDE1MkMxOC4zNTA4IDQzLjMzODggMTYuMTUwNiA0MS41MjU2IDE2LjAwNzggNDkuNDU0M0MxNy4wNzE2IDQ5LjQ0MjEgMTguMTM1NCA0OS40Mjc0IDE5LjE5OTIgNDkuNDE1MlpNMjc0LjUyIDQ5LjcxMjFDMjc4LjExMyA0OS45MjUzIDI3Ni42NCA0NC40MzU0IDI3My44NjUgNDQuMzkxOUMyNzQuMDg0IDQ2LjE2NDEgMjc0LjMwMSA0Ny45Mzk5IDI3NC41MiA0OS43MTIxWk0zNjQuODI2IDQ3LjQ0NjVDMzY1LjE0NCA0Ny41OTI2IDM2NS40NjQgNDcuNzM4IDM2NS43ODEgNDcuODg0QzM2NC45OCA0Ni4yNDU3IDM2NC40NDYgNDQuNDIxOCAzNjMuMjE5IDQ0LjYxMDZDMzYzLjkxOCA0Ni40NjcyIDM2My4yNjYgNDYuODI4NiAzNjMuMjMgNDguNjEwNkMzNjMuNzYxIDQ4LjIyMDggMzY0LjI5MyA0Ny44MzAyIDM2NC44MjYgNDcuNDQ2NVpNMzYxLjk0NSA0NS45Nzc4QzM2MS45NDUgNDUuNTMzMiAzNjEuOTQ2IDQ1LjA4NjUgMzYxLjk0MyA0NC42NDE5QzM2MS4zMDUgNDQuNjYwMiAzNjAuNjY2IDQ0LjY3ODMgMzYwLjAyNyA0NC42OTY2QzM2MC4wMjcgNDUuMTQxMiAzNjAuMDI4IDQ1LjU4NzkgMzYwLjAzMSA0Ni4wMzI1QzM2MC42NjkgNDYuMDE0MiAzNjEuMzA3IDQ1Ljk5NjEgMzYxLjk0NSA0NS45Nzc4Wk00MTIuMzc3IDQ5Ljk5MzRDNDEyLjM3NyA0OC42NTQ4IDQxMi4zNzQgNDcuMzE2MyA0MTIuMzcxIDQ1Ljk3NzhDNDEyLjc5NCA0Ni4xOTcgNDEzLjIyIDQ2LjQwNyA0MTMuNjQzIDQ2LjYyNjJDNDEzLjAwNSA0NS45NzQ5IDQxMi4zNjMgNDUuMzMyMyA0MTEuNzI1IDQ0LjY4MDlDNDExLjczIDQ2LjQ1ODggNDExLjczMiA0OC4yMzkgNDExLjczOCA1MC4wMTY4QzQxMS45NTEgNTAuMDE2OCA0MTIuMTY0IDQ5Ljk5OTUgNDEyLjM3NyA0OS45OTM0Wk03NC4xMDE2IDQ1LjM3NjJDNzQuMTAyOSA0Ni4yMTQgNzQuNzA3OSA0Ni4yMDAyIDc0LjcwNTEgNDUuMzYwNkM3NC43MDQ3IDQ0LjUyMDkgNzQuMDk4NiA0NC41Mjk5IDc0LjEwMTYgNDUuMzc2MlpNNDA1LjM2OSA1MS40ODU1QzQwNS4zMDYgNTYuOTU1NSA0MDYuNjc2IDUyLjI5ODcgNDA3LjUyNyA1MS45Njk5QzQwOC42OCA1MS41MjA1IDQwOC4zMTYgNTMuMjI3OSA0MDkuMTcgNTAuNTU1OUM0MDkuMzkxIDQ5Ljg2NzkgNDEwLjA1IDQ3LjE5ODIgNDA5LjgwOSA0Ni4wOTVDNDA4Ljc1MSA0NS42MzIyIDQwNy42ODEgNDUuMjUzOSA0MDYuNjE3IDQ0LjgyMTZDNDA2LjgzNiA0Ni44MTgyIDQwNy4wNTQgNDguODA5MiA0MDcuMjcgNTAuODA1OUM0MDYuNjQgNTEuMDE5IDQwNS45NzggNTEuMzM5NCA0MDUuMzY5IDUxLjQ4NTVaTTE5Ny45MTggNDcuNjM0QzE5Ny45MTggNDYuNzQ0OCAxOTcuOTE1IDQ1Ljg1MTQgMTk3LjkxMiA0NC45NjIyQzE5Ny42OTkgNDQuOTYyMiAxOTcuNDg2IDQ0Ljk3OTUgMTk3LjI3MyA0NC45ODU2QzE5Ny4yNzMgNDUuODczNiAxOTcuMjc2IDQ2Ljc2MTYgMTk3LjI3OSA0Ny42NDk2QzE5Ny40OTIgNDcuNjQ5NiAxOTcuNzA1IDQ3LjY0MDEgMTk3LjkxOCA0Ny42MzRaTTI0NS43ODcgNDcuNzkwM0MyNDUuNzg3IDQ2LjkwMjMgMjQ1Ljc4MSA0Ni4wMTQzIDI0NS43ODEgNDUuMTI2MkMyNDUuMzU2IDQ1LjEzODQgMjQ0LjkyOSA0NS4xNTE0IDI0NC41MDQgNDUuMTU3NUMyNDQuODI0IDQ2LjA0MDQgMjQ1LjE0NSA0Ni45MTUyIDI0NS40NjkgNDcuNzk4MUMyNDUuNTc0IDQ3Ljc5ODEgMjQ1LjY4MiA0Ny43OTY0IDI0NS43ODcgNDcuNzkwM1pNMjQzLjIzNiA0Ny44NTI4QzI0My4yMzYgNDYuOTYzNiAyNDMuMjMgNDYuMDcwMSAyNDMuMjMgNDUuMTgwOUMyNDIuODA4IDQ2LjA4MjMgMjQyLjM4NSA0Ni45ODI2IDI0MS45NTkgNDcuODg0QzI0Mi4zODUgNDcuODcxOCAyNDIuODExIDQ3Ljg2NSAyNDMuMjM2IDQ3Ljg1MjhaTTQ5Ni45ODIgNTguNjcyOUM0OTcuNTM5IDU5LjI2MzcgNDk3LjcwMyA2MC44MDQ4IDQ5OC4yNDIgNTguNTYzNUM0OTguNzgxIDU2LjMyMjUgNDk4LjM1MyA1My45NTc1IDQ5OC42MzkgNTEuMzQ0OUM0OTguODQ5IDQ5LjQzOTUgNDk5Ljk3MSA0Ny41OTQxIDQ5OS43OTMgNDUuMjc0N0M0OTkuMTcyIDQ1LjQ4MTggNDk4LjUxOSA0NS43NDQ2IDQ5Ny44ODcgNDUuOTdDNDk3Ljg5NSA0OS4zMDA1IDQ5Ny45MDcgNTIuNjMxNSA0OTcuOTE2IDU1Ljk2MkM0OTYuODUyIDU1Ljk3NDIgNDk1Ljc5IDU2LjAxNjcgNDk0LjcyMSA1Ni4wMTY3QzQ5NC43MjIgNTYuMDE2NyA0OTQuNzIzIDU2LjAxNjcgNDk0LjcyNSA1Ni4wMTY3QzQ5NS4yMjYgNTguNzEwNSA0OTUuODg0IDU3LjUwNTUgNDk2Ljk4MiA1OC42NzI5Wk0zOTAuMDQ3IDQ1LjkxNTNDMzkwLjA0NyA0Ni43NTUgMzkwLjY1MiA0Ni43Mzc4IDM5MC42NSA0NS44OTk3QzM5MC42NDcgNDUuMDU5MyAzOTAuMDQ0IDQ1LjA3NTEgMzkwLjA0NyA0NS45MTUzWk0xODcuMDIxIDQ5Ljg5MThDMTg3LjAyMSA0OS44ODkyIDE4Ny4wMiA0OS44ODY2IDE4Ny4wMiA0OS44ODRDMTg2LjI4OCA0OC4zNjIgMTg1LjU1NyA0Ni44NDM1IDE4NC44MjggNDUuMzIxNkMxODQuNDAzIDQ2LjYwMDMgMTgzLjkwMSA0Ni40MDk3IDE4My4yNDggNDYuNjY1M0MxODMuMDM1IDQ4Ljg4ODMgMTgyLjgyNCA1MS4xMTQxIDE4Mi42MTEgNTMuMzM3MUMxODQuMjk5IDUxLjA3NzUgMTg0Ljc1OCA1NC4wNzM3IDE4Ni40NDUgNTQuNTc5MkMxODYuNjM4IDUzLjAyMDMgMTg2LjgyOSA1MS40NTA3IDE4Ny4wMjEgNDkuODkxOFpNMjMuNjc1OCA0Ni4wMzI1QzIzLjY3OTIgNDYuODcxOCAyNC4yODIyIDQ2Ljg2NDggMjQuMjc5MyA0Ni4wMjQ3QzI0LjI3OSA0NS4xODQ3IDIzLjY3MjkgNDUuMTkyMiAyMy42NzU4IDQ2LjAzMjVaTTExNC4zMTQgNDYuMDQ4MUMxMTQuMzE0IDQ2Ljg4NzYgMTE0LjkxOSA0Ni44Nzc5IDExNC45MTggNDYuMDQwM0MxMTQuOTE4IDQ1LjIwMDMgMTE0LjMxMiA0NS4yMDkxIDExNC4zMTQgNDYuMDQ4MVpNNDc5LjA2MSA0NS42ODg3QzQ3OC44NTEgNDYuMDg0MyA0NzguNjM4IDQ2LjQ3ODkgNDc4LjQyNiA0Ni44Njg0QzQ3OC4xMDUgNDYuNjkxOSA0NzcuNzg3IDQ2LjUxMzYgNDc3LjQ2NyA0Ni4zMzcyQzQ3OC4yNjggNDcuOTgwOCA0NzguODAxIDQ5LjgwMTkgNDgwLjAyNyA0OS42MjYyQzQ3OS43MDQgNDguMzE3IDQ3OS4zODEgNDYuOTk4IDQ3OS4wNjEgNDUuNjg4N1pNMTYwLjg5NSA0NS44MDU5QzE1OS45NjUgNDYuODQxMyAxNTkuNDgxIDQ3LjY5MTkgMTU4LjY2MiA0NS44NTI4QzE1OC41NTcgNDYuMDc4MSAxNTguNDQ5IDQ2LjI5OTMgMTU4LjM0NCA0Ni41MjQ3QzE1OS4xNDUgNDguMTY4NyAxNTkuNjc5IDQ5Ljk4NzYgMTYwLjkwMiA0OS44MDU5QzE2MC44OTkgNDguNDcyNiAxNjAuODk0IDQ3LjEzOTIgMTYwLjg5NSA0NS44MDU5Wk03OS44MzU5IDQ4LjYxODRDNzkuODM1OSA0Ny43MzA0IDc5LjgzMyA0Ni44NDI0IDc5LjgzMDEgNDUuOTU0NEM3OS42MTc0IDQ1Ljk1NDQgNzkuNDA0MSA0NS45NTYxIDc5LjE5MTQgNDUuOTYyMkM3OS4xOTEzIDQ2Ljg1MTQgNzkuMTk0NCA0Ny43NDQ4IDc5LjE5NzMgNDguNjM0Qzc5LjQwOTggNDguNjM0IDc5LjYyMzQgNDguNjI0NSA3OS44MzU5IDQ4LjYxODRaTTMwNy43MTMgNDYuODA1OUMzMDcuNzEzIDQ3LjY0NCAzMDguMzE3IDQ3LjYyNjcgMzA4LjMxNiA0Ni43OTAzQzMwOC4zMTMgNDUuOTQ5OCAzMDcuNzEgNDUuOTY1NCAzMDcuNzEzIDQ2LjgwNTlaTTE0NC4zMTggNDYuODEzN0MxNDQuMzIgNDcuNjUxMyAxNDQuOTI1IDQ3LjYzNzYgMTQ0LjkyMiA0Ni43OTgxQzE0NC45MjIgNDUuOTU4MiAxNDQuMzE1IDQ1Ljk3MzQgMTQ0LjMxOCA0Ni44MTM3Wk0zMDUuODAxIDQ2Ljg2MDZDMzA1LjgwNCA0Ny42OTg5IDMwNi40MDUgNDcuNjgxNiAzMDYuNDA0IDQ2Ljg0NUMzMDYuNDA0IDQ2LjAwNDUgMzA1Ljc5OCA0Ni4wMjAxIDMwNS44MDEgNDYuODYwNlpNNDkuMTk3MyA0OS4wNTU5QzQ4Ljc2OTIgNDguMTczNSA0OC4zNDQxIDQ3LjI4OTggNDcuOTE2IDQ2LjQwNzVDNDcuOTE2IDQ3LjI5NjcgNDcuOTE5IDQ4LjE5MDEgNDcuOTIxOSA0OS4wNzkzQzQ4LjM0NyA0OS4wNzkzIDQ4Ljc3MjEgNDkuMDYyIDQ5LjE5NzMgNDkuMDU1OVpNMzQwLjkwNCA0Ny4yMzU2QzM0MC45MDQgNDguMDc1NyAzNDEuNTEgNDguMDU5NCAzNDEuNTA4IDQ3LjIyQzM0MS41MDUgNDYuMzggMzQwLjkwMiA0Ni4zOTY3IDM0MC45MDQgNDcuMjM1NlpNMjg1LjQzIDUyLjcyNzdDMjg2LjI2IDUwLjcxMTggMjg3LjA4MyA0OC42ODI5IDI4Ny45MTQgNDYuNjczMUMyODYuMzYgNDYuMTczNyAyODYuODY3IDQ4LjM1MzEgMjg2LjAyMSA1MC4wOTQ5QzI4NS42NzIgNTAuODExOSAyODUuMTYzIDUwLjY3NSAyODQuNzUyIDUwLjc5MDJDMjg0LjMyNCA1Mi41NDMzIDI4NS4yNjUgNTMuOTE2MiAyODUuMjA1IDU1LjM1MjdDMjg1LjA4IDU4LjI1MTUgMjgzLjg5NyA2MC4xNDQyIDI4Ni4wMzkgNjAuMDcxM0MyODUuODIgNTcuNjEwOCAyODUuNjM3IDU1LjE3NiAyODUuNDMgNTIuNzI3N1pNMC42MDM0ODUgNDcuMzYwNkMwLjYwMjc1MyA0OC4xOTkgMC4wMDA3MzI0MjIgNDguMTk5IDAgNDcuMzYwNkMwIDQ2LjUyMDEgMC42MDM0ODUgNDYuNTIwMSAwLjYwMzQ4NSA0Ny4zNjA2Wk0xNzguMTUyIDU3LjQyMjlDMTc3LjcyMSA1Ni43NTk1IDE3Ny4yOSA1Ni4wOTI1IDE3Ni44NTkgNTUuNDIzQzE3Ni44NTkgNTMuNDI4MiAxNzYuODU5IDUxLjQzMzQgMTc2Ljg1OSA0OS40Mzg3QzE3Ny42MzIgNTAuMjYwNiAxNzguNDAxIDUxLjA4MzcgMTc5LjE3IDUxLjg5OTZDMTgwLjEwMSA1Mi4xNDgxIDE4MS4wMjQgNTIuNDExMSAxODEuOTYxIDUyLjY0MThDMTgxLjE3IDUxLjMwNDUgMTgxLjY3NCA0OS4wMDg1IDE4MC4zNDQgNDkuMzg0QzE3OS4zMTIgNDkuNjc2NSAxNzguNjAxIDUwLjM5ODYgMTc3LjUyOSA0OS4zNzYyQzE3Ny41MTIgNDguNTIzNSAxNzcuNTA1IDQ3LjYzMTcgMTc3LjQ5IDQ2Ljc2NjhDMTc1LjkyMSA0Ni40Mzg5IDE3Ni4xNTYgNDguMTA3OSAxNzYuMjIzIDUwLjc5OEMxNzYuMDA3IDQ5LjQ3MTkgMTc1Ljc5MiA0OC4xMzk5IDE3NS41NzYgNDYuODEzN0MxNzQuNzI1IDQ2LjgzMiAxNzMuODc0IDQ2Ljg1MDEgMTczLjAyMyA0Ni44Njg0QzE3My4zNTYgNDkuNzEwMyAxNzMuNjU3IDUxLjM4OTcgMTczLjAzNyA1NC4xNjUyQzE3My4zNTggNTQuODM1MSAxNzMuNjc4IDU1LjUxMDggMTc0LjAwMiA1Ni4xODA4QzE3NC4yMTIgNTUuMjg1OSAxNzQuNDIyIDU0LjM5NiAxNzQuNjM1IDUzLjUwMTFDMTc0Ljk2MSA1NC44MjIxIDE3NS4yOTEgNTYuMTM5MyAxNzUuNjE3IDU3LjQ1NDJDMTc2LjQ2MiA1Ny40NDIgMTc3LjMwNyA1Ny40MjkgMTc4LjE1MiA1Ny40MjI5Wk0zMzQuNTIzIDQ3LjQxNTNDMzM0LjUyNyA0OC4yNTQzIDMzNS4xMyA0OC4yMzE4IDMzNS4xMjcgNDcuMzkxOEMzMzUuMTI1IDQ2LjU1NTEgMzM0LjUyMSA0Ni41NzYgMzM0LjUyMyA0Ny40MTUzWk02LjQzNTUyIDUwLjg5OTZDNy4zMjQ1NSA0OS40MjU3IDcuNDk0NiA1MC43NzI2IDguMzUxNTMgNTAuODc2MkM4LjM1MTUzIDQ5LjU0MzQgOC4zNDQ3IDQ4LjIwOSA4LjM0MTc3IDQ2Ljg3NjJDNy43MDM1NSA0Ny4zMjY5IDcuMDY3OSA0Ny43Nzg4IDYuNDI5NjYgNDguMjM1NkM2LjQyOTY5IDQ5LjEyMjkgNi40MzI2MiA1MC4wMTIzIDYuNDM1NTIgNTAuODk5NlpNMjE5LjYyMyA0OS43NzQ2QzIxOS42MjMgNDguODg1NCAyMTkuNjE3IDQ3Ljk5MiAyMTkuNjE3IDQ3LjEwMjhDMjE4Ljk3OCA0Ni44NjA1IDIxNy41MzEgNDguMDQzOSAyMTcuNzA5IDQ5LjgyMTVDMjE4LjM0NyA0OS44MDMyIDIxOC45ODUgNDkuNzkyOSAyMTkuNjIzIDQ5Ljc3NDZaTTg4Ljc3NTQgNDkuODEzN0M4OC43NzU0IDQ4LjkyNTggODguNzcyNCA0OC4wMzc2IDg4Ljc2OTUgNDcuMTQ5N0M4OC41NTY5IDQ3LjE0OTcgODguMzQzNSA0Ny4xNTE0IDg4LjEzMDkgNDcuMTU3NUM4OC4xMzA4IDQ4LjA0NjcgODguMTMzOCA0OC45NDAxIDg4LjEzNjcgNDkuODI5M0M4OC4zNDk0IDQ5LjgyOTMgODguNTYyNyA0OS44MTk4IDg4Ljc3NTQgNDkuODEzN1pNMjY2LjIxMyA0OS4yNzQ2QzI2NS44OTIgNDguNjE3MSAyNjUuNTcyIDQ3Ljk1NTYgMjY1LjI1MiA0Ny4yOTgxQzI2NS4xNDcgNDcuNTIzNCAyNjUuMDQxIDQ3Ljc1MDcgMjY0LjkzNCA0Ny45N0MyNjQuOTM1IDQ3Ljk3IDI2NC45MzYgNDcuOTcgMjY0LjkzNyA0Ny45N0MyNjUuMjU4IDQ4LjYyNjkgMjY1LjU3OCA0OS4yODE3IDI2NS44OTggNDkuOTM4N0MyNjYuMDAzIDQ5LjcxNCAyNjYuMTA4IDQ5LjQ5MzMgMjY2LjIxMyA0OS4yNzQ2Wk0yMDguMTQ2IDU0LjA1NThDMjA5LjU4IDU0LjA4NTYgMjA5Ljc5OSA1Mi42ODY1IDIxMC4wNTMgNTAuMDAxMkMyMTAuNjE1IDUwLjExODEgMjExLjQ4OSA1MS4zNzQxIDIxMS45NjcgNTAuNjI2MkMyMTEuMzI5IDQ5LjUzMDUgMjEwLjY4OCA0OC40MzI5IDIxMC4wNDcgNDcuMzM3MkMyMTAuMDI3IDQ4LjIzMTEgMjEwLjEwNSA0OS4xMTMzIDIxMC4wNTMgNTAuMDAxMkMyMDguNzU5IDUwLjE5NjEgMjA4LjEwOSA1MS4yNDgxIDIwOC4xNDYgNTQuMDU1OFpNMjYwLjQ2OSA0Ny40MjMxQzI2MC42ODcgNDkuNDAwOCAyNjAuOTA0IDUxLjM4MjggMjYxLjExOSA1My4zNjA1QzI2MS43NTcgNTMuNTc5NyAyNjIuMzk5IDUzLjc5NzYgMjYzLjAzNyA1NC4wMTY3QzI2Mi4xOCA1MS44MTg3IDI2MS4zMjMgNDkuNjIxMiAyNjAuNDY5IDQ3LjQyMzFaTTI1OC41NTkgNTAuMTM0QzI1OC4xMyA0OS4yNTc0IDI1Ny43MDMgNDguMzc2MSAyNTcuMjc3IDQ3LjQ5MzRDMjU3LjI3NyA0OC4zODE0IDI1Ny4yOCA0OS4yNjk0IDI1Ny4yODMgNTAuMTU3NEMyNTcuNzA4IDUwLjE0NTMgMjU4LjEzMyA1MC4xNDYyIDI1OC41NTkgNTAuMTM0Wk0yMDQuOTU5IDUzLjQ1NDJDMjAzLjk0IDUyLjI2NjYgMjA0LjczNCA1MC40NjQ1IDIwNC4yMDEgNDguODk5NkMyMDMuOTc5IDQ4LjI1MDkgMjAyLjg4MSA0OS4wOTQxIDIwMi43MjEgNDcuNTAxMkMyMDIuNTczIDQ3Ljc2MjMgMjAyLjUwMyA0Ny45NTggMjAyLjM4NyA0OC4xODg3QzIwMy4xMzUgNTAuMTY2OSAyMDMuODg0IDUyLjE0OTcgMjA0LjYzMyA1NC4xMzM5QzIwNC43NDMgNTMuOTAyOCAyMDQuODMxIDUzLjY5NzUgMjA0Ljk1OSA1My40NTQyWk0zMDUuNzgzIDQ4Ljg2MDZDMzA1Ljc4NSA0OC44NjA2IDMwNS43ODYgNDguODYwNiAzMDUuNzg3IDQ4Ljg2MDZDMzA1LjI1NCA0OC40MjgzIDMwNC43MjEgNDcuOTk2IDMwNC4xODggNDcuNTYzN0MzMDQuMDgzIDQ3Ljc4OTEgMzAzLjk3NyA0OC4wMTggMzAzLjg2OSA0OC4yNDM0QzMwNC41MDcgNDguODk1IDMwNS4xNDkgNDkuNTM3MSAzMDUuNzg3IDUwLjE4ODdDMzA1Ljc4NyA0OS43NDU5IDMwNS43ODYgNDkuMzAzMyAzMDUuNzgzIDQ4Ljg2MDZaTTMwMy4yMzYgNDguOTMwOUMzMDEuNTM0IDQ4LjUyODkgMjk5LjgyOSA0OC4xMjk3IDI5OC4xMjcgNDcuNzI3OEMyOTguMzM3IDQ5LjI4NjEgMjk4LjU1IDUwLjg1NTIgMjk4Ljc2IDUyLjQwNzRDMjk5Ljg4NyA1My4wODMgMzAwLjI5IDUyLjQzODQgMzAwLjc2OCA1NC44NjA1QzMwMC45OTUgNTYuMDExMiAzMDEuMTU1IDU4LjM3MzkgMzAxLjk4MiA1OC4yOTAxQzMwMi40MDIgNTUuMTg0MiAzMDIuODIgNTIuMDQ4OSAzMDMuMjM2IDQ4LjkzMDlaTTE5My40NzEgNDguNDA3NUMxOTMuNDc0IDQ5LjI0NTggMTk0LjA3MyA0OS4yMjg1IDE5NC4wNzIgNDguMzkxOEMxOTQuMDcyIDQ3LjU1MTMgMTkzLjQ2OCA0Ny41NjcgMTkzLjQ3MSA0OC40MDc1Wk0yOTMuNjk5IDU1Ljg1MjZDMjk1LjM0IDU0LjIyMDQgMjk2LjgzNiA1Mi43MTA3IDI5Ni44NzEgNDguNDIzMUMyOTUuNjc2IDQ2Ljc0ODUgMjk2Ljc4IDQ5LjA5MTggMjk2LjA0OSA1MC40MDc0QzI5NS4zMTcgNTEuNzIyMyAyOTMuMjg1IDUyLjIyOTYgMjkzLjY5OSA1NS44NTI2Wk01MDIuMzY3IDQ5LjIyNzdDNTAzLjIxNSA0OC43NjUgNTA0LjA2MyA0OC4zMDk0IDUwNC45MTQgNDcuODUyOEM1MDQuOTE3IDQ4Ljc0MDggNTA0LjkyNCA0OS42Mjg4IDUwNC45MjQgNTAuNTE2OEM1MDQuMDczIDUwLjk3MzYgNTAzLjIyNiA1MS40NDI4IDUwMi4zNzUgNTEuODk5NkM1MDIuMzcyIDUxLjAxMDQgNTAyLjM2NyA1MC4xMTcgNTAyLjM2NyA0OS4yMjc3Wk0zNy43MjY2IDQ4LjU0MDNDMzcuNzI2NiA0OS4zODA3IDM4LjMzMSA0OS4zNzI5IDM4LjMyODEgNDguNTMyNUMzOC4zMjcxIDQ3LjY5NDEgMzcuNzIzOCA0Ny43MDA3IDM3LjcyNjYgNDguNTQwM1pNMzgxLjExOSA0OC44MTM3QzM4MS4xMTkgNDkuNjUzNiAzODEuNzI1IDQ5LjYzNjggMzgxLjcyMyA0OC43OTgxQzM4MS43MiA0Ny45NTc5IDM4MS4xMTcgNDcuOTc0MSAzODEuMTE5IDQ4LjgxMzdaTTQyMy44NjMgNDkuNjczMUM0MjMuODYzIDQ5LjIyODYgNDIzLjg2NCA0OC43ODE2IDQyMy44NjEgNDguMzM3MUM0MjMuNDM2IDQ4LjM0OTMgNDIzLjAxIDQ4LjM2NCA0MjIuNTg0IDQ4LjM3NjJDNDIyLjU4NCA0OC44MjA4IDQyMi41ODUgNDkuMjY3NSA0MjIuNTg4IDQ5LjcxMjFDNDIzLjAxMyA0OS42OTk5IDQyMy40MzggNDkuNjg1MiA0MjMuODYzIDQ5LjY3MzFaTTQ3My4wMSA1MS4wOTQ5QzQ3My4wMSA1MC4yMDY5IDQ3My4wMDMgNDkuMzE4OSA0NzMgNDguNDMwOUM0NzIuNTc1IDQ4LjQzNyA0NzIuMTUgNDguNDQ4MiA0NzEuNzI1IDQ4LjQ1NDNDNDcyLjA0NSA0OS4zMzcxIDQ3Mi4zNzEgNTAuMjE5OSA0NzIuNjkxIDUxLjEwMjdDNDcyLjc5NiA1MS4xMDI3IDQ3Mi45MDUgNTEuMTAxIDQ3My4wMSA1MS4wOTQ5Wk0xNTUuNzkzIDQ4LjU3OTNDMTU2LjAwNiA0OC41NzMyIDE1Ni4yMTkgNDguNTcxNSAxNTYuNDMyIDQ4LjU3MTVDMTU2LjQzNSA0OS40NTk1IDE1Ni40MzcgNTAuMzQ3NSAxNTYuNDM4IDUxLjIzNTVDMTU2LjIyNSA1MS4yNDE2IDE1Ni4wMTIgNTEuMjUxMiAxNTUuNzk5IDUxLjI1MTJDMTU1Ljc5NiA1MC4zNjIgMTU1Ljc5MyA0OS40Njg1IDE1NS43OTMgNDguNTc5M1pNMzE1LjM3MSA1MS4yNjY4QzMxNS4zNyA1MS4yNjY4IDMxNS4zNjggNTEuMjY2OCAzMTUuMzY3IDUxLjI2NjhDMzE1LjM2NyA1MC4zNzg4IDMxNS4zNjEgNDkuNDkwOCAzMTUuMzYxIDQ4LjYwMjhDMzE0LjkzOSA0OS41MDM3IDMxNC41MTYgNTAuNDA0OSAzMTQuMDk0IDUxLjMwNThDMzE0LjUxOSA1MS4yOTM3IDMxNC45NDYgNTEuMjc5IDMxNS4zNzEgNTEuMjY2OFpNODMuMDQ0OSA0OS4yNDM0QzgzLjA0NjEgNTAuMDgxNCA4My42NTEzIDUwLjA2NzQgODMuNjQ4NCA0OS4yMjc3QzgzLjY0NzkgNDguMzg4MyA4My4wNDIgNDguMzk3MiA4My4wNDQ5IDQ5LjI0MzRaTTE1Mi42MTEgNTEuOTg1NUMxNTIuNjEgNTEuOTg1NSAxNTIuNjA5IDUxLjk4NTUgMTUyLjYwNyA1MS45ODU1QzE1Mi4zOTIgNTAuODc3MiAxNTIuMTc2IDQ5Ljc2NzUgMTUxLjk2MyA0OC42NjUzQzE1MS41NDEgNDkuNTU5NSAxNTEuMTE2IDUwLjQ1ODUgMTUwLjY5MyA1MS4zNTI3QzE1MS4yMjcgNTEuNzg1IDE1MS43NiA1Mi4yMTczIDE1Mi4yOTMgNTIuNjQ5NkMxNTIuMzk4IDUyLjQyNDMgMTUyLjUwNCA1Mi4yMTA4IDE1Mi42MTEgNTEuOTg1NVpNNDA0LjA5NCA1NC4yMTk5QzQwNC4zMDQgNTMuMTA1NSA0MDQuNTEzIDUxLjk4MjggNDA0LjcyMyA1MC44Njg0QzQwNC4wODQgNTAuMjE2NyA0MDMuNDQzIDQ5LjU2NjkgNDAyLjgwNSA0OC45MTUzQzQwMi44MDMgNDguOTE1MyA0MDIuODAyIDQ4LjkxNTMgNDAyLjgwMSA0OC45MTUzQzQwMy4wMTkgNTAuNjg3NiA0MDMuMjM2IDUyLjQ2MzIgNDAzLjQ1NSA1NC4yMzU1QzQwMy42NjggNTQuMjM1NSA0MDMuODgxIDU0LjIyNTkgNDA0LjA5NCA1NC4yMTk5Wk0xOTkuODU0IDQ5LjU4NzFDMTk5Ljg1NCA1MC40MjcgMjAwLjQ1OSA1MC40MTAzIDIwMC40NTcgNDkuNTcxNUMyMDAuNDU3IDQ4LjczMTMgMTk5Ljg1MSA0OC43NDc2IDE5OS44NTQgNDkuNTg3MVpNMzk2LjEwNCA0OS4xMTA2QzM5NS43MTYgNTAuMzEwNCAzOTYuOTkgNTIuNTU1NiAzOTYuMTA0IDUzLjAyNDZDMzk1LjA1MSA1My41Nzg3IDM5NC4xODMgNTIuNzM1OCAzOTMuMjM4IDUxLjg1MjdDMzkzLjg1NiA1Ny44MTUyIDM5Ni4yNDMgNTMuNTI1NiAzOTguMzU0IDU1LjcxMkMzOTcuNjA0IDUzLjUxOTUgMzk2Ljg1IDUxLjI4NDggMzk2LjEwNCA0OS4xMTA2Wk0zOTIuNTkyIDUxLjE4ODdDMzkyLjI3MSA1MC41MzA5IDM5MS45NSA0OS44NzYgMzkxLjYyOSA0OS4yMTIxQzM5MS41MjQgNDkuNDM2NSAzOTEuNDIgNDkuNjU5NyAzOTEuMzEyIDQ5Ljg4NEMzOTEuNjMzIDUwLjU0MTggMzkxLjk1NyA1MS4yMDQ1IDM5Mi4yNzcgNTEuODY4M0MzOTIuMzgyIDUxLjY0MzMgMzkyLjQ4NyA1MS40MTM3IDM5Mi41OTIgNTEuMTg4N1pNMzM2LjQzNiA1My4zNjA1QzMzNi40MzYgNTIuMDI4IDMzNi40MyA1MC42OTMxIDMzNi40MjQgNDkuMzYwNkMzMzUuOTk4IDQ5LjM3MjcgMzM1LjU3MiA0OS4zNzk2IDMzNS4xNDYgNDkuMzkxOEMzMzUuMTQ5IDUwLjcyNDYgMzM1LjE1MiA1Mi4wNTg5IDMzNS4xNTggNTMuMzkxN0MzMzUuNTg0IDUzLjM3OTYgMzM2LjAxIDUzLjM3MjcgMzM2LjQzNiA1My4zNjA1Wk0zMzQuNTEgNDkuNDE1MkMzMzMuODcxIDQ5LjQzMzUgMzMzLjIzMiA0OS40NTE3IDMzMi41OTQgNDkuNDY5OUMzMzIuNTk1IDQ5LjQ2OTkgMzMyLjU5NiA0OS40Njk5IDMzMi41OTggNDkuNDY5OUMzMzIuNTk4IDQ5LjY5MTMgMzMyLjU5OCA0OS45MTI2IDMzMi41OTggNTAuMTM0QzMzMi45MTggNTAuNzkwOSAzMzMuMjM4IDUxLjQ0NTggMzMzLjU1OSA1Mi4xMDI3QzMzMy44NzYgNTEuMjA3NCAzMzQuMTkyIDUwLjMxMDUgMzM0LjUxIDQ5LjQxNTJaTTQzMi4xNjQgNTAuNzc0NkM0MzIuMTY0IDUwLjMzMDQgNDMyLjE2NSA0OS44ODI5IDQzMi4xNjIgNDkuNDM4N0M0MzEuNzM3IDQ5LjQ1MDkgNDMxLjMxIDQ5LjQ2NTYgNDMwLjg4NSA0OS40Nzc3QzQzMC44ODUgNDkuOTIyMyA0MzAuODg2IDUwLjM2OTEgNDMwLjg4OSA1MC44MTM3QzQzMS4zMTQgNTAuODAxNSA0MzEuNzM5IDUwLjc4NjggNDMyLjE2NCA1MC43NzQ2Wk00ODguOTc3IDU0Ljc5MDJDNDg5LjA0NCA1Mi4yMjYxIDQ4OC4xNjYgNTEuMTM2MSA0ODcuMzY3IDQ5LjQ4NTZDNDg2LjI4IDUxLjM3MzUgNDg2LjM2IDUzLjQxNDIgNDg2LjQzIDU2LjE3M0M0ODcuMjgxIDU1LjcxMDIgNDg4LjEyOSA1NS4yNDY4IDQ4OC45NzcgNTQuNzkwMlpNMzMxLjMzOCA1MC4xNjUyQzMzMS4zNDEgNTEuMDA1MyAzMzEuOTQ0IDUwLjk4ODkgMzMxLjk0MSA1MC4xNDk2QzMzMS45NDEgNDkuMzA5NiAzMzEuMzM2IDQ5LjMyNjIgMzMxLjMzOCA1MC4xNjUyWk00NzYuODA3IDUyLjYzNEM0NzcuNjI5IDU1LjE1NTQgNDc3LjY2MiA1OC4xODAyIDQ3OS40MDIgNTQuMjgyNEM0NzguNjUzIDUyLjc5NjMgNDc3Ljg5OSA1MS4yMTEzIDQ3Ny4xNSA0OS42ODg3QzQ3Ni42MiA1MC4zMzM5IDQ3Ni4wOTQgNTEuMDkwNCA0NzUuNTY2IDUxLjY4MDhDNDc1LjY3NSA1My41MzY3IDQ3Ni4zNyA1MS4yOTU3IDQ3Ni44MDcgNTIuNjM0Wk00MjAuNjgyIDUxLjc2NjhDNDIxLjAwMiA1Mi40MjQyIDQyMS4zMjIgNTMuMDg1OSA0MjEuNjQzIDUzLjc0MzNDNDIxLjc0OCA1My43NDMzIDQyMS44NTYgNTMuNzQxNiA0MjEuOTYxIDUzLjczNTVDNDIxLjk1OCA1Mi40MDIyIDQyMS45NTIgNTEuMDY4OSA0MjEuOTQ5IDQ5LjczNTZDNDIxLjUyOCA1MC40MTU2IDQyMS4xMDYgNTEuMDg2OCA0MjAuNjgyIDUxLjc2NjhaTTMxOS41MTYgNTMuODI5MkMzMTkuNjIxIDUyLjQ5NTcgMzE5LjcyNiA1MS4xNTUgMzE5LjgzNCA0OS44MjE1QzMxOS4xOTYgNTAuMjg0MSAzMTguNTYgNTAuNzQxNiAzMTcuOTIyIDUxLjIwNDNDMzE4LjEzOSA1Mi45NzUxIDMxOC4zNTcgNTQuNzQ1OSAzMTguNTc0IDU2LjUxNjdDMzE4Ljg4OSA1NS42MTU5IDMxOS4yMDQgNTQuNzI0IDMxOS41MTYgNTMuODI5MlpNMzY2Ljc1NCA1My44NjA1QzM2Ny40MDQgNTIuNjM2MyAzNjcuODIzIDUxLjc0NzggMzY3LjcwMyA0OS44MjkzQzM2Ny4yNzggNDkuODQxNSAzNjYuODUxIDQ5Ljg1NDUgMzY2LjQyNiA0OS44NjA2QzM2Ni40MjkgNTEuMTkzMyAzNjYuNDM1IDUyLjUyNzcgMzY2LjQzOCA1My44NjA1QzM2Ni41NDIgNTMuODYwNSAzNjYuNjQ5IDUzLjg2NjUgMzY2Ljc1NCA1My44NjA1Wk0zNjUuMTU0IDUyLjU2MzZDMzY1LjE1NCA1MS42NzU2IDM2NS4xNDggNTAuNzg3NiAzNjUuMTQ4IDQ5Ljg5OTZDMzY0LjkzNiA0OS44OTk2IDM2NC43MjIgNDkuOTA5MiAzNjQuNTEgNDkuOTE1MkMzNjQuNTEgNTAuODA0NCAzNjQuNTE2IDUxLjY5NzkgMzY0LjUxNiA1Mi41ODcxQzM2NC43MjggNTIuNTg3MSAzNjQuOTQyIDUyLjU2OTcgMzY1LjE1NCA1Mi41NjM2Wk00NTkuOTQ5IDU1LjQwNzNDNDYwLjY4NiA1NS44Mjc0IDQ2MS40MjMgNTYuMjYwNyA0NjIuMTYgNTYuNjgwOEM0NjIuMTcyIDU1LjgxNjcgNDYyLjE4NSA1NC45NDMzIDQ2Mi4xOTkgNTQuMDc5MkM0NjIuNjEzIDUzLjYwNDQgNDYzLjAzIDUzLjEyMjcgNDYzLjQ0MyA1Mi42NDE4QzQ2Mi4zODUgNTIuNjUzOSA0NjEuMzMgNTIuNjY4NiA0NjAuMjcxIDUyLjY4MDhDNDU5LjgzNyA1MS44MTYzIDQ1OS40MDMgNTAuOTUxNyA0NTguOTY5IDUwLjA4NzFDNDU5LjE4NyA1MS44NTI4IDQ1OS40MDYgNTMuNjE4MiA0NTkuNjI1IDU1LjM4MzlDNDU4Ljk5IDU2LjA3MjEgNDU4LjM1MSA1Ni43NjYgNDU3LjcxMyA1Ny40NTQyQzQ1OC4xMzkgNTguMTEwNCA0NTguNTY2IDU4Ljc2NjcgNDU4Ljk5MiA1OS40MjI5QzQ1OS4zMTMgNTguMDgzMiA0NTkuNjI5IDU2Ljc0MSA0NTkuOTQ5IDU1LjQwNzNaTTMwOC4zNjMgNTAuNzkwMkMzMDguMzY2IDUxLjYzMDcgMzA4Ljk3IDUxLjYxNTEgMzA4Ljk2NyA1MC43NzQ2QzMwOC45NjYgNDkuOTM2NSAzMDguMzYyIDQ5Ljk1MzkgMzA4LjM2MyA1MC43OTAyWk0yNTYuNjc0IDU2Ljg2ODNDMjU3LjMwNiA1Ny4wNjkyIDI1Ny45NDIgNTcuMjY4OSAyNTguNTc0IDU3LjQ2OThDMjU4LjAzOCA1NS40ODYgMjU3LjUwMyA1My40OTg4IDI1Ni45NjcgNTEuNTA5QzI1Ni45NyA1Mi44NDIgMjU2Ljk3NCA1NC4xNzU5IDI1Ni45NzcgNTUuNTA4OUMyNTYuNDQ2IDU1LjUyMTEgMjU1LjkxMyA1NS41MzU4IDI1NS4zODMgNTUuNTQ4QzI1NS41OTMgNTMuNzY0NiAyNTUuNzk5IDUxLjk3OTkgMjU2LjAwNiA1MC4xOTY1QzI1Mi43MDMgNTIuNDQ5OSAyNTMuOCA1OC41NzQ0IDI1Ni42NjIgNTkuNTI0NUMyNTYuNjY4IDU4LjY0MjEgMjU2LjY3MSA1Ny43NTA3IDI1Ni42NzQgNTYuODY4M1pNNDUxLjk1MyA1MS41OTQ5QzQ1MS45NTMgNTEuMTUyMiA0NTEuOTUxIDUwLjcwOTUgNDUxLjk1MSA1MC4yNjY4QzQ1MS41MjYgNTAuMjc5IDQ1MS4wOTkgNTAuMjg1OSA0NTAuNjc0IDUwLjI5OEM0NTAuNjc0IDUwLjc0MDcgNDUwLjY3MyA1MS4xODM1IDQ1MC42NzYgNTEuNjI2MkM0NTEuMTAxIDUxLjYxNCA0NTEuNTI4IDUxLjYwNzEgNDUxLjk1MyA1MS41OTQ5Wk00My4xODc1IDU1Ljc5OEM0My4xODg4IDU1Ljc5NTQgNDMuMTkwMSA1NS43OTI4IDQzLjE5MTQgNTUuNzkwMUM0Mi41NjQ3IDU1LjY1NjIgNDIuNzk3IDU0LjA4NTggNDIuODI2MiA1My4xNDE4QzQ0LjE0NjcgNTMuMDY4OCA0NC42ODY3IDUwLjUwODMgNDYuMDAzOSA1MC40MzA5QzQ2LjAwNDUgNTAuNDM2MSA0Ni4wMDUyIDUwLjQ0MTMgNDYuMDA1OSA1MC40NDY1QzQ2LjAwNzggNTAuNDQ2NSA0Ni4wMDk4IDUwLjQ0NjUgNDYuMDExNyA1MC40NDY1QzQ2LjAxNzggNTIuODY3NyA0NS4yMTU1IDUzLjc2NTMgNDQuNzQ0MSA1NS43OTAxQzQ1LjE3MjYgNTYuNjc5MyA0NS41OTg4IDU3LjU2MzMgNDYuMDI3MyA1OC40NDY0QzQ1LjA4MDEgNTcuNTYzMyA0NC4xMzQ4IDU2LjY4MTEgNDMuMTg3NSA1NS43OThaTTE5MC45MDggNTMuMTMzOUMxOTAuOTA4IDUyLjI0NDcgMTkwLjkwMiA1MS4zNTEzIDE5MC45MDIgNTAuNDYyMUMxOTAuNDc3IDUwLjQ3NDMgMTkwLjA1MSA1MC40ODEyIDE4OS42MjUgNTAuNDkzNEMxODkuNjI1IDUxLjM4MjYgMTg5LjYyOCA1Mi4yNzYgMTg5LjYzMSA1My4xNjUyQzE5MC4wNTYgNTMuMTUzIDE5MC40ODMgNTMuMTQ2MSAxOTAuOTA4IDUzLjEzMzlaTTEyNS40ODIgNTMuMTgwOEMxMjUuOCA1Mi4yODU3IDEyNi4xMTggNTEuMzg4NSAxMjYuNDM2IDUwLjQ5MzRDMTI2LjAxIDUwLjQ5OTQgMTI1LjU4NSA1MC41MDQ2IDEyNS4xNiA1MC41MTY4QzEyNS4xNiA1MS40MDYgMTI1LjE2MyA1Mi4yOTk0IDEyNS4xNjYgNTMuMTg4NkMxMjUuMjcxIDUzLjE4ODYgMTI1LjM3OCA1My4xODY5IDEyNS40ODIgNTMuMTgwOFpNMzkwLjY3NiA1MC41NzE1QzM5MC4yNTQgNTEuMjQ1OSAzODkuODMgNTEuOTI4MyAzODkuNDA4IDUyLjYwMjdDMzg5LjcyOSA1My4yNjA1IDM5MC4wNSA1My45MTU0IDM5MC4zNzEgNTQuNTc5MkMzOTAuNDc2IDU0LjU3OTIgMzkwLjU4MyA1NC41ODUzIDM5MC42ODggNTQuNTc5MkMzOTAuNjg1IDUzLjI0NTQgMzkwLjY3OSA1MS45MDUzIDM5MC42NzYgNTAuNTcxNVpNMzM3LjcyNSA1MS4zMjE1QzMzNy43MjUgNTIuMTYxOSAzMzguMzMxIDUyLjE0NiAzMzguMzI4IDUxLjMwNThDMzM4LjMyOCA1MC40NjYyIDMzNy43MjMgNTAuNDgzMyAzMzcuNzI1IDUxLjMyMTVaTTIyOS44NDYgNTMuNTI0NkMyMjkuODQ2IDUyLjYzNTQgMjI5Ljg0IDUxLjc0MTkgMjI5Ljg0IDUwLjg1MjdDMjI5LjYyNyA1MC44NTI3IDIyOS40MTQgNTAuODcwMSAyMjkuMjAxIDUwLjg3NjJDMjI5LjIwMSA1MS43NjQyIDIyOS4yMDcgNTIuNjUyMiAyMjkuMjA3IDUzLjU0MDJDMjI5LjQyIDUzLjU0MDIgMjI5LjYzMyA1My41MzA3IDIyOS44NDYgNTMuNTI0NlpNMjIxLjQ0OSA1NS4wMzI0QzIyMi4wOTggNTMuODQzNyAyMjAuNjYxIDUwLjU4MjYgMjIwLjM2NyA1MS4xMTg0QzIxOS43MTcgNTIuMzA2MSAyMjEuMTU1IDU1LjU2ODMgMjIxLjQ0OSA1NS4wMzI0Wk00MjAuNjk1IDU3LjA5NDhDNDE5LjgzMyA1NS40MDc5IDQyMC4wMjggNTMuMzg4MSA0MjAuMDQzIDUxLjExMDVDNDE5LjYxNyA1MS4xMjI3IDQxOS4xOTEgNTEuMTM3NCA0MTguNzY2IDUxLjE0OTZDNDE5LjM3MiA1My40MzkyIDQxOS4zOTUgNTUuOTU5NiA0MjAuMzc3IDU3Ljc3NDVDNDIwLjQ4MiA1Ny41NDkyIDQyMC41ODcgNTcuMzIwMiA0MjAuNjk1IDU3LjA5NDhaTTQ2NS45OTYgNTIuNTc5M0M0NjUuOTk2IDUyLjEzNDcgNDY1Ljk5NyA1MS42ODc5IDQ2NS45OTQgNTEuMjQzM0M0NjUuNTY5IDUxLjI1NTUgNDY1LjE0MiA1MS4yNzAyIDQ2NC43MTcgNTEuMjgyNEM0NjQuNzE3IDUxLjcyNjYgNDY0LjcxOCA1Mi4xNzQxIDQ2NC43MjEgNTIuNjE4M0M0NjUuMTQ2IDUyLjYwNjIgNDY1LjU3MSA1Mi41OTE0IDQ2NS45OTYgNTIuNTc5M1pNNTEuMTAxNiA1Mi4zNjgzQzUxLjEwMTYgNTMuMjA4OCA1MC40OTggNTMuMjE2NiA1MC40OTggNTIuMzc2MUM1MC40OTU4IDUxLjUzODEgNTEuMTAwMSA1MS41MzE0IDUxLjEwMTYgNTIuMzY4M1pNMjQ1LjE2IDUxLjgwNThDMjQ0LjUyNSA1Mi40ODggMjQzLjg4NSA1My4xNzA2IDI0My4yNSA1My44NTI3QzI0My42NzggNTQuNTEwNCAyNDQuMTA2IDU1LjE2MzYgMjQ0LjUzMSA1NS44MjE0QzI0NC43NDEgNTQuNDgxNiAyNDQuOTUgNTMuMTM5NSAyNDUuMTYgNTEuODA1OFpNMjUzLjUzMSA4Mi4yNTg1QzI1NC43IDgyLjM2MjEgMjU1LjY1NyA4NC41OTg0IDI1Ni43MjEgODIuODQ0NEMyNTUuODY3IDgyLjE5ODggMjU1LjAxNCA4MS41NjA0IDI1NC4xNiA4MC45MTQ4QzI1NC4xMDggNzkuNDA0NyAyNTUuMDcgNzguNjY5IDI1NC43OTEgNzYuODkxNEMyNTUuMjE2IDc2Ljg3OTIgMjU1LjY0MSA3Ni44NjYyIDI1Ni4wNjYgNzYuODYwMUMyNTYuMDY2IDc2LjYzODggMjU2LjA2NiA3Ni40MTc0IDI1Ni4wNjYgNzYuMTk2MUMyNTUuNjQxIDc1LjUzODggMjU1LjIxMyA3NC44Nzg2IDI1NC43ODUgNzQuMjI3NEMyNTQuNzg1IDc1LjExNjYgMjU0Ljc4OCA3Ni4wMDIyIDI1NC43OTEgNzYuODkxNEMyNTQuNTc4IDc2Ljg5MTQgMjU0LjM2NSA3Ni45MDg3IDI1NC4xNTIgNzYuOTE0OEMyNTQuMTQ5IDc1LjU4MTUgMjU0LjE0NiA3NC4yNDgyIDI1NC4xNDMgNzIuOTE0OUMyNTMuNTA0IDczLjE1MjMgMjUyLjg2OSA3My4zOTAxIDI1Mi4yMyA3My42MzM2QzI1My4xMTcgNzEuODkxOCAyNTIuNzkxIDY5LjkyMjkgMjUyLjg1NSA2Ny42MDI1QzI1My4zODMgNjcuNzA2MSAyNTMuODU0IDY4LjA4MjUgMjU0LjExMyA2Ni44MzY5QzI1NC42MDYgNjQuNDU1NSAyNTQuODcyIDYyLjE3NjMgMjU0Ljc1IDU5LjU2MzVDMjUzLjE5NCA2MS4zNTk5IDI1My4wNTkgNjQuMjA0NyAyNTIuODU1IDY3LjYwMjVDMjUxLjE1MSA2Ny4zNjUgMjUxLjMwNyA2NC43OTgzIDI1MC4zMTYgNjMuMDg2OUMyNDguMjI0IDU5LjQ3NiAyNDcuNDI4IDYxLjcxOTUgMjQ3LjEwNyA2Ni40MDcyQzI0NS4xMTcgNjMuMjA5NyAyNDMuOTY3IDYzLjI3NTUgMjQxLjk5NCA2Ni41NEMyNDIuMjUxIDY0LjMyOTIgMjQxLjA4MSA2My4zMjU1IDI0MC43ODEgNjEuODc2QzI0MC40ODYgNjAuNDI5IDI0MS4yMzcgNjAuMDAxNiAyNDEuMjcxIDU5LjA5NDhDMjQxLjMzMyA1Ny41MTgxIDI0MC43MzIgNTYuODY2MiAyNDAuNzU4IDU1LjQ1NDJDMjQwLjc3MiA1NC43MDUxIDI0MS4yOTggNTQuNTI1MSAyNDEuMjQ4IDUzLjg5MTdDMjQxLjEyNSA1Mi4zODM4IDI0MC4wNTQgNTEuNjk1MiAyMzkuMzk4IDUxLjk2MjFDMjM5Ljk0NiA1NC40ODkyIDIzOC41NzYgNTYuODgxNiAyMzguODkxIDU5LjExMDRDMjM5LjM5OCA2Mi43MTM4IDI0MC43MDYgNjMuNzQwNSAyNDAuMDc2IDY3Ljk1NEMyMzguNzczIDY2LjI5MiAyMzguNDU4IDY5LjQzNjYgMjM3LjIxNyA2OC4yOTc4QzIzNy4yMTggNjguMzAwNCAyMzcuMjE5IDY4LjMwMyAyMzcuMjIxIDY4LjMwNTZDMjM2LjQ3OCA2OS4zNDA3IDIzNS43MzcgNzAuMzcxOSAyMzQuOTk0IDcxLjQwNzFDMjM1LjQxOSA3MS44MDg2IDIzNS44NDQgNzIuMjA3IDIzNi4yNyA3Mi42MDI0QzIzNi4yNzggNzEuOTg3NyAyMzYuMjg1IDcxLjM3MTcgMjM2LjI5MSA3MC43NTA5QzIzNy41NTYgNzAuMjU3NyAyMzguODIzIDY5Ljc2NzUgMjQwLjA4OCA2OS4yNzQzQzI0MC4xMzggNzEuOTI4MiAyNDAuOTEgNzMuNDc3OCAyNDIuMDE4IDc0LjU1NTVDMjQyLjAyIDczLjY4MDUgMjQyLjAyMyA3Mi44MDU1IDI0Mi4wMjkgNzEuOTMwNUMyNDIuNjY1IDcxLjkwMDEgMjQzLjMgNzEuODU5NCAyNDMuOTM2IDcxLjgyOUMyNDMuNzMyIDcxLjE3NzYgMjQzLjUxNiA3MC40OTMzIDI0My4zMiA2OS44NjAzQzI0My41MjEgNjguNzIzOCAyNDMuNjg1IDY5LjY3MjEgMjQzLjg5NSA2OS44MTM0QzI0NC44MjQgNzAuNDQwNiAyNDUuMDQ5IDY5LjkyNTIgMjQ1LjgzNiA2OS4xMzM3QzI0NS40MTQgNzEuMzYxNyAyNDQuOTk3IDczLjU5NDkgMjQ0LjU3NCA3NS44Mjg5QzI0NS4zMTcgNzQuOTIxNyAyNDYuMDU4IDc0LjAxNzUgMjQ2LjgwMSA3My4xMTAyQzI0Ny41NSA3NC40MjU0IDI0OC4yOTYgNzUuNzM4NSAyNDkuMDQ1IDc3LjA0NzZDMjQ5LjIzNCA3NS40ODI3IDI0OS40MjIgNzMuOTI1MSAyNDkuNjExIDcyLjM2MDJDMjQ5LjIwMyA3MS4yNjM5IDI0OC43OTcgNzAuMTU3OSAyNDguMzg5IDY5LjA1NTZDMjQ5LjQ1MiA2OS40Njk3IDI1MC41MiA2OS44OTE0IDI1MS41ODQgNzAuMzA1NkMyNTEuMzc3IDcyLjA5MDEgMjUxLjE2NyA3My44ODA0IDI1MC45NTcgNzUuNjY0OUMyNTEuODA4IDc2LjA5MTEgMjUyLjY2IDc2LjUxMDIgMjUzLjUwOCA3Ni45MzA1QzI1My41MTcgNzguNzAyOCAyNTMuNTIyIDgwLjQ4NjIgMjUzLjUzMSA4Mi4yNTg1Wk0yMzQuOTUzIDUzLjM5OTZDMjM0Ljk1MyA1Mi45NTUzIDIzNC45NTIgNTIuNTA3OSAyMzQuOTQ5IDUyLjA2MzZDMjM0LjUyNCA1Mi4wNzU4IDIzNC4wOTkgNTIuMDgyNyAyMzMuNjc0IDUyLjA5NDlDMjMzLjY3NCA1Mi41Mzk0IDIzMy42NzMgNTIuOTg2MyAyMzMuNjc2IDUzLjQzMDhDMjM0LjEwMSA1My40MTg2IDIzNC41MjggNTMuNDExNyAyMzQuOTUzIDUzLjM5OTZaTTM4MS4xMjcgNTIuODEzNkMzODEuMTMgNTMuNjU0IDM4MS43MzMgNTMuNjM4MyAzODEuNzMgNTIuNzk4QzM4MS43MyA1MS45NTgzIDM4MS4xMjUgNTEuOTc1NSAzODEuMTI3IDUyLjgxMzZaTTQyOS42MjEgNTMuNTE2N0M0MjkuNjIxIDUzLjA3MjEgNDI5LjYxNyA1Mi42MjU0IDQyOS42MTcgNTIuMTgwOEM0MjkuMTkyIDUyLjE5MyA0MjguNzY1IDUyLjIwNzcgNDI4LjM0IDUyLjIxOTlDNDI4LjM0IDUyLjY2NDIgNDI4LjM0MSA1My4xMTE1IDQyOC4zNDQgNTMuNTU1OEM0MjguNzY5IDUzLjU0MzYgNDI5LjE5NiA1My41Mjg5IDQyOS42MjEgNTMuNTE2N1pNMTAwLjI1NCA1Mi45NjIxQzEwMC4yNTcgNTMuODAxNCA5OS42NTIgNTMuODE0OCA5OS42NTA0IDUyLjk3NzdDOTkuNjQ3NCA1Mi4xMzczIDEwMC4yNTQgNTIuMTIxNyAxMDAuMjU0IDUyLjk2MjFaTTIyMC4yNzcgNTYuNDMwOEMyMTkuOTk1IDU0LjkyNzIgMjE5LjUwMSA1NC4xNzQzIDIxOS42MjkgNTIuNDQ2NUMyMTkuMjA3IDUzLjEyMTcgMjE4Ljc4MiA1My43ODg1IDIxOC4zNTkgNTQuNDY5OUMyMTguOTQ1IDU1LjgyNzkgMjE5LjM1OSA1Ni42OTI2IDIyMC4yNzcgNTYuNDMwOFpNNDQ4Ljc3MyA1NS42ODA4QzQ0OC43NzMgNTQuNzkxNiA0NDguNzY3IDUzLjg5ODEgNDQ4Ljc2NCA1My4wMDg5QzQ0OC4zNDEgNTMuOTA0IDQ0Ny45MTkgNTQuODEwOSA0NDcuNDk2IDU1LjcxMkM0NDcuOTIyIDU1LjY5OTggNDQ4LjM0OCA1NS42OTMgNDQ4Ljc3MyA1NS42ODA4Wk01My4wNTQ3IDUzLjY4MDhDNTMuMDU0NyA1NC41MjEzIDUzLjY2MTEgNTQuNTEzNSA1My42NTgyIDUzLjY3M0M1My42NTczIDUyLjgzNDMgNTMuMDUxOCA1Mi44NDEgNTMuMDU0NyA1My42ODA4Wk0zMy4yNTM5IDU1LjkzMDhDMzMuNDAyNSA1NC4yODA3IDMxLjk3MjYgNTIuNzY1OSAzMS4zMzQgNTMuMjgyNEMzMS4zMzM5IDU0LjE3MTYgMzEuMzM2OSA1NS4wNjUgMzEuMzM5OCA1NS45NTQyQzMxLjk3NzggNTUuOTQ4MSAzMi42MTU5IDU1Ljk0MjkgMzMuMjUzOSA1NS45MzA4Wk00ODMuODg3IDU0LjIxOTlDNDgzLjg4OCA1NS4wNTczIDQ4NC40OTMgNTUuMDQzNyA0ODQuNDkgNTQuMjA0MkM0ODQuNDkgNTMuMzY0MiA0ODMuODg0IDUzLjM3OTUgNDgzLjg4NyA1NC4yMTk5Wk00OC45MDA0IDU4LjQxNTFDNDcuNzMyMiA1OS44ODgxIDQ3LjU4NjUgNTkuOTQ1NiA0Ni42NjAyIDU3Ljc2NjdDNDcuOTM2NCA1Ni42NDAzIDQ5LjIxIDU1LjUxNjQgNTAuNDgwNSA1NC4zODM5QzUwLjY4NjggNTcuMTc3MiA0OS44NTYxIDU3LjIwMzQgNDguOTAwNCA1OC40MTUxWk0zNDQuMTE1IDU1LjE0OTVDMzQ0LjExOSA1NS45ODggMzQ0LjcyIDU1Ljk3MDYgMzQ0LjcxOSA1NS4xMzM5QzM0NC43MTkgNTQuMjkzNCAzNDQuMTEyIDU0LjMwOTEgMzQ0LjExNSA1NS4xNDk1Wk0zNDAuNjAyIDU5LjkxNTFDMzQxLjQ5OSA1OC4zNjg0IDM0MS42NTYgNTYuOTE2OSAzNDEuNTQ1IDU0LjU0OEMzNDEuMzMyIDU0LjU0OCAzNDEuMTE5IDU0LjU2NTMgMzQwLjkwNiA1NC41NzE0QzM0MC42OTkgNTYuMTI5NyAzNDAuNDg5IDU3LjY5MjcgMzQwLjI3OSA1OS4yNTFDMzQwLjM4NyA1OS40NzAzIDM0MC40OTQgNTkuNjk1OCAzNDAuNjAyIDU5LjkxNTFaTTM3LjczODMgNTUuMjEyQzM3LjczOTQgNTYuMDQ5OCAzOC4zNDI0IDU2LjA0MzIgMzguMzM5OCA1NS4yMDQyQzM4LjMzOTggNTQuMzYzNyAzNy43MzU0IDU0LjM3MTYgMzcuNzM4MyA1NS4yMTJaTTM4NS42IDYwLjA0MDFDMzg1LjYxNyA1OS4xNDU1IDM4NS41NjIgNTguMjYyOCAzODUuNTk0IDU3LjM2ODNDMzg2LjAxOSA1Ny4yODk0IDM4Ni40NDQgNTcuMzg1NiAzODYuODY5IDU3LjMzN0MzODYuOTgzIDU0LjgyMTcgMzg2Ljc4NSA1NC40MTAyIDM4NS41ODQgNTQuNjk2NEMzODUuNTY3IDU1LjU5MDYgMzg1LjYyMiA1Ni40NzQxIDM4NS41OSA1Ny4zNjgzQzM4NS4xNjQgNTcuNDQ3NCAzODQuNzM4IDU3LjM1MDggMzg0LjMxMiA1Ny4zOTk1QzM4NC4xOTkgNTkuOTE0OCAzODQuMzk5IDYwLjMyNjMgMzg1LjYgNjAuMDQwMVpNMTY3LjkzNiA1Ni4zMjE0QzE2Ny45MzYgNTUuODc4NyAxNjcuOTM2IDU1LjQzNiAxNjcuOTM0IDU0Ljk5MzNDMTY3LjUwOCA1NS4wMDU1IDE2Ny4wODIgNTUuMDEyNCAxNjYuNjU2IDU1LjAyNDVDMTY2LjY1NiA1NS40NjcyIDE2Ni42NTcgNTUuOTA5OSAxNjYuNjYgNTYuMzUyNkMxNjcuMDg1IDU2LjM0MDUgMTY3LjUxIDU2LjMzMzYgMTY3LjkzNiA1Ni4zMjE0Wk0yNzUuODE0IDU5LjAwMUMyNzUuODEyIDU3LjY2ODIgMjc1LjgxIDU2LjMzMzkgMjc1LjgwNyA1NS4wMDExQzI3NS4zODEgNTUuMDEzMyAyNzQuOTU1IDU1LjAyOCAyNzQuNTI5IDU1LjA0MDJDMjc0LjQxIDU2LjM2ODMgMjc0Ljk2NCA1OS4zOTA4IDI3NS44MTQgNTkuMDAxWk0zMjMuNjc4IDU2LjM3NjFDMzIzLjY3OCA1NS45MzE4IDMyMy42NzcgNTUuNDg0NCAzMjMuNjc0IDU1LjA0MDJDMzIzLjI0OSA1NS4wNTIzIDMyMi44MjQgNTUuMDY3MSAzMjIuMzk4IDU1LjA3OTJDMzIyLjM5OCA1NS41MjE5IDMyMi4zOTcgNTUuOTY0NiAzMjIuNCA1Ni40MDczQzMyMi44MjYgNTYuMzk1MiAzMjMuMjUyIDU2LjM4ODMgMzIzLjY3OCA1Ni4zNzYxWk0xNjAuOTk0IDU1LjM5MTdDMTYwLjk2NSA1NS4zMDcxIDE2MC45MzggNTUuMjM0MSAxNjAuOTEyIDU1LjE0OTVDMTYwLjk2MiA1NS4xMDA5IDE2MS4wMTEgNTUuMDcwNiAxNjEuMDYxIDU1LjA0MDJDMTYxLjAzOCA1NS4xNTczIDE2MS4wMTYgNTUuMjc0NSAxNjAuOTk0IDU1LjM5MTdDMTYwLjk5NSA1NS4zODkxIDE2MC45OTUgNTUuMzg2NSAxNjAuOTk2IDU1LjM4MzlDMTYxLjM5NSA1Ni42MjY0IDE2MS43OTkgNTcuODY4IDE2Mi4yMDEgNTkuMTEwNEMxNjEuNTYzIDU5LjEyMjYgMTYwLjkyNyA1OS4xMzczIDE2MC4yODkgNTkuMTQ5NUMxNjAuNTI1IDU3Ljg5ODIgMTYwLjc1OSA1Ni42NDMgMTYwLjk5NCA1NS4zOTE3Wk0yMTguMzczIDYwLjQ2OThDMjE4LjE1NSA1OC42OTg1IDIxNy45MzYgNTYuOTI2OSAyMTcuNzIxIDU1LjE0OTVDMjE3LjA4OCA1NS4xNjc4IDIxNi40MzggNTUuMTc5OSAyMTUuODE0IDU1LjIwNDJDMjE1LjkyIDU2LjkzOTcgMjE3LjAxNCA1OC42NjU2IDIxNi4zODUgNjAuNDYyQzIxNi4yMDkgNjAuOTU0NSAyMTQuNDIyIDU5LjkxODggMjE1LjUyMyA2MS44OTE2QzIxNi40NDEgNjEuMzk4NSAyMTcuNDI5IDYwLjk0NDcgMjE4LjM3MyA2MC40Njk4Wk00MTQuNjQxIDYzLjI5NzhDNDE1LjIxNSA2Mi4xNzc1IDQxNC4yNTMgNjEuNzM3NSA0MTQuNDEgNjAuMDA4OEM0MTQuNTEyIDU4Ljg3NjQgNDE1LjI2NyA1Ni45Mjk5IDQxNC45MzYgNTUuMjk4QzQxMy4yMjUgNTcuMTkxOSA0MTMuMjc3IDYwLjYzNjcgNDE0LjY0MSA2My4yOTc4Wk0yNjMuNjk3IDU2LjAwMTFDMjYzLjY5NyA1Ni44NDA4IDI2NC4zMDMgNTYuODIzNiAyNjQuMzAxIDU1Ljk4NTVDMjY0LjMwMSA1NS4xNDUxIDI2My42OTQgNTUuMTYwOSAyNjMuNjk3IDU2LjAwMTFaTTMwNS44MTEgNTguMTk2NEMzMDUuODExIDU3LjMwNzIgMzA1LjgwOCA1Ni40MTM3IDMwNS44MDUgNTUuNTI0NUMzMDUuNTkyIDU1LjUyNDUgMzA1LjM3OSA1NS41NDE5IDMwNS4xNjYgNTUuNTQ4QzMwNS4xNjYgNTYuNDM2IDMwNS4xNjkgNTcuMzI0IDMwNS4xNzIgNTguMjEyQzMwNS4zODUgNTguMjEyIDMwNS41OTggNTguMjAyNSAzMDUuODExIDU4LjE5NjRaTTE0Mi4zODkgNTYuMTg4NkMxNDIuMzkyIDU3LjAyODQgMTQxLjc4NiA1Ny4wNDI4IDE0MS43ODUgNTYuMjA0MkMxNDEuNzgyIDU1LjM2NDIgMTQyLjM4OCA1NS4zNDk3IDE0Mi4zODkgNTYuMTg4NlpNMTg4LjM2OSA1OC41MzIzQzE4OS42ODYgNTguNzA4NiAxOTAuNzY4IDU2LjM2OTcgMTkxLjg3OSA1OC40NDY0QzE5MS45ODQgNTguMjIxNiAxOTIuMDg4IDU3Ljk5MzIgMTkyLjE5NSA1Ny43NzQ1QzE5MC45MSA1NC45NTU2IDE4OS4yNjcgNTQuODk2NyAxODguMzY5IDU4LjUzMjNaTTI5OC4yMDUgNzcuNzQyOUMyOTcuNDU5IDc3LjE3NjggMjk2LjcxMSA3Ni42MTM4IDI5NS45NjUgNzYuMDQ3N0MyOTUuNDM0IDc2LjQyNTMgMjk0LjkwMyA3Ni44MDI4IDI5NC4zNzUgNzcuMTgwNUMyOTQuNTY3IDc2LjUxMTQgMjk0Ljc2MyA3NS44MzQgMjk0Ljk1NSA3NS4xNjQ5QzI5NC42NTIgNzQuNTQzOSAyOTQuMzUgNzMuOTEwOCAyOTQuMDQ3IDczLjI4OTlDMjkzLjczNSA3My43MTAxIDI5My40MjggNzQuMTMzNSAyOTMuMTEzIDc0LjU0NzdDMjkzLjI1NiA3Mi4xNzk0IDI5Mi4yODEgNzEuNzYzIDI5MS45NDUgNjkuOTA3MUMyOTEuODQ2IDY5LjM1MjkgMjkyLjM0OSA2OS4xNTIzIDI5Mi4yNjIgNjguNTU1NkMyOTIuMDcyIDY3LjI4MyAyOTEuNjUgNjYuNzQ0OSAyOTEuNzkzIDY1LjIzNTNDMjkyLjUzNiA2Ni4wOTQxIDI5My4yODYgNjYuOTU0NyAyOTQuMDM1IDY3LjgxMzRDMjk0LjY4NSA2Ni40Nzk3IDI5NS4zMzQgNjUuMTM5NCAyOTUuOTg0IDYzLjgwNTdDMjk2LjUwNiA2NC4yMzIgMjk3LjAwNiA2NC42NTg4IDI5Ny41NDUgNjUuMDc5MUMyOTcuMTg0IDYzLjE1NDkgMjk3Ljk5NSA2Mi4xMjI1IDI5Ny45ODYgNjAuMzk5NUMyOTcuOTc4IDU4LjY3NjcgMjk3LjE1NyA1Ny42NzgyIDI5Ny41MjMgNTUuNzQzM0MyOTcuMDc4IDU1Ljk3NDYgMjk2LjY3IDU2LjIwNzIgMjk2LjIzOCA1Ni40Mzg2QzI5Ni40NTQgNTcuNTQ2NyAyOTYuNjY5IDU4LjY1MDggMjk2Ljg4NSA1OS43NTg4QzI5NS4zNDkgNTkuNTI3NiAyOTQuMzcyIDU5Ljk0MjQgMjkzLjM4MSA2Mi41MjQ0QzI5My4yNzMgNjIuNTI0NSAyOTMuMTY5IDYyLjUzNCAyOTMuMDY0IDYyLjU0MDFDMjkzLjE0OSA2MC42NTgxIDI5Mi4xNTcgNTcuMjgxNSAyOTEuMTM3IDU3LjI1MTFDMjkxLjM3OCA2MS4zNjcgMjkwLjM2OCA2NS4zNDIgMjkxLjE2NiA2OS4yNTA5QzI4OS40NjQgNjkuMjk5NiAyODcuNzYyIDY5LjM0MjggMjg2LjA2MSA2OS4zOTE1QzI4Ni4wNTkgNjkuMzk0MSAyODYuMDU3IDY5LjM5NjcgMjg2LjA1NSA2OS4zOTkzQzI4NS45NjQgNzIuOTY4MiAyODcuNTkgNzMuMTM0OSAyODguOTU3IDczLjM2MDJDMjg5Ljg0IDczLjIwMTggMjkwLjU0IDcxLjI1NjkgMjkxLjQ3MyA3Mi4wMjQzQzI5My4wNjEgNzMuMzMzOCAyOTEuNzg4IDc3LjIxNSAyOTEuODI2IDc5LjkwN0MyOTAuMzM3IDc5LjI4NTggMjg4LjAzIDc2LjQxOSAyODcuOTk4IDgxLjM1MjNDMjg4LjY0NSA4MS42MTQgMjg5LjI5NSA4MS44NjM5IDI4OS45NDEgODIuMTI1N0MyODkuOTM2IDgyLjc0MDggMjg5LjkyOCA4My4zNTQzIDI4OS45MjIgODMuOTY5NEMyOTAuNDUyIDgzLjA2ODQgMjkwLjk3OSA4Mi4xNTk2IDI5MS41MSA4MS4yNTg1QzI5MS44MyA4Mi4xNDEgMjkyLjE1MSA4My4wMTY2IDI5Mi40NzUgODMuODk5MUMyOTIuNTg1IDgyLjE3NzMgMjkyLjA3NiA4MS40Mjk3IDI5MS44MjggNzkuOTE0OEMyOTIuMjQ4IDc5Ljk4MTggMjkyLjY2NCA3OS45MjEgMjkzLjA4NCA3OS44NjAxQzI5My4wOTMgNzguOTc3IDI5My4wOTcgNzguMDk2NSAyOTMuMTA1IDc3LjIxOTVDMjk1LjI1MyA3Ny40ODgzIDI5NS4wNyA4MS45MzgxIDI5NS45OSA4NS4xNDEzQzI5Ni43MjggODIuNjc1MSAyOTcuNDY4IDgwLjIwOTEgMjk4LjIwNSA3Ny43NDI5Wk0yMy42OTkyIDU2LjcwNDJDMjMuNzAyMSA1Ny41NDM4IDI0LjMwNDQgNTcuNTQyMiAyNC4zMDI3IDU2LjcwNDJDMjQuMzAyNyA1NS44NjQ5IDIzLjY5OCA1NS44NjczIDIzLjY5OTIgNTYuNzA0MlpNMzMxLjM1NSA1Ni44MzdDMzMxLjM1OSA1Ny42NzYxIDMzMS45NjIgNTcuNjUzNiAzMzEuOTU5IDU2LjgxMzZDMzMxLjk1NyA1NS45NzcgMzMxLjM1MyA1NS45OTc4IDMzMS4zNTUgNTYuODM3Wk00NzUuOTA0IDU3LjcwNDJDNDc2LjIyNSA1Ny45MTcyIDQ3Ni41NDMgNTguMTM5NiA0NzYuODYzIDU4LjM1MjZDNDc2LjU0MyA1Ny42OTQ5IDQ3Ni4yMjEgNTcuMDMzOCA0NzUuOSA1Ni4zNzYxQzQ3NS41ODQgNTcuMDQ5NCA0NzUuMjY3IDU3LjcxMDYgNDc0Ljk1MyA1OC4zODM5QzQ3NS4yNjkgNTguMTUzOSA0NzUuNTg2IDU3LjkzNDIgNDc1LjkwNCA1Ny43MDQyWk0zMTcuNjMzIDYzLjIxMTlDMzE3Ljk1IDYyLjUzNjEgMzE4LjI2OCA2MS44NTY1IDMxOC41ODYgNjEuMTgwN0MzMTguNTg2IDYwLjc0MzMgMzE4LjU4IDYwLjI5NzcgMzE4LjU4IDU5Ljg2MDRDMzE3LjkzOSA1OC43NjQxIDMxNy4yOTkgNTcuNjY3NyAzMTYuNjU4IDU2LjU3MTRDMzE2Ljg3NyA1OC43ODc1IDMxNy4wOTYgNjEuMDAzNiAzMTcuMzE0IDYzLjIxOTdDMzE3LjQxOSA2My4yMTk3IDMxNy41MjggNjMuMjE4IDMxNy42MzMgNjMuMjExOVpNMjYzLjY5MSA2MC42NTczQzI2Mi40MTIgNTkuMzYwMyAyNjEuMTMzIDU4LjA1NTkgMjU5Ljg1NCA1Ni43NTg5QzI2MC40OTUgNTcuNjI5NiAyNjEuMTMyIDU4LjUxMzEgMjYxLjc3MyA1OS4zODM4QzI2MS4zNDggNTkuODQwMyAyNjAuOTI1IDYwLjI5MjggMjYwLjUgNjAuNzQzMkMyNjAuODIxIDYxLjYyNjIgMjYxLjE0NCA2Mi41MDY5IDI2MS40NjUgNjMuMzgzOEMyNjIuMjA4IDYyLjQ3NjYgMjYyLjk1MSA2MS41NzA1IDI2My42OTEgNjAuNjU3M1pNMzUxLjc3MyA2MC45MzA3QzM1MS43NzMgNTkuNTk4MSAzNTEuNzY4IDU4LjI2MzMgMzUxLjc2MiA1Ni45MzA4QzM1MS41NDkgNTYuOTMwOCAzNTEuMzM2IDU2Ljk0MDMgMzUxLjEyMyA1Ni45NDY0QzM1MS4xMjYgNTguMjc5NyAzNTEuMTI5IDU5LjYxMyAzNTEuMTM1IDYwLjk0NjNDMzUxLjM0NyA2MC45NDYzIDM1MS41NjEgNjAuOTM2OCAzNTEuNzczIDYwLjkzMDdaTTQ0My42ODggNTcuMzUyNkM0NDMuNDM3IDU3Ljk3MzcgNDQ1LjAyMSA2MC45MjExIDQ0NS41NzggNTkuNTQ3OUM0NDUuODI5IDU4LjkyNjkgNDQ0LjI0NSA1NS45NzkzIDQ0My42ODggNTcuMzUyNlpNMzQzLjQ4NiA1Ny44MzdDMzQzLjQ4OCA1OC42NzUgMzQ0LjA5MyA1OC42NTMyIDM0NC4wOSA1Ny44MTM2QzM0NC4wODkgNTYuOTc1OCAzNDMuNDgzIDU2Ljk5NzQgMzQzLjQ4NiA1Ny44MzdaTTUwMi4zOTggNTkuODk5NUM1MDIuMzk4IDU5LjAxMTYgNTAyLjM5NCA1OC4xMjMzIDUwMi4zOTEgNTcuMjM1NEM1MDEuMTA4IDU3LjE0NDEgNTAwLjQ0OCA1OC42MTEyIDUwMC40ODYgNjEuMjY2NkM1MDEuMTI1IDYwLjgwOTkgNTAxLjc2IDYwLjM1MDEgNTAyLjM5OCA1OS44OTk1Wk0yMzAuNzk3IDYyLjg0NDdDMjMyLjE4NCA2Mi43OTU5IDIzMi43OTYgNjIuNTU3OSAyMzQuMTE5IDYxLjUxNjZDMjM0Ljg2MiA2MC45MzIzIDIzNS4yMTQgNjEuMTU3MyAyMzQuOTU1IDU4LjcyNzZDMjMzLjkwOSA1OC4zMDc0IDIzMi44MjcgNTcuODkgMjMxLjc3IDU3LjQ2OThDMjMxLjc3IDU4LjgwMzQgMjMxLjc3NiA2MC4xMzc5IDIzMS43NzkgNjEuNDc3NkMyMzAuOTMxIDYxLjA1MTMgMjMwLjA3MSA2MC42MzA0IDIyOS4yMjkgNjAuMjA0MkMyMjkuMDMgNjMuMjc5OCAyMjkuNjUxIDYyLjg4MTMgMjMwLjc5NyA2Mi44NDQ3Wk03NC43NTIgNjAuNzEyQzc1LjgxMjggNTkuODA0NSA3Ni44NzY2IDU4LjkwMDcgNzcuOTM3NSA1Ny45OTMyQzc3Ljk0MDQgNTkuMzI2NiA3Ny45NDQzIDYwLjY1OTkgNzcuOTQ3MyA2MS45OTMyQzc2Ljg4MzUgNjEuNTY2OSA3NS44MTU3IDYxLjEzODMgNzQuNzUyIDYwLjcxMlpNMzg4Ljc5OSA2My45Njk3QzM4OC43OTkgNjMuMDgwNSAzODguNzkzIDYyLjE4NzEgMzg4Ljc5MyA2MS4yOTc5QzM4OC4zNzkgNjEuMjg1NyAzODcuOTY4IDYxLjI3MSAzODcuNTU1IDYxLjI1ODhDMzg3LjU0IDYwLjM5NDIgMzg3LjUyNSA1OS41MjIgMzg3LjUwOCA1OC42NTczQzM4Ny4yOTUgNTguNjU3MyAzODcuMDgyIDU4LjY2NjggMzg2Ljg2OSA1OC42NzI5QzM4Ny4wODggNjAuNDQ1MiAzODcuMzA1IDYyLjIyODcgMzg3LjUyMyA2NC4wMDFDMzg3Ljk0OSA2My45ODg4IDM4OC4zNzQgNjMuOTc1OCAzODguNzk5IDYzLjk2OTdaTTMzNy4xMDUgNTkuMzM3QzMzNy4xMDggNjAuMTc3MiAzMzcuNzEyIDYwLjE2MTEgMzM3LjcwOSA1OS4zMjEzQzMzNy43MDkgNTguNDgxNSAzMzcuMTAzIDU4LjQ5ODQgMzM3LjEwNSA1OS4zMzdaTTQzNC4xMDUgNjAuMDYzNUM0MzQuMTA1IDU5LjYxOSA0MzQuMTA2IDU5LjE3MjIgNDM0LjEwNCA1OC43Mjc2QzQzMy4yNTIgNTkuMTk2NiA0MzIuNDA0IDU5LjY2NDkgNDMxLjU1MyA2MC4xMzM4QzQzMS42NjEgNjEuMDE5MiA0MzEuNzcgNjEuOTA0NiA0MzEuODc5IDYyLjc5QzQzMi42MjIgNjEuODgyOCA0MzMuMzYyIDYwLjk3MDggNDM0LjEwNSA2MC4wNjM1Wk0yODIuMjAzIDY0LjE0MTZDMjgxLjk5IDYyLjM3NjQgMjgxLjc3NCA2MC42MTc4IDI4MS41NTkgNTguODUyNkMyODEuMjQ3IDYwLjY0ODUgMjgwLjkzNSA2Mi40Mzk0IDI4MC42MjMgNjQuMjM1M0MyODAuNzQ1IDY0LjQzNjMgMjgwLjg2OSA2NC42MzU5IDI4MC45OTQgNjQuODM2OUMyODEuMzk2IDY0LjYwNTYgMjgxLjgwMSA2NC4zNzI5IDI4Mi4yMDMgNjQuMTQxNlpNNDI4LjM3NSA1OS41NTU3QzQyOC4zOCA2MC4zOTI1IDQyOC45ODEgNjAuMzcxNSA0MjguOTc5IDU5LjUzMjNDNDI4Ljk3OCA1OC42OTMzIDQyOC4zNzIgNTguNzE1NyA0MjguMzc1IDU5LjU1NTdaTTQyMS45ODQgNjEuNzM1NEM0MjEuOTg0IDYwLjg0NjIgNDIxLjk3OSA1OS45NTI3IDQyMS45NzkgNTkuMDYzNUM0MjEuOTc3IDU5LjA2MzUgNDIxLjk3NiA1OS4wNjM1IDQyMS45NzUgNTkuMDYzNUM0MjEuNzYyIDU5LjA2MzUgNDIxLjU0OSA1OS4wNzMxIDQyMS4zMzYgNTkuMDc5MkM0MjEuMzM2IDU5Ljk2ODQgNDIxLjM0MyA2MC44NjE4IDQyMS4zNDYgNjEuNzUxQzQyMS41NTggNjEuNzUxIDQyMS43NzIgNjEuNzQxNSA0MjEuOTg0IDYxLjczNTRaTTgzLjA2ODQgNjUuOTA3MkM4MS44Njc1IDY2LjU1MjggODIuMTAzNSA2NS42MjE0IDgxLjcxMjkgNjQuMTk2M0M4MS4xNTM0IDYyLjE1MDUgODAuMzg2OSA2MS43NjM0IDgwLjUgNTkuMjc0NUM4MS4xMzgxIDU5LjQzODQgODIuMDExNSA1OC41MDY5IDgyLjM4NDggNjAuMDA4OEM4Mi44NTQgNjEuODk2OSA4My4xMjY2IDYzLjc5MzggODMuMDY4NCA2NS45MDcyWk00MTguNzkxIDYxLjgyMTNDNDE4Ljc5MSA2MC45MzMzIDQxOC43ODcgNjAuMDQ1MyA0MTguNzg3IDU5LjE1NzNDNDE4LjE0OSA1OS4xNzU2IDQxNy41MDkgNTkuMTkzNyA0MTYuODcxIDU5LjIxMkM0MTYuODcxIDU5LjQzMzMgNDE2Ljg3MSA1OS42NTQ3IDQxNi44NzEgNTkuODc2QzQxNy40NTcgNjEuMjMzNiA0MTcuODc0IDYyLjA4MjQgNDE4Ljc5MSA2MS44MjEzWk00MDEuMjQyIDYyLjMwNTdDNDAxLjU2IDYxLjQxMDQgNDAxLjg3NiA2MC41MTE4IDQwMi4xOTMgNTkuNjEwNEM0MDEuNzY4IDU5LjYyMjYgNDAxLjM0MSA1OS42Mjk1IDQwMC45MTYgNTkuNjQxN0M0MDAuOTE2IDYwLjUyOTcgNDAwLjkyMSA2MS40MjU1IDQwMC45MjQgNjIuMzEzNUM0MDEuMDI5IDYyLjMxMzUgNDAxLjEzNyA2Mi4zMTE4IDQwMS4yNDIgNjIuMzA1N1pNMzkwLjcyMyA2MC41NzkxQzM5MC43MjMgNjEuNDE5NSAzOTEuMzI5IDYxLjQwMzUgMzkxLjMyNiA2MC41NjM1QzM5MS4zMjYgNTkuNzIzOCAzOTAuNzIxIDU5Ljc0MDggMzkwLjcyMyA2MC41NzkxWk0yNi44ODA5IDYxLjM0NDhDMjYuODgwOSA2MC44OTk0IDI2Ljg4MDkgNjAuNDU0MSAyNi44ODA5IDYwLjAwODhDMjYuNDU1NCA2MC4wMDg4IDI2LjAyOSA2MC4wMjQ1IDI1LjYwMzUgNjAuMDI0NUMyNS42MDM1IDYwLjQ2NzIgMjUuNjAzNSA2MC45MDk5IDI1LjYwMzUgNjEuMzUyNkMyNi4wMjkgNjEuMzUyNiAyNi40NTU0IDYxLjM0NDggMjYuODgwOSA2MS4zNDQ4Wk0yMjYuMDM3IDYxLjYyNkMyMjYuMDM3IDYxLjE4MTggMjI2LjAzNiA2MC43MzQzIDIyNi4wMzMgNjAuMjkwMUMyMjUuNjA4IDYwLjMwMjMgMjI1LjE4MSA2MC4zMDkyIDIyNC43NTYgNjAuMzIxM0MyMjQuNzU2IDYwLjc2NCAyMjQuNzU3IDYxLjIwNjcgMjI0Ljc2IDYxLjY0OTRDMjI1LjE4NSA2MS42MzczIDIyNS42MTIgNjEuNjM4MiAyMjYuMDM3IDYxLjYyNlpNMzcwLjMwMyA2MS4xMDI2QzM3MC4zMDYgNjEuOTQzIDM3MC45MDkgNjEuOTI3MiAzNzAuOTA2IDYxLjA4NjlDMzcwLjkwNiA2MC4yNDczIDM3MC4zMDEgNjAuMjY0NSAzNzAuMzAzIDYxLjEwMjZaTTQ2OC41NzggNjMuMTk2M0M0NjguNTc4IDYyLjMwODQgNDY4LjU3MyA2MS40MjAyIDQ2OC41NyA2MC41MzIzQzQ2OC4zNTggNjAuNTMyMyA0NjguMTQ0IDYwLjU0MTggNDY3LjkzMiA2MC41NDc5QzQ2Ny45MzUgNjEuNDM1OSA0NjcuOTM4IDYyLjMyMzkgNDY3Ljk0MSA2My4yMTE5QzQ2OC4xNTQgNjMuMjExOSA0NjguMzY2IDYzLjIwMjQgNDY4LjU3OCA2My4xOTYzWk0zMDIuMzI2IDY4Ljk0NjJDMzAzLjEzNCA2Ny45MTY5IDMwMy4xNjQgNjUuMjgyOCAzMDMuODk4IDY0LjI5QzMwNS4wMDkgNjIuNzkyOSAzMDYuMDMxIDY0LjU4NzMgMzA1LjgxNiA2MC44NTI2QzMwNC43NjcgNjEuODIwOSAzMDMuNzExIDYyLjcyODggMzAyLjY2MiA2My42NzI4QzMwMi41NDggNjUuNDIwOCAzMDIuNDQzIDY3LjIyMjYgMzAyLjMyNiA2OC45NDYyWk0zOTcuNzQ4IDYxLjczNTRDMzk3Ljc1MSA2Mi41NzU5IDM5OC4zNTQgNjIuNTYwMiAzOTguMzUyIDYxLjcxOThDMzk4LjM1MSA2MC44ODA4IDM5Ny43NDcgNjAuODk4MSAzOTcuNzQ4IDYxLjczNTRaTTEyNy43MzggNjMuMTQxNkMxMjguMDU2IDYyLjQ3MTkgMTI4LjM3NCA2MS44MDE4IDEyOC42OTEgNjEuMTI2QzEyOC43OTkgNjEuMzQ1MyAxMjguOTA5IDYxLjU3MDggMTI5LjAxNCA2MS43OTAxQzEyOC42OTYgNjIuNDU5OCAxMjguMzc4IDYzLjEyOTkgMTI4LjA2MSA2My44MDU3QzEyNy45NTMgNjMuNTg2NCAxMjcuODQ2IDYzLjM2MDkgMTI3LjczOCA2My4xNDE2Wk0zNDEuNTggNjEuODgzOEMzNDEuNTgzIDYyLjcyMzcgMzQyLjE4NiA2Mi43MDY5IDM0Mi4xODQgNjEuODY4MkMzNDIuMTg0IDYxLjAyOCAzNDEuNTc4IDYxLjA0NDIgMzQxLjU4IDYxLjg4MzhaTTMzNy4xMDQgNjQuMDAxQzMzNy4xMDQgNjMuMTEzIDMzNy4wOTggNjIuMjI0OSAzMzcuMDk4IDYxLjMzNjlDMzM2Ljg4NSA2MS4zMzY5IDMzNi42NzIgNjEuMzQ2NSAzMzYuNDU5IDYxLjM1MjZDMzM2LjQ1OSA2Mi4yNDE4IDMzNi40NjIgNjMuMTM1MiAzMzYuNDY1IDY0LjAyNDRDMzM2LjY3OCA2NC4wMjQ0IDMzNi44OTEgNjQuMDA3MSAzMzcuMTA0IDY0LjAwMVpNNDI4LjM2OSA2NC4yMjc1QzQyOC4zNjkgNjMuMzM5NSA0MjguMzYzIDYyLjQ1MTUgNDI4LjM2MyA2MS41NjM1QzQyNy45MzggNjEuNTc1NyA0MjcuNTEzIDYxLjU4MjYgNDI3LjA4OCA2MS41OTQ4QzQyNy40MSA2Mi40NzQ5IDQyNy43MzEgNjMuMzU1MSA0MjguMDUzIDY0LjIzNTNDNDI4LjE1NyA2NC4yMzUzIDQyOC4yNjUgNjQuMjMzNiA0MjguMzY5IDY0LjIyNzVaTTkxLjM1NzQgNjMuNzgyMkM5MS42NzQ5IDYzLjExMjYgOTEuOTkzIDYyLjQzNjIgOTIuMzEwNSA2MS43NjY2QzkyLjMwOTIgNjEuNzY2NiA5Mi4zMDc5IDYxLjc2NjYgOTIuMzA2NiA2MS43NjY2QzkyLjUxOTMgNjEuNzYwNSA5Mi43MzI2IDYxLjc1ODggOTIuOTQ1MyA2MS43NTg4QzkzLjI2NTkgNjIuNjQxOCA5My41ODk1IDYzLjUyNDIgOTMuOTEwMiA2NC40MDcyQzkzLjA1OTIgNjQuNDE5NCA5Mi4yMDgzIDY0LjQzNDEgOTEuMzU3NCA2NC40NDYzQzkxLjM1NzQgNjQuMjI0OSA5MS4zNTc0IDY0LjAwMzYgOTEuMzU3NCA2My43ODIyWk00NzMuMDYyIDYyLjQzODVDNDczLjA2NSA2My4yNzkgNDczLjY2OSA2My4yNjMzIDQ3My42NjYgNjIuNDIyOUM0NzMuNjY0IDYxLjU4NjMgNDczLjA2IDYxLjU5OTYgNDczLjA2MiA2Mi40Mzg1Wk0zMDcuMTE1IDYyLjgyOTFDMzA3LjExNSA2My42NjgxIDMwNy43MiA2My42NTA4IDMwNy43MTkgNjIuODEzNUMzMDcuNzE2IDYxLjk3MyAzMDcuMTEyIDYxLjk4ODYgMzA3LjExNSA2Mi44MjkxWk00NDIuNDIgNjUuMTcyOEM0NDIuNTg1IDYzLjM4MzMgNDQxLjEzMyA2Mi4yODE3IDQ0MC40OTggNjIuNTU1N0M0NDAuNjMyIDY0LjI3NjIgNDQwLjE0MiA2NS4wNTc0IDQzOS44NzEgNjYuNTYzNEM0NDAuNzE4IDY2LjA5NSA0NDEuNTcgNjUuNjQxMyA0NDIuNDIgNjUuMTcyOFpNMTIzLjkwOCA2Mi41NDAxQzEyNC4wMTQgNjIuNTQwMSAxMjQuMTIgNjIuNTQwMSAxMjQuMjI3IDYyLjU0MDFDMTI0LjU0NyA2My40MjI5IDEyNC44NzEgNjQuMzA1NiAxMjUuMTkxIDY1LjE4ODRDMTI0Ljc2NiA2NS4xOTQ1IDEyNC4zNCA2NS4yMDU4IDEyMy45MTQgNjUuMjExOUMxMjMuOTExIDY0LjMyMjcgMTIzLjkwOCA2My40MjkyIDEyMy45MDggNjIuNTQwMVpNMzcuNzM4MyA2Mi41NDc5QzM3LjUyNTcgNjIuNTQ3OSAzNy4zMTIyIDYyLjU0OTYgMzcuMDk5NiA2Mi41NTU3QzM3LjA5OTYgNjMuNDQzNyAzNy4xMDI1IDY0LjMzMTcgMzcuMTA1NSA2NS4yMTk3QzM3LjMxOCA2NS4yMTk3IDM3LjUzMTYgNjUuMjI1OCAzNy43NDQxIDY1LjIxOTdDMzcuNzQ0MiA2NC4zMzA1IDM3Ljc0MTEgNjMuNDM3MSAzNy43MzgzIDYyLjU0NzlaTTQ5Mi4yMTEgNjMuMzk5NEM0OTIuMjExIDY0LjIzOSA0OTIuODE2IDY0LjIyOTUgNDkyLjgxNCA2My4zOTE2QzQ5Mi44MTQgNjIuNTUxNyA0OTIuMjA5IDYyLjU2MDcgNDkyLjIxMSA2My4zOTk0Wk0yMjcuMDI3IDcyLjMxMzNDMjI3LjcyNyA3Mi4zMzE2IDIyOC4xODIgNzEuMDQxMiAyMjguOTI4IDcwLjg1MjRDMjI5LjgwNSA3MC42MzMyIDIzMC44ODEgNzAuOTcxNyAyMzEuNzk5IDcwLjgxMzRDMjMxLjk3NCA2Ny41MjUzIDIzMS4xNjEgNjguMDM3NyAyMjkuODc5IDY4LjE5NjJDMjMwLjA5MiA2Ny4zMDczIDIzMC4zMDQgNjYuNDEzMyAyMzAuNTIgNjUuNTI0NEMyMjkuNTU4IDY0LjY3MTggMjI4LjYxIDYzLjc1NjMgMjI3LjY0MyA2Mi45NDYzQzIyNy4xNzkgNjMuMTI5IDIyNi44OTYgNjUuMTM5OSAyMjYuNzA3IDY1LjQ5MzFDMjI1LjY1MiA2Ny40MzU3IDIyNC43MzkgNjcuOTA4MSAyMjQuNzc5IDcxLjAwMDlDMjI0Ljc3OSA3MS4wMDM1IDIyNC43NzggNzEuMDA2MSAyMjQuNzc3IDcxLjAwODdDMjI1LjY4NCA3MC42OTIzIDIyNi4xNTkgNzIuMjg5IDIyNy4wMjcgNzIuMzEzM1pNMzI0LjQ0NyA2Ni45OTMxQzMyNC43NDUgNjcuNTE2OSAzMjYuMTY0IDY0LjE4MTYgMzI1LjUwOCA2My4wMjQ0QzMyNS4yMSA2Mi41MDI2IDMyMy43ODkgNjUuODM2MSAzMjQuNDQ3IDY2Ljk5MzFaTTIxOC4wOTQgNjcuMTAyNUMyMTguOTM5IDY3LjU3NzQgMjIwLjcxOCA2OC4wMTAyIDIyMC45MzggNjUuNzU4OEMyMTkuNjYxIDY0Ljg4ODIgMjE4LjM4MyA2NC4wMjI1IDIxNy4xMDQgNjMuMTg4NUMyMTcuNDY0IDY0LjE0MDEgMjE3LjQ4MiA2Ni43NjE2IDIxOC4wOTQgNjcuMTAyNVpNMjY4LjgwNyA2NC41MjQ0QzI2OC44MDcgNjQuMDgxNyAyNjguODA4IDYzLjYzOSAyNjguODA1IDYzLjE5NjNDMjY4LjM3OSA2My4yMDg1IDI2Ny45NTMgNjMuMjE1NCAyNjcuNTI3IDYzLjIyNzVDMjY3LjUyNyA2My42NzE4IDI2Ny41MjggNjQuMTE5MiAyNjcuNTMxIDY0LjU2MzVDMjY3Ljk1NiA2NC41NTEzIDI2OC4zODIgNjQuNTM2NiAyNjguODA3IDY0LjUyNDRaTTMyMS44MTggNjcuNjY1QzMyMi4wNDYgNjguOTM2MiAzMjMuMTExIDY4LjQ3MDIgMzIzLjY5NyA2OC4zNjAzQzMyMy40MTQgNjYuODE5NiAzMjIuNzA0IDY1LjQxMDIgMzIyLjExNSA2NC40NTQxQzMyMS4yNSA2My4wNTM2IDMyMS4wNzcgNjMuNDQzNCAzMjAuNSA2NS4xMTgxQzMyMC41MDEgNjUuMTE4MSAzMjAuNTAzIDY1LjExODEgMzIwLjUwNCA2NS4xMTgxQzMyMS4zNTIgNjYuMjgwNyAzMjEuMzk2IDY1LjMwMjIgMzIxLjgxOCA2Ny42NjVaTTM4Ni44OTEgNjYuNjgwNkMzODYuODkxIDY1Ljc5MTQgMzg2Ljg4NSA2NC44OTggMzg2Ljg4NSA2NC4wMDg4QzM4Ni42NzIgNjQuMDA4OCAzODYuNDU5IDY0LjAyNjEgMzg2LjI0NiA2NC4wMzIyQzM4Ni4yNDYgNjQuOTIwMiAzODYuMjUyIDY1LjgwODMgMzg2LjI1MiA2Ni42OTYyQzM4Ni40NjUgNjYuNjk2MiAzODYuNjc4IDY2LjY4NjcgMzg2Ljg5MSA2Ni42ODA2Wk0yMjEuNjExIDc5LjA4NjdDMjIxLjk0MyA3Ni45MzE0IDIyMi4zODEgNzUuMjE2OCAyMjIuNjg5IDcyLjk0NjFDMjIzLjAwMSA3MC42NzUzIDIyMy4yNjEgNjcuMzYyIDIyMy40NzEgNjUuMTAyNUMyMjMuNTkgNjMuNzk5MiAyMjIuMzUxIDY0LjA3NCAyMjIuMjY0IDY0LjQxNUMyMjEuNjY2IDY2LjgwODQgMjIxLjk0NyA2OC41Mzg1IDIyMC4zMDMgNjguNDIyOEMyMjAuMzExIDY4Ljg3MzUgMjIwLjMwMyA2OS4zMjE5IDIyMC4zMDkgNjkuNzY2NUMyMjAuNzMxIDY5Ljc2NjUgMjIxLjE1NCA2OS43NjQ4IDIyMS41OCA2OS43NTg3QzIyMS41OTIgNzIuODcwOSAyMjEuNTk3IDc1Ljk2MjMgMjIxLjYxMSA3OS4wODY3Wk0yMzEuODA1IDY0LjgxMzVDMjMxLjgwOCA2NS42NTMzIDIzMi40MSA2NS42MzY0IDIzMi40MDggNjQuNzk3OEMyMzIuNDA4IDYzLjk1NzYgMjMxLjgwMiA2My45NzM3IDIzMS44MDUgNjQuODEzNVpNMC43MTY3NjYgNjQuMzA1NkMxLjM1NTEzIDY0LjI5MzUgMS45OTQ0NSA2NC4yODgzIDIuNjMyNzggNjQuMjgyMkMyLjYzMjc4IDY0LjcyNzUgMi42MzI3OCA2NS4xNzI4IDIuNjMyNzggNjUuNjE4MUMxLjk5NDQ1IDY1LjYzMDMgMS4zNTUxMyA2NS42MzU1IDAuNzE2NzY2IDY1LjY0MTZDMC43MTY3NjYgNjUuMTk2MyAwLjcxNjc2NiA2NC43NTEgMC43MTY3NjYgNjQuMzA1NlpNMzcyLjg1MiA2Ny4wNEMzNzIuODUyIDY2LjE1MDggMzcyLjg0OCA2NS4yNTczIDM3Mi44NDggNjQuMzY4MUMzNzIuNjM1IDY0LjM2ODEgMzcyLjQyMiA2NC4zODU1IDM3Mi4yMDkgNjQuMzkxNkMzNzIuMjA5IDY1LjI3OTUgMzcyLjIxMiA2Ni4xNjc3IDM3Mi4yMTUgNjcuMDU1NkMzNzIuNDI3IDY3LjA1NTYgMzcyLjYzOSA2Ny4wNDYxIDM3Mi44NTIgNjcuMDRaTTk0LjU0ODggNjQuMzk5NEM5NC45NzQ0IDY0LjM4NzIgOTUuNDAwNiA2NC4zODIgOTUuODI2MiA2NC4zNzZDOTUuODI2MiA2NC44MjEzIDk1LjgyNjIgNjUuMjY2NiA5NS44MjYyIDY1LjcxMTlDOTUuNDAwNiA2NS43MjQxIDk0Ljk3NDQgNjUuNzI5MiA5NC41NDg4IDY1LjczNTNDOTQuNTQ4OCA2NS4yOSA5NC41NDg4IDY0Ljg0NDcgOTQuNTQ4OCA2NC4zOTk0Wk00NzQuMDE2IDY3LjA4NjlDNDc0LjMzMyA2Ni4xOTIgNDc0LjY0NyA2NS4yOTQyIDQ3NC45NjUgNjQuMzk5NEM0NzQuNTM5IDY0LjQxMTYgNDc0LjExMyA2NC40MTY3IDQ3My42ODggNjQuNDIyOEM0NzMuNjg4IDY1LjMxMiA0NzMuNjk0IDY2LjIwNTUgNDczLjY5NyA2Ny4wOTQ3QzQ3My44MDIgNjcuMDk0NyA0NzMuOTExIDY3LjA5MjkgNDc0LjAxNiA2Ny4wODY5Wk0yNzIuMDA2IDY3LjExMDNDMjcyLjAwNiA2Ni4yMjIzIDI3Mi4wMDMgNjUuMzM0MiAyNzIgNjQuNDQ2M0MyNzEuNzg3IDY0LjQ0NjMgMjcxLjU3NCA2NC40NTU4IDI3MS4zNjEgNjQuNDYxOUMyNzEuMzYxIDY1LjM0OTkgMjcxLjM2NyA2Ni4yMzc5IDI3MS4zNjcgNjcuMTI1OUMyNzEuNTggNjcuMTI1OSAyNzEuNzkzIDY3LjExNjQgMjcyLjAwNiA2Ny4xMTAzWk0zNjcuNzU0IDY5Ljg0NDZDMzY3Ljk2MSA2OC4wNjA0IDM2OC4xNzIgNjYuMjc3NCAzNjguMzc5IDY0LjQ5MzFDMzY4LjE2NiA2NC40OTMxIDM2Ny45NTMgNjQuNTAyNyAzNjcuNzQgNjQuNTA4OEMzNjcuMzIxIDY2LjI5OTEgMzY2Ljg5OCA2OC4wOTE2IDM2Ni40NzkgNjkuODc1OUMzNjYuOTA0IDY5Ljg2MzcgMzY3LjMyOSA2OS44NTY4IDM2Ny43NTQgNjkuODQ0NlpNNzguNTkzOCA2NC42NDk0Qzc5LjAxODkgNjQuNjQzMyA3OS40NDQgNjQuNjM5OSA3OS44NjkxIDY0LjYzMzhDNzkuODY5MSA2NS4wNzY1IDc5Ljg2OTEgNjUuNTE5MiA3OS44NjkxIDY1Ljk2MTlDNzkuNDQ0IDY1Ljk2OCA3OS4wMTg5IDY1Ljk3OTIgNzguNTkzOCA2NS45ODUzQzc4LjU5MzggNjUuNTQgNzguNTkzOCA2NS4wOTQ3IDc4LjU5MzggNjQuNjQ5NFpNMjAzLjY4NiA2NS41MDA5QzIwMy42ODggNjYuMzQwMiAyMDMuMDg3IDY2LjM2MTEgMjAzLjA4MiA2NS41MjQ0QzIwMy4wNzkgNjQuNjg0NCAyMDMuNjg1IDY0LjY2MTkgMjAzLjY4NiA2NS41MDA5Wk0zNDcuMDE0IDcwLjQwNzFDMzQ3LjkxMSA2OC44NjA3IDM0OC4wNjggNjcuNDE1OCAzNDcuOTU3IDY1LjA0NzhDMzQ2Ljg4NSA2NC4zMDAyIDM0NS43NTUgNjcuMjgzMiAzNDUuNDE2IDY5LjExMDNDMzQ1LjQxNSA2OS4xMTAzIDM0NS40MTMgNjkuMTEwMyAzNDUuNDEyIDY5LjExMDNDMzQ1Ljk0NiA2OS41MzY2IDM0Ni40OCA2OS45NzQ3IDM0Ny4wMTQgNzAuNDA3MVpNMTk3Ljk1OSA2NC45Njk3QzE5OC4xNzIgNjQuOTY5NyAxOTguMzg1IDY0Ljk2MTkgMTk4LjU5OCA2NC45NjE5QzE5OC41OTggNjUuODQ5OSAxOTguNjA0IDY2LjczNzkgMTk4LjYwNCA2Ny42MjU5QzE5OC4zOTEgNjcuNjI1OSAxOTguMTc3IDY3LjY0MTUgMTk3Ljk2NSA2Ny42NDE1QzE5Ny45NjUgNjYuNzUyMyAxOTcuOTU5IDY1Ljg1ODkgMTk3Ljk1OSA2NC45Njk3Wk0zNDAuMjk1IDY1LjI1MDlDMzQwLjA4OCA2Ny4wMzQgMzM5Ljg3OSA2OC44MTk0IDMzOS42NzIgNzAuNjAyNEMzNDAuMDkxIDcwLjE0IDM0MC41MTQgNjkuNjg5OSAzNDAuOTM0IDY5LjIyNzRDMzQxLjM2NSA3MC41NTQzIDM0MS43OTYgNzEuODgzMiAzNDIuMjMgNzMuMjAzOUMzNDEuNTg2IDcwLjU1NDYgMzQwLjkzOSA2Ny45MDAzIDM0MC4yOTUgNjUuMjUwOVpNMzkxLjM3NSA2NS44OTk0QzM5MS4zNzggNjYuNzM3NSAzOTEuOTggNjYuNzIwMSAzOTEuOTc5IDY1Ljg4MzhDMzkxLjk3NiA2NS4wNDMzIDM5MS4zNzIgNjUuMDU4OSAzOTEuMzc1IDY1Ljg5OTRaTTE4Ny43MjkgNjUuODgzOEMxODcuNzMgNjYuNzIwMSAxODcuMTI2IDY2LjczNzQgMTg3LjEyNSA2NS44OTk0QzE4Ny4xMjIgNjUuMDUyOCAxODcuNzI4IDY1LjA0MzMgMTg3LjcyOSA2NS44ODM4Wk0yMjYuNjg0IDY1LjYwMjVDMjI3LjEwOSA2NS41OTAzIDIyNy41MzUgNjUuNTkxMiAyMjcuOTYxIDY1LjU3OTFDMjI3Ljk2NCA2Ni40NjcgMjI3Ljk2NyA2Ny4zNTUxIDIyNy45NjcgNjguMjQzMUMyMjcuNTQxIDY4LjI1NTMgMjI3LjExNSA2OC4yNjIyIDIyNi42ODkgNjguMjc0M0MyMjYuNjg3IDY3LjM4NTEgMjI2LjY4NCA2Ni40OTE3IDIyNi42ODQgNjUuNjAyNVpNMjc5LjA0MSA2Ni4yNTg3QzI3OS4wNDQgNjcuMDk2OCAyNzkuNjQ2IDY3LjA3OTQgMjc5LjY0NSA2Ni4yNDMxQzI3OS42NDUgNjUuNDAyNiAyNzkuMDM4IDY1LjQxODMgMjc5LjA0MSA2Ni4yNTg3Wk0zMTEuNTgyIDY4LjcxMThDMzExLjU4MiA2Ny44MjM4IDMxMS41NzkgNjYuOTM1OCAzMTEuNTc2IDY2LjA0NzhDMzExLjE1MSA2Ni4wNiAzMTAuNzI2IDY2LjA1OTEgMzEwLjMwMSA2Ni4wNzEyQzMxMC42MjEgNjYuOTUzNiAzMTAuOTQzIDY3LjgzNzMgMzExLjI2NCA2OC43MTk2QzMxMS4zNjkgNjguNzE5NiAzMTEuNDc3IDY4LjcxNzkgMzExLjU4MiA2OC43MTE4Wk0yMDMuNzE1IDcwLjE2NDlDMjAzLjcxMiA2OS4yNzY5IDIwMy43MDkgNjguMzg4OSAyMDMuNzA5IDY3LjUwMDlDMjA0LjU2IDY3LjAzOCAyMDUuNDA5IDY2LjU2NTQgMjA2LjI2IDY2LjEwMjVDMjA2LjIzNCA2OS41NDM2IDIwNS4yMzMgNzAuMzkwMyAyMDMuNzE1IDcwLjE2NDlaTTczLjQ3MjcgNjYuNzI3NUM3My40NzUxIDY3LjU2NyA3Mi44NjkxIDY3LjU3NTUgNzIuODY5MSA2Ni43MzUzQzcyLjg2NzggNjUuODkyMSA3My40NzI3IDY1Ljg4ODEgNzMuNDcyNyA2Ni43Mjc1Wk0yNTYuNzAzIDY2Ljg1MjVDMjU2LjcwMyA2Ny42OTI3IDI1Ny4zMDkgNjcuNjc2NiAyNTcuMzA3IDY2LjgzNjlDMjU3LjMwNyA2NS45OTcgMjU2LjcwMSA2Ni4wMTM5IDI1Ni43MDMgNjYuODUyNVpNNjUuODEyNSA2Ni44NDQ3QzY1LjgxMTMgNjcuNjg4OCA2NS4yMDkgNjcuNjkyMiA2NS4yMDkgNjYuODUyNUM2NS4yMDcgNjYuMDEzOSA2NS44MTI1IDY2LjAwNDggNjUuODEyNSA2Ni44NDQ3Wk0yNTQuNzg3IDY2Ljg5OTRDMjU0Ljc4OCA2Ny43Mzc1IDI1NS4zOTMgNjcuNzE1NiAyNTUuMzkxIDY2Ljg3NTlDMjU1LjM4OSA2Ni4wMzg0IDI1NC43ODQgNjYuMDU5OCAyNTQuNzg3IDY2Ljg5OTRaTTUxMS45NzEgNjcuMDc5QzUxMS45NzQgNjcuOTE4NiA1MTEuMzcxIDY3LjkzODUgNTExLjM2NyA2Ny4wOTQ3QzUxMS4zNjQgNjYuMjQ4MyA1MTEuOTcgNjYuMjM5MyA1MTEuOTcxIDY3LjA3OVpNNDQuNzY1NiA2Ni40Njk3QzQ0LjMzOTggNjYuNDc0OSA0My45MTQxIDY2LjQ4MDEgNDMuNDg4MyA2Ni40ODUzQzQzLjU2MDggNjcuOTY5NSA0My40MTU0IDY4Ljg3MzYgNDIuODU5NCA2OS44MjlDNDMuMjg0NiA3MC40OTI0IDQzLjcxMzQgNzEuMTUgNDQuMTM4NyA3MS44MTMzQzQ0LjM0ODUgNzAuMDM0OSA0NC41NTU4IDY4LjI0ODEgNDQuNzY1NiA2Ni40Njk3Wk01MDguMTggNjcuMTQxNUM1MDguMTggNjcuOTgxMSA1MDguNzg0IDY3Ljk3MjIgNTA4Ljc4MSA2Ny4xMjU5QzUwOC43OCA2Ni4yODgxIDUwOC4xNzcgNjYuMzAxOSA1MDguMTggNjcuMTQxNVpNMzYuNDY2OCA2Ny44OTkzQzM2LjQ2NjggNjcuNDU2NiAzNi40NjY4IDY3LjAxMzkgMzYuNDY2OCA2Ni41NzEyQzM2LjA0MTIgNjYuNTcxMiAzNS42MTUgNjYuNTgwOCAzNS4xODk1IDY2LjU4NjlDMzUuMTg5NSA2Ny4wMzIyIDM1LjE4OTUgNjcuNDc3NSAzNS4xODk1IDY3LjkyMjhDMzUuNjE1MiA2Ny45MTUgMzYuMDQxIDY3LjkwNzIgMzYuNDY2OCA2Ny44OTkzWk0yMzUuNjQxIDY3LjM5MTVDMjM1LjY0MSA2OC4yMjk2IDIzNi4yNDUgNjguMjEyMyAyMzYuMjQ0IDY3LjM3NTlDMjM2LjI0NCA2Ni41MzU0IDIzNS42MzggNjYuNTUxMSAyMzUuNjQxIDY3LjM5MTVaTTk2LjQ2ODggNjcuMDMyMkM5Ni42ODEzIDY3LjAyNjEgOTYuODk0OCA2Ny4wMTY2IDk3LjEwNzQgNjcuMDE2NUM5Ny4xMTAzIDY3LjkwNTcgOTcuMTEzMyA2OC43OTkyIDk3LjExMzMgNjkuNjg4NEM5Ni45MDA3IDY5LjY5NDUgOTYuNjg3MiA2OS42OTYyIDk2LjQ3NDYgNjkuNjk2MkM5Ni40NzE3IDY4LjgwODIgOTYuNDY4OCA2Ny45MjAyIDk2LjQ2ODggNjcuMDMyMlpNMjE5LjY3IDY5LjExODFDMjE5LjE4MiA2Ny4zMjUgMjE3LjMxMyA2OC44OTkzIDIxNi40NTkgNjguNDA3MkMyMTYuMzgzIDY4LjM2NDUgMjE2LjExMSA2Ni4zODg3IDIxNS41MiA2Ny4yMzUzQzIxNS4yNjkgNjcuNTk0NiAyMTUuMjMyIDY3Ljg3NTMgMjE1LjIwMyA2OC41NjM0QzIxNS42MDIgNjguMjc4MyAyMTYuMDcyIDY4Ljc0MTkgMjE2LjQ1OSA2OC40MDcyQzIxNi40OTQgNjkuMTEzNiAyMTYuNDc0IDY5LjMyMTcgMjE2LjQ3NyA2OS44NzU5QzIxNS45NDIgNjkuMjU2MiAyMTUuOTQ1IDcxLjA5NTQgMjE1Ljg3MyA3MS4xNjQ5QzIxNS4zOSA3MS41OTA3IDIxNS4wMjggNzAuOTkyMiAyMTQuNTUxIDcxLjI4MjFDMjE0LjU2NCA3MS4zMzQyIDIxNC41NzcgNzEuMzg2MyAyMTQuNTkgNzEuNDM4NEMyMTQuNjQ2IDcxLjgyOSAyMTQuNTI0IDcyLjUxMDIgMjE0LjkwOCA3Mi41NjMzQzIxNS4wNjggNzIuNTg3NiAyMTUuMzQ4IDcyLjU3NjMgMjE1LjUyIDcyLjUzOTlDMjE2IDcyLjQ1NDYgMjE1LjY0NSA3MS42MDc4IDIxNS44NzUgNzEuMTU3MUMyMTYuMTA1IDcwLjcwNjQgMjE2LjYxNiA3MS4xNzE0IDIxNi40NzkgNjkuODY4MUMyMTYuOTEyIDY5LjgxMzcgMjE3LjMyOCA2OS44NDcyIDIxNy43NTYgNjkuODI5QzIxNy4zMzYgNzAuOTU1MSAyMTYuOTE0IDcyLjA3OTUgMjE2LjQ5NCA3My4yMTE4QzIxNi45MTkgNzQuMzA3MSAyMTcuMzQ0IDc1LjQwMzcgMjE3Ljc3IDc2LjQ5M0MyMTguNDAyIDc0LjAzODYgMjE5LjAzNSA3MS41NjAyIDIxOS42NyA2OS4xMTgxWk05NC41NDEgNjcuNzM1M0M5NC41NDIgNjguNTcxOSA5My45Mzc1IDY4LjU4MjMgOTMuOTM3NSA2Ny43NDMxQzkzLjkzNDggNjYuOTAzMSA5NC41NDEgNjYuODk1IDk0LjU0MSA2Ny43MzUzWk0xNTcuNzU2IDY5Ljg4MzdDMTU2LjUzMiA3MC4xMzk1IDE1NS42NzMgNjkuODI0NSAxNTUuMTk1IDY3LjI2NjVDMTU2LjQxOSA2Ny4wMTA3IDE1Ny4yNzggNjcuMzI1NyAxNTcuNzU2IDY5Ljg4MzdaTTgyLjQyNTggNjcuMjU4N0M4Mi44NTEzIDY3LjI1MjYgODMuMjc3NiA2Ny4yNDkyIDgzLjcwMzEgNjcuMjQzMUM4My43MDYgNjguMTMyMyA4My43MDkgNjkuMDI1NyA4My43MDkgNjkuOTE0OUM4My4yODM0IDY5LjkyMSA4Mi44NTcyIDY5LjkyNDUgODIuNDMxNiA2OS45MzA2QzgyLjQyODcgNjkuMDQxNCA4Mi40MjU3IDY4LjE0NzkgODIuNDI1OCA2Ny4yNTg3Wk0yNjYuOTE4IDY3LjkxNUMyNjYuOTE4IDY4Ljc1MzUgMjY3LjUyMyA2OC43MzYyIDI2Ny41MjEgNjcuODk5M0MyNjcuNTIxIDY3LjA1ODkgMjY2LjkxNSA2Ny4wNzQ1IDI2Ni45MTggNjcuOTE1Wk04MS43NzM0IDY3LjkzMDZDODEuNzc2NCA2OC43NzA1IDgxLjE3MDcgNjguNzg1MSA4MS4xNjk5IDY3Ljk0NjJDODEuMTY3IDY3LjEwMDMgODEuNzcyNSA2Ny4wOTIgODEuNzczNCA2Ny45MzA2Wk00MTMuNzIxIDY3Ljk3NzVDNDEzLjcyNSA2OC44MTU1IDQxNC4zMjcgNjguNzkzNyA0MTQuMzI0IDY3Ljk1NEM0MTQuMzIzIDY3LjExNjMgNDEzLjcxOCA2Ny4xMzc5IDQxMy43MjEgNjcuOTc3NVpNMTI4LjM3MSA2OC40Njk2QzEyOC4zNzMgNjkuMzA4OSAxMjcuNzY4IDY5LjMxNzUgMTI3Ljc2OCA2OC40Nzc1QzEyNy43NjYgNjcuNjQwMSAxMjguMzcxIDY3LjYzMDIgMTI4LjM3MSA2OC40Njk2Wk0xMTYuMjc3IDc2LjAxNjRDMTE2LjI0MiA3NC42NDAxIDExNi4zMjMgNzIuNjUyMiAxMTYuMjYyIDcxLjM5MTVDMTE2LjEzMSA2OC42MTQ3IDExNS40NDIgNjkuNjg1IDExNC42NjQgNjguMDQ3OEMxMTQuNzc1IDY5LjgzODIgMTE0Ljg4NCA3MS42MDU0IDExNC45OTIgNzMuMzgzNkMxMTQuNTY3IDczLjgzNDEgMTE0LjE0MSA3NC4yODY1IDExMy43MTkgNzQuNzQzQzExMy43MiA3NC43NDMgMTEzLjcyMSA3NC43NDMgMTEzLjcyMyA3NC43NDNDMTE0LjU3NiA3NS4xNjMgMTE1LjQyNCA3NS42MTQ2IDExNi4yNzcgNzYuMDE2NFpNMjUuNjM4NiA2OC42OTYyQzI1LjY0MjggNjkuNTMzOSAyNi4yNDE4IDY5LjUyNzMgMjYuMjQyMiA2OC42ODg0QzI2LjI0MjEgNjcuODQ3OSAyNS42MzU4IDY3Ljg1NTcgMjUuNjM4NiA2OC42OTYyWk0xMTEuNzk5IDcyLjExMDJDMTExLjc5OSA3MS4yMjIyIDExMS43OTMgNzAuMzM0MiAxMTEuNzkzIDY5LjQ0NjJDMTExLjI2IDY5LjAxMzggMTEwLjcyNiA2OC41NzM5IDExMC4xOTUgNjguMTQxNUMxMTAuMDkgNjguMzY2OCAxMDkuOTg1IDY4LjU4MDMgMTA5Ljg3NyA2OC44MDU2QzExMC4wOTMgNjkuOTEzNyAxMTAuMzA5IDcxLjAyNTYgMTEwLjUyMSA3Mi4xMzM3QzExMC45NDcgNzIuMTI3NiAxMTEuMzczIDcyLjExNjMgMTExLjc5OSA3Mi4xMTAyWk0xNzUuNjA3IDY4LjgyMTJDMTc1LjYxIDY5LjY2MDcgMTc1LjAwNSA2OS42NzQzIDE3NS4wMDQgNjguODM2OEMxNzUuMDAxIDY3Ljk5NjUgMTc1LjYwNyA2Ny45ODEyIDE3NS42MDcgNjguODIxMlpNMjc4LjQyNiA4MC4yNTg1QzI3OC4yMDcgNzguNDkzMSAyNzcuOTkyIDc2LjcyNzIgMjc3Ljc3MyA3NC45NjE3QzI3Ny40NTYgNzUuODU3IDI3Ny4xMzcgNzYuNzUzOSAyNzYuODIyIDc3LjY0OTJDMjc1LjQzMiA3NC41NzQyIDI3NC4wNDIgNzEuNDk3NyAyNzIuNjUyIDY4LjQyMjhDMjcyLjY1IDY4LjQyMjggMjcyLjY0OCA2OC40MjI4IDI3Mi42NDYgNjguNDIyOEMyNzIuODc0IDcwLjE3NjggMjczLjEwMiA3MS45MjY1IDI3My4zMzIgNzMuNjgwNUMyNzMuNzQ2IDczLjY5ODggMjc0LjE1NyA3My43MDkxIDI3NC41NyA3My43Mjc0QzI3NC40NjggNzUuOTUwNCAyNzQuMzY2IDc4LjE4NCAyNzQuMjY0IDgwLjQwN0MyNzQuOTA4IDgxLjI0NzQgMjc1LjU1MyA4Mi4wODk5IDI3Ni4xOTcgODIuOTMwNEMyNzYuOTQgODIuMDQxNSAyNzcuNjgzIDgxLjE0NzQgMjc4LjQyNiA4MC4yNTg1Wk05MC43MTI5IDY5LjEyNTlDOTAuNzE1OCA2OS45NjUzIDkwLjExMDggNjkuOTc4OCA5MC4xMDk0IDY5LjE0MTVDOTAuMTA2NCA2OC4zMDExIDkwLjcxMjggNjguMjg1NyA5MC43MTI5IDY5LjEyNTlaTTMxOS4yNDggNzAuNTAwOUMzMTguOTI3IDY5Ljg0MzIgMzE4LjYwNiA2OS4xODk4IDMxOC4yODUgNjguNTMyMUMzMTguMTggNjguNzU3MSAzMTguMDcyIDY4Ljk3OSAzMTcuOTY3IDY5LjIwNEMzMTguMjg3IDY5Ljg2MTggMzE4LjYwOSA3MC41MjI4IDMxOC45MyA3MS4xODA1QzMxOS4wMzUgNzAuOTU1MiAzMTkuMTQgNzAuNzI2MiAzMTkuMjQ4IDcwLjUwMDlaTTUxLjc5ODggNzEuNzExOEM1MS40NzgyIDcwLjgyODggNTEuMTU2NiA2OS45NDQ3IDUwLjgzNTkgNjkuMDU1NkM1MC41MTg0IDY5LjcyNTIgNTAuMjAwMyA3MC4zOTU1IDQ5Ljg4MjggNzEuMDcxMkM0OS44ODI4IDcxLjI5MjUgNDkuODgyOCA3MS41MTM5IDQ5Ljg4MjggNzEuNzM1MkM1MC41MjExIDcxLjcyOTEgNTEuMTYwNSA3MS43MTc5IDUxLjc5ODggNzEuNzExOFpNMTk0LjExOSA2OS43Mjc0QzE5NC4xMjIgNzAuNTY2OCAxOTMuNTIgNzAuNTkzOSAxOTMuNTE2IDY5Ljc1MDlDMTkzLjUxMyA2OC45MDQ5IDE5NC4xMTggNjguODg4NyAxOTQuMTE5IDY5LjcyNzRaTTM5NC41NyA3My4xNTcxQzM5NC41NjcgNzEuODIzOCAzOTQuNTYxIDcwLjQ5MDUgMzk0LjU1OSA2OS4xNTcxQzM5NC4xMzMgNjkuMTY5MyAzOTMuNzA3IDY5LjE3NjIgMzkzLjI4MSA2OS4xODg0QzM5My40MDYgNzAuODg2IDM5Mi45MTkgNzEuNzA4IDM5Mi42NTYgNzMuMjAzOUMzOTMuMjk0IDczLjE4NTcgMzkzLjkzMiA3My4xNzUzIDM5NC41NyA3My4xNTcxWk0xODUuODQ2IDcxLjkyMjdDMTg1Ljg0MyA3MS4wMzM1IDE4NS44NCA3MC4xNDAxIDE4NS44NCA2OS4yNTA5QzE4Ni40NzggNjkuMjM4NyAxODcuMTE2IDY5LjIyNCAxODcuNzU0IDY5LjIxMThDMTg3Ljc1NCA2OS42NTYzIDE4Ny43NTggNzAuMTAzMyAxODcuNzU4IDcwLjU0NzdDMTg2Ljk0OCA3MC4zMzQ3IDE4Ni41NTMgNzEuMzUwMSAxODUuODQ2IDcxLjkyMjdaTTEyMy4yODkgNzAuNTYzNEMxMjMuMjg5IDcwLjExODEgMTIzLjI4OSA2OS42NzI4IDEyMy4yODkgNjkuMjI3NEMxMjIuODYzIDY5LjIzMzUgMTIyLjQzNyA2OS4yNDQ4IDEyMi4wMTIgNjkuMjUwOUMxMjIuMDEyIDY5LjY5NjIgMTIyLjAxMiA3MC4xNDE1IDEyMi4wMTIgNzAuNTg2OEMxMjIuNDM3IDcwLjU4MDcgMTIyLjg2MyA3MC41Njk1IDEyMy4yODkgNzAuNTYzNFpNMTIwLjA5NiA3MC42MTgxQzEyMC4wOTYgNzAuMTcyNyAxMjAuMDk2IDY5LjcyNzQgMTIwLjA5NiA2OS4yODIxQzExOS42NzEgNjkuMjg4MiAxMTkuMjQ1IDY5LjI5OTUgMTE4LjgyIDY5LjMwNTZDMTE4LjgyIDY5Ljc1MDkgMTE4LjgyIDcwLjE5NjIgMTE4LjgyIDcwLjY0MTVDMTE5LjI0NSA3MC42MzU0IDExOS42NzEgNzAuNjI0MSAxMjAuMDk2IDcwLjYxODFaTTI4NC43OTUgNzguNzY2NEMyODQuNTczIDc1LjY2MDUgMjg0LjM1MSA3Mi41NTIgMjg0LjEzMyA2OS40NDYyQzI4My45MjMgNzEuMjMwNyAyODMuNzE3IDczLjAyMSAyODMuNTEgNzQuODA1NUMyODIuMzk5IDczLjU0NDggMjgxLjYyNCA3Mi44MzU5IDI4MC42MzkgNzQuODc1OEMyODAuMzM2IDc0LjIxODIgMjgwLjAzMyA3My41NjQ3IDI3OS43MzIgNzIuOTA3MUMyNzkuOTIyIDcyLjQ1NyAyODAuMTEzIDcyLjAwNTYgMjgwLjMwMyA3MS41NTU1QzI3OS44ODEgNzEuMzQyNiAyNzkuNDU4IDcxLjEzNTcgMjc5LjAzMyA3MC45MjI3QzI3OS4yNDYgNzIuNDgwNCAyNzkuNDU0IDc0LjA0NjQgMjc5LjY2NCA3NS42MTAyQzI4MC4zMDUgNzUuODA1IDI4MC45NDcgNzYuMDA5MSAyODEuNTg4IDc2LjIwMzlDMjgxLjU5NCA3Ny41MzE0IDI4MS42IDc4Ljg2ODUgMjgxLjYwNSA4MC4xOTZDMjgyLjY2OSA3OS43MjEgMjgzLjczMSA3OS4yNDE0IDI4NC43OTUgNzguNzY2NFpNMjgwLjk2OSA3MC4yMDRDMjgwLjk2OSA3MS4wNDM3IDI4MS41NzIgNzEuMDI2NCAyODEuNTcgNzAuMTg4NEMyODEuNTcgNjkuMzQ3OSAyODAuOTY2IDY5LjM2MzYgMjgwLjk2OSA3MC4yMDRaTTIxNC41NTEgNzEuMjgyMUMyMTQuNjE3IDcwLjcyNDIgMjE0LjQ4MyA3MC4zNTMyIDIxNC41NjQgNjkuODkxNUMyMTQuMzIzIDcwLjE3NzggMjE0LjAxOSA2OS43ODAyIDIxMy45NTUgNzAuNjAyNEMyMTMuODkyIDcxLjM4NjEgMjE0LjQwNCA3MC45NjY5IDIxNC41NTEgNzEuMjgyMVpNMzE2LjcxMSA3MC41NzEyQzMxNi43MTUgNzEuNDEwMSAzMTcuMzE3IDcxLjM4NzcgMzE3LjMxNCA3MC41NDc3QzMxNy4zMTMgNjkuNzEwOSAzMTYuNzA4IDY5LjczMTkgMzE2LjcxMSA3MC41NzEyWk0zMTAuOTY3IDc5LjQwN0MzMTEuMDYzIDc3LjAxOTggMzEwLjA4MyA3Ni4wNzQ4IDMxMC40MjQgNzMuNDM4M0MzMTAuNjg5IDcxLjM5ODIgMzExLjU4NCA2OS42MzU2IDMwOS42NjQgNzAuMTEwMkMzMDkuNTEzIDcyLjA3MDUgMzA5LjMxOSA3NC4xMDM5IDMwOS4xNTYgNzYuMDk0NUMzMDkuNzU3IDc3LjIwMjkgMzEwLjM3OCA3OC4yNzQzIDMxMC45NjcgNzkuNDA3Wk0yNTcuMzQgNzQuMTcyN0MyNTguMjYxIDc0LjM4NTggMjU4LjY3NiA3My41MDA0IDI1OS4yNSA3Mi4xMThDMjU4LjY2NCA3MC43NTk5IDI1OC4yNDcgNjkuOTAzMSAyNTcuMzMyIDcwLjE2NDlDMjU3LjMzMiA3MS40OTg3IDI1Ny4zMzcgNzIuODM4OSAyNTcuMzQgNzQuMTcyN1pNMTMwLjI5MyA3MS4xMDI0QzEzMC4yOTQgNzEuOTM5OSAxMjkuNjg5IDcxLjk0OTcgMTI5LjY4OSA3MS4xMTAyQzEyOS42ODcgNzAuMjcxMSAxMzAuMjkzIDcwLjI2MjQgMTMwLjI5MyA3MS4xMDI0Wk0zNi40OTYxIDcxLjIzNTJDMzYuNDk2OSA3Mi4wNzM5IDM3LjA5OTYgNzIuMDY3MiAzNy4wOTk2IDcxLjIyNzRDMzcuMDk5NSA3MC4zODY5IDM2LjQ5MzIgNzAuMzk0OCAzNi40OTYxIDcxLjIzNTJaTTE2Ny45NjkgNzAuOTkzQzE2Ny45NjkgNzEuODgxMSAxNjcuOTcyIDcyLjc2OTEgMTY3Ljk3NSA3My42NTcxQzE2Ny41NDkgNzMuNjY5MyAxNjcuMTIzIDczLjY3NjEgMTY2LjY5NyA3My42ODgzQzE2Ny4xMjEgNzIuNzg5OSAxNjcuNTQ1IDcxLjg5MTUgMTY3Ljk2OSA3MC45OTNaTTMyMS44MDcgNzMuNzY2NEMzMjEuODA3IDcyLjg3ODQgMzIxLjgwNCA3MS45OTA0IDMyMS44MDEgNzEuMTAyNEMzMjEuNTg4IDcxLjEwMjQgMzIxLjM3NSA3MS4xMTIgMzIxLjE2MiA3MS4xMThDMzIxLjE2MiA3Mi4wMDYxIDMyMS4xNjggNzIuODk0MSAzMjEuMTY4IDczLjc4MjFDMzIxLjM4MSA3My43ODIxIDMyMS41OTQgNzMuNzcyNSAzMjEuODA3IDczLjc2NjRaTTI2Ny4yNzkgODguNTc4N0MyNjcuOTA5IDg3LjgzNTcgMjY3LjYwMSA4NS44NSAyNjcuNTg0IDg0LjU3MUMyNjcuOTEzIDg0Ljk5MTUgMjY4LjQ1NyA4NS45NTk5IDI2OC44NTkgODUuODc1NkMyNjkuMjgyIDg0LjA4NTEgMjY5LjcwNSA4Mi4yOTEzIDI3MC4xMjUgODAuNTAwN0MyNjkuMjc0IDgwLjUyNTEgMjY4LjQyMyA4MC41NDY3IDI2Ny41NzIgODAuNTcxQzI2Ny41NjQgODEuOTA0NCAyNjcuNjAzIDgzLjIzNzYgMjY3LjU4IDg0LjU3MUMyNjYuNDIzIDgzLjA4NTEgMjY2LjE1NCA4Mi4xNjI1IDI2Ni4yOTEgNzkuMjgyQzI2OC4yNDQgNzguODgwMSAyNjguMTQzIDc1LjcxODcgMjY4LjgyOCA3Mi41Mzk5QzI2Ny45NzcgNzIuMTEzNiAyNjcuMTI4IDcxLjY5MjggMjY2LjI3NyA3MS4yNjY1QzI2Ni4xNzMgNzIuMTU5OSAyNjYuMDY1IDczLjA1MjcgMjY1Ljk1NyA3My45NDYxQzI2NC45ODMgNzIuOTU5NSAyNjYuMTQzIDcwLjY2OTUgMjY0LjM1NCA3MS4zMjEyQzI2NC4zNTUgNzEuMzIxMiAyNjQuMzU2IDcxLjMyMTIgMjY0LjM1NyA3MS4zMjEyQzI2NS4wMDEgNzMuMzA1OCAyNjUuNjQzIDc1LjI4MTcgMjY2LjI4NyA3Ny4yNjY0QzI2NC44MDkgODAuNTY3NCAyNjQuMjc5IDc3LjE0IDI2NC4zNjMgNzMuOTg1MkMyNjMuNzM0IDc0LjY2NzMgMjYzLjA3NyA3NS4zNTc3IDI2Mi40NjUgNzYuMDM5OEMyNjMuMDg2IDc4LjI0NDMgMjY0LjYwOCA3OC44MjY2IDI2NS4zMTEgODAuNTg2N0MyNjYuMzM5IDgzLjE2ODMgMjY2LjA1MyA4Ni4zNjIyIDI2Ny4yNzkgODguNTc4N1pNMTQ3LjU0NSA3MS40MzA1QzE0Ny43NTggNzEuNDI0NSAxNDcuOTcxIDcxLjQxNDkgMTQ4LjE4NCA3MS40MTQ5QzE0OC4xODYgNzIuMzA0MSAxNDguMTg5IDczLjE5NzUgMTQ4LjE4OSA3NC4wODY4QzE0Ny45NzcgNzQuMDkyOCAxNDcuNzY0IDc0LjA5NDYgMTQ3LjU1MSA3NC4wOTQ2QzE0Ny41NDggNzMuMjA2NiAxNDcuNTQ1IDcyLjMxODYgMTQ3LjU0NSA3MS40MzA1Wk0zMDcuMTM5IDcyLjE2NDlDMzA3LjE0MiA3My4wMDQ2IDMwNy43NDQgNzIuOTg3NSAzMDcuNzQyIDcyLjE0OTNDMzA3LjczOSA3MS4zMDg5IDMwNy4xMzYgNzEuMzI0OCAzMDcuMTM5IDcyLjE2NDlaTTIwNC4zNCA3Mi4xNDkzQzIwNC4zNDMgNzIuOTg5MyAyMDMuNzM3IDczLjAxMTggMjAzLjczNiA3Mi4xNzI3QzIwMy43MzMgNzEuMzMzNSAyMDQuMzM4IDcxLjMxMjYgMjA0LjM0IDcyLjE0OTNaTTMwMC43NSA3NS42NjQ5QzMwMC4xMDkgNzQuMzQ5NiAyOTkuNDY3IDczLjAzNDggMjk4LjgyNiA3MS43MTk2QzI5OC44MjkgNzMuMDUyNiAyOTguODMzIDc0LjM4NjYgMjk4LjgzNiA3NS43MTk1QzI5OS40NzQgNzUuNzAxMyAzMDAuMTEyIDc1LjY4MzEgMzAwLjc1IDc1LjY2NDlaTTEzMS41OSA3Mi40MDcxQzEzMS42OTUgNzIuMTgyMSAxMzEuODAzIDcxLjk2MDMgMTMxLjkwOCA3MS43MzUyQzEzMi4yMjkgNzMuMDYxOSAxMzIuNTQ4IDc0LjM5MjkgMTMyLjg3MSA3NS43MTk1QzEzMi42NTkgNzUuNzI1NiAxMzIuNDQ3IDc1LjczNTIgMTMyLjIzNCA3NS43MzUyQzEzMi4wMTkgNzQuNjI2NyAxMzEuODA2IDczLjUxNTUgMTMxLjU5IDcyLjQwNzFaTTUwNy41NDMgNzQuNDkzQzUwNy41NDMgNzMuNjAzOCA1MDcuNTM4IDcyLjcxMDQgNTA3LjUzNSA3MS44MjEyQzUwNy4xMSA3MS44MjczIDUwNi42ODMgNzEuODM4NSA1MDYuMjU4IDcxLjg0NDZDNTA2LjI2MSA3Mi43MzI2IDUwNi4yNjIgNzMuNjIwNiA1MDYuMjY4IDc0LjUwODZDNTA2LjY5MyA3NC41MDI1IDUwNy4xMTggNzQuNDk5MSA1MDcuNTQzIDc0LjQ5M1pNNDAuOTY2OCA3Mi41MDg2QzQwLjk2OTcgNzMuMzQ4NCA0MS41NjkyIDczLjM0NjggNDEuNTcwMyA3Mi41MDg2QzQxLjU3MDMgNzEuNjY5NCA0MC45NjU3IDcxLjY3MTkgNDAuOTY2OCA3Mi41MDg2Wk0zOTEuMzkzIDcyLjU3MTFDMzkxLjM5NSA3My40MTE1IDM5MS45OTkgNzMuMzk1NiAzOTEuOTk2IDcyLjU1NTVDMzkxLjk5NiA3MS43MTU4IDM5MS4zOTEgNzEuNzMyOCAzOTEuMzkzIDcyLjU3MTFaTTE4MS42OTcgNzIuMDI0M0MxODEuNzI1IDcyLjA2MTQgMTgxLjc1MyA3Mi4xMDU4IDE4MS43ODEgNzIuMTQ5M0MxODEuNzc4IDcyLjE1NTkgMTgxLjc3NiA3Mi4xNjYxIDE4MS43NzMgNzIuMTcyN0MxODEuNzc4IDcyLjE3NzYgMTgxLjc4MyA3Mi4xODM0IDE4MS43ODcgNzIuMTg4M0MxODEuNDQ5IDczLjAwNjEgMTgxLjExMSA3My44MjM2IDE4MC43NzMgNzQuNjQxNEMxODEuMDgyIDczLjc2NTUgMTgxLjM4OCA3Mi44OTQ2IDE4MS42OTcgNzIuMDI0M1pNNDMyLjI0NCA3Mi43ODk5QzQzMi4yNDcgNzMuNjMwNCA0MzIuODUxIDczLjYxNDcgNDMyLjg0OCA3Mi43NzQzQzQzMi44NDUgNzEuOTM0NyA0MzIuMjQzIDcxLjk1MiA0MzIuMjQ0IDcyLjc4OTlaTTEyLjg4MDggNzIuODQ0NkMxMi44ODI0IDczLjY4MTIgMTMuNDg2NSA3My42NzQ2IDEzLjQ4NDMgNzIuODM2OEMxMy40ODE0IDcxLjk5NjMgMTIuODc3OSA3Mi4wMDQxIDEyLjg4MDggNzIuODQ0NlpNMTY0LjEyNyA3My4wNzlDMTY0LjEzIDczLjkxODEgMTYzLjUyOCA3My45MzE0IDE2My41MjMgNzMuMDk0NkMxNjMuNTIxIDcyLjI1NDEgMTY0LjEyNyA3Mi4yMzg1IDE2NC4xMjcgNzMuMDc5Wk0yNzIuMDM3IDczLjExOEMyNzIuMDM4IDczLjk1NTggMjcyLjY0NCA3My45MzQyIDI3Mi42NDEgNzMuMDk0NkMyNzIuNjM5IDcyLjI1NjcgMjcyLjAzNCA3Mi4yNzg0IDI3Mi4wMzcgNzMuMTE4Wk0xNTguNDE2IDgxLjg3NTdDMTU4LjkzNSA3OC4wMDI2IDE1OC42MDkgNzMuMTc0MiAxNjAuOTQ5IDcyLjQ4NTJDMTYwLjE2NiA3NS40MjUyIDE1OS44MTYgNzcuMjAwNyAxNjAuMzI2IDgwLjUwMDdDMTU5LjY5MSA4MC45NjM2IDE1OS4wNTUgODEuNDE4OSAxNTguNDIgODEuODc1N0MxNTguNDE5IDgxLjg3NTcgMTU4LjQxNyA4MS44NzU3IDE1OC40MTYgODEuODc1N1pNNDAyLjg3NyA3Ni45NDYxQzQwMi44NzcgNzYuNTAxNSA0MDIuODc1IDc2LjA1NDcgNDAyLjg3NSA3NS42MTAyQzQwMi40NTggNzUuNjEwMiA0MDIuMDM4IDc1LjYwMjQgNDAxLjYyMSA3NS42MDI0QzQwMS42MTIgNzQuNzMyNyA0MDEuNjAxIDczLjg1NDggNDAxLjU5IDcyLjk4NTJDNDAxLjM3NyA3Mi45OTEzIDQwMS4xNjQgNzIuOTk0NyA0MDAuOTUxIDczLjAwMDhDNDAwLjc0NCA3NC4zMzk5IDQwMC41MzEgNzUuNjc3MyA0MDAuMzI0IDc3LjAxNjRDNDAxLjE3NSA3Ni45OTMgNDAyLjAyNiA3Ni45Njk1IDQwMi44NzcgNzYuOTQ2MVpNMzk3LjE0MSA3My43NTg2QzM5Ny4xNDEgNzQuNTk5IDM5Ny43NDcgNzQuNTgzMiAzOTcuNzQ0IDczLjc0M0MzOTcuNzQ0IDcyLjkwMzMgMzk3LjEzOSA3Mi45MjA1IDM5Ny4xNDEgNzMuNzU4NlpNMzA1Ljg1NyA3NS41MjQyQzMwNC42OTcgNzUuODc3NSAzMDQuMTMgNzUuMTg5MyAzMDMuMjkxIDczLjYxOEMzMDIuNzI2IDcyLjU2MjQgMzAyLjQxOCA3NC4yNDMyIDMwMi4wMjcgNzQuOTYxN0MzMDIuNzc2IDc2LjA1NzggMzAzLjUzMSA3Ny4xMjc4IDMwNC4yODMgNzguMjExN0MzMDQuODA4IDc3LjMxNjYgMzA1LjMzIDc2LjQyNTQgMzA1Ljg1NyA3NS41MjQyWk0xMTguMjA1IDczLjk5M0MxMTguMjA1IDc0LjgzMjkgMTE4LjgxMSA3NC44MTc3IDExOC44MDkgNzMuOTc3NEMxMTguODA3IDczLjEzOTggMTE4LjIwMiA3My4xNTM1IDExOC4yMDUgNzMuOTkzWk0xMDYuNjk3IDc0LjE5NjFDMTA2LjU4OSA3My45NzY5IDEwNi40ODUgNzMuNzUxMyAxMDYuMzc3IDczLjUzMjFDMTA2LjA1OSA3NC4yMDE3IDEwNS43NDEgNzQuODc4IDEwNS40MjQgNzUuNTQ3N0MxMDUuNTMyIDc1Ljc2NjkgMTA1LjYzNiA3NS45OTI1IDEwNS43NDQgNzYuMjExN0MxMDYuMDYyIDc1LjU0MjEgMTA2LjM4IDc0Ljg2NTcgMTA2LjY5NyA3NC4xOTYxWk0zMjkuNDc1IDc2LjIxOTVDMzI5LjQ3NSA3NS4zMzE1IDMyOS40NjkgNzQuNDQzNSAzMjkuNDY5IDczLjU1NTVDMzI5LjA0NCA3My41Njc3IDMyOC42MTggNzMuNTc0NiAzMjguMTkzIDczLjU4NjhDMzI4LjE5NiA3NC40NzYgMzI4LjE5OSA3NS4zNjk0IDMyOC4xOTkgNzYuMjU4NkMzMjguNjI0IDc2LjI0NjQgMzI5LjA0OSA3Ni4yMzE3IDMyOS40NzUgNzYuMjE5NVpNMjI3Ljk5NCA4MC4yNTA3QzIyNy4zNDcgODAuMDU1OSAyMjYuNzAzIDc5Ljg1OTYgMjI2LjA1NyA3OS42NjQ4QzIyNS40MjIgNzcuNjY4NiAyMjQuNzg2IDc1LjY2ODkgMjI0LjE0OCA3My42NzI3QzIyNC4zNyA3Ni4zMjYzIDIyNC41OTIgNzguOTc5OSAyMjQuODE0IDgxLjYzMzVDMjI1LjI4NiA4MS44NzA5IDIyNS45MDUgODEuMzQ5IDIyNi4zNDggODEuNjEwMUMyMjcuMDk2IDgyLjA1NDUgMjI2LjM1OCA4My45NDg0IDIyNy4wNDcgODQuMjY2M0MyMjcuMzU4IDgyLjkzOTggMjI3LjY4IDgxLjU4OTQgMjI3Ljk5NCA4MC4yNTA3Wk0zMjEuODI0IDgwLjQzMDRDMzIzLjc5MSA4MC4xNDM5IDMyMy44NTIgNzcuMjM3OSAzMjMuNzIxIDczLjcxMThDMzIyLjM1MSA3NS4yNDAzIDMyMS42NjEgNzcuMTExNiAzMjEuODI0IDgwLjQzMDRaTTI3MS4zOTEgNzYuNDYxN0MyNzEuNTM3IDc0LjgwNjcgMjcwLjEwMSA3My4zMjkgMjY5LjQ2OSA3My44NTI0QzI2OS40NzIgNzQuNzQwNCAyNjkuNDc1IDc1LjYyODQgMjY5LjQ3NSA3Ni41MTY0QzI3MC4xMTMgNzYuNDk4MiAyNzAuNzUyIDc2LjQ3OTkgMjcxLjM5MSA3Ni40NjE3Wk0xNjEuNTk0IDczLjgwNTVDMTYxLjgwNyA3My43OTk0IDE2Mi4wMiA3My43ODk5IDE2Mi4yMzIgNzMuNzg5OUMxNjIuMjM1IDc0LjY3OTEgMTYyLjIzOCA3NS41NzI1IDE2Mi4yMzggNzYuNDYxN0MxNjIuMDI1IDc2LjQ2NzggMTYxLjgxMiA3Ni40Njk1IDE2MS42IDc2LjQ2OTVDMTYxLjU5NyA3NS41ODE1IDE2MS41OTQgNzQuNjkzNSAxNjEuNTk0IDczLjgwNTVaTTMxNy45NzkgNzQuNTMyMUMzMTcuOTc5IDc0LjMxMDcgMzE3Ljk3OSA3NC4wODk0IDMxNy45NzkgNzMuODY4QzMxNy4xMjggNzMuODkyNCAzMTYuMjc3IDczLjkyIDMxNS40MjYgNzMuOTM4M0MzMTUuMzE4IDc1Ljg1NjIgMzE1LjczMyA3Ni43MTM1IDMxNi4zOTUgNzcuOTA3QzMxNi45MjUgNzYuNzgxMSAzMTcuNDUxIDc1LjY1NzkgMzE3Ljk3OSA3NC41MzIxWk0xNDEuNDk0IDc2Ljg4MzZDMTQxLjE3MSA3Ni4wMDA1IDE0MC44NSA3NS4xMTgyIDE0MC41MjkgNzQuMjM1MkMxNDAuOTU1IDc0LjIyOTEgMTQxLjM4MSA3NC4yMTc4IDE0MS44MDcgNzQuMjExN0MxNDEuODEgNzUuMDk5NyAxNDEuODEyIDc1Ljk4NzggMTQxLjgxMiA3Ni44NzU4QzE0MS43MDYgNzYuODc4NCAxNDEuNiA3Ni44ODEgMTQxLjQ5NCA3Ni44ODM2Wk0xMjMuMDM1IDc5Ljg2NzlDMTI0LjA5NiA3OS44MzcgMTI1LjEzOSA3OC4wMjA0IDEyNS44NTUgNzYuNTE2NEMxMjQuMTU0IDc1Ljg4MzEgMTIyLjQ0OCA3NS4yNDM1IDEyMC43NDYgNzQuNjEwMkMxMjEuNTEgNzYuMzY0MiAxMjIuMjcxIDc4LjExMzkgMTIzLjAzNSA3OS44Njc5Wk0yODguNjM5IDc1LjMyODlDMjg4LjY0MiA3Ni4xNjk0IDI4OS4yNDUgNzYuMTUzOCAyODkuMjQyIDc1LjMxMzNDMjg5LjI0MiA3NC40NzQ3IDI4OC42MzcgNzQuNDkyIDI4OC42MzkgNzUuMzI4OVpNMTAyLjIzNCA3NC45MTQ5QzEwMC44NTMgNzcuMDQ1NCAxMDAuMjI0IDc0LjQ1OTcgOTguNzI2NiA3NS4xNjQ5Qzk4LjA5OTkgNzUuNDU3MiA5Ni43NTQ5IDc4LjcyMSA5Ny4xNDI2IDgwLjMyODhDOTcuODg0MSA3OS40NDYgOTguNjI1NiA3OC41NjMyIDk5LjM2NzIgNzcuNjgwNEMxMDAuMzI5IDc5LjQzNDUgMTAxLjI4OCA4MS4xOTAyIDEwMi4yNSA4Mi45MzgyQzEwMi4yNDcgODAuMjU4NyAxMDIuMjM0IDc3LjYxMjYgMTAyLjIzNCA3NC45MTQ5Wk0zNjUuMjE5IDc2LjU3ODlDMzY1LjIxOSA3Ni4xMzYyIDM2NS4yMiA3NS42OTM1IDM2NS4yMTcgNzUuMjUwOEMzNjQuNzkxIDc1LjI2MyAzNjQuMzY1IDc1LjI2OTkgMzYzLjkzOSA3NS4yODJDMzYzLjkzOSA3NS43MjY2IDM2My45MzggNzYuMTczNCAzNjMuOTQxIDc2LjYxOEMzNjQuMzY3IDc2LjYwNTggMzY0Ljc5MyA3Ni41OTExIDM2NS4yMTkgNzYuNTc4OVpNMTExLjE4OSA3Ni43ODk4QzExMS4xOSA3Ny42MjgzIDExMS43OTYgNzcuNjE0IDExMS43OTMgNzYuNzc0MkMxMTEuNzkyIDc1LjkzNTIgMTExLjE4NyA3NS45NDk5IDExMS4xODkgNzYuNzg5OFpNMjI4LjAwNCA3Ni45MTQ4QzIyOC4wMDQgNzcuNzU0NyAyMjguNjA5IDc3LjczOCAyMjguNjA3IDc2Ljg5OTJDMjI4LjYwNyA3Ni4wNTkgMjI4LjAwMSA3Ni4wNzUzIDIyOC4wMDQgNzYuOTE0OFpNMzczLjUyNSA4MC4zNjAxQzM3My41MjIgNzkuMDI3MyAzNzMuNTE3IDc3LjY5MyAzNzMuNTE0IDc2LjM2MDJDMzczLjA4OSA3Ni4zNzIzIDM3Mi42NjMgNzYuMzg1MyAzNzIuMjM4IDc2LjM5MTRDMzcyLjI0MSA3Ny43MjQ1IDM3Mi4yNDcgNzkuMDU4MiAzNzIuMjUgODAuMzkxM0MzNzIuNjc1IDgwLjM3OTIgMzczLjEgODAuMzY2MiAzNzMuNTI1IDgwLjM2MDFaTTMzMi4wNDMgODEuNDg1MUMzMzEuOTIxIDc5LjY5NjYgMzMyLjE0NCA3NC41NTU5IDMzMC43NCA3Ny43NTA4QzMzMC42NjcgNzcuOTE1MiAzMzAuNzI1IDgwLjQ1OTYgMzMwLjEzMSA4MC45NzczQzMyOS42NTkgODEuMzg1MyAzMjguNzExIDgxLjIyNDMgMzI4Ljg1OSA4Mi44OTkxQzMyOS42OTYgODMuMzQ5OCAzMzAuNTYgODMuNzQwMSAzMzEuNDA4IDg0LjE3MjVDMzMxLjYyMSA4My4yNzg1IDMzMS44MzEgODIuMzkxMyAzMzIuMDQzIDgxLjQ4NTFaTTY5LjA0NjkgNzkuNDY5NUM2OS4wNDY5IDc4LjU4MDMgNjkuMDQzOSA3Ny42ODY4IDY5LjA0MSA3Ni43OTc2QzY4LjYxODcgNzcuNjkyMyA2OC4xOTM4IDc4LjU5MDQgNjcuNzcxNSA3OS40ODUxQzY4LjE5NjYgNzkuNDc5IDY4LjYyMTcgNzkuNDc1NiA2OS4wNDY5IDc5LjQ2OTVaTTI1MC4zNDYgNzcuNjgwNEMyNTAuMzQ2IDc4LjUyMDkgMjUwLjk1MiA3OC41MDUzIDI1MC45NDkgNzcuNjY0OEMyNTAuOTQ5IDc2LjgyNTMgMjUwLjM0NCA3Ni44NDI3IDI1MC4zNDYgNzcuNjgwNFpNMzQ2LjA3OCA3OS43NjY0QzM0Ni4wNzggNzguODc4NCAzNDYuMDcyIDc3Ljk5MDMgMzQ2LjA3MiA3Ny4xMDIzQzM0NS44NiA3Ny4xMDIzIDM0NS42NDYgNzcuMTExOSAzNDUuNDM0IDc3LjExOEMzNDUuNDM0IDc4LjAwNiAzNDUuNDM3IDc4Ljg5NCAzNDUuNDM5IDc5Ljc4MkMzNDUuNjUyIDc5Ljc3NTkgMzQ1Ljg2NSA3OS43NzI0IDM0Ni4wNzggNzkuNzY2NFpNMzk3LjE1MiA3Ny43NjY0QzM5Ny4xNTIgNzguNjA2NyAzOTcuNzU4IDc4LjU5MDcgMzk3Ljc1NiA3Ny43NTA4QzM5Ny43NTYgNzYuOTExIDM5Ny4xNSA3Ni45MjggMzk3LjE1MiA3Ny43NjY0Wk0xNjkuOTE4IDc4LjI4OThDMTY5LjkyIDc5LjEyNjUgMTcwLjUyNCA3OS4xMTMyIDE3MC41MjEgNzguMjc0MkMxNzAuNTIxIDc3LjQzMzcgMTY5LjkxNSA3Ny40NDkzIDE2OS45MTggNzguMjg5OFpNMzIwLjU1MSA4MS43OTc2QzMyMC41NDggODAuNDY0NyAzMjAuNTQxIDc5LjEzMDUgMzIwLjU0MSA3Ny43OTc2QzMyMC4xMTYgNzcuODA5OCAzMTkuNjkxIDc3LjgyNDUgMzE5LjI2NiA3Ny44MzY3QzMxOS4xNDYgNzkuMTY0NCAzMTkuNyA4Mi4xODc0IDMyMC41NTEgODEuNzk3NlpNODUuMDA5OCA4MC41NjMyQzg1LjAwOTcgNzkuNjc1MiA4NS4wMDY4IDc4Ljc4NzIgODUuMDAzOSA3Ny44OTkyQzg0LjU3ODQgNzcuOTA1MyA4NC4xNTIgNzcuOTA4NyA4My43MjY2IDc3LjkxNDhDODMuNzI2NiA3OC44MDI4IDgzLjcyOTUgNzkuNjkwOCA4My43MzI0IDgwLjU3ODhDODQuMTU3OSA4MC41NzI4IDg0LjU4NDMgODAuNTY5MyA4NS4wMDk4IDgwLjU2MzJaTTI2Mi4xNzQgODMuMzA1NEMyNjIuNjY2IDgzLjcxODkgMjYzLjIzOCA4My4xNjc5IDI2My43NDggODMuMzQ0NEMyNjMuMDAyIDgxLjU3MjIgMjYyLjI1MiA3OS44MTcyIDI2MS41IDc4LjA2MzNDMjYxLjQyOCA3OC4xNjc0IDI2MS4zNTcgNzguMjcxNiAyNjEuMjg1IDc4LjM3NTdDMjYwLjMyNiA3OS45OTYxIDI2MS4xMjcgODIuNDMxNSAyNjIuMTc0IDgzLjMwNTRaTTIwMi40NTUgNzguMjAzOUMyMDIuODgxIDc4LjE5MTcgMjAzLjMwNyA3OC4xODQ4IDIwMy43MzIgNzguMTcyNkMyMDMuNzM1IDc4LjYxNjYgMjAzLjczNiA3OS4wNjQ1IDIwMy43MzYgNzkuNTA4NUMyMDMuMzExIDc5LjUyMDcgMjAyLjg4NCA3OS41Mjc2IDIwMi40NTkgNzkuNTM5OEMyMDIuNDU2IDc5LjA5NTUgMjAyLjQ1NSA3OC42NDgyIDIwMi40NTUgNzguMjAzOVpNMjU3LjM2OSA3OC44MzY3QzI1Ny4zNjkgNzkuNjc3MiAyNTcuOTc2IDc5LjY2MTUgMjU3Ljk3MyA3OC44MjExQzI1Ny45NzIgNzcuOTgyOSAyNTcuMzY4IDc4LjAwMDIgMjU3LjM2OSA3OC44MzY3Wk0xNDQuMzUgNzguODI4OUMxNDQuMzUyIDc5LjY2ODcgMTQzLjc0OSA3OS42NzY5IDE0My43NDYgNzguODM2N0MxNDMuNzQ1IDc3Ljk5OTkgMTQ0LjM1IDc3Ljk4OTYgMTQ0LjM1IDc4LjgyODlaTTMwMS4zOTYgNzkuNjQ5MkMzMDEuMzk2IDc5LjIwNSAzMDEuMzk3IDc4Ljc1NzQgMzAxLjM5NSA3OC4zMTMyQzMwMC43NTYgNzguMzMxNSAzMDAuMTE3IDc4LjM0OTcgMjk5LjQ3OSA3OC4zNjc5QzI5OS40NzkgNzguODEyMSAyOTkuNDggNzkuMjU5NyAyOTkuNDgyIDc5LjcwMzlDMzAwLjEyIDc5LjY4NTYgMzAwLjc1OCA3OS42Njc0IDMwMS4zOTYgNzkuNjQ5MlpNMjQ4LjQxNiA3OC4zOTkyQzI0Ny43NzggNzguNDE3NSAyNDcuMTM4IDc4LjQzNTYgMjQ2LjUgNzguNDUzOUMyNDYuNSA3OC44OTY2IDI0Ni41MDEgNzkuMzM5MyAyNDYuNTA0IDc5Ljc4MkMyNDcuMzExIDc5LjUyNjQgMjQ3LjcwOCA4MC41MzUxIDI0OC40MjIgODEuMDcxQzI0OC40MjIgODAuMTgxOCAyNDguNDE5IDc5LjI4ODQgMjQ4LjQxNiA3OC4zOTkyWk0xMjAuNzUyIDc5Ljk0NkMxMjAuNzUyIDc5LjUwMDcgMTIwLjc1MiA3OS4wNTU0IDEyMC43NTIgNzguNjEwMUMxMTkuOTAxIDc5LjA3MjkgMTE5LjA1MiA3OS41MzAxIDExOC4yMDEgNzkuOTkyOUMxMTguMjAxIDgwLjQzODIgMTE4LjIwMSA4MC44ODM1IDExOC4yMDEgODEuMzI4OEMxMTkuMDUyIDgwLjg2NjEgMTE5LjkwMSA4MC40MDg4IDEyMC43NTIgNzkuOTQ2Wk0xNzguODU1IDg1LjQzMDNDMTgwLjIyNSA4My45MTQgMTgwLjkxNiA4Mi4wMzc5IDE4MC43NTYgNzguNzE5NUMxODAuNTQgNzkuNjAyNiAxODAuMzI0IDgwLjQ4NjUgMTgwLjExMSA4MS4zNzU3QzE3OS40NzYgODEuNDAwMSAxNzguODQ0IDgxLjQyMTcgMTc4LjIwOSA4MS40NDZDMTc4LjIwOCA4MS40NDM0IDE3OC4yMDYgODEuNDQwOCAxNzguMjA1IDgxLjQzODJDMTc4LjQyMSA4Mi43NjU5IDE3OC42MzcgODQuMDk2NSAxNzguODU1IDg1LjQzMDNaTTIzNS4wMzEgNzkuNDA3QzIzNS4wMzEgODAuMjQ2MyAyMzUuNjM2IDgwLjIyODkgMjM1LjYzNSA3OS4zOTE0QzIzNS42MzUgNzguNTUwOSAyMzUuMDI4IDc4LjU2NjUgMjM1LjAzMSA3OS40MDdaTTExMy4wOTggODEuNDIyNkMxMTIuNjcgODAuNTQwMyAxMTIuMjQ0IDc5LjY2NDIgMTExLjgxNiA3OC43ODJDMTExLjgxNiA3OS42NyAxMTEuODE5IDgwLjU1OCAxMTEuODIyIDgxLjQ0NkMxMTIuMjQ3IDgxLjQzOTkgMTEyLjY3MyA4MS40Mjg3IDExMy4wOTggODEuNDIyNlpNMjcyLjY3IDc5LjEwMjNDMjcyLjY3MSA3OS4wOTk3IDI3Mi42NzEgNzkuMDk3MSAyNzIuNjcyIDc5LjA5NDVDMjcyLjI0NyA3OS4xMDY3IDI3MS44MjIgNzkuMTIxNCAyNzEuMzk2IDc5LjEzMzVDMjcxLjM5NiA4MC4wMjE2IDI3MS4zOTkgODAuOTA5NiAyNzEuNDAyIDgxLjc5NzZDMjcxLjUwNyA4MS43OTc1IDI3MS42MTQgODEuNzk3NiAyNzEuNzE5IDgxLjc5NzZDMjcyLjAzNiA4MC45MDIzIDI3Mi4zNTIgNzkuOTk3NiAyNzIuNjcgNzkuMTAyM1pNMjIwLjk4NCA4NS43NjYzQzIyMC45NzkgODMuNTQzMyAyMjAuOTc0IDgxLjMxNzUgMjIwLjk3MSA3OS4wOTQ1QzIyMC4zMzIgNzkuMTEyOCAyMTkuNjkzIDc5LjEyMzEgMjE5LjA1NSA3OS4xNDE0QzIxOS4xMjQgNzkuNDA5NiAyMTkuMTk0IDc5LjY3NzggMjE5LjI2NCA3OS45NDZDMjE5LjY5OCA4MS44MjA3IDIxOS43ODggODMuNjAxNyAyMTkuNzA5IDg1Ljc5NzVDMjIwLjEzNCA4NS43ODcxIDIyMC41NTkgODUuNzc2NyAyMjAuOTg0IDg1Ljc2NjNaTTIxMC43NzUgODAuMDAwN0MyMTAuNzc1IDgwLjg0MTIgMjExLjM4MiA4MC44MjU2IDIxMS4zNzkgNzkuOTg1MUMyMTEuMzc5IDc5LjE0NTggMjEwLjc3NCA3OS4xNjMyIDIxMC43NzUgODAuMDAwN1pNMTM4LjY0NiA4MC4yNzQyQzEzOC42NDcgODEuMTE0NCAxMzkuMjUzIDgxLjEwNiAxMzkuMjUgODAuMjY2M0MxMzkuMjQ3IDc5LjQyNyAxMzguNjQ1IDc5LjQzNzIgMTM4LjY0NiA4MC4yNzQyWk0zOTcuMTQ2IDgyLjQzMDRDMzk3LjE0NiA4MS41NDI0IDM5Ny4xNDEgODAuNjU0NCAzOTcuMTQxIDc5Ljc2NjRDMzk2LjcxNSA3OS43Nzg1IDM5Ni4yOSA3OS43ODU0IDM5NS44NjUgNzkuNzk3NkMzOTUuODY1IDgwLjY4NTYgMzk1Ljg3MSA4MS41NzM2IDM5NS44NzEgODIuNDYxNkMzOTYuMjk2IDgyLjQ0OTUgMzk2LjcyMSA4Mi40MzY1IDM5Ny4xNDYgODIuNDMwNFpNMzkzLjk0OSA4MC41MTYzQzM5My44NDQgODAuMjk3NCAzOTMuNzM3IDgwLjA3OTEgMzkzLjYyOSA3OS44NjAxQzM5My4zMTEgODAuNTM1OSAzOTIuOTkyIDgxLjE5OTkgMzkyLjY3OCA4MS44NzU3QzM5Mi43ODYgODIuMDk0OSAzOTIuODkyIDgyLjMyMDUgMzkzIDgyLjUzOTdDMzkzLjMxNyA4MS44NjQyIDM5My42MzUgODEuMTg1OCAzOTMuOTQ5IDgwLjUxNjNaTTI0MC43NjQgODIuNTk0NEMyNDAuNzY0IDgxLjcwNjUgMjQwLjc1OCA4MC44MTg0IDI0MC43NTggNzkuOTMwNEMyNDAuMzMzIDc5Ljk0MjYgMjM5LjkwOCA3OS45NTU2IDIzOS40ODIgNzkuOTYxN0MyMzkuNDgyIDgwLjg0OTcgMjM5LjQ4NSA4MS43Mzc3IDIzOS40ODggODIuNjI1N0MyMzkuOTEzIDgyLjYxMzUgMjQwLjMzOSA4Mi42MDA1IDI0MC43NjQgODIuNTk0NFpNMzU3LjU3NiA4My40NTM4QzM1Ny41NzYgODIuNTY1OCAzNTcuNTcgODEuNjc3OCAzNTcuNTcgODAuNzg5OEMzNTcuMzU4IDgwLjc4OTggMzU3LjE0NCA4MC43OTkzIDM1Ni45MzIgODAuODA1NEMzNTYuOTMyIDgxLjY5NDYgMzU2LjkzNSA4Mi41ODggMzU2LjkzOCA4My40NzcyQzM1Ny4xNSA4My40NzcyIDM1Ny4zNjMgODMuNDU5OSAzNTcuNTc2IDgzLjQ1MzhaTTE0Ny41ODYgODEuNDMwNEMxNDcuNTg3IDgyLjI2OTIgMTQ4LjE5MiA4Mi4yNTQ3IDE0OC4xODkgODEuNDE0OEMxNDguMTg2IDgwLjU3NjEgMTQ3LjU4MyA4MC41OTA1IDE0Ny41ODYgODEuNDMwNFpNMjgyLjU5MiA4OS41MDg0QzI4My44MzMgODYuMDkxOCAyODUuMjIgODcuMTE3OSAyODcuMDIxIDg2LjY0OTFDMjg3LjY3MSA4Ni40Nzg2IDI4Ny4zODYgODQuMDEzOCAyODguMDA0IDgzLjM2NzlDMjg3LjM2IDgyLjY3OTkgMjg2LjcyNSA4Mi4wNjI3IDI4Ni4wODQgODEuMzk5MUMyODYuMTk4IDgyLjI4NzcgMjg2LjMxIDgzLjE3NDYgMjg2LjQyNCA4NC4wNjMyQzI4NS44OTEgODQuNTE5OCAyODUuMzU0IDg0Ljk4MTUgMjg0LjgyIDg1LjQzODFDMjg0LjgwOSA4NC41NTYgMjg0LjgwMSA4My42NzE5IDI4NC43ODkgODIuNzg5N0MyODQuMTYyIDgyLjgwMTkgMjgzLjUzNiA4Mi44MTY2IDI4Mi45MDYgODIuODI4OEMyODIuODEgODUuOTE2NiAyODEuMTU1IDg2LjkyNjEgMjgyLjU5MiA4OS41MDg0Wk0zMzIuNjk1IDg2LjgwNTNDMzMzLjExNSA4NS4wMTQ3IDMzMy41MzkgODMuMjIyNyAzMzMuOTU5IDgxLjQzODJDMzMzLjMyMSA4MS40NTA0IDMzMi42ODEgODEuNDc5IDMzMi4wNDMgODEuNDg1MUMzMzIuMDQ2IDgzLjI3MjUgMzMyLjA1MSA4NS4wNDczIDMzMi4wNTcgODYuODI4N0MzMzIuMjY5IDg2LjgyMjcgMzMyLjQ4MyA4Ni44MTE0IDMzMi42OTUgODYuODA1M1pNMTA4LjYzMyA4Mi44MzY2QzEwOC42MzMgODIuMzkxMyAxMDguNjMzIDgxLjk0NiAxMDguNjMzIDgxLjUwMDdDMTA4LjIwNyA4MS41MDY4IDEwNy43ODEgODEuNTEyIDEwNy4zNTUgODEuNTI0MUMxMDcuMzU1IDgxLjk2OTQgMTA3LjM1NSA4Mi40MTQ3IDEwNy4zNTUgODIuODYwMUMxMDcuNzgxIDgyLjg1NCAxMDguMjA3IDgyLjg0ODggMTA4LjYzMyA4Mi44MzY2Wk05OC4xMDU1IDg0LjMzNjZDOTguODExNyA4Mi42OTk0IDk5LjQyODUgODQuMzM4MSAxMDAuMzM0IDg0LjI5NzVDOTkuODAyMiA4My40MTcxIDk5LjI3MDEgODIuNTQ1MiA5OC43MzgzIDgxLjY2NDhDOTguNDIwOSA4Mi4zNDAxIDk4LjEwMjUgODMuMDExMSA5Ny43ODUyIDgzLjY4MDRDOTcuODkyOCA4My44OTkyIDk3Ljk5NzggODQuMTE3NyA5OC4xMDU1IDg0LjMzNjZaTTk1LjI0MjIgODIuMzkxM0M5NS4yNDIzIDgzLjIzMTYgOTUuODQ4NiA4My4yMTYxIDk1Ljg0NTcgODIuMzc1N0M5NS44NDQxIDgxLjUzODUgOTUuMjM5MyA4MS41NTE5IDk1LjI0MjIgODIuMzkxM1pNMTY1LjQyOCA4My43MTE2QzE2NC43OTUgODMuMDY2IDE2NC4xNTkgODIuMzk5NyAxNjMuNTI5IDgxLjc2NjNDMTYzLjM3OCA4My41NTAxIDE2My42ODMgODUuNDE2IDE2My44NDQgODcuMDQ3NUMxNjMuODc0IDg3LjQ4MjQgMTYzLjkwNCA4Ny45MTczIDE2My45MzQgODguMzUyMkMxNjQuMDExIDg5LjY4NjQgMTY0LjExNiA5MC45OTE2IDE2NC44MjYgOTEuMDc4N0MxNjUuMDIxIDg4LjYxMjEgMTY1LjIzIDg2LjE3MjEgMTY1LjQyOCA4My43MTE2Wk0zNjYuNTI3IDgyLjU0NzZDMzY2LjUzIDgzLjM4NzggMzY3LjEzMyA4My4zNzE2IDM2Ny4xMzEgODIuNTMxOUMzNjcuMTMxIDgxLjY5MjEgMzY2LjUyNSA4MS43MDg5IDM2Ni41MjcgODIuNTQ3NlpNMzE4LjAxNCA4Ny4yMTE2QzMxNy4zNzUgODYuNzg1MyAzMTYuNzM0IDg2LjM1NjUgMzE2LjA5NiA4NS45MzAzQzMxNi4wOTUgODUuOTI3NyAzMTYuMDk0IDg1LjkyNTEgMzE2LjA5NCA4NS45MjI1QzMxNS44NzggODQuNTk0OSAzMTUuNjYgODMuMjY1OCAzMTUuNDQ3IDgxLjkzODJDMzE1LjQ1IDgzLjcxNjEgMzE1LjQ1NSA4NS40OTYyIDMxNS40NjEgODcuMjc0MUMzMTYuMzEyIDg3LjI0OTcgMzE3LjE2MyA4Ny4yMjk4IDMxOC4wMTQgODcuMjExNlpNMzEyLjI3NSA4Mi42OTZDMzEyLjI3OCA4My41MzUgMzEyLjg4IDgzLjUxNzcgMzEyLjg3OSA4Mi42ODA0QzMxMi44NzkgODEuODM5OSAzMTIuMjcyIDgxLjg1NTUgMzEyLjI3NSA4Mi42OTZaTTEzNi40MDIgODQuOTkyOEMxMzYuNzIgODQuMDk3OCAxMzcuMDM4IDgzLjIwMDQgMTM3LjM1NSA4Mi4zMDU0QzEzNi45MyA4Mi4zMTE1IDEzNi41MDQgODIuMzIyNyAxMzYuMDc4IDgyLjMyODhDMTM2LjA3OCA4My4yMTggMTM2LjA4MSA4NC4xMTE0IDEzNi4wODQgODUuMDAwN0MxMzYuMTg5IDg1LjAwMDcgMTM2LjI5NyA4NC45OTg5IDEzNi40MDIgODQuOTkyOFpNMjUxLjYyNSA4Ni4zMjA5QzI1MS4wODkgODQuOTk5NiAyNTAuNTU2IDgzLjY4MTQgMjUwLjAyIDgyLjM2MDFDMjQ5LjkxNSA4Mi41ODU0IDI0OS44MDkgODIuODEyNyAyNDkuNzAxIDgzLjAzMTlDMjUwLjI4MSA4My45ODgxIDI1MC40MjkgODQuODIzNiAyNTAuMzQ4IDg2LjM1MjJDMjUwLjc3MyA4Ni4zNCAyNTEuMTk5IDg2LjMyNyAyNTEuNjI1IDg2LjMyMDlaTTM4OC44NTUgODMuMzA1NEMzODguODU0IDgzLjMwNTQgMzg4Ljg1MyA4My4zMDU0IDM4OC44NTIgODMuMzA1NEMzODguNzQ0IDgzLjA4NjQgMzg4LjYzOSA4Mi44NjgxIDM4OC41MzEgODIuNjQ5MUMzODguMjE0IDgzLjMyNTEgMzg3Ljg5NSA4My45OTY1IDM4Ny41OCA4NC42NzI1QzM4Ny42ODggODQuODkxOCAzODcuNzk0IDg1LjEwOTUgMzg3LjkwMiA4NS4zMjg4QzM4OC4yMiA4NC42NTMxIDM4OC41MzggODMuOTc1IDM4OC44NTUgODMuMzA1NFpNMzg1LjM0IDgyLjczNTFDMzg1LjI0MSA4NC45NjMzIDM4NS4xMzggODcuMTg2NCAzODUuMDM5IDg5LjQxNDZDMzg1LjY3NyA4OS42MjE3IDM4Ni4zMTcgODkuODI0NyAzODYuOTU1IDkwLjAzMThDMzg2LjQxNyA4Ny41OTk2IDM4NS44NzggODUuMTY3MyAzODUuMzQgODIuNzM1MVpNMTExLjgyMiA4Mi43ODE5QzExMC41MDIgODIuNjcyMyAxMDkuNTI1IDgyLjU0OTEgMTA4LjYzNyA4NC44MzY2QzEwOC45NTQgODQuNjY2MiAxMDkuMjcyIDg0LjQ5MTMgMTA5LjU5IDg0LjMyMUMxMTAuMDAzIDg0LjY5ODMgMTEwLjQyIDg1LjA2ODYgMTEwLjgzNCA4NS40NDZDMTExLjE2MyA4NC41NTczIDExMS40OTMgODMuNjcwNiAxMTEuODIyIDgyLjc4MTlaTTQzMS4yOTcgODIuODI4OEM0MzAuOTc5IDgzLjcyNDEgNDMwLjY2MyA4NC42Mjg4IDQzMC4zNDYgODUuNTI0MUM0MzAuOTg0IDg1Ljk1MDMgNDMxLjYyNSA4Ni4zNzMgNDMyLjI2NCA4Ni44MDUzQzQzMS45NCA4NS40NzgzIDQzMS42MiA4NC4xNTU4IDQzMS4yOTcgODIuODI4OFpNMzgwLjU2OCA4OC4xODgxQzM4MC43NzUgODYuNDA0NSAzODAuOTg1IDg0LjYyMDIgMzgxLjE5MSA4Mi44MzY2QzM3OS45OCA4My44MjkgMzc5LjgwNSA4NS42NjYgMzc5LjkzIDg4LjIwMzdDMzgwLjE0MiA4OC4yMDM3IDM4MC4zNTYgODguMTk0MiAzODAuNTY4IDg4LjE4ODFaTTMxMS42MzEgODcuMzc1NkMzMTAuODgyIDg2LjA2MDQgMzEwLjEzNiA4NC43NTM0IDMwOS4zODcgODMuNDM4MkMzMDkuMjgyIDgzLjY2MzUgMzA5LjE3MyA4My44OTI1IDMwOS4wNjggODQuMTE3OEMzMDkuMjg0IDg1LjY2OTkgMzA5LjUwMyA4Ny4yMTQxIDMwOS43MTkgODguNzY2MkMzMTAuMzU3IDg4LjMwMzMgMzEwLjk5MyA4Ny44Mzg1IDMxMS42MzEgODcuMzc1NlpNMTQyLjE1IDg2LjIxMTZDMTQyLjQ2OCA4NS4zMTY1IDE0Mi43ODYgODQuNDE5MiAxNDMuMTA0IDgzLjUyNDFDMTQyLjY3OCA4My41MzAyIDE0Mi4yNTIgODMuNTQxNSAxNDEuODI2IDgzLjU0NzVDMTQxLjgyNiA4NC40MzY3IDE0MS44MjYgODUuMzMwMiAxNDEuODMyIDg2LjIxOTRDMTQxLjkzNyA4Ni4yMTk0IDE0Mi4wNDUgODYuMjE3NyAxNDIuMTUgODYuMjExNlpNMzUwLjU3NCA4NC4zMTMyQzM1MC41NzcgODUuMTUzNiAzNTEuMTgxIDg1LjEzNzkgMzUxLjE3OCA4NC4yOTc1QzM1MS4xNzggODMuNDU3OSAzNTAuNTczIDgzLjQ3NTIgMzUwLjU3NCA4NC4zMTMyWk0yNDUuODgxIDg2LjQ2OTRDMjQ1Ljg4MSA4NS41ODAyIDI0NS44NzggODQuNjg2NyAyNDUuODc1IDgzLjc5NzVDMjQ1LjY2MiA4My43OTc1IDI0NS40NDkgODMuODA3MSAyNDUuMjM2IDgzLjgxMzJDMjQ1LjIzNiA4NC43MDI0IDI0NS4yMzkgODUuNTk1OCAyNDUuMjQyIDg2LjQ4NUMyNDUuNDU1IDg2LjQ4NSAyNDUuNjY4IDg2LjQ3NTUgMjQ1Ljg4MSA4Ni40Njk0Wk0yNDQuNiA4NS4xNjQ3QzI0My43NDkgODQuNzQ0NyAyNDIuODk2IDg0LjMxOTEgMjQyLjA0NSA4My44OTkxQzI0Mi4wNDUgODQuNzg4MyAyNDIuMDQ4IDg1LjY4MTcgMjQyLjA1MSA4Ni41NzA5QzI0My4wNDcgODYuMjc5MiAyNDMuNzM3IDg2Ljg4MSAyNDQuNjA1IDg3LjgzNjVDMjQ0LjYwNiA4Ni45NDczIDI0NC42MDIgODYuMDUzOSAyNDQuNiA4NS4xNjQ3Wk0xMTguMjE5IDg5LjMzNjVDMTE4LjIxNiA4OC4wMDQgMTE4LjIxNCA4Ni42NjkxIDExOC4yMTEgODUuMzM2NkMxMTcuNjc4IDg0LjkwNDkgMTE3LjE0NiA4NC40NjM2IDExNi42MTMgODQuMDMxOUMxMTYuNTA4IDg0LjI1NjkgMTE2LjQgODQuNDcwOSAxMTYuMjk1IDg0LjY5NkMxMTYuNzIzIDg2LjI0MjkgMTE3LjE1NCA4Ny43OTEzIDExNy41ODIgODkuMzQ0M0MxMTcuNzk0IDg5LjM0NDMgMTE4LjAwNyA4OS4zNDI2IDExOC4yMTkgODkuMzM2NVpNMTE1LjAyMSA4Ni43MTk0QzExNS4wMjEgODUuODMxNCAxMTUuMDE5IDg0Ljk0MzQgMTE1LjAxNiA4NC4wNTUzQzExNC41OTMgODQuOTQ5NiAxMTQuMTY4IDg1Ljg0MjUgMTEzLjc0NiA4Ni43NDI4QzExNC4xNzEgODYuNzM2NyAxMTQuNTk2IDg2LjcyNTUgMTE1LjAyMSA4Ni43MTk0Wk0zODkuNTA4IDg3LjkxNDdDMzkwLjY2OCA4OC4yNzkyIDM5Mi4xMyA4NC42MjkgMzkwLjQ0MyA4NC4wODY2QzM4OS44NzUgODMuOTAzOSAzODkuMjI4IDg3LjA0OTggMzg5LjUwOCA4Ny45MTQ3Wk0yMzQuMzkxIDg1LjQyMjVDMjM0LjM5MSA4NC45Nzg0IDIzNC4zOSA4NC41MzA3IDIzNC4zODcgODQuMDg2NkMyMzMuOTYyIDg0LjA5ODggMjMzLjUzNiA4NC4xMDU3IDIzMy4xMTEgODQuMTE3OEMyMzMuMTExIDg0LjU2MjIgMjMzLjExIDg1LjAwOTQgMjMzLjExMyA4NS40NTM4QzIzMy41MzkgODUuNDQxNiAyMzMuOTY1IDg1LjQzNDcgMjM0LjM5MSA4NS40MjI1Wk0xNzYuMzAzIDg1LjQ3NzJDMTc2LjMwMyA4NS4wMzMyIDE3Ni4zMDIgODQuNTg1MyAxNzYuMjk5IDg0LjE0MTNDMTc1Ljg3MyA4NC4xNTM1IDE3NS40NDcgODQuMTYwNCAxNzUuMDIxIDg0LjE3MjVDMTc1LjAyMiA4NC42MTY4IDE3NS4wMjIgODUuMDY0MSAxNzUuMDI1IDg1LjUwODVDMTc1LjQ1MSA4NS40OTYzIDE3NS44NzcgODUuNDg5NCAxNzYuMzAzIDg1LjQ3NzJaTTEwNi4wODYgODUuNTU1M0MxMDYuMDg2IDg1LjExIDEwNi4wODYgODQuNjY0NyAxMDYuMDg2IDg0LjIxOTRDMTA1LjY2IDg0LjIyNTUgMTA1LjIzNCA4NC4yMjg5IDEwNC44MDkgODQuMjM1QzEwNC44MDkgODQuNjgwMyAxMDQuODA5IDg1LjEyNTYgMTA0LjgwOSA4NS41NzFDMTA1LjIzNCA4NS41NjQ5IDEwNS42NiA4NS41NjE0IDEwNi4wODYgODUuNTU1M1pNMzIwLjg4MyA4Ny4xMjU2QzMyMS4yIDg2LjIzMDYgMzIxLjUxNCA4NS4zMjU0IDMyMS44MzIgODQuNDMwM0MzMjEuNDA3IDg0LjQ0MjUgMzIwLjk4MiA4NC40NTcyIDMyMC41NTcgODQuNDY5NEMzMjAuNTYgODUuMzU3NCAzMjAuNTY0IDg2LjI0NTQgMzIwLjU2NCA4Ny4xMzM0QzMyMC42NjkgODcuMTMzNCAzMjAuNzc4IDg3LjEzMTcgMzIwLjg4MyA4Ny4xMjU2Wk0yNzIuMzc5IDg4LjQzMDNDMjc0LjE3NyA4NS43OTU3IDI3NS44MTIgODguNjQ4OSAyNzcuODAzIDg4LjI4OTdDMjc3LjI3IDg3LjAzNDUgMjc2LjczOCA4NS43NzkzIDI3Ni4yMDUgODQuNTI0MUMyNzQuODIxIDg0Ljk0NDMgMjczLjQzNSA4NS4zNTk5IDI3Mi4wNTEgODUuNzc0MUMyNzIuMTU5IDg2LjY1NyAyNzIuMjY4IDg3LjU0NzMgMjcyLjM3OSA4OC40MzAzWk00NjAuOTggODQuNzM1QzQ2MS4xOTMgODQuNzI4OSA0NjEuNDA2IDg0LjcxOTQgNDYxLjYxOSA4NC43MTk0QzQ2MS42MjIgODUuNjA3NCA0NjEuNjI3IDg2LjQ5NTQgNDYxLjYyNyA4Ny4zODM0QzQ2MS40MTQgODcuMzgzNCA0NjEuMjAxIDg3LjM5OSA0NjAuOTg4IDg3LjM5OUM0NjAuOTg1IDg2LjUwOTkgNDYwLjk4IDg1LjYyNDIgNDYwLjk4IDg0LjczNVpNMjAzLjc2IDg5LjUxNjJDMjAyLjkwOSA4OS43NTk4IDIwMi4wNiA5MC4wMDcgMjAxLjIwOSA5MC4yNTA2QzIwMS40MTkgODguNDY2MSAyMDEuNjI2IDg2LjY3NTggMjAxLjgzNiA4NC44OTEzQzIwMC45ODggODUuMzYwMiAyMDAuMTM2IDg1LjgyODYgMTk5LjI4NSA4Ni4yOTc1QzE5OS4wMzggOTIuMzU1NSAyMDAuNTg5IDkzLjE5MjcgMjAzLjEzMyA5NC4yMDM2QzIwMy4zNDMgOTIuNjQ0NSAyMDMuNTUgOTEuMDc1MyAyMDMuNzYgODkuNTE2MlpNMzkyLjA3MiA5MS45MzhDMzkzLjI5MSA5MS4xMjggMzk0LjI1IDkxLjIxODkgMzk1LjU1MyA5MC4yNTA2QzM5Ni44NTUgODkuMjgyMyAzOTcuNDQ4IDg4LjM5OTQgMzk3LjE2MiA4NS4xNDEzQzM5Ny4xNjEgODUuMTQxMyAzOTcuMTYgODUuMTQxMyAzOTcuMTU4IDg1LjE0MTNDMzk1Ljk2NyA4NS40NzA3IDM5NS40MzMgODguNTc0MiAzOTQuMTY2IDg4Ljk3NzJDMzkyLjg5NSA4OS4zNzkgMzkyLjE1NCA4Ny4yNzY0IDM5Mi4wNzIgOTEuOTM4Wk0xOTAuMzYzIDg1LjgyODhDMTkwLjM2MyA4Ni42NjkyIDE5MC45NyA4Ni42NTk3IDE5MC45NjcgODUuODEzMUMxOTAuOTY2IDg0Ljk3NDUgMTkwLjM2MiA4NC45ODU4IDE5MC4zNjMgODUuODI4OFpNMzQxLjYyMyA4NS4yMTk0QzM0MS40MTEgODUuMjE5NCAzNDEuMTk5IDg1LjIzNjcgMzQwLjk4NiA4NS4yNDI4QzM0MC44NzMgODcuNzY5NyAzNDEuMDUzIDg5LjYwNzggMzQyLjI3MyA5MC41Mzk2QzM0Mi4yNzUgOTAuNTM5NiAzNDIuMjc2IDkwLjUzOTYgMzQyLjI3NyA5MC41Mzk2QzM0Mi4wNTkgODguNzY3MyAzNDEuODQyIDg2Ljk5MTcgMzQxLjYyMyA4NS4yMTk0Wk0yODguNjY2IDg2LjAwMDZDMjg4LjY2NiA4Ni44NDA5IDI4OS4yNzIgODYuODI0OSAyODkuMjcgODUuOTg1QzI4OS4yNyA4NS4xNDUyIDI4OC42NjQgODUuMTYyMiAyODguNjY2IDg2LjAwMDZaTTE4Mi4wNTMgODguMDI0QzE4Mi4wNTMgODcuMTM2IDE4Mi4wNSA4Ni4yNDggMTgyLjA0NyA4NS4zNkMxODEuNjIxIDg1LjM3MjIgMTgxLjE5NSA4NS4zNzkxIDE4MC43NyA4NS4zOTEzQzE4MC43NyA4Ni4yNzkyIDE4MC43NzIgODcuMTY3MyAxODAuNzc1IDg4LjA1NTNDMTgxLjIwMSA4OC4wNDMxIDE4MS42MjcgODguMDM2MiAxODIuMDUzIDg4LjAyNFpNMTkuMjkyOSA4Ni4xMUMxOS4yOTc3IDg2Ljk0NiAxOS44OTg0IDg2LjkzOTMgMTkuODk2NSA4Ni4xMDIyQzE5Ljg5NjQgODUuMjYxNyAxOS4yOTAxIDg1LjI2OTUgMTkuMjkyOSA4Ni4xMVpNMjE2LjUzNyA4Ni41Mzk3QzIxNi41MzggODcuMzc3OSAyMTcuMTQyIDg3LjM2MDYgMjE3LjE0MSA4Ni41MjQxQzIxNy4xNDEgODUuNjgzNiAyMTYuNTM0IDg1LjY5OTIgMjE2LjUzNyA4Ni41Mzk3Wk0yNjAuOTE0IDk0LjAwODNDMjYxLjYxMSA5NC41ODA4IDI2MS42NjEgOTIuODc3MyAyNjIuMjkxIDkyLjg4MzNDMjYzLjQxOSA5Mi44OTU0IDI2NC4zNzQgOTIuNjk3OCAyNjMuNDQxIDkwLjAwMDZDMjYyLjQ5NCA5MC45MzI0IDI2MS41MzIgOTEuODM4NyAyNjAuNTgyIDkyLjc1ODNDMjYxLjIxNSA5MC41MTcxIDI2MS44NDggODguMjgxIDI2Mi40OCA4Ni4wMzk3QzI2MS42MzIgODYuOTUzMyAyNjAuNzggODcuODYyMiAyNTkuOTMyIDg4Ljc4MThDMjU5LjkyOSA4Ny44ODE3IDI1OS45MjYgODYuOTk3OSAyNTkuOTI2IDg2LjExQzI1OS45MjUgODYuMTA3NCAyNTkuOTI0IDg2LjEwNDggMjU5LjkyNCA4Ni4xMDIyQzI1OS40OTggODYuMTE0NCAyNTkuMDcyIDg2LjEyMTMgMjU4LjY0NiA4Ni4xMzM0QzI1OC42NDYgODcuMDIyNiAyNTguNjQ3IDg3LjkxNjEgMjU4LjY1MiA4OC44MDUzQzI1OS4wNzggODguNzk5MiAyNTkuNTAzIDg4Ljc4NzkgMjU5LjkzMiA4OC43ODE4QzI1OS44MTIgOTAuNzE4MyAyNTkuOTgyIDkzLjIzNDYgMjYwLjkxNCA5NC4wMDgzWk0zMDguNDM5IDg3LjQ2MTVDMzA4LjQzOSA4Ny4wMTg4IDMwOC40MzggODYuNTc2MiAzMDguNDM2IDg2LjEzMzRDMzA3LjU4NSA4Ni4xNTc4IDMwNi43MzQgODYuMTc3NyAzMDUuODgzIDg2LjE5NTlDMzA1Ljg4MyA4Ny4wODM5IDMwNS44ODYgODcuOTc5OCAzMDUuODg5IDg4Ljg2NzhDMzA2Ljc0IDg4LjM5ODggMzA3LjU4OCA4Ny45MzA1IDMwOC40MzkgODcuNDYxNVpNMzAyLjcwNSA4Ni41MDA2QzMwMi40NTcgODcuMTI0NiAzMDQuMDQxIDkwLjA2OTcgMzA0LjU5OCA4OC42ODgxQzMwNC44NDggODguMDY2OCAzMDMuMjYyIDg1LjExODEgMzAyLjcwNSA4Ni41MDA2Wk0xOTYuNDEgODYuMzUyMkMxOTUuODggODYuODA4OSAxOTUuMzQ5IDg3LjI3MDUgMTk0LjgxOCA4Ny43MjcyQzE5NC44MTggODguMTcxNSAxOTQuODE5IDg4LjYxODggMTk0LjgyMiA4OS4wNjMxQzE5NS42NzMgODkuNDg5NCAxOTYuNTI4IDg5LjkxNjMgMTk3LjM3OSA5MC4zMzY1QzE5Ny4wNTUgODkuMDA4OCAxOTYuNzM0IDg3LjY3OTkgMTk2LjQxIDg2LjM1MjJaTTIzNi45NjEgOTQuNzAzNkMyMzYuNzM0IDkzLjQwMDMgMjM2LjUwOSA5Mi4wODUyIDIzNi4yODEgOTAuNzgxOEMyMzUuODY1IDg5Ljg4MDggMjM1LjQ0OCA4OC45Nzk3IDIzNS4wMzEgODguMDc4N0MyMzYuMDk4IDg4Ljk0MzUgMjM3LjE2MiA4OS43OTk5IDIzOC4yMjkgOTAuNjY0NkMyMzYuNjM0IDg1LjMzNzQgMjM0LjMzNiA4NS41NzU1IDIzMy4xMzMgOTEuMzkxMkMyMzMuMzQ2IDkyLjUxNzkgMjMzLjU1NyA5My42NDcyIDIzMy43NyA5NC43NzM5QzIzNC44MzMgOTQuNzQ5NiAyMzUuODk3IDk0LjcyOCAyMzYuOTYxIDk0LjcwMzZaTTMyNy42MDcgODcuNjFDMzI3LjYwNyA4OC40NDk4IDMyOC4yMTMgODguNDMyOCAzMjguMjExIDg3LjU5NDRDMzI4LjIxMSA4Ni43NTQxIDMyNy42MDUgODYuNzcgMzI3LjYwNyA4Ny42MVpNMTY5LjI4OSA4OS42NDEyQzE2OS4yODkgODguNzUyIDE2OS4yODMgODcuODU4NiAxNjkuMjgzIDg2Ljk2OTRDMTY4Ljg1OCA4Ni45ODE2IDE2OC40MzEgODYuOTg4NCAxNjguMDA2IDg3LjAwMDZDMTY4LjAwNiA4Ny44ODk4IDE2OC4wMDkgODguNzgzMyAxNjguMDEyIDg5LjY3MjVDMTY4LjQzNyA4OS42NjAzIDE2OC44NjMgODkuNjUzNCAxNjkuMjg5IDg5LjY0MTJaTTMyNS4wNTMgODcuNjgwM0MzMjUuMDUzIDg4LjUyMDggMzI1LjY1OSA4OC41MDUxIDMyNS42NTYgODcuNjY0N0MzMjUuNjU2IDg2LjgyNiAzMjUuMDUxIDg2Ljg0MzQgMzI1LjA1MyA4Ny42ODAzWk0xNjYuMTA5IDg3LjcxMTVDMTY2LjExMSA4OC41NDg0IDE2Ni43MTYgODguNTM1MSAxNjYuNzEzIDg3LjY5NTlDMTY2LjcxMyA4Ni44NTU0IDE2Ni4xMDYgODYuODcxMSAxNjYuMTA5IDg3LjcxMTVaTTE2MC45ODggODkuODEzMUMxNjAuOTg4IDg4LjkyNTEgMTYwLjk4NSA4OC4wMzcxIDE2MC45ODIgODcuMTQ5MUMxNjAuMzQ0IDg3LjE2MTIgMTU5LjcwNSA4Ny4xNjk4IDE1OS4wNjYgODcuMTg4MUMxNTkuMDY4IDg3LjE4ODEgMTU5LjA2OSA4Ny4xODgxIDE1OS4wNyA4Ny4xODgxQzE1OS4wNyA4Ny40MDk1IDE1OS4wNyA4Ny42MzA4IDE1OS4wNyA4Ny44NTIyQzE1OS42NTYgODkuMjEwMiAxNjAuMDcgOTAuMDY4OSAxNjAuOTg4IDg5LjgxMzFaTTMxNC4xOTMgODkuOTc3MUMzMTQuMTkzIDg5LjA4OTEgMzE0LjE4OCA4OC4yMDExIDMxNC4xODggODcuMzEzMUMzMTQuMTg2IDg3LjMxMzEgMzE0LjE4NSA4Ny4zMTMxIDMxNC4xODQgODcuMzEzMUMzMTMuNzYxIDg4LjIxNCAzMTMuMzM4IDg5LjExNTMgMzEyLjkxNiA5MC4wMTYyQzMxMy4zNDIgOTAuMDA0IDMxMy43NjggODkuOTg5MyAzMTQuMTkzIDg5Ljk3NzFaTTE0OS44MzYgOTIuNzExNUMxNTEuNjI1IDkyLjM1MjEgMTUyLjE2NyA5MS4yMSAxNTIuMDQ1IDg3LjMzNjVDMTUxLjYyNiA4OC42NzUzIDE1MS4xOTggOTAuMDE1MSAxNTAuNzc1IDkxLjM1OTlDMTQ5LjkyNCA5MC45MzM2IDE0OS4wNzUgOTAuNTA2NyAxNDguMjIxIDkwLjA4NjVDMTQ4LjEwNyA5My4wMjgyIDE0OC41MzYgOTIuOTczNCAxNDkuODM2IDkyLjcxMTVaTTE0OC4yMzggODguMDg2NUMxNDguMjM5IDg4LjkyNjEgMTQ4Ljg0NSA4OC45MTExIDE0OC44NDIgODguMDcwOUMxNDguODM4IDg3LjIzMyAxNDguMjM1IDg3LjI0NjkgMTQ4LjIzOCA4OC4wODY1Wk0zMDIuMDcgOTMuNjQxMUMzMDEuMjA4IDkxLjk1NSAzMDEuNDAzIDg5LjkzMzEgMzAxLjQxOCA4Ny42NTY5QzI5OS43NzIgODcuNzcyNSAyOTkuMzg0IDg5Ljg2ODMgMjk5LjUxOCA5My4wMzk2QzMwMC4zNjggOTMuMjQwNSAzMDEuMjE5IDkzLjQ0NjMgMzAyLjA3IDkzLjY0MTFaTTM0NS40NjkgOTAuNDUzN0MzNDUuMDQzIDg5LjU3NjcgMzQ0LjYxMSA4OC42OTc5IDM0NC4xODYgODcuODIwOUMzNDQuMTg2IDg4LjcxMDEgMzQ0LjE5MSA4OS42MDM2IDM0NC4xOTEgOTAuNDkyOEMzNDQuNjE3IDkwLjQ4MDYgMzQ1LjA0MyA5MC40NjU5IDM0NS40NjkgOTAuNDUzN1pNMjk2LjAxMiA5NS44MDUyQzI5Ny43NDUgOTIuMjk4MyAyOTUuOTMgODkuODcyIDI5NC4zOTUgODcuODQ0NEMyOTQuMTg4IDg5LjYyMjggMjkzLjk3MyA5MS40MjE4IDI5My43NzEgOTMuMTg4QzI5NC4yNDYgOTMuMzUyNCAyOTQuODc2IDkyLjg3NTcgMjk1LjMxNiA5My4xNDlDMjk2LjA2IDkzLjU5OTcgMjk1LjMxOCA5NS40ODg1IDI5Ni4wMTIgOTUuODA1MlpNMjQwLjE1OCA4OC42MTc4QzI0MC4xNTkgODkuNDU1OSAyNDAuNzY1IDg5LjQzNDEgMjQwLjc2MiA4OC41OTQzQzI0MC43NiA4Ny43NTY4IDI0MC4xNTUgODcuNzc4MyAyNDAuMTU4IDg4LjYxNzhaTTMzNy4xODYgODguNjgwM0MzMzcuMTg4IDg5LjUyMDYgMzM3Ljc5IDg5LjUwNDcgMzM3Ljc4NyA4OC42NjQ3QzMzNy43ODQgODcuODI0OSAzMzcuMTg0IDg3Ljg0MTkgMzM3LjE4NiA4OC42ODAzWk0yMzEuODUyIDkyLjE1NjhDMjMxLjg0OSA5MC44MjQxIDIzMS44NDUgODkuNDg5NiAyMzEuODQyIDg4LjE1NjlDMjMxLjYzIDg4LjE1NjkgMjMxLjQxNyA4OC4xNzQyIDIzMS4yMDUgODguMTgwM0MyMzEuMjA4IDg5LjUxMyAyMzEuMjEgOTAuODQ3NSAyMzEuMjEzIDkyLjE4MDJDMjMxLjQyNiA5Mi4xODAyIDIzMS42MzkgOTIuMTYyOSAyMzEuODUyIDkyLjE1NjhaTTEwOS4zMDEgODguODI4N0MxMDkuMzAxIDg5LjY2OTEgMTA5LjkwNyA4OS42NTM1IDEwOS45MDQgODguODEzMUMxMDkuOTAzIDg3Ljk3NiAxMDkuMjk4IDg3Ljk4OTQgMTA5LjMwMSA4OC44Mjg3Wk0xMDYuMTA5IDg4Ljg4MzRDMTA2LjEwOSA4OS43MjM5IDEwNi43MTYgODkuNzA4MyAxMDYuNzEzIDg4Ljg2NzhDMTA2LjcxMSA4OC4wMzA4IDEwNi4xMDYgODguMDQ0MSAxMDYuMTA5IDg4Ljg4MzRaTTEzMy41NDkgOTMuMDQ3NEMxMzMuNDMzIDkxLjM2MTEgMTMzLjkxNSA5MC41MTc2IDEzNC4xNzggODkuMDMxOEMxMzMuNzUyIDg5LjAzNzkgMTMzLjMyNiA4OS4wNTcgMTMyLjkgODkuMDYzMUMxMzIuOTAzIDkwLjM5NTkgMTMyLjkwNyA5MS43MzAyIDEzMi45MSA5My4wNjNDMTMzLjEyMyA5My4wNjMgMTMzLjMzNiA5My4wNTM1IDEzMy41NDkgOTMuMDQ3NFpNMTgyLjA2MSA5Mi4wMjRDMTgxLjYzMiA5MS4xNDE4IDE4MS4yMDcgOTAuMjY3MyAxODAuNzc5IDg5LjM5MTJDMTgwLjc4MiA5MC4yNzkyIDE4MC43NzkgOTEuMTY3MiAxODAuNzg1IDkyLjA1NTJDMTgxLjIxIDkyLjA0MzEgMTgxLjYzNSA5Mi4wMzYxIDE4Mi4wNjEgOTIuMDI0Wk0xNzQuNDA0IDkzLjUyNEMxNzQuNDA0IDkyLjE5MDcgMTc0LjM5OSA5MC44NTczIDE3NC4zOTYgODkuNTI0QzE3My41NDMgODkuMTc2OSAxNzMuMDAyIDkyLjIyMTEgMTczLjEyNyA5My41NTUyQzE3My41NTMgOTMuNTQzIDE3My45NzkgOTMuNTM2MSAxNzQuNDA0IDkzLjUyNFpNMTA0LjgzNiA5MC4yMzQ5QzEwNC44MzYgOTEuMDc0MiAxMDUuNDM5IDkxLjA2MzkgMTA1LjQzOCA5MC4yMjcxQzEwNS40MzggODkuMzg2OCAxMDQuODMzIDg5LjM5NSAxMDQuODM2IDkwLjIzNDlaTTMyNi4zMzYgOTAuMzEzMUMzMjYuMzM5IDkxLjE1MzIgMzI2Ljk0MiA5MS4xMzY5IDMyNi45MzkgOTAuMjk3NEMzMjYuOTM3IDg5LjQ1NzUgMzI2LjMzNCA4OS40NzQyIDMyNi4zMzYgOTAuMzEzMVpNMjI1LjQ2OSA5Mi4zMjA5QzIyNS4wNCA5MS40NDM4IDIyNC42MTQgOTAuNTYzNCAyMjQuMTg2IDg5LjY4MDNDMjI0LjE4NiA5MC41Njk1IDIyNC4xOTEgOTEuNDYyOSAyMjQuMTkxIDkyLjM1MjFDMjI0LjYxNyA5Mi4zMzk5IDIyNS4wNDMgOTIuMzI2OSAyMjUuNDY5IDkyLjMyMDlaTTIxOC4zNDggOTMuNzk3NEMyMTguOTk2IDkyLjYwOSAyMTcuNTYgODkuMzQ3NiAyMTcuMjY2IDg5Ljg4MzRDMjE2LjYxNiA5MS4wNzE0IDIxOC4wNTMgOTQuMzMzMyAyMTguMzQ4IDkzLjc5NzRaTTMwNy44MTggOTQuMTQ4OUMzMDguNjcyIDk0LjQ5IDMwOS4yMTIgOTEuNDQzNyAzMDkuMDg0IDkwLjEwOTlDMzA4LjQ0NiA5MC4xMjgyIDMwNy44MDYgOTAuMTQ2NCAzMDcuMTY4IDkwLjE2NDZDMzA3LjQ1MSA5MS42NjgzIDMwNy45NDMgOTIuNDE0OSAzMDcuODE4IDk0LjE0ODlaTTI0My45NTcgOTYuOTIyM0MyNDQuOTk5IDk5LjAzNzUgMjQ1LjM5OSA5NS45NTkzIDI0NS4yODMgOTQuNTYzQzI0NS45MSA5NC40Nzc4IDI0Ni41NDUgOTQuNDcxMSAyNDcuMTc0IDk0LjQyMjRDMjQ3LjI3NiA5My4wOTQ3IDI0Ny4zODEgOTEuNzY0MSAyNDcuNDg2IDkwLjQzMDNDMjQ2Ljk1NiA5MS4xMzA3IDI0Ni40MjUgOTEuODM3NSAyNDUuODk1IDkyLjUzMThDMjQ0Ljk3OSA5MC4wMTY2IDI0My45OTQgOTEuODYyMSAyNDIuNzA5IDkxLjk1MzdDMjQzLjMwMyA5Mi40OTY4IDI0My43NjggOTYuNTM4NyAyNDMuOTU3IDk2LjkyMjNaTTE3OC44ODUgOTEuNDMwMkMxNzguODg1IDkyLjI2OTcgMTc5LjQ5MSA5Mi4yNTQ4IDE3OS40ODggOTEuNDE0NkMxNzkuNDg3IDkwLjU3NjYgMTc4Ljg4MiA5MC41OTA2IDE3OC44ODUgOTEuNDMwMlpNMjE1Ljg5NiA5My44OTExQzIxNS44OTcgOTMuMDAxOSAyMTUuODkzIDkyLjEwODUgMjE1Ljg5MSA5MS4yMTkzQzIxNS42NzggOTEuMjE5MyAyMTUuNDY1IDkxLjIzNjcgMjE1LjI1MiA5MS4yNDI3QzIxNS4yNTIgOTIuMTMwOCAyMTUuMjU1IDkzLjAxODggMjE1LjI1OCA5My45MDY4QzIxNS40NyA5My45MDY4IDIxNS42ODQgOTMuODk3MiAyMTUuODk2IDkzLjg5MTFaTTEzOS45NDkgOTIuMjU4NEMxMzkuOTUgOTMuMDk4IDE0MC41NTYgOTMuMDgyOSAxNDAuNTUzIDkyLjI0MjdDMTQwLjU1MSA5MS40MDQ5IDEzOS45NDYgOTEuNDE4OCAxMzkuOTQ5IDkyLjI1ODRaTTI1MS4wMDQgOTMuMDA4M0MyNTEuMDA0IDkyLjU2MzcgMjUxLjAwNSA5Mi4xMTcgMjUxLjAwMiA5MS42NzI0QzI1MC41NzYgOTEuNjg0NiAyNTAuMTUgOTEuNjk3NiAyNDkuNzI1IDkxLjcwMzdDMjQ5LjcyNSA5Mi4xNDgyIDI0OS43MjQgOTIuNTk1MSAyNDkuNzI3IDkzLjAzOTZDMjUwLjE1MiA5My4wMjc0IDI1MC41NzggOTMuMDE0NCAyNTEuMDA0IDkzLjAwODNaTTM0MC4zNzMgOTQuNTk0M0MzNDAuMzczIDkzLjcwNjIgMzQwLjM2NyA5Mi44MTgyIDM0MC4zNjcgOTEuOTMwMkMzNDAuMTU1IDkxLjkzMDIgMzM5Ljk0MSA5MS45Mzk4IDMzOS43MjkgOTEuOTQ1OUMzMzkuNzI5IDkyLjgzNTEgMzM5LjczMSA5My43Mjg1IDMzOS43MzQgOTQuNjE3N0MzMzkuOTQ3IDk0LjYxNzcgMzQwLjE2IDk0LjYwMDMgMzQwLjM3MyA5NC41OTQzWk0yODUuNDc3IDk0Ljc3MzlDMjg2LjU1NSAxMDIuMTczIDI4OS4yMTcgOTcuNjMxOSAyODcuMDY2IDkyLjA0NzRDMjg2LjgzIDkyLjk2NzEgMjg2LjU5IDkzLjg5MzMgMjg2LjM1NCA5NC44MTNDMjg2LjA2MiA5NC44MDA4IDI4NS43NjggOTQuNzg2MSAyODUuNDc3IDk0Ljc3MzlaTTI3NS45MTYgOTQuODA1MkMyNzYuNDgxIDk2LjE1NjMgMjc4LjA1MSA5My4xMjgzIDI3Ny43OTcgOTIuNTE2MkMyNzcuMjMyIDkxLjE2NDQgMjc1LjY2IDk0LjE5NTIgMjc1LjkxNiA5NC44MDUyWk0xNzkuNTI5IDk0LjA4NjVDMTc5LjUzIDk0LjkyNTEgMTgwLjEzNCA5NC45MDkgMTgwLjEzMSA5NC4wNjNDMTgwLjEyOSA5My4yMjYgMTc5LjUyNiA5My4yNDEgMTc5LjUyOSA5NC4wODY1Wk0zMTguNzA1IDEwOC41MzJDMzIwLjUxNSAxMDguNDIyIDMyMC40NjkgMTA0LjcxMiAzMjEuODgzIDEwMy4xMUMzMjEuOTk0IDEwNC40NDQgMzIyLjEgMTA1Ljc3NiAzMjIuMjExIDEwNy4xMUMzMjIuODQ2IDEwNi43MDIgMzIzLjQ4NiAxMDYuMjkzIDMyNC4xMjEgMTA1Ljg5MUMzMjQuODY3IDEwNi43IDMyNS42MTYgMTA3LjUxMyAzMjYuMzYxIDEwOC4zMjhDMzI2LjE0NiAxMDcuMDAyIDMyNS45MyAxMDUuNjcxIDMyNS43MTUgMTA0LjM0NEMzMjguMDUyIDEwMy44MzMgMzMwLjM5MSAxMDMuMzE3IDMzMi43MjkgMTAyLjgwNUMzMzIuOTM4IDEwMS4yNTMgMzMzLjE0OCA5OS43MDA4IDMzMy4zNTcgOTguMTQ4OUMzMzEuNTU2IDk0LjQzMzcgMzMwLjI5IDk4LjEwOTYgMzI4LjI1NiA5OC45Mzc5QzMyOC4wNCA5Ny44MjQxIDMyNy44MjMgOTYuNzAwMiAzMjcuNjA3IDk1LjU4NjRDMzI2Ljk3MiA5NS44MyAzMjYuMzM5IDk2LjA3NzIgMzI1LjcwMyA5Ni4zMjA4QzMyNS41OSA5NS40Mzg2IDMyNS40NzkgOTQuNTYyNCAzMjUuMzY1IDkzLjY4MDJDMzIyLjk3NiA5My4yOTY3IDMyNC42MTMgOTcuNzcxIDMyMi41MDQgOTcuNzY2MUMzMjIuMjg4IDk2LjY1OCAzMjIuMDcyIDk1LjU0NjEgMzIxLjg1OSA5NC40MzhDMzIxLjUzOSA5NC4yMjQ4IDMyMS4yMTcgOTQuMDE4NCAzMjAuODk2IDkzLjgwNTJDMzIwLjA0NiA5NS41NzExIDMxOS4yMTQgOTcuMzI4MyAzMTguMzUyIDk5LjA5NDJDMzE2Ljg1OSA5Ny4xNDY0IDMxNC44MzUgOTguMDU3NiAzMTMuMjg3IDk4LjAzOTVDMzExLjkwMyA5OC4wMjEyIDMxMS4zODkgOTcuODk3NSAzMTAuMDIgOTguMTQxMUMzMTAuMDIxIDk4LjEzODUgMzEwLjAyMyA5OC4xMzU5IDMxMC4wMjUgOTguMTMzM0MzMDkuMzA1IDk4LjI2MTIgMzA4LjAyMiA5OC4xMTk0IDMwNy4xOTcgOTguMTI1NUMzMDYuOTg1IDk5Ljc5NTkgMzA2Ljc0OSA5OC45MTAyIDMwNi41NjIgMTAxLjE3MkMzMDYuMzc2IDEwMy40NDQgMzA3LjI3IDEwMy41MzIgMzA4LjUyMyAxMDQuMTk2QzMwOS4wMzEgMTA0LjQ2NCAzMDkuNTUzIDEwNi44NjIgMzEwLjA4IDEwNy4zOTlDMzEwLjQwNyAxMDUuNjg3IDMxMC43MTYgMTAzLjg0OCAzMTEuMDM3IDEwMi4wOTRDMzEzLjcxNSAxMDEuNjQ5IDMxNS4zMjcgOTguMzI0NiAzMTUuNTA4IDEwNS45NTNDMzE2LjM0NyAxMDUuNDY2IDMxNy4xODYgMTA0Ljk3OCAzMTguMDI1IDEwNC40ODVDMzE4LjQ2IDEwMy42MDggMzE4Ljg5MiAxMDIuNzIxIDMxOS4zMjYgMTAxLjg0NEMzMTkuMTE5IDEwNC4wNzMgMzE4LjkxMiAxMDYuMzAyIDMxOC43MDUgMTA4LjUzMlpNMTYzLjU1OSA5Ni40MzAyQzE2My4xMyA5NS41NTMxIDE2Mi43MDQgOTQuNjY2NiAxNjIuMjc1IDkzLjc4OTZDMTYyLjI3NSA5NC42Nzg4IDE2Mi4yNzggOTUuNTcyMiAxNjIuMjgxIDk2LjQ2MTRDMTYyLjcwNyA5Ni40NDkyIDE2My4xMzMgOTYuNDQyMyAxNjMuNTU5IDk2LjQzMDJaTTMwMy42NzYgOTguMjY2MUMzMDMuOTkzIDk3LjU5MDUgMzA0LjMxMSA5Ni45MTA0IDMwNC42MjkgOTYuMjM0OUMzMDQuMjA0IDk1LjU3NzUgMzAzLjc3NSA5NC45MjM1IDMwMy4zNSA5NC4yNjYxQzMwMy4zNTMgOTUuNTk5NSAzMDMuMzU2IDk2Ljk0MDYgMzAzLjM1OSA5OC4yNzM5QzMwMy40NjQgOTguMjczOSAzMDMuNTcxIDk4LjI3MjEgMzAzLjY3NiA5OC4yNjYxWk0zNDIuMzEyIDEwMy44NzVDMzQyLjA5NyAxMDIuOTkyIDM0MS44OCAxMDIuMTEgMzQxLjY2NCAxMDEuMjI3QzM0Mi43MjggMTAwLjc1MiAzNDMuNzkyIDEwMC4yOCAzNDQuODU1IDk5LjgwNTFDMzQ0LjUyOSA5OC4wMzk4IDM0NC4yMDYgOTYuMjczNiAzNDMuODc3IDk0LjUwODNDMzQxLjg2MyA5NS40NDYyIDMzOS44MzcgOTYuMzk2OCAzMzcuODMyIDk3LjMyODZDMzM3LjgxNSA5Ny42MjAzIDMzNy43OTggOTcuOTExOSAzMzcuNzgxIDk4LjIwMzZDMzM3LjcxMiA5OS45Mjk5IDMzNy45OTUgOTkuNTc1IDMzOC43NjggOTkuOTUzNUMzMzkuNjUxIDEwMC4zOTIgMzQwLjEzMyAxMDEuMjM0IDM0MS4wMDQgMTAxLjMxM0MzNDEuMDA0IDEwMi4xOSAzNDEuMDI2IDEwMy4wNTEgMzQxLjAzNSAxMDMuOTIyQzM0MS40NjEgMTAzLjkxIDM0MS44ODcgMTAzLjg5NCAzNDIuMzEyIDEwMy44NzVaTTI2OC4yNTQgMTAxLjg2OEMyNjguMjQ4IDEwMS4yMjkgMjY4LjI0MiAxMDAuNTg0IDI2OC4yMzYgOTkuOTQ1N0MyNjcuNjAxIDk4LjM4NjkgMjY2Ljk2NSA5Ni44MzI4IDI2Ni4zMyA5NS4yNzM5QzI2Ni41NDkgOTguMzc3NyAyNjYuNzY5IDEwMS40ODMgMjY2Ljk5IDEwNC41ODZDMjY3LjQwOSAxMDMuNjggMjY3LjgzMiAxMDIuNzc0IDI2OC4yNTQgMTAxLjg2OFpNMjE0LjAwNCA5NS45MzhDMjE0LjAwNSA5Ni43NzY2IDIxNC42MSA5Ni43NTQ0IDIxNC42MDcgOTUuOTE0NUMyMTQuNjA2IDk1LjA3NzUgMjE0LjAwMSA5NS4wOTg2IDIxNC4wMDQgOTUuOTM4Wk0yOTUuMDUzIDk1Ljg0NDJDMjk1LjA1MyA5NS44NDE2IDI5NS4wNTQgOTUuODM5IDI5NS4wNTUgOTUuODM2NEMyOTQuNjI5IDk1Ljg0ODYgMjk0LjIwMyA5NS44NjMzIDI5My43NzcgOTUuODc1NUMyOTMuNzc3IDk2Ljc2MzUgMjkzLjc4IDk3LjY1MTUgMjkzLjc4MyA5OC41Mzk1QzI5My44ODggOTguNTM5NSAyOTMuOTk3IDk4LjUzOTUgMjk0LjEwMiA5OC41Mzk1QzI5NC40MTkgOTcuNjQ0MiAyOTQuNzM1IDk2LjczOTUgMjk1LjA1MyA5NS44NDQyWk0zMzkuMTE5IDExMC42NDFDMzM5LjU4IDEwOC42MTMgMzM5Ljk2OSAxMDYuNjE2IDM0MC40IDEwNC41OTRDMzM5Ljc2NSAxMDQuODI2IDMzOS4xMzQgMTA1LjA2NiAzMzguNTAyIDEwNS4yOTdDMzM4LjQ4NyAxMDQuNDMzIDMzOC40NzMgMTAzLjU3NSAzMzguNDU1IDEwMi43MTFDMzM3LjM5NyAxMDIuMjc5IDMzNi4zNDMgMTAxLjgzOSAzMzUuMjg1IDEwMS40MDdDMzM1LjQ5NSA5OS42MjMxIDMzNS43MDEgOTcuODM4NyAzMzUuOTA4IDk2LjA1NTJDMzM1LjI3MyA5Ni4wNzk1IDMzNC42MjkgOTYuMDY5IDMzMy45OTYgOTYuMTE3N0MzMzMuNzI4IDk4LjYwODcgMzM0LjM0NiA5OS42ODA3IDMzNC45NjEgMTAxLjMxM0MzMzUuMzY2IDEwMi4zODUgMzM0Ljk1MiAxMDMuMTc1IDMzNS4zODcgMTAzLjkzQzMzNS44MTggMTA0LjY4MyAzMzYuNDggMTA0LjAwNiAzMzYuOTIgMTA1LjMyMUMzMzcuMzYgMTA2LjYzNiAzMzYuODUgMTA4LjA0MyAzMzcuMzI0IDEwOS4yOTdDMzM3LjU1NCAxMDkuODk5IDMzOC43ODUgMTA5LjY3IDMzOS4xMTkgMTEwLjY0MVpNMTc2LjMyOCA5Ny40ODQ4QzE3Ni4zMjggOTcuMDQwMiAxNzYuMzI3IDk2LjU5MzUgMTc2LjMyNCA5Ni4xNDg5QzE3NS44OTkgOTYuMTYxMSAxNzUuNDc0IDk2LjE2OCAxNzUuMDQ5IDk2LjE4MDJDMTc1LjA0OSA5Ni42MjQ2IDE3NS4wNDggOTcuMDcxNiAxNzUuMDUxIDk3LjUxNjFDMTc1LjQ3NiA5Ny41MDM5IDE3NS45MDMgOTcuNDk3IDE3Ni4zMjggOTcuNDg0OFpNMjkyLjUxNCA5OS45MDY3QzI5Mi41MTQgOTkuMDE4NyAyOTIuNTA4IDk4LjEzMDcgMjkyLjUwOCA5Ny4yNDI3QzI5Mi4wODUgOTguMTQ0IDI5MS42NjIgOTkuMDQ0NCAyOTEuMjM2IDk5Ljk0NTdDMjkxLjY2MiA5OS45MzM2IDI5Mi4wODggOTkuOTE4OSAyOTIuNTE0IDk5LjkwNjdaTTI3OS4xMTEgMTAxLjYwMkMyNzkuMTExIDEwMC4yNjkgMjc5LjEwNCA5OC45MzQ4IDI3OS4xMDIgOTcuNjAyQzI3OC40NjQgOTcuNjIwMyAyNzcuODI2IDk3LjYzNjcgMjc3LjE4OCA5Ny42NDg5QzI3Ny4xOSA5OC45ODIyIDI3Ny4xOTIgMTAwLjMxNiAyNzcuMTk1IDEwMS42NDlDMjc3LjgzNCAxMDEuNjMxIDI3OC40NzMgMTAxLjYxNCAyNzkuMTExIDEwMS42MDJaTTI2MS4yNCAxMDIuMDc5QzI2MS4yNCAxMDAuNzQ1IDI2MS4yMzIgOTkuNDA0NiAyNjEuMjMyIDk4LjA3MDhDMjYwLjM4MSA5Ny43MzA3IDI1OS44NDEgMTAwLjc2MiAyNTkuOTY1IDEwMi4xMDJDMjYwLjM5IDEwMi4wOSAyNjAuODE1IDEwMi4wOTEgMjYxLjI0IDEwMi4wNzlaTTE4Mi43MjEgMTAxLjM0NEMxODQuMyAxMDEuMzc1IDE4NS43NzUgMTAyLjA0NyAxODYuNTQ1IDk4LjU5NDJDMTg1LjIwNCA5OS4wNjMyIDE4NC4xMSAxMDAuMzQ5IDE4Mi43MTcgMTAwLjAwOEMxODIuNzE3IDEwMC40NTQgMTgyLjcxNyAxMDAuODk5IDE4Mi43MTcgMTAxLjM0NEMxODIuNzE4IDEwMS4zNDQgMTgyLjcxOSAxMDEuMzQ0IDE4Mi43MjEgMTAxLjM0NFpNMjg4LjY4NiAxMDEuMzQ0QzI4OC42ODYgMTAwLjQ1NiAyODguNjgzIDk5LjU2ODEgMjg4LjY4IDk4LjY4MDFDMjg4LjQ2NyA5OC42ODAxIDI4OC4yNTQgOTguNjg5NyAyODguMDQxIDk4LjY5NThDMjg4LjA0MSA5OS41ODM3IDI4OC4wNDQgMTAwLjQ3MiAyODguMDQ3IDEwMS4zNkMyODguMjU5IDEwMS4zNiAyODguNDczIDEwMS4zNSAyODguNjg2IDEwMS4zNDRaTTI4MS42NjggMTAyLjg2OEMyODIuNzMxIDEwMy4yODIgMjgzLjc5OCAxMDMuNzA0IDI4NC44NjEgMTA0LjExOEMyODQuODU2IDEwMi4zNCAyODQuODUzIDEwMC41NiAyODQuODQ4IDk4Ljc4MTdDMjgzLjM2MiA5OS43MTI4IDI4MS44NzcgMTAwLjYzOCAyODAuMzg5IDEwMS41NjNDMjgwLjYwNyAxMDMuNzc5IDI4MC44MjQgMTA1Ljk5NyAyODEuMDQzIDEwOC4yMTlDMjgxLjI1IDEwNi40MzUgMjgxLjQ2MSAxMDQuNjUyIDI4MS42NjggMTAyLjg2OFpNMzc2LjExMyA5OS42NDExQzM3Ni4xMTUgMTAwLjQ4IDM3NS41MTIgMTAwLjQ5NyAzNzUuNTEyIDk5LjY1NjdDMzc1LjUwOSA5OC44MTY5IDM3Ni4xMTMgOTguODAwOCAzNzYuMTEzIDk5LjY0MTFaTTMyMS44NzMgOTkuMTA5OEMzMjIuMDg2IDk5LjEwMzcgMzIyLjI5OSA5OS4wOTQyIDMyMi41MTIgOTkuMDk0MkMzMjIuNTEyIDk5Ljk4MjIgMzIyLjUxOCAxMDAuODcgMzIyLjUxOCAxMDEuNzU4QzMyMi4zMDUgMTAxLjc2NCAzMjIuMDkyIDEwMS43NzQgMzIxLjg3OSAxMDEuNzc0QzMyMS44NzYgMTAwLjg4NiAzMjEuODczIDk5Ljk5NzggMzIxLjg3MyA5OS4xMDk4Wk0yNzIuNzQgOTkuNzczOUMyNzIuNzQ0IDEwMC42MTIgMjczLjM0NSAxMDAuNTk1IDI3My4zNDQgOTkuNzU4MkMyNzMuMzQ0IDk4LjkxNzggMjcyLjczNyA5OC45MzM0IDI3Mi43NCA5OS43NzM5Wk00MzAuMzY3IDk5LjgyMDdDNDMwLjM3IDEwMC42NiA0MjkuNzY1IDEwMC42NzQgNDI5Ljc2NCA5OS44MzY0QzQyOS43NjEgOTguOTk2MyA0MzAuMzY3IDk4Ljk4MTQgNDMwLjM2NyA5OS44MjA3Wk0zNjUuMjk3IDk5LjkyMjNDMzY1LjI5NyAxMDAuNzYzIDM2NS45MDMgMTAwLjc0NyAzNjUuOSA5OS45MDY3QzM2NS45IDk5LjA2NzcgMzY1LjI5NSA5OS4wODUgMzY1LjI5NyA5OS45MjIzWk0zMDguNDcxIDEwMC44MDVDMzA5LjAwMSAxMDAuMzQ4IDMwOS41MzIgOTkuODg2OCAzMTAuMDYyIDk5LjQzMDFDMzEwLjE3IDk5LjY0ODggMzEwLjI3NSA5OS44Njc3IDMxMC4zODMgMTAwLjA4NkMzMDkuNzQ4IDEwMC43NjggMzA5LjExIDEwMS40NTkgMzA4LjQ3NSAxMDIuMTQxQzMwOC40NzIgMTAxLjY5NyAzMDguNDcxIDEwMS4yNDkgMzA4LjQ3MSAxMDAuODA1Wk0zMDEuNDY1IDEwNi4zMzZDMzAzLjgxMSAxMDYuNzM4IDMwNS4zNzEgMTA0LjMxIDMwNS45MTYgOTkuNTQ3M0MzMDMuMjQ0IDk5LjE2MzcgMzAxLjYwNSAxMDAuMDY1IDMwMC4xODYgMTA1LjAzMkMzMDEuMDM2IDEwNC41NjMgMzAxLjg4NCAxMDQuMTAyIDMwMi43MzQgMTAzLjYzM0MzMDIuMzEyIDEwNC41MzQgMzAxLjg5IDEwNS40MzYgMzAxLjQ2NSAxMDYuMzM2Wk0yNTMuNTg0IDEwNC45NDZDMjUzLjU4MSAxMDMuMTY4IDI1My41NzUgMTAxLjM4OCAyNTMuNTcyIDk5LjYwOThDMjUzLjM1OSA5OS42MDk4IDI1My4xNDYgOTkuNjE5MyAyNTIuOTM0IDk5LjYyNTRDMjUyLjkzOSAxMDEuNDA0IDI1Mi45NDIgMTAzLjE4MyAyNTIuOTQ1IDEwNC45NjFDMjUzLjE1OCAxMDQuOTYxIDI1My4zNzEgMTA0Ljk1MiAyNTMuNTg0IDEwNC45NDZaTTM4OC44OTggOTkuOTg0OEMzODkuMzI0IDk5Ljk3MjYgMzg5Ljc1IDk5Ljk2NTcgMzkwLjE3NiA5OS45NTM1QzM5MC4xNzYgMTAwLjg0MyAzOTAuMTgyIDEwMS43MzYgMzkwLjE4MiAxMDIuNjI1QzM4OS43NTYgMTAyLjYzOCAzODkuMzMgMTAyLjY0NCAzODguOTA0IDEwMi42NTdDMzg4LjkwMSAxMDEuNzY3IDM4OC44OTggMTAwLjg3NCAzODguODk4IDk5Ljk4NDhaTTI3Ni41NTkgMTAxLjY2NEMyNzYuNTU5IDEwMS4yMjIgMjc2LjU1OCAxMDAuNzc5IDI3Ni41NTUgMTAwLjMzNkMyNzYuMTI5IDEwMC4zNDkgMjc1LjcwMyAxMDAuMzU1IDI3NS4yNzcgMTAwLjM2OEMyNzUuMjc3IDEwMC44MTIgMjc1LjI3OCAxMDEuMjU5IDI3NS4yODEgMTAxLjcwNEMyNzUuNzA3IDEwMS42OTEgMjc2LjEzMyAxMDEuNjc3IDI3Ni41NTkgMTAxLjY2NFpNNDMyLjI4NSAxMDEuMTI1QzQzMi4yODggMTAxLjk2NCA0MzEuNjgzIDEwMS45NzggNDMxLjY4MiAxMDEuMTQxQzQzMS42NzkgMTAwLjMwMSA0MzIuMjg1IDEwMC4yODUgNDMyLjI4NSAxMDEuMTI1Wk00MjAuMTgyIDEwMy4zMjhDNDIwLjE3OSAxMDIuNDQxIDQyMC4xNzQgMTAxLjU1MiA0MjAuMTc0IDEwMC42NjRDNDIwLjU5OSAxMDAuNjU4IDQyMS4wMjYgMTAwLjY0NyA0MjEuNDUxIDEwMC42NDFDNDIxLjEzNCAxMDEuNTM2IDQyMC44MTUgMTAyLjQzMyA0MjAuNSAxMDMuMzI4QzQyMC4zOTQgMTAzLjMyOCA0MjAuMjg4IDEwMy4zMjggNDIwLjE4MiAxMDMuMzI4Wk0yMDMuMTY0IDEwMS41MzlDMjAzLjE2NyAxMDIuMzc5IDIwMy43NjkgMTAyLjM2MiAyMDMuNzY4IDEwMS41MjRDMjAzLjc2OCAxMDAuNjgzIDIwMy4xNjEgMTAwLjY5OSAyMDMuMTY0IDEwMS41MzlaTTI1MS4wMjcgMTAzLjY4QzI1MS4wMjcgMTAyLjc5MSAyNTEuMDIxIDEwMS44OTcgMjUxLjAyMSAxMDEuMDA4QzI1MC4zODMgMTAxLjAyNiAyNDkuNzQ1IDEwMS4wMzcgMjQ5LjEwNyAxMDEuMDU1QzI0OS4xMDcgMTAxLjk0NCAyNDkuMTEzIDEwMi44MzggMjQ5LjExMyAxMDMuNzI3QzI0OS43NTEgMTAzLjcwOSAyNTAuMzg5IDEwMy42OTggMjUxLjAyNyAxMDMuNjhaTTIzNy42MjkgMTA0LjY4OEMyMzcuNDEzIDEwMy41NzkgMjM3LjE5NiAxMDIuNDc2IDIzNi45OCAxMDEuMzY4QzIzNi41NTUgMTAxLjM4IDIzNi4xMyAxMDEuMzkzIDIzNS43MDUgMTAxLjM5OUMyMzYuMjQxIDEwMi43MiAyMzYuNzc0IDEwNC4wMzggMjM3LjMxMSAxMDUuMzZDMjM3LjQxNSAxMDUuMTM0IDIzNy41MjEgMTA0LjkwNyAyMzcuNjI5IDEwNC42ODhaTTExMS44ODMgMTAyLjExOEMxMTEuODg2IDEwMi45NTggMTEyLjQ4OSAxMDIuOTQyIDExMi40ODYgMTAyLjEwMkMxMTIuNDg0IDEwMS4yNjUgMTExLjg4IDEwMS4yNzkgMTExLjg4MyAxMDIuMTE4Wk0zNzQuMjAxIDEwNS42OTZDMzczLjk4NiAxMDQuMzY5IDM3My43NyAxMDMuMDM4IDM3My41NTUgMTAxLjcxMUMzNzIuOTIgMTAyLjM5MyAzNzIuMjgxIDEwMy4wNzkgMzcxLjY0NiAxMDMuNzY2QzM3Mi4zODYgMTA1LjYzOSAzNzMuMDc0IDEwNS45NDUgMzc0LjIwMSAxMDUuNjk2Wk0zNjUuMzA3IDEwNC4zNzVDMzY1Ljg3MiAxMDUuNzI3IDM2Ny40NDIgMTAyLjY5NSAzNjcuMTg2IDEwMi4wODZDMzY2LjYyIDEwMC43MzggMzY1LjA1IDEwMy43NjcgMzY1LjMwNyAxMDQuMzc1Wk0yNjQuNDQxIDEwNy4zMjhDMjY0LjQzOCAxMDUuNTUxIDI2NC40MzMgMTAzLjc3IDI2NC40MyAxMDEuOTkzQzI2NC4wMDcgMTAyLjY3NSAyNjMuNTgxIDEwMy4zNTYgMjYzLjE1OCAxMDQuMDMyQzI2My4xNTggMTA0LjQ3NiAyNjMuMTU5IDEwNC45MjMgMjYzLjE2MiAxMDUuMzY4QzI2My40ODIgMTA2LjAyNCAyNjMuODAzIDEwNi42NzkgMjY0LjEyMyAxMDcuMzM2QzI2NC4yMjggMTA3LjMzNiAyNjQuMzM2IDEwNy4zMzUgMjY0LjQ0MSAxMDcuMzI4Wk0zOTkuMSAxMDMuMDYzQzM5OS4xMDIgMTAzLjkwMiAzOTguNDk5IDEwMy45MTkgMzk4LjQ5NiAxMDMuMDc5QzM5OC40OTQgMTAyLjI0IDM5OS4wOTcgMTAyLjIyMyAzOTkuMSAxMDMuMDYzWk0yOTguMjgxIDEwMy4wODZDMjk4LjI4MSAxMDMuOTI2IDI5OC44ODYgMTAzLjkwOSAyOTguODg1IDEwMy4wNzFDMjk4Ljg4NSAxMDIuMjMgMjk4LjI3OCAxMDIuMjQ2IDI5OC4yODEgMTAzLjA4NlpNMjQ0LjY1IDEwNi41MTZDMjQ0LjY1IDEwNS4xODMgMjQ0LjY0MyAxMDMuODQ5IDI0NC42NDEgMTAyLjUxNkMyNDQuMjE4IDEwMy4xOTEgMjQzLjc5MyAxMDMuODcyIDI0My4zNzEgMTA0LjU0N0MyNDMuNjkxIDEwNS4yMDUgMjQ0LjAxMiAxMDUuODY2IDI0NC4zMzIgMTA2LjUyNEMyNDQuNDM3IDEwNi41MjQgMjQ0LjU0NSAxMDYuNTIyIDI0NC42NSAxMDYuNTE2Wk0yODcuNDI4IDEwOC4wNDdDMjg3LjYzNyAxMDYuMjY0IDI4Ny44NDMgMTA0LjQ3OSAyODguMDUzIDEwMi42OTZDMjg3LjYyNyAxMDIuNzA4IDI4Ny4xOTkgMTAyLjcyMyAyODYuNzczIDEwMi43MzVDMjg2Ljc3NiAxMDQuNTEzIDI4Ni43ODMgMTA2LjI5MyAyODYuNzg5IDEwOC4wNzFDMjg3LjAwMiAxMDguMDcxIDI4Ny4yMTUgMTA4LjA1MyAyODcuNDI4IDEwOC4wNDdaTTIyOS4zMzYgMTA4LjIzNUMyMzAuMzMgMTA4LjU0NSAyMzIuMDA3IDEwNi41ODEgMjMyLjUyIDEwNC44MjFDMjMxLjc4MiAxMDIuOTQ1IDIzMS4wOTEgMTAyLjYzMiAyMjkuOTYzIDEwMi44NzVDMjI5Ljc1NiAxMDQuNjYgMjI5LjU0NiAxMDYuNDUgMjI5LjMzNiAxMDguMjM1Wk0yNzkuMTMxIDEwOS42MDJDMjc5LjMzOCAxMDcuMzczIDI3OS41NDUgMTA1LjE0MyAyNzkuNzUyIDEwMi45MTRDMjc4LjM4MiAxMDQuNDQzIDI3Ny42OTIgMTA2LjMxNCAyNzcuODU1IDEwOS42MzNDMjc4LjI4MSAxMDkuNjIxIDI3OC43MDYgMTA5LjYwOCAyNzkuMTMxIDEwOS42MDJaTTMyMy4xNDUgMTAzLjczNUMzMjMuMTQ3IDEwNC41NzUgMzIyLjU0NSAxMDQuNTk3IDMyMi41NDEgMTAzLjc1OEMzMjIuNTM4IDEwMi45MTkgMzIzLjE0MyAxMDIuODk4IDMyMy4xNDUgMTAzLjczNVpNNDI2LjU3NCAxMDcuMjE5QzQyNi41NzQgMTA1Ljg4NiA0MjYuNTY1IDEwNC41NTIgNDI2LjU2MiAxMDMuMjE5QzQyNi4zNSAxMDMuMjE5IDQyNi4xMzcgMTAzLjIyOSA0MjUuOTI0IDEwMy4yMzVDNDI1LjkyNyAxMDQuNTY4IDQyNS45MyAxMDUuOTAyIDQyNS45MzYgMTA3LjIzNUM0MjYuMTQ4IDEwNy4yMzUgNDI2LjM2MSAxMDcuMjI1IDQyNi41NzQgMTA3LjIxOVpNODUuNzE0OCAxMDMuODk5Qzg1LjcxNiAxMDQuNzM3IDg2LjMyMTMgMTA0LjcyMyA4Ni4zMTg0IDEwMy44ODNDODYuMzE1IDEwMy4wNDQgODUuNzExOSAxMDMuMDU5IDg1LjcxNDggMTAzLjg5OVpNMzE0LjUzOSAxMDkuOTIyQzMxNS41MTUgMTExLjQyIDMxNS43NjcgMTA5LjgzNyAzMTYuNzkzIDEwOS45MjJDMzE2Ljc5NCAxMDkuOTIyIDMxNi43OTYgMTA5LjkyMiAzMTYuNzk3IDEwOS45MjJDMzE1LjY4OSAxMDYuMzUzIDMxMy45MTQgMTA4LjQ1MiAzMTQuMjIzIDEwMy4zMTNDMzEzLjgwMyAxMDQuNDM5IDMxMy4zNzUgMTA1LjU0MyAzMTIuOTYxIDEwNi42ODhDMzEzLjQ1NiAxMDcuNTg5IDMxNC4wNTYgMTA5LjE3OSAzMTQuNTM5IDEwOS45MjJaTTI1OC4wNTkgMTA2LjE2NEMyNTguMDU5IDEwNS4yNzUgMjU4LjA1MyAxMDQuMzgyIDI1OC4wNTMgMTAzLjQ5M0MyNTcuODQgMTAzLjQ5MyAyNTcuNjI3IDEwMy41MSAyNTcuNDE0IDEwMy41MTZDMjU3LjQxNCAxMDQuNDA0IDI1Ny40MTcgMTA1LjI5MiAyNTcuNDIgMTA2LjE4QzI1Ny42MzMgMTA2LjE4IDI1Ny44NDYgMTA2LjE3IDI1OC4wNTkgMTA2LjE2NFpNMzU2LjM2MSAxMDYuMTY0QzM1Ni4zNjEgMTA1LjI3NiAzNTYuMzU1IDEwNC4zODggMzU2LjM1NSAxMDMuNUMzNTUuOTMgMTAzLjUxMyAzNTUuNTA1IDEwMy41MTkgMzU1LjA4IDEwMy41MzJDMzU1LjQgMTA0LjQxMyAzNTUuNzIzIDEwNS4yOTEgMzU2LjA0MyAxMDYuMTcyQzM1Ni4xNDggMTA2LjE3MiAzNTYuMjU2IDEwNi4xNyAzNTYuMzYxIDEwNi4xNjRaTTI0Ny4yMDMgMTA1LjExOEMyNDcuMjAzIDEwNC42NzMgMjQ3LjIwNCAxMDQuMjI2IDI0Ny4yMDEgMTAzLjc4MkMyNDYuNTYzIDEwMy44IDI0NS45MjMgMTAzLjgxIDI0NS4yODUgMTAzLjgyOEMyNDUuMjg1IDEwNC4yNzMgMjQ1LjI4NiAxMDQuNzIgMjQ1LjI4OSAxMDUuMTY0QzI0NS45MjcgMTA1LjE0NiAyNDYuNTY1IDEwNS4xMzYgMjQ3LjIwMyAxMDUuMTE4Wk0xODkuNzU0IDEwNi41MjRDMTg4LjY4NyAxMDUuNjU5IDE4Ny42MjMgMTA0Ljc5NSAxODYuNTU3IDEwMy45M0MxODYuNTU3IDEwNS4yNjMgMTg2LjU2MiAxMDYuNTk3IDE4Ni41NjQgMTA3LjkzQzE4Ny42MjggMTA3LjQ2MSAxODguNjkgMTA2Ljk5MyAxODkuNzU0IDEwNi41MjRaTTE4NC4wMTIgMTA3Ljk4NUMxODQuMDEyIDEwNi42NTIgMTg0LjAwNSAxMDUuMzE3IDE4NC4wMDIgMTAzLjk4NUMxODMuMDgxIDEwMy43NjYgMTgyLjY2OCAxMDQuNjQ5IDE4Mi4wOTQgMTA2LjAzMkMxODIuNjc2IDEwNy4zODkgMTgzLjA5NCAxMDguMjQ2IDE4NC4wMTIgMTA3Ljk4NVpNMjQwLjE5NSAxMDQuNjI1QzI0MC4xOTUgMTA1LjQ2NiAyNDAuODAxIDEwNS40NDkgMjQwLjc5OSAxMDQuNjFDMjQwLjc5OSAxMDMuNzcgMjQwLjE5MyAxMDMuNzg3IDI0MC4xOTUgMTA0LjYyNVpNMjM1LjA3OCAxMDYuNzVDMjM0LjY1IDEwNS44NzMgMjM0LjIyMyAxMDUuMDAxIDIzMy43OTUgMTA0LjExOEMyMzMuNzk1IDEwNS4wMDYgMjMzLjc5OCAxMDUuODk0IDIzMy44MDEgMTA2Ljc4MkMyMzQuMjI2IDEwNi43NjkgMjM0LjY1MyAxMDYuNzU2IDIzNS4wNzggMTA2Ljc1Wk0zNzkuMzQgMTA2LjIyN0MzNzkuMDIgMTA1LjU3IDM3OC42OTkgMTA0LjkxNSAzNzguMzc5IDEwNC4yNThDMzc4LjI3NCAxMDQuNDgzIDM3OC4xNjggMTA0LjcwMyAzNzguMDYxIDEwNC45MjJDMzc4LjM4MSAxMDUuNTggMzc4LjcwMyAxMDYuMjQxIDM3OS4wMjMgMTA2Ljg5OUMzNzkuMTI4IDEwNi42NzQgMzc5LjIzMiAxMDYuNDQ2IDM3OS4zNCAxMDYuMjI3Wk0xNjAuMzkxIDEwNy4xNzJDMTYwLjM5MSAxMDYuMjg0IDE2MC4zODggMTA1LjM5NiAxNjAuMzg1IDEwNC41MDhDMTU5Ljk2MiAxMDUuNDAzIDE1OS41MzYgMTA2LjMgMTU5LjExMyAxMDcuMTk2QzE1OS41MzkgMTA3LjE5IDE1OS45NjUgMTA3LjE3OCAxNjAuMzkxIDEwNy4xNzJaTTI2OS41NTMgMTA4LjUyNEMyNzIuMTQ3IDEwOC41OTcgMjcwLjI1MyAxMDQuNDU3IDI2OS41NDUgMTA0LjUyNEMyNjkuNTQ4IDEwNS44NTcgMjY5LjU1IDEwNy4xOSAyNjkuNTUzIDEwOC41MjRaTTQyNC42NzIgMTA1LjI1OEM0MjQuNjc0IDEwNi4wOTUgNDI1LjI3NiAxMDYuMDgyIDQyNS4yNzMgMTA1LjI0M0M0MjUuMjczIDEwNC40MDIgNDI0LjY2OSAxMDQuNDE4IDQyNC42NzIgMTA1LjI1OFpNMzExLjY5MSAxMDUuMzkxQzMxMS42OTUgMTA2LjIyOSAzMTIuMjk4IDEwNi4yMDcgMzEyLjI5NSAxMDUuMzY4QzMxMi4yOTQgMTA0LjUzIDMxMS42ODggMTA0LjU1MSAzMTEuNjkxIDEwNS4zOTFaTTI1MS42ODkgMTA1LjY2NEMyNTEuNjkgMTA2LjUwMyAyNTIuMjk2IDEwNi40ODEgMjUyLjI5MyAxMDUuNjQxQzI1Mi4yOTEgMTA0LjgwNCAyNTEuNjg3IDEwNC44MjUgMjUxLjY4OSAxMDUuNjY0Wk0zNDIuOTczIDEwNS44NkMzNDIuOTc2IDEwNi43IDM0My41NzkgMTA2LjY4NSAzNDMuNTc2IDEwNS44NDRDMzQzLjU3MyAxMDUuMDA2IDM0Mi45NzIgMTA1LjAyMyAzNDIuOTczIDEwNS44NlpNMjM4LjI4MyAxMDYuMDA4QzIzOC4yODYgMTA2Ljg0OCAyMzguODg5IDEwNi44MzggMjM4Ljg4NyAxMDUuOTkzQzIzOC44ODcgMTA1LjE1MyAyMzguMjgxIDEwNS4xNjkgMjM4LjI4MyAxMDYuMDA4Wk0xNzkuNTQzIDEwOC4wODZDMTc5LjU0MyAxMDcuMTk4IDE3OS41NCAxMDYuMzEgMTc5LjUzNyAxMDUuNDIyQzE3OS4zMjQgMTA1LjQyMiAxNzkuMTExIDEwNS40MyAxNzguODk4IDEwNS40M0MxNzguODk4IDEwNi4zMTkgMTc4LjkwMSAxMDcuMjEzIDE3OC45MDQgMTA4LjEwMkMxNzkuMTE3IDEwOC4xMDIgMTc5LjMzIDEwOC4wODYgMTc5LjU0MyAxMDguMDg2Wk0xNzcuMDA0IDEwNi4xNDFDMTc3LjAwNCAxMDYuOTgxIDE3Ny42MSAxMDYuOTcyIDE3Ny42MDcgMTA2LjEzM0MxNzcuNjA1IDEwNS4yOTQgMTc3LjAwMiAxMDUuMzAzIDE3Ny4wMDQgMTA2LjE0MVpNNDMxLjM2MyAxMTEuMTFDNDMyLjM0NiAxMTAuNzAyIDQzMy4yOTMgMTEwLjIzIDQzNC4yMjkgMTA5Ljc0MkM0MzMuODY0IDEwNy41MiA0MzEuNDg1IDEwNC40NzQgNDMwLjQ4OCAxMDUuOTg1QzQyOS43MzQgMTA3LjEyNCA0MzAuODA3IDExMC41NzQgNDMxLjM2MyAxMTEuMTFaTTM2Ni41NzQgMTA3LjIyN0MzNjYuNTc0IDEwNi43ODMgMzY2LjU3MyAxMDYuMzM1IDM2Ni41NyAxMDUuODkxQzM2Ni4xNDUgMTA1LjkwMyAzNjUuNzIgMTA1LjkxOCAzNjUuMjk1IDEwNS45M0MzNjUuMjk1IDEwNi4zNzUgMzY1LjI5NCAxMDYuODIxIDM2NS4yOTcgMTA3LjI2NkMzNjUuNzIyIDEwNy4yNTQgMzY2LjE0OSAxMDcuMjM5IDM2Ni41NzQgMTA3LjIyN1pNMjEyLjczOCAxMDguNjQxQzIxMi43MzggMTA3Ljc1MyAyMTIuNzM1IDEwNi44NjUgMjEyLjczMiAxMDUuOTc3QzIxMi4zMDcgMTA1Ljk4OSAyMTEuODgyIDEwNS45ODggMjExLjQ1NyAxMDZDMjExLjc3OCAxMDYuODgzIDIxMi4wOTggMTA3Ljc3MiAyMTIuNDIyIDEwOC42NDlDMjEyLjUyNiAxMDguNjQ5IDIxMi42MzQgMTA4LjY0NyAyMTIuNzM4IDEwOC42NDFaTTQwNy40MzQgMTA4Ljg5OUM0MDcuNDM0IDEwOC4wMSA0MDcuNDI4IDEwNy4xMTYgNDA3LjQyOCAxMDYuMjI3QzQwNy4yMTUgMTA2LjIyNyA0MDcuMDAyIDEwNi4yMzYgNDA2Ljc4OSAxMDYuMjQzQzQwNi43ODkgMTA3LjEzMSA0MDYuNzkyIDEwOC4wMTkgNDA2Ljc5NSAxMDguOTA3QzQwNy4wMDggMTA4LjkwNyA0MDcuMjIxIDEwOC44OTkgNDA3LjQzNCAxMDguODk5Wk0yOTkuNTcgMTA3LjA1NUMyOTkuNTc1IDEwNy44OTIgMzAwLjE3NyAxMDcuODcxIDMwMC4xNzQgMTA3LjAzMkMzMDAuMTczIDEwNi4xOTIgMjk5LjU2NyAxMDYuMjE1IDI5OS41NyAxMDcuMDU1Wk0yOTguMjkzIDEwNy4wODZDMjk4LjI5MyAxMDcuOTI2IDI5OC44OTkgMTA3LjkxIDI5OC44OTYgMTA3LjA3MUMyOTguODk2IDEwNi4yMzEgMjk4LjI5MSAxMDYuMjQ3IDI5OC4yOTMgMTA3LjA4NlpNMjQwLjE4OSAxMDkuMjg5QzI0MC4xODkgMTA4LjQwMSAyNDAuMTg0IDEwNy41MTMgMjQwLjE4NCAxMDYuNjI1QzIzOS45NzEgMTA2LjYyNSAyMzkuNzU5IDEwNi42MzUgMjM5LjU0NyAxMDYuNjQxQzIzOS41NDcgMTA3LjUzIDIzOS41NSAxMDguNDI0IDIzOS41NTMgMTA5LjMxM0MyMzkuNzY1IDEwOS4zMTMgMjM5Ljk3NyAxMDkuMjk1IDI0MC4xODkgMTA5LjI4OVpNMzY5LjEzMyAxMDguNDg1QzM2OS4xMzMgMTA4LjA0MiAzNjkuMTM0IDEwNy41OTkgMzY5LjEzMSAxMDcuMTU3QzM2OC43MDUgMTA3LjE2OSAzNjguMjc5IDEwNy4xNzYgMzY3Ljg1NCAxMDcuMTg4QzM2Ny44NTQgMTA3LjYzMiAzNjcuODU1IDEwOC4wOCAzNjcuODU3IDEwOC41MjRDMzY4LjI4MyAxMDguNTEyIDM2OC43MDggMTA4LjQ5NyAzNjkuMTMzIDEwOC40ODVaTTI2MC42MTcgMTA4Ljc2NkMyNjAuNjE3IDEwOC4zMjIgMjYwLjYxNiAxMDcuODc0IDI2MC42MTMgMTA3LjQzQzI2MC4xODggMTA3LjQ0MiAyNTkuNzYzIDEwNy40NTcgMjU5LjMzOCAxMDcuNDY5QzI1OS4zMzggMTA3LjkxMiAyNTkuMzM3IDEwOC4zNTQgMjU5LjM0IDEwOC43OTdDMjU5Ljc2NSAxMDguNzg1IDI2MC4xOTIgMTA4Ljc3OCAyNjAuNjE3IDEwOC43NjZaTTQwOS4zNDYgMTA4Ljg0NEM0MDkuMzQ2IDEwOC40MDEgNDA5LjM0MiAxMDcuOTU5IDQwOS4zNDIgMTA3LjUxNkM0MDguOTE3IDEwNy41MjggNDA4LjQ5MiAxMDcuNTM1IDQwOC4wNjYgMTA3LjU0N0M0MDguMDY2IDEwNy45OSA0MDguMDY1IDEwOC40MzMgNDA4LjA2OCAxMDguODc1QzQwOC40OTQgMTA4Ljg2MyA0MDguOTIgMTA4Ljg1NiA0MDkuMzQ2IDEwOC44NDRaTTE3NS4wOCAxMTAuODZDMTc1LjA4IDEwOS45NyAxNzUuMDc3IDEwOS4wNzcgMTc1LjA3NCAxMDguMTg4QzE3NC44NjIgMTA4LjE4OCAxNzQuNjQ4IDEwOC4yMDMgMTc0LjQzNiAxMDguMjAzQzE3NC40MzYgMTA5LjA5MSAxNzQuNDM5IDEwOS45NzkgMTc0LjQ0MSAxMTAuODY3QzE3NC42NTQgMTEwLjg2NyAxNzQuODY3IDExMC44NiAxNzUuMDggMTEwLjg2Wk0zNzAuNDE2IDExMS4xMjVDMzcwLjQxNiAxMTAuMjM3IDM3MC40MSAxMDkuMzQ5IDM3MC40MSAxMDguNDYxQzM3MC4xOTcgMTA4LjQ2MSAzNjkuOTg0IDEwOC40NzEgMzY5Ljc3MSAxMDguNDc3QzM2OS43NzEgMTA5LjM2NSAzNjkuNzc3IDExMC4yNTMgMzY5Ljc3NyAxMTEuMTQxQzM2OS45OSAxMTEuMTQxIDM3MC4yMDMgMTExLjEzMSAzNzAuNDE2IDExMS4xMjVaTTQyMi4xMjkgMTA5LjI5N0M0MjIuMTI5IDExMC4xMzcgNDIyLjczNCAxMTAuMTI3IDQyMi43MzIgMTA5LjI4OUM0MjIuNzMyIDEwOC40NDkgNDIyLjEyNyAxMDguNDU4IDQyMi4xMjkgMTA5LjI5N1pNMjk3LjY0NiAxMTAuNDM4QzI5Ny4wMDggMTEwLjAxMSAyOTYuMzY3IDEwOS41ODEgMjk1LjcyOSAxMDkuMTQ5QzI5NS43MjkgMTEwLjAzOCAyOTUuNzMxIDExMC45MzEgMjk1LjczNCAxMTEuODIxQzI5Ni4zNzMgMTEyLjI0NyAyOTcuMDE0IDExMi42NjkgMjk3LjY1MiAxMTMuMTAyQzI5Ny42NTIgMTEyLjIxNCAyOTcuNjQ5IDExMS4zMjYgMjk3LjY0NiAxMTAuNDM4Wk0xOTEuMDM1IDEwOS4xNTdDMTkwLjYxIDEwOS4xNjkgMTkwLjE4NSAxMDkuMTc2IDE4OS43NiAxMDkuMTg4QzE5MC4wOCAxMTAuMDcxIDE5MC40MDQgMTEwLjk1MiAxOTAuNzI1IDExMS44MjhDMTkwLjgyOSAxMTEuODI4IDE5MC45MzcgMTExLjgzNCAxOTEuMDQxIDExMS44MjhDMTkxLjA0MSAxMTAuOTM5IDE5MS4wMzUgMTEwLjA0NiAxOTEuMDM1IDEwOS4xNTdaTTI4Ny40MzQgMTEwLjcxOUMyODcuNDM0IDExMC4yNzQgMjg3LjQzMyAxMDkuODI4IDI4Ny40MyAxMDkuMzgzQzI4Ny4wMDQgMTA5LjM5NSAyODYuNTc4IDEwOS40MSAyODYuMTUyIDEwOS40MjJDMjg2LjE1MiAxMDkuODY1IDI4Ni4xNTMgMTEwLjMwOCAyODYuMTU2IDExMC43NUMyODYuNTgyIDExMC43MzggMjg3LjAwOCAxMTAuNzMxIDI4Ny40MzQgMTEwLjcxOVpNMzE4LjcxOSAxMTMuODZDMzIwLjIzNyAxMTQuMDc5IDMyMS4yMzggMTEzLjIzIDMyMS4yNjIgMTA5Ljc4OUMzMTkuNzQzIDEwOS41NyAzMTguNzQyIDExMC40MTkgMzE4LjcxOSAxMTMuODZaTTM2NS4zMTQgMTEyLjYwMkMzNjUuMzE0IDExMS43MTMgMzY1LjMwOSAxMTAuODE5IDM2NS4zMDkgMTA5LjkzQzM2NC44ODYgMTEwLjgzMSAzNjQuNDYzIDExMS43MjQgMzY0LjA0MSAxMTIuNjI1QzM2NC40NjUgMTEyLjYxMyAzNjQuODkgMTEyLjYwOCAzNjUuMzE0IDExMi42MDJaTTI2NS43MzIgMTEyLjYzM0MyNjUuNzMyIDExMS43NDUgMjY1LjcyOSAxMTAuODU3IDI2NS43MjcgMTA5Ljk2OUMyNjUuMzAxIDEwOS45ODEgMjY0Ljg3NSAxMDkuOTg4IDI2NC40NDkgMTEwQzI2NC43NzMgMTEwLjg3NyAyNjUuMDkxIDExMS43NTggMjY1LjQxNCAxMTIuNjQxQzI2NS41MTkgMTEyLjY0MSAyNjUuNjI3IDExMi42MzkgMjY1LjczMiAxMTIuNjMzWk0yMDUuMDg2IDExMS41QzIwNS4wODYgMTExLjA1NiAyMDUuMDg1IDExMC42MDkgMjA1LjA4MiAxMTAuMTY0QzIwNC42NTcgMTEwLjE3NyAyMDQuMjMgMTEwLjE4OSAyMDMuODA1IDExMC4xOTZDMjAzLjgwNSAxMTAuNjQgMjAzLjgwNiAxMTEuMDg3IDIwMy44MDkgMTExLjUzMUMyMDQuMjM0IDExMS41MTkgMjA0LjY2IDExMS41MDYgMjA1LjA4NiAxMTEuNVpNMzA1Ljk2MSAxMTAuODgzQzMwNS45NjQgMTExLjcyMSAzMDYuNTY2IDExMS43MDQgMzA2LjU2NCAxMTAuODY3QzMwNi41NjQgMTEwLjAyNyAzMDUuOTU4IDExMC4wNDMgMzA1Ljk2MSAxMTAuODgzWk0zODYuMzgxIDExMy4zODNDMzg2LjM4MSAxMTIuNDk1IDM4Ni4zNzUgMTExLjYwNyAzODYuMzc1IDExMC43MTlDMzg1LjczNyAxMTAuNDc2IDM4NC4yODkgMTExLjY1NCAzODQuNDY3IDExMy40M0MzODUuMTA0IDExMy40MTIgMzg1Ljc0MyAxMTMuNDAxIDM4Ni4zODEgMTEzLjM4M1pNMjMzLjgxMiAxMTIuMTE3QzIzMy44MTIgMTExLjY3MyAyMzMuODEzIDExMS4yMjYgMjMzLjgxMSAxMTAuNzgyQzIzMy4zODUgMTEwLjc5NCAyMzIuOTU5IDExMC44MDEgMjMyLjUzMyAxMTAuODEzQzIzMi41MzMgMTExLjI1NyAyMzIuNTM0IDExMS43MDQgMjMyLjUzNyAxMTIuMTQ5QzIzMi45NjIgMTEyLjEzNyAyMzMuMzg3IDExMi4xMyAyMzMuODEyIDExMi4xMTdaTTIyMS42OTMgMTE1LjA4NkMyMjEuNjkzIDExNC4xOTcgMjIxLjY5IDExMy4zMDMgMjIxLjY4OCAxMTIuNDE0QzIyMC44NzQgMTEyLjY4OCAyMjAuNDg3IDExMS42NzUgMjE5Ljc3IDExMS4xMzNDMjE5Ljc3MiAxMTIuNDY2IDIxOS43NzYgMTEzLjggMjE5Ljc3OSAxMTUuMTMzQzIyMC40MTcgMTE1LjExNSAyMjEuMDU1IDExNS4xMDQgMjIxLjY5MyAxMTUuMDg2Wk0yNjguMjg1IDExMS44OTFDMjY4LjE3OCAxMTEuNjcyIDI2OC4wNzIgMTExLjQ1MyAyNjcuOTY1IDExMS4yMzVDMjY3LjY0NyAxMTEuOTExIDI2Ny4zMjkgMTEyLjU5IDI2Ny4wMTIgMTEzLjI2NkMyNjcuMTE5IDExMy40ODUgMjY3LjIyNCAxMTMuNzAzIDI2Ny4zMzIgMTEzLjkyMkMyNjcuNjUgMTEzLjI0NiAyNjcuOTY3IDExMi41NjcgMjY4LjI4NSAxMTEuODkxWk00MjQuNjkxIDExMS45MjJDNDI0LjY5MSAxMTIuNzYyIDQyNS4yOTYgMTEyLjc1MiA0MjUuMjk1IDExMS45MTRDNDI1LjI5NSAxMTEuMDc0IDQyNC42ODkgMTExLjA4MyA0MjQuNjkxIDExMS45MjJaTTE0Mi41MzEgMTE0LjIxMUMxNDIuNTMxIDExMy4zMjMgMTQyLjUyOCAxMTIuNDM1IDE0Mi41MjUgMTExLjU0N0MxNDIuMSAxMTEuNTUzIDE0MS42NzUgMTExLjU2NCAxNDEuMjUgMTExLjU3MUMxNDEuNTcgMTEyLjQ1MiAxNDEuODkgMTEzLjMzNyAxNDIuMjEzIDExNC4yMTlDMTQyLjMxOCAxMTQuMjE5IDE0Mi40MjYgMTE0LjIxNyAxNDIuNTMxIDExNC4yMTFaTTM0Ni44MzIgMTEzLjE1NkMzNDcuMjQ5IDExMy4xMjYgMzQ3LjY2MyAxMTMuMDg1IDM0OC4wOCAxMTMuMDU1QzM0OC4wOCAxMTIuNjExIDM0OC4wNzkgMTEyLjE2MyAzNDguMDc2IDExMS43MTlDMzQ3LjQzOCAxMTEuNzM3IDM0Ni44MDIgMTExLjc2MiAzNDYuMTY0IDExMS43NzRDMzQ2LjA1OSAxMTMuNTUgMzQ1Ljk1NyAxMTUuMzMzIDM0NS44NTUgMTE3LjExQzM0Ni4xODIgMTE1Ljc4OSAzNDYuNTA5IDExNC40NzcgMzQ2LjgzMiAxMTMuMTU2Wk0xOTUuNTMxIDExMi4zOTFDMTk1LjUzMSAxMTMuMjMxIDE5Ni4xMzcgMTEzLjIyMSAxOTYuMTM1IDExMi4zNzVDMTk2LjEzNSAxMTEuNTM1IDE5NS41MjkgMTExLjU1MiAxOTUuNTMxIDExMi4zOTFaTTM5NS45NjkgMTEyLjQ4NUMzOTUuOTY5IDExMy4zMjMgMzk2LjU3NCAxMTMuMzA2IDM5Ni41NzIgMTEyLjQ2OUMzOTYuNTcyIDExMS42MjkgMzk1Ljk2NiAxMTEuNjQ0IDM5NS45NjkgMTEyLjQ4NVpNMzkzLjM5OCAxMTIuNTQ3QzM5My4yOTEgMTEyLjMyOCAzOTMuMTg2IDExMi4xMSAzOTMuMDc4IDExMS44OTFDMzkyLjc2IDExMi41NjcgMzkyLjQ0MiAxMTMuMjM4IDM5Mi4xMjcgMTEzLjkxNEMzOTIuMjMyIDExNC4xMzQgMzkyLjM0MSAxMTQuMzUxIDM5Mi40NDkgMTE0LjU3MUMzOTIuNzY3IDExMy44OTUgMzkzLjA4NCAxMTMuMjE2IDM5My4zOTggMTEyLjU0N1pNMjg2LjE3IDExNi4wODZDMjg3LjEyIDExNS4xMjQgMjg3LjU3NiAxMTMuMjc3IDI4OC43MTkgMTEzLjM0NEMyODguNzE5IDExMi44OTkgMjg4LjcxOCAxMTIuNDUzIDI4OC43MTUgMTEyLjAwOEMyODguNzE0IDExMi4wMTEgMjg4LjcxNCAxMTIuMDEzIDI4OC43MTMgMTEyLjAxNkMyODcuODYyIDExMi4wNCAyODcuMDA5IDExMi4wNTQgMjg2LjE1OCAxMTIuMDc4QzI4Ni4xNjEgMTEzLjQxMiAyODYuMTY0IDExNC43NTIgMjg2LjE3IDExNi4wODZaTTIzOC4yODcgMTE0LjY4QzIzOC4yODcgMTEzLjc5MSAyMzguMjgxIDExMi44OTcgMjM4LjI4MSAxMTIuMDA4QzIzNy44NTkgMTEyLjkwOSAyMzcuNDM1IDExMy44MDIgMjM3LjAxIDExNC43MDNDMjM3LjQzNSAxMTQuNjkxIDIzNy44NjIgMTE0LjY5MiAyMzguMjg3IDExNC42OFpNNDIwLjg2NSAxMTMuMzIxQzQyMC44NjUgMTE0LjE2MSA0MjEuNDY5IDExNC4xNTMgNDIxLjQ2NyAxMTMuMzEzQzQyMS40NjQgMTEyLjQ3MyA0MjAuODY0IDExMi40ODQgNDIwLjg2NSAxMTMuMzIxWk0yNTYuMTc4IDExMy41NDdDMjU2LjE4MSAxMTQuMzg4IDI1Ni43ODQgMTE0LjM3MiAyNTYuNzgxIDExMy41MzFDMjU2Ljc4MSAxMTIuNjkyIDI1Ni4xNzYgMTEyLjcwOSAyNTYuMTc4IDExMy41NDdaTTE4OS4xNSAxMTMuODc1QzE4OS4xNSAxMTQuNzE2IDE4OS43NTcgMTE0LjcwNiAxODkuNzU0IDExMy44NkMxODkuNzU0IDExMy4wMjEgMTg5LjE0OSAxMTMuMDMyIDE4OS4xNSAxMTMuODc1Wk0yNDIuMTE5IDExNS45MjJDMjQyLjExOSAxMTUuMDMzIDI0Mi4xMTYgMTE0LjEzOSAyNDIuMTEzIDExMy4yNUMyNDEuOTAxIDExMy4yNSAyNDEuNjg5IDExMy4yNiAyNDEuNDc3IDExMy4yNjZDMjQxLjQ3NyAxMTQuMTU1IDI0MS40OCAxMTUuMDQ4IDI0MS40ODIgMTE1LjkzOEMyNDEuNjk1IDExNS45MzggMjQxLjkwNyAxMTUuOTI4IDI0Mi4xMTkgMTE1LjkyMlpNMzcxLjA2NiAxMTUuMTFDMzcxLjA2NiAxMTQuNjY1IDM3MS4wNjUgMTE0LjIxOCAzNzEuMDYyIDExMy43NzRDMzcwLjYzNyAxMTMuNzg2IDM3MC4yMTIgMTEzLjgwMSAzNjkuNzg3IDExMy44MTNDMzY5Ljc4NyAxMTQuMjU3IDM2OS43ODYgMTE0LjcwNCAzNjkuNzg5IDExNS4xNDlDMzcwLjIxNSAxMTUuMTM2IDM3MC42NDEgMTE1LjEyMiAzNzEuMDY2IDExNS4xMVpNMjY1LjEgMTE0LjY0OUMyNjQuOTk1IDExNC40MjkgMjY0Ljg4NyAxMTQuMjA0IDI2NC43NzkgMTEzLjk4NUMyNjQuNDYyIDExNC42NjEgMjY0LjE0NCAxMTUuMzQgMjYzLjgyNiAxMTYuMDE2QzI2My45MzQgMTE2LjIzNSAyNjQuMDM5IDExNi40NTMgMjY0LjE0NiAxMTYuNjcyQzI2NC40NjQgMTE1Ljk5NiAyNjQuNzgyIDExNS4zMjQgMjY1LjEgMTE0LjY0OVpNMjYxLjI3OSAxMTguMDg2QzI2MS45OTkgMTE3LjQ4OSAyNjIuMzYxIDExNi40NDggMjYzLjE5MSAxMTYuNzAzQzI2Mi44NzEgMTE1LjgyMSAyNjIuNTQ3IDExNC45MzkgMjYyLjIyNyAxMTQuMDYzQzI2MS41NzcgMTE1LjI4NyAyNjEuMTYgMTE2LjE2MiAyNjEuMjc5IDExOC4wODZaTTM0NC4yNzMgMTE1LjE2NEMzNDQuMjc3IDExNi4wMDMgMzQ0Ljg3OCAxMTUuOTg2IDM0NC44NzcgMTE1LjE0OUMzNDQuODc0IDExNC4zMDggMzQ0LjI3MSAxMTQuMzI0IDM0NC4yNzMgMTE1LjE2NFpNMzM0LjA0OSAxMTcuNDQ1QzMzMy42MiAxMTYuNTY4IDMzMy4xOTEgMTE1LjY5IDMzMi43NjYgMTE0LjgxM0MzMzIuNzY2IDExNS43MDIgMzMyLjc2OSAxMTYuNTk1IDMzMi43NzEgMTE3LjQ4NUMzMzMuMTk3IDExNy40NzIgMzMzLjYyMyAxMTcuNDU4IDMzNC4wNDkgMTE3LjQ0NVpNMzc4LjEwNSAxMTUuNTk0QzM3OC4xMDUgMTE2LjQzNCAzNzguNzEyIDExNi40MTggMzc4LjcwOSAxMTUuNTc4QzM3OC43MDYgMTE0LjczOSAzNzguMTA0IDExNC43NTUgMzc4LjEwNSAxMTUuNTk0Wk0zMjYuNCAxMTUuNjU2QzMyNi40MDMgMTE2LjQ5NiAzMjcuMDA2IDExNi40NzkgMzI3LjAwNCAxMTUuNjQxQzMyNy4wMDQgMTE0LjggMzI2LjM5OCAxMTQuODE2IDMyNi40IDExNS42NTZaTTM2OC41MTYgMTE1Ljg0NEMzNjguNDA4IDExNS42MjUgMzY4LjMwMyAxMTUuNDA3IDM2OC4xOTUgMTE1LjE4OEMzNjcuODc4IDExNS44NjQgMzY3LjU2IDExNi41NDMgMzY3LjI0MiAxMTcuMjE5QzM2Ny4zNSAxMTcuNDM4IDM2Ny40NTUgMTE3LjY1NiAzNjcuNTYyIDExNy44NzVDMzY3Ljg4IDExNy4xOTkgMzY4LjE5OCAxMTYuNTIgMzY4LjUxNiAxMTUuODQ0Wk00MjYuNjE1IDExNS44OTFDNDI2LjYxNSAxMTYuNzMxIDQyNy4yMjEgMTE2LjcyMyA0MjcuMjE5IDExNS44ODNDNDI3LjIxOSAxMTUuMDQ0IDQyNi42MTQgMTE1LjA1NCA0MjYuNjE1IDExNS44OTFaTTI0NC42NzIgMTE1Ljg1MkMyNDQuMjQ4IDExNS44NjQgMjQzLjgyNCAxMTUuODc3IDI0My40IDExNS44ODNDMjQzLjQgMTE2Ljc3MSAyNDMuNDAzIDExNy42NTkgMjQzLjQwNiAxMTguNTQ3QzI0My41MTEgMTE4LjU0NyAyNDMuNjE4IDExOC41NTMgMjQzLjcyMyAxMTguNTQ3QzI0NC4wNCAxMTcuNjUzIDI0NC4zNTQgMTE2Ljc0NiAyNDQuNjcyIDExNS44NTJaTTIzOS41ODggMTE2LjY0OUMyMzkuNTkxIDExNy40ODkgMjQwLjE5MiAxMTcuNDcyIDI0MC4xODkgMTE2LjYzM0MyNDAuMTg5IDExNS43OTMgMjM5LjU4NSAxMTUuODA5IDIzOS41ODggMTE2LjY0OVpNNDQwLjAxNCAxMjAuMzQ0QzQzOS45NjQgMTE4LjgxIDQzOS42NjIgMTE3LjcyMSA0MzkuMzY1IDExNi4zNTJDNDM5Ljc5IDExNi4zNDYgNDQwLjIxNSAxMTYuMzM0IDQ0MC42NDEgMTE2LjMyOEM0NDAuNjMyIDExNi45NDMgNDQwLjYyNCAxMTcuNTY1IDQ0MC42MTUgMTE4LjE4QzQ0MS4wNTUgMTE4Ljg5MiA0NDEuNDkzIDExOS42IDQ0MS45MyAxMjAuMzEzQzQ0MS4yOTEgMTIwLjI5NCA0NDAuNjUyIDEyMC4zODYgNDQwLjAxNCAxMjAuMzQ0Wk00MzEuNzI1IDExNy4xNDFDNDMxLjcyNSAxMTcuOTgxIDQzMi4zMyAxMTcuOTcxIDQzMi4zMjggMTE3LjEzM0M0MzIuMzI4IDExNi4yOTMgNDMxLjcyMyAxMTYuMzAyIDQzMS43MjUgMTE3LjE0MVpNMzYyLjEzOSAxMTguMDE2QzM2Mi4xMzkgMTE3LjU3MSAzNjIuMTM1IDExNy4xMjQgMzYyLjEzNSAxMTYuNjhDMzYxLjcwOSAxMTYuNjkyIDM2MS4yODMgMTE2LjcwNyAzNjAuODU3IDExNi43MTlDMzYwLjg1NyAxMTcuMTYyIDM2MC44NTggMTE3LjYwNCAzNjAuODYxIDExOC4wNDdDMzYxLjI4NyAxMTguMDM1IDM2MS43MTMgMTE4LjAyOCAzNjIuMTM5IDExOC4wMTZaTTI5Ny42NjYgMTE5Ljc3NEMyOTcuNjY2IDExOC44ODYgMjk3LjY2MyAxMTcuOTk4IDI5Ny42NiAxMTcuMTFDMjk3LjQ0OCAxMTcuMTEgMjk3LjIzNCAxMTcuMTE5IDI5Ny4wMjEgMTE3LjEyNUMyOTcuMDI0IDExOC4wMTMgMjk3LjAyNCAxMTguOTAxIDI5Ny4wMjcgMTE5Ljc4OUMyOTcuMjQgMTE5Ljc4OSAyOTcuNDUzIDExOS43OCAyOTcuNjY2IDExOS43NzRaTTI4Ni44MyAxMTguMDdDMjg2LjgzNCAxMTguOTA5IDI4Ny40MzYgMTE4Ljg4NyAyODcuNDM0IDExOC4wNDdDMjg3LjQzMiAxMTcuMjEgMjg2LjgyNyAxMTcuMjMxIDI4Ni44MyAxMTguMDdaTTI2Ny4wNDEgMTE4LjYwMkMyNjcuMDQ1IDExOS40MzkgMjY3LjY0NyAxMTkuNDE4IDI2Ny42NDUgMTE4LjU3OEMyNjcuNjQ0IDExNy43NCAyNjcuMDM4IDExNy43NjIgMjY3LjA0MSAxMTguNjAyWk0zNTAuMDEyIDExOS42OEMzNTAuNDM3IDExOS42NjggMzUwLjg2NCAxMTkuNjUzIDM1MS4yODkgMTE5LjY0MUMzNTEuMjg5IDEyMC4wODUgMzUxLjI5MyAxMjAuNTMyIDM1MS4yOTMgMTIwLjk3N0MzNTAuODY4IDEyMC45ODkgMzUwLjQ0MSAxMjAuOTk2IDM1MC4wMTYgMTIxLjAwOEMzNTAuMDEzIDEyMC41NjUgMzUwLjAxMiAxMjAuMTIzIDM1MC4wMTIgMTE5LjY4Wk00MzUuNTY2IDEyMS4wNzhDNDM1LjU2NyAxMjEuOTE4IDQzNi4xNzMgMTIxLjkwMyA0MzYuMTcgMTIxLjA2M0M0MzYuMTY5IDEyMC4yMjUgNDM1LjU2MyAxMjAuMjM5IDQzNS41NjYgMTIxLjA3OFpNMzUxLjkzNCAxMjAuOTYxQzM1Mi41NzIgMTIwLjk0OSAzNTMuMjEgMTIwLjkzMiAzNTMuODQ4IDEyMC45MTRDMzUzLjg0OCAxMjEuMzU4IDM1My44NTIgMTIxLjgwNiAzNTMuODUyIDEyMi4yNUMzNTMuMjEzIDEyMi4yNjIgMzUyLjU3NCAxMjIuMjc5IDM1MS45MzYgMTIyLjI5N0MzNTEuOTMzIDEyMS44NTIgMzUxLjkzNCAxMjEuNDA2IDM1MS45MzQgMTIwLjk2MVpNNDMzLjY1NCAxMjIuNDQ1QzQzMy42NTQgMTIzLjI4NSA0MzQuMjYgMTIzLjI3NiA0MzQuMjU4IDEyMi40MzhDNDM0LjI1OCAxMjEuNTk4IDQzMy42NTMgMTIxLjYwNyA0MzMuNjU0IDEyMi40NDVaTTQzMS4xMDIgMTIyLjQ5MkM0MzEuMTAyIDEyMy4zMzEgNDMxLjcwOCAxMjMuMzE2IDQzMS43MDUgMTIyLjQ3N0M0MzEuNzA0IDEyMS42MzggNDMxLjA5OSAxMjEuNjUyIDQzMS4xMDIgMTIyLjQ5MlpNMjM3LjY1OCAxMjQuNjk1QzIzNy42NjEgMTI1LjUzNiAyMzcuMDU1IDEyNS41NTEgMjM3LjA1NSAxMjQuNzExQzIzNy4wNTMgMTIzLjg3MyAyMzcuNjU4IDEyMy44NTYgMjM3LjY1OCAxMjQuNjk1Wk0yMzkuNTkgMTI1LjMyQzIzOS44MDMgMTI1LjMxNCAyNDAuMDE2IDEyNS4zMTMgMjQwLjIyOSAxMjUuMzEzQzI0MC4yMzEgMTI2LjIwMSAyNDAuMjM0IDEyNy4wOTYgMjQwLjIzNCAxMjcuOTg0QzI0MC4wMjIgMTI3Ljk5NyAyMzkuODA4IDEyOCAyMzkuNTk2IDEyOEMyMzkuNTkzIDEyNy4xMDUgMjM5LjU5IDEyNi4yMSAyMzkuNTkgMTI1LjMyWiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K`];function Xs(e=Ys){let n=new ws;return Promise.all(e.map(e=>new Promise((r,i)=>{n.load(e,e=>{e.colorSpace=ke,e.wrapS=t,e.wrapT=t,e.minFilter=c,e.magFilter=o,e.generateMipmaps=!0,e.anisotropy=4,e.needsUpdate=!0,r(e)},void 0,i)})))}var Zs=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Qs=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],$s=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],ec=(e,t,n)=>Zs(e,$s(Qs(t,e),n));function tc(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function nc(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function rc(e,t,n=10,r=.02,i=0){let a=tc(Qs(t,e)),o=tc(nc(a,Math.abs(a[1])>.9?[1,0,0]:[0,1,0])),s=tc(nc(a,o)),c=[];for(let a=0;a<=n;a++){let l=a/n,u=Math.sin(l*Math.PI),d=Math.sin(l*6.3+i*1.7)*r*u,f=Math.cos(l*4.1+i*2.3)*r*.6*u,p=ec(e,t,l);p=Zs(p,$s(o,d)),p=Zs(p,$s(s,f)),c.push(p)}return c}var ic={yellow:`#D5B308`,red:`#C43041`,teal:`#006E83`},ac={seed:539,gridSize:6,heightPeak:1,heightVar:1,windowDensity:.15,gridDensity:.25,gridVar:.9,gridGaps:.6,gridRatio:.84,guidelineDensity:.32,partialBox:.8,footprintVar:1,wobble:0,guidelineLength:.59,lShapeRatio:.8};function oc(e){let t=e>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var sc=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],cc=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],lc=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n];function uc(e){let t=oc(Math.floor(e.seed)),n=(e=0,n=1)=>e+(n-e)*t(),r=e=>t()<e,i=[ic.teal,ic.red,ic.yellow],a=()=>i[Math.floor(t()*i.length)],o=()=>r(.5)?ic.red:ic.yellow,s=[],c=0,l=.003+e.wobble*.016,u=(e,t,n,r=0,i=1)=>s.push({points:e,style:{color:t,widthPx:n,brush:r,opacity:i}}),d=(e,t,n,r,i=0,a=1,o=6)=>u(rc(e,t,o,l,c++),n,r,i,a),f=(t,i,a,o,s=0)=>{if(!r(e.partialBox*.45))if(r(e.partialBox*.5)){let e=n(0,.35),r=n(.65,1);d(lc(t,i,e),lc(t,i,r),a,o,s,.95)}else d(t,i,a,o,s)},p=Math.max(2,Math.round(e.gridSize)),m=.48,h=(p-1)/2,g=Math.max(.8,p*.3),_=(e,t,i,a,s)=>{let c=r(.7)?o():ic.teal,l=n(.04,.2)*a,u=n(.45,.85)*a,f=n(.05,.25)*s,p=s*n(.7,.96),m=Math.max(3,Math.round((p-f)/.07));for(let a=0;a<=m;a++){if(!r(.9))continue;let o=f+(p-f)*a/m;d(sc(sc(e,cc(t,l)),cc(i,o)),sc(sc(e,cc(t,l+u*n(.7,1))),cc(i,o)),c,n(2,3.2),0,.95,2)}},v=(i,o,s,c,l)=>{let u=a(),f=Math.exp((t()*2-1)*e.gridVar*1.6),p=1;if(r(e.gridRatio)){let n=2**((t()*2-1)*4*e.gridRatio);p=Math.sqrt(n)}let m=Math.min(48,Math.max(1,Math.round(c/.18*f*p))),h=Math.min(48,Math.max(1,Math.round(l/.22*f/p))),g=e.gridGaps,_,v;if(r(Math.max(0,g-.5)*.4)){let e=2+Math.floor(t()*3),n=.38/2;_=[];for(let t=0;t<e;t++)_.push([(t+n)/e,(t+1-n)/e]);v=!0}else if(r(g)){let e=n(.2,.6),t=n(0,1-e);_=[[t,t+e]],v=!0}else _=[[0,1]],v=!1;let y=(e,t)=>sc(sc(i,cc(o,e)),cc(s,t));for(let[e,t]of _){let r=e*l,i=t*l,a=i-r;for(let e=1;e<m;e++){let t=c*e/m;d(y(t,r),y(t,i),u,n(2,3.2),0,.85)}let o=Math.max(1,Math.round(h*a/l)),s=+!v,f=v?o:o-1;for(let e=s;e<=f;e++){let t=r+a*e/o;d(y(0,t),y(c,t),u,n(2,3.2),0,.85)}}},y=[1,0,0],b=[0,0,1],x=[0,1,0],S=(t,n,i,o,s,c,l,u)=>{let p=n-t,m=o-i,h=c-s,g=2.8+l*2.2,S=()=>r(.62)?u:a();d([t,s,i],[t,c,i],S(),g,0,1,7),f([t,s,o],[t,c,o],S(),g),f([n,s,i],[n,c,i],S(),g),r(.4*(1-e.partialBox))&&f([n,s,o],[n,c,o],S(),g*.8),f([t,c,i],[t,c,o],S(),g),f([t,c,i],[n,c,i],S(),g),f([t,c,o],[n,c,o],S(),g*.8),f([n,c,i],[n,c,o],S(),g*.8),f([t,s,i],[t,s,o],S(),g*.8),f([t,s,i],[n,s,i],S(),g*.8),r(e.gridDensity)&&v([t,s,i],b,x,m,h),r(e.gridDensity)&&v([t,s,i],y,x,p,h);let C=1+Math.round(e.windowDensity*2);for(let n=0;n<C;n++)r(e.windowDensity)&&_([t,s,i],y,x,p,h),r(e.windowDensity)&&_([t,s,i],b,x,m,h)},C=(t,n,i,o,s,c,l,u,p,m,h)=>{let g=n-t,y=o-i,b=2.8+m*2.2,S=()=>r(.62)?h:a(),C=l===0||l===2,w=C?g:y,T=C?y:g,E=w*u,D=s*p,O=(e,r)=>l===0?[t+e,i+r]:l===2?[n-e,i+r]:l===1?[t+r,i+e]:[t+r,o-e],k=e=>c?s-e:e,A=(e,t,n)=>{let[r,i]=O(e,t);return[r,k(n),i]},j=[[0,0],[w,0],[w,D],[E,D],[E,s],[0,s]],M=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]];d(A(0,0,0),A(0,0,s),S(),b,0,1,7);for(let[e,t]of M)e===5&&t===0||f(A(j[e][0],0,j[e][1]),A(j[t][0],0,j[t][1]),S(),b),f(A(j[e][0],T,j[e][1]),A(j[t][0],T,j[t][1]),S(),b*.85);for(let e=0;e<6;e++)f(A(j[e][0],0,j[e][1]),A(j[e][0],T,j[e][1]),S(),b*.85);let N=C?[l===0?1:-1,0,0]:[0,0,l===1?1:-1],P=C?[0,0,1]:[1,0,0],[F,I]=O(0,0),ee=[F,0,I],[te,ne]=O(E,0),re=[te,c?s-D:0,ne];r(e.gridDensity)&&v(ee,N,x,E,s),r(e.gridDensity)&&v(ee,P,x,T,s),r(e.gridDensity)&&v(re,N,x,w-E,D);let ie=1+Math.round(e.windowDensity*2);for(let t=0;t<ie;t++)r(e.windowDensity)&&_(ee,N,x,E,s),r(e.windowDensity)&&_(ee,P,x,T,s),r(e.windowDensity)&&_(re,N,x,w-E,D)};for(let i=0;i<p;i++)for(let o=0;o<p;o++){let s=i-h,c=o-h,l=Math.exp(-(s*s+c*c)/(2*g*g));if(!r(.22+.78*l))continue;let u=m*.06,f=e.footprintVar*.5,p=()=>Math.max(.28,Math.min(1.3,.78+(t()*2-1)*f)),_=m*p(),v=m*p(),y=i*m+u+n(0,m*.06),b=o*m+u+n(0,m*.06),x=y+_,w=b+v,T=.4+e.heightPeak*4.6*l,E=1-e.heightVar*(1-l*.55)*.85,D=.8+T*(E+(1-E)*t()),O=a(),k=y,A=x,j=b,M=w;if(r(e.lShapeRatio)){let e=r(.5),t=Math.floor(n(0,4)),i=n(.4,.62);C(y,x,b,w,D,e,t,i,n(.28,.5),l,O);let a=(t===0||t===2?_:v)*i;t===0?A=y+a:t===2?k=x-a:t===1?M=b+a:j=w-a}else S(y,x,b,w,0,D,l,O);if(r(e.guidelineDensity)){let t=(.2+e.guidelineLength*2.5)*n(.4,1.1)*(.5+l);d([k,D,j],[k,D+t,j],O,2,0,.6,4)}if(r(e.guidelineDensity*.7)){let t=(.2+e.guidelineLength*2.2)*n(.4,1);d([A,D,j],[A+t,D,j],O,2,0,.5,4)}if(r(e.guidelineDensity*.7)){let t=(.2+e.guidelineLength*2.2)*n(.4,1);d([k,D,M],[k,D,M+t],O,2,0,.5,4)}if(l>.8&&r(.85)){let t=a(),r=(k+A)/2,i=(j+M)/2,o=n(1.1,2.3)*(.6+e.heightPeak);d([r,D,i],[r,D+o,i],t,3,0,.9,4);for(let e=0;e<4;e++){let n=D+o*(.4+e*.16),a=.05*(4-e)/4+.02;d([r-a,n,i],[r+a,n,i],t,2,1,.85,2)}}}return s}export{Js as BrushEngine,ac as DEFAULT_CITY,uc as cityScene,Xs as loadBrushTextures};