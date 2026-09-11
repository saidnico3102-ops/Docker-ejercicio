const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Said Miñan";

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: `Hola, soy ${MESSAGE} - API activa`,
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[API] Servidor corriendo en el puerto ${PORT}`);
});