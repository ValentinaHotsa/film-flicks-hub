"use strict";(self.webpackChunkfilm_flicks_hub=self.webpackChunkfilm_flicks_hub||[]).push([[597],{597:function(e,i,t){t.r(i);var a=t(439),s=t(791),n=t(689),o=t(403),r=t(184);i.default=function(){var e=(0,n.UO)().movieId,i=(0,s.useState)([]),c=(0,a.Z)(i,2),_=c[0],l=c[1];return(0,s.useEffect)((function(){t(359)("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWYyMTNmNDEzNWFmMTA4MDIwOTA3ZmU2MmExNzY5NiIsInN1YiI6IjY1OWI5Zjc3YmQ1ODhiMjA5OThkMjU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhVy7DUa-03q9UhnqfFekYC87ll43BYobHKSzDzzByk"}}).then((function(e){return e.json()})).then((function(e){return l(e.cast)})).catch((function(e){return console.error("error:"+e)}))}),[e]),(0,r.jsx)("div",{className:o.Z.containerCast,children:(0,r.jsx)("ul",{className:o.Z.listCast,children:_.map((function(e){return(0,r.jsxs)("li",{className:o.Z.itemCast,children:[e.profile_path?(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name,className:o.Z.imgCast}):(0,r.jsx)("p",{className:o.Z.notificationImg,children:"No image"}),(0,r.jsxs)("div",{className:o.Z.containerName,children:[(0,r.jsxs)("h4",{className:o.Z.nameCast,children:["Actor: ",e.name]}),(0,r.jsxs)("p",{className:o.Z.characterCast,children:["Character: ",e.character]})]})]},e.cast_id)}))})})}},359:function(e,i,t){var a=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=i=a.fetch,a.fetch&&(i.default=a.fetch.bind(a)),i.Headers=a.Headers,i.Request=a.Request,i.Response=a.Response},403:function(e,i){i.Z={infoContainer:"movieDetails_infoContainer__6C6Uo",containerMovieDetails:"movieDetails_containerMovieDetails__1iyYh",button:"movieDetails_button__GlsHB",containerImgInfo:"movieDetails_containerImgInfo__NgNMM",movieImg:"movieDetails_movieImg__kDVXP",genresList:"movieDetails_genresList__WLquf",listMore:"movieDetails_listMore__GUPXN",linkInfo:"movieDetails_linkInfo__sXcpW",overview:"movieDetails_overview__VlB91",containerInfo:"movieDetails_containerInfo__5iROh",genre:"movieDetails_genre__4XpXy",genresTitle:"movieDetails_genresTitle__HQMky",genresItem:"movieDetails_genresItem__c-cqI",titleMovie:"movieDetails_titleMovie__k4NvL",containerListMore:"movieDetails_containerListMore__D5FEd",notification:"movieDetails_notification__Jy55m",containerReviews:"movieDetails_containerReviews__3Hx5-",authorReviews:"movieDetails_authorReviews__xl+Gt",itemReviews:"movieDetails_itemReviews__wWWem",listReviews:"movieDetails_listReviews__al8Tu",contentReviews:"movieDetails_contentReviews__Fs4cf",listCast:"movieDetails_listCast__gMpKz",itemCast:"movieDetails_itemCast__LJgBS",imgCast:"movieDetails_imgCast__pGq27",nameCast:"movieDetails_nameCast__eyapY",characterCast:"movieDetails_characterCast__hA4Dx",notificationImg:"movieDetails_notificationImg__iwo0K"}}}]);
//# sourceMappingURL=597.c4ead4a5.chunk.js.map