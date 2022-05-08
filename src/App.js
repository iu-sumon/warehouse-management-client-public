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
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ItemDetails from './Components/ItemDetails/ItemDetails';


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
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/inventory/:id' element={
          
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>

        } />



        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
