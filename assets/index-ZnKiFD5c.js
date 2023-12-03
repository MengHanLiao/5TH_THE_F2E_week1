var qt=Object.defineProperty;var zt=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ct=(e,t,n)=>(zt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function O(){}const Ut=e=>e;function Ct(e){return e()}function ht(){return Object.create(null)}function J(e){e.forEach(Ct)}function dt(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let lt;function mt(e,t){return e===t?!0:(lt||(lt=document.createElement("a")),lt.href=t,e===lt.href)}function Bt(e){return Object.keys(e).length===0}function _t(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Ht=typeof window<"u";let Vt=Ht?()=>window.performance.now():()=>Date.now(),gt=Ht?e=>requestAnimationFrame(e):O;const V=new Set;function Dt(e){V.forEach(t=>{t.c(e)||(V.delete(t),t.f())}),V.size!==0&&gt(Dt)}function Gt(e){let t;return V.size===0&&gt(Dt),{promise:new Promise(n=>{V.add(t={c:e,f:n})}),abort(){V.delete(t)}}}function x(e,t){e.appendChild(t)}function Ft(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Kt(e){const t=_("style");return t.textContent="/* empty */",Jt(Ft(e),t),t.sheet}function Jt(e,t){return x(e.head||e,t),t.sheet}function k(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function it(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function tt(e){return document.createTextNode(e)}function A(){return tt(" ")}function Qt(){return tt("")}function It(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Wt(e){return Array.from(e.childNodes)}function bt(e,t,n){e.classList.toggle(t,!!n)}function Xt(e,t,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:l})}const st=new Map;let ot=0;function Yt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Zt(e,t){const n={stylesheet:Kt(t),rules:{}};return st.set(e,n),n}function $t(e,t,n,l,r,s,i,o=0){const u=16.666/l;let c=`{
`;for(let v=0;v<=1;v+=u){const M=t+(n-t)*s(v);c+=v*100+`%{${i(M,1-M)}}
`}const a=c+`100% {${i(n,1-n)}}
}`,m=`__svelte_${Yt(a)}_${o}`,g=Ft(e),{stylesheet:b,rules:p}=st.get(g)||Zt(g,e);p[m]||(p[m]=!0,b.insertRule(`@keyframes ${m} ${a}`,b.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${m} ${l}ms linear ${r}ms 1 both`,ot+=1,m}function te(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-l.length;r&&(e.style.animation=l.join(", "),ot-=r,ot||ee())}function ee(){gt(()=>{ot||(st.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&$(t)}),st.clear())})}let pt;function X(e){pt=e}const B=[],yt=[];let G=[];const xt=[],ne=Promise.resolve();let at=!1;function le(){at||(at=!0,ne.then(Rt))}function Y(e){G.push(e)}const ft=new Set;let U=0;function Rt(){if(U!==0)return;const e=pt;do{try{for(;U<B.length;){const t=B[U];U++,X(t),re(t.$$)}}catch(t){throw B.length=0,U=0,t}for(X(null),B.length=0,U=0;yt.length;)yt.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];ft.has(n)||(ft.add(n),n())}G.length=0}while(B.length);for(;xt.length;)xt.pop()();at=!1,ft.clear(),X(e)}function re(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function ie(e){const t=[],n=[];G.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),G=t}let W;function se(){return W||(W=Promise.resolve(),W.then(()=>{W=null})),W}function ut(e,t,n){e.dispatchEvent(Xt(`${t?"intro":"outro"}${n}`))}const rt=new Set;let S;function oe(){S={r:0,c:[],p:S}}function ce(){S.r||J(S.c),S=S.p}function P(e,t){e&&e.i&&(rt.delete(e),e.i(t))}function D(e,t,n,l){if(e&&e.o){if(rt.has(e))return;rt.add(e),S.c.push(()=>{rt.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const fe={duration:0};function vt(e,t,n,l){let s=t(e,n,{direction:"both"}),i=l?0:1,o=null,u=null,c=null,a;function m(){c&&te(e,c)}function g(p,y){const v=p.b-i;return y*=Math.abs(v),{a:i,b:p.b,d:v,duration:y,start:p.start,end:p.start+y,group:p.group}}function b(p){const{delay:y=0,duration:v=300,easing:M=Ut,tick:T=O,css:q}=s||fe,C={start:Vt()+y,b:p};p||(C.group=S,S.r+=1),"inert"in e&&(p?a!==void 0&&(e.inert=a):(a=e.inert,e.inert=!0)),o||u?u=C:(q&&(m(),c=$t(e,i,p,v,y,M,q)),p&&T(0,1),o=g(C,v),Y(()=>ut(e,p,"start")),Gt(N=>{if(u&&N>u.start&&(o=g(u,v),u=null,ut(e,o.b,"start"),q&&(m(),c=$t(e,i,o.b,o.duration,0,M,s.css))),o){if(N>=o.end)T(i=o.b,1-i),ut(e,o.b,"end"),u||(o.b?m():--o.group.r||J(o.group.c)),o=null;else if(N>=o.start){const H=N-o.start;i=o.a+o.d*M(H/o.duration),T(i,1-i)}}return!!(o||u)}))}return{run(p){dt(s)?se().then(()=>{s=s({direction:p?"in":"out"}),b(p)}):b(p)},end(){m(),o=u=null}}}function F(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function K(e){e&&e.c()}function I(e,t,n){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),Y(()=>{const s=e.$$.on_mount.map(Ct).filter(dt);e.$$.on_destroy?e.$$.on_destroy.push(...s):J(s),e.$$.on_mount=[]}),r.forEach(Y)}function R(e,t){const n=e.$$;n.fragment!==null&&(ie(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(B.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function et(e,t,n,l,r,s,i=null,o=[-1]){const u=pt;X(e);const c=e.$$={fragment:null,ctx:[],props:s,update:O,not_equal:r,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ht(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};i&&i(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(m,g,...b)=>{const p=b.length?b[0]:g;return c.ctx&&r(c.ctx[m],c.ctx[m]=p)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](p),a&&ue(e,m)),g}):[],c.update(),a=!0,J(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const m=Wt(t.target);c.fragment&&c.fragment.l(m),m.forEach($)}else c.fragment&&c.fragment.c();t.intro&&P(e.$$.fragment),I(e,t.target,t.anchor),Rt()}X(u)}class nt{constructor(){ct(this,"$$");ct(this,"$$set")}$destroy(){R(this,1),this.$destroy=O}$on(t,n){if(!dt(n))return O;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Bt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);function de(e){const t=e-1;return t*t*t+1}function wt(e,{delay:t=0,duration:n=400,easing:l=de,x:r=0,y:s=0,opacity:i=0}={}){const o=getComputedStyle(e),u=+o.opacity,c=o.transform==="none"?"":o.transform,a=u*(1-i),[m,g]=_t(r),[b,p]=_t(s);return{delay:t,duration:n,easing:l,css:(y,v)=>`
			transform: ${c} translate(${(1-y)*m}${g}, ${(1-y)*b}${p});
			opacity: ${u-a*v}`}}function kt(e,t,n){const l=e.slice();return l[2]=t[n],l}function Et(e){let t,n,l,r,s;return{c(){t=_("li"),n=_("a"),l=_("img"),s=A(),mt(l.src,r=ge+e[2].src)||h(l,"src",r),h(l,"alt",e[2].link+"icon"),h(n,"href","https://github.com/MengHanLiao/5TH_THE_F2E_week1"),h(n,"class","block h-full rounded-full border-gray-300 p-4"),bt(n,"border",e[0])},m(i,o){k(i,t,o),x(t,n),x(n,l),x(t,s)},p(i,o){o&1&&bt(n,"border",i[0])},d(i){i&&$(t)}}}function me(e){let t,n=F(e[1]),l=[];for(let r=0;r<n.length;r+=1)l[r]=Et(kt(e,n,r));return{c(){t=_("ul");for(let r=0;r<l.length;r+=1)l[r].c();h(t,"class","flex justify-center")},m(r,s){k(r,t,s);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(t,null)},p(r,[s]){if(s&3){n=F(r[1]);let i;for(i=0;i<n.length;i+=1){const o=kt(r,n,i);l[i]?l[i].p(o,s):(l[i]=Et(o),l[i].c(),l[i].m(t,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},i:O,o:O,d(r){r&&$(t),it(l,r)}}}const ge="/images/";function pe(e,t,n){const l=[{link:"fb",src:"facebook.png"},{link:"ig",src:"instagram.png"},{link:"youtube",src:"youtube.png"},{link:"line",src:"line.png"}];let{border:r=!0}=t;return e.$$set=s=>{"border"in s&&n(0,r=s.border)},[r,l]}class Tt extends nt{constructor(t){super(),et(this,t,pe,me,Z,{border:0})}}function he(e){let t;return{c(){t=_("picture"),t.innerHTML='<source srcset="/images/logo_pc.png" media="(min-width: 1024px)"/> <img src="/images/logo_mb.png" alt="logo"/>',h(t,"class","absolute right-1/2 top-4 translate-x-2/4")},m(n,l){k(n,t,l)},p:O,i:O,o:O,d(n){n&&$(t)}}}class Lt extends nt{constructor(t){super(),et(this,t,null,he,Z,{})}}function Ot(e,t,n){const l=e.slice();return l[3]=t[n].text,l[4]=t[n].link,l}function jt(e,t,n){const l=e.slice();return l[3]=t[n].text,l[4]=t[n].link,l}function Nt(e,t,n){const l=e.slice();return l[3]=t[n].text,l[4]=t[n].link,l}function _e(e){let t,n;return{c(){t=_("img"),mt(t.src,n="/images/menu.png")||h(t,"src",n),h(t,"alt","mobile menu button")},m(l,r){k(l,t,r)},d(l){l&&$(t)}}}function be(e){let t,n;return{c(){t=_("img"),mt(t.src,n="/images/close.png")||h(t,"src",n),h(t,"alt","mobile menu button")},m(l,r){k(l,t,r)},d(l){l&&$(t)}}}function At(e){let t,n=e[3]+"",l;return{c(){t=_("a"),l=tt(n),h(t,"class","block p-2 text-center font-jost text-sm font-bold text-brown"),h(t,"href",e[4])},m(r,s){k(r,t,s),x(t,l)},p:O,d(r){r&&$(t)}}}function Mt(e){let t,n=e[3]+"",l;return{c(){t=_("a"),l=tt(n),h(t,"class","block p-2 text-center font-jost text-sm font-bold text-brown"),h(t,"href",e[4])},m(r,s){k(r,t,s),x(t,l)},p:O,d(r){r&&$(t)}}}function Pt(e){let t,n,l,r,s,i,o,u=F(e[1]),c=[];for(let a=0;a<u.length;a+=1)c[a]=St(Ot(e,u,a));return s=new Tt({}),{c(){t=_("div"),n=_("ul");for(let a=0;a<c.length;a+=1)c[a].c();l=A(),r=_("div"),K(s.$$.fragment),h(n,"class","border-b border-gray-300 pb-10 pt-14"),h(r,"class","py-14"),h(t,"class","fixed z-10 w-full h-full bg-white")},m(a,m){k(a,t,m),x(t,n);for(let g=0;g<c.length;g+=1)c[g]&&c[g].m(n,null);x(t,l),x(t,r),I(s,r,null),o=!0},p(a,m){if(m&6){u=F(a[1]);let g;for(g=0;g<u.length;g+=1){const b=Ot(a,u,g);c[g]?c[g].p(b,m):(c[g]=St(b),c[g].c(),c[g].m(n,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=u.length}},i(a){o||(P(s.$$.fragment,a),a&&Y(()=>{o&&(i||(i=vt(t,wt,{x:-100,duration:1e3},!0)),i.run(1))}),o=!0)},o(a){D(s.$$.fragment,a),a&&(i||(i=vt(t,wt,{x:-100,duration:1e3},!1)),i.run(0)),o=!1},d(a){a&&$(t),it(c,a),R(s),a&&i&&i.end()}}}function St(e){let t,n,l=e[3]+"",r,s,i,o;return{c(){t=_("li"),n=_("a"),r=tt(l),s=A(),h(n,"class","block py-2 text-center font-jost text-lg font-bold text-brown"),h(n,"href",e[4]),h(t,"class","mb-4")},m(u,c){k(u,t,c),x(t,n),x(n,r),x(t,s),i||(o=It(n,"click",e[2]),i=!0)},p:O,d(u){u&&$(t),i=!1,o()}}}function $e(e){let t,n,l,r,s,i,o,u,c,a,m,g,b,p,y,v,M,T;function q(f,j){return f[0]?be:_e}let C=q(e),N=C(e);r=new Lt({});let H=F(e[1].slice(0,3)),E=[];for(let f=0;f<H.length;f+=1)E[f]=At(Nt(e,H,f));c=new Lt({});let z=F(e[1].slice(3)),L=[];for(let f=0;f<z.length;f+=1)L[f]=Mt(jt(e,z,f));b=new Tt({props:{border:!1}});let w=e[0]&&Pt(e);return{c(){t=_("div"),n=_("button"),N.c(),l=A(),K(r.$$.fragment),s=A(),i=_("div"),o=_("div");for(let f=0;f<E.length;f+=1)E[f].c();u=A(),K(c.$$.fragment),a=A(),m=_("div");for(let f=0;f<L.length;f+=1)L[f].c();g=A(),K(b.$$.fragment),p=A(),w&&w.c(),y=Qt(),h(n,"class","p-4"),h(n,"type","button"),h(t,"class","sticky top-0 z-20 border-b-2 bg-white border-orange px-8 lg:hidden"),h(o,"class","col-span-2 flex items-center justify-around"),h(m,"class","col-span-2 col-end-6 flex items-center justify-around"),h(i,"class","hidden grid-cols-5 border-b-2 border-orange lg:grid lg:py-6")},m(f,j){k(f,t,j),x(t,n),N.m(n,null),x(t,l),I(r,t,null),k(f,s,j),k(f,i,j),x(i,o);for(let d=0;d<E.length;d+=1)E[d]&&E[d].m(o,null);x(i,u),I(c,i,null),x(i,a),x(i,m);for(let d=0;d<L.length;d+=1)L[d]&&L[d].m(m,null);x(m,g),I(b,m,null),k(f,p,j),w&&w.m(f,j),k(f,y,j),v=!0,M||(T=It(n,"click",e[2]),M=!0)},p(f,[j]){if(C!==(C=q(f))&&(N.d(1),N=C(f),N&&(N.c(),N.m(n,null))),j&2){H=F(f[1].slice(0,3));let d;for(d=0;d<H.length;d+=1){const Q=Nt(f,H,d);E[d]?E[d].p(Q,j):(E[d]=At(Q),E[d].c(),E[d].m(o,null))}for(;d<E.length;d+=1)E[d].d(1);E.length=H.length}if(j&2){z=F(f[1].slice(3));let d;for(d=0;d<z.length;d+=1){const Q=jt(f,z,d);L[d]?L[d].p(Q,j):(L[d]=Mt(Q),L[d].c(),L[d].m(m,g))}for(;d<L.length;d+=1)L[d].d(1);L.length=z.length}f[0]?w?(w.p(f,j),j&1&&P(w,1)):(w=Pt(f),w.c(),P(w,1),w.m(y.parentNode,y)):w&&(oe(),D(w,1,1,()=>{w=null}),ce())},i(f){v||(P(r.$$.fragment,f),P(c.$$.fragment,f),P(b.$$.fragment,f),P(w),v=!0)},o(f){D(r.$$.fragment,f),D(c.$$.fragment,f),D(b.$$.fragment,f),D(w),v=!1},d(f){f&&($(t),$(s),$(i),$(p),$(y)),N.d(),R(r),it(E,f),R(c),it(L,f),R(b),w&&w.d(f),M=!1,T()}}}function ye(e,t,n){const l=[{text:"About me",link:"#aboutMe"},{text:"Last activity",link:"#lastActivity"},{text:"Policy",link:"#policy"},{text:"Donate",link:"#donate"},{text:"Feedback",link:"#feedback"}];let r=!1;function s(){n(0,r=!r)}return[r,l,s]}class xe extends nt{constructor(t){super(),et(this,t,ye,$e,Z,{})}}function ve(e){let t,n,l,r,s,i;return t=new xe({}),{c(){K(t.$$.fragment),n=A(),l=_("main"),l.innerHTML=`<div class="bg-hero mb-15 flex min-h-[700px] flex-col justify-between xl:mb-37.5"><div class="container pt-14"><h1 class="text-center md:text-left">台灣的明天，<br/>喵先鋪路</h1></div> <img src="/images/fish_decoration1.png" alt="fish decoration" class="m-10 max-w-fit"/></div> <section id="aboutMe"><div class="container mb-15 lg:mb-20 grid grid-flow-row content-center text-center lg:grid-cols-2 lg:gap-x-12 lg:text-left xl:gap-x-24"><div class="lg:self-end"><span class="mb-1 block font-jost text-md text-orange lg:text-xl">About me</span> <h2 class="mb-6 lg:mb-20">立法委員<br/>候選人主張</h2></div> <div class="relative mb-5 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:mb-0"><picture class="inline-block"><source srcset="/images/avatar_pc.png" media="(min-width: 1024px)"/> <img src="/images/avatar.png" alt="candidate avatar"/></picture> <div class="absolute inset-x-0 bottom-6 flex justify-between lg:bottom-0 lg:left-1/2 lg:flex-col-reverse"><img class="mt-4 w-5/12 lg:w-auto lg:self-end" src="/images/fish_decoration1.png" alt="fish decoration"/> <h3 class="text-right text-brown lg:text-left">喵立翰
            <span class="block font-jost text-sm font-medium lg:text-xl">Miao Li-Han</span></h3></div></div> <p class="text-xs text-gray-600 md:text-base">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP
        經濟帶來巨大效益。<br/>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</p></div></section> <section id="activity"></section>`,r=A(),s=_("footer")},m(o,u){I(t,o,u),k(o,n,u),k(o,l,u),k(o,r,u),k(o,s,u),i=!0},p:O,i(o){i||(P(t.$$.fragment,o),i=!0)},o(o){D(t.$$.fragment,o),i=!1},d(o){o&&($(n),$(l),$(r),$(s)),R(t,o)}}}class we extends nt{constructor(t){super(),et(this,t,null,ve,Z,{})}}function ke(e){let t,n;return t=new we({}),{c(){K(t.$$.fragment)},m(l,r){I(t,l,r),n=!0},p:O,i(l){n||(P(t.$$.fragment,l),n=!0)},o(l){D(t.$$.fragment,l),n=!1},d(l){R(t,l)}}}class Ee extends nt{constructor(t){super(),et(this,t,null,ke,Z,{})}}new Ee({target:document.getElementById("app")});
