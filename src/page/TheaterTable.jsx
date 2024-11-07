import { useEffect, useState } from 'react';
import { Table, Tag, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Movie Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Movie Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Theater',
    dataIndex: 'theater',
    key: 'theater',
  },
  {
    title: 'Theater Status',
    dataIndex: 'theater_status',
    key: 'theater_status',
  },
  {
    title: 'Sale Seat',
    dataIndex: 'sale_seat',
    key: 'sale_seat',
  },
  {
    title: '',
    key: 'action',
    render: () => (
      <Space>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const TheaterTable = () => {
//   const [dataSource, setDataSource] = useState([]);

//   // Fetch data from JSON file on component mount
//   useEffect(() => {
//     fetch('/src/data.json')
//       .then((response) => response.json())
//       .then((data) => setDataSource(data.movies));
//   }, []);

  return (
    <div className="h-screen flex items-center justify-center pl-[100px] ">
      <div className="flex flex-col">
        <div className='flex flex-row w-full'>
          <div className='flex items-center mr-[700px]'>
            <div className="text-3xl mt-7 mb-3 text-[#FBC02D]">รอบฉาย</div>
          </div>
          <div className='flex items-center'>
            <Link to={"/AddTheater"}>
              <button className='flex items-center justify-center border-[1px] border-[solid] border-none rounded-full w-[150px] h-[40px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,0.7)] hover:bg-[rgb(251,192,45,1)]'>Add new showtime</button>
            </Link>
          </div>
        </div>
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default TheaterTable;
