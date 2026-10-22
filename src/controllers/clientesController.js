const clientes = require("../data/clientes");

function encontrarCliente(id) {
  return clientes.find((cliente) => cliente.id === Number(id));
}

function listarClientes(req, res) {
  res.json(clientes);
}

function buscarCliente(req, res) {
  const cliente = encontrarCliente(req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  return res.json(cliente);
}

function listarPedidos(req, res) {
  const cliente = encontrarCliente(req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  return res.json(cliente.pedidos);
}

function atualizarCliente(req, res) {
  const cliente = encontrarCliente(req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { nome, idade, cidade } = req.body;

  if (nome !== undefined) cliente.nome = nome;
  if (idade !== undefined) cliente.idade = idade;
  if (cidade !== undefined) cliente.cidade = cidade;

  return res.json(cliente);
}

function adicionarPedido(req, res) {
  const cliente = encontrarCliente(req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { codigo, produto, quantidade } = req.body;

  if (!codigo || !produto || quantidade === undefined) {
    return res.status(400).json({
      mensagem: "Informe codigo, produto e quantidade"
    });
  }

  const pedido = { codigo, produto, quantidade };
  cliente.pedidos.push(pedido);

  return res.status(201).json(pedido);
}

function listarPorCidade(req, res) {
  const cidadeInformada = req.params.cidade.toLowerCase();
  const resultado = clientes.filter(
    (cliente) => cliente.cidade.toLowerCase() === cidadeInformada
  );

  return res.json(resultado);
}

function removerCliente(req, res) {
  const indice = clientes.findIndex(
    (cliente) => cliente.id === Number(req.params.id)
  );

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const [clienteRemovido] = clientes.splice(indice, 1);
  return res.json({ mensagem: "Cliente removido com sucesso", cliente: clienteRemovido });
}

module.exports = {
  listarClientes,
  buscarCliente,
  listarPedidos,
  atualizarCliente,
  adicionarPedido,
  listarPorCidade,
  removerCliente
};
