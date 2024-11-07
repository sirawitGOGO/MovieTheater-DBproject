import {
  Button,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
// ใช้ template เดียวกัน ถ้ามี Add new movie
const AddMovie = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <div className='h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center mr-[700px]'>
            <div className="text-3xl mt-7 mb-3 text-[#FBC02D]">ภาพยนตร์</div>
        </div>
        <div className='mt-[50px] flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[600px] h-[7ถ0px]  bg-[#360033] pt-[30px] pl-[10px] pr-[50px]'>
            <Form
            {...formItemLayout}
            form={form}
            name="edit_movie"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
            >
            <Form.Item
                name="movie-name"
                label={<label style={{ color: "white" }}>ชื่อหนัง </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณาใส่ชื่อหนัง',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
              name="movie-poster"
              label={<label style={{ color: "white" }}>โปสเตอร์หนัง </label>}
              rules={[
                {
                    required: true,
                    message: 'กรุณาใส่โปสเตอร์หนัง',
                },
                ]}
            >
              <Upload name="poster" action="/upload.do" listType="picture"> 
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item
                name="genre"
                label={<label style={{ color: "white" }}>ประเภทของหนัง </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณาใส่ประเภทของหนัง',
                },
                ]}
            >
                <Select>
                    {/* "Sci-fi","ผจญภัย","แอคชั่น","ตลก","สยองขวัญ","ดราม่า","ระทึกขวัญ","โรแมนติก",
        "แฟนตาซี","อนิเมชั่น","สารคดี","ครอบครัว","อาชญากรรม","สงคราม","ลึกลับ","อนิเมะ" */}
                <Option value="Sci-fi">Sci-fi</Option> {/* แก้ค่า value */}
                <Option value="ผจญภัย">ผจญภัย</Option>
                <Option value="แอคชั่น">แอคชั่น</Option>
                <Option value="ตลก">ตลก</Option>
                <Option value="สยองขวัญ">สยองขวัญ</Option>
                <Option value="ระทึกขวัญ">ระทึกขวัญ</Option>
                <Option value="โรแมนติก">โรแมนติก</Option>
                <Option value="แฟนตาซี">แฟนตาซี</Option>
                <Option value="อนิเมชั่น">อนิเมชั่น</Option>
                <Option value="สารคดี">สารคดี</Option>
                <Option value="ครอบครัว">ครอบครัว</Option>
                <Option value="อาชญากรรม">อาชญากรรม</Option>
                <Option value="สงคราม">สงคราม</Option>
                <Option value="ลึกลับ">ลึกลับ</Option>
                <Option value="อนิเมะ">อนิเมะ</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="duration"
                label={<label style={{ color: "white" }}>ระยะเวลาของหนัง </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณาใส่ระยะเวลาของหนัง',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
              name="movie-trailer"
              label={<label style={{ color: "white" }}>ตัวอย่างหนัง </label>}
              rules={[
                {
                    required: true,
                    message: 'ตัวอย่างหนัง',
                },
                ]}
            >
              <Upload name="trailer" action="/upload.do" listType="picture"> 
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                เพิ่มหนัง
                </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
    </>
  );
};
export default AddMovie;