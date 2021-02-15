(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),s=n(21),o=n.n(s),c=n(3),i=n.n(c),l=n(8),u=n(4),d=n(5),h=n(7),p=n(6),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:"24"},e.handleChange=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(a.jsxs)("div",{className:"NumberOfEvents",children:[Object(a.jsx)("label",{children:"Number of events"}),Object(a.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleChange})]})}}]),n}(r.Component),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,locations:e.props.locations},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e.handleChange=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,r=t.suggestions,s=t.showSuggestions;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("label",{children:"Choose your nearest city"}),Object(a.jsx)("input",{type:"text",className:"city",value:n,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:s?{}:{display:"none"},children:[r.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),f=n(22),b=n.n(f),j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(a.jsxs)("div",{className:"Expanded-Event",children:[Object(a.jsx)("h4",{children:"About event:"}),Object(a.jsx)("div",{className:"link-container",children:Object(a.jsx)("a",{className:"link",href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(a.jsx)("p",{className:"description",children:t.description})]})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.formatTime=function(){var t=e.props.event.start.dateTime,n=b()(t).format("dddd, MMMM Do YYYY, h:mm a");return Object(a.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h2",{className:"summary",children:e.summary}),Object(a.jsxs)("div",{className:"subheading",children:[Object(a.jsx)("div",{className:"time",children:this.formatTime()}),Object(a.jsxs)("div",{className:"location-container",children:[Object(a.jsxs)("span",{className:"summary-2",children:["@",e.summary," | "]}),Object(a.jsx)("span",{className:"location",children:e.location})]})]})]}),Object(a.jsx)("div",{children:this.renderExpandedComponent()}),Object(a.jsx)("button",{type:"button",className:"btn-details",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(r.Component),g=function(e){var t=e.events;return t?Object(a.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(j,{event:e})},e.id)}))}):null};var w=function(){return Object(a.jsxs)("div",{className:"loginView",children:[Object(a.jsx)("h1",{children:"Welcome to the Meet app"}),Object(a.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(a.jsx)("div",{className:"btn-google",children:Object(a.jsxs)("a",{class:"btn-login",href:"https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=599445530558-r804ljdavn98l072h16mrqdi22lv9q48.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fximnoise.github.io%2Fmeet",rel:"nofollow noopener",children:[Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"}),Object(a.jsx)("b",{children:"Sign in with google"})]})}),Object(a.jsx)("a",{className:"btn-privacy",href:"https://ximnoise.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})},x=n(24),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],y=n(10),k=n.n(y),S=n(9),E=n.n(S),N=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",{events:O,locations:C(O)});case 4:return e.next=6,T();case 6:if(!(t=e.sent)){e.next=16;break}return A(),n="https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(r=C(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",{events:a.data.events,locations:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},T=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,Z(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,k.a.get("https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 19:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 22:return e.abrupt("return",r&&M(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),n=encodeURIComponent(t),e.next=4,fetch("https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=(n(49),n(50),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:"24",tokenCheck:!1},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?N().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,s);return e.setState({events:a,currentLocation:t,locations:n.locations})})):N().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,Z(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents()),N().then((function(e){s.mounted&&s.setState({events:e.events.slice(0,s.state.numberOfEvents),locations:C(e.events)})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.numberOfEvents,n=e.events,r=e.locations;return!1===e.tokenCheck?Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(w,{})}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)(v,{locations:r,updateEvents:this.updateEvents}),Object(a.jsx)(m,{numberOfEvents:t,updateEvents:this.updateEvents}),Object(a.jsx)(g,{events:n})]})}}]),n}(r.Component)),I=n(23);o.a.render(Object(a.jsx)(q,{}),document.getElementById("root")),I.config("aed2091d51704321bb224f67207390e8").install()}},[[52,1,2]]]);
//# sourceMappingURL=main.a87f2506.chunk.js.map