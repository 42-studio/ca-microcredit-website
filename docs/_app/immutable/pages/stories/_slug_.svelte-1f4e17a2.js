import{S as H,i as M,s as P,e as d,t as j,c as m,a as b,h as q,d as v,b as h,g as A,I as u,j as G,k as D,m as L,U as R,n as S,L as z}from"../../chunks/index-8ccbaca9.js";import{s as F}from"../../chunks/stories-8e9c98de.js";function V(n,e,s){const i=n.slice();return i[1]=e[s],i}function x(n){let e,s=n[1]+"",i;return{c(){e=d("p"),i=j(s),this.h()},l(l){e=m(l,"P",{class:!0});var r=b(e);i=q(r,s),r.forEach(v),this.h()},h(){h(e,"class","svelte-1lbnokh")},m(l,r){A(l,e,r),u(e,i)},p(l,r){r&1&&s!==(s=l[1]+"")&&G(i,s)},d(l){l&&v(e)}}}function J(n){let e,s,i,l,r,y,E,I,_,g,k=n[0].title+"",U,w,p=n[0].text,o=[];for(let t=0;t<p.length;t+=1)o[t]=x(V(n,p,t));return{c(){e=d("div"),s=d("a"),i=j("Back to stories"),l=D(),r=d("img"),I=D(),_=d("div"),g=d("h1"),U=j(k),w=D();for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=m(t,"DIV",{class:!0});var c=b(e);s=m(c,"A",{class:!0,href:!0,"sveltekit:noscroll":!0});var a=b(s);i=q(a,"Back to stories"),a.forEach(v),l=L(c),r=m(c,"IMG",{src:!0,alt:!0,class:!0}),I=L(c),_=m(c,"DIV",{class:!0});var f=b(_);g=m(f,"H1",{});var C=b(g);U=q(C,k),C.forEach(v),w=L(f);for(let B=0;B<o.length;B+=1)o[B].l(f);f.forEach(v),c.forEach(v),this.h()},h(){h(s,"class","back svelte-1lbnokh"),h(s,"href","/stories"),h(s,"sveltekit:noscroll",""),R(r.src,y=n[0].imageURL)||h(r,"src",y),h(r,"alt",E=n[0].title),h(r,"class","svelte-1lbnokh"),h(_,"class","story-wrapper svelte-1lbnokh"),h(e,"class","wrapper svelte-1lbnokh")},m(t,c){A(t,e,c),u(e,s),u(s,i),u(e,l),u(e,r),u(e,I),u(e,_),u(_,g),u(g,U),u(_,w);for(let a=0;a<o.length;a+=1)o[a].m(_,null)},p(t,[c]){if(c&1&&!R(r.src,y=t[0].imageURL)&&h(r,"src",y),c&1&&E!==(E=t[0].title)&&h(r,"alt",E),c&1&&k!==(k=t[0].title+"")&&G(U,k),c&1){p=t[0].text;let a;for(a=0;a<p.length;a+=1){const f=V(t,p,a);o[a]?o[a].p(f,c):(o[a]=x(f),o[a].c(),o[a].m(_,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=p.length}},i:S,o:S,d(t){t&&v(e),z(o,t)}}}async function Q({params:n}){let e=n.slug.replace("-"," ");return e=e.split(" ").map(l=>l[0].toUpperCase()+l.substring(1)).join(" "),{props:{story:F.find(l=>l.title==e)}}}function K(n,e,s){let{story:i}=e;return n.$$set=l=>{"story"in l&&s(0,i=l.story)},[i]}class T extends H{constructor(e){super(),M(this,e,K,J,P,{story:0})}}export{T as default,Q as load};
