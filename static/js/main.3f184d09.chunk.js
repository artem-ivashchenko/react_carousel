(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(2),s=n(3),r=n(6),m=n(7),l=n(10),o=n(8),h=n(1),u=n.n(h),b=(n(15),n(9)),j=(n(16),n(0)),d=function(e){var t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,c=e.animationDuration,s=e.infinite,r=Object(h.useState)(0),m=Object(b.a)(r,2),l=m[0],o=m[1],u=t.length-a,d=l<=0&&!s,g=l>=u&&!s;return Object(j.jsxs)("div",{className:"carousel",style:{width:"".concat(a*n,"px"),transition:"".concat(c,"ms")},children:[Object(j.jsx)("ul",{className:"carousel__list",children:t.map((function(e,t){return Object(j.jsx)("li",{style:{transform:"translateX(".concat(-l*n,"px)"),transition:"".concat(c,"ms")},children:Object(j.jsx)("img",{className:"carousel__image",src:e,alt:"".concat(t+1),style:{width:n}})},e)}))}),Object(j.jsxs)("div",{className:"carousel__buttons",children:[Object(j.jsx)("button",{type:"button",className:"carousel__button",disabled:d,onClick:function(){o(s&&0===l?u:Math.max(0,l-i))},children:"<"}),Object(j.jsx)("button",{"data-cy":"next",type:"button",className:"carousel__button",disabled:g,onClick:function(){o(s&&l===u?0:Math.min(u,l+i))},children:">"})]})]})},g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.handleCheckboxChange=function(t){var n=t.target,a=n.name,i=n.checked;e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},a,i))}))},e.handleNumberChange=function(t){var n=t.target,a=n.name,i=n.value,r=+i;if("frameSize"===a||"step"===a||"itemWidth"===a){var m=t.target,l=m.min,o=m.max;r=Math.max(+l,Math.min(+o,+i))}e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},a,parseInt(String(r),10)))}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,c=e.animationDuration,s=e.infinite;return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsxs)("label",{htmlFor:"itemWidth",children:["Item width:",Object(j.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",value:n,onChange:this.handleNumberChange,min:130,max:1e3})]}),Object(j.jsxs)("label",{htmlFor:"frameSize",children:["Frame size:",Object(j.jsx)("input",{type:"number",id:"frameSize",name:"frameSize",value:a,onChange:this.handleNumberChange,min:1,max:t.length})]}),Object(j.jsxs)("label",{htmlFor:"step",children:["Step:",Object(j.jsx)("input",{type:"number",id:"step",name:"step",value:i,onChange:this.handleNumberChange,min:1,max:t.length})]}),Object(j.jsxs)("label",{htmlFor:"animationDuration",children:["Animation duration:",Object(j.jsx)("input",{type:"number",id:"animationDuration",name:"animationDuration",value:c,onChange:this.handleNumberChange})]}),Object(j.jsxs)("label",{htmlFor:"infinite",children:["Infinite:",Object(j.jsx)("input",{type:"checkbox",id:"infinite",name:"infinite",checked:s,onChange:this.handleCheckboxChange})]})]}),Object(j.jsx)(d,{images:t,itemWidth:n,frameSize:a,step:i,animationDuration:c,infinite:s})]})})}}]),n}(u.a.Component),p=g;i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f184d09.chunk.js.map