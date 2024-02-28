import './App.css';
import Navbar from '../src/component/navbar'
import Main from '../src/component/main'
import Faq from '../src/component/FAQ'
import Recruit from '../src/component/Recruit'
import Login from "./component/admin/login"
import Admin from "./component/admin/admin"
import { Outlet } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from  "react-router-dom";
import Footer from './component/footer';
import Press from './component/Press';
import {QueryClient, QueryClientProvider} from 'react-query'

const WithNav = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const WithoutNav =()=>{
  return(
    <>
    <Outlet/>
    </>
  )
}

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<WithNav/>}>
            <Route index element={<Main/>}/>
            <Route path="/Press" element={<Press/>}/>
            <Route path="/FAQ" element={<Faq/>}/>
            <Route path="/recruit" element={<Recruit/>}/>
          </Route>

          <Route path="/admin" element={<WithoutNav/>}>
            <Route index element={<Login/>}/>
            <Route path="edit" element={<Admin/>}/>
          </Route>

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
