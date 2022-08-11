(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(208)},129:function(e,t,a){},131:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(106),o=a.n(l),i=(a(129),a(213)),c=a(212),u=(a(131),a(34)),m=a(218),d=a(221),s=a(214),p=a(215),g=a(220),h=a(118),f=a(120),b=a(219),E=a(40),y=a(44),v=Object(y.b)({name:"todoList",initialState:[{id:1,name:"Learn Yoga",completed:!1,priority:"Medium"},{id:2,name:"Learn Redux",completed:!0,priority:"High"},{id:3,name:"Learn JavaScript",completed:!1,priority:"Low"}],reducers:{addTodo:function(e,t){e.push(t.payload)},toggleTodoStatus:function(e,t){var a=e.find(function(e){return e.id===t.payload});a&&(a.completed=!a.completed)}}}),O={High:"red",Medium:"blue",Low:"gray"};function j(e){var t=e.name,a=e.prioriry,l=e.completed,o=e.id,i=Object(n.useState)(l),c=Object(u.a)(i,2),d=c[0],s=c[1],p=Object(E.b)();return r.a.createElement(m.a,{justify:"space-between",style:Object(f.a)({marginBottom:3},d?{opacity:.5,textDecoration:"line-through"}:{})},r.a.createElement(b.a,{checked:d,onChange:function(){s(!d),p(v.actions.toggleTodoStatus(o))}},t),r.a.createElement(g.a,{color:O[a],style:{margin:0}},a))}var w=function(e){return{type:"todoList/addTodo",payload:e}},C=a(217),S=a(51),L=Object(S.a)(function(e){return e.todoList},function(e){return e.filters.status},function(e){return e.filters.search},function(e){return e.filters.priorities},function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.filter(function(e){return"All"===t?n.length?e.name.includes(a)&&n.includes(e.priority):e.name.includes(a):e.name.includes(a)&&("Completed"===t?e.completed:!e.completed)&&(!n.length||n.includes(e.priority))})});function x(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("Medium"),i=Object(u.a)(o,2),c=i[0],f=i[1],b=Object(E.c)(L),y=Object(E.b)();return r.a.createElement(m.a,{style:{height:"calc(100% - 40px)"}},r.a.createElement(d.a,{span:24,style:{height:"calc(100% - 40px)",overflowY:"auto"}},b.map(function(e){return r.a.createElement(j,{key:e.id,id:e.id,name:e.name,prioriry:e.priority,completed:e.completed})})),r.a.createElement(d.a,{span:24},r.a.createElement(s.a.Group,{style:{display:"flex"},comspact:!0},r.a.createElement(s.a,{value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement(p.a,{defaultValue:"Medium",value:c,onChange:function(e){return f(e)}},r.a.createElement(p.a.Option,{value:"High",label:"High"},r.a.createElement(g.a,{color:"red"},"High")),r.a.createElement(p.a.Option,{value:"Medium",label:"Medium"},r.a.createElement(g.a,{color:"blue"},"Medium")),r.a.createElement(p.a.Option,{value:"Low",label:"Low"},r.a.createElement(g.a,{color:"gray"},"Low"))),r.a.createElement(h.a,{type:"primary",onClick:function(){y(w({id:Object(C.a)(),name:a,priority:c,completed:!1})),l(""),f("Medium")}},"Add"))))}var M=a(216),T=Object(y.b)({name:"filters",initialState:{search:"",status:"All",priorities:[]},reducers:{searchFilterChange:function(e,t){e.search=t.payload},statusFilterChange:function(e,t){e.status=t.payload},prioritiesFilterChange:function(e,t){e.priorities=t.payload}}}),A=s.a.Search;function F(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("All"),c=Object(u.a)(o,2),s=c[0],h=c[1],f=Object(n.useState)([]),b=Object(u.a)(f,2),y=b[0],v=b[1],O=Object(E.b)();return r.a.createElement(m.a,{justify:"center"},r.a.createElement(d.a,{span:24},r.a.createElement(i.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10}},"Search"),r.a.createElement(A,{placeholder:"input search text",value:a,onChange:function(e){l(e.target.value),O(T.actions.searchFilterChange(e.target.value))}})),r.a.createElement(d.a,{sm:24},r.a.createElement(i.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10}},"Filter By Status"),r.a.createElement(M.a.Group,{value:s,onChange:function(e){h(e.target.value),O(T.actions.statusFilterChange(e.target.value))}},r.a.createElement(M.a,{value:"All"},"All"),r.a.createElement(M.a,{value:"Completed"},"Completed"),r.a.createElement(M.a,{value:"Todo"},"To do"))),r.a.createElement(d.a,{sm:24},r.a.createElement(i.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10}},"Filter By Priority"),r.a.createElement(p.a,{mode:"multiple",allowClear:!0,placeholder:"Please select",style:{width:"100%"},value:y,onChange:function(e){v(e),O(T.actions.priorityFilterChange(e))}},r.a.createElement(p.a.Option,{value:"High",label:"High"},r.a.createElement(g.a,{color:"red"},"High")),r.a.createElement(p.a.Option,{value:"Medium",label:"Medium"},r.a.createElement(g.a,{color:"blue"},"Medium")),r.a.createElement(p.a.Option,{value:"Low",label:"Low"},r.a.createElement(g.a,{color:"gray"},"Low")))))}var H=i.a.Title;var B=function(){return r.a.createElement("div",{style:{width:500,margin:"0 auto",display:"flex",flexDirection:"column",backgroundColor:"white",padding:20,boxShadow:"0 0 10px 4px #bfbfbf",borderRadius:5,height:"90vh"}},r.a.createElement(H,{style:{textAlign:"center"}},"TODO APP with REDUX"),r.a.createElement(F,null),r.a.createElement(c.a,null),r.a.createElement(x,null))},P=Object(y.a)({reducer:{filters:T.reducer,todoList:v.reducer}});o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:P},r.a.createElement(B,null))))}},[[122,2,1]]]);
//# sourceMappingURL=main.03c89e55.chunk.js.map