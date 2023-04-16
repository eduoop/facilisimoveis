import { faker } from '@faker-js/faker';
import { State } from '../models/state.model';

export const AllStates: State[] = [
    {
        id: faker.datatype.uuid(),
        abbreviation: "MG",
        name: "Minas Gerais",
        slug: "minas-gerais",
    }
]