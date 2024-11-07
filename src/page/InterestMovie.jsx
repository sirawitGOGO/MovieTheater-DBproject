import { useState } from "react";

// เป็น page หลังทำการ register แล้ว สามารถเลือกประเภทหนังที่สนใจได้หลายแนว

function CategoryOfMovie (props){
    const NotSelectCate = "flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[100px] h-[50px] text-[black] text-[14px] font-bold bg-[rgb(207,207,207)] mr-3";
    const SelectCate = "flex items-center justify-center border-[1px] border-[solid] border-none rounded-[8px] w-[100px] h-[50px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,1)] mr-3"; // Use background-color for clarity
    const {Cate,ShowSelectedCate,handleCateSelection} = props
    const [selectedCates, setSelectedCates] = useState([]); // Array to store selected seat numbers
  
    const handleCateClick = (CateIndex) => {
      const newSelectedCates = [...selectedCates]; // Create a copy to avoid mutation
  
      if (selectedCates.includes(CateIndex)) {
        // Deselect cate if already selected
        const index = newSelectedCates.indexOf(CateIndex);
        newSelectedCates.splice(index, 1);
      } else {
        // Add cate to selection
        newSelectedCates.push(CateIndex);
      }
      setSelectedCates(newSelectedCates);
      handleCateSelection(CateIndex);
    };
  
    const renderCate = () => {
      return Cate.map((CateIndex) => (
        <button
          className={selectedCates.includes(CateIndex) ? SelectCate : NotSelectCate} // Apply class based on selection
          value={CateIndex}
          onClick={() => handleCateClick(CateIndex)}
        >
          {CateIndex}
        </button>
      ));
    };
    return (
        <>
          {renderCate()}
      </>
    );
}

const InterestMovie =()=>{
    const Cate = ["Sci-fi","ผจญภัย","แอคชั่น","ตลก","สยองขวัญ","ดราม่า","ระทึกขวัญ","โรแมนติก",
        "แฟนตาซี","อนิเมชั่น","สารคดี","ครอบครัว","อาชญากรรม","สงคราม","ลึกลับ","อนิเมะ"
    ]
    const [ShowSelectedCate,setShowSelectedCate] = useState([])
    const handleCateSelection = (CateIndex) => {
      const newShowSelectedCate = [...ShowSelectedCate]; // Create a copy to avoid mutation
  
      if (ShowSelectedCate.includes(CateIndex)) {
        // Deselect cate if already selected
        const index = newShowSelectedCate.indexOf(CateIndex);
        newShowSelectedCate.splice(index, 1);
      } else {
        // Add cate to selection
        newShowSelectedCate.push(CateIndex);
      }
      setShowSelectedCate(newShowSelectedCate);
    };
    return (
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <h1  className="text-3xl mt-7 mb-3 text-[#FBC02D]">ประเภทภาพยนต์ที่สนใจ</h1>
                <div className="grid grid-cols-8 content-center gap-[10px] pt-[10px] pl-[25px]">
                    <CategoryOfMovie Cate={Cate} ShowSelectedCate={ShowSelectedCate} handleCateSelection={handleCateSelection}/>
                </div>
                <div className="flex flex-col items-center pt-[50px]">
                    <div className="flex items-center justify-center border-[1px] border-[solid] border-#cfcfcf rounded-[8px] w-[450px] h-[40px] text-[black] text-[14px] font-bold bg-[rgb(255,255,255)]">
                        {ShowSelectedCate.join(', ')}
                    </div>
                    <div className="flex pt-[10px]">
                        <button type="submit" className="flex items-center justify-center border-[1px] border-[solid] border-none rounded-full w-[150px] h-[40px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,0.7)] hover:bg-[rgb(251,192,45,1)]">ถัดไป</button>  
                    </div>
                </div>
            </div>

        </div>
        </>
        
    );
}

export default InterestMovie