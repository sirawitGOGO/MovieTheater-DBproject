import { useEffect, useState } from 'react';
import { Table, Tag, Image, Space } from 'antd';

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'CustomerName',
    key: 'CustomerName',
  },
  {
    title: 'Movie Name',
    dataIndex: 'movieName',
    key: 'movieName',
  },
  {
    title: 'Seat Number',
    dataIndex: 'SeatNo',
    key: 'SeatNo',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }
];

const PaymentTable = () => {
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
            <div className="text-3xl mt-7 mb-3 text-[#FBC02D]">ยอดขายตั๋ว</div>
          </div>
        </div>
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default PaymentTable;
