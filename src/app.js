const express = require("express");
const clientesRoutes = require("./routes/clientesRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de clientes e pedidos funcionando" });
});

app.use("/clientes", clientesRoutes);

app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

module.exports = app;
