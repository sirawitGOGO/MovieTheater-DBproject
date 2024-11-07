import NavBar from "../component/Navbar";
import MovieItem from "./MovieItem";
import {movies} from "/src/data.json";
import { ClockCircleOutlined} from '@ant-design/icons';

// ยอดขายตั๋วของหนังแต่ละเรื่อง
const SaleMovies =()=>{
    const saleTicket = 1 //ข้อมูลตามดาต้า
    const totalPrice = 1
    return (
        <>
        <div className="flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[500px] h-[480px] text-[black] text-[14px] font-bold bg-[#360033] pt-[10px] pl-[10px]">
            <div className="flex flex-row">
                <img className="block ml-[auto] mr-[auto] my-[5px] mt-[5px] border-[none]  w-[240pxpx] h-[288px] rounded-[8px]" src={movies[0].poster}></img>
                <div className="flex flex-col ml-[25px] w-[350px]">
                    <h4 className=" mt-0 text-[28px] font-bold text-[#ffffff]">{movies[0].title}</h4>
                    <h4 className=" mt-0 mb-[5px] text-[28px] font-bold text-[#ffffff]">in cinemas</h4>
                    <p className=" mt-[5px] mb-[5px] text-[14px] text-[#ffffff]">{movies[0].cate}</p>
                    <p className="flex flex-row mt-[5px] mb-[5px] text-[14px] text-[#ffffff]"><ClockCircleOutlined className="mt-auto mb-auto pr-[5px]" /> {movies[0].time} นาที</p>
                </div>
            </div>
            <div>
                <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">ยอดตั๋วที่ขายได้</p>
                <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{saleTicket}</div>
                <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">รายได้</p>
                <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{totalPrice}</div>
            </div>
        </div>
        </>
    );
}
const SummarySaleTicket =()=>{
    return (
        <>
        <div className="flex flex-col pl-10 pt-[50px]">
            <h1  className="text-3xl mt-7 mb-3 text-[#FBC02D]">ยอดขายของภาพยนตร์</h1>
            <ul className='flex flex-wrap justify-left gap-5 flex-row p-0 ml-5'>
                <SaleMovies />
            </ul>
        </div>
        </>
        
    );
}

export default SummarySaleTicket