(this["webpackJsonplast-life"]=this["webpackJsonplast-life"]||[]).push([[0],{79:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(0),i=t.n(r),c=t(24),o=t.n(c),s=t(7),d=t(48),l=t(8),m=t(4),u=t(15),b=t(6),p=function(n,e){return n?n.match(/media\/screenshots/)?n.replace("media/screnshots","media/resize/".concat(e,"/-/ screenshots")):n.replace("/media/games/","/media/resize/".concat(e,"/-/games/")):void 0},h=t.p+"static/media/playstation.d33d47d0.svg",g=t.p+"static/media/steam.d7b8819f.svg",j=t.p+"static/media/xbox.5c20be2a.svg",f=t.p+"static/media/nintendo.c6635301.svg",x=t.p+"static/media/apple.94d62011.svg",O=t.p+"static/media/gamepad.c35f956b.svg";function w(){var n=Object(s.a)(["\n  position: relative;\n\n  img {\n    display: block;\n  }\n"]);return w=function(){return n},n}function v(){var n=Object(s.a)(["\n  position: relative;\n  /* margin: 13rem 5rem 5rem 5rem; */\n\n  .description {\n    padding: 6rem 8rem;\n    color: black;\n\n    @media (max-width: 1200px) {\n      padding: 6rem 3rem;\n    }\n  }\n"]);return v=function(){return n},n}function A(){var n=Object(s.a)(["\n  .vote {\n    background: rgba(0, 0, 0, 0.6);\n    border: 1px solid white;\n    position: absolute;\n    bottom: 50px;\n    left: 50px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 1rem 2rem;\n    border-radius: 1rem;\n    min-width: 360px;\n    max-width: 40%;\n\n    @media (max-width: 1200px) {\n      display: none;\n    }\n\n    .vote-container {\n      /* border: 2px solid green; */\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n\n      .vote-title {\n        margin: 0.5rem 1rem;\n        color: white;\n        flex-basis: 50%;\n      }\n\n      .vote-count-bar {\n        background: white;\n        height: 0.5rem;\n        max-width: 40%;\n      }\n    }\n  }\n\n  .card-top-background-image {\n    width: 100%;\n    object-fit: cover;\n    object-position: top;\n    display: block;\n    max-height: 80vh;\n\n    @media (max-width: 1200px) {\n      min-height: 90vh;\n    }\n\n    @media (max-width: 800px) {\n      min-height: 70vh;\n    }\n  }\n\n  video {\n    z-index: 1;\n    width: 50%;\n    bottom: -40px;\n    right: 50px;\n    position: absolute;\n    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);\n\n    @media (max-width: 1200px) {\n      transform: translate(-50%, 0);\n      width: 80%;\n      bottom: -40px;\n      left: 50%;\n    }\n  }\n"]);return A=function(){return n},n}function y(){var n=Object(s.a)(["\n  @media (max-width: 1200px) {\n    position: absolute;\n    top: 0;\n    right: 20px;\n  }\n\n  .metacritic-score {\n    /* position: absolute;\n    top: -0.75rem;\n    right: -0.75rem; */\n    background: #333333;\n    height: fit-content;\n    border: 4px solid #ffcc34;\n    padding: 0rem 1.5rem;\n    border-radius: 1rem;\n    margin: 1.5rem 0rem;\n\n    p {\n      color: white;\n      font-weight: 900;\n      font-size: 4rem;\n    }\n  }\n\n  .not-available {\n    padding: 0.5rem 1rem;\n\n    p {\n      font-size: 4rem;\n    }\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-bottom: 2rem;\n\n  img {\n    margin: 0rem 1rem;\n    width: 70px;\n    height: 70px;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(s.a)(["\n  text-align: center;\n  margin-right: 2rem;\n  justify-self: flex-end;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n"]);return S=function(){return n},n}function E(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  padding: 0rem 2rem;\n  background: rgba(0, 0, 0, 0.4);\n\n  @media (max-width: 1200px) {\n    justify-content: space-between;\n    padding: 0rem 0.5rem;\n  }\n\n  .rating {\n    flex: auto;\n\n    @media (max-width: 1200px) {\n      flex: unset;\n      width: 60%;\n      margin: 0.5rem;\n    }\n  }\n\n  .publisher-name {\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.25rem;\n  }\n\n  .game-name {\n    font-size: 2rem;\n    margin-top: 1.5rem;\n    padding: 0;\n    font-weight: 900;\n\n    @media (max-width: 1200px) {\n      margin-top: 0.5rem;\n    }\n  }\n\n  .rating-container {\n    margin: 1rem 0rem;\n\n    a {\n      color: white;\n      margin: 0.75rem 0rem;\n      display: block;\n      line-break: anywhere;\n    }\n\n    .star-container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      /* margin: 0.5rem 0rem; */\n\n      img {\n        margin: 0rem 0.1rem;\n        width: fit-content;\n      }\n\n      p {\n        margin-left: 0.5rem;\n      }\n    }\n  }\n\n  h3,\n  p {\n    color: white;\n  }\n"]);return E=function(){return n},n}function N(){var n=Object(s.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  margin: 2rem;\n  background: white;\n  position: absolute;\n  left: 9%;\n  top: 0;\n  /* transform: translate(-50%, 0%); */\n  color: black;\n  overflow: hidden;\n  z-index: 10;\n\n  @media (max-width: 1200px) {\n    width: 85%;\n    left: 4%;\n  }\n\n  @media (max-width: 800px) {\n    width: 85%;\n    left: 2.5%;\n  }\n\n  img {\n    width: 100%;\n  }\n"]);return N=function(){return n},n}function C(){var n=Object(s.a)(["\n  position: relative;\n"]);return C=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: black;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]);return I=function(){return n},n}var z=Object(l.b)(m.c.div)(I()),L=Object(l.b)(m.c.div)(C()),D=Object(l.b)(m.c.div)(N()),_=Object(l.b)(m.c.div)(E()),R=Object(l.b)(m.c.div)(S()),T=Object(l.b)(m.c.div)(k()),U=Object(l.b)(m.c.div)(y()),M=Object(l.b)(m.c.div)(A()),B=Object(l.b)(m.c.div)(v()),G=Object(l.b)(m.c.div)(w()),H=function(n){var e=n.pathId,t=Object(b.e)(),r=Object(u.c)((function(n){return n.detail})),i=r.screenshots,c=r.game,o=r.isLoading,s=function(n){switch(n){case"PlayStation 4":case"PlayStation 5":return h;case"Xbox One":case"Xbox S":case"Xbox S/X":return j;case"PC":return g;case"Nintendo Switch":return f;case"iOS":return x;default:return O}};return Object(a.jsx)(a.Fragment,{children:!o&&Object(a.jsx)(z,{className:"shadow",onClick:function(n){var e=n.target;console.log(e),e.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(a.jsxs)(D,{layoutId:"image ".concat(e),children:[Object(a.jsxs)(L,{children:[Object(a.jsxs)(M,{children:[Object(a.jsx)(m.c.img,{className:"card-top-background-image",src:p(c.background_image,1920),alt:c.background_image}),c.clip&&Object(a.jsx)("video",{controls:!0,autoPlay:!0,loop:!0,children:Object(a.jsx)("source",{src:c.clip.clips.full})}),Object(a.jsx)("div",{className:"vote",children:c.ratings.map((function(n){return Object(a.jsxs)("div",{className:"vote-container",children:[Object(a.jsx)("p",{className:"vote-title",children:n.title}),Object(a.jsx)("div",{className:"vote-count-bar",style:{width:"".concat(n.count,"px")}})]},n.title)}))})]}),Object(a.jsxs)(_,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(m.c.h3,{className:"game-name",layoutId:"title ".concat(e),children:c.name}),c.publishers.map((function(n){return Object(a.jsx)("p",{className:"publisher-name",children:n.name})})),Object(a.jsxs)(m.c.div,{className:"rating-container",children:[Object(a.jsxs)("div",{className:"star-container",children:[function(){for(var n=[],e=Math.floor(c.rating),t=1;t<=5;t++)t<=e?n.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):n.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return n}(),Object(a.jsxs)("p",{children:["(",c.rating,")"]})]}),Object(a.jsx)("a",{href:c.metacritic_url,target:"_blank",children:c.metacritic_url}),Object(a.jsx)("a",{href:c.website,target:"_blank",children:c.website})]})]}),Object(a.jsxs)(R,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(T,{children:c.platforms.map((function(n){return Object(a.jsx)("img",{src:s(n.platform.name),title:n.platform.name,alt:n.platform.name},n.platform.id)}))})]}),Object(a.jsx)(U,{children:null!==c.metacritic?Object(a.jsx)(m.c.div,{className:"metacritic-score",LayoutId:"metacritic-score ".concat(e),children:Object(a.jsx)("p",{children:c.metacritic})}):Object(a.jsx)("div",{className:"not-available metacritic-score",children:Object(a.jsx)("p",{children:"N/A"})})})]})]}),Object(a.jsx)(B,{children:Object(a.jsx)("p",{className:"description",children:c.description_raw})}),Object(a.jsx)(G,{children:i.results.map((function(n){return Object(a.jsx)("img",{src:p(n.image,1920),alt:n.image},n.id)}))})]})})})},F=t(9),X=t.n(F),P=t(16),V=t(19),Z=t.n(V),J="https://api.rawg.io/api/",W=(new Date).getFullYear(),Q=function(){var n=(new Date).getMonth()+1;return n<10?"0".concat(n):n}(),Y=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),q="".concat(W,"-").concat(Q,"-").concat(Y),K="".concat(W-1,"-").concat(Q,"-").concat(Y),$="".concat(W+1,"-").concat(Q,"-").concat(Y),nn="games?dates=".concat(q,",").concat($,"&ordering=-added&page_size="),en="games?dates=".concat(K,",").concat(q,"&ordering=-rating&page_size="),tn="games?dates=".concat(K,",").concat(q,"&ordering=-released&page_size="),an=function(n){return"".concat(J).concat(nn).concat(n)},rn=function(n){return"".concat(J).concat(en).concat(n)},cn=function(n){return"".concat(J).concat(tn).concat(n)},on=function(n){return"".concat(J,"games/").concat(n,"/screenshots")},sn=function(n,e){return"".concat(J,"games?search=").concat(n,"&page_size=").concat(e)},dn=function(n){return function(){var e=Object(P.a)(X.a.mark((function e(t){var a,r,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get(rn(n));case 2:return a=e.sent,e.next=5,Z.a.get(cn(n));case 5:return r=e.sent,e.next=8,Z.a.get(an(n));case 8:i=e.sent,t({type:"FETCH_GAMES",payload:{popular:a.data.results,newGames:r.data.results,upcoming:i.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ln=function(){return function(){var n=Object(P.a)(X.a.mark((function n(e){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_SMALL_CARDS"});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},mn=function(){return function(){var n=Object(P.a)(X.a.mark((function n(e){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_MEDIUM_CARDS"});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},un=function(){return function(){var n=Object(P.a)(X.a.mark((function n(e){return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"SET_LARGE_CARDS"});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},bn={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.5}}},pn={hidden:{opacity:0},show:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:.75}}},hn={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},gn={hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},jn=t(20);function fn(){var n=Object(s.a)(["\n  min-height: 40vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  border-radius: 1rem;\n\n  .details-container {\n    height: 100%;\n    background-size: cover !important;\n    background-position: top !important;\n    border-radius: 1rem;\n    position: relative;\n  }\n\n  a {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100%;\n\n    .title {\n      text-align: left;\n      width: 100%;\n      padding: 1.5rem;\n      z-index: 1;\n\n      h3,\n      p {\n        width: 100%;\n        color: white;\n        padding: 0;\n        text-shadow: 0px 5px 10px black;\n        font-weight: 900;\n      }\n    }\n  }\n\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n    z-index: -1;\n  }\n\n  .metacritic-score {\n    position: absolute;\n    top: -0.75rem;\n    right: -0.75rem;\n    background: #333333;\n    height: fit-content;\n    border: 4px solid #ffcc34;\n    padding: 0rem 1rem;\n    border-radius: 1rem;\n\n    p {\n      color: white;\n      font-weight: 900;\n      font-size: 2rem;\n    }\n  }\n\n  .not-available {\n    padding: 0.5rem 0.75rem;\n\n    p {\n      font-size: 1.5rem;\n    }\n  }\n"]);return fn=function(){return n},n}var xn=Object(l.b)(m.c.div)(fn()),On=function(n){var e=n.name,t=n.released,r=n.image,i=n.id,c=n.metacriticScore,o=i.toString(),s=Object(u.b)();return Object(a.jsx)(xn,{variants:hn,initial:"hidden",animate:"show",layoutID:o,children:Object(a.jsxs)(m.c.div,{className:"details-container",style:{background:"url(".concat(p(r,640),")")},onClick:function(){document.body.style.overflow="hidden",s(function(n){return function(){var e=Object(P.a)(X.a.mark((function e(t){var a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAIL"}),e.next=3,Z.a.get((i=n,"".concat(J,"games/").concat(i)));case 3:return a=e.sent,e.next=6,Z.a.get(on(n));case 6:r=e.sent,t({type:"GET_DETAIL",payload:{game:a.data,screenshots:r.data}});case 8:case"end":return e.stop()}var i}),e)})));return function(n){return e.apply(this,arguments)}}()}(i)),console.log(o,typeof o)},layoutId:"image ".concat(o),children:[Object(a.jsx)(jn.b,{to:"/game/".concat(i),children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)(m.c.h3,{layoutId:"title ".concat(o),children:e}),Object(a.jsx)("p",{children:t})]})}),null!==c?Object(a.jsx)(m.c.div,{className:"metacritic-score",LayoutId:"metacritic-score ".concat(o),children:Object(a.jsx)("p",{children:c})}):Object(a.jsx)("div",{className:"not-available metacritic-score",children:Object(a.jsx)("p",{children:"N/A"})})]})})},wn=t.p+"static/media/pexels-photo-4842496.b0611ac6.jpeg",vn=t.p+"static/media/logo.80a7e755.svg";function An(){var n=Object(s.a)(["\n  /* background: url(https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */\n  min-height: 100vh;\n  background-size: cover;\n  background-position: center;\n  padding: 5rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: 800px) {\n    min-height: 50vh;\n  }\n\n  /* .small-card-button {\n    @media (max-width: 800px) {\n      background: #bfbfeb;\n    }\n  }\n\n  .medium-card-button {\n    @media (max-width: 950px) {\n      background: #bfbfeb;\n    }\n  }\n\n  .large-card-button {\n    @media (max-width: 950px) {\n      display: none;\n    }\n  }\n\n  .medium-card-button,\n  .large-card-button {\n    @media (max-width: 800px) {\n      display: none;\n    }\n  } */\n\n  .title-logo-search-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n\n    .app-logo-title-container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      img {\n        height: 3rem;\n        width: 3rem;\n        margin-right: 1rem;\n        cursor: pointer;\n      }\n    }\n\n    .search-container {\n      width: 100%;\n      input {\n        width: 30%;\n        font-size: 1.5rem;\n        padding: 0.5rem 2rem;\n        border: none;\n        margin-top: 1rem;\n        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n        outline: none;\n        margin-left: 4rem;\n        border-radius: 2rem 0rem 0rem 2rem;\n\n        @media (max-width: 1200px) {\n          width: 55%;\n        }\n      }\n\n      /* /* // not working */\n      button {\n        font-size: 1.5rem;\n        border: none;\n        padding: 0.5rem 2rem;\n        cursor: pointer;\n        border-radius: 0rem 2rem 2rem 0rem;\n        background: rgba(0, 0, 0, 0.6);\n        color: white;\n        border-left: 1px solid black;\n        outline: none;\n        text-transform: none;\n        outline: none;\n      }\n    }\n  }\n\n  .app-logo {\n    height: 2rem;\n    width: 2rem;\n  }\n\n  .banner-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    z-index: -1;\n    filter: brightness(0.7);\n  }\n\n  h3 {\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.25rem;\n  }\n\n  button {\n    background: transparent;\n    padding: 0.5rem 1rem;\n    text-transform: uppercase;\n    margin: 0rem 1rem 1rem 0rem;\n    cursor: pointer;\n    border: 1px solid white;\n    color: white;\n    border-radius: 0.5rem;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n    outline: none;\n\n    &:hover {\n      background: rgba(0, 0, 0, 0.1);\n      transition: all 0.5s ease;\n      /* color: white; */\n    }\n  }\n\n  .filters {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n\n    @media (max-width: 800px) {\n      justify-content: space-between;\n    }\n\n    .card-toggle-container {\n      .small-card-button {\n        @media (max-width: 800px) {\n          background: #bfbfeb;\n        }\n      }\n\n      /* .medium-card-button {\n        @media (max-width: 950px) {\n          background: #bfbfeb;\n        }\n      } */\n\n      .large-card-button {\n        @media (max-width: 950px) {\n          display: none;\n        }\n      }\n\n      .medium-card-button,\n      .large-card-button {\n        @media (max-width: 800px) {\n          display: none;\n        }\n      }\n    }\n\n    .view-container,\n    .card-toggle-container {\n      width: 50%;\n      display: inline-block;\n\n      @media (max-width: 800px) {\n        width: unset;\n      }\n    }\n  }\n"]);return An=function(){return n},n}function yn(){var n=Object(s.a)(["\n  /* min-height: 80vh; */\n  display: grid;\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 1.5rem;\n  margin: 2rem 0rem;\n\n  @media (max-width: 800px) {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(s.a)(["\n  padding: 0rem 5rem;\n\n  h2 {\n    padding: 2rem 0rem;\n  }\n"]);return kn=function(){return n},n}var Sn=Object(l.b)(m.c.div)(kn()),En=Object(l.b)(m.c.div)(yn()),Nn=Object(l.b)(m.c.div)(An()),Cn=function(){var n=Object(b.f)().pathname.split("/")[2],e=Object(u.b)(),t=Object(r.useState)(""),i=Object(d.a)(t,2),c=i[0],o=i[1],s=Object(u.c)((function(n){return n.games})),l=s.popular,p=s.newGames,h=s.upcoming,g=s.searched,j=Object(u.c)((function(n){return n.cardSizes})),f=j.isSmallSelected,x=j.isMediumSelected,O=j.isLargeSelected,w=function(n){e(dn(n))},v=function(n){"small"===n&&e(ln()),"medium"===n&&e(mn()),"large"===n&&e(un())};return Object(r.useEffect)((function(){e(dn(30)),window.innerWidth<950?e(ln()):window.innerWidth<1200?e(mn()):e(un())}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Nn,{variants:bn,initial:"hidden",animate:"show",children:[Object(a.jsx)("img",{className:"banner-image",src:wn,alt:"banner-image"}),Object(a.jsxs)("div",{className:"title-logo-search-container",children:[Object(a.jsxs)(m.c.div,{className:"app-logo-title-container",variants:pn,children:[Object(a.jsx)("img",{className:"app-logo",src:vn,alt:"logo",onClick:function(){e({type:"CLEAR_SEARCHED"})}}),Object(a.jsx)("h1",{children:"LastLife"})]}),Object(a.jsxs)(m.c.form,{onSubmit:function(n){var t,a;n.preventDefault(),e((t=c,function(){var n=Object(P.a)(X.a.mark((function n(e){var r;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.a.get(sn(t,a));case 2:r=n.sent,e({type:"FETCH_SEARCHED",payload:{searched:r.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),o("")},className:"search-container",variants:gn,children:[Object(a.jsx)("input",{value:c,type:"text",onChange:function(n){o(n.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(a.jsxs)("div",{className:"filters",children:[Object(a.jsxs)("div",{className:"view-container",children:[Object(a.jsx)("h3",{children:"View"}),Object(a.jsx)("button",{className:"".concat(3===h.length?"card-highlighted":""),onClick:function(){return w(3)},children:"3"}),Object(a.jsx)("button",{className:"".concat(5===h.length?"card-highlighted":""),onClick:function(){return w(5)},children:"5"}),Object(a.jsx)("button",{className:"".concat(10===h.length?"card-highlighted":""),onClick:function(){return w(10)},children:"10"}),Object(a.jsx)("button",{className:"".concat(20===h.length?"card-highlighted":""),onClick:function(){return w(20)},children:"20"}),Object(a.jsx)("button",{className:"".concat(30===h.length?"card-highlighted":""),onClick:function(){return w(30)},children:"30"})]}),Object(a.jsxs)("div",{className:"card-toggle-container",children:[Object(a.jsx)("h3",{children:"Card size"}),Object(a.jsx)("button",{onClick:function(){return v("small")},className:"".concat(f?"card-highlighted":""," small-card-button"),children:"S"}),Object(a.jsx)("button",{onClick:function(){return v("medium")},className:"".concat(x?"card-highlighted":""," medium-card-button"),children:"M"}),Object(a.jsx)("button",{onClick:function(){return v("large")},className:"".concat(O?"card-highlighted":""," large-card-button"),children:"L"})]})]})]}),Object(a.jsx)(Sn,{variants:pn,children:Object(a.jsxs)(m.b,{type:"crossfade",children:[Object(a.jsx)(m.a,{children:n&&Object(a.jsx)(H,{pathId:n})}),""!=g&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Searched game results"}),Object(a.jsx)(En,{className:"".concat(f?"small-cards":"").concat(x?"medium-cards":"").concat(O?"large-cards":""),children:g.map((function(n){return Object(a.jsx)(On,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic},n.id)}))})]}),Object(a.jsx)("h2",{children:"Popular games"}),Object(a.jsx)(En,{className:"".concat(f?"small-cards":"").concat(x?"medium-cards":"").concat(O?"large-cards":""),children:l.map((function(n){return Object(a.jsx)(On,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic},n.id)}))}),Object(a.jsx)("h2",{children:"New games"}),Object(a.jsx)(En,{className:"".concat(f?"small-cards":"").concat(x?"medium-cards":"").concat(O?"large-cards":""),children:p.map((function(n){return Object(a.jsx)(On,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic},n.id)}))}),Object(a.jsx)("h2",{children:"Upcoming games"}),Object(a.jsx)(En,{className:"".concat(f?"small-cards":"").concat(x?"medium-cards":"").concat(O?"large-cards":""),children:h.map((function(n){return Object(a.jsx)(On,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic},n.id)}))})]})})]})},In=t(26),zn=t(46),Ln=t(33);function Dn(){var n=Object(s.a)(["\n  background: #070707;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 8rem;\n\n  a,\n  p {\n    color: white;\n  }\n\n  @media (max-width: 800px) {\n    padding: 1rem 0rem;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .copyright-contact {\n    flex: 2;\n    padding: 0;\n\n    p {\n      padding: 0.5rem;\n      font-size: 0.8rem;\n    }\n  }\n\n  .links {\n    padding: 0;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: space-around;\n\n    a {\n      width: 30%;\n      text-align: center;\n      color: white;\n      margin: 1rem 2rem;\n    }\n  }\n"]);return Dn=function(){return n},n}var _n=l.b.div(Dn()),Rn=function(){return Object(a.jsxs)(_n,{children:[Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)("a",{target:"_blank",href:"https://github.com/jleomorris",children:Object(a.jsx)(In.a,{icon:Ln.a})}),Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/james-morris-62a66b166/",children:Object(a.jsx)(In.a,{icon:Ln.b})})]}),Object(a.jsxs)("div",{className:"copyright-contact",children:[Object(a.jsx)("p",{children:"\xa9 James Morris 2020"}),Object(a.jsxs)("a",{href:"mailTo:james-morris2010@hotmail.co.uk",children:[Object(a.jsx)(In.a,{icon:zn.a,style:{display:"inline-block",margin:"0rem 0.5rem",fontSize:"1rem"}}),Object(a.jsx)("p",{style:{display:"inline-block",wordBreak:"break-all"},children:"james-morris2010@hotmail.co.uk"})]}),Object(a.jsx)("p",{children:"All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement"})]})]})};function Tn(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    &::-webkit-scrollbar {\n      width: 0.5rem;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: darkgray\n    }\n\n    &::-webkit-scrollbar-track {\n      background: white;\n    }\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    width: 100%;\n  }\n\n  h1 {\n    font-size: 6rem;\n    font-family: 'Abril Fatface', cursive;\n    font-weight: lighter;\n    color: white;\n  }\n\n  h2 {\n    font-size: 3rem;\n    font-family: 'Abril Fatface', cursive;\n    font-weight: lighter;\n    color: #333;\n  }\n\n  h3 {\n    font-size: 1.3rem;\n    color: #333;\n    padding: 1.5rem 0rem;\n  }\n  \n  p {\n    font-size: 1.2rem;\n    line-height: 200%;\n    color: #696969;\n    \n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n\n  input {\n    font-family: \"Montserrat\", sans-serif;\n  }\n\n  .small-cards {\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n\n  .medium-cards {\n      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    }\n    \n    .large-cards {\n      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  }\n\n  .card-highlighted {\n    background: #bfbfeb !important;\n  }\n\n  // Media queries\n  html {\n    @media (max-width: 1700px) {\n      font-size: 75%;\n    }\n  }\n\n\n"]);return Tn=function(){return n},n}var Un=Object(l.a)(Tn());var Mn=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(Un,{}),Object(a.jsxs)(b.a,{path:["/game/:id","/"],children:[Object(a.jsx)(Cn,{}),Object(a.jsx)(Rn,{})]})]})},Bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))},Gn=t(18),Hn=t(5),Fn={popular:[],newGames:[],upcoming:[],searched:[]},Xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(Hn.a)(Object(Hn.a)({},n),{},{popular:e.payload.popular,newGames:e.payload.newGames,upcoming:e.payload.upcoming});case"FETCH_SEARCHED":return Object(Hn.a)(Object(Hn.a)({},n),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(Hn.a)(Object(Hn.a)({},n),{},{searched:[]});default:return Object(Hn.a)({},n)}},Pn={game:{platforms:[]},screenshots:{results:[]},isLoading:!0},Vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(Hn.a)(Object(Hn.a)({},n),{},{game:e.payload.game,screenshots:e.payload.screenshots,isLoading:!1});case"LOADING_DETAIL":return Object(Hn.a)(Object(Hn.a)({},n),{},{isLoading:!0});default:return Object(Hn.a)({},n)}},Zn={isSmallSelected:!1,isMediumSelected:!1,isLargeSelected:!1},Jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SMALL_CARDS":return Object(Hn.a)(Object(Hn.a)({},n),{},{isSmallSelected:!0,isMediumSelected:!1,isLargeSelected:!1});case"SET_MEDIUM_CARDS":return Object(Hn.a)(Object(Hn.a)({},n),{},{isSmallSelected:!1,isMediumSelected:!0,isLargeSelected:!1});case"SET_LARGE_CARDS":return Object(Hn.a)(Object(Hn.a)({},n),{},{isSmallSelected:!1,isMediumSelected:!1,isLargeSelected:!0});default:return Object(Hn.a)({},n)}},Wn=Object(Gn.c)({games:Xn,detail:Vn,cardSizes:Jn}),Qn=t(47),Yn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Gn.d,qn=Object(Gn.e)(Wn,Yn(Object(Gn.a)(Qn.a)));o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(u.a,{store:qn,children:Object(a.jsx)(jn.a,{children:Object(a.jsx)(Mn,{})})})}),document.getElementById("root")),Bn()}},[[79,1,2]]]);
//# sourceMappingURL=main.283a1215.chunk.js.map