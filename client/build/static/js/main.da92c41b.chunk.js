(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){e.exports=n(283)},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},169:function(e,t){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},281:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),s=n(7),l=n(8),i=n(11),u=n(9),p=n(10),m=n(24),f=(n(109),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),d=(n(110),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),h=n(22),E=(n(111),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),v=Object(m.e)(function(e){return r.a.createElement(E,e)}),g=(n(120),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(d,null),r.a.createElement(v,{links:e}))}}]),t}(r.a.Component)),b=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(g,null),t))},O=(n(121),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),P=n(20),j=n(51),y=n(36),_=n(5),w=n.n(_),k=n(38),N=n(39),S=n.n(N),x="https://mern31-6.herokuapp.com";function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=function(e){return e.posts.request},q=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},R=function(e){return"app/".concat("posts","/").concat(e)},T=function(){return{type:Q}},I=function(){return{type:X}},B=function(e){return{error:e,type:G}},L=function(e){return{payload:e,type:M}},U=R("LOAD_POSTS"),M=R("LOAD_POSTS_PAGE"),F=R("LOAD_SINGLE_POST"),Q=R("START_REQUEST"),X=R("END_REQUEST"),G=R("ERROR_REQUEST"),J=R("RESET_REQUEST"),V={data:[],request:{pending:!1,error:null,success:null},singlePost:[],amount:0,postsPerPage:5,presentPage:1};n(142);var H=n(21),Y=(n(143),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(H.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),z=(n(144),function(e){var t=e.children,n=Object(H.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),K=n(101),W=n.n(K),Z=function(e){var t=e.children,n=Object(H.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),W()(t))},$=function(e){var t=e.id,n=e.title,a=e.content,c=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(z,null,n),r.a.createElement(Z,null,function(e,t){return e.length<1?"Error":e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."}(a,100)),r.a.createElement("p",null,"Author: ",c),r.a.createElement(Y,{variant:"primary"},r.a.createElement(h.b,{to:"/posts/".concat(t)},"Read more")))},ee=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map(function(e){return r.a.createElement($,Object.assign({key:e.id},e))})))},te=n(50),ne=(n(241),function(){return r.a.createElement(te.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),ae=n(30),re=(n(242),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(H.a)(e,["variant","children"]);return r.a.createElement(te.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(ae.c,null);case"success":return r.a.createElement(ae.a,null);case"warning":case"error":return r.a.createElement(ae.b,null);default:return r.a.createElement(ae.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),ce=n(34),oe=(n(243),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:n.props.initialPage||1},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.previousStep=function(){var e=n.state.presentPage,t=Object(ce.a)(n).changePage;e>1&&t(e-1)},n.nextStep=function(){var e=n.props.pages,t=n.state.presentPage,a=Object(ce.a)(n).changePage;t<e&&a(t+1)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>1?r.a.createElement("li",{className:"pagination__list__item".concat(" pagination__list__item--active"),onClick:this.previousStep},"<"):"",Object(j.a)(Array(e)).map(function(e,a){return r.a.createElement("li",{key:++a,onClick:function(){n(a)},className:"pagination__list__item".concat(a===t?" pagination__list__item--active":"")},a)}),t===e?"":r.a.createElement("li",{className:"pagination__list__item".concat(" pagination__list__item--active"),onClick:this.nextStep},">")))}}]),t}(r.a.Component)),se=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPostsByPage)(e.initialPage,e.postsPerPage)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.pages,c=e.pagination,o=e.presentPage,s=this.loadPostsPage,l=n.pending?r.a.createElement(ne,null):n.success&&t.length>0?!0===c?r.a.createElement("div",null,r.a.createElement(ee,{posts:t}),r.a.createElement(oe,{pages:a,onPageChange:s,initialPage:o})):r.a.createElement(ee,{posts:t}):r.a.createElement(re,{variant:"error"}," ",n.error," ")||r.a.createElement(re,{variant:"info"}," No posts!!! ");return r.a.createElement("div",null," ",l," ")}}]),t}(r.a.Component);se.defaultProps={initialPage:1,postsPerPage:5,pagination:!0};var le=se,ie=Object(P.b)(function(e){return{posts:(n=e,n.posts.data),request:A(e),pages:q(e),presentPage:(t=e,t.posts.presentPage)};var t,n},function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(k.a)(w.a.mark(function n(a){var r,c,o,s;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(T()),n.prev=1,r=(e-1)*t,c=t,n.next=6,S.a.get("".concat(x).concat("/api","/posts/range/").concat(r,"/").concat(c));case 6:o=n.sent,s={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(L(s)),a(I()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(B(n.t0.message));case 15:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(le),ue=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Blog"),r.a.createElement(ie,{postsPerPage:3,pagination:!1}))},pe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",null,e>0?"Posts amount: "+e:" No posts ")}}]),t}(r.a.Component),me=Object(P.b)(function(e){return{posts:(t=e,t.posts.data.length),request:A(e)};var t},function(e){return{loadPosts:function(){return e(function(){var e=Object(k.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(T()),e.prev=1,e.next=4,S.a.get("".concat(x).concat("/api","/posts"));case 4:n=e.sent,t({payload:n.data,type:U}),t(I()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(B(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())}}})(pe),fe=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Posts list"),r.a.createElement(me,null),r.a.createElement(ie,null))},de=n(102),he=n.n(de),Ee=(n(247),n(248),n(249),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(H.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),ve=(n(250),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(251);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Oe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:be({},t,Object(y.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:be({},t,{content:e})})},n.addPost=function(e){var t=n.props,a=t.addPost,r=t.resetRequest,c=n.state.post;e.preventDefault(),a(c),r()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.addPost,c=this.props.request;return c.error?r.a.createElement(re,{variant:"error"},c.error):c.success?r.a.createElement(re,{variant:"success"},"Post has been added!"):c.pending?r.a.createElement(ne,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(Ee,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(Ee,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(ve,null,"Edit post content"),r.a.createElement(he.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(Y,{variant:"primary"},"Add post"))}}]),t}(r.a.Component),Pe=Object(P.b)(function(e){return{request:A(e)}},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(T()),t.prev=1,t.next=4,S.a.post("".concat(x).concat("/api","/posts"),e);case 4:n(I()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(B(t.t0.message));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e({type:J})}}})(Oe),je=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Post"),r.a.createElement(Pe,null))},ye=n(40),_e=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPost)(e.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.location,c=n.pending?r.a.createElement(ne,null):n.success?t.length>0?r.a.createElement("article",{className:"post-summary"},r.a.createElement(z,null,t[0].title),r.a.createElement(Z,null,t[0].content),r.a.createElement("p",null,"Author: ",t[0].author),r.a.createElement(ye.FacebookProvider,{appId:"381113066102363"},r.a.createElement(ye.Comments,{href:"".concat(x,"/").concat(a.pathname)})),r.a.createElement(ye.FacebookProvider,{appId:"381113066102363"},r.a.createElement(ye.ShareButton,{className:"fb-share-button",href:"".concat(x,"/").concat(a.pathname)},"Share this link!"))):r.a.createElement(re,{variant:"info"}," No posts!!! "):(r.a.createElement(re,{variant:"error"}," ",n.error.toString()," "),console.log(n.error));return r.a.createElement("div",null,c)}}]),t}(r.a.Component),we=Object(m.e)(function(e){return r.a.createElement(_e,e)}),ke=Object(P.b)(function(e){return{posts:(t=e,t.posts.singlePost),request:A(e)};var t},function(e){return{loadPost:function(t){return e(function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(T()),t.prev=1,t.next=4,S.a.get("".concat(x).concat("/api","/posts/").concat(e));case 4:a=t.sent,n({payload:a.data,type:F}),n(I()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(B(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(we),Ne=function(){return r.a.createElement("div",null,r.a.createElement(ke,null))},Se=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null,"Stone Mountain, GA 30083"))},xe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},Ce=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:ue}),r.a.createElement(m.a,{path:"/posts",exact:!0,component:fe}),r.a.createElement(m.a,{path:"/posts/new",exact:!0,component:je}),r.a.createElement(m.a,{path:"/posts/:id",exact:!0,component:Ne}),r.a.createElement(m.a,{path:"/contact",exact:!0,component:Se}),r.a.createElement(m.a,{component:xe})))}}]),t}(r.a.Component),De=(n(281),n(282),n(25)),Ae=n(103),qe=Object(De.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case U:return D({},e,{data:t.payload});case M:return D({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(j.a)(t.payload.posts)});case F:return D({},e,{singlePost:t.payload});case Q:return D({},e,{request:{pending:!0,error:null,success:null}});case X:return D({},e,{request:{pending:!1,error:null,success:!0}});case J:return D({},e,{request:{pending:!1,error:null,success:null}});case G:return D({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}}}),Re=Object(De.e)(qe,Object(De.d)(Object(De.a)(Ae.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(function(){return r.a.createElement(P.a,{store:Re},r.a.createElement(h.a,null,r.a.createElement(Ce,null)))},null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.da92c41b.chunk.js.map