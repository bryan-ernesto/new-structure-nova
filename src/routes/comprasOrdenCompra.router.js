const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Compras_EstadoOrdenCompra', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_estadoordencompra($1,$2,$3)', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_EstadoOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_estado,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.put_compras_estadoordencompra($1,$2,$3,$4,$5)', [int_id_cat_orden_compra_estado, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_TipoCuotaOrdenCompra', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_tipocuotaordencompra($1,$2)', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_TipoCuotaOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_tipo_cuota,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.put_compras_tipocuotaordencompra($1,$2,$3,$4)', [int_id_cat_orden_compra_tipo_cuota, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_MetodoPagoOrdenCompra', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_metodopagoordencompra($1,$2)', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_MetodoPagoOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_metodo_pago,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.put_compras_metodopagoordencompra($1,$2,$3,$4)', [int_id_cat_orden_compra_metodo_pago, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_Moneda', async (req, res) => {
  try {
    const {
      str_abreviatura,
      str_monto_compra,
      numeric_monto_venta,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_moneda($1,$2,$3,$4)', [str_abreviatura, str_monto_compra, numeric_monto_venta, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_Moneda', async (req, res) => {
  try {
    const {
      int_id_cat_moneda,
      str_abreviatura,
      str_monto_compra,
      numeric_monto_venta,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_moneda($1,$2,$3,$4,$5,$6)', [int_id_cat_moneda, str_abreviatura, str_monto_compra, numeric_monto_venta, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
