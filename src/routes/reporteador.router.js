const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Get_empresas', async (req, res) => {
  try {
    const {
      str_empresa_nombre,
      int_id_delta,
      str_nombre_delta,
      str_tipo,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_empresas_reporteador($1,$2,$3,$4,$5,$6);', [str_empresa_nombre, int_id_delta, str_nombre_delta, str_tipo, int_creado_por, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  router,
};
