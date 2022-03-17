const ProductoController = require("../controllers/producto.controller");

module.exports = app => {
  app.get("/api/productos", ProductoController.findAllProductos);
  app.get("/api/productos/:id", ProductoController.findOneSingleProducto);
  app.put("/api/productos/update/:id", ProductoController.updateExistingProducto);
  app.post("/api/productos/new", ProductoController.createNewProducto);
  app.delete("/api/productos/delete/:id", ProductoController.deleteAnExistingProducto);
};