import React, { useEffect } from "react";
import { Button, Form, Input ,message } from "antd";
import { Link ,useNavigate } from "react-router-dom";
import { LoginUser } from "../../calls/User";
import { axiosInstance } from "../../calls";

const Login = () => {

    const navigate = useNavigate()

    useEffect(()=>{
          if(sessionStorage.getItem("token")){
            navigate("/")
          }
    },[])

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        sessionStorage.setItem("token",response.data)
        axiosInstance.defaults.headers["Authorization"] = `Bearer ${response.data}`;
        navigate("/")
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err);
    }
  };

  return (
    <div>
      <header className="App-header">
        <main className="main-area mw-500 text-center px3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is Required" }]}
              >
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your Email"
                ></Input>
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is Required" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem" }}
                >
                  Login
                </Button>
              </Form.Item>

              <div>
                <p>
                  New User ? <Link to="/register">Register</Link>
                </p>
              </div>
            </Form>
          </section>
        </main>
      </header>
    </div>
  );
};

export default Login;
