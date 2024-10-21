import { axiosInstance } from './index';


//add movie
export const addMovie = async(value) =>{
    try{

        const response = await axiosInstance.post("/api/movie/createmovie",value)
        return response.data
    }catch(err){
        console.log("error",err);
        
    }
}



//get movies
export const getAllMovies = async(value) =>{
    try{

        const response = await axiosInstance.get("/api/movie")
        return response.data
    }catch(err){
        console.log("error",err);
        
    }
}



//update movie
export const  updateMovie = async(value) =>{
    try{

        const response = await axiosInstance.put("/api/movie",value)
        return response.data
    }catch(err){
        console.log("error",err);
        
    }
}


//delete movie
export const  deleteMovie = async(value) =>{
    try{

        const response = await axiosInstance.delete("/api/movie",value)
        return response.data
    }catch(err){
        console.log("error",err);
        
    }
}