/*
 Navicat Premium Data Transfer

 Source Server         : Local Docker
 Source Server Type    : MongoDB
 Source Server Version : 70025 (7.0.25)
 Source Host           : localhost:27017
 Source Schema         : PropertiesDb

 Target Server Type    : MongoDB
 Target Server Version : 70025 (7.0.25)
 File Encoding         : 65001

 Date: 27/10/2025 21:04:22
*/


// ----------------------------
// Collection structure for Properties
// ----------------------------
db.getCollection("Properties").drop();
db.createCollection("Properties");

// ----------------------------
// Documents of Properties
// ----------------------------
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec072c68f251a770c7df1"),
    name: "Casa Familiar en Medellín",
    address: "Calle 45 #12-34, Medellín",
    price: 350000000,
    codeInternal: "A-001",
    year: 2018,
    owner: {
        idOwner: ObjectId("68fec072c68f251a770c7df2"),
        name: "Carlos Gómez",
        address: "Carrera 10 #20-30",
        photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b8c79?w=300",
        birthday: ISODate("1980-04-12T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1600585152220-90363fe7a237?w=800",
            enabled: true
        }
    ],
    traces: [
        {
            dateSale: ISODate("2023-08-12T00:00:00.000Z"),
            value: 340000000,
            tax: 10000000,
            name: "Venta Anterior"
        }
    ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec072c68f251a770c7df3"),
    name: "Apartamento en Bogotá",
    address: "Av. Suba #100-45, Bogotá",
    price: 520000000,
    codeInternal: "A-002",
    year: 2021,
    owner: {
        idOwner: ObjectId("68fec072c68f251a770c7df4"),
        name: "Laura Rojas",
        address: "Calle 90 #15-20",
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300",
        birthday: ISODate("1992-07-08T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            enabled: true
        }
    ],
    traces: [
        {
            dateSale: ISODate("2024-05-02T00:00:00.000Z"),
            value: 510000000,
            tax: 10000000,
            name: "Compra inicial"
        }
    ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec072c68f251a770c7df5"),
    name: "Finca en Rionegro",
    address: "Vereda El Tablazo, Rionegro",
    price: 950000000,
    codeInternal: "A-003",
    year: 2016,
    owner: {
        idOwner: ObjectId("68fec072c68f251a770c7df6"),
        name: "María Fernanda López",
        address: "Calle 15 #45-60",
        photo: "https://images.unsplash.com/photo-1590080875831-f2a94bdf76e7?w=300",
        birthday: ISODate("1985-09-15T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
            enabled: false
        }
    ],
    traces: [
        {
            dateSale: ISODate("2021-03-20T00:00:00.000Z"),
            value: 900000000,
            tax: 50000000,
            name: "Venta previa"
        }
    ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec072c68f251a770c7df7"),
    name: "Casa Campestre en Cali",
    address: "Km 7 Vía a Jamundí, Cali",
    price: 780000000,
    codeInternal: "A-004",
    year: 2019,
    owner: {
        idOwner: ObjectId("68fec072c68f251a770c7df8"),
        name: "Andrés Ramírez",
        address: "Calle 5 #23-18",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
        birthday: ISODate("1978-02-25T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec072c68f251a770c7df9"),
    name: "Apartamento en Cartagena",
    address: "Bocagrande, Edificio Solmar, Cartagena",
    price: 1250000000,
    codeInternal: "A-005",
    year: 2022,
    owner: {
        idOwner: ObjectId("68fec072c68f251a770c7dfa"),
        name: "Paola Díaz",
        address: "Carrera 7 #50-22",
        photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300",
        birthday: ISODate("1990-12-05T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1600585152220-90363fe7a237?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            enabled: true
        }
    ],
    traces: [
        {
            dateSale: ISODate("2024-01-15T00:00:00.000Z"),
            value: 1200000000,
            tax: 50000000,
            name: "Primera venta"
        }
    ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7dfb"),
    name: "Apartamento Moderno en Bucaramanga",
    address: "Carrera 33 #48-22, Bucaramanga",
    price: 460000000,
    codeInternal: "A-006",
    year: 2020,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7dfc"),
        name: "Julián Herrera",
        address: "Calle 34 #22-15",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
        birthday: ISODate("1983-10-02T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1600585152220-90363fe7a237?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7dfd"),
    name: "Casa en el Norte de Barranquilla",
    address: "Calle 84 #53-11, Barranquilla",
    price: 690000000,
    codeInternal: "A-007",
    year: 2019,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7dfe"),
        name: "Natalia Vélez",
        address: "Carrera 46 #74-22",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
        birthday: ISODate("1988-03-17T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7dff"),
    name: "Penthouse con Vista al Mar en Santa Marta",
    address: "Carrera 1 #20-45, Rodadero, Santa Marta",
    price: 1850000000,
    codeInternal: "A-008",
    year: 2023,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e00"),
        name: "Ricardo Morales",
        address: "Calle 14 #9-21",
        photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300",
        birthday: ISODate("1976-06-28T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e01"),
    name: "Casa Colonial en Popayán",
    address: "Carrera 7 #3-12, Centro Histórico, Popayán",
    price: 580000000,
    codeInternal: "A-009",
    year: 2015,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e02"),
        name: "Liliana Castaño",
        address: "Carrera 9 #8-44",
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300",
        birthday: ISODate("1989-09-10T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1560184897-09e9c5aa0d94?w=800",
            enabled: false
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e03"),
    name: "Apartamento de Lujo en El Poblado",
    address: "Carrera 30 #12-55, El Poblado, Medellín",
    price: 1100000000,
    codeInternal: "A-010",
    year: 2022,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e04"),
        name: "Andrés Giraldo",
        address: "Calle 12 #25-32",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
        birthday: ISODate("1984-01-20T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e05"),
    name: "Casa Familiar en Manizales",
    address: "Calle 65 #23-41, Manizales",
    price: 420000000,
    codeInternal: "A-011",
    year: 2017,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e06"),
        name: "Marta López",
        address: "Carrera 12 #18-09",
        photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b8c79?w=300",
        birthday: ISODate("1979-04-15T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e07"),
    name: "Loft Minimalista en Bogotá",
    address: "Calle 72 #10-15, Chapinero, Bogotá",
    price: 870000000,
    codeInternal: "A-012",
    year: 2021,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e08"),
        name: "Juan David Ortiz",
        address: "Carrera 15 #90-21",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
        birthday: ISODate("1991-02-11T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1560184897-09e9c5aa0d94?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1600585152220-90363fe7a237?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e09"),
    name: "Cabaña Ecológica en Guatapé",
    address: "Vereda La Piedra, Guatapé, Antioquia",
    price: 690000000,
    codeInternal: "A-013",
    year: 2018,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e0a"),
        name: "Santiago Ramírez",
        address: "Carrera 11 #25-10",
        photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300",
        birthday: ISODate("1986-12-02T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
            enabled: false
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e0b"),
    name: "Apartamento Ejecutivo en Pereira",
    address: "Carrera 7 #24-15, Pereira",
    price: 510000000,
    codeInternal: "A-014",
    year: 2020,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e0c"),
        name: "Camila Torres",
        address: "Calle 8 #16-23",
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300",
        birthday: ISODate("1995-05-30T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
            enabled: true
        },
        {
            file: "https://images.unsplash.com/photo-1600585152220-90363fe7a237?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
db.getCollection("Properties").insert([ {
    _id: ObjectId("68fec0bbc68f251a770c7e0d"),
    name: "Casa en Condominio en Armenia",
    address: "Vía al Caimo, Armenia, Quindío",
    price: 880000000,
    codeInternal: "A-015",
    year: 2019,
    owner: {
        idOwner: ObjectId("68fec0bbc68f251a770c7e0e"),
        name: "Verónica Espinosa",
        address: "Calle 10 #7-55",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
        birthday: ISODate("1982-08-19T00:00:00.000Z")
    },
    images: [
        {
            file: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
            enabled: true
        }
    ],
    traces: [ ]
} ]);
