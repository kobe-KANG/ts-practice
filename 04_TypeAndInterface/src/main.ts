// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}


const bear1: Bear = {
    name: 'Poo',
    honey: true
}