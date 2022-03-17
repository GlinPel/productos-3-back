const Producto = require("../models/producto.model");

module.exports.findAllProductos = (req, res) => {
  Producto.find()
    .then( productos => res.json({ productos }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProducto = (req, res) => {
	Producto.findOne({ _id: req.params.id })
		.then( producto => res.json({ producto }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProducto = (req, res) => {
  Producto.create(req.body)
    .then( productoCreated => res.json({ producto: productoCreated }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProducto = (req, res) => {
  Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( producto => res.json({ producto }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProducto = (req, res) => {
  Producto.deleteOne({ _id: req.params.id })
    .then( producto  => res.json({ producto }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
