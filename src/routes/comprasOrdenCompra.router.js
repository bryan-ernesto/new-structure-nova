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

router.post('/Get_Compras_EstadoOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_estado,
      str_nombre_estado_orden_compra,
      str_descripcion_estado,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_estadoordencompra($1,$2,$3,$4)', [int_id_cat_orden_compra_estado, str_nombre_estado_orden_compra, str_descripcion_estado, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_TipoCuotaOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_tipo_cuota,
      str_nombre_tipo_cuota,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_estadoordencompra($1,$2,$3)', [int_id_cat_orden_compra_tipo_cuota, str_nombre_tipo_cuota, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_MetodoPagoOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_metodo_pago,
      str_nombre_metodo_pago,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_metodopagoordencompra($1,$2,$3)', [int_id_cat_orden_compra_metodo_pago, str_nombre_metodo_pago, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_Moneda', async (req, res) => {
  try {
    const {
      int_id_cat_moneda,
      str_abreviatura,
      str_monto_compra,
      numeric_monto_venta,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_moneda($1,$2,$3,$4,$5)', [int_id_cat_moneda, str_abreviatura, str_monto_compra, numeric_monto_venta, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_OrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra_metodo_pago,
      int_id_cat_orden_compra_tipo_cuota,
      int_id_cat_moneda,
      int_solicitante,
      int_aprobador_presupuesto,
      int_aprobador_tesoreria,
      int_aprobador_extraordinario,
      int_id_cat_proveedor,
      str_numero_correlativo,
      int_cuotas,
      numeric_monto_cuotas,
      str_mes,
      int_id_cat_presupuesto,
      str_tamano_odc,
      str_estado_ppt,
      numeric_total_gastado,
      str_comentario,
      date_fecha_aprobacion_tesoreria,
      date_fecha_aprobacion_presupuesto,
      date_fecha_aprobacion_extraordinario,
      int_id_cat_orden_compra_estado,
      int_id_cat_cuenta_bancaria,
      bool_dentro_presupuesto,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_ordencompra($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24)', [int_id_cat_orden_compra_metodo_pago, int_id_cat_orden_compra_tipo_cuota, int_id_cat_moneda, int_solicitante, int_aprobador_presupuesto, int_aprobador_tesoreria, int_aprobador_extraordinario, int_id_cat_proveedor, str_numero_correlativo, int_cuotas, numeric_monto_cuotas, str_mes, int_id_cat_presupuesto, str_tamano_odc, str_estado_ppt, numeric_total_gastado, str_comentario, date_fecha_aprobacion_tesoreria, date_fecha_aprobacion_presupuesto, date_fecha_aprobacion_extraordinario, int_id_cat_orden_compra_estado, int_id_cat_cuenta_bancaria, bool_dentro_presupuesto, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_DetalleOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra,
      str_producto,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.post_compras_detalleordencompra($1,$2,$3)', [int_id_cat_orden_compra, str_producto, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_DetalleOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_det_orden_compra,
      int_id_cat_orden_compra,
      str_producto,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.put_compras_detalleordencompra($1,$2,$3,$4,$5)', [int_id_det_orden_compra, int_id_cat_orden_compra, str_producto, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_DetalleOrdenCompra', async (req, res) => {
  try {
    const {
      int_id_det_orden_compra,
      int_id_cat_orden_compra,
      str_producto,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_detalleordencompra($1,$2,$3,$4)', [int_id_det_orden_compra, int_id_cat_orden_compra, str_producto, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_OrdenCompra', async (req, res) => {
  try {
    const {
      int_id_cat_orden_compra,
      int_id_cat_orden_compra_metodo_pago,
      int_id_cat_orden_compra_tipo_cuota,
      int_id_cat_moneda,
      int_solicitante,
      int_aprobador_presupuesto,
      int_aprobador_tesoreria,
      int_aprobador_extraordinario,
      int_id_cat_proveedor,
      str_numero_correlativo,
      int_cuotas,
      numeric_monto_cuotas,
      str_mes,
      int_id_cat_presupuesto,
      str_tamano_odc,
      str_estado_ppt,
      numeric_total_gastado,
      str_comentario,
      date_fecha_aprobacion_tesoreria,
      date_fecha_aprobacion_presupuesto,
      date_fecha_aprobacion_extraordinario,
      int_id_cat_orden_compra_estado,
      int_id_cat_cuenta_bancaria,
      bool_dentro_presupuesto,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT compras_orden_compra.put_compras_ordencompra($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,26)', [int_id_cat_orden_compra, int_id_cat_orden_compra_metodo_pago, int_id_cat_orden_compra_tipo_cuota, int_id_cat_moneda, int_solicitante, int_aprobador_presupuesto, int_aprobador_tesoreria, int_aprobador_extraordinario, int_id_cat_proveedor, str_numero_correlativo, int_cuotas, numeric_monto_cuotas, str_mes, int_id_cat_presupuesto, str_tamano_odc, str_estado_ppt, numeric_total_gastado, str_comentario, date_fecha_aprobacion_tesoreria, date_fecha_aprobacion_presupuesto, date_fecha_aprobacion_extraordinario, int_id_cat_orden_compra_estado, int_id_cat_cuenta_bancaria, bool_dentro_presupuesto, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_OrdenCompra', async (req, res) => {
  try {
    const {
      int_id_orden_compra,
      int_id_metodo_pago,
      str_nombre_metodo_pago,
      int_id_tipo_cuota,
      str_nombre_tipo_cuota,
      int_id_moneda,
      str_abreviatura_moneda,
      int_id_usuario_solicitante,
      str_nombre_usuario_solicitante,
      int_id_usuario_aprobador_presupuesto,
      str_nombre_usuario_aprobador_presupuesto,
      int_id_usuario_aprobador_tesoreria,
      str_nombre_usuario_aprobador_tesoreria,
      int_id_usuario_aprobador_extraordinario,
      str_nombre_usuario_aprobador_extraordinario,
      int_id_proveedor,
      str_nombre_proveedor,
      str_numero_correlativo,
      int_cuotas,
      str_mes,
      int_id_presupuesto,
      numeric_monto_presupuesto,
      str_tamano_odc,
      str_estado_ppt,
      numeric_total_gastado,
      str_comentario,
      int_id_cat_orden_compra_estado,
      str_nombre_estado_orden_compra,
      int_id_cuenta_bancaria,
      str_nombre_cuenta_bancaria,
      bool_dentro_presupuesto,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_orden_compra.get_compras_ordencompra($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)', [int_id_orden_compra, int_id_metodo_pago, str_nombre_metodo_pago, int_id_tipo_cuota, str_nombre_tipo_cuota, int_id_moneda, str_abreviatura_moneda, int_id_usuario_solicitante, str_nombre_usuario_solicitante, int_id_usuario_aprobador_presupuesto, str_nombre_usuario_aprobador_presupuesto, int_id_usuario_aprobador_tesoreria, str_nombre_usuario_aprobador_tesoreria, int_id_usuario_aprobador_extraordinario, str_nombre_usuario_aprobador_extraordinario, int_id_proveedor, str_nombre_proveedor, str_numero_correlativo, int_cuotas, str_mes, int_id_presupuesto, numeric_monto_presupuesto, str_tamano_odc, str_estado_ppt, numeric_total_gastado, str_comentario, int_id_cat_orden_compra_estado, str_nombre_estado_orden_compra, int_id_cuenta_bancaria, str_nombre_cuenta_bancaria, bool_dentro_presupuesto, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
