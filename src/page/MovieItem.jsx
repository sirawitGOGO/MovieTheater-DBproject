import { Link } from "react-router-dom";

// เป็นส่วนในการลูปหนังที่โชอยู่หน้าหลัก สามารถคลิ๊กเข้าไปเพื่อเลือกรอบได้
const MovieItem = (props) =>{
    const {movie_id,title,date,cate,time,poster} = props
    
    return (
        <>
        <Link to={`/movie-info/${movie_id}`} className="flex flex-col max-w-72 h-[450px] text-left text-[#333] rounded-[10px] mb-[50px]">
            <img className="block ml-[auto] mr-[auto] my-[5px] mt-[5px] border-[none] w-[280px] h-[384px]" src={poster}></img>
            <p className=" mt-[5px] mb-[5px] text-[14px] text-[#FFFFFF]">{date}</p>
            <h4 className=" mt-0 mb-[10px] text-[24px] text-[#FFFFFF]">{title}</h4>
            <div className="w-auto h-auto">
                <span className="bg-[rgb(207,_207,_207)] text-[10px] color-[rgba(255, 255, 255, 1)] p-[5px] mb-[5px]  text-center border-[1px] border-[solid] border-[rgb(207,207,207)] rounded-[10px] w-[100px]">{cate}</span> 
                <span className="bg-[rgb(207,_207,_207)] text-[10px] p-[5px] mb-[5px] ml-[10px] text-center border-[1px] border-[solid] border-[rgb(207,207,207)] rounded-[10px] w-[100px]">{time} นาที</span>
            </div>
        </Link> 
        </>
    );
}

export default MovieItem