"use strict";(self.webpackChunkfood_delivery_shop=self.webpackChunkfood_delivery_shop||[]).push([[713],{5859:function(n,e,t){t.d(e,{y:function(){return c}});var r=t(9434),i=function(n){return n.orders.items},o=function(n){return n.orders.isLoading},a=function(n){return n.orders.error},c=function(){return{orders:(0,r.v9)(i),isLoading:(0,r.v9)(o),error:(0,r.v9)(a)}}},713:function(n,e,t){t.r(e),t.d(e,{default:function(){return ze}});var r,i,o,a,c,s,u,l,d,f,p,m,h,x,g,b,Z,v,y,j,w,k,_,E,z,S,C,T,N,P,A,M,I=t(2814),R=t(6907),q=t(2872),O=t(7341),L=t(2791),B=t(9085),D=t(7993),F=t(5861),V=t(9439),K=t(4687),$=t.n(K),G=t(9434),Y=function(n){return n.user.name},H=function(n){return n.user.email},J=function(n){return n.user.number},W=function(n){return n.user.address},U=function(n){return n.user.location},X=function(){return{name:(0,G.v9)(Y),email:(0,G.v9)(H),number:(0,G.v9)(J),address:(0,G.v9)(W),user_location:(0,G.v9)(U)}},Q=t(6373),nn=t(168),en=t(4709),tn=en.Z.div(r||(r=(0,nn.Z)(["\n  height: 300px;\n"]))),rn=en.Z.div(i||(i=(0,nn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n\n  min-height: 20px;\n  margin-top: 20px;\n"]))),on=t(6382),an=en.Z.div(o||(o=(0,nn.Z)(["\n  margin-top: 20px;\n"]))),cn=en.Z.label(a||(a=(0,nn.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.textPrimary})),sn=en.Z.input(c||(c=(0,nn.Z)(["\n  background-color: #fff;\n  outline: none;\n  border: 2px solid ",";\n  border-radius: 8px;\n  color: #212121;\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text})),un=t(184),ln=(0,on.x0)(),dn=function(n){var e=n.address,t=n.map,r=(0,L.useState)(null),i=(0,V.Z)(r,2),o=i[0],a=i[1],c=(0,L.useState)(""),s=(0,V.Z)(c,2),u=s[0],l=s[1],d=(0,G.I0)();(0,L.useEffect)((function(){return l(e),function(){return a(null)}}),[e]);return(0,un.jsxs)(an,{children:[(0,un.jsx)(cn,{htmlFor:ln,children:"Address"}),(0,un.jsx)(D.F2,{onPlaceChanged:function(){var n=o&&o.getPlace();if(n){var e=n.formatted_address;e||(d((0,Q.zh)(null)),d((0,Q.Vk)(n.name)));var r=n.geometry.location.lat(),i=n.geometry.location.lng();t&&t.panTo({lat:r,lng:i}),d((0,Q.zh)({lat:r,lng:i})),d((0,Q.Vk)(e))}},onLoad:function(n){a(n)},children:(0,un.jsx)(sn,{id:ln,name:"address",type:"text",value:u,onChange:function(n){var e=n.target;l(e.value.trim())},placeholder:"Enter address",required:!0})})]})},fn=null,pn=null,mn="0 km",hn="0 m",xn=function(){var n=X(),e=n.address,t=n.user_location,r=(0,I.j)(),i=r.user_id,o=r.store_location,a=(0,L.useState)(fn),c=(0,V.Z)(a,2),s=c[0],u=c[1],l=(0,L.useState)(pn),d=(0,V.Z)(l,2),f=d[0],p=d[1],m=(0,L.useState)(mn),h=(0,V.Z)(m,2),x=h[0],g=h[1],b=(0,L.useState)(hn),Z=(0,V.Z)(b,2),v=Z[0],y=Z[1],j=(0,G.I0)(),w=(0,L.useMemo)((function(){return new window.google.maps.Geocoder}),[]);(0,L.useEffect)((function(){if(!i){navigator.geolocation.getCurrentPosition((function(n){var e=n.coords,t={lat:e.latitude,lng:e.longitude};j((0,Q.zh)(t)),w.geocode({location:t},(function(n,e){if("OK"===e&&n.length>0){var t=n[0].formatted_address||n[0].name;j((0,Q.Vk)(t))}}))}))}}),[j,w,i]),(0,L.useEffect)((function(){var n=function(){var n=(0,F.Z)($().mark((function n(e,t){var r,i;return $().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return r=new window.google.maps.DirectionsService,n.next=5,r.route({origin:e,destination:t,travelMode:window.google.maps.TravelMode.DRIVING});case 5:i=n.sent,p(i),g(i.routes[0].legs[0].distance.text),y(i.routes[0].legs[0].duration.text);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return n(o,t),function(){u(fn),p(pn),g(mn),y(hn)}}),[t,o]);return(0,un.jsxs)(un.Fragment,{children:[(0,un.jsx)(tn,{children:(0,un.jsxs)(D.b6,{center:o,zoom:11,mapContainerStyle:{width:"100%",height:"100%"},options:{zoomControl:!0,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!0},onLoad:function(n){return u(n)},onClick:function(n){var e=n.latLng;if(e){var t={lat:e.lat(),lng:e.lng()};j((0,Q.zh)(t)),w.geocode({latLng:e},(function(n,e){if("OK"===e&&n.length>0){var t=n[0].formatted_address||n[0].name;j((0,Q.Vk)(t))}}))}},children:[(0,un.jsx)(D.Jx,{position:o}),t&&(0,un.jsx)(D.Jx,{position:t}),f&&(0,un.jsx)(D.tH,{directions:f})]})}),(0,un.jsxs)(rn,{children:[(0,un.jsx)("p",{children:"Distance: "}),(0,un.jsx)("p",{children:x}),(0,un.jsx)("p",{children:"Duration: "}),(0,un.jsx)("p",{children:v})]}),(0,un.jsx)(dn,{address:e,map:s,geocoder:w})]})},gn=t(2554),bn=function(n){var e=n.theme;return(0,gn.F4)(s||(s=(0,nn.Z)(["\n  0% {\n    background-color: ",";\n  }\n  50%, 100% {\n    background-color: rgba(152, 128, 255, 0.2);\n  }\n"])),e.primary)},Zn=en.Z.div(u||(u=(0,nn.Z)(["\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  animation: "," 1s infinite alternate;\n  animation-delay: 0.5s;\n\n  &::before,\n  &::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    top: 0;\n\n    width: 14px;\n    height: 14px;\n\n    background-color: ",";\n    color: ",";\n    border-radius: 50%;\n    animation: "," 1s infinite alternate;\n  }\n\n  &::before {\n    left: -25px;\n    animation-delay: 0s;\n  }\n\n  &::after {\n    left: 25px;\n    animation-delay: 1s;\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),bn,(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),bn),vn=function(){return(0,un.jsx)(Zn,{})},yn=t(3433),jn=t(1413),wn=t(1134),kn=t(4695),_n=t(6688),En=t(6768),zn=t(6727),Sn=zn.Ry().shape({name:zn.Z_().required(_n.pB).matches(En.cS,_n.CN.format).max(16,_n.CN.size),email:zn.Z_().required(_n.pB).email(_n.qB),number:zn.Z_().required(_n.pB).matches(En.Oj,_n.Td)}),Cn=(0,on.x0)(),Tn=[{inputName:"name",type:"text",id:(0,on.x0)(),label:"Name",placeholder:"Enter your name"},{inputName:"email",type:"email",id:(0,on.x0)(),label:"Email",placeholder:"Enter email"},{inputName:"number",type:"tel",id:(0,on.x0)(),label:"Phone",placeholder:"Enter phone"}],Nn=t(4942),Pn=function(n,e){return n.reduce((function(n,t){return(0,jn.Z)((0,jn.Z)({},n),{},(0,Nn.Z)({},t.inputName,e[t.inputName]))}),{})},An=t(4925),Mn=t(5970),In=en.Z.div(l||(l=(0,nn.Z)(["\n  position: relative;\n"]))),Rn=en.Z.label(d||(d=(0,nn.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.textPrimary})),qn=en.Z.input(f||(f=(0,nn.Z)(["\n  background-color: #fff;\n  outline: none;\n  border: 2px solid ",";\n  border-radius: 8px;\n  color: #212121;\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text})),On=en.Z.p(p||(p=(0,nn.Z)(["\n  width: 100%;\n  position: absolute;\n  bottom: -16px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  color: red;\n  font-size: 12px;\n  font-weight: 500;\n"]))),Ln=["id","inputName","label","register","errors"],Bn=function(n){var e=n.id,t=n.inputName,r=n.label,i=n.register,o=n.errors,a=(0,An.Z)(n,Ln);return(0,un.jsxs)(In,{children:[(0,un.jsx)(Rn,{htmlFor:e,children:r}),(0,un.jsx)(qn,(0,jn.Z)((0,jn.Z)({id:e},a),i(t))),(0,un.jsx)(On,{children:(0,un.jsx)(Mn.B,{errors:o,name:t})})]})},Dn=en.Z.ul(m||(m=(0,nn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding-top: 20px;\n"]))),Fn=function(n){return n.map((function(n){return{name:n.name,price:n.price,amount:n.amount}}))},Vn=t(5859),Kn=t(3762),$n=function(){var n=X(),e=(0,Vn.y)().orders,t=(0,I.j)(),r=t.user_id,i=t.items,o=t.store_name,a=t.total_price,c=(0,G.I0)(),s=(0,wn.cI)({resolver:(0,kn.X)(Sn),defaultValues:(0,jn.Z)({},Pn(Tn,n))}),u=s.register,l=s.handleSubmit,d=s.formState.errors,f=function(){return B.Am.success("Your order has been successfully sent!")},p=function(){var t=(0,F.Z)($().mark((function t(s){var u,l,d,p;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=n.address,l=n.user_location,d={info:{id:"".concat(Date.now()).concat(Math.floor(90*Math.random())+10),store_name:o,total_price:a},items:Fn(i)},p=(0,jn.Z)((0,jn.Z)({},s),{},{address:u,location:l,orders:[].concat((0,yn.Z)(e),[d])}),r){t.next=6;break}return t.next=6,c((0,Kn.P0)(p)).unwrap().then((function(){return f()}));case 6:if(!r){t.next=9;break}return t.next=9,c((0,Kn.gU)((0,jn.Z)({id:r},p))).unwrap().then((function(){return f()}));case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,un.jsx)("form",{id:Cn,onSubmit:l(p),children:(0,un.jsx)(Dn,{children:Tn.map((function(n){return(0,un.jsx)("li",{children:(0,un.jsx)(Bn,(0,jn.Z)((0,jn.Z)({},n),{},{register:u,errors:d}))},n.id)}))})})},Gn=t(8520),Yn=t(8274),Hn=t(2982),Jn=en.Z.div(h||(h=(0,nn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  padding: 4px 12px;\n\n  border-radius: 30px;\n  background-color: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary})),Wn=en.Z.p(x||(x=(0,nn.Z)(["\n  cursor: default;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n\n  text-align: center;\n"]))),Un=en.Z.button(g||(g=(0,nn.Z)(["\n  padding: 0px;\n  width: 20px;\n  height: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 20px;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n\n  transition: color 250ms ",",\n    color 250ms ",",\n    transform 250ms ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n    background-color: transparent;\n    transform: scale(1);\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cardTextAccent}),(function(n){return n.theme.primaryTransparet}),(function(n){return n.theme.disabled})),Xn=function(n){var e=n.id,t=n.amount,r=(0,G.I0)();return(0,un.jsxs)(Jn,{className:"amount",children:[(0,un.jsx)(Un,{type:"button",onClick:function(){r((0,Gn.T1)({id:e,amount:t-1}))},disabled:t<=1,children:"-"}),(0,un.jsx)(Wn,{children:t}),(0,un.jsx)(Un,{type:"button",onClick:function(){r((0,Gn.T1)({id:e,amount:t+1}))},children:"+"})]})},Qn=t(3033),ne=en.Z.div(b||(b=(0,nn.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: 20px 20px 20px 51px;\n  height: 120px;\n\n  border-radius: 22px;\n  background: ",";\n\n  @media (min-width: ",") {\n    height: 102px;\n  }\n\n  & .amount {\n    position: absolute;\n    bottom: 3%;\n    right: 2%;\n\n    @media (min-width: ",") {\n      bottom: 7%;\n      right: 3%;\n    }\n  }\n"])),(function(n){return n.theme.bgCard}),Qn.Mq,Qn.Mq),ee=en.Z.div(Z||(Z=(0,nn.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n\n  padding-left: 51px;\n"]))),te=en.Z.img(v||(v=(0,nn.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -35px;\n  transform: translate(0, -50%);\n\n  width: 70px;\n  height: 70px;\n  clip-path: circle(50% at 50% 50%);\n"]))),re=en.Z.h3(y||(y=(0,nn.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 101.34%;\n"]))),ie=en.Z.p(j||(j=(0,nn.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 20px;\n  text-align: center;\n"]))),oe=en.Z.button(w||(w=(0,nn.Z)(["\n  padding: 0px;\n\n  color: transparent;\n  background-color: transparent;\n  border: none;\n  width: fit-content;\n  height: fit-content;\n"]))),ae=en.Z.svg(k||(k=(0,nn.Z)(["\n  fill: ",";\n  height: 18px;\n  width: 18px;\n\n  transition: transform 250ms ",",\n    fill 250ms ",";\n\n  &:hover,\n  &:focus {\n    fill: ",";\n    transform: scale(1.1);\n  }\n\n  @media (min-width: ",") {\n    height: 22px;\n    width: 22px;\n  }\n"])),(function(n){return n.theme.disabled}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.secondary}),Qn.Mq),ce=t(885),se=function(n){var e=n.item,t=(0,G.I0)(),r=e.id,i=e.name,o=e.url,a=e.price,c=e.amount;return(0,un.jsxs)(ne,{children:[(0,un.jsxs)(ee,{children:[(0,un.jsx)(te,{src:o,width:"70",height:"70",loading:"lazy",alt:i}),(0,un.jsx)(re,{children:(0,Yn.u)(i)}),(0,un.jsx)(ie,{children:(0,Hn.a)(a)})]}),(0,un.jsx)(oe,{type:"button",onClick:function(){return t((0,Gn.h2)(e))},children:(0,un.jsx)(ae,{children:(0,un.jsx)("use",{href:"".concat(ce.Z,"#icon-trash-can-solid")})})}),(0,un.jsx)(Xn,{id:r,amount:c})]})},ue=en.Z.ul(_||(_=(0,nn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 20px;\n"]))),le=function(){var n=(0,I.j)().items;return(0,un.jsx)(ue,{children:n.map((function(n){return(0,un.jsx)("li",{children:(0,un.jsx)(se,{item:n})},n.id)}))})},de=t(508),fe=t(2706),pe=t(2882),me=en.Z.div(E||(E=(0,nn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  padding: 20px;\n  width: 100%;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"])),Qn.gv),he=en.Z.div(z||(z=(0,nn.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),xe=en.Z.p(S||(S=(0,nn.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n"]))),ge=en.Z.p(C||(C=(0,nn.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 26px;\n"]))),be=en.Z.div(T||(T=(0,nn.Z)(["\n  position: relative;\n\n  width: fit-content;\n\n  & .tooltip {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),Ze=(0,en.Z)(pe.Y)(N||(N=(0,nn.Z)(["\n  padding: 8px 50px;\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n"]))),ve=function(){var n=X().address,e=(0,I.j)(),t=e.total_price,r=e.items,i=(0,G.I0)();return(0,L.useEffect)((function(){var n=r.reduce((function(n,e){return n+e.price*e.amount}),0);i((0,Gn.m1)(n))}),[i,r]),(0,un.jsxs)(me,{children:[(0,un.jsxs)(he,{children:[(0,un.jsx)(xe,{children:"Total price: "}),(0,un.jsx)(ge,{children:(0,Hn.a)(t)})]}),(0,un.jsxs)(be,{children:[(0,un.jsx)(Ze,{form:Cn,type:"submit",disabled:!n,children:"Submit"}),!n&&(0,un.jsx)(de.u,{ariaLabel:"disabled action",text:"provide your address to make an order",position:fe.z})]})]})},ye=en.Z.div(P||(P=(0,nn.Z)(["\n  display: grid;\n  gap: 20px;\n\n  @media (min-width: ",") {\n    grid-template-areas:\n      'form cart'\n      'form submit';\n\n    grid-template-columns: 1fr 1fr;\n\n    & > .form {\n      grid-area: form;\n    }\n\n    & > .cart {\n      grid-area: cart;\n    }\n\n    & > .submit {\n      grid-area: submit;\n      align-self: end;\n    }\n  }\n\n  & > .cart {\n    max-height: 480px;\n    overflow-y: auto;\n    overflow-x: hidden;\n\n    &::-webkit-scrollbar {\n      width: 0.5em;\n    }\n\n    &::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ",";\n      border-radius: 5px;\n    }\n  }\n"])),Qn.Mq,(function(n){return n.theme.borderModal})),je=en.Z.div(A||(A=(0,nn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 434px;\n"]))),we=null!==(M={NODE_ENV:"production",PUBLIC_URL:"/food-delivery-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GOOGLE_MAPS_API)&&void 0!==M?M:"",ke=["places"],_e=function(){var n=(0,D.Ji)({googleMapsApiKey:we,libraries:ke,language:"en"}).isLoaded;return(0,L.useEffect)((function(){we||B.Am.warning("Google Maps API key is missing. The cart will not work correctly until you provide the key.")}),[]),(0,un.jsxs)(ye,{children:[(0,un.jsxs)("div",{className:"form",children:[n&&(0,un.jsx)(xn,{}),!n&&(0,un.jsx)(je,{children:(0,un.jsx)(vn,{})}),(0,un.jsx)($n,{})]}),(0,un.jsx)("div",{className:"cart",children:(0,un.jsx)(le,{})}),(0,un.jsx)("div",{className:"submit",children:(0,un.jsx)(ve,{})})]})},Ee=t(4884),ze=function(){var n=(0,I.j)().items,e=n.length>0,t=0===n.length;return(0,un.jsxs)(un.Fragment,{children:[(0,un.jsx)(R.ql,{children:(0,un.jsx)("title",{children:"Cart"})}),(0,un.jsx)(q.$,{children:(0,un.jsxs)(O.W,{children:[e&&(0,un.jsx)(_e,{}),t&&(0,un.jsx)(Ee.k,{children:"Your cart is empty"})]})})]})}},2882:function(n,e,t){t.d(e,{Y:function(){return o}});var r,i=t(168),o=t(4709).Z.button(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n\n  clip-path: polygon(\n    10% 0%,\n    100% 0%,\n    100% 30%,\n    100% 60%,\n    90% 100%,\n    0% 100%,\n    0% 70%,\n    0% 40%\n  );\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  color: ",";\n  background-color: ",";\n  border-radius: 4px;\n  transition: transform 250ms ",",\n    color 250ms ",",\n    background-color 250ms ",",\n    clip-path 250ms ",";\n\n  &:disabled {\n    cursor: default;\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:not(:disabled):hover {\n    transform: scale(1.05);\n    clip-path: polygon(\n      0% 0%,\n      100% 0,\n      100% 0%,\n      100% 100%,\n      88% 100%,\n      0% 100%,\n      0% 70%,\n      0% 0%\n    );\n  }\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}))},4884:function(n,e,t){t.d(e,{k:function(){return o}});var r,i=t(168),o=t(4709).Z.p(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  padding-top: 30vh;\n  width: 300px;\n\n  text-align: center;\n"])))},2872:function(n,e,t){t.d(e,{$:function(){return o}});var r,i=t(168),o=t(4709).Z.section(r||(r=(0,i.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"])))},2982:function(n,e,t){t.d(e,{a:function(){return i}});var r=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},i=function(n){return"$".concat(r(n),".00")}},8274:function(n,e,t){t.d(e,{u:function(){return r}});var r=function(n){if(n.length<=16)return n;var e=n.slice(0,14);return"".concat(e,"...")}},6688:function(n,e,t){t.d(e,{CN:function(){return i},MY:function(){return c},Td:function(){return o},pB:function(){return r},qB:function(){return a}});var r="This field is required",i={format:"Invalid name format e.g Adrian, Jacob Mercer",size:"Name may contain only 16 characters"},o="Invalid phone format",a="Invalid email format",c="Must contain digist only"},6768:function(n,e,t){t.d(e,{Oj:function(){return o},a3:function(){return a},cS:function(){return i}});var r={nameRegExp:new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),phoneRegExp:/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,codeRegExp:new RegExp("^[0-9]*$")},i=r.nameRegExp,o=r.phoneRegExp,a=r.codeRegExp}}]);
//# sourceMappingURL=713.f8e2575d.chunk.js.map