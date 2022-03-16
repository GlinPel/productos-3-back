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

// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
