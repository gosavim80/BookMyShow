import React from 'react'
import {Button , Form , Input} from "antd"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <header className='App-header'>
            <main className='main-area mw-500 text-center px3'>
                <section className='left-section'>
                    <h1>
                        Login to BookMyShow
                    </h1>
                </section>
                <section className='right-section'>
                    <Form>
                        <Form.Item
                         label="Email"
                         htmlFor='email'
                         name="email"
                         className='d-block'
                         rules={[{required:true,message:"Email is Required"}]}
                        >
                            <Input id="email" type="text" placeholder="Enter your Email"></Input>

                        </Form.Item>

                        <Form.Item
                         label="Password"
                         htmlFor='password'
                         name="password"
                         className='d-block'
                         rules={[{required:true,message:"Password is Required"}]}
                        >
                            <Input id="password" type="password" placeholder="Enter your Password"></Input>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType='submit' style={{fontSize:"1rem"}}>Login</Button>
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
  )
}

export default Login