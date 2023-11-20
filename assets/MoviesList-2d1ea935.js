import{n as i,b as n,d as s,j as o}from"./index-ab65dd5f.js";import{P as e}from"./index-1d0c3d15.js";const a=i.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`,x=i.li`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
  0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
`,d=i(n)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`,l=i.img`
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`,c=i.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 0px;
  font-size: 10px;
  color: #3f51b5;
`,g=i.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: black;
`,m=({films:r})=>{const p=s();return o.jsx(a,{children:r.map(t=>o.jsx(x,{children:o.jsxs(d,{to:`/movies/${t.id}`,state:{from:p},children:[o.jsx(l,{src:t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:t.original_title}),o.jsx(c,{children:o.jsx(g,{children:t.original_title})})]})},t.id))})};m.propTypes={films:e.arrayOf(e.shape({title:e.string.isRequired,id:e.number.isRequired}))};export{m as M};
