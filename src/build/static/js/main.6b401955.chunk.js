(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),o=(n(12),n(4)),a=n(5),i=n(7),h=n(6),l=n(0),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:c})]})]})})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(l.jsx)("div",{children:n})},j=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search robots",onChange:t})})},u=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll ",border:"2px solid black",height:"800px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{children:"Robofriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(u,{children:Object(l.jsx)(d,{robots:r})})]}):Object(l.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component),g=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))});s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.6b401955.chunk.js.map