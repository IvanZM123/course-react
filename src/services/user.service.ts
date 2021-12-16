export interface Query {
  [key: string]: any;
}

export interface Address extends Query {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company extends Query {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User extends Query {
  id: number;
  name: string;
  username: string;
  address: Address;
  email: string;
  phone: string;
  website: string;
  company: Company;
}

export class UserService {
  private readonly url: string = "https://jsonplaceholder.typicode.com/users";

  async list(query: Query = {}): Promise<User[]> {
    const res = await fetch(this.url);
    return res.json();
  }
}
