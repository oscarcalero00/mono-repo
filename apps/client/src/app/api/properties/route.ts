import { NextResponse } from 'next/server';

// Mock de propiedades basado en tu MongoDB script
const mockProperties = [
  {
    id: '1',
    name: 'Casa Familiar en Medellín',
    address: 'Calle 45 #12-34, Medellín',
    price: 350000000,
    codeInternal: 'A-001',
    year: 2018,
    owner: {
      idOwner: 'owner-1',
      name: 'Carlos Gómez',
      address: 'Carrera 10 #20-30',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      birthday: '1980-04-12',
    },
    images: [
      {
        file: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        enabled: true,
      },
      {
        file: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
        enabled: true,
      },
    ],
    traces: [
      {
        dateSale: '2023-08-12',
        value: 340000000,
        tax: 10000000,
        name: 'Venta Anterior',
      },
    ],
  },
  {
    id: '2',
    name: 'Apartamento en Bogotá',
    address: 'Av. Suba #100-45, Bogotá',
    price: 520000000,
    codeInternal: 'A-002',
    year: 2021,
    owner: {
      idOwner: 'owner-2',
      name: 'Laura Rojas',
      address: 'Calle 90 #15-20',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      birthday: '1992-07-08',
    },
    images: [
      {
        file: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        enabled: true,
      },
      {
        file: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
        enabled: true,
      },
    ],
    traces: [
      {
        dateSale: '2024-05-02',
        value: 510000000,
        tax: 10000000,
        name: 'Compra inicial',
      },
    ],
  },
  {
    id: '3',
    name: 'Finca en Rionegro',
    address: 'Vereda El Tablazo, Rionegro',
    price: 950000000,
    codeInternal: 'A-003',
    year: 2016,
    owner: {
      idOwner: 'owner-3',
      name: 'María Fernanda López',
      address: 'Calle 15 #45-60',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      birthday: '1985-09-15',
    },
    images: [
      { file: 'finca1_front.jpg', enabled: true },
      { file: 'finca1_lake.jpg', enabled: true },
      { file: 'finca1_stables.jpg', enabled: false },
    ],
    traces: [
      {
        dateSale: '2021-03-20',
        value: 900000000,
        tax: 50000000,
        name: 'Venta previa',
      },
    ],
  },
  {
    id: '4',
    name: 'Casa Campestre en Cali',
    address: 'Km 7 Vía a Jamundí, Cali',
    price: 780000000,
    codeInternal: 'A-004',
    year: 2019,
    owner: {
      idOwner: 'owner-4',
      name: 'Andrés Ramírez',
      address: 'Calle 5 #23-18',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      birthday: '1978-02-25',
    },
    images: [
      {
        file: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        enabled: true,
      },
      {
        file: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
        enabled: true,
      },
    ],
    traces: [],
  },
  {
    id: '5',
    name: 'Apartamento en Cartagena',
    address: 'Bocagrande, Edificio Solmar, Cartagena',
    price: 1250000000,
    codeInternal: 'A-005',
    year: 2022,
    owner: {
      idOwner: 'owner-5',
      name: 'Paola Díaz',
      address: 'Carrera 7 #50-22',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      birthday: '1990-12-05',
    },
    images: [
      {
        file: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        enabled: true,
      },
      {
        file: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
        enabled: true,
      },
    ],
    traces: [
      {
        dateSale: '2024-01-15',
        value: 1200000000,
        tax: 50000000,
        name: 'Primera venta',
      },
    ],
  },
];

// GET /api/properties → lista de propiedades
export async function GET() {
  return NextResponse.json(mockProperties);
}

// (Opcional) GET /api/properties/[id]
export async function POST(request: Request) {
  const body = await request.json();
  const property = mockProperties.find((p) => p.id === body.id);
  return NextResponse.json(property ?? { error: 'Not found' }, {
    status: property ? 200 : 404,
  });
}
