const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Proceso', async (req, res) => {
  try {
    const {
      int_id_cat_equipo,
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.post_proceso($1,$2,$3,$4);', [int_id_cat_equipo, str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Put_Proceso', async (req, res) => {
  try {
    const {
      int_id_cat_proceso,
      int_id_cat_equipo,
      str_nombre,
      str_descripcion,
      int_estado,
      int_modificado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.put_proceso($1,$2,$3,$4,$5,$6);', [int_id_cat_proceso, int_id_cat_equipo, str_nombre, str_descripcion, int_estado, int_modificado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Proceso', async (req, res) => {
  try {
    const {
      str_nombre_proceso,
      int_id_equipo,
      str_nombre_equipo,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_proceso_tarea.get_proceso($1,$2,$3,$4);', [str_nombre_proceso, int_id_equipo, str_nombre_equipo, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
