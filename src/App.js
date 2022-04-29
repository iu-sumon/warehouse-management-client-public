import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import AddItem from './Components/AddItem/AddItem';
import ManageItem from './Components/ManageItem/ManageItem';
import Login from './Components/Login/Login';
import MyItem from './Components/MyItem/MyItem';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
  <Header></Header>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Items />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/manage-item' element={<ManageItem />} />
        <Route path='/my-item' element={<MyItem />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
