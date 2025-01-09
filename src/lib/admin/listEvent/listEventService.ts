import api from "@/axios/axiosConfig";
import { AxiosResponse } from "axios";

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

interface EventListResponse {
    meta: {
        success: boolean;
        message: string;
    };
    results: {
        admins: EventData[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    };
}
class AdminEventService {
    async listEvent(): Promise<AxiosResponse<EventListResponse>> {
        return api.get('/admin/myAcademy/listEvent')
    }
    async detailEvent(): Promise<AxiosResponse<EventListResponse>> {
        return api.get('/admin/myAcademy/detailEvent')
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