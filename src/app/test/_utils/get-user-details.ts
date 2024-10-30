
export interface Address {
  street: string;
  number: string;
  suburb: string;
  city: string;
  state: string;
  country: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  address: Address;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Alejandro L V',
    age: 28,
    email: 'alejandro@hotmail.com',
    address: {
      street: 'Morelos',
      number: '2064-A',
      suburb: 'Jardines del bosque',
      city: 'Los Mochis',
      state: 'Sinaloa',
      country: 'México'
    }
  },
  {
    id: 2,
    name: 'Mariana G H',
    age: 32,
    email: 'mariana.gh@gmail.com',
    address: {
      street: 'Juárez',
      number: '1345',
      suburb: 'Centro',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México'
    }
  },
  {
    id: 3,
    name: 'Roberto M P',
    age: 25,
    email: 'roberto.mp@yahoo.com',
    address: {
      street: 'Independencia',
      number: '543',
      suburb: 'Chapultepec',
      city: 'Monterrey',
      state: 'Nuevo León',
      country: 'México'
    }
  },
  {
    id: 4,
    name: 'Fernanda S R',
    age: 29,
    email: 'fernanda.sr@outlook.com',
    address: {
      street: 'Reforma',
      number: '987-B',
      suburb: 'Polanco',
      city: 'Ciudad de México',
      state: 'CDMX',
      country: 'México'
    }
  }
];

export const getUserDetails = (id: number):Promise<User | undefined> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      res(user);
    }, 2000);
  })
}