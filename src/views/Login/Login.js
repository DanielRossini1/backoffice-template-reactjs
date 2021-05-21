import { BeatLoader } from "react-spinners";
import logo_runyme from "../../assets/img/logo_branco.png";
import "./Login.less";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import AuthHttp from "./http/AuthHttp";
import AlertToast from "../../utils/components/AlertToast/AlertToast";

function Login() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false });

  const handleSubmit = (values) => {
    setIsSubmitting(true);
    AuthHttp.getToken(values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setAlert({ show: true, type: "error", message: err.response.data.error });
        setTimeout(() => {
          setAlert({ ...alert, show: false });
        }, 6000);
      })
      .finally(() => setIsSubmitting(false))
  };

  const validateMessages = {
    required: 'Campo obrigatório!',
    types: {
      email: 'E-mail inválido!'
    }
  };

  return (
    <div className="bg-gray-50 pt-10 h-screen">
      <AlertToast {...alert} onClose={() => setAlert({ ...alert, show: false })} />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 w-4/5 mx-auto bg-white shadow">
          <div className="flex p-6 items-center">
            <div className="w-full">
              <p className="font-extrabold text-2xl">Seja bem-vindo(a)</p>
              <Form form={form} name="horizontal_login" onFinish={handleSubmit} validateMessages={validateMessages}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true
                    },
                    {
                      type: "email"
                    }
                  ]}
                >
                  <Input prefix={<UserOutlined />}
                         size="large"
                         placeholder="E-mail"
                         type="email"
                         id="email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true
                    }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size="large"
                  />
                </Form.Item>
                <Form.Item shouldUpdate>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isSubmitting}
                      block
                      size="large"
                    >
                      {isSubmitting ? <BeatLoader color="#ffffff" loading={isSubmitting} size={10} /> : "Entrar"}
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="col-span-2 background-primary div-background-login flex items-center justify-center">
            <img src={logo_runyme} alt="logo runyme" className="w-4/5"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
