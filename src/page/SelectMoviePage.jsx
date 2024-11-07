import { useParams } from "react-router-dom";
import {movies} from "/src/data.json";
import { HeartTwoTone, ClockCircleOutlined} from '@ant-design/icons';
import { useState } from "react";
import Swal from 'sweetalert2'

//#eb2f3c เปลี่ยนเป็นสีนี้เมื่อกดไลค์
// page เลือกรอบหนังและชำระเงิน

// MovieSeat ไว้สำหรับ โชที่นั่ง เลือกที่หนังให้ปุ่มที่นั่งเปลี่ยนสี 
// หลังบ้านแก้เพิ่มตรงที่ถ้ามีที่นั่งอยู่แล้วให้แสดงผลด้่วย
function MovieSeat (props){ 
    // seat_not_sold เป็นสีของที่นั่งที่ยังไม่เลือก หรือยังไม่ซื้อ
    const seat_not_sold = "flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[50px] h-[50px] text-[black] text-[14px] font-bold bg-[rgb(207,207,207)] mr-3";
    // seat_sold เป็นสีของที่นั่งที่กำลังเลือก หรือซื้อแล้ว
    const seat_sold = "flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[50px] h-[50px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,1)] mr-3"; // Use background-color for clarity
    const {seat_number,handleSeatSelection} = props
    const [disableSeat,setDisableSeat] = useState(["A5","A6"]) //ที่นั่งที่ถูกซื้อแล้ว
    const [selectedSeats, setSelectedSeats] = useState([]); // Array to store selected seat numbers
  
    const handleSeatClick = (seatNum) => {
      const newSelectedSeats = [...selectedSeats]; // Create a copy to avoid mutation
  
      if (selectedSeats.includes(seatNum)) {
        if (disableSeat.includes(seatNum)) {
            return;
        }
        // Deselect seat if already selected
        const index = newSelectedSeats.indexOf(seatNum);
        newSelectedSeats.splice(index, 1);
      } else {
        // Add seat to selection
        newSelectedSeats.push(seatNum);
      }
      setSelectedSeats(newSelectedSeats);
      handleSeatSelection(seatNum);
    };
  
    const renderSeats = () => {
      return seat_number.map((seatNum) => (
        <button
          className={
            // เพิ่มเงื่อนไขให้กับที่นั่งที่ถูกเลือกแล้ว
            disableSeat.includes(seatNum)
            ? seat_sold // Use sold style for disabled seats
            : selectedSeats.includes(seatNum)
              ? seat_sold
              : seat_not_sold
        } // Apply class based on selection
          value={seatNum}
          onClick={() => handleSeatClick(seatNum)}
        >
          {seatNum}
        </button>
      ));
    };
  
    return (
      <>
          {renderSeats()}
      </>
    );
}

