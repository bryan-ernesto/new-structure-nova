const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Compras_Producto', async (req, res) => {
  try {
    const {
      int_id_cat_usuario,
      int_id_cat_producto_categoria,
      int_id_cat_producto_unidad_medida,
      int_id_cat_proveedor,
      str_nombre,
      str_descripcion,
      numeric_precio_compra,
      numeric_precio_venta,
      numeric_cantidad,
      int_cantidad_minima,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.post_compras_producto($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [int_id_cat_usuario, int_id_cat_producto_categoria, int_id_cat_producto_unidad_medida, int_id_cat_proveedor, str_nombre, str_descripcion, numeric_precio_compra, numeric_precio_venta, numeric_cantidad, int_cantidad_minima, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_Producto', async (req, res) => {
  try {
    const {
      int_id_cat_producto,
      int_id_cat_usuario,
      int_id_cat_producto_categoria,
      int_id_cat_producto_unidad_medida,
      int_id_cat_proveedor,
      str_nombre,
      str_descripcion,
      numeric_precio_compra,
      numeric_precio_venta,
      numeric_cantidad,
      int_cantidad_minima,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.put_compras_producto($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [int_id_cat_producto, int_id_cat_usuario, int_id_cat_producto_categoria, int_id_cat_producto_unidad_medida, int_id_cat_proveedor, str_nombre, str_descripcion, numeric_precio_compra, numeric_precio_venta, numeric_cantidad, int_cantidad_minima, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_ProductoCategoria', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.post_compras_productocategoria($1,$2)', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_ProductoCategoria', async (req, res) => {
  try {
    const {
      int_cat_producto_categoria,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.put_compras_productocategoria($1,$2,$3,$4)', [int_cat_producto_categoria, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Compras_ProductoUnidadMedida', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.post_compras_productounidadmedida($1,$2)', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Compras_ProductoUnidadMedida', async (req, res) => {
  try {
    const {
      int_id_cat_producto_unidad_medida,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.put_compras_productounidadmedida($1,$2)', [int_id_cat_producto_unidad_medida, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_Producto', async (req, res) => {
  try {
    const {
      int_id_producto,
      str_nombre_producto,
      str_descripcion_producto,
      numeric_precio_compra_producto,
      numeric_precio_venta_producto,
      numeric_cantidad_producto,
      int_cantidad_minima_producto,
      int_id_categoria,
      str_nombre_categoria,
      int_unidad_medida_producto,
      str_nombre_unidad_medida_producto,
      int_id_proveedor,
      str_nombre_proveedor,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.put_compras_productounidadmedida($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [int_id_producto, str_nombre_producto, str_descripcion_producto, numeric_precio_compra_producto, numeric_precio_venta_producto, numeric_cantidad_producto, int_cantidad_minima_producto, int_id_categoria, str_nombre_categoria, int_unidad_medida_producto, str_nombre_unidad_medida_producto, int_id_proveedor, str_nombre_proveedor, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_ProductoCategoria', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.get_compras_productocategoria($1,$2)', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Compras_ProductoUnidadMedida', async (req, res) => {
  try {
    const {
      str_nombre,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM compras_producto.get_compras_productounidadmedida($1,$2)', [str_nombre, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
