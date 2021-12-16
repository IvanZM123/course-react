import { Address, Company, Query } from "../declarations";
import { generateURL } from "../utils";

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

  async get(id: string): Promise<User> {
    const url: string = `${this.url}/${id}`;
    const res = await fetch(url);
    return res.json();
  }

  async list(query: Query = {}): Promise<User[]> {
    const url: string = generateURL(this.url, query);
    const res = await fetch(url);
    return res.json();
  }
}
