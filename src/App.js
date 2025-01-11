import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from  './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home';
import './components/Register.css'
import Detail from './components/Detail';

function App() {
  return (
    <>
     <Router>
     
      <h1>Registeration Form</h1>
      <hr className='hrline' />
       

      <Routes>
        <Route path='/' element={<Home />}></Route>  
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/Detail' element={<Detail />}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
