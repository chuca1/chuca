const Logros = require("../models/Logros");

exports.getAllLogros = (req, res, next) => {
  Logros.find()
    .then(logros => res.status(201).json({ logros }))
    .catch(err => res.status(500).json({ err }));
};
