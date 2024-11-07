import NavBar from "../component/Navbar";
import MovieItem from "./MovieItem";
import {movies} from "/src/data.json";


// page หลัก ส่วนภาพยนตร์แนะนำใส่โชเป็นหนังที่มีประเภทหนังตามที่ลูกค้าสนใจ
// movies มาจาก data.json ที่สมมติขึ้นมา  
const MainPage =()=>{
    // ใส่ข้อมูลหนังตาม database
    return (
        <>
        <div className="flex flex-col pl-10 pt-[50px]">
            <h1 className="text-3xl mt-7 mb-3 text-[#FBC02D]">ภาพยนต์แนะนำ</h1>
            <div className='flex flex-wrap justify-left gap-5 flex-row p-0 ml-5'>
                {movies.map((element)=>{
                    return <MovieItem {...element} key = {element.movie_id}/>
                })}
            </div>
            <h1  className="text-3xl mt-[50px] mb-3 text-[#FBC02D]">ภาพยนตร์ที่ถูกใจ</h1>
            <div className='flex flex-wrap justify-left gap-5 flex-row p-0 ml-5'>
                {movies.map((element)=>{
                    return <MovieItem {...element} key = {element.movie_id}/>
                })}
            </div>
            <h1  className="text-3xl mt-[50px] mb-3 text-[#FBC02D]">กำลังฉาย</h1>
            <div className='flex flex-wrap justify-left gap-5 flex-row p-0 ml-5'>
                {movies.map((element)=>{
                    return <MovieItem {...element} key = {element.movie_id}/>
                })}
            </div>
        </div>
        </>
    );
}

export default MainPage