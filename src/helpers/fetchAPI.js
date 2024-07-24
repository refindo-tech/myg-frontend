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