const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/get_ticket_all', async (req, res) => {
  try {
    const {
      string_nombre_referencia,
      int_id_prioridad,
      int_estado_resolucion,
      int_id_proceso,
      int_id_cat_tipo,
      int_id_cat_canal,
      int_id_cat_equipo,
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
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_ticket_all($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)', [string_nombre_referencia, int_id_prioridad, int_estado_resolucion, int_id_proceso, int_id_cat_tipo, int_id_cat_canal, int_id_cat_equipo, int_id_cat_seguimiento, int_id_cat_responsable, int_id_cat_solicitante, int_id_cat_creado_por, date_asignacion_inicio, date_asignacion_fin, date_resolucion_inicio, date_resolucion_fin, date_ultima_vista_inicio, date_ultima_vista_fin, date_vencimiento_inicio, date_vencimiento_fin, date_primera_respuesta_inicio, date_primera_respuesta_fin, date_creacion_inicio, date_creacion_fin, date_actualizacion_inicio, date_actualizacion_fin]);

    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Set_Ticket', async (req, res) => {
  try {
    const {
      str_resumen,
      str_descripcion,
      int_id_cat_equipo,
      int_id_estado_proceso,
      int_estado_resolucion,
      int_id_responsable,
      int_id_solicitante,
      int_id_cat_proceso,
      int_id_ticket_canal,
      int_id_ticket_prioridad,
      int_estado,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT nova_ticket.add_ticket_primario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [str_resumen, str_descripcion, int_id_cat_equipo, int_id_estado_proceso, int_estado_resolucion, int_id_responsable, null, int_id_solicitante, int_id_cat_proceso, int_id_ticket_canal, int_id_ticket_prioridad, int_estado, int_creado_por, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Set_Subticket', async (req, res) => {
  try {
    const {
      str_resumen,
      str_descripcion,
      int_id_cat_equipo,
      int_id_estado_proceso,
      int_estado_resolucion,
      int_id_responsable,
      str_ref_ticket_padre,
      int_id_solicitante,
      int_id_cat_proceso,
      int_id_ticket_canal,
      int_id_ticket_prioridad,
      int_estado,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    await getConnGroupNova.query('SELECT * FROM nova_ticket.sp_set_subticket($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14);', [str_resumen, str_descripcion, int_id_cat_equipo, int_id_estado_proceso, int_estado_resolucion, int_id_responsable, str_ref_ticket_padre, int_id_solicitante, int_id_cat_proceso, int_id_ticket_canal, int_id_ticket_prioridad, int_estado, int_creado_por, int_actualizado_por]);

    res.send('SubTicket creado correctamente');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Get_ticket_por_usuario', async (req, res) => {
  // Get_ticket_por_usuario
  try {
    const { int_id_cat_tipo, int_creado_por } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_referencia_ticket_creado($1,$2);', [int_id_cat_tipo, int_creado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Tipo', async (req, res) => {
  try {
    const { str_nombre, int_creado_por } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_tipo($1,$2);', [str_nombre, int_creado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Tipo', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_tipo,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_tipo($1,$2,$3,$4);', [int_id_cat_ticket_tipo, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Tipo', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_tipo($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Prioridad', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_prioridad($1,$2);', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Prioridad', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_prioridad,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_prioridad($1,$2);', [int_id_cat_ticket_prioridad, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_DetalleAccion', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_id_cat_ticket_accion,
      str_antes,
      str_despues,
      str_campo,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_detalleaccion($1,$2,$3,$4,$5,$6,$7);', [int_id_bit_ticket, int_id_cat_usuario, int_id_cat_ticket_accion, str_antes, str_despues, str_campo, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_DetalleAccion', async (req, res) => {
  try {
    const {
      int_id_bit_ticket_detalle_accion,
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_id_cat_ticket_accion,
      str_antes,
      str_despues,
      str_campo,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_detalleaccion($1,$2,$3,$4,$5,$6,$7,$8,$9);', [int_id_bit_ticket_detalle_accion, int_id_bit_ticket, int_id_cat_usuario, int_id_cat_ticket_accion, str_antes, str_despues, str_campo, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Primario', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_cat_ticket_tipo,
      str_referencia,
      str_resumen,
      str_descripcion,
      int_id_cat_equipo,
      int_id_cat_ticket_estado_proceso,
      int_id_cat_ticket_estado_resolucion,
      str_referencia_ticket_padre,
      str_fecha_asignacion,
      str_fecha_resolucion,
      str_fecha_ultima_vista,
      str_fecha_primera_respuesta,
      str_fecha_vencimiento,
      int_usuario_responsable,
      int_usuario_solicitante,
      int_id_cat_proceso,
      int_id_cat_ticket_canal,
      int_id_cat_ticket_prioridad,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_detalleaccion($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21);', [int_id_bit_ticket, int_id_cat_ticket_tipo, str_referencia, str_resumen, str_descripcion, int_id_cat_equipo, int_id_cat_ticket_estado_proceso, int_id_cat_ticket_estado_resolucion, str_referencia_ticket_padre, str_fecha_asignacion, str_fecha_resolucion, str_fecha_ultima_vista, str_fecha_primera_respuesta, str_fecha_vencimiento, int_usuario_responsable, int_usuario_solicitante, int_id_cat_proceso, int_id_cat_ticket_canal, int_id_cat_ticket_prioridad, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_DetalleComentario', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_cat_usuario,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_detallecomentario($1,$2,$3,$4);', [int_id_bit_ticket, int_id_cat_usuario, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_DetalleComentario', async (req, res) => {
  try {
    const {
      int_id_bit_ticket_detalle_comentario,
      int_id_bit_ticket,
      int_id_cat_usuario,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_detallecomentario($1,$2,$3,$4,$5,$6);', [int_id_bit_ticket_detalle_comentario, int_id_bit_ticket, int_id_cat_usuario, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Seguimiento', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_seguimiento($1,$2,$3);', [int_id_bit_ticket, int_id_cat_usuario, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Seguimiento', async (req, res) => {
  try {
    const {
      int_id_bit_ticket_seguimiento,
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_seguimiento($1,$2,$3,$4,$5);', [int_id_bit_ticket_seguimiento, int_id_bit_ticket, int_id_cat_usuario, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Vista', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_vista($1,$2,$3);', [int_id_bit_ticket, int_id_cat_usuario, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Vista', async (req, res) => {
  try {
    const {
      int_id_bit_ticket_vista,
      int_id_bit_ticket,
      int_id_cat_usuario,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_vista($1,$2,$3,$4,$5);', [int_id_bit_ticket_vista, int_id_bit_ticket, int_id_cat_usuario, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_EstadoResolucion', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_estadoresolucion($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Canal', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_canal($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Prioridad', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_prioridad($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Proceso', async (req, res) => {
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

router.post('/Get_Ticket_EstadoProceso', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_estadoproceso($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_DetalleAccion', async (req, res) => {
  try {
    const {
      int_id_ticket,
      str_referencia,
      int_id_usuario,
      str_nombre_usuario,
      int_id_accion,
      str_nombre_accion,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_detalleaccion($1,$2,$3,$4,$5,$6,$7);', [int_id_ticket, str_referencia, int_id_usuario, str_nombre_usuario, int_id_accion, str_nombre_accion, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_DetalleComentario', async (req, res) => {
  try {
    const {
      int_id_ticket,
      str_referencia,
      int_id_usuario,
      str_nombre_usuario,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_detallecomentario($1,$2,$3,$4,$5);', [int_id_ticket, str_referencia, int_id_usuario, str_nombre_usuario, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Seguimiento', async (req, res) => {
  try {
    const {
      int_id_ticket,
      str_referencia,
      int_id_usuario,
      str_nombre_usuario,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_seguimiento($1,$2,$3,$4,$5);', [int_id_ticket, str_referencia, int_id_usuario, str_nombre_usuario, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Vista', async (req, res) => {
  try {
    const {
      int_id_ticket,
      str_referencia,
      int_id_usuario,
      str_nombre_usuario,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_vista($1,$2,$3,$4,$5);', [int_id_ticket, str_referencia, int_id_usuario, str_nombre_usuario, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Accion', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_accion($1,$2);', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_EstadoResolucion', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_estado_resolucion($1,$2,$3);', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_EstadoResolucion', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_estado_resolucion,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_estadoresolucion($1,$2,$3,$4,$5);', [int_id_cat_ticket_estado_resolucion, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Canal', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_canal($1,$2);', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Canal', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_canal,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_canal($1,$2,$3,$4);', [int_id_cat_ticket_canal, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_EstadoProceso', async (req, res) => {
  try {
    const {
      str_nombre,
      str_descripcion,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_estadoproceso($1,$2,$3);', [str_nombre, str_descripcion, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_EstadoProceso', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_estado_proceso,
      str_nombre,
      str_descripcion,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_estadoproceso($1,$2,$3,$4,$5);', [int_id_cat_ticket_estado_proceso, str_nombre, str_descripcion, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Accion', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_accion($1,$2);', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Put_Ticket_Accion', async (req, res) => {
  try {
    const {
      int_id_cat_ticket_accion,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_accion($1,$2,$3,$4);', [int_id_cat_ticket_accion, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.delete('/Delete_Ticket_Seguimiento', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from delete_ticket_seguimiento_v2($1);', [int_id_bit_ticket]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Usuario', async (req, res) => {
  try {
    const {
      int_id_cat_usuario,
      str_correo_usuario,
      str_username,
      str_usuario_nombre,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_usuario($1,$2,$3,$4);', [int_id_cat_usuario, str_correo_usuario, str_username, str_usuario_nombre]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Ticket_Adjunto', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      int_id_sharepoint,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.post_ticket_adjunto($1,$2,$3);', [int_id_bit_ticket, int_id_sharepoint, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Ticket_Adjunto', async (req, res) => {
  try {
    const {
      int_id_bit_ticket_adjunto,
      int_id_bit_ticket,
      int_id_sharepoint,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.put_ticket_adjunto($1,$2,$3,$4,$5);', [int_id_bit_ticket_adjunto, int_id_bit_ticket, int_id_sharepoint, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Ticket_Adjunto', async (req, res) => {
  try {
    const {
      int_id_bit_ticket,
      str_ticket_referencia,
      int_id_sharepoint,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_ticket_adjunto($1,$2,$3,$4);', [int_id_bit_ticket, str_ticket_referencia, int_id_sharepoint, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
