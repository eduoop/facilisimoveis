export type Differentials = {
    id: string,
    title: string,
    description: string
}

export type Property = {
    id: number,
    status: string,
    neighborhood: string,
    residential: string,
    number?: number,
    city: string,
    cardImage: string,
    stateAbbreviation: string,
    road: string,
    description: string;
    differentials: Differentials[];
    images: string[];
    countRooms: number,
    countBathrooms: number,
    garages: number,
    size: string,
}