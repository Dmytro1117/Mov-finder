import{n as o,u as f,r as e,j as t,L as g}from"./index-ab65dd5f.js";import{f as h}from"./TmbdApi-8b84fe5c.js";import{a as j}from"./index-1eb5da9c.js";import"./index-1d0c3d15.js";const u=o.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style-type: none;
  padding: 0;
  justify-content: center;
`,c=o.p`
  margin-top: 8px;
`,w=o.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  text-align: center;
  max-width: min-content;

  img {
    max-width: 182px;
    border-radius: 4px;
  }
  span {
    color: #ffc700;
  }
`,S=()=>{const{movieId:a}=f(),[i,p]=e.useState([]),[l,n]=e.useState(!1);return e.useEffect(()=>{(()=>{n(!0),h(a).then(s=>{p(s)}).catch(s=>{console.log(s)}).finally(()=>{n(!1)})})()},[a]),i&&j.scrollMore(500),t.jsxs("div",{children:[l&&t.jsx(g,{}),t.jsx(u,{children:i.map(({id:r,profile_path:s,original_name:d,name:x,character:m})=>t.jsxs(w,{children:[t.jsx("img",{width:"200px",src:s?`https://image.tmdb.org/t/p/w500${s}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:d}),t.jsxs(c,{children:[t.jsx("span",{children:" Actor:"})," ",x]}),t.jsxs(c,{children:[t.jsx("span",{children:"Character:"})," ",m]})]},r))})]})};export{S as default};
