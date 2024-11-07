import {Link} from "react-router-dom";
import logo from "/src/img/logo.png";

const NavBar=()=>{
    return (
        <div className="bg-[#360033] fixed w-full top-0">
            <div className="float-left text-[white] align-center no-underline text-base px-4 py-3.5"><img src={logo} className="w-[39px] h-[33px]"/></div>
            <Link to='/' className="float-left text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">หนัาหลัก</Link>
            <Link to='/MoviePage' className="float-left text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">ประวัติการสั่งซื้อ</Link>
            <Link to='/RegisterCustomer' className="float-right text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">Register</Link>
            <Link to='/LoginCustomer' className="float-right text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">Login</Link>
        </div>
    );
}

export default NavBar