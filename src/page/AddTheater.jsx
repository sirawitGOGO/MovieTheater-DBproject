import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
  } from 'antd';
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
  const AddTheater = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      <>
      <div className='h-screen flex flex-col items-center justify-center'>
          <div className='flex items-center mr-[700px]'>
              <div className="text-3xl mt-7 mb-3 text-[#FBC02D]">รอบฉาย</div>
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

              <Form.Item //ไม่รู้ว่า Movie time คือ ระยะเวลาของหนัง หรือ วันฉายของหนัง
                name="movie-time"
                label={<label style={{ color: "white" }}>วันฉายของหนัง </label>}
                rules={[
                    {
                    required: true,
                    message: 'กรุณาใส่วันฉายของหนัง',
                    },
                ]}
                >
                <DatePicker />
                </Form.Item>
  
              <Form.Item
                  name="theater-num"
                  label={<label style={{ color: "white" }}>โรงภาพยนตร์ที่ </label>}
                  rules={[
                  {
                      required: true,
                      message: 'กรุณาใส่โรงภาพยนตร์',
                  },
                  ]}
              >
                  <Select>
                      {/* "Sci-fi","ผจญภัย","แอคชั่น","ตลก","สยองขวัญ","ดราม่า","ระทึกขวัญ","โรแมนติก",
          "แฟนตาซี","อนิเมชั่น","สารคดี","ครอบครัว","อาชญากรรม","สงคราม","ลึกลับ","อนิเมะ" */}
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                  <Option value={5}>5</Option>
                  </Select>
              </Form.Item>
  
              <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                  เพิ่มรอบฉาย
                  </Button>
              </Form.Item>
              </Form>
          </div>
      </div>
      </>
    );
  };
  export default AddTheater;