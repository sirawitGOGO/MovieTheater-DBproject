import {Link} from "react-router-dom";
import logo from "/src/img/logo.png";
import { useState } from "react";

const NavbarAdmin=()=>{
    const [AdminName,setAdminName] = useState("Mr. bruh")
    return (
        <div className="bg-[#360033] fixed w-full top-0">
            <div className="float-left text-[white] align-center no-underline text-base px-4 py-3.5"><img src={logo} className="w-[39px] h-[33px]"/></div>
            <Link to='/MovieTable' className="float-left text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">ภาพยนตร์</Link>
            <Link to='/TheaterTable' className="float-left text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">รอบฉายภาพยนตร์</Link>
            <Link to='/PaymentTable' className="float-left text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">การซื้อตั๋วภาพยนตร์</Link>
            <Link to='/' className="float-right text-[white] text-center no-underline text-base px-4 py-3.5 hover:text-[rgb(251,192,45)]">Log Out</Link>
            <div className="float-right text-[white] text-center no-underline text-base px-4 py-3.5 cursor-default">{AdminName}</div>
        </div>
    );
}

export default NavbarAdmin