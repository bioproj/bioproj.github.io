var g=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,i=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&c(t,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&c(t,a,e[a]);return t},u=(t,e)=>x(t,b(e));var y=(t,e)=>{var a={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&s)for(var n of s(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a};import{n as p,j as d}from"./vendor.bd035ca5.js";const m=t=>d(p,i({},t)),h=Object.assign(p,m),R=t=>{const n=t,{options:e}=n,a=y(n,["options"]);return d("div",{css:f,children:d(h.Group,u(i({buttonStyle:"solid"},a),{children:e==null?void 0:e.map(r=>d(h.Button,{style:{width:`calc(100% / ${e.length})`},value:r.value,children:r.label},r.value))}))})},f={name:"y6dgta",styles:"padding:8px;.ant-radio-group{width:100%;display:flex;}.ant-radio-button-wrapper{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.ant-radio-button{}"};export{R as M};
