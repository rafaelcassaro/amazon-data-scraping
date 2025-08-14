


const server = Bun.serve({
  port: 3000,
  fetch(req) {
    let teste = JSON.stringify(valor)
    return new Response(teste);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
