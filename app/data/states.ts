import { State } from "@/models/state.model";
import { faker } from '@faker-js/faker';

export const AllStates: State[] = [
    {
        id: faker.datatype.uuid(),
        abbreviation: "MG",
        name: "Minas Gerais",
        slug: "minas-gerais",
    }
]