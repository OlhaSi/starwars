(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{23:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(18),i=n.n(s),c=n(3),r=n(4),l=n(6),o=n(5),h=(n(23),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("button",{className:"btn",onClick:function(){return e.props.onClick()},children:"Next"})}}]),n}(a.Component),u=n(7),d=n.n(u),p=n(8),b=n(26).default;function m(){return(m=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("https://swapi.dev/api/people/".concat(t));case 2:return n=e.sent,e.abrupt("return",{img:"https://starwars-visualguide.com/assets/img/characters/".concat(t,".jpg"),name:n.data.name,gender:n.data.gender,birth_year:n.data.birth_year,eye_color:n.data.eye_color});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("https://swapi.dev/api/planets/".concat(t));case 2:return n=e.sent,e.abrupt("return",{img:"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg"),name:n.data.name,diameter:n.data.diameter,gravity:n.data.gravity,population:n.data.population});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("https://swapi.dev/api/starships/".concat(t));case 2:return n=e.sent,e.abrupt("return",{img:"https://starwars-visualguide.com/assets/img/starships/".concat(t,".jpg"),name:n.data.name,model:n.data.model,length:n.data.length,passengers:n.data.passengers});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(45);var g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onClick=function(){a.handleClick()},a.state={index:0,person:{}},a}return Object(r.a)(n,[{key:"handleClick",value:function(){var e=this,t=this.state.index<15?this.state.index+1:1;(function(e){return m.apply(this,arguments)})(t).then((function(n){e.setState({person:n,index:t})}))}},{key:"componentDidMount",value:function(){this.handleClick()}},{key:"render",value:function(){var e=this.state.person,t=e.img,n=e.name,a=e.gender,s=e.birth_year,i=e.eye_color;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"item-details",children:[Object(h.jsx)("img",{alt:"person-img",className:"item-image",src:t}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsxs)("ul",{className:"list-group",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Gender: "}),Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Birth Year: "}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Eye Color: "}),Object(h.jsx)("span",{children:i})]})]})]})]}),Object(h.jsx)(j,{onClick:this.onClick})]})}}]),n}(a.Component),f=(n(46),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onClick=function(){a.handleClick()},a.state={index:1,planet:{}},a}return Object(r.a)(n,[{key:"handleClick",value:function(){var e=this,t=this.state.index<15?this.state.index+1:2;(function(e){return O.apply(this,arguments)})(t).then((function(n){e.setState({planet:n,index:t})}))}},{key:"componentDidMount",value:function(){this.handleClick()}},{key:"render",value:function(){var e=this.state.planet,t=e.img,n=e.name,a=e.diameter,s=e.gravity,i=e.population;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"item-details",children:[Object(h.jsx)("img",{alt:"planet-img",className:"item-image",src:t}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsxs)("ul",{className:"list-group",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Diameter: "}),Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Gravity: "}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Population: "}),Object(h.jsx)("span",{children:i})]})]})]})]}),Object(h.jsx)(j,{onClick:this.onClick})]})}}]),n}(a.Component)),v=(n(47),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onClick=function(){a.handleClick()},a.state={index:8,starship:{}},a}return Object(r.a)(n,[{key:"handleClick",value:function(){var e=this,t=this.state.index<14?this.state.index+1:8;(function(e){return x.apply(this,arguments)})(t).then((function(n){e.setState({starship:n,index:t})})).catch((function(n){e.setState({index:t})}))}},{key:"componentDidMount",value:function(){this.handleClick()}},{key:"render",value:function(){var e=this.state.starship,t=e.img,n=e.name,a=e.model,s=e.length,i=e.passengers;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"item-details",children:[Object(h.jsx)("img",{alt:"starship-img",className:"item-image",src:t}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsxs)("ul",{className:"list-group",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Model: "}),Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Length: "}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("span",{children:"Passengers: "}),Object(h.jsx)("span",{children:i})]})]})]})]}),Object(h.jsx)(j,{onClick:this.onClick})]})}}]),n}(a.Component)),C=(n(48),function(e){var t=e.onPersonChange,n=e.onPlanetChange,a=e.onStarshipChange;return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:t,href:"",children:"People"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:n,href:"",children:"Planets"})}),Object(h.jsx)("li",{onClick:a,children:Object(h.jsx)("a",{href:"#",children:"Starships"})})]})})}),k=(n(49),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={personPage:!0,planetPage:!1,starshipPage:!1},e.onPersonChange=function(t){t.preventDefault(),e.setState({personPage:!0,planetPage:!1,starshipPage:!1})},e.onPlanetChange=function(t){t.preventDefault(),e.setState({planetPage:!0,personPage:!1,starshipPage:!1})},e.onStarshipChange=function(){e.setState({starshipPage:!0,personPage:!1,planetPage:!1})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.personPage,n=e.planetPage,a=e.starshipPage,s=t?Object(h.jsx)(g,{}):null,i=n?Object(h.jsx)(f,{}):null,c=a?Object(h.jsx)(v,{}):null;return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{onPersonChange:this.onPersonChange,onPlanetChange:this.onPlanetChange,onStarshipChange:this.onStarshipChange}),s,i,c]})}}]),n}(a.Component));i.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cb12eb7c.chunk.js.map