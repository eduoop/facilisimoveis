type Differentials = {
    id: string,
    title: string,
    description: string
}

export type Property = {
    id: string,
    status: "Lançamento" | "Em construção",
    room: string,
    neighborhood: string,
    city: string,
    stateAbbreviation: string,
    local: string,
    type: string;
    description: string;
    differentials: Differentials[];
    images: string[];
    countRooms: number,
    countBathrooms: number,
    garages: number,
}