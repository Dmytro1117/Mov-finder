import{n as o,u as c,r as n,j as e,L as l}from"./index-ab65dd5f.js";import{a as d}from"./TmbdApi-8b84fe5c.js";import{a as m}from"./index-1eb5da9c.js";import"./index-1d0c3d15.js";const h=o.ul`
  list-style-type: none;
  padding: 0;
`,f=o.li`
  font-size: 16px;
  padding: 16px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-bottom: 12px;

  span {
    font-size: 18px;
    color: #ffc700;
  }
`,g=o.p`
  margin-top: 8px;
`,u=o.div`
  font-size: 16px;
  padding: 16px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-bottom: 12px;
  text-align: center;
`,R=()=>{const{movieId:r}=c(),[s,p]=n.useState([]),[x,a]=n.useState(!1);return n.useEffect(()=>{(()=>{a(!0),d(r).then(i=>{p(i)}).catch(i=>{console.log(i)}).finally(()=>{a(!1)})})()},[r]),s&&m.scrollMore(500),e.jsxs(e.Fragment,{children:[x&&e.jsx(l,{}),s.length!==0&&e.jsx("div",{children:e.jsx(h,{children:s.map(t=>e.jsxs(f,{children:[e.jsxs("p",{children:[e.jsx("span",{children:"Author:"})," ",t.author]}),e.jsx(g,{children:t.content})]},t.id))})}),s.length===0&&e.jsx(u,{children:"We don't have any reviews for this movie"})]})};export{R as default};
