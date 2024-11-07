import {
  Button,
  Checkbox,
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
const RegisterCustomer = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <div className='h-screen flex items-center justify-center'>
        <div className='mt-[50px] flex flex-col border-[1px] border-[solid] border-none rounded-[8px] w-[600px] h-[7ถ0px]  bg-[#360033] pt-[30px] pl-[10px] pr-[50px]'>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
            >
            <Form.Item
                name="username"
                label={<label style={{ color: "white" }}>ชื่อผู้ใช้ </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณาใส่ชื่อผู้ใช้',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label={<label style={{ color: "white" }}>รหัสผ่าน </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณากรอกรหัสผ่าน',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label={<label style={{ color: "white" }}>ยืนยันรหัสผ่าน </label>}
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'กรุณายืนยันรหัสผ่าน',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="prefix"
                label={<label style={{ color: "white" }}>คำนำหน้า </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณาใส่คำนำหน้า',
                },
                ]}
            >
                <Select>
                <Option value="นาย">นาย</Option> {/* แก้ค่า value */}
                <Option value="นาสาว">นางสาว</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="firstname"
                label={<label style={{ color: "white" }}>ชื่อจริง </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณากรอกชื่อจริง',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="lastname"
                label={<label style={{ color: "white" }}>นามสกุล </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณากรอกนามสกุล',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
              name="dob"
              label={<label style={{ color: "white" }}>วันเกิด </label>}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกวันเกิด',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
                name="tel"
                label={<label style={{ color: "white" }}>เบอร์โทรศัพท์ </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณากรอกเบอร์โทรศัพท์',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label={<label style={{ color: "white" }}>E-mail </label>}
                rules={[
                {
                    type: 'email',
                    message: 'E-mail ไม่ถูกต้อง',
                },
                {
                    required: true,
                    message: 'กรุณากรอก E-mail',
                },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                name="identificationNo"
                label={<label style={{ color: "white" }}>เลขบัตรประชาชน </label>}
                rules={[
                {
                    required: true,
                    message: 'กรุณากรอกเลขบัตรประชาชน',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="role"
                label={<label style={{ color: "white" }}>Role </label>}
                rules={[
                {
                    required: true,
                    message: 'Please select your Role!',
                },
                ]}
            >
                <Select placeholder="select your role">
                <Option value="1">Customer</Option> {/* แก้ค่า value เป็น int ด้วย */}
                <Option value="2">Staff</Option>
                <Option value="3">Admin</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox className='text-[white]'>
                I have read the <a href="" className='text-[white]'>agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                ลงทะเบียน
                </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
    </>
  );
};
export default RegisterCustomer;