const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Compras_CuentaBancaria', async (req, res) => {
  try {
    const {
      int_id_cat_empresa,
      str_nombre,
      str_nit,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_cuenta_bancaria.post_compras_cuentabancaria($1,$2,$3,$4)', [int_id_cat_empresa, str_nombre, str_nit, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_CuentaBancaria', async (req, res) => {
  try {
    const {
      int_id_cat_cuenta_bancaria,
      int_id_cat_empresa,
      str_nombre,
      str_nit,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_cuenta_bancaria.put_compras_cuentabancaria($1,$2,$3,$4,$5,$6)', [int_id_cat_cuenta_bancaria, int_id_cat_empresa, str_nombre, str_nit, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_CuentaBancaria', async (req, res) => {
  try {
    const {
      int_id_cat_cuenta_bancaria,
      int_id_cat_empresa,
      str_nombre_empresa,
      str_nombre_cuenta,
      str_nit,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_cuenta_bancaria.get_compras_cuentabancaria($1,$2,$3,$4,$5,$6)', [int_id_cat_cuenta_bancaria, int_id_cat_empresa, str_nombre_empresa, str_nombre_cuenta, str_nit, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
