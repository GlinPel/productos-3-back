const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
	title: String,
	price: Number,
	description: String
});

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;