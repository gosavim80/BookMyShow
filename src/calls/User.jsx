import { axiosInstance } from './index';

export const RegisterUser = async(value) =>{
    try{

        const response = await axiosInstance.post("/api/user/register",value)
        return response.data
    }catch(err){
        console.log("error",err);
        
    }
}

export const LoginUser = async (value) =>{
    try{
        const response = await axiosInstance.post("/api/user/login",value)
        return response.data

    }catch(err){
        console.log("error",err);
    }
}

export const GetCurrentUser = async () =>{
    try{
        const response = await axiosInstance.get("/api/user/current")
        return response.data

    }catch(err){
        console.log("error",err);
    }
}
