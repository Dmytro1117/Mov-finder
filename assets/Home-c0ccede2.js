import{n as a,r as s,j as t,L as l}from"./index-ab65dd5f.js";import{M as m}from"./MoviesList-2d1ea935.js";import{b as c}from"./TmbdApi-8b84fe5c.js";import"./index-1d0c3d15.js";const f=a.h1`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 18px;
`,u=()=>{const[o,i]=s.useState([]),[r,n]=s.useState(!1);return s.useEffect(()=>{(()=>{n(!0),c().then(e=>{i(e)}).catch(e=>{console.log(e)}).finally(()=>{n(!1)})})()},[]),t.jsxs("main",{children:[t.jsx(f,{children:"Trending today"}),t.jsx(m,{films:o}),r&&t.jsx(l,{})]})};export{u as default};
