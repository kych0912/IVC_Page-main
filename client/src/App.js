import './App.css';
import Navbar from '../src/component/navbar'
import Main from '../src/component/main'
import Faq from '../src/component/FAQ'
import Recruit from '../src/component/Recruit'
import Login from "./component/admin/login"
import Admin from "./component/admin/admin"
import { Outlet } from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";
import Footer from './component/footer';
import Press from './component/Press';

const WithNav = () =>{
  return(
    <>
      <Outlet/>
      <Navbar/>
      <Footer/>
    </>
  )
}

const WithoutNav =()=>{
  return(
    <Outlet/>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNav/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/Press" element={<Press/>}/>
          <Route path="/FAQ" element={<Faq/>}/>
          <Route path="/recruit" element={<Recruit/>}/>
        </Route>

        <Route element={<WithoutNav/>}>
          <Route path="/admin" element={<Login/>}/>
          <Route path="/admin/edit" element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}



export default App;
