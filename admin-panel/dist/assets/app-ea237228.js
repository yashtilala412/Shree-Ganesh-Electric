import{g as A,a as N,s as S,_ as b,r as M,u as I,b as O,T as p,j as e,c as B,d as D,P as o,S as H,I as U,e as C,f as W,M as v,B as F,W as L}from"./index-2c704fdd.js";import{C as w}from"./Card-1fc08a7d.js";import{F as $}from"./FormControlLabel-5232f479.js";import{C as G}from"./Checkbox-f0fb95e5.js";import{f as z,G as m}from"./format-number-24ceabd2.js";import{C as q}from"./Container-c2319bde.js";import"./isMuiElement-8d192896.js";function J(t){return N("MuiCardHeader",t)}const K=A("MuiCardHeader",["root","avatar","action","content","title","subheader"]),k=K,V=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Q=t=>{const{classes:s}=t;return D({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},J,s)},X=S("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,s)=>b({[`& .${k.title}`]:s.title,[`& .${k.subheader}`]:s.subheader},s.root)})({display:"flex",alignItems:"center",padding:16}),Y=S("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,s)=>s.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=S("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,s)=>s.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ee=S("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,s)=>s.content})({flex:"1 1 auto"}),se=M.forwardRef(function(s,l){const n=I({props:s,name:"MuiCardHeader"}),{action:a,avatar:i,className:c,component:r="div",disableTypography:d=!1,subheader:x,subheaderTypographyProps:T,title:u,titleTypographyProps:P}=n,_=O(n,V),g=b({},n,{component:r,disableTypography:d}),h=Q(g);let j=u;j!=null&&j.type!==p&&!d&&(j=e.jsx(p,b({variant:i?"body2":"h5",className:h.title,component:"span",display:"block"},P,{children:j})));let f=x;return f!=null&&f.type!==p&&!d&&(f=e.jsx(p,b({variant:i?"body2":"body1",className:h.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:f}))),e.jsxs(X,b({className:B(h.root,c),as:r,ref:l,ownerState:g},_,{children:[i&&e.jsx(Y,{className:h.avatar,ownerState:g,children:i}),e.jsxs(ee,{className:h.content,ownerState:g,children:[j,f]}),a&&e.jsx(Z,{className:h.action,ownerState:g,children:a})]}))}),te=se;function R({title:t,subheader:s,list:l,...n}){const[a,i]=M.useState(["2"]),c=r=>{const d=a.includes(r)?a.filter(x=>x!==r):[...a,r];i(d)};return e.jsxs(w,{...n,children:[e.jsx(te,{title:t,subheader:s}),l.map(r=>e.jsx(E,{task:r,checked:a.includes(r.id),onChange:()=>c(r.id)},r.id))]})}R.propTypes={list:o.array,subheader:o.string,title:o.string};function E({task:t,checked:s,onChange:l}){const[n,a]=M.useState(null),i=u=>{a(u.currentTarget)},c=()=>{a(null)},r=()=>{c(),console.info("MARK COMPLETE",t.id)},d=()=>{c(),console.info("SHARE",t.id)},x=()=>{c(),console.info("EDIT",t.id)},T=()=>{c(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{direction:"row",alignItems:"center",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:u=>`dashed 1px ${u.palette.divider}`},...s&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx($,{control:e.jsx(G,{checked:s,onChange:l}),label:t.name,sx:{flexGrow:1,m:0}}),e.jsx(U,{color:n?"inherit":"default",onClick:i,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(W,{open:!!n,anchorEl:n,onClose:c,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsxs(v,{onClick:r,children:[e.jsx(C,{icon:"eva:checkmark-circle-2-fill",sx:{mr:2}}),"Mark Complete"]}),e.jsxs(v,{onClick:x,children:[e.jsx(C,{icon:"solar:pen-bold",sx:{mr:2}}),"Edit"]}),e.jsxs(v,{onClick:d,children:[e.jsx(C,{icon:"solar:share-bold",sx:{mr:2}}),"Share"]}),e.jsxs(v,{onClick:T,sx:{color:"error.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold",sx:{mr:2}}),"Delete"]})]})]})}E.propTypes={checked:o.bool,onChange:o.func,task:o.object};function y({title:t,total:s,icon:l,color:n="primary",sx:a,...i}){return e.jsxs(w,{component:H,spacing:3,direction:"row",sx:{px:3,py:5,borderRadius:2,...a},...i,children:[l&&e.jsx(F,{sx:{width:64,height:64},children:l}),e.jsxs(H,{spacing:.5,children:[e.jsx(p,{variant:"h4",children:z(s)}),e.jsx(p,{variant:"subtitle2",sx:{color:"text.disabled"},children:t})]})]})}y.propTypes={color:o.string,icon:o.oneOfType([o.element,o.string]),sx:o.object,title:o.string,total:o.number};function re(){return e.jsxs(q,{maxWidth:"xl",children:[e.jsx(p,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back 👋"}),e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Weekly Sales",total:714e3,color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(m,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(m,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(m,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(m,{xs:12,md:6,lg:8,children:e.jsx(R,{title:"Tasks",list:[{id:"1",name:"Create FireStone Logo"},{id:"2",name:"Add SCSS and JS files if required"},{id:"3",name:"Stakeholder Meeting"},{id:"4",name:"Scoping & Estimations"},{id:"5",name:"Sprint Showcase"}]})})]})]})}function pe(){return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx("title",{children:" Dashboard | Minimal UI "})}),e.jsx(re,{})]})}export{pe as default};