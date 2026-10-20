const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi aplicacion Azure</title>
      <style>
        body {
          font-family: Arial;
          text-align: center;
          background: #f0f5fa;
          padding: 80px;
        }
        h1 {
          color: #0078d4;
        }
      </style>
    </head>
    <body>
      <h1>Bienvenido a Microsoft Azure</h1>
      <h2>GitHub Actions funcionando</h2>
      <p>Aplicacion Node.js publicada correctamente.</p>
      <p>Mi primer despliegue automatico</p>
    </body>
    </html>
  `);

});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});

