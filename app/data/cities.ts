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
        name: "Juiz de Fora",
        smallName: "juiz de fora",
        abbreviation: "JF",
        state: "MG",
        slug: "juiz-de-fora"
    },
    {
        id: "5",
        name: "Betim",
        smallName: "betim",
        abbreviation: "BT",
        state: "MG",
        slug: "betim"
    },
]