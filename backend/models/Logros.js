const { Schema, model } = require("mongoose");

const logroSchema = new Schema(
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
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Logros", logroSchema);
