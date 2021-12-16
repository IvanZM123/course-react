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
