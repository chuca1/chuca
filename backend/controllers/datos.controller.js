const Datos = require("../models/Datos");

exports.getAllDatos = (req, res, next) => {
  Datos.find()
    .then(datos => res.status(201).json({ datos }))
    .catch(err => res.status(501).json({ err }));
};
