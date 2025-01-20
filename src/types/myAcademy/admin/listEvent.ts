export type DataMaterial = {
    materialId: number | null,
    trainingId: number | null,
    title: string,
    description: string,
    type: "OFFLINE" | "ONLINE",
    membershipLevel: string,
    banner: string,
    brosur: string,
    formRegistration: string | null,
    ebook: string | null,
    youtubeVideo: string | null,
    zoomRecord: string | null,
    uploadedBy: number | null,
    createdAt: Date,
    updatedAt: Date
}

export type DetailEventData = {
    trainingId: number | null,
    trainingName: string,
    description: string,
    uploadedBy: number | null,
    dateStart: Date,
    dateFinish: Date | null,
    address: string,
    price: number | null,
    embedMaps: string | null,
    linkMaps: string | null,
    materi: string,
    benefit: string,
    createdAt: Date,
    updatedAt: Date,
    materials: DataMaterial[]
}

export type inputMaterial = {
    title: string,
    description: string,
    type: "OFFLINE" | "ONLINE",
    banner: string | File | undefined,
    brosur?: string | File | undefined,
    formRegistration?: string | null | undefined,
    ebook?: string | null | undefined,
    youtubeVideo?: string | null | undefined,
    zoomRecord?: string | null | undefined,
}

export type inputEventData = {
    trainingName: string,
    description: string,
    dateStart: Date,
    dateFinish?: Date | null | undefined,
    address: string,
    price: number | null | undefined,
    embedMaps?: string | null | undefined,
    linkMaps?: string | null | undefined,
    materi: string,
    benefit: string,
    materials: inputMaterial[]
}

export type EventListResponse = {
    meta: {
        success: boolean;
        message: string;
    };
    results: Array<DetailEventData>
}
export type EventDetailResponse = {
    meta: {
        success: boolean;
        message: string;
    };
    results: DetailEventData;
}