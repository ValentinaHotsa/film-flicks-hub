"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{758:function(e,i,t){t.r(i);var s=t(439),n=t(689),a=t(791),o=t(87),r=t(403),l=t(184);i.default=function(){var e,i,c=null!==(e=null===(i=(0,n.TH)().state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/",_=(0,n.UO)().movieId,m=(0,a.useState)({}),v=(0,s.Z)(m,2),f=v[0],h=v[1];(0,a.useEffect)((function(){t(359)("https://api.themoviedb.org/3/movie/".concat(_,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWYyMTNmNDEzNWFmMTA4MDIwOTA3ZmU2MmExNzY5NiIsInN1YiI6IjY1OWI5Zjc3YmQ1ODhiMjA5OThkMjU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhVy7DUa-03q9UhnqfFekYC87ll43BYobHKSzDzzByk"}}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.error("error:"+e)}))}),[_]);var d=f.release_date?f.release_date.substring(0,4):"",u=f.vote_average?f.vote_average.toFixed(1):"";return(0,l.jsxs)("section",{className:r.Z.infoContainer,children:[(0,l.jsx)(o.OL,{to:c,children:(0,l.jsx)("button",{className:r.Z.button,children:"Back"})}),(0,l.jsxs)("div",{className:r.Z.containerMovieDetails,children:[(0,l.jsxs)("h2",{className:r.Z.titleMovie,children:[f.title," (",d,")"]}),(0,l.jsxs)("p",{children:["User Score: ",u]}),(0,l.jsxs)("div",{className:r.Z.containerImgInfo,children:[f.poster_path&&(0,l.jsx)("img",{className:r.Z.img,src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title}),(0,l.jsxs)("div",{className:r.Z.containerInfo,children:[(0,l.jsxs)("b",{className:r.Z.genresTitle,children:["Genres:",(0,l.jsx)("div",{className:r.Z.qwer,children:f.genres&&f.genres.map((function(e){return(0,l.jsx)("b",{className:r.Z.genresItem,children:e.name},e.id)}))})," "]}),(0,l.jsx)("p",{className:r.Z.overview,children:f.overview}),(0,l.jsx)("div",{className:r.Z.containerListMore,children:(0,l.jsxs)("ul",{className:r.Z.listMore,children:[(0,l.jsx)("li",{className:r.Z.itemMore,children:(0,l.jsx)(o.OL,{to:"cast",state:{from:c},className:r.Z.linkInfo,children:"Cast"})}),(0,l.jsx)("li",{className:r.Z.itemMore,children:(0,l.jsx)(o.rU,{to:"reviews",state:{from:c},className:r.Z.linkInfo,children:"Reviews"})})]})})]})]}),(0,l.jsx)(n.j3,{})]})]})}},359:function(e,i,t){var s=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=i=s.fetch,s.fetch&&(i.default=s.fetch.bind(s)),i.Headers=s.Headers,i.Request=s.Request,i.Response=s.Response},403:function(e,i){i.Z={button:"movieDetails_button__GlsHB",infoContainer:"movieDetails_infoContainer__6C6Uo",img:"movieDetails_img__TAfiN",genresList:"movieDetails_genresList__WLquf",containerImgInfo:"movieDetails_containerImgInfo__NgNMM",titleMovie:"movieDetails_titleMovie__k4NvL",containerMovieDetails:"movieDetails_containerMovieDetails__1iyYh",genresTitle:"movieDetails_genresTitle__HQMky",genresItem:"movieDetails_genresItem__c-cqI",containerInfo:"movieDetails_containerInfo__5iROh",qwer:"movieDetails_qwer__jn4Ha",overview:"movieDetails_overview__VlB91",listMore:"movieDetails_listMore__GUPXN",linkInfo:"movieDetails_linkInfo__sXcpW",containerListMore:"movieDetails_containerListMore__D5FEd",notification:"movieDetails_notification__Jy55m",containerReviews:"movieDetails_containerReviews__3Hx5-",authorReviews:"movieDetails_authorReviews__xl+Gt",itemReviews:"movieDetails_itemReviews__wWWem",listReviews:"movieDetails_listReviews__al8Tu",contentReviews:"movieDetails_contentReviews__Fs4cf",listCast:"movieDetails_listCast__gMpKz",itemCast:"movieDetails_itemCast__LJgBS",imgCast:"movieDetails_imgCast__pGq27",nameCast:"movieDetails_nameCast__eyapY",characterCast:"movieDetails_characterCast__hA4Dx",notificationImg:"movieDetails_notificationImg__iwo0K",containerName:"movieDetails_containerName__UsXwT"}}}]);
//# sourceMappingURL=758.940066ea.chunk.js.map