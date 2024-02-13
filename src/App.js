import { Route, Routes } from 'react-router-dom';
import Register from './AUTH/Register';
import './App.css';
import Login from './AUTH/Login';
import Home from './Pages/Home';
import Layout from "./Layout/Layout"






function App() {
  return (
    <>
      <Layout>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>

      </Layout>
    </>
  );
}

export default App;
