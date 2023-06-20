const express = require('express');
const { getConnGroupNova } = require('../db/config');
const { getConnCuenta } = require('../db/config.delta');

const router = express.Router();

router.post('/Post_Documento_Tipo', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_tipo,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_tipo($1,$2,$3,$4)', [str_nombre, str_descripcion, int_tipo, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Canal', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_canal($1,$2,$3)', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Estado', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_estado_final,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_estado($1,$2,$3,$4)', [str_nombre, str_descripcion, int_estado_final, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_EstadoAsignacionCanal', async (req, res) => {
  try {
    const {
      int_id_cat_documento_estado,
      int_id_cat_documento_canal,
      numeric_progreso,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_estadoasignacioncanal($1,$2,$3,$4)', [int_id_cat_documento_estado, int_id_cat_documento_canal, numeric_progreso, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Solicitud', async (req, res) => {
  try {
    const {
      int_individual_masiva,
      int_id_cat_documento_estado,
      int_id_cat_documento_tipo,
      int_id_cat_usuario_autorizador,
      int_id_cat_empresa,
      int_id_creador,
      int_id_adjunto_sharepoint,
      int_cantidad_documentos,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_solicitud($1,$2,$3,$4,$5,$6,$7,$8)', [int_individual_masiva, int_id_cat_documento_estado, int_id_cat_documento_tipo, int_id_cat_usuario_autorizador, int_id_cat_empresa, int_id_creador, int_id_adjunto_sharepoint, int_cantidad_documentos]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Moneda', async (req, res) => {
  try {
    const {
      int_id_cat_moneda,
      str_simbolo,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT general.put_documento_moneda($1,$2,$3,$4,$5)', [int_id_cat_moneda, str_simbolo, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Pais', async (req, res) => {
  try {
    const {
      int_id_cat_pais,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT general.put_documento_pais($1,$2,$3,$4)', [int_id_cat_pais, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Tipo', async (req, res) => {
  try {
    const {
      int_id_cat_documento_tipo,
      str_nombre,
      str_descripcion,
      int_tipo,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_tipo($1,$2,$3,$4,$5,$6)', [int_id_cat_documento_tipo, str_nombre, str_descripcion, int_tipo, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Canal', async (req, res) => {
  try {
    const {
      int_id_cat_documento_canal,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_canal($1,$2,$3,$4,$5)', [int_id_cat_documento_canal, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_EstadoAsignacionCanal', async (req, res) => {
  try {
    const {
      int_id_det_documento_estado_asignacion_canal,
      int_id_cat_documento_estado,
      int_id_cat_documento_canal,
      numeric_progreso,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_estadoasignacioncanal($1,$2,$3,$4,$5,$6)', [int_id_det_documento_estado_asignacion_canal, int_id_cat_documento_estado, int_id_cat_documento_canal, numeric_progreso, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Estado', async (req, res) => {
  try {
    const {
      int_id_cat_documento_estado,
      str_nombre,
      str_descripcion,
      int_estado_final,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_estado($1,$2,$3,$4,$5,$6)', [int_id_cat_documento_estado, str_nombre, str_descripcion, int_estado_final, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Solicitud', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud,
      int_individual_masiva,
      int_id_cat_documento_estado,
      int_id_cat_documento_tipo,
      int_id_cat_usuario_autorizador,
      int_id_cat_empresa,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_solicitud($1,$2,$3,$4,$5,$6,$7,$8)', [int_id_det_documento_recepcion_solicitud, int_individual_masiva, int_id_cat_documento_estado, int_id_cat_documento_tipo, int_id_cat_usuario_autorizador, int_id_cat_empresa, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_SolicitudBitacora', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion,
      int_id_cat_documento_estado,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_solicitudbitacora($1,$2,$3)', [int_id_det_documento_recepcion, int_id_cat_documento_estado, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_SolicitudDetalle', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud,
      int_id_cat_documento_estado,
      int_dte,
      str_proveedor,
      int_nit,
      numeric_monto,
      date_fecha,
      int_id_cat_moneda,
      str_descripcion,
      int_id_cat_pais,
      int_id_det_documento_anticipo,
      int_id_creador,
      int_adjunto_id_sharepoint,
      int_cantidad,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_centro_costo,
      str_nombre_cuenta_sugerida,
      int_codigo_proveedor,
      str_nombre_proveedor,
      str_comentario,
      int_numero_proveedor,
      str_tipo_documento,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_solicituddetalle($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)', [int_id_det_documento_recepcion_solicitud, int_id_cat_documento_estado, int_dte, str_proveedor, int_nit, numeric_monto, date_fecha, int_id_cat_moneda, str_descripcion, int_id_cat_pais, int_id_det_documento_anticipo, int_id_creador, int_adjunto_id_sharepoint, int_cantidad, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_centro_costo, str_nombre_cuenta_sugerida, int_codigo_proveedor, str_nombre_proveedor, str_comentario, int_numero_proveedor, str_tipo_documento]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_SolicitudDetalleBitacora', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud_detalle,
      int_id_cat_documento_estado,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_solicituddetallebitacora($1,$2,$3)', [int_id_det_documento_recepcion_solicitud_detalle, int_id_cat_documento_estado, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Validacion', async (req, res) => {
  try {
    const {
      int_id_det_documento_anticipo,
      int_id_det_documento_recepcion_solicitud_detalle,
      int_id_cat_documento_validacion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_validacion($1,$2,$3,$4)', [int_id_det_documento_anticipo, int_id_det_documento_recepcion_solicitud_detalle, int_id_cat_documento_validacion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Sat', async (req, res) => {
  try {
    const {
      int_id_cat_documento_tipo,
      int_id_cat_documento_estado,
      int_id_cat_empresa,
      int_dte,
      str_nit,
      str_proveedor,
      numeric_monto,
      date_fecha_emision,
      int_id_cat_moneda,
      str_descripcion,
      int_id_cat_pais,
      int_estado_anulado,
      int_id_creador,
      int_cantidad,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_centro_costo,
      str_nombre_cuenta_sugerida,
      int_codigo_proveedor,
      str_nombre_proveedor,
      str_numero_autorizacion,
      str_tipo_dte,
      str_serie,
      int_codigo_establecimiento,
      str_nit_certificador,
      str_nombre_certificador,
      date_fecha_anulacion,
      numeric_iva,
      numeric_petroleo,
      numeric_turismo_hospedaje,
      numeric_turismo_pasajes,
      numeric_timbre_prensa,
      numeric_bomberos,
      numeric_tasa_municipal,
      numeric_bebidas_alcoholicas,
      numeric_tabaco,
      numeric_cemento,
      numeric_bebidas_no_alcoholicas,
      numeric_tarifa_portuaria,
      str_importacion_local,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.post_documento_sat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40)', [int_id_cat_documento_tipo, int_id_cat_documento_estado, int_id_cat_empresa, int_dte, str_nit, str_proveedor, numeric_monto, date_fecha_emision, int_id_cat_moneda, str_descripcion, int_id_cat_pais, int_estado_anulado, int_id_creador, int_cantidad, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_centro_costo, str_nombre_cuenta_sugerida, int_codigo_proveedor, str_nombre_proveedor, str_numero_autorizacion, str_tipo_dte, str_serie, int_codigo_establecimiento, str_nit_certificador, str_nombre_certificador, date_fecha_anulacion, numeric_iva, numeric_petroleo, numeric_turismo_hospedaje, numeric_turismo_pasajes, numeric_timbre_prensa, numeric_bomberos, numeric_tasa_municipal, numeric_bebidas_alcoholicas, numeric_tabaco, numeric_cemento, numeric_bebidas_no_alcoholicas, numeric_tarifa_portuaria, str_importacion_local]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_SolicitudDetalle', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud_detalle,
      int_id_det_documento_recepcion_solicitud,
      int_id_cat_documento_estado,
      int_dte,
      str_proveedor,
      int_nit,
      numeric_monto,
      date_fecha,
      int_id_cat_moneda,
      str_descripcion,
      int_id_cat_pais,
      int_id_det_documento_anticipo,
      int_estado,
      int_actualizado_por,
      int_adjunto_sharepoint,
      int_cantidad,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_centro_costo,
      str_nombre_cuenta_sugerida,
      int_codigo_proveedor,
      str_nombre_proveedor,
      str_comentario,
      int_numero_proveedor,
      numeric_tipo_cambio,
      str_tipo_documento,
      numeric_monto_quetzalizado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_solicituddetalle($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)', [int_id_det_documento_recepcion_solicitud_detalle, int_id_det_documento_recepcion_solicitud, int_id_cat_documento_estado, int_dte, str_proveedor, int_nit, numeric_monto, date_fecha, int_id_cat_moneda, str_descripcion, int_id_cat_pais, int_id_det_documento_anticipo, int_estado, int_actualizado_por, int_adjunto_sharepoint, int_cantidad, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_centro_costo, str_nombre_cuenta_sugerida, int_codigo_proveedor, str_nombre_proveedor, str_comentario, int_numero_proveedor, numeric_tipo_cambio, str_tipo_documento, numeric_monto_quetzalizado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_BitacoraLogin', async (req, res) => {
  try {
    const {
      int_id_cat_aplicativo,
      int_id_cat_usuario,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.post_documento_bitacoralogin($1,$2,$3)', [int_id_cat_aplicativo, int_id_cat_usuario, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_DetalleFacturaSat', async (req, res) => {
  try {
    const {
      str_empresa,
      int_dte,
      int_nit,
      str_proveedor,
      numeric_monto,
      int_id_moneda,
      str_descripcion,
      int_id_pais,
      int_estado,
      int_cantidad,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_cuenta_sugerida,
      int_codigo_proveedor,
      str_nombre_proveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_detallefacturasat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)', [str_empresa, int_dte, int_nit, str_proveedor, numeric_monto, int_id_moneda, str_descripcion, int_id_pais, int_estado, int_cantidad, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_cuenta_sugerida, int_codigo_proveedor, str_nombre_proveedor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Tipo', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_tipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_tipo($1,$2,$3)', [str_nombre, str_descripcion, int_tipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Canal', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_canal($1,$2)', [str_nombre, str_descripcion]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Estado', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_estado_final,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_estado($1,$2,$3)', [str_nombre, str_descripcion, int_estado_final]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_GrupoPermisos', async (req, res) => {
  try {
    const {
      int_id_aplicativo,
      str_nombre_aplicativo,
      str_nombre_grupo,
      str_nombre_nivel,
      str_descripcion_nivel,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_grupopermisos($1,$2,$3,$4,$5,$6)', [int_id_aplicativo, str_nombre_aplicativo, str_nombre_grupo, str_nombre_nivel, str_descripcion_nivel, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Login', async (req, res) => {
  try {
    const {
      str_nombre_aplicativo,
      str_nombre_usuario,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_login($1,$2)', [str_nombre_aplicativo, str_nombre_usuario]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_EstadoAsignacionCanal', async (req, res) => {
  try {
    const {
      str_nombre_estado,
      str_nombre_canal,
      str_progreso,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_estadoasignacioncanal($1,$2,$3)', [str_nombre_estado, str_nombre_canal, str_progreso]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Solicitud', async (req, res) => {
  try {
    const {
      int_id_solicitud,
      int_individual_masiva,
      str_nombre_estado,
      str_nombre_tipo,
      str_nombre_empresa,
      int_id_adjunto_sharepoint,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicitud($1,$2,$3,$4,$5,$6)', [int_id_solicitud, int_individual_masiva, str_nombre_estado, str_nombre_tipo, str_nombre_empresa, int_id_adjunto_sharepoint]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudDetalle', async (req, res) => {
  try {
    const {
      int_id_solicitud,
      int_id_empresa,
      str_nombre_empresa,
      int_id_estado,
      str_nombre_estado,
      int_dte,
      str_proveedor,
      int_nit,
      numeric_monto,
      int_id_moneda,
      str_descripcion,
      int_id_pais,
      int_id_sharepoint,
      int_estado,
      int_cantidad,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_cuenta_sugerida,
      str_codigo_proveedor,
      str_nombre_proveedor,
      int_numero_proveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicituddetalle($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)', [int_id_solicitud, int_id_empresa, str_nombre_empresa, int_id_estado, str_nombre_estado, int_dte, str_proveedor, int_nit, numeric_monto, int_id_moneda, str_descripcion, int_id_pais, int_id_sharepoint, int_estado, int_cantidad, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_cuenta_sugerida, str_codigo_proveedor, str_nombre_proveedor, int_numero_proveedor]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudBitacora', async (req, res) => {
  try {
    const {
      int_id_recepcion_solicitud,
      int_individual_masiva,
      str_nombre_estado,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicitudbitacora($1,$2,$3,$4)', [int_id_recepcion_solicitud, int_individual_masiva, str_nombre_estado, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudDetalleBitacora', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud_detalle,
      int_det_documento_recepcion_solicitud,
      str_nombre_estado,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicituddetallebitacora($1,$2,$3,$4)', [int_id_det_documento_recepcion_solicitud_detalle, int_det_documento_recepcion_solicitud, str_nombre_estado, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Delta', async (req, res) => {
  try {
    const {
      str_empresa,
      str_cuenta_sugerida,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_delta($1,$2)', [str_empresa, str_cuenta_sugerida]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_SolicitudDetalleEmpresa', async (req, res) => {
  try {
    const {
      int_id_solicitud,
      int_dte,
      int_id_estado,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_solicituddetalleempresa($1,$2,$3,$4)', [int_id_solicitud, int_dte, int_id_estado, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Usuario', async (req, res) => {
  try {
    const {
      str_usuario_nombre,
      int_creado_por,
      int_actualizado_por,
      str_username,
      int_empresa,
      int_departamento,
      int_equipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_usuario($1,$2,$3,$4,$5,$6,$7)', [str_usuario_nombre, int_creado_por, int_actualizado_por, str_username, int_empresa, int_departamento, int_equipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

// DELTA

router.post('/Get_Documento_CuentasM', async (req, res) => {
  try {
    const {
      str_empresa,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TRIM(CLAVE) AS CLAVE, TRIM(EMPRESA) AS EMPRESA, TRIM(NOMBRE) AS NOMBRE, ESTATUS FROM CUENTA WHERE EMPRESA LIKE '${str_empresa}' OR '${str_empresa}' = '' AND SUMARIA_O_MOVTO = 'M'`);
    const data = result.recordset.map((row) => ({
      CLAVE: row.CLAVE,
      EMPRESA: row.EMPRESA,
      NOMBRE: row.NOMBRE,
      ESTATUS: row.ESTATUS,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_CuentaSugerida', async (req, res) => {
  try {
    const {
      str_clave_empresa,
      str_cuenta_empresa,
      int_nit_proveedor,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TOP 1 TRIM(Conta.CUENTA_CONTABLE) AS CUENTA_CONTABLE, COUNT(Conta.CUENTA_CONTABLE) as NumRepeticiones, TRIM(Cuenta.NOMBRE) AS NOMBRE_CUENTA_SUGERIDA, CONVERT(VARCHAR(50), Conta.CENTRO_DE_COSTO) AS CENTRO_DE_COSTO, TRIM(CentroCosto.DESCRIPCION) AS DESCRIPCION_CENTRO_DE_COSTO, TRIM(Proveedor.N_I_T) AS NIT_PROVEEDOR, TRIM(Proveedor.NOMBRE_COMPLETO) AS NOMBRE_PROVEEDOR, CONVERT(VARCHAR(50), Proveedor.NUMERO) AS CODIGO_PROVEEDOR, Cargo.TIPO_CGO_CXP AS TIPO
    FROM CGO_CXP AS Cargo
    LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
    LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
    LEFT JOIN PRVEEDOR AS Proveedor ON Cargo.PROVEEDOR = Proveedor.NUMERO
    LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
    LEFT JOIN CTROCSTO AS CentroCosto ON Conta.CENTRO_DE_COSTO = CentroCosto.NUMERO
    WHERE Empresa.CLAVE = '${str_clave_empresa}' AND Cuenta.EMPRESA = '${str_cuenta_empresa}' AND Conta.VALOR_CARGO <> 0
    AND TRIM(REPLACE(Proveedor.N_I_T,'-',''))  = '${int_nit_proveedor}'
    AND (Conta.CUENTA_CONTABLE NOT IN ('1105050001','1105050002','1105100001','1110050010','1110050011','1110050012','1110050013','1330100001','1330100002','1355150002','1355950002','1365050001','2335250001','2335250002','2365050101','2365250001','2365500001','2368010001','2370010001','2370250001','2408900001','2505050001','2505050099','1113111','1113121','1141','1161','2111','2126','2221','110201','110202','110301','110302','110401','210101','210103','210203','210204','11121','11122','1131','2111','2134','2221','1113111','1141','1148','1154','1161','2111','2132','2221','1113112','1113114','111321','111324','1141','1153','1154','1161','2111','2112','2121','2123','2132','2135','2136','2141','2143','2211','2221','1141','2111','2132','1113111','1113112','1113115','1113119','1113121','1113122','1113123','1113125','1113126','1113127','1113128','1141','1148','1154','1158','1160','1161','2111','2126','21310','2132','2137','2139','2221','111122','111127','1113113','1113115','1113116','1113117','111314','111315','112111','1141','1153','1154','1161','1163','1164','1165','1166','22753','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2141','2143','2144','2220','2221','22217','22219','22221','22224','22233','22234','2227','2232','22338','22339','2234','22354','22356','2236','22360','2237','22372','22376','2238','22391','22399','22404','22411','22414','22416','22419','22425','22426','22428','22431','22436','2244','22442','22444','22448','22453','22456','22457','22459','22460','22461','2247','2254','2262','2263','22646','22647','22652','22659','22662','2267','22672','22675','22676','22682','22683','22684','22685','22688','22690','22706','22709','22712','22714','22716','22719','22720','22721','22724','22726','22727','22728','22730','22732','22733','22734','22738','22739','22740','22741','22742','22743','22744','22746','22747','22748','22749','22750','22751','22752','22754','22755','22756','22757','22758','22759','22760','22761','22762','22763','22764','22765','22766','22767','22768','22769','22770','22773','22774','2282','2290','2297','2298','2300','2313','2327','2342','2343','2354','2376','2387','2392','2406','2430','2432','2435','2455','2458','2460','2464','2470','2475','2489','2503','2518','2520','2531','2544','2547','2549','2557','2558','2563','2565','2581','2582','11050102','11050201','11050202','11050203','11100101','11100102','11100103','11100104','11100201','11100202',))
    AND (Cargo.TIPO_CGO_CXP IN ('FC', 'PQ', 'CC', 'FI', 'PA'))
    AND (CUENTA.SUMARIA_O_MOVTO = 'M')
    GROUP BY Conta.CUENTA_CONTABLE, Cuenta.NOMBRE, Conta.CENTRO_DE_COSTO, CentroCosto.DESCRIPCION, TRIM(Proveedor.N_I_T), Proveedor.NOMBRE_COMPLETO, Proveedor.NUMERO, Cargo.TIPO_CGO_CXP
    ORDER BY COUNT(Conta.CUENTA_CONTABLE) DESC, CUENTA_CONTABLE
    `);
    const data = result.recordset.map((row) => ({
      CUENTA_CONTABLE: row.CUENTA_CONTABLE,
      NumRepeticiones: row.NumRepeticiones,
      NOMBRE_CUENTA_SUGERIDA: row.NOMBRE_CUENTA_SUGERIDA,
      CENTRO_DE_COSTO: row.CENTRO_DE_COSTO,
      DESCRIPCION_CENTRO_DE_COSTO: row.DESCRIPCION_CENTRO_DE_COSTO,
      NIT_PROVEEDOR: row.NIT_PROVEEDOR,
      NOMBRE_PROVEEDOR: row.NOMBRE_PROVEEDOR,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Centros_Costo', async (req, res) => {
  try {
    const result = await getConnCuenta.query('SELECT NUMERO, TRIM(CLAVE) AS CLAVE, TRIM(DESCRIPCION) AS DESCRIPCION FROM CTROCSTO C WHERE STATUS = \'A\'');
    const data = result.recordset.map((row) => ({
      NUMERO: row.NUMERO,
      CLAVE: row.CLAVE,
      DESCRIPCION: row.DESCRIPCION,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Proveedor_Delta', async (req, res) => {
  try {
    const result = await getConnCuenta.query('SELECT CONVERT(VARCHAR(50), PR.NUMERO) AS NUMERO_PROVEEDOR, TRIM(PR.NOMBRE_COMPLETO) AS NOMBRE_COMPLETO, TRIM(PR.N_I_T) AS NIT_PROVEEDOR FROM PRVEEDOR AS PR');
    const data = result.recordset.map((row) => ({
      NUMERO_PROVEEDOR: row.NUMERO_PROVEEDOR,
      NOMBRE_COMPLETO: row.NOMBRE_COMPLETO,
      NIT_PROVEEDOR: row.NIT_PROVEEDOR,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_ListaCuentaSugerida', async (req, res) => {
  try {
    const {
      str_clave_empresa,
      str_cuenta_empresa,
      int_nit_proveedor,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TRIM(Conta.CUENTA_CONTABLE) AS CUENTA_CONTABLE, COUNT(Conta.CUENTA_CONTABLE) as NumRepeticiones, TRIM(Cuenta.NOMBRE) AS NOMBRE_CUENTA_SUGERIDA, CONVERT(VARCHAR(50), Conta.CENTRO_DE_COSTO) AS CENTRO_DE_COSTO, TRIM(CentroCosto.DESCRIPCION) AS DESCRIPCION_CENTRO_DE_COSTO, TRIM(Proveedor.N_I_T) AS NIT_PROVEEDOR, TRIM(Proveedor.NOMBRE_COMPLETO) AS NOMBRE_PROVEEDOR, CONVERT(VARCHAR(50), Proveedor.NUMERO) AS CODIGO_PROVEEDOR, Cargo.TIPO_CGO_CXP AS TIPO
    FROM CGO_CXP AS Cargo
    LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
    LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
    LEFT JOIN PRVEEDOR AS Proveedor ON Cargo.PROVEEDOR = Proveedor.NUMERO
    LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
    LEFT JOIN CTROCSTO AS CentroCosto ON Conta.CENTRO_DE_COSTO = CentroCosto.NUMERO
    WHERE Empresa.CLAVE = '${str_clave_empresa}' AND Cuenta.EMPRESA = '${str_cuenta_empresa}' AND Conta.VALOR_CARGO <> 0
    AND TRIM(REPLACE(Proveedor.N_I_T,'-',''))  = '${int_nit_proveedor}'
    AND (Conta.CUENTA_CONTABLE NOT IN ('170505001', '130505001', '220505001', '1141'))
    AND (Cargo.TIPO_CGO_CXP IN ('FC', 'PQ', 'CC', 'FI', 'PA'))
    GROUP BY Conta.CUENTA_CONTABLE, Cuenta.NOMBRE, Conta.CENTRO_DE_COSTO, CentroCosto.DESCRIPCION, TRIM(Proveedor.N_I_T), Proveedor.NOMBRE_COMPLETO, Proveedor.NUMERO, Cargo.TIPO_CGO_CXP
    ORDER BY COUNT(Conta.CUENTA_CONTABLE) DESC, CUENTA_CONTABLE`);
    const data = result.recordset.map((row) => ({
      CUENTA_CONTABLE: row.CUENTA_CONTABLE,
      NumRepeticiones: row.NumRepeticiones,
      NOMBRE_CUENTA_SUGERIDA: row.NOMBRE_CUENTA_SUGERIDA,
      CENTRO_DE_COSTO: row.CENTRO_DE_COSTO,
      DESCRIPCION_CENTRO_DE_COSTO: row.DESCRIPCION_CENTRO_DE_COSTO,
      NIT_PROVEEDOR: row.NIT_PROVEEDOR,
      NOMBRE_PROVEEDOR: row.NOMBRE_PROVEEDOR,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_ConcilacionDocumento', async (req, res) => {
  try {
    const {
      str_clave_empresa,
      str_cuenta_empresa,
      str_numero_documento,
    } = req.body;
    const result = await getConnCuenta.query(`SELECT TOP 1 TRIM(Conta.CUENTA_CONTABLE) AS CUENTA_CONTABLE, COUNT(Conta.CUENTA_CONTABLE) as NumRepeticiones, TRIM(Cuenta.NOMBRE) AS NOMBRE_CUENTA_SUGERIDA, CONVERT(VARCHAR(50), Conta.CENTRO_DE_COSTO) AS CENTRO_DE_COSTO, TRIM(CentroCosto.DESCRIPCION) AS DESCRIPCION_CENTRO_DE_COSTO, TRIM(Proveedor.N_I_T) AS NIT_PROVEEDOR, TRIM(Proveedor.NOMBRE_COMPLETO) AS NOMBRE_PROVEEDOR, CONVERT(VARCHAR(50), Proveedor.NUMERO) AS CODIGO_PROVEEDOR, Cargo.TIPO_CGO_CXP AS TIPO, CONVERT(VARCHAR(50), TRIM(Cargo.NUMERO_DOCTO)) AS NUMERO_DOCUMENTO, Cargo.FECHA_DOCTO AS FECHA_DOCUMENTO
    FROM CGO_CXP AS Cargo
    LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
    LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
    LEFT JOIN PRVEEDOR AS Proveedor ON Cargo.PROVEEDOR = Proveedor.NUMERO
    LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
    LEFT JOIN CTROCSTO AS CentroCosto ON Conta.CENTRO_DE_COSTO = CentroCosto.NUMERO
    WHERE Empresa.CLAVE = '${str_clave_empresa}' AND Cuenta.EMPRESA = '${str_cuenta_empresa}' AND Conta.VALOR_CARGO <> 0
    AND (Conta.CUENTA_CONTABLE NOT IN ('170505001', '130505001', '220505001', '1141'))
    AND (Cargo.TIPO_CGO_CXP IN ('FC', 'PQ', 'CC', 'FI', 'PA'))
    AND Cargo.NUMERO_DOCTO = CAST('${str_numero_documento}' AS VARCHAR(MAX))
    GROUP BY Conta.CUENTA_CONTABLE, Cuenta.NOMBRE, Conta.CENTRO_DE_COSTO, CentroCosto.DESCRIPCION, TRIM(Proveedor.N_I_T), Proveedor.NOMBRE_COMPLETO, Proveedor.NUMERO, Cargo.TIPO_CGO_CXP, Cargo.NUMERO_DOCTO, Cargo.valor_ext, Cargo.FECHA_DOCTO
    ORDER BY COUNT(Conta.CUENTA_CONTABLE) DESC, CUENTA_CONTABLE`);
    const data = result.recordset.map((row) => ({
      CUENTA_CONTABLE: row.CUENTA_CONTABLE,
      NumRepeticiones: row.NumRepeticiones,
      NOMBRE_CUENTA_SUGERIDA: row.NOMBRE_CUENTA_SUGERIDA,
      CENTRO_DE_COSTO: row.CENTRO_DE_COSTO,
      DESCRIPCION_CENTRO_DE_COSTO: row.DESCRIPCION_CENTRO_DE_COSTO,
      NIT_PROVEEDOR: row.NIT_PROVEEDOR,
      NOMBRE_PROVEEDOR: row.NOMBRE_PROVEEDOR,
      CODIGO_PROVEEDOR: row.CODIGO_PROVEEDOR,
      TIPO: row.TIPO,
      NUMERO_DOCUMENTO: row.NUMERO_DOCUMENTO,
      FECHA_DOCUMENTO: row.FECHA_DOCUMENTO,
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_FacturaSat', async (req, res) => {
  try {
    const {
      int_dte,
      str_numero_autorizacion,
      str_tipo_dte,
      str_serie,
      int_codigo_establecimiento,
      str_nit_certificador,
      str_nombre_certificador,
      date_fecha_anulacion,
      numeric_iva,
      numeric_petroleo,
      numeric_turismo_hospedaje,
      numeric_turismo_pasajes,
      numeric_timbre_prensa,
      numeric_bomberos,
      numeric_tasa_municipal,
      numeric_bebidas_alcoholicas,
      numeric_tabaco,
      numeric_cemento,
      numeric_bebidas_no_alcoholicas,
      numeric_tarifa_portuaria,
      str_importacion_local,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT recepciones_documento.put_documento_facturasat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)', [int_dte, str_numero_autorizacion, str_tipo_dte, str_serie, int_codigo_establecimiento, str_nit_certificador, str_nombre_certificador, date_fecha_anulacion, numeric_iva, numeric_petroleo, numeric_turismo_hospedaje, numeric_turismo_pasajes, numeric_timbre_prensa, numeric_bomberos, numeric_tasa_municipal, numeric_bebidas_alcoholicas, numeric_tabaco, numeric_cemento, numeric_bebidas_no_alcoholicas, numeric_tarifa_portuaria, str_importacion_local]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_SolicitudComentario', async (req, res) => {
  try {
    const {
      int_id_det_documento_recepcion_solicitud,
      str_comentario,
      int_id_documento_estado,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.put_documento_solicitudcomentario($1,$2,$3,$4,$5)', [int_id_det_documento_recepcion_solicitud, str_comentario, int_id_documento_estado, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
