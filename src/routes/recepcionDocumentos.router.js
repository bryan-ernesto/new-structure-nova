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
      str_nit,
      str_proveedor,
      numeric_monto,
      int_id_moneda,
      str_descripcion,
      int_id_pais,
      int_estado,
      int_cuenta_contable_sugerida,
      int_centro_costo,
      str_nombre_cuenta_sugerida,
      int_codigo_proveedor,
      str_nombre_proveedor,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM recepciones_documento.get_documento_detallefacturasat($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [str_empresa, int_dte, str_nit, str_proveedor, numeric_monto, int_id_moneda, str_descripcion, int_id_pais, int_estado, int_cuenta_contable_sugerida, int_centro_costo, str_nombre_cuenta_sugerida, int_codigo_proveedor, str_nombre_proveedor]);
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
    const result = await getConnCuenta.query(`SELECT DISTINCT(TRIM(CUENTA.CLAVE)) AS CLAVE, TRIM(CUENTA.EMPRESA) AS EMPRESA, TRIM(CUENTA.NOMBRE) AS NOMBRE, CUENTA.ESTATUS
    FROM CGO_CXP AS Cargo
    LEFT JOIN EMPRESA AS Empresa ON Cargo.EMPRESA  = Empresa.NUMERO
    LEFT JOIN CONTCCXP AS Conta ON Cargo.NUMERO_INTERNO = Conta.NUMERO_CGO_CXP
    LEFT JOIN CUENTA AS Cuenta ON Conta.CUENTA_CONTABLE = Cuenta.CLAVE
    WHERE (CUENTA.EMPRESA LIKE '${str_empresa}' OR '${str_empresa}' = '')
    AND CUENTA.SUMARIA_O_MOVTO = 'M'
    AND (Conta.CUENTA_CONTABLE NOT IN ('2131', '1142', '1105050001','1105050002','1105100001','1110050010','1110050011','1110050012','1110050013','1330100001','1330100002','1355150002','1355950002','1365050001','2335250001','2335250002','2365050101','2365250001','2365500001','2368010001','2370010001','2370250001','2408900001','2505050001','2505050099','1113111','1113121','1141','1161','2111','2126','2221','110201','110202','110301','110302','110401','210101','210103','210203','210204','11121','11122','1131','2111','2134','2221','1113111','1141','1148','1154','1161','2111','2132','2221','1113112','1113114','111321','111324','1141','1153','1154','1161','2111','2112','2121','2123','2132','2135','2136','2141','2143','2211','2221','1141','2111','2132','1113111','1113112','1113115','1113119','1113121','1113122','1113123','1113125','1113126','1113127','1113128','1141','1148','1154','1158','1160','1161','2111','2126','21310','2132','2137','2139','2221','111122','111127','1113113','1113115','1113116','1113117','111314','111315','112111','1141','1153','1154','1161','1163','1164','1165','1166','22753','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2141','2143','2144','2220','2221','22217','22219','22221','22224','22233','22234','2227','2232','22338','22339','2234','22354','22356','2236','22360','2237','22372','22376','2238','22391','22399','22404','22411','22414','22416','22419','22425','22426','22428','22431','22436','2244','22442','22444','22448','22453','22456','22457','22459','22460','22461','2247','2254','2262','2263','22646','22647','22652','22659','22662','2267','22672','22675','22676','22682','22683','22684','22685','22688','22690','22706','22709','22712','22714','22716','22719','22720','22721','22724','22726','22727','22728','22730','22732','22733','22734','22738','22739','22740','22741','22742','22743','22744','22746','22747','22748','22749','22750','22751','22752','22754','22755','22756','22757','22758','22759','22760','22761','22762','22763','22764','22765','22766','22767','22768','22769','22770','22773','22774','2282','2290','2297','2298','2300','2313','2327','2342','2343','2354','2376','2387','2392','2406','2430','2432','2435','2455','2458','2460','2464','2470','2475','2489','2503','2518','2520','2531','2544','2547','2549','2557','2558','2563','2565','2581','2582','11050102','11050201','11050202','11050203','11100101','11100102','11100103','11100104','11100201','11100202','13011305','13012065','17010501','17013501','19200101','22010501','22010502','22011001','22013001','22013102','22013103','22013201','23010501','23011001','24010501','24010502','24010503','24010504','24011001','24016001','27010101','1113122','1113123','1141','1153','2111','2126','2221','2227','1113112','1113121','111313','1141','1161','1163','1165','1166','1170','2111','2126','2132','2221','2229','2232','1113112','1113116','1141','1153','1154','1161','1167','2111','2121','2123','2126','21311','21313','2132','2133','2135','2136','2141','2143','2144','2221','2227','1113111','1161','2221','1113111','2221','1110050101','1110050102','1110050103','13300501','13301502','13309502','13550504','13659515','22050101','23352501','23650501','23654001','23700501','23700502','23709502','24089501','25050101','26101505','26102005','11100501','11100502','13351505','13551705','22050505','23709510','23709515','24040510','24080505','25050505','25050508','1113111','11216','1141','1154','11714','2111','2132','2221','1113111','1148','2221','1113112','1141','2111','2132','2221','1113112','1141','1153','1161','2111','2121','2123','2126','21311','21313','2132','2135','2136','2141','2143','2144','2221','1113120','1141','1161','2111','2221','1113120','1141','1160','1161','2111','2126','2221','1113113','1113121','1141','1154','1160','1161','1163','1164','1165','2111','2121','2123','2126','21311','2132','2133','2135','2136','2141','2143','2214','2221','2224','1113114','1113116','1113117','1113118','1113119','1113121','1141','1148','1154','1158','1160','1161','1162','1163','1164','2111','2126','2132','22116','2221','2224','1113127','1141','2111','2221','11100502000000','13559507000000','22050100000000','1120001000','1201001000','1215001000','2110004000','1113111','1141','2111','2126','2221','1113111','1113121','1141','1154','2111','2133','2221','1113121','1113122','2111','2221','1113112','1113113','1113115','1141','1161','2111','2121','2123','2126','21311','2132','2135','2136','2141','2143','2221','110202','110302','110401','210101','1113111','1141','1154','2111','2121','2123','2132','2135','2136','2141','2142','2143','2144','2221','1113112','1113113','1113115','1113116','1113117','1113118','1113122','1141','1148','1154','1160','1161','1187','1188','1413','1415','1416','1418','1419','2111','2126','21311','2132','2137','22114','22116','2221','1141','2111','111121','1112120','1113112','1113124','11219','1141','1152','1154','1161','2111','2121','2123','2126','21311','2132','2133','2135','2136','2141','2143','2221','2222','2223','1113124','1141','1154','2111','2126','2221','1113124','2121','2123','2133','2135','2136','2221','110510003','111001001','111001002','111010002','133005001','135501002','135501003','220501001','221001001','233545002','236701006','1141','2111','2132','1113112','1113113','1113114','1141','1148','1154','2111','2132','2221','2223','2224','2225','1141','2111','1113112','2135','2136','2221','111201','111202','112202','113101','211101','211102','212101','212103','212104','212105','212107','213104','213106','1113121','1141','2111','2132','11050505','11051001','11100501','11100502','11101001','11101002','131005','13300505','13351505','13551705','22050505','2210050505','23709510','24040510','24040515','25050505','25050508','25151505','1141','2111','111126','1113115','1113116','1113117','111314','111315','1141','1153','1154','1161','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2140','2141','2143','2144','2221','2228','2233','1113111','1141','1153','1154','1161','1185','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2141','2143','2144','2221','1113111','1113121','1141','1159','1163','1164','1165','12124','1412','2111','2137','2221','2224','2225','112101','112201','113102','113107','114101','210102','210103','210106','210303','210401','210501','110510001','111005001','111005002','111505001','111505002','131005001','131510001','133005001','170505001','220505001','221005003','231005001','231010001','250505001','250515001','250515002','250515003','250515004','250515005','250515006','261005001','261010001','261030001','261035001','271005001','272005001','272005002','272505001','1113114','1113117','1113118','111314','1141','1153','1161','1166','2111','2121','2123','2126','21310','21311','21313','2132','2133','2135','2136','2139','2141','2143','2144','2221','1113112','1113113','1141','1153','1161','1165','2111','2121','2123','2126','21311','21313','2135','2136','2141','2143','2144','2221','1113113','1141','2111','2221','1111252','1111253','1111255','1113115','1113117','1113118','1113124','1113125','1113126','1141','1154','1161','1163','1164','1165','1173','1174','1175','1187','1193','1194','1195','1197','1434','1435','1436','1437','1438','1439','2111','2218','2221','2242','1113111','111314','1141','1154','1164','1165','1166','1169','2111','2126','2221','2229','2588','1113111','1113113','111315','1141','1154','1161','1169','2111','2126','21310','2132','2139','2221','2470','2587','2594','2599','2600','1113111','2221','111124','1113128','1113132','1113133','112111','1141','1153','1154','1161','1186','2111','2121','2123','2125','2126','21310','21311','21313','2132','2133','2135','2136','2139','2141','2142','2143','2144','2221','2222236','110101','11010201','11010202','11010301','11030202','11030203','110320','110321','2101','210101','210302','210304','210401','210402','210403','210404','21040502','21040503','21040504','1113111','1113113','1141','1153','1154','1158','1161','1411','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2140','2141','2143','2144','2221','2233','2234','1113111','1141','1153','1161','2111','2121','2123','2126','21311','21313','2132','2135','2136','2141','2143','2144','2221','1113111','1113112','1113201','1141','1154','1161','2111','2114','2130','21310','2139','2221','1113111','2221','1113112','1113116','1141','1154','1161','2111','2126','2132', '2221'))
    `);
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
    AND (Conta.CUENTA_CONTABLE NOT IN ('1105050001','1105050002','1105100001','1110050010','1110050011','1110050012','1110050013','1330100001','1330100002','1355150002','1355950002','1365050001','2335250001','2335250002','2365050101','2365250001','2365500001','2368010001','2370010001','2370250001','2408900001','2505050001','2505050099','1113111','1113121','1141','1161','2111','2126','2221','110201','110202','110301','110302','110401','210101','210103','210203','210204','11121','11122','1131','2111','2134','2221','1113111','1141','1148','1154','1161','2111','2132','2221','1113112','1113114','111321','111324','1141','1153','1154','1161','2111','2112','2121','2123','2132','2135','2136','2141','2143','2211','2221','1141','2111','2132','1113111','1113112','1113115','1113119','1113121','1113122','1113123','1113125','1113126','1113127','1113128','1141','1148','1154','1158','1160','1161','2111','2126','21310','2132','2137','2139','2221','111122','111127','1113113','1113115','1113116','1113117','111314','111315','112111','1141','1153','1154','1161','1163','1164','1165','1166','22753','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2141','2143','2144','2220','2221','22217','22219','22221','22224','22233','22234','2227','2232','22338','22339','2234','22354','22356','2236','22360','2237','22372','22376','2238','22391','22399','22404','22411','22414','22416','22419','22425','22426','22428','22431','22436','2244','22442','22444','22448','22453','22456','22457','22459','22460','22461','2247','2254','2262','2263','22646','22647','22652','22659','22662','2267','22672','22675','22676','22682','22683','22684','22685','22688','22690','22706','22709','22712','22714','22716','22719','22720','22721','22724','22726','22727','22728','22730','22732','22733','22734','22738','22739','22740','22741','22742','22743','22744','22746','22747','22748','22749','22750','22751','22752','22754','22755','22756','22757','22758','22759','22760','22761','22762','22763','22764','22765','22766','22767','22768','22769','22770','22773','22774','2282','2290','2297','2298','2300','2313','2327','2342','2343','2354','2376','2387','2392','2406','2430','2432','2435','2455','2458','2460','2464','2470','2475','2489','2503','2518','2520','2531','2544','2547','2549','2557','2558','2563','2565','2581','2582','11050102','11050201','11050202','11050203','11100101','11100102','11100103','11100104','11100201','11100202','13011305','13012065','17010501','17013501','19200101','22010501','22010502','22011001','22013001','22013102','22013103','22013201','23010501','23011001','24010501','24010502','24010503','24010504','24011001','24016001','27010101','1113122','1113123','1141','1153','2111','2126','2221','2227','1113112','1113121','111313','1141','1161','1163','1165','1166','1170','2111','2126','2132','2221','2229','2232','1113112','1113116','1141','1153','1154','1161','1167','2111','2121','2123','2126','21311','21313','2132','2133','2135','2136','2141','2143','2144','2221','2227','1113111','1161','2221','1113111','2221','1110050101','1110050102','1110050103','13300501','13301502','13309502','13550504','13659515','22050101','23352501','23650501','23654001','23700501','23700502','23709502','24089501','25050101','26101505','26102005','11100501','11100502','13351505','13551705','22050505','23709510','23709515','24040510','24080505','25050505','25050508','1113111','11216','1141','1154','11714','2111','2132','2221','1113111','1148','2221','1113112','1141','2111','2132','2221','1113112','1141','1153','1161','2111','2121','2123','2126','21311','21313','2132','2135','2136','2141','2143','2144','2221','1113120','1141','1161','2111','2221','1113120','1141','1160','1161','2111','2126','2221','1113113','1113121','1141','1154','1160','1161','1163','1164','1165','2111','2121','2123','2126','21311','2132','2133','2135','2136','2141','2143','2214','2221','2224','1113114','1113116','1113117','1113118','1113119','1113121','1141','1148','1154','1158','1160','1161','1162','1163','1164','2111','2126','2132','22116','2221','2224','1113127','1141','2111','2221','11100502000000','13559507000000','22050100000000','1120001000','1201001000','1215001000','2110004000','1113111','1141','2111','2126','2221','1113111','1113121','1141','1154','2111','2133','2221','1113121','1113122','2111','2221','1113112','1113113','1113115','1141','1161','2111','2121','2123','2126','21311','2132','2135','2136','2141','2143','2221','110202','110302','110401','210101','1113111','1141','1154','2111','2121','2123','2132','2135','2136','2141','2142','2143','2144','2221','1113112','1113113','1113115','1113116','1113117','1113118','1113122','1141','1148','1154','1160','1161','1187','1188','1413','1415','1416','1418','1419','2111','2126','21311','2132','2137','22114','22116','2221','1141','2111','111121','1112120','1113112','1113124','11219','1141','1152','1154','1161','2111','2121','2123','2126','21311','2132','2133','2135','2136','2141','2143','2221','2222','2223','1113124','1141','1154','2111','2126','2221','1113124','2121','2123','2133','2135','2136','2221','110510003','111001001','111001002','111010002','133005001','135501002','135501003','220501001','221001001','233545002','236701006','1141','2111','2132','1113112','1113113','1113114','1141','1148','1154','2111','2132','2221','2223','2224','2225','1141','2111','1113112','2135','2136','2221','111201','111202','112202','113101','211101','211102','212101','212103','212104','212105','212107','213104','213106','1113121','1141','2111','2132','11050505','11051001','11100501','11100502','11101001','11101002','131005','13300505','13351505','13551705','22050505','2210050505','23709510','24040510','24040515','25050505','25050508','25151505','1141','2111','111126','1113115','1113116','1113117','111314','111315','1141','1153','1154','1161','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2140','2141','2143','2144','2221','2228','2233','1113111','1141','1153','1154','1161','1185','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2141','2143','2144','2221','1113111','1113121','1141','1159','1163','1164','1165','12124','1412','2111','2137','2221','2224','2225','112101','112201','113102','113107','114101','210102','210103','210106','210303','210401','210501','110510001','111005001','111005002','111505001','111505002','131005001','131510001','133005001','170505001','220505001','221005003','231005001','231010001','250505001','250515001','250515002','250515003','250515004','250515005','250515006','261005001','261010001','261030001','261035001','271005001','272005001','272005002','272505001','1113114','1113117','1113118','111314','1141','1153','1161','1166','2111','2121','2123','2126','21310','21311','21313','2132','2133','2135','2136','2139','2141','2143','2144','2221','1113112','1113113','1141','1153','1161','1165','2111','2121','2123','2126','21311','21313','2135','2136','2141','2143','2144','2221','1113113','1141','2111','2221','1111252','1111253','1111255','1113115','1113117','1113118','1113124','1113125','1113126','1141','1154','1161','1163','1164','1165','1173','1174','1175','1187','1193','1194','1195','1197','1434','1435','1436','1437','1438','1439','2111','2218','2221','2242','1113111','111314','1141','1154','1164','1165','1166','1169','2111','2126','2221','2229','2588','1113111','1113113','111315','1141','1154','1161','1169','2111','2126','21310','2132','2139','2221','2470','2587','2594','2599','2600','1113111','2221','111124','1113128','1113132','1113133','112111','1141','1153','1154','1161','1186','2111','2121','2123','2125','2126','21310','21311','21313','2132','2133','2135','2136','2139','2141','2142','2143','2144','2221','2222236','110101','11010201','11010202','11010301','11030202','11030203','110320','110321','2101','210101','210302','210304','210401','210402','210403','210404','21040502','21040503','21040504','1113111','1113113','1141','1153','1154','1158','1161','1411','2111','2121','2123','2126','21310','21311','21313','2132','2135','2136','2139','2140','2141','2143','2144','2221','2233','2234','1113111','1141','1153','1161','2111','2121','2123','2126','21311','21313','2132','2135','2136','2141','2143','2144','2221','1113111','1113112','1113201','1141','1154','1161','2111','2114','2130','21310','2139','2221','1113111','2221','1113112','1113116','1141','1154','1161','2111','2126','2132', '2221'))
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
      CODIGO_PROVEEDOR: row.CODIGO_PROVEEDOR,
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
