(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{42:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},43:function(e,t,c){"use strict";var n=c(10),r=c.n(n),a=c(16),i=c(15),s=c(1),o=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],p=u[1];return{loading:c,request:Object(s.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,i,s,o,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"content-Type":"aplication/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:i});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),p(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(s.useCallback)((function(){return p(null)}),[])}};t.a=function(){var e=o(),t=e.loading,c=e.request,n=e.error,i=e.clearError,s="https://gateway.marvel.com:443/v1/public/",u="apikey=c5d6fc8b83116d92ed468ce36bac6c62",l=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",d(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},h=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,clearError:i,getAllCharacters:l,getCharacter:p,getAllComics:m,getComic:b}}},51:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(15),r=c(2),a=c(8),i=c(1),s=c(43),o=c(17),u=c(42),l=(c(51),c.p,c(0)),p=function(e){var t=e.comic,c=t.title,n=t.description,r=t.pageCount,i=t.thumbnail,s=t.language,o=t.price;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:i,alt:c,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:c}),Object(l.jsx)("p",{className:"single-comic__descr",children:n}),Object(l.jsx)("p",{className:"single-comic__descr",children:r}),Object(l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",s]}),Object(l.jsx)("div",{className:"single-comic__price",children:o})]}),Object(l.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(r.f)().comicId,t=Object(i.useState)(null),c=Object(n.a)(t,2),a=c[0],m=c[1],b=Object(s.a)(),d=b.loading,h=b.error,f=b.getComic,j=b.clearError;Object(i.useEffect)((function(){g()}),[e]);var g=function(){j(),f(e).then(v)},v=function(e){m(e)},x=h?Object(l.jsx)(u.a,{}):null,O=d?Object(l.jsx)(o.a,{}):null,w=d||h||!a?null:Object(l.jsx)(p,{comic:a});return Object(l.jsxs)(l.Fragment,{children:[x,O,w]})}}}]);
//# sourceMappingURL=5.144989ce.chunk.js.map