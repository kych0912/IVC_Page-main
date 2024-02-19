import './App.css';
import Navbar from '../src/component/navbar'
import Main from '../src/component/main'
import Faq from '../src/component/FAQ'
import Recruit from '../src/component/Recruit'
import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";
import Footer from './component/footer';
import Press from './component/Press';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Press" element={<Press/>}/>
          <Route path="/FAQ" element={<Faq/>}/>
          <Route path="/recruit" element={<Recruit/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
