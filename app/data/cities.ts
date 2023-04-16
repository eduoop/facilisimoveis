import { City } from '@/models/city.model';
import { faker } from '@faker-js/faker';

export const AllCites: City[] = [
    {
        id: faker.datatype.uuid(),
        name: "Belo horizonte",
        smallName: "belo horizonte",
        abbreviation: "BH",
        state: "MG",
        slug: "belo-horizonte",
    },
    {
        id: faker.datatype.uuid(),
        name: "Uberlândia",
        smallName: "uberlândia",
        abbreviation: "UL",
        state: "MG",
        slug: "uberlandia",
    },
    {
        id: faker.datatype.uuid(),
        name: "Contagem",
        smallName: "contagem",
        abbreviation: "CT",
        state: "MG",
        slug: "contagem",
    },
    {
        id: faker.datatype.uuid(),
        name: "Juiz de Fora",
        smallName: "juiz de fora",
        abbreviation: "JF",
        state: "MG",
        slug: "juiz-de-fora"
    },
    {
        id: faker.datatype.uuid(),
        name: "Betim",
        smallName: "betim",
        abbreviation: "BT",
        state: "MG",
        slug: "betim"
    },
]