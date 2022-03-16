const ProductoController = require("../controllers/producto.controller");

module.exports = app => {
  app.get("/api/productos", ProductoController.findAllProductos);
  app.get("/api/productos/:id", ProductoController.findOneSingleProducto);
  // app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/productos/new", ProductoController.createNewProducto);
  // app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};