(this.webpackJsonpclient_user_good_morning_news=this.webpackJsonpclient_user_good_morning_news||[]).push([[0],{171:function(e,t,a){e.exports=a(227)},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(42),s=a.n(o),i=a(9),l=a.n(i),u=a(10),m=a(21),p=a(242),d=a(158),b=a(11),E=function(e){var t=e.article;return c.a.createElement(p.a,{as:b.b,to:"/articles/".concat(t.id)},c.a.createElement(p.a.Content,null,c.a.createElement(p.a.Header,{"data-cy":"title"},t.title),c.a.createElement(p.a.Description,{"data-cy":"teaser"},t.teaser)),t.image&&c.a.createElement(d.a,{"data-cy":"image",src:t.image}))},g=a(33),f=a.n(g),h=a(64),v=a(156);n="https://good-morning-news-team1.herokuapp.com/";var y=new(a.n(v).a)({host:n,prefixUrl:"/api/v1"}),w=function(){var e=localStorage.getItem("J-tockAuth-Storage");return e=JSON.parse(e),e=Object(h.a)({},e,{"Content-type":"application/json",Accept:"application/json"})},O=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("J-tockAuth-Storage")){e.next=6;break}return a=JSON.parse(localStorage.getItem("J-tockAuth-Storage")),e.next=4,y.validateToken(a);case 4:(n=e.sent).success?t({type:"AUTHENTICATE",payload:{authenticated:n.success,currentUser:n.data}}):console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={index:function(e,t){return Object(u.a)(l.a.mark((function a(){var n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!e){a.next=7;break}return a.next=4,f.a.get("/articles/?category=".concat(e));case 4:r=a.sent,a.next=16;break;case 7:if(!t){a.next=13;break}return a.next=10,f.a.get("/articles/?location=".concat(t));case 10:r=a.sent,a.next=16;break;case 13:return a.next=15,f.a.get("/articles");case 15:r=a.sent;case 16:n=r.data.articles,a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),n=a.t0.response.data.error_message;case 22:return a.prev=22,a.abrupt("return",n);case 25:case"end":return a.stop()}}),a,null,[[0,19,22,25]])})))()},show:function(e,t){return Object(u.a)(l.a.mark((function a(){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!t){a.next=7;break}return a.next=4,f.a.get("/articles/".concat(e),{headers:w()});case 4:n=a.sent,a.next=10;break;case 7:return a.next=9,f.a.get("/articles/".concat(e));case 9:n=a.sent;case 10:return a.abrupt("return",n.data.article);case 13:return a.prev=13,a.t0=a.catch(0),a.abrupt("return",a.t0.response.data.error);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))()}},x=a(239),S=a(246),k=a(247),C=a(243),I=a(248),_=a(12),A=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(),s=Object(m.a)(o,2),i=s[0],p=s[1],d=Object(_.i)(),b=d.category,g=d.local,f=Object(_.h)(),h=Object(r.useState)(),v=Object(m.a)(h,2),y=v[0],w=v[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.index(b,g);case 2:(null===(t=e.sent)||void 0===t?void 0:t.constructor)===Array?(n(t),p("")):(n([]),p(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b,g]),Object(r.useEffect)((function(){f.state&&w(f.state.message)}),[f]),c.a.createElement(c.a.Fragment,null,g&&c.a.createElement(x.a,null,c.a.createElement(S.a,{textAlign:"center"},c.a.createElement(k.a,null,"Sweden"===g?"Welcome to our news about Sweden!":"Enjoy our International section!"))),b?c.a.createElement(x.a,null,c.a.createElement(S.a,{textAlign:"center"},c.a.createElement(k.a,null,"Enjoy our ",b.charAt(0).toUpperCase()+b.slice(1)," ","section!"))):!g&&c.a.createElement(x.a,null,c.a.createElement(S.a,{textAlign:"center"},c.a.createElement(k.a,null,"Enjoy our content!"))),y&&c.a.createElement(C.a,{positive:!0,"data-cy":"payment-success-message"},c.a.createElement(C.a.Header,null,y)),i&&c.a.createElement(C.a,{negative:!0,"data-cy":"error-message"},c.a.createElement(C.a.Header,null,i)),c.a.createElement("div",{id:"container"},c.a.createElement(I.a,null,c.a.createElement(I.a.Row,null,a.map((function(e){return c.a.createElement("div",{class:"card-style","data-cy":"article-"+e.id,key:e.id},c.a.createElement(E,{article:e}))}))))))},T=a(244),U=a(19),N=function(){var e=Object(r.useState)({}),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(),s=Object(m.a)(o,2),i=s[0],p=s[1],E=Object(_.i)().id,g=Object(U.c)((function(e){return e.currentUser.role}));return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.show(E,g);case 2:(t=e.sent).id?n(t):p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),c.a.createElement(c.a.Fragment,null,i?c.a.createElement("p",{"data-cy":"error-message"},i):c.a.createElement(x.a,{id:"container1",textAlign:"center"},c.a.createElement("div",{"data-cy":"article"},c.a.createElement("h1",{"data-cy":"title"},a.title),c.a.createElement("h3",{"data-cy":"teaser"},a.teaser),a.image&&c.a.createElement(d.a,{size:"medium",centered:!0,"data-cy":"image",src:a.image}),c.a.createElement("p",{"data-cy":"content"},a.content)),a.premium&&"subscriber"!==g&&c.a.createElement(S.a,{inverted:!0,id:"menu",textAlign:"center"},c.a.createElement("h4",{"data-cy":"premium-alert"},"This is part of our premium content, to get full access become premium user"),c.a.createElement(T.a,{color:"black","data-cy":"premium-button",as:b.b,to:"registered"===g?"/become-subscriber":"/login"},"registered"===g?"Become premium!":"Register & Become premium!"))))},P=a(241),H=function(){var e=Object(r.useState)("news"),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(U.c)((function(e){return e.authenticated})),s=Object(U.c)((function(e){return e.currentUser})),i=Object(U.c)((function(e){return e.country})),l=function(e){var t=e.name;n(t)};return c.a.createElement(k.a,{as:"h1",id:"header"},c.a.createElement(I.a,{id:"main-grid"},c.a.createElement(I.a.Row,{columns:4,id:"GMN-logo"},c.a.createElement(I.a.Column,{id:"good",width:2,textAlign:"right"},"Good"),c.a.createElement(I.a.Column,{id:"morning",width:2,textAlign:"center"},"Morning"),c.a.createElement(I.a.Column,{id:"News",width:2,textAlign:"left"},"News"),c.a.createElement(I.a.Column,{id:"slogan",width:8,textAlign:"right"},"For a great start of the day"))," "),c.a.createElement(k.a.Subheader,{"data-cy":"navigation-bar"},c.a.createElement(P.a,{id:"menu"},c.a.createElement(P.a.Item,{"data-cy":"location",name:"location",active:"location"===a,onClick:l,as:b.b,to:{pathname:"/local/".concat(i)}},i),c.a.createElement(P.a.Item,{"data-cy":"home",name:"home",active:"home"===a,onClick:l,as:b.b,to:{pathname:"/"}},"Home"),c.a.createElement(P.a.Item,{"data-cy":"sports",name:"sports",active:"sports"===a,onClick:l,as:b.b,to:{pathname:"/category/sports"}},"Sports"),c.a.createElement(P.a.Item,{"data-cy":"business",name:"business",active:"business"===a,onClick:l,as:b.b,to:{pathname:"/category/business"}},"Business"),c.a.createElement(P.a.Item,{"data-cy":"entertainment",name:"entertainment",active:"entertainment"===a,onClick:l,as:b.b,to:{pathname:"/category/entertainment"}},"Entertainment"),c.a.createElement(P.a.Item,{"data-cy":"weather",name:"weather",active:"weather"===a,onClick:l,as:b.b,to:{pathname:"/category/weather"}},"Weather"),c.a.createElement(P.a.Item,{"data-cy":"news",name:"news",active:"news"===a,onClick:l,as:b.b,to:{pathname:"/category/news"}},"News"),o?"subscriber"!==s.role&&c.a.createElement(P.a.Item,{position:"right","data-cy":"become-subscriber",name:"become-subscriber",active:"become-subscriber"===a,as:b.b,to:{pathname:"/become-subscriber"},inverted:!0},"Become Subscriber"):c.a.createElement(P.a.Item,{position:"right"},c.a.createElement(T.a,{color:"black","data-cy":"login-button",name:"login",active:"login"===a,as:b.b,to:{pathname:"/login"}},"Login"),c.a.createElement(P.a.Item,null),c.a.createElement(T.a,{color:"black","data-cy":"sign-up-button",name:"sign-up",active:"sign-up"===a,as:b.b,to:{pathname:"/sign_up"}},"Sign Up")))))},B=a(240),R=function(){var e=Object(r.useState)(),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(),s=Object(m.a)(o,2),i=s[0],p=s[1],d=Object(_.h)(),b=Object(U.b)(),E=Object(_.g)(),g=function(){var e=Object(u.a)(l.a.mark((function e(t,a,r){var c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=t.target.email.value,o=t.target.password.value,e.next=6,y.signIn(c,o);case 6:s=e.sent,a({type:"AUTHENTICATE",payload:{authenticated:s.success,currentUser:s.data}}),r.replace({pathname:"/"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(e.t0.response.data.errors[0]);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d.state&&p(d.state.message)}),[d]),c.a.createElement(x.a,null,i&&c.a.createElement(C.a,{positive:!0,"data-cy":"registration-message"},c.a.createElement(C.a.Header,null,i,". Your registration was successful! Please log in to confirm your registration")),c.a.createElement(B.a,{"data-cy":"login-form",onSubmit:function(e){return g(e,b,E)}},c.a.createElement(B.a.Input,{icon:"user",iconPosition:"left",label:"Email:",placeholder:"email",name:"email",type:"email",id:"email","data-cy":"email"}),c.a.createElement(B.a.Input,{icon:"lock",iconPosition:"left",placeholder:"password",label:"Password:",type:"password",name:"password",id:"password","data-cy":"password"}),c.a.createElement(T.a,{"data-cy":"submit",id:"Submit",content:"Submit",primary:!0})),a&&c.a.createElement(C.a,{negative:!0,"data-cy":"message"},c.a.createElement(C.a.Header,null,a)))},D=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(_.g)(),s=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=t.target.email.value,c=t.target.password.value,o=t.target.passwordConfirmation.value,e.next=7,y.signUp({email:r,password:c,password_confirmation:o});case 7:s=e.sent,a.replace("/login",{message:s.data.status}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(e.t0.response.data.errors.full_messages[0]);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(x.a,null,c.a.createElement(B.a,{"data-cy":"sign-up-form",onSubmit:function(e){return s(e,o)}},c.a.createElement(B.a.Input,{icon:"user",iconPosition:"left",label:"Email:",placeholder:"email",name:"email",type:"email",id:"email","data-cy":"email"}),c.a.createElement(B.a.Input,{icon:"lock",iconPosition:"left",placeholder:"password",label:"Password:",type:"password",name:"password",id:"password","data-cy":"password"}),c.a.createElement(B.a.Input,{icon:"lock",iconPosition:"left",placeholder:"password-confirmation",label:"Password confirmation:",type:"password",name:"password-confirmation",id:"passwordConfirmation","data-cy":"password-confirmation"}),c.a.createElement(T.a,{"data-cy":"submit",id:"Submit",content:"Submit",primary:!0})),a&&c.a.createElement(C.a,{negative:!0},c.a.createElement(C.a.Header,{"data-cy":"failure-message"},a)))},F=function(e){var t=e.children,a=Object(U.c)((function(e){return e.authenticated}));return c.a.createElement(_.b,{render:function(){return a?t:c.a.createElement(_.a,{to:{pathname:"/login"}})}})},J=a(43),K=Object(J.injectStripe)((function(e){var t=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.stripe.createToken();case 3:n=t.sent,e.submitPayment(n.token.id);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"centered"},c.a.createElement(S.a,{color:"blue"},c.a.createElement(k.a,{"data-cy":"subscription-header",textAlign:"center"},"Submit your subscription and enjoy full Good Morning Content!"),c.a.createElement(B.a,{size:"small",onSubmit:t},c.a.createElement(B.a.Field,{required:!0,"data-cy":"card-number"},c.a.createElement("label",null,"Card Number"),c.a.createElement(J.CardNumberElement,null)),c.a.createElement(B.a.Field,{required:!0,"data-cy":"card-expiry"},c.a.createElement("label",null,"Card Expiry"),c.a.createElement(J.CardExpiryElement,null)),c.a.createElement(B.a.Field,{required:!0,"data-cy":"card-cvc"},c.a.createElement("label",null,"Card CVC"),c.a.createElement(J.CardCVCElement,null)),c.a.createElement(T.a,{color:"blue",type:"submit"},"Subscribe Now!"))))))})),W={create:function(e){return Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/subscriptions",{stripeToken:e},{headers:w()});case 3:n=t.sent,a={success:!0,message:n.data.message},t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a={success:!1,message:t.t0.response.data.message};case 10:return t.prev=10,t.abrupt("return",a);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()}},L=function(){var e=Object(U.b)(),t=Object(_.g)(),a=Object(r.useState)(),n=Object(m.a)(a,2),o=n[0],s=n[1],i=function(){var a=Object(u.a)(l.a.mark((function a(n){var r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.create(n);case 2:(r=a.sent).success?(e({type:"USER_IS_SUBSCRIBER",payload:{role:"subscriber"}}),t.push("/",{message:r.message})):s(r.message);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.Elements,null,c.a.createElement(K,{submitPayment:i})),o&&c.a.createElement(C.a,{negative:!0,"data-cy":"failure-message"},c.a.createElement(C.a.Header,null,o)))},M=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(a.coords.latitude,a.coords.longitude);case 2:n=e.sent,t({type:"SET_LOCATION",payload:{country:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_OPEN_CAGE_API_KEY,e.prev=1,e.next=4,f.a.get("https://api.opencagedata.com/geocode/v1/json?q=".concat(t,"%2C").concat(a,"&language=en&key=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data.results[0].components.country);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(U.b)();return Object(r.useEffect)((function(){M(e),O(e)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null),c.a.createElement(_.d,null,c.a.createElement(_.b,{exact:!0,path:"/articles/:id",component:N}),c.a.createElement(_.b,{exact:!0,path:"/category/:category",component:A}),c.a.createElement(_.b,{exact:!0,path:"/login",component:R}),c.a.createElement(_.b,{exact:!0,path:"/sign_up",component:D}),c.a.createElement(_.b,{exact:!0,path:"/local/:local",component:A}),c.a.createElement(F,{path:"/become-subscriber"},c.a.createElement(L,null)),c.a.createElement(_.b,{exact:!0,path:"/",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(225),a(226);var G,V=a(108),Y={currentUser:{},authenticated:!1,country:"Local"},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE":return Object(h.a)({},e,{authenticated:t.payload.authenticated,currentUser:t.payload.currentUser});case"USER_IS_SUBSCRIBER":return Object(h.a)({},e,{currentUser:Object(h.a)({},e.currentUser,{role:t.payload.role})});case"SET_LOCATION":return Object(h.a)({},e,{country:t.payload.country});default:return e}},X=function(){return Object(V.b)(Z)}();window.store=X,G="https://good-morning-news-team1.herokuapp.com/api/v1",f.a.defaults.baseURL=G,s.a.render(c.a.createElement(J.StripeProvider,{apiKey:"pk_test_51HdYrMDq51jzAKNH4YJ57mqONMDOMjEbIiQxTz1Tm52eSsWwXZZTTVKKvHmjNljMflZ8nmeJdz4SyBzK6IuwBt0I00XuNFcgTi"},c.a.createElement(U.a,{store:X},c.a.createElement(b.a,null,c.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.365bb22d.chunk.js.map