(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var c=function(t){return t.auth.user.email},r=function(t){return t.auth.isAuthenticated}},24:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return s}));var c=n(18),r=n.n(c),u=n(3);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o=function(t){return r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},a=function(){return r.a.defaults.headers.common.Authorization=""},i=function(t){return function(e){e(u.k()),r.a.post("/users/signup",t).then((function(t){var n=t.data;o(n.token),e(u.l(n))})).catch((function(t){return e(u.j(t.message))}))}},b=function(t){return function(e){e(u.e()),r.a.post("/users/login",t).then((function(t){var n=t.data;o(n.token),e(u.f(n))})).catch((function(t){return e(u.d(t.message))}))}},j=function(){return function(t){t(u.h()),r.a.post("/users/logout").then((function(){a(),t(u.i())})).catch((function(e){return t(u.g(e.message))}))}},s=function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(u.b()),r.a.get("/users/current").then((function(e){var n=e.data;return t(u.c(n))})).catch((function(e){return t(u.a(e.message))})))}}},3:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return u})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return b})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return s})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return l}));var c=n(4),r=Object(c.b)("@auth/registerRequest"),u=Object(c.b)("@auth/registerSuccess"),o=Object(c.b)("@auth/registerError"),a=Object(c.b)("@auth/loginRequest"),i=Object(c.b)("@auth/loginSuccess"),b=Object(c.b)("@auth/loginError"),j=Object(c.b)("@auth/logoutRequest"),s=Object(c.b)("@auth/logoutSuccess"),f=Object(c.b)("@auth/logoutError"),O=Object(c.b)("@auth/getCurrentUserRequest"),d=Object(c.b)("@auth/getCurrentUserSuccess"),l=Object(c.b)("@auth/getCurrentUserError")},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},66:function(t,e,n){},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return s})),n.d(e,"h",(function(){return f})),n.d(e,"d",(function(){return O}));var c=n(4),r=Object(c.b)("@contacts/addItemRequest"),u=Object(c.b)("@contacts/addItemSuccess"),o=Object(c.b)("@contacts/addItemError"),a=Object(c.b)("@contacts/deleteItemRequest"),i=Object(c.b)("@contacts/deleteItemSuccess"),b=Object(c.b)("@contacts/deleteItemError"),j=Object(c.b)("@contacts/fetchItemsRequest"),s=Object(c.b)("@contacts/fetchItemsSuccess"),f=Object(c.b)("@contacts/fetchItemsError"),O=Object(c.b)("@filter/change")},85:function(t,e,n){"use strict";n.r(e);var c,r,u,o,a,i,b,j,s,f=n(0),O=n.n(f),d=n(25),l=n.n(d),h=n(11),g=n(27),m=n(9),p=n(4),x=n(16),v=n(45),k=n.n(v),y=n(1),S=n(3),I={name:"",email:""},T=Object(p.c)(I,(c={},Object(y.a)(c,S.l,(function(t,e){return e.payload.user})),Object(y.a)(c,S.f,(function(t,e){return e.payload.user})),Object(y.a)(c,S.i,(function(t,e){return I})),Object(y.a)(c,S.c,(function(t,e){return e.payload})),c)),E=Object(p.c)(!1,(r={},Object(y.a)(r,S.l,(function(){return!0})),Object(y.a)(r,S.f,(function(){return!0})),Object(y.a)(r,S.i,(function(){return!1})),Object(y.a)(r,S.c,(function(){return!0})),r)),N=Object(p.c)(null,(u={},Object(y.a)(u,S.l,(function(t,e){return e.payload.token})),Object(y.a)(u,S.f,(function(t,e){return e.payload.token})),Object(y.a)(u,S.i,(function(){return null})),u)),R=Object(p.c)(!1,(o={},Object(y.a)(o,S.k,(function(){return!0})),Object(y.a)(o,S.l,(function(){return!1})),Object(y.a)(o,S.j,(function(){return!1})),Object(y.a)(o,S.e,(function(){return!0})),Object(y.a)(o,S.f,(function(){return!1})),Object(y.a)(o,S.d,(function(){return!1})),Object(y.a)(o,S.h,(function(){return!0})),Object(y.a)(o,S.i,(function(){return!1})),Object(y.a)(o,S.g,(function(){return!1})),Object(y.a)(o,S.b,(function(){return!0})),Object(y.a)(o,S.c,(function(){return!1})),Object(y.a)(o,S.a,(function(){return!1})),o)),q=Object(p.c)(null,(a={},Object(y.a)(a,S.j,(function(t,e){return e.payload})),Object(y.a)(a,S.d,(function(t,e){return e.payload})),Object(y.a)(a,S.g,(function(t,e){return e.payload})),Object(y.a)(a,S.a,(function(t,e){return e.payload})),a)),z=Object(m.c)({user:T,isAuthenticated:E,token:N,loading:R,error:q}),A=n(7),C=[],L=Object(p.c)(C,(i={},Object(y.a)(i,A.j,(function(t,e){return e.payload})),Object(y.a)(i,A.c,(function(t,e){return[].concat(Object(g.a)(t),[e.payload])})),Object(y.a)(i,A.g,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(y.a)(i,S.i,(function(){return C})),i)),w=Object(p.c)("",(b={},Object(y.a)(b,A.d,(function(t,e){return e.payload})),Object(y.a)(b,S.i,(function(){return""})),b)),U=Object(p.c)(!1,(j={},Object(y.a)(j,A.i,(function(){return!0})),Object(y.a)(j,A.j,(function(){return!1})),Object(y.a)(j,A.h,(function(){return!1})),Object(y.a)(j,A.b,(function(){return!0})),Object(y.a)(j,A.c,(function(){return!1})),Object(y.a)(j,A.a,(function(){return!1})),Object(y.a)(j,A.f,(function(){return!0})),Object(y.a)(j,A.g,(function(){return!1})),Object(y.a)(j,A.e,(function(){return!1})),j)),B=null,J=Object(p.c)(B,(s={},Object(y.a)(s,A.h,(function(t,e){return e.payload})),Object(y.a)(s,A.a,(function(t,e){return e.payload})),Object(y.a)(s,A.e,(function(t,e){return e.payload})),Object(y.a)(s,A.i,(function(){return B})),Object(y.a)(s,A.b,(function(){return B})),Object(y.a)(s,A.f,(function(){return B})),Object(y.a)(s,A.d,(function(){return B})),s)),M=Object(m.c)({items:L,filter:w,loading:U,error:J}),F={key:"auth",storage:k.a,whitelist:["token"]},H=Object(m.c)({auth:Object(x.g)(F,z),contacts:M}),P=[].concat(Object(g.a)(Object(p.d)({serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}})),[function(t){return function(t){return function(e){console.log(e),t(e)}}}]),D=Object(p.a)({reducer:H,middleware:P,devTools:!1}),G=Object(x.h)(D),K=n(15),Q=n(6),V=(n(59),n(60),n(61),{home:"/",register:"/register",login:"/login",contacts:"/contacts"}),W=n(2),X=function(t){var e=t.moveTo,n=t.navLinkActiveStyle;return Object(W.jsxs)("div",{className:"register-login-block",children:[Object(W.jsx)(K.b,{to:e(V.register),className:"navlink register-navlink",activeStyle:n,children:"Register"}),Object(W.jsx)(K.b,{to:e(V.login),className:"navlink login-navlink",activeStyle:n,children:"Login"})]})},Y=(n(66),n(17)),Z=n(24),$=function(){var t=Object(h.c)((function(t){return Object(Y.b)(t)})),e=Object(h.b)();return Object(W.jsxs)("div",{className:"UserMenu",children:[Object(W.jsx)("p",{className:"user-email",children:t}),Object(W.jsx)("button",{type:"button",onClick:function(){return e(Object(Z.c)())},children:"Logout"})]})},_=Object(Q.g)((function(t){var e=t.location,n=Object(h.c)((function(t){return Object(Y.a)(t)})),c=function(t){return{pathname:t,state:{from:e}}},r={color:"red"};return Object(W.jsx)("header",{className:"Header",children:Object(W.jsxs)("nav",{children:[Object(W.jsx)(K.b,{exact:!0,to:c(V.home),className:"logo",activeStyle:r,children:"Phonebook"}),n?Object(W.jsx)(K.b,{to:c(V.contacts),className:"contacts-navlink",activeStyle:r,children:"Contacts"}):Object(W.jsx)("p",{className:"contacts-text",children:"Contacts"}),n?Object(W.jsx)($,{}):Object(W.jsx)(X,{moveTo:c,navLinkActiveStyle:r})]})})})),tt=n(19),et=n(26),nt=function(t){var e=t.component,n=t.redirectTo,c=Object(et.a)(t,["component","redirectTo"]),r=Object(h.c)((function(t){return Object(Y.a)(t)}));return Object(W.jsx)(Q.b,Object(tt.a)(Object(tt.a)({},c),{},{render:function(t){return r?Object(W.jsx)(e,Object(tt.a)({},t)):Object(W.jsx)(Q.a,{to:n})}}))},ct=function(t){var e=t.component,n=t.redirectTo,c=Object(et.a)(t,["component","redirectTo"]),r=Object(h.c)((function(t){return Object(Y.a)(t)}));return Object(W.jsx)(Q.b,Object(tt.a)(Object(tt.a)({},c),{},{render:function(t){return r&&c.restricted?Object(W.jsx)(Q.a,{to:n}):Object(W.jsx)(e,Object(tt.a)({},t))}}))},rt=Object(f.lazy)((function(){return n.e(4).then(n.bind(null,92))})),ut=Object(f.lazy)((function(){return n.e(6).then(n.bind(null,93))})),ot=Object(f.lazy)((function(){return n.e(5).then(n.bind(null,94))})),at=Object(f.lazy)((function(){return n.e(3).then(n.bind(null,95))})),it=function(){var t=Object(h.b)();return Object(f.useEffect)((function(){t(Object(Z.a)())}),[]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(_,{}),Object(W.jsx)(f.Suspense,{fallback:Object(W.jsx)("p",{children:"Loading..."}),children:Object(W.jsxs)(Q.d,{children:[Object(W.jsx)(Q.b,{exact:!0,path:V.home,component:rt}),Object(W.jsx)(nt,{path:V.contacts,component:at,redirectTo:V.login}),Object(W.jsx)(ct,{path:V.register,component:ut,redirectTo:V.contacts,restricted:!0}),Object(W.jsx)(ct,{path:V.login,component:ot,redirectTo:V.contacts,restricted:!0}),Object(W.jsx)(Q.a,{to:V.home})]})})]})},bt=n(46);l.a.render(Object(W.jsx)(O.a.StrictMode,{children:Object(W.jsx)(h.a,{store:D,children:Object(W.jsx)(bt.a,{loading:Object(W.jsx)("p",{children:"Loading..."}),persistor:G,children:Object(W.jsx)(K.a,{children:Object(W.jsx)(it,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.83673cea.chunk.js.map