webpackJsonp([1,2],{1478:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),a=r(o),u=n(70),l=r(u),i=n(8),c=n(25),s=n(24),f=n(71),p=r(f);n(!function(){var e=new Error('Cannot find module "./styles/styles.scss"');throw e.code="MODULE_NOT_FOUND",e}());var d=n(205),m=r(d),y=n(210),b=r(y),h=n(211),_=r(h),v=n(212),E=r(v),O=n(207),w=r(O),g=n(209),j=r(g),P=n(208),k=r(P),N=n(206),S=r(N),R=n(213),M=r(R),T=n(69),U=(0,c.applyMiddleware)(p.default)(c.createStore),C=U(M.default),x=localStorage.getItem("token");x&&C.dispatch({type:T.AUTH_USER}),l.default.render(a.default.createElement(i.Provider,{store:C},a.default.createElement(s.Router,{history:s.hashHistory},a.default.createElement(s.Route,{path:"/",component:m.default},a.default.createElement(s.IndexRoute,{component:b.default}),a.default.createElement(s.Route,{path:"/public",component:_.default}),a.default.createElement(s.Route,{path:"/secret",component:(0,S.default)(E.default)}),a.default.createElement(s.Route,{path:"/signin",component:w.default}),a.default.createElement(s.Route,{path:"/signup",component:j.default}),a.default.createElement(s.Route,{path:"/signout",component:k.default})))),document.querySelector(".container"))},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),c=r(i),s=n(234),f=r(s),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(f.default,null),this.props.children)}}]),t}(i.Component);t.default=p},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){function t(e){var t=e.auth;return{authenticated:t.authenticated}}var n=function(t){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),l(n,[{key:"componentWillMount",value:function(){this.props.authenticated||f.hashHistory.push("/signin")}},{key:"componentWillUpdate",value:function(e){e.authenticated||f.hashHistory.push("/signin")}},{key:"render",value:function(){return c.default.createElement(e,this.props)}}]),n}(i.Component);return(0,s.connect)(t)(n)};var i=n(2),c=r(i),s=n(8),f=n(24)},207:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.auth;return{errorMsg:t.error}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=o(s),p=n(50),d=n(8),m=n(38),y=r(m),b=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"renderAlert",value:function(){if(this.props.errorMsg)return f.default.createElement("div",{className:"alert alert-danger"},f.default.createElement("strong",null,"Oops! "),this.props.errorMsg)}},{key:"handleFormSubmit",value:function(e){this.props.signUserIn(e)}},{key:"render",value:function(){var e=this.props.handleSubmit;return f.default.createElement("div",{className:"card card-block center-block"},f.default.createElement("form",{onSubmit:e(this.handleFormSubmit.bind(this)),className:"col-xs"},f.default.createElement("h2",null,"Sign In"),f.default.createElement("div",{className:"form-group"},f.default.createElement("label",null,"Email:"),f.default.createElement(p.Field,{type:"email",name:"email",component:"input",className:"form-control",placeholder:"email@email.com",required:!0})),f.default.createElement("div",{className:"form-group"},f.default.createElement("label",null,"Password:"),f.default.createElement(p.Field,{type:"password",name:"password",component:"input",className:"form-control",placeholder:"your password",required:!0})),this.renderAlert(),f.default.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign in")))}}]),t}(s.Component);b=(0,p.reduxForm)({form:"signin"},null,y)(b),b=(0,d.connect)(i,y)(b),t.default=b},208:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=o(c),f=(n(24),n(8)),p=n(38),d=r(p),m=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"componentWillMount",value:function(){this.props.signUserOut()}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"Hope to see you soon!"))}}]),t}(c.Component);t.default=(0,f.connect)(null,d)(m)},209:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t={};return e.password!==e.password2&&(t.password="Password must match"),t}function c(e){var t=e.auth;return{errorMsg:t.error}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),p=o(f),d=n(50),m=n(8),y=n(38),b=r(y),h=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"renderAlert",value:function(){if(this.props.errorMsg)return p.default.createElement("div",{className:"alert alert-danger"},p.default.createElement("strong",null,"Oops!")," ",this.props.errorMsg)}},{key:"handleFormSubmit",value:function(e){e.password==e.password2?this.props.signUserUp({name:e.name,email:e.email,password:e.password}):console.log("password does not matched")}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit;e.password;return p.default.createElement("div",{className:"card card-block center-block"},p.default.createElement("form",{onSubmit:t(this.handleFormSubmit.bind(this)),className:"col-xs"},p.default.createElement("h2",null,"Sign Up"),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",null,"Name:"),p.default.createElement(d.Field,{name:"name",type:"text",component:"input",className:"form-control",placeholder:"Name",required:!0})),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",null,"Email:"),p.default.createElement(d.Field,{name:"email",type:"email",component:"input",className:"form-control",placeholder:"sample@email.com",required:!0})),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",null,"Password:"),p.default.createElement(d.Field,{type:"password",name:"password",component:"input",className:"form-control",placeholder:"your password",required:!0})),p.default.createElement("div",{className:"form-group"},p.default.createElement("label",null,"Comfirm Password:"),p.default.createElement(d.Field,{type:"password",name:"password2",component:"input",className:"form-control",placeholder:"your password again",required:!0})),this.renderAlert(),p.default.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))}}]),t}(f.Component);h=(0,d.reduxForm)({form:"signup",validate:i},null,b)(h),h=(0,m.connect)(c,b)(h),t.default=h},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),c=r(i),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Home"))}}]),t}(i.Component);t.default=s},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),c=r(i),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Public"))}}]),t}(i.Component);t.default=s},212:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=o(c),f=n(8),p=n(38),d=r(p),m=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"componentWillMount",value:function(){this.props.fetchInfo()}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"Secret"),s.default.createElement("p",{className:"text-muted"},"Status: ",this.props.status,"☀"))}}]),t}(c.Component);t.default=(0,f.connect)(function(e){var t=e.auth;return{status:t.status}},d)(m)},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=n(50),u=n(235),l=r(u),i=(0,o.combineReducers)({form:a.reducer,auth:l.default});t.default=i},234:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.auth;return{authenticated:t.authenticated}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=o(s),p=n(8),d=n(38),m=r(d),y=n(24),b=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"renderSignButton",value:function(){return this.props.authenticated?f.default.createElement("li",{className:"nav-item"},f.default.createElement(y.Link,{className:"nav-link",to:"/signout"},"Sign out")):[f.default.createElement("li",{className:"nav-item active",key:"1"},f.default.createElement(y.Link,{to:"/signin",className:"nav-link"},"Sign in")),f.default.createElement("li",{className:"nav-item",key:"2"},f.default.createElement(y.Link,{to:"/signup",className:"nav-link"},"Sign Up"))]}},{key:"render",value:function(){return f.default.createElement("nav",{className:"navbar navbar-light bg-faded navbar-toggleable-xl fixed-top"},f.default.createElement(y.Link,{className:"navbar-brand",to:"/"},"Hackathons"),f.default.createElement("span",{className:"float-left"},f.default.createElement("ul",{className:"nav navbar-nav"},f.default.createElement("li",{className:"nav-item"},f.default.createElement(y.Link,{className:"nav-link",to:"/public"},"Public")),f.default.createElement("li",{className:"nav-item"},f.default.createElement(y.Link,{className:"nav-link",to:"/secret"},"Secret")))),f.default.createElement("span",{className:"pull-xs-right"},f.default.createElement("ul",{className:"nav navbar-nav"},this.renderSignButton())))}}]),t}(s.Component);t.default=(0,p.connect)(i,m)(b)},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.AUTH_USER:return r({},e,{error:"",authenticated:!0});case o.UNAUTH_USER:return r({},e,{authenticated:!1});case o.AUTH_ERROR:return r({},e,{error:t.payload});case o.TRY_CONNECT:return r({},e,{status:t.payload})}return e};var o=n(69)},38:function(e,t,n){"use strict";function r(e){var t=e.email,n=e.password;return function(e){c.post("/signin",{email:t,password:n}).then(function(t){e({type:i.AUTH_USER}),localStorage.setItem("token",t.data.token),l.browserHistory.push("/secret"),c.defaults.headers.common.Authorization=localStorage.getItem("token")}).catch(function(t){console.log(t),e({type:i.AUTH_ERROR,payload:"Bad Login Info"})})}}function o(e){return function(t){console.log("userObj: ",e),c.post("/signup",e).then(function(e){t({type:i.AUTH_USER}),localStorage.setItem("token",e.data.token),l.browserHistory.push("/secret"),c.defaults.headers.common.Authorization=localStorage.getItem("token")}).catch(function(e){console.log(e),t({type:i.AUTH_ERROR,payload:"Failed to Sign up, please try again."})})}}function a(){return function(e){e({type:i.UNAUTH_USER}),localStorage.removeItem("token")}}function u(){return function(e){c.get("/api").then(function(t){e({type:i.TRY_CONNECT,payload:t.data.status})}).catch(function(e){console.log(e.response.data)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.signUserIn=r,t.signUserUp=o,t.signUserOut=a,t.fetchInfo=u;var l=n(24),i=n(69),c=n(122),s="http://localhost:8000";c.defaults.baseURL=s,localStorage.getItem("token")&&(c.defaults.headers.common.Authorization=localStorage.getItem("token")),c.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTH_USER="auth_user",t.UNAUTH_USER="unauth_user",t.AUTH_ERROR="auth_error",t.TRY_CONNECT="try_connect"}},[1478]);