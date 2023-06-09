"use strict";(self.webpackChunkfood_delivery_shop=self.webpackChunkfood_delivery_shop||[]).push([[789],{6626:function(n,t,e){e.d(t,{m:function(){return c}});var r=e(9434),i=function(n){return n.stores.items},o=function(n){return n.stores.isLoading},u=function(n){return n.stores.error},c=function(){return{stores:(0,r.v9)(i),isLoading:(0,r.v9)(o),error:(0,r.v9)(u)}}},3789:function(n,t,e){e.r(t),e.d(t,{default:function(){return tn}});var r,i,o=e(2791),u=e(7689),c=e(6626),a=e(9434),l=e(2635),f=e(8008),s=e(168),p=e(4709),d=e(3033),h=p.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  padding: 20px;\n"]))),m=p.Z.li(i||(i=(0,s.Z)(["\n  flex-basis: 100%;\n\n  @media (min-width: ",") {\n    flex-basis: calc((100% - 20px * 2) / 3);\n  }\n\n  @media (min-width: ",") {\n    flex-basis: calc((100% - 20px * 3) / 4);\n  }\n"])),d.Mq,d.gv),v=e(9439),g=e(8520),x=e(2814),y=e(1413),b="NOT_FOUND";var Z=function(n,t){return n===t};function w(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,i=void 0===r?Z:r,o=e.maxSize,u=void 0===o?1:o,c=e.resultEqualityCheck,a=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(i),l=1===u?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:b},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(a):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var i=e[r];return r>0&&(e.splice(r,1),e.unshift(i)),i.value}return b}return{get:r,put:function(t,i){r(t)===b&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,a);function f(){var t=l.get(arguments);if(t===b){if(t=n.apply(null,arguments),c){var e=l.getEntries(),r=e.find((function(n){return c(n.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return f.clearCache=function(){return l.clear()},f}function j(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function k(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o,u=0,c={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(c=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=c,f=l.memoizeOptions,s=void 0===f?e:f,p=Array.isArray(s)?s:[s],d=j(r),h=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(m,{resultFunc:a,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return i}var C,z,_,E,I,A,O,P=k(w),q=e(2894),S=function(n){return n.store.id},L=function(n){return n.store.name},R=function(n){return n.store.location},F=P([function(n){return n.store.items}],(function(n){return n.map((function(n){return(0,y.Z)((0,y.Z)({},n),{},{price:Math.floor(101*Math.random())+100})}))})),M=P([F,q.D1],(function(n,t){var e=(null===t||void 0===t?void 0:t.map((function(n){return n.id})))||[];return n.map((function(n){return(0,y.Z)((0,y.Z)({},n),{},{isInCart:e.includes(n.id)})}))})),Q=function(){return{id:(0,a.v9)(S),name:(0,a.v9)(L),location:(0,a.v9)(R),products:(0,a.v9)(M)}},D=e(8274),N=e(2706),U=e(2982),Y=e(508),B=e(2882),T=p.Z.div(C||(C=(0,s.Z)(["\n  padding-top: 51px;\n  height: 321px;\n"]))),X=p.Z.div(z||(z=(0,s.Z)(["\n  position: relative;\n  padding: 130px 30px 40px 30px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n\n  text-align: center;\n\n  border-radius: 22px;\n  background: ",";\n"])),(function(n){return n.theme.bgCard})),$=p.Z.img(_||(_=(0,s.Z)(["\n  position: absolute;\n  top: -51px;\n  left: 50%;\n  transform: translate(-50%);\n  width: 164px;\n  height: 164px;\n  clip-path: circle(50% at 50% 50%);\n"]))),G=p.Z.h3(E||(E=(0,s.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 101.34%;\n"]))),H=p.Z.p(I||(I=(0,s.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 20px;\n  text-align: center;\n"]))),J=p.Z.div(A||(A=(0,s.Z)(["\n  position: relative;\n\n  width: 100%;\n\n  & .tooltip {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),K=(0,p.Z)(B.Y)(O||(O=(0,s.Z)(["\n  padding: 6px 3px;\n  width: 100%;\n\n  font-size: 12px;\n\n  border: 1px solid ",";\n\n  color: ",";\n\n  background-color: ",";\n"])),(function(n){return n.theme.primary}),(function(n){var t=n.isInCart,e=n.theme,r=e.bgPrimary,i=e.primary;return t?i:r}),(function(n){var t=n.isInCart,e=n.theme,r=e.bgPrimary,i=e.primary;return t?r:i})),V=e(184),W=function(n){var t=n.product,e=(0,o.useState)(!0),r=(0,v.Z)(e,2),i=r[0],u=r[1],c=(0,x.j)(),l=c.items,f=c.store_name,s=Q(),p=s.name,d=s.location,h=t.name,m=t.url,y=t.price,b=t.isInCart,Z=(0,a.I0)();(0,o.useEffect)((function(){0!==l.length&&p!==f&&u(!1)}),[Z,l.length,p,f]);return(0,V.jsx)(T,{children:(0,V.jsxs)(X,{children:[(0,V.jsx)($,{src:m,width:"164",height:"164",loading:"lazy",alt:h}),(0,V.jsx)(G,{children:(0,D.u)(h)}),(0,V.jsx)(H,{children:(0,U.a)(y)}),(0,V.jsxs)(J,{children:[(0,V.jsx)(K,{type:"button",isInCart:b,disabled:!i,onClick:function(){b||(0===l.length&&Z((0,g.PQ)({store_name:p,location:d})),Z((0,g.Xq)(t))),b&&(1===l.length&&(Z((0,g.PQ)({store_name:"",location:null})),Z((0,g.m1)(0))),Z((0,g.h2)(t)))},children:b?"Remove from cart":"Add to cart"}),!i&&(0,V.jsx)(Y.u,{ariaLabel:"disabled action",text:"you can order food only from one store",position:N.z})]})]})})},nn=function(n){var t=n.products;return(0,V.jsx)(h,{children:t.map((function(n){return(0,V.jsx)(m,{children:(0,V.jsx)(W,{product:n})},n.id)}))})},tn=function(){var n=(0,u.UO)().store_name,t=(0,c.m)().stores,e=Q().products,r=(0,a.I0)();if((0,o.useEffect)((function(){var e=function(n,t){return n.find((function(n){return(0,f.t)(n.store_name)===t}))}(t,n);e&&r((0,l.PQ)(e))}),[r,n,t]),e.length>0)return(0,V.jsx)(nn,{products:e})}},2882:function(n,t,e){e.d(t,{Y:function(){return o}});var r,i=e(168),o=e(4709).Z.button(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 10px;\n\n  clip-path: polygon(\n    10% 0%,\n    100% 0%,\n    100% 30%,\n    100% 60%,\n    90% 100%,\n    0% 100%,\n    0% 70%,\n    0% 40%\n  );\n\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  color: ",";\n  background-color: ",";\n  border-radius: 4px;\n  transition: transform 250ms ",",\n    color 250ms ",",\n    background-color 250ms ",",\n    clip-path 250ms ",";\n\n  &:disabled {\n    cursor: default;\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:not(:disabled):hover {\n    transform: scale(1.05);\n    clip-path: polygon(\n      0% 0%,\n      100% 0,\n      100% 0%,\n      100% 100%,\n      88% 100%,\n      0% 100%,\n      0% 70%,\n      0% 0%\n    );\n  }\n"])),(function(n){return n.theme.bgPrimary}),(function(n){return n.theme.primary}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.cubic}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}))},2982:function(n,t,e){e.d(t,{a:function(){return i}});var r=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},i=function(n){return"$".concat(r(n),".00")}},8274:function(n,t,e){e.d(t,{u:function(){return r}});var r=function(n){if(n.length<=16)return n;var t=n.slice(0,14);return"".concat(t,"...")}},8008:function(n,t,e){e.d(t,{t:function(){return r}});var r=function(n){return n.toLowerCase().replace(/\s/g,"")}}}]);
//# sourceMappingURL=789.58a9ce80.chunk.js.map