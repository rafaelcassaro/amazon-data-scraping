const app = require("./src/app");

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});