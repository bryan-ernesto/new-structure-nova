const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Compras_EstadoRecepcion', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.post_compras_estadorecepcion($1,$2,$3)', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_EstadoRecepcion', async (req, res) => {
  try {
    const {
      int_id_cat_recepcion_estado,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.put_compras_estadorecepcion($1,$2,$3,$4,$5)', [int_id_cat_recepcion_estado, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_Recepcion', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra,
      int_id_cat_recepcion_estado,
      str_comentario,
      int_entregado_por,
      int_recibido_por,
      str_entregado_por_firma,
      str_recibido_por_firma,
      date_fecha_recepcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.post_compras_recepcion($1,$2,$3,$4,$5,$6,$7,$8,$9)', [int_id_cat_orden_compra, int_id_cat_recepcion_estado, str_comentario, int_entregado_por, int_recibido_por, str_entregado_por_firma, str_recibido_por_firma, date_fecha_recepcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_Recepcion', async (req, res) => {
  try {
    const {
      int_id_cat_recepcion,
      int_id_cat_orden_compra,
      int_id_cat_recepcion_estado,
      str_comentario,
      int_entregado_por,
      int_recibido_por,
      str_entregado_por_firma,
      str_recibido_por_firma,
      date_fecha_recepcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.put_compras_recepcion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [int_id_cat_recepcion, int_id_cat_orden_compra, int_id_cat_recepcion_estado, str_comentario, int_entregado_por, int_recibido_por, str_entregado_por_firma, str_recibido_por_firma, date_fecha_recepcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_DetalleRecepcion', async (req, res) => {
  try {
    const {
      int_id_cat_recepcion,
      int_id_cat_producto,
      str_producto,
      int_cantidad_solicitada,
      int_cantidad_recibida,
      int_diferencia,
      str_observacion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.post_compras_detallerecepcion($1,$2,$3,$4,$5,$6,$7,$8)', [int_id_cat_recepcion, int_id_cat_producto, str_producto, int_cantidad_solicitada, int_cantidad_recibida, int_diferencia, str_observacion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_DetalleRecepcion', async (req, res) => {
  try {
    const {
      int_id_det_recepcion,
      int_id_cat_recepcion,
      int_id_cat_producto,
      str_producto,
      int_cantidad_solicitada,
      int_cantidad_recibida,
      int_diferencia,
      str_observacion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.put_compras_detallerecepcion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [int_id_det_recepcion, int_id_cat_recepcion, int_id_cat_producto, str_producto, int_cantidad_solicitada, int_cantidad_recibida, int_diferencia, str_observacion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_EstadoRecepcion', async (req, res) => {
  try {
    const {
      int_id_cat_recepcion_estado,
      str_nombre_estado,
      str_descripcion_estado,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.get_compras_estadorecepcion($1,$2,$3,$4)', [int_id_cat_recepcion_estado, str_nombre_estado, str_descripcion_estado, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_Recepcion', async (req, res) => {
  try {
    const {
      int_id_cat_recepcion,
      int_id_cat_orden_compra,
      int_id_cat_recepcion_estado,
      str_nombre_estado,
      str_comentario,
      int_entregado_por,
      int_recibido_por,
      str_entregado_por_firma,
      str_recibido_por_firma,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.get_compras_recepcion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [int_id_cat_recepcion, int_id_cat_orden_compra, int_id_cat_recepcion_estado, str_nombre_estado, str_comentario, int_entregado_por, int_recibido_por, str_entregado_por_firma, str_recibido_por_firma, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_DetalleRecepcion', async (req, res) => {
  try {
    const {
      int_id_det_recepcion,
      int_id_cat_recepcion,
      int_id_cat_producto,
      str_nombre_producto,
      str_producto,
      int_cantidad_solicitada,
      int_cantidad_recibida,
      int_diferencia,
      str_observacion,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_recepcion.get_compras_detallerecepcion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [int_id_det_recepcion, int_id_cat_recepcion, int_id_cat_producto, str_nombre_producto, str_producto, int_cantidad_solicitada, int_cantidad_recibida, int_diferencia, str_observacion, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
