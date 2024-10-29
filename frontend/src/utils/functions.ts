import axios from "axios";
import { toast } from "react-toastify";

export const validateEmailAddress = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email)
    return isValid
}

export const request = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export const errorToast = (error: any) => {
    toast.error(error.response?.data?.message || error?.message || "Unexpected Error Occured")
}


export async function tryCatch(request: () => any): Promise<{ data: any, error: any }> {
    try {
        const { data } = await request()
        return { data, error: null }
    } catch (error) {
        return { error, data: null }
    }
}

