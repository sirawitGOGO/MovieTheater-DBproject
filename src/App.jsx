import './App.css'
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NavBar from './component/Navbar';
import MainPage from './page/MainPage';
import MoviePage from './page/MoviePage';
import SelectMovie from './page/SelectMoviePage';
import LoginFormCustomer from './page/LoginFormCustomer';
import RegisterCustomer from './page/RegisterCustomer';
import InterestMovie from './page/InterestMovie';
import MovieTable from './page/MovieTable';
import AddMovie from './page/AddMovie';
import TheaterTable from './page/TheaterTable';
import AddTheater from './page/AddTheater';
import PaymentTable from './page/PaymentTable';
import SummarySaleTicket from './page/SummarySaleTicket';
import NavbarAdmin from './component/NavbarAdmin';




function App() {
  
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/MoviePage' element={<MoviePage/>} />
        <Route path='/movie-info/:movie_id' element={<SelectMovie/>}/>
        <Route path='/LoginCustomer' element={<LoginFormCustomer/>}/>
        <Route path='/RegisterCustomer' element={<RegisterCustomer/>}/>
        <Route path='/InterestMovie' element={<InterestMovie/>}/>
        <Route path='/MovieTable' element={<MovieTable/>}/>
        <Route path='/AddMovie' element={<AddMovie/>}/>
        <Route path='/TheaterTable' element={<TheaterTable/>}/>
        <Route path='/AddTheater' element={<AddTheater/>}/>
        <Route path='/PaymentTable' element={<PaymentTable/>}/>
        <Route path='/SummarySaleTicket' element={<SummarySaleTicket/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
