import React from 'react'
import axios from 'axios'

console.log(sessionStorage.getItem("token"))

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${sessionStorage.getItem("token")}`
    }
})
