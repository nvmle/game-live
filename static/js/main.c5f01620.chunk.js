(this["webpackJsonpgame-live"]=this["webpackJsonpgame-live"]||[]).push([[0],{11:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e.n(r),a=e(4),o=e.n(a),i=(e(9),e(2)),u=e(0),s=function(n){var t,e,r=n.indexRow,c=n.indexColumn,a=n.onClick,o=n.board;return Object(u.jsx)("div",{className:(t=r,e=c,1===o[t][e]?"square fill":"square"),onClick:function(){a(r,c)}},r+"_"+c)},l=function(n){var t=n.play,e=Object(r.useState)(),c=Object(i.a)(e,2),a=c[0],o=c[1];Object(r.useEffect)((function(){o(function(n,t){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=[],c=0;c<n;c++){r.push([]),r[c].push(new Array(t));for(var a=0;a<t;a++)r[c][a]=e}return r}(50,50,0))}),[]),Object(r.useEffect)((function(){var n=setInterval((function(){if(t){for(var n=[],e=0;e<a.length;e++){n.push([]),n[e].push(new Array(a[e].length));for(var r=0;r<a[e].length;r++)n[e][r]=a[e][r]}a.forEach((function(t,e){t.forEach((function(r,c){var o=0;e&&c&&a[e-1][c-1]&&o++,e&&a[e-1][c]&&o++,e&&c!==t.length-1&&a[e-1][c+1]&&o++,c&&a[e][c-1]&&o++,c!==t.length-1&&a[e][c+1]&&o++,e!==a.length-1&&c&&a[e+1][c-1]&&o++,e!==a.length-1&&a[e+1][c]&&o++,e!==a.length-1&&c!==t.length-1&&a[e+1][c+1]&&o++,(o<2||o>3)&&r&&(n[e][c]=0),3===o&&(r||(n[e][c]=1))}))})),o(n)}}),100);return function(){return clearInterval(n)}}));var l=function(n,t){for(var e=[],r=0;r<a.length;r++){e.push([]),e[r].push(new Array(a[r].length));for(var c=0;c<a[r].length;c++)e[r][c]=a[r][c]}0===a[n][t]?e[n][t]=1:e[n][t]=0,o(e)};return Object(u.jsx)("div",{className:"container",children:a?a.map((function(n,t){return Object(u.jsx)("div",{className:"row",children:n.map((function(n,e){return Object(u.jsx)(s,{indexRow:t,indexColumn:e,onClick:l,board:a})}))},t)})):"Loading.. "})},f=function(){var n=Object(r.useState)(0),t=Object(i.a)(n,2),e=t[0],c=t[1],a=function(){console.log("start"),c(e?0:1)};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("button",{onClick:function(){return a()},className:"btn btn-start",disabled:e,children:"Start"}),Object(u.jsx)("button",{onClick:function(){return a()},className:"btn btn-stop",disabled:!e,children:"Stop"}),Object(u.jsx)(l,{play:e})]})};var h=function(){return Object(u.jsx)(f,{})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,12)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()},9:function(n,t,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.c5f01620.chunk.js.map