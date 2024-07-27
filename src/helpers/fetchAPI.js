export const getListMaterial = async() =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/materi`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getRecommendationTraining = async(limit) =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/training/recommendation/${limit}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getPastTraining = async(limit) =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/training/past/${limit}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getDetailTraining = async(id)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/training/detail/${id}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getDetailMateri = async(idmateri)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/materi/${idmateri}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getRecommendationExam = async(limit) =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/exam/recommendation/${limit}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getPastExam = async(limit) =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/exam/past/${limit}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}
export const getDetailExam = async(id)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/myg/api/exam/detail/${id}`,{
            method:'GET'
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        return {
            status:false,
            message:'Internal Server Error',
        }
    }
}