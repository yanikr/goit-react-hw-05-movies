"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{383:function(n,e,t){t.d(e,{O:function(){return h}});var r,o,i,a=t(168),c=t(444),u=t(731),s=(0,c.ZP)(u.OL)(r||(r=(0,a.Z)(["\n  margin-top: 10px;\n  font-weight: 500;\n  text-decoration: none;\n"]))),l=c.ZP.ul(o||(o=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 500px);\n  grid-gap: 20px 20px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n"]))),p=c.ZP.p(i||(i=(0,a.Z)(["\n  text-align: center;\n  color: brown;\n  text-decoration: none;\n"]))),d=t(689),g=t(184),h=function(n){var e=n.movies,t=(0,d.TH)();return(0,g.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,o=n.title;return(0,g.jsx)("li",{children:(0,g.jsxs)(s,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:o,width:"500px",height:"710px"}),(0,g.jsx)(p,{children:o})]})},e)}))})}},395:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,i,a=t(982),c=t(885),u=t(791),s=t(731),l=t(969),p=t(383),d=t(168),g=t(444),h=g.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 10px 15px;\n  overflow: hidden;\n"]))),f=g.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  /* width: 48px;\n  height: 38px; */\n  border-radius: 4px;\n  border: 0;\n  /* background-size: 40%; */\n  color: #fff;\n  padding: 16px 15px;\n  font-weight: 500;\n  background-color: orangered;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  margin-right: 10px;\n"]))),x=g.ZP.input(i||(i=(0,d.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  outline: none;\n  border-radius: 4px;\n  padding-left: 20px;\n  padding-right: 4px;\n"]))),m=t(184);function b(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(null),i=(0,c.Z)(o,2),d=i[0],g=i[1],b=(0,s.lr)(),v=(0,c.Z)(b,2),Z=v[0],w=v[1];return(0,u.useEffect)((function(){if(null!==Z.get("searchQuery")){var n=Z.get("searchQuery");(0,l.$7)(n).then((function(n){0!==n.length?g((0,a.Z)(n)):console.log("error")})).catch((function(n){return console.log(n.message)})),r(Z.get("searchQuery"))}}),[Z]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.searchQuery.value.toLowerCase();w({searchQuery:e}),r("")},children:[(0,m.jsx)(f,{type:"submit",children:(0,m.jsx)("span",{children:"Search"})}),(0,m.jsx)(x,{onChange:function(n){r(n.target.value)},type:"text",autoComplete:"off",autoFocus:!0,name:"searchQuery",value:t,placeholder:"Search movies"})]}),d&&(0,m.jsx)(p.O,{movies:d})]})}}}]);
//# sourceMappingURL=395.9e0edf13.chunk.js.map