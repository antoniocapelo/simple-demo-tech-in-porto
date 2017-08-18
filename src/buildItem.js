import faker from 'faker';

export default function buildItem() {
    return {
        name: faker.name.findName(),
        id: faker.random.number(),
        updatedAt: Number(new Date()),
        ready: faker.random.boolean(),
    };
}

