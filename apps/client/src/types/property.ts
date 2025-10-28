
export interface Owner {
  idOwner: string;
  name: string;
  address: string;
  photo: string;
  birthday: string;
}

export interface Image {
  file: string;
  enabled: boolean;
}

export interface Trace {
  dateSale: string;
  value: number;
  tax: number;
  name: string;
}

export interface Property {
  _id: string;
  id: string;
  name: string;
  address: string;
  price: number;
  codeInternal: string;
  year: number;
  owner: Owner;
  images: Image[];
  traces: Trace[];
}

export interface Filters {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}