const SelectMovie = () => {
    const { movie_id } = useParams();
    const [heartColor , setHeartColor] = useState("#808080") // เปลี่ยนสีหัวใจ

    const NumTheater = [1,2,3]
    const [show_hidden_theater , setShowHiddenTheater] = useState(false) // ไว้โชรอบฉายเมื่อคลิ๊กโรงหนัง
    const [selectTheater , setSelectTheater] = useState(null) // แสดงโรงหนังที่ summary

    const release_date = ["24/04/2024","25/04/2024","26/04/2024"] //ข้อมูลตามดาต้า
    const release_time = ["13:00" , "15:00" , "18:00"] //ข้อมูลตามดาต้า

    const [show_hidden_Date , setShowHiddenDate] = useState(false) // ไว้โชเวลาฉายเมื่อคลิ๊กรอบหนัง
    const [show_hidden_Time , setShowHiddenTime] = useState(false) // ไว้โชที่นั่งเมื่อคลิ๊กเวลาฉาย

    const [selectDate, setSelectDate] = useState(null) // select index of release_date 
    const [selectTime, setSelectTime] = useState(null) // select index of release_time

    const [SoldSeat,setSoldSeat] = useState(["A5","A6"]) // ที่นั่งที่ถูกซื้อแล้ว ตัวแปรเดียวกันกับใน MovieSeat
    //Seat
    const seat_number = [
        "F1","F2","F3","F4","F5","F6","F7","F8","F9","F10",
        "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
        "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10",
        "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10",
        "B1","B2","B3","B4","B5","B6","B7","B8","B9","B10",
        "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"
    ]
    // part นี้ไว้สำหรับแสดงที่นั่งที่เลือกในช่อง summary
    const [selectedSeats, setSelectedSeats] = useState([]); // Array to store selected seat numbers
    const [totalPrice, setTotalPrice] = useState(0); // State for total price
    const handleSeatSelection = (seatNum) => {
        if (SoldSeat.includes(seatNum)) { //เพิ่มเงื่อนไขถ้าที่นั่งที่ผู้ใช้กดถูกซื้อแล้วจะไม่เพิ่มลงใบสรุปราคา
            return;
        }
        // Handle seat selection logic here (update selectedSeats)
        const newSelectedSeats = [...selectedSeats];
        if (selectedSeats.includes(seatNum)) {
          const index = newSelectedSeats.indexOf(seatNum);
          newSelectedSeats.splice(index, 1);
        } else {
          newSelectedSeats.push(seatNum);
        }
        setSelectedSeats(newSelectedSeats);
        setTotalPrice(newSelectedSeats.length * 180);
    };

    //Alert the payment 
    // หลังกดตกลงในหน้า alert อยากให้ลิ้งค์ไปหน้าประวัติการสั่งซื้อ
    const handleAlert = () =>{
        // แก้ตัวแปรในเงื่อนไข
        if(show_hidden_Date === true && show_hidden_Time === true && selectedSeats.length != 0 && totalPrice != 0){
            Swal.fire({
                title: 'ชำระเงินเรียบร้อย',
                text: `${movies[Number(movie_id)-1].title} โรงภาพยนตร์ที่ ${NumTheater[selectTheater]} รอบฉาย ${release_date[selectDate]} 
                        เวลา ${release_time[selectTime]} ที่นั่ง ${selectedSeats} จำนวนเงิน ${totalPrice} บาท`,
                icon: 'success',
                confirmButtonText: 'ตกลง'
            })
        }else{
            Swal.fire({
                title: 'ชำระเงินผิดพลาด',
                text: 'โปรดเลือกรอบภาพยนต์ใหม่',
                icon: 'error',
                confirmButtonText: 'ตกลง'
            })
        }
    }
    return (
        <>
        <div className="flex flex-col flex-wrap w-[auto] max-h-[50%] float-left ">
            <div className="flex flex-row float-left pt-[100px] ml-[200px]">
                <img className="block ml-[auto] mr-[auto] my-[5px] mt-[5px] border-[none] w-[280px] h-[384px]" src={movies[Number(movie_id)-1].poster}></img>
                <div className="flex flex-col ml-[100px] w-[350px]">
                    <p className=" mt-[5px] mb-[5px] text-[18px] text-[#FFFFFF]">
                        {movies[Number(movie_id)-1].date}
                        {/* คลิ๊กหัวใจเพื่อเปลี่ยนสี ส่วนฟังก์ชั่นอื่นๆ ฝากเพิ่มเอง */}
                        <button className="ml-[25px]" onClick={() => setHeartColor( (heartColor) => heartColor === "#eb2f3c" ? "#808080" : "#eb2f3c")}><HeartTwoTone  twoToneColor={heartColor}/></button>
                    </p>
                    <h4 className=" mt-0 text-[28px] font-bold text-[#FFFFFF]">{movies[Number(movie_id)-1].title}</h4>
                    <h4 className=" mt-0 mb-[5px] text-[28px] font-bold text-[#FFFFFF]">in cinemas</h4>
                    <p className=" mt-[5px] mb-[5px] text-[14px] text-[#FFFFFF]">{movies[Number(movie_id)-1].cate}</p>
                    <p className="flex flex-row mt-[5px] mb-[5px] text-[14px] text-[#FFFFFF]"><ClockCircleOutlined className="mt-auto mb-auto pr-[5px]" /> {movies[Number(movie_id)-1].time} นาที</p>
                </div>
                <div className="flex flex-start pl-[30px] w-[750px]">
                    {/* movies[Number(movie_id)-1].trailer แสดงตัวอย่างหนัง ตัวอย่างหนังอยากให้เก็บเป็น link youtube */}
                    <iframe className="h-[auto] max-w-[100%] w-[750px]" src={movies[Number(movie_id)-1].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex flex-row pl-[50px] pt-[50px]">
                <div className="flex flex-col ">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            {/* เลือกรอบหนัง */}
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[900px] h-[50px] text-[white] text-[18px] font-bold bg-[#0B8793] mr-0.5">เลือกรอบภาพยนตร์</div>
                        </div>
                    </div>
                    {/* แสดงโรงหนังที่ฉายเรื่องนี้ */}
                    {/* fetch เอาข้อมูลโรงหนังทั้งหมดที่หนังเรื่องนี้อยู่ ฝากทำเป็น dynamic */}
                    <div className="flex flex-row pl-[10px] pt-[20px]">
                        <p className="mt-[5px] mb-[5px] text-[24px] text-[#FFFFFF] mr-[10px]">โรงที่ฉาย</p>
                        {/* แก้เป็น .map */}
                        {NumTheater.map((theaterCount, index) => (
                            <button
                            key={index} // Essential for accessibility and performance
                            className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[100px] h-[50px] text-[black] text-[14px] font-bold bg-[rgb(207,207,207)] mr-3"
                            onClick={() => {
                                setShowHiddenTheater(true);
                                setSelectTheater(index);
                            }}
                            >
                            โรงภาพยนตร์ที่ {theaterCount}
                            </button>
                        ))}
                    </div>
                    {
                        // แสดงรอบฉาย
                        show_hidden_theater?<div className="flex flex-row pl-[10px] pt-[20px]">
                            <p className="mt-[5px] mb-[5px] text-[24px] text-[#FFFFFF] mr-[15px]">วันที่ฉาย</p>
                            {/* แก้เป็น .map */}
                            {release_date.map((DateCount, index) => (
                                <button
                                key={index} // Essential for accessibility and performance
                                className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[100px] h-[50px] text-[black] text-[14px] font-bold bg-[rgb(207,207,207)] mr-3"
                                onClick={() => {
                                    setShowHiddenDate(true);
                                    setSelectDate(index);
                                }}
                                >
                                {DateCount}
                                </button>
                            ))}
                        </div>:null
                    }
                    {
                        // แสดงเวลาที่ฉาย
                        show_hidden_Date?<div className="flex flex-row pl-[10px] pt-[20px]">
                            {/* ไว้ทำเป็น dynamic คลิกแล้วโช ที่นั่ง*/}
                            <div className="flex flex-col">
                                <p className="mt-[5px] mb-[5px] text-[24px] text-[#FFFFFF]">เวลาฉาย</p>
                                <div className="flex flex-row pl-[10px] pt-[20px]">
                                    {/* แก้เป็น .map */}
                                    {release_date.map((TimeCount, index) => (
                                        <button
                                        key={index} // Essential for accessibility and performance
                                        className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[100px] h-[50px] text-[black] text-[14px] font-bold bg-[rgb(207,207,207)] mr-3"
                                        onClick={() => {
                                            setShowHiddenTime(true);
                                            setSelectTime(index);
                                        }}
                                        >
                                        {TimeCount}
                                        </button>
                                    ))}
                                </div>
                                </div>
                        </div>:null
                    }
                    {
                        // Screen และแสดงที่นั่ง
                        show_hidden_Time?<div className="flex flex-col pl-[50px] pt-[50px]">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[300px] h-[50px] text-[white] text-[18px] font-bold bg-[#0B8793] mb-[10px]">เลือกที่นั่ง</div>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[830px] h-[50px] text-[white] text-[14px] font-bold bg-[#360033]">Screen</div>
                            </div>
                            <div className="grid grid-cols-10 content-center gap-[10px] pt-[10px] pl-[25px]">
                                {/* แสดงที่นั่งโดย MovieSeat */}
                                <MovieSeat seat_number={seat_number} SelectSeat={selectedSeats} handleSeatSelection={handleSeatSelection}/>
                            </div>
                        </div>:null
                    }
                </div>
                {/* Summary */}
                <div className="flex flex-col pl-[250px] pt-[50px] pb-[50px]">
                    <div className="flex justify-center mb-[10px]">
                        <div className="flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[300px] h-[50px] text-[white] text-[18px] font-bold bg-[#0B8793] mr-0.5">ซื้อตั๋ว</div>
                    </div>
                    <div className="flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[500px] h-[750px] text-[black] text-[14px] font-bold bg-[#360033] pt-[10px] pl-[10px]">
                        <div className="flex flex-row">
                            <img className="block ml-[auto] mr-[auto] my-[5px] mt-[5px] border-[none]  w-[240pxpx] h-[288px] rounded-[8px]" src={movies[Number(movie_id)-1].poster}></img>
                            <div className="flex flex-col ml-[25px] w-[350px]">
                                <h4 className=" mt-0 text-[28px] font-bold text-[#ffffff]">{movies[Number(movie_id)-1].title}</h4>
                                <h4 className=" mt-0 mb-[5px] text-[28px] font-bold text-[#ffffff]">in cinemas</h4>
                                <p className=" mt-[5px] mb-[5px] text-[14px] text-[#ffffff]">{movies[Number(movie_id)-1].cate}</p>
                                <p className="flex flex-row mt-[5px] mb-[5px] text-[14px] text-[#ffffff]"><ClockCircleOutlined className="mt-auto mb-auto pr-[5px]" /> {movies[Number(movie_id)-1].time} นาที</p>
                            </div>
                        </div>
                        <div>
                            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">โรงภาพยนต์ที่</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{NumTheater[selectTheater]}</div>
                            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">รอบฉาย</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{release_date[selectDate]}</div>
                            <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">เวลาฉาย</p>
                            <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{release_time[selectTime]}</div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff]">ที่นั่ง</p>
                                    <p className=" mt-[5px] mb-[5px] text-[18px] text-[#ffffff] pl-[225px]">จำนวนเงิน</p>
                                </div>
                                <div className="flex flex-row">
                                    {/* seat */}
                                    <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[250px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{selectedSeats.join(', ')}</div>
                                    {/* money */}
                                    <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[150px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)] mr-3">{totalPrice}</div>
                                </div>
                            </div>
                            <div className="flex align-center justify-center pt-[30px]">
                                {/* เมื่อกดยืนยันแล้วจะโช alert */}
                                <button type="submit" className="flex items-center justify-center border-[1px] border-[solid] border-none rounded-full w-[150px] h-[40px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,0.7)] hover:bg-[rgb(251,192,45,1)] mr-3" onClick={handleAlert}>ยืนยันการชำระเงิน</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}
export default SelectMovie