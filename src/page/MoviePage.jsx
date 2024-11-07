import NavBar from "../component/Navbar";
import MovieItem from "./MovieItem";
import HistoryMovie from "./HistoryMovie";
import {movies} from "/src/data.json";

// ประวัติการสั่งซื้อตั๋ว
const MoviePage =()=>{
    return (
        <>
        <div className="flex flex-col pl-10 pt-[50px]">
            <h1  className="text-3xl mt-7 mb-3 text-[#FBC02D]">ประวัติการสั่งซื้อ</h1>
            <ul className='flex flex-wrap justify-left gap-5 flex-row p-0 ml-5'>
                <HistoryMovie />
            </ul>
        </div>
        </>
        
    );
}

export default MoviePage