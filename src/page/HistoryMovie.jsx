import { useParams } from "react-router-dom";
import {movies} from "/src/data.json";
import { useState , useEffect } from "react";
import { ClockCircleOutlined} from '@ant-design/icons';

// page ประวัติการสั่งซื้อ หลังชำระเงินเอาข้อมูลที่อยู่ส่วน summary ชำระเงินมาแสดงใน page นี้
const HistoryMovie =()=>{
    // const { movie_id } = useParams();
    const numTheater = 1 //ข้อมูลตามดาต้า
    const release_date = [] //ข้อมูลตามดาต้า
    const release_time = [] //ข้อมูลตามดาต้า
    const selectedSeats = []
    const totalPrice = 0
    return (
        <>
        <div className="flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[500px] h-[650px] text-[black] text-[14px] font-bold bg-[#360033] pt-[10px] pl-[10px]">
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
            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">โรงภาพยนต์ที่</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{numTheater}</div>
                            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">รอบฉาย</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{release_date}</div>
                            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">เวลาฉาย</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{release_time}</div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">ที่นั่ง</p>
                                    <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff] pl-[225px]">จำนวนเงิน</p>
                                </div>
                                <div className="flex flex-row">
                                    {/* seat */}
                                    <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{selectedSeats}</div>
                                    {/* money */}
                                    <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[150px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{totalPrice}</div>
                                </div>
                            </div>
            </div>
        </div>
        </>
    );
}
export default HistoryMovie