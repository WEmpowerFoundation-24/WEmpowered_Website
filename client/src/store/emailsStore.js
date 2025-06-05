import {create} from "zustand"
import axios from "axios"
// const API_URL = `${import.meta.env.VITE_SERVER}`;
const API_URL = `${import.meta.env.VITE_SERVER}/emails`;
axios.defaults.withCredentials = true;
export const useEmailStore = create((set) => ({
    isLoading:false,
    user:null,
    messageSent:false,
    error:null,
    contactus: async(email,name,phoneNo,findUs,question)=>{
        set({isLoading:true,error:null});
        try {
            const response = await axios.post(`${API_URL}/contactUs`,{email,name,phoneNo,findUs,question})
            set({isLoading:false,messageSent:true, user:response.data.user});
        } catch (error) {
            set({error:error.response?.data?.message || "Error in contactUs Route"});
            throw error;
        }
    },
}))