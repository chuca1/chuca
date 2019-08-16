const Trabajo = require("../models/Trabajos");

exports.getAllTrabajos = (req, res, next) => {
  Trabajo.find()
    .then(trabajos => res.status(201).json({ trabajos }))
    .catch(err => res.status(500).json({ err }));
};
