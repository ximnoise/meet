(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(7),r=n.n(i),l=(n(13),n(2)),u=n(3),o=n(5),h=n(4),j=(n(14),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(a.jsxs)("div",{className:"event-container",children:[Object(a.jsx)("h1",{children:t.summary}),Object(a.jsx)("p",{children:t.start.dateTime}),Object(a.jsx)("p",{children:t.location}),this.state.showHideDetails&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("a",{href:t.htmlLink,children:"See Details on Google Calendar"}),Object(a.jsx)("p",{children:t.description})]}),Object(a.jsx)("button",{className:"show-hide-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"hide details":"show details"})]})}}]),n}(s.Component)),d=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(j,{event:e})},e.id)}))})}}]),n}(s.Component),b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(s.Component),O=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={eventValue:32},e.handleEventInputChanged=function(t){var n=t.target.value;e.setState({eventValue:n})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"event-number",children:[Object(a.jsx)("label",{for:"numberOfEvent"}),Object(a.jsx)("input",{type:"number",id:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(s.Component),v=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)(O,{}),Object(a.jsx)(d,{})]})}}]),n}(s.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.121709a1.chunk.js.map