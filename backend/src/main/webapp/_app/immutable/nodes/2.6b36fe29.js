var mt=Object.defineProperty;var gt=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var st=(e,t,n)=>(gt(e,typeof t!="symbol"?t+"":t,n),n);import{s as J,n as V,r as pt,b as N,f as vt,h as O,o as _t}from"../chunks/scheduler.682ccc96.js";import{S as K,i as Q,g as y,s as z,h as P,j as E,x as W,c as I,f as k,k as p,a as A,y as c,z as U,A as F,B as G,m as L,n as X,o as Y,C as H,r as Z,u as $,D as bt,v as x,d as tt,t as et,w as nt,E as wt,F as kt}from"../chunks/index.fb1a2585.js";function rt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const yt=!0,Gt=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"}));class Pt{constructor(t){st(this,"endpoint","api/points");st(this,"apiUrl");this.apiUrl=t}async getCollisions(){try{const t=await fetch(`${this.apiUrl}${this.endpoint}`);return t.ok?{ok:!0,value:await t.json()}:{ok:!1,error:await t.text()}}catch{return{ok:!1,error:"Cannot make request."}}}async addPoint(t,n){const i=new URLSearchParams({x:t.x.toString(),y:t.y.toString(),radius:n.toString()});try{const s=await fetch(`${this.apiUrl}${this.endpoint}?${i}`,{method:"POST"});return s.ok?{ok:!0,value:await s.json()}:{ok:!1,error:await s.text()}}catch{return{ok:!1,error:"Cannot make request."}}}}function Tt(e){let t,n,i,s="X:",a,l,r,u,d,o="Y:",m,f,C,g;return{c(){t=y("div"),n=y("div"),i=y("label"),i.textContent=s,a=z(),l=y("input"),r=z(),u=y("div"),d=y("label"),d.textContent=o,m=z(),f=y("input"),this.h()},l(b){t=P(b,"DIV",{class:!0});var w=E(t);n=P(w,"DIV",{});var _=E(n);i=P(_,"LABEL",{for:!0,"data-svelte-h":!0}),W(i)!=="svelte-1i4ahf4"&&(i.textContent=s),a=I(_),l=P(_,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),_.forEach(k),r=I(w),u=P(w,"DIV",{});var T=E(u);d=P(T,"LABEL",{for:!0,"data-svelte-h":!0}),W(d)!=="svelte-j23swm"&&(d.textContent=o),m=I(T),f=P(T,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),T.forEach(k),w.forEach(k),this.h()},h(){p(i,"for","x"),p(l,"id","x"),p(l,"type","number"),p(l,"min",e[1]),p(l,"max",e[2]),p(l,"class","svelte-cazf2q"),p(d,"for","y"),p(f,"id","y"),p(f,"type","number"),p(f,"min",e[3]),p(f,"max",e[4]),p(f,"class","svelte-cazf2q"),p(t,"class","wrapper svelte-cazf2q")},m(b,w){A(b,t,w),c(t,n),c(n,i),c(n,a),c(n,l),U(l,e[0].x),c(t,r),c(t,u),c(u,d),c(u,m),c(u,f),U(f,e[0].y),C||(g=[F(l,"input",e[5]),F(f,"input",e[6])],C=!0)},p(b,[w]){w&2&&p(l,"min",b[1]),w&4&&p(l,"max",b[2]),w&1&&G(l.value)!==b[0].x&&U(l,b[0].x),w&8&&p(f,"min",b[3]),w&16&&p(f,"max",b[4]),w&1&&G(f.value)!==b[0].y&&U(f,b[0].y)},i:V,o:V,d(b){b&&k(t),C=!1,pt(g)}}}function Ct(e,t,n){let{point:i}=t,{minX:s}=t,{maxX:a}=t,{minY:l}=t,{maxY:r}=t;function u(){i.x=G(this.value),n(0,i)}function d(){i.y=G(this.value),n(0,i)}return e.$$set=o=>{"point"in o&&n(0,i=o.point),"minX"in o&&n(1,s=o.minX),"maxX"in o&&n(2,a=o.maxX),"minY"in o&&n(3,l=o.minY),"maxY"in o&&n(4,r=o.maxY)},[i,s,a,l,r,u,d]}class Et extends K{constructor(t){super(),Q(this,t,Ct,Tt,J,{point:0,minX:1,maxX:2,minY:3,maxY:4})}}function zt(e){let t,n,i="Radius:",s,a,l,r,u,d,o;return{c(){t=y("div"),n=y("p"),n.textContent=i,s=z(),a=y("label"),l=L(e[0]),r=z(),u=y("input"),this.h()},l(m){t=P(m,"DIV",{});var f=E(t);n=P(f,"P",{"data-svelte-h":!0}),W(n)!=="svelte-9yl71g"&&(n.textContent=i),s=I(f),a=P(f,"LABEL",{for:!0});var C=E(a);l=X(C,e[0]),C.forEach(k),r=I(f),u=P(f,"INPUT",{id:!0,type:!0,min:!0,max:!0}),f.forEach(k),this.h()},h(){p(a,"for","radius"),p(u,"id","radius"),p(u,"type","range"),p(u,"min","1"),p(u,"max","5")},m(m,f){A(m,t,f),c(t,n),c(t,s),c(t,a),c(a,l),c(t,r),c(t,u),U(u,e[0]),d||(o=[F(u,"change",e[1]),F(u,"input",e[1])],d=!0)},p(m,[f]){f&1&&Y(l,m[0]),f&1&&U(u,m[0])},i:V,o:V,d(m){m&&k(t),d=!1,pt(o)}}}function It(e,t,n){let{radius:i}=t;function s(){i=G(this.value),n(0,i)}return e.$$set=a=>{"radius"in a&&n(0,i=a.radius)},[i,s]}class St extends K{constructor(t){super(),Q(this,t,It,zt,J,{radius:0})}}function Mt(e){let t,n,i,s,a,l,r,u,d,o,m,f;function C(_){e[5](_)}let g={};e[1]!==void 0&&(g.radius=e[1]),r=new St({props:g}),N.push(()=>H(r,"radius",C));function b(_){e[6](_)}let w={minX:-10,maxX:10,minY:-10,maxY:10};return e[0]!==void 0&&(w.point=e[0]),o=new Et({props:w}),N.push(()=>H(o,"point",b)),{c(){t=y("div"),n=y("div"),i=y("canvas"),a=z(),l=y("div"),Z(r.$$.fragment),d=z(),Z(o.$$.fragment),this.h()},l(_){t=P(_,"DIV",{class:!0});var T=E(t);n=P(T,"DIV",{class:!0});var S=E(n);i=P(S,"CANVAS",{id:!0,width:!0,height:!0}),E(i).forEach(k),S.forEach(k),a=I(T),l=P(T,"DIV",{class:!0});var v=E(l);$(r.$$.fragment,v),d=I(v),$(o.$$.fragment,v),v.forEach(k),T.forEach(k),this.h()},h(){p(i,"id","canvas"),p(i,"width",e[2]),p(i,"height",e[3]),p(n,"class","canvas svelte-8o24w7"),vt(()=>e[4].call(n)),p(l,"class","inputs svelte-8o24w7"),p(t,"class","wrapper svelte-8o24w7")},m(_,T){A(_,t,T),c(t,n),c(n,i),s=bt(n,e[4].bind(n)),c(t,a),c(t,l),x(r,l,null),c(l,d),x(o,l,null),f=!0},p(_,[T]){(!f||T&4)&&p(i,"width",_[2]),(!f||T&8)&&p(i,"height",_[3]);const S={};!u&&T&2&&(u=!0,S.radius=_[1],O(()=>u=!1)),r.$set(S);const v={};!m&&T&1&&(m=!0,v.point=_[0],O(()=>m=!1)),o.$set(v)},i(_){f||(tt(r.$$.fragment,_),tt(o.$$.fragment,_),f=!0)},o(_){et(r.$$.fragment,_),et(o.$$.fragment,_),f=!1},d(_){_&&k(t),s(),nt(r),nt(o)}}}const D=20;function it(e){return{x:e.width/2,y:e.height/2}}function ot(e,t){try{const n=document.getElementById("canvas"),i=n.getContext("2d");if(!i)return;Rt(i,n),qt(i,n),Dt(i,n,e),At(i,n,t)}catch{}}function Rt(e,t){e.clearRect(0,0,t.width,t.height)}function qt(e,t){e.beginPath(),e.moveTo(5,t.height/2),e.lineTo(t.width-5,t.height/2),e.strokeStyle="black",e.stroke(),e.beginPath(),e.moveTo(t.width/2,5),e.lineTo(t.width/2,t.height-5),e.strokeStyle="black",e.stroke();const i=Math.floor((t.width-5)/D);for(let a=-i;a<i;a++){const l=t.width/2+a*D;e.beginPath(),e.moveTo(l,t.height/2-5),e.lineTo(l,t.height/2+5),e.strokeStyle="black",e.stroke()}const s=Math.floor((t.height-5)/D);for(let a=-s;a<s;a++){const l=t.height/2+a*D;e.beginPath(),e.moveTo(t.width/2-5,l),e.lineTo(t.width/2+5,l),e.strokeStyle="black",e.stroke()}ut(e,t.width-5,t.height/2,Math.PI),ut(e,t.width/2,5,Math.PI/2)}function ut(e,t,n,i){e.beginPath(),e.moveTo(t,n);const s=10;e.lineTo(t+s*Math.cos(i-Math.PI/6),n+s*Math.sin(i-Math.PI/6)),e.lineTo(t+s*Math.cos(i+Math.PI/6),n+s*Math.sin(i+Math.PI/6)),e.lineTo(t,n),e.fillStyle="black",e.fill()}function Dt(e,t,n){const i=n*D,s=it(t),a="rgba(128, 128, 128, 0.5)";e.fillStyle=a,e.beginPath(),e.arc(s.x,s.y,i,0,Math.PI*2),e.fill(),e.fillStyle=a,e.fillRect(s.x,s.y-2*i,2*i,2*i),e.fillStyle=a,e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(s.x,s.y+2*i),e.lineTo(s.x-2*i,s.y),e.closePath(),e.fill()}function At(e,t,n){const i="red";e.fillStyle=i;const a=Lt(n,t);e.fillRect(a.x-10/2,a.y-10/2,10,10)}function Lt(e,t){const n=it(t);return{x:e.x*D+n.x,y:-e.y*D+n.y}}function Xt(e,t){const n=it(t);return{x:(e.x-n.x)/D,y:-(e.y-n.y)/D}}function Yt(e,t,n){let{point:i={x:0,y:0}}=t,{radius:s=1}=t,a,l;_t(()=>{const o=document.getElementById("canvas");n(0,i=Xt(it(o),o)),ot(s,i)});function r(){l=this.clientHeight,a=this.clientWidth,n(3,l),n(2,a)}function u(o){s=o,n(1,s)}function d(o){i=o,n(0,i)}return e.$$set=o=>{"point"in o&&n(0,i=o.point),"radius"in o&&n(1,s=o.radius)},e.$$.update=()=>{e.$$.dirty&3&&ot(s,i)},[i,s,a,l,r,u,d]}class Ut extends K{constructor(t){super(),Q(this,t,Yt,Mt,J,{point:0,radius:1})}}function dt(e,t,n){const i=e.slice();return i[1]=t[n],i}function ft(e){let t,n,i=e[1].point.x+"",s,a,l,r=e[1].point.y+"",u,d,o,m=e[1].collied+"",f,C,g,b=e[1].graphRadius+"",w,_,T,S=ht(e[1].checkedAt)+"",v,B;return{c(){t=y("tr"),n=y("td"),s=L(i),a=z(),l=y("td"),u=L(r),d=z(),o=y("td"),f=L(m),C=z(),g=y("td"),w=L(b),_=z(),T=y("td"),v=L(S),B=z(),this.h()},l(R){t=P(R,"TR",{class:!0});var h=E(t);n=P(h,"TD",{class:!0});var q=E(n);s=X(q,i),q.forEach(k),a=I(h),l=P(h,"TD",{class:!0});var M=E(l);u=X(M,r),M.forEach(k),d=I(h),o=P(h,"TD",{class:!0});var j=E(o);f=X(j,m),j.forEach(k),C=I(h),g=P(h,"TD",{class:!0});var lt=E(g);w=X(lt,b),lt.forEach(k),_=I(h),T=P(h,"TD",{class:!0});var at=E(T);v=X(at,S),at.forEach(k),B=I(h),h.forEach(k),this.h()},h(){p(n,"class","svelte-1wqiz8k"),p(l,"class","svelte-1wqiz8k"),p(o,"class","svelte-1wqiz8k"),p(g,"class","svelte-1wqiz8k"),p(T,"class","svelte-1wqiz8k"),p(t,"class","row")},m(R,h){A(R,t,h),c(t,n),c(n,s),c(t,a),c(t,l),c(l,u),c(t,d),c(t,o),c(o,f),c(t,C),c(t,g),c(g,w),c(t,_),c(t,T),c(T,v),c(t,B)},p(R,h){h&1&&i!==(i=R[1].point.x+"")&&Y(s,i),h&1&&r!==(r=R[1].point.y+"")&&Y(u,r),h&1&&m!==(m=R[1].collied+"")&&Y(f,m),h&1&&b!==(b=R[1].graphRadius+"")&&Y(w,b),h&1&&S!==(S=ht(R[1].checkedAt)+"")&&Y(v,S)},d(R){R&&k(t)}}}function Vt(e){let t,n,i='<th class="svelte-1wqiz8k">X</th> <th class="svelte-1wqiz8k">Y</th> <th class="svelte-1wqiz8k">Collied</th> <th class="svelte-1wqiz8k">Radius</th> <th class="svelte-1wqiz8k">Time</th>',s,a=rt(e[0]),l=[];for(let r=0;r<a.length;r+=1)l[r]=ft(dt(e,a,r));return{c(){t=y("table"),n=y("tr"),n.innerHTML=i,s=z();for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=P(r,"TABLE",{class:!0});var u=E(t);n=P(u,"TR",{"data-svelte-h":!0}),W(n)!=="svelte-3tzoyf"&&(n.innerHTML=i),s=I(u);for(let d=0;d<l.length;d+=1)l[d].l(u);u.forEach(k),this.h()},h(){p(t,"class","results svelte-1wqiz8k")},m(r,u){A(r,t,u),c(t,n),c(t,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null)},p(r,[u]){if(u&1){a=rt(r[0]);let d;for(d=0;d<a.length;d+=1){const o=dt(r,a,d);l[d]?l[d].p(o,u):(l[d]=ft(o),l[d].c(),l[d].m(t,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=a.length}},i:V,o:V,d(r){r&&k(t),wt(l,r)}}}function ht(e){const[t,n]=e.split("T");return`${t} ${n.slice(0,8)} UTC`}function Bt(e,t,n){let{collisions:i=[]}=t;return e.$$set=s=>{"collisions"in s&&n(0,i=s.collisions)},[i]}class jt extends K{constructor(t){super(),Q(this,t,Bt,Vt,J,{collisions:0})}}function ct(e){let t,n;return{c(){t=y("p"),n=L(e[3]),this.h()},l(i){t=P(i,"P",{class:!0});var s=E(t);n=X(s,e[3]),s.forEach(k),this.h()},h(){p(t,"class","error svelte-192zdg1")},m(i,s){A(i,t,s),c(t,n)},p(i,s){s&8&&Y(n,i[3])},d(i){i&&k(t)}}}function Nt(e){let t,n,i,s,a,l,r,u,d="Click Me",o,m,f,C,g,b,w;function _(h){e[5](h)}function T(h){e[6](h)}let S={};e[1]!==void 0&&(S.point=e[1]),e[2]!==void 0&&(S.radius=e[2]),s=new Ut({props:S}),N.push(()=>H(s,"point",_)),N.push(()=>H(s,"radius",T));let v=e[3]&&ct(e);function B(h){e[8](h)}let R={};return e[0]!==void 0&&(R.collisions=e[0]),f=new jt({props:R}),N.push(()=>H(f,"collisions",B)),{c(){t=y("meta"),n=z(),i=y("div"),Z(s.$$.fragment),r=z(),u=y("button"),u.textContent=d,o=z(),v&&v.c(),m=z(),Z(f.$$.fragment),this.h()},l(h){const q=kt("svelte-1lnb9z",document.head);t=P(q,"META",{name:!0,content:!0}),q.forEach(k),n=I(h),i=P(h,"DIV",{class:!0});var M=E(i);$(s.$$.fragment,M),r=I(M),u=P(M,"BUTTON",{"data-svelte-h":!0}),W(u)!=="svelte-l25a0i"&&(u.textContent=d),o=I(M),v&&v.l(M),m=I(M),$(f.$$.fragment,M),M.forEach(k),this.h()},h(){document.title="Web Lab 1",p(t,"name","description"),p(t,"content","Web Lab 1"),p(i,"class","wrapper svelte-192zdg1")},m(h,q){c(document.head,t),A(h,n,q),A(h,i,q),x(s,i,null),c(i,r),c(i,u),c(i,o),v&&v.m(i,null),c(i,m),x(f,i,null),g=!0,b||(w=F(u,"click",e[7]),b=!0)},p(h,[q]){const M={};!a&&q&2&&(a=!0,M.point=h[1],O(()=>a=!1)),!l&&q&4&&(l=!0,M.radius=h[2],O(()=>l=!1)),s.$set(M),h[3]?v?v.p(h,q):(v=ct(h),v.c(),v.m(i,m)):v&&(v.d(1),v=null);const j={};!C&&q&1&&(C=!0,j.collisions=h[0],O(()=>C=!1)),f.$set(j)},i(h){g||(tt(s.$$.fragment,h),tt(f.$$.fragment,h),g=!0)},o(h){et(s.$$.fragment,h),et(f.$$.fragment,h),g=!1},d(h){h&&(k(n),k(i)),k(t),nt(s),v&&v.d(),nt(f),b=!1,w()}}}function Ot(e,t,n){const i=new Pt("");let s,a,l,r;async function u(g,b){const w=await i.addPoint(g,b);w.ok?(n(0,s=[w.value,...s]),n(3,r=null)):n(3,r=`Cannot add point: ${w.error}`)}async function d(){const g=await i.getCollisions();g.ok?(n(0,s=g.value),n(3,r=null)):n(3,r=`Cannot add point: ${g.error}`)}_t(d);function o(g){a=g,n(1,a)}function m(g){l=g,n(2,l)}const f=async()=>await u(a,l);function C(g){s=g,n(0,s)}return[s,a,l,r,u,o,m,f,C]}class Jt extends K{constructor(t){super(),Q(this,t,Ot,Nt,J,{})}}export{Jt as component,Gt as universal};
