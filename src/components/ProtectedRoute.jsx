import React, { useEffect } from 'react'
import loaderSlice, { HideLoading , ShowLoading } from '../redux/LoaderSlice'
import { useNavigate , Link} from 'react-router-dom';
import { message , Layout , Menu } from 'antd';
import {useDispatch , useSelector} from "react-redux"
import { Header } from 'antd/es/layout/layout';
import {HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { GetCurrentUser } from './../calls/User';
import { setUser } from '../redux/userSlice';

export const ProtectedRoute = ({children}) => {
  const {user} = useSelector((state) => state.users)
  
  
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  
  
  const navItems = [
    {
      label:"Home",
      icon:<HomeOutlined />
    },
    {
      label : `${user ? user.name : ""} `,
      icon:<UserOutlined/>,
      children:[
        {
          label:( <span onClick={()=>{
            if(user.role === "admin"){
              navigate("/admin")
            }else if(user.role === "partner"){
                navigate("/partner")
            } else{
              navigate("/profile")
            }
          }}>My Profile</span>),
          icon:<ProfileOutlined/>
        },
        {
          label:( <Link to="/login" onClick={()=>{
            sessionStorage.removeItem("token")
          }}>Logout</Link>),
          icon:<LogoutOutlined/>
        }
      ]
    }
  ]

  const getValidUser = async() =>{
      try{
        dispatch(ShowLoading())

        const response = await GetCurrentUser()
       // console.log("response",response)
        dispatch(setUser(response.data))
        dispatch(HideLoading())
      }catch(err){
          dispatch(setUser(null))
          message.error(err.message)
      }
  }

  //console.log(user)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      getValidUser()
    }else{
      navigate("/login")
    }
  },[sessionStorage.getItem("token")])

  return (
    user && (
      <>
      <Layout>
        <Header className = "d-flex justify-content-between" style = {{
            position: "sticky",
            top:0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignitems: "center"
          }}>
          <h3 className='demo-logo text-white m-0' style={{color:"white"}}>Book My Show</h3>
          <Menu theme='dark' mode='horizontal' items={navItems}></Menu>
        </Header>
        <div style={{
          padding: 24, minHeight: 30, background:"#fff"
        }}>{children}</div>
      </Layout>
      </>
    )
  )
}
