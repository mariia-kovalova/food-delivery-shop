"use strict";(self.webpackChunkfood_delivery_shop=self.webpackChunkfood_delivery_shop||[]).push([[95],{5859:function(n,e,t){t.d(e,{y:function(){return c}});var r=t(9434),i=function(n){return n.orders.items},o=function(n){return n.orders.isLoading},a=function(n){return n.orders.error},c=function(){return{orders:(0,r.v9)(i),isLoading:(0,r.v9)(o),error:(0,r.v9)(a)}}},2095:function(n,e,t){t.r(e),t.d(e,{default:function(){return ve}});var r,i,o,a,c,s,u,l,d,f,p,m,h,x,g,b,v,Z,j,y,w,k,_,E,z,S,C,T,N,P=t(2814),A=t(6907),M=t(2872),I=t(7341),R=t(5861),q=t(9439),L=t(4687),O=t.n(L),B=t(2791),D=t(7993),V=t(9434),F=function(n){return n.user.name},K=function(n){return n.user.email},$=function(n){return n.user.number},G=function(n){return n.user.address},Y=function(n){return n.user.location},H=function(){return{name:(0,V.v9)(F),email:(0,V.v9)(K),number:(0,V.v9)($),address:(0,V.v9)(G),user_location:(0,V.v9)(Y)}},J=t(6373),W=t(168),U=t(4709),X=U.Z.div(r||(r=(0,W.Z)(["\n  height: 300px;\n"]))),Q=U.Z.div(i||(i=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n\n  margin-top: 20px;\n"]))),nn=t(6382),en=U.Z.div(o||(o=(0,W.Z)(["\n  margin-top: 20px;\n"]))),tn=U.Z.label(a||(a=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.textPrimary})),rn=U.Z.input(c||(c=(0,W.Z)(["\n  background-color: #fff;\n  outline: none;\n  border: 2px solid ",";\n  border-radius: 8px;\n  color: #212121;\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text})),on=t(184),an=(0,nn.x0)(),cn=function(n){var e=n.address,t=n.map,r=(0,B.useState)(null),i=(0,q.Z)(r,2),o=i[0],a=i[1],c=(0,B.useState)(""),s=(0,q.Z)(c,2),u=s[0],l=s[1],d=(0,V.I0)();(0,B.useEffect)((function(){return l(e),function(){return a(null)}}),[e]);return(0,on.jsxs)(en,{children:[(0,on.jsx)(tn,{htmlFor:an,children:"Address"}),(0,on.jsx)(D.F2,{onPlaceChanged:function(){var n=o&&o.getPlace();if(n){var e=n.formatted_address;e||(d((0,J.zh)(null)),d((0,J.Vk)(n.name)));var r=n.geometry.location.lat(),i=n.geometry.location.lng();t&&t.panTo({lat:r,lng:i}),d((0,J.zh)({lat:r,lng:i})),d((0,J.Vk)(e))}},onLoad:function(n){a(n)},children:(0,on.jsx)(rn,{id:an,name:"address",type:"text",value:u,onChange:function(n){var e=n.target;l(e.value.trim())},placeholder:"Enter address",required:!0})})]})},sn=null,un=null,ln="0 km",dn="0 m",fn=function(){var n=H(),e=n.address,t=n.user_location,r=(0,P.j)(),i=r.user_id,o=r.store_location,a=(0,B.useState)(sn),c=(0,q.Z)(a,2),s=c[0],u=c[1],l=(0,B.useState)(un),d=(0,q.Z)(l,2),f=d[0],p=d[1],m=(0,B.useState)(ln),h=(0,q.Z)(m,2),x=h[0],g=h[1],b=(0,B.useState)(dn),v=(0,q.Z)(b,2),Z=v[0],j=v[1],y=(0,V.I0)(),w=(0,B.useMemo)((function(){return new window.google.maps.Geocoder}),[]);(0,B.useEffect)((function(){if(!i){navigator.geolocation.getCurrentPosition((function(n){var e=n.coords,t={lat:e.latitude,lng:e.longitude};y((0,J.zh)(t)),w.geocode({location:t},(function(n,e){if("OK"===e&&n.length>0){var t=n[0].formatted_address||n[0].name;y((0,J.Vk)(t))}}))}))}}),[y,w,i]),(0,B.useEffect)((function(){var n=function(){var n=(0,R.Z)(O().mark((function n(e,t){var r,i;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return r=new window.google.maps.DirectionsService,n.next=5,r.route({origin:e,destination:t,travelMode:window.google.maps.TravelMode.DRIVING});case 5:i=n.sent,p(i),g(i.routes[0].legs[0].distance.text),j(i.routes[0].legs[0].duration.text);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return n(o,t),function(){u(sn),p(un),g(ln),j(dn)}}),[t,o]);return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(X,{children:(0,on.jsxs)(D.b6,{center:o,zoom:11,mapContainerStyle:{width:"100%",height:"100%"},options:{zoomControl:!0,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!0},onLoad:function(n){return u(n)},onClick:function(n){var e=n.latLng;if(e){var t={lat:e.lat(),lng:e.lng()};y((0,J.zh)(t)),w.geocode({latLng:e},(function(n,e){if("OK"===e&&n.length>0){var t=n[0].formatted_address||n[0].name;y((0,J.Vk)(t))}}))}},children:[(0,on.jsx)(D.Jx,{position:o}),t&&(0,on.jsx)(D.Jx,{position:t}),f&&(0,on.jsx)(D.tH,{directions:f})]})}),(0,on.jsxs)(Q,{children:[(0,on.jsx)("p",{children:"Distance: "}),(0,on.jsx)("p",{children:x}),(0,on.jsx)("p",{children:"Duration: "}),(0,on.jsx)("p",{children:Z})]}),(0,on.jsx)(cn,{address:e,map:s,geocoder:w})]})},pn=t(3433),mn=t(1413),hn=t(1134),xn=t(4695),gn=t(6688),bn=t(6768),vn=t(6727),Zn=vn.Ry().shape({name:vn.Z_().required(gn.pB).matches(bn.cS,gn.CN.format).max(16,gn.CN.size),email:vn.Z_().required(gn.pB).email(gn.qB),number:vn.Z_().required(gn.pB).matches(bn.Oj,gn.Td)}),jn=(0,nn.x0)(),yn=[{inputName:"name",type:"text",id:(0,nn.x0)(),label:"Name",placeholder:"Enter your name"},{inputName:"email",type:"email",id:(0,nn.x0)(),label:"Email",placeholder:"Enter email"},{inputName:"number",type:"tel",id:(0,nn.x0)(),label:"Phone",placeholder:"Enter phone"}],wn=t(4942),kn=function(n,e){return n.reduce((function(n,t){return(0,mn.Z)((0,mn.Z)({},n),{},(0,wn.Z)({},t.inputName,e[t.inputName]))}),{})},_n=t(4925),En=t(5970),zn=U.Z.div(s||(s=(0,W.Z)(["\n  position: relative;\n"]))),Sn=U.Z.label(u||(u=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.textPrimary})),Cn=U.Z.input(l||(l=(0,W.Z)(["\n  background-color: #fff;\n  outline: none;\n  border: 2px solid ",";\n  border-radius: 8px;\n  color: #212121;\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text})),Tn=U.Z.p(d||(d=(0,W.Z)(["\n  width: 100%;\n  position: absolute;\n  bottom: -16px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  color: red;\n  font-size: 12px;\n  font-weight: 500;\n"]))),Nn=["id","inputName","label","register","errors"],Pn=function(n){var e=n.id,t=n.inputName,r=n.label,i=n.register,o=n.errors,a=(0,_n.Z)(n,Nn);return(0,on.jsxs)(zn,{children:[(0,on.jsx)(Sn,{htmlFor:e,children:r}),(0,on.jsx)(Cn,(0,mn.Z)((0,mn.Z)({id:e},a),i(t))),(0,on.jsx)(Tn,{children:(0,on.jsx)(En.B,{errors:o,name:t})})]})},An=U.Z.ul(f||(f=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding-top: 20px;\n"]))),Mn=function(n){return n.map((function(n){return{name:n.name,price:n.price,amount:n.amount}}))},In=t(5859),Rn=t(3762),qn=t(9085),Ln=function(){var n=H(),e=(0,In.y)().orders,t=(0,P.j)(),r=t.user_id,i=t.items,o=t.store_name,a=t.total_price,c=(0,V.I0)(),s=(0,hn.cI)({resolver:(0,xn.X)(Zn),defaultValues:(0,mn.Z)({},kn(yn,n))}),u=s.register,l=s.handleSubmit,d=s.formState.errors,f=function(){return qn.Am.success("Your order has been successfully sent!")},p=function(){var t=(0,R.Z)(O().mark((function t(s){var u,l,d,p;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=n.address,l=n.user_location,d={info:{id:"".concat(Date.now()).concat(Math.floor(90*Math.random())+10),store_name:o,total_price:a},items:Mn(i)},p=(0,mn.Z)((0,mn.Z)({},s),{},{address:u,location:l,orders:[].concat((0,pn.Z)(e),[d])}),r){t.next=6;break}return t.next=6,c((0,Rn.P0)(p)).unwrap().then((function(){return f()}));case 6:if(!r){t.next=9;break}return t.next=9,c((0,Rn.gU)((0,mn.Z)({id:r},p))).unwrap().then((function(){return f()}));case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,on.jsx)("form",{id:jn,onSubmit:l(p),children:(0,on.jsx)(An,{children:yn.map((function(n){return(0,on.jsx)("li",{children:(0,on.jsx)(Pn,(0,mn.Z)((0,mn.Z)({},n),{},{register:u,errors:d}))},n.id)}))})})},On=t(8520),Bn=t(8274),Dn=t(2982),Vn=U.Z.div(p||(p=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  padding: 4px 12px;\n\n  border-radius: 30px;\n  background-color: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary})),Fn=U.Z.p(m||(m=(0,W.Z)(["\n  cursor: default;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n\n  text-align: center;\n"]))),Kn=U.Z.button(h||(h=(0,W.Z)(["\n  padding: 0px;\n  width: 20px;\n  height: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 20px;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n\n  transition: color 250ms ",",\n    color 250ms ",",\n    transform 250ms ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n    background-color: transparent;\n    transform: scale(1);\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cardTextAccent}),(function(n){return n.theme.primaryTransparet}),(function(n){return n.theme.disabled})),$n=function(n){var e=n.id,t=n.amount,r=(0,V.I0)();return(0,on.jsxs)(Vn,{className:"amount",children:[(0,on.jsx)(Kn,{type:"button",onClick:function(){r((0,On.T1)({id:e,amount:t-1}))},disabled:t<=1,children:"-"}),(0,on.jsx)(Fn,{children:t}),(0,on.jsx)(Kn,{type:"button",onClick:function(){r((0,On.T1)({id:e,amount:t+1}))},children:"+"})]})},Gn=t(3033),Yn=U.Z.div(x||(x=(0,W.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: 20px 20px 20px 51px;\n  height: 120px;\n\n  border-radius: 22px;\n  background: ",";\n\n  @media (min-width: ",") {\n    height: 102px;\n  }\n\n  & .amount {\n    position: absolute;\n    bottom: 3%;\n    right: 2%;\n\n    @media (min-width: ",") {\n      bottom: 7%;\n      right: 3%;\n    }\n  }\n"])),(function(n){return n.theme.bgCard}),Gn.Mq,Gn.Mq),Hn=U.Z.div(g||(g=(0,W.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n\n  padding-left: 51px;\n"]))),Jn=U.Z.img(b||(b=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -35px;\n  transform: translate(0, -50%);\n\n  width: 70px;\n  height: 70px;\n  clip-path: circle(50% at 50% 50%);\n"]))),Wn=U.Z.h3(v||(v=(0,W.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 101.34%;\n"]))),Un=U.Z.p(Z||(Z=(0,W.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 20px;\n  text-align: center;\n"]))),Xn=U.Z.button(j||(j=(0,W.Z)(["\n  padding: 0px;\n\n  color: transparent;\n  background-color: transparent;\n  border: none;\n  width: fit-content;\n  height: fit-content;\n"]))),Qn=U.Z.svg(y||(y=(0,W.Z)(["\n  fill: ",";\n  height: 18px;\n  width: 18px;\n\n  transition: transform 250ms ",",\n    fill 250ms ",";\n\n  &:hover,\n  &:focus {\n    fill: ",";\n    transform: scale(1.1);\n  }\n\n  @media (min-width: ",") {\n    height: 22px;\n    width: 22px;\n  }\n"])),(function(n){return n.theme.disabled}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.secondary}),Gn.Mq),ne=t(885),ee=function(n){var e=n.item,t=(0,V.I0)(),r=e.id,i=e.name,o=e.url,a=e.price,c=e.amount;return(0,on.jsxs)(Yn,{children:[(0,on.jsxs)(Hn,{children:[(0,on.jsx)(Jn,{src:o,width:"70",height:"70",loading:"lazy",alt:i}),(0,on.jsx)(Wn,{children:(0,Bn.u)(i)}),(0,on.jsx)(Un,{children:(0,Dn.a)(a)})]}),(0,on.jsx)(Xn,{type:"button",onClick:function(){return t((0,On.h2)(e))},children:(0,on.jsx)(Qn,{children:(0,on.jsx)("use",{href:"".concat(ne.Z,"#icon-trash-can-solid")})})}),(0,on.jsx)($n,{id:r,amount:c})]})},te=U.Z.ul(w||(w=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 20px;\n"]))),re=function(){var n=(0,P.j)().items;return(0,on.jsx)(te,{children:n.map((function(n){return(0,on.jsx)("li",{children:(0,on.jsx)(ee,{item:n})},n.id)}))})},ie=t(508),oe=t(2706),ae=t(2882),ce=U.Z.div(k||(k=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  padding: 20px;\n  width: 100%;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"])),Gn.gv),se=U.Z.div(_||(_=(0,W.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),ue=U.Z.p(E||(E=(0,W.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n"]))),le=U.Z.p(z||(z=(0,W.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 26px;\n"]))),de=U.Z.div(S||(S=(0,W.Z)(["\n  position: relative;\n\n  width: fit-content;\n\n  & .tooltip {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),fe=(0,U.Z)(ae.Y)(C||(C=(0,W.Z)(["\n  padding: 8px 50px;\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n"]))),pe=function(){var n=H().address,e=(0,P.j)(),t=e.total_price,r=e.items,i=(0,V.I0)();return(0,B.useEffect)((function(){var n=r.reduce((function(n,e){return n+e.price*e.amount}),0);i((0,On.m1)(n))}),[i,r]),(0,on.jsxs)(ce,{children:[(0,on.jsxs)(se,{children:[(0,on.jsx)(ue,{children:"Total price: "}),(0,on.jsx)(le,{children:(0,Dn.a)(t)})]}),(0,on.jsxs)(de,{children:[(0,on.jsx)(fe,{form:jn,type:"submit",disabled:!n,children:"Submit"}),!n&&(0,on.jsx)(ie.u,{ariaLabel:"disabled action",text:"provide your address to make an order",position:oe.z})]})]})},me=U.Z.div(T||(T=(0,W.Z)(["\n  display: grid;\n  gap: 20px;\n\n  @media (min-width: ",") {\n    grid-template-areas:\n      'form cart'\n      'form submit';\n\n    grid-template-columns: 1fr 1fr;\n\n    & > .form {\n      grid-area: form;\n    }\n\n    & > .cart {\n      grid-area: cart;\n    }\n\n    & > .submit {\n      grid-area: submit;\n      align-self: end;\n    }\n  }\n\n  & > .cart {\n    max-height: 480px;\n    overflow-y: auto;\n    overflow-x: hidden;\n\n    &::-webkit-scrollbar {\n      width: 0.5em;\n    }\n\n    &::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ",";\n      border-radius: 5px;\n    }\n  }\n"])),Gn.Mq,(function(n){return n.theme.borderModal})),he=null!==(N={NODE_ENV:"production",PUBLIC_URL:"/food-delivery-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GOOGLE_MAPS_API)&&void 0!==N?N:"",xe=["places"],ge=function(){var n=(0,D.Ji)({googleMapsApiKey:he,libraries:xe,language:"en"}).isLoaded;return(0,B.useEffect)((function(){he||qn.Am.warning("Google Maps API key is missing. The cart will not work correctly until you provide the key.")}),[]),(0,on.jsxs)(me,{children:[(0,on.jsxs)("div",{className:"form",children:[n&&(0,on.jsx)(fn,{}),!n&&(0,on.jsx)("div",{children:"Loading..."}),(0,on.jsx)(Ln,{})]}),(0,on.jsx)("div",{className:"cart",children:(0,on.jsx)(re,{})}),(0,on.jsx)("div",{className:"submit",children:(0,on.jsx)(pe,{})})]})},be=t(4884),ve=function(){var n=(0,P.j)().items,e=n.length>0,t=0===n.length;return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(A.ql,{children:(0,on.jsx)("title",{children:"Cart"})}),(0,on.jsx)(M.$,{children:(0,on.jsxs)(I.W,{children:[e&&(0,on.jsx)(ge,{}),t&&(0,on.jsx)(be.k,{children:"Your cart is empty"})]})})]})}},2882:function(n,e,t){t.d(e,{Y:function(){return o}});var r,i=t(168),o=t(4709).Z.button(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n\n  clip-path: polygon(\n    10% 0%,\n    100% 0%,\n    100% 30%,\n    100% 60%,\n    90% 100%,\n    0% 100%,\n    0% 70%,\n    0% 40%\n  );\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  color: ",";\n  background-color: ",";\n  border-radius: 4px;\n  transition: transform 250ms ",",\n    color 250ms ",",\n    background-color 250ms ",",\n    clip-path 250ms ",";\n\n  &:disabled {\n    cursor: default;\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:not(:disabled):hover {\n    transform: scale(1.05);\n    clip-path: polygon(\n      0% 0%,\n      100% 0,\n      100% 0%,\n      100% 100%,\n      88% 100%,\n      0% 100%,\n      0% 70%,\n      0% 0%\n    );\n  }\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}))},4884:function(n,e,t){t.d(e,{k:function(){return o}});var r,i=t(168),o=t(4709).Z.p(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  padding-top: 30vh;\n  width: 300px;\n\n  text-align: center;\n"])))},2872:function(n,e,t){t.d(e,{$:function(){return o}});var r,i=t(168),o=t(4709).Z.section(r||(r=(0,i.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"])))},2982:function(n,e,t){t.d(e,{a:function(){return i}});var r=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},i=function(n){return"$".concat(r(n),".00")}},8274:function(n,e,t){t.d(e,{u:function(){return r}});var r=function(n){if(n.length<=16)return n;var e=n.slice(0,14);return"".concat(e,"...")}},6688:function(n,e,t){t.d(e,{CN:function(){return i},MY:function(){return c},Td:function(){return o},pB:function(){return r},qB:function(){return a}});var r="This field is required",i={format:"Invalid name format e.g Adrian, Jacob Mercer",size:"Name may contain only 16 characters"},o="Invalid phone format",a="Invalid email format",c="Must contain digist only"},6768:function(n,e,t){t.d(e,{Oj:function(){return o},a3:function(){return a},cS:function(){return i}});var r={nameRegExp:new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),phoneRegExp:/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,codeRegExp:new RegExp("^[0-9]*$")},i=r.nameRegExp,o=r.phoneRegExp,a=r.codeRegExp}}]);
//# sourceMappingURL=95.2c5aeec7.chunk.js.map