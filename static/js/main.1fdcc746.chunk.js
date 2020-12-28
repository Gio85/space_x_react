(this.webpackJsonpspace_x_project=this.webpackJsonpspace_x_project||[]).push([[0],{151:function(e,t,n){"use strict";var a,c,r,i;n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),function(e){e.API="https://api.spacexdata.com/v4"}(a||(a={})),function(e){e.COMPANY="company",e.CAPSULES="capsules",e.ROCKETS="rockets",e.CREW="crew",e.DRAGONS="dragons",e.LANDPADS="landpads",e.LAUNCHES="launches",e.LAUNCHPADS="launchpads",e.PAYLOADS="payloads",e.ROADSTER="roadster"}(c||(c={})),function(e){e.HOME="/",e.CAPSULES="/capsules",e.ROCKETS="/rockets",e.CREW="/crew",e.DRAGONS="/dragons",e.LANDPADS="/landpads",e.LAUNCHES="/launches",e.LAUNCHPADS="/launchpads",e.PAYLOADS="/payloads",e.ROADSTER="/roadster",e.SHIPS="/ships"}(r||(r={})),function(e){e.POST="post",e.GET="get",e.PUT="put",e.DELETE="delete",e.PATCH="patch"}(i||(i={}))},152:function(e,t){},153:function(e,t){},154:function(e,t){},155:function(e,t){},225:function(e,t,n){},30:function(e,t,n){"use strict";var a=n(151);n.d(t,"API_ENDPOINT",(function(){return a.a})),n.d(t,"APP_ENDPOINT",(function(){return a.b})),n.d(t,"HOST",(function(){return a.c})),n.d(t,"HTTP_METHOD",(function(){return a.d}));n(152),n(153),n(154),n(155)},380:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c),i=n(27),s=n.n(i),o=(n(225),n(149),n(41)),l=n(36),d=n(47),u=n(61),j=n.n(u),b=n(74),O=n(58),h=n(56),p=n(57),f=n(88),x=n(59),g=n(102),m=n(101),y=n(30),P=function(){function e(t){Object(h.a)(this,e),this.client=t}return Object(p.a)(e,[{key:"read",value:function(e,t){return this.client.get(t?"".concat(e,"/").concat(t):e)}},{key:"list",value:function(e){return this.client.get(e)}}]),e}(),A=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).client=e,a.path="".concat(y.API_ENDPOINT.CREW),a}return Object(p.a)(n,[{key:"list",value:function(){return Object(f.a)(Object(x.a)(n.prototype),"list",this).call(this,this.path)}},{key:"read",value:function(e){return Object(f.a)(Object(x.a)(n.prototype),"read",this).call(this,this.path,e)}}]),n}(P),C=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).client=e,a.path="".concat(y.API_ENDPOINT.COMPANY),a}return Object(p.a)(n,[{key:"read",value:function(){return Object(f.a)(Object(x.a)(n.prototype),"read",this).call(this,this.path)}}]),n}(P),v=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).client=e,a.path="".concat(y.API_ENDPOINT.CAPSULES),a}return Object(p.a)(n,[{key:"list",value:function(){return Object(f.a)(Object(x.a)(n.prototype),"list",this).call(this,this.path)}}]),n}(P),w=n(109),S=n(183),E=n.n(S),D=function(){function e(){Object(h.a)(this,e),this.api=y.HOST.API}return Object(p.a)(e,[{key:"get",value:function(e,t){return E.a.get("".concat(this.api,"/").concat(e),Object(w.a)({params:t||null},this.getRequestConfig())).then((function(e){return e.data})).catch((function(t){return console.error(t,e,y.HTTP_METHOD.GET)}))}},{key:"getRequestConfig",value:function(){return{headers:{"Content-Type":"application/json"}}}}]),e}(),N=function(){function e(){Object(h.a)(this,e),this.company=void 0,this.crew=void 0,this.capsules=void 0,this.client=void 0,this.client=new D,this.company=new C(this.client),this.crew=new A(this.client),this.capsules=new v(this.client)}return Object(p.a)(e,null,[{key:"factory",value:function(){return this.instance?e.instance:e.instance=new e}}]),e}();N.instance=void 0;var I=n(387),L=Object(O.b)({name:"errors",initialState:[],reducers:{pushErrorAction:function(e,t){e.push(Object(w.a)(Object(w.a)({},t.payload),{},{showed:!1,id:Object(I.a)()}))},setErrorShowed:function(e,t){var n=e.find((function(e){return e.id===t.payload.id}));n&&(n.showed=!0)}}}),T=L.actions,_=T.pushErrorAction,k=(T.setErrorShowed,{loading:!1,error:null,data:null}),R=Object(O.b)({name:"companyDetails",initialState:k,reducers:{loadingCompanyAction:function(e,t){e.loading=t.payload.isLoading},errorCompanyAction:function(e,t){e.loading=k.loading,e.error=t.payload.message},setCompanyDetailsData:function(e,t){e.error=k.error,e.loading=k.loading,e.data=t.payload.data}}}),H=R.actions,U=H.errorCompanyAction,W=H.loadingCompanyAction,M=H.setCompanyDetailsData,F={loading:!1,error:null,data:null},G=Object(O.b)({name:"crewList",initialState:F,reducers:{loadingCrewListAction:function(e,t){e.loading=t.payload.isLoading},errorCrewListAction:function(e,t){e.loading=F.loading,e.error=t.payload.message},setCrewListData:function(e,t){e.error=F.error,e.loading=F.loading,e.data=t.payload.data}}}),Y=G.actions,K=Y.errorCrewListAction,q=Y.loadingCrewListAction,z=Y.setCrewListData,J=n(386),X=n(388),B=n(114),Q=n(383),V=n(104),Z=n(213),$=n(92),ee=n(391),te=n(392),ne=n(393),ae=n(394),ce=n(395),re=n(396),ie=n(397),se=n(398),oe=n(399),le=n(400),de=n(401),ue=n(78),je=function(){var e=Object(c.useState)(!1),t=Object(Z.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)(ue.b,{collapsible:!0,collapsed:n,onCollapse:function(e){return r(e)},style:{paddingTop:"10vh"},children:Object(a.jsxs)($.a,{theme:"dark",mode:"inline",children:[Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(ee.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.HOME,children:"Company Info"})},"1"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(te.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.CAPSULES,children:"Capsules"})},"2"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(ne.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.ROCKETS,children:"Rockets"})},"3"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(ae.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.CREW,children:"Crew"})},"4"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(ce.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.DRAGONS,children:"Dragons"})},"5"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(re.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.LANDPADS,children:"Landpads"})},"6"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(ie.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.LAUNCHES,children:"Launches"})},"7"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(se.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.LAUNCHPADS,children:"Launchpads"})},"8"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(oe.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.PAYLOADS,children:"Payloads"})},"9"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(le.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.ROADSTER,children:"Roadster Info"})},"10"),Object(a.jsx)($.a.Item,{icon:Object(a.jsx)(de.a,{}),children:Object(a.jsx)(o.b,{to:y.APP_ENDPOINT.SHIPS,children:"Ships"})},"11")]})})};function be(){var e=Object(B.a)(["\n  text-align: center;\n"]);return be=function(){return e},e}function Oe(){var e=Object(B.a)(["\n  margin: 0 16px;\n"]);return Oe=function(){return e},e}function he(){var e=Object(B.a)(["\n  min-height: 100vh;\n"]);return he=function(){return e},e}function pe(){var e=Object(B.a)(["\n  font-size: 20px;\n  color: white;\n  padding: 0 10px;\n"]);return pe=function(){return e},e}var fe=Q.a.Header,xe=Q.a.Content,ge=Q.a.Footer,me=Object(V.a)(fe)(pe()),ye=Object(V.a)(Q.a)(he()),Pe=Object(V.a)(xe)(Oe()),Ae=V.a.div({padding:24,minHeight:360}),Ce=Object(V.a)(ge)(be()),ve=function(e){return Object(a.jsxs)(ye,{children:[Object(a.jsx)(je,{}),Object(a.jsxs)(Q.a,{className:"site-layout",children:[Object(a.jsx)(me,{className:"site-layout-background",children:"SpaceX"}),Object(a.jsx)(Pe,{children:Object(a.jsx)(Ae,{className:"site-layout-background",children:e.children})}),Object(a.jsx)(Ce,{children:"SpaceX created with Ant Design \xa92018"})]})]})},we=J.a.Title,Se=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.companyDetails.data}));return Object(c.useEffect)((function(){t||e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(W({isLoading:!0})),n=N.factory(),e.next=5,n.company.read();case 5:a=e.sent,t(M({data:a})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(_({title:"There was a problem fetching company details data",message:"Fetching company details data error"})),t(U({message:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object(a.jsx)(ve,{children:t&&Object(a.jsxs)("div",{children:[Object(a.jsx)(we,{children:"Company Details"}),Object(a.jsx)(X.a,{bordered:!0,column:1,children:Object.keys(t).map((function(e,n){return Object(a.jsx)(X.a.Item,{label:e,labelStyle:{fontWeight:"bold"},children:"object"===typeof t[e]?Object.keys(t[e]).map((function(n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{style:{fontWeight:"bold"},children:n}),": ",t[e][n]]}),Object(a.jsx)("br",{})]},n)})):t[e]},n)}))})]})})},Ee=n(385),De=n(105),Ne=n(65),Ie=J.a.Title,Le=Ee.a.Meta,Te=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.crewList.data}));return Object(c.useEffect)((function(){t||e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(q({isLoading:!0})),n=N.factory(),e.next=5,n.crew.list();case 5:a=e.sent,t(z({data:a})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(_({title:"There was a problem fetching crew list data",message:"Fetching crew list data error"})),t(K({message:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object(a.jsx)(ve,{children:t&&Object(a.jsxs)("div",{children:[Object(a.jsx)(Ie,{children:"Crew"}),Object(a.jsx)(De.a,{gutter:[16,16],justify:"center",children:t.map((function(e){return Object(a.jsx)(Ne.a,{span:8,children:Object(a.jsx)("div",{style:{width:240,margin:"0 auto"},children:Object(a.jsx)(o.b,{to:"".concat(y.APP_ENDPOINT.CREW,"/").concat(e.id),children:Object(a.jsx)(Ee.a,{hoverable:!0,cover:Object(a.jsx)("img",{alt:"crew",src:"".concat(e.image),style:{maxHeight:300}}),children:Object(a.jsx)(Le,{title:"".concat(e.name)})})})})},e.id)}))})]})})},_e=n(389),ke=n(93),Re={loading:!1,error:null,data:null},He=Object(O.b)({name:"crewRead",initialState:Re,reducers:{loadingCrewReadAction:function(e,t){e.loading=t.payload.isLoading},errorCrewReadAction:function(e,t){e.loading=Re.loading,e.error=t.payload.message},setCrewReadData:function(e,t){e.error=Re.error,e.loading=Re.loading,e.data=t.payload.data}}}),Ue=He.actions,We=Ue.errorCrewReadAction,Me=Ue.loadingCrewReadAction,Fe=Ue.setCrewReadData,Ge=n(402),Ye=J.a.Title,Ke=function(){var e=Object(l.f)().id,t=Object(d.b)(),n=Object(d.c)((function(e){return e.crewRead.data}));return Object(c.useEffect)((function(){n&&e===n.id||t(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Me({isLoading:!0})),a=N.factory(),t.next=5,a.crew.read(e);case 5:c=t.sent,n(Fe({data:c})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n(_({title:"There was a problem fetching crew read data",message:"Fetching crew read data error"})),n(We({message:t.t0.message}));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[n,t]),Object(a.jsx)(ve,{children:n&&Object(a.jsxs)("div",{children:[Object(a.jsx)(Ye,{children:n.name}),Object(a.jsxs)(De.a,{gutter:16,justify:"center",children:[Object(a.jsx)(Ne.a,{span:12,children:Object(a.jsx)(Ee.a,{style:{width:550},cover:Object(a.jsx)("img",{alt:"".concat(n.name),src:"".concat(n.image),style:{height:600}}),bodyStyle:{padding:0}})}),Object(a.jsx)(Ne.a,{span:12,children:Object(a.jsxs)(X.a,{bordered:!0,column:1,children:[Object(a.jsx)(X.a.Item,{label:"Status",labelStyle:{fontWeight:"bold"},children:"active"===n.status?Object(a.jsx)(_e.a,{color:"green",status:"processing",text:n.status.toUpperCase()}):Object(a.jsx)(_e.a,{color:"red",text:n.status.toUpperCase()})}),Object(a.jsx)(X.a.Item,{label:"Agency",labelStyle:{fontWeight:"bold"},children:n.agency}),Object(a.jsx)(X.a.Item,{label:"Launches",labelStyle:{fontWeight:"bold"},children:n.launches}),Object(a.jsx)(X.a.Item,{label:"Wikipedia",labelStyle:{fontWeight:"bold"},children:Object(a.jsx)(ke.a,{type:"link",href:n.wikipedia,target:"_blank",children:Object(a.jsx)(Ge.a,{})})})]})})]})]})})},qe=n(384),ze=n(390),Je={loading:!1,error:null,data:null},Xe=Object(O.b)({name:"capsulesList",initialState:Je,reducers:{loadingCapsulesListAction:function(e,t){e.loading=t.payload.isLoading},errorCapsulesListAction:function(e,t){e.loading=Je.loading,e.error=t.payload.message},setCapsulesListData:function(e,t){e.error=Je.error,e.loading=Je.loading,e.data=t.payload.data}}}),Be=Xe.actions,Qe=Be.errorCapsulesListAction,Ve=Be.loadingCapsulesListAction,Ze=Be.setCapsulesListData,$e=J.a.Title,et=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.capsulesList.data}));return Object(c.useEffect)((function(){t||e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ve({isLoading:!0})),n=N.factory(),e.next=5,n.capsules.list();case 5:a=e.sent,t(Ze({data:a})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(_({title:"There was a problem fetching capsules list data",message:"Fetching capsules list data error"})),t(Qe({message:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object(a.jsxs)(ve,{children:[Object(a.jsx)($e,{children:"Capsules"}),t&&Object(a.jsxs)(qe.a,{rowKey:"id",dataSource:t,size:"middle",bordered:!0,children:[Object(a.jsx)(qe.a.Column,{title:"ID",dataIndex:"id",align:"center"},"id"),Object(a.jsx)(qe.a.Column,{title:"Serial",dataIndex:"serial",align:"center"},"serial"),Object(a.jsx)(qe.a.Column,{title:"Type",dataIndex:"type",align:"center"},"type"),Object(a.jsx)(qe.a.Column,{title:"Water Landings",dataIndex:"water_landings",align:"center"},"water_landings"),Object(a.jsx)(qe.a.Column,{title:"Land Landings",dataIndex:"land_landings",align:"center"},"land_landings"),Object(a.jsx)(qe.a.Column,{title:"Last Update",dataIndex:"last_update",align:"center"},"last_update"),Object(a.jsx)(qe.a.Column,{title:"Reuse Count",dataIndex:"reuse_count",align:"center"},"reuse_count"),Object(a.jsx)(qe.a.Column,{title:"Status",dataIndex:"status",render:tt,align:"center"},"status")]})]})};function tt(e){return"retired"===e.toLowerCase()?Object(a.jsx)(ze.a,{color:"purple",children:e.toUpperCase()}):"unknown"===e.toLowerCase()?Object(a.jsx)(ze.a,{color:"blue",children:e.toUpperCase()}):"destroyed"===e.toLowerCase()?Object(a.jsx)(ze.a,{color:"red",children:e.toUpperCase()}):Object(a.jsx)(ze.a,{color:"green",children:e.toUpperCase()})}var nt,at=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"".concat(y.APP_ENDPOINT.CREW,"/:id"),component:Ke}),Object(a.jsx)(l.a,{exact:!0,path:y.APP_ENDPOINT.CREW,component:Te}),Object(a.jsx)(l.a,{exact:!0,path:y.APP_ENDPOINT.CAPSULES,component:et}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:Se})]})})},ct=n(80),rt=n(50),it=Object(O.a)({reducer:Object(rt.c)((nt={},Object(ct.a)(nt,L.name,L.reducer),Object(ct.a)(nt,R.name,R.reducer),Object(ct.a)(nt,G.name,G.reducer),Object(ct.a)(nt,He.name,He.reducer),Object(ct.a)(nt,Xe.name,Xe.reducer),nt))}),st=function(e){return Object(a.jsx)(d.a,{store:it,children:e.children})},ot=function(){return Object(a.jsx)(st,{children:Object(a.jsx)(at,{})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ot,{})}),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.1fdcc746.chunk.js.map