const { Schema, model } = require('mongoose');

const breedScheme = new Schema({
  name: { type: String, required: true },
  breed: { type: Array },
});

breedScheme.statics.toResponse = (breeds) => {
  const { breed } = breeds;
  return { breed };
};

module.exports = model('Breed', breedScheme);
