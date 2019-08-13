const { Schema, model } = require("mongoose");

const datosSchema = new Schema(
  {
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    imagen: {
      required: true,
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model("Datos", datosSchema);
