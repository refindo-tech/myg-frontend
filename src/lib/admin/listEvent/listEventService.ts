import api from "@/axios/axiosConfig";
import { AxiosResponse } from "axios";
import {EventListResponse} from "@/types/myAcademy/admin/listEvent";
import {EventDetailResponse} from "@/types/myAcademy/admin/listEvent"
interface EventData {
    adminId: number;
    name: string;
    email: string;
    role: string;
    profilePicture: string;
    userLabel: string;
    createdAt: string;
    updatedAt: string;
}

class AdminEventService {
    async listEvent(limit:number): Promise<AxiosResponse<EventListResponse>> {
        return api.get(`/admin/myAcademy/listEvent/${limit}`)
    }
    async detailEvent(trainingId:number): Promise<AxiosResponse<EventDetailResponse>> {
        return api.get(`/admin/myAcademy/detailEvent/${trainingId}`)
    }
    async createEvent(): Promise<AxiosResponse<EventListResponse>> {
        return api.post('/admin/myAcademy/createEvent')
    }
    async updateEvent(trainingId:number): Promise<AxiosResponse<EventListResponse>> {
        return api.put(`/admin/myAcademy/updateEvent/${trainingId}`)
    }
    async deleteEvent(trainingId:number): Promise<AxiosResponse<EventListResponse>> {
        return api.delete(`/admin/myAcademy/deleteEvent/${trainingId}`)
    }
}
const ListEventServices = new AdminEventService()
export default ListEventServices