const { Schema, model } = require("mongoose");

const trabajosSchema = new Schema(
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
    },
    date: {
      required: true,
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model("Trabajos", trabajosSchema);
