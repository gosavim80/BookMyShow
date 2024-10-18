import React from 'react'
import {Button , Form , Input} from "antd"
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../calls/User'


const Register = () => {

    const onFinish = async (values)=>{
        try{
            const response = await RegisterUser(values)
        if(response.success){
            message.success(response.message)
        }else{
            message.error(response.message)
        }
        }catch(err){
            message.error(err)
        }
    }
  return (
    <div>
        <header className='App-header'>
            <main className='main-area mw-500 text-center px3'>
                <section className='left-section'>
                    <h1>
                        Register to BookMyShow
                    </h1>
                </section>
                <section className='right-section'>
                    <Form layout='vertical' onFinish={onFinis}>
                    <Form.Item
                         label="Name"
                         htmlFor='name'
                         name="name"
                         className='d-block'
                         rules={[{required:true,message:"Name is Required"}]}
                        >
                            <Input id="name" type="text" placeholder="Enter your Name"></Input>

                        </Form.Item>

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
                            <Button type="primary" htmlType='submit' style={{fontSize:"1rem"}}>Register</Button>
                        </Form.Item>

                        <div>
                            <p>
                                Already a User ? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Form>
                </section>
            </main>

        </header>
    </div>
  )
}

export default Register