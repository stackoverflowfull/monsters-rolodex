(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),u=(n(10),n(1)),i=(n(11),n(12),function(e){var t=e.onSearchChange,n=e.text;return o.a.createElement(o.a.Fragment,null,"SearchBox",o.a.createElement("input",{type:"text",value:n,onChange:t}))}),l=function(e){var t=e.name;return o.a.createElement(o.a.Fragment,null,t,o.a.createElement("img",{src:"https://robohash.org/".concat(t)}))},s=function(e){var t=e.monsters;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(l,{key:e.id,name:e.name})}))},m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),l=Object(u.a)(c,2),m=l[0],f=l[1],h=Object(a.useState)(""),g=Object(u.a)(h,2),d=g[0],p=g[1];return Object(a.useEffect)(function(){console.log("didmount"),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return r(e)})},[]),Object(a.useEffect)(function(){console.log("when changing text"),f(n.filter(function(e){return e.name.toLowerCase().includes(d.toLowerCase())}))},[d]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"monsters rolodex"),o.a.createElement(i,{onSearchChange:function(e){p(e.target.value)},text:d}),o.a.createElement(s,{monsters:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.1b3fcb6b.chunk.js.map