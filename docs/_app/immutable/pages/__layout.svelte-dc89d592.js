import{S as he,i as ge,s as oe,e as v,c as m,a as y,d as p,g as K,F as ye,G as Ee,H as ke,I as Ce,r as X,J as be,K as Te,p as U,L as Se,l as pe,o as Oe,n as Ae,q as Ie,M as we,k as M,t as O,x as Pe,m as D,h as A,y as Ne,N as $e,b as l,f as J,O as ve,P as s,z as Me,C as De,Q as He}from"../chunks/index-188bc1c2.js";import{p as je}from"../chunks/stores-a237c579.js";function qe(r){const a=r-1;return a*a*a+1}function me(r,{delay:a=0,duration:n=400,easing:c=qe,x:e=0,y:t=0,opacity:i=0}={}){const d=getComputedStyle(r),f=+d.opacity,o=d.transform==="none"?"":d.transform,u=f*(1-i);return{delay:a,duration:n,easing:c,css:(P,H)=>`
			transform: ${o} translate(${(1-P)*e}px, ${(1-P)*t}px);
			opacity: ${f-u*H}`}}function de(r){let a,n,c,e,t,i;const d=r[2].default,f=we(d,r,r[1],null);return{c(){a=v("div"),f&&f.c()},l(o){a=m(o,"DIV",{});var u=y(a);f&&f.l(u),u.forEach(p)},m(o,u){K(o,a,u),f&&f.m(a,null),e=!0,t||(i=ye(a,"outroend",r[3]),t=!0)},p(o,u){r=o,f&&f.p&&(!e||u&2)&&Ee(f,d,r,r[1],e?Ce(d,r[1],u,null):ke(r[1]),null)},i(o){e||(X(f,o),be(()=>{c&&c.end(1),n=Te(a,me,{opacity:0,duration:ae,delay:ae}),n.start()}),e=!0)},o(o){U(f,o),n&&n.invalidate(),c=Se(a,me,{opacity:0,duration:ae}),e=!1},d(o){o&&p(a),f&&f.d(o),o&&c&&c.end(),t=!1,i()}}}function Fe(r){let a=r[0],n,c,e=de(r);return{c(){e.c(),n=pe()},l(t){e.l(t),n=pe()},m(t,i){e.m(t,i),K(t,n,i),c=!0},p(t,[i]){i&1&&oe(a,a=t[0])?(Oe(),U(e,1,1,Ae),Ie(),e=de(t),e.c(),X(e,1),e.m(n.parentNode,n)):e.p(t,i)},i(t){c||(X(e),c=!0)},o(t){U(e),c=!1},d(t){t&&p(n),e.d(t)}}}const ae=500;function Ge(r,a,n){let{$$slots:c={},$$scope:e}=a,{url:t=""}=a;const i=()=>window.scrollTo(0,0);return r.$$set=d=>{"url"in d&&n(0,t=d.url),"$$scope"in d&&n(1,e=d.$$scope)},[t,e,c,i]}class Le extends he{constructor(a){super(),ge(this,a,Ge,Fe,oe,{url:0})}}function Re(r){let a,n,c,e,t,i,d,f,o,u,P,H,E,I,R,b,F,G,k,w,$,V,_=new Date().getFullYear()+"",h,N,C,Y,z,j,L,te,q,se,B;const le=r[3].default,T=we(le,r,r[5],null);return{c(){T&&T.c(),a=M(),n=v("footer"),c=v("section"),e=v("section"),t=v("p"),i=O("C.A. Mirco Credit"),d=v("br"),f=O("Enterprise"),o=M(),u=v("p"),P=O("Some rights reserved"),H=M(),E=v("section"),I=v("img"),b=M(),F=v("hr"),G=M(),k=v("section"),w=v("section"),$=v("p"),V=O("\xA9 "),h=O(_),N=O(` \u2022
          `),C=v("a"),Y=O("Privacy Policy"),z=M(),j=v("section"),L=v("p"),te=O("website by "),q=v("a"),se=O("joshlucpoll"),this.h()},l(g){T&&T.l(g),a=D(g),n=m(g,"FOOTER",{class:!0});var S=y(n);c=m(S,"SECTION",{class:!0});var W=y(c);e=m(W,"SECTION",{class:!0});var Z=y(e);t=m(Z,"P",{class:!0});var x=y(t);i=A(x,"C.A. Mirco Credit"),d=m(x,"BR",{}),f=A(x,"Enterprise"),x.forEach(p),o=D(Z),u=m(Z,"P",{class:!0});var ne=y(u);P=A(ne,"Some rights reserved"),ne.forEach(p),Z.forEach(p),H=D(W),E=m(W,"SECTION",{class:!0});var ce=y(E);I=m(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(p),W.forEach(p),b=D(S),F=m(S,"HR",{class:!0}),G=D(S),k=m(S,"SECTION",{class:!0});var ee=y(k);w=m(ee,"SECTION",{class:!0});var ie=y(w);$=m(ie,"P",{class:!0});var Q=y($);V=A(Q,"\xA9 "),h=A(Q,_),N=A(Q,` \u2022
          `),C=m(Q,"A",{class:!0,href:!0,"sveltekit:noscroll":!0});var ue=y(C);Y=A(ue,"Privacy Policy"),ue.forEach(p),Q.forEach(p),ie.forEach(p),z=D(ee),j=m(ee,"SECTION",{class:!0});var fe=y(j);L=m(fe,"P",{class:!0});var re=y(L);te=A(re,"website by "),q=m(re,"A",{class:!0,href:!0,target:!0,rel:!0});var _e=y(q);se=A(_e,"joshlucpoll"),_e.forEach(p),re.forEach(p),fe.forEach(p),ee.forEach(p),S.forEach(p),this.h()},h(){l(t,"class","footer-title svelte-r6a73s"),l(u,"class","footer-paragraph"),l(e,"class","left"),$e(I.src,R="/images/logo.png")||l(I,"src",R),l(I,"alt","C.A. Micro Credit Enterprise Logo"),l(I,"class","logo-footer svelte-r6a73s"),l(E,"class","right svelte-r6a73s"),l(c,"class","top svelte-r6a73s"),l(F,"class","svelte-r6a73s"),l(C,"class","footer-a svelte-r6a73s"),l(C,"href","/privacy"),l(C,"sveltekit:noscroll",""),l($,"class","footer-paragraph"),l(w,"class","left"),l(q,"class","footer-a svelte-r6a73s"),l(q,"href","https://joshlucpoll.dev"),l(q,"target","_blank"),l(q,"rel","noopener noreferrer"),l(L,"class","footer-paragraph"),l(j,"class","right svelte-r6a73s"),l(k,"class","bottom svelte-r6a73s"),l(n,"class","svelte-r6a73s")},m(g,S){T&&T.m(g,S),K(g,a,S),K(g,n,S),s(n,c),s(c,e),s(e,t),s(t,i),s(t,d),s(t,f),s(e,o),s(e,u),s(u,P),s(c,H),s(c,E),s(E,I),s(n,b),s(n,F),s(n,G),s(n,k),s(k,w),s(w,$),s($,V),s($,h),s($,N),s($,C),s(C,Y),s(k,z),s(k,j),s(j,L),s(L,te),s(L,q),s(q,se),B=!0},p(g,S){T&&T.p&&(!B||S&32)&&Ee(T,le,g,g[5],B?Ce(le,g[5],S,null):ke(g[5]),null)},i(g){B||(X(T,g),B=!0)},o(g){U(T,g),B=!1},d(g){T&&T.d(g),g&&p(a),g&&p(n)}}}function Ve(r){let a=!1,n=()=>{a=!1},c,e,t,i,d,f,o,u,P,H,E,I,R,b,F,G,k,w,$,V;return be(r[4]),k=new Le({props:{url:r[0],$$slots:{default:[Re]},$$scope:{ctx:r}}}),{c(){e=v("nav"),t=v("a"),i=v("img"),f=M(),o=v("div"),u=v("a"),P=O("Home"),H=M(),E=v("a"),I=O("Stories"),R=M(),b=v("a"),F=O("Contact"),G=M(),Pe(k.$$.fragment),this.h()},l(_){e=m(_,"NAV",{class:!0});var h=y(e);t=m(h,"A",{href:!0,class:!0,"sveltekit:noscroll":!0});var N=y(t);i=m(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(p),f=D(h),o=m(h,"DIV",{class:!0});var C=y(o);u=m(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var Y=y(u);P=A(Y,"Home"),Y.forEach(p),H=D(C),E=m(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var z=y(E);I=A(z,"Stories"),z.forEach(p),R=D(C),b=m(C,"A",{href:!0,"sveltekit:noscroll":!0,style:!0,class:!0});var j=y(b);F=A(j,"Contact"),j.forEach(p),C.forEach(p),h.forEach(p),G=D(_),Ne(k.$$.fragment,_),this.h()},h(){$e(i.src,d="/images/logo.png")||l(i,"src",d),l(i,"alt","C.A. Micro Credit Enterprise Logo"),l(i,"class","logo-nav svelte-r6a73s"),l(t,"href","/"),l(t,"class","logo-nav-container svelte-r6a73s"),l(t,"sveltekit:noscroll",""),l(u,"href","/"),l(u,"sveltekit:noscroll",""),J(u,"opacity",r[2].url.pathname=="/"?1:.5),l(u,"class","svelte-r6a73s"),l(E,"href","/stories"),l(E,"sveltekit:noscroll",""),J(E,"opacity",r[2].url.pathname=="/stories"?1:.5),l(E,"class","svelte-r6a73s"),l(b,"href","/contact"),l(b,"sveltekit:noscroll",""),J(b,"opacity",r[2].url.pathname=="/contact"?1:.5),l(b,"class","svelte-r6a73s"),l(o,"class","links svelte-r6a73s"),l(e,"class","svelte-r6a73s"),ve(e,"nav-shadow",r[1]>0)},m(_,h){K(_,e,h),s(e,t),s(t,i),s(e,f),s(e,o),s(o,u),s(u,P),s(o,H),s(o,E),s(E,I),s(o,R),s(o,b),s(b,F),K(_,G,h),Me(k,_,h),w=!0,$||(V=ye(window,"scroll",()=>{a=!0,clearTimeout(c),c=setTimeout(n,100),r[4]()}),$=!0)},p(_,[h]){h&2&&!a&&(a=!0,clearTimeout(c),scrollTo(window.pageXOffset,_[1]),c=setTimeout(n,100)),(!w||h&4)&&J(u,"opacity",_[2].url.pathname=="/"?1:.5),(!w||h&4)&&J(E,"opacity",_[2].url.pathname=="/stories"?1:.5),(!w||h&4)&&J(b,"opacity",_[2].url.pathname=="/contact"?1:.5),h&2&&ve(e,"nav-shadow",_[1]>0);const N={};h&1&&(N.url=_[0]),h&32&&(N.$$scope={dirty:h,ctx:_}),k.$set(N)},i(_){w||(X(k.$$.fragment,_),w=!0)},o(_){U(k.$$.fragment,_),w=!1},d(_){_&&p(e),_&&p(G),De(k,_),$=!1,V()}}}const Je=async({url:r})=>({props:{url:r}});function Ye(r,a,n){let c;He(r,je,o=>n(2,c=o));let{$$slots:e={},$$scope:t}=a,{url:i}=a,d=0;function f(){n(1,d=window.pageYOffset)}return r.$$set=o=>{"url"in o&&n(0,i=o.url),"$$scope"in o&&n(5,t=o.$$scope)},[i,d,c,e,f,t]}class Ke extends he{constructor(a){super(),ge(this,a,Ye,Ve,oe,{url:0})}}export{Ke as default,Je as load};
