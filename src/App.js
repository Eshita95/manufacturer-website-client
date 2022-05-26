import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login'
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Home/Blogs/Blogs';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/Home/MyPortfolio/Myportfolio'
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth';
import ToolsAndPartsDetails from './Tools/ToolsAndPartsDetails';
import { ToastContainer } from 'react-toastify';
import DashBoard from './DashBoard/DashBoard';
import MyOrder from './DashBoard/MyOrder';
import AddAReview from './DashBoard/AddAReview';
import AddProduct from './DashBoard/AddProducts';
import MakeAdmin from './DashBoard/MakeAdmin';
import ManageProducts from './DashBoard/ManageProducts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
          <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddAReview></AddAReview>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/toolsParts/:toolsId' element={
          <RequireAuth>
            <ToolsAndPartsDetails></ToolsAndPartsDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
