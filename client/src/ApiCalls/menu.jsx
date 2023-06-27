import { axiosInstance } from "./axiosinstance";

export const getmenubycategory = async (value)=>{
    try {
        const response = await axiosInstance.get(`/api/menu/category/${value}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
 }


 export const getproductsById =async(id)=>{
    try {
        const response = await axiosInstance.get(`/api/menu/get-food-by-id/${id}`)
        return response.data;
    } catch (error) {
        return error.message;
    }
 }

 export const GetProducts = async (filters)=>{
    try {
        const response = await axiosInstance.post('/api/products/get-products',filters);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const updateProductStatus =async(id,status)=>{
    try {
        const response = await axiosInstance.put(`/api/products/update-product-status/${id}`, {status});
        return response.data;
    } catch (error) {
        return error.message;
    }
};