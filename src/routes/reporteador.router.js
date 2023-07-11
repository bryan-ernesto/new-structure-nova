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

router.post('/Get_Usuarios_Reporteador', async (req, res) => {
  try {
    const {
      str_usuario_nombre,
      str_username,
      int_empresa,
      int_departamento,
      int_equipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_empresas_reporteador($1,$2,$3,$4,$5);', [str_usuario_nombre, str_username, int_empresa, int_departamento, int_equipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/Get_Reporteador_RecepcionDocumento', async (req, res) => {
  try {
    const {
      int_id_empresa,
      id_estado,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_reporteador_recepciondocumento($1,$2);', [int_id_empresa, id_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Get_Empresas_Libro_Compras', async (req, res) => {
  try {
    const {
      str_clave,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_empresas_libro_compras($1);', [str_clave]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/Get_Reporte_Libro_Compras', async (req, res) => {
  try {
    const {
      int_numero_empresa,
      date_fecha_inicial,
      date_fecha_final,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_reporte_libro_compras($1,$2,$3);', [int_numero_empresa, date_fecha_inicial, date_fecha_final]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/Get_Reporte_Tickets', async (req, res) => {
  try {
    const {
      int_id_equipo,
      int_id_departamento,
      int_id_empresa,
      string_nombre_referencia,
      int_id_prioridad,
      int_estado_resolucion,
      int_id_proceso,
      int_id_cat_tipo,
      int_id_cat_canal,
      int_id_cat_seguimiento,
      int_id_cat_responsable,
      int_id_cat_solicitante,
      int_id_cat_creado_por,
      date_asignacion_inicio,
      date_asignacion_fin,
      date_resolucion_inicio,
      date_resolucion_fin,
      date_ultima_vista_inicio,
      date_ultima_vista_fin,
      date_vencimiento_inicio,
      date_vencimiento_fin,
      date_primera_respuesta_inicio,
      date_primera_respuesta_fin,
      date_creacion_inicio,
      date_creacion_fin,
      date_actualizacion_inicio,
      date_actualizacion_fin,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_reporte_tickets($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27);', [int_id_equipo, int_id_departamento, int_id_empresa, string_nombre_referencia, int_id_prioridad, int_estado_resolucion, int_id_proceso, int_id_cat_tipo, int_id_cat_canal, int_id_cat_seguimiento, int_id_cat_responsable, int_id_cat_solicitante, int_id_cat_creado_por, date_asignacion_inicio, date_asignacion_fin, date_resolucion_inicio, date_resolucion_fin, date_ultima_vista_inicio, date_ultima_vista_fin, date_vencimiento_inicio, date_vencimiento_fin, date_primera_respuesta_inicio, date_primera_respuesta_fin, date_creacion_inicio, date_creacion_fin, date_actualizacion_inicio, date_actualizacion_fin]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Post_Corpocredit_Callcenter_BusquedaLevantamiento', async (req, res) => {
  try {
    const {
      int_formulario_id,
      date_formulario_fecha_creacion,
      str_formulario_tipo_consulta,
      str_formulario_no_expediente,
      str_formulario_correo,
      str_sgc_cgrp_codigo,
      str_sgc_cges_codigo,
      str_sgc_cexp_codigo,
      str_sgc_cdeu_codigo,
      str_sgc_descripcion,
      date_sgc_cgrp_fecha,
      str_sgc_tipo_llamada,
      str_sgc_fecha_creacion,
      str_sgc_nombre_completo,
      str_sgc_nombres,
      str_sgc_apellidos,
      str_sgc_correo,
      str_sgc_expediente,
      str_sgc_id_documento,
      str_rpa_resutlado,
      str_rpa_comentario,
      date_rpa_fecha_procesado,
      int_estado,
      int_creado_por,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.post_corpocredit_callcenter_busquedalevantamiento($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24);', [int_formulario_id, date_formulario_fecha_creacion, str_formulario_tipo_consulta, str_formulario_no_expediente, str_formulario_correo, str_sgc_cgrp_codigo, str_sgc_cges_codigo, str_sgc_cexp_codigo, str_sgc_cdeu_codigo, str_sgc_descripcion, date_sgc_cgrp_fecha, str_sgc_tipo_llamada, str_sgc_fecha_creacion, str_sgc_nombre_completo, str_sgc_nombres, str_sgc_apellidos, str_sgc_correo, str_sgc_expediente, str_sgc_id_documento, str_rpa_resutlado, str_rpa_comentario, date_rpa_fecha_procesado, int_estado, int_creado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Get_Corpocredit_Callcenter_BusquedaLevantamiento', async (req, res) => {
  try {
    const {
      str_formulario_no_expediente,
      str_formulario_correo,
      str_sgc_cgrp_codigo,
      str_sgc_cdeu_codigo,
      str_sgc_nombre_completo,
      str_sgc_nombres,
      str_sgc_apellidos,
      str_sgc_correo,
      str_sgc_expediente,
      str_sgc_id_documento,
      int_estado,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_corpocredit_callcenter_busquedalevantamiento($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);', [str_formulario_no_expediente, str_formulario_correo, str_sgc_cgrp_codigo, str_sgc_cdeu_codigo, str_sgc_nombre_completo, str_sgc_nombres, str_sgc_apellidos, str_sgc_correo, str_sgc_expediente, str_sgc_id_documento, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/Put_Corpocredit_Callcenter_BusquedaLevantamiento', async (req, res) => {
  try {
    const {
      int_id_busqueda_levantamiento,
      str_rpa_resutlado,
      str_rpa_comentario,
      date_rpa_fecha_procesado,
      int_estado,
      int_actualizado_por,
    } = req.query;
    const response = await getConnGroupNova.query('SELECT * from reporteador.get_corpocredit_callcenter_busquedalevantamiento($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);', [int_id_busqueda_levantamiento, str_rpa_resutlado, str_rpa_comentario, date_rpa_fecha_procesado, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  router,
};
