"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{1375:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a,s,i,c,u,o=t(9439),p=t(7689),d=t(1087),l=t(2791),f=t(8480),h=t(168),v=t(6444),x=v.ZP.img(r||(r=(0,h.Z)(["\n  width: 50%;\n"]))),m=v.ZP.span(a||(a=(0,h.Z)(["\n  font-weight: 700;\n"]))),Z=(0,v.ZP)(d.rU)(s||(s=(0,h.Z)(["\n  padding: 16px 0px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  color: blue;\n"]))),w=v.ZP.div(i||(i=(0,h.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),g=v.ZP.ul(c||(c=(0,h.Z)(["\n  list-style: none;\n  padding: 16px 0px;\n"]))),j=v.ZP.li(u||(u=(0,h.Z)(["\n  text-decoration: none;\n  color: blue;\n"]))),k=t(184),b=function(){var e,n=(0,l.useState)(""),t=(0,o.Z)(n,2),r=t[0],a=t[1],s=(0,l.useState)(""),i=(0,o.Z)(s,2),c=i[0],u=i[1],h=(0,l.useState)(""),v=(0,o.Z)(h,2),b=v[0],y=v[1],_=(0,l.useState)(""),P=(0,o.Z)(_,2),S=P[0],U=P[1],q=(0,l.useState)([]),G=(0,o.Z)(q,2),C=G[0],L=G[1],O=(0,l.useState)(""),R=(0,o.Z)(O,2),W=R[0],A=R[1],B=(0,p.UO)().movieId,D=(null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,l.useEffect)((function(){try{(0,f.Pg)(B).then((function(e){a(e.title),u(e.release_date),y(e.overview),null===e.poster_path?U("https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"):U("https://image.tmdb.org/t/p/original/".concat(e.poster_path)),L(e.genres),A(e.vote_average)}))}catch(e){console.log(e)}}),[B]),(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{to:D,children:"Back to movies"}),(0,k.jsx)("h2",{children:r}),(0,k.jsxs)("p",{children:[(0,k.jsx)(m,{children:"Date:"})," ",c]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(m,{children:"User Score:"})," ",W]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(m,{children:"Overview:"})," ",b]}),(0,k.jsx)(x,{src:S,alt:"poster"}),(0,k.jsxs)("p",{children:[(0,k.jsx)(m,{children:"Genres:"})," ",C.map((function(e){return e.name})).join(", ")]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(j,{children:(0,k.jsx)(d.rU,{to:"cast",state:{from:D},children:"Read about a cast"})}),(0,k.jsx)(j,{children:(0,k.jsx)(d.rU,{to:"reviews",state:{from:D},children:"Get to know the reviews"})})]}),(0,k.jsx)(l.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(p.j3,{})})]})}},8480:function(e,n,t){t.d(n,{Aj:function(){return u},Pg:function(){return o},WG:function(){return p},W_:function(){return l},Yc:function(){return d}});var r=t(5861),a=t(7757),s=t.n(a),i=t(1243),c="19c88c04b5d6ef941f0dea95d7f513c3";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("trending/movie/day",{params:{page:n,api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("movie/".concat(n),{params:{query:n,api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("search/movie",{params:{query:n,page:t,api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("movie/".concat(n,"/credits"),{params:{query:n,api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(n,"/reviews"),{params:{query:n,api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=375.e69f9c12.chunk.js.map