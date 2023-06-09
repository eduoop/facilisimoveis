import { faker } from '@faker-js/faker';
import { City } from '../models/city.model';

export const AllCites: City[] = [
    {
        id: "1",
        name: "Belo horizonte",
        smallName: "belo horizonte",
        abbreviation: "BH",
        state: "MG",
        slug: "belo-horizonte",
    },
    {
        id: "2",
        name: "Ribeirão das Neves",
        smallName: "ribeirão das neves",
        abbreviation: "RN",
        state: "MG",
        slug: "ribeirão-das-neves",
    },
    {
        id: "3",
        name: "Contagem",
        smallName: "contagem",
        abbreviation: "CT",
        state: "MG",
        slug: "contagem",
    },
    {
        id: "4",
        name: "Betim",
        smallName: "betim",
        abbreviation: "BT",
        state: "MG",
        slug: "betim"
    },
    {
        id: "5",
        name: "Santa Luzia",
        smallName: "santa luzia",
        abbreviation: "SL",
        state: "MG",
        slug: "santa-luzia"
    },
    {
        id: "6",
        name: "Sete Lagoas",
        smallName: "sete lagoas",
        abbreviation: "SL",
        state: "MG",
        slug: "sete-lagoas"
    },
    {
        id: "7",
        name: "Vespasiano",
        smallName: "vespasiano",
        abbreviation: "VN",
        state: "MG",
        slug: "vespasiano"
    }
]