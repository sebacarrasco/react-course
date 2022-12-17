/*! For license information please see main.cbd1c814.chunk.js.LICENSE.txt */
(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{119:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(34),i=n(10),u=n(12),l=n.n(u),j=n(21),d="https://react-course-mern-calendar.herokuapp.com/api",b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(d,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(d,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},f="[ui] Open modal",O="[ui] Close modal",p="[event] Set Active",v="[event] Event logout",h="[event] Add new",g="[event] Clear active event",x="[event] Event updated",y="[event] Event deleted",w="[event] Events loaded",N="[auth] Finish checking login state",E="[auth] Login",k="[auth] Logout",S=n(18),C=n.n(S),D=n(5),T=n(17),P=n.n(T),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},I=function(e){return{type:h,payload:e}},_=function(){return{type:g}},A=function(e){return{type:x,payload:e}},R=function(){return{type:y}},G=function(e){return{type:w,payload:e}},F=function(){return{type:N}},V=function(e){return{type:E,payload:e}},H=function(){return function(e){localStorage.clear(),e({type:v}),e(J())}},J=function(){return{type:k}},M=n(15),U=n(25),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(M.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(D.a)(Object(D.a)({},r),{},Object(U.a)({},t.name,t.value)))};return[r,s,o]},B=(n(86),n(2)),X=function(){var e=Object(o.b)(),t=q({loginEmail:"seba@uc.cl",loginPassword:"123456"}),n=Object(M.a)(t,2),a=n[0],r=n[1],c=a.loginEmail,s=a.loginPassword,i=q({registerName:"",registerEmail:"",registerPassword1:"123456",registerPassword2:"123456"}),u=Object(M.a)(i,2),d=u[0],m=u[1],f=d.registerName,O=d.registerEmail,p=d.registerPassword1,v=d.registerPassword2;return Object(B.jsx)("div",{className:"container login-container",children:Object(B.jsxs)("div",{className:"row",children:[Object(B.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(B.jsx)("h3",{children:"Login"}),Object(B.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:c.uid,name:c.name}))):C.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"loginEmail",value:c,onChange:r})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"loginPassword",value:s,onChange:r})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(B.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(B.jsx)("h3",{children:"Register"}),Object(B.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),p!==v)return C.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=O,a=p,r=f,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):C.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"registerName",value:f,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"registerEmail",value:O,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"registerPassword1",value:p,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"registerPassword2",value:v,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"submit",className:"btnSubmit",value:"Register"})})]})]})]})})},z=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(B.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(B.jsx)("span",{className:"navbar-brand",children:e}),Object(B.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(H())},children:[Object(B.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(B.jsx)("span",{children:"Logout"})]})]})},K=n(52),Q=(n(88),n(89),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),W=function(e){var t=e.event,n=t.title,a=t.user;return Object(B.jsxs)("div",{children:[Object(B.jsx)("strong",{children:n}),Object(B.jsxs)("span",{children:[" -",a.name]})]})},Y=n(47),Z=n.n(Y),$=n(48),ee=n.n($),te=function(){return{type:f}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=P()().minutes(0).seconds(0).add(1,"hours"),re=ae.clone().add(1,"hours"),ce={title:"",notes:"",start:ae.toDate(),end:re.toDate()},oe=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(ae.toDate()),c=Object(M.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(re.toDate()),d=Object(M.a)(u,2),b=d[0],f=d[1],p=Object(a.useState)(!0),v=Object(M.a)(p,2),h=v[0],g=v[1],x=Object(a.useState)(ce),y=Object(M.a)(x,2),w=y[0],N=y[1],E=w.notes,k=w.title,S=w.start,T=w.end;Object(a.useEffect)((function(){N(t||ce)}),[t,N]);var L=function(e){var t=e.target;N((function(e){return Object(D.a)(Object(D.a)({},e),{},Object(U.a)({},t.name,t.value))}))},R=function(){n({type:O}),n(_()),N(ce)};return Object(B.jsxs)(Z.a,{isOpen:e,onRequestClose:R,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(B.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=P()(S),c=P()(T);r.isSameOrAfter(c)?C.a.fire("Error","La fecha final debe ser mayor que la fecha de inicio","error"):k.trim().length<2?g(!1):(n(t?(a=w,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(A(a)):C.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var r,c,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("events",e,"POST");case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,o=a().auth,s=o.uid,i=o.name,c.ok&&(e.id=c.event.id,e.user={_id:s,name:i},n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),g(!0),R())},children:[Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Fecha y hora inicio"}),Object(B.jsx)(ee.a,{onChange:function(e){i(e),N((function(t){return Object(D.a)(Object(D.a)({},t),{},{start:e})}))},value:s,className:"form-control"})]}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Fecha y hora fin"}),Object(B.jsx)(ee.a,{onChange:function(e){f(e),N((function(t){return Object(D.a)(Object(D.a)({},t),{},{end:e})}))},value:b,minDate:s,className:"form-control"})]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Titulo y notas"}),Object(B.jsx)("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:L}),Object(B.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:E,onChange:L}),Object(B.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(B.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(B.jsx)("i",{className:"far fa-save"}),Object(B.jsx)("span",{children:" Guardar"})]})]})]})},se=function(){var e=Object(o.b)();return Object(B.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(te())},children:Object(B.jsx)("i",{className:"fas fa-plus"})})},ie=function(){var e=Object(o.b)();return Object(B.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,m("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(R()):C.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(B.jsx)("i",{className:"fas fa-trash"}),Object(B.jsx)("span",{children:" Borrar evento "})]})};P.a.locale("es");var ue=Object(K.b)(P.a),le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(M.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=L(a.events),t(G(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(B.jsxs)("div",{className:"calendar-screen",children:[Object(B.jsx)(z,{}),Object(B.jsx)(K.a,{localizer:ue,events:n,startAccesor:"start",endAccesor:"end",messages:Q,onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:p,payload:t})},onView:function(e){d(e),localStorage.setItem("lastView",e)},eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onSelectSlot:function(t){e(_())},selectable:!0,view:u,components:{event:W}}),Object(B.jsx)(se,{}),r&&Object(B.jsx)(ie,{}),Object(B.jsx)(oe,{})]})},je=n(37),de=function(e){var t=e.isLogged,n=e.component,a=Object(je.a)(e,["isLogged","component"]);return Object(B.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(B.jsx)(n,Object(D.a)({},e)):Object(B.jsx)(i.a,{to:"/login"})}}))},be=function(e){var t=e.isLogged,n=e.component,a=Object(je.a)(e,["isLogged","component"]);return Object(B.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(B.jsx)(i.a,{to:"/"}):Object(B.jsx)(n,Object(D.a)({},e))}}))},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;if(Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(F());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n)return Object(B.jsx)("h5",{children:"Espere..."});var c=!!r;return Object(B.jsx)(s.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(i.d,{children:[Object(B.jsx)(be,{exact:!0,path:"/login",component:X,isLogged:c}),Object(B.jsx)(de,{exact:!0,path:"/",component:le,isLogged:c}),Object(B.jsx)(i.a,{to:"/"})]})})})},fe=n(26),Oe=n(66),pe={checking:!0},ve=n(53),he={events:[],activeEvent:null},ge={modalOpen:!1},xe=Object(fe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case O:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case h:return Object(D.a)(Object(D.a)({},e),{},{events:[t.payload].concat(Object(ve.a)(e.events))});case g:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case x:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case y:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case w:return Object(D.a)(Object(D.a)({},e),{},{events:Object(ve.a)(t.payload)});case v:return Object(D.a)({},he);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(D.a)(Object(D.a)({},e),{},{checking:!1},t.payload);case N:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case k:return{checking:!1};default:return e}}}),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.c,we=Object(fe.d)(xe,ye(Object(fe.a)(Oe.a))),Ne=function(){return Object(B.jsx)(o.a,{store:we,children:Object(B.jsx)(me,{})})};n(119);c.a.render(Object(B.jsx)(Ne,{}),document.getElementById("root"))},86:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.cbd1c814.chunk.js.map