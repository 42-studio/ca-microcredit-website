import{F as $e,S as he,i as ge,s as oe,e as _,c as p,a as g,d as f,g as J,G as be,H as Ee,I as ye,r as Q,J as ke,K as we,p as X,L as Se,l as pe,o as Te,n as Ie,q as Oe,M as je,k as R,t as A,x as Ae,m as D,h as N,y as Ne,N as Ce,b as a,f as z,O as ve,P as r,z as Me,Q as Pe,C as Re,R as De}from"../chunks/index-99013640.js";const He=()=>{const t=$e("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},qe={subscribe(t){return He().page.subscribe(t)}};function Fe(t){const o=t-1;return o*o*o+1}function de(t,{delay:o=0,duration:n=400,easing:i=Fe,x:e=0,y:s=0,opacity:l=0}={}){const c=getComputedStyle(t),m=+c.opacity,v=c.transform==="none"?"":c.transform,b=m*(1-l);return{delay:o,duration:n,easing:i,css:(M,H)=>`
			transform: ${v} translate(${(1-M)*e}px, ${(1-M)*s}px);
			opacity: ${m-b*H}`}}function me(t){let o,n,i,e;const s=t[2].default,l=je(s,t,t[1],null);return{c(){o=_("div"),l&&l.c()},l(c){o=p(c,"DIV",{});var m=g(o);l&&l.l(m),m.forEach(f)},m(c,m){J(c,o,m),l&&l.m(o,null),e=!0},p(c,m){t=c,l&&l.p&&(!e||m&2)&&be(l,s,t,t[1],e?ye(s,t[1],m,null):Ee(t[1]),null)},i(c){e||(Q(l,c),ke(()=>{i&&i.end(1),n=we(o,de,{opacity:0,duration:ae,delay:ae}),n.start()}),e=!0)},o(c){X(l,c),n&&n.invalidate(),i=Se(o,de,{opacity:0,duration:ae}),e=!1},d(c){c&&f(o),l&&l.d(c),c&&i&&i.end()}}}function Ge(t){let o=t[0],n,i,e=me(t);return{c(){e.c(),n=pe()},l(s){e.l(s),n=pe()},m(s,l){e.m(s,l),J(s,n,l),i=!0},p(s,[l]){l&1&&oe(o,o=s[0])?(Te(),X(e,1,1,Ie),Oe(),e=me(s),e.c(),Q(e,1),e.m(n.parentNode,n)):e.p(s,l)},i(s){i||(Q(e),i=!0)},o(s){X(e),i=!1},d(s){s&&f(n),e.d(s)}}}const ae=500;function Le(t,o,n){let{$$slots:i={},$$scope:e}=o,{url:s=""}=o;return t.$$set=l=>{"url"in l&&n(0,s=l.url),"$$scope"in l&&n(1,e=l.$$scope)},[s,e,i]}class Ve extends he{constructor(o){super(),ge(this,o,Le,Ge,oe,{url:0})}}function Be(t){let o,n,i,e,s,l,c,m,v,b,M,H,E,I,L,k,q,F,y,j,O,V,u=new Date().getFullYear()+"",d,P,C,S,B,T,ee,te,G,se,Y;const le=t[3].default,$=je(le,t,t[5],null);return{c(){$&&$.c(),o=R(),n=_("footer"),i=_("section"),e=_("section"),s=_("p"),l=A("C.A. Mirco Credit"),c=_("br"),m=A("Enterprise"),v=R(),b=_("p"),M=A("Some rights reserved"),H=R(),E=_("section"),I=_("img"),k=R(),q=_("hr"),F=R(),y=_("section"),j=_("section"),O=_("p"),V=A("\xA9 "),d=A(u),P=R(),C=_("section"),S=_("p"),B=A("website by "),T=_("a"),ee=A("joshlucpoll"),te=_("br"),G=_("a"),se=A("icons by Icons8"),this.h()},l(h){$&&$.l(h),o=D(h),n=p(h,"FOOTER",{class:!0});var w=g(n);i=p(w,"SECTION",{class:!0});var U=g(i);e=p(U,"SECTION",{class:!0});var W=g(e);s=p(W,"P",{class:!0});var Z=g(s);l=N(Z,"C.A. Mirco Credit"),c=p(Z,"BR",{}),m=N(Z,"Enterprise"),Z.forEach(f),v=D(W),b=p(W,"P",{class:!0});var ne=g(b);M=N(ne,"Some rights reserved"),ne.forEach(f),W.forEach(f),H=D(U),E=p(U,"SECTION",{class:!0});var ie=g(E);I=p(ie,"IMG",{src:!0,alt:!0,class:!0}),ie.forEach(f),U.forEach(f),k=D(w),q=p(w,"HR",{class:!0}),F=D(w),y=p(w,"SECTION",{class:!0});var x=g(y);j=p(x,"SECTION",{class:!0});var ce=g(j);O=p(ce,"P",{class:!0});var re=g(O);V=N(re,"\xA9 "),d=N(re,u),re.forEach(f),ce.forEach(f),P=D(x),C=p(x,"SECTION",{class:!0});var ue=g(C);S=p(ue,"P",{class:!0});var K=g(S);B=N(K,"website by "),T=p(K,"A",{class:!0,href:!0,target:!0,rel:!0});var fe=g(T);ee=N(fe,"joshlucpoll"),fe.forEach(f),te=p(K,"BR",{}),G=p(K,"A",{class:!0,target:!0,href:!0});var _e=g(G);se=N(_e,"icons by Icons8"),_e.forEach(f),K.forEach(f),ue.forEach(f),x.forEach(f),w.forEach(f),this.h()},h(){a(s,"class","footer-title svelte-177tjni"),a(b,"class","footer-paragraph"),a(e,"class","left"),Ce(I.src,L="/images/logo.png")||a(I,"src",L),a(I,"alt","C.A. Micro Credit Enterprise Logo"),a(I,"class","logo-footer svelte-177tjni"),a(E,"class","right svelte-177tjni"),a(i,"class","top svelte-177tjni"),a(q,"class","svelte-177tjni"),a(O,"class","footer-paragraph"),a(j,"class","left"),a(T,"class","footer-a svelte-177tjni"),a(T,"href","https://joshlucpoll.dev"),a(T,"target","_blank"),a(T,"rel","noopener noreferrer"),a(G,"class","footer-a svelte-177tjni"),a(G,"target","_blank"),a(G,"href","https://icons8.com"),a(S,"class","footer-paragraph"),a(C,"class","right svelte-177tjni"),a(y,"class","bottom svelte-177tjni"),a(n,"class","svelte-177tjni")},m(h,w){$&&$.m(h,w),J(h,o,w),J(h,n,w),r(n,i),r(i,e),r(e,s),r(s,l),r(s,c),r(s,m),r(e,v),r(e,b),r(b,M),r(i,H),r(i,E),r(E,I),r(n,k),r(n,q),r(n,F),r(n,y),r(y,j),r(j,O),r(O,V),r(O,d),r(y,P),r(y,C),r(C,S),r(S,B),r(S,T),r(T,ee),r(S,te),r(S,G),r(G,se),Y=!0},p(h,w){$&&$.p&&(!Y||w&32)&&be($,le,h,h[5],Y?ye(le,h[5],w,null):Ee(h[5]),null)},i(h){Y||(Q($,h),Y=!0)},o(h){X($,h),Y=!1},d(h){$&&$.d(h),h&&f(o),h&&f(n)}}}function Ye(t){let o=!1,n=()=>{o=!1},i,e,s,l,c,m,v,b,M,H,E,I,L,k,q,F,y,j,O,V;return ke(t[4]),y=new Ve({props:{url:t[0],$$slots:{default:[Be]},$$scope:{ctx:t}}}),{c(){e=_("nav"),s=_("a"),l=_("img"),m=R(),v=_("div"),b=_("a"),M=A("Home"),H=R(),E=_("a"),I=A("Stories"),L=R(),k=_("a"),q=A("Contact"),F=R(),Ae(y.$$.fragment),this.h()},l(u){e=p(u,"NAV",{class:!0});var d=g(e);s=p(d,"A",{href:!0,class:!0,"sveltekit:noscroll":!0});var P=g(s);l=p(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(f),m=D(d),v=p(d,"DIV",{class:!0});var C=g(v);b=p(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var S=g(b);M=N(S,"Home"),S.forEach(f),H=D(C),E=p(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var B=g(E);I=N(B,"Stories"),B.forEach(f),L=D(C),k=p(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var T=g(k);q=N(T,"Contact"),T.forEach(f),C.forEach(f),d.forEach(f),F=D(u),Ne(y.$$.fragment,u),this.h()},h(){Ce(l.src,c="/images/logo.png")||a(l,"src",c),a(l,"alt","C.A. Micro Credit Enterprise Logo"),a(l,"class","logo-nav svelte-177tjni"),a(s,"href","/"),a(s,"class","logo-nav-container svelte-177tjni"),a(s,"sveltekit:noscroll",""),a(b,"href","/"),a(b,"sveltekit:noscroll",""),z(b,"opacity",t[2].url.pathname=="/"?1:.5),a(b,"class","svelte-177tjni"),a(E,"href","/stories"),a(E,"sveltekit:noscroll",""),z(E,"opacity",t[2].url.pathname=="/stories"?1:.5),a(E,"class","svelte-177tjni"),a(k,"href","/contact"),a(k,"sveltekit:noscroll",""),z(k,"opacity",t[2].url.pathname=="/contact"?1:.5),a(k,"class","svelte-177tjni"),a(v,"class","links svelte-177tjni"),a(e,"class","svelte-177tjni"),ve(e,"nav-shadow",t[1]>0)},m(u,d){J(u,e,d),r(e,s),r(s,l),r(e,m),r(e,v),r(v,b),r(b,M),r(v,H),r(v,E),r(E,I),r(v,L),r(v,k),r(k,q),J(u,F,d),Me(y,u,d),j=!0,O||(V=Pe(window,"scroll",()=>{o=!0,clearTimeout(i),i=setTimeout(n,100),t[4]()}),O=!0)},p(u,[d]){d&2&&!o&&(o=!0,clearTimeout(i),scrollTo(window.pageXOffset,u[1]),i=setTimeout(n,100)),(!j||d&4)&&z(b,"opacity",u[2].url.pathname=="/"?1:.5),(!j||d&4)&&z(E,"opacity",u[2].url.pathname=="/stories"?1:.5),(!j||d&4)&&z(k,"opacity",u[2].url.pathname=="/contact"?1:.5),d&2&&ve(e,"nav-shadow",u[1]>0);const P={};d&1&&(P.url=u[0]),d&32&&(P.$$scope={dirty:d,ctx:u}),y.$set(P)},i(u){j||(Q(y.$$.fragment,u),j=!0)},o(u){X(y.$$.fragment,u),j=!1},d(u){u&&f(e),u&&f(F),Re(y,u),O=!1,V()}}}const Ke=async({url:t})=>({props:{url:t}});function ze(t,o,n){let i;De(t,qe,v=>n(2,i=v));let{$$slots:e={},$$scope:s}=o,{url:l}=o,c=0;function m(){n(1,c=window.pageYOffset)}return t.$$set=v=>{"url"in v&&n(0,l=v.url),"$$scope"in v&&n(5,s=v.$$scope)},[l,c,i,e,m,s]}class Qe extends he{constructor(o){super(),ge(this,o,ze,Ye,oe,{url:0})}}export{Qe as default,Ke as load};