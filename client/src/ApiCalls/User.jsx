import { axiosInstance} from "./axiosinstance";


// register user

export const RegisterUser = async (payload)=>{
   try {
       const response = await axiosInstance.post('/api/user/register',payload);
       return response.data;
   } catch (error) {
       return error.message;
   }
}



export const LoginUser = async(payload)=>{
    try {
        const response = await axiosInstance.post('/api/user/login',payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


export const getAllUsers =async()=>{
    try {
       const response = await axiosInstance.get('/api/users/get-users');
       return response.data;
    } catch (error) {
       return error.message;
    }
 }


 export const UpdateUserStatus = async (id,status)=>{
    try {
       const response = await axiosInstance.put(`/api/users/update-user-status/${id}`,{status})
       return response.data;
    } catch (error) {
       return error.message;
    }
 }