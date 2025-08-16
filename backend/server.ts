const app = require("./src/app");

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});