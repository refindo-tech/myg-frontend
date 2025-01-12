export type ListEventData =  {
    trainingId: number,
    trainingName: string,
    description: string,
    uploadedBy: number,
    dateStart: Date,
    dateFinish: Date | null,
    address: string,
    price: number,
    embedMaps: string,
    linkMaps: string,
    materi: string,
    benefit: string,
    createdAt: Date,
    updatedAt: Date,
    materials: Array<
        {
            materialId: number,
            trainingId: number,
            title: string,
            description: string,
            type: "OFFLINE" | "ONLINE",
            membershipLevel: string,
            banner: string,
            brosur: string,
            formRegistration: string,
            ebook: string | null,
            youtubeVideo: string | null,
            zoomRecord: string | null,
            uploadedBy: number,
            createdAt: Date,
            updatedAt: Date
        }
    >
}
export type EventListResponse = {
    meta: {
        success: boolean;
        message: string;
    };
    results: Array<ListEventData>
}
export type EventDetailResponse = {
    meta: {
        success: boolean;
        message: string;
    };
    results: ListEventData;
}