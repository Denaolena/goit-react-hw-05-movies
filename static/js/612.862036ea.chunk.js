"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[612],{3535:function(n,t,e){e.d(t,{z:function(){return c}});e(2791);var r,a=e(168),i=e(6444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: blue;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 100%;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: blue;\n    color: white;\n    border: 2px solid blue;\n  }\n"]))),o=e(184),c=function(n){var t=n.text,e=n.type,r=n.onClick;return(0,o.jsx)(i,{type:e,onClick:r,children:t})}},854:function(n,t,e){var r=e(5243),a=e(184);t.Z=function(){return(0,a.jsx)(r.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center"},wrapperClass:"",visible:!0})}},612:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,a,i,o,c,p,s,u,l,d,x=e(3433),f=e(9439),h=e(7689),m=e(1087),b=e(2791),g=e(168),v=e(6444),w=v.ZP.header(r||(r=(0,g.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: blue;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Z=v.ZP.form(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),y=v.ZP.button(i||(i=(0,g.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),k=v.ZP.span(o||(o=(0,g.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=v.ZP.input(c||(c=(0,g.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),_=v.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px;\n  padding: 0;\n  list-style: none;\n"]))),P=v.ZP.img(s||(s=(0,g.Z)(["\n  max-width: 180px;\n  height: 270px;\n"]))),C=v.ZP.li(u||(u=(0,g.Z)(["\n  max-width: 200px;\n  margin: 10px;\n"]))),N=v.ZP.p(l||(l=(0,g.Z)(["\n  max-width: 180px;\n  margin: 5px 0;\n  font-size: 16px;\n  text-decoration: none;\n  color: black;\n  text-align: center;\n"]))),z=v.ZP.p(d||(d=(0,g.Z)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]))),S=e(9135),I=e(3535),L=e(854),q=e(8480),G=e(5984),O=e(184),R=function(){var n=(0,h.TH)(),t=(0,b.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1],i=(0,b.useState)(""),o=(0,f.Z)(i,2),c=o[0],p=o[1],s=(0,m.lr)(),u=(0,f.Z)(s,2),l=u[0],d=u[1],g=l.get("search"),v=(0,b.useState)(1),R=(0,f.Z)(v,2),W=R[0],A=R[1],D=(0,b.useState)(1),E=(0,f.Z)(D,2),U=E[0],F=E[1],Y=(0,b.useState)(""),H=(0,f.Z)(Y,2),K=H[0],T=H[1];(0,b.useEffect)((function(){if(""!==g){var n=(0,q.WG)(g,W);try{n.then((function(n){F(n.total_results);var t=n.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return null===r?{realId:(0,G.x0)(),id:t,title:e,poster_path:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}:{realId:(0,G.x0)(),id:t,title:e,poster_path:"https://image.tmdb.org/t/p/original/".concat(r)}}));a((function(n){return[].concat((0,x.Z)(n),(0,x.Z)(t))})),p("OK")}))}catch(t){p("ERROR")}}}),[g,W]);var B=function(){var n=Number(U%12);return 0===n?Number(U/12):Number.parseInt(U/12)+1};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(w,{children:(0,O.jsxs)(Z,{className:"form",onSubmit:function(n){n.preventDefault(),""!==K.trim()?K!==g&&(a([]),d({search:K}),p("LOADING"),T("")):alert("Enter a search word.")},children:[(0,O.jsx)(j,{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searchWord",value:K,onChange:function(n){return T(n.target.value.toLowerCase())}}),(0,O.jsxs)(y,{type:"submit",className:"button",children:[(0,O.jsx)(k,{className:"button-label",children:"Search"}),(0,O.jsx)(S.U41,{width:"48",height:"48"})]})]})}),(0,O.jsx)(_,{children:r.map((function(t){var e=t.realId,r=t.id,a=t.title,i=t.poster_path;return(0,O.jsx)(C,{children:(0,O.jsxs)(m.rU,{to:"".concat(r),state:{from:n},children:[(0,O.jsx)(P,{src:i,alt:"film poster"}),(0,O.jsx)(N,{children:a})]})},e)}))}),r.length>0&&W<B()&&(0,O.jsx)(I.z,{text:"Load more",type:"button",onClick:function(){A((function(n){return n+1}))}}),W===B()&&r.length>0&&(0,O.jsx)(z,{children:"You've reached the end of search results."}),"LOADING"===c&&(0,O.jsx)(L.Z,{})]})}},8480:function(n,t,e){e.d(t,{Aj:function(){return p},Pg:function(){return s},WG:function(){return u},W_:function(){return d},Yc:function(){return l}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243),c="19c88c04b5d6ef941f0dea95d7f513c3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{page:t,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t),{params:{query:t,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie",{params:{query:t,page:e,api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/credits"),{params:{query:t,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/reviews"),{params:{query:t,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=612.862036ea.chunk.js.map