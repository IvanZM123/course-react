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

export type Id = string | number;

export interface ServiceMethods<T> {
  create(data: T, query?: Query): Promise<T>;
  list(query?: Query): Promise<T[]>;
  get(id: Id, query?: Query): Promise<T>;
  update(id: Id, data: T, query?: Query): Promise<T>;
}
