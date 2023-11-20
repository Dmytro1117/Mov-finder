import{n as t,b as g,u as k,r,d as L,j as e,L as I,O as M}from"./index-ab65dd5f.js";import{c as _}from"./TmbdApi-8b84fe5c.js";const D=t.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`,E=t.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`,F=t.ul`
  display: flex;
  gap: 22px;
  list-style: none;
  margin: 20px;
  padding: 0;
  list-style-type: none;
`,h=t(g)`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  background-color: orangered;
  &:hover {
    color: orange;
    background-color: grey;
  }
`,O=t.button`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  margin-top: 18px;
  background-color: orangered;
  &:hover {
    color: orange;
    background-color: grey;
  }
`,C=()=>{var d,p,x;const{movieId:a}=k(),[s,m]=r.useState(null),[f,l]=r.useState(!1),o=L();if(r.useEffect(()=>{(()=>{l(!0),_(a).then(i=>{m(i)}).catch(i=>{console.log(i)}).finally(()=>{l(!1)})})()},[a]),!s)return;const{title:u,release_date:j,popularity:v,overview:y,genres:b,poster_path:c,original_title:w}=s||{};return e.jsxs(e.Fragment,{children:[e.jsx(g,{to:((d=o.state)==null?void 0:d.from)??"/movies",children:e.jsx(O,{type:"button",children:"Go back"})}),f&&e.jsx(I,{}),s&&e.jsxs(D,{children:[e.jsx("img",{width:"300px",src:c?`https://image.tmdb.org/t/p/w500${c}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:w}),e.jsxs("div",{children:[e.jsxs("h1",{children:[u," (",j.slice(0,4),")"]}),e.jsxs("p",{children:["User score: ",v]}),e.jsx("h2",{children:"Overview"}),e.jsx("p",{children:y}),e.jsx("h2",{children:"Genres"}),e.jsx(E,{children:b.map(n=>e.jsx("li",{children:n.name},n.id))}),e.jsx("h2",{children:"Additional information"}),e.jsxs(F,{children:[e.jsx("li",{children:e.jsx(h,{to:"cast",state:{from:(p=o==null?void 0:o.state)==null?void 0:p.from},children:"Cast"})}),e.jsx("li",{children:e.jsx(h,{to:"reviews",state:{from:(x=o==null?void 0:o.state)==null?void 0:x.from},children:"Reviews"})})]})]})]}),e.jsx(M,{})]})};export{C as default};
