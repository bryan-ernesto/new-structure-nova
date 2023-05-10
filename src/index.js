const express = require('express');
const cors = require('cors');
const { routerApi } = require('./routes/index');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whitelist = ['http://localhost:5500', 'https://myapp.co', '10.10.10.166', '127.0.0.1', '192.168.1.1', '192.168.0.8'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
