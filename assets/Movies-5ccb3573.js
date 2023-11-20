import{n as o,j as e,r as a,e as h,L as m}from"./index-ab65dd5f.js";import{M as x}from"./MoviesList-2d1ea935.js";import{P as g}from"./index-1d0c3d15.js";import{d as f}from"./TmbdApi-8b84fe5c.js";const y=o.p`
  color: orange;
  padding: 10px;
  font-size: 44px;
  margin: 0;
`,j=o.img`
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,b=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 140px);
`,v="/Mov-finder/assets/notFound-00a4d879.png",S=()=>e.jsxs(b,{children:[e.jsx(j,{src:v,alt:"Mr.Hero"}),e.jsx(y,{children:"There is no movies with this request. Please, try again"})]}),w=o.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  max-width: 400px;
`;o.img`
  width: 550px;
  height: auto;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`;const M=o.input`
  background-color: silver;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: tomato;
    border: 1px solid tomato;
  }
`,F=o.button`
  display: inline-block;
  border: 0;
  cursor: pointer;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  color: white;
  background-color: orangered;

  &:hover {
    color: orange;
    background-color: gray;
  }
`,p=({searchMovies:r})=>{const[n,i]=a.useState(""),[c,l]=h(""),s=c.get("query");a.useEffect(()=>{s&&r(s)},[s]);const u=t=>{i(t.target.value)},d=t=>{t.preventDefault(),n!==""&&(l({query:n}),r(n.toLowerCase()),i(""))};return e.jsxs(w,{onSubmit:d,children:[e.jsx(M,{type:"text",name:"query",autoFocus:!0,value:n,onChange:u}),e.jsx(F,{type:"submit",children:"Search"})]})};p.propTypes={searchMovies:g.func.isRequired};const P=o.main``,C=()=>{const[r,n]=a.useState([]),[i,c]=a.useState(!1),[l,s]=a.useState(!1),u=d=>{c(!0),f(d).then(t=>{n(t),s(t.length===0)}).catch(t=>{console.log(t)}).finally(()=>{c(!1)})};return e.jsxs(P,{children:[e.jsx(p,{searchMovies:u}),i&&e.jsx(m,{}),l&&e.jsx(S,{}),r&&e.jsx(x,{films:r})]})};export{C as default};
