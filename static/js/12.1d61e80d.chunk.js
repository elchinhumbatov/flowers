(this.webpackJsonpflowers=this.webpackJsonpflowers||[]).push([[12],{200:function(e,t,a){"use strict";a(0);var c=a(191),s=a(211),n=a(7),r=(a(201),a(1));t.a=function(e){var t=e.data;return Object(r.jsxs)(s.a,{"aria-label":"breadcrumb",className:"breadcrumb",children:[t.links.map((function(e,t){return Object(r.jsx)(n.b,{color:"inherit",to:e.url,children:e.text},t)})),Object(r.jsx)(c.a,{color:"textPrimary",children:t.last})]})}},201:function(e,t,a){},210:function(e,t,a){e.exports={optionsWrap:"Delivery_optionsWrap__NcPSi",options:"Delivery_options__2EsKl",paymentsWrap:"Delivery_paymentsWrap__oUNGi",payments:"Delivery_payments__3yReh",payment:"Delivery_payment__1XzlE"}},211:function(e,t,a){"use strict";var c=a(2),s=a(39),n=a(3),r=a(0),i=(a(74),a(4),a(5)),l=a(6),o=a(191),j=a(21),p=a(85),d=Object(p.a)(r.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=a(81);var m=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(j.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return r.createElement(b.a,Object(c.a)({component:"li",className:t.root,focusRipple:!0},a),r.createElement(d,{className:t.icon}))}));var u=r.forwardRef((function(e,t){var a=e.children,l=e.classes,j=e.className,p=e.component,d=void 0===p?"nav":p,b=e.expandText,u=void 0===b?"Show path":b,h=e.itemsAfterCollapse,x=void 0===h?1:h,O=e.itemsBeforeCollapse,f=void 0===O?1:O,v=e.maxItems,g=void 0===v?8:v,y=e.separator,N=void 0===y?"/":y,_=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=r.useState(!1),w=k[0],E=k[1],C=r.Children.toArray(a).filter((function(e){return r.isValidElement(e)})).map((function(e,t){return r.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return r.createElement(o.a,Object(c.a)({ref:t,component:d,color:"textSecondary",className:Object(i.a)(l.root,j)},_),r.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(c,s,n){return n<e.length-1?c=c.concat(s,r.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):c.push(s),c}),[])}(w||g&&C.length<=g?C:function(e){return f+x>=e.length?e:[].concat(Object(s.a)(e.slice(0,f)),[r.createElement(m,{"aria-label":u,key:"ellipsis",onClick:function(e){E(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(s.a)(e.slice(e.length-x,e.length)))}(C),l.separator,N)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(u)},233:function(e,t,a){"use strict";a(0);var c=a(210),s=a.n(c),n=a(1);t.a=function(){return Object(n.jsxs)("div",{className:s.a.options,children:[Object(n.jsxs)("div",{className:s.a.courier,children:[Object(n.jsx)("h6",{children:"\u041a\u0443\u0440\u044c\u0435\u0440 \u0434\u043e \u0434\u0432\u0435\u0440\u0438"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u041c\u041a\u0410\u0414."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u041c\u041a\u0410\u0414."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u041c\u041a\u0410\u0414."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u041c\u041a\u0410\u0414."]})]}),Object(n.jsxs)("div",{className:s.a.pickup,children:[Object(n.jsx)("h6",{children:"\u0421\u0430\u043c\u043e\u0432\u044b\u0437\u043e\u0432"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u041c\u043e\u0436\u0430\u0439\u0441\u043a\u043e\u0435 \u0448\u043e\u0441\u0441\u0435, \u0434. 41,\u043a.1."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u043c. \u0424\u0438\u043b\u0438, \u041d\u043e\u0432\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430, \u0434. 2, \u043a.1."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041d\u043e\u0432\u044b\u0439 \u0410\u0440\u0431\u0430\u0442, 3, \u0441\u0442\u0440. 1,"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u0414\u043b\u044f \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u0435\u0445\u0430\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{}),"\u041d\u0430\u0437\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0424\u0418\u041e \u0438 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"]})]})]})}},234:function(e,t,a){"use strict";a(0);var c=a(210),s=a.n(c),n=a(41),r=a(1);t.a=function(){var e=Object(n.c)((function(e){return e.deliveryPage.paymentMethods}));return Object(r.jsx)("div",{className:s.a.payments,children:e.map((function(e){return Object(r.jsxs)("div",{className:s.a.payment,children:[Object(r.jsx)("img",{src:a(222)("./".concat(e.img,".png")).default,alt:"logo"}),Object(r.jsx)("p",{children:e.text})]},e.id)}))})}},335:function(e,t,a){"use strict";a.r(t);a(0);var c=a(210),s=a.n(c),n=a(200),r=a(17),i=a(41),l=a(233),o=a(234),j=a(1);t.default=function(){var e=Object(r.f)().pathname,t={last:Object(i.c)((function(t){return t.roadmap[e]})),links:[{url:"/",text:"Flower place"}]};return Object(j.jsxs)("section",{className:"graybg",children:[Object(j.jsxs)("div",{className:"container-outter",children:[Object(j.jsx)(n.a,{data:t}),Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h3",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0438 \u043e\u043f\u043b\u0430\u0442\u0430 "}),Object(j.jsx)("p",{children:"\u0417\u0430\u043a\u0430\u0437\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u0443\u0442\u043a\u0438"})]})]}),Object(j.jsx)("section",{className:"whitebg",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:s.a.optionsWrap,children:[Object(j.jsx)("h5",{children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(j.jsx)(l.a,{})]})})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:s.a.paymentsWrap,children:[Object(j.jsx)("h5",{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u043f\u043b\u0430\u0442\u044b"}),Object(j.jsx)(o.a,{})]})})]})}}}]);
//# sourceMappingURL=12.1d61e80d.chunk.js.map