const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  clientId: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  kindOfAnimal: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  chipNumber: { type: String, required: false },
  gender: { type: String, required: true },
  weightAnimal: { type: Number, required: false },
  description: { type: String, required: false },
});

petSchema.statics.toResponse = (pet) => {
  const {
    _id,
    clientId,
    name,
    age,
    kindOfAnimal,
    breed,
    color,
    chipNumber,
    sex,
    weightAnimal,
  } = pet;
  return {
    _id,
    clientId,
    name,
    age,
    kindOfAnimal,
    breed,
    color,
    chipNumber,
    sex,
    weightAnimal,
  };
};

module.exports = model('Pet', petSchema);
