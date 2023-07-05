const express = require('express');
const cors = require('cors');
const { routerApi } = require('./routes/index');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function validateIpAndHost(req, res, next) {
  const allowedIps = ['127.0.0.1', '192.168.1.1', '192.168.0.8', 'http://localhost:3000/'];
  const allowedHosts = ['example.com', 'localhost', '::ffff:192.168.2.83'];
  const { hostname } = req.body;
  const { ip } = req.body;

  if (allowedIps.includes(ip) && allowedHosts.includes(hostname)) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server on port ${PORT}`);
});
