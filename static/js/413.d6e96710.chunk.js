"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{413:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),o=t(791),i=t(87),a="home_mainContainer__f0laO",c="home_homeList__qfgmY",s="home_homeLink__xf9OY",u=t(184),f=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),f=n[0],h=n[1];return(0,o.useEffect)((function(){t(359)("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWYyMTNmNDEzNWFmMTA4MDIwOTA3ZmU2MmExNzY5NiIsInN1YiI6IjY1OWI5Zjc3YmQ1ODhiMjA5OThkMjU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhVy7DUa-03q9UhnqfFekYC87ll43BYobHKSzDzzByk"}}).then((function(e){return e.json()})).then((function(e){return h(e.results)})).catch((function(e){return console.error("error:"+e)}))}),[]),(0,u.jsxs)("main",{className:a,children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsxs)("ul",{className:c,children:["",f.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"movies/".concat(e.id),className:s,children:e.title})},e.id)}))]})]})}},359:function(e,n,t){var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=n=r.fetch,r.fetch&&(n.default=r.fetch.bind(r)),n.Headers=r.Headers,n.Request=r.Request,n.Response=r.Response}}]);
//# sourceMappingURL=413.d6e96710.chunk.js.map