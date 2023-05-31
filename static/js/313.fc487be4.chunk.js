"use strict";(self.webpackChunkfood_delivery_shop=self.webpackChunkfood_delivery_shop||[]).push([[313],{2814:function(n,e,t){t.d(e,{j:function(){return o}});var r=t(9434),i=t(2894),o=function(){var n=(0,r.v9)(i.D);return{store_name:(0,r.v9)(i.M),items:n}}},3627:function(n,e,t){t.d(e,{L:function(){return x}});var r=t(1413),i="NOT_FOUND";var o=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?o:r,a=t.maxSize,c=void 0===a?1:a,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(u),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(e,o){r(e)===i&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function d(){var e=f.get(arguments);if(e===i){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function a(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=c,f=s.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],m=a(r),h=n.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(p)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),x};return i}var l=c(u),s=t(9434),f=t(2894),d=function(n){return n.store.id},p=function(n){return n.store.store_name},m=l([function(n){return n.store.items}],(function(n){return n.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{price:Math.floor(101*Math.random())+100})}))})),h=l([m,f.D],(function(n,e){var t=(null===e||void 0===e?void 0:e.map((function(n){return n.id})))||[];return n.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{isInCart:t.includes(n.id)})}))})),x=function(){return{id:(0,s.v9)(d),store_name:(0,s.v9)(p),items:(0,s.v9)(h)}}},5859:function(n,e,t){t.d(e,{y:function(){return a}});var r=t(9434),i=function(n){return n.orders.items},o=function(n){return n.orders.isLoading},u=function(n){return n.orders.error},a=function(){return{items:(0,r.v9)(i),isLoading:(0,r.v9)(o),error:(0,r.v9)(u)}}},3946:function(n,e,t){t.d(e,{a:function(){return l}});var r=t(9434),i=function(n){return n.user.id},o=function(n){return n.user.name},u=function(n){return n.user.email},a=function(n){return n.user.number},c=function(n){return n.user.address},l=function(){return{id:(0,r.v9)(i),name:(0,r.v9)(o),email:(0,r.v9)(u),number:(0,r.v9)(a),address:(0,r.v9)(c)}}},5313:function(n,e,t){t.r(e),t.d(e,{default:function(){return Rn}});var r,i,o,u,a,c,l,s,f,d,p,m,h,x,g,v,b,y,Z,j,w,k,z=t(9439),E=t(6907),_=t(2814),N=t(7341),S=t(2872),q=t(168),A=t(4709),C=A.Z.ul(r||(r=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 20px;\n"]))),M=t(9434),I=t(8520),F=t(8274),T=t(3033),O=A.Z.div(i||(i=(0,q.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: 20px 20px 20px 51px;\n  height: 102px;\n\n  border-radius: 22px;\n  background: ",";\n\n  & .amount {\n    position: absolute;\n    bottom: 7%;\n    right: 3%;\n  }\n"])),(function(n){return n.theme.bgCard})),$=A.Z.div(o||(o=(0,q.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n\n  padding-left: 51px;\n"]))),B=A.Z.img(u||(u=(0,q.Z)(["\n  position: absolute;\n  top: 50%;\n  left: -35px;\n  transform: translate(0, -50%);\n\n  width: 70px;\n  height: 70px;\n  clip-path: circle(50% at 50% 50%);\n"]))),R=A.Z.h3(a||(a=(0,q.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 101.34%;\n"]))),P=A.Z.p(c||(c=(0,q.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 20px;\n  text-align: center;\n"]))),D=A.Z.button(l||(l=(0,q.Z)(["\n  padding: 0px;\n\n  color: transparent;\n  background-color: transparent;\n  border: none;\n  width: fit-content;\n  height: fit-content;\n"]))),L=A.Z.svg(s||(s=(0,q.Z)(["\n  fill: ",";\n  height: 18px;\n  width: 18px;\n\n  transition: transform 250ms ",",\n    fill 250ms ",";\n\n  &:hover,\n  &:focus {\n    fill: ",";\n    transform: scale(1.1);\n  }\n\n  @media (min-width: ",") {\n    height: 22px;\n    width: 22px;\n  }\n"])),(function(n){return n.theme.disabled}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.secondary}),T.Mq),Y=t(885),U=A.Z.div(f||(f=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  padding: 4px 12px;\n\n  border-radius: 30px;\n  background-color: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary})),X=A.Z.p(d||(d=(0,q.Z)(["\n  cursor: default;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n\n  text-align: center;\n"]))),J=A.Z.button(p||(p=(0,q.Z)(["\n  padding: 0px;\n  width: 20px;\n  height: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 20px;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n\n  transition: color 250ms ",",\n    color 250ms ",",\n    transform 250ms ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n    background-color: transparent;\n    transform: scale(1);\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cardTextAccent}),(function(n){return n.theme.primaryTransparet}),(function(n){return n.theme.disabled})),V=t(184),W=function(n){var e=n.id,t=n.amount,r=(0,M.I0)();return(0,V.jsxs)(U,{className:"amount",children:[(0,V.jsx)(J,{type:"button",onClick:function(){r((0,I.T1)({id:e,amount:t-1}))},disabled:t<=1,children:"-"}),(0,V.jsx)(X,{children:t}),(0,V.jsx)(J,{type:"button",onClick:function(){r((0,I.T1)({id:e,amount:t+1}))},children:"+"})]})},G=function(n){var e=n.item,t=(0,M.I0)(),r=e.id,i=e.name,o=e.url,u=e.price,a=e.amount;return(0,V.jsxs)(O,{children:[(0,V.jsxs)($,{children:[(0,V.jsx)(B,{src:o,width:"70",height:"70",loading:"lazy",alt:i}),(0,V.jsx)(R,{children:(0,F.u)(i)}),(0,V.jsxs)(P,{children:[u," $"]})]}),(0,V.jsx)(D,{type:"button",onClick:function(){return t((0,I.h2)(e))},children:(0,V.jsx)(L,{children:(0,V.jsx)("use",{href:"".concat(Y.Z,"#icon-trash-can-solid")})})}),(0,V.jsx)(W,{id:r,amount:a})]})},H=function(n){var e=n.items;return(0,V.jsx)(C,{children:e.map((function(n){return(0,V.jsx)("li",{children:(0,V.jsx)(G,{item:n})},n.id)}))})},K=t(2882),Q=A.Z.div(m||(m=(0,q.Z)(["\n  display: grid;\n  gap: 20px;\n\n  @media (min-width: ",") {\n    grid-template-areas:\n      'form cart'\n      'form cart';\n\n    grid-template-columns: 1fr 1fr;\n\n    & > .form {\n      grid-area: form;\n    }\n\n    & > .cart {\n      grid-area: cart;\n    }\n  }\n\n  & > .cart {\n    height: 55vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n\n    &::-webkit-scrollbar {\n      width: 0.5em;\n    }\n\n    &::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ",";\n      border-radius: 5px;\n    }\n  }\n"])),T.Mq,(function(n){return n.theme.borderModal})),nn=A.Z.div(h||(h=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-left: auto;\n  padding: 20px;\n\n  @media (min-width: ",") {\n    width: calc(50% - 20px);\n  }\n"])),T.Mq),en=A.Z.div(x||(x=(0,q.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),tn=A.Z.p(g||(g=(0,q.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n"]))),rn=A.Z.p(v||(v=(0,q.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 26px;\n"]))),on=(0,A.Z)(K.Y)(b||(b=(0,q.Z)(["\n  padding: 8px 20px;\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n"]))),un=t(3433),an=t(1413),cn=t(5861),ln=t(4687),sn=t.n(ln),fn=t(1134),dn=t(4695),pn=t(6688),mn=t(6768),hn=t(6727),xn=hn.Ry().shape({name:hn.Z_().required(pn.Bw).matches(mn.cS,pn.SF.format).max(16,pn.SF.size),email:hn.Z_().required(pn.Bw).email(pn.rn),number:hn.Z_().required(pn.Bw).matches(mn.Oj,pn.Zz),address:hn.Z_().required(pn.Bw)}),gn=t(6382),vn=(0,gn.x0)(),bn=[{inputName:"name",type:"text",id:(0,gn.x0)(),label:"Name",placeholder:"Enter your name"},{inputName:"email",type:"email",id:(0,gn.x0)(),label:"Email",placeholder:"Enter email"},{inputName:"number",type:"tel",id:(0,gn.x0)(),label:"Phone",placeholder:"Enter phone"},{inputName:"address",type:"text",id:(0,gn.x0)(),label:"Address",placeholder:"Enter address"}],yn=t(4942),Zn=function(n,e){return n.reduce((function(n,t){return(0,an.Z)((0,an.Z)({},n),{},(0,yn.Z)({},t.inputName,e[t.inputName]))}),{})},jn=t(3946),wn=t(4925),kn=t(5970),zn=A.Z.div(y||(y=(0,q.Z)(["\n  position: relative;\n"]))),En=A.Z.label(Z||(Z=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.textPrimary})),_n=A.Z.input(j||(j=(0,q.Z)(["\n  background-color: #fff;\n  outline: none;\n  border: 2px solid ",";\n  border-radius: 8px;\n  color: #212121;\n  padding: 0.875rem;\n\n  width: 100%;\n\n  &::placeholder {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 18px;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text})),Nn=A.Z.p(w||(w=(0,q.Z)(["\n  width: 100%;\n  position: absolute;\n  bottom: -16px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  color: red;\n  font-size: 12px;\n  font-weight: 500;\n"]))),Sn=["id","inputName","label","register","errors"],qn=function(n){var e=n.id,t=n.inputName,r=n.label,i=n.register,o=n.errors,u=(0,wn.Z)(n,Sn);return(0,V.jsxs)(zn,{children:[(0,V.jsx)(En,{htmlFor:e,children:r}),(0,V.jsx)(_n,(0,an.Z)((0,an.Z)({id:e},u),i(t))),(0,V.jsx)(Nn,{children:(0,V.jsx)(kn.B,{errors:o,name:t})})]})},An=A.Z.ul(k||(k=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding-top: 20px;\n"]))),Cn=t(2791),Mn=t(3627),In=1e7,Fn=function(n){return n.map((function(n){return{name:n.name,price:n.price,amount:n.amount}}))},Tn=t(5859),On=t(3762),$n=function(){var n=(0,jn.a)().id,e=(0,_.j)().items,t=(0,Mn.L)().store_name,r=(0,Tn.y)().items,i=(0,Cn.useState)(0),o=(0,z.Z)(i,2),u=o[0],a=o[1],c=(0,jn.a)(),l=(0,M.I0)(),s=(0,fn.cI)({resolver:(0,dn.X)(xn),defaultValues:Zn(bn,c)}),f=s.register,d=s.handleSubmit,p=s.formState.errors;(0,Cn.useEffect)((function(){var n=e.reduce((function(n,e){return n+e.price*e.amount}),0);a(n)}),[e]);var m=function(){var i=(0,cn.Z)(sn().mark((function i(o){var a,c;return sn().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:a={info:{id:Math.floor(9e7*Math.random())+In,store_name:t,total_price:u},items:Fn(e)},c=(0,an.Z)((0,an.Z)({},o),{},{orders:[].concat((0,un.Z)(r),[a])}),n||l((0,On.P0)(c)),n&&l((0,On.gU)((0,an.Z)((0,an.Z)({},c),{},{id:n})));case 4:case"end":return i.stop()}}),i)})));return function(n){return i.apply(this,arguments)}}();return(0,V.jsx)("form",{id:vn,onSubmit:d(m),children:(0,V.jsx)(An,{children:bn.map((function(n){return(0,V.jsx)("li",{children:(0,V.jsx)(qn,(0,an.Z)((0,an.Z)({},n),{},{register:f,errors:p}))},n.id)}))})})},Bn=t(4884),Rn=function(){var n=(0,jn.a)().id,e=(0,_.j)().items,t=(0,Cn.useState)(0),r=(0,z.Z)(t,2),i=r[0],o=r[1],u=(0,M.I0)();(0,Cn.useEffect)((function(){n&&u((0,On.ak)({id:n}))}),[u,n]),(0,Cn.useEffect)((function(){var n=e.reduce((function(n,e){return n+e.price*e.amount}),0);o(n)}),[e]);var a=e.length>0;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(E.ql,{children:(0,V.jsx)("title",{children:"Cart"})}),(0,V.jsx)(S.$,{children:(0,V.jsx)(N.W,{children:a?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)("div",{className:"form",children:(0,V.jsx)($n,{})}),(0,V.jsx)("div",{className:"cart",children:(0,V.jsx)(H,{items:e})})]}),(0,V.jsxs)(nn,{children:[(0,V.jsxs)(en,{children:[(0,V.jsx)(tn,{children:"Total: "}),(0,V.jsxs)(rn,{children:[i," $"]})]}),(0,V.jsx)(on,{form:vn,type:"submit",children:"Submit"})]})]}):(0,V.jsx)(Bn.k,{children:"Your cart is empty"})})})]})}},2894:function(n,e,t){t.d(e,{D:function(){return r},M:function(){return i}});var r=function(n){return n.cart.items},i=function(n){return n.cart.store_name}},2882:function(n,e,t){t.d(e,{Y:function(){return o}});var r,i=t(168),o=t(4709).Z.button(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n\n  clip-path: polygon(\n    10% 0%,\n    100% 0%,\n    100% 30%,\n    100% 60%,\n    90% 100%,\n    0% 100%,\n    0% 70%,\n    0% 40%\n  );\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  color: ",";\n  background-color: ",";\n  border-radius: 4px;\n  transition: transform 250ms ",",\n    color 250ms ",",\n    background-color 250ms ",",\n    clip-path 250ms ",";\n\n  &:disabled {\n    cursor: default;\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:not(:disabled):hover {\n    transform: scale(1.05);\n    clip-path: polygon(\n      0% 0%,\n      100% 0,\n      100% 0%,\n      100% 100%,\n      88% 100%,\n      0% 100%,\n      0% 70%,\n      0% 0%\n    );\n  }\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}))},4884:function(n,e,t){t.d(e,{k:function(){return o}});var r,i=t(168),o=t(4709).Z.p(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  padding-top: 30vh;\n  width: 300px;\n\n  text-align: center;\n"])))},2872:function(n,e,t){t.d(e,{$:function(){return o}});var r,i=t(168),o=t(4709).Z.section(r||(r=(0,i.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"])))},8274:function(n,e,t){t.d(e,{u:function(){return r}});var r=function(n){if(n.length<=16)return n;var e=n.slice(0,14);return"".concat(e,"...")}},6688:function(n,e,t){t.d(e,{Bw:function(){return r},SF:function(){return i},Zz:function(){return o},cT:function(){return a},rn:function(){return u}});var r="This field is required",i={format:"Invalid name format e.g Adrian, Jacob Mercer",size:"Name may contain only 16 characters"},o="Invalid phone format",u="Invalid email format",a="Must contain digist only"},6768:function(n,e,t){t.d(e,{Oj:function(){return i},a3:function(){return o},cS:function(){return r}});var r=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),i=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,o=new RegExp("^[0-9]*$")}}]);
//# sourceMappingURL=313.fc487be4.chunk.js.map