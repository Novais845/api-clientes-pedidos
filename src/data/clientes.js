const clientes = [
  {
    id: 1,
    nome: "Ana Souza",
    idade: 28,
    cidade: "São Paulo",
    pedidos: [
      { codigo: "PED001", produto: "Notebook", quantidade: 1 }
    ]
  },
  {
    id: 2,
    nome: "Bruno Lima",
    idade: 35,
    cidade: "Rio de Janeiro",
    pedidos: [
      { codigo: "PED002", produto: "Teclado", quantidade: 2 }
    ]
  },
  {
    id: 3,
    nome: "Carla Mendes",
    idade: 22,
    cidade: "São Paulo",
    pedidos: []
  }
];

module.exports = clientes;
