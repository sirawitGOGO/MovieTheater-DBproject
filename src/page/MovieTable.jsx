import { useEffect, useState } from 'react';
import { Table, Tag, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Order',
    dataIndex: 'movie_id',
    key: 'movie_id',
  },
  {
    title: 'Movie Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Movie Info',
    key: 'movieInfo',
    render: (record) => (
      <>
        <Tag color={record.cate === 'Action' ? 'red' : 'blue'}>
          {record.cate}
        </Tag>
        <Tag color="green">{record.time} mins</Tag>
      </>
    ),
  },
  {
    title: 'Movie Poster',
    key: 'poster',
    render: (record) => (
      <Image
        width={64}
        height={64}
        // Fallback image in case the poster URL is broken
        fallback="https://via.placeholder.com/64"
        src={record.poster}
      />
    ),
  },
  {
    title: 'Movie Trailer',
    key: 'trailer',
    render: (record) => (
      <a href={record.trailer} target="_blank" rel="noreferrer noopener">
        {record.title} trailer
      </a>
    ),
  },
  {
    title: 'Movie Status',
    key: 'status',
    render: () => 'Now Showing',
  },
  {
    title: 'Like',
    key: 'like',
    render: () => '50',
  },
  {
    title: '',
    key: 'action',
    render: () => (
      <Space>
        <a>Edit</a> {/* link to Add movie but  */}
        <a>Delete</a>
      </Space>
    ),
  },
];

const MovieTable = () => {
  const [dataSource, setDataSource] = useState([]);

  // Fetch data from JSON file on component mount
  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setDataSource(data.movies));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center pl-[100px] ">
      <div className="flex flex-col">
        <div className='flex flex-row w-full'>
          <div className='flex items-center mr-[700px]'>
            <div className="text-3xl mt-7 mb-3 text-[#FBC02D]">ภาพยนตร์</div>
          </div>
          <div className='flex items-center'>
            <Link to={"/AddMovie"}>
              <button className='flex items-center justify-center border-[1px] border-[solid] border-none rounded-full w-[150px] h-[40px] text-[white] text-[14px] font-bold bg-[rgb(251,192,45,0.7)] hover:bg-[rgb(251,192,45,1)]'>Add new movie</button>
            </Link>
          </div>
        </div>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default MovieTable;
