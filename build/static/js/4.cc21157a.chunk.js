(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{37:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},42:function(e,t,c){"use strict";var n=c(38),a=c.n(n),r=c(39),s=c(36),i=c(1),o=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"content-Type":"aplication/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}};t.a=function(){var e=o(),t=e.loading,c=e.request,n=e.error,s=e.clearError,i="https://gateway.marvel.com:443/v1/public/",l="apikey=c5d6fc8b83116d92ed468ce36bac6c62",u=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(i,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(i,"characters/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",d(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(i,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(i,"comics/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},m=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,clearError:s,getAllCharacters:u,getCharacter:j,getAllComics:b,getComic:h}}},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(36),a=c(1),r=(c(45),c(42)),s=c.p+"static/media/mjolnir.61f31e18.png",i=c(13),o=c(37),l=c(0),u=function(e){var t,c=e.char,n=c.name,a=c.description,r=c.thumbnail,s=c.homepage,i=c.wiki;return t=(null===r||void 0===r?void 0:r.includes("image_not_available"))?"randomchar__img1":"randomchar__img",Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:t}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:n}),Object(l.jsx)("p",{className:"randomchar__descr",children:a||"not description"}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:s,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:i,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),c=t[0],j=t[1],b=Object(r.a)(),h=b.loading,d=b.error,m=b.getCharacter,O=b.clearError;Object(a.useEffect)((function(){p();var e=setInterval(p,6e5);return function(){clearInterval(e)}}),[]);var f=function(e){j(e)},p=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(f)},v=d?Object(l.jsx)(o.a,{}):null,x=h?Object(l.jsx)(i.a,{}):null,_=h||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:function(){p()},children:"try it"})}),Object(l.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(44),h=(c(46),function(e){var t=e.onCharSelected,c=Object(a.useState)([]),s=Object(n.a)(c,2),u=s[0],j=s[1],h=Object(a.useState)(!1),d=Object(n.a)(h,2),m=d[0],O=d[1],f=Object(a.useState)(210),p=Object(n.a)(f,2),v=p[0],x=p[1],_=Object(a.useState)(!1),g=Object(n.a)(_,2),N=g[0],k=g[1],y=Object(r.a)(),w=y.loading,C=y.error,S=y.getAllCharacters;Object(a.useEffect)((function(){E(v,!0)}),[]);var E=function(e,t){O(!t),S(e).then(F)},F=function(e){var t=!1;e.length<9&&(t=!0),j((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),O((function(e){return!1})),x((function(e){return e+9})),k((function(e){return t}))},A=function(e){var c=e.map((function(e,c){var n=e.name,a=e.thumbnail,r=e.id,s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(s={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",onClick:function(){return t(r)},children:[Object(l.jsx)("img",{src:a,alt:"abyss",style:s}),Object(l.jsx)("div",{className:"char__name",children:n})]},r)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(u),I=C?Object(l.jsx)(o.a,{}):null,T=w&&!m?Object(l.jsx)(i.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[I,T,A,Object(l.jsx)("button",{className:"button button__main button__long",disable:m.toString(),style:{display:N?"none":"block"},onClick:function(){return E(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=(c(47),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),m=(c(48),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"there is no comics with this character",i.map((function(e,t){return t>9?null:Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),O=function(e){var t=e.charId,c=Object(a.useState)(),s=Object(n.a)(c,2),u=s[0],j=s[1],b=Object(r.a)(),h=b.loading,O=b.error,f=b.getCharacter,p=b.clearError;Object(a.useEffect)((function(){v()}),[]),Object(a.useEffect)((function(){v()}),[t]);var v=function(){t&&(p(),f(t).then(x))},x=function(e){j(e)},_=u||h||O?null:Object(l.jsx)(d,{}),g=O?Object(l.jsx)(o.a,{}):null,N=h?Object(l.jsx)(i.a,{}):null,k=h||O||!u?null:Object(l.jsx)(m,{char:u});return Object(l.jsxs)("div",{className:"char__info",children:[_,g,N,k]})},f=c(49),p=c(50),v=c(55),x=c(54),_=function(e){Object(v.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(f.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(p.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:!0}}}]),c}(a.Component),g=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(_,{children:Object(l.jsx)(h,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)(_,{children:Object(l.jsx)(O,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.cc21157a.chunk.js.map