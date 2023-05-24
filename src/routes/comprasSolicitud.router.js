const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Compras_Solicitud', async (req, res) => {
  try {
    const {
      int_id_cat_usuario,
      numeric_total,
      str_comentario,
      date_fecha_solicitud,
      int_id_cat_solicitud_estado,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_solicitud.post_compras_solicitud($1,$2,$3,$4,$5,$6)', [int_id_cat_usuario, numeric_total, str_comentario, date_fecha_solicitud, int_id_cat_solicitud_estado, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_Solicitud', async (req, res) => {
  try {
    const {
      int_id_cat_solicitud,
      int_id_cat_usuario,
      numeric_total,
      str_comentario,
      date_fecha_solicitud,
      int_id_cat_solicitud_estado,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_solicitud.put_compras_solicitud($1,$2,$3,$4,$5,$6,$7,$8)', [int_id_cat_solicitud, int_id_cat_usuario, numeric_total, str_comentario, date_fecha_solicitud, int_id_cat_solicitud_estado, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_EstadoSolicitud', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_solicitud.post_compras_estadosolicitud($1,$2,$3)', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_EstadoSolicitud', async (req, res) => {
  try {
    const {
      int_id_cat_solicitud_estado,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_solicitud.put_compras_estadosolicitud($1,$2,$3,$4,$5)', [int_id_cat_solicitud_estado, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
