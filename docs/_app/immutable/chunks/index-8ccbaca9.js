function w(){}const I=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function z(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Ot(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function zt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?_t(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,l){if(s){const i=tt(e,n,r,l);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const et=typeof window!="undefined";let W=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):w;const E=new Set;function nt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(nt)}function J(t){let e;return E.size===0&&G(nt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let B=!1;function mt(){B=!0}function pt(){B=!1}function gt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:gt(1,s,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],i=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(l.push(e[c-1]);o>=c;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);l.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<l.length&&i[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(i[c],_)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=rt("style");return $t(it(t),e),e.sheet}function $t(t,e){bt(t.head||t,e)}function wt(t,e){if(B){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){B&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function Gt(){return K(" ")}function Jt(){return K("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){At(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const l=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||l.push(o.name)}l.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Vt(t,e,n){return ct(t,e,n,rt)}function Xt(t,e,n){return ct(t,e,n,Et)}function Nt(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>K(e),!0)}function Yt(t){return Nt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ee(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const R=new Map;let T=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return R.set(t,n),n}function O(t,e,n,r,s,l,i,o=0){const c=16.666/r;let u=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);u+=m*100+`%{${i(y,1-y)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${o}`,a=it(t),{stylesheet:d,rules:h}=R.get(a)||St(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,T+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),T-=s,T||jt())}function jt(){G(()=>{T||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let S;function C(t){S=t}function j(){if(!S)throw new Error("Function called outside component initialization");return S}function ie(t){j().$$.on_mount.push(t)}function re(t){j().$$.after_update.push(t)}function se(){const t=j();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=lt(e,n,{cancelable:r});return s.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}function ce(t,e){return j().$$.context.set(t,e),e}function le(t){return j().$$.context.get(t)}const N=[],X=[],D=[],Y=[],ot=Promise.resolve();let H=!1;function ut(){H||(H=!0,ot.then(at))}function oe(){return ut(),ot}function k(t){D.push(t)}const F=new Set;let q=0;function at(){const t=S;do{for(;q<N.length;){const e=N[q];q++,C(e),Mt(e.$$)}for(C(null),N.length=0,q=0;X.length;)X.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];F.has(n)||(F.add(n),n())}D.length=0}while(N.length);for(;Y.length;)Y.pop()();H=!1,F.clear(),C(t)}function Mt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let A;function Q(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function $(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function ue(){g={r:0,c:[],p:g}}function ae(){g.r||v(g.c),g=g.p}function qt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const U={duration:0};function _e(t,e,n){let r=e(t,n),s=!1,l,i,o=0;function c(){l&&L(t,l)}function u(){const{delay:f=0,duration:a=300,easing:d=I,tick:h=w,css:p}=r||U;p&&(l=O(t,0,1,a,f,d,p,o++)),h(0,1);const m=W()+f,y=m+a;i&&i.abort(),s=!0,k(()=>$(t,!0,"start")),i=J(b=>{if(s){if(b>=y)return h(1,0),$(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/a);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),z(r)?(r=r(),Q().then(u)):u())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function de(t,e,n){let r=e(t,n),s=!0,l;const i=g;i.r+=1;function o(){const{delay:c=0,duration:u=300,easing:_=I,tick:f=w,css:a}=r||U;a&&(l=O(t,1,0,u,c,_,a));const d=W()+c,h=d+u;k(()=>$(t,!1,"start")),J(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||v(i.c),!1;if(p>=d){const m=_((p-d)/u);f(1-m,m)}}return s})}return z(r)?Q().then(()=>{r=r(),o()}):o(),{end(c){c&&r.tick&&r.tick(1,0),s&&(l&&L(t,l),s=!1)}}}function he(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,o=null,c=null;function u(){c&&L(t,c)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=I,tick:m=w,css:y}=s||U,b={start:W()+d,b:a};a||(b.group=g,g.r+=1),i||o?o=b:(y&&(u(),c=O(t,l,a,h,d,p,y)),a&&m(0,1),i=_(b,h),k(()=>$(t,a,"start")),J(x=>{if(o&&x>o.start&&(i=_(o,h),o=null,$(t,i.b,"start"),y&&(u(),c=O(t,l,i.b,i.duration,0,p,s.css))),i){if(x>=i.end)m(l=i.b,1-l),$(t,i.b,"end"),o||(i.b?u():--i.group.r||v(i.group.c)),i=null;else if(x>=i.start){const ft=x-i.start;l=i.a+i.d*p(ft/i.duration),m(l,1-l)}}return!!(i||o)}))}return{run(a){z(s)?Q().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=o=null}}}const me=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function pe(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],o=e[l];if(o){for(const c in i)c in o||(r[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ge(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Dt(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||k(()=>{const c=l.map(Z).filter(z);i?i.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(k)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,r,s,l,i,o=[-1]){const c=S;C(t);const u=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Rt(t,f)),a}):[],u.update(),_=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){mt();const f=kt(e.target);u.fragment&&u.fragment.l(f),f.forEach(vt)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),pt(),at()}C(c)}class $e{$destroy(){Pt(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pe as A,ge as B,Pt as C,_t as D,oe as E,k as F,Et as G,Xt as H,wt as I,Kt as J,he as K,Wt as L,Lt as M,Ft as N,Ht as O,Bt as P,_e as Q,de as R,$e as S,zt as T,Ot as U,ee as V,le as W,ne as X,me as Y,se as Z,Qt as _,kt as a,Ut as b,Vt as c,vt as d,rt as e,te as f,It as g,Nt as h,xe as i,Zt as j,Gt as k,Jt as l,Yt as m,w as n,ue as o,fe as p,ae as q,qt as r,Tt as s,K as t,ce as u,re as v,ie as w,ye as x,be as y,Dt as z};
