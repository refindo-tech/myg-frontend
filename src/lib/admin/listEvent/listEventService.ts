import api from "@/axios/axiosConfig";
import { AxiosResponse } from "axios";
import {EventListResponse} from "@/types/myAcademy/admin/listEvent";
import {EventDetailResponse} from "@/types/myAcademy/admin/listEvent"
// interface EventData {
//     adminId: number;
//     name: string;
//     email: string;
//     role: string;
//     profilePicture: string;
//     userLabel: string;
//     createdAt: string;
//     updatedAt: string;
// }

class AdminEventService {
    async listEvent(limit:number, page:number, search?:string): Promise<AxiosResponse<EventListResponse>> {
        return api.get(
            '/admin/myAcademy/listEvent/', {params:{limit, page, search: search || undefined}}
            // search ? `/admin/myAcademy/listEvent/?limit=${limit}&page=${page}&search=${search}` : `/admin/myAcademy/listEvent/?limit=${limit}&page=${page}`
        )
    }
    async detailEvent(trainingId:number): Promise<AxiosResponse<EventDetailResponse>> {
        return api.get(`/admin/myAcademy/detailEvent/${trainingId}`)
    }
    async createEvent(formData:FormData): Promise<AxiosResponse<EventListResponse>> {
        return api.post('/admin/myAcademy/createEvent/', formData)
    }
    async updateEvent(trainingId:number, formData:FormData): Promise<AxiosResponse<EventListResponse>> {
        return api.put(`/admin/myAcademy/updateEvent/${trainingId}`, formData)
    }
    async deleteEvent(trainingId:number): Promise<AxiosResponse<EventListResponse>> {
        return api.delete(`/admin/myAcademy/deleteEvent/${trainingId}`)
    }
}
const ListEventServices = new AdminEventService()
export default ListEventServices